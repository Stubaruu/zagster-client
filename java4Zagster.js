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

var vis = d3.select("#graph")
            .append("svg");
            var w = 900,
            h = 400;
    vis.attr("width", w)
           .attr("height", h);
    vis.text("The Graph")
           .select("#graph")
    vis.selectAll("circle .nodes")
    .data(nodes)
    .enter()
    .append("svg:circle")
    .attr("class", "nodes")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", "10px")
    .attr("fill", "black") 
var nodes = [{x: 30, y: 50},
        {x: 50, y: 80},
        {x: 90, y: 120}]