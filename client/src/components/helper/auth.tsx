import React from 'react';
import { Buffer } from 'buffer';

// This function is simply to extract the token from the localStorage and return it
export const getTokenFromLocalStorage = (): string | null => {
  return window.localStorage.getItem('token');
};

// This function is going to use the extracted token, and decode it to find the payload
// The payload is the section of the JWT that contains the subject and the expiry date
export const getPayload = (): any => {
  const token = getTokenFromLocalStorage(); // uses getTokenFromLocalStorage to get token
  if (!token) return null;
  const splitToken = token.split('.');
  if (splitToken.length !== 3) return null;
  return JSON.parse(Buffer.from(splitToken[1], 'base64').toString());
};

export const userIsAuthenticated = (): boolean => {
  const payload = getPayload();
  if (!payload) return false;
  const currentTime = Math.round(Date.now() / 1000);
  return currentTime < payload.exp;
};

// Example usage within a React component
const MyComponent: React.FC = () => {
  const isAuthenticated = userIsAuthenticated();

  return <div>{isAuthenticated ? 'User is authenticated' : 'User is not authenticated'}</div>;
};

export default MyComponent;
