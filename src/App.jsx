import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Platform from './app/pages/LIVRARIA/Platform'
import Gastao from './app/pages/LIVRARIA/Gastao/Gastao'
import Dadoas from './app/pages/LIVRARIA/Dadoas/Dadoas'
import Validaco from './app/pages/LIVRARIA/Validaco/Validaco'
import Validar from './app/pages/LIVRARIA/Validar/Validar'
import VoucherDetails from './app/pages/LIVRARIA/Validaco/VoucherDetails'
import Utilizacado from './app/pages/LIVRARIA/Utilizacado/Utilizacado'
import Registrar from './app/pages/LIVRARIA/Registrar/Registrar'
import Pogamento from './app/pages/LIVRARIA/Pogamento/Pogamento'
import Painel from './app/pages/DGLAB/Painel'
import Validacao from './app/pages/DGLAB/Validacao/Validacao'
import Dadoa from './app/pages/DGLAB/Dadoas/Dadoa'
import Mensagens from './app/pages/DGLAB/Mensagens/Mensagens'
import RelatorioVoucher from './app/pages/DGLAB/RelatorioVoucher'
import RelatriaoLaviria from './app/pages/DGLAB/RelatriaoLaviria'
import UsarioPainel from './app/pages/USUARIO/Painel'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Platform />} />
      <Route path='/gastao' element={<Gastao />} />
      <Route path='/dadoas' element={<Dadoas />} />
      <Route path='/validaco' element={<Validaco />} />
      <Route path='/validar' element={<Validar />} />
      <Route path='/validaco-voucher' element={<VoucherDetails />} />
      <Route path='/utilizacado-voucher' element={<Utilizacado />} />
      <Route path='/registrar-voucher' element={<Registrar />} />
      <Route path='/pogamento-voucher' element={<Pogamento />} />
      <Route path='/dg-painel' element={<Painel />} />
      <Route path='/dg-valodacao' element={<Validacao />} />
      <Route path='/dg-dadoas' element={<Dadoa />} />
      <Route path='/dg-messagens' element={<Mensagens />} />
      <Route path='/dg-relatorioVoucher' element={<RelatorioVoucher />} />
      <Route path='/dg-relatorioLaviria' element={<RelatriaoLaviria />} />
      <Route path='/usario-painel' element={<UsarioPainel />} />
    </Routes>
  )
}
