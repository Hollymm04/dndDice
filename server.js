const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    console.log('Here')
    res.render('index')
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
