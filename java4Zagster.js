const BASE_URL = "https://zagster-service.herokuapp.com"

const YEAR_RF = "/rides/count/g5"
const STATION_RF = "/rides/count/columbia_simpson"
const DESTINATION_RF = "/rides/count/drake_park"
const USER_RF = "/rides/count/galveston"
const MONTH_RF= "/rides/count/grc"
const WEEK_RF = "/rides/count/old_mill"
const DAY_RF = "/rides/count/"
const TIME_RF = "/rides/count/TIME"

$(updateView)

function updateView() {
    $.getJSON(BASE_URL + "/rides/count", UpdateRideCount) //Prints most current number of rides.
    $.getJSON(BASE_URL + "/rides/count/per_month", UpdateMonthlyCount)
    $.getJSON(BASE_URL + "",)
}

function UpdateRideCount(data) {
    numberofRides = data.count
    $("h2#rideCount").html(numberofRides)
}

function UpdateMonthlyCount(data) {
    console.log(data)
}
//DATA VISUALIZATION 
