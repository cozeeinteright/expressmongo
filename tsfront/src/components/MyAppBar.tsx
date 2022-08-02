import * as React from 'react';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { IconButton ,Button, Toolbar} from '@mui/material';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function MyAppBar(props: HeaderProps) {
  const { sections, title } = props;
  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <IconButton 
          color='primary'
          size='medium'
          sx={{ 
            display:{xs:'none',md:'block'},
            border: 1,
            borderColor: 'primary.main',
            borderRadius: 3,
            alignItems: 'center',
            p: 0,
            mx: 2,
            my: 0,
          }}
        >
          <NaturePeopleIcon/>
        </IconButton>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          sx={{ flex: 1, fontSize: {xs:15, ms:20, md:25}}}
        >
          {title}
        </Typography>
        <IconButton 
          color='primary' 
          size='medium' 
          sx={{
            display:{xs:'block',md:'none'},
            alignItems: 'center',
            border: 1,
            borderColor: 'primary.main',
            borderRadius: 3,
            p: 0,
            mx: 2,
            my: 0,
          }}
        >
          <MenuIcon />
        </IconButton>
        <IconButton 
          color='primary' 
          size='medium' 
          sx={{
            alignItems: 'center',
            border: 1,
            borderColor: 'primary.main',
            borderRadius: 2,
            p: 0,
            mx: 2,
            my: 0,
          }}
        >
          <LoginIcon />
        </IconButton>
      </Toolbar>
      <Toolbar
        component="nav"
        sx={{ 
          display:{xs:'none',md:'block'} , 
          flexDirection: 'row', 
          justifyContent: 'space-between' ,
        }}
      >
        {sections.map((section) => (
          <Button
            component={Link}
            to={section.url}
            startIcon={<NaturePeopleIcon/>}
            sx={{
              p: 0,
              m: 1,
              bgcolor:'primary',
              alignItems: 'center',
            }}
          >
            {section.title}
          </Button>
        ))}
      </Toolbar>
    </>
  )
}