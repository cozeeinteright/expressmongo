import { Link } from "react-router-dom"
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import AnchorText from './../components/AnchorText'
import MenuButton from './../components/MenuButton'
import MenuList from './../components/MenuList'

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
  color: 'white',
} as const

const menubutton = {
  p: 2,
  display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' },
} as const

const menulist = {
  p: 2,
  display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' },
} as const

function  Home() {
    return (
      <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <header>
        <Box sx={groundTopbar}>
          <Box sx={innerTopbar}>
            <Box sx={title}>Satoyama Biodiversiry Project</Box>
            <Box sx={menubutton}><MenuButton /></Box>
            <Box sx={menulist}><MenuList /></Box>
          </Box>
        </Box>
        <AnchorText />
      </header>
      <main>
      <Box >
          <Typography component="h2">
            We belive
          </Typography>;
          <nav>
            <Link to="/about">About</Link>
          </nav>
        </Box>    
      </main>
      <footer>
        <Button variant="contained">Contained</Button>
      </footer>
    </ThemeProvider>
    </>
    );
  }

export default Home