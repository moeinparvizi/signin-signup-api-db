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
const emailin = document.querySelector(".emailin");
const passin = document.querySelector(".passin");
const btnup = document.querySelector(".signupbtn");
const btnin = document.querySelector(".signinbtn");
const userreg = /^[a-z0-9_-]{3,15}$/;
const emailreg = /[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+/;
const passreg =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
const url = new URL(
  "https://6533a095d80bd20280f6a3bd.mockapi.io/moeinparvizi/users",
);
let flagvalue,
  flagvaluein,
  flagreg,
  flagfind = 0;

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
const addToApi = () => {
  const newUser = {
    user: userup.value,
    email: emailup.value,
    password: passup.value,
  };

  fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    // Send your data in the request body as JSON
    body: JSON.stringify(newUser),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((task) => {
      sweetAlert2(`dear ${task.user}, now you can signup`);
      userup.value = "";
      emailup.value = "";
      passup.value = "";
      signInBtn.click();
    })
    .catch((error) => {
      sweetAlert2(`server is down . error : ${error.message}`);
    });
};

const UpRegChecker = () => {
  flagreg = 0;
  if (!userreg.test(userup.value)) {
    sweetAlert2("your username is not valid");
  } else {
    flagreg++;
  }
  // !passreg.test(passup.value)
  if (!passreg.test(passup.value)) {
    sweetAlert2("your password is not valid");
  } else {
    flagreg++;
  }
  if (!emailreg.test(emailup.value)) {
    sweetAlert2("your email is not valid");
  } else {
    flagreg++;
  }
  if (flagreg == 3) {
    addToApi();
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

const findUserOk = () => {
  console.log("user is find");
};
const findUserApi = () => {
  fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((tasks) => {
      flagfind = 0;
      for (let i in tasks) {
        if (
          emailin.value == tasks[i].email &&
          passin.value == tasks[i].password
        ) {
          findUserOk();
          break;
        } else {
          flagfind++;
        }
      }
      if (flagfind == tasks.length) {
        sweetAlert2("user not find");
      }
    })
    .catch((error) => {
      sweetAlert2(`server is down, ${error.message}`);
    });
};
const valueInChecker = () => {
  flagvaluein = 0;
  if (passin.value == null || passin.value == "") {
    fillAllInput();
  } else {
    flagvaluein++;
  }
  if (emailin.value == null || emailin.value == "") {
    fillAllInput();
  } else {
    flagvaluein++;
  }
  if (flagvaluein == 2) {
    findUserApi();
  }
};

btnin.addEventListener("click", (e) => {
  valueInChecker();
});
