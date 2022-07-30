import MyCalender from './MyCalender'
import TopMessage from './TopMessage'
import OurIssue from './OurIssue'
import OurProgress from './OurProgress'
import OurPurpose from './OurPurpose'
import OurAssessment from './OurAssessment'
import OurStrategy from './OurStrategy'

export default function Main() {
    return (
        <>
            <TopMessage />
            <OurPurpose />
            <OurIssue />
            <OurStrategy />
            <OurProgress />
            <OurAssessment />
            <MyCalender />
        </>
    )
}