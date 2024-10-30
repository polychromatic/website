#!/bin/bash
#
# Test the built version of the site by proofing the HTML.
#
# 'html-proofer' RubyGem provided by:
# https://github.com/gjtorikian/html-proofer
#

cd "$(dirname $0)/../"

bundle exec htmlproofer \
    --allow-missing-href \
    --only-4xx \
    --ignore-status-codes 429,500 \
    --ignore-urls packages.ubuntu.com \
    ./_site
exit $?
