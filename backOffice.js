let arrayDatosLocalMostrar;

// Funcion Class Constructor

class User {
    constructor(user, password) {
        this.user = user;
        this.password = password;
    }
}

const userLogin = new User ('fede', 2712);

// Boton Login que ejecuta funciones asociadas

document.getElementById('btn-login').addEventListener('click', () => {chequeoLogin(), resetForm()})

// Funcion para resetear formulario

const resetForm = () => {
    document.getElementById('loginForm').reset();
}

// Funcion para Login

const chequeoLogin = () => {
userName = document.getElementById('userName').value;
userPassword = Number(document.getElementById('password').value);

    if ((userName == 'fede') && (userPassword == 2712)) {
        imprimirDatos();
    } else {
        alert('Usuario Incorrecto')
    }
}

// Extraccion de datos del LocalStorage para almacenar en arrayDatosLocalMostrar

const extraerDatosLocalMostrar = () => {
    if (JSON.parse(localStorage.getItem('listaUsuarios')) == null) {
        alert('No hay datos para mostrar');
    } else {
        arrayDatosLocalMostrar = JSON.parse(localStorage.getItem('listaUsuarios'));
        return arrayDatosLocalMostrar;
    }
}

// Funcion para imprimir datos en el HTML. Aunque es largo, es la forma mas segura de hacerlo para que no puedan inyectarnos codigo.

const imprimirDatos = () => {
    let indice = 0;
    extraerDatosLocalMostrar().forEach(element => {
        indice += 1;
        const tableRow = document.createElement("tr");

        const tableDataIndice = document.createElement("td");
        tableDataIndice.textContent = indice;
        tableRow.appendChild(tableDataIndice);

        const tableDataCompleteName = document.createElement("td");
        tableDataCompleteName.textContent = element.completeName;
        tableRow.appendChild(tableDataCompleteName);
        document.getElementById('table').appendChild(tableRow);

        const tableDataEmail = document.createElement("td");
        tableDataEmail.textContent = element.email;
        tableRow.appendChild(tableDataEmail);
        document.getElementById('table').appendChild(tableRow);

        const tableDataPhone = document.createElement("td");
        tableDataPhone.textContent = element.phone;
        tableRow.appendChild(tableDataPhone);
        document.getElementById('table').appendChild(tableRow);

        const tableDataWebsiteType = document.createElement("td");
        tableDataWebsiteType.textContent = element.websiteType;
        tableRow.appendChild(tableDataWebsiteType);
        document.getElementById('table').appendChild(tableRow);

        const tableDataViewportsQuantity = document.createElement("td");
        tableDataViewportsQuantity.textContent = element.viewportsQuantity;
        tableRow.appendChild(tableDataViewportsQuantity);
        document.getElementById('table').appendChild(tableRow);

        const tableDataIsEcommerce = document.createElement("td");
        tableDataIsEcommerce.textContent = element.isEcommerce;
        tableRow.appendChild(tableDataIsEcommerce);
        document.getElementById('table').appendChild(tableRow);

        const tableDataFunctionalities = document.createElement("td");
        tableDataFunctionalities.textContent = element.functionalities;
        tableRow.appendChild(tableDataFunctionalities);
        document.getElementById('table').appendChild(tableRow);

        const tableDataDesignLogo = document.createElement("td");
        tableDataDesignLogo.textContent = element.designLogo;
        tableRow.appendChild(tableDataDesignLogo);
        document.getElementById('table').appendChild(tableRow);

        const tableDataPricePesos = document.createElement("td");
        tableDataPricePesos.textContent = element.pricePesos;
        tableRow.appendChild(tableDataPricePesos);
        document.getElementById('table').appendChild(tableRow);

        const tableDataPriceDolar = document.createElement("td");
        tableDataPriceDolar.textContent = element.priceDolar;
        tableRow.appendChild(tableDataPriceDolar);
        document.getElementById('table').appendChild(tableRow);
    })
}

