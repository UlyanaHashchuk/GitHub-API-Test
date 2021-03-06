## [GitHub-API-Test](https://ulyanahashchuk.github.io/GitHub-API-Test/) :woman_scientist:

Live demo: [GitHub-API-Test](https://ulyanahashchuk.github.io/GitHub-API-Test/)

`GitHub-API-Test` is a React SPA by using Create React App and [GitHub API](https://github.com/) to do asynchronous calls. It includes two pages:

1. First page where GitHub user profile is fetched with input and button elements to show user profile details (`avatar`, `name`, `bio`, `public_repos`).
2. Second page where is shown user `public_repos` is linked from the first page at different page route. On second page you can also:
   - Filter public repositories by the repository name with an input element and sort (highest first) by GitHub stars with checkbox element.
   - By clicking public repository name, you will be linked to that repository on [GitHub](https://github.com/).
   - By clicking "..." in repository field, you will be linked to third page.
3. Third page shows clicked repository details from the second page.
   - Used `react-redux` and `query params`.
   - Clicking repository `name` will link to the GitHub repository.
   - If the repository has a `homepage` it will be shown in details and also is clickable.

`Tip:` You can go back to first search page by clicking the top left name `GitHub API Test`.

Built with:

- [x] React, React Hooks, React-Redux, ES6, ESlint, Prettier
- [x] Styled Components, Stylelint
- [x] React Router, Query params
- [x] Input Validations
