import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { PostApiCall } from '../utilities/CommonHttpService';
import {  GET_AUTH_TOKEN, headers, LOGIN, Token_Headers } from '../utilities/ApiEndPoints';
import Cookies from 'universal-cookie';
import jwt from 'jwt-decode';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();


export default function SignUp() {

  const [loginDetails, setLoginDetails] = useState({});
  const [login, setLogin] = useState(true);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const login: any = await PostApiCall(LOGIN, {
      username: data.get('userName'),
      password: data.get('password'),
    }, headers)

    if (login?.data) {
      setLogin(true);
      const response: any = await PostApiCall(GET_AUTH_TOKEN, {
        username: data.get('userName'),
        password: data.get('password'),
      }, Token_Headers);

      const Token = response?.data?.access_token;
      const cookies = new Cookies();
      const decode: any = jwt(Token);

      cookies.set("jwt_authoraisation", Token, {
        expires: new Date(decode.exp * 1000),
      });
      window.location.href = '/home';

    } else {
      setLogin(false)

    }



  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container style={{ height: '500px', padding: '20px', width: '90%', backgroundColor: '#fff', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', marginTop: '70px', marginBottom: '70px' }} component="main" maxWidth="xs" >
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'blue' }}>
            <LockOpenIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
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
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            {!login && <Typography variant='body1' sx={{ color: 'rgb(231, 57, 57)', fontWeight: 'bold', marginTop: '20px' }}>Inavalid username or password</Typography>}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 4, marginTop: '40px' }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                Dont have a account ?
                <Link to={'/signup'} style={{ textDecoration: "none", color: '#1976d2', marginLeft: '5px' }}>
                  signup
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 2 }} /> */}
      </Container>
    </ThemeProvider>
  );
}