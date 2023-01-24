import React, { useEffect, useState } from 'react'
import SettingBras from '../../components/SettingBars/SettingBras'
import { Container, Typography, TextField, MenuItem, Switch, Button } from '@mui/material';
import { Box } from '@mui/system';
import { Lang } from '../../lang/Lang';

const Settings = () => {

  const [lang,setLAng]=useState("eng")

  const handelLanguage=(value)=>{
    localStorage.setItem("language", value.target.value)
    setLAng(localStorage.getItem("language"))
  }
  
  
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
          paddingTop: "150px",
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
            <h2>{Lang[lang].settings.title}</h2>
        </Typography>
      </Box>
           <form>
        <Box>
        <label for="languages">
           <span style={{
                
                fontFamily: 'Poppins',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "20px",
                color: "#F3F6F9",
               }}> {Lang[lang].settings.language} </span> <br />
      <TextField onChange={handelLanguage}  sx={{
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
                  }}  label= {Lang[lang].settings.language} select >
        <MenuItem value="eng">English </MenuItem>
        <MenuItem value="ru">Russian </MenuItem>
        <MenuItem value="uz">Uzbek </MenuItem>
     
       </TextField>

           </label>
            <br />
                <span  style={{
                fontFamily: 'Poppins',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "20px",
                color: "#F3F6F9",
               }}> {Lang[lang].settings.plslang}.</span>
               <br />
               <br />
        </Box>

             <Box>
             <label for="language" >

<span style={{
 
 fontFamily: 'Poppins',
 fontStyle: "normal",
 fontWeight: "400",
 fontSize: "13px",
 lineHeight: "20px",
 color: "#F3F6F9",
}}>  {Lang[lang].settings.theme} </span> <br />

</label>
<Switch sx={{
 
}}  defaultChecked />
             </Box>
           </form>
           <Box sx={{
            marginTop:"40px",
            width:"95%",
            height:"2px",
            bgcolor:"#fff"
           }}>

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
                
                }}>  {Lang[lang].settings.btnsave}</Button>
             </Box>       
        </Box>
      </Container>
      Settings
    </>
  )
}

export default Settings;
