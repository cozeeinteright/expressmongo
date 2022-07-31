import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

import Typography from '@mui/material/Typography';

const steps = [
  {
    label: '行政の担当者が生物多様性の問題を認識し始める',
    description: `行政の担当者やメディアなど当事者意識のある人から問題意識が生じる`,
    result:'鳥取県の補助金を活用して鳥取県と協働提案事業を行ったことで、行政の担当レベルでの認知が広がった。',
    progress:'done',
  },
  {
    label: '地域の中で生物多様性という言葉が認識され始める',
    description:
      '実際の保全活動、行政との連携、メディアによって生物多様性の認知度が高まる',
    result:'クラウドファンディンに挑戦したことが、地方紙に取り上げられて５０代以上への認知が広がった。地域再生大賞を受賞したことでさらにポジティブな評価が広がった。',
    progress:'done', 
  },
  {
    label: '生物多様性の経済的な価値を一部の人が認識し始める',
    description: '高まった認知度にビジネスチャンスを感じる人が出てくる',
    result:'',
  },
  {
    label: '生物多様性に対して投資が始まる',
    description: '人的、金銭的な投資が集まり、実際の事業に結びつき始める',
    result:'',
  },
  {
    label: '生物多様性を切り口とした経済活動が活発になる',
    description: '町内外の企業・団体が事業に参入し始める。',
    result:'',
  }, 
  {
    label: '里地里山ミュージアムを設立する',
    description: '生物多様性保全と観光の拠点が出来上がる。',
    result:'',
  } , 
  {
    label: '大学生を職員として雇用する',
    description: '大学生の就職先として認知される',
    resule:'',
  }  
  
];

export default function OurStep() {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper orientation="vertical">
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                 <Typography>{step.result} </Typography>
                 <Typography>{step.progress} </Typography>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
