import express from "express";
import { router as UserRouter } from "./src/routes/User";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/", UserRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
