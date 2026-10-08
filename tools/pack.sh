#!/bin/sh
# tools/pack.sh: the plugin as one zip, with web.json in it, for your Claude
# account (Customize > Plugins > Upload plugin). Run it from anywhere:
#
#   sh tools/pack.sh
#
# The zip holds your reporting key: upload it to your own account, and share
# it with nobody.
set -eu
cd "$(dirname "$0")/.."
if [ ! -f web.json ]; then
  echo "web.json is missing: write it first (README, 網頁版)." >&2
  exit 1
fi
# The reporter is built from web/report.ts: rebuilt here when Bun is around,
# so the zip never carries an older build of it than the source.
if command -v bun >/dev/null 2>&1; then
  bun build web/report.ts --target=node --format=esm --outfile=scripts/report.mjs >/dev/null
fi
mkdir -p dist
rm -f dist/agent-cafe.zip
zip -qr dist/agent-cafe.zip .claude-plugin/plugin.json hooks scripts web.json README.md -x '*.DS_Store'
echo "dist/agent-cafe.zip"
