import React, { FunctionComponent } from 'react'
import * as styled from './index.styled'

interface ButtonProps {
  onClick?: (value: any) => void
  value: string
}

const Button: FunctionComponent<ButtonProps> = ({
  onClick,
  value
}) => {
  return (
    <styled.Button onClick={onClick}>
      <styled.ButtonInner>
        {value}
      </styled.ButtonInner>
    </styled.Button>
  )
}

export default Button
