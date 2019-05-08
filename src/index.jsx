import * as React from 'react';
import ReactDOM from 'react-dom';

import {App} from './components/app/app';

const appContainer = document.querySelector(`#root`);

const init = () => {
  ReactDOM.render(
      <App/>,
      appContainer
  );
};

init();
