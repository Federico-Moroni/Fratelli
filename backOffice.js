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

// Funcion para imprimir datos en el HTML

const imprimirDatos = () => {
    let indice = 0;
    extraerDatosLocalMostrar().forEach(element => {
        indice += 1;

        document.getElementById('table').innerHTML += `
        <tr>
            <td>${indice}</td>
            <td>${element.completeName}</td>
            <td>${element.email}</td>
            <td>${element.phone}</td>
            <td>${element.websiteType}</td>
            <td>${element.viewportsQuantity}</td>
            <td>${element.isEcommerce}</td>
            <td>${element.functionalities}</td>
            <td>${element.designLogo}</td>
            <td>${element.pricePesos}</td>
            <td>${element.priceDolar}</td>
        </tr>
        `
    })
}
