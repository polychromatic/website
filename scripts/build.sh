#!/bin/bash

cd "$(dirname "$0")"/../

env JEKYLL_ENV=production
bundle exec jekyll build
