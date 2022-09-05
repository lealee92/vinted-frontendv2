import { useNavigate, Link } from "react-router-dom";
import Card from "../components/Card";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  const navigate = useNavigate();

  return isLoading ? (
    <p>en cours de chargement</p>
  ) : (
    <>
      <div className="home-hero-bg-img">
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
            return (
              <Link to={`/offer/${card._id}`} key={card._id}>
                <Card key={index} data={card} />;
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default Home;
