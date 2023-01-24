import React from 'react'
import  Header  from "../../components/Header/Header"
import CarouselBanner from './../../components/CarouselBanner/CarouselBanner';
import CategoryAdib from './../../components/CategoryAdib/CategoryAdib';
import { Route, Routes } from 'react-router-dom';
import Temuriy from './../Temuriy/Temuriy';
import { Container } from '@mui/system';

const Home = () => {
  localStorage.setItem("language", "eng")
  return (
    <div>
      <Header />
      <CarouselBanner />
      <CategoryAdib />
      
    <Container  maxWidth="xl">
    <Routes>
      <Route path='temuriylar' element={<Temuriy />} /> 
     
      </Routes>
    </Container>
    </div>
  )
}

export default Home
