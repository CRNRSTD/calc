import React, { FunctionComponent } from 'react'
import * as styled from './index.styled'

interface DisplayProps {
  expression: string[]
  result: string
}

const Display: FunctionComponent<DisplayProps> = ({ expression, result }) => {
  return (
    <styled.Display>
      <styled.Expression isTopAligned={!!result}>
        {!!expression &&
          expression.map((part, key) => (
            <styled.ExpressionPart key={key}>{part}</styled.ExpressionPart>
          ))}
      </styled.Expression>
      {!!result && <styled.Result>{result}</styled.Result>}
    </styled.Display>
  )
}

export default Display
