const server = require('./src/routes/index.js');
const db = require('./src/config/db');
const keys = require('./src/config/keys');

const Port = keys.PORT || 3000;

db()
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.log(`Database connection failed ${err}`);
  });

server.listen(Port, () => {
  console.log(`Server listening on port ${Port}`);
});
