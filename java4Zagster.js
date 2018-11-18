const BASE_URL = "https://zagster-service.herokuapp.com"

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
var vis = d3.select("#graph")
            .append("svg")
.attr("width", 200).attr("height", 200);

var nodes = [
    {x: 10, y: 50},
    {x: 70, y: 10},
    {x: 140, y: 50}   
  ]

vis.selectAll("circle.nodes")
   .data(nodes)
   .enter()
   .append("svg:circle")
   .attr("cx", function(d) { return d.x; })
   .attr("cy", function(d) { return d.y; })
   .attr("r", "10px")
   .attr("fill", "black")