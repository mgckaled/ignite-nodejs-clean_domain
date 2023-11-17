# `src/core/errors/`

> [voltar](../../../c_code-analysis.md) para a página anterior.

## Função

Esses códigos são úteis em uma arquitetura limpa (Clean Architecture) porque permitem que a lógica de negócios do aplicativo gere erros específicos que são alinhados com o domínio do problema. A interface `UseCaseError` serve como um contrato para garantir que todos os erros relacionados a casos de uso tenham uma propriedade `message`. Isso facilita a padronização e o tratamento consistente de erros em diferentes partes do sistema.

Quando um caso de uso encontra uma condição de erro, ele pode lançar um desses erros específicos, permitindo que a camada superior (geralmente na camada de aplicação ou na interface do usuário) capture esses erros de forma mais granular e forneça feedback ou lida com eles de maneira apropriada para o usuário final.

## Análise

1. **NotAllowedError:**

   ```typescript
   import { UseCaseError } from '@/core/errors/use-case-error'

   export class NotAllowedError extends Error implements UseCaseError {
     constructor() {
       super('Not allowed')
     }
   }
   ```

   - `NotAllowedError` é uma classe que estende a classe `Error` e implementa a interface `UseCaseError`.
   - `UseCaseError` é provavelmente uma interface que define a estrutura básica de um erro que pode ocorrer em casos de uso.
   - O construtor da classe chama o construtor da classe pai (`super('Not allowed')`) para definir a mensagem de erro como "Not allowed".
   - Essa classe é usada para representar um erro específico relacionado a uma operação não permitida.

2. **ResourceNotFoundError:**

   ```typescript
   import { UseCaseError } from '@/core/errors/use-case-error'

   export class ResourceNotFoundError extends Error implements UseCaseError {
     constructor() {
       super('Resource not found')
     }
   }
   ```

   - `ResourceNotFoundError` é semelhante à `NotAllowedError`, mas representa um erro específico relacionado à não localização de um recurso.
   - Assim como `NotAllowedError`, ele estende a classe `Error` e implementa a interface `UseCaseError`.
   - O construtor define a mensagem de erro como "Resource not found".

3. **UseCaseError Interface:**

   ```typescript
   export interface UseCaseError {
     message: string
   }
   ```

   - `UseCaseError` é uma interface que define a estrutura esperada para os erros relacionados a casos de uso.
   - A interface tem uma propriedade `message` que representa a mensagem associada ao erro.

> [voltar](../../../c_code-analysis.md) para a página anterior.
