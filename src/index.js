import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/authContext';
import { ChatContextProvider } from './context/chatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
<ChatContextProvider>
<App />
</ChatContextProvider>
    </AuthContextProvider>
  
);

