import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function User() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="userId" label="User ID" variant="standard" />
      <TextField id="uFirstName" label="User FirstName" variant="standard" />
    </Box>
  );
}
