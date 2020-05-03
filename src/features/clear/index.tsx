import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import { clearAll } from '../display/index.slice'
import Button from '../../components/button'

interface ClearProps {
  value: string
}

const Clear: FunctionComponent<ClearProps> = ({ value }) => {
  const dispatch = useDispatch()

  const onClearClick = () => {
    dispatch(clearAll())
  }

  return (
    <Button value={value} onClick={onClearClick} />
  )
}

export default Clear
