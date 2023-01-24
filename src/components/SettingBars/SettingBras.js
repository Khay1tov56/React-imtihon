import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Lang } from '../../lang/Lang';


const SettingBras = () => {


    
  const [lang,setLAng]=useState("eng")


  useEffect(() => {
    setLAng(localStorage.getItem("language"))
  }, []);

  return (
    <Box bgcolor="white">

    <Container maxWidth="lg">
      <Box  sx={{
        display: 'flex',
        justifyContent:"space-between",
        alignItems: 'center',

      }}>
        <Box display="flex"  className={({isActive}) => isActive ? "text-decoration-underline" : "text-decoration-none"} sx={{
            paddingTop:"23px",
            paddingLeft:"23px",
            paddingBottom:"23px",
            display: "flex",
            bgcolor:"#fff",
           
        }}>
           <Stack>
        <Typography >
         <span> 1</span>
            <Link to="/profile" > {Lang[lang].profile.profile} </Link>
          </Typography>
        </Stack>
        </Box>

        <Box >
        <Typography >
         <span> 2</span>
            <Link to="/security" > {Lang[lang].security.security} </Link>
          </Typography>
        </Box>
        <Box >
        <Typography >
         <span> 3</span>
            <Link to="/settings" > {Lang[lang].settings.title} </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
    </Box>
  )
}

export default SettingBras
