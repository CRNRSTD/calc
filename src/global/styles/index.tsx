import styled, { createGlobalStyle } from 'styled-components/macro'

export const Button = styled.button.attrs({
  type: 'button',
})`
  background-color: transparent;
  border: 0;
  margin: 0;
  outline: 0;
  padding: 0;
`

export const Demo = styled.div`
  margin: 0 auto;
  max-width: 300px;
`

export const theme = {
  white: '#fff',
  topRowGrey: '#e1e1e1',
  topRowLightGrey: '#e4e4e4',
  topRowLightestGrey: '#e8e8e8',
  grey: '#e4e4e4',
  lightGrey: '#e8e8e8',
  lightestGrey: '#f1f1f1',
  lightestPurple: '#7D38DB',
  lightPurple: '#7734D5',
  purple: '#7431D1',
  darkPurple: '#7029CF',
  pink: '#DD0E76',
  dark: '#212121',
  orange: '#EB7766',
}

const GlobalStyle = createGlobalStyle`
  html,
  body: {
    margin: 0;
  }

  * {
    font-family: 'Jost', sans-serif;
  }
`

export default GlobalStyle
