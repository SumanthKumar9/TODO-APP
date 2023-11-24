import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Button } from '@mui/material';

const FooterComponent = () => {

  const iconContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    marginTop:'10px',
    paddingLeft:'7%'
  };

  const socialIconStyle = {
    fontSize: '24px',
  };

   const paddingStyle = {
    paddingLeft :"7%",
   }
  return (
    <footer style={{
        backgroundColor: '#1976d2',
        color: '#fff',
        padding: '20px',
        textAlign: 'left', // Align text to the left
        // paddingLeft:'80px'
        marginTop:'1px',
      }}
     >
      <div style={paddingStyle}>
        <Typography variant="h6" sx={{paddingLeft:{xs:'23%',md:1}, my: 1, color: 'white', display: 'block' ,fontWeight:700,letterSpacing: '.2rem',}}>CONTACT US</Typography>
        <Link href="mailto:sumanthkumar9381282391@gmail.com "> <Button  style={{color:'white'}} >mail Us :   todos@gmail.com </Button></Link>
        <Typography variant="body1" sx={{ml:1}}>
          Join us on social media to get updates and tips for using our app effectively:
        </Typography>
      </div>
      
      <div style={iconContainerStyle}>
        <Typography variant="body1"  >&copy; {new Date().getFullYear() } Todolist App</Typography>
       
      </div>
      <div style={iconContainerStyle}>
      
        <Link href="https://www.facebook.com">
          <FacebookIcon sx={{color:'white'}}style={socialIconStyle} />
        </Link>
        <Link href="https://www.twitter.com">
          <TwitterIcon sx={{color:'white'}} style={socialIconStyle} />
        </Link>
        <Link href="https://www.instagram.com">
          <InstagramIcon sx={{color:'white'}} style={socialIconStyle} />
        </Link>
        <Link href="https://www.linkedin.com">
          <LinkedInIcon sx={{color:'white'}} style={socialIconStyle} />
        </Link>
        <Link href="mailto:contact@yourcompany.com">
          <EmailIcon sx={{color:'white'}} style={socialIconStyle} />
        </Link>
      </div>
    </footer>
  );
};

export default FooterComponent;
