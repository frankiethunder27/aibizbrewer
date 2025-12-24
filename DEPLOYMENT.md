# AI Biz Brewery - Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (sign up at https://vercel.com)
- Required API keys (see below)

### Option 1: One-Click Deploy

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push -u origin claude/check-deployment-status-5QRY2
   ```

2. **Deploy to Vercel**
   - Go to https://vercel.com/new
   - Import your GitHub repository: `frankiethunder27/aibizbrewer`
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Add Environment Variables** (After initial deployment)
   - Go to your Vercel project dashboard
   - Navigate to "Settings" → "Environment Variables"
   - Add all variables from `.env.example`:
     - `ANTHROPIC_API_KEY`
     - `MONGODB_URI`
     - `NEXTAUTH_SECRET`
     - `NEXTAUTH_URL` (use your Vercel URL)
     - `GOOGLE_ID`
     - `GOOGLE_SECRET`
     - `STRIPE_PUBLIC_KEY`
     - `STRIPE_SECRET_KEY`
     - `STRIPE_WEBHOOK_SECRET`
     - `RESEND_API_KEY`
     - `NODE_ENV=production`

4. **Redeploy**
   - Go to "Deployments" tab
   - Click the three dots on the latest deployment
   - Click "Redeploy"

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod

# Follow prompts to link/create project
```

## Required API Keys & Services

### 1. Anthropic Claude API
- Sign up: https://console.anthropic.com/
- Go to "API Keys"
- Create a new key
- Copy and save as `ANTHROPIC_API_KEY`

### 2. MongoDB Atlas
- Sign up: https://www.mongodb.com/cloud/atlas
- Create a free cluster
- Get connection string: "Connect" → "Connect your application"
- Copy and save as `MONGODB_URI`
- Format: `mongodb+srv://username:password@cluster.mongodb.net/aibizbrewer?retryWrites=true&w=majority`

### 3. NextAuth Secret
```bash
# Generate a secure secret
openssl rand -base64 32
```
- Copy output and save as `NEXTAUTH_SECRET`
- Set `NEXTAUTH_URL` to your production domain (e.g., `https://your-app.vercel.app`)

### 4. Google OAuth
- Go to: https://console.cloud.google.com/
- Create a new project or select existing
- Enable "Google+ API"
- Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
- Application type: "Web application"
- Authorized redirect URIs:
  - `https://your-app.vercel.app/api/auth/callback/google`
  - `http://localhost:3000/api/auth/callback/google` (for local dev)
- Copy Client ID → `GOOGLE_ID`
- Copy Client Secret → `GOOGLE_SECRET`

### 5. Stripe
- Sign up: https://dashboard.stripe.com/
- Get API keys from Dashboard → "Developers" → "API keys"
- Copy Publishable key → `STRIPE_PUBLIC_KEY`
- Copy Secret key → `STRIPE_SECRET_KEY`
- Set up webhook:
  - Go to "Developers" → "Webhooks"
  - Add endpoint: `https://your-app.vercel.app/api/webhook/stripe`
  - Select events: `checkout.session.completed`, `customer.subscription.*`
  - Copy webhook signing secret → `STRIPE_WEBHOOK_SECRET`

### 6. Resend (Email)
- Sign up: https://resend.com/
- Create API key
- Copy and save as `RESEND_API_KEY`
- Verify your domain (optional but recommended)

## Post-Deployment Steps

### 1. Verify Health Check
```bash
curl https://your-app.vercel.app/api/health
```

Expected response:
```json
{
  "status": "healthy",
  "timestamp": "2025-12-24T...",
  "environment": "production",
  "version": "0.1.0",
  "services": {
    "api": "operational",
    "database": "operational"
  }
}
```

### 2. Update Stripe Webhook
- After deployment, update your Stripe webhook URL
- Use your actual Vercel URL: `https://your-app.vercel.app/api/webhook/stripe`

### 3. Update Google OAuth
- Add your Vercel URL to Google OAuth authorized redirect URIs

### 4. Test the Application
- Visit your deployed app
- Test authentication (Google login)
- Test a free AI tool (TrendSpotter)
- Verify database connection (check if user is created)

## Monitoring Deployment

### Health Check Endpoint
- URL: `https://your-app.vercel.app/api/health`
- Returns service status, database connectivity, environment info
- Status codes:
  - `200`: All systems operational
  - `503`: Service degraded or unhealthy

### Vercel Dashboard
- Monitor deployments: https://vercel.com/dashboard
- View logs in real-time
- Set up deployment notifications

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify all dependencies in package.json
- Ensure Node.js version compatibility

### Database Connection Fails
- Verify `MONGODB_URI` is correct
- Check MongoDB Atlas network access (allow all IPs: 0.0.0.0/0)
- Ensure database user has read/write permissions

### Authentication Not Working
- Verify `NEXTAUTH_URL` matches your domain
- Check `NEXTAUTH_SECRET` is set
- Verify Google OAuth redirect URIs are correct

### Stripe Webhook Errors
- Check webhook signing secret matches
- Verify webhook URL is correct
- Test with Stripe CLI: `stripe listen --forward-to localhost:3000/api/webhook/stripe`

### API Errors
- Check Vercel function logs
- Verify `ANTHROPIC_API_KEY` is valid
- Check API rate limits

## Environment-Specific Configuration

### Development
```bash
cp .env.example .env.local
# Fill in your development values
npm run dev
```

### Production (Vercel)
- All environment variables set in Vercel dashboard
- Automatic deployments on git push
- Preview deployments for pull requests

## Updating the Deployment

```bash
# Make your changes
git add .
git commit -m "Your changes"
git push

# Vercel will automatically deploy
```

## Rollback

If something goes wrong:
1. Go to Vercel dashboard
2. Navigate to "Deployments"
3. Find a working previous deployment
4. Click "Promote to Production"

## Domain Configuration (Optional)

1. Go to Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain: `aibizbrewery.com`
4. Follow DNS configuration instructions
5. Update `NEXTAUTH_URL` to your custom domain

## Security Checklist

- [ ] All API keys are set as environment variables (never in code)
- [ ] `NEXTAUTH_SECRET` is strong and unique
- [ ] MongoDB network access is configured
- [ ] Stripe is in live mode (not test mode)
- [ ] Google OAuth redirect URIs are correct
- [ ] CORS is properly configured
- [ ] Environment variables are set in production

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Issues: Report at your GitHub repository

---

**Your app will be live at:** `https://your-project-name.vercel.app`

Once deployed, test the health endpoint to verify everything is working!
