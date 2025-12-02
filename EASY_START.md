# 🚀 Easy Step-by-Step Guide to Run Your Portfolio

## Step 1: Open Your Terminal/Command Prompt

### Windows Users:
1. Press `Windows Key + R`
2. Type: `powershell`
3. Press `Enter`

### Mac Users:
1. Press `Command + Space`
2. Type: `Terminal`
3. Press `Enter`

### Linux Users:
1. Press `Ctrl + Alt + T`

---

## Step 2: Go to Your Project Folder

Copy and paste this command in your terminal:

### Windows (PowerShell):
```
cd c:\Users\Harsha_k\Desktop\Harsha\my-portfolio
```

### Mac:
```
cd ~/Desktop/Harsha/my-portfolio
```

### Linux:
```
cd ~/Desktop/Harsha/my-portfolio
```

**What this does:** Takes you inside your project folder

---

## Step 3: Download All Packages

Type this command and press `Enter`:

```
npm install
```

**What this does:** Downloads all the code your project needs (React, Framer Motion, Tailwind CSS, etc.)

**Wait time:** 2-3 minutes (it's downloading about 300+ packages)

**You'll see:** Lots of downloading progress

---

## Step 4: Start Your Website

Type this command and press `Enter`:

```
npm run dev
```

**What this does:** Starts a local server to run your website

**You'll see something like:**
```
✓ Ready in 1310ms
- Local: http://localhost:3000
```

---

## Step 5: Open Your Website

### Option A: Click the Link (Easiest)
- Hold `Ctrl` (Windows/Linux) or `Command` (Mac)
- Click on `http://localhost:3000` in the terminal

### Option B: Copy and Paste
1. Open your web browser (Chrome, Firefox, Safari, Edge, etc.)
2. Go to the address bar
3. Type: `http://localhost:3000`
4. Press `Enter`

**You should see:** Your Hero section with your name "Harsha K"

---

## Step 6: See Your Changes (Optional)

If you want to edit the Hero component:

1. Open the file: `src/components/Hero.jsx`
2. Edit something (like change "Harsha K" to your name)
3. Save the file (`Ctrl+S` or `Cmd+S`)
4. Go back to your browser
5. **Auto-refresh!** The page updates automatically

---

## Step 7: Stop Running Your Website

When you want to stop:

1. Go back to the terminal
2. Press `Ctrl + C` (works on Windows, Mac, and Linux)

**You'll see:** The terminal returns to normal

---

## Troubleshooting

### Problem: "Port 3000 already in use"

**Solution:** Use a different port

```
npm run dev -- -p 3001
```

Then go to: `http://localhost:3001`

---

### Problem: "command not found"

**Solution:** Make sure you're in the right folder

Check you see this in your terminal:
```
your-computer my-portfolio %
```

If not, use Step 2 again.

---

### Problem: "npm: command not found"

**Solution:** Install Node.js from https://nodejs.org/

Download the **LTS version** (Long Term Support)

---

### Problem: Nothing happens / Blank page

**Solution 1:** Wait a few seconds, the page might still be loading

**Solution 2:** Hard refresh your browser:
- Windows/Linux: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

**Solution 3:** Check your terminal for errors (red text)

---

## Quick Commands Reference

| Command | What It Does |
|---------|-------------|
| `cd my-portfolio` | Go to project folder |
| `npm install` | Download packages |
| `npm run dev` | Start website |
| `Ctrl + C` | Stop website |
| `npm run build` | Make for production |
| `npm start` | Run production version |

---

## The Easiest Way (Copy & Paste Everything)

### Windows PowerShell:
```powershell
cd c:\Users\Harsha_k\Desktop\Harsha\my-portfolio
npm install
npm run dev
```

### Mac/Linux Terminal:
```bash
cd ~/Desktop/Harsha/my-portfolio
npm install
npm run dev
```

**Just copy, paste, and press Enter three times!**

---

## What You Should See

After Step 5, you should see:

1. ✅ Your name "Harsha K" at the top
2. ✅ Your title "Aspiring Custom Software Engineer..."
3. ✅ Skills changing: React → Python → Cybersecurity → Problem Solver
4. ✅ Two buttons: "Download Resume" and "Connect on LinkedIn"
5. ✅ A down arrow bouncing at the bottom

---

## Next Steps After It's Running

1. **Edit your content:** Change text in `src/components/Hero.jsx`
2. **Add more sections:** Create more React components
3. **Deploy to web:** Use Vercel or Netlify (see `RUN_GUIDE.md`)
4. **Add resume:** Put `HarshaK.pdf` in `public/` folder

---

## Common Questions

### Q: How long does `npm install` take?
**A:** 2-3 minutes on first run. Next time it's faster.

### Q: Can I edit files while it's running?
**A:** Yes! Save files and the website auto-updates.

### Q: How do I go back to the terminal after clicking a link?
**A:** Click on the terminal window in your taskbar/dock.

### Q: Is my website live on the internet now?
**A:** No. It's only on your computer. To share, use Vercel/Netlify.

### Q: Can I use a different port?
**A:** Yes! Use `npm run dev -- -p 3001` for port 3001.

---

## Getting Help

If something doesn't work:

1. Read the error message in the terminal (red text)
2. Try stopping (`Ctrl + C`) and starting again
3. Try clearing cache: Delete `node_modules` folder and run `npm install` again
4. Restart your computer

---

## You're All Set! 🎉

You now have your portfolio running locally on your computer.

**Next time you want to run it:**
1. Open terminal
2. Type: `cd c:\Users\Harsha_k\Desktop\Harsha\my-portfolio` (or your path)
3. Type: `npm run dev`
4. Open: `http://localhost:3000`

**That's it!**
