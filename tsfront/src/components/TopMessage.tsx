import { Container, Typography } from '@mui/material';
import { Box } from '@mui/material'

const boxstyle = {
    display: 'flex',
    alignItems: 'center',
    height: {xs:200, md:500},
} as const 

const style = {
    fontSize: {xs:15, md:40},
    textAlign: 'left',
    letterSpacing: 6,
} as const 

export default function TopMessage() {
    return (
        <>
            <Container >
                <Box sx={boxstyle}>
                    <Typography sx={style} variant='h4' >
                        里山生物多様性プロジェクトは
                    </Typography>
                    <Typography sx={style} variant='h4' >
                        人と自然とが共生する豊かな未来を造ります
                    </Typography>
                </Box>
            </Container>
        </>
    )
}