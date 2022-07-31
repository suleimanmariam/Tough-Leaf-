let firstName;
let lastName;
let password = "";
let rePassword;
let emailAddress;
let companyType;
let companyName;
let businessType;
let certificationType;
let state;
let city;
let checkPassword = false
let tabOneButton = document.getElementById("button-tab-one");
let tabTwoButton = document.getElementById("button-tab-two");


const addError = (target,id) => {
  if (!target) {
    document.getElementById(id).style.display = 'block'
  } else {
    document.getElementById(id).style.display = 'none'
  }
};
const addPassError = (id, passOne, passTwo) => {
    if(passOne !=  passTwo) {
        document.getElementById(id).style.display = 'block'
        checkPassword = false
    }else {
        document.getElementById(id).style.display = 'none'
        checkPassword = true
    }
}
const getInputValue = (id) => {

  let targetInput = document.getElementById(id);
  switch (id) {
    case "first-name":
      firstName = targetInput.value;
      addError(firstName,id+'-error')
      break;
    case "last-name":
      lastName = targetInput.value;
      addError(lastName,id+'-error')
      break;
    case "email-address":
      emailAddress = targetInput.value;
      addError(emailAddress,id+'-error')
      break;
    case "password":
      password = targetInput.value;
      addError(password,id+'-error')
      break;
      case "re-password":
        rePassword = targetInput.value;
        addPassError(id+'-error', rePassword, password)
        break;
    case "company-type":
      companyType = targetInput.value;
      addError(companyType,id+'-error')
      break;
    case "company-name":
      companyName = targetInput.value;
      addError(companyName,id+'-error')
      break;
    case "business-type":
      businessType = targetInput.value;
      addError(businessType,id+'-error')
      break;
    case "certification-type":
      certificationType = targetInput.value;
      addError(certificationType,id+'-error')
      break;
    case "state":
      state = targetInput.value;
      addError(state,id+'-error')
      break;
    case "city":
      city = targetInput.value;
      addError(city,id+'-error')
      break;
  }

  if (firstName && lastName && emailAddress && password && checkPassword) {
    tabOneButton.disabled = false;
  } else {
    tabOneButton.disabled = true;
  }
  if (
    companyType &&
    companyName &&
    businessType &&
    certificationType &&
    state &&
    city
  ) {
    tabTwoButton.disabled = false;
  } else {
    tabTwoButton.disabled = true;
  }
};
const displayNexTab = (hideId, showId, activeStepper, deactiveStepper) => {
  document.getElementById(hideId).style.display = "none";
  document.getElementById(showId).style.display = "block";
  document.getElementById(activeStepper).classList.add("active");
  document.getElementById(deactiveStepper).classList.remove("active");
};

