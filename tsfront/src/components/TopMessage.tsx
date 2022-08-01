import { Container, Typography } from '@mui/material';
import { Box} from '@mui/material'


const ground = {
   display: 'block',
   height: {xs: 200, md: 400},
} as const

const firststack = { 
    fontSize: {xs: 16, md: 40},
} as const

const secondstack = {
    fontSize: {xs: 14, md: 35},
} as const

export default function TopMessage() {
    return (
        <>
            <Container >
                <Box sx={ground}>
                    <Typography sx={firststack} variant='h4' >
                        私たちのゴール
                    </Typography> 
                    <Typography sx={secondstack} variant='h3' >
                        「南部町の里地里山」を
                    </Typography>    
                    <Typography sx={secondstack} variant='h3' >
                        環境を学んだ若者たちが活躍する場所に変える
                    </Typography>                               
                </Box>
            </Container>
        </>
    )
}