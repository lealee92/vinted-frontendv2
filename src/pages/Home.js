import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import tear from "../assets/img/tear.svg";

const Home = ({ data, isLoading }) => {
  const navigate = useNavigate();

  return isLoading ? (
    <p>En cours de chargement</p>
  ) : (
    <>
      <div className="home-hero-bg-img">
        <img src={tear} alt="forme" className="home-hero-forme" />
        <div>
          <div className="home-hero-ready">
            Prêts à faire du tri dans vos placards ?
            <button
              onClick={() => {
                navigate("/publish");
              }}
            >
              Commencer à vendre
            </button>
          </div>
        </div>
      </div>

      <div className="home-card-wrapper">
        {data.offers &&
          data.offers.map((card, index) => {
            return <Card key={index} data={card} />;
          })}
      </div>
    </>
  );
};

export default Home;
