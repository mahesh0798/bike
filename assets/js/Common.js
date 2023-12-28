// JavaScript source code
var baseUrl = 'https://dreambikesdigitalshowroom.com/DreamBikes_API/api/';

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
function Racemodel(i) {
    location.href = "./details.html?Vehicleid=" + i + '&IsEv=false' ;
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