Tests are executed with jest or by running:
```bash
npm run test
```

During development you may find it beneficial to continously execute the tests. This works by running:
```bash
npm run test-watch
```
This also prints the current test coverage.

MacOS users might need to upgrade watchman with `brew install watchman` when experiencing troubles with the watch mode. See this issue for details: https://github.com/facebook/jest/issues/1767
