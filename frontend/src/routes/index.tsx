import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Abastecimentos from '../pages/Abastecimentos';
import Impressoras from '../pages/Impressoras';
import Setores from '../pages/Setors';
import CartuchosToners from '../pages/CartuchosToners';
import StatusCartuchosToners from '../pages/StatusCartuchosToners';

const RouterControl = () => {
    return <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/abastecimentos" element={<Abastecimentos />} />
    <Route path="/impressoras" element={<Impressoras />} />
    <Route path="/setores" element={<Setores />} />
    <Route path="/cartuchos-toners" element={<CartuchosToners />} />
    <Route path="/status-cartuchos-toners" element={<StatusCartuchosToners />} />
  </Routes>
}

export default RouterControl