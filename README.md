PORTFOLIO REDESIGN — UPDATED FILE GUIDE

WHAT IS INCLUDED
- App.jsx.txt: complete replacement for src/App.jsx, including the visual redesign and a Download CV button.
- index.html.txt: complete replacement for the root index.html.
- portfolio/: project folder containing the updated source and existing public assets.

HOW TO APPLY
1. Back up your current portfolio folder.
2. Replace src/App.jsx with the contents of App.jsx.txt. Save the filename as App.jsx (not App.jsx.txt).
3. Replace the root index.html with the contents of index.html.txt.
4. You do NOT need to replace or edit src/App.css. The redesigned page styles are included in App.jsx in its <style> block. Your existing App.css can remain untouched.
5. Put your updated CV PDF in the public folder and name it exactly: resume.pdf
   Expected path: portfolio/public/resume.pdf
   If you use a different filename, update the href in App.jsx from /resume.pdf to that filename.
6. Keep package.json, src/main.jsx, src/index.css, public/picture.png, favicon and other existing assets.
7. From the project root, run:
   npm install
   npm run build
8. If the build succeeds, commit and push your changes, then redeploy on Vercel.

CV DOWNLOAD BEHAVIOUR
The hero section now has a Download CV link. It downloads /resume.pdf as Raheem-Ajibona-CV.pdf. Replace the existing old PDF in public with your corrected CV before deployment.

MONTHLY PORTFOLIO CHECK
The monthly link-check task is a ChatGPT scheduled task. It is separate from the website source code and does not need to be added to this project.
