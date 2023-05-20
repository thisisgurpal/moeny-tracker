import { Button, Box, ButtonGroup, Flex, Stack, Text } from "@chakra-ui/react"
import Hero from "./Hero"
import GetStarted from "./GetStarted"
import WhyChooseUs from "./WhyChooseUs"
import Reviews from "./Reviews"

const Home = () => {

  return (
    <Flex direction='column'>
      <Box w='100%' minHeight='100%' bgGradient='linear(to-l, #7928CA, #00ACEE)' justifyContent='center' alignItems='center'>
        <Hero />
      </Box>
      <GetStarted />
      <WhyChooseUs/>
      <Reviews/>
    </Flex>



  )
}

export default Home