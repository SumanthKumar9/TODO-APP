import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { GetApiCall, PostApiCall } from '../utilities/CommonHttpService';
import { ALL_USERS, CREATE_USER, headers } from '../utilities/ApiEndPoints';

function Copyright(props: any) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
        TodolistApp
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {

  const [userDetails,setUserDetails] = useState({});
  const [signUp,setSignUp] = useState(true);

  const users:any = GetApiCall(ALL_USERS,headers);
  console.log(users?.data)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget)

    const checkUserExsitance = () =>{
      for (const key in users?.data){
        if(users?.data[key].email == data.get('email')  || users?.data[key].username == data.get('userName')){
          return true
        }  
      }
      return false
    }
   
    if(!checkUserExsitance()){
      setSignUp(false)
      const response:any = await PostApiCall(CREATE_USER,{
        email: data.get('email'),
        username:data.get('userName'),
        password: data.get('password'),
        first_name:data.get('firstName'),
        last_name:data.get('lastName'),
        role:'user',
    },headers);
      console.log(response?.data)
      window.location.href = '/login';
    }else{
      setSignUp(false)
      
    }

    
  };
  
console.log(userDetails,typeof(userDetails));
  return (
    <ThemeProvider theme={defaultTheme} >
      <Container style={{ padding: '20px',width:"90%", backgroundColor: '#fff', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',marginTop:'50px' ,marginBottom:'50px'}} component="main" maxWidth="xs" >
        <Box
        
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'blue' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="UserName"
                  name="userName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            {!signUp &&  <Typography variant='body1' sx={{ color: 'rgb(231, 57, 57)', fontWeight: 'bold', marginTop: '20px' }}> username or email is already exist</Typography>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 4,marginTop:'40px'}}
            >
              Sign Up
            </Button>
           
            <Grid container justifyContent="flex-end">
              <Grid item>
                  Already have an account ? <Link to={'/login'} style={{textDecoration:'none'}}> Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 2 }} />
      </Container>
    </ThemeProvider>
  );
}