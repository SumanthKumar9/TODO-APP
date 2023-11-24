import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';


function ResponsiveAppBar() {

  const [pages,setPages] = React.useState(['Home','Contact','Login']);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);


  //handlinng cookies
  const cookies = new Cookies();
  const TokenFromCookies = cookies.get('jwt_authoraisation');
  
  React.useEffect(() => {
    if(TokenFromCookies){
      setPages(['Home','Contact','Todos']);
    }
  },[])

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const buttonHandle = () =>{

    window.location.reload();
    window.location.href='/login';
    const cookies = new Cookies();
    cookies.remove('jwt_authoraisation')   

  }
 

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ml:10, display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/Home"
            sx={{
              // mr: {xs:10,md:40},
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              

            }}
          >
            TODOLIST APP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none'},
              }}
            >
               {pages.map((page) => (
              <Link to={`/${page}`} style={{textDecoration:"none"}}>
                  <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{mr:2,ml:1,color: '#1976d2', display: 'block' ,fontWeight:100,letterSpacing: '.1rem',}}
              >
                {page}
              </Button>
              </Link>
              
            ))}
              
             
             {TokenFromCookies && <Button  onClick={buttonHandle}   sx={{mr:2,ml:1,color: '#1976d2', display: 'block' ,fontWeight:100,letterSpacing: '.1rem',}}>Logout</Button>}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TODOLIST APP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',justifyContent:'right' } }}>
            {pages.map((page) => (
              <Link to={`/${page}`} style={{textDecoration:"none"}}>
                  <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ mr:5,my: 2, color: 'white', display: 'block' ,fontWeight:700,letterSpacing: '.3rem',}}
              >
                {page}
              </Button>
              </Link>
              
            ))}
               {TokenFromCookies && <Button onClick={buttonHandle}  sx={{ mr:5,my: 2, color: 'white', display: 'block' ,fontWeight:700,letterSpacing: '.3rem',}}>LOGOUT</Button>}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;