import express from 'express';
import dotenv from 'dotenv';
import  UserRoute from "./routes/userRoute"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api/user', UserRoute )



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 





