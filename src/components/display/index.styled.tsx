import styled from 'styled-components/macro'

export const Display = styled.header`
  background-color: ${({ theme: { dark } }) => dark};
  display: flex;
  font-family: 'Jost', sans-serif;
  justify-content: flex-end;
  flex-wrap: wrap;
  padding: 2rem;
`

interface ExpressionProps {
  readonly isTopAligned: boolean
}

export const Expression = styled.div<ExpressionProps>`
  color: ${({ isTopAligned, theme: { white, orange } }) =>
    isTopAligned ? orange : white};
  font-size: 1.5rem;
`

export const ExpressionPart = styled.span`
  display: inline-block;
  margin: 0 0.25rem;
`

export const Result = styled.span`
  color: ${({ theme: { white } }) => white};
  display: flex;
  flex-basis: 100%;
  font-size: 2rem;
  justify-content: flex-end;
`
