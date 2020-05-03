import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './global/styles'
import { Provider } from 'react-redux'
import { store } from './global/store'
import Layout from './components/layout'
import { Demo } from './global/styles'

const Calc = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </Provider>
  )
}

export default Calc
export { Demo }
