﻿// JavaScript source code
var baseUrl = 'https://dreambikesdigitalshowroom.com/DreamBikes_API/api/';
var UserMobileNo;
var LeadBikeId = 0;

$(document).ready(function () {

    $(document).on("contextmenu", function (e) {
        e.preventDefault();
    });
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    $(document).keydown(function (e) {
        if (
            e.which === 123 || // F12
            (e.ctrlKey && e.shiftKey && e.which === 73) || // Ctrl+Shift+I
            (e.ctrlKey && e.shiftKey && e.which === 74) || // Ctrl+Shift+J
            (e.ctrlKey && e.which === 85) // Ctrl+U
        ) {
            e.preventDefault();
        }
    });

    // Disable text selection
    $(document).on("selectstart", function () {
        return false;
    });

    // Disable drag and drop
    $(document).on("dragstart", function () {
        return false;
    });

    UserMobileNo = $.cookie('username');
    var CustName = $.cookie('CustName');
    if (CustName != "" && CustName != undefined && CustName != null && UserMobileNo != "" && UserMobileNo != undefined && UserMobileNo != null) {
        $('#loginUserName').text(CustName);
        $('#MobileBook').val(UserMobileNo);
        $('#loginlable').hide();
        $('#loginUserName').show();
    }


});

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
                SearchRacemodel(clickedVehicleId, result.isEv)
            }
            autocompleteResults1.innerHTML = '';
        });
        autocompleteResults1.appendChild(option1);
    });
}

function searchLeadBike() {
    const searchCity = document.getElementById('form14').value;
    var apiurl = baseUrl + "VehicleList/SearchVehicle?keywords=" + searchCity;
    $.ajax({
        url: apiurl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            displayAutocompleteLeadBikeResults1(data);

        },
        error: function (xhr, status, error) {
            const autocompleteResults2 = document.getElementById('autocompleteLeadBikeResults');
            autocompleteResults2.innerHTML = '';
            autocompleteResults2.innerText = '';
            autocompleteResults2.style.display = 'none'
        }
    })
}
function displayAutocompleteLeadBikeResults1(results) {
    const autocompleteResults1 = document.getElementById('autocompleteLeadBikeResults');
    autocompleteResults1.innerHTML = '';
    autocompleteResults1.style.display = 'block';

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
            document.getElementById('form14').value = result.vehiclename;
            LeadBikeId = result.vechileid
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
function Racemodel(i) {
    location.href = "./details.html?Vehicleid=" + i + '&IsEv=false';
}
function SearchRacemodel(i, j) {
    location.href = "./details.html?Vehicleid=" + i + '&IsEv=' + j;
}

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
            $('.psbutton').text("wsw");
            $('.psbutton').text("sssdse");
            $('.psbutton').val(btnall);
            $('.psbutton').text(btnall);
            $('#debtn').text(btnall);

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
            $("#addimgthree1").attr('src', response.dailyOfferImage)
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

function displayAutocompleteResults(results) {
    const autocompleteResults = document.getElementById('autocompleteResults');
    autocompleteResults.innerHTML = '';

    if (results.length === 0) {
        const noResults = document.createElement('div');
        noResults.textContent = 'No results found';
        autocompleteResults.appendChild(noResults);
        return;
    }
    //localStorage.setItem("SearchPincode", results[0].pincode);


    results.forEach(result => {
        const option = document.createElement('div');
        option.classList.add('autocomplete-option');
        option.textContent = `${result.city} - ${result.pincode}`;
        option.addEventListener('click', function () {
            document.getElementById('form12').value = result.city;
            document.getElementById('form13').value = result.city;
            document.getElementById('pincodeResult').textContent = result.pincode;
            clickedCityId = result.pincodeId;

            document.getElementById('pinCity').innerHTML = `<b>Show Rooms In ${result.city}</b>`;


            $('#SearchShowrom').hide();

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

                        $.cookie('SearchPincode', result.pincode);
                        //localStorage.setItem('SearchPincode', result.pincode);

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
                            navText: ["<img  src='assets/images/leftarrowNew.png' alt='bikes'>", "<img src='assets/images/leftarrowNew.png' alt='bikes'>"],
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

function displayAutocompleteResults12(results) {
    const autocompleteResults = document.getElementById('autocompleteResultsPin');
    autocompleteResults.innerHTML = '';

    if (results.length === 0) {
        const noResults = document.createElement('div');
        noResults.textContent = 'No results found';
        autocompleteResults.appendChild(noResults);
        return;
    }
    //localStorage.setItem("SearchPincode", results[0].pincode);


    results.forEach(result => {
        const option = document.createElement('div');
        option.classList.add('autocomplete-option');
        option.textContent = `${result.city} - ${result.pincode}`;
        option.addEventListener('click', function () {
            document.getElementById('form13').value = result.city;
            document.getElementById('form12').value = result.city;
            document.getElementById('pincodeResult').textContent = result.pincode;
            clickedCityId = result.pincodeId;

            document.getElementById('pinCity').innerHTML = `<b>Show Rooms In ${result.city}</b>`;


            $('#SearchShowrom').hide();

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

                        $.cookie('SearchPincode', result.pincode);
                        //localStorage.setItem('SearchPincode', result.pincode);

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
                            navText: ["<img  src='assets/images/leftarrowNew.png' alt='Scooters'>", "<img src='assets/images/leftarrowNew.png' alt='Scooters'>"],
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

            autocompleteResults.innerHTML = '';

        });
        autocompleteResults.appendChild(option);
    });
}

function GetAutoCit() {
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

                $('#SearchShowrom').hide();
                document.getElementById('pinCity').innerHTML = `<b>Show Rooms In ${data[0].city}</b>`;

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
                    navText: ["<img  src='assets/images/leftarrowNew.png' alt='bikes'>", "<img src='assets/images/leftarrowNew.png' alt='bikes'>"],
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
}
document.addEventListener("click", function (e) {
    const autocompleteResults = document.getElementById('autocompleteResults');
    if (!autocompleteResults) {
        return;
    }

    if (e.target.id !== 'form12' && e.target.id !== 'autocompleteResults') {
        autocompleteResults.innerHTML = '';
    }
    if (e.target.id !== 'form13' && e.target.id !== 'autocompleteResults') {
        autocompleteResults.innerHTML = '';
    }
});

const pincodeDisplay = document.createElement('div');
pincodeDisplay.id = 'pincodeResult';
document.body.appendChild(pincodeDisplay);

function validateLogin() {
    var mobileNumber = document.getElementById('mobileNumber').value;
    var password = document.getElementById('password').value;
    if (!/^\d{10}$/.test(mobileNumber)) {
        $('#toastMessage').text("Invalid mobile number. Please enter a 10-digit numeric value.");
        $('#toastMessage').removeClass('hide').addClass('show');
        setTimeout(function () {
            $('#toastMessage').removeClass('show').addClass('hide');
        }, 5000);
        return;
    }
    if (password.length < 6) {
        $('#toastMessage').text("Password must be at least 6 characters long");
        $('#toastMessage').removeClass('hide').addClass('show');
        setTimeout(function () {
            $('#toastMessage').removeClass('show').addClass('hide');
        }, 5000); 
        // alert('Password must be at least 6 characters long');
        return;
    }

    $('.loader-parent').show();

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
                $('#toastMessage').text("Login Success");
                $('#toastMessage').removeClass('hide').addClass('show');
                setTimeout(function () {
                    $('#toastMessage').removeClass('show').addClass('hide');
                }, 5000); // Hide after 3 seconds

                $.cookie('username', response.userName);
                $.cookie('CustName', response.name);
                $('#loginUserName').text(response.name);
                $('#loginlable').hide();
                $('#loginUserName').show();
                location.href = "./index.html";
            }
            else {
                $('#toastMessage').text("UserName or Password Is Incorrect");
                $('#toastMessage').removeClass('hide').addClass('show');
                setTimeout(function () {
                    $('#toastMessage').removeClass('show').addClass('hide');
                }, 5000); // Hide after 3 seconds
            }
        },
        error: function (xhr, status, error) {
            $('.loader-parent').hide();
            $('#toastMessage').text("Login Failed.Please try  again");
            $('#toastMessage').removeClass('hide').addClass('show');
            setTimeout(function () {
                $('#toastMessage').removeClass('show').addClass('hide');
            }, 5000); // Hide after 3 seconds
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
        // $('#LoginCname').text("* Enter Your Name");
        $('#toastMessage').text("* Enter Your Name");
        $('#toastMessage').removeClass('hide').addClass('show');
        setTimeout(function () {
            $('#toastMessage').removeClass('show').addClass('hide');
        }, 5000);
        return;
    }
    if (mobileNumber1 == "" || mobileNumber1 == null || mobileNumber1 == undefined) {
        // $('#LoginMobile').text("* Enter Your Mobile Number");
        $('#toastMessage').text("* Enter Your Mobile Number");
        $('#toastMessage').removeClass('hide').addClass('show');
        setTimeout(function () {
            $('#toastMessage').removeClass('show').addClass('hide');
        }, 5000);
    }
    if (!/^\d{10}$/.test(mobileNumber1)) {
        $('#toastMessage').text("*Enter Valid 10 digit Mobile Number");
        $('#toastMessage').removeClass('hide').addClass('show');
        setTimeout(function () {
            $('#toastMessage').removeClass('show').addClass('hide');
        }, 5000);
        // $('#LoginMobile').text("* Enter Valid 10 digit Mobile Number");
        return;
    }

    if (!(email == "" || email == undefined || email == null)) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $('#toastMessage').text("*Enter Valid Email");
            $('#toastMessage').removeClass('hide').addClass('show');
            setTimeout(function () {
                $('#toastMessage').removeClass('show').addClass('hide');
            }, 5000);
            // $('#Loginemail').text("* Enter Valid Email");
            return;
        }
    }

    if (password1.length < 6) {
        $('#toastMessage').text("*Password must be at least 6 characters long");
            $('#toastMessage').removeClass('hide').addClass('show');
            setTimeout(function () {
                $('#toastMessage').removeClass('show').addClass('hide');
            }, 5000);
        // $('#Loginpasword').text("* Password must be at least 6 characters long");
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
                $('#toastMessage').text("Register Successfully");
                $('#toastMessage').removeClass('hide').addClass('show');
                setTimeout(function () {
                    $('#toastMessage').removeClass('show').addClass('hide');
                }, 5000); // Hide after 3 seconds

                //$.cookie('username', mobileNumber1);
                //$.cookie('CustName', name);
                //$('#loginUserName').text(name);
                //$('#loginlable').hide();
                //$('#loginUserName').show();
                toggleForm();
            }
            else {
                $('#toastMessage').text("SignUp Failed.Please try again");
                $('#toastMessage').removeClass('hide').addClass('show');
                setTimeout(function () {
                    $('#toastMessage').removeClass('show').addClass('hide');
                }, 5000); // Hide after 3 seconds
            }
        },
        error: function (xhr, status, error) {
            $('.loader-parent').hide();
            $('#toastMessage').text("Registration Failed.Please try again");
            $('#toastMessage').removeClass('hide').addClass('show');
            setTimeout(function () {
                $('#toastMessage').removeClass('show').addClass('hide');
            }, 5000); // Hide after 3 seconds
        }
    })
}
function listoffer() {
    $('#form13').val('')
    $('#autocompleteResultsPin').val('')
    $('#CustName').val('')
    var Pin = $.cookie('SearchPincode');
    if (Pin == null || Pin == "" || Pin == undefined) {
        $('#leadpin').show();
    }


    var pinlist = new bootstrap.Modal(document.getElementById('pinlist'), {
        backdrop: 'static',
        keyboard: false
    })
    pinlist.show()
}

function GenerateLead(type) {

    //var Pin = $.cookie('SearchPincode');
    //if (Pin == null || Pin == "" || Pin == undefined) {
    //    $('#leadpin').show();
    //    $('#pinvalidation').text("* Enter Your Pincode");
    //    $('#pinvalidation').focus();
    //    $('#pinvalidation').show();

    //    return;
    //}
    //else {
    //    $('#form13').val(Pin);
    //    //$('#leadpin').hide();
    //}

  var LeadGeneration = new Object();
    if (type == 2) {
        LeadGeneration.Vehicleid = getParameterByName('Vehicleid');
    }
    else {

        if (LeadBikeId == null || LeadBikeId == 0 || LeadBikeId == undefined) {
            $('#Bikevalidation').text("* Enter the Bike Name");
            $('#Bikevalidation').focus();
            $('#Bikevalidation').show();

            return;
        }

        LeadGeneration.Vehicleid = LeadBikeId;
    }
    if ($('#form13').val() == null || $('#form13').val() == "") {
        $('#leadpin').show();
        $('#pinvalidation').text("* Enter Your Pincode");
        $('#pinvalidation').focus();
        $('#pinvalidation').show();
        return;
    }

    $('#LeadSuccess').text("");
    $('#LeadSuccess').hide();
    var apiurl = baseUrl + "Home/LeadGeneration";
  

    var mobileNumber = $('#MobileBook').val();
    var pattern = /^[6-9]\d{9}$/; // Regex pattern for Indian mobile numbers

    if (!pattern.test(mobileNumber)) {
        $('#mobilevalidation').text("* Enter Valid Mobile Number");
        $('#mobilevalidation').focus();
        $('#mobilevalidation').show();
        return;
    }
    if ($('#CustName').val() == "" || $('#CustName').val() == null || $('#CustName').val() == "undefined") {
        $('#namevalidation').text("* Enter Your Name");
        $('#namevalidation').focus();
        $('#namevalidation').show();
        return;
    }
   
    $('.loader-parent').show();
    LeadGeneration.Mobile = $('#MobileBook').val();
    LeadGeneration.Name = $('#CustName').val();
    LeadGeneration.Pincode = $('#form13').val(); //$.cookie('SearchPincode');


   

    var request = JSON.stringify(LeadGeneration);

    $.ajax({
        url: apiurl,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: request,
        success: function (data) {
          //  $('#LeadSuccess').show();
          //  $('#LeadSuccess').text("😊 Thank you for connecting with us");
            $('#toastMessage').text("😊 Thank You for connecting with us. Our Executive will Connect and  assist you soon.")
            $('#toastMessage').removeClass('hide').addClass('show');
            $('#pinlist').modal('hide');
            $('#MobileBook,#CustName,#form14,#form13').val("");
            LeadBikeId = 0;
            $('#mobilevalidation,#namevalidation').hide();
            setTimeout(function () {
                $('#toastMessage').removeClass('show').addClass('hide');
            }, 5000); // Hide after 3 seconds
            $('.loader-parent').hide();
        },
        error: function (xhr, status, error) {
            $('.loader-parent').hide();
            $('#toastMessage').text("🙁 OOPS ! We are not able Process your Request.Please try again")
            $('#toastMessage').removeClass('hide').addClass('show');
            setTimeout(function () {
                $('#toastMessage').removeClass('show').addClass('hide');
 //$('#LeadSuccess').hide();
            }, 5000); // Hid

        }

    })
}
function fetchPincode(type) {
    var city;
    if (type == 1) {
        city = document.getElementById('form12').value;
    }
    else {
        city = document.getElementById('form13').value;
    }

    var apiurl = baseUrl + "Home/GetCity?Key=" + city;

    $.ajax({
        url: apiurl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            const matchingPincode = data.find(item => item.city.toLowerCase() === city.toLowerCase());
            if (type == 1) {
                displayAutocompleteResults(data);
            }
            else {
                displayAutocompleteResults12(data);
            }


            if (matchingPincode) {
                const pincode = matchingPincode.pincode;
                document.getElementById('pincodeResult').textContent = ` ${pincode}`;
            } else {
                document.getElementById('pincodeResult').textContent = `${city} not found`;
            }
        }
    })
}


function fetchLeadPincode(type) {

    var city = document.getElementById('form13').value;


    var apiurl = baseUrl + "Home/GetCity?Key=" + city;

    $.ajax({
        url: apiurl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            const matchingPincode = data.find(item => item.city.toLowerCase() === city.toLowerCase());
            if (type == 1) {
                displayAutocompleteResults(data);
            }
            else {
                displayAutocompleteResultsLead(data);
            }


            if (matchingPincode) {
                const pincode = matchingPincode.pincode;
                document.getElementById('pincodeResult').textContent = ` ${pincode}`;
            } else {
                document.getElementById('pincodeResult').textContent = `${city} not found`;
            }
        }
    })
}

function displayAutocompleteResultsLead(results) {
    const autocompleteResults = document.getElementById('autocompleteResultsPin');
    autocompleteResults.innerHTML = '';

    if (results.length === 0) {
        const noResults = document.createElement('div');
        noResults.textContent = 'No results found';
        autocompleteResults.appendChild(noResults);
        return;
    }
    //localStorage.setItem("SearchPincode", results[0].pincode);


    results.forEach(result => {
        const option = document.createElement('div');
        option.classList.add('autocomplete-option');
        option.textContent = `${result.city} - ${result.pincode}`;
        option.addEventListener('click', function () {
            document.getElementById('form13').value = result.city;
            $.cookie('SearchPincode', result.pincode);
            document.getElementById('pincodeResult').textContent = result.pincode;
            autocompleteResults.innerHTML = '';

        });
        autocompleteResults.appendChild(option);
    });
}