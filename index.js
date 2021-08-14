// Your code here
function saturdayFun(s){
    if (!!s) {
        return "This Saturday, I want to "+s+"!"
    } else {
        return "This Saturday, I want to roller-skate!"
    }
}

function mondayWork(s) {
    if (!!s){
        return "This Monday, I will "+s+"."
    } else {
        return "This Monday, I will go to the office."
    }
}

function wrapAdjective(s = "*") {
    return function(s2) {
        return "You are "+s+s2+s+"!"
    }
}

const Calculator = {
    add: function(x, y){
        return x + y;
    },
    subtract: function(x,y){
        return x - y;
    },
    multiply: function(x,y){
        return x * y;
    },
    divide: function(x,y){
        return x / y;
    }
}

function actionApplyer(int, arr){
    if (!arr.length){
        return int;
    } else {
        return arr[2](arr[1](arr[0](int)));
    }

}