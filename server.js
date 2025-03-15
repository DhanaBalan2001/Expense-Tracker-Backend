import express from 'express';
import dotenv from 'dotenv';
import pkg from 'mongoose';
const { connect, connection: _connection } = pkg;
import cors from 'cors';
import expenseRoutes from './routes/expense.js';
import authRoutes from './routes/auth.js';
import dashboardRoutes from './routes/dashboard.js';
import reportRoutes from './routes/report.js';
import goalRoutes from './routes/goal.js';
import recurringRoutes from './routes/recurring.js';
import sharedExpenseRoutes from './routes/sharedexpense.js';
import { EventEmitter } from 'events';
import { errorHandler } from './middleware/error.js';
import budgetRoutes from './routes/budget.js';
import profileRoutes from './routes/profile.js';
import settingsRoutes from './routes/settings.js';
import apiDocsRoutes from './routes/docs.js';


process.setMaxListeners(15);
EventEmitter.defaultMaxListeners = 15;

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
connect(process.env.MONGODB)
.then(() => console.log('MongoDB connection established successfully'))
.catch(err => console.log('MongoDB connection error:', err));

const connection = _connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// Serve API documentation at root URL
app.get('/', (req, res) => {
    res.redirect('/api/docs');
});

// Routes
app.use('/api/expenses', expenseRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/goals', goalRoutes);
app.use('/api/recurring', recurringRoutes);
app.use('/api/shared', sharedExpenseRoutes);
app.use('/api/budgets', budgetRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/docs', apiDocsRoutes);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    console.log(`Documentation available at http://localhost:${port}/api/docs`);
});