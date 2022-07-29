import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import Header from './../components/Header'
import Main from './../components/Main'
import Footer from './../components/Footer'

const theme = createTheme();

function  Home() {
    return (
      <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component="header" maxWidth="lg">
          <Header />
        </Container>
        <Container component="main"  maxWidth="lg">
          <Main />
        </Container>
        <Container component="footer"  maxWidth="lg">
          <Footer />
        </Container>        
      </ThemeProvider>
      </>
    );
  }

export default Home