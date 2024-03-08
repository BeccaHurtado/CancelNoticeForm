// function openForm() {
//     document.getElementById("cancel-form").style.display = "block"
// }

// function closeForm() {
//     document.getElementById("cancel-form").style.display = "none"
// }

function getCancelNoticePDF() { 
    let date = document.getElementById('dateInput').value;
    let policyNumber = document.getElementById('policyNumberInput').value;
    let firstName = document.getElementById('firstNameInput').value;
    let middleName = document.getElementById('middleNameInput').value;
    let lastName = document.getElementById('lastNameInput').value;
    let streetAddress = document.getElementById('streetInput').value;
    let city = document.getElementById('cityInput').value;
    let state = document.getElementById('stateInput').value;
    let zip = document.getElementById('zipInput').value;

    let element = document.createElement('div');
    //let element = document.querySelector('.form-output');
    element.innerHTML =
    
    '<div class="container text-left pt-4">' +
        '<div class="row">' +

            '<div class="pb-5 col-md-6">' + date + '</div>' +
            '<div class="pb-5 col-md-6 fw-bold text-end">Policy Number: #' + policyNumber + '</div>' +
            '<div class="col-md-12 fw-bold text-capitalize">Estrella Insurance 215</div>' +
            '<div class="col-md-12 fw-bold text-capitalize">20 S Power Rd Suite 104</div>' +
            '<div class="col-md-12 fw-bold text-capitalize">Mesa, AZ 85206</div>' +
            '<div class="pt-5 pb-2 col-md-12 fw-bold fs-4">Cancel Request</div>' +
            '<div class="col-md-12 fw-bold pt-3">' + firstName + ' ' + middleName + ' ' + lastName + '</div>' +
            '<div>' + streetAddress + '</div>' +
            '<div>' + city + ', ' + state + ' ' + zip + '</div>' +  
            
            '<div class="pt-3 pb-5">This letter is to inform you that I wish to cancel my insurance policy effective (' + date + '). I no longer need coverage. Please return any preimum to the following address:</div>' +

            '<div>' + firstName + ' ' + lastName + '</div>' +
            '<div>' + date + '</div>' +

        '</div>' +
    '</div>'


            
    
    ;

    html2pdf().from(element).save(lastName + '.pdf');
}

document.getElementById('generatepdf').addEventListener('click', getCancelNoticePDF)

