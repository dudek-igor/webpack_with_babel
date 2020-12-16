# Webpack + Babel

- `npm run dev` - Development build with watch flag
- `npm start` - Webpack server on :5000 PORT
- `npm run build` - Production build

##### Config

- eslint - AirBnb, ES6+
- prettier,
- husky
- babel without ant plugins

##### Do it yourself

- if you want static files use [CopyWebpackPlugin](https://webpack.js.org/plugins/copy-webpack-plugin/),
- if you want usege [sass](https://webpack.js.org/loaders/sass-loader/)
- if you use images add [Image webpack loader](https://www.npmjs.com/package/image-webpack-loader) for compress

##### Info - PL

1. HMR & hot in dev-serve - wyłącza liveReload plików \*.html. Pewnie w przyszłości będzie jakiś update lub plugin,
2. Babel - `babel-loader` - przeparswouje nam pliki z ES6+ na ES5. Używa gotowych konfiguracji - `presets` - które autoamtycznie dostosowują wyjściowy kod JS na podstawie - `browserlist` - umieszczonej w package.json. By pewne najnowsze funkcjonalności działały, a nie ma ich jeszcze w presetach, trzeba doinstalować - `pluginy`.
3. Babel & Eslint
   - po pierwsze w procesie budla możemy przeprocesowac wskazane pliki/folder przed bundlem poprzez eslinta dzieki (ESlintWebpackPLugin)[https://www.npmjs.com/package/eslint-webpack-plugin] - zastępuje on eslint-loader, który miewał błędy. Plugin ten bierze ustawienia z `.eslintrc`.
   - W tej konfiguracji Eslint parsuje pliki poprzez `@babel/eslint-parser`, który nie wymaga konfiguracji - `.babelrc` - ponieważ ustawienia mamy w webpacku, przy `babel-loader`
