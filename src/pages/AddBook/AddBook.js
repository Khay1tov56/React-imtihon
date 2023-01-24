import React, { useEffect, useRef, useState } from 'react'
import { Box, Typography, TextField, MenuItem, Button, InputBase } from '@mui/material';
import { Stack } from '@mui/system';
import "./AddBook.css"
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Lang } from '../../lang/Lang';


const AddBook = () => {
  
  const [genre, setGenre] = useState([])
  const token = localStorage.getItem('token');


  const GetGenres = () => {

    axios
    .get('http://localhost:5000/genre')
    .then(res => setGenre(res.data))
    .catch(err => console.error(err))
  }

    useEffect(() => {
      GetGenres();
    },[])

  const { reset, handleSubmit, register, } = useForm({
    defaultValues: {
      image: '',
      title: '',
      page: '',
      year: '',
      price: '',
      genre_id: '',
      author_id: '',
      description: '',
    },
  });


  const submit = (data) => {
    // data.preventDefault();

    let formData = new FormData();

    formData.append("image", data.image[0])
    formData.append("title", data.title)
    formData.append("page", data.page)
    formData.append("year", data.year)
    formData.append("price", data.price)
    formData.append("genre_id", data.genre_id)
    formData.append("author_id", data.author_id)
    formData.append("description", data.description)

      axios
      .post('http://localhost:5000/book', formData, {
        headers: { 
          Authorization: token,
         },
      })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))


  }




  const [user, setUser] = useState([])

  const AuthorGenre = (evt) => {
    evt.preventDefault()
    axios
    .get(`http://localhost:5000/author/genreId/${evt.target.value}`)
      .then(res => setUser(res.data))
      .catch(err => console.log(err))
  }

  
  
  const [lang,setLAng]=useState("eng")

  useEffect(() => {
    setLAng(localStorage.getItem("language"))
  }, []);



  return (
    <>
    <form onSubmit={handleSubmit(submit)}>
    <Box display="flex" justifyContent="space-between" textAlign="center" sx={{
        padding:"48px 125px"
    }}>
    <Box  width="50%">
        <Box className="wrap" sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            paddingTop:"86px",
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
            }} type="file" name='image' {...register('image', {required:true})} />

            </Box>

        </label>
        </Box>
     </Box>
     <Box width="50%">
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
             {Lang[lang].addbook.title}
            </Typography>
            <Box>
                <InputBase  sx={{
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
                  }}  name="Title" type="text" placeholder= {Lang[lang].addbook.inpone} label="Title"  {...register('title', {required:true})}/>

                <InputBase  sx={{
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
                  }}  name="Pages" type="text" placeholder= {Lang[lang].addbook.inptwo} label="Pages"  {...register('page', {required:true})}/>

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
                  }}  name="Year" type="number" placeholder={Lang[lang].addbook.inptre} label="Year"  {...register('year', {required:true})} />

                <InputBase  sx={{
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
                  }}  name="Price" type="number" placeholder='Price' label="Price"  {...register('price', {required:true})}/>
                 <TextField sx={{
                                                       marginBottom:"16px",
                                                       width:"350px",
                                                       border: "1px solid #B4B4BB",
                                                       borderRadius:"10px",
                                                       color:"white"
                                                 }} label={Lang[lang].addbook.inpgenre} name='genre' defaultValue=""  select {...register('genre_id', {required:true})}  onChange={AuthorGenre}>
                                                  {genre.map(item => {
                                                    return(

                                                      <MenuItem value={item.id} key={item.id}> 
                                                       {item.name}  </MenuItem> 
                                                    )
                                                  })}
                                                    </TextField>   

                              <TextField  sx={{
                                                       marginBottom:"16px",
                                                       width:"350px",
                                                       border: "1px solid #B4B4BB",
                                                       borderRadius:"10px",
                                                       color:"white"
                                                 }} label={Lang[lang].addbook.inpauth} defaultValue=""  select 
                                                  {...register('author_id', {required:true})} >
                                                  
                                                  {user.map(item => (
                                                    
                                                    <MenuItem value={item.id} key={item.id}>  
                                                     {item.first_name + " " + item.last_name}</MenuItem>
                                                  ))}
                                                    </TextField>     

                <InputBase  sx={{
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
                  }}   name="Description" type="text" placeholder={Lang[lang].addbook.inpdesc} label="Description " {...register('description', {required:true})}/> 
                  </Box>    

                                                <Button variant='contained' type='submit' sx={{
                                                    width:"328px",
                                                    display:"block",
                                                    textALign:"center",
                                                    background: "#FFFFFF",
                                                    borderRadius: "99px",
                                                    mx:"auto",
                                                    color:"#000",
                                                    fontWeight:"bold",
                                                    
                                                }}>{Lang[lang].addbook.btncreat}</Button>                                                
        </Stack>
     </Box>
    </Box>
            </form>
    </>
  )
}

export default AddBook
