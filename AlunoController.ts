import Aluno from "./Aluno";
import * as readlineSync from "readline-sync";

class AlunoController {
  private aluno: Aluno;

  constructor(aluno: Aluno) {
    this.aluno = aluno;
  }

  iniciar(): void {
    let sair = false;

    while (!sair) {
      console.log("\n--- MENU ---");
      console.log("1 - Atribuir nota");
      console.log("2 - Consultar nota de um bimestre");
      console.log("3 - Consultar situação atual");
      console.log("0 - Sair");

      const opcao = readlineSync.questionInt("Escolha uma opcao: ");

      switch (opcao) {
        case 1:
         case 1:
  const bimestreStr = readlineSync.question("Digite o bimestre (1 a 4): ");
  const notaStr = readlineSync.question("Digite a nota (0 a 10): ");

  const bimestre = Number(bimestreStr);
  const nota = Number(notaStr);

  if (isNaN(bimestre) || isNaN(nota)) {
    console.log("Erro: Bimestre e nota devem ser números válidos.");
    break;
  }

  const sucesso = this.aluno.atribuirNota(bimestre, nota);
  if (sucesso) {
    console.log("Nota atribuída com sucesso!");
  }
  break;

        case 2:
          const bimestreConsulta = readlineSync.questionInt(
            "Digite o bimestre (1 a 4): "
          );
          console.log(this.aluno.consultarNota(bimestreConsulta));
          break;
31
        case 3:
          console.log(this.aluno.verificarSituacao());
          break;

        case 0:
          sair = true;
          console.log("Saindo...");
          break;

        default:
          console.log("Opcao invalida!");
          break;
      }
    }
  }
}

export default AlunoController;
