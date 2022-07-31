import MyCalender from './MyCalender'
import TopMessage from './TopMessage'
import OurIssue from './OurIssue'
import OurProgress from './OurProgress'
import OurAssessment from './OurAssessment'

export default function Main() {
    return (
        <>
            <TopMessage />
            <OurIssue />
            <OurProgress />
            <OurAssessment />
            <MyCalender />
        </>
    )
}