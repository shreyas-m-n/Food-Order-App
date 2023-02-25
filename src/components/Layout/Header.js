import React, { Fragment } from 'react'
import styled from 'styled-components'
import mealsImage from '../../assets/meals.jpg'
import { CartButton } from './CartButton'

const Headersty = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: #8a2b06;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`

const MainImage = styled.div`
  width: 100%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;`

const MainimageImg = styled.img`
  width: 110%;
  height: 100%;
  object-fit: cover;
  transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);`


export const Header = (props) => {
  return (
    <Fragment>
        <Headersty>
            <h1>My Food Ordering App</h1>
            {/* <button>Cart</button> */}
            <CartButton onClick= {props.onShowCart}></CartButton>
        </Headersty>
        <MainImage>
            <MainimageImg src= { mealsImage } alt='table full of meals'></MainimageImg>
        </MainImage>
    </Fragment>
  )
}
