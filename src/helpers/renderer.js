import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config'
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import Routes from '../react/Routes';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core';
import theme from '../react/theme/theme';

export default (req, store, context) => {

    const sheets = new ServerStyleSheets();

    const content = renderToString(
        sheets.collect(<ThemeProvider theme={theme}>
            <Provider store={store}>
                <StaticRouter location={req.path} context={context}>
                    {renderRoutes(Routes)}
                </StaticRouter>
            </Provider>
        </ThemeProvider>)
    );

    const helmet = Helmet.renderStatic();

    const html = `
        <html>
            <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            <style id="jss-server-side">${sheets.toString()}</style>
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                window.INITIAL_STATE = ${serialize(store.getState())}
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;

    return html;
}