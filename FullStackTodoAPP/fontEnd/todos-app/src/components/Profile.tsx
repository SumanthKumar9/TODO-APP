import React from 'react';
import { Container, Paper, Typography, Avatar, Button } from '@mui/material';
import { styled } from '@mui/system';

const RootContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const ProfilePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const AvatarImage = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
}));

const EditButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

function UserProfile() {
  return (
    <RootContainer  maxWidth="xs">
      <ProfilePaper elevation={3}>
        <AvatarImage alt="User Avatar" src="/path/to/avatar.jpg" />
        <Typography component="h1" variant="h5">
          John Doe
        </Typography>
        <Typography variant="subtitle1">
          johndoe@email.com
        </Typography>
        <Typography variant="subtitle1">
          Location: New York, NY
        </Typography>
        <EditButton variant="outlined" color="primary" fullWidth>
          Edit Profile
        </EditButton>
      </ProfilePaper>
    </RootContainer>
  );
}

export default UserProfile;
