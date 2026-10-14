// web/report.ts
import { createHash } from "node:crypto";
import { readFileSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { homedir, tmpdir } from "node:os";
import { join } from "node:path";

// hooks/describe.ts
var ACTS = {
  Read: "read",
  NotebookRead: "read",
  LSP: "read",
  TaskGet: "read",
  TaskList: "read",
  GetTask: "read",
  ListMcpResourcesTool: "read",
  ReadMcpResourceTool: "read",
  ReadMcpResourceDirTool: "read",
  Grep: "search",
  Glob: "search",
  LS: "search",
  ToolSearch: "search",
  Edit: "write",
  MultiEdit: "write",
  Write: "write",
  NotebookEdit: "write",
  Bash: "run",
  PowerShell: "run",
  Monitor: "run",
  BashOutput: "run",
  KillShell: "run",
  TaskStop: "run",
  WebFetch: "web",
  WebSearch: "web",
  Agent: "delegate",
  Task: "delegate",
  Workflow: "delegate",
  SendMessage: "delegate",
  TodoWrite: "plan",
  TaskCreate: "plan",
  TaskUpdate: "plan",
  EnterPlanMode: "plan",
  Skill: "plan",
  AskUserQuestion: "ask",
  ExitPlanMode: "ask"
};
function actOf(tool) {
  return (Object.hasOwn(ACTS, tool) ? ACTS[tool] : undefined) ?? "tool";
}
var SEARCHES = new Set([
  "grep",
  "egrep",
  "fgrep",
  "rg",
  "ag",
  "ack",
  "ugrep",
  "find",
  "fd",
  "fdfind",
  "bfs",
  "locate",
  "ls",
  "tree",
  "select-string",
  "get-childitem",
  "gci",
  "dir"
]);
var READS = new Set([
  "cat",
  "head",
  "tail",
  "less",
  "more",
  "bat",
  "wc",
  "nl",
  "stat",
  "file",
  "get-content",
  "gc",
  "type"
]);
var FETCHES = new Set(["curl", "wget", "invoke-webrequest", "iwr", "invoke-restmethod", "irm"]);
var SCENE = new Set(["cd", "pushd", "popd", "export", "set", "source", ".", "true", ":"]);
var WRAPPERS = new Set(["sudo", "time", "nohup", "command", "exec"]);
function shellAct(command) {
  for (const part of command.split(/&&|\|\||[;|\n]/)) {
    const rest = pastAssignments(tidy(part));
    if (rest === undefined)
      return "run";
    const words = rest.split(" ").filter((word) => word !== "");
    let at = 0;
    while (WRAPPERS.has(words[at] ?? "")) {
      at += 1;
      while (words[at]?.startsWith("-") === true)
        at += 1;
    }
    const word = words[at];
    if (word === undefined)
      continue;
    const name = (word.split(/[\\/]/).pop() ?? word).toLowerCase();
    if (SCENE.has(name))
      continue;
    if (SEARCHES.has(name))
      return "search";
    if (READS.has(name))
      return "read";
    if (FETCHES.has(name))
      return "web";
    return "run";
  }
  return "run";
}
function actOfCall(tool, input) {
  if (tool !== "Bash" && tool !== "PowerShell")
    return actOf(tool);
  const command = input["command"];
  return typeof command === "string" ? shellAct(command) : "run";
}
function tidy(text) {
  let out = "";
  let isGap = false;
  for (const char of text) {
    const code = char.codePointAt(0) ?? 0;
    if (isUnseen(code))
      continue;
    const isBlank = code <= 32 || code === 127 || code >= 128 && code <= 159 || code === 8232 || code === 8233;
    if (isBlank) {
      isGap = out.length > 0;
      continue;
    }
    if (isGap)
      out += " ";
    isGap = false;
    out += char;
  }
  return out;
}
function isUnseen(code) {
  return code === 8206 || code === 8207 || code >= 8234 && code <= 8238 || code >= 8294 && code <= 8297 || code === 65279 || code >= 55296 && code <= 57343 || code >= 64976 && code <= 65007 || (code & 65534) === 65534 || code >= 983040;
}
function widthOf(text) {
  let width = 0;
  for (const char of text)
    width += isWide(char.codePointAt(0) ?? 0) ? 2 : 1;
  return width;
}
function isWide(code) {
  return code >= 4352 && code <= 4447 || code >= 11904 && code <= 42191 || code >= 44032 && code <= 55203 || code >= 63744 && code <= 64255 || code >= 65072 && code <= 65103 || code >= 65280 && code <= 65376 || code >= 65504 && code <= 65510 || code >= 127744 && code <= 129791 || code >= 131072 && code <= 262141;
}
function clip(text, max) {
  if (widthOf(text) <= max)
    return text;
  let out = "";
  let width = 0;
  for (const char of text) {
    const step = isWide(char.codePointAt(0) ?? 0) ? 2 : 1;
    if (width + step > max - 1)
      break;
    out += char;
    width += step;
  }
  return out.trimEnd() + "…";
}
function shortPath(path) {
  const parts = tidy(path).split(/[\\/]+/).filter((part) => part !== "");
  const last = parts[parts.length - 1];
  if (last === undefined)
    return "";
  const folder = parts[parts.length - 2];
  if (folder !== undefined && widthOf(folder) + widthOf(last) <= 26)
    return `${folder}/${last}`;
  return clip(last, 40);
}
function folderName(path) {
  const parts = tidy(path).split(/[\\/]+/).filter((part) => part !== "");
  return clip(parts[parts.length - 1] ?? "", 40);
}
function hostOf(url) {
  const text = tidy(url);
  if (!URL.canParse(text))
    return "";
  return clip(new URL(text).hostname.replace(/^www\./, ""), 40);
}
var PROGRAM = /^[A-Za-z0-9_.+-]{1,24}$/;
var SUBCOMMAND = /^[a-z][a-z0-9:_-]{0,19}$/;
var WITH_SUBCOMMAND = new Set([
  "git",
  "gh",
  "npm",
  "npx",
  "pnpm",
  "yarn",
  "bun",
  "deno",
  "cargo",
  "rustup",
  "go",
  "pip",
  "pip3",
  "uv",
  "poetry",
  "conda",
  "docker",
  "kubectl",
  "helm",
  "terraform",
  "brew",
  "apt",
  "apt-get",
  "dotnet",
  "gradle",
  "mvn",
  "swift",
  "flutter",
  "composer",
  "bundle",
  "rake",
  "turbo",
  "nx"
]);
var PLAIN_VALUE = /^[A-Za-z0-9_.,:/@%+=~-]$/;
function pastAssignments(line) {
  let at = 0;
  for (;; ) {
    while (line[at] === " ")
      at += 1;
    const name = /^[A-Za-z_][A-Za-z0-9_]*=/.exec(line.slice(at));
    if (name === null)
      return line.slice(at);
    at += name[0].length;
    while (at < line.length && line[at] !== " ") {
      const char = line[at] ?? "";
      if (char === "'") {
        const close = line.indexOf("'", at + 1);
        if (close < 0)
          return;
        at = close + 1;
      } else if (char === '"') {
        const close = line.indexOf('"', at + 1);
        if (close < 0 || /[$`\\]/.test(line.slice(at + 1, close)))
          return;
        at = close + 1;
      } else if (PLAIN_VALUE.test(char)) {
        at += 1;
      } else {
        return;
      }
    }
  }
}
function safeCommand(command) {
  const rest = pastAssignments(tidy(command));
  if (rest === undefined)
    return "";
  const words = rest.split(" ").filter((word) => word !== "");
  const program = words[0];
  if (program === undefined)
    return "";
  const name = program.split("/").pop() ?? program;
  if (!PROGRAM.test(name) || looksSecret(name))
    return "";
  const after = words[1];
  if (after === undefined)
    return name;
  if (!WITH_SUBCOMMAND.has(name) || !SUBCOMMAND.test(after))
    return `${name} …`;
  return words.length <= 2 ? `${name} ${after}` : `${name} ${after} …`;
}
var KEY_PREFIX = /(?:^|[^A-Za-z0-9])(?:sk-|rk-|ghp_|gho_|ghu_|ghs_|ghr_|github_pat_|glpat-|xox[abprs]-|AKIA|ASIA|AIza|ya29\.|eyJ[A-Za-z0-9_-]{8})|-----BEGIN/;
function looksSecret(text) {
  if (KEY_PREFIX.test(text))
    return true;
  for (const run of text.match(/[A-Za-z0-9_+=-]{20,}/g) ?? []) {
    const digits = run.replace(/[^0-9]/g, "").length;
    const letters = run.replace(/[^A-Za-z]/g, "").length;
    if (digits >= 4 && letters >= 4)
      return true;
  }
  return false;
}
function plain(text, max) {
  return looksSecret(text) ? "" : clip(text, max);
}
function label(text, max) {
  return plain(tidy(text), max);
}
function text(input, key) {
  const value = input[key];
  return typeof value === "string" ? tidy(value) : "";
}
function targetOf(tool, input) {
  switch (tool) {
    case "Read":
    case "Edit":
    case "MultiEdit":
    case "Write":
    case "NotebookRead":
      return plain(shortPath(text(input, "file_path")), 40);
    case "NotebookEdit":
      return plain(shortPath(text(input, "notebook_path")), 40);
    case "LSP":
      return plain(shortPath(text(input, "filePath")), 40);
    case "LS":
      return plain(shortPath(text(input, "path")), 40);
    case "Grep":
    case "Glob":
      return plain(text(input, "pattern"), 30);
    case "Bash":
    case "PowerShell":
    case "Monitor":
      return plain(text(input, "description"), 40) || safeCommand(text(input, "command"));
    case "WebFetch":
      return hostOf(text(input, "url"));
    case "WebSearch":
    case "ToolSearch":
      return plain(text(input, "query"), 34);
    case "Agent":
    case "Task":
      return plain(text(input, "description") || text(input, "subagent_type"), 40);
    case "Workflow":
      return plain(text(input, "title") || text(input, "name") || text(input, "description"), 40);
    case "Skill":
      return plain(text(input, "skill"), 30);
    case "SendMessage":
      return plain(text(input, "to"), 24);
    case "TaskCreate":
    case "TaskUpdate":
      return plain(text(input, "subject"), 36);
    case "AskUserQuestion": {
      const questions = input["questions"];
      const first = Array.isArray(questions) ? questions[0] : undefined;
      if (typeof first !== "object" || first === null)
        return "";
      const header = first["header"];
      return typeof header === "string" ? plain(tidy(header), 24) : "";
    }
    default:
      return "";
  }
}

// hooks/tracker.ts
var STALE_MS = 30 * 60000;
var CALL_STALE_MS = 12 * 60 * 60000;

// hooks/wire.ts
var MAX_IDS = 64;
var MAX_BG = 32;
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function fieldsOf(value) {
  return isRecord(value) ? value : {};
}
function word(value, max) {
  return typeof value === "string" ? clip(tidy(value), max) : "";
}
function idOf(value) {
  return typeof value === "string" && /^[A-Za-z0-9_.:-]{1,80}$/.test(value) ? value : "";
}
function sessionLink(value) {
  return typeof value === "string" && /^https:\/\/claude\.ai\/code\/session_[A-Za-z0-9]{8,64}$/.test(value) ? value : "";
}
function isAgentTool(tool) {
  return tool === "Agent" || tool === "Task";
}
var OVER = new Set(["completed", "failed", "killed", "stopped", "cancelled", "canceled", "error"]);
function backgroundOf(value) {
  if (!Array.isArray(value))
    return null;
  const out = [];
  for (const item of value.slice(0, MAX_BG)) {
    const task = fieldsOf(item);
    const id = idOf(task["id"]);
    if (id === "" || task["type"] !== undefined && task["type"] !== "subagent")
      continue;
    out.push({
      id,
      type: label(String(task["agent_type"] ?? ""), 40),
      task: label(String(task["description"] ?? ""), 80),
      isRunning: !OVER.has(String(task["status"] ?? ""))
    });
  }
  return out;
}
function eventOf(input) {
  const fields = fieldsOf(input);
  const agent = idOf(fields["agent_id"]);
  const tool = clip(tidy(String(fields["tool_name"] ?? "")), 80);
  const toolInput = fieldsOf(fields["tool_input"]);
  switch (fields["hook_event_name"]) {
    case "SessionStart":
      return { e: "start", source: word(fields["source"], 16) };
    case "UserPromptSubmit":
      return { e: "prompt", pid: idOf(fields["prompt_id"]) };
    case "Stop":
      return { e: "stop", pid: idOf(fields["prompt_id"]), hasFailed: false, bg: backgroundOf(fields["background_tasks"]) };
    case "StopFailure":
      if (agent !== "")
        return { e: "subend", agent, hasFailed: true };
      return { e: "stop", pid: idOf(fields["prompt_id"]), hasFailed: true, bg: null };
    case "PreToolUse": {
      const id = idOf(fields["tool_use_id"]);
      if (id === "" || tool === "")
        return;
      const order = isAgentTool(tool) ? {
        type: label(String(toolInput["subagent_type"] ?? ""), 40),
        task: label(String(toolInput["description"] ?? ""), 80),
        name: label(String(toolInput["name"] ?? ""), 40)
      } : null;
      const type = agent === "" ? "" : label(String(fields["agent_type"] ?? ""), 40);
      return { e: "pre", agent, type, id, tool, act: actOfCall(tool, toolInput), target: targetOf(tool, toolInput), order };
    }
    case "PostToolUse":
    case "PostToolUseFailure": {
      const id = idOf(fields["tool_use_id"]);
      if (id === "")
        return;
      const child = isAgentTool(tool) ? idOf(fieldsOf(fields["tool_response"])["agentId"]) : "";
      return { e: "post", agent, id, child };
    }
    case "PostToolBatch": {
      const calls = Array.isArray(fields["tool_calls"]) ? fields["tool_calls"] : [];
      const ids = calls.slice(0, MAX_IDS).map((call) => idOf(fieldsOf(call)["tool_use_id"])).filter((id) => id !== "");
      return { e: "batch", agent, ids };
    }
    case "PermissionRequest":
      return { e: "ask", agent, tool, target: targetOf(tool, toolInput) };
    case "PermissionDenied": {
      const id = idOf(fields["tool_use_id"]);
      return id === "" ? undefined : { e: "denied", agent, id };
    }
    case "SubagentStart":
      return agent === "" ? undefined : { e: "sub", agent, type: label(String(fields["agent_type"] ?? ""), 40) };
    case "SubagentStop":
      return agent === "" ? undefined : { e: "subend", agent, hasFailed: false };
    case "TeammateIdle": {
      const name = label(String(fields["teammate_name"] ?? ""), 40);
      return name === "" ? undefined : { e: "idle", name };
    }
    case "Elicitation":
      return { e: "elicit", agent };
    case "ElicitationResult":
      return { e: "elicited", agent };
    case "SessionEnd":
      return { e: "end", reason: word(fields["reason"], 24) };
    case "Notification":
      return fields["notification_type"] === "idle_prompt" ? { e: "waiting" } : undefined;
    default:
      return;
  }
}
function inboxOf(base, key) {
  if (typeof base !== "string" || typeof key !== "string")
    return;
  const address = base.trim();
  const secret = key.trim();
  if (address === "" || secret === "" || !URL.canParse(address))
    return;
  const url = new URL(address);
  const isHere = url.hostname === "localhost" || url.hostname === "127.0.0.1" || url.hostname === "[::1]";
  if (url.protocol !== "https:" && !(url.protocol === "http:" && isHere))
    return;
  if (url.username !== "" || url.password !== "")
    return;
  url.search = "";
  url.hash = "";
  if (!url.pathname.endsWith("/"))
    url.pathname += "/";
  return { url: new URL("in", url).toString(), key: secret };
}
function isWebSet(url) {
  return typeof url === "string" && url.trim() !== "";
}
function inboxOfFile(config) {
  if (typeof config !== "object" || config === null)
    return;
  const fields = config;
  return inboxOf(fields["url"], fields["key"]);
}
function appOf(env) {
  const entry = env["CLAUDE_CODE_ENTRYPOINT"] ?? "";
  if (entry === "remote_cowork" || env["CLAUDE_CODE_SESSION_ORIGIN"] === "claude_ai_chat")
    return "claude";
  if (env["CLAUDE_CODE_REMOTE"] === "true")
    return "cloud";
  if (entry.includes("desktop"))
    return "code";
  if (entry.includes("vscode"))
    return "vscode";
  if (entry === "cli")
    return "cli";
  if (entry.startsWith("sdk"))
    return "sdk";
  return "";
}
function linkOf(env) {
  const remote = env["CLAUDE_CODE_REMOTE_SESSION_ID"] ?? "";
  const found = /^cse_([A-Za-z0-9]{8,64})$/.exec(remote);
  return found === null ? "" : sessionLink(`https://claude.ai/code/session_${found[1]}`);
}
function titleFor(app, cwd) {
  if (app === "claude")
    return "";
  return typeof cwd === "string" ? folderName(cwd) : "";
}
function eventPostOf(input, env) {
  const ev = eventOf(input);
  if (ev === undefined)
    return;
  const fields = fieldsOf(input);
  const sid = idOf(fields["session_id"]) || idOf(env["CLAUDE_CODE_SESSION_ID"]);
  if (sid === "")
    return;
  const app = appOf(env);
  return { v: 1, kind: "event", sid, app, title: titleFor(app, fields["cwd"]), link: linkOf(env), ev };
}

// web/report.ts
var TIMEOUT_MS = 3000;
var WAITED_ON_MS = 2000;
var WAITED_ON = new Set(["Stop", "StopFailure", "SessionEnd"]);
var DOWN_MS = 15000;
var MODULE_FRESH_MS = 45000;
var MAX_INPUT = 32 * 1024 * 1024;
async function readInput() {
  const chunks = [];
  let size = 0;
  for await (const chunk of process.stdin) {
    const bytes = Buffer.isBuffer(chunk) ? chunk : Buffer.from(String(chunk));
    size += bytes.length;
    if (size > MAX_INPUT)
      throw new Error("the event is larger than the reporter reads");
    chunks.push(bytes);
  }
  return Buffer.concat(chunks).toString("utf8");
}
function moduleReports(sid, now) {
  try {
    const dir = join(process.env["CLAUDE_CONFIG_DIR"] || join(homedir(), ".claude"), "plugins", "store");
    for (const name of readdirSync(dir)) {
      if (!name.startsWith("agent-cafe") || !name.endsWith(".json"))
        continue;
      const store = JSON.parse(readFileSync(join(dir, name), "utf8"));
      const entry = typeof store === "object" && store !== null ? store[`table:${sid}`] : undefined;
      const web = typeof entry === "object" && entry !== null ? entry["web"] : undefined;
      if (typeof web === "number" && now - web >= 0 && now - web < MODULE_FRESH_MS)
        return true;
    }
  } catch {}
  return false;
}
function downFile(url) {
  return join(tmpdir(), `agent-cafe-down-${createHash("sha256").update(url).digest("hex").slice(0, 12)}`);
}
function isDown(file, now) {
  try {
    return now - statSync(file).mtimeMs < DOWN_MS;
  } catch {
    return false;
  }
}
async function main() {
  const url = process.env["CLAUDE_PLUGIN_OPTION_WEB_URL"];
  const key = process.env["CLAUDE_PLUGIN_OPTION_WEB_KEY"];
  const root = process.env["CLAUDE_PLUGIN_ROOT"];
  let inbox;
  if (isWebSet(url))
    inbox = inboxOf(url, key);
  else if (root !== undefined && root !== "")
    inbox = inboxOfFile(JSON.parse(readFileSync(join(root, "web.json"), "utf8")));
  if (inbox === undefined)
    return;
  const now = Date.now();
  const down = downFile(inbox.url);
  if (isDown(down, now))
    return;
  const input = JSON.parse(await readInput());
  const post = eventPostOf(input, process.env);
  if (post === undefined || moduleReports(post.sid, now))
    return;
  const event = typeof input === "object" && input !== null ? input["hook_event_name"] : undefined;
  try {
    await fetch(inbox.url, {
      method: "POST",
      headers: { authorization: `Bearer ${inbox.key}`, "content-type": "application/json" },
      body: JSON.stringify(post),
      signal: AbortSignal.timeout(WAITED_ON.has(event) ? WAITED_ON_MS : TIMEOUT_MS)
    });
    rmSync(down, { force: true });
  } catch (error) {
    const name = error instanceof Error ? error.name : "";
    if (name === "TimeoutError" || name === "AbortError")
      writeFileSync(down, String(now));
  }
}
main().then(() => process.exit(0), () => process.exit(0));
