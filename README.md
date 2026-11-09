# Idorenyin Bassey Inyang — Personal Website

A simple, responsive static website built with HTML, CSS and JavaScript.

## Open in Visual Studio Code
1. Extract this ZIP file to a folder on your computer.
2. Open Visual Studio Code.
3. Select **File → Open Folder** and choose `Idorenyin_Bassey_Inyang_Website`.
4. Open `index.html` to view the homepage.

## Run the website

**Recommended: Live Server extension**
1. In VS Code, open Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`).
2. Install **Live Server** (publisher: Ritwick Dey).
3. Right-click `index.html` and select **Open with Live Server**.

Alternatively, if Python 3 is installed, open the VS Code terminal in this folder and run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Project structure

```text
Idorenyin_Bassey_Inyang_Website/
├── index.html
├── about.html
├── projects.html
├── planner.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── profile.png
    ├── richzone_showroom.png
    ├── digiforte_tshirt.png
    └── construction_site.png
```

Keep the `css`, `js`, and `images` folders in the same location relative to the HTML files so the site assets continue to load. This is a static website; no build step or npm installation is required.
