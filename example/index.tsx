import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Calc, { Demo } from '../.'

const App = () => {
  return (
    <Demo>
      <Calc />
    </Demo>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
