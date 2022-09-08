import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";
import SignUp from "./pages/SignUp";

function App() {
  // // tout ce qui concerne l'authentification se passe dans app.js
  // const [token, setToken] = useState(Cookie.get("userToken") || null);
  // const setUser = (tokenToSet) => {
  //   if (tokenToSet) {
  //     // créer un cookie
  //     Cookie.set("userToken", tokenToSet);
  //     setToken(tokenToSet);
  //   } else {
  //     // supprimer le cookie
  //     Cookie.remove("userToken");
  //     // repasser le state token à null
  //     setToken(null);
  //   }
  // };
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/offer/:id" element={<Offer />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
