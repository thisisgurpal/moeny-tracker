import { Button, Box, ButtonGroup, Flex, Stack, Text, Spacer, HStack } from "@chakra-ui/react"
const Reviews = () => {
    return (
        <Flex h={500} justifyContent='center' alignItems='center' direction='column'>
            <Flex direction='column' justifyContent='center' alignItems='center' h={500} w='100%' borderWidth='0px' borderRadius='lg' bgGradient='linear(to-l, #7928CA, #00ACEE)'>
            <Text pb={0} fontSize='5xl' as='b' textColor='#fff'>Our Reviews</Text>
            <HStack p={10} spacing='20px'>
                <Box boxShadow='2xl' borderWidth='0px' borderRadius='lg' w={700} h={250} backgroundColor="white">
                    <Text p={5} fontSize='3xl' as='b' textColor='#000000'>Security</Text>
                </Box>
            </HStack>
            </Flex>
            


        </Flex>
    )

}

export default Reviews