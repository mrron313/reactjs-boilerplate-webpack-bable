import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Sample React JS Project';

ReactDOM.render(
    <div>{title}</div>,
    document.getElementById('app')
);

module.hot.accept();