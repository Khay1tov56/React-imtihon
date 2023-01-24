import React, { useEffect, useState } from 'react'
import { Lang } from '../../lang/Lang';
import "./carousel.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Typography } from '@mui/material';
import CarouselImage from "../../assets/images/carousel.png"

const CarouselBanner = () => {


  
  const [lang,setLAng]=useState("eng")

  useEffect(() => {
    setLAng(localStorage.getItem("language"))
  }, []);


  var settings = {
    dots: true,
    fade:false,
    infinite: true,
    speed: 1000,
    autoplay:true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    pauseOnFocus:false,
    useTransform:true,
    slidesToScroll: 1
  };

  return (
<>
<Box sx={{width:"1440px", mx:"auto", marginTop:"32px", borderRadius:"30px", position:'relative'}}>

<Slider {...settings} >
      <Box sx={{height:"347px",width:"120px",mx:"0",backgroundImage:`url(${CarouselImage})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
       
       <Typography sx={{
        paddingLeft:"86px",
        paddingTop:"40px",
        fontFamily: 'Montserrat',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "61px",
        lineHeight: "67px",
        color: "#C9AC8C",
        width:"400px",

       }}>
       {Lang[lang].carus.temur}
       </Typography>
      </Box>
      <Box sx={{height:"347px",width:"120px",mx:"0",backgroundImage:`url(${CarouselImage})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
      <Typography sx={{
        paddingLeft:"86px",
        paddingTop:"40px",
        fontFamily: 'Montserrat',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "61px",
        lineHeight: "67px",
        color: "#C9AC8C",
        width:"400px",

       }}>
      {Lang[lang].carus.russ}
       </Typography>
      </Box>
      <Box sx={{height:"347px",width:"120px",mx:"0",backgroundImage:`url(${CarouselImage})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
      <Typography sx={{
        width:"400px",
        paddingLeft:"86px",
        paddingTop:"40px",
        fontFamily: 'Montserrat',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "61px",
        lineHeight: "67px",
        color: "#C9AC8C",

       }}>
        {Lang[lang].carus.ozbekk}
       </Typography>
      </Box>
      <Box sx={{height:"347px",width:"120px",mx:"0",backgroundImage:`url(${CarouselImage})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
      <Typography sx={{
        width:"400px",
        paddingLeft:"86px",
        paddingTop:"40px",
        fontFamily: 'Montserrat',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "61px",
        lineHeight: "67px",
        color: "#C9AC8C",

       }}>
         {Lang[lang].carus.turkk}
       </Typography>
      </Box>
    
    </Slider>
</Box>
</>

    
  )
}

export default CarouselBanner
