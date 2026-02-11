
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './authContext';
import { LanguageProvider } from './LanguageContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ModuleDetail from './pages/ModuleDetail';
import Settings from './pages/Settings';
import Planner from './pages/Planner';

const AppContent: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Todas as rotas agora são públicas e acessíveis diretamente */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/planejador" element={<Planner />} />
          <Route path="/modulo/:id" element={<ModuleDetail />} />
          <Route path="/configuracoes" element={<Settings />} />

          {/* Catch all redireciona para a home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </AuthProvider>
  );
};

export default App;
