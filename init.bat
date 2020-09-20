call yarn init
call yarn add @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome ^
@fortawesome/free-regular-svg-icons ^
@fortawesome/free-solid-svg-icons ^
react react-dom ^
redux react-redux ^
redux-saga ^
final-form react-final-form ^
react-router-dom ^
lodash ^
styled-components

call yarn add -D @babel/core ^
@babel/plugin-proposal-class-properties ^
@babel/plugin-proposal-export-default-from ^
@babel/plugin-proposal-object-rest-spread ^
@babel/plugin-proposal-optional-chaining ^
@babel/plugin-transform-runtime ^
@babel/preset-env @babel/preset-react ^
@types/react @types/react-dom ^
@types/react-router-dom ^
webpack webpack-cli webpack-dev-server ^
webpack-merge ^
babel-loader file-loader ^
favicons-webpack-plugin ^
html-webpack-plugin ^
mini-css-extract-plugin ^
node-sass sass-loader css-loader ^
typescript awesome-typescript-loader

if %errorlevel% neq 0 pause

exit