const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
let arrayDolar = [];
let arrayDolarBlue;
let nuevoArray = [];
let valorCompraDolar;
let precioImprimir;

// Factory function

class Usuarios {
    constructor ({
        completeName,
        email,
        phone,
        websiteType,
        viewportsQuantity,
        isEcommerce,
        functionalities,
        designLogo,
        pricePesos,
        priceDolar}) {
        this.completeName = completeName;
        this.email = email;
        this.phone = phone;
        this.websiteType = websiteType;
        this.viewportsQuantity = viewportsQuantity;
        this.isEcommerce = isEcommerce;
        this.functionalities = functionalities;
        this.designLogo = designLogo;
        this.pricePesos = pricePesos;
        this.priceDolar = priceDolar;
    }
}

// API Dolar con FETCH: Aca voy a tomar el precio del dolar blue. Primero consumo la API, la mando al local storage (por un tema que no pude resolver) y luego la vuelvo a llamar con getItem para al final del proceso tener el valor del dolar blue compra. La funcion que llama a la API va a ejecutarse automaticamente cuando se le de refresh a la pagina. 

const dolarLocalStorage = () => {
fetch(url)
.then(response => response.json())
.then(data => {
    if (localStorage.getItem("arrayDolar") == null) {
        let arrayDolar = [];
        arrayDolar.push(data);
        localStorage.setItem("arrayDolar", JSON.stringify(arrayDolar));
    } else {
        arrayDolar = JSON.parse(localStorage.getItem("arrayDolar"));
        arrayDolar = [];
        arrayDolar.push(data);
        localStorage.setItem("arrayDolar", JSON.stringify(arrayDolar));;
    }
})
}

//Ejecuto esta funcion cuando carga la pagina porque si la ejecuto cuando el usuario clickea Calculate Price, el tiempo en que el codigo ejecuta todas las funciones es menor al tiempo en que se consume la API del dolar y guarda la informacion en localStorage para luego ser utilizada. 

dolarLocalStorage()

const dolarBlue = () => {
    arrayDolar = JSON.parse(localStorage.getItem("arrayDolar"));
    arrayDolarBlue = arrayDolar[0][1];
    for (i in arrayDolarBlue);
    nuevoArray.push(arrayDolarBlue[i].compra);
    let valorCompraDolar = parseInt(nuevoArray[0]);
    return valorCompraDolar;
}

// Funcion extraerInformacion() que extrae los .value de los inputs y calcula el precio de la website en base a los checked. Ademas asigno el return de la funcion dolarBlue() a la variable valorComprarDolar para luego dividir el pricePesos sobre valorCompraDolar y tener el precio en dolares. 

const extraerInformacion = () => {
    valorCompraDolar = dolarBlue();
    websiteType = "";
    let websiteTypeLandingPage = document.getElementById("landing-page");
    let websiteTypeHomepage = document.getElementById("homepage");
    let websiteTypeNotSure = document.getElementById("not-sure");
    let websiteTypePrice;
    if (websiteTypeLandingPage.checked) {
        websiteType = websiteTypeLandingPage.value;
        websiteTypePrice = 40000;
    } else if (websiteTypeHomepage.checked) {
        websiteType = websiteTypeHomepage.value;
        websiteTypePrice = 40000;
    } else if (websiteTypeNotSure.checked) {
        websiteType = websiteTypeNotSure.value;
        websiteTypePrice = 40000;
    }

    viewportsQuantity = "";
    let viewportsQuantity1to3 = document.getElementById("1-3");
    let viewportsQuantity4to6 = document.getElementById("4-6");
    let viewportsQuantity7to9 = document.getElementById("7-9");
    let viewportsQuantity10 = document.getElementById("+10");
    let viewportsQuantityPrice;
    if (viewportsQuantity1to3.checked) {
        viewportsQuantity = viewportsQuantity1to3.value;
        viewportsQuantityPrice = 0;
    } else if (viewportsQuantity4to6.checked) {
        viewportsQuantity = viewportsQuantity4to6.value;
        viewportsQuantityPrice = 15000;
    } else if (viewportsQuantity7to9.checked) {
        viewportsQuantity = viewportsQuantity7to9.value;
        viewportsQuantityPrice = 30000;
    } else if (viewportsQuantity10.checked) {
        viewportsQuantity = viewportsQuantity10.value;
        viewportsQuantityPrice = 45000;
    }

    isEcommerce = "";
    let isEcommerceYes = document.getElementById("yes-ecommerce");
    let isEcommerceNo = document.getElementById("no-ecommerce");
    let isEcommercePrice;
    if (isEcommerceYes.checked) {
        isEcommerce = isEcommerceYes.value;
        isEcommercePrice = 10000;
    } else{
        isEcommerce = isEcommerceNo.value;
        isEcommercePrice = 0;
    }

    functionalities = "";
    let functionalitiesYes = document.getElementById("yes-functionalities");
    let functionalitiesNo = document.getElementById("no-functionalities");
    let functionalitiesPrice;
    if (functionalitiesYes.checked) {
        functionalities = functionalitiesYes.value;
        functionalitiesPrice = 5000;
    } else {
        functionalities = functionalitiesNo.value;
        functionalitiesPrice = 0;
    }

    designLogo = "";
    let designLogoYes = document.getElementById("yes-logo");
    let designLogoNo = document.getElementById("no-logo");
    let designLogoPrice;
    if (designLogoYes.checked) {
        designLogo = designLogoYes.value;
        designLogoPrice = 10000;
    } else {
        designLogo = designLogoNo.value;
        designLogoPrice = 0;
    }

    pricePesos = websiteTypePrice + viewportsQuantityPrice + isEcommercePrice + functionalitiesPrice + designLogoPrice;
    return websiteType, viewportsQuantity, isEcommerce, functionalities, designLogo, pricePesos, valorCompraDolar;
}

// Funcion nuevoUsuarioIndentacion() para indentar nuevo usuario

const nuevoUsuarioIndentacion = () => {
    extraerInformacion();
    priceDolar = Math.round((pricePesos/valorCompraDolar));
    const nuevoUsuario = new Usuarios ({
        completeName: document.getElementById("name-quoting").value,
        email: document.getElementById("email-quoting").value,
        phone: document.getElementById("phone-quoting").value,
        websiteType,
        viewportsQuantity,
        isEcommerce,
        functionalities,
        designLogo,
        pricePesos,
        priceDolar
    })
    alert(`El precio de su pagina web es $${pricePesos} ARS y $${priceDolar} USD`)
    return nuevoUsuario;
}

// Chequeo si local storage para ver donde colocar el nuevo usuario indentado

const verificacionLocalStorage = () => {
    let nuevoUsuario = nuevoUsuarioIndentacion();
    if (localStorage.getItem("listaUsuarios") == null) {
    let arrayUsuarios = [];
    arrayUsuarios.push(nuevoUsuario);
    localStorage.setItem("listaUsuarios", JSON.stringify(arrayUsuarios));
    } else {
    arrayUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
    arrayUsuarios.push(nuevoUsuario);
    localStorage.setItem("listaUsuarios", JSON.stringify(arrayUsuarios));;
    }
}

// Funcion para hacer reset al form

const resetForm = () => {
    document.getElementById("quoting-form").reset();
}

// Evento para boton calculate price

$("#calculate").on("click", () => {verificacionLocalStorage(), resetForm(), hideQuoting()});

// Dark Mode con JQuery

const darkMode = () => {
    $("body").css("background-color", "black");
    $("h1").css("color", "white");
    $("h2").css("color", "white");
    $("label").css("color", "white");
    $("input").css("color", "white");
    $("theme").css("color", "white");
    localStorage.setItem("theme", "dark");
}

const lightMode = () => {
    $("body").css("background-color", "white");
    $("h1").css("color", "black");
    $("h2").css("color", "black");
    $("label").css("color", "black");
    $("input").css("color", "black");
    $("theme").css("color", "black");
    localStorage.setItem("theme", "ligth");
}

$("#btn-theme").on("click", () => {
    if (localStorage.getItem("theme") === "dark") {
        lightMode();
    } else {
        darkMode();
    }
})

// Animaciones concatenadas con JQuery

$("#btn-theme").click (() => {
    $("#btn-theme").fadeOut();
    $("#btn-theme").slideDown();
});