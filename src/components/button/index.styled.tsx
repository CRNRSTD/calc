import styled from 'styled-components/macro'
import { Button as __Button } from '../../global/styles'

export const Button = styled(__Button)`
  align-items: center;
  display: flex;
  height: 100px;
  justify-content: center;
  position: relative;
  width: 100px;
`

export const Plus = styled.span`
  font-size: 50%;
  left: 0;
  position: absolute;
  top: 50%;
  transform: translate(50%, 50%);
`

export const Slash = styled.span`
  font-size: 100%;
`

export const Minus = styled(Plus)`
  left: auto;
  right: 0;
`
