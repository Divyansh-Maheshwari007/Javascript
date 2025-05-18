console.log("At the Start")

const task1 = ()=>{
    setTimeout(() => {
        console.log("Task1 is excuited ")
    }, 2000);
}

const task2 = ()=>{
    setTimeout(()=>{
        console.log("Task 2 is excuited ")
    },2000)
}

task1();
task2();

console.log("At the End ")