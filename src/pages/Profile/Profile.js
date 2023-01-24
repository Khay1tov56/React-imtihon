import React, { useEffect, useState } from 'react'
import SettingBras from '../../components/SettingBars/SettingBras'
import { Box, InputBase, TextField, Typography, Button, Container } from '@mui/material';
import "./proflie.css"
import  Avatar  from '@mui/material/Avatar';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Lang } from '../../lang/Lang';



const Profile = () => {
    const token = localStorage.getItem('token');
    const [profil, setProfil] = useState([])

    axios
    .get(`http://localhost:5000/user/me`, {
        headers:{
                Authorization: token,
        },
    })
    .then(res => setProfil(res.data))
    .catch(err => console.error(err))


    const { reset, handleSubmit, register } = useForm({
        defaultValues: {
          image: '',
          first_name: '',
          last_name: '',
          phone: '',
        },
      });

      const submit = (data) => {
        let formData = new FormData();
    
        formData.append("image", data.image[0])
        formData.append("first_name", data.first_name)
        formData.append("last_name", data.last_name)
        formData.append("phone", data.phone)
    
          axios
          .put('http://localhost:5000/user/account', formData, {
            headers: { 
              Authorization: token,
             },
          })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    
    
      }


      const [lang,setLAng]=useState("eng")

      useEffect(() => {
        setLAng(localStorage.getItem("language"))
      }, []);


  return (
    <>
        <SettingBras />
    <Container  maxWidth="xl">
    
    <Box display="flex" alignItems="start">
        <form onSubmit={handleSubmit(submit)}>
          <Box sx={{
            display: 'flex',
            marginLeft: '200px',
          }}>

    <Box sx={{
            marginTop:"30px",

    }} >
        <Box className="wrap" sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            paddingTop:"86px",
        }}>
            <Avatar sx={{
                width:"174px",
                height:"174px",
            }}  alt={profil.first_name + " " + profil.last_name} src={`http://localhost:5000/${profil.image}`} >
                 </Avatar>

        <label className='file' for="file">
            <Box className="boxs" sx={{
                 width: "50px",
                 height: "50px",
                 backgroundPosition: "center",
                 backgroundSize:"cover",
                 backgroundRepeat:"no-repeat",
                 position:"relative",
                 zIndex:"11",
                 marginLeft:"-50px",
                 marginTop:"130px",
                 borderRadius:"10px"
            }}>
            <TextField id='file' sx={{
                opacity:"0"
            }} type="file" name='image'  {...register('image', {required:true})} />

            </Box>

        </label>
        </Box>
     </Box>
     <Box  sx={{
            marginLeft: '250px',

     }} paddingTop="90px">
            <Box>
           <Typography sx={{
            fontFamily: 'Poppins',
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "27px",
            color: "#DEDEDE",
            paddingBottom: "32px",
           }}>
           <h2> {Lang[lang].profile.title} </h2>
           </Typography>
            </Box>
                <Box sx={{
                    marginBottom:"22px"
                }}>
                <label htmlFor='first' >
               <span style={{
                
                fontFamily: 'Poppins',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "20px",
                color: "#F3F6F9",
               }}> {Lang[lang].profile.first} </span> <br />
                <InputBase   sx={{
                    padding:"12px 19px",
                    marginTop:"7px",
                    marginBottom:"3px",
                    width:"707px",
                    borderRadius: "4px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    bgcolor:"#fff",
                    color: "#000",
                  }}   name={Lang[lang].profile.first} id='first'  {...register('first_name', {required:true})}   type="text" placeholder={Lang[lang].profile.first} label="First Name" />
                </label>
                <br />
                <span  style={{
                
                fontFamily: 'Poppins',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "20px",
                color: "#F3F6F9",
               }}> {Lang[lang].profile.pleasefirst} </span>
                </Box>
                <Box  sx={{
                    marginBottom:"22px"
                }}>
                <label htmlFor='last' >
               <span style={{
                
                fontFamily: 'Poppins',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "20px",
                color: "#F3F6F9",
               }}> {Lang[lang].profile.last} </span> <br />
                <InputBase   sx={{
                    padding:"12px 19px",
                    marginTop:"7px",
                    marginBottom:"3px",
                    width:"707px",
                    borderRadius: "4px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    bgcolor:"#fff",
                    color: "#000",
                  }}    name="Last Name" id='last'  {...register('last_name', {required:true})}  type="text" placeholder= {Lang[lang].profile.last} label= {Lang[lang].profile.last} />
                </label>
                <br />
                <span  style={{
                
                fontFamily: 'Poppins',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "20px",
                color: "#F3F6F9",
               }}> {Lang[lang].profile.pleaselast} </span>
                </Box>
                <Box  sx={{
                    marginBottom:"22px"
                }}>
                <label htmlFor='phone' >
               <span style={{
                
                fontFamily: 'Poppins',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "20px",
                color: "#F3F6F9",
               }}> Phone</span> <br />
                <InputBase  sx={{
                    padding:"12px 19px",
                    marginTop:"7px",
                    width:"340px",
                    borderRadius: "4px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    bgcolor:"#fff",
                    color: "#000",
                  }}   name="Phone" id='phone'   {...register('phone', {required:true})}  type="tel" placeholder={Lang[lang].profile.phone}  label={Lang[lang].profile.phone}  />
                </label>
                <br />
                <span  style={{
                
                fontFamily: 'Poppins',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "20px",
                color: "#F3F6F9",
               }}>{Lang[lang].profile.pleasephone} </span>
                </Box>

             <Box sx={{
                display:"flex",
                justifyContent: "end",
                marginRight:"110px",
                marginBottom:"20px",
             }}> 
             <Button type='submit' variant='outlined' sx={{
                    width:"144px",
                    height:"43px",
                    // padding:"12px 23px",
                    bgcolor:"#fff",
                    borderRadius:"4px",
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "13px",
                    lineHeight: "20px",
                    color: "#0D0D0D",
                    display:"inline-block",
                    mx:"0",
                
                }}> {Lang[lang].profile.btnsave} </Button>
             </Box>
             
     </Box>
          </Box>
            </form>
    </Box>
    </Container>
    </>

  )
}

export default Profile
