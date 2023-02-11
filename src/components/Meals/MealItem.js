import React from 'react'
import styled from 'styled-components'

const Meal = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
`
const MealHeader = styled.h3`
  margin: 0 0 0.25rem 0;
`
const Description = styled.div`
  font-style: italic;
`
const Price = styled.div`
  margin-top: 0.25rem;
  font-weight: bold;
  color: #ad5502;
  font-size: 1.25rem;
`


export const MealItem = (props) => {
    const price = `$${ props.price.toFixed(2) }`;
  return (
    <Meal>
        <div>
        <MealHeader>{props.name}</MealHeader>
        <Description>{props.description}</Description>
        <Price>{price}</Price>
        </div>
    </Meal>
  )
}
