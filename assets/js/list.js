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

    window.onpopstate = function (event) {
        // Handle the back button press here
        // For example, you can navigate back using window.history.back()
        window.history.back();
    };

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
                              <img src="${vehicle.imagePath}" class="card-img-top img-fluid" alt="..." style="padding-top: 37px;">
                          </div>
                          <div class="col-md-6 col-12">
                              <div class="card-body px-md-2">
                                  <h5 class="card-title" style="color:darkblue" class="col-md-12">${vehicle.vehiclename}</h5>
                                  <p class="card-text mt-3 col-md-12"> <img src='assets/images/battery.png' style='width:13px'> ${vehicle.batteryType} | <img src='assets/images/battery-charging.png' style='width:24px'> ${vehicle.chargingTime} | <img src='assets/images/kerb-weight..jpg' style='width:20px'> ${vehicle.kerbWeight} Kg | <img src='assets/images/mileage-color.png' style='width:20px'> ${vehicle.topSpeed} KMPH</p>
                                  <h4 class="col-md-12"> <b>₹ ${vehicle.exshowroomPrize}</b> <span class="f-14">Ex showroom Price onwards<span></h4>
                                  <a  class="btn btn-outline-secondary text-white purple1 col-md-6" onclick="brandlist(${vehicle.vehicleId},${vehicle.isEv})">${btext}</a>
                              </div>
                          </div>
                          <div class="col-md-3 col-12">
                              <div class="card-body ">
                                  <table class="table table-bordered">
                                      <tr>
                                          <td>Rating:  <span style="display: inline-block; vertical-align: middle;"><img src="./assets/images/star.png" alt="" style="width: 50px;height: 50px;"> </span>  <span style="display: inline-block; vertical-align: middle;">${vehicle.overallRatings ? vehicle.overallRatings : 'N/A'}/5 </span></td>
                                         
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
                              <img src="${vehicle.imagePath}" class="card-img-top img-fluid" alt="..." style="padding-top: 37px;">
                          </div>
                          <div class="col-md-6 col-12">
                              <div class="card-body px-md-2">
                                  <h5 class="card-title" style="color:darkblue" class="col-md-12">${vehicle.vehiclename}</h5>
                                  <p class="card-text mt-3 col-md-12"> <img src='assets/images/engine-color.png' style='width:20px'> ${vehicle.displacement} CC | <img src='assets/images/milage-icon.png' style='width:20px'> ${vehicle.mileage} KMPL | <img src='assets/images/kerb-weight..jpg' style='width:20px'> ${vehicle.kerbWeight} Kg | <img src='assets/images/mileage-color.png' style='width:20px'> ${vehicle.topSpeed} KMPH</p>
                                  <h4 class="col-md-12"> <b>₹ ${vehicle.exshowroomPrize}</b> <span class="f-14">Ex showroom Price onwards<span></h4>
                                  <a  class="btn btn-outline-secondary text-white purple1 col-md-6" onclick="brandlist(${vehicle.vehicleId},${vehicle.isEv})">${btext}</a>
                              </div>
                          </div>
                          <div class="col-md-3 col-12">
                              <div class="card-body ">
                                  <table class="table table-bordered">
                                      <tr>
                                          <td>Rating:  <span style="display: inline-block; vertical-align: middle;"><img src="./assets/images/star.png" alt="" style="width: 50px;height: 50px;"> </span>  <span style="display: inline-block; vertical-align: middle;">${vehicle.overallRatings ? vehicle.overallRatings : 'N/A'}/5 </span></td>
                                         
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
}

window.addEventListener('pageshow', function (event) {
    // Check if the persisted property is true (indicating page navigation from cache)
    if (event.persisted) {
        // Reload the page to ensure full refresh
        window.location.reload();
    }
});

