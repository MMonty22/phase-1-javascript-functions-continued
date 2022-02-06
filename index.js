// code your solution here
function saturdayFun(activity) {
    if(activity) {
        return `This Saturday, I want to ${activity}!`
    } else return "This Saturday, I want to roller-skate!"
}
saturdayFun('bathe my dog');

function mondayWork(task) {
    if(task) {
        return `This Monday, I will ${task}.`
    } else return 'This Monday, I will go to the office.'
}

mondayWork('work from home');

function wrapAdjective (adj = "*") {
    return function (adj2 = "special") {
       console.log("adj", adj)
       console.log("adj2", adj2)
        return `You are ${adj}${adj2}${adj}!`
    }
}
wrapAdjective("%")("a dedicated programmer");
