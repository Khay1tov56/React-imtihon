import { Box, Button, Container, InputBase, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState, useContext, useRef, useEffect } from 'react'
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useForm } from 'react-hook-form';
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
import loginimage from "../../assets/images/loginbg.png"
import { Link, useNavigate } from 'react-router-dom';


export const Login = () => {
  let navigate = useNavigate()
  const [inputType, setInputType] = useState(false);
  let email = useRef()
  let password = useRef()

  const schema = Yup.object({
    password:Yup.string().min(3, "3 ta").max(8, "8 ta").required("Required"),
    email:Yup.string().email("Invalid format").required("Required"),
  })

  const {register,
         handleSubmit,
         watch,
         formState,
         formState:{errors, isValid},

      } = useForm({
        mode: "all",
        defaultValues: {
          email: "",
          password: "",
        },
        resolver: yupResolver(schema)
      });

      const onSubmit = (evt) => {
        evt.preventDefault();
        console.log(email.current.value);
        console.log(password.current.value);
        axios
        .post('http://localhost:5000/user/login', {
          email: email.current.value,
          password: password.current.value,
        })
        .then(data => {
          if(data.status === 201) {
            console.log(data);
            navigate("/")
            localStorage.setItem("token", data.data.token)

            
          } else {
            navigate("/register")
          }
        })
        .catch(err => console.log(err))
      };


  return (
    <Box sx={{
      background:"linear-gradient(90deg, rgba(201,172,140,1) 50%, rgba(27,27,27,1) 50%)",}}>
      <Container>
        <Box sx={{display:"flex"}}>
      <Box sx={{width:"50%" , paddingTop:"100px", paddingLeft:"40px", paddingRight:"36px", paddingBottom:"100px"}}>
     <img width="500" height="500"  src={loginimage} alt="Login" />
      </Box>
    <Box sx={{width:"50%", paddingTop:"191px", paddingLeft:"135px", paddingRight:"111px",  backgroundColor:"#1B1B1B"}}>
      <Typography variant='h4' component="h2" color="#fff"  textAlign="start" gutterBottom>Sign in </Typography>
   <Typography  sx={{ paddingTop:"10px",paddingBottom:"20px", fontSize:"13px", color:"#fff"}} >
   Do not you have an account?
   <Link  to="/register"> Sign up</Link>
   </Typography>
      <form onSubmit={onSubmit}>
      <Stack spacing={2} marginBottom="20px">
      <InputBase inputRef={email}  placeholder='Email'  sx={{
                    padding:"5px 29px",
                    border: "1px solid #B4B4BB",
                    borderRadius: "10px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#AAAAAA",
                  }}  type="email"  label="Email" helperText={errors.email?.message} {...register("email")} />
      <InputBase inputRef={password}  placeholder='Password'  sx={{
                    padding:"5px 29px",
                    border: "1px solid #B4B4BB",
                    borderRadius: "10px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#AAAAAA",
                  }}type="password"
      color='success'
      helperText={errors.password?.message}
      {...register("password")}
      label="Password"
       />
           
      </Stack>

      <Button  variant="contained" sx={{
        width:"328px",
        background: "#FFFFFF",
       borderRadius: "99px",
       color:"#000",
       fontWeight:"bold",
        
        }}  type='submit' disabled={!isValid}>Next step</Button>
      </form>
    </Box>
        </Box>
      </Container>
    </Box>
  )
}
