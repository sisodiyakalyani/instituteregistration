const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.use(express.json());

const instituteTypeRoutes = require('./routes/instituteTypeRoutes');
const boardRoutes = require('./routes/boardRoutes');
const mediumRoutes = require('./routes/mediumRoutes');
const classCategoryRoutes = require('./routes/classCategoryRoutes');
const standardRoutes = require('./routes/standardRoutes');
const subjectRoutes = require('./routes/subjectRoutes');
const registrationRoutes = require('./routes/registrationRoutes');
const collegeRoutes = require('./routes/collegeRegistrationRoutes');
const examCenterRoutes = require('./routes/examCenterRoute');

app.use('/api/colleges', collegeRoutes);
app.use('/api/examCenters', examCenterRoutes);

app.use('/api/school', registrationRoutes);
app.use('/api/instituteTypes', instituteTypeRoutes);
app.use('/api/boards', boardRoutes);
app.use('/api/mediums', mediumRoutes);
app.use('/api/classCategories', classCategoryRoutes);
app.use('/api/standards', standardRoutes);
app.use('/api/subjects', subjectRoutes);

mongoose.connect('mongodb+srv://ahinsaaggregator:J9mhds70lLGjjxPP@bhola.5yycbjo.mongodb.net/institute', { 
  
})
.then(() => console.log('MongoDB connected successfully!'))
.catch(err => console.error('MongoDB connection error:', err.message));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
