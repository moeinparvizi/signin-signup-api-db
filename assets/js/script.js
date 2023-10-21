const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

// add user
const emailup = document.querySelector(".emailup");
const userup = document.querySelector(".userup");
const passup = document.querySelector(".passup");
const btnup = document.querySelector(".signupbtn");
const userreg = /^[a-z0-9_-]{3,15}$/;
const emailreg = /[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+/;
const passreg =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
let flagvalue,
  flagreg = 0;

const sweetAlert2 = (text) => {
  Swal.fire({
    title: text,
    background: "transparent",
    icon: "error",
    confirmButtonText: "try again",
    timer: "30000",
    backdrop: "rgba(0,0,0,.7)",
    color: "#eee",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};
const allToApi = () => {
  console.log("everything is ok");
};

const UpRegChecker = () => {
  flagreg = 0;
  if (!userreg.test(userup.value)) {
    sweetAlert2("your username is not valid");
  } else {
    console.log("hello username");
    flagreg++;
  }
  // !passreg.test(passup.value)
  if (!passreg.test(passup.value)) {
    sweetAlert2("your password is not valid");
  } else {
    console.log("hello password");
    flagreg++;
  }
  if (!emailreg.test(emailup.value)) {
    console.log(email.value);
    sweetAlert2("your email is not valid");
  } else {
    console.log("hello email");
    flagreg++;
  }
  if (flagreg == 3) {
    allToApi();
  }
};
const fillAllInput = () => {
  sweetAlert2("fill all input");
};
const valueUpChecker = () => {
  flagvalue = 0;
  if (emailup.value == null || emailup.value == "") {
    fillAllInput();
  } else {
    flagvalue++;
  }
  if (passup.value == null || passup.value == "") {
    fillAllInput();
  } else {
    flagvalue++;
  }
  if (userup.value == null || userup.value == "") {
    fillAllInput();
  } else {
    flagvalue++;
  }
  if (flagvalue == 3) {
    UpRegChecker();
  }
};

btnup.addEventListener("click", () => {
  valueUpChecker();
});
