import app from "./app";
import { initializeDatabase } from "./config/database";
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT || 3000;

initializeDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
})