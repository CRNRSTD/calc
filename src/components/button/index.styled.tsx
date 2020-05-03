import styled from 'styled-components/macro'
import { Button as __Button } from '../../global/styles'

export const Button = styled(__Button)`
  font-family: 'Jost', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  position: relative;
  width: 25%;

  ::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`

export const ButtonInner = styled.span`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
`
