import React, { useEffect, useState } from 'react'
import  Header  from "../../components/Header/Header"
import  Typography  from '@mui/material/Typography';
import { Container, Box, Stack } from '@mui/system';
import { CardMedia } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import Asar from '../../components/Asar/Asar';
import axios from 'axios';
import "./shoir.css"
import { Lang } from '../../lang/Lang';



const Shoir = () => {

  let token = localStorage.getItem('token')
  
  const param = useParams();
  const [categordataAuth, setCategoryAuth] = useState([])
  
  const Auth = (id ) => {
  
    axios 
    .get(`http://localhost:5000/author/authorId/${id}`, {
      headers: {
        Authorization: token,
      },
    })
    .then(res => setCategoryAuth(res.data))
    .catch(err => console.log(err))
  
  }
  
  
  useEffect(() => {
    Auth(param.id)
  }, [])

  const [lang,setLAng]=useState("eng")


  useEffect(() => {
    setLAng(localStorage.getItem("language"))
  }, []);

  return (
    <>
     <Header />
     <Container maxWidth="xl">
    <Box key={categordataAuth.id} value={categordataAuth.id}  sx={{
      padding:"20px",
      display:"flex",
      // justifyContent:"space-between",
      alignItems:"start",
      textAlign:"left",
    }}>
      <Box sx={{
        width:"500px",
        height:"601px"
      }}>
      <CardMedia
        component="img"
        alt="Olim"
        height="601"
        width="505"
        image={`http://localhost:5000/${categordataAuth.image}`}
      />
      </Box>

      <Box sx={{
        marginLeft:"65px",
        width:"791px"
      }}>
        <Typography  variant='h3' sx={{
          fontFamily: 'Poppins',
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "48px",
          lineHeight: "72px",
          color: "#C9AC8C",
        }}>
        {categordataAuth.first_name + " " + categordataAuth.last_name}
        </Typography>
        <Typography gutterBottom variant='p' sx={{
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "24px",
        color: "rgba(255, 255, 255, 0.8)",
        }} >
             {categordataAuth.bio}
        </Typography>

        <Box sx={{
          width:"260px",
          marginTop:"45px",
          display: 'flex',
          justifyContent:"space-between",
          alignItems: 'center',
        }}>
          <Stack>
            <Typography sx={{
              fontFamily: 'Poppins',
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "18px",
              color: "rgba(255, 255, 255, 0.6)",
              
            }}>
           {Lang[lang].shoir.taval}
            </Typography>
            <Typography  sx={{
              fontFamily: 'Poppins',
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "39px",
              lineHeight: "144.4%",
              color: "#C9AC8C",
              
            }}>
             {categordataAuth.date_of_birth}
            </Typography>
            <Typography  sx={{
              fontFamily: 'Poppins',
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "18px",
              color: "rgba(255, 255, 255, 0.6)",
              
            }}>
           {categordataAuth.country}

            </Typography>

          </Stack>
            <Typography  sx={{
              fontFamily: 'Poppins',
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "39px",
              lineHeight: "144.4%",
              color: "#C9AC8C",
              
            }} >
              -
            </Typography>
          <Stack>
            <Typography  sx={{
              fontFamily: 'Poppins',
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "18px",
              color: "rgba(255, 255, 255, 0.6)",
              
            }}>
              {Lang[lang].shoir.vafot}
            </Typography>
            <Typography   sx={{
              fontFamily: 'Poppins',
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "39px",
              lineHeight: "144.4%",
              color: "#C9AC8C",
              
            }}>
              {categordataAuth.date_of_death}
            </Typography>
            <Typography   sx={{
              fontFamily: 'Poppins',
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "18px",
              color: "rgba(255, 255, 255, 0.6)",
              
            }}>
                  {categordataAuth.country}

            </Typography>

          </Stack>
        </Box>
      </Box>
      

    </Box>

      

            <Asar />
     </Container>
    
    </>
  )
}

export default Shoir
