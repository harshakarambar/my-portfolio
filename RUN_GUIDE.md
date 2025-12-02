# How to Run the Portfolio on Different Systems

## Prerequisites (All Systems)
1. Install **Node.js** (v18 or higher): https://nodejs.org/
2. Install **Git**: https://git-scm.com/
3. Navigate to the project folder

---

## Windows (PowerShell / CMD)

### First Time Setup
```powershell
cd c:\Users\Harsha_k\Desktop\Harsha\my-portfolio
npm install
npm run dev
```

### Run Development Server
```powershell
npm run dev
```
Then open: **http://localhost:3000**

### Build for Production
```powershell
npm run build
npm start
```

### Lint Code
```powershell
npm run lint
```

---

## macOS (Terminal/Zsh)

### First Time Setup
```bash
cd ~/Desktop/Harsha/my-portfolio
npm install
npm run dev
```

### Run Development Server
```bash
npm run dev
```
Then open: **http://localhost:3000**

### Build for Production
```bash
npm run build
npm start
```

### Lint Code
```bash
npm run lint
```

---

## Linux (Ubuntu/Debian)

### First Time Setup
```bash
cd ~/Desktop/Harsha/my-portfolio
npm install
npm run dev
```

### Run Development Server
```bash
npm run dev
```
Then open: **http://localhost:3000**

### Build for Production
```bash
npm run build
npm start
```

### Lint Code
```bash
npm run lint
```

---

## Using Docker (Any System)

### Prerequisites
- Install Docker: https://www.docker.com/

### Create Dockerfile
Create a file named `Dockerfile` in the project root:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Run in Docker
```bash
# Build image
docker build -t my-portfolio .

# Run container
docker run -p 3000:3000 my-portfolio
```

Then open: **http://localhost:3000**

---

## Using Docker Compose (Any System)

### Prerequisites
- Install Docker Desktop: https://www.docker.com/products/docker-desktop

### Create docker-compose.yml
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

### Run
```bash
docker-compose up
```

Then open: **http://localhost:3000**

---

## Using Vercel (Cloud Deployment)

### Prerequisites
- GitHub account
- Vercel account: https://vercel.com

### Steps
1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"
6. View at: `your-project.vercel.app`

---

## Using Netlify (Cloud Deployment)

### Prerequisites
- GitHub account
- Netlify account: https://netlify.com

### Steps
1. Push code to GitHub
2. Go to https://netlify.com
3. Click "Add new site" → "Import an existing project"
4. Select GitHub repository
5. Set build command: `npm run build`
6. Set publish directory: `.next`
7. Click "Deploy"

---

## Environment Variables

Create `.env.local` in the project root:

```env
# API endpoints
NEXT_PUBLIC_API_URL=http://localhost:3000

# Your info
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Troubleshooting

### Port 3000 Already in Use

**Windows (PowerShell):**
```powershell
# Find process using port 3000
Get-NetTCPConnection -LocalPort 3000

# Kill it (replace PID with the process ID)
Stop-Process -Id <PID> -Force

# Or use different port
npm run dev -- -p 3001
```

**macOS/Linux:**
```bash
# Find process using port 3000
lsof -i :3000

# Kill it (replace PID with the process ID)
kill -9 <PID>

# Or use different port
npm run dev -- -p 3001
```

### Clear Cache & Dependencies

**All Systems:**
```bash
# Remove node_modules
rm -r node_modules

# Remove package lock
rm package-lock.json

# Reinstall
npm install
npm run dev
```

### Node Version Mismatch

Check your Node version:
```bash
node --version
```

Should be **v18 or higher**. If not, download from: https://nodejs.org/

---

## Available Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm run lint` | Check code quality |
| `npm test` | Run tests (when added) |

---

## Quick Comparison

| Method | Setup Time | Best For | Cost |
|--------|-----------|----------|------|
| Local Dev | 2 min | Development | Free |
| Docker | 5 min | Testing | Free |
| Vercel | 1 min | Production | Free/Paid |
| Netlify | 1 min | Production | Free/Paid |

---

## Running Multiple Versions

**Port 3000 (default):**
```bash
npm run dev
```

**Port 3001:**
```bash
npm run dev -- -p 3001
```

**Port 3002:**
```bash
npm run dev -- -p 3002
```

Then open: `http://localhost:300X`

---

## Fast Setup (Copy & Paste)

### Windows (PowerShell)
```powershell
cd c:\Users\Harsha_k\Desktop\Harsha\my-portfolio; npm install; npm run dev
```

### macOS/Linux (Bash)
```bash
cd ~/Desktop/Harsha/my-portfolio && npm install && npm run dev
```

---

## Need Help?

- **Next.js Docs**: https://nextjs.org/docs
- **Node.js Docs**: https://nodejs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Docker Docs**: https://docs.docker.com/
