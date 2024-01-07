// JavaScript source code

var brandimg = []
var viewmore = false;
var viewmore1 = false;
var eletric = false;
var famousBike = false;
var famousScooty = false;
var raceModels = false;
var mileageModels = false;
var btnname = "";
var addline1 = ""
var addline2 = ""
var addline3 = ""
var addimg = "";
var btnall = "";
let clickedCityId = null;
allimgvechileid = ""
var brandidpin = '';
$('#first').show();
$('#second').hide();
$('#three').hide();
$('#four').hide();
const toggleForm = () => {
    const container = document.querySelector('.container2');
    container.classList.toggle('active');
};
AOS.init()

$(document).ready(function () {
    addsImg();
    brandselectV1();
});

function frontpage() {
    location.href = "./index.html";
}



function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Usage example:


function brandselectV1() {
    // if(name=="TVS"&&j==)

    var i = getParameterByName('Brandid');
    var j = getParameterByName('IsEv');

    var apiurl = baseUrl + "VehicleList/BrandList?Brandid=" + i + '&IsEv=' + j;
    $('.loader-parent').show();
    $.ajax({
        url: apiurl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            $('.loader-parent').hide();
            $('#first').hide();
            $('#second').show();
            $("#bikeName").text(data[0].brand)
            console.log(data[0].brand, "brand");

            var btext = localStorage.getItem("buttontext");
            var carouselContentsec = "";
            data.forEach(function (vehicle) {
                console.log(vehicle)
                if (j == "true") {
                    
                    carouselContentsec += `
              <div class="item">
                  <div class="card mt-2 mb-4 bikeshadow" onclick="brandlist(${vehicle.vehicleId},${vehicle.isEv})">
                      <div class="row">
                          <div class="col-md-3 col-12">
                              <img src="${vehicle.imagePath}" class="card-img-top img-fluid" alt="...">
                          </div>
                          <div class="col-md-6 col-12">
                              <div class="card-body px-md-2">
                                  <h5 class="card-title" style="color:darkblue" class="col-md-12">${vehicle.vehiclename}</h5>
                                  <p class="card-text mt-3 col-md-12"> <img src='assets/images/battery.png' style='width:13px'> ${vehicle.batteryType} | <img src='assets/images/battery-charging.png' style='width:24px'> ${vehicle.chargingTime} | <img src='assets/images/kerb-weight..jpg' style='width:20px'> ${vehicle.kerbWeight} Kg | <img src='assets/images/mileage-color.png' style='width:20px'> ${vehicle.topSpeed} KMPH</p>
                                  <h4 class="col-md-12"> <b>₹ ${vehicle.exshowroomPrize}</b> <span class="f-14">Ex showroom Price onwards<span></h4>
                                  <a href="#" class="btn btn-outline-secondary text-white purple1 col-md-6">${btext}</a>
                              </div>
                          </div>
                          <div class="col-md-3 col-12">
                              <div class="card-body ">
                                  <table class="table table-bordered">
                                      <tr>
                                          <td>Rating:  <span style="display: inline-block; vertical-align: middle;"><img src="./assets/images/star.png" alt="" style="width: 50px;height: 50px;"> </span>  <span style="display: inline-block; vertical-align: middle;">${vehicle.overallRatings ? vehicle.overallRatings : 'N/A'} </span></td>
                                         
                                      </tr>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>`;

                } else {
                    carouselContentsec += `
              <div class="item">
                  <div class="card mt-2 mb-4 bikeshadow" onclick="brandlist(${vehicle.vechileid},${vehicle.isEv})">
                      <div class="row">
                          <div class="col-md-3 col-12">
                              <img src="${vehicle.imagePath}" class="card-img-top img-fluid" alt="...">
                          </div>
                          <div class="col-md-6 col-12">
                              <div class="card-body px-md-2">
                                  <h5 class="card-title" style="color:darkblue" class="col-md-12">${vehicle.vehiclename}</h5>
                                  <p class="card-text mt-3 col-md-12"> <img src='assets/images/engine-color.png' style='width:20px'> ${vehicle.displacement} CC | <img src='assets/images/milage-icon.png' style='width:20px'> ${vehicle.mileage} KMPL | <img src='assets/images/kerb-weight..jpg' style='width:20px'> ${vehicle.kerbWeight} Kg | <img src='assets/images/mileage-color.png' style='width:20px'> ${vehicle.topSpeed} KMPH</p>
                                  <h4 class="col-md-12"> <b>₹ ${vehicle.exshowroomPrize}</b> <span class="f-14">Ex showroom Price onwards<span></h4>
                                  <a href="#" class="btn btn-outline-secondary text-white purple1 col-md-6">${btext}</a>
                              </div>
                          </div>
                          <div class="col-md-3 col-12">
                              <div class="card-body ">
                                  <table class="table table-bordered">
                                      <tr>
                                          <td>Rating:  <span style="display: inline-block; vertical-align: middle;"><img src="./assets/images/star.png" alt="" style="width: 50px;height: 50px;"> </span>  <span style="display: inline-block; vertical-align: middle;">${vehicle.overallRatings ? vehicle.overallRatings : 'N/A'} </span></td>
                                         
                                      </tr>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>`;
                }
                
            });

            $("#bikesecond").html(carouselContentsec);
            //location.href = "./list.html";
        },
        error: function (xhr, status, error) {
            $('.loader-parent').hide();
            console.error('Error fetching data:', error);
        }
    });
}

function brandlist(i, j) {

    location.href = "./details.html?Vehicleid=" + i+'&IsEv=' + j;

    var apiurl = baseUrl + "VehicleDetails/Details?Vehicleid=" + i + '&IsEv=' + j;
    $('.loader-parent').show();
    $.ajax({
        url: apiurl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            var vehicleDetails = data.find(item => item.vechileid === i);
            var bikemodeid = data[0].bikeModelid;
            var ismulticolor = vehicleDetails.ismulticolor;
            var isSamePrize = vehicleDetails.isSamePrize;
            allimgvechileid = vehicleDetails.vechileid;
            brandidpin = vehicleDetails.brandid;
            $('#vehicleName').text(vehicleDetails.vehiclename);
            $('#vehicleName1').text(vehicleDetails.vehiclename);
            $('#vehicleName2').text(vehicleDetails.vehiclename);
            $('#vehicleName3').text(vehicleDetails.vehiclename + " Price");
            $('#vehicleName4').text(vehicleDetails.vehiclename);
            $('#vehicleType').text(vehicleDetails.vehicleType);
            $('#engineType').text(vehicleDetails.engineType);
            $('#topSpeed').text(vehicleDetails.topSpeed);
            $('#grountClearence').text(vehicleDetails.grountClearence);
            $('#body').text(vehicleDetails.body);
            $('#manufacturingWarrenty').text(vehicleDetails.manufacturingWarrenty);
            $('#fuelFilling').text(vehicleDetails.fuelFilling);
            $('#brakingSystem').text(vehicleDetails.brakingSystem);
            $('#tyreType').text(vehicleDetails.tyreType);
            $('#tyreSize').text(vehicleDetails.tyreSize);
            $('#wheelbase').text(vehicleDetails.wheelbase);
            $('#noofGears').text(vehicleDetails.noofGears);
            $('#headLight').text(vehicleDetails.headLight);
            $('#underseatStorage').text(vehicleDetails.underseatStorage);
            $('#clock').text(vehicleDetails.clock);
            $('#mobileConnectivity').text(vehicleDetails.mobileConnectivity);
            $('#serviceIndicator').text(vehicleDetails.serviceIndicator);
            $('#lowFuelIndicator').text(vehicleDetails.lowFuelIndicator);
            $('#gpsandNavigation').text(vehicleDetails.gpsandNavigation);
            $('#usbChargingPort').text(vehicleDetails.usbChargingPort);
            $('#kilswitch').text(vehicleDetails.kilswitch);
            $('#color').text(vehicleDetails.color);
            $('#bikeInfor').text(vehicleDetails.bikeInfor);
            $('#additionalFeatures').text(vehicleDetails.additionalFeatures);
            $('#exshowroomPrize').text(vehicleDetails.exshowroomPrize);
            $('#overallRatings').text(vehicleDetails.overallRatings);
            $('#displacement').text(vehicleDetails.displacement);
            $('#speedometer').text(vehicleDetails.speedometer);
            $('#cubicCapacity').text(vehicleDetails.displacement);
            $('#kerbWeight').text(vehicleDetails.kerbWeight);
            $('#mileage').text(vehicleDetails.mileage);
            $('#mileage1').text(vehicleDetails.mileage);
            $('#maxPower').text(vehicleDetails.maxPower);
            $('#maxTorque').text(vehicleDetails.maxTorque);
            $('#frontBrake').text(vehicleDetails.frontBrake);
            $('#exshowroomPrize').text(vehicleDetails.exshowroomPrize);
            $('#rearBrake').text(vehicleDetails.rearBrake);
            $('#fuelCapacity').text(vehicleDetails.fuelTankCapacity);
            $('#first').hide();
            $('#second').hide();
            $('#three').show();
            $('.loader-parent').hide();
            if (ismulticolor && !isSamePrize) {
                var apiurl = baseUrl + "VehicleDetails/GetPrice?Vehicleid=" + i + '&IsmultiColor=' + ismulticolor + '&IsSamePrize=' + isSamePrize;
                $.ajax({
                    url: apiurl,
                    method: 'GET',
                    dataType: 'json',
                    success: function (res) {
                        if (res && res.length > 0) {
                            var carouselContent = '<div id="carouselExample" class="carousel slide" data-bs-ride="carousel"><div class="carousel-inner">';

                            res.forEach(function (item, index) {
                                var activeClass = index === 0 ? 'active' : ''; // Set active class for the first item

                                carouselContent += `
                          <div class="carousel-item ${activeClass}">
                              <div class="row mx-0">
                                  <div class="col border">Color</div>
                                  <div class="col border">Name</div>
                                  <div class="col border" id="vehiclePriceCol">Price</div>
                              </div>
                              <div class="row mx-0 mb-1">
                                  <div class="col border" id="vehicleColor" style="background-color:${item.colour};"></div>
                                  <div class="col border" id="vehicleName">${item.name}</div>
                                  <div class="col border" id="vehiclePrice">${item.price || 'N/A'}</div>
                              </div>
                          </div>`;
                            });

                            carouselContent += '</div></div>'; // Close carousel-inner and carousel

                            $('#vehicle-details').html(carouselContent);

                            // Activate the carousel
                            $('#carouselExample').carousel();
                        }
                    },
                    error: function (xhr, status, error) {
                        console.error('Error fetching data:', error);
                    }
                });
            }


            var apiurl = baseUrl + "VehicleDetails/Images?Vehicleid=" + i;
            $('.loader-parent').show();
            $.ajax({
                url: apiurl,
                method: 'GET',
                dataType: 'json',
                success: function (img) {
                    $('.loader-parent').hide();
                    $("#image-carousel-1").empty();
                    var $carousel = $("#image-carousel-1");
                    for (var i = 0; i < img.length; i++) {
                        var imageUrl = img[i].imagePath;
                        var $image = $("<img>").attr("src", imageUrl).attr("width", "300").attr("height", "300");
                        $carousel.append($image);
                    }


                    $carousel.owlCarousel({
                        items: 3,
                        loop: false,
                        slideSpeed: 300,
                        paginationSpeed: 600,
                        nav: true,
                        dots: false,
                        autoWidth: false,
                        margin: 30,
                        startPosition: 1,
                        center: true,
                        responsiveClass: true,
                        navText: ["<img  src='assets/images/leftarrowNew.png'>", "<img src='assets/images/leftarrowNew.png'>"],
                        responsive: {
                            0: {
                                items: 1,
                            },
                            600: {
                                items: 1,
                            },
                            1000: {
                                items: 1,
                            },
                            1440: {
                                items: 1,
                            }
                        }
                    });


                    var apiurl = baseUrl + "VehicleDetails/GetVariant?BikeModelid=" + bikemodeid;
                    $('.loader-parent').show();
                    $.ajax({
                        url: apiurl,
                        method: 'GET',
                        dataType: 'json',
                        success: function (data) {
                            $('.loader-parent').hide();
                            var carouselItems = "";
                            for (var i = 0; i < data.length; i++) {
                                carouselItems += `
                        <div class="item">
                          <div class="container mt-6" style="position: relative;" >
                            <div class="card border-top-0">
                              <div class="card-body shadow">
                                <div class="row mx-0">
                                  <div class="col-md-12 text-center rounded-pill shadow border" style="position: absolute; top: -30%; height: 18rem; width: 18rem;">
                                    <img class="rounded-circle image-container text-center" src="${data[i].imagePath}" alt="${data[i].vehiclename}">
                                  </div>
                                </div>
                                <div class="row mx-0" style="padding-top: 180px;">
                                  <div class="col-md-12">
                                    <h5>${data[i].vehiclename}</h5>
                                  </div>
                                  <div class="col-md-10">
                                    <h5>${data[i].exshowroomPrize ? '₹ ' + data[i].exshowroomPrize : 'Price not available'}</h5>
                                  </div>
                                  <div class="col-md-12 text-center">
                                    <button class="btn btn-secondary">Get Diwali Offers</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>`;
                            }

                            // Update the carousel with the new content
                            $("#bikePrice").html(carouselItems);

                            // Initialize the Owl Carousel
                            $("#bikePrice").owlCarousel({
                                items: 3,
                                loop: false,
                                slideSpeed: 300,
                                paginationSpeed: 600,
                                nav: true,
                                dots: false,
                                autoWidth: false,
                                margin: 30,
                                startPosition: 1,
                                center: true,
                                responsiveClass: true,
                                navText: ["<img src='assets/images/leftarrowNew.png'>", "<img src='assets/images/leftarrowNew.png'>"],
                                responsive: {
                                    0: {
                                        items: 1,
                                    },
                                    600: {
                                        items: 2,
                                    },
                                    1000: {
                                        items: 3,
                                    },
                                    1440: {
                                        items: 4,
                                    }
                                }
                            });
                        },
                        error: function (xhr, status, error) {
                            $('.loader-parent').hide();
                            console.error('Error fetching data:', error);
                        }
                    })
                },
                error: function (xhr, status, error) {
                    $('.loader-parent').hide();
                    console.error('Error fetching data:', error);
                }
            })
            defaultcity();
        },
        error: function (xhr, status, error) {
            $('.loader-parent').hide();
            console.error('Error fetching data:', error);
        }
    })
}

