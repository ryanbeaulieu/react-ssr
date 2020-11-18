import React from 'react';
import {renderToString} from 'react-dom/server';

import Home from '../react/components/Home/Home';

export default () => {
    const content = renderToString(<Home />);

    const html = `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;

    return html;
}