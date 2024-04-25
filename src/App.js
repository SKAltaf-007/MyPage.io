import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Apptexteditor from './Apptexteditor';
import './App.css';
import InputAdornment from '@mui/material/InputAdornment';
import './Texteditor.css';
import Multiline from './Multiline';
import { colors } from '@mui/material';
import "quill/dist/quill.core.css";
import InfoIcon from '@mui/icons-material/Info';
import MenuItem from '@mui/material/MenuItem';
import Select from '@material-ui/core/Select';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import LimitTags from './Tags';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
export default function App() {
    


  const [formData, setFormData] = useState({
    Name: '',
    shortdescription: '',
    Description: '',
    Assigntrainer: '',
    Jobrole:'',
    Tags:''
  });
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.Name.trim()) {
      validationErrors.Name = 'Name is required';
    }
    if (!formData.shortdescription.trim()) {
      validationErrors.shortdescription = 'Short Description is required';
    }
    if (!formData.Description.trim()) {
      validationErrors.Description = 'Description is required';
    }
    if (!formData.Assigntrainer.trim()) {
      validationErrors.Assigntrainer = 'Assign trainer is required';
    }
    if (!formData.Jobrole.trim()) {
      validationErrors.Jobrole = 'Job Role is required';
    }
    if (!formData.Tags.trim()) {
      validationErrors.Tags = 'Tag is required';
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
   
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="my-form">
      <div className="input-group">
        <label>Name<span style={{color:"red"}}>*</span></label>
        <TextField type="text"  name="Name" defaultValue="Enter your course name" id="outlined-basic"  variant="outlined" style={{width:"100%", border:"1px solid black", borderRadius:"10px"}} required/>
            
       <div className='error'>{errors.Name && <div>{errors.Name}</div>}</div>
        
      </div>
      <div className="input-group">
        <label>Short Description:</label>
        <TextField type="text"  name="shortdescription" defaultValue="An one line about your course" id="outlined-basic"  variant="outlined" style={{width:"100%", border:"1px solid black", borderRadius:"10px"}} required/>
                
          
          <div className='error'>{errors.shortdescription && <div>{errors.shortdescription}</div>}</div>
        
      </div>
      <div className="input-group">
        <label>Description </label>
        <Button
        style={{
          backgroundColor:'red',
          color:'white',
          borderRadius:'20px',
          position:'relative',
          marginLeft:'1173px',
          marginBottom:'-77px',
          fontSize:'12px',
          padding:'10px',
          width:'126px'
          
        }}
        
      component="label"
      // role={undefined}
      // variant="contained"
      // tabIndex={-1}
      
    >
      AI Generate
      {/* <VisuallyHiddenInput type="file" /> */}
    </Button>
        <Apptexteditor></Apptexteditor>   
         
          <div className='error'>{errors.Description && <div>{errors.Description}</div>}</div>
       
      </div>
      <div className="input-group">
        <label>Assign Trainer<span style={{color:'grey'}}>    (Either you or the assigned person can later edit and create the course)</span></label>
        <TextField  select type="text"   name="AssignTrainer"   defaultValue={currencies[1]}   variant="outlined" style={{width:"100%", border:"1px solid black", borderRadius:"10px"}} required>
        
          <MenuItem value="">
            None
          </MenuItem>
          <MenuItem value={10}>Christina</MenuItem>
          <MenuItem value={20}>Joe</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>

          </TextField>
       
          
          
          <div className='error'>{errors.Assigntrainer && <div>{errors.Assigntrainer}</div>}</div>
        
      </div>
      <div className="input-group"> 
        <label>Job Role</label>
        <TextField id="input-with-icon-textfield" select type="text"  InputProps={{startAdornment:(<InputAdornment position='start'><InfoIcon/></InputAdornment>),}} name="JobRole" defaultValue={currencies[1]}   variant="outlined" style={{width:"100%", border:"1px solid black", borderRadius:"10px"}} required>
        
          <MenuItem value={10}>All Roles</MenuItem>
          <MenuItem value={20}>Developer</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
           </TextField>
          <div className='error'>{errors.Jobrole && <div>{errors.Jobrole}</div>}</div>
        
      </div>
      <div className="input-group">
        <label>Tags<span style={{color:'red'}}>*</span></label>
        
     
     {/* <TextField type="text"  name="Tags" defaultValue="Enter your course name" id="outlined-basic"  variant="outlined" style={{width:"100%", border:"1px solid black", borderRadius:"10px"}} required> } */}
    
        <LimitTags></LimitTags>    
        {/* </TextField> */}
         <div className='error'> {errors.Tags && <div>{errors.Tags}</div>}</div>
        
      </div>
      <Button 
      style={{
        color:'grey',
        width:'200px',
        height:'68px',
        position:'relative',
        marginLeft:'885px',
        marginBottom:'-67px',
        backgroundColor:'aliceblue'

      }}
      variant="text">Cancel</Button>
      <div className='Subbtn'>

      <Button
      
      style={{backgroundColor:'red',
      width:'200px',
      height:'68px',
      borderRadius:'8px',
      position:'relative',
      marginLeft:'1109px'
      
    
    }}
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      
    >
      Create Course
      
    </Button>
    </div>
      
    </form>
  );
} 
 
