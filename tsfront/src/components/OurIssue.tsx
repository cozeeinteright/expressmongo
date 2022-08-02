import * as React from 'react';
import { Typography, Box } from '@mui/material';

interface info {
  name: String,
  description: String,
  url: String
}

export default function OurIssue(props: info) {
  return (
    <>
      <Box sx={{m:3}}>
        <Typography variant='h6'>{props.name}</Typography>
        <Typography variant='body2' >{props.description}</Typography>
      </Box>
    </>
  );
}