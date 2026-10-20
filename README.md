# Kexin Zhang — personal homepage

Static site: plain HTML + CSS + a small script, with no build step or framework.

```
index.html              bio, research questions, education, honors, experience
assets/js/content.js    news, publications, professional activities  <- edit most often
assets/js/render.js     turns content.js into HTML (no need to touch)
assets/css/style.css    all styling; colors are variables at the top
assets/img/             profile photo
```

## Common edits

- **Add news:** add a line at the top of `news` in `content.js`. Only the first `newsShown` items show; older ones go behind "Show older news".
- **Add a paper:** copy a block in `publications`. `selected: true` shows it by default; `false` puts it behind "Show all publications". Buttons appear only for links you fill in (`paper`, `code`, `project`, `slides`, `video`, `poster`).
- **Link to a paper from text:** use `#pub-<id>`, e.g. `<a href="#pub-gridbench">`.
- **Professional activities:** fill `activities` in `content.js`. The section and its nav link appear automatically once the list is non-empty.
- **Footer date:** `lastUpdated` in `content.js`.

## Preview locally

```
python3 -m http.server 8000     # then open http://localhost:8000
```

## Deploy on GitHub Pages

1. Create a repo named `<your-github-username>.github.io`.
2. Push this folder's contents to `main` (leave out `CV__Kexin_Zhang.pdf` and the hash-named `.jpg` in the root; the photo copy lives in `assets/img/`).
3. Settings → Pages → Source: "Deploy from a branch", `main` / root.
   The site is live at `https://<your-github-username>.github.io` within a minute or two.
