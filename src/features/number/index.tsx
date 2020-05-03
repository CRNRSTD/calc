import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import { updateCurrentValueWithNumber } from '../display/index.slice'
import Button from '../../components/button'

interface NumberProps {
  number: number
}

const Number: FunctionComponent<NumberProps> = ({ number }) => {
  const dispatch = useDispatch()

  const onNumberClick = () => {
    dispatch(updateCurrentValueWithNumber(String(number)))
  }

  return (
    <Button value={String(number)} onClick={onNumberClick} />
  )
}

export default Number
