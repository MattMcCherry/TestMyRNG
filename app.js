//changing elements on page
const timeDiv = document.querySelector(".counter");
const watchDiv = document.getElementById("stopwatch");
const varButt = document.querySelector(".varButt");
const bossSel = document.querySelector(".boss");
const ol = document.querySelector(".drops");
const errorText = document.querySelector(".error");
const totalP = document.querySelector('.total')

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
    alwaysDrops = [],
    errorDisplay = false,
    totalGP = 0;
    
//setup selection options
enemies.forEach((enemy,i) => {
                let option = document.createElement('option')
                option.textContent = `${enemy.name}`;
                option.value=i;
                bossSel.appendChild(option);
});


        
let currPrices;

// this accesses the Runescape API to get the value of each item dynamically
// the RS API returns a JSON obj with current prices & other useful properties
// IIFE to get prices straight away

(function fetchItemPrices() {
    fetch(`https://rsbuddy.com/exchange/summary.json`)
    .then(res => res.json())
    .then(data => { currPrices = data; setPrices() })
    .catch(err => { throw err });
}());



// to set up prices we want to add a property to each item in the enemies object

function setPrices() {
enemies.forEach(enemy => {
                    enemy.drops.forEach(item => {
                        if (item.id !== undefined) {
                            item.price = currPrices[item.id].buy_average;
                        }
                                          })
});
}

const startWatch = () => { 
    
    /*
    if no boss chosen output an error and reset time
    is possible to have timer going and change to empty value to trigger this hence the reset.
    */
    
    if (bossSel.value === 'empty') {
        Input.error();
        resetTime();
    } else {
        
    //if the boss is selected and there's an error displaying get rid of it
        
    if (errorDisplay) {
        errorText.innerHTML = '';
        errorDisplay = false;
    }
    
    // every 15 seconds we add loot and reset the currLoot Array
    // this loot is worked out on Math.floor(kills per hour / 4) 
    // this could cause problems with a none % 24 === 0 number

    if (seconds % 15 === 0) {
        Input.addLootToArr();
        Input.getGPAmount();
        Input.appendLoot();
        currLoot = [];
    }
        
    // standard counter stuff below
        
    if ( seconds === 60 ) { 
        seconds = 0; minutes += 1; 
    } 
        
    mins = ( minutes < 10 ) ? ( `0${minutes} : ` ) : ( `${minutes} : ` );
    secs = ( seconds < 10 ) ? ( `0${seconds}` ) : ( seconds ); 
    timeDiv.innerHTML = `${mins} ${secs}`; 
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
    secs = `0${seconds}`
    mins = `0${minutes} : `
    timeDiv.innerHTML = `${mins} ${secs}`; 
}

//everything to do with RNG bosses, kills & loot
// v v v v v v v v v v v v v v v v v v v v v v v
const Input = {
    
    appendLoot: () => {
        for (let i=0; i<currLoot.length-currBoss.rolls; i+= currBoss.rolls) {
            let li = document.createElement('li');
            let len = currBoss.rolls;
            
            //append drop text (boss, (amount, loot * len)
            if (len === 1) {
                li.innerHTML = `${currBoss.name} dropped ${currLoot[i][1]} ${currLoot[i][0]}`;
            } else if (len === 2) {
                li.innerHTML = `${currBoss.name} dropped ${currLoot[i][1]} ${currLoot[i][0]} and ${currLoot[i+1][1]} ${currLoot[i+1][0]}`;
            } else if (len > 2) {
                li.innerHTML = `${currBoss.name} dropped `;
                for (let j=0; j<currBoss.rolls-1; j++) {
                    li.innerHTML += `${currLoot[i+j][1]} ${currLoot[i+j][0]}, `;
                }
                li.innerHTML += `and ${currLoot[i+currBoss.rolls-1][1]} ${currLoot[i+currBoss.rolls-1][0]}.`;
            }
            ol.appendChild(li);
            }
        let totalGPformated = totalGP.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,');
        totalP.innerHTML = `${totalGPformated}gp`;
        },
    
    checkInput: function() {
        
        //this method is called on change of the selection box.
        
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
            this.aDrops();
            this.setupDropChance();
        };
    },
    
    addLootToArr: () => {
        
        //this function matches the drop rarity up to the random number
        //by comparing the dropChance array with the random num
        
        const isBigEnough = value => {
          return function(element, index, array) {
            return (element >= value);
          }
        }
        for (let i=0; i<Math.floor(currBoss.killsph/4); i++) {
            
            let num = Math.random();
            let drop = dropChance.filter(isBigEnough(num));
            let dropIdx = dropChance.indexOf(drop[0]);
            
            /*
            sometimes the rarity doesn't add up to 1 for
            the drops, if it is a number outside of the range 
            such as 99.5% or more sometimes will not be a number
            currently this effects droprates of certain items.
            on General Graardor Rare Drop Table is broken
            */
            
            if (dropIdx === -1) {
                dropIdx = dropChance.length-1
            }
            let dropNum = Input.dropAmount(dropIdx);
            alwaysDrops = [];
            Input.aDrops();
            alwaysDrops.forEach(alwaysdrop => currLoot.push(alwaysdrop));      
            currLoot.push([currBoss.drops[dropIdx].name, dropNum, currBoss.drops[dropIdx].price || 0]);
            
            // or -1 for those without a  id value (coins, rare drop table 
            // and some others that we will ignore)
        }
    },
    
    getGPAmount: () => {
        totalGP += currLoot.reduce((acc, drop) => acc+drop[2]*drop[1], 0)
        console.log(totalGP);
    },   
    
    aDrops: () =>{
    let checkingAlways = true;
        let i=0;
        while (checkingAlways) {            
            if (currBoss.drops[i].rarity === 100) {
                alwaysDrops.push([currBoss.drops[i].name, Input.dropAmount(i), currBoss.drops[i].price]);
            } else {
                checkingAlways = false;
            }
            i++
        }
    },
    
    setupDropChance: () => {
        
        let currTot = 0 - (alwaysDrops.length*100);
        
        // starting total at -100 per drop that is guarenteed 
        // to ignore the bones or ashes drop
        
        for (let i=0; i<currBoss.drops.length; i++) {
            let currNum = currTot + currBoss.drops[i].rarity
            currTot = currNum;
            dropChance.push(currNum);            
        }
    },
    
    resetAll: () => {
        //called reset all but doesn't reset errorDisplay
        //this is for reseting all values and inputs
        dropChance = [], currBoss = [], currLoot = [], alwaysDrops = [], currTot=0, totalGP=0;
        ol.innerHTML = '';
        totalP.innerHTML = '0gp';
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
    
    dropAmount: idx => {
        //min & max values contained in an Array under dropAmount.
        let min = currBoss.drops[idx].dropAmount[0] || 0;
        let max = currBoss.drops[idx].dropAmount[1] || 1;
        return Math.floor(Math.random()*(max-min+1)+min);
    },
};
// ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^
//end of input obj



// setting up event listeners for clicks
// using textContent for dynamic buttons
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