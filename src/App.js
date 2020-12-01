import React from "react";
import Header from "./Components/Header/header";
import Body from "./Components/Body/body";
import Footer from "./Components/Footer/footer";
import 'bootswatch/dist/lux/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
