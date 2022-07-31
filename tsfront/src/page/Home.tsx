import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import Header from './../components/Header'
import Main from './../components/Main'
import Footer from './../components/Footer'

const theme = createTheme();

function  Home() {
    return (
      <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Header />
          <Main />
          <Footer />
        </Container>        
      </ThemeProvider>
      </>
    );
  }

export default Home