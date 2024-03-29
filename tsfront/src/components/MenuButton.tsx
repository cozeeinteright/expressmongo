import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer';


const MenuButton = () => {
    const [menuState, setMenuState] = useState({ top: false})

    const toggleDrawer =
      (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setMenuState({ top: open });
      };

    return (
      <>
        <Button onClick={toggleDrawer(true)}>
          <Box sx={{color: 'white'}}>Open</Box>
        </Button>
        <Drawer
          anchor={'top'}
          open={menuState.top}
          onClose={toggleDrawer(false)}
        >
          <Box>menu1</Box>
          <Box>menu2</Box>
          <Box>menu3</Box>
          <Box>menu4</Box>
        </Drawer>
      </>
    )
}

export default MenuButton