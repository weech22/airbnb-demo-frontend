import React from 'react';
import 'normalize.css';
import 'flexboxgrid2/flexboxgrid2.css';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
