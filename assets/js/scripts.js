
// var baseUrl = 'https://dotnet.constient.com/CoreTutorial/api/';
// import { Input, initMDB } from "mdb-ui-kit";
// initMDB({ Input });
var baseUrl = 'https://dreambikesdigitalshowroom.com/DreamBikes_API/api/';
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

//   $(function() {
//     $('#nav-tab').responsiveTabs();
//   });
function addsImg() {
    var apiurl = baseUrl + "Home/UIOffer";
    $('.loader-parent').show();
    $.ajax({
        url: apiurl,
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            $('.loader-parent').hide();
            btnall = response.buttonText
            //   $("#bikeName").text(data[0].brand)
            // console.log(data[0].brand,"brand");
            $('.psbutton').text("wsw");
            $('.psbutton').text("sssdse");
            $('.psbutton').val(btnall);
            $('.psbutton').text(btnall);
            localStorage.setItem("buttontext", btnall);
            console.log(btnall);
            $('#addline1').text(response.dailyOfferLine1)
            $('#addline2').text(response.dailyOfferLine2)
            $('#addline3').text(response.dailyOfferLine3)
            $("#addimg").attr('src', response.dailyOfferImage)
            $('#addline17').text(response.dailyOfferLine1)
            $('#addline27').text(response.dailyOfferLine2)
            $('#addline37').text(response.dailyOfferLine3)
            $("#addimg7").attr('src', response.dailyOfferImage)
            $('#addline1sec').text(response.dailyOfferLine1)
            $('#addline2sec').text(response.dailyOfferLine2)
            $('#addline3sec').text(response.dailyOfferLine3)
            $("#addimgsec").attr('src', response.dailyOfferImage)
            $('#addline1three').text(response.dailyOfferLine1)
            $('#addline2three').text(response.dailyOfferLine2)
            $('#addline3three').text(response.dailyOfferLine3)
            $("#addimgthree").attr('src', response.dailyOfferImage)
            $('#addline1four').text(response.dailyOfferLine1)
            $('#addline2four').text(response.dailyOfferLine2)
            $('#addline3four').text(response.dailyOfferLine3)
            $("#addimgfour").attr('src', response.dailyOfferImage)
        },
        error: function (xhr, status, error) {
            $('.loader-parent').hide();
            console.error('Error fetching data:', error);
        }
    });
}

function frontpage() {
    $('#first').show();
    $('#second').hide();
    $('#three').hide();
    $('#four').hide();
}
function TNviewmore() {

    if (viewmore) {
        fetchBrands(1);
        viewmore = false;
        $('#toogleBtn').text('View More Brands')
    }
    else {
        fetchBrands(0);
        viewmore = true;
        $('#toogleBtn').text('View less Brands')
    }

}
function TNviewmore1() {
    eletric = true
    if (viewmore1) {
        fetchBrands(1);
        viewmore1 = false;
        $('#toogleBtn1').text('View More Brands')
    }
    else {
        fetchBrands(0);
        viewmore1 = true;
        $('#toogleBtn1').text('View less Brands')
    }

}
function fetchBrands(count) {
    var apiurl = baseUrl + "Home/GetBrands";
    $('.loader-parent').show();
    $.ajax({
        url: apiurl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            $('.loader-parent').hide();
            renderImagesForTable1(data.filter(x => x.pv === true), count);
            renderImagesForTable2(data.filter(x => x.ev === true),count);
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data:', error);
        }
    });
}
function fetchBrands1(count) {
    var apiurl = baseUrl + "Home/GetBrands";
    $('.loader-parent').show();
    $.ajax({
        url: apiurl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            $('.loader-parent').hide();
            renderImagesForTable2(data.filter(x => x.ev === true), count);
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data:', error);
        }
    });
}
// function renderImagesForTable1(data,count) {
//     console.log(data.length)
//     var imagesHTML = "";
//     $('#tablebody').empty();
//     let trcount = 0;
//     for (var i = 0; i < data.length; i++) {
//       if(count > 0)
//       {   if(i<10){
//               if (i % 5 === 0) {
//                   imagesHTML += '<tr>';
//               }
//               imagesHTML += '<td onclick="brandselect('+data[i].brandId+','+false+')"><img src="' + data[i].brandLogo + '" class="img-fluid" ><p class="text-center">"' + data[i].brandNames + '"</p></td>';
//               if (i % 5 === 4 || i === data.length - 1) {
//                   imagesHTML += '</tr>';
//               }
//       }
//       else{break;}
//   }
//       else
//       {
//           if (i % 5 === 0) {
//               imagesHTML += '<tr>';
//           }
//           imagesHTML += '<td onclick="brandselect('+data[i].brandId+','+false+')"><img src="' + data[i].brandLogo + '" class="img-fluid"><p class="text-center">"' + data[i].brandNames + '"</p></td>';
//           if (i % 5 === 4 || i === data.length - 1) {
//               imagesHTML += '</tr>';
//           }
//       }
//   }
//   $('#tablebody').append(imagesHTML);
// }
// function renderImagesForTable2(data,count) {
//     console.log(data.length)
//     var imagesHTML = "";
//     $('#tablebody1').empty();
//     let trcount = 0;
//     for (var i = 0; i < data.length; i++) {
//       if(count > 0)
//       {   if(i<10){
//               if (i % 5 === 0) {
//                   imagesHTML += '<tr>';
//               }
//               imagesHTML += '<td onclick="brandselect('+data[i].brandId+','+data[i].ev+')"><img src="' + data[i].brandLogo + '" class="img-fluid" ><p class="text-center">"' + data[i].brandNames + '"</p></td>';
//               if (i % 5 === 4 || i === data.length - 1) {
//                   imagesHTML += '</tr>';
//               }
//       }
//       else{break;}
//   }
//       else
//       {
//           if (i % 5 === 0) {
//               imagesHTML += '<tr>';
//           }
//           imagesHTML += '<td onclick="brandselect('+data[i].brandId+','+data[i].ev+','+data[i].brandNames+')"><img src="' + data[i].brandLogo + '" class="img-fluid"><p class="text-center">"' + data[i].brandNames + '"</p></td>';
//           if (i % 5 === 4 || i === data.length - 1) {
//               imagesHTML += '</tr>';
//           }
//       }
//   }
//   $('#tablebody1').append(imagesHTML);
// }
function renderImagesForTable1(data, count) {
    console.log(data.length);
    var imagesHTML = "";
    $('#tablebody').empty();
    let trcount = 0;
    for (var i = 0; i < data.length; i++) {
        if (count > 0) {
            if (i < 10) {
                if (i % 5 === 0) {
                    imagesHTML += '<tr>';
                }
                // Remove double quotes from brandNames using replace()
                var brandNameWithoutQuotes = data[i].brandNames.replace(/"/g, '');
                imagesHTML += '<td onclick="brandselect(' + data[i].brandId + ',' + false + ')"><div class="card shadow"><img src="' + data[i].brandLogo + '" class="img-fluid"></div></td>';
                if (i % 5 === 4 || i === data.length - 1) {
                    imagesHTML += '</tr>';
                }
            }
            else {
                break;
            }
        }
        else {
            if (i % 5 === 0) {
                imagesHTML += '<tr>';
            }
            // Remove double quotes from brandNames using replace()
            var brandNameWithoutQuotes = data[i].brandNames.replace(/"/g, '');
            imagesHTML += '<td onclick="brandselect(' + data[i].brandId + ',' + false + ')"><div class="card shadow"><img src="' + data[i].brandLogo + '" class="img-fluid"></div></td>';
            if (i % 5 === 4 || i === data.length - 1) {
                imagesHTML += '</tr>';
            }
        }
    }
    $('#tablebody').append(imagesHTML);
}

function renderImagesForTable2(data, count) {
    console.log(data.length);
    var imagesHTML = "";
    $('#tablebody1').empty();
    let trcount = 0;
    for (var i = 0; i < data.length; i++) {
        if (count > 0) {
            if (i < 10) {
                if (i % 5 === 0) {
                    imagesHTML += '<tr>';
                }
                // Remove double quotes from brandNames using replace()
                var brandNameWithoutQuotes = data[i].brandNames.replace(/"/g, '');
                imagesHTML += '<td onclick="brandselect(' + data[i].brandId + ',' + data[i].ev + ')"><div class="card shadow"><img src="' + data[i].brandLogo + '" class="img-fluid"></div></td>';
                if (i % 5 === 4 || i === data.length - 1) {
                    imagesHTML += '</tr>';
                }
            } else {
                break;
            }
        } else {
            if (i % 5 === 0) {
                imagesHTML += '<tr>';
            }
            // Remove double quotes from brandNames using replace()
            var brandNameWithoutQuotes = data[i].brandNames.replace(/"/g, '');
            imagesHTML += '<td onclick="brandselect(' + data[i].brandId + ',' + data[i].ev + ',' + data[i].brandNames + ')"><div class="card shadow"><img src="' + data[i].brandLogo + '" class="img-fluid"></div></td>';
            if (i % 5 === 4 || i === data.length - 1) {
                imagesHTML += '</tr>';
            }
        }
    }
    $('#tablebody1').append(imagesHTML);
}

// function brandselect(i,j){
//     var apiurl = baseUrl + "VehicleList/BrandList?Brandid="+i+'&IsEv='+j;
//     $('.loader-parent').show();
//     $.ajax({
//         url: apiurl,
//         method: 'GET',
//         dataType: 'json',
//         success: function(data) {
//           $('.loader-parent').hide();
//           $('#first').hide();
//           $('#second').show();
//         },
//         error: function(xhr, status, error) {
//           $('.loader-parent').hide();
//             console.error('Error fetching data:', error);
//         }
//     });
//     // location.href = "./bike.html";
//     console.log(i)
//     console.log(j)
// }
function brandselect(i, j, name) {
    // if(name=="TVS"&&j==)
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
                carouselContentsec += `
              <div class="item">
                  <div class="card mt-2 mb-4 bikeshadow" onclick="brandlist(${vehicle.vechileid},${vehicle.isEv})">
                      <div class="row">
                          <div class="col-md-3 col-12">
                              <img src="${vehicle.imagePath}" class="card-img-top img-fluid" alt="...">
                          </div>
                          <div class="col-md-6 col-12">
                              <div class="card-body px-md-2">
                                  <h5 class="card-title">${vehicle.vehiclename}</h5>
                                  <p class="card-text mt-3"> <img src='assets/images/engine-color.png' style='width:20px'>${vehicle.displacement} CC | ${vehicle.mileage} KMPL | <img src='assets/images/piston.png' style='width:20px'>${vehicle.kerbWeight} Kg|<img src='assets/images/mileage-color.png' style='width:20px'> ${vehicle.topSpeed} KMPH</p>
                                  <h5>₹ ${vehicle.exshowroomPrize} <span class="f-14">Ex showroom Price onwards<span></h5>
                                  <a href="#" class="btn btn-outline-secondary text-white purple1">${btext}</a>
                              </div>
                          </div>
                          <div class="col-md-3 col-12">
                              <div class="card-body ">
                                  <table class="table table-bordered">
                                      <tr>
                                          <td>Rating: ${vehicle.overallRatings ? vehicle.overallRatings : 'N/A'}</td>
                                         
                                      </tr>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>`;
            });

            $("#bikesecond").html(carouselContentsec);
        },
        error: function (xhr, status, error) {
            $('.loader-parent').hide();
            console.error('Error fetching data:', error);
        }
    });
}
function brandlist(i, j) {
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
$(document).ready(function () {

    fetchBrands(1);
});


$(document).ready(function () {
   
    addsImg();
    var apiEndpoint = 'Home/GetChoiceCategory';
    var apiUrl = baseUrl + apiEndpoint;

    // Make AJAX request to fetch data from the API
    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function (data) {
            // Filter items where famousBike is true
            var filteredData = data.filter(item => item.famousBike);
            var btext = localStorage.getItem("buttontext");
            // Process the filtered API response and generate carousel content
            var carouselItems2 = "";
            for (var i = 0; i < filteredData.length; i++) {
                carouselItems2 += `
          <div class="item">
            <div class="container mt-6" style="position: relative;" onclick="Racemodel(${filteredData[i].vehicleId})">
              <div class="card border-top-0">
                <div class="card-body shadow">
                  <div class="row mx-0">
                    <div class="col-md-12 text-center rounded-pill shadow border" style="position: absolute; top: -30%; height: 18rem; width: 18rem;">
                      <img class="rounded-circle image-container text-center" src="${filteredData[i].image}" alt="${filteredData[i].vehicleName}">
                    </div>
                  </div>
                  <div class="row mx-0" style="padding-top: 180px;">
                    <div class="col-md-12">
                      <h5 class="text-center mt-1">${filteredData[i].vehicleName}</h5>
                    </div>
                    <div class="col-md-12">
                      <h5 class="text-center mt-1">${filteredData[i].price ? '₹ ' + filteredData[i].price.toFixed(2) : 'Price not available'}</h5>
                    </div>
                    <div class="col-md-12 text-center">
                      <button  class="btn btn-outline-secondary text-white purple1 psbutton" >${btext}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
            }

            // Update the carousel with the new content
            $("#carousel2").html(carouselItems2);

            // Initialize the Owl Carousel
            $("#carousel2").owlCarousel({
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
        error: function (error) {
            console.error('Error fetching data from the API:', error);
        }
    });
});

function famousbikemodel(i) {
    var apiurl = baseUrl + "VehicleDetails/Details?Vehicleid=" + i;
    $('.loader-parent').show();
    $.ajax({
        url: apiurl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            $('.loader-parent').hide();
            var vehicleDetails = apiResponse.find(item => item.vechileid === i);
            brandidpin = vehicleDetails.brandid;
            allimgvechileid = vehicleDetails.vechileid;
            var ismulticolor = vehicleDetails.ismulticolor;
            var isSamePrize = vehicleDetails.isSamePrize;
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
            $('#rearBrake').text(vehicleDetails.rearBrake);
            $('#fuelCapacity').text(vehicleDetails.fuelTankCapacity);
            $('#exshowroomPrize').text(vehicleDetails.exshowroomPrize);
            var bikemodeid = data[0].bikeModelid
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
                            // var vehicleDetails = data.find(item => item.vechileid === i);

                            $('#first').hide();
                            $('#second').hide();
                            $('#three').show();
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
                                    <button class="btn btn-outline-secondary text-white purple1">Get Diwali Offers</button>
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
                            // Bind values to respective HTML elements

                            $('.loader-parent').hide();
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




$(document).ready(function () {
    var apiEndpoint = 'Home/GetChoiceCategory';
    var apiUrl = baseUrl + apiEndpoint;

    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function (data) {
            // Filter items where raceModels is true
            var filteredData = data.filter(item => item.raceModels);
            var btext = localStorage.getItem("buttontext");
            // Process the filtered API response and generate carousel content
            var carouselContent = "";
            for (var i = 0; i < filteredData.length; i++) {
                carouselContent += `
          <div class="item">
            <div class="container mt-6" style="position: relative;" onclick="Racemodel(${filteredData[i].vehicleId})">
              <div class="card border-top-0">
                <div class="card-body shadow">
                  <div class="row mx-0">
                    <div class="col-md-12 text-center rounded-pill shadow border" style="position: absolute; top: -30%; height: 18rem; width: 18rem;">
                      <img class="rounded-circle image-container text-center" src="${filteredData[i].image}" alt="${filteredData[i].vehicleName}">
                    </div>
                  </div>
                  <div class="row mx-0" style="padding-top: 180px;">
                    <div class="col-md-12">
                      <h5 class="text-center mt-1">${filteredData[i].vehicleName}</h5>
                    </div>
                    <div class="col-md-12">
                      <h5 class="text-center mt-1">${filteredData[i].price ? '₹ ' + filteredData[i].price.toFixed(2) : 'Price not available'}</h5>
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
            $("#myCarousel2").html(carouselContent);

            // Initialize the Owl Carousel
            $("#myCarousel2").owlCarousel({
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
        error: function (error) {
            console.error('Error fetching data from the API:', error);
        }
    });
});

function Racemodel(i) {
    var apiurl = baseUrl + "VehicleDetails/Details?Vehicleid=" + i;
    $('.loader-parent').show();
    $.ajax({
        url: apiurl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            $('.loader-parent').hide();
            var vehicleDetails = data.find(item => item.vechileid === i);
            var bikemodeid = data[0].bikeModelid
            brandidpin = vehicleDetails.brandid;
            allimgvechileid = vehicleDetails.vechileid;
            var ismulticolor = vehicleDetails.ismulticolor;
            var isSamePrize = vehicleDetails.isSamePrize;
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
            $('#rearBrake').text(vehicleDetails.rearBrake);
            $('#fuelCapacity').text(vehicleDetails.fuelTankCapacity);
            $('#exshowroomPrize').text(vehicleDetails.exshowroomPrize);
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

            $('.loader-parent').hide();
            $.ajax({
                url: apiurl,
                method: 'GET',
                dataType: 'json',
                success: function (img) {
                    // var vehicleImages = data.find(item => item.vechileid === i);
                    // var imageUrls = data.map(item => item.imagePath);
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
                            var vehicleDetails1 = data.find(item => item.vechileid === i);

                            $('#first').hide();
                            $('#second').hide();
                            $('#three').show();
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
                                    <button class="btn btn-outline-secondary text-white purple1">Get Diwali Offers</button>
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
                            // Bind values to respective HTML elements


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

$(document).ready(function () {
    // var baseUrl = 'https://dotnet.constient.com/CoreTutorial/api/';
    var apiEndpoint = 'Home/GetChoiceCategory';
    var apiUrl = baseUrl + apiEndpoint;

    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function (data) {
            // Filter items where famousScooty is true
            var filteredData = data.filter(item => item.famousScooty);
            var btext = localStorage.getItem("buttontext");
            // Process the filtered API response and generate carousel content
            var carouselContent = "";
            for (var i = 0; i < filteredData.length; i++) {
                carouselContent += `
          <div class="item">
            <div class="container mt-6" style="position: relative;" onclick="Scootymodel(${filteredData[i].vehicleId})">
              <div class="card border-top-0">
                <div class="card-body shadow">
                  <div class="row mx-0">
                    <div class="col-md-12 text-center rounded-pill shadow border" style="position: absolute; top: -30%; height: 18rem; width: 18rem;">
                      <img class="rounded-circle text-center image-container" src="${filteredData[i].image}" alt="${filteredData[i].vehicleName}">
                    </div>
                  </div>
                  <div class="row mx-0" style="padding-top: 180px;">
                    <div class="col-md-12">
                      <h5 class="text-center mt-1">${filteredData[i].vehicleName}</h5>
                    </div>
                    <div class="col-md-12">
                      <h5 class="text-center mt-1">${filteredData[i].price ? '₹ ' + filteredData[i].price.toFixed(2) : 'Price not available'}</h5>
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
            $("#myCarousel3").html(carouselContent);

            // Initialize the Owl Carousel
            $("#myCarousel3").owlCarousel({
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
        error: function (error) {
            console.error('Error fetching data from the API:', error);
        }
    });
});
$(document).ready(function () {
    // var baseUrl = 'https://dotnet.constient.com/CoreTutorial/api/';
    var apiEndpoint = 'Home/GetChoiceCategory';
    var apiUrl = baseUrl + apiEndpoint;

    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function (data) {
            var filteredData = data.filter(item => item.evModels);
            var btext = localStorage.getItem("buttontext");
            var carouselContent = "";
            for (var i = 0; i < filteredData.length; i++) {
                carouselContent += `
          <div class="item">
            <div class="container mt-6" style="position: relative;" onclick="Scootymodel(${filteredData[i].vehicleId})">
              <div class="card border-top-0">
                <div class="card-body shadow">
                  <div class="row mx-0">
                    <div class="col-md-12 text-center rounded-pill shadow border" style="position: absolute; top: -30%; height: 18rem; width: 18rem;">
                      <img class="rounded-circle text-center image-container" src="${filteredData[i].image}" alt="${filteredData[i].vehicleName}">
                    </div>
                  </div>
                  <div class="row mx-0" style="padding-top: 180px;">
                    <div class="col-md-12">
                      <h5 class="text-center mt-1">${filteredData[i].vehicleName}</h5>
                    </div>
                    <div class="col-md-12">
                      <h5 class="text-center mt-1">${filteredData[i].price ? '₹ ' + filteredData[i].price.toFixed(2) : 'Price not available'}</h5>
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
            $("#evModals").html(carouselContent);

            // Initialize the Owl Carousel
            $("#evModals").owlCarousel({
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
        error: function (error) {
            console.error('Error fetching data from the API:', error);
        }
    });
});
function Scootymodel(i) {
    var apiurl = baseUrl + "VehicleDetails/Details?Vehicleid=" + i;
    $('.loader-parent').show();
    $.ajax({
        url: apiurl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            $('.loader-parent').hide();
            var vehicleDetails = data.find(item => item.vechileid === i);
            var bikemodeid = data[0].bikeModelid
            brandidpin = vehicleDetails.brandid;
            allimgvechileid = vehicleDetails.vechileid;
            var ismulticolor = vehicleDetails.ismulticolor;
            var isSamePrize = vehicleDetails.isSamePrize;
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
            $('#rearBrake').text(vehicleDetails.rearBrake);
            $('#exshowroomPrize').text(vehicleDetails.exshowroomPrize);
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
            <div class="container mt-6" style="position: relative;">
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
                      <button class="btn btn-outline-secondary text-white purple1">Get Diwali Offers</button>
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


$(document).ready(function () {
    // var baseUrl = 'https://dotnet.constient.com/CoreTutorial/api/';
    var apiEndpoint = 'Home/GetChoiceCategory';
    var apiUrl = baseUrl + apiEndpoint;
    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function (data) {
            // Filter items where mileageModels is true
            var filteredData = data.filter(item => item.mileageModels);
            var btext = localStorage.getItem("buttontext");
            // Process the filtered API response and generate carousel content
            var carouselItems = "";
            for (var i = 0; i < filteredData.length; i++) {
                carouselItems += `
          <div class="item">
            <div class="container mt-6" style="position: relative;" onclick="mileagemodel(${filteredData[i].vehicleId})">
              <div class="card border-top-0">
                <div class="card-body shadow">
                  <div class="row mx-0">
                    <div class="col-md-12 text-center rounded-pill shadow border" style="position: absolute; top: -30%; height: 18rem; width: 18rem;">
                      <img class="rounded-circle image-container text-center" src="${filteredData[i].image}" alt="${filteredData[i].vehicleName}">
                    </div>
                  </div>
                  <div class="row mx-0" style="padding-top: 180px;">
                    <div class="col-md-12">
                      <p class="mb-0">${filteredData[i].vehicleName}</p>
                    </div>
                    <div class="col-md-10">
                      <p class="mb-0">${filteredData[i].price ? '₹ ' + filteredData[i].price.toFixed(2) : 'Price not available'}</p>
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
            $("#myCarousel4").html(carouselItems);

            // Initialize the Owl Carousel
            $("#myCarousel4").owlCarousel({
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
        error: function (error) {
            console.error('Error fetching data from the API:', error);
        }
    });
    // addsImg();
});
function mileagemodel(i) {
    var apiurl = baseUrl + "VehicleDetails/Details?Vehicleid=" + i;
    $('.loader-parent').show();
    $.ajax({
        url: apiurl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            $('.loader-parent').hide();
            var vehicleDetails = data.find(item => item.vechileid === i);
            var bikemodeid = data[0].bikeModelid;
            brandidpin = vehicleDetails.brandid;
            allimgvechileid = vehicleDetails.vechileid;
            var ismulticolor = vehicleDetails.ismulticolor;
            var isSamePrize = vehicleDetails.isSamePrize;
            $('#vehicleName').text(vehicleDetails.vehiclename);
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
            $('#rearBrake').text(vehicleDetails.rearBrake);
            $('#exshowroomPrize').text(vehicleDetails.exshowroomPrize);
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
            <div class="container mt-6" style="position: relative;">
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
                      <button class="btn btn-outline-secondary text-white purple1">Get Diwali Offers</button>
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
                    defaultcity();
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
}

// $(document).ready(function() {

//     var imageUrls = [
//         './assets/images/image11.webp',
//         './assets/images/image11.webp',
//         './assets/images/image11.webp',
//         './assets/images/image11.webp',

//     ];


//     var $carousel = $("#image-carousel-1");

//     for (var i = 0; i < imageUrls.length; i++) {
//         var imageUrl = imageUrls[i];
//         var $image = $("<img>").attr("src", imageUrl).attr("width", "300").attr("height", "300");
//         $carousel.append($image);
//     }
//     $carousel.owlCarousel({
//         items: 3,
//         loop: false,
//         slideSpeed: 300,
//         paginationSpeed: 600,
//         nav: true,
//         dots: false,
//         autoWidth: false,
//         margin: 30,
//         startPosition: 1,
//         center: true,
//         responsiveClass: true,
//         navText: ["<img  src='assets/images/leftarrowNew.png'>", "<img src='assets/images/leftarrowNew.png'>"],
//         responsive: {
//             0: {
//                 items: 1,
//             },
//             600: {
//                 items: 1,
//             },
//             1000: {
//                 items: 1,
//             },
//             1440: {
//                 items: 1,
//             }
//         }
//     });
// });

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

function validateLogin() {
    var mobileNumber = document.getElementById('mobileNumber').value;
    var password = document.getElementById('password').value;
    if (!/^\d{10}$/.test(mobileNumber)) {
        alert('Invalid mobile number. Please enter a 10-digit numeric value.');
        return;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }



    var apiurl = baseUrl + "Home/PostLogin";
    var sendData = {
        Mobile: mobileNumber,
        Password: password
    }
    $('.loader-parent').show();
    sendData = JSON.stringify(sendData);
    $.ajax({
        url: apiurl,
        type: 'POST',
        data: sendData,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
            $('.loader-parent').hide();
            if (response.isSuccess) {

                location.href = "./index.html";
            }
        }
    })
}
function validateSignup() {
    var name = document.getElementById('name').value;
    var mobileNumber1 = document.getElementById('mobileNumber1').value;
    var email = document.getElementById('email').value;
    var password1 = document.getElementById('password1').value;
    var nameRegex = /^[a-zA-Z\-]+$/;
    if (!nameRegex.test(name)) {
        // alert('Invalid user name.');
        $('#alertModal').modal();
        $('#alertMsg').html('Invalid user name.');
        return;
    }
    if (!/^\d{10}$/.test(mobileNumber1)) {
        alert('Invalid mobile number. Please enter a 10-digit numeric value.');
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format');
        return;
    }
    if (password1.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }


    var apiurl = baseUrl + "Home/PostSignUp";
    $('.loader-parent').show();
    var sendData = {
        Name: name,
        Mobile: mobileNumber1,
        Email: email,
        Password: password1
    }

    sendData = JSON.stringify(sendData);
    $.ajax({
        url: apiurl,
        type: 'POST',
        data: sendData,
        contentType: "application/json",
        dataType: "json",

        success: function (response) {
            $('.loader-parent').hide();
            if (response.isSuccess) {
                toggleForm();
            }
        }
    })
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

function defaultcity()
{
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
function displayAutocompleteResults(results) {
    const autocompleteResults = document.getElementById('autocompleteResults');
    autocompleteResults.innerHTML = '';

    if (results.length === 0) {
        const noResults = document.createElement('div');
        noResults.textContent = 'No results found';
        autocompleteResults.appendChild(noResults);
        return;
    }

    results.forEach(result => {
        const option = document.createElement('div');
        option.classList.add('autocomplete-option');
        option.textContent = `${result.city} - ${result.pincode}`;
        option.addEventListener('click', function () {
            document.getElementById('form12').value = result.city;
            document.getElementById('pincodeResult').textContent = result.pincode;
            clickedCityId = result.pincodeId;
            document.getElementById('pinCity').innerHTML = `<b>${result.city}</b>`;
            console.log(document.getElementById("pinCity"), "pincode and city");
            console.log("Clicked city ID:", clickedCityId);
            if (clickedCityId && brandidpin) {
                var apiurl = baseUrl + "Home/GetShowRoom?PincodeId=" + clickedCityId + '&BrandId=' + brandidpin
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
            $('#exampleModal').modal('hide');
            autocompleteResults.innerHTML = '';
        });
        autocompleteResults.appendChild(option);
    });
}
document.addEventListener("click", function (e) {
    const autocompleteResults = document.getElementById('autocompleteResults');
    if (!autocompleteResults) {
        return;
    }

    if (e.target.id !== 'form12' && e.target.id !== 'autocompleteResults') {
        autocompleteResults.innerHTML = '';
    }
});

const pincodeDisplay = document.createElement('div');
pincodeDisplay.id = 'pincodeResult';
document.body.appendChild(pincodeDisplay);

function backstage() {
    $('#first').hide();
    $('#second').hide();
    $('#three').show();
    $('#four').hide();
}

function searchCity() {
    const searchCity = document.getElementById('form1').value;
    var apiurl = baseUrl + "VehicleList/SearchVehicle?keywords=" + searchCity;
    $.ajax({
        url: apiurl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data, "data of search city")
            const matchingCity = data.find(item => item.vehiclename.toLowerCase() === searchCity.toLowerCase());
            displayAutocompleteResults1(data);

        }
    })
}

function displayAutocompleteResults1(results) {
    const autocompleteResults1 = document.getElementById('autocompleteResults1');
    autocompleteResults1.innerHTML = '';

    if (results.length === 0) {
        const noResults1 = document.createElement('div');
        noResults1.textContent = 'No results found';
        autocompleteResults1.appendChild(noResults1);
        return;
    }

    results.forEach(result => {
        const option1 = document.createElement('div');
        option1.classList.add('autocomplete-option');
        option1.textContent = `${result.vehiclename}`;
        option1.addEventListener('click', function () {
            document.getElementById('form1').value = result.vehiclename;
            clickedVehicleId = result.vechileid;
            console.log("Clicked vehicle ID:", clickedVehicleId);
            if (clickedVehicleId) {
                Racemodel(clickedVehicleId)
            }
            autocompleteResults1.innerHTML = '';
        });
        autocompleteResults1.appendChild(option1);
    });
}

document.addEventListener("click", function (e) {
    const autocompleteResults2 = document.getElementById('autocompleteResults1');
    if (!autocompleteResults2) {
        return;
    }

    if (e.target.id !== 'form1' && e.target.id !== 'autocompleteResults1') {
        autocompleteResults2.innerHTML = '';
    }
});