import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function LimitTags() {
  return (
    <Autocomplete
      multiple
      limitTags={2}
      id="multiple-limit-tags"
      options={Electives}
      getOptionLabel={(option) => option.title}
      defaultValue={[Electives[1], Electives[2], Electives[3]]}
      renderInput={(params) => (
        <TextField id="outlined-basic"  variant="outlined" style={{width:"100%", border:"1px solid black", borderRadius:"10px"}}{...params} label="" placeholder="Favorites" />
      )}
      sx={{ width: '100%' }}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const Electives = [
  { title: 'Company'},
  { title: 'Company' },
  { title: 'Buisness'},
  { title: 'OnBoarding'},
  
];

export default LimitTags;