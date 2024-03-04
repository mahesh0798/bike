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
var IsDirectPin = "";
$('#first').show();
$('#second').hide();
$('#three').hide();
$('#four').hide();
$('#showAll').hide();
$('#showLess').hide();
const toggleForm = () => {
    const container = document.querySelector('.container2');
    container.classList.toggle('active');
};
AOS.init()

$(document).ready(function () {

    window.onpopstate = function (event) {
        // Handle the back button press here
        // For example, you can navigate back using window.history.back()
        window.history.back();
    };

    addsImg();
    brandlistV1();

    //var IsPincode = localStorage.getItem("SearchPincode");
    var IsPincode = $.cookie("SearchPincode");
    if (IsPincode) {
        fetchPincodeCache();
    }
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

function reviewpage(){
    
    var i = getParameterByName('Vehicleid');
    var j = getParameterByName('IsEv');
    location.href = "./review.html?Vehicleid=" + i+'&IsEv=' + j;
}
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
            if (j == "true") {
                sessionStorage.setItem('vechileid', vehicleDetails.vehicleId);
            }
            else {
                sessionStorage.setItem('vechileid', vehicleDetails.vechileid);
            }
           
            if (j == "false") {
                sessionStorage.setItem('isEv', false);
            }
            else {
                sessionStorage.setItem('isEv', true);
            }
            sessionStorage.setItem('brand', vehicleDetails.brand);
            sessionStorage.setItem('vehiclename', vehicleDetails.vehiclename);
            if(j=="false"){
            sessionStorage.setItem('bikeModelid', vehicleDetails.bikeModelid);
            }
            sessionStorage.setItem('modelid', vehicleDetails.modelid);
            var bikemodeid;
            var ismulticolor = vehicleDetails.ismulticolor;
            var isSamePrize = vehicleDetails.isSamePrize;
            sessionStorage.setItem('ismulticolor', ismulticolor);
            sessionStorage.setItem('isSamePrize', isSamePrize);
            
            if (j == "true") {
                allimgvechileid = vehicleDetails.vehicleId;
                 bikemodeid = data[0].modelid; 
            }
            else {
                allimgvechileid = vehicleDetails.vechileid;
                 bikemodeid = data[0].bikeModelid; 
            }



            brandidpin = vehicleDetails.brandid;

            $('#exshowroomPrize').text(" "+vehicleDetails.exshowroomPrize);
            // Assuming vehicleDetails.overallRatings is a number between 0 and 5

            // Calculate a color gradient based on the rating
            var color = "#4CAF50";
           
            // Apply the color to the element
            $('#overallRatings,#overallRatingsPv').html('<span style="font-weight:bold; background-color:' + color + '; color: white; padding: 0.2em 0.5em; border-radius: 0.25em;">' + vehicleDetails.overallRatings + '</span>/5');


            if (j == "false") {
                $('#pvkeyspec').show();
                $('#pvspec').show();
                $('#vehicleName').text(vehicleDetails.vehiclename);
                $('#ImgvehicleName').text("Images of "+vehicleDetails.vehiclename);
                $('#vehicleName1').text(vehicleDetails.vehiclename + " Key Highlight");
                $('#vehicleName2').text(vehicleDetails.vehiclename + " Specifications");
                $('#vehicleName3').text(vehicleDetails.vehiclename + " Price");
                $('#vehicleName4').text(vehicleDetails.vehiclename);
                $('#vehicleType').text(vehicleDetails.vehicleType);
                $('#engineType').text(vehicleDetails.engineType);
                $('#topSpeed').text(vehicleDetails.topSpeed + " KMPl");
                $('#topSpeed1').text(vehicleDetails.topSpeed + " KMPh");
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
                $('#exshowroomPrize1').text(vehicleDetails.exshowroomPrize);

                $('#displacement').text(vehicleDetails.displacement + " CC");
                $('#speedometer').text(vehicleDetails.topSpeed + " KMPH");
                $('#PVSpeedometer').text(vehicleDetails.speedometer);
                $('#PVstarting').text(vehicleDetails.starting);

                $('#FualTankCapacity').text(vehicleDetails.fuelTankCapacity + " L");

                $('#cubicCapacity').text(vehicleDetails.displacement + " CC");
                $('#kerbWeight').text(vehicleDetails.kerbWeight + " Kg");
                $('#PVKerbWeight').text(vehicleDetails.kerbWeight + " Kg");

                $('#mileage').text(vehicleDetails.mileage + " KMPl");
                $('#mileage1').text(vehicleDetails.mileage + " KMPl");
                $('#maxPower').text(vehicleDetails.maxPower);
                $('#PvPower').text(vehicleDetails.maxPower);

                $('#maxTorque').text(vehicleDetails.maxTorque);
                $('#frontBrake').text(vehicleDetails.frontBrake);

                $('#rearBrake').text(vehicleDetails.rearBrake);
                $('#fuelCapacity').text(vehicleDetails.fuelTankCapacity);
            }
            else {

                $('#vehicleName').text(vehicleDetails.vehiclename);
                $('#ImgvehicleName').text("Images of " + vehicleDetails.vehiclename);
                $('#EVvehicleType').text(vehicleDetails.vehicleType);
                $('#EVtopSpeed').text(vehicleDetails.topSpeed + " KMPl");
                $('#range').text(vehicleDetails.range + " Km");
                $('#Range1').text(vehicleDetails.range + " Km");
                $('#batteryType').text(vehicleDetails.batteryType);
                $('#EVbatteryType').text(vehicleDetails.batteryType);
                $('#chargingtime').text(vehicleDetails.chargingTime);
                $('#kerbWeightEv').text(vehicleDetails.kerbWeight + " Kg");
                $('#speedometerEv').text(vehicleDetails.topSpeed + " KMPh");
                $('#EVbatteryCapacity').text(vehicleDetails.batteryCapacity);
                $('#EVNoOfBatter').text(vehicleDetails.numberOfBatteries);
                $('#EVMotorType').text(vehicleDetails.motorType);
                $('#EVDriveType').text(vehicleDetails.driverType);

                $('#EVMotorPower').text(vehicleDetails.motorPower);
                $('#EVPower').text(vehicleDetails.motorPower);


                $('#EVIPRating').text(vehicleDetails.ipRating);

                $('#EVChargingTime').text(vehicleDetails.chargingTime);
                $('#FastChargingTime').text(vehicleDetails.fastChargingTime);
                $('#EVCharger').text(vehicleDetails.charger);
                $('#EVKerbWeight').text(vehicleDetails.kerbWeight);
                $('#EVLoadCarringCapacity').text(vehicleDetails.loadCarryingCapacity);
                $('#EVMotorTorque').text(vehicleDetails.motorTorque);
                $('#EVGrountClearence').text(vehicleDetails.groundClearance);

                $('#EvBody').text(vehicleDetails.body);
                $('#EVFrontBrake').text(vehicleDetails.frontBrake);
                $('#EVRearBrake').text(vehicleDetails.rearBrake);
                $('#EVTyreType').text(vehicleDetails.tyreType);

                $('#EVTyreSize').text(vehicleDetails.tyreSize);
                $('#EVWheelbase').text(vehicleDetails.wheelbase);
                $('#EVNoofGears').text(vehicleDetails.numberOfGears);
                $('#EVRemoteControl').text(vehicleDetails.remoteControl);

                $('#EVAntiTheftAlarm').text(vehicleDetails.antiTheftAlarm);
                $('#EvTouchScreenDisplay').text(vehicleDetails.touchScreenDisplay);
                $('#EVSpeedometer').text(vehicleDetails.speedometer);
                $('#EVHeadLight').text(vehicleDetails.headLight);
                $('#EVUnderseatStorage').text(vehicleDetails.underseatStorage);
                $('#EVClock').text(vehicleDetails.clock);

                $('#EVMobileConnectivity').text(vehicleDetails.mobileConnectivity);

                $('#EVServiceIndicator').text(vehicleDetails.serviceIndicator);
                $('#EVStarting').text(vehicleDetails.starting);
                $('#EVGps').text(vehicleDetails.gpsandNavigation);
                $('#EVUSB').text(vehicleDetails.usbChargingPort);

                $('#EVAdditionalFeatures').text(vehicleDetails.additionalFeatures);
                $('#EVColor').text(vehicleDetails.color);
                $('#EVBikeInformation').text(vehicleDetails.bikeInfor);

                $('#EVRidingModes').text(vehicleDetails.rididngModes);
                $('#EVBatteryWarrenty').text(vehicleDetails.batteryWarranty);
                $('#EVMotorWarrenty').text(vehicleDetails.motorWarranty);

                $('#EVChargerWarrenty').text(vehicleDetails.chargerWarranty);
                $('#EVControllerWarrenty').text(vehicleDetails.controllerWarranty);
                $('#EVReverseMode').text(vehicleDetails.reverseMode);

                $('#EVCruiseControl').text(vehicleDetails.cruiseControl);
                $('#EVLowBatteryIndicator').text(vehicleDetails.lowBatteryIndicator);
                $('#EVexshowroomPrize1').text(vehicleDetails.exshowroomPrize);
                $('#EVoverallRatings').text(vehicleDetails.overallRatings);

                $('#EVvehicleName1').text(vehicleDetails.vehiclename + " Key Highlight");
                $('#EVvehicleName2').text(vehicleDetails.vehiclename + " Specifications");
                $('#EVvehicleName3').text(vehicleDetails.vehiclename + " Price");
                $('#vehicleName4').text(vehicleDetails.vehiclename);
                $('#vehicleType').text(vehicleDetails.vehicleType);

                $('#evkeyspec').show();
                $('#evspec').show();
            }



            $('#first').hide();
            $('#second').hide();
            $('#three').show();
            $('.loader-parent').hide();
            if (ismulticolor && !isSamePrize) {
                $('#allcolor').show();
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
                              <div class="row mx-0 text-center">
                                  <div class="col border">Color</div>
                                  <div class="col border">Name</div>
                                  <div class="col border" id="vehiclePriceCol">Ex showroom Price</div>
                              </div>
                              <div class="row mx-0 mb-1 text-center" style="height:80px;">
                                  <div class="col border" id="vehicleColor" >
                                    <div class="circle" style="background-color:${item.colour};"></div></div>
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
            else if (ismulticolor) {
                $('#allcolor').show();

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
                              <div class="row mx-0 text-center">
                                  <div class="col border">Color</div>
                                  <div class="col border">Name</div>
                                  <div class="col border" id="vehiclePriceCol">Ex showroom Price</div>
                              </div>
                              <div class="row mx-0 mb-1 text-center" style="height:80px;" >
                                  <div class="col border" id="vehicleColor" >
                                    <div class="circle" style="background-color:${item.colour};"></div></div>
                                  <div class="col border" id="vehicleName">${item.name}</div>
                                  <div class="col border" id="vehiclePrice">${item.price || 'Same Price'}</div>
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


            var apiurl = baseUrl + "VehicleDetails/VehicleDetailImages?Vehicleid=" + i;
            $('.loader-parent').show();
            $.ajax({
                url: apiurl,
                method: 'GET',
                dataType: 'json',
                success: function (img) {
                    $('.loader-parent').hide();
                    $("#image-carousel-1").empty();
                    var $carousel = $("#image-carousel-1");

                    var primaryIndex;
                    for (var i = 0; i < img.length; i++) {
                        if (img[i].isPrimary === true) {
                            primaryIndex = i;
                            break;
                        }
                    }

                    // Move the object with isPrimary: true to the second position
                    var primaryObject = img.splice(primaryIndex, 1)[0];
                    img.splice(1, 0, primaryObject);


                    for (var i = 0; i < img.length; i++) {

                        var imageUrl =img[i].imagePath;
                        //if (i == 1) {
                        //    var primaryimg = img.filter(x => x.isPrimary === true)
                        //    imageUrl = primaryimg[0].imagePath;
                        //}
                       
                        var $image = $("<img>").attr("src", imageUrl).attr("width", "300").attr("height", "300").attr("class","pl-5 pt-5 pr-3");
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

                    var btext = localStorage.getItem("buttontext");
                    var apiurl = baseUrl + "VehicleDetails/GetVariant?BikeModelid=" + bikemodeid;
                    $('.loader-parent').show();
                    $.ajax({
                        url: apiurl,
                        method: 'GET',
                        dataType: 'json',
                        success: function (data) {
                            $('.loader-parent').hide();
                            $('#bikePrice').empty;
                            var carouselItems = "";
                            for (var i = 0; i < data.length; i++) {
                                carouselItems += `
                        <div class="item">
                          <div class="container mt-9 d-flex justify-content-center" onclick="Varients(${data[i].vechileid},${data[i].isEv})" >
                            <div class="card border-top-0 position-relative w-18" >
                              <div class="card-body shadow-sm">
                                <span class="position-absolute top-0 start-50 translate-middle p-2 shadow border rounded-circle w-16">
                                  <span>
                                    <img class="rounded rounded-circle image-container text-center" src="${data[i].imagePath}" alt="${data[i].vehiclename}">
                                  </span>
                                </span>
                                <div class="row mx-0" style="padding-top: 130px;">
                                  <div class="col-md-12">
                                    <h5 class="text-center">${data[i].vehiclename}</h5>
                                  </div>
                                  <div class="col-md-12">
                                    <h5 class="text-center">${data[i].exshowroomPrize ? '₹ ' + data[i].exshowroomPrize : 'Price not available'}</h5>
                                  </div>
                                                   <div class="col-md-12 text-center">
                                      <button class="btn btn-outline-secondary text-white purple1">${btext}</button>
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
            var apiUrl2 = baseUrl +"VehicleDetails/GetReviewDetails?Vehicleid="+i;
                $('.loader-parent').show();
                $.ajax({
                    url: apiUrl2,
                    method: 'GET',
                    dataType: 'json',
                    success: function (response) 
                    {   
                        let item = response;
                        $('#Reviewvehiclename').text(item[0].vehiclename+ " - User Reviews");
                        if(item.length < 4){
                            $('#showAll').hide();
                            $('#showLess').hide();
                            response.forEach(function (res,index) {
                                var card = $('<div class="card border-0 my-3" style="background-color: #f9f9f9;">');
                                var cardBody = $('<div class="card-body shadow-sm">');
                                var ratingId = 'ratings' + index;
                                cardBody.append('<div class="row py-2"><div class="col-md-12"><h5 id="BikeChoice">' + res.vehiclename + '</h5></div><div class="col-md-8"><div class="rating" data-rating="0" id="' + ratingId + '"><span class="star" data-value="1">&#9734;</span><span class="star" data-value="2">&#9734;</span><span class="star" data-value="3">&#9734;</span><span class="star" data-value="4">&#9734;</span><span class="star" data-value="5">&#9734;</span></div></div></div><div class="row"><div class="col-md-1 border-right text-center"><p style="color: #aaa;font-size: 12px;" class="m-0">1 day ago</p></div><div class="col-md-2 text-left"><p style="color: #aaa;font-size: 12px;" class="m-0" id="username">' + res.username + '</p></div></div><div class="row my-2"><div class="col-md-12"><p id="commentReviw">' + res.comments + '</p></div></div></div>');
                                
                                card.append(cardBody);
                                $('.container-for-reviews').append(card);
                                updateStars(res.overallratings,ratingId );
                            });
                        }else{
                            for (var i=0; i<=3; i++){
                                var card = $('<div class="card border-0 my-3" style="background-color: #f9f9f9;">');
                                var cardBody = $('<div class="card-body shadow-sm">');
                                var ratingId = 'ratings' + i;
                                cardBody.append('<div class="row py-2"><div class="col-md-12"><h5 id="BikeChoice">' + item[i].vehiclename + '</h5></div><div class="col-md-8"><div class="rating" data-rating="0" id="' + ratingId + '"><span class="star" data-value="1">&#9734;</span><span class="star" data-value="2">&#9734;</span><span class="star" data-value="3">&#9734;</span><span class="star" data-value="4">&#9734;</span><span class="star" data-value="5">&#9734;</span></div></div></div><div class="row"><div class="col-md-1 border-right text-center"><p style="color: #aaa;font-size: 12px;" class="m-0">1 day ago</p></div><div class="col-md-2 text-left"><p style="color: #aaa;font-size: 12px;" class="m-0" id="username">' + item[i].username + '</p></div></div><div class="row my-2"><div class="col-md-12"><p id="commentReviw">' + item[i].comments + '</p></div></div></div>');
                                
                                card.append(cardBody);
                                $('.container-for-reviews').append(card);
                                $('#showAll').show();
                                updateStars(item[i].overallratings,ratingId );
                            }
                        }
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
function scroll(){   
    var ele = document.getElementById("target");   
    window.scrollTo(ele.offsetLeft,ele.offsetTop); 
}
function showLess(){
    $('.container-for-reviews').empty();
    var i = getParameterByName('Vehicleid');
    $('#showAll').show();
    $('#showLess').hide();
    var apiUrl2 = baseUrl +"VehicleDetails/GetReviewDetails?Vehicleid="+i;
    $('.loader-parent').show();
    $.ajax({
        url: apiUrl2,
        method: 'GET',
        dataType: 'json',
        success: function (response){ 
            let item = response;
            $('.loader-parent').hide();
            for (var i=0; i<=3; i++){
                var card = $('<div class="card border-0 my-3" style="background-color: #f9f9f9;">');
                var cardBody = $('<div class="card-body shadow-sm">');
                var ratingId = 'ratings' + i;
                cardBody.append('<div class="row py-2"><div class="col-md-12"><h5 id="BikeChoice">' + item[i].vehiclename + '</h5></div><div class="col-md-8"><div class="rating" data-rating="0" id="' + ratingId + '"><span class="star" data-value="1">&#9734;</span><span class="star" data-value="2">&#9734;</span><span class="star" data-value="3">&#9734;</span><span class="star" data-value="4">&#9734;</span><span class="star" data-value="5">&#9734;</span></div></div></div><div class="row"><div class="col-md-1 border-right text-center"><p style="color: #aaa;font-size: 12px;" class="m-0">1 day ago</p></div><div class="col-md-2 text-left"><p style="color: #aaa;font-size: 12px;" class="m-0" id="username">' + item[i].username + '</p></div></div><div class="row my-2"><div class="col-md-12"><p id="commentReviw">' + item[i].comments + '</p></div></div></div>');
                
                card.append(cardBody);
                $('.container-for-reviews').append(card);
                $('#showAll').show();
                updateStars(item[i].overallratings,ratingId );
                scroll();
            }
        }
    })
}
function showall(){
    $('.container-for-reviews').empty();
    var i = getParameterByName('Vehicleid');
    $('#showAll').hide();
    $('#showLess').show();
    var apiUrl2 = baseUrl +"VehicleDetails/GetReviewDetails?Vehicleid="+i;
    $('.loader-parent').show();
    $.ajax({
        url: apiUrl2,
        method: 'GET',
        dataType: 'json',
        success: function (response){ 
            $('.loader-parent').hide();
                    response.forEach(function (res,index) {
                    var card = $('<div class="card border-0 my-3" style="background-color: #f9f9f9;">');
                    var cardBody = $('<div class="card-body shadow-sm">');
                    var ratingId = 'ratings' + index;
                    cardBody.append('<div class="row py-2"><div class="col-md-12"><h5 id="BikeChoice">' + res.vehiclename + '</h5></div><div class="col-md-8"><div class="rating" data-rating="0" id="' + ratingId + '"><span class="star" data-value="1">&#9734;</span><span class="star" data-value="2">&#9734;</span><span class="star" data-value="3">&#9734;</span><span class="star" data-value="4">&#9734;</span><span class="star" data-value="5">&#9734;</span></div></div></div><div class="row"><div class="col-md-1 border-right text-center"><p style="color: #aaa;font-size: 12px;" class="m-0">1 day ago</p></div><div class="col-md-2 text-left"><p style="color: #aaa;font-size: 12px;" class="m-0" id="username">' + res.username + '</p></div></div><div class="row my-2"><div class="col-md-12"><p id="commentReviw">' + res.comments + '</p></div></div></div>');
                    
                    card.append(cardBody);
                    $('.container-for-reviews').append(card);
                    updateStars(res.overallratings,ratingId );
                    scroll()
                });
        }
    })
}
function updateStars(averageValue, ratingId) {
    const ratingDiv = document.getElementById(ratingId);
    const stars = ratingDiv.querySelectorAll('.star');
    stars.forEach(star => star.innerHTML = '&#9734;');

    const roundedValue = Math.round(parseFloat(averageValue));

    for (let i = 0; i < averageValue; i++) {
        stars[i].innerHTML = '&#9733;';
    }
}
function Varients(i, j) {
    location.href = "./details.html?Vehicleid=" + i + '&IsEv=' + j;
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
                
                <div class="col-md-6 mt-4 d-flex justify-content-center">
                      <img src="${vehicle.imagePath}" class="card-img-top img-fluid" alt="...">
                </div>
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
    $('html,body').scrollTop(0);
}

function allcolor() {
    var colorPopUp = new bootstrap.Modal(document.getElementById('colorPopUp'), {
        backdrop: 'static',
        keyboard: false
    })
    colorPopUp.show()
    var ismulticolor = sessionStorage.getItem('ismulticolor')
    var isSamePrize = sessionStorage.getItem('isSamePrize')
    var apiurl = baseUrl + "VehicleDetails/GetPrice?Vehicleid=" + allimgvechileid + '&IsmultiColor=' + ismulticolor + '&IsSamePrize=' + isSamePrize;
    $.ajax({
        url: apiurl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            $("#colormsg").empty()
            var $carousel = ""
            var $carousel = $("#colormsg");
            for (var i = 0; i < data.length; i++) {
                var card = data[i];
                var $card = `
                    <div class="row mx-0 text-center" style="height:80px;">
                            <div class="col border" id="vehicleColor" >
                              <div class="circle" style="background-color:${card.colour};"></div></div>
                            <div class="col border" id="vehicleName">${card.name}</div>
                            <div class="col border" id="vehiclePrice">${card.price || 'Same Price'}</div>
                    </div>`;

                $carousel.append($card);

            }
        }
    })
}

function fetchPincodeCache() {
    //const city = localStorage.getItem("SearchPincode");
    const city = $.cookie('SearchPincode');
    var apiurl = baseUrl + "Home/GetCity?Key=" + city;

    $.ajax({
        url: apiurl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            const matchingPincode = data.find(item => item.city.toLowerCase() === city.toLowerCase());
            displayAutocompleteResults(data);
            clickedCityId = data[0].pincodeId;
            GetAutoCit();
            if (matchingPincode) {
                const pincode = matchingPincode.pincode;
                document.getElementById('pincodeResult').textContent = ` ${pincode}`;
            } else {
                document.getElementById('pincodeResult').textContent = `${city} not found`;
            }
        }
    })
}


function ClearFilter() {
    $('#form12').val("");
    $('#form13').val("");
    $.removeCookie('SearchPincode');
    $('#pinCity').hide();
    $('#SearchShowrom').show();
    defaultcity();
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
            $("#showroom").val("");
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
