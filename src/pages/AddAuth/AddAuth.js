import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, TextField, MenuItem, Button, InputBase } from '@mui/material';
import { Stack,} from '@mui/system';
import "./AddAuth.css"
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Lang } from '../../lang/Lang';


const AddAuth = () => {
  const token = localStorage.getItem('token');

  const [genre, setGenre] = useState([])

  const { reset, handleSubmit, register } = useForm({
    defaultValues: {
      image: '',
      first_name: '',
      last_name: '',
      date_of_birth: '',
      date_of_death: '',
      country: '',
      bio: '',
      genre_id: '',
      desc: '',
    },
  });


  const submit = (data) => {
    let formData = new FormData();
    formData.append("image", data.image[0])
    formData.append("first_name", data.first_name)
    formData.append("last_name", data.last_name)
    formData.append("date_of_birth", data.date_of_birth)
    formData.append("date_of_death", data.date_of_death)
    formData.append("country", data.country)
    formData.append("bio", data.bio)
    formData.append("genre_id", data.genre_id)

      axios
      .post('http://localhost:5000/author', formData, {
        headers: {
          Authorization: token,
        }
      })
        .then(res => console.log(res))
        .catch(err => console.log(err))


  }

  const GetGenre = () => {
    axios
    .get('http://localhost:5000/genre')
    .then(res => setGenre(res.data))
    .catch(err => console.error(err))
  }

  useEffect(() => {
    GetGenre();
  }, [])

 


  const [lang,setLAng]=useState("eng")

  useEffect(() => {
    setLAng(localStorage.getItem("language"))
  }, []);


  return (
    <>
    <Box display="flex" justifyContent="space-between" textAlign="center" sx={{
        padding:"48px 125px"
    }}>
       <form  onSubmit={handleSubmit(submit)}>
        <Box sx={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
       }}>

     <Box >
        <Box className="wrap" sx={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          paddingTop:"86px",
          marginLeft:"130px",
          marginRight:"253px",

        }}>
        <label className='file' htmlFor="file">
            <Box className="boxsfile" sx={{
                 width: "320px",
                 height: "430px",
                 backgroundPosition: "center",
                 backgroundSize:"cover",
                 backgroundRepeat:"no-repeat",
            }}>
            <TextField id='file' sx={{
                opacity:"0"
            }} type="file"  {...register('image', {required:true})}/>

            </Box>

        </label>
        </Box>
     </Box>
     <Box>
        <Stack>
            <Typography sx={{
                paddingBottom:"12px",
                fontFamily: 'Poppins',
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "32px",
                lineHeight: "48px",
                color: "#FFFFFF",
            }}>
             {Lang[lang].addauth.title}
            </Typography>
                <InputBase   sx={{
                    padding:"5px 29px",
                    marginBottom:"16px",
                    width:"350px",
                    border: "1px solid #B4B4BB",
                    borderRadius: "10px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#AAAAAA",
                  }}  name="First name" type="text" placeholder ={Lang[lang].addauth.first} label="First name" {...register('first_name', {required:true})}/>

                <InputBase   sx={{
                    padding:"5px 29px",
                    marginBottom:"16px",
                    width:"350px",
                    border: "1px solid #B4B4BB",
                    borderRadius: "10px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#AAAAAA",
                  }}   name="Last name" type="text" placeholder={Lang[lang].addauth.last} label="Last name"  {...register('last_name', {required:true})}/>

                <InputBase   sx={{
                    padding:"5px 29px",
                    marginBottom:"16px",
                    width:"350px",
                    border: "1px solid #B4B4BB",
                    borderRadius: "10px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#AAAAAA",
                  }}   name="Date of birth" type="number" placeholder={Lang[lang].addauth.datebirth} label="Date of birth" {...register('date_of_birth', {required:true})}/>

                <InputBase   sx={{
                    padding:"5px 29px",
                    marginBottom:"16px",
                    width:"350px",
                    border: "1px solid #B4B4BB",
                    borderRadius: "10px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#AAAAAA",
                  }}   name="Date of death" type="number" placeholder={Lang[lang].addauth.datedeath} label="Date of death" {...register('date_of_death', {required:true})} />

                <InputBase   sx={{
                    padding:"5px 29px",
                    marginBottom:"16px",
                    width:"350px",
                    border: "1px solid #B4B4BB",
                    borderRadius: "10px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#AAAAAA",
                  }}  name="Country" type="text" placeholder={Lang[lang].addauth.country} label="Country" {...register('country', {required:true})} />
                <TextField  sx={{
                                                       marginBottom:"16px",
                                                       width:"350px",
                                                       border: "1px solid #B4B4BB",
                                                       borderRadius:"10px",
                                                       color:"white"
                                                 }} label={Lang[lang].addauth.inpgenre} type="number" defaultValue=""  name='genre_id'  select {...register('genre_id', {required:true})}>
                                                  {genre.map(item => {
                                                    return(

                                                      <MenuItem value={item.id} key={item.id}>{item.name}  </MenuItem> 
                                                    )
                                                  })}
                                                    </TextField>    


                <InputBase   sx={{
                    padding:"5px 29px",
                    marginBottom:"16px",
                    width:"350px",
                    border: "1px solid #B4B4BB",
                    borderRadius: "10px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#AAAAAA",
                  }}  name="Bio" type="text" placeholder={Lang[lang].addauth.bio}  label="Bio" {...register('bio', {required:true})}/>     

                                                <Button variant='contained' type='submit' sx={{
                                                    width:"328px",
                                                    display:"block",
                                                    textALign:"center",
                                                    background: "#FFFFFF",
                                                    borderRadius: "99px",
                                                    mx:"auto",
                                                    color:"#000",
                                                    fontWeight:"bold",
                                                    
                                                }}>{Lang[lang].addauth.btncreat}  </Button>                                                
        </Stack>
     </Box>
        </Box>
            </form>
    </Box>
    </>
  )
}

export default AddAuth
