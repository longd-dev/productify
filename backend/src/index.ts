import express from "express";
import cors from "cors";
import { ENV } from "./config/env";
import { clerkMiddleware } from "@clerk/express";

const app = express();
app.use(
  cors({
    origin: ENV.FRONTEND_URL,
  })
);
app.use(clerkMiddleware()); // auth obj will be attached to the req
app.use(express.json()); // parses JSON request bodies
app.use(express.urlencoded({ extended: true })); // prases form data (like html forms)

app.get("/", (req, res) => {
  res.json({ success: true });
});

app.listen(ENV.PORT, () =>
  console.log("Server is running on PORT: ", ENV.PORT)
);
