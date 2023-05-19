import { Button, Box, ButtonGroup, Flex, Stack, Text } from "@chakra-ui/react"
import Hero from "./Hero"

const Home = () => {

  return (
    <Box w='100%' h='max-content'>
<Stack justifyContent='center' alignItems='center'>
      <Hero/>
    </Stack>
    </Box>
    
    
  )
}

export default Home