import React from 'react'
import { CardMedia, Link } from '@mui/material';
import  Typography  from '@mui/material/Typography';
import { Container, Box, Stack } from '@mui/system';
import { Card, CardContent } from '@mui/material';
import Hoshimov from "../../assets/images/hoshimov.png"
import { Link as RouterLink } from 'react-router-dom';
import Dunyoni from "../../assets/images/dunyoni.png"

const AsarBook = ({item}) => {
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
        Asarlari
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
              
            }}  to="/books" component={RouterLink}>Barchasini ko’rish</Link>
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
        image={Dunyoni}
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
       Dunyoning ishlari
        </Typography>
        <Typography variant="body2" sx={{
          fontFamily: 'Poppins',
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px",
          color: "rgba(255, 255, 255, 0.6)",
        }}>
        O'tkir Hoshimov
        </Typography>
      </CardContent>

         </Card>
 
    </Box>
      </Container>
    </>
  )
}

export default AsarBook
