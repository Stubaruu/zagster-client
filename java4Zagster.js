const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView) 

let myHours = [];
let myYears = [];

function updateView() { 
    $.getJSON(BASE_URL + "/rides/count", UpdateRideCount);  

$.when($.getJSON(BASE_URL + "/rides/count/per_hour/", PrepareHours)
).then(
    displayHours
);

$.when($.getJSON(BASE_URL + "/rides/count/per_year/", PrepareYears)
).then(
    displayYears
);

//Functions Correspond Linearly from function updateView()
function UpdateRideCount(data) {
    numberofRides = data.count
    $("h2#RideCount").html(numberofRides)
}

//function for Hours
function PrepareHours(data) {
   console.log(data);

   for (var i = 0; i < 24; ++i) {
       if( data[i] === undefined) {
           myHours.push(0);
       } else {
       myHours.push(data[i]);
       }
   }
   console.log(myHours);
}

//function for Years
function PrepareYears(data) {
    console.log(data);
 
    for (var i = '2016'; i < '2019'; ++i) {
        if( data[i] === undefined) {
            myYears.push(0);
        } else {
        myYears.push(data[i]);
        }
    }
    console.log(myYears);
 }

                                                           ////CHARTS AND GRAPHS FOR VISUALIZATION////

    function displayHours() {
        var ctx = document.getElementById("myHours").getContext('2d');
        var myWeeks = new Chart(ctx, {                       
                type: 'bar',                                 
                data: {                                     
                    labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
                    datasets: [{
                    label: ['Hours'], 
                    data: myHours,                      
                    backgroundColor: [                  
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
                        ],
                    borderColor: [                      
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
    }

    function displayYears() {
        var ctx = document.getElementById("myYears").getContext('2d');
        var myWeeks = new Chart(ctx, {                       
                type: 'bar',                                 
                data: {                                     
                    labels: ['2016', '2017', '2018'],
                    datasets: [{
                    label: ['Years'], 
                    data: myYears,                      
                    backgroundColor: [                  
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.5)',
                        ],
                    borderColor: [                      
                            'rgba(0, 128, 128, 0.5)',
                            'rgba(0,128, 128, 0.5)',
                            'rgba(0, 128, 128, 0.5)',
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
