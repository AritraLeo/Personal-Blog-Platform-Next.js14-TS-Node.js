import 'dotenv/config';
import app from './src/app';
import cors from 'cors';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 8000;

// const allowedOrigins = ['http://localhost:3000']; // Add your frontend URL here
// app.use(cors({
//     origin: allowedOrigins
// }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
