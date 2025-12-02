# 🎯 Run Portfolio Using VS Code Terminal

## Step 1: Open Your Project in VS Code

### Option A: Open Folder
1. Open **VS Code**
2. Click `File` → `Open Folder`
3. Navigate to: `C:\Users\Harsha_k\Desktop\Harsha\my-portfolio`
4. Click `Select Folder`

### Option B: Drag and Drop
1. Open **VS Code**
2. Drag the `my-portfolio` folder into VS Code
3. Drop it (it will open the folder)

### Option C: Command Line
Open PowerShell and type:
```powershell
code c:\Users\Harsha_k\Desktop\Harsha\my-portfolio
```

---

## Step 2: Open Terminal in VS Code

### Method 1: Menu (Easiest)
1. Click `Terminal` in the top menu
2. Click `New Terminal`

### Method 2: Keyboard Shortcut
Press: `Ctrl + ~` (Control + Tilde)

**You should see:** A terminal panel opens at the bottom of VS Code

---

## Step 3: You're Already in the Right Folder!

Look at the terminal - it should show:
```
PS C:\Users\Harsha_k\Desktop\Harsha\my-portfolio>
```

If you see a different path, type:
```powershell
cd c:\Users\Harsha_k\Desktop\Harsha\my-portfolio
```

---

## Step 4: Install Packages

Type this command and press `Enter`:
```
npm install
```

**Wait time:** 2-3 minutes

**You'll see:** Lines of downloads and progress bars

---

## Step 5: Start Your Website

Type this command and press `Enter`:
```
npm run dev
```

**You'll see:**
```
✓ Ready in 1310ms
- Local:    http://localhost:3000
- Network:  http://192.168.31.244:3000
```

---

## Step 6: Click the Link (In Terminal)

In the VS Code terminal, you'll see:
```
http://localhost:3000
```

**Hold `Ctrl` and click it** - Your website opens automatically!

Or manually type in browser: `http://localhost:3000`

---

## Step 7: See Your Portfolio

You should see:
- ✅ "Harsha K" heading
- ✅ Typewriter skill animation
- ✅ Resume and LinkedIn buttons
- ✅ Bouncing scroll arrow

---

## Step 8: Edit Files (Auto-Refresh)

### Edit Your Hero Component:
1. In VS Code, click on `src/components/Hero.jsx`
2. Find line with `"Harsha K"`
3. Change it to your name
4. Save: `Ctrl + S`
5. Go back to browser
6. **Page auto-refreshes!** You see your changes instantly

---

## Step 9: Stop Running

In the VS Code terminal:
1. Press `Ctrl + C`
2. Type `y` and press `Enter`

---

## Useful VS Code Terminal Features

### Open Multiple Terminals
Click the `+` icon next to terminal name to add another

### Close Terminal
Click the `X` on the terminal tab

### Maximize/Minimize Terminal
Click the arrow next to terminal name

### Run Multiple Commands
Type commands one by one:
```
npm install
npm run dev
```

---

## Quick Reference

| What You Want | What To Type |
|---------------|-------------|
| Go to project | `cd c:\Users\Harsha_k\Desktop\Harsha\my-portfolio` |
| Install packages | `npm install` |
| Start website | `npm run dev` |
| Stop website | `Ctrl + C` then `y` |
| Lint code | `npm run lint` |
| Build for production | `npm run build` |

---

## Troubleshooting

### Terminal Says: "Port 3000 already in use"

Type:
```
npm run dev -- -p 3001
```

Then go to: `http://localhost:3001`

---

### Terminal Says: "command not found"

Check you typed the command correctly. Look for typos.

---

### Website Not Loading

1. Check terminal for errors (red text)
2. Stop: `Ctrl + C`
3. Clear cache and reinstall:
   ```
   rm -r node_modules
   npm install
   npm run dev
   ```

---

## VS Code Tips

### Zen Mode (Distraction-Free Coding)
Press: `Ctrl + K + Z`

Press it again to exit

### Split Terminal View
Right-click on terminal tab → `Split Terminal`

### View File Tree
Press: `Ctrl + B` to show/hide file explorer

### Find Files
Press: `Ctrl + P` and type filename

### Open Integrated Terminal
Press: `Ctrl + ~`

---

## Your Full Workflow

1. **Open VS Code with your project**
   ```powershell
   code c:\Users\Harsha_k\Desktop\Harsha\my-portfolio
   ```

2. **Open terminal** (`Ctrl + ~`)

3. **Install packages** (first time only)
   ```
   npm install
   ```

4. **Start dev server**
   ```
   npm run dev
   ```

5. **Click or open** `http://localhost:3000`

6. **Edit files** - auto-refreshes in browser

7. **Stop** when done: `Ctrl + C`

---

## Next Time (Much Faster)

Just do steps 1, 2, 4, and 5:

1. Open VS Code with project
2. Open terminal
3. Type: `npm run dev`
4. Open: `http://localhost:3000`

**Done!** ✅

---

## Pro Tips

### Restart Server Quickly
Instead of `Ctrl + C` then `npm run dev`:
- Just press `Ctrl + C` then `Up Arrow` key (recalls last command)
- Press `Enter`

### View Console Errors
In your browser:
- Press `F12` to open Developer Tools
- Click `Console` tab
- See any errors in red

### Live Reload Issues
Sometimes the auto-refresh doesn't work:
- Manual refresh: `Ctrl + Shift + R` (hard refresh)
- This clears browser cache

---

## Still Having Issues?

1. **Check terminal shows no errors** (look for red text)
2. **Try different port:** `npm run dev -- -p 3001`
3. **Restart everything:**
   - Close VS Code
   - Reopen it
   - Run `npm run dev` again

---

**You're ready to code!** 🚀

Open VS Code, press `Ctrl + ~`, and start building your portfolio!
