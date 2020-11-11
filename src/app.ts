import express from 'express';
import { DB_HOST, DB_NAME, PORT } from './config';
import mongoose from 'mongoose';

const app = express();
mongoose.connect(`${DB_HOST}/${DB_NAME}`, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
	.then(() => {
		console.log('Connected to database');
	}).catch(e => {
		console.log(e);
		process.kill(process.pid, 'SIGTERM');
	});


const server = app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));

