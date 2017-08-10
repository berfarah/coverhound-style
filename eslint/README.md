### Introduction
This is meant to be Coverhound's living style guide for writing consistent javascript.
It extends [Airbnb's eslint configuration](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).
If you have any suggestions, [submit an issue](https://github.com/coverhound/eslint-config-coverhound/issues)!

### Installation

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

### Editor Integration
Visit ESLint's [integration guide](http://eslint.org/docs/user-guide/integrations) to enable ESLint in your editor of choice.
