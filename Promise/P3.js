console.log("At the start ")

const eatingpizza = ()=>{
    setTimeout(()=>{
        console.log("Eating pizza ")
    },2000)
}

const meetingWithFriends = ()=>{
    setTimeout(()=>{
        console.log("Meeting Done")
    },5000)
}

const servicingCar = ()=>{
    setTimeout(()=>{
        console.log("Servicing Done ")
    },10000)
}

eatingpizza();
meetingWithFriends();
servicingCar();

console.log("At the end")