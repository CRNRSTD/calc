import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Calc from '../.';

const App = () => {
  return (
    <Calc />
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
