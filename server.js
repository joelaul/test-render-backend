const express = require('express');
const app = express();
const cors = require('cors');

const port = 8000 || process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send({ message: "Hello World!" });  
});

app.listen(port, () => {
    console.clear();
    console.log(`Server running on port ${port}`);
});