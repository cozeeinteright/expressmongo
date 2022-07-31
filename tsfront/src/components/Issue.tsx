import * as React from 'react';
import { Grid, Typography } from '@mui/material';

interface info {
  name: String,
  description: String,
  url: String
}

export default function Issue(props: info) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} md={12}>
        <Typography variant='h5' sx={{fontSize: {xs: 15, md: 25}}}>{props.name}</Typography>
      </Grid>
      <Grid item xs={8} md={12}>
         <Typography variant='h5' sx={{fontSize: {xs: 9, md: 15}}}>{props.description}</Typography>
      </Grid>
    </Grid>
  );
}