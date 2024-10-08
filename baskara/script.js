function baskara() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    let xm = 0;
    let xn = 0;
    let d = 0;
    let r = 0;

    d = (b * b) - (4 * a * c);

    if (d < 0) {
        const realPart = (-b / (2 * a)).toFixed(2);
        const imaginaryPart = (Math.sqrt(-d) / (2 * a)).toFixed(2);

        document.getElementById('resultado').textContent = 
            `As raízes imaginárias são: x1 = ${realPart} + ${imaginaryPart}i e x2 = ${realPart} - ${imaginaryPart}i!`; 

    } else {
        r = Math.sqrt(d);
        xm = ((-b + r) / (2 * a)).toFixed(2);
        xn = ((-b - r) / (2 * a)).toFixed(2);
        
        document.getElementById('resultado').textContent = 
            `As raízes são: x1 = ${xm} e x2 = ${xn}!`;
    }
}
