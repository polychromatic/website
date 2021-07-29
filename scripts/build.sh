#!/bin/bash

cd "$(dirname "$0")"/../

export JEKYLL_ENV=production
bundle exec jekyll build
