import React from 'react'
import styled from 'styled-components'

const InputDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`
const Label= styled.label`
  font-weight: bold;
  margin-right: 1rem;
`
const Inputsty= styled.input`
  width: 3rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font: inherit;
  padding-left: 0.5rem;
`

export const Input = React.forwardRef((props, ref) => {
  return (
    <InputDiv>
        <Label htmlFor={props.input.id}>{props.label}</Label>
        <Inputsty ref={ref} {...props.input}></Inputsty>
    </InputDiv>
  )
})
