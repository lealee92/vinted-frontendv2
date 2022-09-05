import logo from "../assets/img/vinted.png";
import { useNavigate } from "react-router-dom";

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
          <div className="left-btn">
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
          </div>
          <div className="publish-btn">
            <button
              onClick={() => {
                navigate("/publish");
              }}
            >
              Vends tes articles
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
