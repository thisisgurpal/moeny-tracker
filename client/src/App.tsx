import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import * as React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme';
import NavBar from './components/NavBar';
import '@fontsource/manrope/400.css';
import '@fontsource/open-sans/700.css';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

const { Button, Menu } = chakraTheme.components;

const theme = extendTheme({
  components: {
    Button,
    Menu
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Manrope', sans-serif`,
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
