# Agent Café ☕

把你 Claude 裡的每一個 agent——主 agent 和它交辦出去的所有 subagent——請進一間咖啡廳，一眼看出誰正在做什麼、誰做完了、誰在等你。

有兩種看法：

| | 在哪裡看 | 看得到哪些 session |
| :- | :- | :- |
| **pane**（`/cafe`） | 桌面 App 的 Code 分頁（本機 session）、終端機。像素風的平面圖 | 這台電腦上載入了這個 mod 的 session |
| **網頁版** | 瀏覽器、手機，開在你自己的網域上。**滿版的 3D 咖啡廳**（three.js），英文介面，裡面的人會自己走動 | Code 的本機 session、終端機，加上 **Claude App 裡的任務**（要多做兩步設定，見[網頁版](#網頁版在瀏覽器看所有-session)） |

![網頁版：滿版的 3D 咖啡廳，五個 session 同時在工作](docs/web.png)

> 這張是網頁版在 Chromium 裡的截圖（軟體算圖的 WebGL）。回報給它的是一支模擬 session 的腳本：五個 session、十幾個 agent 隨機換著做事，所以畫面上的狀態比真的 session 換得更快。

每個 agent 是一個小人，頭上的泡泡是它正在做的事，名牌寫著細節。pane 裡名牌放不下的字會截掉，完整的寫在底下的清單裡；網頁版點一下那個人，左上角會出現它的單子。泡泡的意思兩邊一樣：

| 你會看到 | 意思 |
| :- | :- |
| 泡泡裡三個點、手托下巴 | 思考中（兩次工具呼叫之間） |
| 書、放大鏡 | 在讀檔案、在搜尋：`讀 hooks/scene.ts`、`搜尋 PermissionRequest` |
| 鉛筆、終端機、地球 | 在改檔案、執行指令、上網：`改 src/app.ts`、`執行 Run the test suite`、`瀏覽 arxiv.org` |
| 兩個小人 | 把工作交辦給 subagent |
| 清單、齒輪 | 在整理待辦；在用其他工具（例如 MCP 的工具） |
| 黃色泡泡 `!`、舉手 | **在等你**：等你批准某個工具呼叫，或計畫寫好了等你看。名牌是紅字，例如 `等你批准：執行 git push` |
| 黃色泡泡 `?`、舉手 | 有問題想問你（AskUserQuestion） |
| 咖啡杯 | 休息中。主 agent 是 `等你的指示`；如果它的 subagent 還在忙，則是 `等 agent 回報` |
| 綠色勾勾 | 做完了，20 秒後離席 |
| 紅色叉叉 | 出錯了 |
| 黑板上的三個數字 | 綠：忙　黃：等你　灰：閒 |

pane 的清單裡多了經過時間和工具呼叫次數；subagent 交辦出去的 subagent 會縮排在它底下。網頁版有人在等你的時候，分頁標題會變成 `(1) Agent Café`。

## 目前狀態

**v0.2.0**，用 Claude Code **v2.1.292／2.1.293** 開發和測試。Mods 的 API 仍會隨版本變動，新版本可能需要調整。

實際驗證過的：

- `claude plugin validate --strict` 通過、TypeScript 型別檢查通過、`claude plugin test` **218 個測試**全過（在 Claude Code 自己的測試環境裡跑）。網頁版用到的事件格式，是從真的 session 錄下來的（`tests/runs.ts`）。
- **3D 網頁**：在 Chromium（軟體算圖的 WebGL）裡用桌面（1440×900）和手機寬度（390×844）看過，接的是模擬 session 的腳本：入座、走去書架和白板、端咖啡去沙發和窗邊吧台、做完從門口離開、新的從門口進來、點人出現單子、加貓加狗和重新整理後還在，都試過。還沒在有獨立顯示卡的電腦、Safari 和真的手機上看過。
- **桌面 App**：你在 Code 分頁的本機 session 打開過，pane 裡的圖、清單和圖例都有出來。
- 在**真正的 Claude Code session** 裡跑過（Linux、隔離的設定資料夾；模型換成本機的腳本替身，所以沒有用到真的模型或額度）。headless（`claude -p`）和互動式終端機都有，情境包含：主 agent 思考與呼叫工具、前景／背景 subagent、subagent 再開 subagent、執行失敗、權限詢問、手動停掉背景 agent、`/clear`、hot reload、兩個 session 同時開。
- **網頁版**：伺服器在本機用 Bun 跑；三種回報方式（mod 整桌回報、只有 hooks 逐筆回報、兩者並存）都用真的 session 接過，加上一個停在權限詢問的互動式 session；網頁在 Chromium 裡用桌面和手機寬度看過，中英文都有；伺服器重開後網頁會自己連回去；登入的次數限制、偽造的通行證、跨站的表單都試過會被擋。
- **Docker**：`web/Dockerfile` 和 `compose.yaml` 用 Docker Engine 29 實際 build、啟動過。healthcheck 會過，這台機器的 `127.0.0.1:8080` 連得到；在 tunnel 容器的位置上，`web/.env` 裡的 token 有傳進去，`http://cafe:8080` 連得到（`http://localhost:8080` 連不到）；伺服器被強制結束後由 Docker 自動重啟、或單獨重建伺服器之後，也都還連得到。測試的環境拉不到 Docker Hub，所以基底映像檔是用同一個大版本的 Bun 組出來的替身，tunnel 的位置放的是一個只會試著連線的容器。

**還沒驗證的**：

- **Claude App 的任務真的會回報**：官方文件寫外掛的 hooks 在 Claude App 的任務裡會載入，我也在一個 Claude App 任務裡確認了回報程式需要的東西都在（Node 22.22、識別 session 的環境變數）；但「上傳外掛到你的帳號 → 任務裡跑起來 → 送到你的網域」這整條路，要等你的網域開好才能測。另外，任務的網路有允許清單，見[第 3 步](#3-讓-claude-app-的任務也回報)。
- **真的映像檔，和 Cloudflare 那一段**：`oven/bun:1-alpine`、`cloudflare/cloudflared` 這兩個映像檔本身，以及從 Cloudflare 經過 tunnel 到伺服器的整條路，要等你在自己的機器上第一次 `docker compose --profile tunnel up -d --build` 才會跑到（上面 Docker 的測試用的是替身）。
- macOS 上的回報程式（上面的測試都在 Linux 上）。
- teammate（agent teams）、MCP 的 elicitation、計畫模式的批准、AskUserQuestion：只有單元測試。
- 真的模型：替身照腳本呼叫工具，真的模型的行為更多樣。

## 安裝（mod）

需要 **Claude Code v2.1.287 以上**（mods 從這版開始預設開啟）。終端機可以用 `claude --version` 確認。

版本不夠的時候通常不會有明顯的錯誤訊息，就只是沒有 `/cafe`（`claude -p "/cafe text"` 會回 `Unknown command: /cafe`）。更新的方式看當初怎麼裝的，用 `which claude` 可以看出來：

| 安裝方式 | 更新 |
| :- | :- |
| 官方安裝程式（`~/.local/bin/claude`） | `claude update` |
| Homebrew | 預設的 `claude-code` 跟的是 stable 頻道，大約晚一週。改裝跟最新版的：`brew uninstall --cask claude-code && brew install --cask claude-code@latest` |
| npm | `npm install -g @anthropic-ai/claude-code@latest` |

用官方安裝程式但更新後版本還是不夠的話，是更新頻道設成了 stable：在 `/config` 把 **Auto-update channel** 改成 latest，再跑一次 `claude update`。桌面 App 從選單 **Claude → Check for Updates** 更新，更新後整個關掉再開。

會畫出 pane 的地方只有兩個：終端機的 `claude`，以及桌面 App **Code 分頁**的本機／SSH session。Code 分頁的 **Cloud** session、Claude App 的任務、VS Code 的聊天面板和 `claude -p` 都不會畫 pane；要看那些，用[網頁版](#網頁版在瀏覽器看所有-session)。

下面假設專案在 `~/Projects/agent-cafe`。

### 桌面 App

桌面 App 啟動 session 時沒辦法加參數，所以用環境變數 `CLAUDE_CODE_PLUGIN_DIRS` 告訴 Claude Code 去哪裡載入（需要 v2.1.280 以上），寫在 `~/.claude/settings.json`（和你原有的設定合併）：

```json
{
  "env": {
    "CLAUDE_CODE_PLUGIN_DIRS": "~/Projects/agent-cafe"
  }
}
```

然後在 Code 分頁開一個 **Local** 的新 session，輸入 `/cafe`。

### 終端機

```bash
claude --plugin-dir ~/Projects/agent-cafe
```

只對這一次的 session 有效。進去之後輸入 `/cafe`。

### 確認有沒有載入

- 輸入 `/` 時清單裡有 `/cafe` 就是載入了。
- 這一行不用開 session 就能確認，會直接印出咖啡廳的文字版：

  ```bash
  claude -p "/cafe text" --plugin-dir ~/Projects/agent-cafe
  ```

- 沒有載入的話，先看版本，再看[官方的排除步驟](https://code.claude.com/docs/en/plugins/mods/troubleshoot)。

## 使用（pane）

| 指令 | 作用 |
| :- | :- |
| `/cafe` | 打開咖啡廳的 pane。Claude 正在工作時也可以下，不會打斷它 |
| `/cafe text` | 不開 pane，把目前的狀態用文字印在對話裡 |
| `/cafe close` | 關掉 pane |

終端機沒有圖片，pane 裡是文字清單：

```text
Agent Café  忙 2　等你 0　閒 1
○ main  等 agent 回報  1s
↳ ● Explore「Find the hooks」  執行 Search for the hooks  1s · 2 次工具
↳ ● general-purpose「Run the tests」  執行 Run the test suite  1s · 1 次工具
◐ 思考  ● 工作  ◆ 等你  ○ 休息／完成
```

pane 裡的圖若是空白、破圖或一直閃，把 `motion` 選項關掉（見[設定](#設定)），圖會改成一張靜態圖片。

## 網頁版：在瀏覽器看所有 session

每個 session 把「誰在做什麼」送到你網域上的一個小伺服器，伺服器把所有 session 放進同一間 3D 咖啡廳，瀏覽器打開就會即時更新，要輸入密碼才看得到。手機也能看（直的螢幕會從門那一側看進去，咖啡廳的長邊剛好直著放）：

<img src="docs/web-phone.png" alt="手機上的網頁版" width="300">

### 3D 咖啡廳裡發生的事

整個頁面就是咖啡廳（滿版），介面是英文。每個 session 一張長桌：主 agent 坐在桌頭，subagent 坐兩側，人越多桌子越長；桌子前面的木牌寫著 session 的名字和它在哪個 App。最多 9 桌、每桌 12 個人。

每個人會照它的 agent 在做的事自己走動：

| agent 在做的事 | 咖啡廳裡的人 |
| :- | :- |
| 改檔案、執行指令、上網、用其他工具 | 坐在自己的位子上打筆電 |
| 讀檔案、搜尋 | 走到左邊的書架前看書、拿放大鏡找 |
| 整理待辦（TodoWrite 之類） | 走到軟木板前貼便條 |
| 思考中 | 手托下巴；想超過 8 秒會站起來在桌邊踱步 |
| 交辦給 subagent | 在自己的 subagent 背後看它們工作 |
| **等你**（批准、問題、計畫） | 站在位子旁邊，面向你揮手，名牌變黃 |
| 休息中 | 去吧台拿咖啡，然後隨意：坐沙發、坐窗邊吧台、坐空著的小圓桌、逛書架、摸貓摸狗、走走 |
| 主 agent 等 subagent 回報 | 端著咖啡坐在桌頭，不時走到 subagent 背後看看 |
| 做完了 | 歡呼一下，從右邊的門走出去 |
| 出錯了 | 趴在桌上，筆電螢幕變紅 |

新的 agent 從門口走進來；狀態一秒換好幾次的 agent 不會一直來回跑：要持續一下子才會起身，走到書架或軟木板的人也會待上幾秒再回座。等你、做完、出錯和新的一輪會立刻反應。

- **滑鼠**：拖曳旋轉、滾輪縮放；手機用一指旋轉、兩指縮放。右下角 `Whole room` 回到全景。
- **點一個人**：左上角出現它的單子：哪一桌、在做什麼、做了多久、用了幾次工具；Claude App 的任務還有 `Open` 可以打開那個任務。點地板或按 Esc 關掉。
- **貓和狗**：左下角 `Cats − +`、`Dogs − +` 可以加減，各最多 8 隻，每一隻的毛色固定。貓大多在睡覺，偶爾換個地方睡；狗會到處跑、坐下、趴著睡，也會跑去休息中的人旁邊坐。休息中的人會去摸牠們。加的貓狗從門口進來，減掉的從門口回家。數量記在這個瀏覽器裡（`localStorage`），不會同步到別的裝置。
- 系統設定了「減少動態效果」的話，人不會走動，直接出現在該在的地方。

### 哪些 session 會出現在網頁上

| 你在哪裡用 Claude | 會出現嗎 | 怎麼回報 |
| :- | :- | :- |
| 桌面 App Code 分頁的 **Local** session、終端機 | 會（做完[第 2 步](#2-讓-session-回報)） | mod 每 15 秒、以及每次有變化時送整桌 |
| **Claude App 的任務**（像這種會開工具做事的對話） | 會（做完[第 3 步](#3-讓-claude-app-的任務也回報)） | hooks 每個事件送一筆，伺服器自己拼出整桌 |
| Code 分頁的 **Cloud** session | 目前不會 | 雲端 session 不讀你電腦上的設定，也不裝帳號上的外掛；要把回報設定放進那個 repo 的 `.claude/settings.json`，還沒做 |
| 只是聊天、沒有開工具的對話 | 不會 | 那裡沒有 agent，也不載入 hooks |

兩種回報方式同時到的時候（例如你的 Mac 上有 `node`，hooks 也會送），以 mod 的整桌為準。

### 1. 架網站

伺服器在 `web/` 裡，用 Docker 跑，前面接 Cloudflare Tunnel——和你其他專案（例如 `bus_app`）同一套。需要一台開著的機器（你的 Mac 開著 Docker Desktop 也可以）和一個放在 Cloudflare 的網域。

1. 做兩把不同的鑰匙：

   ```bash
   openssl rand -hex 24   # 回報用：CAFE_INGEST_KEY
   openssl rand -hex 24   # 看網頁的密碼：CAFE_VIEW_KEY
   ```

2. 在 Cloudflare 後台（**Networking → Tunnels**）建一條 tunnel，安裝方式選 **Docker**。畫面上會出現一行 `docker run cloudflare/cloudflared:latest tunnel --no-autoupdate run --token eyJ…`，`--token` 後面那一長串就是這條 tunnel 的 token。只要複製 token，那行指令不用執行：`compose.yaml` 會用同一個映像檔跑。
3. 設定並啟動。在架網站的那台機器上、專案的 `web/` 資料夾裡執行：`compose.yaml` 在那裡，在專案根目錄下指令會得到 `no configuration file provided`。tunnel 只靠 `web/.env` 裡的 token 就會連上 Cloudflare：

   ```bash
   cd ~/Projects/agent-cafe/web
   cp .env.example .env      # 把兩把鑰匙和 tunnel token 填進去
   docker compose --profile tunnel up -d --build
   ```

   `web/.env` 不在 git 裡，換一台機器架就要在那台機器上再放一份，`CAFE_INGEST_KEY` 要和 `web.json` 裡的 `key` 是同一把。

   啟動時出現 `Bind for 127.0.0.1:8080 failed: port is already allocated`（或 `address already in use`），是這台機器上已經有別的程式在用 8080。把 `web/.env` 裡的 `CAFE_PORT` 改成沒人用的 port（例如 `8787`）再跑一次。這只換掉這台機器本機看網頁用的 `http://localhost:…`；tunnel 走的是 Docker 內部的網路，下一步的 Service URL 不用跟著改。

4. 回到 Cloudflare 那條 tunnel 的 **Routes → Add route → Published application**：**Hostname** 填你要的子網域（例如 `cafe.你的網域`），**Service URL** 填 `http://cafe:8080`。這一格有兩個地方容易填錯：
   - 是 `cafe`，不是 `localhost`。cloudflared 跑在自己的容器裡，那裡的 `localhost` 是它自己；`cafe` 是 `compose.yaml` 裡伺服器那個容器的名字。
   - 是 `http`，不是 `https`。伺服器本身不處理 https，填 `https://…` 會得到 502。你的網域對外還是 https，那一段由 Cloudflare 負責。
5. 打開 `https://cafe.你的網域`，輸入 `CAFE_VIEW_KEY`。登入一次可以用 30 天。

不用 Cloudflare 也可以：`docker compose up -d --build`（不加 `--profile tunnel`）只在這台機器的 `127.0.0.1:8080`（或你在 `CAFE_PORT` 設的 port）開，再用你自己的反向代理（Caddy、nginx）接上 https。伺服器本身不處理 https。

### 2. 讓 session 回報

在專案根目錄放一個 `web.json`（已列在 `.gitignore`，不要 commit）：

```json
{ "url": "https://cafe.你的網域", "key": "你的 CAFE_INGEST_KEY" }
```

之後開的 Code Local session 和終端機 session 都會開始回報（已經開著的 session 要重開，或輸入 `/reload-plugins`）。沒有 `web.json` 的時候，這個 mod 完全不連網路。

### 3. 讓 Claude App 的任務也回報

Claude App 的任務跑在 Anthropic 的雲端，讀不到你 Mac 上的資料夾，所以要兩件事：

1. **把外掛上傳到你的 Claude 帳號**：

   ```bash
   cd ~/Projects/agent-cafe
   sh tools/pack.sh          # 做出 dist/agent-cafe.zip，裡面帶著 web.json
   ```

   在 Claude App 的 **自訂（Customize）→ Plugins → Add → Upload plugin** 上傳這個 zip。之後開的任務會自動帶著它。這個 zip 裡有你的回報鑰匙，只上傳到你自己的帳號，不要分享。

   你的 Mac 上的 Claude Code 也會收到這份同步過去的外掛；因為 `CLAUDE_CODE_PLUGIN_DIRS` 指向的專案資料夾同名，Code 的 session 還是用專案資料夾那一份。
2. **讓任務連得到你的網域**：任務的網路預設只能連 GitHub、npm 這類網站，其他網域會被擋（我在一個 Claude App 任務裡測過，一般網域回 403）。到 Claude 的 **Settings → Capabilities**，在 code execution 的網路存取設定裡允許 `cafe.你的網域`（有「額外允許的網域」就加這一個；只有開關的話，要允許所有網域才行）。Team／Enterprise 方案由管理員在組織設定裡改。改完要開**新的**任務才生效。

   有人回報這個設定在雲端任務裡沒有生效。改完之後，在一個新任務裡請 Claude 執行 `curl -sI https://cafe.你的網域/healthz`：回 `200` 就通了，回 `403` 就是還被擋。

Claude App 的任務沒有資料夾名稱可以當桌名，網頁上會顯示成 `Claude · 14:05`（App 和入座的時間），單子上的「開啟」連到那個任務。

### 確認

```bash
curl -s https://cafe.你的網域/healthz        # ok
```

沒有回 `ok` 的時候，先看是哪一種：

- **502**：tunnel 連上了，但找不到伺服器。多半是 Service URL 沒有照[第 1 步](#1-架網站)填成 `http://cafe:8080`。
- **Cloudflare 的錯誤頁寫 1033**：tunnel 沒連上。`docker compose ps` 看 `agent-cafe-tunnel` 有沒有在跑（啟動時要加 `--profile tunnel`），`docker compose logs tunnel` 看原因，最常見的是 `web/.env` 裡的 token 沒填或貼錯。

想看伺服器收到了什麼，把 `web/.env` 裡的 `CAFE_DEBUG` 設成 `1`，再跑一次 `docker compose up -d`（`docker compose restart` 不會重讀 `.env`），`docker compose logs -f cafe` 會一行一行印出收到的回報（只有咖啡廳要顯示的那些欄位）。

### 網頁送出、顯示和保存什麼

送出去的只有座位上會顯示的東西，而且在你的 session 裡就先過濾好（`hooks/wire.ts` 的 `eventOf`）：工具名、一個短短的目標（檔名、搜尋字串、網域、指令的程式名）、agent 的類型和交辦時寫的幾個字、資料夾名稱。**不送**：你打的提示詞、從提示詞產生的 session 標題、檔案內容、指令的參數、工具的結果、模型的回答。看起來像金鑰的字串一律不送（同樣是猜的，見[它顯示和儲存了什麼](#它顯示和儲存了什麼)）。

伺服器只把這些放在記憶體裡，重啟就清空，等各個 session 下一次回報再補回來。

### 安全

- 兩把鑰匙分開：回報鑰匙（在 `web.json` 裡，也在上傳的 zip 裡，Claude 在任務裡讀得到）只能**寫入**咖啡廳，不能看；看網頁要另一把密碼。
- 密碼打錯：同一個位址 15 分鐘內 8 次、所有人加起來 40 次之後，暫時不再接受登入（已經登入的瀏覽器不受影響）。
- 網頁上所有 session 送來的字都當成純文字放進頁面（名牌和單子用 `textContent`，黑板上的字畫在 canvas 上）；頁面有嚴格的 CSP，three.js 打包在 `/cafe3d.js` 裡從自己的伺服器送出，不連任何 CDN。
- `compose.yaml` 只在 `127.0.0.1` 開 port，外面要經過 tunnel 才進得來。

### 網頁版已知的限制

- **Claude App 的任務沒有「結束」事件**：任務關掉之後，那一桌會以「等你的指示」留在網頁上，3 小時沒有動靜才離開。
- **hooks 回報的那幾桌是伺服器拼出來的**：事件是一筆一筆、同時送出的，偶爾會不照順序到。伺服器會把晚到的放回正確的位置；真的漏掉的（例如伺服器剛好在重開），通常在主 agent 下一輪結束時自動修正。
- 同一類型的兩個 subagent 同時開始時，交辦的說明可能先對調，等它們各自結束時改正。
- 被你按 Esc 打斷的那一輪不會有結束事件，主 agent 會顯示還在忙，直到大約一分鐘後 Claude Code 發出「等你輸入」的通知。
- 回報程式（`scripts/report.mjs`）需要 Node 18.17 以上；Claude App 任務那種要經過代理的環境需要 Node 22.21 以上（任務裡目前是 22.22）。你的 Mac 上沒有 `node` 也沒關係，Code 的 session 由 mod 回報。
- teammate（agent teams）在網頁上會當成一般的 subagent，主 agent 一輪結束時可能被當成已完成。
- **3D 需要 WebGL**：瀏覽器關掉硬體加速或不支援 WebGL 的時候，頁面只會說畫不出來，沒有平面版可以退回（平面的像素圖還在 pane 裡）。
- 3D 的咖啡廳最多畫 9 桌、每桌 12 個人；超過的只算進右上角的數字。
- 網頁預設是英文，網址加 `?lang=zh-TW` 會換成中文並記住（頁面上沒有切換的按鈕）。

## 設定

| 選項 | 預設 | 作用 |
| :- | :- | :- |
| `language` | `zh-TW` | pane 文字的語言：`zh-TW` 或 `en`（網頁版一律是英文，見[網頁版已知的限制](#網頁版已知的限制)） |
| `share_sessions` | `true` | 讓這台電腦上其他 session 的 agent 也在 pane 裡入座。關掉後這個 session 不讀也不寫共用的資料 |
| `motion` | `true` | pane 圖片的動畫。關掉後是一張靜態圖片 |

寫在 `~/.claude/settings.json`（改完開新的 session 生效）：

```json
{
  "pluginConfigs": {
    "agent-cafe": {
      "options": { "language": "en", "motion": false }
    }
  }
}
```

網頁版的設定不在這裡，在 `web.json`（session 端）和 `web/.env`（伺服器端）。

## 它顯示和儲存了什麼

沒有 `web.json` 的時候，這個 mod 只在你的電腦上執行，不連網路，也不呼叫模型；有的話，只連你在 `web.json` 寫的那個網址。它用到的 Claude Code 功能可以自己列出來看：`claude plugin validate ~/Projects/agent-cafe` 的 `calls:` 那一行。

**顯示的**只有短短的標籤，而且先經過過濾：

- 檔案：檔名，加上一層資料夾（`hooks/scene.ts`）。不顯示內容；檔名看起來像金鑰的也不顯示。
- 搜尋：搜尋的字串。看起來像金鑰或 token 的不顯示。
- 網址：只有網域（`example.com`），沒有路徑和參數。
- shell 指令：模型自己為這個指令寫的說明（看起來含有金鑰時不顯示）；沒有說明時只顯示程式名，git、npm 這類固定的子指令也會顯示（`git push …`），**不顯示任何參數**（`make` 的目標也算參數）。
- subagent：它的類型、名字，和交辦時寫的那幾個字的說明（看起來含有金鑰時不顯示）。不顯示 prompt。
- 問你問題時：只有問題的短標題。
- 其他工具：待辦事項的標題、skill 的名字、傳訊息的對象、workflow 的標題；MCP 工具只顯示伺服器和工具的名字。
- 工具的結果、你的對話內容：都不碰。

過濾金鑰用的是猜的（常見的金鑰開頭，或一長串混著字母和數字的字），寧可多藏；但它不是保證，模型如果把機密寫進說明文字裡又長得不像金鑰，還是會顯示出來。

**儲存的**：`share_sessions` 開著的時候，每個 session 會把自己那一桌寫進這個 mod 自己的本機資料檔（`~/.claude/plugins/store/` 底下），讓你其他的 session 讀得到；session 結束時刪掉自己那一筆，沒有正常結束的 45 秒後不再顯示、一小時後被清掉。

`/cafe text` 的輸出會進到對話裡、模型讀得到，所以它只列出這個 session 自己的 agent；其他 session 只報數量。

## 已知的限制（pane）

- **批准之後還會顯示「等你批准」一下子**：Claude Code 會告訴 mod「要問你了」，但沒有事件說「你答應了」，所以座位要等到那個工具呼叫結束才恢復。
- **終端機只有文字清單**，沒有圖。
- **桌面 App 裡圖的左右會留白**：pane 給圖的框比圖寬；把 `motion` 關掉會改成一般圖片，或許比較貼合。
- **其他 session 那幾桌**大約每 4 秒讀一次（pane 開著的時候），對方也要載入這個 mod。
- **圖上最多 4 桌、每桌 12 個座位**（網頁版是 9 桌），超過的只算進黑板的數字和清單。
- **背景 agent**：互動式 session 裡 subagent 預設在背景跑，主 agent 交辦完就結束自己這一輪，所以最常看到的是 main 端著咖啡 `等 agent 回報`，這是正常的。
- **shell 指令的圖示**是看指令開頭的程式猜的（`grep`、`rg`、`find` 算搜尋，`cat` 算讀，`curl` 算上網），猜不出來就是一般的「執行」。

## 開發

```bash
cd ~/Projects/agent-cafe

claude plugin validate .      # Claude Code 從這個 mod 讀到什麼
claude plugin test            # 跑 tests/ 裡的 218 個測試，不需要開 session 或登入
npx tsc -p .                  # 型別檢查（要先載入過一次）

# 網頁版（需要 Bun）
CAFE_INGEST_KEY=$(openssl rand -hex 24) CAFE_VIEW_KEY=$(openssl rand -hex 24) bun web/server.ts
bun build web/report.ts --target=node --format=esm --outfile=scripts/report.mjs   # 改了回報程式之後

# 3D 咖啡廳（web/cafe3d/ 裡的 TypeScript，打包成 web/public/cafe3d.js）
cd web && bun install                                   # three.js 和型別，只在開發時需要
node_modules/.bin/tsc -p cafe3d/tsconfig.json           # 型別檢查
bun run build:3d                                        # 改了 cafe3d/ 之後重新打包
```

- `scripts/report.mjs` 是從 `web/report.ts`（加上 `hooks/wire.ts`、`hooks/describe.ts`）build 出來的，改了那幾個檔要重新 build；`tools/pack.sh` 在有 Bun 的時候會自動做。
- `web/public/cafe3d.js` 也是 build 出來、放進 git 的（約 650 KB，gzip 後約 170 KB），所以架網站和 Docker 都不需要 `bun install`。伺服器送它的時候會壓縮、帶 ETag，瀏覽器沒變就不重新下載。
- Claude Code 每次從資料夾載入這個 mod，都會把**你那個版本**的型別寫到 `.claude-plugin/types/`（已列在 `.gitignore`）。
- debug log 裡找 `agent-cafe`。mod 自己出狀況時會寫一行 `could not keep up: …`。

想改什麼去哪裡：

| 檔案 | 內容 |
| :- | :- |
| `hooks/register.tsx` | 唯一和 Claude Code 打交道的檔案：聽事件、開 pane、定時更新、和其他 session 共用資料、回報給網頁 |
| `hooks/tracker.ts` | 座位表：每個事件發生後，誰在做什麼（mod 和網頁伺服器共用） |
| `hooks/describe.ts` | 一個工具呼叫算哪一類工作、名牌上可以安全顯示什麼 |
| `hooks/wire.ts` | 送給網頁的格式：hooks 事件要留下哪些欄位，伺服器怎麼檢查收到的東西 |
| `hooks/view.ts` | 誰坐哪一桌、叫什麼名字；清單和文字版 |
| `hooks/scene.ts`、`hooks/sprites.ts` | 把咖啡廳畫成一張 SVG；像素圖 |
| `hooks/i18n.ts` | 咖啡廳的文字，中文和英文 |
| `hooks/hooks.json` | 載入 mod，並讓每個 hooks 事件執行回報程式（沒有 `web.json` 就什麼都不做） |
| `scripts/report.mjs` | hooks 的回報程式（build 出來的，見上） |
| `web/server.ts` | 網頁伺服器：收回報、登入、即時推送 |
| `web/hall.ts` | 伺服器的記憶：所有 session，把 hooks 事件拼回座位表 |
| `web/look.ts`、`web/page.ts`、`web/words.ts`、`web/public/` | 網頁的內容、HTML、文字、瀏覽器端的程式和樣式 |
| `web/cafe3d/main.ts` | 3D 咖啡廳的入口：相機、算圖、每一桌和每一個人、點選 |
| `web/cafe3d/layout.ts`、`web/cafe3d/nav.ts` | 房間裡每樣東西的位置；人和貓狗怎麼繞過家具找路（A*） |
| `web/cafe3d/mind.ts`、`web/cafe3d/guest.ts` | agent 的狀態讓那個人想做什麼、去哪裡、在那裡做什麼 |
| `web/cafe3d/person.ts`、`web/cafe3d/pets.ts`、`web/cafe3d/room.ts` | 方塊小人和它的動作；貓和狗；咖啡廳本身 |
| `web/cafe3d/kit.ts`、`web/cafe3d/tags.ts` | 合併方塊、canvas 畫的材質（地板、泡泡）；疊在畫面上的名牌 |
| `web/package.json` | 3D 咖啡廳的開發工具：three.js、型別、打包指令 |
| `web/Dockerfile`、`web/compose.yaml`、`web/.env.example` | 部署 |
| `tools/pack.sh` | 打包成上傳到 Claude 帳號用的 zip |
| `tests/` | `cafe.test.ts` 對著 Claude Code 測整個 mod；`runs.ts` 是錄下來的真實事件；`stage.test.ts` 測 3D 咖啡廳的配置、找路和行為；其他檔案各測一個模組 |

所有的 hook 都只是「看」：把事件原封不動交給下一手，自己出錯也會吞掉，不會讓工具呼叫因為它而失敗。回報程式在背景執行，不會讓 Claude 等它；只有每一輪結束和 session 結束時那一筆會等最多 2 秒，讓它在 session 關掉前送出。網頁伺服器卡住時，回報程式會停 15 秒再試，不會越積越多。

## 之後可以做的

- Code 分頁 Cloud session 的回報：一個 repo 層級的設定範本。
- 有人等你的時候讓手機跳通知。
- 終端機也畫圖（`Raster` 元件）。
- 點一個人看那個 agent 的對話。
- 讓貓狗的數量存在伺服器上，所有裝置共用。

## 分享給別人

這個資料夾就是一個完整的 plugin。要讓別人安裝，在 `.claude-plugin/` 加一個 `marketplace.json`，放上 GitHub：

```json
{
  "name": "agent-cafe",
  "owner": { "name": "Eddie" },
  "plugins": [{ "name": "agent-cafe", "source": "./" }]
}
```

對方在 Claude Code 裡執行：

```text
/plugin install agent-cafe --marketplace <你的帳號>/agent-cafe
```

公開之前記得：確認 `web.json`、`web/.env` 和 `dist/` 沒有被 commit（都在 `.gitignore` 裡），選一個授權並加上 `LICENSE`。
