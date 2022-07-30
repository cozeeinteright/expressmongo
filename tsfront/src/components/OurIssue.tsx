import { Container ,Stack} from '@mui/material'
import Issue from './Issue'


const issues = [
  {
    name: '保全を担ったリーダーたちの高齢化と後継者の不足',
    description: '',
    url: ''
  },
  {
    name: '増える耕作放棄地による二次的自然と経済価値の損失',
    description: '',
    url: ''
  },
  {
    name: '市町村に生物多様性の担当課がないことによる経済的損失',
    description: '',
    url: ''
  },
  {
    name: '環境を学んだ学生の受け皿となる就職先',
    description: '',
    url: ''
  },  
]

export default function OurIssue() {
  return (
    <>
      <Container maxWidth="md">
        <Stack direction="row" spacing={2}>
          <Issue>Item 1</Issue>
          <Issue>Item 2</Issue>
          <Issue>Item 3</Issue>
        </Stack>
      </Container>
    </>
  )
}