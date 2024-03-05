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
            '<div class="pt-5 col-md-12">' + date + '</div>' +
            '<div class="pt-2 col-md-12">Policy Number: ' + policyNumber + '</div>' +
            '<div class="pt-5 col-md-12">' + firstName + ' ' + middleName + ' ' + lastName + '</div>' +

            '<div class="pt-3 pb-5">This letter is to inform you that I wish to cancel my insurance policy effective (' + date + '). I no longer need coverage. Please return any preimum to the following address:</div>' +
            '<div>' + streetAddress + '</div>' +
            '<div>' + city + ', ' + state + ' ' + zip + '</div>' +

            
            '<div class="pt-5 border-bottom border-dark col-md-6" >' + firstName + ' ' + middleName + ' ' + lastName + '</div>' +
            '<div class="col-md-1"></div>' +
            '<div class="pt-5 col-md-5 border-bottom border-dark">' + date +'</div>' +
        '</div>' +
    '</div>'
    
    ;

    html2pdf().from(element).save(lastName + '.pdf');
}

document.getElementById('generatepdf').addEventListener('click', getCancelNoticePDF)

