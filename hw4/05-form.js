let form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // Add your code here
  let Username = document.querySelector("#user");
  let Email = document.querySelector("#mailid");
  let Date = document.querySelector("#date");
  let Newsletter = document.getElementsByName("news");
  if (Username.value == "") {
    console.warn("You must enter some data to submit this form");
    return;
  }
  console.log("=========Form Submission=========");
  console.log("Username:", Username.value);
  console.log("Email:", Email.value);
  if (Newsletter[0].checked == true) {
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
