

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

function frontpage() {
    $('#first').show();
    $('#second').hide();
    $('#three').hide();
    $('#four').hide();
}

function loginpage() {

    location.href = "./index.html";
    $('#first').show();
    $('#second').hide();
    $('#three').hide();
    $('#four').hide();
}

function TNviewmore() {

    if (viewmore) {
        fetchBrands(1,1);
        viewmore = false;
        $('#toogleBtn').text('View More Brands')
    }
    else {
        fetchBrands(0,1);
        viewmore = true;
        $('#toogleBtn').text('View less Brands')
    }

}
function TNviewmore1() {
    eletric = true
    if (viewmore1) {
        fetchBrands(1,0);
        viewmore1 = false;
        $('#toogleBtn1').text('View More Brands')
    }
    else {
        fetchBrands(0,0);
        viewmore1 = true;
        $('#toogleBtn1').text('View less Brands')
    }

}
function fetchBrands(count,ispv) {
    var apiurl = baseUrl + "Home/GetBrands";
    $('.loader-parent').show();
    $.ajax({
        url: apiurl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            $('.loader-parent').hide();
            if (ispv == 1) {
                renderImagesForTable1(data.filter(x => x.pv === true), count);
            }
            else if (ispv == 0) {
                renderImagesForTable2(data.filter(x => x.ev === true), count);
            }
            else {
                renderImagesForTable1(data.filter(x => x.pv === true), count);
                renderImagesForTable2(data.filter(x => x.ev === true), count);
            }
          
           
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data:', error);
        }
    });
}


function carouselBind() {
    var apiurl = baseUrl + "Home/PictureBanner";
    $('.loader-parent').show();
    $.ajax({
        url: apiurl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            $('.loader-parent').hide();
            $('#caroselimg1').attr("src", data[0].bannerURL)
            $('#caroselimg2').attr("src", data[1].bannerURL)
            $('#caroselimg3').attr("src", data[2].bannerURL)
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
    location.href = "./list.html?Brandid=" + i + "&IsEv=" + j;
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
                                  <h5 class="card-title" style="color:darkblue" class="col-md-12">${vehicle.vehiclename}</h5>
                                  <p class="card-text mt-3 col-md-12"> <img src='assets/images/engine-color.png' style='width:20px'> ${vehicle.displacement} CC | <img src='assets/images/milage-icon.png' style='width:20px'> ${vehicle.mileage} KMPL | <img src='assets/images/piston.png' style='width:20px'> ${vehicle.kerbWeight} Kg | <img src='assets/images/mileage-color.png' style='width:20px'> ${vehicle.topSpeed} KMPH</p>
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
    carouselBind();
    fetchBrands(1,2);
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
            <div class="container mt-6" style="position: relative;" onclick="Scootyevmodel(${filteredData[i].vehicleId})">
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

    location.href = "./details.html?Vehicleid=" + i + '&IsEv=false';
}

function Scootyevmodel(i) {

    location.href = "./details.html?Vehicleid=" + i + '&IsEv=true';
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
                      <p class="mb-0 text-center mt-2">${filteredData[i].vehicleName}</p>
                    </div>
                    <div class="col-md-12">
                      <p class="mb-2 text-center mt-2">${filteredData[i].price ? '₹ ' + filteredData[i].price.toFixed(2) : 'Price not available'}</p>
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

    location.href = "./details.html?Vehicleid=" + i + '&IsEv=false';
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





function backstage() {
    $('#first').hide();
    $('#second').hide();
    $('#three').show();
    $('#four').hide();
}

