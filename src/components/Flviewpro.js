import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';
import { Grid } from '@mui/material';

const action = (
  <Button color="primary" size="medium" >
    lorem ipsum dolorem
  </Button>
);

export default function LongTextSnackbar() {
  return (
    
    <Stack spacing={3} alignItems={'center'} paddingLeft={'350px'} paddingTop={'120px'} sx={{ maxWidth: 1150 }} >
      <SnackbarContent  message="Freelancer view."  />
      <SnackbarContent
        message='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      />
      
    </Stack>
   
  );
}
