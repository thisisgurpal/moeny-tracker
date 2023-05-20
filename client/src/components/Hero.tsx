import { Button, Box, ButtonGroup, Flex, Stack, Text } from "@chakra-ui/react"
const Hero = () => {

    return (
        <Flex h={600} justifyContent='center' alignItems='center' >
            <Box w='1000px' borderWidth='0px' borderRadius='lg' bgGradient='linear(to-l, #7928CA, #00ACEE)' boxShadow='dark-lg'>
                <Stack spacing={2} justifyContent='center' alignItems='center' h={500}>
                    <Text fontSize='6xl' as='b' textColor='#fff'>Easy way</Text>
                    <Text fontSize='6xl'>to view <Text as='b' textColor='#fff'>your expenses</Text></Text>
                    <ButtonGroup p='5'>
                        <Button size='md' rounded={100} fontSize='18px' height='45px' width='200px' variant='outline' colorScheme='whiteAlpha' textColor='white'>Get Started</Button>
                        <Button size='md' rounded={100} fontSize='18px' height='45px' width='200px' backgroundColor='white'>Learn More</Button>
                    </ButtonGroup>
                </Stack>
            </Box>
        </Flex>
    )
}

export default Hero