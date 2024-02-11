function SendMail() {
  const from_name = document.getElementById("from_name").value;
  const LastName = document.getElementById("LastName").value;
  const email_id = document.getElementById("email_id").value;

  if (from_name === "" || LastName === "" || email_id === "") {
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
      document.querySelector(".success").style.display = "none";
    }, 3000);
  } else {
    var params = {
      First_Name: document.getElementById("from_name").value,
      Last_Name: document.getElementById("LastName").value,
      Email_id: document.getElementById("email_id").value,
    };
    emailjs.send("service_0ti6tap", "template_5tey5xi", params).then((res) => {
      setTimeout(() => {
        document.getElementById("from_name").value = "";
        document.getElementById("LastName").value = "";
        document.getElementById("email_id").value = "";
      }, 1000);
    });

    document.querySelector(".success").style.display = "block";
    setTimeout(() => {
      document.querySelector(".success").style.display = "none";
    }, 3000);
  }
}
