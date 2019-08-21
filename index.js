import React from 'react';
import App from "./App";
import ReactDOM from "react-dom";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();