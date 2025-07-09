import { useNavigate } from "react-router";

function About() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <h1>About</h1>
      <button onClick={handleClick}>Go Home</button>
    </>
  );
}

export default About;