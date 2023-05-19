import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import * as React from 'react'
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'
import NavBar from './components/NavBar'
import '@fontsource/manrope/400.css'
import '@fontsource/open-sans/700.css'

const { Button, Menu } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
    Menu
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Manrope', sans-serif`,
  },
})

const App = () => {

  return (
    <ChakraBaseProvider theme={theme}>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </ChakraBaseProvider>
  )
}

export default App