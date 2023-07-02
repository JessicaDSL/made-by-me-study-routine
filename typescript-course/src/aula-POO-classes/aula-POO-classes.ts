export class Empresa {
  public readonly nome: string;//saber se poide ser acessado  dentro e fora da classe-readonly diz se pode alterar
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;
  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj
  }
} // classe são moldes para criar objetos

const empresa1 = new Empresa('Facebook', '11.111.111/0001-11');


export class Colaborador {}
