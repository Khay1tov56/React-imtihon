import React, { useEffect, useState } from 'react'
import SettingBras from '../../components/SettingBars/SettingBras'
import { Container, Box, InputBase, Typography, Button } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Lang } from '../../lang/Lang';


const Secutity = () => {

  const token = localStorage.getItem('token');


  const { reset, handleSubmit, register } = useForm({
    defaultValues: {
      email: '',
      current_password: '',
      new_password: '',
    },
  });

  const submit = (data) => {
    let formData = new FormData();

    formData.append("email", data.email)
    formData.append("currentPassword", data.current_password)
    formData.append("newPassword", data.new_password)

      axios
      .put('http://localhost:5000/user/security', formData, {
        headers: { 
          Authorization: token,
         },
         body:{
          'Content-Type':"application/json"
         }
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
      <Container maxWidth="xl" >

    <Box sx={{
      width:"50%",
      mx:"auto",
      paddingTop:"70px",
    }}>
      <Box>
        <Typography  sx={{
            fontFamily: 'Poppins',
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "27px",
            color: "#fff",
            paddingBottom: "32px",
           }}>
            <h2> {Lang[lang].security.title} </h2>
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(submit)}>
         <Box sx={{
                    marginBottom:"22px"
                }}>
                <label htmlFor='email' >
               <span style={{
                
                fontFamily: 'Poppins',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "20px",
                color: "#F3F6F9",
               }}> {Lang[lang].security.email} </span> <br />
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
                  }}   name="Email" id='email'  {...register('email', {required:true})}  type="email" placeholder={Lang[lang].security.email} label={Lang[lang].security.email} />
                </label>
                <br />
                <span  style={{
                
                fontFamily: 'Poppins',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "20px",
                color: "#F3F6F9",
               }}>  {Lang[lang].security.pleaseemail}  </span>
                </Box>

           <Box sx={{
                    marginBottom:"22px"
                }}>
                <label htmlFor='password' >
               <span style={{
                
                fontFamily: 'Poppins',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "20px",
                color: "#fff",
               }}>   {Lang[lang].security.currentpass} </span> <br />
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
                  }}   name="Current password" id='password'  {...register('current_password', {required:true})}   type="password" placeholder=   {Lang[lang].security.currentpass} label=   {Lang[lang].security.currentpass} />
                </label>
                <br />
                <span  style={{
                
                fontFamily: 'Poppins',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "20px",
                color: "#F3F6F9",
               }}>   {Lang[lang].security.pleascurrent} </span>
                </Box>  

           <Box sx={{
                    marginBottom:"22px"
                }}>
                <label htmlFor='passwordone' >
               <span style={{
                
                fontFamily: 'Poppins',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "20px",
                color: "#fff",
               }}> {Lang[lang].security.newpassword} </span> <br />
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
                  }}   name="New Password" id='passwordone'  {...register('new_password', {required:true})}   type="password" placeholder= {Lang[lang].security.newpassword} label= {Lang[lang].security.newpassword} />
                </label>
                <br />
                <span  style={{
                
                fontFamily: 'Poppins',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "20px",
                color: "#F3F6F9",
               }}> {Lang[lang].security.pleasnewpass} </span>
                </Box>    

                  <Box sx={{
                display:"flex",
                justifyContent: "end",
                marginRight:"40px",
                marginTop:"50px",
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
                
                }}> {Lang[lang].security.btnsave}</Button>
             </Box>          
      </form>
    </Box>

      </Container>
     
    </>
  )
}

export default Secutity
