document.querySelector('button').addEventListener('click', apiRequest);


async function apiRequest(){
    const playerName = document.querySelector('input').value
    try{
        const response = await fetch(`https://mets-baseball-team-api.herokuapp.com/api/${playerName}`)
        const data = await response.json()
        console.log(data)
        document.querySelector('.right-col').style.visibility = "visible"
        document.getElementById("playerName").innerText = `${data['firstName']} ${data['lastName']}`
        document.getElementById("playerImage").src = data['image']

        document.getElementById("jerseyNumber").innerText = data['jerseyNumber']
        document.getElementById("position").innerText = data['position']
        document.getElementById("bats").innerText = data['bats']
        document.getElementById("throws").innerText = data['throws']
        document.getElementById("age").innerText = data['age']
        document.getElementById("nickname").innerText = data['nickname']
    }catch(error){
        console.log(error)
    }
}