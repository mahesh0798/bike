// var url1 = window.location + '';
// var d_url = decodeURIComponent(url1);
// var userData = new Object();
// var kraData = new Object();
// var ckycData = new Object();
// var caddressLine1 = '';
// var caddressLine2 = '';
// var caddressLine3 = '';
// var caddressCity = '';
// var caddressDistrict = '';
// var caddressState = '';
// var caddressStateId = '';
// var caddressPin = '';
// var paddressLine1 = '';
// var paddressLine2 = '';
// var paddressLine3 = '';
// var paddressCity = '';
// var paddressDistrict = '';
// var paddressState = '';
// var paddressStateId = '';
// var paddressPin = '';
// var nDistrict1 = '';
// var nDistrict2 = '';
// var nDistrict3 = '';
// var gDistrict1 = '';
// var gDistrict2 = '';
// var gDistrict3 = '';
// var isKra = 'N';
// var kraClnt = 'N';
// var isCkyc = 'N';
// var ckycClnt = 'N';
// var userDob = '';
// var mobileBelongsTo = '';
// var emailBelongsTo = '';
// var annualIncome = '';
// var ref = '';
// var eref = '';
// var planDetails = '';
// var planDetailsList = '';
// var planResult = '';
// var planName = '';
// const preview = document.getElementById("preview");
// var planDescription;
// var productId = '';
// var schemeCode = '';
// var esign = '';
// var motherName = '';
// var corresNewAddress = false;
// var bankAddress = false;
// var kraAddress = false;
// var nNewAddress1 = false;
// var nNewAddress2 = false;
// var nNewAddress3 = false;
// var gNewAddress1 = false;
// var gNewAddress2 = false;
// var gNewAddress3 = false;
// var permNewAddress = false;
// var permBankAddress = false;
// var permKraAddress = false;
// var profileProceed = false;
// var profileProceed = false;
// var isKRAUpdate = 'N';
// var isCKYCUpdate = 'N';
// var isSamePermenantAddress = 1;
// var emailVerified = false;
// var isNominee = false;
// var photoImageUpdt = false;
// var panImageUpdt = false;
// var iImageUpdt = false;
// var cAddressUpdt = false;
// var pAddressUpdt = true;
// var signatureUpdt = false;
// var panUrl = '';
// var caUrl = '';
// var ca2Url = '';
// var paUrl = '';
// var pa2Url = '';
// var iUrl = '';
// var clientUrl = '';
// var signUrl = '';
// var poiUpdt = true;
// var rotateImgName = '';
// var micr = '';
// var ipvCompleted = false;
// var selfTrue = false;
// var physicalEsign = 'N';
// var addressBank = '';
// var ecount = 0;
// var acount = 0;
// var emcount = 0;
// var adn2 = false;
// var adn3 = false;
// var efilter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
// var mfilter = /^(?![6]{10}|[7]{10}|[8]{10}|[9]{10})[6-9]{1}[0-9]{9}$/;
// var ipvStatus = true;
// var profileA = false;
// var latitude = '';
// var longitude = '';
// var planList = '';
// var prodID = null;
// var fando = false;
// var nminor1 = false;
// var nminor2 = false;
// var nminor3 = false;
// var nomineeInfoId1 = '';
// var nomineeInfoId2 = '';
// var nomineeInfoId3 = '';
// var nUpdated = false;
// var b = '';
// var options = {
// 	enableHighAccuracy: true,
// 	timeout: 5000,
// 	maximumAge: 0
// };
// var cityList = [];
// var cCityList = '';
// var pCityList = '';
// var nCityList = '';
// var nCityList2 = '';
// var nCityList3 = '';
// var pCityList = '';
// var pCityList2 = '';
// var pCityList3 = '';
// function success(pos) {
// 	var crd = pos.coords;
// 	if (crd.latitude && crd.longitude) {
// 		latitude = crd.latitude;
// 		longitude = crd.longitude;
// 		if (latitude && longitude) {}
// 	} else {}

// }
// debugger
// function error(err) {
// 	$('#alertModal').modal();
// 	$('#alertMsg').html('Allow access to the location from settings.');
// 	latitude = '';
// 	longitude = '';
// }

// navigator.geolocation.getCurrentPosition(success, error, options);
// function getddl() {
// 	$('#cadrList, #padrList, #iList, .nidproof, .nrelation,.grelation').append('<option value="">Select</option>');
// 	var apiurl = baseUrl + "DIYGetDocumentTypeDropDownList";
// 	$.ajax({
// 		url: apiurl,
// 		type: 'GET',
// 		success: function (response) {
// 			if (response.DocumentTypeList) {

// 				for (var i = 0; i < response.DocumentTypeList.length; i++) {
// 					if (response.DocumentTypeList[i].DocumentCategory == "C") {
// 						$('#cadrList, #padrList').append('<option value="' + response.DocumentTypeList[i].DocumentTypeId + '">' + response.DocumentTypeList[i].Name + '</option>')
// 					}

// 					if (response.DocumentTypeList[i].DocumentCategory == "I") {
// 						$('#iList').append('<option value="' + response.DocumentTypeList[i].DocumentTypeId + '">' + response.DocumentTypeList[i].Name + '</option>')
// 					}
// 				}

// 				for (var i = 0; i < response.NomineeDocumentTypeList.length; i++) {

// 					if (response.NomineeDocumentTypeList[i].DocumentCategory == "C") {
// 						$('.nidproof').append('<option value="' + response.NomineeDocumentTypeList[i].DocumentTypeId + '">' + response.NomineeDocumentTypeList[i].Name + '</option>');
// 					}
// 				}
// 			}
// 		}
// 	})

// 	var ddlurl = baseUrl + "DIYGetProfileInfoDropDownList";
// 	$.ajax({
// 		url: ddlurl,
// 		type: 'GET',
// 		success: function (response) {
// 			if (response.OccupationDetailsList) {
// 				$('#occupation').append('<option value="">Select</option>');
// 				for (var i = 0; i < response.OccupationDetailsList.length; i++) {
// 					$('.occupation').append('<span id="viewOcc' + response.OccupationDetailsList[i].OccupationId + '" class="d-none">' + response.OccupationDetailsList[i].Description + '</span>')
// 					$('#occupation').append('<option value="' + response.OccupationDetailsList[i].OccupationId + '">' + response.OccupationDetailsList[i].Description + '</option>')
// 				}
// 			}
// 			if (response.IncomeRange) {
// 				for (var y = 0; y < response.IncomeRange.length; y++) {
// 					$('.view-income-btn-group').append('<span class="d-none" id="viewIn' + response.IncomeRange[y].IncomeRangeId + '">' + response.IncomeRange[y].Name + '</span>');
// 					$('.income-btn-group').append('<div class="form-group text-center"><div class="mt-2 btn sb-btn-primary bg-white  pcacs-tabs scrolltop" id="an' + response.IncomeRange[y].IncomeRangeId + '" onclick="anIncome(\'' + response.IncomeRange[y].IncomeRangeId + '\')"><span class="sb-title">' + response.IncomeRange[y].Name + '</span></div></div>');
// 				}
// 			}
// 		}
// 	});

// 	var relationurl = baseUrl + "DIYGetNomineeRelationship";
// 	$.ajax({
// 		url: relationurl,
// 		type: 'GET',
// 		success: function (response) {
// 			if (response.IpvPOAandNomineeList) {
// 				for (var i = 0; i < response.IpvPOAandNomineeList.length; i++) {
// 					$('.nrelation').append('<option value="' + response.IpvPOAandNomineeList[i].NomineeValue + '">' + response.IpvPOAandNomineeList[i].Nominee + '</option>');
// 				}
// 			}
// 			if (response.IpvPOAandGuardianList) {
// 				for (var i = 0; i < response.IpvPOAandGuardianList.length; i++) {
// 					$('.grelation').append('<option value="' + response.IpvPOAandGuardianList[i].NomineeValue + '">' + response.IpvPOAandGuardianList[i].Nominee + '</option>');
// 				}
// 			}
// 		}
// 	});

// }

// function getParameterByName(name, url) {
// 	name = name.replace(/[\[\]]/g, "\\$&");
// 	var regex = new RegExp("[?&|]" + name + "(=([^&#|]*)|&|#|$)", 'i'),
// 	results = regex.exec(url);
// 	if (!results)
// 		return null;
// 	if (!results[2])
// 		return '';
// 	return results[2].replace(/\+/g, " ");
// }
// $(document).ready(function () {
// 	getddl();

// 	function checkKRA(d) {
// 		var apiurl = baseUrl + 'KRAClientValidationupdate';
// 		var sendData = {
// 			Email: userData.email,
// 			Mobile: userData.mobileNumber,
// 			PanNumber: userData.panNumber,
// 			ReferenceNumber: ref,
// 			DOB: d,
// 			Mode: 'W'
// 		};
// 		sendData = JSON.stringify(sendData);
// 		$.ajax({
// 			url: apiurl,
// 			type: 'POST',
// 			data: sendData,
// 			contentType: "application/json",
// 			dataType: "json",
// 			success: function (response) {
// 				if (response.Registration.KRAVerifiedClient != 'Y') {
// 					checkCKYC(d);
// 					//$('#corresKRAAddress, #perKRAAddress').html('').hide();
// 				} else {
// 					isKra = 'Y';
// 					kraClnt = 'Y';

// 					kraData = response.KRAExistingClientInfo;

// 					$('.krafullAddress').html(response.KRAExistingClientInfo.APP_COR_ADD1 + ', ' + response.KRAExistingClientInfo.APP_COR_ADD2 + ', ' + response.KRAExistingClientInfo.APP_COR_ADD3);
// 					$('.kralocationAddress').html(response.KRAExistingClientInfo.APP_COR_CITY + ', ' + response.KRAExistingClientInfo.APP_COR_PINCD);
// 					$('.perKrafullAddress').html(response.KRAExistingClientInfo.APP_PER_ADD1 + ', ' + response.KRAExistingClientInfo.APP_PER_ADD2 + ', ' + response.KRAExistingClientInfo.APP_PER_ADD3);
// 					$('.perKralocationAddress').html(response.KRAExistingClientInfo.APP_PER_CITY + ', ' + response.KRAExistingClientInfo.APP_PER_PINCD);

// 					if (response.KRAExistingClientInfo.APP_COR_ADD_PROOF) {
// 						sessionStorage.setItem('addressproofCollectStatus', response.KRAExistingClientInfo.APP_COR_ADD_PROOF)
// 					}
// 					if (response.KRAExistingClientInfo.APP_KRA_INFO) {
// 						sessionStorage.setItem('addresproofKRAInfo', response.KRAExistingClientInfo.APP_KRA_INFO)
// 					}

// 					getState(kraData.APP_COR_PINCD, 'kra_cpin');
// 					getState(kraData.APP_PER_PINCD, 'kra_ppin');
// 				}
// 				$('.loader-parent').hide();
// 			}
// 		})
// 	}

// 	function checkCKYC(d) {
// 		var apiurl = baseUrl + 'CKYCTrackWizzSearch';
// 		var sendData = {
// 			PanNumber: userData.panNumber,
// 			ReferenceNumber: ref,
// 			DOB: d
// 		};
// 		sendData = JSON.stringify(sendData);
// 		$.ajax({
// 			url: apiurl,
// 			type: 'POST',
// 			data: sendData,
// 			contentType: "application/json",
// 			dataType: "json",
// 			success: function (res) {
// 				if (res.IsSuccess && res.CKYCID) {
// 					var ck_url = baseUrl + "CKYCTrackWizzDownLoad";
// 					var ck_sendData = {
// 						PanNumber: userData.panNumber,
// 						ReferenceNumber: ref,
// 						CKYCNumber: res.CKYCID,
// 						DOB: d
// 					}
// 					ck_sendData = JSON.stringify(ck_sendData)
// 						$.ajax({
// 							url: ck_url,
// 							type: 'POST',
// 							data: ck_sendData,
// 							contentType: 'application/json',
// 							dataType: 'json',
// 							success: function (response) {
// 								if (response.IsSuccess) {
// 									ckycData = response.cKYCPersonalDetail;
// 									if (ckycData.CKYCCorAddPin) {
// 										isCkyc = 'Y';
// 										ckycClnt = 'Y';
// 										getState(ckycData.CKYCCorAddPin, 'ckyc_cpin');
// 										$('#kctitle').html('CKYC Address');
// 										$('.krafullAddress').html(ckycData.CKYCCorAdd1 + ', ' + ckycData.CKYCCorAdd2 + ', ' + ckycData.CKYCCorAdd3);
// 										$('.kralocationAddress').html(ckycData.CKYCCorAddCity + ', ' + ckycData.CKYCCorAddPin);

// 										if (ckycData.CKYCPerAddPin) {
// 											getState(ckycData.CKYCPerAddPin, 'ckyc_ppin');
// 											$('.perKrafullAddress').html(ckycData.CKYCPerAdd1 + ', ' + ckycData.CKYCPerAdd2 + ', ' + ckycData.CKYCPerAdd3);
// 											$('.perKralocationAddress').html(ckycData.CKYCPerAddCity + ', ' + ckycData.CKYCPerAddPin);
// 										}
// 									}
// 								} else {
// 									$('.loader-parent').hide();
// 									$('#corresKRAAddress, #perKRAAddress').html('').hide();
// 								}
// 							},
// 							error: function () {
// 								$('.loader-parent').hide();
// 							}
// 						})
// 				} else {
// 					$('.loader-parent').hide();
// 					$('#corresKRAAddress, #perKRAAddress').html('').hide();
// 				}
// 			}
// 		})
// 	}

// 	function panValidation(data) {
// 		var dt = new Date(data.dob);
// 		var m = dt.getMonth() + 1;
// 		if (m < 10) {
// 			m = '0' + m
// 		}
// 		var y = dt.getFullYear();
// 		var da = dt.getDate();
// 		userDob = da + '/' + m + '/' + y;
// 		var apiurl = baseUrl + 'YonoEcommercePanSiteValidation';
// 		var sendData = {
// 			PanNumber: data.panNumber,
// 			DOB: userDob,
// 			Mode: "W",
// 			Mobile: data.mobileNumber,
// 			Email: data.email,
// 			IsDiy: true
// 		}
// 		sendData = JSON.stringify(sendData);
// 		$.ajax({
// 			url: apiurl,
// 			type: 'POST',
// 			data: sendData,
// 			contentType: "application/json",
// 			dataType: "json",
// 			success: function (response) {
// 				if (response.IsSuccess) {
// 					if (response.ClientInfo.MiddleName) {
// 						$('.fullName').html(response.ClientInfo.FirstName + ' ' + response.ClientInfo.MiddleName + ' ' + response.ClientInfo.LastName);
// 					} else {
// 						$('.fullName').html(response.ClientInfo.FirstName + ' ' + response.ClientInfo.LastName);
// 					}
// 					userData.firstName = response.ClientInfo.FirstName;
// 					userData.middleName = response.ClientInfo.MiddleName;
// 					userData.lastName = response.ClientInfo.LastName;
// 					checkuser(userDob)
// 				} else {
// 					$('#alertModal').modal();
// 					$('#alertMsg').html('Unable to retrive the PAN details,Please try again');
// 				}
// 				//generateReference(userDob);
// 			}

// 		});
// 	}

// 	function checkuser(d) {
// 		$('.loader-parent').show();
// 		var apiurl = baseUrl + 'KRAClientValidationupdate';
// 		var sendData = {
// 			Email: userData.email,
// 			Mobile: userData.mobileNumber,
// 			PanNumber: userData.panNumber,
// 			ReferenceNumber: '',
// 			DOB: d,
// 			Mode: 'W'
// 		};
// 		sendData = JSON.stringify(sendData);
// 		$.ajax({
// 			url: apiurl,
// 			type: 'POST',
// 			data: sendData,
// 			contentType: "application/json",
// 			dataType: "json",
// 			success: function (response) {
// 				if (response.Registration.KRAVerifiedClient == 'Y') {
// 					kraClnt = 'Y';
// 				}
// 				if (response.KRAExistingClientInfo.APP_COR_ADD_PROOF) {
// 					sessionStorage.setItem('addressproofCollectStatus', response.KRAExistingClientInfo.APP_COR_ADD_PROOF)
// 				}
// 				if (response.KRAExistingClientInfo.APP_KRA_INFO) {
// 					sessionStorage.setItem('addresproofKRAInfo', response.KRAExistingClientInfo.APP_KRA_INFO)
// 				}
// 				$('.loader-parent').hide();
// 				generateReference(d);
// 			}
// 		});
// 	}

// 	function generateReference(d) {
// 		$('.loader-parent').show();
// 		var apiurl = baseUrl + 'ReferenceNumberClientInfoRegistration';
// 		var sendData = {
// 			Mode: "W",
// 			IsExisting: false,
// 			DropReferenceNumber: "",
// 			FirstName: userData.firstName,
// 			MiddleName: userData.middleName,
// 			LastName: userData.lastName,
// 			PanNumber: userData.panNumber,
// 			Email: userData.email,
// 			DOB: d,
// 			Mobile: userData.mobileNumber,
// 			KRAClient: kraClnt,
// 			BrowserType: navigator.appName,
// 			EmailBelongsTo: "Y",
// 			MobileBelongsTo: "Y",
// 			MobileNoUpdatedInAadhar: "Y",
// 			IsDiy: true
// 		};

// 		sendData = JSON.stringify(sendData);
// 		$.ajax({
// 			url: apiurl,
// 			type: 'POST',
// 			data: sendData,
// 			contentType: "application/json",
// 			dataType: "json",
// 			success: function (response) {
// 				ref = response.ReferenceNumber;
// 				eref = response.RefNumber;
// 				$('.loader-parent').hide();
// 				if (response.IsReferenceNumberExist) {
// 					getOverallStatus();
// 				} else {
// 					if (ref) {
// 						checkKRA(d);
// 					} else {
// 						$('#alertModal').modal();
// 						$('#alertMsg').html('Please try again');
// 					}
// 				}
// 			}
// 		})
// 	}

// 	function getDiyData() {
// 		var apiurl = baseUrl + 'DIYGetClientPersonalInfoByReferenceNumber';
// 		var sendData = {
// 			ReferenceNumber: eref
// 		}
// 		sendData = JSON.stringify(sendData);
// 		$.ajax({
// 			url: apiurl,
// 			type: 'POST',
// 			data: sendData,
// 			contentType: "application/json",
// 			dataType: "json",
// 			success: function (response) {

// 				if (response.IsSuccess) {
// 					$('.userTitle').html(response.ObjCDIYClientProfile.ClientPrefixID);
// 					userData.title = response.ObjCDIYClientProfile.ClientPrefixID;
// 					if (response.ObjCDIYClientProfile.MiddleName) {
// 						$('.fullName').html(response.ObjCDIYClientProfile.FirstName + ' ' + response.ObjCDIYClientProfile.MiddleName + ' ' + response.ObjCDIYClientProfile.LastName);
// 					} else {
// 						$('.fullName').html(response.ObjCDIYClientProfile.FirstName + ' ' + response.ObjCDIYClientProfile.LastName);
// 					}
// 					userData.mobileNumber = response.ObjCDIYClientProfile.Mobile;
// 					$('.mobileNumber').html(response.ObjCDIYClientProfile.Mobile);
// 					$('#editMobile').html(response.ObjCDIYClientProfile.Mobile);
// 					$('#userEmail, #editEmail').val(response.ObjCDIYClientProfile.Email);
// 					$('.userEmail').html(response.ObjCDIYClientProfile.Email);
// 					userData.firstName = response.ObjCDIYClientProfile.FirstName;
// 					userData.middleName = response.ObjCDIYClientProfile.MiddleName;
// 					userData.lastName = response.ObjCDIYClientProfile.LastName;
// 					caddressLine1 = response.ClientAddressDetailsList[0].AddressLine1;
// 					caddressLine2 = response.ClientAddressDetailsList[0].AddressLine2;
// 					caddressLine3 = response.ClientAddressDetailsList[0].AddressLine3;
// 					caddressCity = response.ClientAddressDetailsList[0].City;
// 					caddressDistrict = response.ClientAddressDetailsList[0].District;
// 					caddressPin = response.ClientAddressDetailsList[0].PinCode;
// 					caddressState = response.ClientAddressDetailsList[0].State;
// 					caddressStateId = response.ClientAddressDetailsList[0].StateId;

// 					paddressLine1 = response.ClientAddressDetailsList[1].AddressLine1;
// 					paddressLine2 = response.ClientAddressDetailsList[1].AddressLine2;
// 					paddressLine3 = response.ClientAddressDetailsList[1].AddressLine3;
// 					paddressCity = response.ClientAddressDetailsList[1].City;
// 					paddressDistrict = response.ClientAddressDetailsList[1].District;
// 					paddressPin = response.ClientAddressDetailsList[1].PinCode;
// 					paddressState = response.ClientAddressDetailsList[1].State;
// 					paddressStateId = response.ClientAddressDetailsList[1].StateId;

// 					isSamePermenantAddress = parseInt(response.ClientAddressDetailsList[0].IsSamePermenantAddress);
// 					$('.previewAddress').html(response.ClientAddressDetailsList[0].AddressLine1 + ', ' + response.ClientAddressDetailsList[0].AddressLine2 + ', ' + response.ClientAddressDetailsList[0].AddressLine3);
// 					$('.previewlocationAddress').html(response.ClientAddressDetailsList[0].City + ', ' + response.ClientAddressDetailsList[0].District + ', ' + response.ClientAddressDetailsList[0].PinCode);

// 					if (response.ObjCDIYClientProfile.KRAClient != 'Y') {
// 						$('#corresKRAAddress, #perKRAAddress').html('').hide();
// 						$('.fullAddress').html(response.ClientAddressDetailsList[0].AddressLine1 + ', ' + response.ClientAddressDetailsList[0].AddressLine2 + ', ' + response.ClientAddressDetailsList[0].AddressLine3);
// 						$('.locationAddress').html(response.ClientAddressDetailsList[0].City + ', ' + response.ClientAddressDetailsList[0].District + ', ' + response.ClientAddressDetailsList[0].PinCode);
// 						if (sessionStorage.getItem('permBankAddress') == 'y') {
// 							$('.perBankfullAddress').html(response.ClientAddressDetailsList[1].AddressLine1 + ', ' + response.ClientAddressDetailsList[1].AddressLine2 + ', ' + response.ClientAddressDetailsList[1].AddressLine3);
// 							$('.perBanklocationAddress').html(response.ClientAddressDetailsList[1].City + ', ' + response.ClientAddressDetailsList[1].District + ', ' + response.ClientAddressDetailsList[1].PinCode);
// 						}

// 					} else {
// 						if (response.ObjCDIYClientProfile.IsCKYCUpdate == 'N') {
// 							isCKYCUpdate = 'N';
// 							$('.krafullAddress').html(response.ClientAddressDetailsList[0].AddressLine1 + ', ' + response.ClientAddressDetailsList[0].AddressLine2 + ', ' + response.ClientAddressDetailsList[0].AddressLine3);
// 							$('.kralocationAddress').html(response.ClientAddressDetailsList[0].City + ', ' + response.ClientAddressDetailsList[0].District + ', ' + response.ClientAddressDetailsList[0].PinCode);
// 							$('.perKrafullAddress').html(response.ClientAddressDetailsList[1].AddressLine1 + ', ' + response.ClientAddressDetailsList[1].AddressLine2 + ', ' + response.ClientAddressDetailsList[1].AddressLine3);
// 							$('.perKralocationAddress').html(response.ClientAddressDetailsList[1].City + ', ' + response.ClientAddressDetailsList[1].District + ', ' + response.ClientAddressDetailsList[1].PinCode);

// 							ckycData.CKYCCorAdd1 = response.ClientAddressDetailsList[0].AddressLine1;
// 							ckycData.CKYCCorAdd2 = response.ClientAddressDetailsList[0].AddressLine2;
// 							ckycData.CKYCCorAdd3 = response.ClientAddressDetailsList[0].AddressLine3;
// 							ckycData.CKYCCorAddCity = response.ClientAddressDetailsList[0].City;
// 							ckycData.ckyc_caddressDistrict = response.ClientAddressDetailsList[0].District;
// 							ckycData.CKYCCorAddPin = response.ClientAddressDetailsList[0].PinCode;
// 							ckycData.ckyc_caddressState = response.ClientAddressDetailsList[0].State;
// 							ckycData.ckyc_caddressStateId = response.ClientAddressDetailsList[0].State;

// 							ckycData.CKYCPerAdd1 = response.ClientAddressDetailsList[1].AddressLine1;
// 							ckycData.CKYCPerAdd2 = response.ClientAddressDetailsList[1].AddressLine2;
// 							ckycData.CKYCPerAdd3 = response.ClientAddressDetailsList[1].AddressLine3;
// 							ckycData.CKYCPerAddCity = response.ClientAddressDetailsList[1].City;
// 							ckycData.ckyc_paddressDistrict = response.ClientAddressDetailsList[1].District;
// 							ckycData.CKYCPerAddPin = response.ClientAddressDetailsList[1].PinCode;
// 							ckycData.ckyc_paddressState = response.ClientAddressDetailsList[1].State;
// 							ckycData.ckyc_paddressStateId = response.ClientAddressDetailsList[1].State;
// 							$('#kctitle').html('CKYC Address');
// 						} else {
// 							IsCKYCUpdate = 'Y';
// 							$('#corresKRAAddress, #perKRAAddress').html('').hide();
// 						}
// 						if (response.ObjCDIYClientProfile.IsKRAUpdate == 'N') {
// 							isKRAUpdate = 'N';
// 							$('.krafullAddress').html(response.ClientAddressDetailsList[0].AddressLine1 + ', ' + response.ClientAddressDetailsList[0].AddressLine2 + ', ' + response.ClientAddressDetailsList[0].AddressLine3);
// 							$('.kralocationAddress').html(response.ClientAddressDetailsList[0].City + ', ' + response.ClientAddressDetailsList[0].District + ', ' + response.ClientAddressDetailsList[0].PinCode);
// 							$('.perKrafullAddress').html(response.ClientAddressDetailsList[1].AddressLine1 + ', ' + response.ClientAddressDetailsList[1].AddressLine2 + ', ' + response.ClientAddressDetailsList[1].AddressLine3);
// 							$('.perKralocationAddress').html(response.ClientAddressDetailsList[1].City + ', ' + response.ClientAddressDetailsList[1].District + ', ' + response.ClientAddressDetailsList[1].PinCode);

// 							kraData.APP_COR_ADD1 = response.ClientAddressDetailsList[0].AddressLine1;
// 							kraData.APP_COR_ADD2 = response.ClientAddressDetailsList[0].AddressLine2;
// 							kraData.APP_COR_ADD3 = response.ClientAddressDetailsList[0].AddressLine3;
// 							kraData.APP_COR_CITY = response.ClientAddressDetailsList[0].City;
// 							kraData.kra_caddressDistrict = response.ClientAddressDetailsList[0].District;
// 							kraData.APP_COR_PINCD = response.ClientAddressDetailsList[0].PinCode;
// 							kraData.kra_caddressState = response.ClientAddressDetailsList[0].State;
// 							kraData.kra_caddressStateId = response.ClientAddressDetailsList[0].State;

// 							kraData.APP_PER_ADD1 = response.ClientAddressDetailsList[1].AddressLine1;
// 							kraData.APP_PER_ADD2 = response.ClientAddressDetailsList[1].AddressLine2;
// 							kraData.APP_PER_ADD3 = response.ClientAddressDetailsList[1].AddressLine3;
// 							kraData.APP_PER_CITY = response.ClientAddressDetailsList[1].City;
// 							kraData.kra_paddressDistrict = response.ClientAddressDetailsList[1].District;
// 							kraData.APP_PER_PINCD = response.ClientAddressDetailsList[1].PinCode;
// 							kraData.kra_paddressState = response.ClientAddressDetailsList[1].State;
// 							kraData.kra_paddressStateId = response.ClientAddressDetailsList[1].State;
// 						} else {
// 							isKRAUpdate = 'Y';
// 							$('#corresKRAAddress, #perKRAAddress').html('').hide();
// 						}
// 					}
// 					if (caddressLine1) {

// 						$('#cFlat').val(caddressLine1);
// 						userData.addressLine1 = caddressLine1;
// 						$('#cStreet').val(caddressLine2);
// 						userData.addressLine2 = caddressLine2;
// 						$('#cLandmark').val(caddressLine3);
// 						userData.addressLine3 = caddressLine3;
// 						$('#cPincode').val(caddressPin);
// 						getState(caddressPin, 'cPincode');
// 						userData.pinCode = caddressPin;
// 						$('#cCity').val(caddressCity);
// 						userData.city = caddressCity;
// 						$('#cState').val(caddressState);
// 						$('#cState ~ label').css({
// 							'top': '-12px'
// 						});
// 						userData.state = caddressState;
// 						userData.stateId = caddressStateId;
// 						userData.district = caddressDistrict;
// 					}
// 					if (paddressLine1) {
// 						$('#pFlat').val(paddressLine1);
// 						$('#pStreet').val(paddressLine2);
// 						$('#pLandmark').val(paddressLine3);
// 						$('#pPincode').val(paddressPin);
// 						getState(paddressPin, 'pPincode');
// 						$('#pCity').val(paddressCity);
// 						$('#pState').val(paddressState);
// 						$('#pState ~ label').css({
// 							'top': '-12px'
// 						});
// 					}
// 					if (isSamePermenantAddress == 0) {
// 						$('#sameAddreessBox').attr('checked', false);
// 						$('#sameAddreess').show();
// 						$('#perNewAddressArea').show();
// 					} else {
// 						$('#sameAddreessBox').attr('checked', true);
// 						$('#sameAddreess').hide();
// 					}
// 				}
// 			}
// 		})
// 	}

// 	$('#nomineeS img').on('click', function (e) {
// 		isNominee = true;
// 		$('#nomineeYes').show()
// 		$('.nn').removeClass('sb-btn-primary');
// 		$('.ns').addClass('sb-btn-primary');
// 	})

// 	$('#nomineeNo img').on('click', function (e) {
// 		isNominee = false;
// 		nUpdated = false;
// 		$('#nomineeYes').hide();
// 		$('.ns').removeClass('sb-btn-primary');
// 		$('.nn').addClass('sb-btn-primary');
// 		$('#nTwo').addClass('d-none');
// 		$('#nThree').addClass('d-none');
// 		$('#addNominee').removeClass('d-none');

// 		var fields = $('#nDetailsOnef input[type=text], #nDetailsOnef input[type=tel], #nDetailsOnef select');
// 		nminor1 = false;
// 		$('#nBP').val('');
// 		$('#guardian1, #guardian1C').addClass('d-none');
// 		fields.each(function () {
// 			$(this).val('');
// 		});

// 		var nfields = $('#naddress input[type=text], #naddress input[type=tel]');
// 		nfields.each(function () {
// 			$(this).val('');
// 		});
// 		$('#naddress').addClass('d-none');
// 		nNewAddress1 = false;

// 		var gnfields = $('#gaddress input[type=text], #gaddress input[type=tel]');
// 		gnfields.each(function () {
// 			$(this).val('');
// 		});
// 		$('#gaddress').addClass('d-none');
// 		gNewAddress1 = false;

// 		var gfields = $('#guardian1 input[type=text], #guardian1 input[type=tel], #guardian1 select');
// 		gfields.each(function () {
// 			$(this).val('');
// 		});

// 		$('#nsameAddreessBox1, #gsameAddreessBox1').prop('checked', true);

// 		if (nomineeInfoId1) {
// 			var a = nomineeInfoId1;
// 			deleteNominee(a);
// 			nomineeInfoId1 = '';
// 		}

// 		adn2 = false;
// 		adn3 = false;
// 		delNominee2();
// 		delNominee3();
// 	})

// 	$('#recordIPV').on('click', function (e) {
// 		var apiurl = baseUrl + "GetEncrptToken";
// 		var sendData = {
// 			ReferenceNumber: eref
// 		}
// 		sendData = JSON.stringify(sendData);
// 		$.ajax({
// 			url: apiurl,
// 			type: 'POST',
// 			data: sendData,
// 			contentType: "application/json",
// 			dataType: "json",
// 			success: function (response) {
// 				window.location.replace(webUrl + 'VideoIPV?ReferenceNumber=' + eref + '&Token=' + response.EncryptToken + '&Mode=yono');
// 			}
// 		});

// 	})

// 	$('#esign').on('click', function (e) {
// 		if ($('#terms').is(':checked')) {
// 			$('#mobileCheckModal').modal();
// 		} else {
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('Accept terms and conditions.');
// 		}
// 	})

// 	function getOverallStatus() {
// 		var apiurl = baseUrl + 'GetOverallStatusByReferenceNumberWB';
// 		var s_data = {
// 			ReferenceNumber: eref
// 		}
// 		s_data = JSON.stringify(s_data);
// 		$.ajax({
// 			url: apiurl,
// 			type: 'POST',
// 			data: s_data,
// 			contentType: "application/json",
// 			dataType: "json",
// 			success: function (response) {
// 				$('.loader-parent').hide();
// 				if (response.IsSuccess) {

// 					if (response.OverallStatusList[0].EBOStatus == 'D' || response.OverallStatusList[0].EBOStatus == 'S' || response.OverallStatusList[1].EBOStatus == 'D' || response.OverallStatusList[1].EBOStatus == 'S' || response.OverallStatusList[2].EBOStatus == 'D' || response.OverallStatusList[2].EBOStatus == 'S' || response.OverallStatusList[3].EBOStatus == 'D' || response.OverallStatusList[3].EBOStatus == 'S' || response.OverallStatusList[4].EBOStatus == 'D' || response.OverallStatusList[4].EBOStatus == 'S' || response.OverallStatusList[5].EBOStatus == 'D' || response.OverallStatusList[5].EBOStatus == 'S') {
// 						//$('#droppedModal').modal();
// 						resumeDropped();
// 					} else {
// 						if (response.OverallStatusList[1].KRAClient == 'Y') {
// 							isKra = 'Y';
// 						}

// 						if (response.OverallStatusList[1].IsCKYC == 'Y' && (response.OverallStatusList[1].ISCKYCUpdate == 'N' || response.OverallStatusList[1].ISCKYCUpdate == '')) {
// 							isCkyc = 'Y';
// 						}
// 						if (response.OverallStatusList[4].EBOStatus == 'R' || response.OverallStatusList[4].SPStatus != 'Y') {
// 							$('#screenOne').show();
// 							$('#screenProduct,#screenTwo,#screenThree,#screenFour,#screenFive,#screenSix,#backOne,#backTwo,#backThree,#backFour,#backFive').hide();
// 						} else if (response.OverallStatusList[2].EBOStatus == 'R' || response.OverallStatusList[2].SPStatus != 'Y') {
// 							$('#screenProduct,#backOne').show();
// 							$('#screenOne,#screenThree,#screenFour,#screenFive,#screenSix,#backTwo,#backThree,#backFour,#backFive').hide();
// 						} else if (response.OverallStatusList[5].EBOStatus == 'R' || response.OverallStatusList[5].SPStatus != 'Y') {
// 							$('#screenTwo,#backTwo').show();
// 							getDocsList();
// 							$('#screenOne,#screenProduct,#screenThree,#screenFour,#screenFive,#screenSix,#backOne,#backThree,#backFour,#backFive').hide();
// 							if (response.OverallStatusList[5].EBOStatus == 'R') {
// 								$('#cadrList').val('');
// 								$('#padrList').val('');
// 							}
// 						} else if (response.OverallStatusList[8].EBOStatus == 'R' || response.OverallStatusList[8].SPStatus != 'Y') {
// 							ipvStatus = false;
// 							$('#screenThree,#backTwo').show();
// 							$('#screenOne,#screenProduct,#screenTwo,#screenFour,#screenFive,#screenSix,#backOne,#backThree,#backFour,#backFive').hide();
// 							ipvOTP();
// 						} else if (response.OverallStatusList[9].EBOStatus == 'R') {
// 							$('#screenFour,#backFour').show();
// 							$('#screenOne,#screenProduct,#screenTwo,#screenThree,#screenFive,#screenSix,#backOne,#backTwo,#backFour,#backFive').hide();
// 						} else if (response.OverallStatusList[9].SPStatus == 'Y') {
// 							$('#screenOne,#screenProduct,#screenTwo,#screenThree,#screenFour, #backThree,#backFive').hide();
// 							$('#screenFive, #backFive').show();
// 						} else if (response.OverallStatusList[8].SPStatus == 'Y' && esign != 'True') {
// 							$('#ipvDone').removeClass('d-none');
// 							$('#screenOne').hide();
// 							$('#screenFour, #backFour').show()
// 						}
// 						if (response.OverallStatusList[8].SPStatus == 'Y') {
// 							ipvCompleted = true;
// 							$('#ipvDone').removeClass('d-none');
// 							$('#recordIPV').hide();
// 						}
// 					}
// 				}
// 			}
// 		});

// 		getDiyData();
// 		getPersonalData();
// 		getBankData();
// 		getImages();
// 	}

// 	function getDecryptUrl() {
// 		var encryptURL = baseUrl + "GetDecryptURL";
// 		eref = getParameterByName('ReferenceNumber', d_url);
// 		var sendData = {
// 			DecryptURL: eref
// 		}
// 		sendData = JSON.stringify(sendData);
// 		$('.loader-parent').show();
// 		if (sessionStorage.getItem('bankAddress') != 'y') {
// 			$('#corresBankAddress').html('').hide();
// 		}
// 		if (sessionStorage.getItem('permBankAddress') != 'y') {
// 			$('#perBankAddress').html('').hide();
// 		}
// 		$.ajax({
// 			url: encryptURL,
// 			type: 'POST',
// 			data: sendData,
// 			contentType: "application/json",
// 			dataType: "json",
// 			success: function (response) {
// 				ref = response.ReferenceNumber;
// 				$('#panNumber').html(response.PANNumber);
// 				$('#panNumber').html(response.PANNumber);
// 				$('.userDOB').html(response.DOB);
// 				userData.mobileNumber = response.Mobile;
// 				userData.email = response.Email;
// 				getPlans();
// 				getOverallStatus();
// 				getEmailStatus();
// 				if (ref && esign == 'True') {
// 					$('.loader-parent').show();
// 					signedPdfDownload();
// 					updateStatus();
// 				} else {
// 					$('.loader-parent').hide();
// 				}
// 			}
// 		})
// 	}

// 	function getNomineeData() {
// 		var apiurl = baseUrl + 'DIYGetNomineeDetailsByReferenceNumber';
// 		var sendData = {
// 			ReferenceNumber: eref
// 		}
// 		sendData = JSON.stringify(sendData);

// 		$.ajax({
// 			url: apiurl,
// 			type: 'POST',
// 			data: sendData,
// 			contentType: "application/json",
// 			dataType: "json",
// 			success: function (response) {
// 				if (response.IsSuccess) {
// 					if (response.IpvPOAandNomineeList[0]) {
// 						nUpdated = true;
// 						$('.nn').removeClass('sb-btn-primary');
// 						$('.ns').addClass('sb-btn-primary');
// 						$('#nomineeYes').show()
// 						$('#n1').val(response.IpvPOAandNomineeList[0].FirstName);
// 						$('#nl1').val(response.IpvPOAandNomineeList[0].LastName);
// 						$('#n2').val(response.IpvPOAandNomineeList[0].Mobile);
// 						$('#n3').val(response.IpvPOAandNomineeList[0].Email);
// 						$('#nidproof1').val(response.IpvPOAandNomineeList[0].NomineeProofId);
// 						$('#n5').val(response.IpvPOAandNomineeList[0].NomineeIDProofNumber);
// 						$('#ndob1').val(response.IpvPOAandNomineeList[0].NomineeDOB);
// 						$('#nrelation1').val(response.IpvPOAandNomineeList[0].RelationshipWithNominee);
// 						$('#nBP').val(response.IpvPOAandNomineeList[0].NomineeRatio);
// 						nomineeInfoId1 = response.IpvPOAandNomineeList[0].NomineeInfoId;
// 						if (response.IpvPOAandNomineeList[0].IsSamePermenantAddress == "0") {
// 							$('#naddress').removeClass('d-none');
// 							nNewAddress1 = true;
// 							$('#nsameAddreessBox1').prop('checked', false);
// 							$('#nFlat').val(response.IpvPOAandNomineeList[0].AddressLine1);
// 							$('#nStreet').val(response.IpvPOAandNomineeList[0].AddressLine2);
// 							$('#nLandmark').val(response.IpvPOAandNomineeList[0].AddressLine3);
// 							$('#nPincode').val(response.IpvPOAandNomineeList[0].PinCode);
// 							getState(response.IpvPOAandNomineeList[0].PinCode, 'nPincode');
// 							$('#nCity').val(response.IpvPOAandNomineeList[0].City);
// 							$('#nState').val(response.IpvPOAandNomineeList[0].State);
// 							nDistrict1 = response.IpvPOAandNomineeList[0].District;
// 						}
// 						if (response.IpvPOAandNomineeList[0].IsGuardian == "1") {
// 							$('#guardian1, #guardian1C').removeClass('d-none');
// 							nminor1 = true;

// 							$('#g1').val(response.IpvPOAandNomineeList[0].GuardianFirstName);
// 							$('#gl1').val(response.IpvPOAandNomineeList[0].GuardianLastName);
// 							$('#g2').val(response.IpvPOAandNomineeList[0].GuardianMobile);
// 							$('#g3').val(response.IpvPOAandNomineeList[0].GuardianEmail);
// 							$('#gidproof1').val(response.IpvPOAandNomineeList[0].GuardianProofId);
// 							$('#g4').val(response.IpvPOAandNomineeList[0].GuardianIDProofNumber);
// 							$('#gdob1').val(response.IpvPOAandNomineeList[0].GuardianDateofBirth);
// 							$('#grelation1').val(response.IpvPOAandNomineeList[0].GuardianRelationship);
// 							if (response.IpvPOAandNomineeList[0].IsSameNomineeANDGuardianAddess == "0") {
// 								$('#gaddress').removeClass('d-none');
// 								gNewAddress1 = true;
// 								$("#gsameAddreessBox1").prop('checked', false);
// 								$('#gFlat').val(response.IpvPOAandNomineeList[0].GuardianAddressLine1);
// 								$('#gStreet').val(response.IpvPOAandNomineeList[0].GuardianAddressLine2);
// 								$('#gLandmark').val(response.IpvPOAandNomineeList[0].GuardianAddressLine3);
// 								$('#gPincode').val(response.IpvPOAandNomineeList[0].GuardianPinCode);
// 								getState(response.IpvPOAandNomineeList[0].GuardianPinCode, 'gPincode');
// 								$('#gCity').val(response.IpvPOAandNomineeList[0].GuardianCity);
// 								$('#gState').val(response.IpvPOAandNomineeList[0].GuardianState);
// 								gDistrict1 = response.IpvPOAandNomineeList[0].GuardianDistrict;
// 							}
// 						}
// 					}
// 					if (response.IpvPOAandNomineeList[1]) {
// 						adn2 = true;
// 						$('#nTwo').removeClass('d-none');
// 						$('#n21').val(response.IpvPOAandNomineeList[1].FirstName);
// 						$('#nl21').val(response.IpvPOAandNomineeList[1].LastName);
// 						$('#n22').val(response.IpvPOAandNomineeList[1].Mobile);
// 						$('#n23').val(response.IpvPOAandNomineeList[1].Email);
// 						$('#nidproof2').val(response.IpvPOAandNomineeList[1].NomineeProofId);
// 						$('#n25').val(response.IpvPOAandNomineeList[1].NomineeIDProofNumber);
// 						$('#ndob2').val(response.IpvPOAandNomineeList[1].NomineeDOB);
// 						$('#nrelation2').val(response.IpvPOAandNomineeList[1].RelationshipWithNominee);
// 						$('#nBP2').val(response.IpvPOAandNomineeList[1].NomineeRatio);
// 						nomineeInfoId2 = response.IpvPOAandNomineeList[1].NomineeInfoId;
// 						if (response.IpvPOAandNomineeList[1].IsSamePermenantAddress == "0") {
// 							$('#naddress2').removeClass('d-none');
// 							nNewAddress2 = true;
// 							$('#nsameAddreessBox2').prop('checked', false);
// 							$('#nFlat2').val(response.IpvPOAandNomineeList[1].AddressLine1);
// 							$('#nStreet2').val(response.IpvPOAandNomineeList[1].AddressLine2);
// 							$('#nLandmark2').val(response.IpvPOAandNomineeList[1].AddressLine3);
// 							$('#nPincode2').val(response.IpvPOAandNomineeList[1].PinCode);
// 							getState(response.IpvPOAandNomineeList[1].PinCode, 'nPincode2');
// 							$('#nCity2').val(response.IpvPOAandNomineeList[1].City);
// 							$('#nState2').val(response.IpvPOAandNomineeList[1].State);
// 							nDistrict2 = response.IpvPOAandNomineeList[1].District;
// 						}
// 						if (response.IpvPOAandNomineeList[1].IsGuardian == "1") {
// 							$('#guardian2, #guardian2C').removeClass('d-none');
// 							nminor2 = true;

// 							$('#g21').val(response.IpvPOAandNomineeList[1].GuardianFirstName);
// 							$('#gl21').val(response.IpvPOAandNomineeList[1].GuardianLastName);
// 							$('#g22').val(response.IpvPOAandNomineeList[1].GuardianMobile);
// 							$('#g23').val(response.IpvPOAandNomineeList[1].GuardianEmail);
// 							$('#gidproof2').val(response.IpvPOAandNomineeList[1].GuardianProofId);
// 							$('#g24').val(response.IpvPOAandNomineeList[1].GuardianIDProofNumber);
// 							$('#gdob2').val(response.IpvPOAandNomineeList[1].GuardianDateofBirth);
// 							$('#grelation2').val(response.IpvPOAandNomineeList[1].GuardianRelationship);
// 							if (response.IpvPOAandNomineeList[1].IsSameNomineeANDGuardianAddess == "0") {
// 								$('#gaddress2').removeClass('d-none');
// 								gNewAddress2 = true;
// 								$("#gsameAddreessBox2").prop('checked', false);
// 								$('#gFlat2').val(response.IpvPOAandNomineeList[1].GuardianAddressLine1);
// 								$('#gStreet2').val(response.IpvPOAandNomineeList[1].GuardianAddressLine2);
// 								$('#gLandmark2').val(response.IpvPOAandNomineeList[1].GuardianAddressLine3);
// 								$('#gPincode2').val(response.IpvPOAandNomineeList[1].GuardianPinCode);
// 								getState(response.IpvPOAandNomineeList[1].GuardianPinCode, 'gPincode2');
// 								$('#gCity2').val(response.IpvPOAandNomineeList[1].GuardianCity);
// 								$('#gState2').val(response.IpvPOAandNomineeList[1].GuardianState);
// 								gDistrict2 = response.IpvPOAandNomineeList[1].GuardianDistrict;
// 							}
// 						}
// 					}
// 					if (response.IpvPOAandNomineeList[2]) {
// 						adn3 = true;
// 						$('#nThree').removeClass('d-none');
// 						$('#n31').val(response.IpvPOAandNomineeList[2].FirstName);
// 						$('#nl31').val(response.IpvPOAandNomineeList[2].LastName);
// 						$('#n32').val(response.IpvPOAandNomineeList[2].Mobile);
// 						$('#n33').val(response.IpvPOAandNomineeList[2].Email);
// 						$('#nidproof3').val(response.IpvPOAandNomineeList[2].NomineeProofId);
// 						$('#n35').val(response.IpvPOAandNomineeList[2].NomineeIDProofNumber);
// 						$('#ndob3').val(response.IpvPOAandNomineeList[2].NomineeDOB);
// 						$('#nrelation3').val(response.IpvPOAandNomineeList[2].RelationshipWithNominee);
// 						$('#nBP3').val(response.IpvPOAandNomineeList[2].NomineeRatio);
// 						nomineeInfoId3 = response.IpvPOAandNomineeList[2].NomineeInfoId;
// 						if (response.IpvPOAandNomineeList[2].IsSamePermenantAddress == "0") {
// 							$('#naddress3').removeClass('d-none');
// 							nNewAddress3 = true;
// 							$('#nsameAddreessBox3').prop('checked', false);
// 							$('#nFlat3').val(response.IpvPOAandNomineeList[2].AddressLine1);
// 							$('#nStreet3').val(response.IpvPOAandNomineeList[2].AddressLine2);
// 							$('#nLandmark3').val(response.IpvPOAandNomineeList[2].AddressLine3);
// 							$('#nPincode3').val(response.IpvPOAandNomineeList[2].PinCode);
// 							getState(response.IpvPOAandNomineeList[2].PinCode, 'nPincode3');
// 							$('#nCity3').val(response.IpvPOAandNomineeList[2].City);
// 							$('#nState3').val(response.IpvPOAandNomineeList[2].State);
// 							nDistrict3 = response.IpvPOAandNomineeList[2].District;
// 						}
// 						if (response.IpvPOAandNomineeList[2].IsGuardian == "1") {
// 							$('#guardian3, #guardian3C').removeClass('d-none');
// 							nminor3 = true;

// 							$('#g31').val(response.IpvPOAandNomineeList[2].GuardianFirstName);
// 							$('#gl31').val(response.IpvPOAandNomineeList[2].GuardianLastName);
// 							$('#g32').val(response.IpvPOAandNomineeList[2].GuardianMobile);
// 							$('#g33').val(response.IpvPOAandNomineeList[2].GuardianEmail);
// 							$('#gidproof3').val(response.IpvPOAandNomineeList[2].GuardianProofId);
// 							$('#g34').val(response.IpvPOAandNomineeList[2].GuardianIDProofNumber);
// 							$('#gdob3').val(response.IpvPOAandNomineeList[2].GuardianDateofBirth);
// 							$('#grelation3').val(response.IpvPOAandNomineeList[2].GuardianRelationship);
// 							if (response.IpvPOAandNomineeList[2].IsSameNomineeANDGuardianAddess == "0") {
// 								$('#gaddress3').removeClass('d-none');
// 								gNewAddress3 = true;
// 								$("#gsameAddreessBox3").prop('checked', false);
// 								$('#gFlat3').val(response.IpvPOAandNomineeList[2].GuardianAddressLine1);
// 								$('#gStreet3').val(response.IpvPOAandNomineeList[2].GuardianAddressLine2);
// 								$('#gLandmark3').val(response.IpvPOAandNomineeList[2].GuardianAddressLine3);
// 								$('#gPincode3').val(response.IpvPOAandNomineeList[2].GuardianPinCode);
// 								getState(response.IpvPOAandNomineeList[2].GuardianPinCode, 'gPincode3');
// 								$('#gCity3').val(response.IpvPOAandNomineeList[2].GuardianCity);
// 								$('#gState3').val(response.IpvPOAandNomineeList[2].GuardianState);
// 								gDistrict3 = response.IpvPOAandNomineeList[2].GuardianDistrict;
// 							}
// 						}
// 					}
// 				} else {
// 					$('.ns').removeClass('sb-btn-primary');
// 					$('.nn').addClass('sb-btn-primary');
// 				}
// 			},
// 			error: function () {}
// 		});
// 	}

// 	function getPersonalData() {
// 		var apiurl = baseUrl + 'DIYGetClientOtherInfoByReferenceNumber';
// 		var sendData = {
// 			ReferenceNumber: eref
// 		}
// 		sendData = JSON.stringify(sendData);
// 		$.ajax({
// 			url: apiurl,
// 			type: 'POST',
// 			data: sendData,
// 			contentType: "application/json",
// 			dataType: "json",
// 			success: function (response) {
// 				if (response.IsSuccess) {
// 					$('#occupation').val(response.ObjCDIYClientOtherInfo.Occupation);
// 					$('.occupation span#viewOcc' + response.ObjCDIYClientOtherInfo.Occupation).removeClass('d-none');
// 					$('#tradingYears').html(response.ObjCDIYClientOtherInfo.TradingExperience);
// 					$('.trdExperience').html(response.ObjCDIYClientOtherInfo.TradingExperience);
// 					$("#an" + response.ObjCDIYClientOtherInfo.AnnualIncome).removeClass('bg-white');
// 					$("#an" + response.ObjCDIYClientOtherInfo.AnnualIncome + " span").addClass('text-white');
// 					$(".view-income-btn-group span#viewIn" + response.ObjCDIYClientOtherInfo.AnnualIncome).removeClass('d-none');
// 					$('.userGender').html(response.ObjCDIYClientOtherInfo.Gender);
// 					$('#motherName').html(response.ObjCDIYClientOtherInfo.MotherNameFirstName);
// 					$('.maritalStatus').html(response.ObjCDIYClientOtherInfo.MaritialStatus);
// 					/*emailBelongsTo = response.ObjCDIYClientOtherInfo.ProvidedEmailIdbelongingto;
// 					if (emailBelongsTo == 'S') {
// 					$('.userEmailBelongs').html('Self');
// 					} else if (emailBelongsTo == 'U') {
// 					$('.userEmailBelongs').html('Spouse');
// 					} else if (emailBelongsTo == 'P') {
// 					$('.userEmailBelongs').html('Parent');
// 					} else if (emailBelongsTo == 'C') {
// 					$('.userEmailBelongs').html('Children');
// 					}*/
// 					mobileBelongsTo = response.ObjCDIYClientOtherInfo.Mobilebelongsto;
// 					if (mobileBelongsTo == 'S') {
// 						$('.userMobileBelongs').html('Self');
// 					} else if (mobileBelongsTo == 'U') {
// 						$('.userMobileBelongs').html('Spouse');
// 					} else if (mobileBelongsTo == 'P') {
// 						$('.userMobileBelongs').html('Parent');
// 					} else if (mobileBelongsTo == 'C') {
// 						$('.userMobileBelongs').html('Children');
// 					}
// 					//$('#emailBelongsOptions span.' + response.ObjCDIYClientOtherInfo.ProvidedEmailIdbelongingto.toLowerCase()).addClass('sb-btn-primary');
// 					//$('#mobileBelongsOptions span.' + response.ObjCDIYClientOtherInfo.Mobilebelongsto.toLowerCase()).addClass('sb-btn-primary');
// 					//emailVerified = true;
// 					$('#emailBelongs').show();
// 					$('#email').hide();
// 					$('#emailVerify').hide();
// 					/*isNominee = response.ObjCDIYClientOtherInfo.IsNominee;
// 					if (isNominee) {
// 					$('.nn').removeClass('sb-btn-primary');
// 					$('.ns').addClass('sb-btn-primary');
// 					$('#nomineeYes').show()
// 					//$('.viewNominee').html('Yes');

// 					} else {
// 					$('.ns').removeClass('sb-btn-primary');
// 					$('.nn').addClass('sb-btn-primary');
// 					$('.viewNominee').html('No');
// 					}*/
// 				}
// 				$('.loader-parent').hide();
// 			}
// 		});

// 		getNomineeData();
// 	}

// 	function getBankData() {
// 		var apiurl = baseUrl + 'DIYGetBankDetailsByReferenceNumber';
// 		var sendData = {
// 			ReferenceNumber: eref
// 		}
// 		sendData = JSON.stringify(sendData);
// 		$.ajax({
// 			url: apiurl,
// 			type: 'POST',
// 			data: sendData,
// 			contentType: "application/json",
// 			dataType: "json",
// 			success: function (response) {
// 				$('.accNumber').html(response.BankDetailsList[0].AccountNumber);
// 				userData.accountNumber = response.BankDetailsList[0].AccountNumber;
// 				$('.ifscCode').html(response.BankDetailsList[0].IFSC);
// 				userData.ifscCode = response.BankDetailsList[0].IFSC;
// 				addressBank = response.BankDetailsList[0].Address;
// 				micr = response.BankDetailsList[0].MICRCode;
// 			}
// 		});
// 	}

// 	function getSbiUserData() {
// 		//var apiurl = baseUrl + "FetchYonoCustomerInformationTest";
// 		var apiurl = "data.json";
// 		var param1 = (getParameterByName('Param1', d_url));
// 		var param2 = (getParameterByName('Param2', d_url));

// 		if (param1 && param2) {
// 			apiurl = baseUrl + "YonoCustomerInformation";
// 		}

// 		var sendData = {
// 			referenceNumber: param2,
// 			access_token: param1
// 		}

// 		sessionStorage.setItem('param', param2);
// 		$('.loader-parent').show();
// 		sendData = JSON.stringify(sendData)
// 			$.ajax({
// 				url: apiurl,
// 				type: 'POST',
// 				data: sendData,
// 				contentType: "application/json",
// 				dataType: "json",
// 				success: function (response) {
// 					if (response.IsSuccess) {
// 						userData = response.customerInformation;
// 						if (userData.fatherOrSpouse.toLowerCase() == 'father') {
// 							userData.fatherOrSpouse = 'F'
// 						} else {
// 							userData.fatherOrSpouse = 'F'
// 						}

// 						if (userData.maritalStatus.toLowerCase() == 'married') {
// 							userData.maritalStatus = 'M';
// 						} else if (userData.maritalStatus.toLowerCase() == 'single') {
// 							userData.maritalStatus = 'S';
// 						} else if (userData.maritalStatus.toLowerCase() == 'divorced') {
// 							userData.maritalStatus = 'D';
// 						} else if (userData.maritalStatus.toLowerCase() == 'widow') {
// 							userData.maritalStatus = 'W';
// 						} else if (userData.maritalStatus.toLowerCase() == 'widower') {
// 							userData.maritalStatus = 'WR';
// 						} else if (userData.maritalStatus.toLowerCase() == 'separate') {
// 							userData.maritalStatus = 'SP';
// 						} else {
// 							userData.maritalStatus = 'O';
// 						}
// 						$('.userTitle').html(userData.title);

// 						if (userData.middleName) {
// 							$('.fullName').html(userData.firstName + ' ' + userData.middleName + ' ' + userData.lastName);
// 						} else {
// 							$('.fullName').html(userData.firstName + ' ' + userData.lastName);
// 						}
// 						if (!sessionStorage.getItem('bankAddress')) {
// 							bankAddress = true;
// 							sessionStorage.setItem('newAddress', 'n');
// 							sessionStorage.setItem('bankAddress', 'y');
// 							sessionStorage.setItem('kraAddress', 'n');
// 						}
// 						caddressLine1 = userData.addressLine1;
// 						caddressLine2 = userData.addressLine2;
// 						caddressLine3 = userData.addressLine3;
// 						caddressCity = userData.city;
// 						caddressDistrict = userData.district;
// 						caddressPin = userData.pinCode;
// 						paddressLine1 = userData.addressLine1;
// 						paddressLine2 = userData.addressLine2;
// 						paddressLine3 = userData.addressLine3;
// 						paddressCity = userData.city;
// 						paddressDistrict = userData.district;
// 						paddressPin = userData.pinCode;
// 						if (!sessionStorage.getItem('permBankAddress')) {
// 							sessionStorage.setItem('permNewAddress', 'n');
// 							sessionStorage.setItem('permBankAddress', 'y');
// 							sessionStorage.setItem('permKraAddress', 'n');
// 						}
// 						$('.fullAddress, .bankfullAddress,.perBankfullAddress').html(userData.addressLine1 + ', ' + userData.addressLine2 + ', ' + userData.addressLine3);
// 						$('.locationAddress, .banklocationAddress, .perBanklocationAddress').html(userData.city + ', ' + userData.district + ', ' + userData.pinCode);

// 						getState(userData.pinCode, 'cPincode');
// 						getState(userData.pinCode, 'pPincode');

// 						$('.mobileNumber').html(userData.mobileNumber);
// 						$('#editMobile').html(userData.mobileNumber)
// 						$('#userEmail, #editEmail').val(userData.email);
// 						$('.userEmail').html(userData.email);
// 						$('#panNumber').html(userData.panNumber);
// 						$('#motherName').html(userData.motherName);
// 						$('.userGender').html(userData.gender);
// 						$('.maritalStatus').html(userData.maritalStatus);
// 						$('.accNumber').html(userData.accountNumber);
// 						$('.ifscCode').html(userData.ifscCode);
// 						$('.userDOB').html(userData.dob);
// 						$('.loader-parent').hide();
// 						if (!eref) {
// 							panValidation(userData);
// 						} else {
// 							getDecryptUrl();
// 						}
// 					} else {
// 						$('.loader-parent').hide();
// 					}
// 				}
// 			});
// 	}

// 	esign = getParameterByName('Esign', d_url);

// 	var ipvref = getParameterByName('ReferenceNumber', d_url);

// 	if (esign == 'True') {
// 		$('#screenOne,#screenTwo,#screenThree,#screenFour').hide();
// 		$('#screenFive, #backFive').show();
// 		getDecryptUrl();
// 	} else if (esign == 'Failed') {
// 		$('#screenOne,#screenTwo,#screenThree,#screenFive').hide();
// 		$('#screenFour, #backFour').show();
// 		getDecryptUrl();
// 	} else if (ipvref && !esign) {
// 		getDecryptUrl();
// 	} else {
// 		getSbiUserData();
// 	}

// 	$('#sameAddreess').hide();
// 	$('#corresNewAddressArea').hide();
// 	$('#perNewAddressArea').hide();

// 	$('#editPassport').on('click', function (e) {
// 		$('.clientImgName .img-name').html();
// 		$('.clientImg').show();
// 		$('.clientImgName').hide();
// 	})

// 	$('#editPan').on('click', function (e) {
// 		$('.panImgName .img-name').html();
// 		$('.panImg').show();
// 		$('.panImgName').hide();
// 	})

// 	$('#editSignature').on('click', function (e) {
// 		$('.signatureImg').show();
// 		$('.signatureImgName').hide();
// 		$('.signatureImgName .img-name').html();
// 	})

// 	$('#editcAdr').on('click', function (e) {
// 		$('.cadrImg').show();
// 		$('.cadrImgName').hide();
// 		$('.cadrImgName .img-name').html();
// 		$('#CorrespondenceAddress, #CorrespondenceAddressC').val('');
// 	})

// 	$('#editcAdr2').on('click', function (e) {
// 		$('.cadr2Img').show();
// 		$('.cadr2ImgName').hide();
// 		$('.cadr2ImgName .img-name').html();
// 		$('#CorrespondenceAddress2, #CorrespondenceAddressC2').val('');
// 	})

// 	$('#editpAdr').on('click', function (e) {
// 		$('.padrImg').show();
// 		$('.padrImgName').hide();
// 		$('.padrImgName .img-name').html();
// 		$('#PermenantAddress, #PermenantAddressC').val('');
// 	})

// 	$('#editpAdr2').on('click', function (e) {
// 		$('.padr2Img').show();
// 		$('.padr2ImgName').hide();
// 		$('.padr2ImgName .img-name').html();
// 		$('#PermenantAddress2, #PermenantAddressC2').val('');
// 	})

// 	$('#editIncome').on('click', function (e) {
// 		$('.iImg').show();
// 		$('.iImgName').hide();
// 		$('.iImgName .img-name').html();
// 		$('#Income, #IncomeC').val('');
// 	})

// 	$('#v-pills-profile-tab').on('click', function (e) {
// 		emcount = 0;
// 		e.preventDefault();
// 		$('#email').show();
// 		$('#verifyBtn').prop('disabled', false);
// 		$('#emailVerify, #emailBelongs').hide()
// 		$('#v-pills-profile-tab').tab('show')
// 		if (emailVerified) {
// 			$('#emailBelongs').show();
// 			$('#email').hide();
// 			$('#emailVerify').hide();
// 		}
// 	});

// 	$('#trdNext, #tabFive').on('click', function (e) {
// 		e.preventDefault();
// 		$('#v-pills-nominee-tab').tab('show')
// 		// $('#v-pills-occupation-tab').tab('show')
// 	})
// 	$('#nomineeNo, #tabSix').on('click', function (e) {
// 		e.preventDefault();
// 		$('#v-pills-occupation-tab').tab('show')
// 	})

// 	$('#v-pills-income button').on('click', function (e) {
// 		e.preventDefault();
// 		$('#screenOne, #nomineeYes').hide();
// 		$('#screenTwo,#backOne').show()
// 	})

// 	$('#sameAddreessBox').change(function () {
// 		if (this.checked) {
// 			$('#sameAddreess').hide();
// 			permNewAddress = false;
// 		} else {
// 			$('#sameAddreess').show();
// 		}
// 	});

// 	$('#nsameAddreessBox1').change(function () {
// 		if (this.checked) {
// 			$('#naddress').addClass('d-none');
// 			nNewAddress1 = false;
// 			var nfields = $('#naddress input[type=text], #naddress input[type=tel]');
// 			nfields.each(function () {
// 				$(this).val('');
// 			});
// 		} else {
// 			$('#naddress').removeClass('d-none');
// 			nNewAddress1 = true;
// 		}
// 	});

// 	$('#nsameAddreessBox2').change(function () {
// 		if (this.checked) {
// 			$('#naddress2').addClass('d-none');
// 			nNewAddress2 = false;
// 			var nfields = $('#naddress2 input[type=text], #naddress2 input[type=tel]');
// 			nfields.each(function () {
// 				$(this).val('');
// 			});
// 		} else {
// 			$('#naddress2').removeClass('d-none');
// 			nNewAddress2 = true;
// 		}
// 	});

// 	$('#nsameAddreessBox3').change(function () {
// 		if (this.checked) {
// 			$('#naddress3').addClass('d-none');
// 			nNewAddress3 = false;
// 			var nfields = $('#naddress3 input[type=text], #naddress3 input[type=tel]');
// 			nfields.each(function () {
// 				$(this).val('');
// 			});
// 		} else {
// 			$('#naddress3').removeClass('d-none');
// 			nNewAddress3 = true;
// 		}
// 	});

// 	$('#gsameAddreessBox1').change(function () {
// 		if (this.checked) {
// 			$('#gaddress').addClass('d-none');
// 			gNewAddress1 = false;
// 			var gfields = $('#gaddress input[type=text], #gaddress input[type=tel]');
// 			gfields.each(function () {
// 				$(this).val('');
// 			});
// 		} else {
// 			$('#gaddress').removeClass('d-none');
// 			gNewAddress1 = true;
// 		}
// 	});

// 	$('#gsameAddreessBox2').change(function () {
// 		if (this.checked) {
// 			$('#gaddress2').addClass('d-none');
// 			gNewAddress2 = false;
// 			var gfields = $('#gaddress2 input[type=text], #gaddress2 input[type=tel]');
// 			gfields.each(function () {
// 				$(this).val('');
// 			});
// 		} else {
// 			$('#gaddress2').removeClass('d-none');
// 			gNewAddress2 = true;
// 		}
// 	});

// 	$('#gsameAddreessBox3').change(function () {
// 		if (this.checked) {
// 			$('#gaddress3').addClass('d-none');
// 			gNewAddress3 = false;
// 			var gfields = $('#gaddress3 input[type=text], #gaddress3 input[type=tel]');
// 			gfields.each(function () {
// 				$(this).val('');
// 			});
// 		} else {
// 			$('#gaddress3').removeClass('d-none');
// 			gNewAddress3 = true;
// 		}
// 	});

// 	$('#docNext').on('click', function (e) {
// 		var error = 0;
// 		if (!panImageUpdt) {
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('Please Upload PAN Proof.');
// 			error++;
// 			return false;
// 		}
// 		if (!photoImageUpdt) {
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('Please Upload Client Photo Proof.');
// 			error++;
// 			return false;
// 		}
// 		if (!signatureUpdt) {
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('Please Upload Signature Specimen.');
// 			error++;
// 			return false;
// 		}
// 		if (!cAddressUpdt) {
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('Please Upload  Correspondence Address Proof.');
// 			error++;
// 			return false;
// 		}
// 		if (!pAddressUpdt) {
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('Please Upload Permanent Address Proof.');
// 			error++;
// 			return false;
// 		}

// 		if (fando && !iImageUpdt) {
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('Please Upload Income Proof.');
// 			error++;
// 			return false;
// 		}
// 		if (error == 0) {
// 			$('#screenTwo, #backTwo').hide();
// 			/*if (!ipvCompleted && !selfTrue) {
// 			$('#screenThree, #backThree').show();
// 			ipvOTP();
// 			} else {
// 			$('#screenFour, #backFour').show();
// 			}*/
// 			if (ipvStatus) {
// 				$('#screenFour, #backFour').show();
// 			} else {
// 				$('#screenThree, #backThree').show();
// 				ipvOTP();
// 			}
// 		}
// 	})

// 	function ipvOTP() {
// 		$('.loader-parent').show();
// 		var apiurl = baseUrl + "VideoIPVOTPGenerationNew";
// 		var sendData = {
// 			Email: userData.email,
// 			Mobile: userData.mobileNumber,
// 			ReferenceNumber: ref
// 		};
// 		sendData = JSON.stringify(sendData);
// 		$.ajax({
// 			url: apiurl,
// 			type: 'POST',
// 			data: sendData,
// 			contentType: "application/json",
// 			dataType: "json",
// 			success: function (response) {
// 				$('.loader-parent').hide();
// 				if (response.IsSuccess) {
// 					$('#ipvOTP').val(response.VideoIPVOTP);
// 					$('#ipvOTP').prop('disabled', true);
// 				}
// 			},
// 			error: function () {
// 				$('.loader-parent').hide();
// 			}
// 		});

// 	}

// 	$('.goTo').on('click', function (e) {
// 		window.location.assign("https://www.sbisecurities.in");
// 	});

// 	$('#corresKRAAddress').on('click', function (e) {
// 		$('#corresNewAddress .card,#corresBankAddress .card').removeClass('border border-primary');
// 		$('#corresNewAddress .pull-right,#corresBankAddress .pull-right').addClass('d-none');
// 		$('#corresKRAAddress .card').addClass('border border-primary');
// 		$('#corresKRAAddress .pull-right').removeClass('d-none');
// 		$('#corresNewAddressArea').hide();

// 		if (kraClnt == 'Y') {
// 			$('.fullAddress').html(kraData.APP_COR_ADD1 + ', ' + kraData.APP_COR_ADD2 + ', ' + kraData.APP_COR_ADD3);
// 			$('.locationAddress').html(kraData.APP_COR_CITY + ', ' + kraData.kra_caddressDistrict + ', ' + kraData.APP_COR_PINCD);
// 			caddressLine1 = kraData.APP_COR_ADD1;
// 			caddressLine2 = kraData.APP_COR_ADD2;
// 			caddressLine3 = kraData.APP_COR_ADD3;
// 			caddressCity = kraData.APP_COR_CITY;
// 			caddressDistrict = kraData.kra_caddressDistrict;
// 			caddressState = kraData.kra_caddressState;
// 			caddressStateId = kraData.kra_caddressStateId;
// 			caddressPin = kraData.APP_COR_PINCD;
// 			isKRAUpdate = 'N';
// 		} else if (ckycClnt == 'Y') {
// 			$('.fullAddress').html(ckycData.CKYCCorAdd1 + ', ' + ckycData.CKYCCorAdd2 + ', ' + ckycData.CKYCCorAdd3);
// 			$('.locationAddress').html(ckycData.CKYCCorAddCity + ', ' + ckycData.ckyc_caddressDistrict + ', ' + ckycData.CKYCCorAddPin);
// 			caddressLine1 = ckycData.CKYCCorAdd1;
// 			caddressLine2 = ckycData.CKYCCorAdd2;
// 			caddressLine3 = ckycData.CKYCCorAdd3;
// 			caddressCity = ckycData.CKYCCorAddCity;
// 			caddressDistrict = ckycData.ckyc_caddressDistrict;
// 			caddressState = ckycData.ckyc_caddressState;
// 			caddressStateId = ckycData.ckyc_caddressStateId;
// 			caddressPin = ckycData.CKYCCorAddPin;
// 			isCKYCUpdate = 'N';
// 		}

// 		corresNewAddress = false;
// 		bankAddress = false;
// 		kraAddress = true;
// 	})

// 	$('#corresBankAddress').on('click', function (e) {
// 		$('#corresKRAAddress .card,#corresNewAddress .card').removeClass('border border-primary');
// 		$('#corresKRAAddress .pull-right,#corresNewAddress .pull-right').addClass('d-none');
// 		$('#corresBankAddress .card').addClass('border border-primary');
// 		$('#corresBankAddress .pull-right').removeClass('d-none');
// 		$('#corresNewAddressArea').hide();
// 		if (kraClnt == 'Y') {
// 			$('.fullAddress').html(userData.addressLine1 + ', ' + userData.addressLine2 + ', ' + userData.addressLine3);
// 			$('.locationAddress').html(userData.city + ', ' + userData.district + ', ' + userData.pinCode);
// 			caddressLine1 = userData.addressLine1;
// 			caddressLine2 = userData.addressLine2;
// 			caddressLine3 = userData.addressLine3;
// 			caddressCity = userData.city;
// 			caddressDistrict = userData.district;
// 			caddressState = userData.state;
// 			caddressStateId = userData.stateId;
// 			caddressPin = userData.pinCode;
// 			isKRAUpdate = 'Y';
// 		} else if (ckycClnt == 'Y') {
// 			$('.fullAddress').html(userData.addressLine1 + ', ' + userData.addressLine2 + ', ' + userData.addressLine3);
// 			$('.locationAddress').html(userData.city + ', ' + userData.district + ', ' + userData.pinCode);
// 			caddressLine1 = userData.addressLine1;
// 			caddressLine2 = userData.addressLine2;
// 			caddressLine3 = userData.addressLine3;
// 			caddressCity = userData.city;
// 			caddressDistrict = userData.district;
// 			caddressState = userData.state;
// 			caddressStateId = userData.stateId;
// 			caddressPin = userData.pinCode;
// 			isCKYCUpdate = 'Y';
// 		}
// 		corresNewAddress = false;
// 		bankAddress = true;
// 		kraAddress = false;
// 	})

// 	$('#corresNewAddress').on('click', function (e) {
// 		if (acount == 0) {
// 			acount++;
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('Please get this address updated in Bank record by visiting your Home Branch at the earliest.');
// 		}
// 		$('#corresKRAAddress .card,#corresBankAddress .card').removeClass('border border-primary');
// 		$('#corresKRAAddress .pull-right,#corresBankAddress .pull-right').addClass('d-none');
// 		$('#corresNewAddress .card').addClass('border border-primary');
// 		$('#corresNewAddress .pull-right').removeClass('d-none');
// 		$('#corresNewAddressArea').show();
// 		corresNewAddress = true;
// 		bankAddress = false;
// 		kraAddress = false;
// 	})

// 	$('#perKRAAddress').on('click', function (e) {
// 		$('#perNewAddress .card,#perBankAddress .card').removeClass('border border-primary');
// 		$('#perNewAddress .pull-right,#perBankAddress .pull-right').addClass('d-none');
// 		$('#perKRAAddress .card').addClass('border border-primary');
// 		$('#perKRAAddress .pull-right').removeClass('d-none');
// 		$('#perNewAddressArea').hide();

// 		if (kraClnt == 'Y') {
// 			$('.perKrafullAddress').html(kraData.APP_PER_ADD1 + ', ' + kraData.APP_PER_ADD2 + ', ' + kraData.APP_PER_ADD3);
// 			$('.perKralocationAddress').html(kraData.APP_PER_CITY + ', ' + kraData.kra_paddressDistrict + ', ' + kraData.APP_PER_PINCD);
// 			paddressLine1 = kraData.APP_PER_ADD1;
// 			paddressLine2 = kraData.APP_PER_ADD2;
// 			paddressLine3 = kraData.APP_PER_ADD3;
// 			paddressCity = kraData.APP_PER_CITY;
// 			paddressDistrict = kraData.kra_paddressDistrict;
// 			paddressState = kraData.kra_paddressState;
// 			paddressStateId = kraData.kra_paddressStateId;
// 			paddressPin = kraData.APP_PER_PINCD;
// 			permNewAddress = false;
// 			permBankAddress = false;
// 			permKraAddress = true;
// 		} else if (ckycClnt == 'Y') {
// 			$('.perKrafullAddress').html(ckycData.CKYCPerAdd1 + ', ' + ckycData.CKYCPerAdd2 + ', ' + ckycData.CKYCPerAdd3);
// 			$('.perKralocationAddress').html(ckycData.CKYCPerAddCity + ', ' + ckycData.ckyc_paddressDistrict + ', ' + ckycData.CKYCPerAddPin);
// 			paddressLine1 = ckycData.CKYCPerAdd1;
// 			paddressLine2 = ckycData.CKYCPerAdd2;
// 			paddressLine3 = ckycData.CKYCPerAdd3;
// 			paddressCity = ckycData.CKYCPerAddCity;
// 			paddressDistrict = ckycData.ckyc_paddressDistrict;
// 			paddressState = ckycData.ckyc_paddressState;
// 			paddressStateId = ckycData.ckyc_paddressStateId;
// 			paddressPin = ckycData.CKYCPerAddPin;
// 			permNewAddress = false;
// 			permBankAddress = false;
// 			permKraAddress = true;
// 		}
// 	})

// 	$('#perBankAddress').on('click', function (e) {
// 		$('#perKRAAddress .card,#perNewAddress .card').removeClass('border border-primary');
// 		$('#perKRAAddress .pull-right,#perNewAddress .pull-right').addClass('d-none');
// 		$('#perBankAddress .card').addClass('border border-primary');
// 		$('#perBankAddress .pull-right').removeClass('d-none');
// 		$('#perNewAddressArea').hide();

// 		$('.perBankfullAddress').html(paddressLine1 + ', ' + paddressLine2 + ', ' + paddressLine3);
// 		$('.perBanklocationAddress').html(paddressCity + ', ' + paddressDistrict + ', ' + paddressPin);

// 		if (kraClnt == 'Y') {
// 			isKRAUpdate = 'Y';
// 		} else if (ckycClnt == 'Y') {
// 			isCKYCUpdate = 'Y';
// 		}
// 		permNewAddress = false;
// 		permBankAddress = true;
// 		permKraAddress = false;
// 	})

// 	$('#perNewAddress').on('click', function (e) {
// 		$('#perKRAAddress .card,#perBankAddress .card').removeClass('border border-primary');
// 		$('#perKRAAddress .pull-right,#perBankAddress .pull-right').addClass('d-none');
// 		$('#perNewAddress .card').addClass('border border-primary');
// 		$('#perNewAddress .pull-right').removeClass('d-none');
// 		$('#perNewAddressArea').show();
// 		permNewAddress = true;
// 		permBankAddress = false;
// 		permKraAddress = false;
// 	})

// 	$('.tradingMinus').on('click', function (e) {
// 		var c = parseInt($('#tradingYears').html());
// 		if (c != 0) {
// 			c = c - 1;
// 		}
// 		$('#tradingYears').html(c);
// 	})

// 	$('#n2, #n22, #n32, #g2, #g22, #g32').on('input paste', function () {
// 		$(this).val($(this).val().replace(/\D/g, ''));
// 	})

// 	$('#n5, #n25, #n35, #g4, #g24, #g34').on('input paste', function () {
// 		$(this).val($(this).val().replace(/[^A-Za-z0-9 ]/g, ''));
// 	})

// 	$('.namefield').on('input paste', function () {
// 		var regexp = /[^a-zA-Z]/g;
// 		if ($(this).val().match(regexp)) {
// 			$(this).val($(this).val().replace(regexp, ''));
// 		}
// 	})

// 	$('#saveProfile').on('click', function (e) {
// 		$('#editEmail').val($('#editEmail').val().trim());
// 		$('#userEmail').val($('#editEmail').val());
// 		$('.userEmail').html($('#editEmail').val());
// 		userData.email = $('#editEmail').val();
// 		if (corresNewAddress) {
// 			if ($('#cFlat').val()) {
// 				caddressLine1 = $('#cFlat').val();
// 			} else {
// 				$('#cFlat').focus();
// 				$('#alertModal').modal();
// 				$('#alertMsg').html('Please enter flat/house No./floor/building.');
// 				return false;
// 			}
// 			if ($('#cStreet').val()) {
// 				caddressLine2 = $('#cStreet').val();
// 			} else {
// 				$('#cStreet').focus();
// 				$('#alertModal').modal();
// 				$('#alertMsg').html('Please enter colony/Street/Locality.');
// 				return false;
// 			}
// 			caddressLine3 = $('#cLandmark').val();
// 			if ($('#cPincode').val()) {
// 				caddressPin = $('#cPincode').val();
// 			} else {
// 				$('#cPincode').focus();
// 				$('#alertModal').modal();
// 				$('#alertMsg').html('Please enter pincode.');
// 				return false;
// 			}
// 			if ($('#cCity').val()) {
// 				caddressCity = $('#cCity').val();
// 			} else {
// 				$('#cCity').focus();
// 				$('#alertModal').modal();
// 				$('#alertMsg').html('Please enter city.');
// 				return false;
// 			}
// 			if ($('#cState').val()) {
// 				caddressState = $('#cState').val();
// 			} else {
// 				$('#cState').focus();
// 				$('#alertModal').modal();
// 				$('#alertMsg').html('Please enter state.');
// 				return false;
// 			}
// 			caddressStateId = userData.stateId;
// 			caddressDistrict = userData.district;
// 			$('.fullAddress').html(caddressLine1 + ', ' + caddressLine2 + ', ' + caddressLine3);
// 			$('.locationAddress').html(caddressCity + ', ' + caddressDistrict + ', ' + caddressPin);
// 			if (kraClnt == 'Y') {
// 				isKRAUpdate = 'Y';
// 			} else if (ckycClnt == 'Y') {
// 				isCKYCUpdate = 'Y';
// 			}
// 		}

// 		if (permNewAddress) {
// 			if ($('#pFlat').val()) {
// 				paddressLine1 = $('#pFlat').val();
// 			} else {
// 				$('#pFlat').focus();
// 				$('#alertModal').modal();
// 				$('#alertMsg').html('Please enter flat/house No./floor/building.');
// 				return false;
// 			}
// 			if ($('#pStreet').val()) {
// 				paddressLine2 = $('#pStreet').val();
// 			} else {
// 				$('#pStreet').focus();
// 				$('#alertModal').modal();
// 				$('#alertMsg').html('Please enter colony/street/locality.');
// 				return false;
// 			}
// 			paddressLine3 = $('#pLandmark').val();
// 			if ($('#pPincode').val()) {
// 				paddressPin = $('#pPincode').val();
// 			} else {
// 				$('#pPincode').focus();
// 				$('#alertModal').modal();
// 				$('#alertMsg').html('Please enter pincode.');
// 				return false;
// 			}
// 			if ($('#pCity').val()) {
// 				paddressCity = $('#pCity').val();
// 			} else {
// 				$('#pCity').focus();
// 				$('#alertModal').modal();
// 				$('#alertMsg').html('Please enter city.');
// 				return false;
// 			}
// 			if ($('#pState').val()) {
// 				paddressState = $('#pState').val();
// 			} else {
// 				$('#pState').focus();
// 				$('#alertModal').modal();
// 				$('#alertMsg').html('Please enter state.');
// 				return false;
// 			}
// 			if (kraClnt == 'Y') {
// 				isKRAUpdate = 'Y';
// 			} else if (ckycClnt == 'Y') {
// 				isCKYCUpdate = 'Y';
// 			}
// 		}

// 		if ($('#sameAddreessBox').is(':checked')) {
// 			paddressLine1 = caddressLine1;
// 			paddressLine2 = caddressLine2;
// 			paddressLine3 = caddressLine3;
// 			paddressCity = caddressCity;
// 			paddressDistrict = caddressDistrict;
// 			paddressPin = caddressPin;
// 			paddressState = caddressState;
// 			paddressStateId = caddressStateId;
// 		} else {
// 			isSamePermenantAddress = 0;
// 		}

// 		if (corresNewAddress) {
// 			sessionStorage.setItem('newAddress', 'y');
// 			sessionStorage.setItem('bankAddress', 'n');
// 			sessionStorage.setItem('kraAddress', 'n');
// 		}

// 		if (bankAddress) {
// 			sessionStorage.setItem('newAddress', 'n');
// 			sessionStorage.setItem('bankAddress', 'y');
// 			sessionStorage.setItem('kraAddress', 'n');
// 		}

// 		if (kraAddress) {
// 			sessionStorage.setItem('newAddress', 'n');
// 			sessionStorage.setItem('bankAddress', 'n');
// 			sessionStorage.setItem('kraAddress', 'y');
// 		}

// 		if (permNewAddress) {
// 			sessionStorage.setItem('permNewAddress', 'y');
// 			sessionStorage.setItem('permBankAddress', 'n');
// 			sessionStorage.setItem('permKraAddress', 'n');
// 		}

// 		if (permBankAddress) {
// 			sessionStorage.setItem('permNewAddress', 'n');
// 			sessionStorage.setItem('permBankAddress', 'y');
// 			sessionStorage.setItem('permKraAddress', 'n');
// 		}

// 		if (permKraAddress) {
// 			sessionStorage.setItem('permNewAddress', 'n');
// 			sessionStorage.setItem('permBankAddress', 'n');
// 			sessionStorage.setItem('permKraAddress', 'y');
// 		}

// 		$('#profileEdit').hide();
// 		$('#screenOne').show();
// 	});

// 	$('#tabOne').on('click', function (e) {
// 		profileFn();
// 		profileA = true;
// 	})
// 	$('#verifyBtn').on('click', function (e) {

// 		if (!(efilter).test($('#userEmail').val())) {
// 			$('#verifyBtn').prop('disabled', false);
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('Please provide email id.');
// 			return false
// 		} else {

// 			var apiurl = baseUrl + 'YonoExistingEmailMobileValidation';
// 			var sendData = {
// 				ObjCDIYClientOtherInfo: {
// 					ReferenceNumber: ref,
// 					Email: $('#userEmail').val(),
// 					Mobile: userData.mobileNumber,
// 					ProvidedEmailIdbelongingto: emailBelongsTo,
// 					Mobilebelongsto: mobileBelongsTo,
// 					BrowserType: navigator.appName,
// 					EncryptToken: '',
// 					MobileEmailFlag: 'E'
// 				},
// 				IsDiy: true
// 			}
// 			sendData = JSON.stringify(sendData);
// 			$('.loader-parent').show();
// 			$.ajax({
// 				url: apiurl,
// 				type: 'POST',
// 				data: sendData,
// 				contentType: "application/json",
// 				dataType: "json",
// 				success: function (response) {
// 					$('.loader-parent').hide();
// 					if (response.IsSuccess) {

// 						var url = baseUrl + 'YonoSaveEmail';
// 						var emailData = {
// 							ReferenceNumber: eref,
// 							Email: $('#userEmail').val()
// 						}
// 						emailData = JSON.stringify(emailData);
// 						$.ajax({
// 							url: url,
// 							type: 'POST',
// 							data: emailData,
// 							contentType: "application/json",
// 							dataType: "json",
// 							success: function (res) {
// 								var apiurl = baseUrl + 'SendYonoEmailVerificationUrl';
// 								var sendData = {
// 									'ReferenceNumber': eref,
// 								};
// 								sendData = JSON.stringify(sendData);
// 								$('#emailVerify').show();
// 								$('.userEmail').html($('#userEmail').val());
// 								userData.email = $('#userEmail').val();
// 								$.ajax({
// 									url: apiurl,
// 									type: 'POST',
// 									data: sendData,
// 									contentType: "application/json",
// 									dataType: "json",
// 									success: function (resp) {},
// 									error: function () {}
// 								});
// 							}
// 						})

// 					} else {
// 						//$('#v-pills-profile-tab').tab('show');
// 						$('#verifyBtn').prop('disabled', false);
// 						$('#alertModal').modal();
// 						$('#alertMsg').html(response.ErrorMessage)
// 					}
// 				}
// 			})

// 		}
// 	})

// 	$('#physicalFn').on('click', function (e) {
// 		$('#mobileCheckModal').modal('hide');
// 		$('#screenFour, #backFour').hide();
// 		$('#screenSix, #backFive').show();
// 		physicalEsign = 'Y';
// 		getEmailStatus();
// 		updateStatus();
// 	})

// 	$('#esignFn').on('click', function (e) {
// 		$('.loader-parent').show();
// 		var apiurl = baseUrl + 'AadharConsentStatus';
// 		var sendData = {
// 			ReferenceNumber: ref,
// 			IsAadharConsent: "Y"
// 		};
// 		sendData = JSON.stringify(sendData);
// 		$.ajax({
// 			url: apiurl,
// 			type: 'POST',
// 			data: sendData,
// 			contentType: "application/json",
// 			dataType: "json",
// 			success: function (response) {
// 				var e_url = baseUrl + 'GenerateAndSignAccountOpenningPdfForYono';
// 				var e_data = {
// 					ReferenceNumber: ref,
// 					IsYono: 'true'
// 				};
// 				e_data = JSON.stringify(e_data);
// 				$.ajax({
// 					url: e_url,
// 					type: 'POST',
// 					data: e_data,
// 					contentType: "application/json",
// 					dataType: "json",
// 					success: function (response) {
// 						if (response.IsSuccess) {
// 							frmMain.action = response.eSignApiUrl;
// 							$('#msg').val(response.requestXml);
// 							document.getElementById("frmMain").submit();
// 						} else {
// 							$('.loader-parent').hide();
// 							$('#mobileCheckModal').modal('hide');
// 							$('#alertModal').modal();
// 							$('#alertMsg').html('Unable to initiate e-sign, please try again.');
// 						}
// 					}
// 				});
// 			}
// 		});
// 	})

// 	$('#verifyOTP').on('click', function (e) {

// 		$('#emailBelongs').show();
// 		$('#email').hide();
// 		$('#emailVerify').hide();
// 		// $('#v-pills-messages-tab').tab('show');
// 	})

// 	$('.tradingPlus').on('click', function (e) {
// 		var c = parseInt($('#tradingYears').html());
// 		if (c < 75) {
// 			c = c + 1;
// 		}
// 		$('#tradingYears').html(c);
// 	})

// 	$('#tabSeven').on('click', function (e) {
// 		e.preventDefault();
// 		if (!$("#occupation").val()) {
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('Select occupation');
// 		} else {
// 			$('#v-pills-income-tab').tab('show');
// 		}
// 	})
// 	$('[data-toggle="tooltip"]').tooltip();

// 	$('#ndob1').datepicker({
// 		changeMonth: true,
// 		changeYear: true,
// 		minDate: "-100Y",
// 		maxDate: "0",
// 		dateFormat: 'dd/mm/yy',
// 		yearRange: "-100: +0",
// 		onSelect: function (value, ui) {

// 			var today = new Date(),
// 			age = today.getFullYear() - ui.selectedYear;
// 			if (age < 18) {
// 				$('#guardian1, #guardian1C').removeClass('d-none');
// 				nminor1 = true;
// 			} else {
// 				$('#guardian1, #guardian1C, #gaddress').addClass('d-none');
// 				$('#gsameAddreessBox1').prop('checked', true);
// 				gNewAddress1 = false;
// 				nminor1 = false;

// 				var gfields = $('#guardian1 input[type=text], #guardian1 input[type=tel], #guardian1 select');
// 				gfields.each(function () {
// 					$(this).val('');
// 				});

// 				var gnfields = $('#gaddress input[type=text], #gaddress input[type=tel]');
// 				gnfields.each(function () {
// 					$(this).val('');
// 				});
// 			}
// 		}
// 	});
// 	$('#ndob2').datepicker({
// 		changeMonth: true,
// 		changeYear: true,
// 		minDate: "-100Y",
// 		maxDate: "0",
// 		dateFormat: 'dd/mm/yy',
// 		yearRange: "-100: +0",
// 		onSelect: function (value, ui) {

// 			var today = new Date(),
// 			age = today.getFullYear() - ui.selectedYear;
// 			if (age < 18) {
// 				$('#guardian2, #guardian2C').removeClass('d-none');
// 				nminor2 = true;
// 			} else {
// 				$('#guardian2, #guardian2C, #gaddress2').addClass('d-none');
// 				$('#gsameAddreessBox2').prop('checked', true);
// 				gNewAddress2 = false;
// 				nminor2 = false;

// 				var gfields = $('#guardian2 input[type=text], #guardian2 input[type=tel], #guardian2 select');
// 				gfields.each(function () {
// 					$(this).val('');
// 				});

// 				var gnfields = $('#gaddress2 input[type=text], #gaddress2 input[type=tel]');
// 				gnfields.each(function () {
// 					$(this).val('');
// 				});
// 			}
// 		}
// 	});
// 	$('#ndob3').datepicker({
// 		changeMonth: true,
// 		changeYear: true,
// 		minDate: "-100Y",
// 		maxDate: "0",
// 		dateFormat: 'dd/mm/yy',
// 		yearRange: "-100: +0",
// 		onSelect: function (value, ui) {

// 			var today = new Date(),
// 			age = today.getFullYear() - ui.selectedYear;
// 			if (age < 18) {
// 				$('#guardian3, #guardian3C').removeClass('d-none');
// 				nminor3 = true;
// 			} else {
// 				$('#guardian3, #guardian3C, #gaddress3').addClass('d-none');
// 				$('#gsameAddreessBox3').prop('checked', true);
// 				gNewAddress3 = false;
// 				nminor3 = false;

// 				var gfields = $('#guardian3 input[type=text], #guardian3 input[type=tel], #guardian3 select');
// 				gfields.each(function () {
// 					$(this).val('');
// 				});

// 				var gnfields = $('#gaddress3 input[type=text], #gaddress3 input[type=tel]');
// 				gnfields.each(function () {
// 					$(this).val('');
// 				});
// 			}
// 		}
// 	});

// 	$("#gdob1, #gdob2, #gdob3").datepicker({
// 		changeMonth: true,
// 		changeYear: true,
// 		minDate: "-75Y",
// 		maxDate: "-18Y",
// 		dateFormat: 'dd/mm/yy',
// 		yearRange: "-75: -18",
// 		onSelect: function (value, ui) {}
// 	});

// 	var s = false;
// 	$('.pinCode').on('input paste', function () {
// 		$(this).val($(this).val().replace(/\D/g, ''))
// 		if ($(this).val().length == 6) {
// 			$('.loader-parent').show();
// 			getState($(this).val(), $(this).attr('id'))
// 		} else {
// 			var t = $(this).attr('id');
// 			if (t == 'cPincode') {
// 				userData.state = '';
// 				userData.stateId = '';
// 				caddressState = '';
// 				caddressStateId = '';
// 				$('#cState').val('');
// 				$('#cState ~ label').css({
// 					'top': '12px'
// 				});
// 				userData.district = '';
// 				$("#cCity").val('');
// 			} else if (t == 'pPincode') {
// 				paddressState = '';
// 				paddressStateId = '';
// 				$('#pState').val('');
// 				$('#pState ~ label').css({
// 					'top': '12px'
// 				});
// 				paddressDistrict = '';
// 				$("#pCity").val('');
// 			} else if (t == 'nPincode') {
// 				$('#nState').val('');
// 				$('#nState ~ label').css({
// 					'top': '12px'
// 				});
// 				nDistrict1 = '';
// 				$("#nCity").val('');
// 			} else if (t == 'nPincode2') {
// 				$('#nState2').val('');
// 				$('#nState2 ~ label').css({
// 					'top': '12px'
// 				});
// 				nDistrict2 = '';
// 				$("#nCity2").val('');
// 			} else if (t == 'nPincode3') {
// 				$('#nState3').val('');
// 				$('#nState3 ~ label').css({
// 					'top': '12px'
// 				});
// 				nDistrict3 = '';
// 				$("#nCity3").val('');
// 			} else if (t == 'gPincode') {
// 				$('#gState').val('');
// 				$('#gState ~ label').css({
// 					'top': '12px'
// 				});
// 				gDistrict1 = '';
// 				$("#gCity").val('');
// 			} else if (t == 'gPincode2') {
// 				$('#gState2').val('');
// 				$('#gState2 ~ label').css({
// 					'top': '12px'
// 				});
// 				gDistrict2 = '';
// 				$("#gCity2").val('');
// 			} else if (t == 'gPincode3') {
// 				$('#gState3').val('');
// 				$('#gState3 ~ label').css({
// 					'top': '12px'
// 				});
// 				gDistrict3 = '';
// 				$("#gCity3").val('');
// 			}
// 		}
// 	})
// 	var pinId;
// 	$('.pinCode').autocomplete({
// 		source: function (request, response) {
// 			pinId = $(this)[0].bindings[0].id;

// 			var apiurl = baseUrl + 'DIYAutoPincode?Pincode=' + request.term.trim();
// 			$.ajax({
// 				url: apiurl,
// 				type: 'GET',
// 				success: function (data) {
// 					var ar = [];
// 					if (data.IsSuccess) {
// 						var len = data.PincodeList.length;
// 						if (len > 4) {
// 							len = 4;
// 						}
// 						for (var j = 0; j < len; j++) {
// 							ar.push(data.PincodeList[j].Pincode);
// 						}
// 					} else {
// 						$('#alertModal').modal();
// 						$('#alertMsg').html('Please provide valid pin code.');
// 					}
// 					response(ar);
// 				},
// 				error: function () {}
// 			})
// 		},
// 		minLength: 1,
// 		open: function (event, ui) {
// 			if (s)
// 				s = false;
// 		},
// 		select: function (event, ui) {
// 			getState(ui.item.value, pinId);
// 		},
// 		blur: function (event, ui) {
// 			getState(ui.item.value, pinId);
// 		}
// 	});

// 	$("#ec").autocomplete({
// 		source: function (request, response) {
// 			if (!request.term) {
// 				$('.refDetails').addClass('d-none');
// 				$('#empName').html('');
// 				$('#branchName').html('');
// 				$('#branchCode').html('');
// 				$('.loader-parent').hide();
// 			}
// 			var sData = {
// 				EmployeeCode: request.term.trim()
// 			}
// 			sData = JSON.stringify(sData);
// 			$('.loader-parent').show();
// 			$.ajax({
// 				url: baseUrl + 'RmEmployeeCode',
// 				contentType: "application/json",
// 				type: 'POST',
// 				dataType: "json",
// 				data: sData,
// 				success: function (data) {
// 					$('.loader-parent').hide();
// 					var ar = [];
// 					if (data.IsSuccess) {
// 						b = data.MetroToSSLBranch;
// 						for (var i = 0; i < data.MetroToSSLBranch.length; i++) {
// 							ar.push(data.MetroToSSLBranch[i].EmployeeCode);
// 						}
// 						response(ar);
// 					} else {
// 						$('.refDetails').addClass('d-none');
// 						$('#empName').html('');
// 						$('#branchName').html('');
// 						$('#branchCode').html('');
// 					}
// 				},
// 				error: function () {
// 					$('.loader-parent').hide();
// 				}
// 			});
// 		},
// 		minLength: 1,
// 		open: function (event, ui) {
// 			if (s)
// 				s = false;
// 		},
// 		select: function (event, ui) {
// 			s = true;
// 			b.forEach(function (value, key) {
// 				if (value.EmployeeCode == ui.item.value) {
// 					$('.refDetails').removeClass('d-none');
// 					$('#empName').html(b[key].EmployeeName);
// 					$('#branchName').html(b[key].Branch);
// 					$('#branchCode').html(b[key].BranchCode);
// 				}
// 			})
// 		}
// 	}).blur(function () {
// 		var sData = {
// 			EmployeeCode: $('#ec').val()
// 		}
// 		sData = JSON.stringify(sData);
// 		$('.loader-parent').show();
// 		$.ajax({
// 			url: baseUrl + 'RmEmployeeCode',
// 			contentType: "application/json",
// 			type: 'POST',
// 			dataType: "json",
// 			data: sData,
// 			success: function (data) {
// 				$('.loader-parent').hide();
// 				var ar = [];
// 				if (data.IsSuccess) {
// 					b = data.MetroToSSLBranch;
// 					for (var i = 0; i < data.MetroToSSLBranch.length; i++) {
// 						ar.push(data.MetroToSSLBranch[i].EmployeeCode);
// 					}
// 					$('.refDetails').removeClass('d-none');
// 					$('#empName').html(b[0].EmployeeName);
// 					$('#branchName').html(b[0].Branch);
// 					$('#branchCode').html(b[0].BranchCode);
// 					$('#ec').val(b[0].EmployeeCode);

// 				} else {
// 					$('.refDetails').addClass('d-none');
// 					$('#empName').html('');
// 					$('#branchName').html('');
// 					$('#branchCode').html('');
// 				}
// 			},
// 			error: function () {
// 				$('.loader-parent').hide();
// 			}
// 		});
// 	});

// })

// function eMsg() {
// 	if (ecount == 0) {
// 		ecount++;
// 		$('#alertModal').modal();
// 		$('#alertMsg').html('Please get this email ID updated in Bank record by visiting your Home Branch at the earliest.');
// 	}
// }

// function emMsg() {
// 	if (emcount == 0) {
// 		emcount++;
// 		$('#alertModal').modal();
// 		$('#alertMsg').html("Please get this email ID updated in Bank record by visiting your Home Branch at the earliest.");
// 	}
// }

// function aMsg() {
// 	if (ecount == 0) {
// 		ecount++;
// 		$('#alertModal').modal();
// 		$('#alertMsg').html("Please get this email ID updated in Bank record by visiting your Home Branch at the earliest.");
// 	}
// }

// function profileEdit() {
// 	ecount = 0;
// 	acount = 0;
// 	profileProceed = false;
// 	if (sessionStorage.getItem('newAddress') == 'y') {
// 		$('#corresNewAddress').click();
// 	} else if (sessionStorage.getItem('bankAddress') == 'y') {
// 		$('#corresBankAddress').click();
// 	} else if (sessionStorage.getItem('kraAddress') == 'y') {
// 		$('#corresKRAAddress').click();
// 	} else {
// 		$('#corresNewAddress').click();
// 	}

// 	if (sessionStorage.getItem('permNewAddress') == 'y') {
// 		$('#perNewAddress').click();
// 	} else if (sessionStorage.getItem('permBankAddress') == 'y') {
// 		$('#perBankAddress').click();
// 	} else if (sessionStorage.getItem('permKraAddress') == 'y') {
// 		$('#perKRAAddress').click();
// 	} else {
// 		$('#perNewAddress').click();
// 	}
// 	$('#editEmail').val(userData.email);
// 	$('#screenOne').hide();
// 	$('#profileEdit').show();
// }

// function mobileBelong(m) {
// 	mobileBelongsTo = m;
// 	if (mobileBelongsTo == 'S') {
// 		$('.userMobileBelongs').html('Self');
// 	} else if (mobileBelongsTo == 'U') {
// 		$('.userMobileBelongs').html('Spouse');
// 	} else if (mobileBelongsTo == 'P') {
// 		$('.userMobileBelongs').html('Parent');
// 	} else if (mobileBelongsTo == 'C') {
// 		$('.userMobileBelongs').html('Children');
// 	}
// 	var url = baseUrl + 'YonoExistingEmailMobileValidation';
// 	var sendData = {
// 		ObjCDIYClientOtherInfo: {
// 			ReferenceNumber: eref,
// 			Email: $('#userEmail').val(),
// 			Mobile: userData.mobileNumber,
// 			ProvidedEmailIdbelongingto: emailBelongsTo,
// 			Mobilebelongsto: mobileBelongsTo,
// 			BrowserType: navigator.appName,
// 			EncryptToken: '',
// 			MobileEmailFlag: 'M'
// 		},
// 		IsDiy: true
// 	}
// 	sendData = JSON.stringify(sendData);
// 	$('.loader-parent').show();
// 	$.ajax({
// 		url: url,
// 		type: 'POST',
// 		data: sendData,
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function (response) {
// 			$('.loader-parent').hide();
// 			if (response.IsSuccess) {
// 				$('#v-pills-trading-tab').tab('show');
// 				$('#mobileBelongsOptions span').removeClass('sb-btn-primary');
// 				$('#mobileBelongsOptions span.' + m.toLowerCase() + '').addClass('sb-btn-primary');

// 			} else {
// 				$('#v-pills-messages-tab').tab('show');

// 				$('#alertModal').modal();
// 				$('#alertMsg').html(response.ErrorMessage)
// 			}
// 		},
// 		error: function () {
// 			$('.loader-parent').hide();
// 		}
// 	})
// }

// function emailBelong(e) {
// 	emailBelongsTo = e;
// 	if (emailBelongsTo == 'S') {
// 		$('.userEmailBelongs').html('Self');
// 	} else if (emailBelongsTo == 'U') {
// 		$('.userEmailBelongs').html('Spouse');
// 	} else if (emailBelongsTo == 'P') {
// 		$('.userEmailBelongs').html('Parent');
// 	} else if (emailBelongsTo == 'C') {
// 		$('.userEmailBelongs').html('Children');
// 	}
// 	var url = baseUrl + 'YonoExistingEmailMobileValidation';
// 	var sendData = {
// 		ObjCDIYClientOtherInfo: {
// 			ReferenceNumber: ref,
// 			Email: $('#userEmail').val(),
// 			Mobile: userData.mobileNumber,
// 			ProvidedEmailIdbelongingto: emailBelongsTo,
// 			Mobilebelongsto: mobileBelongsTo,
// 			BrowserType: navigator.appName,
// 			EncryptToken: '',
// 			MobileEmailFlag: 'E'
// 		},
// 		IsDiy: true
// 	}
// 	sendData = JSON.stringify(sendData);
// 	$('.loader-parent').show();
// 	$.ajax({
// 		url: url,
// 		type: 'POST',
// 		data: sendData,
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function (response) {
// 			$('.loader-parent').hide();
// 			if (response.IsSuccess) {
// 				$('#v-pills-messages-tab').tab('show');
// 				//$('#emailBelongsOptions span').removeClass('sb-btn-primary');
// 				//$('#emailBelongsOptions span.' + e.toLowerCase()).addClass('sb-btn-primary');
// 			} else {
// 				$('#v-profile-messages-tab').tab('show');

// 				$('#alertModal').modal();
// 				$('#alertMsg').html(response.ErrorMessage)
// 			}
// 		},
// 		error: function () {
// 			$('.loader-parent').hide();
// 		}
// 	})
// }

// function profileFn() {
// 	if (!caddressLine1 || !caddressLine2 || !caddressCity || !caddressPin) {
// 		$('#alertModal').modal();
// 		$('#alertMsg').html('Please provide your address');
// 		return false;
// 	} else if (!ref) {
// 		$('#alertModal').modal();
// 		$('#alertMsg').html('Please try again');
// 		location.reload();
// 		return false;
// 	} else {

// 		$('.previewAddress').html(caddressLine1 + ', ' + caddressLine2 + ', ' + caddressLine3);
// 		$('.previewlocationAddress').html(caddressCity + ', ' + caddressDistrict + ', ' + caddressState);

// 		var addressProofCheck = sessionStorage.getItem('addressproofCollectStatus')
// 			var addresproofKRAInfo = sessionStorage.getItem('addresproofKRAInfo')
// 			if ((((addressProofCheck == 112 || addressProofCheck == '112') || (addressProofCheck == 3 || addressProofCheck == '3') || (addressProofCheck == 4 || addressProofCheck == '4') || (addressProofCheck == '' || addressProofCheck == null)) && isKra == "Y") || (isKra == "Y" && addresproofKRAInfo == "DOTEX")) {
// 				isKRAUpdate = 'Y'
// 			}
// 			var url = baseUrl + 'DIYClientPersonalInfoProfile'
// 			var sendData = {
// 			ObjCDIYClientProfile: {
// 				ClientInfoId: 1,
// 				Title: '',
// 				ClientPrefixID: userData.title,
// 				FirstName: userData.firstName,
// 				MiddleName: userData.middleName,
// 				LastName: userData.lastName,
// 				Mobile: userData.mobileNumber,
// 				Email: userData.email,
// 				ReferenceNumber: eref,
// 				CorrespondenceTypeID: 1003,
// 				CAddressLine1: caddressLine1,
// 				CAddressLine2: caddressLine2,
// 				CAddressLine3: caddressLine3,
// 				CCity: caddressCity,
// 				CDistrict: caddressDistrict,
// 				CState: caddressState,
// 				CStateID: caddressStateId,
// 				CCountry: 'INDIA',
// 				CPinCode: caddressPin,
// 				PermantTypeID: 1003,
// 				PAddressLine1: paddressLine1,
// 				PAddressLine2: paddressLine2,
// 				PAddressLine3: paddressLine3,
// 				PCity: paddressCity,
// 				PDistrict: paddressDistrict,
// 				PState: paddressState,
// 				PStateID: paddressStateId,
// 				PCountry: 'INDIA',
// 				PPinCode: paddressPin,
// 				IsKRAUpdate: isKRAUpdate,
// 				IsCKYCUpdate: isCKYCUpdate,
// 				IsNominee: isNominee,
// 				IsKRA: isKra,
// 				IsCKYC: isCkyc,
// 				IsSamePermenantAddress: isSamePermenantAddress,
// 				BrowserType: navigator.appName
// 			}
// 		};
// 		sendData = JSON.stringify(sendData);
// 		$('.loader-parent').show();
// 		$.ajax({
// 			url: url,
// 			type: 'POST',
// 			data: sendData,
// 			contentType: "application/json",
// 			dataType: "json",
// 			success: function (response) {
// 				$('.loader-parent').hide();

// 				if(userData.gender=="M" && userData.maritalStatus=="S"){
// 					userData.title="MR"
// 				}
// 				else if(userData.gender=="M" && userData.maritalStatus=="M"){
// 					userData.title="MRS"
// 				}
// 				else if(userData.gender=="F" && userData.maritalStatus=="S"){
// 					userData.title="MISS"
// 				}
// 				else if(userData.gender=="F" && userData.maritalStatus=="M"){
// 					userData.title="MRS"
// 				}
// 				if (response.IsSuccess) {
// 					$('#email').show();
// 					$('#verifyBtn').prop('disabled', false);
// 					$('#emailVerify, #emailBelongs').hide();
// 					if (profileA) {
// 						$('#v-pills-profile-tab').tab('show');
// 					}
// 					if (emailVerified) {
// 						$('#emailBelongs').show();
// 						$('#email').hide();
// 						$('#emailVerify').hide();
// 					}
// 				} else {
// 					$('#alertModal').modal();
// 					$('#alertMsg').html('Please try again');
// 				}
// 			},
// 			error: function () {
// 				$('.loader-parent').hide();
// 			}
// 		});

// 	}
// }

// function getImagesList() {
	
// 	var apiurl = baseUrl + "DIYGetDocumentProofStageByReferenceNumber";
// 	var sendData = {
// 		ReferenceNumber: ref
// 	};
// 	sendData = JSON.stringify(sendData);
// 	$.ajax({
// 		url: apiurl,
// 		type: 'POST',
// 		data: sendData,
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function (response) {
// 			if (response.IsSuccess) {
// 				if (response.ObjCDIYRegistration.SamePermanentStatus == 1) {
// 					$('.p-address').addClass('d-none');
// 					pAddressUpdt = true;
// 				} else {
// 					$('.p-address').removeClass('d-none');
// 					pAddressUpdt = false;
// 				}
// 			}
// 		}
// 	});
// }

// function checkImgStatus() {
// 	var apiurl = baseUrl + "GetOverallStatusByReferenceNumberWB";
// 	var sendData = {
// 		ReferenceNumber: eref
// 	};
// 	sendData = JSON.stringify(sendData);

// 	$('.loader-parent').show();
// 	$.ajax({
// 		url: apiurl,
// 		type: 'POST',
// 		data: sendData,
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function (response) {
// 			$('.loader-parent').hide();
// 			if (response.IsSuccess) {
// 				if (response.OverallStatusList[5].KRAClient == 'Y') {
// 					if (response.OverallStatusList[5].KRAUpdate == 'Y') {
// 						$('.c-address').removeClass('d-none');
// 						getImagesList();
// 					} else {
// 						if (response.OverallStatusList[5].APP_KYC_MODE == '0' && response.OverallStatusList[5].KRAUpdate == 'N') {
// 							$('.c-address').addClass('d-none');
// 							panImageUpdt = true;
// 							cAddressUpdt = true;
// 							pAddressUpdt = true;
// 						} else if ((response.OverallStatusList[5].APP_KYC_MODE == '1' || response.OverallStatusList[5].APP_KYC_MODE == '2' || response.OverallStatusList[5].APP_KYC_MODE == '3') && response.OverallStatusList[5].KRAUpdate == 'N') {
// 							$('.c-address').removeClass('d-none');
// 							getImagesList();
// 						}
// 					}

// 				}
// 			}
// 		}
// 	});
// }

// function anIncome(i) {
// 	$(".income-btn-group .sb-btn-primary").addClass('bg-white');
// 	$(".income-btn-group .sb-btn-primary span").removeClass('text-white');
// 	$("#an" + i).removeClass('bg-white');
// 	$("#an" + i + " span").addClass('text-white');
// 	annualIncome = i;

// 	if (!profileA) {
// 		profileFn();
// 	}
// 	if (!(efilter).test($('#userEmail').val())) {
// 		$('#verifyBtn').prop('disabled', false);

// 		$('#alertModal').modal();
// 		$('#alertMsg').html('Please provide email id');
// 		$('#v-pills-profile-tab').tab('show');
// 	} else if (!$("#occupation").val()) {
// 		$('#alertModal').modal();
// 		$('#alertMsg').html('Select Occupation');
// 		$('#v-pills-occupation-tab').tab('show');
// 	}
// 	//  else if (isNominee && !nUpdated) {
// 	// 	$('#alertModal').modal();
// 	// 	$('#alertMsg').html('Please Complete Nomination');
// 	// 	$('#v-pills-nominee-tab').tab('show');
// 	// }
// 	else {

// 		var apiurl = baseUrl + 'DIYClientOtherInfo';
// 		var te = parseInt($('#tradingYears').html());
// 		var tradeExp = '0';
// 		if (te == 0) {
// 			tradeExp = '0';
// 		} else if (te == 1 || te == 2 || te == 3) {
// 			tradeExp = '1-3';
// 		} else if (te == 4 || te == 5 || te == 6) {
// 			tradeExp = '4-6';
// 		} else if (te == 7 || te == 8 || te == 9) {
// 			tradeExp = '6-9';
// 		} else {
// 			tradeExp = '10-plus';
// 		}
// 		var sendData = {
// 			ObjCDIYClientOtherInfo: {
// 				ReferenceNumber: ref,
// 				Gender: userData.gender,
// 				MaritialStatus: userData.maritalStatus,
// 				Email: userData.email,
// 				Mobile: userData.mobileNumber,
// 				FatherOrSpouseType: userData.fatherOrSpouse,
// 				FatherHusName: userData.fatherOrSpouseName,
// 				FatherNamePrefixID: 'Mr',
// 				FatherNameFirstName: userData.fatherOrSpouseName,
// 				FatherNameMiddleName: '',
// 				FatherNameLastName: '',
// 				MothersMaidenName: '',
// 				MotherNamePrefixID: '',
// 				MotherNameFirstName: userData.motherName,
// 				MotherNameMiddleName: '',
// 				MotherNameLastName: '',
// 				EmailbelongstoPan: userData.panNumber,
// 				ProvidedEmailIdbelongingto: emailBelongsTo,
// 				MobilebelongstoPan: userData.panNumber,
// 				Mobilebelongsto: mobileBelongsTo,
// 				ProStage: "Profile2",
// 				ResidentialStatus: 'Indian',
// 				Nationality: 'India',
// 				Occupation: $("#occupation").val(),
// 				AnnualIncome: annualIncome,
// 				TradingExperience: tradeExp,
// 				PoliticalExposure: '',
// 				DealingExistingStockBroker: '',
// 				StockSubBrokerName: '',
// 				ClientInfoId: '',
// 				PastActions: 'N',
// 				DisputesDetails: '',
// 				Exchange: '',
// 				GSTINFlag: 'N',
// 				GSTINNumber: '',
// 				RelatedPartyFlag: 'N',
// 				TaxJurisdiction: 'N',
// 				TaxJurisdictionCountry: '',
// 				PlaceOfBirth: '',
// 				TaxIdentificationNumber: '',
// 				CountryOfBirth: '',
// 				JurisdictionAddrFlag: '',
// 				JurisdictionAddress1: '',
// 				JurisdictionAddress2: '',
// 				JurisdictionAddress3: '',
// 				JurisdictionCity: '',
// 				JurisdictionDistrict: '',
// 				JurisdictionState: '',
// 				JurisdictionStateID: 0,
// 				JurisdictionCountry: '',
// 				JurisdictionPinCode: '',
// 				InternetTrading: '',
// 				IsNominee: isNominee,
// 				DPRecieveForEachCredit: 'Y',
// 				DPtoacceptPledgeIns: 'N',
// 				DematStatement: 'M',
// 				EmailStatement: 'Y',
// 				ShareEmailWithRTA: 'Y',
// 				AnualReport: "E",
// 				InterestInToBank: "Y",
// 				ContractNoteandOtherRelatedReports: 'Y',
// 				DISBooklet: 'N',
// 				SourceofFund: '',
// 				AgreeToReceivecall: 'Y',
// 				SettlementOfFunds: "Q",
// 				EnableStockSIP: "Y",
// 				RiskCategory: 'L',
// 				ExpilicitContent: '',
// 				ExpilicitCode: '',
// 				ExpilicitFlag: '',
// 				WorkExperience: '',
// 				BrowserType: navigator.appName
// 			},
// 			IsDiy: true,
// 		};
// 		sendData = JSON.stringify(sendData);
// 		$('.loader-parent').show();
// 		$.ajax({
// 			url: apiurl,
// 			type: 'POST',
// 			data: sendData,
// 			contentType: "application/json",
// 			dataType: "json",
// 			success: function (response) {
// 				if (response.IsSuccess) {
// 					$('#screenOne, #nomineeYes').hide();
// 					$('#screenProduct,#backOne').show();
// 					$('.loader-parent').hide();
// 					getPlans();
// 					getMICR();
// 					getImagesList();
// 					checkImgStatus();
// 				} else {
// 					$('.loader-parent').hide();
// 					$('#alertModal').modal();
// 					$('#alertMsg').html(response.ErrorMessage);
// 					if (response.IsEmail) {
// 						$('#v-pills-profile-tab').tab('show');
// 					}
// 					if (response.IsMobile) {
// 						$('#v-pills-messages-tab').tab('show');
// 						/*$('#verifyBtn').prop('disabled', false);
// 						profileEdit();*/
// 					}
// 				}
// 			}
// 		});
// 	}

// }
// function resizeMe(img, imgName) {
// 	var canvas = document.createElement('canvas');
// 	var width = img.width;
// 	var height = img.height;
// 	if (imgName != 'BankCheque') {
// 		if (width > height) {
// 			if (width > 960) {
// 				height = Math.round(height *= 960 / width);
// 				width = 1280;
// 			}
// 		} else {
// 			if (height > 1280) {
// 				width = Math.round(width *= 1280 / height);
// 				height = 960;
// 			}
// 		}
// 	}
// 	canvas.width = width;
// 	canvas.height = height;
// 	var ctx = canvas.getContext("2d");
// 	ctx.drawImage(img, 0, 0, width, height);

// 	preview.appendChild(canvas);

// 	return canvas.toDataURL("image/jpeg", 1);

// }

// function cImgUpld() {
// 	var docType = $('#cadrList').val();
// 	if (caUrl) {
// 		if(docType == 111){
// 			aadhaarMaskingImage('CorrespondenceAddress', caUrl, 'Image', docType);
// 		}else{
// 			update_img('CorrespondenceAddress', caUrl, 'Image')
// 		}
// 	}
// 	if (ca2Url) {
// 		if(docType == 111){
// 			aadhaarMaskingImage('CorrespondenceAddress2', ca2Url, 'Image', docType);
// 		}else{
// 			update_img('CorrespondenceAddress2', ca2Url, 'Image');
// 		}
// 	}
// }

// function pImgUpld() {
// 	var docType = $('#padrList').val();
// 	if (paUrl) {
// 		if(docType == 111){
// 			aadhaarMaskingImage('PermenantAddress', paUrl, 'Image', docType);
// 		}else{
// 			update_img('PermenantAddress', paUrl, 'Image');
// 		}
// 	}
// 	if (pa2Url) {
// 		if(docType == 111){
// 			aadhaarMaskingImage('PermenantAddress2', pa2Url, 'Image', docType);
// 		}else{
// 			update_img('PermenantAddress2', pa2Url, 'Image');
// 		}
// 	}
// }
// function iImgUpld() {
// 	if (iUrl) {
// 		update_img('Income', iUrl, 'Image')
// 	}
// }

// function updateClientImage(imgName, imgValue, fileType) {
// 	var apiurl = baseUrl + "ClientPhotoUpload";
// 	var sendData = {
// 		ImageName: imgName,
// 		Image: imgValue,
// 		DocumentType: '',
// 		ReferenceNumber: ref,
// 		Extention: fileType,
// 		IsDiy: true,
// 		IsSelfi: 'Y',
// 		Latitude: latitude,
// 		SLatitude: latitude,
// 		Longitude: longitude,
// 		SLongitude: longitude,
// 	};
// 	sendData = JSON.stringify(sendData);
// 	$.ajax({
// 		url: apiurl,
// 		type: 'POST',
// 		data: sendData,
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function (response) {
// 			if (response.IsSuccess) {
// 				ipvStatus = true;
// 				$('.modal').modal('hide');
// 				photoImageUpdt = true;
// 				getImages();
// 			} else {
// 				$('.modal').modal('hide');
// 				$('.loader-parent').hide();
// 				$('#alertModal').modal();
// 				$('#alertMsg').html('image upload failed');
// 				$('.clientImgName .img-name').html();
// 				$('.clientImg').show();
// 				$('.clientImgName').hide();
// 			}
// 		},
// 		error: function () {
// 			$('.modal').modal('hide');
// 			$('.loader-parent').hide();
// 		}
// 	});

// }

// function aadhaarMaskingImage(imgName, imgValue, fileType, docType) {
// 	var apiurl = baseUrl + "AadharMaskingNew";
// 	var sendData = {
// 		ImageName: imgName,
// 		Image: imgValue,
// 		DocumentType: docType,
// 		ReferenceNumber: ref,
// 		Extention: fileType,
// 		IsDiy: true,
// 		Latitude: latitude,
// 		SLatitude: latitude,
// 		Longitude: longitude,
// 		SLongitude: longitude
// 	}
// 	sendData = JSON.stringify(sendData);

// 	$.ajax({
// 		url: apiurl,
// 		type: 'POST',
// 		data: sendData,
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function (response) {
// 			var imgData = imgValue;
// 			if (response.IsSuccess) {
// 				imgData = response.Image;
// 			}
// 			var ad_apiurl = baseUrl + "DIYImageUpload";
// 			var ad_sendData = {
// 				ImageName: imgName,
// 				Image: imgData,
// 				DocumentType: docType,
// 				ReferenceNumber: ref,
// 				Extention: fileType,
// 				IsSelfi: 'N',
// 				IsDiy: true,
// 			};
// 			ad_sendData = JSON.stringify(ad_sendData);
// 			$.ajax({
// 				url: ad_apiurl,
// 				type: 'POST',
// 				data: ad_sendData,
// 				contentType: "application/json",
// 				dataType: "json",
// 				success: function (res) {
// 					$('.modal').modal('hide');
// 					$('.loader-parent').hide();
// 					if (res.IsSuccess) {
// 						if (imgName == 'CorrespondenceAddress') {
// 							cAddressUpdt = true;
// 						}
// 						if (imgName == 'PermenantAddress') {
// 							pAddressUpdt = true;
// 						}
// 					}
// 					getImages();
// 				},
// 				error: function () {
// 					$('.modal').modal('hide');
// 					$('.loader-parent').hide();
// 				}
// 			})
// 		},
// 		error: function () {
// 			$('.modal').modal('hide');
// 			$('.loader-parent').hide();
// 		}
// 	})
// }

// function update_img(imgName, imgValue, fileType) {

// 	if (imgName == 'ClientPhoto') {
// 		var apiurl = baseUrl + "FaceLivePhotoLiveness";
// 		var sendData = {
// 			"data": {
// 				"document1": imgValue,
// 				"doc_type": null
// 			},
// 			"ReferenceNumber": ref,
// 			"Image": null,
// 			"Latitude": latitude,
// 			"Longitude": longitude

// 		}
// 		sendData = JSON.stringify(sendData);
// 		$.ajax({
// 			url: apiurl,
// 			type: 'POST',
// 			data: sendData,
// 			contentType: "application/json",
// 			dataType: "json",
// 			success: function (response) {
// 				if (response.IsSuccess) {
// 					updateClientImage('ClientPhoto', imgValue, 'Image');
// 				} else {
// 					$('.modal').modal('hide');
// 					$('.loader-parent').hide();
// 					$('#alertModal').modal();
// 					if (response.ErrorMessage)
// 						$('#alertMsg').html(response.ErrorMessage);
// 					else {
// 						$('#alertMsg').html('Please capture valid selfie image');
// 					}
// 					$('.clientImgName .img-name').html();
// 					$('.clientImg').show();
// 					$('.clientImgName').hide();
// 				}
// 			},
// 			error: function () {
// 				$('.modal').modal('hide');
// 				$('.loader-parent').hide();
// 			}
// 		});

// 	} else {

// 		var docType = '';
// 		if (imgName == 'CorrespondenceAddress' || imgName == 'CorrespondenceAddress2') {
// 			docType = $('#cadrList').val();
// 			if (imgName == 'CorrespondenceAddress') {
// 				caUrl = imgValue
// 			} else {
// 				ca2Url = imgValue
// 			}
// 			if (docType == 111) {
// 				aadhaarMaskingImage(imgName, imgValue, fileType, docType);
// 				return false;
// 			}
// 		}
// 		if (imgName == 'PermenantAddress' || imgName == 'PermenantAddress2') {
// 			docType = $('#padrList').val()
// 				if (imgName == 'PermenantAddress') {
// 					paUrl = imgValue
// 				} else {
// 					pa2Url = imgValue
// 				}
// 				if (docType == 111) {
// 					aadhaarMaskingImage(imgName, imgValue, fileType, docType);
// 					return false;
// 				}
// 		}
// 		if (imgName == 'Income') {
// 			docType = $('#iList').val();
// 			iUrl = imgValue;
// 		}
// 		var selfiImg = 'N';
// 		/*if (selfTrue) {
// 		selfiImg = 'Y';
// 		}*/
// 		var apiurl = baseUrl + "DIYImageUpload";
// 		var sendData = {
// 			ImageName: imgName,
// 			Image: imgValue,
// 			DocumentType: docType,
// 			ReferenceNumber: ref,
// 			Extention: fileType,
// 			IsSelfi: selfiImg,
// 			IsDiy: true,
// 		};
// 		sendData = JSON.stringify(sendData);
// 		$.ajax({
// 			url: apiurl,
// 			type: 'POST',
// 			data: sendData,
// 			contentType: "application/json",
// 			dataType: "json",
// 			success: function (response) {
// 				$('.modal').modal('hide');
// 				$('.loader-parent').hide();
// 				if (response.IsSuccess) {
// 					if (imgName == 'CorrespondenceAddress') {
// 						cAddressUpdt = true;
// 					}
// 					if (imgName == 'PermenantAddress') {
// 						pAddressUpdt = true;
// 					}
// 					if (imgName == 'ClientPhoto') {
// 						photoImageUpdt = true;
// 					}
// 					if (imgName == 'SPECIMENPROOF') {
// 						signatureUpdt = true;
// 					}
// 					if (imgName == 'PANNumber') {
// 						panImageUpdt = true;
// 					}

// 					if (imgName == 'Income') {
// 						iImageUpdt = true;
// 					}
// 					getImages();
// 				} else {
// 					$('#alertModal').modal();
// 					$('#alertMsg').html('image upload failed');
// 				}
// 			},
// 			error: function () {
// 				$('.modal').modal('hide');
// 				$('.loader-parent').hide();
// 			}
// 		});
// 	}
// }
// function processfile(file, imgName) {
// 	// read the files

// 	var reader = new FileReader();
// 	reader.readAsArrayBuffer(file);

// 	reader.onload = function (event) {

// 		// blob stuff
// 		var blob = new Blob([event.target.result]); // create blob...
// 		window.URL = window.URL || window.webkitURL;
// 		var blobURL = window.URL.createObjectURL(blob); // and get it's URL

// 		// helper Image object
// 		var image = new Image();
// 		image.src = blobURL;
// 		// preview.appendChild(image); // preview commented out, I am using the canvas instead
// 		image.onload = function () {
// 			// have to wait till it's loaded
// 			var resized = resizeMe(image, imgName); // send it to canvas
// 			// put result from canvas into new hidden input
// 			var r_split = resized.split(",");

// 			$("#" + imgName + "Src").val(r_split[1]);
// 			//  $("#" + imgName + "").css({ "background": "url(" + resized + ") no-repeat center center", "background-size": "cover" });
// 			var showPicture = document.querySelector("#" + imgName + "img");
// 			//      showPicture.src = resized;
// 			var decoded = atob(r_split[1]);

// 			var fileSize = decoded.length;
// 			if (fileSize > 4194304) {
// 				$('#SPECIMENPROOF, #SPECIMENPROOFC').val('');
// 				$('#alertModal').modal();
// 				$('#alertMsg').html('File size must be less than 4 mb');
// 				$('.loader-parent').hide();
// 				return false;
// 			}
// 			update_img(imgName, r_split[1], 'Image');
// 		}
// 	};
// }
// function readfiles(files, a) {
// 	var b = a;
// 	// remove the existing canvases and hidden inputs if user re-selects new pics
// 	var existinginputs = document.getElementsByName('images[]');
// 	var existingcanvases = document.getElementsByTagName('canvas');
// 	while (existinginputs.length > 0) { // it's a live list so removing the first element each time
// 		// DOMNode.prototype.remove = function() {this.parentNode.removeChild(this);}
// 		form.removeChild(existinginputs[0]);
// 		preview.removeChild(existingcanvases[0]);
// 	}

// 	for (var i = 0; i < files.length; i++) {
// 		processfile(files[i], b); // process each file at once
// 	}
// 	files.value = "";
// }
// function clientImg() {
// 	navigator.geolocation.getCurrentPosition(success, error, options);
// 	setTimeout(function () {
// 		if (!latitude || !longitude) {
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('Allow access to the location from settings.');
// 			return false;
// 		} else {
// 			$("#imgupldModal").modal();
// 		}
// 	}, 100)
// }

// function imgUpld(imgName) {
// 	$('.loader-parent').show();
// 	var imageName = imgName;
// 	var filesSelected = document.getElementById(imgName).files;

// 	var fileName = document.getElementById(imgName).value;
// 	var file_name = fileName.split('\\');

// 	if (imgName == 'PANNumber' || imgName == 'PANNumberC') {
// 		imageName = 'PANNumber';
// 		$('.panImgName .img-name').html(file_name[file_name.length - 1]);
// 		$('.panImgName').show();
// 		$('.panImg').hide();
// 	} else if (imgName == 'ClientPhoto' || imgName == 'ClientPhotoC') {
// 		/*if (imgName == 'ClientPhotoC') {
// 		selfTrue = true;
// 		}*/

// 		selfTrue = true;
// 		imageName = 'ClientPhoto';
// 		$('.clientImgName .img-name').html(file_name[file_name.length - 1]);
// 		$('.clientImgName').show();
// 		$('.clientImg').hide();
// 	} else if (imageName == 'SPECIMENPROOF' || imageName == 'SPECIMENPROOFC') {
// 		imageName = 'SPECIMENPROOF';

// 		$('.signatureImgName .img-name').html(file_name[file_name.length - 1]);
// 		$('.signatureImgName').show();
// 		$('.signatureImg').hide();
// 	} else if (imageName == 'CorrespondenceAddress' || imageName == 'CorrespondenceAddressC') {
// 		imageName = 'CorrespondenceAddress';
// 		if (!$('#cadrList').val()) {
// 			$('#CorrespondenceAddress').val('');
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('Please select document type.');
// 			$('#cadrimgupldModal').modal('hide');
// 			$('.loader-parent').hide();
// 			return false;
// 		}
// 		$('.cadrImgName .img-name').html(file_name[file_name.length - 1]);
// 		$('.cadrImgName').show();
// 		$('.cadrImg').hide();

// 		if ($('#cadrList').val() == 114 || $('#cadrList').val() == 115 || $('#cadrList').val() == 116 || $('#cadrList').val() == 117 || $('#cadrList').val() == 120) {
// 			$('.poi').removeClass('d-none');
// 			poiUpdt = false;
// 		} else {
// 			$('.poi').addClass('d-none');
// 			poiUpdt = true;
// 		}
// 	} else if (imageName == 'CorrespondenceAddress2' || imageName == 'CorrespondenceAddress2C') {
// 		imageName = 'CorrespondenceAddress2';
// 		if (!$('#cadrList').val()) {
// 			$('#CorrespondenceAddress2').val('');
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('Please select document type.');
// 			$('#cadr2imgupldModal').modal('hide');
// 			$('.loader-parent').hide();
// 			return false;
// 		}
// 		$('.cadr2ImgName .img-name').html(file_name[file_name.length - 1]);
// 		$('.cadr2ImgName').show();
// 		$('.cadr2Img').hide();

// 	} else if (imageName == 'PermenantAddress' || imageName == 'PermenantAddressC') {
// 		imageName = 'PermenantAddress';
// 		if (!$('#padrList').val()) {
// 			$('#PermenantAddress').val('');
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('Please select document type.');
// 			$('#padrimgupldModal').modal('hide');
// 			$('.loader-parent').hide();
// 			return false;
// 		}
// 		$('.padrImgName .img-name').html(file_name[file_name.length - 1]);
// 		$('.padrImgName').show();
// 		$('.padrImg').hide();

// 		if ($('#padrList').val() == 114 || $('#padrList').val() == 115 || $('#padrList').val() == 116 || $('#padrList').val() == 117 || $('#padrList').val() == 120) {
// 			$('.poi').removeClass('d-none');
// 			poiUpdt = false;
// 		} else {
// 			$('.poi').addClass('d-none');
// 			poiUpdt = true;
// 		}
// 	} else if (imageName == 'PermenantAddress2' || imageName == 'PermenantAddress2C') {
// 		imageName = 'PermenantAddress2';
// 		if (!$('#padrList').val()) {
// 			$('#PermenantAddress2').val('');
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('Please select document type.');
// 			$('#padr2imgupldModal').modal('hide');
// 			$('.loader-parent').hide();
// 			return false;
// 		}
// 		$('.padr2ImgName .img-name').html(file_name[file_name.length - 1]);
// 		$('.padr2ImgName').show();
// 		$('.padr2Img').hide();

// 	} else if (imageName == 'Income' || imageName == 'IncomeC') {
// 		imageName = 'Income';
// 		if (!$('#iList').val()) {
// 			$('#Income').val('');
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('Please select income proof type.');
// 			$('#iimgupldModal').modal('hide');
// 			$('.loader-parent').hide();
// 			return false;
// 		}
// 		$('.iImgName .img-name').html(file_name[file_name.length - 1]);
// 		$('.iImgName').show();
// 		$('.iImg').hide();

// 	}

// 	var allowed_extensions = new Array("jpg", "png", "jpeg");

// 	var file_extension = fileName.split('.').pop();
// 	var ext = fileName.split('.');
// 	file_extension = file_extension.toLowerCase();
// 	var file_index = allowed_extensions.indexOf(file_extension);

// 	if (file_index <= 2 && file_index >= 0) {
// 		readfiles(filesSelected, imageName)
// 	} else {
// 		$('.loader-parent').hide();
// 		$('#alertModal').modal();
// 		$('#alertMsg').html('Images only alloed.');
// 	}
// }

// function getMICR() {

// 	var apiurl = baseUrl + 'GetAllBankInfoByIFSCCodeSA';
// 	var sendData = {
// 		IFSC: userData.ifscCode
// 	}
// 	sendData = JSON.stringify(sendData);
// 	$.ajax({
// 		url: apiurl,
// 		type: 'POST',
// 		data: sendData,
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function (response) {
// 			if (response.IsSuccess && response.BankDetailsList) {
// 				micr = response.BankDetailsList[0].MICRCode;
// 				addressBank = response.BankDetailsList[0].Address;
// 			}
// 			bankUpdate();
// 		},
// 		error: function () {
// 			bankUpdate();
// 		}
// 	})

// }

// function bankUpdate() {
// 	var apiurl = baseUrl + 'DIYClientBankRegistration';
// 	var sendData = {
// 		ObjCDIYBank: {
// 			AccountHolderName: userData.name,
// 			AccountNumber: userData.accountNumber,
// 			AccountTypeId: '1',
// 			AccountType: '1',
// 			Address: addressBank,
// 			BankDetailsId: 1,
// 			BankName: 'STATE BANK OF INDIA',
// 			BrowserType: navigator.appCodeName,
// 			IFSC: userData.ifscCode,
// 			MICRCode: micr,
// 			ReferenceNumber: ref
// 		},
// 		IsDiy: true
// 	}
// 	sendData = JSON.stringify(sendData);
// 	$.ajax({
// 		url: apiurl,
// 		type: 'POST',
// 		data: sendData,
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function (response) {}
// 	});
// }

// function viewBrokerage(i) {
// 	$('#brokerageModal').modal();
// 	$('#planDelivery').html(planList[i].Delivery);
// 	$('#intradayPerLeg').html(planList[i].Intraday_PerLeg);
// 	$('#futuresIntradayPerLeg').html(planList[i].FuturesIntraday_PerLeg);
// 	$('#futuresCF').html(planList[i].Futures_CF);
// 	$('#intraday').html(planList[i].Options_Intraday);
// 	$('#optionsCF').html(planList[i].Options_CF);
// 	$('#minimumBrokerage').html(planList[i].MinimumBrokerage);
// }

// function prodSelect(i) {
// 	prodID = planList[i].ProductId;
// 	planName = planList[i].PlanName;
// 	planCost = planList[i].TotalCost
// }
// var viewLayout = 'layout1';
// function viewmoreOption(i) {
// 	$('#viewbtnmore' + i).val('View ' + (viewLayout == 'layout2' ? 'More' : 'Less'));
// 	viewLayout = viewLayout == 'layout1' ? 'layout2' : 'layout1';
// 	$('#productdescri' + i)
// 	.hide()
// 	.removeClass('limittextht limitTextHeight')
// 	.addClass(viewLayout == 'layout2' ? 'limitTextHeight' : 'limittextht')
// 	.show()
// }

// var plans = false;

// function getPlans() {
// 	var apiurl = baseUrl + 'GETProductPLANDetails';
// 	var sendData = {
// 		ReferenceNumber: eref,
// 		UTMSourceId: "",
// 		//UtmSourceName: "YONOMOBAPP",
// 		 UtmSourceName: "",
// 	}
// 	sendData = JSON.stringify(sendData);
// 	$.ajax({
// 		url: apiurl,
// 		type: 'POST',
// 		data: sendData,
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function (response) {
// 			if (response.IsSuccess) {
// 				planList = response.UTMProductList;
// 				if (planList && planList.length != 0) {
// 					$('#planList').empty();
// 					if (!plans) {
// 						plans = true;
// 					} else {
// 						$('#planList').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded owl-hidden');
// 						$('#planList').find('.owl-stage-outer').children().unwrap();
// 						$('#planList').addClass('owl-carousel')
// 					}
// 					for (var i = 0; i < planList.length; i++) {
// 						$('#planList').append('<div class="mb-3 text-center"><input class="checkbox-tools" type="radio" name="SBIproduct" id="product-' + (i + 1) + '" value="' + planList[i].ProductId + '">' +
// 							'<label onclick="prodSelect(' + i + ')" class="for-checkbox-tools mb-0 text-left" for="product-' + (i + 1) + '"><div class="pricerangeheight"><h3>' + planList[i].PlanName + '</h3><div class="sub-text color-label-gray ">Account opening charges</div></div><div id="productdescri' + i + '" class="productDescriptions limittextht">' + planList[i].Description + '</div><input id="viewbtnmore' + (i) + '" onclick="viewmoreOption(' + i + ')" type="button"  class="viewbtnmorec" value="View More" /></label> <div class="mt-4"><span class="text-secondary text-underline" onclick="viewBrokerage(' + i + ')">View Brokerage Charges</span></div> </div>');
// 						if (planList[i].DefaultSelect.toLowerCase() == 'y') {
// 							$('#product' + planList[i].ProductId).prop('checked', true);
// 							//$('#planDesc').html(planList[i].Description);
// 							prodID = planList[i].ProductId;
// 							planName = planList[i].PlanName;
// 						}
// 						if (planList[i].Description.length < 250) {
// 							$('#viewbtnmore' + i).addClass('d-none')
// 						}
// 					}
// 					if (prodID) {
// 						$('#product' + prodID).prop('checked', true);
// 					}

// 					$('.owl-carousel').owlCarousel({
// 						loop: false,
// 						margin: 15,
// 						navText: [
// 							'<div><img id="prevSlide" class="remove-prev-slide-class prev-slide reverse-img" src="./assets/images/forward-arrow.svg" /></div>',
// 							'<div id="nextSlide"><img class="next-slide" src="./assets/images/forward-arrow.svg" onclick="nextSlide()" /></div>'],
// 						nav: false,
// 						dots: true,
// 						responsive: {
// 							0: {
// 								items: 1,
// 								nav: true,
// 								autoWidth: true,
// 								center: true,
// 								startPosition: 1,
// 							},
// 							600: {
// 								items: 1,
// 								nav: true,
// 								autoWidth: true,
// 								center: true,
// 								startPosition: 1,
// 							},
// 							1000: {
// 								items: 1
// 							}
// 						}
// 					});
// 					getProductsbyRef();
// 				} else {
// 					//getProductsbyRef();
// 				}
// 			} else {
// 				//getProductsbyRef();
// 			}
// 		}
// 	});
// }

// function getProductsbyRef() {
// 	var apiurl = baseUrl + 'DIYGetProductInfoByReferenceNumber';
// 	var s_data = {
// 		ReferenceNumber: eref
// 	}
// 	s_data = JSON.stringify(s_data);
// 	$.ajax({
// 		url: apiurl,
// 		type: 'POST',
// 		data: s_data,
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function (data) {
// 			if (data.IsSuccess) {
// 				var response = data.ObjCDIYProduct;
// 				$('input[name=SBIproduct][value=' + response.ProductId + ']').prop('checked', true);
// 				prodID = response.ProductId;
// 				planName = response.PlanName;
// 				var a = $('input[name=SBIproduct]:checked').attr('id');
// 				var b = a.split('-')
// 					$('.owl-carousel').trigger('to.owl.carousel', b[1] - 1);
// 				if (response.BSEEquityFandO == 'Y' || response.NSEEquityFandO == 'Y') {
// 					$('#equityderivatives').prop('checked', true);
// 				}
// 				if (response.NSECurrencyFandO == 'Y' || response.BSECurrencyFandO == 'Y') {
// 					$('#currency').prop('checked', true);
// 				}

// 				$('#bc').val(response.AssistLGCode);
// 				$('#ec').val(response.AssistLCCode);
// 				if (response.AssistLCCode) {
// 					var sData = {
// 						EmployeeCode: response.AssistLCCode
// 					}
// 					sData = JSON.stringify(sData);
// 					$.ajax({
// 						url: baseUrl + 'RmEmployeeCode',
// 						contentType: "application/json",
// 						type: 'POST',
// 						dataType: "json",
// 						data: sData,
// 						success: function (data) {
// 							if (data.IsSuccess) {
// 								$('.referral').addClass('d-none');
// 								$('#referalDetails').removeClass('d-none');
// 								$('.refDetails').removeClass('d-none');
// 								$('#empName').html(data.MetroToSSLBranch[0].EmployeeName);
// 								$('#branchName').html(data.MetroToSSLBranch[0].Branch);
// 								$('#branchCode').html(data.MetroToSSLBranch[0].BranchCode);
// 								b = data.MetroToSSLBranch;
// 							}
// 						}
// 					});
// 				} else if (response.AssistLGCode) {
// 					$('.referral').addClass('d-none');
// 					$('#referalDetails').removeClass('d-none');
// 				}
// 			}
// 		},
// 		error: function () {}
// 	});
// }

// function productStage() {
// 	if (!prodID) {
// 		$('#alertModal').modal();
// 		$('#alertMsg').html('Please select a product.');
// 		$('input[name=SBIproduct]').focus();
// 	} else {
// 		var stockNSE = 'Y';
// 		var stockBSE = 'Y';

// 		var mutualFundsNSE = 'Y';
// 		var BSEMutualFunds = 'Y';

// 		var foNSE = 'N';
// 		var currencyDerivativesNSE = 'N';

// 		if ($("input[type=checkbox]#equityderivatives").is(':checked')) {
// 			foNSE = 'Y';
// 		}

// 		if ($("input[type=checkbox]#currency").is(':checked')) {
// 			currencyDerivativesNSE = 'Y';
// 		}
// 		$('.loader-parent').show();
// 		var apiurl = baseUrl + "DIYClientProductRegistration";
// 		var sendData = {
// 			ObjCDIYProduct: {
// 				ReferenceNumber: ref,
// 				ClientInfoID: 1,
// 				ProductId: prodID,
// 				Product: "Default Product",
// 				Plan: "FreePlan",
// 				PlanName: planName,
// 				TradingPreferenceId: 5,
// 				AssistLGCode: $('#bc').val(),
// 				AssistLCCode: $('#ec').val(),
// 				BSEEquityCash: stockBSE,
// 				NSEEquityCash: stockNSE,
// 				MCXEquityCash: "N",
// 				BSEEquityFandO: "N",
// 				NSEEquityFandO: foNSE,
// 				MCXEquityFandO: "N",
// 				BSECurrencyFandO: "N",
// 				NSECurrencyFandO: currencyDerivativesNSE,
// 				MCXCurrencyFandO: "N",
// 				BSEMutualFunds: BSEMutualFunds,
// 				NSEMutualFunds: mutualFundsNSE,
// 				MCXMutualFunds: "N",
// 				BSECommodity: "N",
// 				NSECommodity: "N",
// 				MCXCommodity: "N",
// 				NCDXCommodity: "N",
// 				NCDXEquityCash: "N",
// 				NCDXEquityFandO: "N",
// 				NCDXCurrencyFandO: "N",
// 				NCDXMutualFunds: "N",
// 				CValueChainParticipant: "N",
// 				CExporter: "N",
// 				CImporter: "N",
// 				CHedger: "N",
// 				NCFinancialParticipant: "N",
// 				NCTrader: "N",
// 				NCJobber: "N",
// 				NCArbitager: "N",
// 				SLB: "N",
// 				Details: "sample string 27",
// 				SuitedFor: "sample string 28",
// 				Exchange: "sample string 29",
// 				IntradayandFeatures: "sample string 30",
// 				Options: "sample string 31",
// 				CurrencyFeatures: "sample string 32",
// 				BrokeragePage: "sample string 33",
// 				OpeningFee: 34.1,
// 				MarginFee: 35.1,
// 				TotalPayableAmount: 36.1,
// 				CurrencyOptions: "sample string 37",
// 				BrowserType: "Chrome",
// 				DematType: "CDSL",
// 				EncryptToken: ""
// 			},
// 			IsDiy: true
// 		};
// 		sendData = JSON.stringify(sendData);
// 		$.ajax({
// 			url: apiurl,
// 			type: 'POST',
// 			data: sendData,
// 			contentType: "application/json",
// 			dataType: "json",
// 			success: function (response) {
// 				$('.loader-parent').hide();
// 				//$('#screenTwo,#backTwo').show();
// 				if (response.IsSuccess) {
// 					if (planCost > 0) {
// 						$('#ProductPaymenttotalModal').modal('show')
// 					} else {
// 						$('#screenProduct,#backOne').hide();
// 						$('#screenTwo,#backTwo').show();
// 						getDocsList();
// 					}
// 				} else {
// 					$('#alertModal').modal();
// 					$('#alertMsg').html('Please try again');
// 				}
// 			}
// 		});
// 	}
// }

// function getDocsList() {
// 	$('#screenTwo,#backTwo').show();
// 	$('#screenProduct,#backOne').hide();
// 	$('#ProductPaymenttotalModal').modal('hide')
// 	var apiurl = baseUrl + "DIYGetDocumentProofStageByReferenceNumber";
// 	var sendData = {
// 		ReferenceNumber: ref
// 	};
// 	sendData = JSON.stringify(sendData);
// 	$.ajax({
// 		url: apiurl,
// 		type: 'POST',
// 		data: sendData,
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function (response) {
// 			if (response.ObjCDIYRegistration.SamePermanentStatus == 1) {
// 				$('.p-address').addClass('d-none');
// 				pAddressUpdt = true;
// 			} else {
// 				$('.p-address').removeClass('d-none');
// 				pAddressUpdt = false;
// 			}
// 			if (response.ObjCDIYRegistration.FandOStatus == 1) {
// 				fando = true;
// 				$('.fando').removeClass('d-none');
// 			} else {
// 				fando = false;
// 				$('.fando').addClass('d-none');
// 			}
// 		}
// 	})
// }

// function esignPdfPreviewClick() {
// 	var apiurl = baseUrl + "GetEncrptToken";
// 	var sendData = {
// 		ReferenceNumber: eref
// 	}
// 	sendData = JSON.stringify(sendData);
// 	$('.loader-parent').show();
// 	$.ajax({
// 		url: apiurl,
// 		type: 'POST',
// 		data: sendData,
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function (response) {
// 			var s_url = baseUrl + "GetAppFormDetailsDIY";
// 			var s_Data = {
// 				ReferenceNumber: eref,
// 				EncryptToken: response.EncryptToken
// 			}
// 			s_Data = JSON.stringify(s_Data);
// 			$.ajax({
// 				url: s_url,
// 				type: 'POST',
// 				data: s_Data,
// 				contentType: "application/json",
// 				dataType: "json",
// 				success: function (response) {
// 					$('.loader-parent').hide();
// 					if (response.IsSuccess) {
// 						$('#formPDF').modal({
// 							backdrop: 'static',
// 							keyboard: true
// 						});
// 						bindData(response);
// 					} else {
// 						$('#formPDF').modal('hide');
// 					}
// 				},
// 				error: function () {
// 					$('.loader-parent').hide();
// 				}
// 			})

// 		}
// 	});
// }

// function eSignConfirmStage() {
// 	$('#formPDF').modal('hide');
// }

// function eSign() {
// 	$('#formPDF').modal('hide');
// 	$('#mobileCheckModal').modal('show');
// }

// function updateStatus() {
// 	var apiurl = baseUrl + 'UpdateYonoApplicationStatus';
// 	var s_data = {
// 		"ReferenceNumber": ref,
// 		"status": "closed"
// 	}
// 	s_data = JSON.stringify(s_data);
// 	$.ajax({
// 		url: apiurl,
// 		type: 'POST',
// 		data: s_data,
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function (response) {}
// 	});
// }

// function getEmailStatus() {
// 	var apiurl = baseUrl + 'GetOverallStatusByReferenceNumberWB';
// 	var s_data = {
// 		ReferenceNumber: eref
// 	}
// 	s_data = JSON.stringify(s_data);
// 	$.ajax({
// 		url: apiurl,
// 		type: 'POST',
// 		data: s_data,
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function (response) {
// 			if (response.OverallStatusList[0].EmailValid == 'Y') {
// 				$('.emailVerify').hide();
// 			} else {
// 				$('.emailVerify').show();
// 			}
// 		}
// 	});
// }

// function imgPreview(file) {
// 	rotateImgName = file;
// 	if (file == 'PANNumber') {
// 		$('#cropbox').prop('src', 'data:image/jpeg;base64,' + panUrl)
// 	} else if (file == 'ClientPhoto') {
// 		$('#cropbox').prop('src', 'data:image/jpeg;base64,' + clientUrl)
// 	} else if (file == 'SPECIMENPROOF') {
// 		$('#cropbox').prop('src', 'data:image/jpeg;base64,' + signUrl)
// 	} else if (file == 'CorrespondenceAddress') {
// 		$('#cropbox').prop('src', 'data:image/jpeg;base64,' + caUrl)
// 	} else if (file == 'CorrespondenceAddress2') {
// 		$('#cropbox').prop('src', 'data:image/jpeg;base64,' + ca2Url)
// 	} else if (file == 'PermenantAddress') {
// 		$('#cropbox').prop('src', 'data:image/jpeg;base64,' + paUrl)
// 	} else if (file == 'PermenantAddress2') {
// 		$('#cropbox').prop('src', 'data:image/jpeg;base64,' + pa2Url)
// 	} else if (file == 'Income') {
// 		$('#cropbox').prop('src', 'data:image/jpeg;base64,' + iUrl)
// 	}
// 	$('#previewModal').modal();
// }

// function signedPdfDownload() {
// 	var fileUrl = webUrl + 'FileServer/WebAPIPDFDocumentsForEsign/' + ref + '_signedFinal.pdf';

// 	fetch(fileUrl).then(resp => resp.arrayBuffer()).then(resp => {

// 		// set the blog type to final pdf
// 		const file = new Blob([resp], {
// 				type: 'application/pdf'
// 			});

// 		// process to auto download it
// 		const fileURL = URL.createObjectURL(file);
// 		const link = document.createElement('a');
// 		link.href = fileURL;
// 		link.download = ref + '_signedFinal.pdf';
// 		link.click();
// 	});
// }

// function pdfDownload() {
// 	var apiurl = baseUrl + "DIYUpdateIPVStage";
// 	var sendData = {
// 		IsPhysicalEsign: physicalEsign,
// 		ReferenceNumber: ref,
// 		BrowserType: navigator.appName,
// 		IsDiy: true,
// 	};
// 	sendData = JSON.stringify(sendData)
// 		$('.loader-parent').show();
// 	$.ajax({
// 		url: apiurl,
// 		type: 'POST',
// 		data: sendData,
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function (response) {
// 			$('.loader-parent').hide();
// 			if (response.IsSuccess) {
// 				if (response.AOFPDFBase64) {
// 					var link = document.createElement("a");
// 					link.download = ref + ".pdf";
// 					link.href = "data:application/pdf;base64," + response.AOFPDFBase64;
// 					link.click();
// 				}
// 			}
// 		},
// 		error: function () {
// 			$('.loader-parent').hide();
// 		}
// 	});
// }

// function getImages() {
// 	var apiurl = baseUrl + 'DIYGetImagesByReferenceNumber';
// 	var sendData = {
// 		ReferenceNumber: eref
// 	}
// 	$('.loader-parent').show();
// 	sendData = JSON.stringify(sendData);
// 	$.ajax({
// 		url: apiurl,
// 		type: 'POST',
// 		data: sendData,
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function (data) {
// 			$('.loader-parent').hide();

// 			if (data.IsSuccess) {
// 				var response = data.IpvPOAandNomineeList;

// 				response.forEach(function (value, key) {
// 					if (value.ImageName == "PANImage" && value.ImageUrl != null && value.ImageUrl != '') {
// 						$('.panImg').hide();
// 						$('.panImgName').show();
// 						var imgName = value.ImagePath.split('\\');
// 						$('.panImgName .img-name').html(imgName[imgName.length - 1]);
// 						panImageUpdt = true;
// 						panUrl = value.ImageUrl;
// 						$('#panThumb').prop('src', 'data:image/jpeg;base64,' + panUrl);
// 					}

// 					if (value.ImageName == "INCOME" && value.ImageUrl != null && value.ImageUrl != '') {
// 						$('.iImg').hide();
// 						$('.iImgName').show();
// 						var imgName = value.ImagePath.split('\\');
// 						$('.iImgName .img-name').html(imgName[imgName.length - 1]);
// 						iImageUpdt = true;
// 						iUrl = value.ImageUrl;
// 						$('#iList').val(value.DocTypeID);
// 						$('#iThumb').prop('src', 'data:image/jpeg;base64,' + iUrl);
// 					}

// 					if (value.ImageName == "CLIENTPHOTO" && value.ImageUrl != null && value.ImageUrl != '') {
// 						$('.clientImg').hide();
// 						$('.clientImgName').show();
// 						var imgName = value.ImagePath.split('\\');
// 						$('.clientImgName .img-name').html(imgName[imgName.length - 1]);
// 						photoImageUpdt = true;
// 						clientUrl = value.ImageUrl;
// 						$('#clientThumb').prop('src', 'data:image/jpeg;base64,' + clientUrl);
// 						if (value.IsSelfi == 'Y') {
// 							selfTrue = true;
// 						}
// 					}

// 					if (value.ImageName == "Specimen" && value.ImageUrl != null && value.ImageUrl != '') {
// 						$('.signatureImg').hide();
// 						$('.signatureImgName').show();
// 						var imgName = value.ImagePath.split('\\');
// 						$('.signatureImgName .img-name').html(imgName[imgName.length - 1]);
// 						signatureUpdt = true;
// 						signUrl = value.ImageUrl;
// 						$('#signThumb').prop('src', 'data:image/jpeg;base64,' + signUrl)
// 					}

// 					if (value.ImageName == "DocumentImage" && value.ImageUrl != null && value.ImageUrl != '') {
// 						caUrl = value.ImageUrl;
// 						$('.cadrImg').hide();
// 						$('.cadrImgName').show();
// 						var imgName = value.ImagePath.split('\\');
// 						$('.cadrImgName .img-name').html(imgName[imgName.length - 1]);
// 						$('#cadrList').val(value.DocTypeID);
// 						cAddressUpdt = true;
// 						$('#cadrThumb').prop('src', 'data:image/jpeg;base64,' + caUrl);
// 					}

// 					if (value.ImageName == "CORRESPONDENCEADDRESS2" && value.ImageUrl != null && value.ImageUrl != '') {
// 						ca2Url = value.ImageUrl;
// 						$('.cadr2Img').hide();
// 						$('.cadr2ImgName').show();
// 						var imgName = value.ImagePath.split('\\');
// 						$('.cadr2ImgName .img-name').html(imgName[imgName.length - 1]);
// 						$('#cadr2Thumb').prop('src', 'data:image/jpeg;base64,' + ca2Url);
// 					}

// 					if (value.ImageName == "PDocumentImage" && value.ImageUrl != null && value.ImageUrl != '') {
// 						paUrl = value.ImageUrl;
// 						$('.padrImg').hide();
// 						$('.padrImgName').show();
// 						var imgName = value.ImagePath.split('\\');
// 						$('.padrImgName .img-name').html(imgName[imgName.length - 1]);
// 						$('#padrList').val(value.DocTypeID)
// 						pAddressUpdt = true;
// 						$('#padrThumb').prop('src', 'data:image/jpeg;base64,' + paUrl);
// 					}

// 					if (value.ImageName == "PERMENANTADDRESS2" && value.ImageUrl != null && value.ImageUrl != '') {
// 						pa2Url = value.ImageUrl;
// 						$('.padr2Img').hide();
// 						$('.padr2ImgName').show();
// 						var imgName = value.ImagePath.split('\\');
// 						$('.padr2ImgName .img-name').html(imgName[imgName.length - 1]);
// 						$('#padr2List').val(value.DocTypeID)
// 						$('#padr2Thumb').prop('src', 'data:image/jpeg;base64,' + pa2Url);
// 					}

// 					if (value.ImageName == "POI" && value.ImageUrl != null && value.ImageUrl != '') {
// 						poiUrl = value.ImageUrl;
// 						$('.poiImg').hide();
// 						$('.poiImgName').show();
// 						var imgName = value.ImagePath.split('\\');
// 						$('.poiImgName .img-name').html(imgName[imgName.length - 1]);
// 						$('#poiList').val(value.DocTypeID);
// 						poiUpdt = true;
// 					}
// 				})

// 			}
// 		}
// 	})
// }

// function rotate(Degree) {

// 	var img = $('#cropbox')[0];
// 	var canvas = document.createElement('canvas');
// 	var ctx = canvas.getContext("2d");
// 	console.log(img)
// 	if (Degree == '90') {
// 		canvas.setAttribute('width', img.naturalHeight);
// 		canvas.setAttribute('height', img.naturalWidth);
// 		//canvas.width = ;
// 		//canvas.height = ;
// 		var cw = img.naturalHeight;
// 		var ch = img.naturalWidth;
// 		var cy = img.naturalHeight * (-1);

// 		ctx.rotate(90 * Math.PI / 180);
// 		ctx.drawImage(img, 0, cy);
// 	} else if (Degree == '270') {
// 		canvas.width = img.naturalHeight;
// 		canvas.height = img.naturalWidth;
// 		var ctx = canvas.getContext("2d");

// 		var cw = img.naturalHeight;
// 		var ch = img.naturalWidth;
// 		var cx = img.naturalWidth * (-1);

// 		ctx.rotate(270 * Math.PI / 180);
// 		ctx.drawImage(img, cx, 0);
// 	}
// 	var temp = canvas.toDataURL()
// 		//Rotate_Click();
// 		$('#cropbox').prop('src', temp);
// 	$('#saveImgBtn').show();
// }

// function saveImg() {
// 	var imgValue = $('#cropbox').attr('src');
// 	var a = imgValue.split('base64,')
// 		update_img(rotateImgName, a[1], 'Image')
// }

// function resumeDropped() {
// 	var url = baseUrl + 'ResumeDroppedReferenceNumber';
// 	var sendData = {
// 		Mobile: userData.mobileNumber,
// 		Email: userData.email,
// 		PanNumber: userData.panNumber,
// 		DOB: userDob,
// 		ReferenceNumber: ref,
// 		Mode: 'W',
// 		IsDiy: true
// 	}
// 	sendData = JSON.stringify(sendData);
// 	$.ajax({
// 		url: url,
// 		type: 'POST',
// 		data: sendData,
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function (response) {
// 			ref = response.ObjCDIYRegistration.ReferenceNumber;
// 			getOverallStatus();
// 		}
// 	});
// }

// function addExtraNominee() {
// 	if (!adn2) {
// 		adn2 = true;
// 		$('#nTwo').removeClass('d-none');
// 	} else {
// 		adn3 = true;
// 		$('#nThree').removeClass('d-none');
// 		$('#addNominee').addClass('d-none');
// 	}
// }

// function nomineeValidate() {
// 	var error = 0;
// 	var fields = $('#nDetailsOnef input[type=text], #nDetailsOnef input[type=tel], #nDetailsOnef select');

// 	fields.each(function () {
// 		$(this).val($(this).val().trim());
// 		var value = $(this).val();
// 		if (value.length < 1) {
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('Please provide valid input for nominee ' + this.name);
// 			$('#' + this.id).focus();
// 			error++;
// 			return false;
// 		}
// 		if (this.id == 'nl1') {
// 			if ($(this).val().toLowerCase() == $('#n1').val().toLowerCase()) {
// 				$('#alertModal').modal();
// 				$('#alertMsg').html('First Name and Last name should not be same');
// 				$('#' + this.id).focus();
// 				error++;
// 				return false;
// 			}
// 		}

// 		if (this.id == 'n2') {
// 			if (!(mfilter).test($('#n2').val())) {
// 				$('#alertModal').modal();
// 				$('#alertMsg').html('Please provide valid mobile number.');
// 				$('#' + this.id).focus();
// 				error++;
// 				return false;
// 			}
// 		}

// 		if (this.id == 'n3') {
// 			if (!(efilter).test($('#n3').val())) {
// 				$('#alertModal').modal();
// 				$('#alertMsg').html('Please provide valid email.');
// 				$('#' + this.id).focus();
// 				error++;
// 				return false;
// 			}
// 		}
// 	});

// 	if (nNewAddress1) {
// 		var nafields = $('#naddress input[type=text], #naddress input[type=tel]');
// 		nafields.each(function () {
// 			$(this).val($(this).val().trim());
// 			var value = $(this).val();
// 			if (value.length < 1) {
// 				if (this.id != 'nLandmark') {
// 					$('#alertModal').modal();
// 					$('#alertMsg').html('Please provide valid input for nominee ' + this.name);
// 					$('#' + this.id).focus();
// 					error++;
// 					return false;
// 				}
// 			}
// 			if (this.id == 'nStreet') {
// 				if ($(this).val().toLowerCase() == $('#nFlat').val().toLowerCase()) {
// 					$('#alertModal').modal();
// 					$('#alertMsg').html('Address Line Two should not be same with Address Line One');
// 					$('#' + this.id).focus();
// 					error++;
// 					return false;
// 				}
// 			}

// 			if (this.id == 'nLandmark') {
// 				if ($(this).val().toLowerCase() == $('#nStreet').val().toLowerCase()) {
// 					$('#alertModal').modal();
// 					$('#alertMsg').html('Address Line Three should not be same with Address Line Two');
// 					$('#' + this.id).focus();
// 					error++;
// 					return false;
// 				}

// 				if ($(this).val().toLowerCase() == $('#nFlat').val().toLowerCase()) {
// 					$('#alertModal').modal();
// 					$('#alertMsg').html('Address Line Three should not be same with Address Line One');
// 					$('#' + this.id).focus();
// 					error++;
// 					return false;
// 				}
// 			}

// 		});
// 	}

// 	if (!$('#nBP').val()) {
// 		$('#alertModal').modal();
// 		$('#alertMsg').html('Please provide nominee share value.');
// 		$('#' + this.id).focus();
// 		error++;
// 		return false;
// 	}

// 	if (nminor1) {
// 		var gfields = $('#guardian1 input[type=text], #guardian1 input[type=tel], #guardian1 select');

// 		gfields.each(function () {
// 			$(this).val($(this).val().trim());
// 			var value = $(this).val();
// 			if (value.length < 1) {
// 				$('#alertModal').modal();
// 				$('#alertMsg').html('Please provide valid input for guardian ' + this.name);
// 				$('#' + this.id).focus();
// 				error++;
// 				return false;
// 			}

// 			if (this.id == 'gl1') {
// 				if ($(this).val().toLowerCase() == $('#g1').val().toLowerCase()) {
// 					$('#alertModal').modal();
// 					$('#alertMsg').html('First Name and Last name should not be same');
// 					$('#' + this.id).focus();
// 					error++;
// 					return false;
// 				}
// 			}

// 			if (this.id == 'g2') {
// 				if (!(mfilter).test($('#g2').val())) {
// 					$('#alertModal').modal();
// 					$('#alertMsg').html('Please provide valid mobile number.');
// 					$('#' + this.id).focus();
// 					error++;
// 					return false;
// 				}
// 			}

// 			if (this.id == 'g3' && !(efilter).test($('#g3').val())) {
// 				$('#alertModal').modal();
// 				$('#alertMsg').html('Please provide email.');
// 				$('#' + this.id).focus();
// 				error++;
// 				return false;
// 			}
// 		});

// 		if (gNewAddress1) {
// 			var gafields = $('#gaddress input[type=text], #gaddress input[type=tel]');
// 			gafields.each(function () {
// 				$(this).val($(this).val().trim());
// 				var value = $(this).val();
// 				if (value.length < 1) {
// 					if (this.id != 'gLandmark') {
// 						$('#alertModal').modal();
// 						$('#alertMsg').html('Please provide valid input for guardian ' + this.name);
// 						$('#' + this.id).focus();
// 						error++;
// 						return false;
// 					}

// 					if (this.id == 'gStreet') {
// 						if ($(this).val().toLowerCase() == $('#gFlat').val().toLowerCase()) {
// 							$('#alertModal').modal();
// 							$('#alertMsg').html('Address Line Two should not be same with Address Line One');
// 							$('#' + this.id).focus();
// 							error++;
// 							return false;
// 						}
// 					}

// 					if (this.id == 'gLandmark') {
// 						if ($(this).val().toLowerCase() == $('#gStreet').val().toLowerCase()) {
// 							$('#alertModal').modal();
// 							$('#alertMsg').html('Address Line Three should not be same with Address Line Two');
// 							$('#' + this.id).focus();
// 							error++;
// 							return false;
// 						}

// 						if ($(this).val().toLowerCase() == $('#gFlat').val().toLowerCase()) {
// 							$('#alertModal').modal();
// 							$('#alertMsg').html('Address Line Three should not be same with Address Line One');
// 							$('#' + this.id).focus();
// 							error++;
// 							return false;
// 						}
// 					}
// 				}
// 			});
// 		}
// 	}
// 	if (adn2) {
// 		var fields2 = $('#nDetailsTwof input[type=text], #nDetailsTwof input[type=tel], #nDetailsTwof select');
// 		fields2.each(function () {
// 			$(this).val($(this).val().trim());
// 			var value = $(this).val();
// 			if (value.length < 1) {
// 				$('#alertModal').modal();
// 				$('#alertMsg').html('Please provide valid input for second nominee ' + this.name);
// 				$('#' + this.id).focus();
// 				error++;
// 				return false;
// 			}
// 			if (this.id == 'nl21') {
// 				if ($(this).val().toLowerCase() == $('#n21').val().toLowerCase()) {
// 					$('#alertModal').modal();
// 					$('#alertMsg').html('First Name and Last name should not be same');
// 					$('#' + this.id).focus();
// 					error++;
// 					return false;
// 				}
// 			}

// 			if (this.id == 'n22') {
// 				if (!(mfilter).test($('#n22').val())) {
// 					$('#alertModal').modal();
// 					$('#alertMsg').html('Please provide valid mobile number.');
// 					$('#' + this.id).focus();
// 					error++;
// 					return false;
// 				}
// 			}

// 			if (this.id == 'n23') {
// 				if (!(efilter).test($('#n23').val())) {
// 					$('#alertModal').modal();
// 					$('#alertMsg').html('Please provide valid email.');
// 					$('#' + this.id).focus();
// 					error++;
// 					return false;
// 				}
// 			}
// 		});

// 		if (nNewAddress2) {
// 			var nafields2 = $('#naddress2 input[type=text], #naddress2 input[type=tel]');
// 			nafields2.each(function () {
// 				$(this).val($(this).val().trim());
// 				var value = $(this).val();
// 				if (value.length < 1) {
// 					if (this.id != 'nLandmark2') {
// 						$('#alertModal').modal();
// 						$('#alertMsg').html('Please provide valid input for second nominee ' + this.name);
// 						$('#' + this.id).focus();
// 						error++;
// 						return false;
// 					}
// 				}

// 				if (this.id == 'nStreet2') {
// 					if ($(this).val().toLowerCase() == $('#nFlat2').val().toLowerCase()) {
// 						$('#alertModal').modal();
// 						$('#alertMsg').html('Address Line Two should not be same with Address Line One');
// 						$('#' + this.id).focus();
// 						error++;
// 						return false;
// 					}
// 				}

// 				if (this.id == 'nLandmark2') {
// 					if ($(this).val().toLowerCase() == $('#nStreet2').val().toLowerCase()) {
// 						$('#alertModal').modal();
// 						$('#alertMsg').html('Address Line Three should not be same with Address Line Two');
// 						$('#' + this.id).focus();
// 						error++;
// 						return false;
// 					}

// 					if ($(this).val().toLowerCase() == $('#nFlat2').val().toLowerCase()) {
// 						$('#alertModal').modal();
// 						$('#alertMsg').html('Address Line Three should not be same with Address Line One');
// 						$('#' + this.id).focus();
// 						error++;
// 						return false;
// 					}
// 				}
// 			});
// 		}

// 		if (!$('#nBP2').val()) {
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('Please provide second nominee share value.');
// 			$('#' + this.id).focus();
// 			error++;
// 			return false;
// 		}
// 		if (nminor2) {
// 			var gfields2 = $('#guardian2 input[type=text], #guardian2 input[type=tel], #guardian2 select');
// 			gfields2.each(function () {
// 				$(this).val($(this).val().trim());
// 				var value = $(this).val();
// 				if (value.length < 1) {
// 					$('#alertModal').modal();
// 					$('#alertMsg').html("Please provide valid input for second nominee's guardian " + this.name);
// 					$('#' + this.id).focus();
// 					error++;
// 					return false;
// 				}

// 				if (this.id == 'gl21') {
// 					if ($(this).val().toLowerCase() == $('#g21').val().toLowerCase()) {
// 						$('#alertModal').modal();
// 						$('#alertMsg').html('First Name and Last name should not be same');
// 						$('#' + this.id).focus();
// 						error++;
// 						return false;
// 					}
// 				}

// 				if (this.id == 'g22') {
// 					if (!(mfilter).test($('#g22').val())) {
// 						$('#alertModal').modal();
// 						$('#alertMsg').html('Please provide valid mobile number.');
// 						$('#' + this.id).focus();
// 						error++;
// 						return false;
// 					}
// 				}

// 				if (this.id == 'g23') {
// 					if (!(efilter).test($('#g23').val())) {
// 						$('#alertModal').modal();
// 						$('#alertMsg').html('Please provide valid email.');
// 						$('#' + this.id).focus();
// 						error++;
// 						return false;
// 					}
// 				}
// 			});
// 			if (gNewAddress2) {
// 				var gafields2 = $('#gaddress2 input[type=text], #gaddress2 input[type=tel]');
// 				gafields2.each(function () {
// 					$(this).val($(this).val().trim());
// 					var value = $(this).val();
// 					if (value.length < 1) {
// 						if (this.id != 'gLandmark2') {
// 							$('#alertModal').modal();
// 							$('#alertMsg').html("Please provide valid input for second nominee's guardian " + this.name);
// 							$('#' + this.id).focus();
// 							error++;
// 							return false;
// 						}
// 					}

// 					if (this.id == 'gStreet2') {
// 						if ($(this).val().toLowerCase() == $('#gFlat2').val().toLowerCase()) {
// 							$('#alertModal').modal();
// 							$('#alertMsg').html('Address Line Two should not be same with Address Line One');
// 							$('#' + this.id).focus();
// 							error++;
// 							return false;
// 						}
// 					}

// 					if (this.id == 'gLandmark2') {
// 						if ($(this).val().toLowerCase() == $('#gStreet2').val().toLowerCase()) {
// 							$('#alertModal').modal();
// 							$('#alertMsg').html('Address Line Three should not be same with Address Line Two');
// 							$('#' + this.id).focus();
// 							error++;
// 							return false;
// 						}

// 						if ($(this).val().toLowerCase() == $('#gFlat2').val().toLowerCase()) {
// 							$('#alertModal').modal();
// 							$('#alertMsg').html('Address Line Three should not be same with Address Line One');
// 							$('#' + this.id).focus();
// 							error++;
// 							return false;
// 						}
// 					}
// 				});
// 			}
// 		}
// 	}
// 	if (adn3) {
// 		var fields3 = $('#nDetailsThreef input[type=text], #nDetailsThreef input[type=tel], #nDetailsThreef select');
// 		fields3.each(function () {
// 			$(this).val($(this).val().trim());
// 			var value = $(this).val();
// 			if (value.length < 1) {
// 				$('#alertModal').modal();
// 				$('#alertMsg').html('Please provide valid input for third nominee ' + this.name);
// 				$('#' + this.id).focus();
// 				error++;
// 				return false;
// 			}
// 			if (this.id == 'nl31') {
// 				if ($(this).val().toLowerCase() == $('#n31').val().toLowerCase()) {
// 					$('#alertModal').modal();
// 					$('#alertMsg').html('First Name and Last name should not be same');
// 					$('#' + this.id).focus();
// 					error++;
// 					return false;
// 				}
// 			}

// 			if (this.id == 'n32') {
// 				if (!(mfilter).test($('#n32').val())) {
// 					$('#alertModal').modal();
// 					$('#alertMsg').html('Please provide valid mobile number.');
// 					$('#' + this.id).focus();
// 					error++;
// 					return false;
// 				}
// 			}

// 			if (this.id == 'n33') {
// 				if (!(efilter).test($('#n33').val())) {
// 					$('#alertModal').modal();
// 					$('#alertMsg').html('Please provide valid email.');
// 					$('#' + this.id).focus();
// 					error++;
// 					return false;
// 				}
// 			}
// 		});
// 		if (nNewAddress3) {
// 			var nafields3 = $('#naddress3 input[type=text], #naddress3 input[type=tel]');
// 			nafields3.each(function () {
// 				$(this).val($(this).val().trim());
// 				var value = $(this).val();
// 				if (value.length < 1) {
// 					if (this.id != 'nLandmark3') {
// 						$('#alertModal').modal();
// 						$('#alertMsg').html('Please provide valid input for third nominee ' + this.name);
// 						$('#' + this.id).focus();
// 						error++;
// 						return false;
// 					}
// 				}
// 				if (this.id == 'nStreet3') {
// 					if ($(this).val().toLowerCase() == $('#nFlat3').val().toLowerCase()) {
// 						$('#alertModal').modal();
// 						$('#alertMsg').html('Address Line Two should not be same with Address Line One');
// 						$('#' + this.id).focus();
// 						error++;
// 						return false;
// 					}
// 				}

// 				if (this.id == 'nLandmark3') {
// 					if ($(this).val().toLowerCase() == $('#nStreet3').val().toLowerCase()) {
// 						$('#alertModal').modal();
// 						$('#alertMsg').html('Address Line Three should not be same with Address Line Two');
// 						$('#' + this.id).focus();
// 						error++;
// 						return false;
// 					}

// 					if ($(this).val().toLowerCase() == $('#nFlat3').val().toLowerCase()) {
// 						$('#alertModal').modal();
// 						$('#alertMsg').html('Address Line Three should not be same with Address Line One');
// 						$('#' + this.id).focus();
// 						error++;
// 						return false;
// 					}
// 				}
// 			});
// 		}
// 		if (!$('#nBP3').val()) {
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('Please provide input for third nominee value.');
// 			$('#' + this.id).focus();
// 			error++;
// 			return false;
// 		}
// 		if (nminor3) {
// 			var gfields3 = $('#guardian3 input[type=text], #guardian3 input[type=tel], #guardian3 select');
// 			gfields3.each(function () {
// 				$(this).val($(this).val().trim());
// 				var value = $(this).val();
// 				if (value.length < 1) {
// 					$('#alertModal').modal();
// 					$('#alertMsg').html("Please provide valid input for third nominee's guardian " + this.name);
// 					$('#' + this.id).focus();
// 					error++;
// 					return false;
// 				}
// 				if (this.id == 'gl31') {
// 					if ($(this).val().toLowerCase() == $('#g31').val().toLowerCase()) {
// 						$('#alertModal').modal();
// 						$('#alertMsg').html('First Name and Last name should not be same');
// 						$('#' + this.id).focus();
// 						error++;
// 						return false;
// 					}
// 				}

// 				if (this.id == 'g32') {
// 					if (!(mfilter).test($('#g32').val())) {
// 						$('#alertModal').modal();
// 						$('#alertMsg').html('Please provide valid mobile number.');
// 						$('#' + this.id).focus();
// 						error++;
// 						return false;
// 					}
// 				}

// 				if (this.id == 'g33') {
// 					if (!(efilter).test($('#g33').val())) {
// 						$('#alertModal').modal();
// 						$('#alertMsg').html('Please provide valid email.');
// 						$('#' + this.id).focus();
// 						error++;
// 						return false;
// 					}
// 				}
// 			});
// 			if (gNewAddress3) {
// 				var gafields3 = $('#gaddress3 input[type=text], #gaddress3 input[type=tel]');
// 				gafields3.each(function () {
// 					$(this).val($(this).val().trim());
// 					var value = $(this).val();
// 					if (value.length < 1) {
// 						if (this.id != 'gLandmark3') {
// 							$('#alertModal').modal();
// 							$('#alertMsg').html("Please provide valid input for third nominee's guardian address " + this.name);
// 							$('#' + this.id).focus();
// 							error++;
// 							return false;
// 						}
// 					}
// 					if (this.id == 'gStreet3') {
// 						if ($(this).val().toLowerCase() == $('#gFlat3').val().toLowerCase()) {
// 							$('#alertModal').modal();
// 							$('#alertMsg').html('Address Line Two should not be same with Address Line One');
// 							$('#' + this.id).focus();
// 							error++;
// 							return false;
// 						}
// 					}

// 					if (this.id == 'gLandmark3') {
// 						if ($(this).val().toLowerCase() == $('#gStreet3').val().toLowerCase()) {
// 							$('#alertModal').modal();
// 							$('#alertMsg').html('Address Line Three should not be same with Address Line Two');
// 							$('#' + this.id).focus();
// 							error++;
// 							return false;
// 						}

// 						if ($(this).val().toLowerCase() == $('#gFlat3').val().toLowerCase()) {
// 							$('#alertModal').modal();
// 							$('#alertMsg').html('Address Line Three should not be same with Address Line One');
// 							$('#' + this.id).focus();
// 							error++;
// 							return false;
// 						}
// 					}
// 				});
// 			}
// 		}
// 	}
// 	var share = parseInt($('#nBP').val());

// 	if ($('#nBP2').val()) {
// 		share = share + parseInt($('#nBP2').val());
// 	}

// 	if ($('#nBP3').val()) {
// 		share = share + parseInt($('#nBP3').val());
// 	}

// 	if (share != 100) {
// 		$('#alertModal').modal();
// 		$('#alertMsg').html('Nominee shares should be equal to 100%');
// 		$('#nBP').focus()
// 		error++;
// 		return false;
// 	}

// 	if (error == 0) {
// 		updateNominee();
// 	}
// }

// function updateNominee() {
// 	var NomineeInfoListArr = [];

// 	var ObjNomineeDetails1 = new Object();
// 	ObjNomineeDetails1.IsNominee = "1";
// 	ObjNomineeDetails1.NomineeInfoId = nomineeInfoId1;
// 	ObjNomineeDetails1.FirstName = $('#n1').val();
// 	ObjNomineeDetails1.MiddleName = '';
// 	ObjNomineeDetails1.LastName = $('#nl1').val();
// 	ObjNomineeDetails1.Country = "INDIA";
// 	ObjNomineeDetails1.Mobile = $('#n2').val();
// 	ObjNomineeDetails1.Email = $('#n3').val();
// 	ObjNomineeDetails1.NomineeProofId = $('#nidproof1').val();
// 	ObjNomineeDetails1.NomineeIDProofNumber = $('#n5').val();
// 	ObjNomineeDetails1.DOB = $('#ndob1').val();
// 	ObjNomineeDetails1.RelationshipWithNominee = $('#nrelation1').val();
// 	ObjNomineeDetails1.IsSameFirstNomineeGuardian = "0";
// 	ObjNomineeDetails1.IsSameSecondNomineeGuardian = "0";
// 	if (!nNewAddress1) {
// 		ObjNomineeDetails1.IsNomineeSameAsApplicant = "1";
// 	} else {
// 		ObjNomineeDetails1.IsNomineeSameAsApplicant = "0";
// 		ObjNomineeDetails1.AddressLine1 = $('#nFlat').val();
// 		ObjNomineeDetails1.AddressLine2 = $('#nStreet').val();
// 		ObjNomineeDetails1.AddressLine3 = $('#nLandmark').val();
// 		ObjNomineeDetails1.State = $('#nState').val();
// 		ObjNomineeDetails1.PinCode = $('#nPincode').val();
// 		ObjNomineeDetails1.District = nDistrict1;
// 		ObjNomineeDetails1.City = $('#nCity').val();
// 	}

// 	ObjNomineeDetails1.NomineeOrder = "1";
// 	ObjNomineeDetails1.NomineeRatio = $('#nBP').val();

// 	if (nminor1) {
// 		ObjNomineeDetails1.GuardianName = $('#g1').val() + ' ' + $('#gl1').val();
// 		ObjNomineeDetails1.GuardianFirstName = $('#g1').val();
// 		ObjNomineeDetails1.GuardianLastName = $('#gl1').val();
// 		ObjNomineeDetails1.IsGuardian = "1";
// 		ObjNomineeDetails1.GuardianDOB = $('#gdob1').val();
// 		ObjNomineeDetails1.GuardianProofId = $('#gidproof1').val();
// 		ObjNomineeDetails1.GuardianIDProofNumber = $('#g4').val();
// 		ObjNomineeDetails1.GuardianRelationship = $('#grelation1').val();
// 		ObjNomineeDetails1.GuardianMobile = $('#g2').val();
// 		ObjNomineeDetails1.GuardianEmail = $('#g3').val();
// 		if (!gNewAddress1) {
// 			ObjNomineeDetails1.IsSameNomineeANDGuardianAddess = "1";
// 			ObjNomineeDetails1.IsGuardianSamePermenantAddress = "1";
// 		} else {
// 			ObjNomineeDetails1.IsSameNomineeANDGuardianAddess = "0";
// 			ObjNomineeDetails1.IsGuardianSamePermenantAddress = "0";
// 			ObjNomineeDetails1.GuardianAddressLine1 = $('#gFlat').val();
// 			ObjNomineeDetails1.GuardianAddressLine2 = $('#gStreet').val();
// 			ObjNomineeDetails1.GuardianAddressLine3 = $('#gLandmark').val();
// 			ObjNomineeDetails1.GuardianCity = $('#gCity').val();
// 			ObjNomineeDetails1.GuardianState = $('#gState').val();
// 			ObjNomineeDetails1.GuardianCountry = "INDIA";
// 			ObjNomineeDetails1.GuardianPinCode = $('#gPincode').val();
// 			ObjNomineeDetails1.GuardianDistrict = gDistrict1;
// 		}
// 	}

// 	NomineeInfoListArr.push(ObjNomineeDetails1);

// 	if (adn2) {
// 		var ObjNomineeDetails2 = new Object();
// 		ObjNomineeDetails2.IsNominee = "1";
// 		ObjNomineeDetails2.NomineeInfoId = nomineeInfoId2;
// 		ObjNomineeDetails2.FirstName = $('#n21').val();
// 		ObjNomineeDetails2.MiddleName = '';
// 		ObjNomineeDetails2.LastName = $('#nl21').val();
// 		ObjNomineeDetails2.Country = "INDIA";
// 		ObjNomineeDetails2.Mobile = $('#n22').val();
// 		ObjNomineeDetails2.Email = $('#n23').val();
// 		ObjNomineeDetails2.NomineeProofId = $('#nidproof2').val();
// 		ObjNomineeDetails2.NomineeIDProofNumber = $('#n25').val();
// 		ObjNomineeDetails2.DOB = $('#ndob2').val();
// 		ObjNomineeDetails2.RelationshipWithNominee = $('#nrelation2').val();
// 		ObjNomineeDetails2.IsSameFirstNomineeGuardian = "0";
// 		ObjNomineeDetails2.IsSameSecondNomineeGuardian = "0";
// 		if (!nNewAddress2) {
// 			ObjNomineeDetails2.IsNomineeSameAsApplicant = "1";
// 		} else {
// 			ObjNomineeDetails2.IsNomineeSameAsApplicant = "0";
// 			ObjNomineeDetails2.AddressLine1 = $('#nFlat2').val();
// 			ObjNomineeDetails2.AddressLine2 = $('#nStreet2').val();
// 			ObjNomineeDetails2.AddressLine3 = $('#nLandmark2').val();
// 			ObjNomineeDetails2.State = $('#nState2').val();
// 			ObjNomineeDetails2.PinCode = $('#nPincode2').val();
// 			ObjNomineeDetails2.District = nDistrict2;
// 			ObjNomineeDetails2.City = $('#nCity2').val();
// 		}

// 		ObjNomineeDetails2.NomineeOrder = "1";
// 		ObjNomineeDetails2.NomineeRatio = $('#nBP2').val();

// 		if (nminor2) {
// 			ObjNomineeDetails2.GuardianName = $('#g21').val() + ' ' + $('#gl21').val();
// 			ObjNomineeDetails2.GuardianFirstName = $('#g21').val();
// 			ObjNomineeDetails2.GuardianLastName = $('#gl21').val();
// 			ObjNomineeDetails2.IsGuardian = "1";
// 			ObjNomineeDetails2.GuardianDOB = $('#gdob2').val();
// 			ObjNomineeDetails2.GuardianProofId = $('#gidproof2').val();
// 			ObjNomineeDetails2.GuardianIDProofNumber = $('#g24').val();
// 			ObjNomineeDetails2.GuardianRelationship = $('#grelation2').val();
// 			ObjNomineeDetails2.GuardianMobile = $('#g22').val();
// 			ObjNomineeDetails2.GuardianEmail = $('#g23').val();
// 			if (!gNewAddress2) {
// 				ObjNomineeDetails2.IsSameNomineeANDGuardianAddess = "1";
// 				ObjNomineeDetails2.IsGuardianSamePermenantAddress = "1";
// 			} else {
// 				ObjNomineeDetails2.IsSameNomineeANDGuardianAddess = "0";
// 				ObjNomineeDetails2.IsGuardianSamePermenantAddress = "0";
// 				ObjNomineeDetails2.GuardianAddressLine1 = $('#gFlat2').val();
// 				ObjNomineeDetails2.GuardianAddressLine2 = $('#gStreet2').val();
// 				ObjNomineeDetails2.GuardianAddressLine3 = $('#gLandmark2').val();
// 				ObjNomineeDetails2.GuardianCity = $('#gCity2').val();
// 				ObjNomineeDetails2.GuardianState = $('#gState2').val();
// 				ObjNomineeDetails2.GuardianCountry = "INDIA";
// 				ObjNomineeDetails2.GuardianPinCode = $('#gPincode2').val();
// 				ObjNomineeDetails2.GuardianDistrict = gDistrict2;
// 			}
// 		}

// 		NomineeInfoListArr.push(ObjNomineeDetails2);
// 	}

// 	if (adn3) {
// 		var ObjNomineeDetails3 = new Object();
// 		ObjNomineeDetails3.IsNominee = "1";
// 		ObjNomineeDetails3.NomineeInfoId = nomineeInfoId3;
// 		ObjNomineeDetails3.FirstName = $('#n31').val();
// 		ObjNomineeDetails3.MiddleName = '';
// 		ObjNomineeDetails3.LastName = $('#nl31').val();
// 		ObjNomineeDetails3.Country = "INDIA";
// 		ObjNomineeDetails3.Mobile = $('#n32').val();
// 		ObjNomineeDetails3.Email = $('#n33').val();
// 		ObjNomineeDetails3.NomineeProofId = $('#nidproof3').val();
// 		ObjNomineeDetails3.NomineeIDProofNumber = $('#n35').val();
// 		ObjNomineeDetails3.DOB = $('#ndob3').val();
// 		ObjNomineeDetails3.RelationshipWithNominee = $('#nrelation3').val();
// 		ObjNomineeDetails3.IsSameFirstNomineeGuardian = "0";
// 		ObjNomineeDetails3.IsSameSecondNomineeGuardian = "0";
// 		if (!nNewAddress2) {
// 			ObjNomineeDetails3.IsNomineeSameAsApplicant = "1";
// 		} else {
// 			ObjNomineeDetails3.IsNomineeSameAsApplicant = "0";
// 			ObjNomineeDetails3.AddressLine1 = $('#nFlat3').val();
// 			ObjNomineeDetails3.AddressLine2 = $('#nStreet3').val();
// 			ObjNomineeDetails3.AddressLine3 = $('#nLandmark3').val();
// 			ObjNomineeDetails3.State = $('#nState3').val();
// 			ObjNomineeDetails3.PinCode = $('#nPincode3').val();
// 			ObjNomineeDetails3.District = nDistrict3;
// 			ObjNomineeDetails3.City = $('#nCity3').val();
// 		}

// 		ObjNomineeDetails3.NomineeOrder = "1";
// 		ObjNomineeDetails3.NomineeRatio = $('#nBP3').val();

// 		if (nminor2) {
// 			ObjNomineeDetails3.GuardianName = $('#g31').val() + ' ' + $('#gl31').val();
// 			ObjNomineeDetails3.GuardianFirstName = $('#g31').val();
// 			ObjNomineeDetails3.GuardianLastName = $('#gl31').val();
// 			ObjNomineeDetails3.IsGuardian = "1";
// 			ObjNomineeDetails3.GuardianDOB = $('#gdob3').val();
// 			ObjNomineeDetails3.GuardianProofId = $('#gidproof3').val();
// 			ObjNomineeDetails3.GuardianIDProofNumber = $('#g34').val();
// 			ObjNomineeDetails3.GuardianRelationship = $('#grelation3').val();
// 			ObjNomineeDetails3.GuardianMobile = $('#g32').val();
// 			ObjNomineeDetails3.GuardianEmail = $('#g33').val();
// 			if (!gNewAddress2) {
// 				ObjNomineeDetails3.IsSameNomineeANDGuardianAddess = "1";
// 				ObjNomineeDetails3.IsGuardianSamePermenantAddress = "1";
// 			} else {
// 				ObjNomineeDetails3.IsSameNomineeANDGuardianAddess = "0";
// 				ObjNomineeDetails3.IsGuardianSamePermenantAddress = "0";
// 				ObjNomineeDetails3.GuardianAddressLine1 = $('#gFlat3').val();
// 				ObjNomineeDetails3.GuardianAddressLine2 = $('#gStreet3').val();
// 				ObjNomineeDetails3.GuardianAddressLine3 = $('#gLandmark3').val();
// 				ObjNomineeDetails3.GuardianCity = $('#gCity3').val();
// 				ObjNomineeDetails3.GuardianState = $('#gState3').val();
// 				ObjNomineeDetails3.GuardianCountry = "INDIA";
// 				ObjNomineeDetails3.GuardianPinCode = $('#gPincode3').val();
// 				ObjNomineeDetails3.GuardianDistrict = gDistrict3;
// 			}
// 		}

// 		NomineeInfoListArr.push(ObjNomineeDetails3);
// 	}

// 	var apiurl = baseUrl + "DIYNomineeRegistrationNew";
// 	var sendData = [{
// 			ReferenceNumber: ref,
// 			NomineeInfoList: NomineeInfoListArr
// 		}
// 	]
// 	sendData = JSON.stringify(sendData);
// 	$('.loader-parent').show();
// 	$.ajax({
// 		url: apiurl,
// 		type: 'POST',
// 		data: sendData,
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function (response) {
// 			$('.loader-parent').hide();
// 			nUpdated = true;
// 			$('#v-pills-occupation-tab').tab('show');
// 		},
// 		error: function (response) {
// 			$('.loader-parent').hide();
// 			$('#v-pills-occupation-tab').tab('show')
// 		}
// 	});
// }

// function deleteNominee(id) {
// 	var apiurl = baseUrl + "NomineeRemove";
// 	var sendData = {
// 		NomineeInfoId: id,
// 		ReferenceNumber: ref
// 	}
// 	sendData = JSON.stringify(sendData);
// 	$.ajax({
// 		url: apiurl,
// 		type: 'POST',
// 		data: sendData,
// 		contentType: "application/json",
// 		dataType: "json",
// 		success: function (response) {},
// 		error: function (response) {}
// 	});
// }

// function getState(pin, t) {
// 	$('.loader-parent').show();
// 	var apiurl = baseUrl + 'DIYAutoPincode?Pincode=' + pin;
// 	$.ajax({
// 		url: apiurl,
// 		type: 'GET',
// 		success: function (response) {
// 			$('.loader-parent').hide();
// 			if (response.IsSuccess && response.PincodeList[0].StateName && response.PincodeList[0].StateId && response.PincodeList[0].StateName && response.PincodeList[0].District) {

// 				if (t == 'cPincode') {
// 					userData.state = response.PincodeList[0].StateName;
// 					userData.stateId = response.PincodeList[0].StateId;
// 					caddressState = userData.state;
// 					caddressStateId = response.PincodeList[0].StateId;
// 					$('#cState').val(response.PincodeList[0].StateName);
// 					$('#cState ~ label').css({
// 						'top': '-12px'
// 					});
// 					userData.district = response.PincodeList[0].District;
// 				} else if (t == 'kra_cpin') {
// 					kraData.kra_caddressState = response.PincodeList[0].StateName;
// 					kraData.kra_caddressStateId = response.PincodeList[0].StateId;
// 					kraData.kra_caddressState = response.PincodeList[0].StateName;
// 					kraData.kra_caddressDistrict = response.PincodeList[0].District;
// 				} else if (t == 'kra_ppin') {
// 					kraData.kra_paddressState = response.PincodeList[0].StateName;
// 					kraData.kra_paddressStateId = response.PincodeList[0].StateId;
// 					kraData.kra_paddressState = response.PincodeList[0].StateName;
// 					kraData.kra_paddressDistrict = response.PincodeList[0].District;
// 				} else if (t == 'ckyc_cpin') {
// 					ckycData.ckyc_caddressState = response.PincodeList[0].StateName;
// 					ckycData.ckyc_caddressStateId = response.PincodeList[0].StateId;
// 					ckycData.ckyc_caddressState = response.PincodeList[0].StateName;
// 					ckycData.ckyc_caddressDistrict = response.PincodeList[0].District;
// 				} else if (t == 'ckyc_ppin') {
// 					ckycData.ckyc_paddressState = response.PincodeList[0].StateName;
// 					ckycData.ckyc_paddressStateId = response.PincodeList[0].StateId;
// 					ckycData.ckyc_paddressState = response.PincodeList[0].StateName;
// 					ckycData.ckyc_paddressDistrict = response.PincodeList[0].District;
// 				} else if (t == 'pPincode') {
// 					paddressState = response.PincodeList[0].StateName;
// 					paddressStateId = response.PincodeList[0].StateId;
// 					$('#pState').val(response.PincodeList[0].StateName);
// 					$('#pState ~ label').css({
// 						'top': '-12px'
// 					});
// 					paddressDistrict = response.PincodeList[0].District;
// 				} else if (t == 'nPincode') {
// 					$('#nState').val(response.PincodeList[0].StateName);
// 					$('#nState ~ label').css({
// 						'top': '-12px'
// 					});
// 					nDistrict1 = response.PincodeList[0].District;
// 				} else if (t == 'nPincode2') {
// 					$('#nState2').val(response.PincodeList[0].StateName);
// 					$('#nState2 ~ label').css({
// 						'top': '-12px'
// 					});
// 					nDistrict2 = response.PincodeList[0].District;
// 				} else if (t == 'nPincode3') {
// 					$('#nState3').val(response.PincodeList[0].StateName);
// 					$('#nState3 ~ label').css({
// 						'top': '-12px'
// 					});
// 					nDistrict3 = response.PincodeList[0].District;
// 				} else if (t == 'gPincode') {
// 					$('#gState').val(response.PincodeList[0].StateName);
// 					$('#gState ~ label').css({
// 						'top': '-12px'
// 					});
// 					gDistrict1 = response.PincodeList[0].District;
// 				} else if (t == 'gPincode2') {
// 					$('#gState2').val(response.PincodeList[0].StateName);
// 					$('#gState2 ~ label').css({
// 						'top': '-12px'
// 					});
// 					gDistrict2 = response.PincodeList[0].District;
// 				} else if (t == 'gPincode3') {
// 					$('#gState3').val(response.PincodeList[0].StateName);
// 					$('#gState3 ~ label').css({
// 						'top': '-12px'
// 					});
// 					gDistrict3 = response.PincodeList[0].District;
// 				}
// 				getCity(t, response.PincodeList[0].StateId);

// 			} else {
// 				if (t == 'kra_cpin' || t == 'kra_ppin') {
// 					isKra = 'N';
// 					kraClnt = 'N';
// 					$('#corresKRAAddress, #perKRAAddress').html('').hide();
// 					sessionStorage.removeItem('addressproofCollectStatus');
// 					sessionStorage.removeItem('addresproofKRAInfo');
// 				} else if (t == 'ckyc_cpin' || t == 'ckyc_ppin') {
// 					isCkyc = 'N';
// 					ckycClnt = 'N';
// 					$('#corresKRAAddress, #perKRAAddress').html('').hide();
// 				}
// 				$('#alertModal').modal();
// 				$('#alertMsg').html('Please provide valid pin code.');
// 			}

// 		},
// 		error: function () {
// 			$('.loader-parent').hide();
// 		}
// 	})
// }

// function getCity(t, i) {
// 	var apiurl = baseUrl + "DIYGetCityListForAutoFill?StateID=" + i;
// 	cityList = [];
// 	$.ajax({
// 		url: apiurl,
// 		type: 'GET',
// 		success: function (response) {
// 			var len = response.StateDetailsList.length;
// 			for (var j = 0; j < len; j++) {
// 				cityList.push(response.StateDetailsList[j].City.toLowerCase());
// 			}

// 			if (t == 'cPincode') {
// 				cCityList = cityList;
// 				$("#cCity").autocomplete({
// 					source: function (req, resp) {
// 						var q = req.term.toUpperCase();
// 						var myResponse = [];
// 						$.each(cCityList, function (key, item) {
// 							if (item.toUpperCase().indexOf(q) === 0) {
// 								myResponse.push(item.toUpperCase());
// 							}
// 						});
// 						resp(myResponse);
// 					}
// 				})
// 			} else if (t == 'pPincode') {
// 				pCityList = cityList;
// 				$("#pCity").autocomplete({
// 					source: function (req, resp) {
// 						var q = req.term.toUpperCase();
// 						var myResponse = [];
// 						$.each(pCityList, function (key, item) {
// 							if (item.toUpperCase().indexOf(q) === 0) {
// 								myResponse.push(item.toUpperCase());
// 							}
// 						});
// 						resp(myResponse);
// 					}
// 				})
// 			} else if (t == 'nPincode') {
// 				nCityList = cityList;
// 				$("#nCity").autocomplete({
// 					source: function (req, resp) {
// 						var q = req.term.toUpperCase();
// 						var myResponse = [];
// 						$.each(nCityList, function (key, item) {
// 							if (item.toUpperCase().indexOf(q) === 0) {
// 								myResponse.push(item.toUpperCase());
// 							}
// 						});
// 						resp(myResponse);
// 					}
// 				})

// 			} else if (t == 'nPincode2') {
// 				nCityList2 = cityList;
// 				$("#nCity2").autocomplete({
// 					source: function (req, resp) {
// 						var q = req.term.toUpperCase(); ;
// 						var myResponse = [];
// 						$.each(nCityList2, function (key, item) {
// 							if (item.toUpperCase().indexOf(q) === 0) {
// 								myResponse.push(item.toUpperCase());
// 							}
// 						});
// 						resp(myResponse);
// 					}
// 				})
// 			} else if (t == 'nPincode3') {
// 				nCityList3 = cityList;
// 				$("#nCity3").autocomplete({
// 					source: function (req, resp) {
// 						var q = req.term.toUpperCase();
// 						var myResponse = [];
// 						$.each(nCityList3, function (key, item) {
// 							if (item.toUpperCase().indexOf(q) === 0) {
// 								myResponse.push(item.toUpperCase());
// 							}
// 						});
// 						resp(myResponse);
// 					}
// 				});
// 			} else if (t == 'gPincode') {
// 				gCityList = cityList;
// 				$("#gCity").autocomplete({
// 					source: function (req, resp) {
// 						var q = req.term.toUpperCase();
// 						var myResponse = [];
// 						$.each(gCityList, function (key, item) {
// 							if (item.toUpperCase().indexOf(q) === 0) {
// 								myResponse.push(item.toUpperCase());
// 							}
// 						});
// 						resp(myResponse);
// 					}
// 				});
// 			} else if (t == 'gPincode2') {
// 				gCityList2 = cityList;
// 				$("#gCity2").autocomplete({
// 					source: function (req, resp) {
// 						var q = req.term.toUpperCase();
// 						var myResponse = [];
// 						$.each(gCityList2, function (key, item) {
// 							if (item.toUpperCase().indexOf(q) === 0) {
// 								myResponse.push(item.toUpperCase());
// 							}
// 						});
// 						resp(myResponse);
// 					}
// 				});
// 			} else if (t == 'gPincode3') {
// 				gCityList3 = cityList;
// 				$("#gCity3").autocomplete({
// 					source: function (req, resp) {
// 						var q = req.term.toUpperCase();
// 						var myResponse = [];
// 						$.each(gCityList3, function (key, item) {
// 							if (item.toUpperCase().indexOf(q) === 0) {
// 								myResponse.push(item.toUpperCase());
// 							}
// 						});
// 						resp(myResponse);
// 					}
// 				});
// 			}

// 		},
// 		error: function () {}
// 	})
// }

// function cityVal(t) {
// 	if (t == 'cCity') {
// 		var a = $("#cCity").val().toLowerCase();
// 		var index = cCityList.indexOf(a);
// 		if (a && index == -1) {
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('City not found');
// 			$("#cCity").val('');
// 		}
// 	} else if (t == 'pCity') {
// 		var a = $("#pCity").val().toLowerCase();
// 		var index = pCityList.indexOf(a);
// 		if (a && index == -1) {
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('City not found');
// 			$("#pCity").val('');
// 		}
// 	} else if (t == 'nCity') {
// 		var a = $("#nCity").val().toLowerCase();
// 		var index = nCityList.indexOf(a);
// 		if (a && index == -1) {
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('City not found');
// 			$("#nCity").val('');
// 		}
// 	} else if (t == 'nCity2') {
// 		var a = $("#nCity2").val().toLowerCase();
// 		var index = nCityList2.indexOf(a);
// 		if (a && index == -1) {
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('City not found');
// 			$("#nCity2").val('');
// 		}
// 	} else if (t == 'nCity3') {
// 		var a = $("#nCity3").val().toLowerCase();
// 		var index = nCityList3.indexOf(a);
// 		if (a && index == -1) {
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('City not found');
// 			$("#nCity3").val('');
// 		}
// 	} else if (t == 'gCity') {
// 		var a = $("#gCity").val().toLowerCase();
// 		console.log(gCityList)
// 		var index = gCityList.indexOf(a);
// 		if (a && index == -1) {
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('City not found');
// 			$("#gCity").val('');
// 		}
// 	} else if (t == 'gCity2') {
// 		var a = $("#gCity2").val().toLowerCase();
// 		var index = gCityList2.indexOf(a);
// 		if (a && index == -1) {
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('City not found');
// 			$("#gCity2").val('');
// 		}
// 	} else if (t == 'gCity3') {
// 		var a = $("#gCity3").val().toLowerCase();
// 		var index = gCityList3.indexOf(a);
// 		if (a && index == -1) {
// 			$('#alertModal').modal();
// 			$('#alertMsg').html('City not found');
// 			$("#gCity3").val('');
// 		}
// 	}
// }

// function delNominee2() {
// 	adn2 = false;
// 	$('#nTwo').addClass('d-none');
// 	$('#addNominee').removeClass('d-none');
// 	var fields = $('#nDetailsTwof input[type=text], #nDetailsTwof input[type=tel], #nDetailsTwof select');
// 	nminor2 = false;
// 	$('#nBP2').val('');
// 	$('#guardian2, #guardian2C').addClass('d-none');
// 	fields.each(function () {
// 		$(this).val('');
// 	});

// 	var nfields = $('#naddress2 input[type=text], #naddress2 input[type=tel]');
// 	nfields.each(function () {
// 		$(this).val('');
// 	});

// 	$('#naddress2').addClass('d-none');
// 	nNewAddress2 = false;

// 	var gnfields = $('#gaddress2 input[type=text], #gaddress2 input[type=tel]');
// 	gnfields.each(function () {
// 		$(this).val('');
// 	});

// 	$('#gaddress2').addClass('d-none');
// 	gNewAddress2 = false;

// 	var gfields = $('#guardian2 input[type=text], #guardian2 input[type=tel], #guardian2 select');
// 	gfields.each(function () {
// 		$(this).val('');
// 	});

// 	$('#nsameAddreessBox2, #gsameAddreessBox2').prop('checked', true);

// 	if (nomineeInfoId2) {
// 		var a = nomineeInfoId2;
// 		deleteNominee(a);
// 		nomineeInfoId2 = '';
// 	}
// }

// function delNominee3() {
// 	adn3 = false;
// 	$('#nThree').addClass('d-none');
// 	$('#addNominee').removeClass('d-none');
// 	var fields = $('#nDetailsThreef input[type=text], #nDetailsThreef input[type=tel], #nDetailsThreef select');
// 	nminor3 = false;
// 	$('#nBP3').val('');

// 	$('#guardian3, #guardian3C').addClass('d-none');
// 	fields.each(function () {
// 		$(this).val('');
// 	});

// 	var nfields = $('#naddress3 input[type=text], #naddress3 input[type=tel]');
// 	nfields.each(function () {
// 		$(this).val('');
// 	});
// 	$('#naddress3').addClass('d-none');
// 	nNewAddress3 = false;

// 	var gnfields = $('#gaddress3 input[type=text], #gaddress3 input[type=tel]');
// 	gnfields.each(function () {
// 		$(this).val('');
// 	});
// 	$('#gaddress3').addClass('d-none');
// 	gNewAddress3 = false;

// 	var gfields = $('#guardian3 input[type=text],  #guardian3 input[type=tel], #guardian3 select');
// 	gfields.each(function () {
// 		$(this).val('');
// 	});

// 	$('#nsameAddreessBox3, #gsameAddreessBox3').prop('checked', true);

// 	if (nomineeInfoId3) {
// 		var a = nomineeInfoId3;
// 		deleteNominee(a);
// 		nomineeInfoId3 = '';
// 	}
// }

// function showReferral() {
// 	$('.referral').addClass('d-none');
// 	$('#referalDetails').removeClass('d-none');
// }

// function closeRefferal() {
// 	$('.referral').removeClass('d-none');
// 	$('#referalDetails').addClass('d-none');
// 	$('.refDetails').addClass('d-none');
// 	$('#empName').html('');
// 	$('#branchName').html('');
// 	$('#branchCode').html('');
// 	$('#ec').val('');
// 	$('#bc').val('');
// }
