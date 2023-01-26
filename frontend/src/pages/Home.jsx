import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../context/AuthenticationContext";
import logo from "../assets/logo.svg";

export default function Home() {
  const { tryLogin, token } = useContext(authContext);

  const handleClick = () => {
    tryLogin();
  };
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <button type="button" onClick={handleClick}>
        Get a token
      </button>

      <p>{token}</p>
      <button
        type="button"
        onClick={() => navigator.clipboard.writeText(token)}
      >
        Copy to clipboard
      </button>

      <Link to="/users">Go to users list</Link>
    </header>
  );
}
