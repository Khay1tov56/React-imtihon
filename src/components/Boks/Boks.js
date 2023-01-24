import React from 'react'
import { Container, CardMedia, CardContent, Typography, Box, Card, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Kitob from './../../pages/Kitob/Kitob';
import { useEffect, useRef, useState } from 'react'
import { Stack } from '@mui/system';
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { Lang } from '../../lang/Lang';


const Boks = ({categordata}) => {


  let token = localStorage.getItem('token')

  let searchRef = useRef()
  const [searchstate, setSearchState] = useState([])
  
  const SearchBookFn = (evt) => {
    evt.preventDefault();

    if(searchRef.current.value !== "" ) {

      axios
      .get(`http://localhost:5000/book/search/?book=${searchRef.current.value}`, {
        headers: {
            Authorization: token,
        }
      })
      .then(res => setSearchState(res.data))
      .catch(err => console.log(err))
    }else {
      setSearchState([]);
    }

  }
  
  
const [lang,setLAng]=useState("eng")

useEffect(() => {
  setLAng(localStorage.getItem("language"))
}, []);


  return (
    <>
    <Container maxWidth="xl" >
    <Box sx={{
      display: "flex",
    }}>

     <Box sx={{
        zIndex:"22",
        
    }}>
      <Box sx={{
        width: '100%',
        maxWidth:"1030px",
        height: "163px",
        mx:"auto",
        textAlign: 'center',
        backgroundColor: "#191919",
        boxShadow:" 0px 4px 77px rgba(0, 0, 0, 0.25)",
        borderRadius: "15px",
        padding:"29px",
        position:"absolute",
        right:"0",
        left:"0",
        top:"-260px"
      }}>
        <Typography sx={{
            paddingBottom:"10px",
            fontFamily: 'Poppins',
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "32px",
            lineHeight: "48px",
            color: "#C9AC8C",

        }}>
        {Lang[lang].formgroup.qdr}
        </Typography>
        <Stack>
            <form onSubmit={SearchBookFn}>
                <TextField sx={{
                    width:"710px",
                    background: "#404040",
                    borderRadius: "15px",
                    color: "#fff",
                }} name="qidirish" type="search"  placeholder={Lang[lang].formgroup.place} inputRef={searchRef} />
                <Button sx={{
                    width: "160px",
                    height: "48px",
                    backgroundColor: "#C9AC8C",
                    borderRadius: "15px",
                    marginLeft:"20px",
                    marginTop:"5px"
                }} type='submit' variant="contained" startIcon={<SearchIcon />}>{Lang[lang].formgroup.izl} </Button>
            </form>
        </Stack>
      </Box>
    </Box>
        {
          searchstate?.length ? 
          searchstate?.map(item => (

            <Box>
    
            <Link to={`/kitob/${item.id}`} component={RouterLink} sx={{
              textDecoration:"none"
            }}>
        <Box sx={{
          marginTop:"30px",
          display:"flex",
        }}>
        <Card sx={{
             width: "195px",
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
            year  {item.year}
            </Typography>
          </CardContent>
    
             </Card>
     
        </Box>
            </Link>
            </Box>
            )):
        categordata?.map(item => (

        <Box>

        <Link to={`/kitob/${item.id}`} component={RouterLink} sx={{
          textDecoration:"none"
        }}>
    <Box sx={{
      marginTop:"30px",
      display:"flex",
    }}>
    <Card sx={{
         width: "195px",
         mx:"auto",
          height:"352px" ,
          borderRadius:"15px",
          margin:"20px",
          bgcolor:"#0000",
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
        year  {item.year}
        </Typography>
      </CardContent>

         </Card>
 
    </Box>
        </Link>
        </Box>
        ))
        
}
    </Box>
    </Container>
      
    </>
  )
}

export default Boks;
