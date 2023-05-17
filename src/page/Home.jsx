import React from 'react'
import Header from '../components/Header'
import { styled } from 'styled-components'
import Action from '../components/Action'
import Buket from '../components/Buket'
import Dostavka from '../components/Dostavka'
import Blog from '../components/Blog'
import MainOnas from '../components/MainOnas'
import MainDostavka from '../components/MainDostavka'
import Reviews from '../components/Reviews'

function Home() {
  return (
    <Wrapper>

      <img src="./images/hero_bg.png" alt=""
        style={{ width: "100%", height: "calc(100vh - 70px)" }} />

      <Action />
      <Buket />
      <Dostavka />
      <MainOnas />
      <MainDostavka />
      <Reviews />
      <Blog />
    </Wrapper>

  )
}

export default Home

const Wrapper = styled.div`
`