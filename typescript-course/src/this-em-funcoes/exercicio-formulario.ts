export function funcao(this: Date, nome: string, age: number): void {
  console.log(this);
  console.log(nome, age);
}

funcao.call(new Date(), 'Luiz', 30) //call coloca o primeiro argumento como o this
funcao.apply(new Date(), ['Luiz', 30]) //appley passa um array com todos os argumentos da função
