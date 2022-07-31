import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { IconButton } from '@mui/material';
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
        <IconButton size='small' sx={{ display:{xs:'none',md:'block'},alignItems: 'center'}}><NaturePeopleIcon/></IconButton>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 ,fontSize: {xs:10, md:25}}}
        >
          {title}
        </Typography>
        <IconButton size='small' sx={{display:{xs:'block',md:'none'}, alignItems: 'center'}}>
          <MenuIcon />
        </IconButton>
        <IconButton size='small' sx={{alignItems: 'center'}}>
          <LoginIcon />
        </IconButton>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ display:{xs:'none',md:'block'}, justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  )
}