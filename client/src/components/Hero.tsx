import { Button, Box, ButtonGroup, Flex, Stack, Text } from "@chakra-ui/react"
const Hero = () => {

    return (
        <Flex h='600px' justifyContent='center' alignItems='center' >
            <Box w='1000px' borderWidth='2px' borderRadius='lg' bgGradient='linear(to-l, #7928CA, #00ACEE)'>
                <Stack spacing={2} justifyContent='center' alignItems='center' h='500'>
                    <Text fontSize='6xl' as='b' textColor='#fff'>An effective way</Text>
                    <Text fontSize='6xl'>to view <Text as='b' textColor='#fff'>your expenses</Text></Text>
                    <ButtonGroup p='5'>
                        <Button size='md' fontSize='18px' height='45px' width='200px' variant='outline' colorScheme='whiteAlpha' textColor='white'>Get Started</Button>
                        <Button size='md' fontSize='18px' height='45px' width='200px' backgroundColor='white'>Learn More</Button>
                    </ButtonGroup>
                </Stack>
            </Box>
        </Flex>
    )
}

export default Hero