import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export default function Home() {
  return (
    <>
      <Autocomplete
        options={EMP_NAME}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="EMP_NAME" />}
      />
    </>
  );
}
const EMP_NAME = [
  {
    label: 'John',
  },
  {
    label: 'Sam',
  },
];
