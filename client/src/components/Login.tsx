import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const [formError, setFormError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setFormError('');
  };

  const setTokenToLocalStorage = (token: string) => {
    window.localStorage.setItem('token', token);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/auth/login/', formData);
      setTokenToLocalStorage(data.token);
      navigate('/dashboard');
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setFormError(err.response?.data.message || 'An error occurred');
      }
    }
  };

  return (
    <>
      <Flex minHeight='100vh' width='full' mt='20px' alignItems='flex-start' justifyContent='center'>
        <Box background='white' p={8} maxWidth='500px' borderWidth={1} borderRadius={8} boxShadow='2xl'>
          <>
            <Box textAlign='center'>
              <Heading>Login</Heading>
            </Box>
            <Box my={4} textAlign='left'>
              <form onSubmit={handleSubmit}>
                {/* Email */}
                <FormControl isRequired>
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <Input onChange={handleChange} type='email' name='email' placeholder='Email' defaultValue={formData.email} />
                </FormControl>
                {/* Password */}
                <FormControl isRequired mt={6}>
                  <FormLabel htmlFor='password'>Password</FormLabel>
                  <Input onChange={handleChange} type='password' name='password' placeholder='Password' defaultValue={formData.password} />
                </FormControl>
                {/* Error + Button */}
                {formError && <Alert status='error' mt={4}>{formError}</Alert>}
                <Button background='black' color='white' type='submit' width='full' mt={4}>Login</Button>
              </form>
            </Box>
          </>
        </Box>
      </Flex>
    </>
  );
};

export default Login;
