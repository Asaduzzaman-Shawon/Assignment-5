function show(id){
    document.getElementById('history-section').classList.add('hidden')
    document.getElementById('donate-section').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}