import app from "./app.js";
import connectDB from "./config/db.js";

connectDB();

const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
