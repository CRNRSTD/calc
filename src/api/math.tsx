import axios from 'axios'

export const calcResult = (expr: string) => axios.post(
  `http://api.mathjs.org/v4/`, {
    expr,
    precision: 14
  }
)
