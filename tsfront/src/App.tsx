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

const theme = createTheme({
  palette: {
    primary: blue,
  },
});

const backGround = {
  display: 'flex',
  justifyContent: 'center',
} as const

const topBar = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  bgcolor: 'primary',
  width: '100%',
  maxWidth: 1200,
} as const

const boxItem = {
  p: 2,
} as const

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={backGround}>
          <Box sx={topBar}>
            <Box sx={boxItem}>Box1</Box>
            <Box sx={boxItem}>Box2</Box>
          </Box>
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
