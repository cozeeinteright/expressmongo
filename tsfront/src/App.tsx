import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import Home from './page/Home'
import About from './page/About'
import AnchorText from './components/AnchorText'
import TopBar from './components/TopBar'

const theme = createTheme({
  palette: {
    primary: blue
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            bgcolor: 'background.paper'
          }}
        >
          <Box sx={{ borderRadius: 1,width: '50%',color:blue}}>Box1</Box>
          <Box sx={{ borderRadius: 1,width: '50%',border: 1,borderColor:"primary"}}>Box2</Box>
        </Box>
        <header>
          <AnchorText />
        </header>
        <Button variant="contained">Contained</Button>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
