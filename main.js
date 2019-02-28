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
    var a=Number(document.getElementById("personne").value);
    var b=Number(document.getElementById("days").value)
    var p=100
    var preduit=80
    var t=a*b*p;
    var tr=a*b*preduit
    if (a >5 )
    document.getElementById("montant").textContent=(tr)
    else 
    document.getElementById("montant").textContent=(t)
}

// function prix(){
//     var a=Number(document.getElementById("personne").value);
//     document.getElementById("montant").value=Number(a)

// }

function prixt(){
    var a=Number(document.getElementById("montant").value);
    var b=Number(document.getElementById("days").value)
    var t=a*b;
    document.getElementById("montantt").value=(t)
}

function submitt(){
         document.getElementById("formm").submit();
return true
 }


 setTimeout(() => {
    document.getElementById('audio').autoplay();
  }, 10)



// function majDateFin()
// {
//     var dateDeb = new Date(str2dt(document.getElementById('dd').value));
//     var dateFin = new Date(dateDeb);
 
//     dateFin.setDate(dateDeb.getDate()+30); // 30 jours
//     document.getElementById('da').value = dt2dtstr(dateFin);
 
// }
 
 
 

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
   
                                                                                                                                                                                        // function dt2dtstr (dt_datetime) {
                                                                                                                                                                                        // var FormatedDate=""
                                                                                                                                                                                        
                                                                                                                                                                                        // FormatedDate+=(dt_datetime.getDate().toString().length==1)?"0"+dt_datetime.getDate().toString():dt_datetime.getDate().toString();
                                                                                                                                                                                        // FormatedDate+="/";
                                                                                                                                                                                        //     FormatedDate+=((dt_datetime.getMonth()+1).toString().length==1)?"0"+(dt_datetime.getMonth()+1).toString():(dt_datetime.getMonth()+1).toString();
                                                                                                                                                                                        //     FormatedDate+="/";
                                                                                                                                                                                        //     FormatedDate+="20"+dt_datetime.getFullYear().toString().substring(dt_datetime.getFullYear().toString().length-2,dt_datetime.getFullYear()).toString()
                                                                                                                                                                                        //     return FormatedDate;
                                                                                                                                                                                        // }
                                                                                                                                                                                        
                                                                                                                                                                                        
                                                                                                                                                                                        // function str2dt (str_datetime) {
                                                                                                                                                                                        // var re_date = /^(\d+)\/(\d+)\/(\d+)$/;
                                                                                                                                                                                        // if (!re_date.exec(str_datetime))
                                                                                                                                                                                        //     return '';
                                                                                                                                                                                        // return (new Date (RegExp.$3, RegExp.$2-1, RegExp.$1, RegExp.$4, RegExp.$5, RegExp.$6));
                                                                                                                                                                                        // }
                                                                                                                                                                                        




                                                                                                                                                                                        // function dateDiff(dateold, datenew)
                                                                                                                                                                                        // {
                                                                                                                                                                                        // var ynew = datenew.getFullYear();
                                                                                                                                                                                        // var mnew = datenew.getMonth();
                                                                                                                                                                                        // var dnew = datenew.getDate();
                                                                                                                                                                                        // var yold = dateold.getFullYear();
                                                                                                                                                                                        // var mold = dateold.getMonth();
                                                                                                                                                                                        // var dold = dateold.getDate();
                                                                                                                                                                                        // var diff = datenew - dateold;
                                                                                                                                                                                        // if(mold > mnew) diff--;
                                                                                                                                                                                        // else
                                                                                                                                                                                        // {
                                                                                                                                                                                        //     if(mold == mnew)
                                                                                                                                                                                        //     {
                                                                                                                                                                                        //     if(dold > dnew) diff--;
                                                                                                                                                                                        //     }
                                                                                                                                                                                        // }
                                                                                                                                                                                        // return diff;
                                                                                                                                                                                        // }

                                                                                                                                                                                        // function dayDiff(d1, d2)
                                                                                                                                                                                        // {
                                                                                                                                                                                        // d1 = d1.getTime() / 86400000;
                                                                                                                                                                                        // d2 = d2.getTime() / 86400000;
                                                                                                                                                                                        // return new Number(d2 - d1).toFixed(0);
                                                                                                                                                                                        // }