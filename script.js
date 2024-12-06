document.getElementById('blog').addEventListener('click', function () {
    window.location.href = 'faq.html'
})


document.getElementById('donate-btn').addEventListener('click', function () {
    const a = show('donate-section')
    document.getElementById('donate-btn').style.backgroundColor = '#b4f461'
    document.getElementById('history-btn').style.backgroundColor = '#1111111a'
})

document.getElementById('history-btn').addEventListener('click', function () {
    const a = show('history-section')
    document.getElementById('history-btn').style.backgroundColor = '#b4f461'
    document.getElementById('donate-btn').style.backgroundColor = '#1111111a'
})

document.getElementById('donate-flood').addEventListener('click', function () {

    const donateBalance = getElementByInput('flood-ammount');
    const mainBalance = getElementByText('main-balance');
    if (donateBalance > mainBalance) {
        // alert("You do not have sufficienct balance")
        showModal4()

    }
    else if (donateBalance < 0) {
        // alert('Ammmount must be a positive number')
        showModal2();

    }
    else {
        if (isNaN(donateBalance)) {
            // alert("Enter Your Ammount in Number")
            showModal3();
        }
        else {
            const floodAccount = getElementByText('flood');
            const newCollect = floodAccount + donateBalance;
            document.getElementById('flood').innerText = newCollect;
            document.getElementById('main-balance').innerText = mainBalance - donateBalance;
            const dateAndTime = new Date()
            const historyAdd = document.createElement('div')
            historyAdd.innerHTML = `
            <div class="w-[80%] mx-auto mt-6 p-3 border-gray-700 border-[1px] rounded-lg">
                        <p class="font-bold text-xl mb-3">${donateBalance} Taka is Donated for Flood at Noakhali, Bangladesh</p>
                        <p>${dateAndTime}</p>
                    </div>
            `
            const addedLocation = document.getElementById('history-section');
            addedLocation.append(historyAdd)
            showModal()
        }
    }
})
document.getElementById('donate-feni').addEventListener('click', function () {

    const donateBalance = getElementByInput('feni-ammount');
    const mainBalance = getElementByText('main-balance');
    if (donateBalance > mainBalance) {
        // alert("You do not have sufficienct balance")
        showModal4()

    }
    else if (donateBalance < 0) {
        // alert('Ammmount must be a positive number')
        showModal2();

    }
    else {
        if (isNaN(donateBalance)) {
            // alert("Enter Your Ammount in Number")
            showModal3()
        }
        else {
            const feniAccount = getElementByText('feni');
            const newCollect = feniAccount + donateBalance;
            document.getElementById('feni').innerText = newCollect;
            document.getElementById('main-balance').innerText = mainBalance - donateBalance;
            const dateAndTime = new Date()
            const historyAdd = document.createElement('div')
            historyAdd.innerHTML = `
            <div class="w-[80%] mx-auto mt-6 p-3 border-gray-700 border-[1px] rounded-lg">
                        <p class="font-bold text-xl mb-3">${donateBalance} Taka is Donated for Relief in Feni,Bangladesh</p>
                        <p>${dateAndTime}</p>
                    </div>
            `
            const addedLocation = document.getElementById('history-section');
            addedLocation.append(historyAdd)
            showModal()
        }
    }
})
document.getElementById('donate-quota').addEventListener('click', function () {

    const donateBalance = getElementByInput('quota-ammount');
    const mainBalance = getElementByText('main-balance');
    if (donateBalance > mainBalance) {
        // alert("You do not have sufficienct balance")
        showModal4()

    }
    else if (donateBalance < 0) {
        // alert('Ammmount must be a positive number')
        showModal2();

    }
    else {
        if (isNaN(donateBalance)) {
            // alert("Enter Your Ammount in Number")
            showModal3()
        }
        else {
            const quotaAccount = getElementByText('quota');
            const newCollect = quotaAccount + donateBalance;
            document.getElementById('quota').innerText = newCollect;
            document.getElementById('main-balance').innerText = mainBalance - donateBalance;
            const dateAndTime = new Date()
            const historyAdd = document.createElement('div')
            historyAdd.innerHTML = `
            <div class="w-[80%] mx-auto mt-6 p-3 border-gray-700 border-[1px] rounded-lg">
                        <p class="font-bold text-xl mb-3">${donateBalance} Taka is Donated for  the Quota Movement in Bangladesh</p>
                        <p>${dateAndTime}</p>
                    </div>
            `
            const addedLocation = document.getElementById('history-section');
            addedLocation.append(historyAdd)
            showModal()
        }
    }
})

function showModal() {
    const modal = document.getElementById('my_modal_1');
    modal.showModal();
}

function showModal2() {
    const modal = document.getElementById('my_modal_12');
    modal.showModal();
}

function showModal3() {
    const modal = document.getElementById('my_modal_13')
    modal.showModal()
}
function showModal4() {
    const modal = document.getElementById('my_modal_14')
    modal.showModal()
}