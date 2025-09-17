#!/bin/bash

set -e

MODE=${1:-docker}

case $MODE in
  docker)
    docker build -t portfolio .
    docker stop portfolio 2>/dev/null || true
    docker rm portfolio 2>/dev/null || true
    docker run -d --name portfolio -p 8080:8080 -e SESSION_SECRET=dev portfolio
    echo "Running at http://localhost:8080"
    ;;

  npm)
    npm install
    npm run build
    npm run preview
    ;;

  *)
    echo "Usage: ./test-local.sh [docker|npm]"
    exit 1
    ;;
esac