import 'dotenv/config';
import app from './src/app';
import cors from 'cors';

const PORT = process.env.PORT || 8000;

// const allowedOrigins = ['http://localhost:3000']; // Add your frontend URL here
// app.use(cors({
//     origin: allowedOrigins
// }));

app.use(cors());


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
