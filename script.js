document.getElementById('donate-btn').addEventListener('click', function(){
    const a = show('donate-section')
})

document.getElementById('history-btn').addEventListener('click', function(){
    const a = show('history-section')
})

document.getElementById('donate-flood').addEventListener('click', function(){
   const mainBalance =  getElementByText('main-balance');
   const donateBalance = getElementByInput('flood-ammount');
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
})


