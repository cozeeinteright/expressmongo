import CssbaseLine from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './page/Home'
import About from './page/About'
import ShowLoginform from './components/ShowLoginform';
import Item from './components/Item'

function App() {
  return (
    <>
      <CssbaseLine />
      <Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid>
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
    </>
  );
}

export default App;
