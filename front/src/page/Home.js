import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <p>Here is Home</p>
            <nav>
                <Link to="/about">Go to About page</Link>
            </nav>
        </>        
    )
}

export default Home