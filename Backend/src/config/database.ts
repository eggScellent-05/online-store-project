import { DataSource } from "typeorm";
import config from "./config";
import { Category } from "../models/Category";
import { Item } from "../models/Item";
import { Offer } from "../models/Offer";
import { User } from "../models/User";
import { Cart } from "../models/Cart";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: config.db.host,
    port: config.db.port,
    username: config.db.username,
    password: config.db.password,
    database: config.db.database,
    synchronize: config.nodeEnv === 'development',
    logging: config.nodeEnv === 'development',
    entities: [Category, Item, Offer, User, Cart]
})

export const initializeDatabase = async (): Promise<void> => {
    try {
        await AppDataSource.initialize();
        console.log("Database connected successfully");
    } catch (err) {
        console.log("ERROR in connection");
        process.exit(1);
    }
}