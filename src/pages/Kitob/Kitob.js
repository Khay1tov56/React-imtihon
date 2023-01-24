import React, { useEffect, useState } from 'react';
import  Header  from "../../components/Header/Header"
import { Typography, CardMedia } from '@mui/material';
import { Box, Container, } from '@mui/system';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AsarBook from '../../components/AsarBook/AsarBook';
import { Lang } from '../../lang/Lang';


const Kitob = () => {
  const param = useParams();


  const token = localStorage.getItem('token');
  const [getBooks, setgetBooks] = useState([])

  const getBook = (id) => {
    axios
        .get(`http://localhost:5000/book/bookId/${id}`, {
          headers: {
            Authorization: token,
          },
        })
        .then(res => setgetBooks(res.data))
        .catch(err => console.error(err))

  }

  useEffect(() => {
    getBook(param.id)

  },[])


  
  const [lang,setLAng]=useState("eng")


  useEffect(() => {
    setLAng(localStorage.getItem("language"))
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Box key={getBooks.id}  sx={{
      padding:"20px",
      display:"flex",
      alignItems:"start",
    }}>

<Box sx={{
        width:"500px",
        height:"601px",
        
      }}>
      <CardMedia
        component="img"
        alt="Olim"
        height="601"
        width="505"
        image={`http://localhost:5000/${getBooks.image}`}
      />
      </Box>


    <Box sx={{
      width:"70%",
      marginLeft:"64px",
    }}>
      <Box>
        <Typography variant="h3" sx={{
          fontFamily: 'Poppins',
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "48px",
          lineHeight: "72px",
          color: "#C9AC8C",
        }}>
        {getBooks.title}
        </Typography>
    
      </Box>
      <Box sx={{
        display:"flex",
        justifyContent:"space-between",
        alignItems: "start",
      }}>
        <Box>
          <Typography sx={{
               fontFamily: 'Poppins',
               fontStyle: "normal",
               fontWeight: "400",
               fontSize: "20px",
               lineHeight: "30px",
               color: "rgba(255, 255, 255, 0.6)",
               paddingTop:"12px",
               paddingBottom:"14px",
          }}>
              {Lang[lang].kitob.saxif}
          </Typography>
          <Typography sx={{
               fontFamily: 'Poppins',
               fontStyle: "normal",
               fontWeight: "400",
               fontSize: "20px",
               lineHeight: "30px",
               color: "rgba(255, 255, 255, 0.6)",
               paddingBottom:"14px",

          }}>
            {Lang[lang].kitob.chop}
          </Typography>
          <Typography sx={{
               fontFamily: 'Poppins',
               fontStyle: "normal",
               fontWeight: "400",
               fontSize: "20px",
               lineHeight: "30px",
               color: "rgba(255, 255, 255, 0.6)",
               paddingBottom:"40px",

          }}>
          {Lang[lang].kitob.ktbnarx}
          </Typography>
        </Box>
        <Box sx={{
          marginLeft:"650px",
          textAlign:"right",
        }}>
          <Typography sx={{
               fontFamily: 'Poppins',
               fontStyle: "normal",
               fontWeight: "400",
               fontSize: "20px",
               lineHeight: "30px",
               color: "#fff",
               paddingTop:"12px",
               paddingBottom:"14px",
          }}>
         {getBooks.page} {Lang[lang].kitob.ktbsaxif}
          </Typography>
          <Typography sx={{
               fontFamily: 'Poppins',
               fontStyle: "normal",
               fontWeight: "400",
               fontSize: "20px",
               lineHeight: "30px",
               color: "#fff",
               paddingBottom:"14px",

          }}>
           {getBooks.year} {Lang[lang].kitob.yil}
          </Typography>
          <Typography  sx={{
               fontFamily: 'Poppins',
               fontStyle: "normal",
               fontWeight: "400",
               fontSize: "20px",
               lineHeight: "30px",
               color: "#fff",
               paddingBottom:"14px",

          }}>
          $ {getBooks.price}
          </Typography>
        </Box>
      </Box>
      <Box>
          <Typography   sx={{
               fontFamily: 'Poppins',
               fontStyle: "normal",
               fontWeight: "400",
               fontSize: "16px",
               lineHeight: "24px",
               color: "#C9AC8C",
               paddingBottom:"12px",

          }}>
           {Lang[lang].kitob.tlqmlm}
          </Typography>

          <Typography sx={{
              fontFamily: 'Poppins',
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "150%",
              color: "rgba(255, 255, 255, 0.8)",
              paddingBottom:"12px",
          }}>
          {getBooks.description}
          </Typography>
      </Box>
    </Box>

    </Box>
    

      </Container>
    <AsarBook />
    </>
  )
}

export default Kitob
