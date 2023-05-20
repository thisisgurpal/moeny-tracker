import { Button, Box, ButtonGroup, Flex, Stack, Text, Spacer, VStack } from "@chakra-ui/react"
const WhyChooseUs = () => {
    return (
        <Flex h={700} justifyContent='center' alignItems='center' direction='column'>
            <Flex direction='row' justifyContent='center' alignItems='center' h={500} w='1000px' borderWidth='0px' borderRadius='lg' boxShadow='dark-lg'>
            <Flex h='100%' direction='column' p={20} justifyContent='flex-start'>
            <Text pb={0} fontSize='3xl' textColor='#000000'>Why choose us?</Text>
            <Text pb={0} fontSize='4xl' as='b' textColor='#000000'>Best expense management site you will ever find</Text>
            </Flex>
            <VStack pr={20} spacing={5}>
                <Flex justifyContent='center' alignItems='center' boxShadow='2xl' borderWidth='0px' borderRadius='lg' w={275} h={100} backgroundColor="white">
                    <Text p={5} fontSize='3xl' as='b' textColor='#000000'>Security</Text>
                </Flex>
                <Flex justifyContent='center' alignItems='center' boxShadow='2xl' borderWidth='0px' borderRadius='lg' w={275} h={100} backgroundColor="white">
                    <Text p={5} fontSize='3xl' as='b' textColor='#000000'>#1 Best App</Text>
                </Flex>
                <Flex justifyContent='center' alignItems='center' boxShadow='2xl' borderWidth='0px' borderRadius='lg' w={275} h={100} backgroundColor="white">
                    <Text p={5} fontSize='3xl' as='b' textColor='#000000'>1 million+ users</Text>
                </Flex>
            </VStack>
            </Flex>
            


        </Flex>
    )

}

export default WhyChooseUs