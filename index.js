// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string = "*"){
    return function(parameter1 = "special"){
        return `You are ${string}${parameter1}${string}!`
    }
}