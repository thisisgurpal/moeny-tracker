import { Box, Button, Center, Flex, Spacer, Heading, ButtonGroup, IconButton } from '@chakra-ui/react'
import NextLink from 'next/link'
import { userIsAuthenticated, getTokenFromLocalStorage } from './helper/auth'
import axios from 'axios';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
    const handleLogout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        // Remove token
        window.localStorage.removeItem('token');
        // Redirect to the home page
        navigate('/');
    };

    return (
        <Flex minWidth='100%' justifyContent='center' h='100px' alignItems='center' gap='2' p='10'>
            <Flex w={[2000, 1750, 1200]} justifyContent='center' h='100px' alignItems='center' gap='2' p='10'>
                <Box p='2'>
                    <Heading size='md'><Link to='/'>MoneyTracker</Link></Heading>
                </Box>
                <Spacer />
                <Box display={{ base: "none", lg: "block" }}>
                    <Menu>
                        <MenuButton textColor='black' colorScheme='white' as={Button} rightIcon={<ChevronDownIcon />}>
                            About Us
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                    <Button textColor='black' colorScheme='white'><Link to='/dashboard'>Dashboard</Link></Button>
                </Box>
                <Spacer />
                <ButtonGroup gap='2' display={{ base: "none", lg: "block" }}>
                    {userIsAuthenticated() ?
                        <>
                            <Link to='/' onClick={handleLogout}>
                                <Button rounded={100} bgGradient='linear(to-l, #7928CA, #00ACEE)' textColor='white'>Log Out</Button>
                            </Link>
                        </>
                        :
                        <>
                            <Link to='/register'>
                                <Button rounded={100} bgGradient='linear(to-l, #7928CA, #00ACEE)' textColor='white'>Sign Up</Button>
                            </Link>
                            <Link to='/login'>
                                <Button rounded={100} variant='outline' colorScheme='twitter'>Log In</Button>
                            </Link>
                        </>
                    }

                </ButtonGroup>
                <Box display={{ base: "block", lg: "none" }}>
                    <Menu >
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem>
                                Sign Up
                            </MenuItem>
                            <MenuItem>
                                Log In
                            </MenuItem>
                            <MenuItem>
                                About Us
                            </MenuItem>
                            <MenuItem>
                                Dashboard
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
        </Flex>
    )

}

export default NavBar