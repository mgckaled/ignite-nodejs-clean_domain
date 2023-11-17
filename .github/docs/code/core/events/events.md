# `src/core/events`

> [voltar](../../../c_code-analysis.md) para a página anterior.

## Função

O código fornece uma maneira de centralizar e coordenar o despacho de eventos de domínio em um sistema que segue os princípios do Clean Architecture e DDD. Isso é útil para garantir a consistência e a reatividade do sistema quando ocorrem alterações de estado significativas nos agregados.

## Análise

### `/domain-events.ts`

1. **Importações:**

   ```typescript
   import { AggregateRoot } from '../entities/aggregate-root'
   import { UniqueEntityID } from '../entities/unique-entity-id'
   import { DomainEvent } from './domain-event'
   ```

   - Importa as classes necessárias para trabalhar com agregados (`AggregateRoot`), identificadores únicos (`UniqueEntityID`), e eventos de domínio (`DomainEvent`).

2. **Tipo `DomainEventCallback`:**

   ```typescript
   type DomainEventCallback = (event: any) => void
   ```

   - Define um tipo que representa uma função de retorno de chamada para eventos de domínio.

3. **Classe `DomainEvents`:**

   ```typescript
   export class DomainEvents {
     // ... (veremos cada parte a seguir)
   }
   ```

4. **Propriedades Estáticas:**

   ```typescript
   private static handlersMap: Record<string, DomainEventCallback[]> = {}
   private static markedAggregates: AggregateRoot<any>[] = []
   ```

   - `handlersMap`: Um mapa que associa nomes de classes de eventos de domínio a uma lista de manipuladores registrados para esses eventos.
   - `markedAggregates`: Uma lista de agregados marcados para despacho de eventos.

5. **Método Estático `markAggregateForDispatch`:**

   ```typescript
   public static markAggregateForDispatch(aggregate: AggregateRoot<any>) {
     // ...
   }
   ```

   - Marca um agregado para despacho de eventos se ainda não estiver marcado.

6. **Métodos Estáticos Privados:**
   - `dispatchAggregateEvents`: Despacha eventos associados a um agregado marcado.
   - `removeAggregateFromMarkedDispatchList`: Remove um agregado da lista de agregados marcados para despacho.
   - `findMarkedAggregateByID`: Encontra um agregado marcado com um ID específico.

7. **Método Estático `dispatchEventsForAggregate`:**

   ```typescript
   public static dispatchEventsForAggregate(id: UniqueEntityID) {
     // ...
   }
   ```

   - Despacha eventos para um agregado específico, limpa os eventos do agregado e remove o agregado da lista de marcados.

8. **Método Estático `register`:**

   ```typescript
   public static register(
     callback: DomainEventCallback,
     eventClassName: string,
   ) {
     // ...
   }
   ```

   - Registra um manipulador de eventos para uma classe de evento de domínio específica.

9. **Método Estático `clearHandlers` e `clearMarkedAggregates`:**
   - `clearHandlers`: Limpa todos os manipuladores de eventos registrados.
   - `clearMarkedAggregates`: Limpa a lista de agregados marcados para despacho.

10. **Método Estático Privado `dispatch`:**

    ```typescript
    private static dispatch(event: DomainEvent) {
      // ...
    }
    ```

    - Despacha um evento de domínio para todos os manipuladores registrados para esse tipo de evento.

### `/domain-event.ts`

```typescript
import { UniqueEntityID } from '../entities/unique-entity-id'

export interface DomainEvent {
  ocurredAt: Date
  getAggregateId(): UniqueEntityID
}
```

Este arquivo exporta uma interface chamada `DomainEvent`, que é implementada pelos eventos de domínio no sistema. Aqui estão as principais características:

- `ocurredAt`: Uma propriedade que representa o momento em que o evento ocorreu, utilizando o tipo `Date`.
- `getAggregateId()`: Um método que retorna o `UniqueEntityID` associado ao evento. Isso é crucial para identificar qual agregado está relacionado a esse evento.

Essa interface define um contrato que os eventos de domínio devem seguir. Cada evento de domínio no sistema precisa ter uma data associada e fornecer o `UniqueEntityID` do agregado envolvido.

### `/event-handler.ts`

```typescript
export interface EventHandler {
  setupSubscriptions(): void
}
```

Este arquivo exporta uma interface chamada `EventHandler`, que é provavelmente destinada a ser implementada por classes que lidam com a manipulação de eventos de domínio. Aqui está o principal ponto:

- `setupSubscriptions()`: Um método que deve ser implementado para configurar as assinaturas/subscrições aos eventos de domínio. Isso sugere que as classes que implementam esta interface são responsáveis por se inscrever em determinados tipos de eventos e fornecer lógica para lidar com esses eventos quando ocorrem.

> [voltar](../../../c_code-analysis.md) para a página anterior.
