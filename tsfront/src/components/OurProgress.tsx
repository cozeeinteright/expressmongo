import { Container ,Typography } from '@mui/material'
import OurTimeLine from './OurTimeLine'


export default function OurProgress() {
  return (
    <Container maxWidth="md">
      <Typography variant='h4'>
        ゴールまでのプロセス
      </Typography>
      <OurTimeLine />
    </Container>
  )
}