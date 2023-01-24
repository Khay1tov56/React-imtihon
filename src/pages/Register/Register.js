import { Box, Button, Container, InputAdornment, InputBase, MenuItem, Paper, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { useForm } from 'react-hook-form';
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import loginimage from "../../assets/images/registerbg.png"
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useContext } from 'react';



export const Register = () => {
  let navigate = useNavigate()

  // const [inputType, setInputType] = useState(false);

  let first_name = useRef()
  let last_name = useRef()
  let email = useRef()
  let password = useRef()
  let phone = useRef()

  const schema = Yup.object({
    first_name:Yup.string().required("Required"),
    last_name:Yup.string().required("Required"),
    // number:Yup.string().min(5, "5 ta").max(11, "11 ta").required("Required"),
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
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          phone:"",
        },
        resolver: yupResolver(schema)
      });


  
      const onSubmit = (e) => {
        e.preventDefault();
        console.log(first_name.current.value);
        console.log(last_name.current.value);
        console.log(email.current.value);
        console.log(password.current.value);
        console.log(phone.current.value);
        axios
        .post('http://localhost:5000/user/register', {
          first_name: first_name.current.value,
          last_name: last_name.current.value,
          email: email.current.value,
          password: password.current.value,
          phone: phone.current.value,
        })
        .then(data => {
          console.log(data);
          if(data.status === 201) {
            localStorage.setItem('token', data.data.token)
            navigate("/")
            
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
          <Box sx={{width:"50%", paddingTop:"75px", paddingLeft:"135px", paddingRight:"111px",  backgroundColor:"#1B1B1B"}}>
            <Typography variant='h4'  component="h2" color="#fff"  textAlign="start" gutterBottom>Sign in </Typography>
         <Typography  sx={{ paddingTop:"10px",paddingBottom:"20px", fontSize:"13px", color:"#fff"}} >
         Do not you have an account?
         <Link  to="/login">Sign up</Link>
         </Typography>
         <form onSubmit={onSubmit}>
      <Stack spacing={2} marginBottom="20px" >
      <InputBase inputRef={first_name}  placeholder='First Name'  sx={{
                    padding:"5px 29px",
                    border: "1px solid #B4B4BB",
                    borderRadius: "10px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#AAAAAA",
                  }} label="First Name" helperText={errors.first_name?.message} {...register("first_name")} required/>
       <InputBase inputRef={last_name} placeholder='Last Name'  sx={{
                    padding:"5px 29px",
                    border: "1px solid #B4B4BB",
                    borderRadius: "10px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#AAAAAA",
                  }} label="Last Name" helperText={errors.last_name?.message} {...register("last_name")} required/>
       <InputBase inputRef={email} placeholder='Email'  sx={{
                    padding:"5px 29px",
                    border: "1px solid #B4B4BB",
                    borderRadius: "10px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#AAAAAA",
                  }} type="email"  label="Email" helperText={errors.email?.message} {...register("email")} required/>
       <InputBase inputRef={phone}  placeholder='Phone'  sx={{
                    padding:"5px 29px",
                    border: "1px solid #B4B4BB",
                    borderRadius: "10px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#AAAAAA",
                  }} type="tel"  label="Phone" helperText={errors.number?.message} {...register("phone")}required />
       <InputBase inputRef={password}  placeholder='Password'  sx={{
                    padding:"5px 29px",
                    border: "1px solid #B4B4BB",
                    borderRadius: "10px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#AAAAAA",
                  }}  type= "password"
       helperText={errors.password?.message}
       {...register("password")}
       label="Password"
       required />
            
       </Stack>

       {/* <InputBase ref={refs} type='password' name='password' placeholder='password'/> */}

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
