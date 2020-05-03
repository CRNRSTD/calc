import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import { updateCurrentValueWIthDot } from '../display/index.slice'
import Button from '../../components/button'

const Dot: FunctionComponent = () => {
  const dispatch = useDispatch()

  const onDotClick = () => {
    dispatch(updateCurrentValueWIthDot('.'))
  }

  return (
    <Button value='.' onClick={onDotClick} />
  )
}

export default Dot
