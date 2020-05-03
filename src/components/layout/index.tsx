import React from 'react'
import Display from '../../features/display'
import Row from '../row'
import Number from '../../features/number'
import Symbol from '../../features/symbol'
import Dot from '../../features/dot'
import Equality from '../../features/equality'
import Clear from '../../features/clear'
import Inverse from '../../features/inverse'
import * as styled from './index.styled'

const Layout = () => {
  return (
    <styled.Layout>
      <Display />
      <div>
        <Row>
          <Symbol value="%" />
          <Inverse />
          <Clear value="C" />
          <Symbol value="/" />
        </Row>
        <Row>
          <Number number={7} />
          <Number number={8} />
          <Number number={9} />
          <Symbol value="*" display="x" />
        </Row>
        <Row>
          <Number number={4} />
          <Number number={5} />
          <Number number={6} />
          <Symbol value="-" />
        </Row>
        <Row>
          <Number number={1} />
          <Number number={2} />
          <Number number={3} />
          <Symbol value="+" />
        </Row>
        <Row>
          <Number number={0} />
          <Dot />
          <Equality />
        </Row>
      </div>
    </styled.Layout>
  )
}

export default Layout
