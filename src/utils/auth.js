import { SignJWT, jwtVerify } from 'jose';

// Retrieve the secret key from environment variables
const SECRET_KEY = process.env.JWT_SECRET_KEY;

// Function to generate JWT token
export async function generateToken(user) {
  const jwt = new SignJWT({ userId: user.id })
    .setExpirationTime('1h')
    .sign(new TextEncoder().encode(SECRET_KEY));
  return jwt;
}

// Function to verify JWT token
export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(SECRET_KEY));
    return payload;
  } catch (error) {
    return null;
  }
}
