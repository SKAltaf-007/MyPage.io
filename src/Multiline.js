import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function Multiline() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '98%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
     
        <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows={5}
          column={20}
          defaultValue=""
          style={{marginLeft:"11px"}}
        />
      </div>
     
    </Box>
  );
}
