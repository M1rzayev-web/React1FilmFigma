import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Login from "./components/Login-Sign/Login";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [login,setLogin]=useState(true)

if (loading) {
  return <Loading />;
}
  if (login) {
    return (
      <login/>
    )
  }


  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
    
  );
}

export default App;
