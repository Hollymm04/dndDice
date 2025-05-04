document.querySelectorAll('.roll-dice').forEach(button => {
    button.addEventListener('click', function() {
      const sides = this.getAttribute('data-sides');
      const resultDisplay = document.getElementById('result');
      this.classList.add('rolling');
      fetch('/roll-dice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sides })
      })
      .then(response => response.json())
      .then(data => {
        resultDisplay.innerText = `you rolled a ${data.result} on dice D${sides}!`;
        setTimeout(() => {
          this.classList.remove('rolling');
        }, 500);
      })
      .catch(err => {
        resultDisplay.innerText = 'Error rolling dice!';
        this.classList.remove('rolling');
      });
    });
  });

  document.getElementById('clear-button').addEventListener('click', function() { /* Clear button event listener */
    document.getElementById('result').innerText = ''; // Clear the result text
  });