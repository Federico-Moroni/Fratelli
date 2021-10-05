//Declaracion de array para guardar los objetos que voy a ir creando.

let arrayUsuariosFinal = [];
let arrayUsuarios = [];
let listaUsuarios = [];

//Funcion para resetear el formulario al darle click.

function resetForm() {
    document.getElementById("quoting-form").reset();
}

document.getElementById("calculate").onclick = resetForm;

//Para que al darle CALCULATE PRICE se ejecute la funcion extraerInformacion.

document.getElementById("calculate").onclick = extraerInformacion;

//Funcion para extraer todas las respuestas del form, generar un nuevo objeto y enviarlo al array.

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

// Indentacion de un nuevo objeto.

const nuevoUsuario = new Usuarios (completeName, email, phone, websiteType, viewportsQuantity, isEcommerce, functionalities, designLogo);

// Condicional que evita que se sobrescriba el array de usuarios.

if (localStorage.getItem("listaUsuarios") == null) {
    arrayUsuarios.push(nuevoUsuario);
    localStorage.setItem("listaUsuarios", JSON.stringify(arrayUsuarios));
} else {
listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
listaUsuarios.push(nuevoUsuario);
localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));;
}

arrayUsuariosFinal = JSON.parse(localStorage.getItem("listaUsuarios"));

arrayUsuariosFinal.sort((a,b) => {
    if (a.completeName < b.completeName) {
        return -1
    }
    if (a.completeName > b.completeName) {
        return 1
    }
    return 0
})

console.log(arrayUsuariosFinal);

resetForm();
}

// Generador de usuarios.

class Usuarios {
    constructor (completeName, email, phone, websiteType, viewportsQuantity, isEcommerce, functionalities, designLogo) {
        this.completeName = completeName;
        this.email = email;
        this.phone = phone;
        this.websiteType = websiteType;
        this.viewportsQuantity = viewportsQuantity;
        this.isEcommerce = isEcommerce;
        this.functionalities = functionalities;
        this.designLogo = designLogo;
    }
}




