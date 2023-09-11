function bindData(msg) {
	var data = msg;
	if (msg.CRxDigifinAppFormInfoList.length != 0) {
		//Document binding
		if (msg.CRxDigifinAppFormInfoList[0].ClientPhoto) {
			$("#ax-section-clientphoto").show();
			var PanImageBase64 = msg.CRxDigifinAppFormInfoList[0].ClientPhoto;
			$("#ax-clientphoto").attr("src", PanImageBase64);
		} else {
			$("#ax-section-clientphoto").hide();
		}
		//Sign
		if (msg.CRxDigifinAppFormInfoList[0].ClientSignuture) {
			$("#ax-section-clientSign").show();
			var PanImageBase64 = msg.CRxDigifinAppFormInfoList[0].ClientSignuture;
			$("#ax-clientSign").attr("src", PanImageBase64);
			$(".ax-clientSign").attr("src", PanImageBase64);
		} else {
			$("#ax-section-clientSign").hide();
		}
		//Pan
		if (msg.CRxDigifinAppFormInfoList[0].PanImageBase64) {
			$("#ax-section-pancard").show();
			var PanImageBase64 = msg.CRxDigifinAppFormInfoList[0].PanImageBase64;
			$("#ax-pancard").attr("src", PanImageBase64);
		} else {
			$("#ax-section-pancard").hide();
		}
		if (msg.CRxDigifinAppFormInfoList[0].ClientName) {
			$('.pdf-txtclientName').val(msg.CRxDigifinAppFormInfoList[0].ClientName.toUpperCase());
			$('#NameOfBankAccountFirstHolders,#CDName1').html(msg.CRxDigifinAppFormInfoList[0].ClientName.toUpperCase());
			$('#ax-page6-sole1stHolder,#ax-page8-sole1stHolder').html(msg.CRxDigifinAppFormInfoList[0].ClientName.toUpperCase());
			$('#POAByName').val(msg.CRxDigifinAppFormInfoList[0].ClientName.toUpperCase());
			$('#CDNameOfTheClient,#NameOfSecuritiesDematFirstAccountHolders').text(msg.CRxDigifinAppFormInfoList[0].ClientName.toUpperCase());
		}
		//$('#NameOfBankAccountSecondHolders,#CDName2').html(msg.CRxDigifinAppFormInfoList[0].SecondHoldername.toUpperCase());
		//$('#NameOfBankAccountThirdHolders,#CDName3').html(msg.CRxDigifinAppFormInfoList[0].ThirdrHoldername.toUpperCase());
		//var SecHolderName = msg.CRxDigifinAppFormInfoList[0].SecondHoldername.toUpperCase();
		//var ThirdHolderName = msg.CRxDigifinAppFormInfoList[0].ThirdrHoldername.toUpperCase();
		//$('#ax-page6-2ndHolderBankAC').html(msg.CRxDigifinAppFormInfoList[0].SecondHoldername.toUpperCase());
		//$('#ax-page6-3ndHolderBankAC').html(msg.CRxDigifinAppFormInfoList[0].ThirdrHoldername.toUpperCase());


		//Name Declaration
		if (msg.CRxDigifinAppFormInfoList[0].Threein1Status == 'Y') {

			$("#ax-section-NameDeclaration").addClass('page-setup');
			$("#ax-section-NameDeclaration").show();
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth() + 1; //January is 0!

			var yyyy = today.getFullYear();
			if (dd < 10) {
				dd = '0' + dd;
			}
			if (mm < 10) {
				mm = '0' + mm;
			}
			var today = dd + '/' + mm + '/' + yyyy;
			$("#tdNameDescDate").text(today);
			if (msg.CRxDigifinAppFormInfoList[0].ClientName) {
				var CustomerName = msg.CRxDigifinAppFormInfoList[0].ClientName.toUpperCase();
				if (CustomerName != "") {
					$("#tdNameDeclaration").text(CustomerName);
					$("#tdClientPANName").val(CustomerName);
					$("#IdPANDataBaseName").text(CustomerName);
					$("#tdClientPANName1").text(CustomerName);

				}
			}
			if (msg.CRxDigifinAppFormInfoList[0].CorrentAddress) {
				var CorrespondenceAddress = msg.CRxDigifinAppFormInfoList[0].CorrentAddress.toUpperCase();
				if (CorrespondenceAddress != "") {
					$("#tdNameDescAddress").text(CorrespondenceAddress);
					$('.txtCurrentAddress').val(CorrespondenceAddress);
					$('#CDAddress').text(msg.CRxDigifinAppFormInfoList[0].CorrentAddress.toUpperCase());
				}
			}

			if (msg.CRxDigifinAppFormInfoList[0].CCity) {
				var CCity = msg.CRxDigifinAppFormInfoList[0].CCity.toUpperCase();
				var CPinCode = msg.CRxDigifinAppFormInfoList[0].CPinCode;
				if ((CCity != "") && (CPinCode != "")) {
					var citypin = CCity + ',' + CPinCode;
					$("#tdCityPIN").text(citypin);
				}
			}
			if (msg.CRxDigifinAppFormInfoList[0].CState) {
				var CState = msg.CRxDigifinAppFormInfoList[0].CState.toUpperCase();

				if (CState != "") {
					var CCountry = "INDIA";
					var statecountry = CState + ',' + CCountry;
					$("#tdStateCountry").text(statecountry);

				}
			}
			if (msg.CRxDigifinAppFormInfoList[0].ClientName3in1) {
				var ClientName3in1 = msg.CRxDigifinAppFormInfoList[0].ClientName3in1.toUpperCase();
				if (ClientName3in1 != "") {
					$("#IdAdharName").text(ClientName3in1);
				}
			}
			//if (msg.CRxDigifinAppFormInfoList[0].ClientSignuture) {
			//    var ClientSignuture = msg.CRxDigifinAppFormInfoList[0].ClientSignuture;
			//    if (ClientSignuture != "data:image/jpg;base64,") {
			//        $("#NameDeclarationSign").html("<img id='theclientSign44' />");
			//        $("#theclientSign44").attr("src", ClientSignuture);
			//    }
			//}
		} else {
			$("#ax-section-NameDeclaration").hide();
		}

		//cheque
		if (msg.CRxDigifinAppFormInfoList[0].PersonalizedBankImage) {
			$("#ax-section-cheque").show();
			var PanImageBase64 = msg.CRxDigifinAppFormInfoList[0].PersonalizedBankImage;
			$("#ax-cheque").attr("src", PanImageBase64);
		} else {
			$("#ax-section-cheque").hide();
		}
		// Correspondence Front
		if (msg.CRxDigifinAppFormInfoList[0].CAddressImage1) {
			$("#ax-section-caddressFront").show();
			var CAddressImage1 = msg.CRxDigifinAppFormInfoList[0].CAddressImage1;
			$("#ax-caddressFront").attr("src", CAddressImage1);
		} else {
			$("#ax-section-caddressFront").hide();
		}
		// Correspondence Back
		if (msg.CRxDigifinAppFormInfoList[0].CAddressImage2) {
			$("#ax-section-caddressBack").show();
			$("#ax-section-caddressFront").addClass('page-setup');
			var CAddressImage2 = msg.CRxDigifinAppFormInfoList[0].CAddressImage2;
			$("#ax-caddressBack").attr("src", CAddressImage2);
		} else {
			$("#ax-section-caddressBack").hide();
		}

		if ((!msg.CRxDigifinAppFormInfoList[0].CAddressImage2) && (msg.CRxDigifinAppFormInfoList[0].PAddressImage1)) {
			$("#ax-section-caddressFront").addClass('page-setup');
		}
		// Permanent Front
		if (msg.CRxDigifinAppFormInfoList[0].PAddressImage1) {
			$("#ax-section-paddressFront").show();
			$("#ax-section-caddressBack").addClass('page-setup');
			var PAddressImage1 = msg.CRxDigifinAppFormInfoList[0].PAddressImage1;
			$("#ax-paddressFront").attr("src", PAddressImage1);
		} else {
			$("#ax-section-paddressFront").hide();
		}

		// Permanent Back
		if (msg.CRxDigifinAppFormInfoList[0].PAddressImage2) {
			$("#ax-section-paddressBack").show();
			$("#ax-section-paddressFront").addClass('page-setup');
			var PAddressImage2 = msg.CRxDigifinAppFormInfoList[0].PAddressImage2;
			$("#ax-paddressBack").attr("src", PAddressImage2);
		} else {
			$("#ax-section-paddressBack").hide();
		}

		//poa

		if (msg.CRxDigifinAppFormInfoList[0].POA1Base64ImageURL) {
			var filename = msg.CRxDigifinAppFormInfoList[0].POA1Base64ImageURL;
			filename = filename.replace(/~/g, "");

			var fileExtension = filename.substr((filename.lastIndexOf('.') + 1));

			if (fileExtension == "pdf") {
				$("#ax-section-POA").hide();
			} else {
				if (msg.CRxDigifinAppFormInfoList[0].POA1Base64ImageURL) {
					$("#ax-section-POA").show();

					//page setup hide
					if (msg.CRxDigifinAppFormInfoList[0].PAddressImage2) {
						$("#ax-section-paddressBack").addClass('page-setup');
					} else if ((!msg.CRxDigifinAppFormInfoList[0].PAddressImage2) && (msg.CRxDigifinAppFormInfoList[0].PAddressImage1)) {
						$("#ax-section-paddressFront").addClass('page-setup');
					} else if ((!msg.CRxDigifinAppFormInfoList[0].PAddressImage2) && (!msg.CRxDigifinAppFormInfoList[0].PAddressImage1) && (msg.CRxDigifinAppFormInfoList[0].CAddressImage2)) {
						$("#ax-section-caddressBack").addClass('page-setup');
					} else if ((!msg.CRxDigifinAppFormInfoList[0].PAddressImage2) && (!msg.CRxDigifinAppFormInfoList[0].PAddressImage1) && (!msg.CRxDigifinAppFormInfoList[0].CAddressImage2) && (msg.CRxDigifinAppFormInfoList[0].CAddressImage1)) {
						$("#ax-section-caddressFront").addClass('page-setup');
					}
					var POAImages = msg.CRxDigifinAppFormInfoList[0].POA1Base64Image;
					$("#ax-POA").attr("src", POAImages);
				}
			}

		} else {
			$("#ax-section-POA").hide();
		}

		//Terms and condition
		if (msg.CRxDigifinAppFormInfoList[0].RMSignatureBase64ImageURL) {
			var filename = msg.CRxDigifinAppFormInfoList[0].RMSignatureBase64ImageURL;
			filename = filename.replace(/~/g, "");

			var fileExtension = filename.substr((filename.lastIndexOf('.') + 1));

			if (fileExtension == "pdf") {
				$("#ax-section-TermsandCondition").hide();
			} else {

				if (msg.CRxDigifinAppFormInfoList[0].RMSignatureBase64Image) {

					var POAfileExtensions;
					if (msg.CRxDigifinAppFormInfoList[0].POA1Base64ImageURL) {
						var POAfilenam = msg.CRxDigifinAppFormInfoList[0].POA1Base64ImageURL;
						POAfilenam = POAfilenam.replace(/~/g, "");
						POAfileExtensions = POAfilenam.substr((POAfilenam.lastIndexOf('.') + 1));
					}
					//page setup hide
					if (msg.CRxDigifinAppFormInfoList[0].POA1Base64ImageURL && POAfileExtensions != "pdf") {
						$("#ax-section-POA").addClass('page-setup');
					} else if (msg.CRxDigifinAppFormInfoList[0].PAddressImage2) {
						$("#ax-section-paddressBack").addClass('page-setup');
					} else if ((!msg.CRxDigifinAppFormInfoList[0].PAddressImage2) && (msg.CRxDigifinAppFormInfoList[0].PAddressImage1)) {
						$("#ax-section-paddressFront").addClass('page-setup');
					} else if ((!msg.CRxDigifinAppFormInfoList[0].PAddressImage2) && (!msg.CRxDigifinAppFormInfoList[0].PAddressImage1) && (msg.CRxDigifinAppFormInfoList[0].CAddressImage2)) {
						$("#ax-section-caddressBack").addClass('page-setup');
					} else if ((!msg.CRxDigifinAppFormInfoList[0].PAddressImage2) && (!msg.CRxDigifinAppFormInfoList[0].PAddressImage1) && (!msg.CRxDigifinAppFormInfoList[0].CAddressImage2) && (msg.CRxDigifinAppFormInfoList[0].CAddressImage1)) {
						$("#ax-section-caddressFront").addClass('page-setup');
					}

					$("#ax-section-TermsandCondition").show();
					var TermsandConditionimages = msg.CRxDigifinAppFormInfoList[0].RMSignatureBase64Image;
					$("#ax-TermsandCondition").attr("src", TermsandConditionimages);
				}
			}

		} else {
			$("#ax-section-TermsandCondition").hide();
		}

		//Default Declaration
		$("#standingInstructionAutoCreditYes,#standingInstructionPledgeYes,#standingInstructionPOAYes,#standingInstructionSMSFirstHolderYes").attr("checked", "checked");
		$("#standingInstructionSEBI,#standingInstructionRTAYes,#standingInstructionElectronice,#standingInstructionBSDAYes,#standingInstructionECSYes,#p6Declaration1,#TradeSMSYes").attr("checked", "checked");

		//Facta
		$("#crsDeclarationTax1,#crsAddressCommunication,#quarterly,#sharingKycA,#sharingKycB,#sharingKycC").attr("checked", "checked");
		$("#broking,#demat,#quarterly,#mutual,#herebyAuthorize,#3in1,#chkNormal,#chkNew,#onlyIndia,#individualOrdinaryResident,#standingInstructionStatementYes").attr("checked", "checked");

		$("#crsCountryOfBirth").val("INDIA");
		$("#crsAddressResidetial").attr("checked", "checked");
		$("#crsDeclareCountry1").text("INDIA");
		if (msg.CRxDigifinAppFormInfoList[0].ReferenceNumber) {
			$('.txtAppNumber').val(msg.CRxDigifinAppFormInfoList[0].ReferenceNumber);
		}

		if (msg.CRxDigifinAppFormInfoList[0].ReferenceNumber) {
			$('#borderBox').val(msg.CRxDigifinAppFormInfoList[0].ReferenceNumber);
		}
		//if (msg.CRxDigifinAppFormInfoList[0].PANNumber) {
		//    $("#crsDeclareIdentityNumber1").text(msg.CRxDigifinAppFormInfoList[0].PANNumber);
		//    $('#panNumber').val(msg.CRxDigifinAppFormInfoList[0].PANNumber);
		//}
		$("#crsDeclareTIN1").text("PAN");
		if (msg.CRxDigifinAppFormInfoList[0].CorrentAddress) {
			var CorrespondenceAddress = msg.CRxDigifinAppFormInfoList[0].CorrentAddress.toUpperCase();
			$("#crsDeclareTaxPurpose1").text(CorrespondenceAddress);
			$('.txtCurrentAddress').val(CorrespondenceAddress);
		}
		///Start IPV Section ////
		if (msg.CRxDigifinAppFormInfoList[0].PersonOfIPV) {
			var PersonOfIPV = msg.CRxDigifinAppFormInfoList[0].PersonOfIPV;
			if (PersonOfIPV != "") {
				for (var i = 0; i < PersonOfIPV.length; i++) {
					var j = i + 1;
					$("#officeUseIPV" + j).text(PersonOfIPV[i]);
				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].IPVDesignation) {
			$("#officeUseDesignation").val(msg.CRxDigifinAppFormInfoList[0].IPVDesignation);
		}

		if (msg.CRxDigifinAppFormInfoList[0].OrganisationName) {
			var OrganisationName = msg.CRxDigifinAppFormInfoList[0].OrganisationName;
			if (OrganisationName != "") {
				for (var i = 0; i < OrganisationName.length; i++) {
					var j = i + 1;
					$("#officeUseorganisation" + j).text(OrganisationName[i]);
				}
			}
		}

		if (msg.CRxDigifinAppFormInfoList[0].IPVDate) {
			var IPVDate = msg.CRxDigifinAppFormInfoList[0].IPVDate;
			IPVDate = IPVDate.replace('/', '');
			IPVDate = IPVDate.replace('/', '');
			if (IPVDate != "") {
				for (var i = 0; i < IPVDate.length; i++) {
					var j = i + 1;
					$("#officeUseDate" + j).text(IPVDate[i]);
				}
			}
		}
		//////End--IPV Office Use////

		//Second Page
		if (msg.CRxDigifinAppFormInfoList[0].Nationality == 'Indian') {
			$('#Jurisdiation_Yes_Two').prop('checked', true);
		} else {
			$('#Jurisdiation_Yes_One').prop('checked', true);
		}
		if (msg.CRxDigifinAppFormInfoList[0].CountryOfBirth) {
			$('#Jurisdiation_Country_One').val(msg.CRxDigifinAppFormInfoList[0].CountryOfBirth);
		}
		if (msg.CRxDigifinAppFormInfoList[0].Nationality) {
			$('#Jurisdiation_Citizenship_One').val(msg.CRxDigifinAppFormInfoList[0].Nationality);
		}
		if (msg.CRxDigifinAppFormInfoList[0].Nationality) {
			$('#Jurisdiation_Nationality_One').val(msg.CRxDigifinAppFormInfoList[0].Nationality);
		}
		if (msg.CRxDigifinAppFormInfoList[0].TaxJurisdictionCountry) {
			$('#Jurisdiation_Country_td_one').val(msg.CRxDigifinAppFormInfoList[0].TaxJurisdictionCountry);
		}
		if (msg.CRxDigifinAppFormInfoList[0].TaxIdentificationNumber) {
			$('#Jurisdiation_Identifi_number_td_one').val(msg.CRxDigifinAppFormInfoList[0].TaxIdentificationNumber);
		}

		if (msg.CRxDigifinAppFormInfoList[0].ClientAccountNumber) {
			var ClientAccountNumber = msg.CRxDigifinAppFormInfoList[0].ClientAccountNumber;
			$("#ax-page7-scheduleSecuritiesAcDetailsACNo").text(ClientAccountNumber);
			if (ClientAccountNumber != "") {
				for (var i = 0; i < ClientAccountNumber.length; i++) {
					var j = i + 1;
					$("#dematClientId" + j).text(ClientAccountNumber[i]);
					$("#nominationClientId" + j).text(ClientAccountNumber[i]);
					$("#bankdematBOID" + j).text(ClientAccountNumber[i]);
				}
			}
		}

		if (msg.CRxDigifinAppFormInfoList[0].OccupationID) {
			if (msg.CRxDigifinAppFormInfoList[0].OccupationID == "1") {
				$("#p7chkSFH_Occ_PublicSector").attr("checked", "checked");
				$("#primaryApplicationPublic").attr("checked", "checked");
			} else if (msg.CRxDigifinAppFormInfoList[0].OccupationID == "2") {
				$("#p7chkSFH_Occ_PrivateSectorService").attr("checked", "checked");
				$("#primaryApplicationPrivate").attr("checked", "checked");
			} else if (msg.CRxDigifinAppFormInfoList[0].OccupationID == "3") {
				$("#p7chkSFH_Occ_GovernmentService").attr("checked", "checked");
				$("#primaryApplicationGovernment").attr("checked", "checked");
			} else if (msg.CRxDigifinAppFormInfoList[0].OccupationID == "4") {
				$("#p7chkSFH_Occ_Business").attr("checked", "checked");
				$("#primaryApplicationBusiness").attr("checked", "checked");

			} else if (msg.CRxDigifinAppFormInfoList[0].OccupationID == "5") {
				$("#p7chkSFH_Occ_Professional").attr("checked", "checked");
				$("#chkProfessional").attr("checked", "checked");

			} else if (msg.CRxDigifinAppFormInfoList[0].OccupationID == "6") {
				$("#p7chkSFH_Occ_Agriculturist").attr("checked", "checked");
				$("#primaryApplicationAgriculture").attr("checked", "checked");
			} else if (msg.CRxDigifinAppFormInfoList[0].OccupationID == "7") {
				$("#p7chkSFH_Occ_Retired").attr("checked", "checked");
				$("#primaryApplicationRetired").attr("checked", "checked");
			} else if (msg.CRxDigifinAppFormInfoList[0].OccupationID == "8") {
				$("#p7chkSFH_Occ_Housewife").attr("checked", "checked");
				$("#primaryApplicationHousewife").attr("checked", "checked");

			} else if (msg.CRxDigifinAppFormInfoList[0].OccupationID == "9") {
				$("#p7chkSFH_Occ_Student").attr("checked", "checked");
				$("#primaryApplication2Student").attr("checked", "checked");
			} else if (msg.CRxDigifinAppFormInfoList[0].OccupationID == "10") {
				$("#p7chkSFH_Occ_ForexDealer").attr("checked", "checked");
			} else {
				$("#p7chkSFH_Occ_Others").attr("checked", "checked");
				$("#chkOthers ").val(msg.CRxDigifinAppFormInfoList[0].Occupation.toUpperCase());
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].PoliticalExposure == "Y") {
			$("#politicalExposedPerson1").attr("checked", "checked");
		} else if (msg.CRxDigifinAppFormInfoList[0].PoliticalExposure == "R") {
			$("#relatedToPep1").attr("checked", "checked");
		}
		if (msg.CRxDigifinAppFormInfoList[0].FatherCombineName) {
			var FatherCombineName = msg.CRxDigifinAppFormInfoList[0].FatherCombineName.toUpperCase();
			if (FatherCombineName != "") {
				for (var i = 0; i < FatherCombineName.length; i++) {
					var j = i + 1;
					$("#OnefatherHusbandHolder" + j).text(FatherCombineName[i]);
				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].IPVDate) {
			var IPVDate = msg.CRxDigifinAppFormInfoList[0].IPVDate;
			if (IPVDate != "") {
				var j = 0;
				for (var i = 0; i < IPVDate.length; i++) {
					if (IPVDate[i] == "/") {}
					else {
						j++;
						$("#p4tdipv_dt" + j).text(IPVDate[i]);
					}
				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].BankName) {
			$("#userbank").text(msg.CRxDigifinAppFormInfoList[0].BankName);
		}

		if (msg.CRxDigifinAppFormInfoList[0].AccountNumber) {
			var p12tdCID = msg.CRxDigifinAppFormInfoList[0].AccountNumber;
			$("#ax-page7-scheduleBankAcDetailsACNo").text(msg.CRxDigifinAppFormInfoList[0].AccountNumber);
		}
		if (msg.CRxDigifinAppFormInfoList[0].IsPOA == "1") {
			$("#poa").attr("checked", "checked");
		}
		//if (msg.CRxDigifinAppFormInfoList[0].InterestInToBank == "Y")
		//{
		//    $("#bsda").text("Yes");
		//}
		//else {
		//    $("#bsda").text("No");
		//}

		$("#bsda").text("N");
		$("#dematTariffForRetailOthers").attr("checked", "checked");
		$("#tariffPlanCode").val("SA75000");
		if (msg.CRxDigifinAppFormInfoList[0].DematType == "NSDL") {
			$("#nsdl1").attr("checked", "checked");
			$("#nominationNSDL").attr("checked", "checked");
			$("#ChkNSDL").attr("checked", "checked");
			$("#bankdematBranchAddressDPName").text("NSDL");
			$("#p12tdBOID1").html("I");
			$("#p12tdBOID2").html("N");
			$("#p12tdBOID3").html("3");
			$("#p12tdBOID4").html("0");
			$("#p12tdBOID5").html("4");
			$("#p12tdBOID6").html("2");
			$("#p12tdBOID7").html("9");
			$("#p12tdBOID8").html("5");

		} else {
			$("#cdsl1").attr("checked", "checked");
			$("#nominationCDSL").attr("checked", "checked");
			$("#ChkCDSL").attr("checked", "checked");
			$("#bankdematBranchAddressDPName").text("CDSL");
			$("#p12tdBOID1").html("1");
			$("#p12tdBOID2").html("2");
			$("#p12tdBOID3").html("0");
			$("#p12tdBOID4").html("4");
			$("#p12tdBOID5").html("7");
			$("#p12tdBOID6").html("2");
			$("#p12tdBOID7").html("0");
			$("#p12tdBOID8").html("0");

		}
		if (msg.CRxDigifinAppFormInfoList[0].PlanName) {
			$(".planname").val(msg.CRxDigifinAppFormInfoList[0].PlanName);

		}

		if (msg.CRxDigifinAppFormInfoList[0].NSEEquityCash == "Y") {
			$("#nsecash").attr("checked", "checked");

		}
		if (msg.CRxDigifinAppFormInfoList[0].BSEEquityCash == "Y") {
			$("#bseCash").attr("checked", "checked");
		}
		if (msg.CRxDigifinAppFormInfoList[0].NSEEquityFandO == "Y") {
			$("#nseFO").attr("checked", "checked");
			$("#derivatives").attr("checked", "checked");

		}

		if (msg.CRxDigifinAppFormInfoList[0].MCXCommodity == "Y") {
			$("#mcxCommodity").attr("checked", "checked");

			if (msg.CRxDigifinAppFormInfoList[0].valueChainParticipant == "Y") {
				$("#valueChainParticipant").attr("checked", "checked");
			}
			if (msg.CRxDigifinAppFormInfoList[0].exporter == "Y") {
				$("#exporter").attr("checked", "checked");
			}

			if (msg.CRxDigifinAppFormInfoList[0].importer == "Y") {
				$("#importer").attr("checked", "checked");
			}

			if (msg.CRxDigifinAppFormInfoList[0].hedger == "Y") {
				$("#hedger").attr("checked", "checked");
			}

			if (msg.CRxDigifinAppFormInfoList[0].financialParticipant == "Y") {
				$("#financialParticipant").attr("checked", "checked");
			}
			if (msg.CRxDigifinAppFormInfoList[0].trader == "Y") {
				$("#trader").attr("checked", "checked");
			}

			if (msg.CRxDigifinAppFormInfoList[0].jobber == "Y") {
				$("#jobber").attr("checked", "checked");
			}

			if (msg.CRxDigifinAppFormInfoList[0].arbitrager == "Y") {
				$("#arbitrager").attr("checked", "checked");
			}

		}
		if (msg.CRxDigifinAppFormInfoList[0].NCDXCommodity == "Y") {
			$("#ncdexCommodity").attr("checked", "checked");
		}
		if (msg.CRxDigifinAppFormInfoList[0].NSECurrencyFandO == "Y") {
			$("#nscCurrency").attr("checked", "checked");
			$("#currencyDerivatives").attr("checked", "checked");
		}

		if (msg.CRxDigifinAppFormInfoList[0].AccountNumber) {
			var p12tdCID = msg.CRxDigifinAppFormInfoList[0].AccountNumber;
			if (p12tdCID != "") {
				for (var i = 0; i < p12tdCID.length; i++) {
					var j = i + 1;
					$("#standingInstructionACNo" + j).text(p12tdCID[i]);

				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].IsNominee) {
			var IsNominee = msg.CRxDigifinAppFormInfoList[0].IsNominee;
			if (IsNominee == "1") {
				$('#isNominee').prop('checked', true);
			} else {
				$('#isNonominee').prop('checked', true);
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].NomineeProofId) {
			if (msg.CRxDigifinAppFormInfoList[0].NomineeProofId == 111) //Aadhar
			{
				if (msg.CRxDigifinAppFormInfoList[0].NomineeIDProofNumber) {
					var NomineePfNumber = msg.CRxDigifinAppFormInfoList[0].NomineeIDProofNumber;
					if (NomineePfNumber != "") {
						for (var i = 0; i < NomineePfNumber.length; i++) {
							var j = i + 1;
							$("#dpNomineeAadhaarNo" + j).text(NomineePfNumber[i]);
						}
					}
				}
			} else if (msg.CRxDigifinAppFormInfoList[0].NomineeProofId == 118) //Pan
			{
				if (msg.CRxDigifinAppFormInfoList[0].NomineeIDProofNumber) {
					var NomineePfNumber = msg.CRxDigifinAppFormInfoList[0].NomineeIDProofNumber;
					if (NomineePfNumber != "") {
						for (var i = 0; i < NomineePfNumber.length; i++) {
							var j = i + 1;
							$("#dpNomineePanNo" + j).text(NomineePfNumber[i]);
							$("#nomineePAN" + j).text(NomineePfNumber[i]);
						}
					}
				}

			}
		}

		if (msg.CRxDigifinAppFormInfoList[0].GuardianProofId) {
			if (msg.CRxDigifinAppFormInfoList[0].GuardianProofId == 111) //Aadhar
			{
				if (msg.CRxDigifinAppFormInfoList[0].GuardianIDProofNumber) {
					var GuardianIDProofNumber = msg.CRxDigifinAppFormInfoList[0].GuardianIDProofNumber;
					if (GuardianIDProofNumber != "") {
						for (var i = 0; i < GuardianIDProofNumber.length; i++) {
							var j = i + 1;
							$("#dpGuardianAadhaarNo" + j).text(GuardianIDProofNumber[i]);
						}
					}
				}
			} else if (msg.CRxDigifinAppFormInfoList[0].GuardianProofId == 118) //Pan
			{
				if (msg.CRxDigifinAppFormInfoList[0].GuardianIDProofNumber) {
					var GuardianIDProofNumber = msg.CRxDigifinAppFormInfoList[0].GuardianIDProofNumber;
					if (GuardianIDProofNumber != "") {
						for (var i = 0; i < GuardianIDProofNumber.length; i++) {
							var j = i + 1;
							$("#dpGuardianPanNo" + j).text(GuardianIDProofNumber[i]);
						}
					}
				}

			}
		}

		if (msg.CRxDigifinAppFormInfoList[0].DPID) {
			$('#dematACID1').val(msg.CRxDigifinAppFormInfoList[0].DPID);
		}
		if (msg.CRxDigifinAppFormInfoList[0].ClientAccountNumber) {
			$('#dematACID2').val(msg.CRxDigifinAppFormInfoList[0].ClientAccountNumber);
		}
		if (msg.CRxDigifinAppFormInfoList[0].ClientName) {
			$('#oneAdditionalDetailsHolder1').val(msg.CRxDigifinAppFormInfoList[0].ClientName.toUpperCase());

		}
		$("#electonicReport").attr("checked", "checked");
		//Client req 23/07/2019
		//  $('#CDClientCode').text(msg.CRxDigifinAppFormInfoList[0].ClientAccountNumber);
		if (msg.CRxDigifinAppFormInfoList[0].ShareEmailWithRTA == "Y") {
			$("#dpShareWithRTA").text(msg.CRxDigifinAppFormInfoList[0].ShareEmailWithRTA);
		} else {
			$("#dpShareWithRTA").text('N');
		}

		if (msg.CRxDigifinAppFormInfoList[0].UID) {
			var UID = msg.CRxDigifinAppFormInfoList[0].UID;
			if (UID != "") {
				for (var i = 0; i < UID.length; i++) {
					var j = i + 1;
					$("#tdAadhaarNumber" + j).text(UID[i]);
				}
			}
		}
		//Second Page

		$("#applicationNew").attr("checked", "checked");
		if (msg.CRxDigifinAppFormInfoList[0].ClientName) {
			var CustomerName = msg.CRxDigifinAppFormInfoList[0].ClientName.toUpperCase();
			if (CustomerName != "") {
				for (var i = 0; i < CustomerName.length; i++) {
					var j = i + 1;
					$("#tdCustomerName_" + j).text(CustomerName[i]);
				}
			}
		}
		// client name
		if (msg.CRxDigifinAppFormInfoList[0].Title) {
			var Title = msg.CRxDigifinAppFormInfoList[0].Title.toUpperCase();
			if (Title == 'MISS') {
				var j = 1;
				for (var i = 0; i < Title.length; i++) {
					$("#primaryApplicationNamePre" + j).text(Title[i]);
					j++;
					i++;
				}
			} else if (Title != "") {
				for (var i = 0; i < Title.length; i++) {
					var j = i + 1;
					$("#primaryApplicationNamePre" + j).text(Title[i]);
				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].FirstName) {
			var FirstName = msg.CRxDigifinAppFormInfoList[0].FirstName.toUpperCase();

			if (FirstName != "") {
				$('#personal').prop('checked', true);
				for (var i = 0; i < FirstName.length; i++) {
					var j = i + 1;
					$("#primaryApplicationNameFname" + j).text(FirstName[i]);
				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].MiddleName) {
			var MiddleName = msg.CRxDigifinAppFormInfoList[0].MiddleName.toUpperCase();
			if (MiddleName != "") {
				for (var i = 0; i < MiddleName.length; i++) {
					var j = i + 1;
					$("#primaryApplicationNameMname" + j).text(MiddleName[i]);
				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].LastName) {
			var LastName = msg.CRxDigifinAppFormInfoList[0].LastName.toUpperCase();
			if (LastName != "") {
				for (var i = 0; i < LastName.length; i++) {
					var j = i + 1;
					$("#primaryApplicationNameLname" + j).text(LastName[i]);
				}
			}
		}
		//Maiden name
		if ((msg.CRxDigifinAppFormInfoList[0].MaidenNamePrefix) & (msg.CRxDigifinAppFormInfoList[0].MaidenNamePrefix != "0")) {
			var MaidenNamePrefix = msg.CRxDigifinAppFormInfoList[0].MaidenNamePrefix.toUpperCase();
			if (MaidenNamePrefix != "") {
				for (var i = 0; i < MaidenNamePrefix.length; i++) {
					var j = i + 1;
					$("#primaryApplicationMaidenPre" + j).text(MaidenNamePrefix[i]);
				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].MaidenNameFirstName) {
			var MaidenNameFirstName = msg.CRxDigifinAppFormInfoList[0].MaidenNameFirstName.toUpperCase();
			if (MaidenNameFirstName != "") {
				for (var i = 0; i < MaidenNameFirstName.length; i++) {
					var j = i + 1;
					$("#primaryApplicationMaidenFname" + j).text(MaidenNameFirstName[i]);
				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].MaidenNameMiddleName) {
			var MaidenNameMiddleName = msg.CRxDigifinAppFormInfoList[0].MaidenNameMiddleName.toUpperCase();
			if (MaidenNameMiddleName != "") {
				for (var i = 0; i < MaidenNameMiddleName.length; i++) {
					var j = i + 1;
					$("#primaryApplicationMaidenMname" + j).text(MaidenNameMiddleName[i]);
				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].MaidenNameLastName) {
			var MaidenNameLastName = msg.CRxDigifinAppFormInfoList[0].MaidenNameLastName.toUpperCase();
			if (MaidenNameLastName != "") {
				for (var i = 0; i < MaidenNameLastName.length; i++) {
					var j = i + 1;
					$("#primaryApplicationMaidenLname" + j).text(MaidenNameLastName[i]);
				}
			}
		}
		//Father name
		if (msg.CRxDigifinAppFormInfoList[0].FSPrefix) {
			var FSPrefix = msg.CRxDigifinAppFormInfoList[0].FSPrefix.toUpperCase();
			if (FSPrefix != "") {
				for (var i = 0; i < FSPrefix.length; i++) {
					var j = i + 1;
					$("#primaryApplicationFatherPre" + j).text(FSPrefix[i]);
				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].FatherHusName) {
			var FatherHusName = msg.CRxDigifinAppFormInfoList[0].FatherHusName.toUpperCase();
			if (FatherHusName != "") {
				for (var i = 0; i < FatherHusName.length; i++) {
					var j = i + 1;
					$("#primaryApplicationFatherFname" + j).text(FatherHusName[i]);
				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].FatherMiddleName) {
			var FatherMiddleName = msg.CRxDigifinAppFormInfoList[0].FatherMiddleName.toUpperCase();
			if (FatherMiddleName != "") {
				for (var i = 0; i < FatherMiddleName.length; i++) {
					var j = i + 1;
					$("#primaryApplicationFatherMname" + j).text(FatherMiddleName[i]);
				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].FatherLastName) {
			var FatherLastName = msg.CRxDigifinAppFormInfoList[0].FatherLastName.toUpperCase().trim();
			if (FatherLastName != "") {
				for (var i = 0; i < FatherLastName.length; i++) {
					var j = i + 1;
					$("#primaryApplicationFatherLname" + j).text(FatherLastName[i]);
				}
			}
		}

		//Mother name
		if (msg.CRxDigifinAppFormInfoList[0].MotherNamePrefix) {
			var MotherNamePrefix = msg.CRxDigifinAppFormInfoList[0].MotherNamePrefix.toUpperCase();
			if (MotherNamePrefix != "") {
				for (var i = 0; i < MotherNamePrefix.length; i++) {
					var j = i + 1;
					$("#primaryApplicationMotherPre" + j).text(MotherNamePrefix[i]);
				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].MotherName) {
			var MotherName = msg.CRxDigifinAppFormInfoList[0].MotherName.toUpperCase();
			if (MotherName != "") {
				for (var i = 0; i < MotherName.length; i++) {
					var j = i + 1;
					$("#primaryApplicationMotherFname" + j).text(MotherName[i]);
				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].MotherNameMiddleName) {
			var MotherNameMiddleName = msg.CRxDigifinAppFormInfoList[0].MotherNameMiddleName.toUpperCase();
			if (MotherNameMiddleName != "") {
				for (var i = 0; i < MotherNameMiddleName.length; i++) {
					var j = i + 1;
					$("#primaryApplicationMotherMname" + j).text(MotherNameMiddleName[i]);
				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].MotherNameLastName) {
			var MotherNameLastName = msg.CRxDigifinAppFormInfoList[0].MotherNameLastName.toUpperCase().trim();
			if (MotherNameLastName != "") {
				for (var i = 0; i < MotherNameLastName.length; i++) {
					var j = i + 1;
					$("#primaryApplicationMotherLname" + j).text(MotherNameLastName[i]);
				}
			}
		}

		//IDENTITY DETAILS
		if (msg.CRxDigifinAppFormInfoList[0].FatherCombineName) {
			var FatherCombineName = msg.CRxDigifinAppFormInfoList[0].FatherCombineName.toUpperCase();
			if (FatherCombineName != "") {
				for (var i = 0; i < FatherCombineName.length; i++) {
					var j = i + 1;
					$("#tdFatherHusName_" + j).text(FatherCombineName[i]);
				}
			}
		}

		//Gender Status
		if (msg.CRxDigifinAppFormInfoList[0].Gender == "M") {
			$("#chkMale").attr("checked", "checked");
		}
		if (msg.CRxDigifinAppFormInfoList[0].Gender == "F") {
			$("#chkFemale").attr("checked", "checked");
		}

		//Martail Status
		//*************
		if (msg.CRxDigifinAppFormInfoList[0].MaritialStatus == "S") {
			$("#chkSingle").attr("checked", "checked");
		}

		if (msg.CRxDigifinAppFormInfoList[0].MaritialStatus == "M") {
			$("#chkMarried").attr("checked", "checked");
		}
		if (msg.CRxDigifinAppFormInfoList[0].DOB) {
			var CusDateofBirth = msg.CRxDigifinAppFormInfoList[0].DOB;
			CusDateofBirth = CusDateofBirth.replace('/', '');
			CusDateofBirth = CusDateofBirth.replace('/', '');
			if (CusDateofBirth != "") {
				for (var i = 0; i < CusDateofBirth.length; i++) {
					var j = i + 1;
					$("#ddCusDob" + j).text(CusDateofBirth[i]);
				}
			}
		}
		// agent assigned date


		if (msg.CRxDigifinAppFormInfoList[0].AgentAssignedOnDate) {
			var AgentAssignedOnDate = msg.CRxDigifinAppFormInfoList[0].AgentAssignedOnDate;
			AgentAssignedOnDate = AgentAssignedOnDate.replace('/', '');
			AgentAssignedOnDateBirth = AgentAssignedOnDate.replace('/', '');
			if (CusDateofBirth != "") {
				for (var i = 0; i < AgentAssignedOnDateBirth.length; i++) {
					var j = i + 1;
					$("#p4tdApplicationDt" + j).text(AgentAssignedOnDateBirth[i]);
				}
			}
		}
		//IPV Date

		//if (msg.CRxDigifinAppFormInfoList[0].IPVDate) {
		//    var IPVDate = msg.CRxDigifinAppFormInfoList[0].IPVDate;
		//    IPVDateOnDate = IPVDate.replace('/', '');
		//   IPVDateOnDateBirth = IPVDateOnDate.replace('/', '');
		//    if (IPVDateOnDateBirth != "") {
		//        for (var i = 0; i < IPVDateOnDateBirth.length; i++) {
		//            var j = i + 1;
		//            $("#p4tdipv_dt" + j).text(IPVDateOnDateBirth[i]);
		//        }
		//    }
		//}
		//client email
		if (msg.CRxDigifinAppFormInfoList[0].Email) {
			var Email = msg.CRxDigifinAppFormInfoList[0].Email;

			if (Email != "") {
				for (var i = 0; i < Email.length; i++) {
					var j = i + 1;
					$("#p4tdContact_Emailid" + j).text(Email[i]);
				}
			}
		}
		// place
		if (msg.CRxDigifinAppFormInfoList[0].CCity) {
			var CCity = msg.CRxDigifinAppFormInfoList[0].CCity;
			$("#fatcaPlace").val(msg.CRxDigifinAppFormInfoList[0].CCity.toUpperCase());
			if (CCity != "") {
				for (var i = 0; i < CCity.length; i++) {
					var j = i + 1;
					$("#p4tdApplicationPlace" + j).text(CCity[i]);
				}
			}
		}
		// same permanent address
		if (msg.CRxDigifinAppFormInfoList[0].CIsSamePermenantAddress == true)
			$("#sameAddress").attr("checked", "checked");
		//Contact Details
		if (msg.CRxDigifinAppFormInfoList[0].Mobile) {
			var MobileNumber = msg.CRxDigifinAppFormInfoList[0].Mobile.toUpperCase();
			if (MobileNumber != "") {
				for (var i = 0; i < MobileNumber.length; i++) {
					$("#contactDetails").attr("checked", "checked");
					var j = i + 1;
					$("#p4tdContact_Mobile" + j).text(MobileNumber[i]);
				}
			}
		}
		$("#chkNationalityIndian").attr("checked", "checked");
		$("#chkStatusResidentIndividual").attr("checked", "checked");
		//Pan Box
		if (msg.CRxDigifinAppFormInfoList[0].PANNumber) {
			var PanNo = msg.CRxDigifinAppFormInfoList[0].PANNumber.toUpperCase();
			if (PanNo != "") {
				$("#chkProofSpecifyPanCard").attr("checked", "checked");
				for (var i = 0; i < PanNo.length; i++) {
					var j = i + 1;
					$("#p" + j).text(PanNo[i]);
				}

			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].PANNumber) {
			var PanNo = msg.CRxDigifinAppFormInfoList[0].PANNumber.toUpperCase();
			if (PanNo != "") {
				$("#chkProofSpecifyPanCard").attr("checked", "checked");
				for (var i = 0; i < PanNo.length; i++) {
					var j = i + 1;
					$("#p5td1pan" + j).text(PanNo[i]);
				}

			}
		}

		$('#chkProofSpecifyPanCard').prop('checked');
		if (msg.CRxDigifinAppFormInfoList[0].AadhaarNumber) {
			var AadhaarNumber = msg.CRxDigifinAppFormInfoList[0].AadhaarNumber;
			if (AadhaarNumber != "") {
				for (var i = 0; i < AadhaarNumber.length; i++) {
					var j = i + 1;
					$("#tdAadhaarNumber" + j).text(AadhaarNumber[i]);
				}

			}
		}

		var ClientPhoto = msg.CRxDigifinAppFormInfoList[0].ClientPhoto;
		if (ClientPhoto != "data:image/jpg;base64,") {
			$("#identityUserImage").html("<img id='theclientImg' style='height: 100%; max-width: 200px' alt=''/>");
			$("#theclientImg").attr("src", ClientPhoto);
		} else {
			$("#identityUserImage").html("<img src='../ACFormImg/passport_photo.png' width='135' title='' alt=''/>");
			//$("#identityUserImage").html("<img src='../SBICapAOForm/assets/images/image-not-available.jpg' width='135' title='' alt=''/>");
		}
		if (msg.CRxDigifinAppFormInfoList[0].ClientSignutureURL) {
			var ClientSignature = msg.CRxDigifinAppFormInfoList[0].ClientSignutureURL;
			if (msg.CRxDigifinAppFormInfoList[0].KRAClient == "N") {
				$(".firstHolderSign").html("<img id='theclientSign2' />");
				$("#theclientSign2").attr("src", msg.CRxDigifinAppFormInfoList[0].ClientSignuture);
			}
			if (ClientSignature != "data:image/jpg;base64,") {

				//$(".photoSign").html("<img id='theclientSign' />");
				//$("#theclientSign").attr("src", ClientSignuture);
				//$("#jointApplication1").html("<img id='theclientSign1' />");
				//$("#theclientSign1").attr("src", ClientSignuture);
				//$("#txtFirstAccountHolderSign").html("<img id='theclientSign13' />");
				//$("#theclientSign13").attr("src", ClientSignature);
				//$(".firstHolderSign").html("<img id='theclientSign2' />");
				//$("#theclientSign2").attr("src", ClientSignature);
				//$("#Debit_Authorisation_FH10").attr("src", ClientSignature);
				//$("#clientsign").html("<img id='theclientSign3' />");
				//$("#theclientSign3").attr("src", ClientSignuture);
				//$("#witness1stHolder").html("<img id='theclientSign4' />");
				//$("#theclientSign4").attr("src", ClientSignuture);
				//$("#signPrimaryApplication").html("<img id='theclientSign8' />");
				//$("#theclientSign8").attr("src", ClientSignuture);
			}
		}
		//if (msg.CRxDigifinAppFormInfoList[0].NSEEquityCash == "Y") {
		//    $("#nseCashSign").html("<img id='theclientSign5'/>");
		//    $("#theclientSign5").attr("src", ClientSignuture);
		//}
		//if (msg.CRxDigifinAppFormInfoList[0].BSEEquityCash == "Y") {
		//    $("#bseCashSign").html("<img id='theclientSign6'/>");
		//    $("#theclientSign6").attr("src", ClientSignuture);
		//}
		//if (msg.CRxDigifinAppFormInfoList[0].NSEEquityFandO == "Y") {
		//    $("#nseFOSign").html("<img id='theclientSign7'/>");
		//    $("#theclientSign7").attr("src", ClientSignuture);
		//}
		//if (msg.CRxDigifinAppFormInfoList[0].MCXCommodity == "Y") {
		//    $("#mcxCommoditySign").html("<img id='theclientSign11'/>");
		//    $("#theclientSign11").attr("src", ClientSignuture);
		//}
		//if (msg.CRxDigifinAppFormInfoList[0].NCDXCommodity == "Y") {
		//    $("#ncdexCommoditySign").html("<img id='theclientSign12'/>");
		//    $("#theclientSign12").attr("src", ClientSignuture);
		//}
		//if (msg.CRxDigifinAppFormInfoList[0].NSECurrencyFandO == "Y") {
		//    $("#nscCurrencySign").html("<img id='theclientSign13'/>");
		//    $("#theclientSign13").attr("src", ClientSignuture);
		//}

		//  $("#borderBoxRef").append(RefNo);
		if (msg.CRxDigifinAppFormInfoList[0].CorrentAddress) {
			var CorrespondenceAddress = msg.CRxDigifinAppFormInfoList[0].CorrentAddress.toUpperCase();
			if (CorrespondenceAddress != "") {
				$("#addressdetails").attr("checked", "checked");
				for (var i = 0; i < CorrespondenceAddress.length; i++) {
					var j = i + 1;
					$("#p4tdaddress" + j).text(CorrespondenceAddress[i]);
				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].CCity) {
			var CCity = msg.CRxDigifinAppFormInfoList[0].CCity.toUpperCase();

			if (CCity != "") {
				for (var i = 0; i < CCity.length; i++) {
					var j = i + 1;
					$("#p4tdcitytownvillage" + j).text(CCity[i]);

				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].CPinCode) {
			var CPinCode = msg.CRxDigifinAppFormInfoList[0].CPinCode.toUpperCase();

			if (CPinCode != "") {
				for (var i = 0; i < CPinCode.length; i++) {
					var j = i + 1;
					$("#p4tdPincode" + j).text(CPinCode[i]);
				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].CState) {
			var CState = msg.CRxDigifinAppFormInfoList[0].CState.toUpperCase();

			if (CState != "") {
				for (var i = 0; i < CState.length; i++) {
					var j = i + 1;
					$("#p4tdState" + j).text(CState[i]);

				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].CDistrict) {
			var CDistrict = msg.CRxDigifinAppFormInfoList[0].CDistrict;
			if (CDistrict != "") {
				for (var i = 0; i < CDistrict.length; i++) {
					var j = i + 1;
					$("#p4tdDistrict" + j).text(CDistrict[i]);
				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].BankName) {
			var BankName = msg.CRxDigifinAppFormInfoList[0].BankName.toUpperCase();
			if (BankName != "") {
				$("#bankAccountMaintain").val(BankName);
			}
		}
		$("#deptParticipant").val("SBI CAP SECURITIES LTD");
		$("#Debit_Authorisation_Client_Address_two").val(msg.CRxDigifinAppFormInfoList[0].CCity.toUpperCase() + ", " + msg.CRxDigifinAppFormInfoList[0].CDistrict.toUpperCase() + ", " + msg.CRxDigifinAppFormInfoList[0].CState.toUpperCase() + ", " + msg.CRxDigifinAppFormInfoList[0].CPinCode.toUpperCase());
		$("#powerOffice").val(msg.CRxDigifinAppFormInfoList[0].CCity.toUpperCase() + ", " + msg.CRxDigifinAppFormInfoList[0].CDistrict.toUpperCase() + ", " + msg.CRxDigifinAppFormInfoList[0].CState.toUpperCase() + ", " + msg.CRxDigifinAppFormInfoList[0].CPinCode.toUpperCase());
		//permant adress
		if (msg.CRxDigifinAppFormInfoList[0].PermenentAddress) {
			var PermenentAddressAddress = msg.CRxDigifinAppFormInfoList[0].PermenentAddress.toUpperCase();
			if (PermenentAddressAddress != "") {
				$("#currentPermanentAddress").attr("checked", "checked");
				for (var i = 0; i < PermenentAddressAddress.length; i++) {
					var j = i + 1;
					$("#p4td2address" + j).text(PermenentAddressAddress[i]);
				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].PCity) {
			var PCity = msg.CRxDigifinAppFormInfoList[0].PCity.toUpperCase();

			if (PCity != "") {
				for (var i = 0; i < PCity.length; i++) {
					var j = i + 1;
					$("#p4td2citytownvillage" + j).text(PCity[i]);

				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].PPinCode) {
			var PPinCode = msg.CRxDigifinAppFormInfoList[0].PPinCode.toUpperCase();

			if (PPinCode != "") {
				for (var i = 0; i < PPinCode.length; i++) {
					var j = i + 1;
					$("#p4td2Pincode" + j).text(CPinCode[i]);
				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].PState) {
			var PState = msg.CRxDigifinAppFormInfoList[0].PState.toUpperCase();

			if (PState != "") {
				for (var i = 0; i < PState.length; i++) {
					var j = i + 1;
					$("#p4td2State" + j).text(PState[i]);

				}
			}
		}

		if (msg.CRxDigifinAppFormInfoList[0].PDistrict) {
			var PDistrict = msg.CRxDigifinAppFormInfoList[0].PDistrict.toUpperCase();

			if (PDistrict != "") {
				for (var i = 0; i < PDistrict.length; i++) {
					var j = i + 1;
					$("#p4td2District" + j).text(PDistrict[i]);

				}
			}
		}
		var CCountry = "INDIA"; //msg.CRxDigifinAppFormInfoList[0].CCountry.toUpperCase();

		if (CCountry != "") {
			for (var i = 0; i < CCountry.length; i++) {
				var j = i + 1;
				$("#p5tdCountry" + j).text(CCountry[i]);

			}
		}

		$("#addressDetailCorrespondence").attr("checked", "checked");
		//$("#bankdematDP").val("CDSL");
		$("#bankdematBranchAddressDPName").val("Sbicap Securities Ltd");
		$("#otherDetailMenuYes").attr("checked", "checked");
		$("#dealingBrokerDealNo").attr("checked", "checked");
		//if ((msg.CRxDigifinAppFormInfoList[0].UserIPVStatus == "Y")) {
		//    $("#officeUseIPV").attr("checked", "checked");
		//    if (msg.CRxDigifinAppFormInfoList[0].ClientName) {
		//        var CustomerName = msg.CRxDigifinAppFormInfoList[0].ClientName.toUpperCase();
		//        if (CustomerName != "") {
		//            for (var i = 0; i < CustomerName.length; i++) {
		//                var j = i + 1;
		//                $("#officeUseIPV" + j).text(CustomerName[i]);
		//            }
		//        }
		//    }


		//    if (OrganizationName != "") {
		//        for (var i = 0; i < OrganizationName.length; i++) {
		//            var j = i + 1;
		//            $("#officeUseorganisation" + j).text(OrganizationName[i]);

		//        }
		//    }

		//}
		//$("#proofofAddress").val("Correspondence");  //--1
		if (msg.CRxDigifinAppFormInfoList[0].CDocumentType != "") {
			if (msg.CRxDigifinAppFormInfoList[0].CDocumentType.toUpperCase() == "VALID PASSPORT") {
				$("#passport").prop('checked', true);
				$("#passport1").prop('checked', true);
			} else if (msg.CRxDigifinAppFormInfoList[0].CDocumentType.toUpperCase() == "AADHAR") {
				$("#aadhar").prop('checked', true);
				$("#aadhar1").prop('checked', true);
			} else if (msg.CRxDigifinAppFormInfoList[0].CDocumentType.toUpperCase() == "VOTER ID") {
				$("#voter").prop('checked', true);
				$("#voterId1").prop('checked', true);
			} else if (msg.CRxDigifinAppFormInfoList[0].CDocumentType.toUpperCase() == "VALID DRIVING LICENSE") {
				$("#driving").prop('checked', true);
				$("#drivingLicense1").prop('checked', true);
			} else {
				$("#other").prop('checked', true);
				if (msg.CRxDigifinAppFormInfoList[0].CDocumentType.toUpperCase() == "ELECTRICITY BILL" || msg.CRxDigifinAppFormInfoList[0].CDocumentType.toUpperCase() == "RESIDENT LANDLINE TEL. BILL") {
					$("#utilityBill1").prop('checked', true);
				} else if (msg.CRxDigifinAppFormInfoList[0].CDocumentType.toUpperCase() == "BANK STATEMENT OR PASSBOOK") {
					$("#bankStatement1").prop('checked', true);
				} else if (msg.CRxDigifinAppFormInfoList[0].CDocumentType.toUpperCase() != "") {
					$("#others1").prop('checked', true);
				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].Mobile) {
			var ClientMobileNo = msg.CRxDigifinAppFormInfoList[0].Mobile;

			if (ClientMobileNo != "") {
				for (var i = 0; i < ClientMobileNo.length; i++) {
					var j = i + 1;
					$("#p5tdContact_Mobile" + j).text(ClientMobileNo[i]);
				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].Email) {
			var ClientEmail = msg.CRxDigifinAppFormInfoList[0].Email.toUpperCase();

			if (ClientEmail != "") {
				for (var i = 0; i < ClientEmail.length; i++) {
					var j = i + 1;
					$("#p5tdContact_Emailid" + j).text(ClientEmail[i]);
				}
			}
		}
		//Permenenant Address Prof

		if (msg.CRxDigifinAppFormInfoList[0].CIsSamePermenantAddress != "1") {
			if (msg.CRxDigifinAppFormInfoList[0].PDocumentType) {
				if (msg.CRxDigifinAppFormInfoList[0].PDocumentType.toUpperCase() == "VALID PASSPORT") {
					$("#passport2").prop('checked', true);
				} else if (msg.CRxDigifinAppFormInfoList[0].PDocumentType.toUpperCase() == "AADHAR") {
					$("#aadhar2").prop('checked', true);
				} else if (msg.CRxDigifinAppFormInfoList[0].PDocumentType.toUpperCase() == "VOTER ID") {
					$("#voterId2").prop('checked', true);
				} else if (msg.CRxDigifinAppFormInfoList[0].PDocumentType.toUpperCase() == "VALID DRIVING LICENSE") {
					$("#drivingLicense2").prop('checked', true);
				} else if (msg.CRxDigifinAppFormInfoList[0].PDocumentType.toUpperCase() == "ELECTRICITY BILL" || msg.CRxDigifinAppFormInfoList[0].CDocumentType.toUpperCase() == "RESIDENT LANDLINE TEL. BILL") {
					$("#utilityBill2").prop('checked', true);
				} else if (msg.CRxDigifinAppFormInfoList[0].PDocumentType.toUpperCase() == "BANK STATEMENT OR PASSBOOK") {
					$("#bankStatement2").prop('checked', true);
				} else if (msg.CRxDigifinAppFormInfoList[0].PDocumentType.toUpperCase() != "") {
					$("#others2").prop('checked', true);
				}

			}
			if (msg.CRxDigifinAppFormInfoList[0].PermenentAddress) {
				var PermenentAddress = msg.CRxDigifinAppFormInfoList[0].PermenentAddress.toUpperCase();

				if (PermenentAddress != "") {
					for (var i = 0; i < PermenentAddress.length; i++) {
						var j = i + 1;
						$("#p5tdPaddress" + j).text(PermenentAddress[i]);

					}
				}
			}
			if (msg.CRxDigifinAppFormInfoList[0].PCity) {
				var PCity = msg.CRxDigifinAppFormInfoList[0].PCity.toUpperCase();

				if (PCity != "") {
					for (var i = 0; i < PCity.length; i++) {
						var j = i + 1;
						$("#PCity" + j).text(PCity[i]);
					}
				}
			}
			// alert(msg.CRxDigifinAppFormInfoList[0].CPinCode);
			if (msg.CRxDigifinAppFormInfoList[0].PPinCode) {
				var PPinCode = msg.CRxDigifinAppFormInfoList[0].PPinCode;
				if (PPinCode != "") {
					for (var i = 0; i < PPinCode.length; i++) {
						var j = i + 1;
						$("#PPinCode1" + j).text(PPinCode[i]);
					}
				}
			}

			if (msg.CRxDigifinAppFormInfoList[0].PState) {
				var PState = msg.CRxDigifinAppFormInfoList[0].PState.toUpperCase();

				if (PState != "") {
					for (var i = 0; i < PState.length; i++) {
						var j = i + 1;
						$("#PState" + j).text(PState[i]);

					}
				}
			}
			var PCountry = "INDIA"; //msg.CRxDigifinAppFormInfoList[0].CCountry.toUpperCase();

			if (PCountry != "") {
				for (var i = 0; i < PCountry.length; i++) {
					var j = i + 1;
					$("#PCountry" + j).text(PCountry[i]);

				}
			}
		} else {
			if (msg.CRxDigifinAppFormInfoList[0].CDocumentType != "") {
				if (msg.CRxDigifinAppFormInfoList[0].CDocumentType.toUpperCase() == "VALID PASSPORT") {
					$("#passport2").prop('checked', true);
				} else if (msg.CRxDigifinAppFormInfoList[0].CDocumentType.toUpperCase() == "AADHAR") {
					$("#aadhar2").prop('checked', true);
				} else if (msg.CRxDigifinAppFormInfoList[0].CDocumentType.toUpperCase() == "VOTER ID") {
					$("#voterId2").prop('checked', true);
				} else if (msg.CRxDigifinAppFormInfoList[0].CDocumentType.toUpperCase() == "VALID DRIVING LICENSE") {
					$("#drivingLicense2").prop('checked', true);
				} else if (msg.CRxDigifinAppFormInfoList[0].CDocumentType.toUpperCase() == "ELECTRICITY BILL" || msg.CRxDigifinAppFormInfoList[0].CDocumentType.toUpperCase() == "RESIDENT LANDLINE TEL. BILL") {
					$("#utilityBill2").prop('checked', true);
				} else if (msg.CRxDigifinAppFormInfoList[0].CDocumentType.toUpperCase() == "BANK STATEMENT OR PASSBOOK") {
					$("#bankStatement1").prop('checked', true);
				} else if (msg.CRxDigifinAppFormInfoList[0].CDocumentType.toUpperCase() != "") {
					$("#others1").prop('checked', true);
				}

			}

			if (msg.CRxDigifinAppFormInfoList[0].CorrentAddress) {
				var CorrespondenceAddress = msg.CRxDigifinAppFormInfoList[0].CorrentAddress.toUpperCase();
				if (CorrespondenceAddress != "") {
					for (var i = 0; i < CorrespondenceAddress.length; i++) {
						var j = i + 1;
						$("#p5tdPaddress" + j).text(CorrespondenceAddress[i]);
					}
				}
			}

			if (msg.CRxDigifinAppFormInfoList[0].CCity) {
				var CCity = msg.CRxDigifinAppFormInfoList[0].CCity.toUpperCase();

				if (CCity != "") {
					for (var i = 0; i < CorrespondenceAddress.length; i++) {
						var j = i + 1;
						$("#PCity" + j).text(CCity[i]);

					}
				}
			}

			if (msg.CRxDigifinAppFormInfoList[0].CState) {
				var CState = msg.CRxDigifinAppFormInfoList[0].CState.toUpperCase();

				if (CState != "") {
					for (var i = 0; i < CState.length; i++) {
						var j = i + 1;
						$("#PState" + j).text(CState[i]);

					}
				}
			}
			var CCountry = "INDIA"; //msg.CRxDigifinAppFormInfoList[0].CCountry.toUpperCase();

			if (CCountry != "") {
				for (var i = 0; i < CCountry.length; i++) {
					var j = i + 1;
					$("#PCountry" + j).text(CCountry[i]);

				}
			}

		}
		if (msg.CRxDigifinAppFormInfoList[0].EmployeeName) {
			$(".EmployeeName").val(msg.CRxDigifinAppFormInfoList[0].EmployeeName);
			//$("#EmployeeNameOffice").val(msg.CRxDigifinAppFormInfoList[0].EmployeeName);
			if (msg.CRxDigifinAppFormInfoList[0].EmployeeCode) {
				$(".EmployeeCode").val(msg.CRxDigifinAppFormInfoList[0].EmployeeCode);
			}
			if (msg.CRxDigifinAppFormInfoList[0].BranchCode) {
				$(".BranchCode").val(msg.CRxDigifinAppFormInfoList[0].BranchCode);
			}
			if (msg.CRxDigifinAppFormInfoList[0].Branch) {
				$(".BranchName").val(msg.CRxDigifinAppFormInfoList[0].Branch);
			}
		}

		if (msg.CRxDigifinAppFormInfoList[0].Designation) {
			$("#EmployeeOfficeDesignation").val(msg.CRxDigifinAppFormInfoList[0].Designation);
		}

		if (msg.CRxDigifinAppFormInfoList[0].CIsSamePermenantAddress == "1") {
			$("#pCAddressProofHead").text("Correspondence Address/ Permanent Address");
			$("#pCAddressProofHead1").text("Correspondence Address/ Permanent Address");
		}

		//3rd page start dematAccountBankName  --21180100012274

		// $("#kraConfirmationYes").attr("checked", "checked");
		if (msg.CRxDigifinAppFormInfoList[0].KRAClient == "Y") {
			$("#kraConfirmationYes").attr("checked", "checked");
		} else {

			$("#kraConfirmationNo").attr("checked", "checked");
		}
		if (msg.CRxDigifinAppFormInfoList[0].Designation)
			$("#EmployeeDesignation").val("Agent");
		if (msg.CRxDigifinAppFormInfoList[0].BankName)
			$("#pdtdBankname1").val(msg.CRxDigifinAppFormInfoList[0].BankName);
		if (msg.CRxDigifinAppFormInfoList[0].BankName)
			$("#pdtdBranchcode1").val(msg.CRxDigifinAppFormInfoList[0].IFSC);
		if (msg.CRxDigifinAppFormInfoList[0].BankName)
			$("#pdtdBranchname1").val(msg.CRxDigifinAppFormInfoList[0].BankName);
		if (msg.CRxDigifinAppFormInfoList[0].BankAddress)
			$("#bankdematBranchAddress1").val(msg.CRxDigifinAppFormInfoList[0].BankAddress);
		if (msg.CRxDigifinAppFormInfoList[0].AccountNumber)
			$("#p12tdCID").val(msg.CRxDigifinAppFormInfoList[0].AccountNumber);
		if (msg.CRxDigifinAppFormInfoList[0].AccountNumber)
			$("#p8tdMICRCode").val(msg.CRxDigifinAppFormInfoList[0].MICRCode);
		if (msg.CRxDigifinAppFormInfoList[0].AccountNumber)
			$("#p8tdIFSCCode").val(msg.CRxDigifinAppFormInfoList[0].IFSC);

		if (msg.CRxDigifinAppFormInfoList[0].AccountNumber) {
			var p12tdCID = msg.CRxDigifinAppFormInfoList[0].AccountNumber;
			if (p12tdCID != "") {
				for (var i = 0; i < p12tdCID.length; i++) {
					var j = i + 1;
					$("#p12tdCID" + j).text(p12tdCID[i]);

				}
			}
		}
		//if (msg.CRxDigifinAppFormInfoList[0].EmailStatement) {
		//    if (msg.CRxDigifinAppFormInfoList[0].EmailStatement == 'Y') {
		//        $("#TradeSMSYes").attr("checked", "checked");
		//    }
		//    if (msg.CRxDigifinAppFormInfoList[0].EmailStatement == 'N') {
		//        $("#TradeSMSNo").attr("checked", "checked");
		//    }

		//}
		if (msg.CRxDigifinAppFormInfoList[0].AccountType) {
			if (msg.CRxDigifinAppFormInfoList[0].AccountTypeId == '1') {
				$("#savingAccount").attr("checked", "checked");
			}
			if (msg.CRxDigifinAppFormInfoList[0].AccountTypeId == '2') {
				$("#currentAccount").attr("checked", "checked");
			}
			if (msg.CRxDigifinAppFormInfoList[0].AccountTypeId == '3') {
				$("#otherAccount").attr("checked", "checked");
			}
		}

		if (msg.CRxDigifinAppFormInfoList[0].AccountType) {
			if (msg.CRxDigifinAppFormInfoList[0].AccountType == 'SAVINGS') {
				$("#chkSavingAccType").attr("checked", "checked");
			} else if (msg.CRxDigifinAppFormInfoList[0].AccountType == 'EQUITY') {
				$("#chkEquityAccType").attr("checked", "checked");
			} else if (msg.CRxDigifinAppFormInfoList[0].AccountType == 'Fixed Deposits') {
				$("#chkFdAccType").attr("checked", "checked");
			} else if (msg.CRxDigifinAppFormInfoList[0].AccountType == 'Mutual Funds') {
				$("#chkMfAccType").attr("checked", "checked");
			} else if (msg.CRxDigifinAppFormInfoList[0].AccountType == 'Gold') {
				$("#chkGoldAccType").attr("checked", "checked");
			} else if (msg.CRxDigifinAppFormInfoList[0].AccountType == 'Property') {
				$("#chkPropertyAccType").attr("checked", "checked");
			} else if (msg.CRxDigifinAppFormInfoList[0].AccountType == 'Insurance') {
				$("#chkInsuranceAccType").attr("checked", "checked");
			} else if (msg.CRxDigifinAppFormInfoList[0].AccountType == 'Others') {
				$("#chkOtherAccType").attr("checked", "checked");
				$('#txtOtherAccType').val(msg.CRxDigifinAppFormInfoList[0].AccountType);
			}
			var MICRCode = msg.CRxDigifinAppFormInfoList[0].AccountType;
			if (MICRCode != "") {
				for (var i = 0; i < MICRCode.length; i++) {
					var j = i + 1;
					$("#bankdematTypeAC" + j).text(MICRCode[i]);
				}
			}
		}

		if (msg.CRxDigifinAppFormInfoList[0].MICRCode) {
			var MICRCode = msg.CRxDigifinAppFormInfoList[0].MICRCode;
			if (MICRCode != "") {
				for (var i = 0; i < MICRCode.length; i++) {
					var j = i + 1;
					$("#p8tdMICRCode" + j).text(MICRCode[i]);
				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].IFSC) {
			var IFSCCode = msg.CRxDigifinAppFormInfoList[0].IFSC;
			if (IFSCCode != "") {
				for (var i = 0; i < IFSCCode.length; i++) {
					var j = i + 1;
					$("#p8tdIFSCCode" + j).text(IFSCCode[i]);

				}
			}
		}
		//if (msg.CRxDigifinAppFormInfoList[0].DPID) {
		//    var p12tdBOID = msg.CRxDigifinAppFormInfoList[0].DPID;
		//    if (p12tdBOID != "") {
		//        for (var i = 0; i < p12tdBOID.length; i++) {
		//            var j = i + 1;
		//            $("#p12tdBOID" + j).text(p12tdBOID[i]);

		//        }
		//    }
		//}

		if (msg.CRxDigifinAppFormInfoList[0].Email) {
			$("#otherDetailECNEmail").val(msg.CRxDigifinAppFormInfoList[0].Email.toUpperCase());
		}
		if (msg.CRxDigifinAppFormInfoList[0].TradingExperience) {
			var TradingExperience = msg.CRxDigifinAppFormInfoList[0].TradingExperience;
			if ((TradingExperience == "") || (TradingExperience == 0)) {
				$("#noTradingExp").attr("checked", "checked");
			} else {
				$("#p8TradingExp").val(TradingExperience);
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].OpeningFee) {
			//$("#Amount").html(msg.CRxDigifinAppFormInfoList[0].OpeningFee);
			$("#Amount").html("");
		}

		if (msg.CRxDigifinAppFormInfoList[0].IncomeRangeid) {

			if (msg.CRxDigifinAppFormInfoList[0].IncomeRangeid == "1") {
				// $("#p7chkSFH_Below1Lac").attr("checked", "checked");
				$("#p6chkSFH_Below1Lac").attr("checked", "checked");
			} else if (msg.CRxDigifinAppFormInfoList[0].IncomeRangeid == "2") {
				//$("#p7chkSFH_1to5Lac").attr("checked", "checked");
				$("#p6chkSFH_1to5Lac").attr("checked", "checked");
			} else if (msg.CRxDigifinAppFormInfoList[0].IncomeRangeid == "4") {
				// $("#p7chkSFH_5to10Lac").attr("checked", "checked");
				$("#p6chkSFH_5to10Lac").attr("checked", "checked");
			} else if (msg.CRxDigifinAppFormInfoList[0].IncomeRangeid == "5") {
				//  $("#p7chkSFH_10to25Lac").attr("checked", "checked");
				$("#p6chkSFH_10to25Lac").attr("checked", "checked");

			} else if (msg.CRxDigifinAppFormInfoList[0].IncomeRangeid == "6") {
				// $("#p7chkSFH_25Lacs").attr("checked", "checked");
				$("#p6chkSFH_25Lacs").attr("checked", "checked");
			}
			//else if (msg.CRxDigifinAppFormInfoList[0].IncomeRangeid == "8") {
			//    // $("#p7chkSFH_25Lacs").attr("checked", "checked");
			//}
			else {
				// $("#p7chkSFH_Below1Lac").attr("checked", "checked");
				$("#p6chkSFH_Below1Lac").attr("checked", "checked");
			}

		}

		if (msg.CRxDigifinAppFormInfoList[0].NetWorth)
			$("#p7txtSFHNetWorth").val(msg.CRxDigifinAppFormInfoList[0].NetWorth.toUpperCase());

		if (msg.CRxDigifinAppFormInfoList[0].NetWorth) {
			if (msg.CRxDigifinAppFormInfoList[0].NetWorth != "" && msg.CRxDigifinAppFormInfoList[0].NetWorth != 0) {
				if (msg.CRxDigifinAppFormInfoList[0].AgentAssignedOnDate) {
					var NetworthDate = msg.CRxDigifinAppFormInfoList[0].AgentAssignedOnDate.toUpperCase();
					if (NetworthDate != "") {

						NetworthDate = NetworthDate.replace("/", "").replace("/", "");
						for (var i = 0; i < NetworthDate.length; i++) {
							var j = i + 1;
							$("#p7SFH_date" + j).text(NetworthDate[i]);
						}
					}
				}
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].BrokerName != "" && msg.CRxDigifinAppFormInfoList[0].BrokerName != null) {
			$("#textNameofSubBroker ").val(msg.CRxDigifinAppFormInfoList[0].BrokerName);
			$('#dealingBrokerYes').prop('checked', true);
		} else {
			$('#dealingBrokerNo').prop('checked', true);
		}
		//if (msg.CRxDigifinAppFormInfoList[0].AnualReport == "E") {
		//$('#otherDetailECN').prop('checked', true);
		//}
		$('#otherDetailECN').prop('checked', true);
		$('#otherDetailECN').prop('checked', true);

		if (msg.CRxDigifinAppFormInfoList[0].PastActions == "Y") {
			$('#pastActionYes').prop('checked', true);
		} else {
			$('#pastActionNo').prop('checked', true);
		}

		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1; //January is 0!

		var yyyy = today.getFullYear();
		if (dd < 10) {
			dd = '0' + dd;
		}
		if (mm < 10) {
			mm = '0' + mm;
		}
		var today = dd + '/' + mm + '/' + yyyy;

		$("#TodDate").val(today);
		$("#TodayDate").val(today);
		$("#TodayDate1").val(today);
		today = today.replace('/', '');
		today = today.replace('/', '');

		if (today != "") {
			for (var i = 0; i < today.length; i++) {
				var j = i + 1;
				//$("#declarationDate" + j).text(today[i]);
				// $("#primaryApplicationDeclarationED" + j).text(today[i]);
				$("#nominationCancelDateD" + j).text(today[i]);
				// $("#fatcaD" + j).text(today[i]);
				//$("#guardianEndDateD" + j).text(today[i]);


			}
		}

		$("#paDeclarationPlace").val("CHENNAI");
		if (msg.CRxDigifinAppFormInfoList[0].IsNominee) {
			var IsNominee = msg.CRxDigifinAppFormInfoList[0].IsNominee;
			if (IsNominee == "1") {
				$('#makeNomination').prop('checked', true);
				$('#chkWishNominee').prop('checked', true);
				$('#makeaNomination').prop('checked', true);
				$('#nomineeName').val(msg.CRxDigifinAppFormInfoList[0].NomineeName);
				$('#relationShipNominee').val(msg.CRxDigifinAppFormInfoList[0].RelationshipWithNominee);
				if (msg.CRxDigifinAppFormInfoList[0].NomineeDOB) {
					var NomineeDOB = msg.CRxDigifinAppFormInfoList[0].NomineeDOB;
					if (p12tdCID != "") {
						for (var i = 0; i < NomineeDOB.length; i++) {
							var j = i + 1;
							$("#nomineeDOB" + j).text(NomineeDOB[i]);

						}
					}
				}
				if (msg.CRxDigifinAppFormInfoList[0].ClientName) {
					var CustomerName = msg.CRxDigifinAppFormInfoList[0].ClientName.toUpperCase();
					if (CustomerName != "") {
						$("#noimineeNameOfHolder1").text(CustomerName);
						$("#bankdematBeneficiary").val(msg.CRxDigifinAppFormInfoList[0].ClientName.toUpperCase());
					}
				}
				if (msg.CRxDigifinAppFormInfoList[0].NomineeAddress1) {
					var Naddr1 = msg.CRxDigifinAppFormInfoList[0].NomineeAddress1;
				}
				if (msg.CRxDigifinAppFormInfoList[0].NomineeAddress2) {
					var Naddr2 = msg.CRxDigifinAppFormInfoList[0].NomineeAddress2;
				}
				if (msg.CRxDigifinAppFormInfoList[0].NomineeCity) {
					var NCity = msg.CRxDigifinAppFormInfoList[0].NomineeCity;
				}
				if (msg.CRxDigifinAppFormInfoList[0].NomineeState) {
					var NState = msg.CRxDigifinAppFormInfoList[0].NomineeState;
				}
				//var NCountry = msg.CRxDigifinAppFormInfoList[0].NomineeCountry;
				if (msg.CRxDigifinAppFormInfoList[0].NomineePinCode) {
					var NPincode = msg.CRxDigifinAppFormInfoList[0].NomineePinCode;
				}
				var NomineeAddress = Naddr1 + "," + Naddr2 + "," + NCity + "," + NState + "," + NPincode;
				if (NomineeAddress.toUpperCase != "") {
					$('#addressOfNominee').val(NomineeAddress.toUpperCase());
				}

				// $('#addressOfNominee').text(','+ msg.CRxDigifinAppFormInfoList[0].NomineeAddress2);
				if (msg.CRxDigifinAppFormInfoList[0].NomineeGuardianName) {
					$('#nomineeNameOfGuardian').val(msg.CRxDigifinAppFormInfoList[0].NomineeGuardianName);
				}
				if (msg.CRxDigifinAppFormInfoList[0].NomineeGuardainAddress1) {
					$('#nomineeAddressOfGuardian').val(msg.CRxDigifinAppFormInfoList[0].NomineeGuardainAddress1);
				}
				//$('#witnessName1').val(msg.CRxDigifinAppFormInfoList[0].NomineeName);
				// $('#witnessAddress1').val(msg.CRxDigifinAppFormInfoList[0].NomineeAddress1);

				var d = new Date();
				var strDate = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
				var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
				var newDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
				var a = new Date(strDate);
				//alert(weekday[a.getDay()]);
				// alert(d.getMonth() + 1);
				// var dd = d.getFullYear().slice(2);


				//$('#POAdate').val(weekday[a.getDay()]);
				//$('#POAMonth').val(d.getMonth() + 1);
				//if (d.getFullYear()) {
				//    $('.twenty-20').hide();
				//} else {
				//    $('.twenty-20').show();
				//}
				//$('#POAYear').val(d.getFullYear());
				//$('#POAdate').val(weekday[a.getDay()]);
			} else {
				$('#chkDoNotWishNominee').prop('checked', true);
				$('#donotMakeNomination').prop('checked', true);
			}
		}
		$('#CDClientCode').val(); ///Client Code
		$('#CDName4').val();
		$('#electronic').prop('checked', true);
		$('#termDate').val(newDate);

		////////////////////////Multiple Nominee start////////////////
		if (msg.CRxDigifinAppFormInfoList[0].NomineeList) {
			var nomineeList = msg.CRxDigifinAppFormInfoList[0].NomineeList;
			if (nomineeList.length != null) {
				if (nomineeList.length > 0) {

					$("#TCPOApage8").addClass('page-setup');
					$("#NomineePOApage9").addClass('page-setup');
					$("#NomineePOApage10").addClass('page-setup');
				} else {
					$("#TCPOApage8").addClass('page-setup');
					$("#NomineePOApage9").hide();
					$("#NomineePOApage10").hide();
				}

				for (var i = 0; i < nomineeList.length; i++) {
					var j = i + 1;
					var k = j;
					$("#nomineeDOB" + j).text(NomineeDOB[i]);

					$("#nominationTablefnamenominee" + j).text(nomineeList[i].NomineeFirstName);
					//$("#nominationTablemnamenominee" + j).text(nomineeList[i].);
					$("#nominationTablelnamenominee" + j).text(nomineeList[i].NomineeLastName);

					$("#forCDSLEquallyPercent" + j).text(nomineeList[i].NomineeRatio);
					$("#nomineeRelationShipApplication" + j).text(nomineeList[i].RelationshipWithNominee);
					$("#nomineeAddr" + j).text(nomineeList[i].NomineeAddress1);
					$("#nomineeCity" + j).text(nomineeList[i].NomineeCity);
					$("#nomineeState" + j).text(nomineeList[i].NomineeState);
					$("#nomineePin" + j).text(nomineeList[i].NomineePinCode);
					$("#nomineeCountry" + j).text(nomineeList[i].NomineeCountry);

					if (nomineeList[i].NomineeProofId == 111) { //AAdhar-Card
						$('#nomineeAadhaarUID').prop('checked', true);
						var str = nomineeList[i].NomineeIDProofNumber;
						str = str.replace(/\d(?=\d{6})/g, "*");
						$("#nomineeAadhaarUID" + j).text(str);
					} else if (nomineeList[i].NomineeProofId == 118) //118 -PAN  Card
					{
						$('#nomineePan').prop('checked', true);
						$("#nomineePan" + j).text(nomineeList[i].NomineeIDProofNumber);
					} else if (nomineeList[i].NomineeProofId == 112) { //bank Proof
						$('#nomineeSavingBankAc').prop('checked', true);
						$("#nomineeProofOfIdentity" + j).text(nomineeList[i].NomineeIDProofNumber);
					} else {
						$('#nomineeProofOfIdentity').prop('checked', true);
						$("#nomineeProofOfIdentity" + j).text(nomineeList[i].NomineeIDProofNumber);
					}

					//Nominee -Minor///
					if (nomineeList[i].NomineeAge) {
						var nAge = nomineeList[i].NomineeAge;
						if (18 >= nAge) {

							$("#nomineeNameOfGuardian" + j).text(nomineeList[i].GuardianFirstName);
							$("#nomineeLNameOfGuardian" + j).text(nomineeList[i].GuardianLastName);

							$("#nomineeAddressOfGuardian" + j).text(nomineeList[i].NomineeGuardainAddress1);
							$("#nomineeAddressOfGuardianCity" + j).text(nomineeList[i].NomineeGuardainCity);
							$("#nomineeAddressOfGuardianState" + j).text(nomineeList[i].NomineeGuardainState);
							$("#nomineeAddressOfGuardianPin" + j).text(nomineeList[i].NomineeGuardainPinCode);
							$("#nomineeAddressOfGuardianCountry" + j).text(nomineeList[i].NomineeGuardainCountry);
							$("#nomineeGuardianRelation" + j).text(nomineeList[i].RelationshipWithNominee);

							if (nomineeList[i].GuardianProofId == 111) { //AAdhar-Card
								$('#GuardianAadhaarUID').prop('checked', true);
								var str = nomineeList[i].GuardianIDProofNumber;
								str = str.replace(/\d(?=\d{6})/g, "*");
								$("#guardianAadhaar" + j).text(str);
							} else if (nomineeList[i].GuardianProofId == 118) //118 -PAN  Card
							{
								$('#guardianPan').prop('checked', true);
								$("#guardianPan" + j).text(nomineeList[i].GuardianIDProofNumber);
							} else if (nomineeList[i].GuardianProofId == 112) { //bank Proof
								$('#guardianSavingBAc').prop('checked', true);
								$("#guardianSavingBAc" + j).text(nomineeList[i].GuardianIDProofNumber);
							} else {
								$('#nomineeGuardianPOI').prop('checked', true);
								$("#nomineeGuardianPOI" + j).text(nomineeList[i].GuardianIDProofNumber);
							}
							$("#nameOfAcSign" + j).text(nomineeList[i].NomineeGuardianName);

							if (nomineeList[i].NomineeDOB) {
								var NomineeDOB = nomineeList[i].NomineeDOB;
								if (NomineeDOB != "") {
									for (var m = 0; m < NomineeDOB.length; m++) {
										var n = m + 1;
										$("#nomineeMandatoryID" + k + n).text(NomineeDOB[m]); //nomineeMandatory1D1

									}
								}
							}

							//$("#guardianPan" + j).text(nomineeList[i].NomineeCity);
							//$("#guardianAadhaar" + j).text(nomineeList[i].NomineeState);
							//$("#guardianSavingBAc" + j).text(nomineeList[i].NomineePinCode);
							//$("#nomineeGuardianPOI" + j).text(nomineeList[i].NomineeCountry);


						}
					}

				}
			}
		}

		//page 14
		if (msg.CRxDigifinAppFormInfoList[0].AccountNumber) {
			$(".txtBankAccountNumber").val(msg.CRxDigifinAppFormInfoList[0].AccountNumber);
		}
		if (msg.CRxDigifinAppFormInfoList[0].AccountType) {
			$(".txtBankAccountType").val(msg.CRxDigifinAppFormInfoList[0].AccountType);
		}
		if (msg.CRxDigifinAppFormInfoList[0].Branch) {
			$(".txtBranchName").val(msg.CRxDigifinAppFormInfoList[0].Branch);
		}
		if (msg.CRxDigifinAppFormInfoList[0].BankName) {
			$(".txtBankName").val(msg.CRxDigifinAppFormInfoList[0].BankName);
		}
		if (msg.CRxDigifinAppFormInfoList[0].SecondHoldername) {
			$('.txtSecondHolderName').val(msg.CRxDigifinAppFormInfoList[0].SecondHoldername.toUpperCase());
		}
		//$('.txtThirdHolderName').val('indhu');
		if (msg.CRxDigifinAppFormInfoList[0].ThirdHolderName) {
			$('.txtThirdHolderName').val(msg.CRxDigifinAppFormInfoList[0].ThirdHolderName.toUpperCase());
		}
		//if (msg.CRxDigifinAppFormInfoList[0].ClientSignuture) {
		//    var ClientSignuture = msg.CRxDigifinAppFormInfoList[0].ClientSignuture;
		//    if (ClientSignuture != "data:image/jpg;base64,") {
		//        $("#sharingKycFHO9").html("<img id='theclientSign44' />");
		//        $("#theclientSign44").attr("src", ClientSignuture);
		//    }
		//}
		if (msg.CRxDigifinAppFormInfoList[0].DPID) {
			$('#bankdematDpId').val(msg.CRxDigifinAppFormInfoList[0].DPID);
		}
		if (msg.CRxDigifinAppFormInfoList[0].DematType) {
			$('.dematDpName').val(msg.CRxDigifinAppFormInfoList[0].DematType);
		}
		if (msg.CRxDigifinAppFormInfoList[0].ReferenceNumber) {
			$('#bankdematClientId').val(msg.CRxDigifinAppFormInfoList[0].ReferenceNumber);
		}
		//Document binding
		// client photo
		if (msg.CRxDigifinAppFormInfoList[0].KRAClient == 'N') {
			if (msg.CRxDigifinAppFormInfoList[0].ClientPhoto) {
				$("#ax-section-clientphoto").show();
				var PanImageBase64 = msg.CRxDigifinAppFormInfoList[0].ClientPhoto;
				$("#ax-clientphoto").attr("src", PanImageBase64);
			} else {
				$("#ax-section-clientphoto").hide();
			}
		} else {
			$("#ax-section-clientphoto").hide();
		}
		//Sign
		if (msg.CRxDigifinAppFormInfoList[0].ClientSignuture) {
			$("#ax-section-clientSign").show();
			var PanImageBase64 = msg.CRxDigifinAppFormInfoList[0].ClientSignuture;
			$("#ax-clientSign").attr("src", PanImageBase64);
			$(".ax-clientSign").attr("src", PanImageBase64);
		} else {
			$("#ax-section-clientSign").hide();
		}

		//Pan
		if (msg.CRxDigifinAppFormInfoList[0].PanImageBase64) {
			$("#ax-section-pancard").show();
			var PanImageBase64 = msg.CRxDigifinAppFormInfoList[0].PanImageBase64;
			$("#ax-pancard").attr("src", PanImageBase64);
		} else {
			$("#ax-section-pancard").hide();
		}
		if (msg.CRxDigifinAppFormInfoList[0].ClientName) {
			$('#NameOfBankAccountFirstHolders,#CDName1').html(msg.CRxDigifinAppFormInfoList[0].ClientName.toUpperCase());
			$('#ax-page6-sole1stHolder,#ax-page8-sole1stHolder').html(msg.CRxDigifinAppFormInfoList[0].ClientName.toUpperCase());
		}
		//if (msg.CRxDigifinAppFormInfoList[0].SecondHoldername) {
		//    $('#NameOfBankAccountSecondHolders,#CDName2').html(msg.CRxDigifinAppFormInfoList[0].SecondHoldername.toUpperCase());
		//    var SecHolderName = msg.CRxDigifinAppFormInfoList[0].SecondHoldername.toUpperCase();
		//    $('#ax-page6-2ndHolderBankAC').html(msg.CRxDigifinAppFormInfoList[0].SecondHoldername.toUpperCase());
		//}
		//if (msg.CRxDigifinAppFormInfoList[0].ThirdHolderName) {
		//    $('#NameOfBankAccountThirdHolders,#CDName3').html(msg.CRxDigifinAppFormInfoList[0].ThirdrHoldername.toUpperCase());
		//    var ThirdHolderName = msg.CRxDigifinAppFormInfoList[0].ThirdrHoldername.toUpperCase();
		//    $('#ax-page6-3ndHolderBankAC').html(msg.CRxDigifinAppFormInfoList[0].ThirdrHoldername.toUpperCase());
		//}
		//Name Declaration
		//if (msg.CRxDigifinAppFormInfoList[0].Threein1Status == 'Y') {
		$("#ax-section-NameDeclaration").addClass('page-setup');
		$("#ax-section-NameDeclaration").show();
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1; //January is 0!

		var yyyy = today.getFullYear();
		if (dd < 10) {
			dd = '0' + dd;
		}
		if (mm < 10) {
			mm = '0' + mm;
		}
		var today = dd + '/' + mm + '/' + yyyy;
		$("#tdNameDescDate").text(today);

		if (msg.CRxDigifinAppFormInfoList[0].ClientName) {
			var CustomerName = msg.CRxDigifinAppFormInfoList[0].ClientName.toUpperCase();
			if (CustomerName != "") {
				$("#tdNameDeclaration").text(CustomerName);
				$("#tdClientPANName").val(CustomerName);
				$("#IdPANDataBaseName").text(CustomerName);
				$("#tdClientPANName1").text(CustomerName);

			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].CorrentAddress) {
			var CorrespondenceAddress = msg.CRxDigifinAppFormInfoList[0].CorrentAddress.toUpperCase();
			if (CorrespondenceAddress != "") {
				$("#tdNameDescAddress").text(CorrespondenceAddress);
			}
		}

		if (msg.CRxDigifinAppFormInfoList[0].CCity) {
			var CCity = msg.CRxDigifinAppFormInfoList[0].CCity.toUpperCase();
			var CPinCode = msg.CRxDigifinAppFormInfoList[0].CPinCode;
			if ((CCity != "") && (CPinCode != "")) {
				var citypin = CCity + ',' + CPinCode;
				$("#tdCityPIN").text(citypin);
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].CState) {
			var CState = msg.CRxDigifinAppFormInfoList[0].CState.toUpperCase();

			if (CState != "") {
				var CCountry = "INDIA";
				var statecountry = CState + ',' + CCountry;
				$("#tdStateCountry").text(statecountry);

			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].ClientName3in1) {
			var ClientName3in1 = msg.CRxDigifinAppFormInfoList[0].ClientName3in1.toUpperCase();
			if (ClientName3in1 != "") {
				$("#IdAdharName").text(ClientName3in1);
			}
		}
		if (msg.CRxDigifinAppFormInfoList[0].ClientSignuture) {
			var ClientSignuture = msg.CRxDigifinAppFormInfoList[0].ClientSignuture;
			if (ClientSignuture != "data:image/jpg;base64,") {
				$("#NameDeclarationSign").html("<img id='theclientSign44' />");
				$("#theclientSign44").attr("src", ClientSignuture);
			}
		}
		//}
		//else {
		//    $("#ax-section-NameDeclaration").hide();
		//}
		//cheque
		if (msg.CRxDigifinAppFormInfoList[0].PersonalizedBankImage) {
			$("#ax-section-cheque").show();
			var PanImageBase64 = msg.CRxDigifinAppFormInfoList[0].PersonalizedBankImage;
			$("#ax-cheque").attr("src", PanImageBase64);
		} else {
			$("#ax-section-cheque").hide();
		}

		// Correspondence Front
		if (msg.CRxDigifinAppFormInfoList[0].CAddressImage1) {
			$("#ax-section-caddressFront").show();
			var CAddressImage1 = msg.CRxDigifinAppFormInfoList[0].CAddressImage1;
			$("#ax-caddressFront").attr("src", CAddressImage1);
		} else {
			$("#ax-section-caddressFront").hide();
		}

		// Correspondence Back
		if (msg.CRxDigifinAppFormInfoList[0].CAddressImage2) {
			$("#ax-section-caddressBack").show();
			$("#ax-section-caddressFront").addClass('page-setup');
			var CAddressImage2 = msg.CRxDigifinAppFormInfoList[0].CAddressImage2;
			$("#ax-caddressBack").attr("src", CAddressImage2);
		} else {
			$("#ax-section-caddressBack").hide();
		}

		if ((!msg.CRxDigifinAppFormInfoList[0].CAddressImage2) && (msg.CRxDigifinAppFormInfoList[0].PAddressImage1)) {
			$("#ax-section-caddressFront").addClass('page-setup');
		}
		// Permanent Front
		if (msg.CRxDigifinAppFormInfoList[0].PAddressImage1) {
			$("#ax-section-paddressFront").show();
			$("#ax-section-caddressBack").addClass('page-setup');
			var PAddressImage1 = msg.CRxDigifinAppFormInfoList[0].PAddressImage1;
			$("#ax-paddressFront").attr("src", PAddressImage1);
		} else {
			$("#ax-section-paddressFront").hide();
		}

		// Permanent Back
		if (msg.CRxDigifinAppFormInfoList[0].PAddressImage2) {
			$("#ax-section-paddressBack").show();
			$("#ax-section-paddressFront").addClass('page-setup');
			var PAddressImage2 = msg.CRxDigifinAppFormInfoList[0].PAddressImage2;
			$("#ax-paddressBack").attr("src", PAddressImage2);
		} else {
			$("#ax-section-paddressBack").hide();
		}
		//poa
		if (msg.CRxDigifinAppFormInfoList[0].POA1Base64ImageURL) {
			var filename = msg.CRxDigifinAppFormInfoList[0].POA1Base64ImageURL;
			filename = filename.replace(/~/g, "");

			var fileExtension = filename.substr((filename.lastIndexOf('.') + 1));

			if (fileExtension == "pdf") {
				$("#ax-section-POA").hide();
			} else {
				if (msg.CRxDigifinAppFormInfoList[0].POA1Base64ImageURL) {
					$("#ax-section-POA").show();

					//page setup hide
					if (msg.CRxDigifinAppFormInfoList[0].PAddressImage2) {
						$("#ax-section-paddressBack").addClass('page-setup');
					} else if ((!msg.CRxDigifinAppFormInfoList[0].PAddressImage2) && (msg.CRxDigifinAppFormInfoList[0].PAddressImage1)) {
						$("#ax-section-paddressFront").addClass('page-setup');
					} else if ((!msg.CRxDigifinAppFormInfoList[0].PAddressImage2) && (!msg.CRxDigifinAppFormInfoList[0].PAddressImage1) && (msg.CRxDigifinAppFormInfoList[0].CAddressImage2)) {
						$("#ax-section-caddressBack").addClass('page-setup');
					} else if ((!msg.CRxDigifinAppFormInfoList[0].PAddressImage2) && (!msg.CRxDigifinAppFormInfoList[0].PAddressImage1) && (!msg.CRxDigifinAppFormInfoList[0].CAddressImage2) && (msg.CRxDigifinAppFormInfoList[0].CAddressImage1)) {
						$("#ax-section-caddressFront").addClass('page-setup');
					}
					var POAImages = msg.CRxDigifinAppFormInfoList[0].POA1Base64Image;
					$("#ax-POA").attr("src", POAImages);
				}
			}

		} else {
			$("#ax-section-POA").hide();
		}
		//Terms and condition
		if (msg.CRxDigifinAppFormInfoList[0].RMSignatureBase64ImageURL) {
			var filename = msg.CRxDigifinAppFormInfoList[0].RMSignatureBase64ImageURL;
			filename = filename.replace(/~/g, "");

			var fileExtension = filename.substr((filename.lastIndexOf('.') + 1));

			if (fileExtension == "pdf") {
				$("#ax-section-TermsandCondition").hide();
			} else {

				if (msg.CRxDigifinAppFormInfoList[0].RMSignatureBase64Image) {

					var POAfileExtensions;
					if (msg.CRxDigifinAppFormInfoList[0].POA1Base64ImageURL) {
						var POAfilenam = msg.CRxDigifinAppFormInfoList[0].POA1Base64ImageURL;
						POAfilenam = POAfilenam.replace(/~/g, "");
						POAfileExtensions = POAfilenam.substr((POAfilenam.lastIndexOf('.') + 1));
					}
					//page setup hide
					if (msg.CRxDigifinAppFormInfoList[0].POA1Base64ImageURL && POAfileExtensions != "pdf") {
						$("#ax-section-POA").addClass('page-setup');
					} else if (msg.CRxDigifinAppFormInfoList[0].PAddressImage2) {
						$("#ax-section-paddressBack").addClass('page-setup');
					} else if ((!msg.CRxDigifinAppFormInfoList[0].PAddressImage2) && (msg.CRxDigifinAppFormInfoList[0].PAddressImage1)) {
						$("#ax-section-paddressFront").addClass('page-setup');
					} else if ((!msg.CRxDigifinAppFormInfoList[0].PAddressImage2) && (!msg.CRxDigifinAppFormInfoList[0].PAddressImage1) && (msg.CRxDigifinAppFormInfoList[0].CAddressImage2)) {
						$("#ax-section-caddressBack").addClass('page-setup');
					} else if ((!msg.CRxDigifinAppFormInfoList[0].PAddressImage2) && (!msg.CRxDigifinAppFormInfoList[0].PAddressImage1) && (!msg.CRxDigifinAppFormInfoList[0].CAddressImage2) && (msg.CRxDigifinAppFormInfoList[0].CAddressImage1)) {
						$("#ax-section-caddressFront").addClass('page-setup');
					}

					$("#ax-section-TermsandCondition").show();
					var TermsandConditionimages = msg.CRxDigifinAppFormInfoList[0].RMSignatureBase64Image;
					$("#ax-TermsandCondition").attr("src", TermsandConditionimages);
				}
			}

		} else {
			$("#ax-section-TermsandCondition").hide();
		}

	}
}
