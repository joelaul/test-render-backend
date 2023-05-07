const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.clear();
    console.log(`Server running on port ${port}`);
});