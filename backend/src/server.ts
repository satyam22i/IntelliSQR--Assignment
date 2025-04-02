import express from "express";
import cors from "cors";
import dotenv from "dotenv";  
import authRoute from './routes/auth.routes';
import process from 'process'
dotenv.config();
const app = express();

app.use(express.json());


app.use(cors(
  {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }
));


app.use("/api/auth", authRoute);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});