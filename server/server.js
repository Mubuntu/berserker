const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000;

const app = express();
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));


// Make sure your index.html file is served, in case the user requests a resource currently not in the public folder.
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });


app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });