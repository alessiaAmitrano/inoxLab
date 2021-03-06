$('#contactForm').validator().on('submit', function(event) {
  if (event.isDefaultPrevented()) {
    console.log('handle the invalid form...')
    formError();
    submitMSG(false, 'Did you fill in the form properly?');
  } else {
    console.log('everything looks good!')
    event.preventDefault();
    submitForm();
  }
});


function submitForm() {
  // Initiate Variables With Form Content
  var name = $('#name').val();
  var email = $('#email').val();
  var phone = $('#phone').val();
  var message = $('#message').val();

  console.log(
      'form', {name: name, email: email, phone: phone, message: message});
  $.ajax({
    type: 'POST',
    url: 'form-process.php',
    data: 'name=' + name + '&email=' + email + '&phone=' + phone +
        '&message=' + message,
    success: function(text) {
      if (text == 'success') {
        formSuccess();
      } else {
        formError(text);
        submitMSG(false, text);
      }
    }
  });
}

function formSuccess() {
  $('#contactForm')[0].reset();
  submitMSG(true, 'Message Submitted!')
}

function formError(text) {
  console.log(text);
}

function submitMSG(valid, msg) {
  if (valid) {
    var msgClasses = 'h3 text-center tada animated text-success';
  } else {
    var msgClasses = 'h3 text-center text-danger';
  }
  $('#msgSubmit').removeClass().addClass(msgClasses).text(msg);
}
