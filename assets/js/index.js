function getCancelNoticePDF() {
    let date = document.getElementById('dateInput').value;
    let policyNumber = document.getElementById('policyNumberInput').value;
    let firstName = document.getElementById('firstNameInput').value;
    let middleName = document.getElementById('middleNameInput').value;
    let lastName = document.getElementById('lastNameInput').value;
    let streetAddress = document.getElementById('streetInput').vlaue;
    let city = document.getElementById('cityInput').value;
    let state = document.getElementById('stateInput').value;
    let zip = document.getElementById('zipInput').value;

    let element = document.createElement('div');
    element.innerHTML =

    '<div class="container pt-4"><h1 class="text-center"> Cancel Request</h1>' +
    '<div text-left>' + date + '</div>' +
    '<div>' + policyNumber + '</div>' +
    '<div>' + policyNumber + '</div>' +
    '<div>' + firstName + middleName + lastName + '</div>' +
    '<div><p>I no longer need coverage. Please return any premium to the following address.</div>' +
    '<div>' + streetAddress + '</div>' +
    '<div>' + city + ', ' + state + zip + '</div>' +
    '<div>' + firstName + middleName + lastName + ' _____________________</div>' +
    '</div>'
    
    ;

    html2pdf().from(element).save('cancel_notice.pdf');
}

document.getElementById('generatepdf').addEventListener('click', getCancelNoticePDF)

// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (() => {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     const forms = document.querySelectorAll('.needs-validation')
  
//     // Loop over them and prevent submission
//     Array.from(forms).forEach(form => {
//       form.addEventListener('submit', event => {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }
  
//         form.classList.add('was-validated')
//       }, false)
//     })
//   })()