
function findLarger() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultDiv = document.getElementById('result');
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = 'Please enter valid numbers.';
        return;
    }
    if (num1 > num2) {
        resultDiv.textContent = `The larger number is: ${num1}`;
    } else if (num2 > num1) {
        resultDiv.textContent = `The larger number is: ${num2}`;
    } else {
        resultDiv.textContent = `Both numbers are equal.`;
    }
}
