import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import Header from './../components/Header'
import Main from './../components/Main'
import Footer from './../components/Footer'

const theme = createTheme();

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

function  Home() {
    return (
      <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container component="header" maxWidth="lg">
          <Header title="里山生物多様性プロジェクト" sections={sections}/>
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