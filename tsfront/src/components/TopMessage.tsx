import { Container, Typography } from '@mui/material';
import { Grid ,Box} from '@mui/material'


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
                    <Grid container spacing={2}>
                        <Grid xs={12}>
                            <Typography sx={firststack} variant='h4' >
                                日本の里山を
                            </Typography> 
                        </Grid>
                        <Grid xs={12} >  
                            <Typography sx={secondstack} variant='h4' >
                                環境を学んだ若者たちが活躍する場所に変える
                            </Typography>                                 
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}