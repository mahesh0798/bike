
var brand = sessionStorage.getItem('brand')
var vechileid = sessionStorage.getItem('vechileid')
var IsEV = sessionStorage.getItem('isEv')
var vehiclename = sessionStorage.getItem('vehiclename')
var bikeModelid = sessionStorage.getItem('bikeModelid')
var BID="";
function frontpage() {
    location.href = "./index.html";
}
const exampleEl = document.getElementById('tool')
const tooltip = new bootstrap.Tooltip(exampleEl, {animation: true, trigger:"hover",title:"Service",customClass:"custom-tooltip"})
//   $(function() {
//     $('#nav-tab').responsiveTabs();
//   });
function servicepage() {
    location.href = "./service.html";
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
var i = getParameterByName('Vehicleid');
var j = getParameterByName('IsEv');
if(j=="false"){
    $('#electricBike').css("display", "none");
    $('#PetrolBike').css("display", "none");
    
}else{
    bikeModelid=sessionStorage.getItem('modelid')
    $('#electricBike').css("display", "none");
    $('#PetrolBike').css("display", "none");
}
$(document).ready(function () {

    $('#btngoback').click(function () {
        window.history.back(); // Go back to the previous page
    });
    window.onpopstate = function (event) {
        // Handle the back button press here
        // For example, you can navigate back using window.history.back()
        window.history.back();
    };

    $('#lblbikename').text(brand + " - " + vehiclename);
    if (bikeModelid) {
        var apiurl = baseUrl + "VehicleDetails/VehicleDetailImages?Vehicleid=" + i;
        $('.loader-parent').show();
        $.ajax({
            url: apiurl,
            method: 'GET',
            dataType: 'json',
            success: function (img) {
                $('.loader-parent').hide();
                var primaryImage = img.find(function(image) {
                    return image.isPrimary === true;
                });
                if (primaryImage) {
                    var primaryImagePath = primaryImage.imagePath;
                    $('img#your-image-id').attr('src', primaryImagePath);
                } else {
                    console.error('No primary image found');
                }
            },
            error: function (xhr, status, error) {
                $('.loader-parent').hide();
                console.error('Error fetching data:', error);
            }
        });
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
                BID=data[0].brandid
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
    if (i && j) {
        if (j == "false" || j == false) {
            $('#flexRadioDefault2').prop('checked', true);
            // $('#flexRadioDefault1').prop('checked', false);
            $('#evFalse').css('display', 'none');
        } else {
            // $('#flexRadioDefault2').prop('checked', false);
            $('#pvFalse').css('display', 'none');
            $('#flexRadioDefault1').prop('checked', true);
        }
        var apiUrl = baseUrl + "VehicleDetails/GetBikeModelsdetails?Brandid=" + i + '&EV=' + j;
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
                        value: option.brandid,
                        text: option.brandName,
                        'data-ev': option.ev
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
    selectBox.change(function() {
        var selectedOption = $(this).find(':selected');
        var selectedBrandId = selectedOption.val();
        var selectedEv = selectedOption.data('ev');
        
        console.log('Selected brand ID:', selectedBrandId);
        console.log('Selected ev:', selectedEv);
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
    // var mobilenumber=$('#retxtmobile').val()
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
    // else if(mobilenumber==""){
    //     $('#toastMessage').text("*Please Enter MobileNumber!");
    //     $('#toastMessage').removeClass('hide').addClass('show');
    //     error++;
    //     setTimeout(function () {
    //     $('#toastMessage').removeClass('show').addClass('hide');
    // }, 3000);
    // }
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
        "Brandid":BID,
        "MaintanenceCost": MaintanenceCostRating,
        "Safety": SafetyRating,
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
            $('#rating').attr('data-rating', '0');
            $('#ComfortRating').attr('data-rating', '0');
            $('#PerformanceRating').attr('data-rating', '0');
            $('#MaintanenceCostRating').attr('data-rating', '0');
            $('#SafetyRating').attr('data-rating', '0');
            $('.star').html('&#9734;');

            $('#retxtname').val('');
            $('#CommentMbl').val('');
            $('.loader-parent').hide();
            $('#toastMessage1').text("😊 Thank you for your Valuable Review.");
                $('#toastMessage1').removeClass('hide').addClass('show');
                $('#toastMessage1').css('display','block')
                setTimeout(function () {
                $('#toastMessage1').removeClass('show').addClass('hide');
                $('#toastMessage1').css('display','none')
            }, 3000);
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