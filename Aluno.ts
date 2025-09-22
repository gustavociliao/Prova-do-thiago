class Aluno {
  nome: string;
  notas: number[];

  constructor(nome: string, totalBimestres: number = 4) {
    // Valida nome
    if (typeof nome !== "string" || nome.trim() === "") {
      throw new Error("Erro: O nome do aluno deve ser uma string não vazia.");
    }
    if (nome.length > 50) {
      throw new Error("Erro: O nome não pode ter mais de 50 caracteres.");
    }

    this.nome = nome.trim();
    this.notas = Array(totalBimestres).fill(0); // inicializa notas com 0
  }

  atribuirNota(bimestre: number, nota: number): boolean {
    // Valida bimestre
    if (
      !Number.isInteger(bimestre) ||
      bimestre < 1 ||
      bimestre > this.notas.length
    ) {
      console.log("Erro: O bimestre deve ser um número inteiro válido.");
      return false;
    }

    // Valida nota
    if (typeof nota !== "number" || nota < 0 || nota > 10) {
      console.log("Erro: A nota deve ser um número entre 0 e 10.");
      return false;
    }
    
     if (this.notas[bimestre - 1] === 10) {
    console.log("Não foi possível atribuir nota a esse semestre. A nota máxima já foi atingida.");
    return false;
    }

    // Atribui a nota
    this.notas[bimestre - 1] = nota;
    return true;
  }

  consultarNota(bimestre: number): string {
    if (
      !Number.isInteger(bimestre) ||
      bimestre < 1 ||
      bimestre > this.notas.length
    ) {
      return "Erro: O bimestre deve ser um número inteiro válido.";
    }

    return `Nota do ${bimestre}º bimestre: ${this.notas[bimestre - 1]}`;
  }

  calcularMedia(): number {
    const soma = this.notas.reduce((acc, n) => acc + n, 0);
    return soma / this.notas.length;
  }

  verificarSituacao(): string {
    const media = this.calcularMedia();
    return media >= 6
      ? `Média: ${media.toFixed(2)} → Aprovado ✅`
      : `Média: ${media.toFixed(2)} → Reprovado ❌`;
  }
}

export default Aluno;
