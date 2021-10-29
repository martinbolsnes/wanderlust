const submit = document.getElementById('submitBtn');
const fullNameError = document.querySelector('.fullNameError');
const subjectError = document.querySelector('.subjectError');
const emailError = document.querySelector('.emailError');
const messageError = document.querySelector('.messageError');

const postsUrl = '';

/* async function getPosts() {
  try {
    const repsonse = await fetch(
      'http://api.martinbols.tech/wp-json/wp/v2/pages/15'
    );
    const jsonFromServer = await repsonse.json();
    const postsResults = jsonFromServer;
    console.log(postsResults);

    document.querySelector('.loading').classList.add('hide');

    document.querySelector('.contactForm__container').innerHTML = `
    ${postsResults.content.rendered}`;
  } catch {
    document.querySelector('.alert').innerHTML = showAlertTouser(
        'An error occured (Cannot load content)',
        'error'
      );
  } finally {
    setTimeout(function () {
        document.querySelector('.alert').innerHTML = '';
      }, 3000); 
  }
}

getPosts(postsUrl); */

submit.onclick = function (event) {
  event.preventDefault();

  const fullName = document.querySelector('#fullName').value.trim();
  const subject = document.querySelector('#subject').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();

  if (fullName.length > 5) {
    fullNameError.classList.add('hide');
    fullNameError.classList.remove('show');
  } else {
    fullNameError.classList.add('show');
    fullNameError.classList.remove('hide');
  }

  if (subject.length >= 15) {
    subjectError.classList.add('hide');
    subjectError.classList.remove('show');
  } else {
    subjectError.classList.add('show');
    subjectError.classList.remove('hide');
  }

  if (validateEmail(email)) {
    emailError.classList.add('hide');
    emailError.classList.remove('show');
  } else {
    emailError.classList.add('show');
    emailError.classList.remove('hide');
  }

  if (message.length > 25) {
    messageError.classList.add('hide');
    messageError.classList.remove('show');
  } else {
    messageError.classList.add('show');
    messageError.classList.remove('hide');
  }
};

function validateEmail(emailAddress) {
  const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const isEmailValid = emailExpression.test(emailAddress);
  return isEmailValid;
}

/* const contactForm = document.querySelector('.wpcf7-form');

contactForm.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const url = form.action;

  try {
    const formData = new FormData(form);
    const responseData = await postFormDataAsJson({ url, formData });
    console.log({ responseData });
  } catch (error) {
    console.error(error);
  }
}

async function postFormDataAsJson({ url, formData }) {
  const plainFormData = object.fromEntries(formData.entries());
  const formDataJsonString = JSON.stringify(plainFormData);
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: formDataJsonString,
  };

  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  return response.json();
} */
