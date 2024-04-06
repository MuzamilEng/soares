import React from "react";
import Authenticate from "./app/pages/LIVRARIA/Authenticate/Authenticate";
import { Route, Routes } from "react-router-dom";
import UsarioPainel from "./app/pages/USUARIO/Painel";
import Login from "./app/pages/USUARIO/Login/Login";

const Jovem = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Authenticate />} />
        <Route path="/usario-painel" element={<UsarioPainel />} />
        <Route path="/usario-login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Jovem;
