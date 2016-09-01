//creating IIFE to display current Date
(function () {
    var today = new Date();
    var day = today.toDateString();

    var el = document.getElementById('currentDate');
    el.textContent = 'Today is ' + day;
} ());

//Creating a function to call when button is clicked
function buttonAction() {
    //Gets number of days from user
    var daysFromToday = prompt("Enter number of days");
    var today;
    var updateMsg;
    var elOutput;


    //creating a function to calculate number of days from current date
    function dayCounter(today) {
        //Declare all varibales use in calculation
        var timeFromToday, day, date, month, year, namesOfMonths, namesOfDays;
        //Calculates time (in ms) from current date
        timeFromToday = new Date(today.getTime() + daysFromToday * 24 * 60 * 60 * 1000);
        //Create array to store names of the days of the week
        namesOfDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        //create an array to store the names of the months of the year
        namesOfMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        day = namesOfDays[timeFromToday.getDay()];
        date = timeFromToday.getDate();
        month = namesOfMonths[timeFromToday.getMonth()];
        year = timeFromToday.getFullYear();

        updateMsg = 'In ' + daysFromToday + ' days the date will be ';
        updateMsg += '<br />' + day + ', ' + month + ' ' + date + ', ' + year;
        return updateMsg;
    }

    today = new Date();
    elOutput = document.getElementById('output');
    elOutput.innerHTML = dayCounter(today);


};
