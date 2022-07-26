import { Link } from "react-router-dom"
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const section = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: 1200,
} as const

function  Home() {
    return (
      <>
        <Box sx={section}>
          <Typography component="h2">
            h2. Heading
          </Typography>;
          <nav>
            <Link to="/about">About</Link>
          </nav>
        </Box>
      </>
    );
  }

export default Home