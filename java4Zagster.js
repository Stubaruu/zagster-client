const BASE_URL = "https://zagster-service.herokuapp.com"
var chartData = []
//Do I need more variables here?

$(updateView) //After the browser has been called, this command activates and updates the data contained inside.//

function updateView() { //Refreshes the data being pulled.//

    $.getJSON(BASE_URL + "/rides/count", UpdateRideCount);  //Prints most current number of rides.//
    $.getJSON(BASE_URL + "/rides/count/per_membership_type", UpdateMembershipType);  //Prints most current number Membership Type Totals.//
    $.getJSON(BASE_URL + "/rides/count/:station/per_week/memberships", UpdateWeeklyMemberships); //Prints most current number of Membership rides per week.//
    $.getJSON(BASE_URL + "/rides/count/:station/per_month/memberships", UpdateMonthlyMemberships); //Prints most current number of Membership rides per month.//
    displayUnique()
    displayGraph()
    displayStuff()
    }
//Functions Correspond Linearly from function updateView()
function UpdateRideCount(data) {
    numberofRides = data.count
    $("h2#RideCount").html(numberofRides)
}

function UpdateMembershipType(data) {
    console.push(data)
    //What goes here?
}

function UpdateWeeklyMemberships(data) {
    console.push(data)
    //What goes here?
}

function UpdateMonthlyMemberships(data) {
    console.push(data)
    //What goes here?
}

function chartData(){  // What do I type in the consol to retrieve my pushed data?
    console.push(data)
}


                                                           ////CHARTS AND GRAPHS FOR VISUALIZATION////

    function displayUnique(data) {
        var ctx = document.getElementById("myUnique").getContext('2d');
        var chartData = new Chart(ctx, {                      // chartData was changed from "myChart"//
                type: 'bar',                                  // Keep this as a 'Bar' Graph. There are only 4 labes.//
                data: {
                    labels: ["Student", "Annual", "Other", "Pay-Per-Day"],
                    datasets: [{
                    label: 'Membership Types',            // TITLE FOR CHART//
                    data: ['1', '2', '1.5', '2.25'],                             // [data['chartData']],  //PLUG IN REAL DATA NEXT
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(230, 179, 80, 10)',
                        'rgba(255, 149, 34, 20)',
                        'rgba(255, 190, 54, 06)'
                    ],
                    borderWidth: 3
                    }]
                },
                options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
                }
            });
        }

    function displayStuff(data) {
        var ctx = document.getElementById("myWeeks").getContext('2d');
        var myChart = new Chart(ctx, {                       // Do I need to change the "myChart" to something that corresponds to the unique function?
                type: 'bar',                                 // How do I get this to be a line graph? It bugs out when I change it. 
                data: {                                      // How to write a script that counts up to 56 weeks/year??
                    labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27","28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56"],
                    datasets: [{
                    label: ['Weeks'], 
                    data: ['example', '2', '9', '6','7', '21', '23','34', '45', '5','8', '9', '4','2', '9', '6','7', '21', '23','34', '45', '5','8', '9', '4','2', '9', '6','7', '21', '23','34', '45', '5','8', '9', '4','2', '9', '6','7', '21', '23','53', '45', '5','8', '9', '4','2', '5', '6','7', '21', '23','34', '45', '5','8', '9', '4','2', '9', '6','7'],// How to get the real data in using functions?
                    backgroundColor: [                  // Is there a way to create a script that auto generates sequential colors?
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)', 
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)', 
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                    borderColor: [                      // Same Question here.
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)', 
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)', 
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                    borderWidth: 3
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });
        }
        
        
    function displayGraph(data) {
        var ctx = document.getElementById("myGraph").getContext('2d');
        var myChart = new Chart(ctx, {                          // Do I need to change the "myChart" to something that corresponds to the unique function?
                type: 'bar',                                         //How do I get this to be a line graph? It bugs out when I change it. 
                data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                datasets: [{
                label: 'Month', 
                data: ['1','2', '9', '20','15', '21', '23','33', '45', '27','8', '9', '4',],                                     //To plug in REALDATA you need to [data[(datalink)]] ??? Y/N ???
                backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(230, 179, 80, 10)',
                                'rgba(255, 149, 34, 20)',
                                'rgba(255, 190, 54, 06)'
                            ],
                borderWidth: 3
                }]
            },
            options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }]
                        }
            }
            });
        }
