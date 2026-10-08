# Agent Café's web page: the server, run by Bun straight from its TypeScript.
# It is built from the repository's root, since it shares hooks/ with the mod:
#
#   docker build -f web/Dockerfile -t agent-cafe-web .
#
# web/compose.yaml does that for you.

FROM oven/bun:1-alpine

WORKDIR /app
COPY hooks/ ./hooks/
COPY web/ ./web/

ENV PORT=8787
EXPOSE 8787
USER bun

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s CMD wget -qO- http://127.0.0.1:8787/healthz || exit 1
CMD ["bun", "web/server.ts"]
