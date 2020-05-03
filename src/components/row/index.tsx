import React, { FunctionComponent } from 'react'
import * as styled from './index.styled'

const Row: FunctionComponent = ({ children }) => {
  return (
    <styled.Row>
      {children}
    </styled.Row>
  )
}

export default Row
