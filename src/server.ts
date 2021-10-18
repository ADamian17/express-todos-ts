/* == External Modules == */
import express from 'express';

/* == Internal Modules == */
import { todos } from './routes';

/* == PORT == */
const PORT = 3004;

/* App instance */
const app = express();

/* == middleware == */
app.use(express.json())

app.use('/todos', todos);

/* server binding */
app.listen(PORT, () => console.log(`listing at port ${PORT}`));
