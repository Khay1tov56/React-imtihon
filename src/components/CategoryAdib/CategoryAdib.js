import React, { useEffect, useState } from 'react'
import { Box, ButtonBase, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import axios from 'axios';
import Temuriy from './../../pages/Temuriy/Temuriy';
import { Container } from '@mui/system';
import Shoir from './../../pages/Shoir/Shoir';
import { Lang } from '../../lang/Lang';


const CategoryAdib = () => {

  const [category, setCategory] = useState([])
  const token = localStorage.getItem("token")

  const [categordata, setCategorydata] = useState([])

const Adibdd = () => {
  axios
  .get('http://localhost:5000/genre')
  .then(res => {
    setCategory(res.data);
  }).catch(err => console.log(err))
  
}

const Genre = (id = 1) => {
  
  axios 
  .get(`http://localhost:5000/author/genreId/${id}`)

  .then(res => setCategorydata(res.data))
  .catch(err => console.log(err))

}


useEffect(() => {
  Adibdd()
  Genre()
}, [])

    
const [lang,setLAng]=useState("eng")

useEffect(() => {
  setLAng(localStorage.getItem("language"))
}, []);

  return (
    <Box  sx={{
        position: 'relative',
        marginTop: '180px',
        textAlign: 'center',
        display:"block",
        width:"100%",

    }}>
    <Typography  sx={{
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "32px",
        lineHeight: "48px",
        color: "#C9AC8C",
    }}>
   {Lang[lang].categ.categoria}
    </Typography>
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '22px',
    }}>
      <Typography  sx={{
        textDecoration:"none",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "27px",
        color: "#C9AC8C",
        marginRight:"50px",
        display:"inline-block",
      }}>
        {category.map (item => (
        
            <ButtonBase onClick={() => Genre(item.id)} key={item.id} tabIndex={item.id}  sx={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "27px",
              color: "#C9AC8C",
              display: "inline-block",
              marginRight:"54px",
           
            }} >{item.name} </ButtonBase>
        ))}
      </Typography>
  
    </Box>
            <Container maxWidth="xl">
            <Box sx={{
      display:"flex",
      alignItems: "center",
      flexWrap:"wrap",
      marginRight:"10px",

    }}>

    <Temuriy categordata={categordata}  />
    </Box>


            </Container>
   

    </Box>
  )
}

export default CategoryAdib;
