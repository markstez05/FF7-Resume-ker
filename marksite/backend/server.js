import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import UserRouter from './Users/UserRoutes';
import WorkRouter from './WorkExp/WorkRoutes';
import SkillRouter  from './Skills/SkillRoutes';


const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());
app.use(cors());
app.use('/api/users', UserRouter);
app.use('/api/work', WorkRouter);
app.use('/api/skill', SkillRouter);

mongoose.connect('mongodb://markstez05:cheese12@ds147003.mlab.com:47003/ff7')
	.then(() => console.log('connected to MLAB!'))
	.catch(err => console.log('error connecting to mongodb'))

app.listen(port, () => console.log( `\n App listening on port ${port}\n`));