# AI Biz Brewery ⚗️

10 AI-powered tools to build, market, and scale your business. No tech skills needed.

## Status

| Service | Status |
|---------|--------|
| Next.js App | ✅ Ready |
| Health Check API | ✅ `/api/health` |
| Google Auth | ✅ Ready (needs `GOOGLE_ID` / `GOOGLE_SECRET`) |
| MongoDB | ✅ Ready (needs `MONGODB_URI`) |
| Stripe Payments | ✅ Ready (needs Stripe keys) |
| AI Tools (Claude) | ✅ Ready (needs `ANTHROPIC_API_KEY`) |
| Email (Resend) | ✅ Ready (needs `RESEND_API_KEY`) |

## Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Fill in your values in .env.local

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Production

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for the full step-by-step guide to go live on Vercel.

### Required API Keys

- **Anthropic** — [console.anthropic.com](https://console.anthropic.com/) (`ANTHROPIC_API_KEY`)
- **MongoDB Atlas** — [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) (`MONGODB_URI`)
- **Google OAuth** — [console.cloud.google.com](https://console.cloud.google.com/) (`GOOGLE_ID`, `GOOGLE_SECRET`)
- **Stripe** — [dashboard.stripe.com](https://dashboard.stripe.com/) (`STRIPE_PUBLIC_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`)
- **Resend** — [resend.com](https://resend.com/) (`RESEND_API_KEY`)

## Verify Deployment

After deploying, hit the health check endpoint to confirm everything is running:

```bash
curl https://your-app.vercel.app/api/health
```

Expected response:
```json
{
  "status": "healthy",
  "services": { "api": "operational", "database": "operational" }
}
```
