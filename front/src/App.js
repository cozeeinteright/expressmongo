import { BrowserRouter,Routes, Route } from "react-router-dom";
import { green } from '@mui/material/colors'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Home from './page/Home'
import About from './page/About'
import ShowLoginform from './components/ShowLoginform';

const theme = createTheme({
  palette: {
    primary: green,
  }
})

function App() {
  return (
    <ThemeProvider thema={theme}>
      <ShowLoginform />
      <header className="App-header">
        test app
      </header>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
