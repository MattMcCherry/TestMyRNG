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

var items;

$.getJSON("summary.json", function(data) {
    items = data;
})

//setup boss selector
$(enemies).each(function(i) {
    $('#boss').append($('<option/>')
                     .attr('value', i)
                     .text(`${this.name}`));
}); //ENEMIES EACH END

$('.container .butt').on('click', 'button', function() {
    
    if ($(this).text() === "START") {
        const bossVal = $('#boss').val();
        if (bossVal === 'empty') {
            displayError('<p>Please select your boss before starting!</p>');
            stopStopWatch();
            resetStopWatch();
        } else { 
        console.log('do everything else');
        startStopWatch();
        $('.varbutt').text('STOP');
        const kph = $('#kph').val() || $(enemies)[bossVal].killsph;
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
            $(this).text('STOP');
        }
    }
}); // START && STOP END ON CLICK