let form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // Add your code here
  let username = document.querySelector("#user");
  let mailid = document.querySelector("#mailid");
  let Date = document.querySelector("#date");
  let newsletter = document.getElementsByName("signup");
  if (username.value == "") {
    console.warn("You must enter some data to submit this form");
    return;
  }
  console.log("=========Form Submission=========");
  console.log("Username:", username.value);
  console.log("Email:", mailid.value);
  if (newsletter[0].checked == true) {
    console.log("Newsletter:", "Yes");
  } else {
    console.log("Newsletter:", "no submission");
  }
  if (Date.value == "") {
    console.log("Date:", "no submission");
  } else {
    console.log("Date:", Date.value);
  }
}
