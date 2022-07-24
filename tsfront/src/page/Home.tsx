import { Link } from "react-router-dom";

function  Home() {
    return (
      <>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </>
    );
  }

export default Home