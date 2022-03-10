const express = require('express');

const app = express();

const PORT = 3002;

app.use(express.static('dist'));
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('hi');
// });

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
