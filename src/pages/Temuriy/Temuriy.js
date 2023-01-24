import { Box, Card,  CardContent, CardMedia, Container, Link, TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import  Typography  from '@mui/material/Typography';
import Avloniy from "../../assets/images/avloniy.png";
import After from "../../assets/images/after.png";
import { useParams } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import Shoir from './../Shoir/Shoir';
import { Stack } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import Button  from '@mui/material/Button';
import { Lang } from '../../lang/Lang';



const Temuriy = ({categordata}) => {


  
  let token = localStorage.getItem('token')

  let searchRef = useRef()
  const [searchstate, setSearchState] = useState([])
  
  const SearchBookFn = (evt) => {
    evt.preventDefault();

      if(searchRef.current.value !== "" ) {

        axios
        .get(`http://localhost:5000/author/search?author=${searchRef.current.value}`, {
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
    <Box>
    <Box sx={{
        zIndex:"22",
        
    }}>
      <Box sx={{
        width:"1030px",
        height: "163px",
        textAlign: 'center',
        backgroundColor: "#191919",
        boxShadow:" 0px 4px 77px rgba(0, 0, 0, 0.25)",
        borderRadius: "15px",
        padding:"29px",
        position:"absolute",
        right:"0",
        left:"0",
        top:"-260px",
        margin:"0 auto",
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
                }} name="qidirish"  placeholder={Lang[lang].formgroup.place} inputRef={searchRef} />
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
    </Box>

    <Box>
      {searchstate?.length  ? 
       searchstate?.map(item => (
        
        <Box>
           <Card key={item.id} sx={{
  width: "295px",
  height:"365px" ,
  mx:"0",
  margin:"0",
  bgcolor:"transparent",
}}>
<Link  to={`/shoir/${item.id}`} component={RouterLink} sx={{
  textDecoration: "none",
}} >
<Card sx={{
  bgcolor:"#1E1E1E",
  borderRadius:"22px",
  margin:"20px",

  }}>
<CardMedia
component="img"
alt="avloniy"
height="224"
image={`http://localhost:5000/${item.image}`}
/>
<CardContent>
<Typography gutterBottom variant="h5" sx={{
  fontFamily: 'Poppins',
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "24px",
  lineHeight: "36px",
  color: "#C9AC8C",
  
}} component="div">
{item.first_name + " " + item.last_name}
</Typography>
<Typography variant="body2" sx={{
  fontFamily: 'Poppins',
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "24px",
  color: "rgba(255, 255, 255, 0.6)",
}}>
{item.date_of_birth + " " + item.date_of_death}
</Typography>
</CardContent>

 </Card>
</Link>
</Card> 
        </Box>
       )): 
       categordata?.map(item => (
        <Box>
        <Card key={item.id} sx={{
width: "295px",
height:"365px" ,
mx:"0",
margin:"0",
bgcolor:"transparent",
}}>
<Link  to={`/shoir/${item.id}`} component={RouterLink} sx={{
textDecoration: "none",
}} >
<Card sx={{
bgcolor:"#1E1E1E",
borderRadius:"22px",
margin:"20px",

}}>
<CardMedia
component="img"
alt="avloniy"
height="224"
image={`http://localhost:5000/${item.image}`}
/>
<CardContent>
<Typography gutterBottom variant="h5" sx={{
fontFamily: 'Poppins',
fontStyle: "normal",
fontWeight: "500",
fontSize: "24px",
lineHeight: "36px",
color: "#C9AC8C",

}} component="div">
{item.first_name + " " + item.last_name}
</Typography>
<Typography variant="body2" sx={{
fontFamily: 'Poppins',
fontStyle: "normal",
fontWeight: "400",
fontSize: "16px",
lineHeight: "24px",
color: "rgba(255, 255, 255, 0.6)",
}}>
{item.date_of_birth + " " + item.date_of_death}
</Typography>
</CardContent>

</Card>
</Link>
</Card> 
     </Box>
       ))
    }

    </Box>

       
    </>
  )
}

export default Temuriy
