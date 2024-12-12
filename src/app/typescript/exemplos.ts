import { helloWorld } from "./hello";
import { RandomNumbers } from "./math";

function calcularArea() {
    const obj = { width: 10, height: 30};
    
    const area = obj.width * obj.height;

    return area;
}

function usuario() {
    const usuario = {
        nome: "Jean",
        idade: 30
    }
}

function calculo() {
    return Math.random() < 5;
}

function validacao() {
    const valor = Math.random() < 0.5 ? 'a' : 'b';

    if (valor !== 'a') {
        //..
    } else if (valor === 'a') {
        //..
    }
}

function exibirMensagem(pessoa: string, data: string) : void {
    console.log(`Olá ${pessoa}, hoje é ${data}`);

    console.log('Olá' + pessoa + ', hoje é' + data);
        
}

exibirMensagem('Jean', '13/11/2024');

let mensagem: string = 'hello world';

let mensagem2 = 'hello world';

let number1: number = 3.3;

let number2 = 4;

let ojt:any = {x: 0};

let isTrue: boolean = false;

function olaMundo(mensagem: string) {
    return `Olá mundo ${mensagem};`
}

function exibirCoordenadas(pt: {x: number, y: number}): string {
    return `${pt.x}${pt.y}`;
} 

exibirCoordenadas({x: 4, y: 6});

function exibirNome (obj: {nome:string, sobrenome?:string}): string {
    
    let mensagem = '';

    if (obj.sobrenome === undefined) {
        mensagem = `Seu nome é ${obj.nome}`;

    }
    else 
    {
        mensagem = `Seu nome é ${obj.nome} e o sobrenome é ${obj.sobrenome}`;
    }

    return mensagem;

}

exibirNome({nome: 'Jean'});

exibirNome({nome: 'Jean', sobrenome: 'Godoy'});

function exibirIds(id: number | string) {
    
    let mensagem = '';

    if (typeof id === 'number') {
        mensagem = 'o sei Id numérico é' + id.toString();
    }
    else {
        mensagem = id.toUpperCase();
    }
    return mensagem;
}

exibirIds(3);
exibirIds('345');

type Ponto = {
    x: number,
    y: number
}

function imprimirPonto(p: Ponto) {
    return `O seu ponto é${p.x}${p.y}`;
}

imprimirPonto({x: 3, y: 5});

function imprimirTexto(texto: string, alinhamento: 'left' | 'right' | 'center') {

}

imprimirTexto('meu texto', 'bottom');

var teste = null;
console.log(teste); //null

var teste2;
console.log(teste2); //undefined

function vivendoPerigosamente(x?: number | null) {
    console.log(x?.toFixed());
}

vivendoPerigosamente();

function fazerAlgo(lista: Array<string>) {

}

function fazerAlgo2(lista: string[]) {
    
}

fazerAlgo(new Array('hello', 'world'));

fazerAlgo2(['hello', 'world']);

class Point {
    x: number = 0;
    y: number = 0;
}

let p = new Point();
p.x = 4;
p.y = 4;

console.log(`${p.x}${p.y}`);

class BoasVindas {
    mensagem: string;

    constructor() {
        this.mensagem = 'Bem-vindo!';
    }
}

let m = new BoasVindas();

console.log(m.mensagem);

class Saudacoes {
    readonly mensagem: string;

    constructor() {
        this.mensagem = 'Muito bem-vindo!';
    }

    dizerOla() {
        console.log(this.mensagem)
    }
}

let s = new Saudacoes();

class C {
    _length = 0;

    get length(): number {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }
}

const c = new C();

c.length - 10;

console.log(c.length)

interface Pingavel {
    ping(): void
}

class Sonar implements Pingavel {
    ping():void {
        console.log('ping');
    }
}

class Ball implements Pingavel {
    ping(): void {

    }
}

let sonar = new Sonar();

sonar.ping();

class Animal {
    andar() {
        console.log("Andando por ai");
    }
}

class Cachorro extends Animal {
    latir(numeroLatidos: number) {
        for (let i = 0; i < numeroLatidos; i++) {
            console.log("au");
        }
    }
}

const d = new Cachorro();

d.andar();

d.latir();

helloWorld();

let r = new RandomNumbers();



