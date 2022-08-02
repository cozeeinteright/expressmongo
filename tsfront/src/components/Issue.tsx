import { Box, Typography } from '@mui/material'
import OurIssue from './OurIssue'

const issues = [
  {
    name: '少子高齢化',
    description: '保全を担ったリーダーたちの高齢化と後継者の不足',
    url: ''
  },
  {
    name: '生物多様性の損失',
    description: '増える耕作放棄地、進む二次的自然と経済価値の損失',
    url: ''
  },
  {
    name: '都市との格差',
    description: '町に生物多様性の担当課がない',
    url: ''
  },
  {
    name: '働く機会の損失',
    description: '環境を学んだ学生の受け皿となる就職先がない',
    url: ''
  },  
]

export default function Issue() {
  const issueList = issues.map(({name, description, url}) =>
    <OurIssue name={name} description={description} url={url} />
  )
  return (
    <>
      <Box>
        <Typography variant='h6' sx={{my:3}}>
           解決したい４つの課題
        </Typography>
        {issueList}       
      </Box>
    </>
  )
}

