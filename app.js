//changing elements on page
const timeDiv = document.querySelector(".counter");
const watchDiv = document.getElementById("stopwatch");
const varButt = document.querySelector(".varButt");
const bossSel = document.querySelector(".boss");
const ol = document.querySelector(".drops");
const errorText = document.querySelector(".error");

//setup vars for timer
let seconds = 0,
    minutes = 0,
    secs,
    mins,
    gethours,
    clearTime,
    counting = false;

//setup vars for loot
let currBoss,
    currLoot = [],
    dropChance = [],
    bone = false,
    errorDisplay = false;
    
//setup selection options
enemies.forEach((enemy,i) => {
                let option = document.createElement('option')
                option.textContent = `${enemy.name}`;
                option.value=i;
                bossSel.appendChild(option);
});

const startWatch = () => { 
    if (bossSel.value === 'empty') {
        if (varButt.textContent === 'Reset') {
            errorDisplay = false;
        }
        Input.error();
        resetTime();
    } else {
    if (errorDisplay) {
        errorText.innerHTML = '';
        errorDisplay = false;
    }
    if (seconds % 15 === 0) {
        Input.addLootToArr();
        Input.appendLoot();
        currLoot = [];
    }
    if ( seconds === 60 ) { 
        seconds = 0; minutes = minutes + 1; 
    } 
    mins = ( minutes < 10 ) ? ( '0' + minutes + ': ' ) : ( minutes + ': ' );
    secs = ( seconds < 10 ) ? ( '0' + seconds ) : ( seconds ); 
    timeDiv.innerHTML = 'Time: ' + mins + secs; 
    seconds++; 
    clearTime = setTimeout("startWatch()", 10 ); 
    counting = true;
} 
}

const stopTime = () => { 
    if (counting) {
    clearTimeout(clearTime);
    counting = false;
    }
}

const resetTime = () => {
    seconds = 0; 
    minutes = 0; 
    secs = '0' + seconds; 
    mins = '0' + minutes + ': '; 
    timeDiv.innerHTML = 'Time: ' + mins + secs; 
}

const Input = {
    appendLoot: () => {
        for (let i=0; i<currLoot.length; bone ? i+=2 : i++) {
            let li = document.createElement('li');
            (bone) 
            ? li.innerHTML = `${currBoss.name} dropped ${currLoot[i]} and ${currLoot[i+1]}`
            : li.innerHTML = `${currBoss.name} dropped ${currLoot[j]}`;
            ol.appendChild(li);
            }
        },
    checkInput: function() {
        if (varButt.textContent === 'Reset') {
            resetTime();
            Input.resetAll();
            varButt.textContent = 'Stop';
        }
        if (counting) {
            if (bossSel.value === "empty") {
                this.error();
            }
            ol.innerHTML = '';
            resetTime();
            counting = false;
        }
        if (bossSel.value === "empty") {
            this.error();
        }
        if (bossSel.value !== "empty") {
            if (counting) {
                resetTime();
                this.resetAll();
            }
            currBoss = enemies[parseInt(bossSel.value)];
            dropChance = [];
            this.setupDropChance();
        };
    },
    addLootToArr: () => {
        const isBigEnough = (value) => {
          return function(element, index, array) {
            return (element >= value);
          }
        }
        for (let i=0; i<Math.floor(currBoss.killsph/4); i++) {
            if (currBoss.drops[0][2] === 100) {
                currLoot.push(currBoss.drops[0][0]);
                bone = true
            }
            let num = Math.random();
            let drop = dropChance.filter(isBigEnough(num));
            let dropIdx = dropChance.indexOf(drop[0]);
            if (dropIdx === -1) {
                dropIdx = dropChance.length-1
            }
            currLoot.push(currBoss.drops[dropIdx][0])
        }
    },
    setupDropChance: () => {
        
        let currTot = -100 
        //-100 to get rid of bones or ashes drop
        
        for (let i=0; i<currBoss.drops.length; i++) {
            let currNum = currTot + currBoss.drops[i][2]
            currTot = currNum;
            dropChance.push(currNum);            
        }
    },
    resetAll: () => {
        dropChance = [], currBoss = [], currLoot = [];
        ol.innerHTML = '';
        bossSel.value = 'empty';        
    },
    error: () => {
        if (!errorDisplay) {
            let span = document.createElement('span');
            span.textContent = 'Please choose a boss!';
            errorText.appendChild(span);
            ol.innerHTML = '';
            errorDisplay = true;
        }
    },
}

watchDiv.addEventListener( 'click', (e) => { 
    if (e.target.textContent==='Start') {
        if (!counting) {
            startWatch();
            varButt.textContent = 'Stop';
        }
    } 
    if (e.target.textContent==='Reset') {
        if (!counting) {
            resetTime();
            Input.resetAll();
            e.target.textContent = 'Stop';
        }
    } else if (e.target.textContent==='Stop') {
        if (counting) {
            stopTime();
            e.target.textContent = 'Reset';
        }
    }
});