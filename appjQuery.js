//setup boss selector
$(enemies).each(function(i) {
    $('.boss').append($('<option/>')
                     .attr('value', i)
                     .text(`${this.name}`));
}); //ENEMIES EACH END

$('.container .butt').on('click', 'button', function() {
    if ($(this).text() === "START") {
        const bossVal = $('.boss').val();
        if (bossVal === 'empty') {
            console.log('display error');
        } else { 
        console.log('do everything else');
        const kph = $('.kph').val() || $(enemies)[bossVal].killsph;
        }
    }
    if ($(this).text() === "STOP") {
        console.log("stop");
    }
}); // START && STOP END ON CLICK

