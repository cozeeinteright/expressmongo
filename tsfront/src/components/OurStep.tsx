import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: '一部の人が生物多様性の問題を認識し始める',
    description: `行政やメディアの担当者など関係する一部の人たちの中で問題意識が生まれる`,
  },
  {
    label: '広い範囲で生物多様性という言葉が認知される',
    description:
      '実際の保全活動、行政との連携、メディアによって生物多様性の認知度が高まる',
  },
  {
    label: '生物多様性の経済的な価値を一部の人が認識し始める',
    description: '高まった認知度にビジネスチャンスを感じる人が出てくる',
  },
  {
    label: '生物多様性に対して投資が始まる',
    description: '人的、金銭的な投資が集まり、実際の事業に結びつき始める',
  },
  {
    label: '生物多様性を切り口として経済活動が活発になる',
    description: '町内外の企業・団体が事業に参入し始める。',
  }, 
  {
    label: '里地里山ミュージアムを設立する',
    description: '生物多様性保全と観光の拠点が出来上がる。',
  } , 
  {
    label: '大学生を職員として雇用する',
    description: '大学生の就職先として認知される',
  }  
  
];

export default function OurStep() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
