# html-loader-jest

[html-loader](https://github.com/webpack-contrib/html-loader) [jest](https://github.com/facebook/jest) plugin

## Install
```
npm install --save-dev github:gpincheiraa/html-loader-jest
```
## Integration with jest

Define `html-loader-jest` as a transformer for your html files included in your source files under test. In the "transform" key for jest configuration in the `package.json` add the following:

```json
"transform": {
  "^.+\\.html?$": "html-loader-jest"
},
```

@TODO: Support .pug files
@TODO: Add tests and TRAVIS CI
