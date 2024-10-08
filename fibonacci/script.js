function calculo() {
    const num = parseInt(document.getElementById('num').value);
    let result = '';

    if (num < 0) {
        result = 'Por favor, digite um número não negativo.';
    } else {
        result = fibonacci(num);
    }

    document.getElementById('result').innerText = result;
}

function fibonacci(n) {
    let a = 0, b = 1, fib = [];

    for (let i = 0; i < n; i++) {
        fib.push(a);
        [a, b] = [b, a + b]; // Troca os valores
    }

    return fib.join(', ');
}
