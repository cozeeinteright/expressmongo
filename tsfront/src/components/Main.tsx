import MyCalender from './MyCalender'
import TopMessage from './TopMessage'
import Issue from './Issue'
import OurProgress from './OurProgress'
import OurAssessment from './OurAssessment'
import Motivation from './Motivation'
import OurValue from './OurValue'

export default function Main() {
    return (
        <>
            <TopMessage />
            <OurValue />
            <Motivation />
            <Issue />
            <OurProgress />
            <OurAssessment />
            <MyCalender />
        </>
    )
}