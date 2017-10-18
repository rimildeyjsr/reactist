First clone the repository to your local machine by running:
```sh
git clone git@github.com:Doist/reactist.git
```

You can run the build task in watch mode with
```sh
npm run build-watch
```
this will update the build artifacts whenever you change something. This is helpful if you linked your local version of reactist into your project and want to see the changes there.

If you want to develop a new component or change an existing one we recommend to do it directly in styleguidist. You can boot the development server with hot reloading by running:
```sh
npm run styleguide
```
Changes you make on the component will be instantly reflected on the component itself

To produce a new build (e.g. before submitting a PR) run:
```sh
npm run build
```

You can run our eslint checks with
```sh
npm run check
```
It is mandatory to fix all linting errors before you make a pull request.

**Tip:** You can fix most of the errors automatically by running:
```sh
npm run check -- --fix
```

