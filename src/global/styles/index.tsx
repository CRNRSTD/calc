import styled, { createGlobalStyle } from 'styled-components/macro'

export const Button = styled.button.attrs({
  type: 'button'
})`
  background-color: transparent;
  border: 0;
  margin: 0;
  outline: 0;
  padding: 0;
`

export const theme = {
  white: '#fff',
  topRowGrey: '#EFEFEF',
  topRowLightGrey: '#F4F4F4',
  topRowLightestGrey: '#F2F2F2',
  grey: '#F4F4F4',
  lightGrey: '#F2F2F2',
  lightestGrey: '#F1F1F1',
  lightestPurple: '#7D38DB',
  lightPurple: '#7734D5',
  purple: '#7431D1',
  darkPurple: '#7029CF',
  pink: '#DD0E76',
  dark: '#212121'
}

const GlobalStyle = createGlobalStyle`
  body: {
    margin: 0;
  }
`

export default GlobalStyle
