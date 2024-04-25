
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import './ValidationTextFields.css';


export default function ValidationTextFields() {
  return (
    <Box style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px"}}
      component="form"
      
    >
    
      <TextField type="text"   id="outlined-basic"  variant="outlined" style={{width:"100%", border:"1px solid black", borderRadius:"10px"}} required/>
      
    </Box>
  );
}