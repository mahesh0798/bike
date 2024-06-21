// import { carouselBind } from './scripts.js'
var selectedBrandId=""
var selectedEv='';
var isEV =false;
var typeId="";
var brandId ="";
var vechileid = '';
var vehiclename ='';
var DistrictBox1id = "";
var Districtdistirct ="";
let brands = [];
var ServiceCentre1id ="";
var ServiceCentredistirct ="";
var pickup=false;
var Eservice=false
var ModelBox1 = $('#Modelselect');
var VehicleBox1 = $('#Vehicleselect');
var DistrictBox1 = $('#Districtselect');
var ServiceCentreselectBox1 = $('#ServiceCentreselect');
var typeVechile="";
const pattern = /^[6-9]\d{9}$/;
$('input[name="example-radio"]').change(function() {
    typeVechile = $('input[name="example-radio"]:checked').val();
 console.log(typeVechile);
})
function fetchBrands() {
    var apiurl = baseUrl + "Home/GetBrands";
    $.ajax({
        url: apiurl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            if (Array.isArray(data)) {
                brands = data; // Store the fetched brands
                populateBrandSelect(data);
                filterBrands('Petrol'); // Populate the initial select box
            } else {
                console.error('API response is not an array.');
            }
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data from the API:', status, error);
        }
    });
} 

function populateBrandSelect(data) {
    var BrandBox1 = $('#Brandselect');
    BrandBox1.empty();
    BrandBox1.append($('<option>', {
        value: '',
        text: 'Select Brand',
        selected: true
    }));

    $.each(data, function (index, option) {
        BrandBox1.append($('<option>', {
            value: option.brandId,
            text: option.brandNames,
            'data-ev': option.ev
        }));
    });
}

function filterBrands(fuelType) {
    var BrandBox1 = $('#Brandselect');
    BrandBox1.empty();
    BrandBox1.append($('<option>', {
        value: '',
        text: 'Select Brand',
        selected: true
    }));

    const filteredBrands = brands.filter(brand => fuelType === 'Petrol' ? brand.pv : brand.ev);

    filteredBrands.forEach(brand => {
        BrandBox1.append($('<option>', {
            value: brand.brandId,
            text: brand.brandNames,
            'data-ev': brand.ev
        }));
    });

    BrandBox1.off('change').on('change', debounce(function() {
        var selectedOption = $(this).find(':selected');
         selectedBrandId = selectedOption.val();
         selectedEv = selectedOption.data('ev');
        if ($('#Petrol').is(':checked')) {
            isEV=false;
        } else {
            isEV=true;
        }
        console.log(isEV);
        console.log('Selected brand ID:', selectedBrandId);
        console.log('Selected EV:', selectedEv);
        fetchVehicleTypes(selectedBrandId, isEV);
    }, 300));
}

function fetchVehicleTypes(brandId, isEv) {
    var apiUrlBrand = baseUrl + "Service/GetVehicleType?Brandid=" + brandId + '&IsEv=' + isEv;
    var ModelBox1 = $('#Modelselect');
    ModelBox1.empty();
    ModelBox1.append($('<option>', {
        value: '',
        text: 'Select Model',
        selected: true
    }));

    $.ajax({
        url: apiUrlBrand,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            if (Array.isArray(data)) {
                var uniqueData = data.filter((value, index, self) => 
                    index === self.findIndex((t) => (
                        t.typeId === value.typeId && t.vehicleType === value.vehicleType
                    ))
                );
                $.each(uniqueData, function (index, option) {
                    ModelBox1.append($('<option>', {
                        value: option.typeId,
                        text: option.vehicleType
                    }));
                });

                ModelBox1.off('change').on('change', debounce(function() {
                    var selectedOption1 = $(this).find(':selected');
                    typeId = selectedOption1.val();
                    fetchVehicleNames(brandId, typeId);
                }, 300));
            } else {
                console.error('API response is not an array.');
            }
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data from the API:', status, error);
        }
    });
}

function fetchVehicleNames(brandId, typeId) {
    var apiUrlVehicle = baseUrl + "Service/GetVehicleName?Brandid=" + brandId + '&typeid=' + typeId;
    var VehicleBox1 = $('#Vehicleselect');
    VehicleBox1.empty();
    VehicleBox1.append($('<option>', {
        value: '',
        text: 'Select Vehicle',
        selected: true
    }));

    $.ajax({
        url: apiUrlVehicle,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            if (Array.isArray(data)) {
                var uniqueData = data.filter((value, index, self) => 
                    index === self.findIndex((t) => (
                        t.vechileid === value.vechileid && t.vehiclename === value.vehiclename
                    ))
                );
                $.each(uniqueData, function (index, option) {
                    VehicleBox1.append($('<option>', {
                        value: option.vechileid,
                        text: option.vehiclename
                    }));
                });

                VehicleBox1.off('change').on('change', function() {
                    var selectedOption2 = $(this).find(':selected');
                    vechileid = selectedOption2.val();
                    vehiclename = selectedOption2.text();
                    console.log('Selected vehicle ID:', vechileid);
                    console.log('Selected vehicle name:', vehiclename);
                });
            } else {
                console.error('API response is not an array.');
            }
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data from the API:', status, error);
        }
    });
}

function debounce(func, wait) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.apply(context, args);
        }, wait);
    };
}
$(document).ready(function () {
    carouselBind();
    fetchBrands();
    var apiurl = baseUrl + "Service/GetDistrict ";
    var DistrictBox1 = $('#Districtselect');
    var BikeModelBox = $('#Vehicleselect');
        DistrictBox1.empty();
        DistrictBox1.append($('<option>', {
            value: '',
            text: 'Select District',
            selected: true
        }));
        $.ajax({
            url: apiurl,
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                if (Array.isArray(data)) {
                    $.each(data, function (index, option) {
                        DistrictBox1.append($('<option>', {
                            value: option.did,
                            text: option.distirct,
                        }));
                    });
                } else {
                    console.error('API response is not an array.');
                }
            },
            error: function (xhr, status, error) {
                console.error('Error fetching data from the API:', status, error);
            }
        }); 
        DistrictBox1.change(function() {
            var selectedOption2 = $(this).find(':selected');
            DistrictBox1id = selectedOption2.val();
            Districtdistirct=selectedOption2.text();
            var apiUrlVehicle = baseUrl + "Service/GetShowroomdetailsbyDist?Brandid="+ selectedBrandId + '&Distid='+DistrictBox1id;
            ServiceCentreselectBox1 = $('#ServiceCentreselect');
            ServiceCentreselectBox1.empty();
            ServiceCentreselectBox1.append($('<option>', {
                value: '',
                text: 'Select Nearest Service Centre',
                selected: true
            }));
            $.ajax({
                url: apiUrlVehicle,
                method: 'GET',
                dataType: 'json',
                success: function (data) {
                    if (Array.isArray(data)) {
                        $.each(data, function (index, option) {
                            ServiceCentreselectBox1.append($('<option>', {
                                value: option.showRoomId,
                                text: option.showroomfulldetail
                            }));
                        });
                    } else {
                        console.error('API response is not an array.');
                    }
                },
                error: function (xhr, status, error) {
                    console.error('Error fetching data from the API:', status, error);
                }
            });
            ServiceCentreselectBox1.change(function() {
                var selectedOption2 = $(this).find(':selected');
                ServiceCentre1id = selectedOption2.val();
                ServiceCentredistirct=selectedOption2.text();
            })
        });


    
        
});

function GetletwRoomDis() {

        if ($('#Districtselect').val() > 0) {
            var selectedOption2 = $('#Districtselect').find(':selected');
            DistrictBox1id = selectedOption2.val();
            Districtdistirct = selectedOption2.text();
            var apiUrlVehicle = baseUrl + "Service/GetShowroomdetailsbyDist?Brandid=" + selectedBrandId + '&Distid=' + DistrictBox1id;
            ServiceCentreselectBox1 = $('#ServiceCentreselect');
            ServiceCentreselectBox1.empty();
            ServiceCentreselectBox1.append($('<option>', {
                value: '',
                text: 'Select Nearest Service Centre',
                selected: true
            }));
            $.ajax({
                url: apiUrlVehicle,
                method: 'GET',
                dataType: 'json',
                success: function (data) {
                    if (Array.isArray(data)) {
                        $.each(data, function (index, option) {
                            ServiceCentreselectBox1.append($('<option>', {
                                value: option.showRoomId,
                                text: option.showroomfulldetail
                            }));
                        });
                    } else {
                        console.error('API response is not an array.');
                    }
                },
                error: function (xhr, status, error) {
                    console.error('Error fetching data from the API:', status, error);
                }
            });
            ServiceCentreselectBox1.change(function () {
                var selectedOption2 = $(this).find(':selected');
                ServiceCentre1id = selectedOption2.val();
                ServiceCentredistirct = selectedOption2.text();
            })
        }

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
            $('#caroselimg1').attr("src", data[2].bannerURL)
            // $('#caroselimg2').attr("src", data[1].bannerURL)
            // $('#caroselimg3').attr("src", data[2].bannerURL)
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data:', error);
        }
    });
}
function frontpage() {
    location.href = "./index.html";
}
$(function () {
    var dtToday = new Date();
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if (month < 10) month = '0' + month.toString();
    if (day < 10) day = '0' + day.toString();

    var minDate = new Date(year, dtToday.getMonth(), day);

    dtToday.setDate(dtToday.getDate() + 15);
    var maxDate = new Date(dtToday.getFullYear(), dtToday.getMonth(), dtToday.getDate());

    $('#serviceDate').datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: minDate,
        maxDate: maxDate,
        beforeShowDay: function(date) {
            var dayOfWeek = date.getUTCDay();
            var today = new Date();
            today.setHours(0, 0, 0, 0);  // Set to midnight to avoid time comparison issues

            if (date.getTime() === today.getTime()) {
                return [false, "", "Today is disabled"];
            }

            return [(dayOfWeek != 6)];
        },
        onSelect: function(dateText, inst) {
            var inputDate = new Date(dateText);
            var dayOfWeek = inputDate.getUTCDay();
            if (dayOfWeek === 0) {
                $('#toastMessage').text("*Sundays are not allowed. Please select another day.");
                $('#toastMessage').removeClass('hide').addClass('show');
                setTimeout(function () {
                    $('#toastMessage').removeClass('show').addClass('hide');
                }, 3000);
                this.value = '';
                // $(this).datepicker('setDate', null);
            }
        }
    });
});
$(document).ready(function(){
  
    if ($('#pickup').is(':checked')) {
        pickup=true;
    } else {
        pickup=false;
    }
    $('#pickup').change(function() {
        if ($(this).is(':checked')) {
            pickup=true;
        } else {
            pickup=false;
        }
    });
    if ($('#Eservice').is(':checked')) {
        Eservice=true;
    } else {
        Eservice=false;
    }
    $('#Eservice').change(function() {
        if ($(this).is(':checked')) {
            Eservice=true;
        } else {
            Eservice=false;
        }
    });
});
function SubmitApp() {
    typeId="";
    vechileid=""; 
    vehiclename=""; 
    vechileid=""; 
    DistrictBox1id="";
    Districtselect="";
    ServiceCentre1id =""; 
    ServiceCentreselectBox1="";
    ddate=""; 
    ServicePack=""; 
    Eservice=false;
    customername=""; 
    cusMob ="";
    pickup=false;
    $('#Eservice').prop('checked', false);
    $('#pickup').prop('checked', false);
    $('#terms').prop('checked', false);
    $('#Districtselect').val('')
    $('#Brandselect').val('')
    $('#Modelselect').val('')
    $('#Vehicleselect').val('')
    $('#serviceDate').val('')
    $('#ServiceCentreselect').val('');
    $('#ServicePackselect').val('')
    $('#nameService').val('')
    $('#mob').val('')
    $('#nameApp').val('')
    $('#dateapp').val('')
    $('#Appid').val('')
    $('#toastMessage').text("Service Appointment Created Successfully.😊 Thank you .");
        $('#toastMessage').removeClass('hide').addClass('show');
        $('#toastMessage').css('display','block')
        setTimeout(function () {
        $('#toastMessage').removeClass('show').addClass('hide');
        $('#toastMessage').css('display','none')
        window.location.reload();
    }, 2000);
}
function Appointment() {
    var Brandselect=$('#Brandselect').val()
    var Modelselect= $('#Modelselect').val()
    var Vehicleselect= $('#Vehicleselect').val()
    var Districtselect= $('#Districtselect').val()
    var ddate= $('#serviceDate').val()
    var ServicePack= $('#ServicePackselect').val()
    var customername=$('#nameService').val()
    var cusMob=$('#mob').val()
    // var mobilenumber=$('#retxtmobile').val()
    var error=0;
   
    if(Brandselect==""){
        $('#toastMessage1').text("*Please Select Brand!");
        $('#toastMessage1').removeClass('hide').addClass('show');
        error++;
        setTimeout(function () {
        $('#toastMessage1').removeClass('show').addClass('hide');
    }, 3000);
    }else if(Modelselect==""){
        $('#toastMessage1').text("*Please Select Model!");
        $('#toastMessage1').removeClass('hide').addClass('show');
        error++;
        setTimeout(function () {
        $('#toastMessage1').removeClass('show').addClass('hide');
    }, 3000);
    }else if(Vehicleselect==""){
        $('#toastMessage1').text("*Please Select Vehicle!");
        $('#toastMessage1').removeClass('hide').addClass('show');
        error++;
        setTimeout(function () {
        $('#toastMessage1').removeClass('show').addClass('hide');
    }, 3000);
    }else if(Districtselect==""){
        $('#toastMessage1').text("*Please Select District!");
        $('#toastMessage').removeClass('hide').addClass('show');
        error++;
        setTimeout(function () {
        $('#toastMessage1').removeClass('show').addClass('hide');
    }, 3000);
    }else if(ddate==""){
        $('#toastMessage1').text("*Please Select date!");
        $('#toastMessage1').removeClass('hide').addClass('show');
        error++;
        setTimeout(function () {
        $('#toastMessage1').removeClass('show').addClass('hide');
    }, 3000);
    }else if(ServicePack==""){
        $('#toastMessage1').text("*Please Select ServicePack!");
        $('#toastMessage1').removeClass('hide').addClass('show');
        error++;
        setTimeout(function () {
        $('#toastMessage1').removeClass('show').addClass('hide');
    }, 3000);
    }
    // else  if( !pickup&&!Eservice){
    //     $('#toastMessage1').text("*select any one on of the special pack options!");
    //     $('#toastMessage1').removeClass('hide').addClass('show');
    //     error++;
    //     setTimeout(function () {
    //     $('#toastMessage1').removeClass('show').addClass('hide');
    // }, 3000);
    // }
    else if(customername==""){
        $('#toastMessage1').text("*Please Enter Customer Name!");
        $('#toastMessage1').removeClass('hide').addClass('show');
        error++;
        setTimeout(function () {
        $('#toastMessage1').removeClass('show').addClass('hide');
    }, 3000);
    }else if(cusMob=="" ){
        $('#toastMessage1').text("*Please Select Customer MobileNumber!");
        $('#toastMessage1').removeClass('hide').addClass('show');
        error++;
        setTimeout(function () {
        $('#toastMessage1').removeClass('show').addClass('hide');
    }, 3000);
    }else if(!pattern.test(cusMob)){
        $('#toastMessage1').text("*Please Enter Valid Customer MobileNumber!");
        $('#toastMessage1').removeClass('hide').addClass('show');
        error++;
        setTimeout(function () {
        $('#toastMessage1').removeClass('show').addClass('hide');
    }, 3000);
    }else if (!$('#terms').is(':checked')) {
        $('#toastMessage1').text("*Please Select the terms and condition!");
        $('#toastMessage1').removeClass('hide').addClass('show');
        error++;
        setTimeout(function () {
        $('#toastMessage1').removeClass('show').addClass('hide');
    }, 3000);
    }
    if(error==0){
        var apiurl = baseUrl + "Service/CreateAppointment ";
        var sendData = {
        "appointmentid": typeId, 
        "vehicleBrand": selectedBrandId, 
        "bikeModel": vehiclename, 
        "vehicleId": vechileid, 
        "districtid": DistrictBox1id, 
        "showroomId": ServiceCentre1id, 
        "serviceDate": ddate, 
        "servicePack": ServicePack, 
        "pickupDrop": pickup, 
        "expressService": Eservice, 
        "customerName":customername, 
        "mobile":  cusMob, 
        "isEV": isEV, 
        "createdOn": new Date()
    };
    sendData = JSON.stringify(sendData);
    $('.loader-parent').show();
    $.ajax({
        url: apiurl,
        type: 'POST',
        data: sendData,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
            $('.loader-parent').hide();
            $('#nameApp').text(customername)
            $('#dateapp').text(ddate)
            $('#Appid').text(response.appointmentid)
            var Servicelist = new bootstrap.Modal(document.getElementById('Servicelist'), {
                backdrop: 'static',
                keyboard: false
            })
            Servicelist.show()
           
        },
         error: function (xhr, status, error) {
            $('.loader-parent').hide();
             $('#toastMessage1').text("🙁 OOPS ! We are not able Process your Request.Please try again")
             $('#toastMessage1').removeClass('hide').addClass('show');
            setTimeout(function () {
                $('#toastMessage1').removeClass('show').addClass('hide');
            }, 3000); // Hid

        }
    })
    }
}