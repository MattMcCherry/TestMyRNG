// ******** STOPWATCH FUNCTIONS ******** \\

var minutes = 0,
    hours = 0,
    strMins,
    strHrs,
    clearTime,
    counting = false;

function startStopWatch() {
    if ( minutes === 60) {
        minutes = 0; hours ++;
    }
    if (minutes % (60/kph) === 0) {
        simKill();
    }
    strHrs = ( hours < 10 ) ? ( `0${hours} : ` ) : ( `${hours} : ` );
    strMins = ( minutes < 10 ) ? ( `0${minutes}` ) : ( minutes ); 
    $('.counter').html(`${strHrs} ${strMins}`); 
    minutes++; 
    clearTime = setTimeout("startStopWatch()", 10 ); 
    counting = true;
}

function stopStopWatch() {
    if (counting) {
        clearTimeout(clearTime);
        counting = false;
    }
}

function resetStopWatch() {
    minutes = 0,
    hours = 0,
    strMins = `0${minutes}`,
    strHrs = `0${minutes} : `,
    clearTime,
    counting = false;
    $('.counter').html(`${strHrs} ${strMins}`); 
}

// ******** END OF STOPWATCH FUNCTIONS ******** \\

var displayingError = false;

function displayError(errorStr) {
    if (!displayingError) {
        displayingError = true;
        var html = errorStr;
        $('.error-container').show()
        $(html).hide().addClass('error').appendTo('.error-container').fadeIn(1000).delay(1000).fadeOut(1000, function () {
            $('.error').remove();
            $('.error-container').hide();
            displayingError = false;
        }); // fadeOut end
    }
} // END OF DISPLAYERROR FUNC

//setup boss selector
$(enemies).each(function(i) {
    $('#boss').append($('<option/>')
                     .attr('value', i)
                     .text(`${this.name}`));
}); //ENEMIES EACH END

// ******** BOSS KILLING FUNCTIONS ******** \\

var items,
    kph,
    currBoss,
    bossDrops = [],
    alwaysDrop = [],
    dropChanceArr = [],
    currLoot,
    currTot = 0,
    dropChanceMax = 0,
    totalGP = 0;

$.getJSON("summary.json", function(data) {
    items = data;
})

function randomNumberGenerator(min, max) {
    return (Math.random()*(max-min)+min);
}

function setupBossVars(bossIdx) {
    currBoss = enemies[bossIdx],
    kph = $('#kph').val() || enemies[bossIdx].killsph;
    $.each(currBoss.drops, function() {
        if (this.rarity === 100) {
            alwaysDrop.push(this);
        } else {
            bossDrops.push(this);
        }
    });
    
    $.each(bossDrops, function () {
        dropChanceMax = currTot + this.rarity;
        currTot = dropChanceMax;
        dropChanceArr.push(dropChanceMax);
    });
}

function resetBossVars() {
    items,
    kph,
    currBoss,
    bossDrops = [],
    alwaysDrop = [],
    dropChanceArr = [],
    currTot = 0,
    dropChanceMax = 0,
    totalGP = 0;
    
    $('.total').text('0gp');
    $('.drops').text('');
}



function simKill() {
    
    var currLoot = [];
    
    function getDropIdx(dropVal) {  

        function isBigEnough (value){
          return function(element, index, array) {
            return (element >= value);
          }
        }

        var closestDropRarity = dropChanceArr.filter(isBigEnough(dropVal));
        return dropChanceArr.indexOf(closestDropRarity[0]);
        
    }
    
    function displayDrop(dropText) {
        $('ol').append(dropText);
    }
    
    
    for(var i=0; i<currBoss.rolls; i++) {
        var dropVal = randomNumberGenerator(0, dropChanceMax);
        var dropIdx = getDropIdx(dropVal);
        currLoot.push(bossDrops[dropIdx]);
    }
    
    var dropStr = `<li>${currBoss.name} dropped`;
    
    $.each(alwaysDrop, function() {
        
        var dropAmount = Math.floor(randomNumberGenerator(this.dropAmount[0], this.dropAmount[1]));
        
        console.log(dropAmount);
        
        dropStr += ` ${dropAmount} ${this.name}`;
        if (alwaysDrop.length + currBoss.rolls > 2) {
            dropStr += ',';
        }
    });
    
    $.each(currLoot, function(i) {
        
        var dropAmount = Math.floor(randomNumberGenerator(this.dropAmount[0], this.dropAmount[1]));
        
        if (i === currLoot.length-1) {
            dropStr += ` and ${dropAmount} ${this.name}.`;
        } else if (i === currLoot.length-2) {
            dropStr += ` ${this.name}`;
        } else {
            dropStr += ` ${this.name},`;
        }
        
    });
    
    dropStr += `</li>`
    displayDrop(dropStr);
}


// ******** EVENT LISTENERS ******** \\
$('.container .butt').on('click', 'button', function() {
    
    if ($(this).text() === "START") {
        var bossVal = $('#boss').val();
        if (bossVal === 'empty') {
            displayError('<p>Please select your boss before starting!</p>');
            stopStopWatch();
            resetStopWatch();
        } else { 
        console.log('do everything else');
        startStopWatch();
        $('.varbutt').text('STOP');
        resetBossVars();
        setupBossVars(bossVal);
        }
    }
    
    if ($(this).text() === "STOP") {
        if (counting) {
            stopStopWatch();
            $(this).text('RESET');
        }
    } else if ($(this).text() === "RESET") {
        if (!counting) {
            resetStopWatch();
            resetBossVars();
            $(this).text('STOP');
        }
    }
}); // START && STOP END ON CLICK