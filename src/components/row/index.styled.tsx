import styled from 'styled-components/macro'
import { Button } from '../button/index.styled'

export const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;

  ${Button} {
    color: ${({ theme: { dark } }) => dark};

    :last-child {
      color: ${({ theme: { white } }) => white}
    }
  }

  :nth-child(1) {
    ${Button} {
      :nth-child(1) {
        background-color: ${({ theme: { topRowGrey } }) => topRowGrey};
      }
      :nth-child(2) {
        background-color: ${({ theme: { topRowLightGrey } }) => topRowLightGrey};
      }
      :nth-child(3) {
        background-color: ${({ theme: { topRowLightestGrey } }) => topRowLightestGrey};
      }
      :nth-child(4) {
        background-color: ${({ theme: { lightestPurple } }) => lightestPurple};
      }
    }
  }
  :nth-child(2),
  :nth-child(3),
  :nth-child(4) {
    ${Button} {
      :nth-child(1) {
        background-color: ${({ theme: { grey } }) => grey};
      }
      :nth-child(2) {
        background-color: ${({ theme: { lightGrey } }) => lightGrey};
      }
      :nth-child(3) {
        background-color: ${({ theme: { lightestGrey } }) => lightestGrey};
      }
      :nth-child(4) {
        background-color: ${({ theme: { lightPurple } }) => lightPurple};
      }
    }
  }
  :nth-child(3) {
    ${Button} {
      :nth-child(4) {
        background-color: ${({ theme: { purple } }) => purple}
      }
    }
  }
  :nth-child(4) {
    ${Button} {
      :nth-child(4) {
        background-color: ${({ theme: { darkPurple } }) => darkPurple}
      }
    }
  }
  :nth-child(5) {
    ${Button} {
      :nth-child(1) {
        background-color: ${({ theme: { lightGrey } }) => lightGrey}
      }
      :nth-child(2) {
        background-color: ${({ theme: { lightestGrey } }) => lightestGrey}
      }
      :nth-child(3) {
        background-color: ${({ theme: { pink } }) => pink};
        flex-grow: 2;
      }
    }
  }
`
