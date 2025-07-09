//heading list of all destination and a button to the home page
import { Link } from 'react-router';
import { useNavigate } from 'react-router';

function Destination() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <>
            <h1>Destination</h1>
            <button onClick={handleClick}>Go Home</button>
            <br />
            <Link to="/about">Go to About</Link>
            <br />
        </>
    );
}

export default Destination;
