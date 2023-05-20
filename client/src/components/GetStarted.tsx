import { Button, Box, ButtonGroup, Flex, Stack, Text, Spacer, HStack } from "@chakra-ui/react"
const GetStarted = () => {
    return (
        <Flex h={500} bgGradient='linear(to-l, #7928CA, #00ACEE)' justifyContent='flex-start' alignItems='center' direction='column'>
            <Text pt={5} fontSize='3xl' textColor='#fff'>Add your expenses now</Text>
            <Text pb={5} fontSize='5xl' as='b' textColor='#fff'>Quick and simple process</Text>
            <HStack p={10} spacing='50px'>
                <Box bgGradient='linear(to-l, #f2f2f2, #fff)' boxShadow='dark-lg' borderWidth='0px' borderRadius='lg' w={300} h={200} backgroundColor="white">
                    <Text p={5} fontSize='3xl' as='b' textColor='#000000'>Reviews</Text>
                </Box>
                <Box bgGradient='linear(to-l, #f2f2f2, #fff)' boxShadow='dark-lg' borderWidth='0px' borderRadius='lg' w={300} h={200} backgroundColor="white">
                    <Text p={5} fontSize='3xl' as='b' textColor='#000000'>Reviews</Text>
                </Box>
                <Box bgGradient='linear(to-l, #f2f2f2, #fff)' boxShadow='dark-lg' borderWidth='0px' borderRadius='lg' w={300} h={200} backgroundColor="white">
                    <Text p={5} fontSize='3xl' as='b' textColor='#000000'>Reviews</Text>
                </Box>
            </HStack>


        </Flex>
    )

}

export default GetStarted