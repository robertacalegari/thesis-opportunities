# Thesis & Internship Opportunities — GitHub Pages

A lightweight GitHub Pages site for Prof. Roberta Calegari's thesis, project-thesis and internship opportunities.

## Publish on GitHub Pages

1. Create a repository, for example `thesis-opportunities`.
2. Upload the contents of this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.

The site is static HTML/CSS/JavaScript, so no build step is required.

## Structure

- `index.html` — page content and research-cluster cards
- `assets/css/style.css` — visual design and responsive layout
- `assets/js/filter.js` — interactive research-area panel
- `.nojekyll` — disables Jekyll processing

## Interaction

Research-area cards open the corresponding thesis topics in a compact panel directly below the cards. The page does not navigate to a long list of projects.

To add or edit opportunities, update the `clusters` object in `assets/js/filter.js`.
