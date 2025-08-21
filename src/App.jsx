import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import WishListPage from "./pages/WishListPage";

function App() {
  return (
    <>
      <Navbar />
      <WishListPage />
    </>
  );
}

export default App;
