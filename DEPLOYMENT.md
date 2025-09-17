# Deployment Guide for TJson Portfolio

## Prerequisites

1. **Google Cloud Account**: Create a project in [Google Cloud Console](https://console.cloud.google.com)
2. **gcloud CLI**: Install from [Google Cloud SDK](https://cloud.google.com/sdk/docs/install)
3. **Docker**: Install from [Docker Desktop](https://www.docker.com/products/docker-desktop/)

## Local Development

### Run with Docker

```bash
# Build the image
docker build -t tjson-portfolio:latest .

# Run locally
docker run -d \
  --name tjson-portfolio \
  -p 8080:8080 \
  -e SESSION_SECRET=your-secret-key \
  tjson-portfolio:latest

# Check health
curl http://localhost:8080/health
```

### Run with Docker Compose

```bash
# Development mode
docker-compose -f docker-compose.dev.yml up

# Production mode
docker-compose up
```

## Deploy to Google Cloud Run

### Method 1: Using deploy script (Recommended)

```bash
# Set your project ID
export PROJECT_ID="your-gcp-project-id"
export SESSION_SECRET=$(openssl rand -base64 32)

# Run deploy script
./deploy.sh $PROJECT_ID us-central1
```

### Method 2: Manual deployment

```bash
# 1. Configure gcloud
gcloud auth login
gcloud config set project YOUR_PROJECT_ID

# 2. Enable APIs
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com

# 3. Build and submit to Cloud Build
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/tjson-portfolio

# 4. Deploy to Cloud Run
gcloud run deploy tjson-portfolio \
  --image gcr.io/YOUR_PROJECT_ID/tjson-portfolio \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated \
  --port 8080 \
  --memory 512Mi \
  --set-env-vars="NODE_ENV=production,SESSION_SECRET=$SESSION_SECRET"
```

### Method 3: Automated CI/CD

Push to GitHub and Cloud Build will automatically deploy (requires cloudbuild.yaml configuration).

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
SESSION_SECRET=your-session-secret-here
NODE_ENV=production
PORT=8080
```

## Security Checklist

- [x] Non-root user in Docker container
- [x] Health checks configured
- [x] Security headers implemented
- [x] Environment variables secured
- [x] .dockerignore configured
- [x] Multi-stage build for smaller images
- [x] Dependencies regularly updated

## Monitoring

### Health Check
```bash
curl https://YOUR-SERVICE-URL/health
```

### View Logs
```bash
gcloud run services logs read tjson-portfolio --region=us-central1
```

### View Metrics
Visit [Cloud Console](https://console.cloud.google.com/run) to monitor:
- Request count
- Latency
- Error rate
- Instance count

## Optimization Tips

1. **Cold Start Optimization**:
   - Set min-instances to 1 for always-warm instances
   - Use lighter base images (Alpine)

2. **Performance**:
   - Enable CDN for static assets
   - Use Cloud CDN with Cloud Load Balancing

3. **Cost Optimization**:
   - Use min-instances=0 for development
   - Monitor and adjust memory/CPU allocation

## Troubleshooting

### Container fails to start
```bash
# Check logs
docker logs tjson-portfolio

# Verify build
docker run -it tjson-portfolio:latest sh
```

### Cloud Run deployment fails
```bash
# Check Cloud Build logs
gcloud builds list --limit=1

# Check service logs
gcloud run services logs read tjson-portfolio
```

### Performance issues
- Increase memory allocation
- Check for memory leaks
- Review application logs

## Support

For issues or questions:
- GitHub Issues: [jason7337/Jasson-s-Portfolio-TJson-](https://github.com/jason7337/Jasson-s-Portfolio-TJson-/issues)
- Email: gomezjason010@gmail.com