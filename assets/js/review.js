
var brand = sessionStorage.getItem('brand')
var vechileid = sessionStorage.getItem('vechileid')
var IsEV = sessionStorage.getItem('isEv')
var vehiclename = sessionStorage.getItem('vehiclename')
var bikeModelid = sessionStorage.getItem('bikeModelid')
function frontpage() {
    location.href = "./index.html";
}

if(IsEV){
    $('#electricBike').css("display", "none");
    $('#PetrolBike').css("display", "block");
    
}else{
    $('#electricBike').css("display", "block");
    $('#PetrolBike').css("display", "none");
}

$(document).ready(function () {
    var apiUrl2 = baseUrl +"VehicleDetails/GetReviewDetails?Vehicleid="+vechileid;
        $.ajax({
            url: apiUrl2,
            method: 'GET',
            dataType: 'json',
            success: function (res) {
                    
            }})
    

    if (bikeModelid) {
        var apiUrl = baseUrl + "VehicleDetails/GetBikedetails?Modelid=" + bikeModelid;
        var selectBox1 = $('#ddlBike');
        selectBox1.empty();
        selectBox1.append($('<option>', {
            value: '',
            text: vehiclename,
            selected: true
        }));
        $.ajax({
            url: apiUrl,
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                if (Array.isArray(data)) {
                    $.each(data, function (index, option) {
                        selectBox1.append($('<option>', {
                            value: option.data,
                            text: option.vehiclename
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
    }
    if (sessionStorage.getItem('vechileid') && sessionStorage.getItem('isEv')) {
        if (IsEV == "false" || IsEV == false) {
            $('#flexRadioDefault2').prop('checked', true);
            $('#flexRadioDefault1').prop('checked', false);
        } else {
            $('#flexRadioDefault2').prop('checked', false);
            $('#flexRadioDefault1').prop('checked', true);
        }
        var apiUrl = baseUrl + "VehicleDetails/GetBikeModelsdetails?Brandid=" + vechileid + '&EV=' + IsEV;
        var VarientBox = $('#VarientBike');
        VarientBox.empty();
        VarientBox.append($('<option>', {
            value: '',
            text: vehiclename,
            selected: true
        }));
        $.ajax({
            url: apiUrl,
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                if (Array.isArray(data)) {
                    $.each(data, function (index, option) {
                        VarientBox.append($('<option>', {
                            value: option.data,
                            text: option.brandName
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
    }
    var apiUrl = baseUrl + "VehicleDetails/GetBrandsdata";
    var selectBox = $('#myBrand');
    selectBox.empty();
    selectBox.append($('<option>', {
        value: '',
        text: brand,
        selected: true
    }));
    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            if (Array.isArray(data)) {
                $.each(data, function (index, option) {
                    selectBox.append($('<option>', {
                        value: option.data,
                        text: option.brandName
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
    
});
function ReviewSub() {
    var MileageRating = $('#rating').attr('data-rating');
    var ComfortRating = $('#ComfortRating').attr('data-rating');
    var PerformanceRating = $('#PerformanceRating').attr('data-rating');
    var MaintanenceCostRating = $('#MaintanenceCostRating').attr('data-rating');
    var SafetyRating = $('#SafetyRating').attr('data-rating');
    var comment=$('#CommentMbl').val()
    var username= $('#retxtname').val()
    var mobilenumber=$('#retxtmobile').val()
    var error=0;
    if(MileageRating=="0"){
        $('#toastMessage').text("*Please Enter MileageRating!");
        $('#toastMessage').removeClass('hide').addClass('show');
        error++;
        setTimeout(function () {
        $('#toastMessage').removeClass('show').addClass('hide');
    }, 3000);
    }
    else if(ComfortRating=="0"){
        $('#toastMessage').text("*Please Enter ComfortRating!");
        $('#toastMessage').removeClass('hide').addClass('show');
        error++;
        setTimeout(function () {
        $('#toastMessage').removeClass('show').addClass('hide');
    }, 3000);
    }
    else if(PerformanceRating=="0"){
        $('#toastMessage').text("*Please Enter PerformanceRating!");
        $('#toastMessage').removeClass('hide').addClass('show');
        error++;
        setTimeout(function () {
        $('#toastMessage').removeClass('show').addClass('hide');
    }, 3000);
    }
    else if(MaintanenceCostRating=="0"){
        $('#toastMessage').text("*Please Enter MaintanenceCostRating!");
        $('#toastMessage').removeClass('hide').addClass('show');
        error++;
        setTimeout(function () {
        $('#toastMessage').removeClass('show').addClass('hide');
    }, 3000);
    }
   else if(SafetyRating=="0"){
        $('#toastMessage').text("*Please Enter SafetyRating!");
        $('#toastMessage').removeClass('hide').addClass('show');
        error++;
        setTimeout(function () {
        $('#toastMessage').removeClass('show').addClass('hide');
    }, 3000);
    }
    else if(username==""){
        $('#toastMessage').text("*Please Enter UserName!");
        $('#toastMessage').removeClass('hide').addClass('show');
        error++;
        setTimeout(function () {
        $('#toastMessage').removeClass('show').addClass('hide');
    }, 3000);
    }
    else if(mobilenumber==""){
        $('#toastMessage').text("*Please Enter MobileNumber!");
        $('#toastMessage').removeClass('hide').addClass('show');
        error++;
        setTimeout(function () {
        $('#toastMessage').removeClass('show').addClass('hide');
    }, 3000);
    }
    else if(comment==""){
        $('#toastMessage').text("*Please Enter Comment!");
        $('#toastMessage').removeClass('hide').addClass('show');
        error++;
        setTimeout(function () {
        $('#toastMessage').removeClass('show').addClass('hide');
    }, 3000);
    }
    if(error==0){
    var apiurl = baseUrl + 'VehicleDetails/SubmitReview';
    var sendData = {
        "Modelid": bikeModelid,
        "Vehicleid": vechileid,
        "Comments": comment,
        "username": username,
        "Mileage": MileageRating,
        "comfort": ComfortRating,
        "performance": PerformanceRating,
        "MaintanenceCost": MaintanenceCostRating,
        "Safety": SafetyRating,
    };
    sendData = JSON.stringify(sendData);
    $.ajax({
        url: apiurl,
        type: 'POST',
        data: sendData,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
        }
    })
}
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.rating').forEach(rating => {
        const stars = rating.querySelectorAll('.star');
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const value = parseInt(star.getAttribute('data-value'));
                const parent = star.parentElement;
                const ratingValue = parent.getAttribute('data-rating');
                parent.setAttribute('data-rating', value);

                stars.forEach(s => {
                    if (parseInt(s.getAttribute('data-value')) <= value) {
                        s.innerHTML = '&#9733;'; // Filled star
                    } else {
                        s.innerHTML = '&#9734;'; // Empty star
                    }
                });
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.ComfortRating').forEach(rating => {
        const stars = rating.querySelectorAll('.star');
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const value = parseInt(star.getAttribute('data-value'));
                const parent = star.parentElement;
                const ratingValue = parent.getAttribute('data-rating');
                parent.setAttribute('data-rating', value);

                stars.forEach(s => {
                    if (parseInt(s.getAttribute('data-value')) <= value) {
                        s.innerHTML = '&#9733;'; // Filled star
                    } else {
                        s.innerHTML = '&#9734;'; // Empty star
                    }
                });
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.PerformanceRating').forEach(rating => {
        const stars = rating.querySelectorAll('.star');
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const value = parseInt(star.getAttribute('data-value'));
                const parent = star.parentElement;
                const ratingValue = parent.getAttribute('data-rating');
                parent.setAttribute('data-rating', value);

                stars.forEach(s => {
                    if (parseInt(s.getAttribute('data-value')) <= value) {
                        s.innerHTML = '&#9733;'; // Filled star
                    } else {
                        s.innerHTML = '&#9734;'; // Empty star
                    }
                });
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.MaintanenceCostRating').forEach(rating => {
        const stars = rating.querySelectorAll('.star');
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const value = parseInt(star.getAttribute('data-value'));
                const parent = star.parentElement;
                const ratingValue = parent.getAttribute('data-rating');
                parent.setAttribute('data-rating', value);

                stars.forEach(s => {
                    if (parseInt(s.getAttribute('data-value')) <= value) {
                        s.innerHTML = '&#9733;'; // Filled star
                    } else {
                        s.innerHTML = '&#9734;'; // Empty star
                    }
                });
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.SafetyRating').forEach(rating => {
        const stars = rating.querySelectorAll('.star');
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const value = parseInt(star.getAttribute('data-value'));
                const parent = star.parentElement;
                const ratingValue = parent.getAttribute('data-rating');
                parent.setAttribute('data-rating', value);

                stars.forEach(s => {
                    if (parseInt(s.getAttribute('data-value')) <= value) {
                        s.innerHTML = '&#9733;'; // Filled star
                    } else {
                        s.innerHTML = '&#9734;'; // Empty star
                    }
                });
            });
        });
    });
});