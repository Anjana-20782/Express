import app from "./app.js";
import connectDB from "./config/db.js";

await connectDB();

app.listen(5050, () => {
  console.log("Server running on http://localhost:5050");
});
