import logo from "../assets/img/vinted.png";
import { useNavigate } from "react-router-dom";
import Home from "../pages/Home";

const Header = ({ setSearch }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div onClick={() => navigate("/")}>
          <img src={logo} alt="vinted" className="logo" />
        </div>

        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Rechercher des articles"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div className="header-btn">
          <button
            onClick={() => {
              navigate("/signup");
            }}
          >
            S'inscrire
          </button>
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Se connecter
          </button>
          <button
            onClick={() => {
              navigate("/publish");
            }}
          >
            Vends tes articles
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
