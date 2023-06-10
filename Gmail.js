function SendMail(){
    var params={  
         from_name :document.getElementById("from_name").value,
         last_name :document.getElementById("LastName").value,
            email_id : document.getElementById("email_id").value

        }
        emailjs.send("service_nnd7pvf","template_5tey5xi",params).then(
            res =>{

                document.getElementById("from_name").value="";
                document.getElementById("LastName").value="";
                document.getElementById("email_id").value="";

                alert("Success!");
            
        }
        )
};