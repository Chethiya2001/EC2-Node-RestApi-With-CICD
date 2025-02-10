import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import cors from "cors";
import router from "./routes/userRoutes.js";
import middleware from "./middlewares/errorhandler.js";
dotenv.config();

const errorHandler = middleware;
const userRoutes = router;

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

//connect to the database
connectDB();

//routes
app.use("/api/users", userRoutes);

app.use("/api/products", (req, res) => {
  return res.status(200).json({
    message: "This is new feature change, a new route for products samin",
  });
});

//error handler
app.use(errorHandler);

//listen to the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
