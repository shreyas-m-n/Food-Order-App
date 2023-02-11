import React, { Fragment } from 'react'
import { MealsSummary } from './MealsSummary'
import DUMMY_MEALS from './DummyMeals'
import { MealItem } from './MealItem'
import { Card } from '../UI/Card'

export const AvailableMeals = (props) => {
    const MealItems = DUMMY_MEALS.map(ele => <MealItem key= {ele.id}
    name = {ele.name} 
    description= {ele.description} price= {ele.price}></MealItem>);
  return (
    <Fragment>
        <MealsSummary></MealsSummary>
        <Card>
          <ul>{ MealItems }</ul>
        </Card>
    </Fragment>
  )
}
