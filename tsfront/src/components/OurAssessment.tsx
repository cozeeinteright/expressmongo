import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';

const score = [
  {
      element: '大学との関係',
      point: 2,
      description:'組織的な繋がりは無いもののの学生と先生と通じて交流が図られている',
      statue: 'ongoing',
      todo:'継続',
      gole:'提携を結び人的な交流が図られている',
  },
  {
      element: '町との関係',
      point: 1,
      description:'組織的な繋がりは無いもののの学生と先生と通じて交流が図られている',
      statue: 'ongoing',
      todo:'継続 ',
      gole:'提携を結び人的な交流が図られている',  
  },
  {
      element: '金融機関との関係',
      point: 1,
      description:'借り入れは無いものの',
      statue: 'ongoing',
      todo:'継続',
      gole:'評点が高く事業に必要な融資をいつでも受けることが出来る',  
  },    
  {
      element: '県との関係',
      point: 2,
      description:'補助事業を通じて信頼を得つつある。鳥取県が始めるふるさと納税を使った非営利団体の支援にも選ばれている',
      statue: 'ongoing',
      todo:'継続',
      gole:'評点が高く事業に必要な融資をいつでも受けることが出来る',  
  }, 
  {
      element: '地域との関係',
      point: 2,
      description:'メディアへの掲載や地域再生大賞でも受賞によって信用を得ている。活動を行ってきた下中谷地区に住民に受け入れられている。',
      statue: 'ongoing',
      todo:'継続',
      gole:'評点が高く事業に必要な融資をいつでも受けることが出来る',  
   }, 
   {
      element: '地域の生物屋との関係',
      point: 2,
      description:'鳥取県生物学会に参加することで交流が図られている',
      statue: 'ongoing',
      todo:'継続',
      gole:'信頼を得て頼らせる存在になっている。',  
   },
   {
    element: '地域の企業との関係',
    point: 2,
    description:'鳥取県中小企業家同友会に参加して中小企業の経営者との交流が図られているものの、南部町内の企業との交流が少ないことが課題',
    statue: 'ongoing',
    todo:'継続',
    gole:'信頼を得て頼らせる存在になっている。',  
   }, 
]

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export default function OurAssessment() {
  const scorelist = score.map(({element,point,description,statue,todo,gole}) =>
    <>
      <Typography component="legend">{element}</Typography>
      <StyledRating
        name="customized-color"
        defaultValue={point}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />  
       <Typography >{description}</Typography>
    </>
  )
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      {scorelist}
    </Box>
  );
}