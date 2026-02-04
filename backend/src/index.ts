import express from 'express';
import dotenv from 'dotenv';
import  UserRoute from "./routes/userRoute"
import  profileRoute  from "./routes/profileRoute"
import  SkillsRoute  from "./routes/skillsRoute"
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use('/api/user', UserRoute )
app.use('/api/profile', profileRoute)
app.use('/api/skills', SkillsRoute)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 





