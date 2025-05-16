const screen = document.getElementById('screen');
let currentInput = '';
let lastAnswer = '';

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;

    if (value === 'C') {
      currentInput = '';
      screen.textContent = '0';
    } else if (value === '=') {
      try {
        const sanitized = currentInput
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/π/g, 'Math.PI')
          .replace(/√/g, 'Math.sqrt')
          .replace(/log/g, 'Math.log10')
          .replace(/ln/g, 'Math.log')
          .replace(/sin/g, 'Math.sin')
          .replace(/cos/g, 'Math.cos')
          .replace(/tan/g, 'Math.tan')
          .replace(/e\^x/g, 'Math.exp')
          .replace(/x²/g, '**2')
          .replace(/mod/g, '%');

        const result = eval(sanitized);
        screen.textContent = result;
        lastAnswer = result;
        currentInput = result.toString();
      } catch (e) {
        screen.textContent = 'Erreur';
        currentInput = '';
      }
    } else {
      currentInput += value;
      screen.textContent = currentInput;
    }
  });
});
