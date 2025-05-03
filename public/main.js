document.querySelectorAll('.roll-dice').forEach(button => {
    button.addEventListener('click', function() {
        const sides = this.getAttribute('data-sides');
        fetch('/roll-dice', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sides })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = `you rolled a ${data.result} on dice D${sides}!`;
        })
        .catch(err => {
            document.getElementById('result').innerText = 'Error rolling dice!';
        });
    });
});
