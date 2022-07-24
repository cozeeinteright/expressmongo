import { Link } from "react-router-dom";
import dummyUser from './../seed.js'

const About = () => {
    console.log(dummyUser)
    return (
        <>
            <p>Here is About</p>
            {dummyUser.allUser[0].name}
            <nav>
                 <Link to="/">Go to Home page</Link>
            </nav>
        </>        
    )
}

export default About