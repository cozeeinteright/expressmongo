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
import MenuButton from './components/MenuButton'

const theme = createTheme({
  palette: {
    primary: blue,
  },
});

const groundTopbar = {
  display: 'flex',
  justifyContent: 'center',
  bgcolor: `${theme.palette.primary.light}`,
} as const

const innerTopbar = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: 1200,
} as const

const title = {
  p: 2,
} as const

const boxItem = {
  p: 2,
} as const

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <header>
          <Box sx={groundTopbar}>
            <Box sx={innerTopbar}>
              <Box sx={title}>Satoyama Biodiversiry Project</Box>
              <Box sx={boxItem}>
                <MenuButton />
              </Box>
            </Box>
          </Box>
          <AnchorText />
        </header>
        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
            </Routes>
          </BrowserRouter>        
        </main>
        <footer>
          <Button variant="contained">Contained</Button>
        </footer>
    </ThemeProvider>
    </>
  );
}

export default App;
