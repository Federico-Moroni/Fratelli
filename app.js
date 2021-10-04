function extraerInformacion () {
    completeName = document.getElementById("name-quoting").value;
    email = document.getElementById("email-quoting").value;
    phone = document.getElementById("phone-quoting").value;

    websiteType = "";

    let websiteTypeLandingPage = document.getElementById("landing-page");
    let websiteTypeHomepage = document.getElementById("homepage");
    let websiteTypeNotSure = document.getElementById("not-sure");

    if (websiteTypeLandingPage.checked) {
        websiteType = websiteTypeLandingPage.value;
    } else if (websiteTypeHomepage.checked) {
        websiteType = websiteTypeHomepage.value;
    } else if (websiteTypeNotSure.checked) {
        websiteType = websiteTypeNotSure.value;
    }

    viewportsQuantity = "";

    let viewportsQuantity1to3 = document.getElementById("1-3");
    let viewportsQuantity4to6 = document.getElementById("4-6");
    let viewportsQuantity7to9 = document.getElementById("7-9");
    let viewportsQuantity10 = document.getElementById("+10");

    if (viewportsQuantity1to3.checked) {
        viewportsQuantity = viewportsQuantity1to3.value;
    } else if (viewportsQuantity4to6.checked) {
        viewportsQuantity = viewportsQuantity4to6.value;
    } else if (viewportsQuantity7to9.checked) {
        viewportsQuantity = viewportsQuantity7to9.value;
    } else if (viewportsQuantity10.checked) {
        viewportsQuantity = viewportsQuantity10.value;
    }

    isEcommerce = "";

    let isEcommerceYes = document.getElementById("yes-ecommerce");
    let isEcommerceNo = document.getElementById("no-ecommerce");

    if (isEcommerceYes.checked) {
        isEcommerce = isEcommerceYes.value;
    } else{
        isEcommerce = isEcommerceNo.value;
    }

    functionalities = "";

    let functionalitiesYes = document.getElementById("yes-functionalities");
    let functionalitiesNo = document.getElementById("no-functionalities");

    if (functionalitiesYes.checked) {
        functionalities = functionalitiesYes.value;
    } else {
        functionalities = functionalitiesNo.value;
    }

    designLogo = "";

    let designLogoYes = document.getElementById("yes-logo");
    let designLogoNo = document.getElementById("no-logo");

    if (designLogoYes.checked) {
        designLogo = designLogoYes.value;
    } else {
        designLogo = designLogoNo.value;
    }

let mensaje = (`${completeName}, ${email}, ${phone}, ${websiteType}, ${viewportsQuantity}, ${isEcommerce}, ${functionalities}, ${designLogo}`);
console.log(mensaje);
}

 class Usuarios {
     constructor (completeName1, email1, phone1, websiteType1, viewportsQuantity1, isEcommerce1, functionalities1, designLogo1) {
         this.nameUsuarios = completeName1;
         this.emailUsuarios = email1;
         this.phoneUsuarios = phone1;
         this.websiteTypeUsuarios = websiteType1;
         this.viewportsQuantityUsuarios = viewportsQuantity1;
         this.isEcommerceUsuarios = isEcommerce1;
         this.functionalitiesUsuarios = functionalities1;
         this.designLogoUsuarios = designLogo1;
     }
 }

const usuario0 = new Usuarios ("Federico Moroni", "fede.moroni1993@gmail.com", 3516331598, "Homepage", 7, "yes", "no", "no");
const usuario1 = new Usuarios ("Andres Garcia", "andres.garcia@gmail.com", 3516331598, "Homepage", 7, "yes", "no", "no");
const usuario2 = new Usuarios ("Nicolas Ardu", "ardunico@gmail.com", 3516331598, "Homepage", 7, "yes", "no", "no");

 let array = [usuario0];
 console.log(array);

 array.push(usuario1);
 console.log(array);

 array.push(usuario2);
 console.log(array);