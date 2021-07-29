#!/bin/bash -e

cd "$(dirname "$0")"/../

echo -e "\nPublishing to server..."
rsync --delete -avre ssh _site/ srv:/var/www/polychromatic.app/ &>/dev/null

echo -e "\nClearing CloudFlare cache..."
curl -X POST https://api.cloudflare.com/client/v4/zones/${CF_ZONE_ID}/purge_cache \
    -H "Authorization: Bearer ${CF_API_TOKEN}" \
    -H "Content-Type: application/json" \
    --data '{"purge_everything":true}'
