import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import { Stack } from '@mui/system';
import { useState, useEffect } from 'react';
import { NavLink  } from 'react-router-dom';
import {Link } from '@mui/material';
import axios from 'axios';
import { Lang } from '../../lang/Lang';



function ResponsiveAppBar() {




  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] =useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [user, setUser] = useState([])

  const token = localStorage.getItem('token');

  axios
  .get(`http://localhost:5000/user/me`, {
      headers:{
              Authorization: token,
      },
  })
  .then(res => setUser(res.data))
  .catch(err => console.error(err))


  const [lang,setLAng]=useState("eng")

  useEffect(() => {
    setLAng(localStorage.getItem("language"))
  }, []);






  return (
    <AppBar position="static" sx={{backgroundColor:"#191919"}}>
      <Container maxWidth="xl">
        <Stack>

        <Toolbar sx={{display:"flex,", justifyContent:"space-between", alignItems:"center"}}>
          <Typography
            variant="h6" >
          <Link to="/" sx={{
               fontStyle: "normal",
               fontWeight: "400",
               fontSize:" 25px",
               lineHeight: "38px",
               color:"#C9AC8C",
               textDecoration:"none",
          }} component={NavLink}> {Lang[lang].headr.logo}</Link>
          </Typography>
     <Box sx={{display:"flex", alignItems:"center"}}>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>

              <Link to="/"
                onClick={handleCloseNavMenu}
                sx={{  mx: 2, color: 'gray', textDecoration:"none",  display: 'block' ,   "&.active":
                         {
                          fontFamily: 'Poppins',
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "144.4%",
                          color: "#FFFFFF",
                         }}}
                component={NavLink} >
               {Lang[lang].headr.saxifa}
              </Link>
  
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>

          <Link to="/books" component={NavLink}
                    onClick={handleCloseNavMenu}
                         sx={{  mx: 2, color: 'gray', textDecoration:"none",  display: 'block' ,   "&.active":
                         {
                          fontFamily: 'Poppins',
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "144.4%",
                          color: "#FFFFFF",
                         }}}
                 >
                        {Lang[lang].headr.kitob}
                          </Link>

              </Box>


          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt= {user.first_name + " " + user.last_name} src={`http://localhost:5000/${user.image}`} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              >

                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link component={NavLink}  sx={{
                      textDecoration:"none",
                      fontFamily: 'Poppins',
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#C9AC8C",
                      padding:"0 20px",

                    }} to="/profile" > {Lang[lang].avatar.profile}</Link>
                  </Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link to="/addauth"  sx={{
                      textDecoration:"none",
                      fontFamily: 'Poppins',
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#C9AC8C",
                      padding:"0 20px",
                    }} component={NavLink}>{Lang[lang].avatar.auth}</Link>
                  </Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link to="/addbook" component={NavLink}  sx={{
                      textDecoration:"none",
                      fontFamily: 'Poppins',
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#C9AC8C",
                      padding:"0 20px",

                    }} > {Lang[lang].avatar.books} </Link>
                  </Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link component={NavLink}  sx={{
                      textDecoration:"none",
                      fontFamily: 'Poppins',
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#C9AC8C",
                      padding:"0 20px",

                    }}  onClick={() => (
                      localStorage.removeItem("token")
                    )} to="/login"> {Lang[lang].avatar.logut} </Link>
                  </Typography>
                </MenuItem>
    
            </Menu>
          </Box>
     </Box>
        </Toolbar>
              </Stack>
      </Container>

    </AppBar>
  );
}
export default ResponsiveAppBar;