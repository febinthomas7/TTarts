



function SendMail() {
    const from_name = document.getElementById("from_name").value;
    const LastName = document.getElementById("LastName");
    const email_id = document.getElementById("email_id");



    if (from_name === "" || LastName === "" || email_id === "") {

        document.querySelector(".alert").style.display = "block";
        


  //   remove the alert
     setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
    document.querySelector(".success").style.display = "none";

  }, 3000);
    }
    else {


        document.querySelector(".success").style.display = "block";
        setTimeout(() => {
            document.querySelector(".success").style.display = "none";
        
          }, 3000);
        var params = {
            from_name: document.getElementById("from_name").value,
            last_name: document.getElementById("LastName").value,
            email_id: document.getElementById("email_id").value

        }
        emailjs.send("service_0ti6tap", "template_5tey5xi", params).then(
            res => {

                document.getElementById("from_name").value = "";
                document.getElementById("LastName").value = "";
                document.getElementById("email_id").value = "";

                alert("Success!");

            }
        )
        console.log("done")
    }

}


