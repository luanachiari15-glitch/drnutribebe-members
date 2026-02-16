
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './authContext';
import { LanguageProvider } from './LanguageContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ModuleDetail from './pages/ModuleDetail';
import Settings from './pages/Settings';
import Planner from './pages/Planner';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div className="min-h-screen flex items-center justify-center bg-nude"><div className="w-8 h-8 border-2 border-rosaCha border-t-transparent rounded-full animate-spin"></div></div>;
  return user ? <>{children}</> : <Navigate to="/login" />;
};

const AppContent: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/planejador" element={<PrivateRoute><Planner /></PrivateRoute>} />
          <Route path="/modulo/:id" element={<PrivateRoute><ModuleDetail /></PrivateRoute>} />
          <Route path="/configuracoes" element={<PrivateRoute><Settings /></PrivateRoute>} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </LanguageProvider>
  );
};

export default App;
