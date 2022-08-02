import * as React from 'react';
import { Typography } from '@mui/material'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


export default function OppositeContentTimeline() {
  return (
    <React.Fragment>
      <Timeline position="right">
        <TimelineItem>

          <TimelineOppositeContent color="text.secondary">
            2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='success' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>スタート</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot  color='success' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="body1" component="span">
            生物多様性の認知度を高める
            </Typography>
            <Typography variant='body2'>クラウドファンディングを達成</Typography>
            <Typography variant='body2'>地域再生大賞の優秀賞を受賞</Typography>
            <Typography variant='body2'>国際生物多様性の日祭りを開催</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot  color='info' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="body1" component="span">
            地域の団体とパートナーシップを形成
            </Typography>
            <Typography variant='body2'>生物多様性アクターズ会議を開催</Typography>
            <Typography variant='body2'>第２回国際生物多様性の日祭り</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>投資を呼び込む</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>域外の企業・団体とパートナーシップを形成</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2030
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant='body1'>里地里地ミュージアムを設立</Typography>
            <Typography variant='body1'>新卒の大学生を雇用</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2040
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>ゴール</TimelineContent>
        </TimelineItem>

      </Timeline>
    </React.Fragment>
  );
}