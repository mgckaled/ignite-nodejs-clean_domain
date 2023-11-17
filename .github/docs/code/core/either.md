# `src/core/either.ts`

> [voltar](../../c_code-analysis.md) para a página anterior.

## Função

Esse padrão é útil em cenários onde você deseja expressar operações que podem falhar de uma maneira mais explícita, evitando exceções e permitindo que o fluxo de controle trate tanto do caso de sucesso quanto do caso de erro de forma mais consistente. Isso é especialmente útil em arquiteturas Clean e DDD, onde a manipulação de erros é uma parte importante do design robusto de software.

Em outra palavras, implementa um padrão conhecido como "Either" e é frequentemente utilizado em linguagens que não possuem tipos de retorno aprimorados, como TypeScript ou outras linguagens fortemente tipadas. Esse padrão é útil para lidar com operações que podem resultar em um valor bem-sucedido (Right) ou em um erro (Left). Vamos examinar o código em detalhes:

## Análise

1. **`Left` e `Right` Classes:**

   ```typescript
   // Error
   export class Left<L, R> {
     readonly value: L

     constructor(value: L) {
       this.value = value
     }

     isRight(): this is Right<L, R> {
       return false
     }

     isLeft(): this is Left<L, R> {
       return true
     }
   }

   // Success
   export class Right<L, R> {
     readonly value: R

     constructor(value: R) {
       this.value = value
     }

     isRight(): this is Right<L, R> {
       return true
     }

     isLeft(): this is Left<L, R> {
       return false
     }
   }
   ```

   - `Left` representa um resultado de erro ou falha, enquanto `Right` representa um resultado bem-sucedido.
   - Ambas as classes possuem uma propriedade `value` que armazena o valor associado ao resultado.
   - Os métodos `isRight` e `isLeft` são usados para verificar se a instância é do tipo `Right` ou `Left`. Isso é útil para fazer verificações de tipo em tempo de execução.
   - A palavra-chave `readonly` é utilizada em TypeScript para indicar que uma propriedade de uma classe ou objeto só pode ser lida e não pode ser modificada após sua inicialização. Isso adiciona uma camada de imutabilidade à propriedade, garantindo que seu valor não seja alterado depois de ser definido

2. **`Either` Type:**

   ```typescript
   export type Either<L, R> = Left<L, R> | Right<L, R>
   ```

   - Define um tipo chamado `Either` que é uma união de `Left` e `Right`. Ou seja, uma instância de `Either` pode ser ou um `Left` ou um `Right`.

3. **`left` e `right` Funções de Construção:**

   ```typescript
   export const left = <L, R>(value: L): Either<L, R> => {
     return new Left(value)
   }

   export const right = <L, R>(value: R): Either<L, R> => {
     return new Right(value)
   }
   ```

   - `left`: Uma função que cria uma instância de `Left` com o valor fornecido. Retorna uma instância de `Either`.
   - `right`: Uma função que cria uma instância de `Right` com o valor fornecido. Retorna uma instância de `Either`.

OBS: Em TypeScript, `<L, R>` é uma notação usada para indicar a aplicação de parâmetros de tipo genérico a uma classe, interface, função ou tipo. Neste contexto, L e R são parâmetros de tipo genérico que representam tipos específicos, mas que são definidos quando você instancia ou utiliza a classe, função ou tipo que os contém.

> [voltar](../../c_code-analysis.md) para a página anterior.
