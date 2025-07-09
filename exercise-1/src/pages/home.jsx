import {Link} from 'react-router';

function Home() {
    return  (
        <>
            <h1>Home</h1>
            <Link to="/destination">Go to Destination</Link>
            <br></br>
            <Link to="/about">Go to About</Link>
            <br></br>
        </>
    )
};

export default Home;