### ESLint Installation

**Step 1** Install our shareable eslint config

```
$ npm install --save-dev @coverhound/eslint-config-coverhound
```

**Step 2** Create an .eslintrc.json

```
{
  "extends": "@coverhound/coverhound",
  "rules": {
    // add custom repo rules here
    // however, submit an issue if you think we should
    // add a rule to the shareable config
  }
}
```
