import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Post() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Posts</h1>
      <TextField id="postId" label="Post ID" variant="standard" />
      <TextField id="postDetails" label="Post Details" variant="standard" />
    </Box>
  );
}
