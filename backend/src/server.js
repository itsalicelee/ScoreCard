import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv-defaults';
import db from './db';
import routes from './routes';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', routes);

if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '../frontend', 'build')));
    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
    });
}
db.connect();
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
