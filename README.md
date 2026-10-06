# Thesis & Internship Opportunities

GitHub Pages website for Roberta Calegari's Master's thesis, project thesis and internship opportunities at the University of Bologna.

## Files

- `index.html` — main public page
- `assets/css/style.css` — visual design
- `assets/js/filter.js` — cluster filter interactions

## Publish with GitHub Pages

1. Create a new GitHub repository, for example `thesis-opportunities`.
2. Upload all files from this folder, keeping the same directory structure.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder, then save.
6. GitHub will publish the site at the repository's GitHub Pages URL.

No build step is required: this is a static HTML/CSS/JavaScript site.

## Updating the page

To add or modify an opportunity, edit `index.html`. Each project is a `<article class="card">` with a `data-cluster` value matching one or more filters: `trustworthy`, `civic`, `agentic`, `efficient`, or `data`.

Keep the project structure consistent:

- cluster
- title
- short summary
- keywords
- possible directions
- project type badges

## Suggested workflow

Use the page as the stable overview of your research agenda. When a topic is no longer available, change its wording or add an availability label rather than deleting it, so the research direction remains visible.
