import * as React from 'react'
import { styled } from '@mui/material/styles'
import { AppBar, Box, Toolbar, IconButton, Typography} from '@mui/material'
import MenuIcon  from '@mui/icons-material/Menu'
import MoreIcon from '@mui/icons-material/MoreVert'


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
      minHeight: 128,
    },
  }));

const Header =() => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <StyledToolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
            >
              MUI
            </Typography>
            <IconButton
              size="large"
              aria-label="display more actions"
              edge="end"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </StyledToolbar>
        </AppBar>
      </Box>
    )
}
export default Header