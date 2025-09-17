#!/bin/bash

set -e

PROJECT_ID=${1:-"your-project-id"}
REGION=${2:-"us-central1"}
SERVICE_NAME="portfolio"
IMAGE_NAME="gcr.io/${PROJECT_ID}/${SERVICE_NAME}"

if ! command -v gcloud &> /dev/null; then
    echo "Install gcloud CLI first"
    exit 1
fi

gcloud config set project ${PROJECT_ID}
gcloud services enable cloudbuild.googleapis.com run.googleapis.com

docker build -t ${IMAGE_NAME} .
docker push ${IMAGE_NAME}

gcloud run deploy ${SERVICE_NAME} \
    --image ${IMAGE_NAME} \
    --region ${REGION} \
    --platform managed \
    --allow-unauthenticated \
    --port 8080 \
    --memory 512Mi \
    --set-env-vars="NODE_ENV=production,SESSION_SECRET=${SESSION_SECRET:-$(openssl rand -base64 32)}"

gcloud run services describe ${SERVICE_NAME} --region=${REGION} --format="value(status.url)"