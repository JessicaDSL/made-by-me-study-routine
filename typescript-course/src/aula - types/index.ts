
//tipos básicos
let nome: string = 'Luiz';
let idade: number = 30;
let adulto: boolean = true;
let symbol: symbol = Symbol('qualquer-simbolo');
//let big: bigint = 10n;

//arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b']

//Objeto ?-deixa opcional
let pessoa: {
  idade: 30,
  nome: 'Jessy'
}


// Funções
function soma(x: number, y: number) {
  return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y

//utilize any apenas em último caso
function showMessage(msg:any) {
  return msg
}

//void - significa que a função ou metodo não retorna nada
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa2 = {
  nome: 'Luiz',
  sobrenome: 'Otavio',

  exibirNome(): void {
    console.log(this.nome);
  },
}

pessoa2.exibirNome()
export { pessoa };

////Object
const objetoA = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
}

const objetoB: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
}

objetoA.chaveA = 'Outro valor';
objetoB.chaveC = 'Nova chave';
objetoB.chaveD = 'oi';
objetoB.chaveE = 'oi;'

// Array<T> - T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase())
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaString('a', 'b', 'c')
const upper = toUpperCase('a', 'b', 'c')

//tipo tuple - array com tipos e tamanhos beme especificos

const dadosClientes1: [number, string] = [1, 'luiz']
const dadosClientes2: [number, string, ...string[]] = [1, 'Jessy', 'oi', 'tudo bem']
const dadosClientes3: readonly [number, string] = [1, 'luiz'] // impossivel de alterar

dadosClientes1[0] = 100;
dadosClientes1[1] = 'Carlos'

const array: readonly string[] = ['Luiz']
const array2: ReadonlyArray<string> = ['Jessy']

//never - função retorna loop ou um erro
//Enum - quando a gente quer 'enumerar' alguma coisa

enum Cores {
  VERMELHO, //0
  AZUL, //1
  AMARELO //2
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}
//ele une as duas 'cores'
console.log(Cores.AMARELO);
console.log(Cores[0]);

//unknown é um 'any mais seguro' ele vai permitir que vc use desde que voce cheque

//union types = a: number | string | boolean

let podeMudar = 10;
podeMudar = 11;

const naoPodeELiteral = 10;
//naoPodeELiteral = 11; tipo literal, pois n pode ser mudado
let a = 100 as const //eu quero que a seja 100 sempre como constante

const pessoa3 = {
  nome: 'Jessy' as const, //as const é uma asserção
  sobrenome: 'Lima'
}

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}

console.log(escolhaCor('Amarelo'));

//alias - um apelido

type Idade = number;
type Pessoa2 = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string
}
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferidaA = CorCMYK | CorRGB;

const pessoa4: Pessoa2 = {
  idade: 30,
  nome: 'Oi',
  salario: 200_000 //200000
}

export function setCorPreferida(pessoa: Pessoa2, cor: CorPreferidaA): Pessoa2 {
  return { ...pessoa, corPreferida: cor}
}

console.log(setCorPreferida(pessoa4, 'Azul'));


//& interseção entre dois conjuntos

type TemNome = { nome: string };
type TemIdade = { idade: number };
type Pessoa3 = TemNome & TemIdade //combinação dos dois tipos de cima

const pessoa5: Pessoa3 = {
  nome: 'Luiz',
  idade: 35
}

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersecao = AB & AC //A

//funções como tipo

type MapStringsCallback = (item: string) => string;

function mapStrings(array: string[], callbackfn: MapStringsCallback) : string[] {
  const newArray: string[] = [];

  for(let i = 0; i < array.length; i++) {
    const item = array[i]
    newArray.push(callbackfn(item));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, function(item) {
  return item.toUpperCase();
})

console.log(abc);
console.log(abcMapped);

//Estructural Type - tipagem estruturada
//sempre que eu pedir um tipo igual essa função, ela precisa de um user que é do tipo User, mas o tipo User, não quer dizer que tenha que ser esfecificamente o tipo user, quer dizer que eu preciso de um objeto que cumpra as regras que esse tipo tem, e no caso esse tio só tem duas regras, um username com tipo string e password com tipo string

type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string, password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
}

const bdUser = { username: 'joao', password: '123456' };
const sentUser = { username: 'joao', password: '123456', permissions: '' };
const loggedIn = verifyUser(bdUser, sentUser)
console.log(loggedIn);

/*Recomendado*/

//Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

//Type assertion - quando vc tem certeza do tipo
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

//HTMLElement
const input1 = document.querySelector('input') as HTMLInputElement;
input1.value = ''

/*Não recomendado*/

//Non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

//Type assertion
const body4 = (document.querySelector('body') as unknown) as number

