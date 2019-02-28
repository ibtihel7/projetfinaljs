function validateForm() {
    let a=document.getElementById("name").value
    let b=document.getElementById("street").value
    let c=document.getElementById("street-number").value
    let d=document.getElementById("city").value
    let e=document.getElementById("post-code").value
    let f=document.getElementById("country").value
    let g=document.getElementById("email").value
    let h=document.getElementById("phone").value
 
    // var a=document.forms["form-control"]["inputName"].value;
    // var b=document.forms["form-control"]["inputAddress"].value;
    // var c=document.forms["form-control"]["inputEmail4"].value;
    // var d=document.forms["form-control"]["inputPassword4"].value;
    // var d=document.forms["form-control"]["inputcomment"].value;
    if (a==="" || b===""|| c===""|| d===""|| e===""|| f===""|| g===""|| h==="")
    {
        alert("Merci de bien vouloir remplir le formulaire :) ");
        return false;
    }
}


function validateEmail(inputEmail4)
{
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

return emailPattern.test(inputEmail4);

}


function myResetFunction() {
    document.getElementById("Reset").reset();
  }


  function checkPass() {
    let pass = document.getElementById('inputPassword4').value;
    let pattern =/^(?=.*?[0-9])/;
    // let message = document.getElementById('inputPassword4');
    console.log(pass)
    let resulat = pattern.test(pass);
    console.log()
    console.log(resulat)
    if (resulat==false)
    alert ("Code érronné");
    else 
    alert("Votre demande est traitée!Nous sommes impatients de vous accueillir ")
}


function prix(){
    var a=Number(document.getElementById("voiture").value);
    document.getElementById("montant").textContent=Number(a)

}

function prixt(){
    var a=Number(document.getElementById("montant").textContent);
    var b=Number(document.getElementById("days").value)
    var t=a*b;
    document.getElementById("montantt").textContent=(t)


}



function envoi() {
    // par défaut, pas d'envoi
    // recherche de @ dans l'adresse
    // var address=window.document.formu.adr.value;
    // var pos=address.indexOf("@");
    // if (address=="") {
    //  alert("Vous devez donner une adresse e-mail.");
    // }
    // else {
    //  if (pos==-1 || pos==0 || pos==address.length-1) {
    //   alert("Une adresse e-mail a le format nom@domaine");
    //  }
    //  else // tout va bien, on envoie le formulaire
      document.formu.action='mailto:ibtihel7hamdi@gmail.com?subject="Cours JavaScript"';
}



$(document).ready(function() {
    $('#form').submit(function(e) {
    
  
  let a=document.getElementById("name").value
  let b=document.getElementById("street").value
  let c=document.getElementById("street-number").value
  let d=document.getElementById("city").value
  let e=document.getElementById("post-code").value
  let f=document.getElementById("country").value
  let g=document.getElementById("email").value
  let h=document.getElementById("phone").value
  
  // var a=document.forms["form-control"]["inputName"].value;
  // var b=document.forms["form-control"]["inputAddress"].value;
  // var c=document.forms["form-control"]["inputEmail4"].value;
  // var d=document.forms["form-control"]["inputPassword4"].value;
  // var d=document.forms["form-control"]["inputcomment"].value;
  if (a==="" || b===""|| c===""|| d===""|| e===""|| f===""|| g===""|| h==="")
  {
      alert("Merci de bien vouloir remplir le formulaire :) ");
      return false;
    } else {
      $.ajax({
        method: 'POST',
        url: '//formspree.io/ibtihel7hamdi@gmail.com',
        data: $('#form').serialize(),
        datatype: 'json'
      });
      e.preventDefault();
      $(this).get(0).reset();
      alertify.success("Message envoyé,Votre demande sera traitée dans quelques minutes");
    }
  });
  });
  