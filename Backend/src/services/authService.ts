import { AppDataSource } from "../config/database";
import { User } from "../models/User";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { generateToken } from '../utils/jwt';

dotenv.config();

const userRepo = AppDataSource.getRepository(User);

export const registerUser = async (username: string, email: string, password: string) => {
    const existing = await userRepo.findOneBy({ email });
    if (existing) {
        throw new Error("Email already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = userRepo.create({ username, email, password: hashedPassword });

    const savedUser = await userRepo.save(user);
    const token = generateToken(savedUser.id, savedUser.role, savedUser.email);

    const { password: _, ...userWithoutPassword } = savedUser;
    return { user: userWithoutPassword, token };
};

export const loginUser = async (email: string, password: string) => {
    const user = await userRepo.findOneBy({ email });
    if (!user) throw new Error("Invalid credentials");

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error("Invalid credentials");

    const token = generateToken(user.id, user.role, user.email);
    const { password: _, ...userWithoutPassword } = user;

    return { user: userWithoutPassword, token };
};
