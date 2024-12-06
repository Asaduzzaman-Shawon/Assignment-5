function show(id) {
    document.getElementById('history-section').classList.add('hidden')
    document.getElementById('donate-section').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}

function getElementByText(id) {
    const Balance = document.getElementById(id).innerText;
    const BalanceNumber = parseFloat(Balance);
    return BalanceNumber;
}

function getElementByInput(id) {
    const inputBalance = document.getElementById(id).value;
    const inputBalanceNumber = parseFloat(inputBalance);
    return inputBalanceNumber;
}