import React, { useEffect, useState } from 'react'
import { CardMedia, Link } from '@mui/material';
import  Typography  from '@mui/material/Typography';
import { Container, Box, } from '@mui/system';
import { Card, CardContent } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import { Lang } from '../../lang/Lang';


const Asar = () => {
  let token = localStorage.getItem('token');
  const [getBook, setGetBook] = useState([])

  const GetAuthorBook = () => {
    axios
    .get(`http://localhost:5000/author/books/2`, {
      headers: {
        Authorization: token,
      },
    })
    .then(res => setGetBook(res.data))
    .catch(err => console.error(err))
  }

  useEffect(() => GetAuthorBook() ,[])

  const [lang,setLAng]=useState("eng")


  useEffect(() => {
    setLAng(localStorage.getItem("language"))
  }, []);


  return (
    <>
      <Container maxWidth="xl">
      <Box  sx={{
        display:"flex",
        justifyContent:"space-between",
        alignItems: "center",
        marginTop:"70px",
      }}>
      
      <Box>
        <Typography variant='h3'  sx={{
              fontFamily: 'Poppins',
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "31px",
              lineHeight: "46px",
              color: "#C9AC8C",
              
            }}>
          {Lang[lang].shoir.asar}
        </Typography>
      </Box>

      <Box>
        <Typography sx={{
              fontFamily: 'Poppins',
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#fff",
              
            }}>
              <Link sx={{
              fontFamily: 'Poppins',
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "31px",
              lineHeight: "46px",
              color: "#C9AC8C",
              textDecoration:"none"
              
            }}  component={RouterLink}  to="/" >   {Lang[lang].shoir.barchasi}</Link>
        </Typography>
      </Box>

    </Box>

    <Box sx={{
      display:"flex",
      justifyContent: "start",
      alignItems: "center",
      width:"1500px",
      mx:"auto",
      overflowX:"auto",
      marginTop:"30px"
    }}>
      {getBook.map(item => (
        <Link to="/kitob" component={RouterLink}>
    <Card sx={{
         maxWidth: "195px",
         mx:"auto",
          height:"352px" ,
          borderRadius:"15px",
          margin:"20px",
          bgcolor:"#0000"
          }}>
      <CardMedia
        component="img"
        alt="avloniy"
        height="224"
        image={`http://localhost:5000/${item.image}`}
      />
      <CardContent>
        <Typography variant="h5" sx={{
          fontFamily: 'Poppins',
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "18px",
          lineHeight: "27px",
          color: "#C9AC8C",
          
        }} component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{
          fontFamily: 'Poppins',
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px",
          color: "rgba(255, 255, 255, 0.6)",
        }}>
        $ {item.price}
        </Typography>
      </CardContent>

         </Card>
        </Link>

      ))}
 
    </Box>
      </Container>
    </>
  )
}

export default Asar
