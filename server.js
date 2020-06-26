const express = require('express');
const app = express();

const connectDB = require('./config/db');

const projectsRoute = require('./routes/projects');
const messageRoute = require('./routes/message');

//database connection
connectDB();

// app Routes
app.use('/api/projects', projectsRoute);
app.use('/api/message', messageRoute);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('the server work at port ' + PORT));
