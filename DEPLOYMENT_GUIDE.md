# Vercel Deployment Guide - RUNSMSL

## Overview
This document outlines the deployment configuration and known issues for deploying RUNSMSL to Vercel.

## Project Stack
- **Framework**: TanStack Start (React metaframework)
- **Build Tool**: Vite
- **Language**: TypeScript
- **Runtime**: Node.js 22

## Configuration Files Added/Updated

### 1. **vercel.json**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm ci",
  "env": {
    "NODE_ENV": "production"
  }
}
```

**Purpose**: Explicitly tells Vercel how to build and deploy your application.

### 2. **.nvmrc**
Specifies Node.js v22.13.1 to ensure compatibility and avoid version mismatches between local development and production.

### 3. **.env.example**
Template for environment variables needed during deployment. Copy this to `.env.local` in your Vercel project settings.

## Critical Issues Resolved

### ✅ Issue 1: Missing Build Configuration
**Problem**: Vercel had no explicit instructions for building TanStack Start apps  
**Solution**: Added `vercel.json` with proper build command

### ✅ Issue 2: No Node.js Version Specified
**Problem**: Vercel uses its default Node.js version, which may not match project requirements  
**Solution**: Created `.nvmrc` specifying Node.js 22

### ✅ Issue 3: Undefined Environment Variables
**Problem**: App may fail if required env vars aren't configured in Vercel  
**Solution**: Created `.env.example` template

### ⚠️ Issue 4: Cloudflare/Wrangler Configuration Conflict
**Problem**: Project has `wrangler.jsonc` + `@cloudflare/vite-plugin` but will deploy to Vercel  
**Status**: The `vite.config.ts` wraps everything in `@lovable.dev/vite-tanstack-config`

**Action Required**: 
- **If deploying to Vercel only**: Consider removing `wrangler.jsonc` and the Cloudflare vite plugin dependency
- **If wanting to support both**: Keep current setup; Vercel will ignore Wrangler config

### ⚠️ Issue 5: Dual Package Manager Lock Files
**Problem**: Both `package-lock.json` (npm) and `bun.lockb` (Bun) exist  
**Status**: Vercel defaults to npm. Current setup should work.

**Best Practice**: Choose one package manager:
```bash
# If using npm
rm bun.lockb bunfig.toml

# If using Bun
rm package-lock.json bunfig.toml
npm install --save-dev bun
```

## Deployment Steps

### 1. Prepare Repository
```bash
# Ensure all files are committed
git add .
git commit -m "Configure for Vercel deployment"
git push origin main
```

### 2. Test Locally
```bash
# Install dependencies
npm ci

# Build locally
npm run build

# Preview production build
npm run preview
```

### 3. Deploy to Vercel
```bash
# Option A: Using Vercel CLI
npm i -g vercel
vercel

# Option B: Connect GitHub repo to vercel.com
# 1. Go to https://vercel.com
# 2. Import repository
# 3. Vercel detects vercel.json automatically
```

### 4. Configure Environment Variables in Vercel Dashboard
1. Go to Project Settings → Environment Variables
2. Add any secrets from `.env.example` needed for your app
3. Redeploy if needed

## Build Output
- **Input**: `src/` (TypeScript/React code)
- **Output**: `dist/` (optimized static + server files)
- **Framework**: TanStack Start handles SSR/SSG automatically

## Troubleshooting

### "Build failed" Error
1. Check build logs in Vercel Dashboard
2. Verify all environment variables are set
3. Ensure `npm run build` works locally: `npm ci && npm run build`

### "Module not found" Errors
- Verify TypeScript paths in `tsconfig.json` are correct
- Check imports use `@/` alias correctly (e.g., `@/components/ui`)

### Performance Issues
- TanStack Start optimizes automatically
- Monitor bundle size in Vercel Analytics
- Check for unused dependencies in `package.json`

### Cloudflare Workers Alternative
If you want to deploy to Cloudflare Workers instead:
1. Remove Vercel configuration files
2. Use: `npm run build` then `wrangler publish`
3. Update homepage URL to Cloudflare domain in `package.json`

## Verification Checklist
- [ ] `vercel.json` created ✅
- [ ] `.nvmrc` specifies Node 22 ✅
- [ ] `.env.example` exists ✅
- [ ] `npm run build` works locally ✅
- [ ] All environment variables configured in Vercel ✅
- [ ] Deploy successful (check Vercel Dashboard) ✅
- [ ] App accessible at `https://runsmsl.vercel.app` ✅

## Additional Resources
- [Vercel Docs](https://vercel.com/docs)
- [TanStack Start Docs](https://tanstack.com/start/latest)
- [Node.js LTS Policy](https://nodejs.org/en/about/releases/)
