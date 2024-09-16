import React from 'react';
import { LoginForm } from './Login';
import ChatBotT from './ChatBot';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import HomePage from './HomePage';

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <ChatBotT /> },
    { path: "/login", element: <LoginForm /> },
    {path:"/home", element:<HomePage/>}
  ]);

  return routes;
}
function App() {
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Router>
          <AppRoutes />
    </Router>
    
    </div>
  );
}

export default App;
