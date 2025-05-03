const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { spawn } = require('child_process');

app.set('view engine', 'ejs')

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    console.log('Here')
    res.render('index')
})

app.post('/roll-dice', (req,res) =>
{
    const sides = req.body.sides || '20';

    const python = spawn('python', ['dice_script.py', sides]);

    let result = '';
    python.stdout.on('data', (data) => {
        result += data.toString();
    });

    python.on('close', (code) => {
        res.json({ result: result.trim() });
    });

    python.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });


