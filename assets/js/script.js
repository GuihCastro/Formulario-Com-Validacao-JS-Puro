const formFields = document.querySelectorAll('.form-field');

formFields.forEach(function(item) {
    item.addEventListener('input', () => {
        const isFilled = item.value !== '';
    
        if (isFilled) { 
            item.classList.remove('red-border');
            item.classList.add('green-border');
        } else {
            item.classList.remove('green-border');
        }
    })
});

const form = document.getElementById('main-form');

form.addEventListener('submit', function (event) {
  let valid = true;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const telephone = document.getElementById('telephone')
  const message = document.getElementById('message');

  if (!name.value) {
    document.getElementById('name-error').style.display = 'block';
    name.classList.add('red-border');
    valid = false;
  } else {
    document.getElementById('name-error').style.display = 'none';
    name.classList.remove('red-border');
  }

  if (!email.value) {
    document.getElementById('email-error').style.display = 'block';
    email.classList.add('red-border');
    valid = false;
  } else {
    document.getElementById('email-error').style.display = 'none';
    email.classList.remove('red-border');
  }

  if (!telephone.value) {
    document.getElementById('telephone-error').style.display = 'block';
    telephone.classList.add('red-border');
    valid = false;
  } else {
    document.getElementById('telephone-error').style.display = 'none';
    telephone.classList.remove('red-border');
  }

  if (!message.value) {
    document.getElementById('message-error').style.display = 'block';
    message.classList.add('red-border');
    valid = false;
  } else {
    document.getElementById('message-error').style.display = 'none';
    message.classList.remove('red-border');
  }

  if (!valid) {
    event.preventDefault();
  }
});
