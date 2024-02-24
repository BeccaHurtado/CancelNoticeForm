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

    '<h1 class="text-center"> Cancel Request </h1>';

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