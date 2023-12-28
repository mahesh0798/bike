﻿// JavaScript source code
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
    brandlistV1();
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


function brandlistV1() {

    var i = getParameterByName('Vehicleid');
    var j = getParameterByName('IsEv');

    var apiurl = baseUrl + "VehicleDetails/Details?Vehicleid=" + i + '&IsEv=' + j;
    $('.loader-parent').show();
    $.ajax({
        url: apiurl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            var vehicleDetails = data[0];// data.find(item => item.vechileid === i);
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
                                    <h5>${data[i].exshowroomPrize ? '₹ ' + data[i].exshowroomPrize.toFixed(2) : 'Price not available'}</h5>
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

function allimg() {
    var apiurl = baseUrl + "VehicleDetails/Images?Vehicleid=" + allimgvechileid;
    $('.loader-parent').show();
    $.ajax({
        url: apiurl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            $('.loader-parent').hide();
            $('#first').hide();
            $('#second').hide();
            $('#three').hide();
            $('#four').show();
            var carouselContentsec = "";
            data.forEach(function (vehicle) {
                console.log(vehicle)
                carouselContentsec += `
                 
                      <img src="${vehicle.imagePath}" class="card-img-top img-fluid" alt="...">
      `;
            });

            $("#allimg").html(carouselContentsec);
        },
        error: function (xhr, status, error) {
            $('.loader-parent').hide();
            console.error('Error fetching data:', error);
        }
    });
}


function backstage() {
    $('#first').hide();
    $('#second').hide();
    $('#three').show();
    $('#four').hide();
}


function fetchPincode() {
    const city = document.getElementById('form12').value;
    var apiurl = baseUrl + "Home/GetCity?Key=" + city;

    $.ajax({
        url: apiurl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            const matchingPincode = data.find(item => item.city.toLowerCase() === city.toLowerCase());
            displayAutocompleteResults(data);

            if (matchingPincode) {
                const pincode = matchingPincode.pincode;
                document.getElementById('pincodeResult').textContent = ` ${pincode}`;
            } else {
                document.getElementById('pincodeResult').textContent = `${city} not found`;
            }
        }
    })
}

        function defaultcity() {
    var apiurl = baseUrl + "Home/GetShowRoom?PincodeId=" + 0 + '&BrandId=' + 0
    $('.loader-parent').show();
    $.ajax({
        url: apiurl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            $('.loader-parent').hide();
            $("#showroom").empty();
            var $carousel = ""
            var $carousel = $("#showroom");
            for (var i = 0; i < data.length; i++) {
                var card = data[i];
                var $card = $("<div class='card'>" +
                    "<div class='card-body shadow' style='background: #e6e4e4;'>" +
                    "<div class='row mx-0'>" +
                    "<div class='col-3 text-center'>" +
                    "<p class='mb-1'><b>City</b></p>" +
                    "<p class='mt-4'><svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='currentColor' class='bi bi-geo-alt' viewBox='0 0 16 16'><path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z'/><path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'/></svg></p>" +
                    "<p class='mt-0'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-telephone-fill' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'/></svg></p>" +
                    "</div>" +
                    "<div class='col-9'>" +
                    "<p class='mb-1'>" + card.city + "</p>" +
                    "<p class='mt-4 mb-3 f-15'>" + card.name + "," + card.street + "," + card.pincode + "</p>" +
                    "<a class='mt-2' href='tel:" + card.phNo + "'>" + card.phNo + "</a>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>");

                $carousel.append($card);
            }

            $carousel.owlCarousel({
                items: 1,
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
        }
    })
}