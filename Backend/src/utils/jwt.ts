// utils/jwt.ts
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const generateToken = (id: number, role: string, email: string) =>
    jwt.sign({ id, role, email }, process.env.JWT_SECRET!, { expiresIn: '1d' });
