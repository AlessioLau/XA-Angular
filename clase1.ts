/*
******************** TypeScript
TypeScript es un superset de JavaScript el cual añade tipos estaticos y clases
tsc -> typescript compiler

npm install -g typescript

tsc --init = Crea un proyecto de TS
tsc --target = Selecciona la version de JS a la cual se quiere compilar

*************** Angular 
Framework de TS
SPA: Single Page Application
El browser no refresca por que trae un solo html y de ahi hace modificaciones del DOM con JS

npm install -g @angular/cli
ng new: Crea proyecto de Angular
ng generate: Crea algun nuevo tipo de componente en nuestro proyecto
ng serve: Permite correr nuestro proyecto en local en desarrollo
ng build: Buildea el proyecto
ng test: Corre los test
ng add: Permite añadir diversaas funcionalidades
*/

type UserResponse ={
    id: number;
    name?: string;
    child?: UserResponse;
    optional?: string;
}

let persona : UserResponse = {
    id: 1,
    name: 'Hijo',
    optional: 'Variable opcional'
}
let personaPadre : UserResponse = {
    id: 1,
    name: 'Padre',
    child: persona
}
/*
Se puede usar tanto type como interface

interface IUserResponse{
    id: number;
    name?: string;
}
*/
let numero: number = 0;
numero = 3;

function sumar(a: number, b: number){
    return a+b;
}

function imprimir(): void{
    console.log('Que onda');
}

//ng new clase1