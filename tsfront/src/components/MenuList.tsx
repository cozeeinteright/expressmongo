import Box from '@mui/material/Box'
import DeleteIcon from '@mui/icons-material/Delete';

const MenuList = () => {

    const ground = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '600px',
        maxWidth: 800,      
    } as const

    const inner = {
        width: '100px',
    } as const

    return (
        <>
          <Box sx={ground}>
            <Box sx={inner}>menu1</Box>
            <Box sx={inner}>menu2</Box>
            <Box sx={inner}>menu3</Box>
            <Box sx={inner}><DeleteIcon />menu4</Box>
          </Box>
        </>
    )
}
export default MenuList