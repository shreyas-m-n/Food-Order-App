import React from 'react'
import styled from 'styled-components'
import { Input } from '../UI/Input'

const Form = styled.form`
  text-align: right;
`
const Button = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: #8a2b06;
  border: 1px solid #8a2b06;
  color: white;
  padding: 0.25rem 2rem;
  border-radius: 20px;
  font-weight: bold;
  &:hover, &:active {
    background-color: #641e03;
    border-color: #641e03;
  }
`


export const MealItemForm = (props) => {
  return (
    <Form>
        <Input label= {props.name}
        input= {{id: 'amount_' + props.id, type: 'number', min: '1', max: '5', step: '1',
        defaultValue: '1'}}
        ></Input>
        <Button>+ Add</Button>
    </Form>
  )
}
