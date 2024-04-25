import React, { useRef, useState } from 'react';
import Editor from './TextEditor';
import Quill from 'quill';
import './Texteditor.css';
import "quill/dist/quill.snow.css";
import { Hidden } from '@mui/material';
import { height, positions } from '@mui/system';

const Delta = Quill.import('delta');

const Apptexteditor = () => {
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [readOnly, setReadOnly] = useState(false);

  // Use a ref to access the quill instance directly
  const quillRef = useRef();

  return (
    <div>
      <Editor
        ref={quillRef}
        

        
        
        
        
        
      />
      
    </div>
  );
};

export default Apptexteditor;