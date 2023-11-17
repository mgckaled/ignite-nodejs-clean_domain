# `src/core/types/optional.ts`

> [voltar](../../../c_code-analysis.md) para a página anterior.

## Função

O código que você forneceu define um tipo genérico chamado `Optional`, que permite tornar opcional uma ou mais propriedades em um tipo.

Esse tipo `Optional` é útil quando você precisa criar versões de tipos existentes com algumas propriedades sendo opcionais, como em situações em que você deseja flexibilidade na forma como os dados são estruturados ou quando precisa manipular parcialmente um tipo em um contexto específico.

## Análise

```typescript
/**
 * Make some property optional on type
 *
 * @example
 * ```typescript
 * type Post {
 *  id: string;
 *  name: string;
 *  email: string;
 * }
 *
 * Optional<Post, 'id' | 'email'>
 * ```
 **/

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
```

- **Comentário**: O comentário no topo do código fornece um exemplo de como utilizar o tipo `Optional` e explica o propósito do tipo.

- **Tipo `Optional`**: Este é um tipo genérico que aceita dois parâmetros:
  - `T`: O tipo original do qual queremos fazer propriedades opcionais.
  - `K extends keyof T`: Um tipo de string que representa as chaves (propriedades) que serão tornadas opcionais.

- **Implementação do Tipo `Optional`**:

  ```typescript
  = Pick<Partial<T>, K> & Omit<T, K>
  ```

  - `Pick<Partial<T>, K>`: Cria um novo tipo que contém apenas as propriedades de `T` que estão em `K` e as torna opcionais usando `Partial`. `Pick` é uma utilidade TypeScript que extrai um subconjunto de propriedades de um tipo.
  - `&`: Combina os dois tipos usando a interseção, resultando em um tipo que possui as propriedades tornadas opcionais e todas as outras propriedades do tipo original `T`.
  - `Omit<T, K>`: Remove as propriedades em `K` do tipo `T`. `Omit` é uma utilidade TypeScript que cria um tipo excluindo as propriedades especificadas.

- **Exemplo de Uso**:

  ```typescript
  type Post = {
    id: string;
    name: string;
    email: string;
  };

  type OptionalPost = Optional<Post, 'id' | 'email'>;
  ```

  - Neste exemplo, `OptionalPost` será equivalente a:

    ```typescript
    type OptionalPost = {
      name?: string;
    };
    ```

    A propriedade `id` e `email` foram tornadas opcionais, enquanto a propriedade `name` permanece obrigatória.

> [voltar](../../../c_code-analysis.md) para a página anterior.
