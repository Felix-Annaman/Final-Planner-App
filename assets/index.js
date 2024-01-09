$(document).ready(function() {
    $('#currentDay').text(dayjs().format('MMMM D, YYYY'));

    for (let hour = 9; hour <= 17; hour++) {
        let timeblock = $('<div>').addClass('time-block');
        let eventInput = $('<textarea>').addClass('description');
        let saveButton = $('<button>').addClass('saveBtn').text('Save');

        eventInput.val(localStorage.getItem(hour) || '');
        saveButton.on('click', function() {
            localStorage.setItem(hour, eventInput.val());
        });

        let currentHour = dayjs().hour();
        if (hour < currentHour) {
            timeblock.addClass('past');
        } else if (hour === currentHour) {
            timeblock.addClass('present');
        } else {
            timeblock.addClass('future');
        }

        timeblock.append(hour <= 12 ? hour + ' AM' : (hour - 12) + ' PM');
        timeblock.append(eventInput);
        timeblock.append(saveButton);
        $('#timeblocks').append(timeblock);
    }
});
