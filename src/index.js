import React from 'react';
import './styles/App.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {render} from "react-snapshot";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
