import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProgressBar from './ProgressBar'

const score = [
  {
      element: '地域の大学との協力',
      point: 20,
      description:'組織的な繋がりは無いもののの学生と先生と通じて交流が図られている。',
      statue: '継続して改善',
      todo:'継続して信頼を構築する',
      gole:'組織間で提携を結ぶ。お互いを信頼して人的な交流が図られている。',
  },
  {
      element: '町との協力',
      point: 10,
      description:'地域循環共生圏に係る取り組みを通じて企画政策課と交流が図られている。',
      statue: '継続して改善',
      todo:'継続して信頼を構築する ',
      gole:'町の生物多様性保全を担う団体として信任される。提携を結び人的な交流が図られている',  
  },
  {
      element: '金融機関との協力',
      point: 10,
      description:'借り入れは無いものの、支店に挨拶に行くなど信用金庫との緩い交流が図られている。',
      statue: '継続して改善',
      todo:'投資を呼び込めるように体制を強化する',
      gole:'評点が高く事業に必要な融資をいつでも受けることが出来る。',  
  },    
  {
      element: '県との協力',
      point: 20,
      description:'補助金に係る事業を通じて交流が図られている。鳥取県が始めるふるさと納税を使った支援団体にも選ばれている',
      statue: '現状維持',
      todo:'継続して関係を構築',
      gole:'鳥取県の生物多様性に係るパイオニアとして信頼される。',  
  }, 
  {
      element: '地域との協力',
      point: 20,
      description:'いくらの郷との協力を得て下中谷地域を中心に活動することが出来ている。直接の関係を構築するように務める。',
      statue: '積極的に改善',
      todo:'継続して関係を構築',
      gole:'生物多様性の価値を認識して積極的に協力してもらえる状態',  
   }, 
   {
      element: '鳥取県内の生物関係者との協力',
      point: 20,
      description:'鳥取県生物学会と鳥取県の日本自然保護協会の連絡会を通じて緩く交流が図られている',
      statue: '継続して改善',
      todo:'継続',
      gole:'信頼を得て頼らせる存在になっている。',  
   },
   {
    element: '地域の企業との協力',
    point: 20,
    description:'鳥取県中小企業家同友会の会員企業を鳥取県内の企業と交流が図られている。南部町の企業や団体との交流が少ない。',
    statue: '継続して改善',
    todo:'継続',
    gole:'信頼を得て頼らせる存在になっている。',  
   }, 
]

export default function OurAssessment() {
  const scorelist = score.map(({element,point,description,statue,todo,gole}) =>
    <>
      <Typography variant="h6">{element}</Typography>
      <Typography variant='body1' >{description}</Typography>
      <Typography variant='body1' sx={{fontWeight: 'bold'}}>状態{statue}</Typography> 
      <Typography variant='body1' >ゴール{statue}</Typography>
      <ProgressBar value={point} />
    </>
  )
  return (
    <Box>
      {scorelist}
    </Box>
  );
}