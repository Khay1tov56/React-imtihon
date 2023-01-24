import React from 'react'
import  Header  from "../../components/Header/Header"
import CarouselBanner from './../../components/CarouselBanner/CarouselBanner';
import CategoryAdib from './../../components/CategoryAdib/CategoryAdib';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Temuriy from './../Temuriy/Temuriy';
import BookCategory from "../../components/BookCategory/BookCategory"
// import SearchBook from './../../components/SearchBook/SearchBook';


const Books = () => {
  return (
    <div>
     <Header />
     <CarouselBanner />
     <BookCategory />
      
    <Container  maxWidth="xl">
    <Routes>
      <Route path='temuriylar' element={<Temuriy />} /> 

      </Routes>
    </Container>
    </div>
  )
}

export default Books
