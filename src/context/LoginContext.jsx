import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      setShowLogin(false);
      navigate('/admin/');
      return true;
    } else if (username === 'user' && password === 'user') {
      setIsLoggedIn(true);
      setShowLogin(false);
      navigate('/user/');
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowLogin(false);
    navigate('/', { replace: true });
  };

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setIsLoggedIn(false);
    }
  }, [location.pathname]);

  return (
    <LoginContext.Provider value={{ 
      showLogin, 
      setShowLogin, 
      isLoggedIn, 
      setIsLoggedIn, 
      handleLogin, 
      handleLogout 
    }}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLogin() {
  return useContext(LoginContext);
} 