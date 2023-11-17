<!-- markdownlint-disable MD024 -->

# Análise do Código

> [voltar](../../README.md) para a página anterior

**Sumário:**

- [Análise do Código](#análise-do-código)
  - [`src/core/`](#srccore)
    - [`entities/`](#entities)
    - [`errors/`](#errors)
    - [`events/`](#events)
    - [`types/`](#types)
  - [`src/domain/`](#srcdomain)
    - [`forum/`](#forum)
      - [`application/use-cases/`](#applicationuse-cases)
      - [`enterprise/`](#enterprise)
    - [`notification/`](#notification)
      - [`application/`](#application)
      - [`enterprise/`](#enterprise-1)

## `src/core/`

- [`either.ts`](./code/core/either.md)

### `entities/`

- [`aggregate-root.ts`](./code/core/entities/aggregate-root.md)
- [`entity.ts`](./code/core/entities/entity.md)
- [`unique-entity-id.ts`](./code/core/entities/unique-entity-id.md)
- [`watched-list.ts`](./code/core/entities/watched-list.md)

### `errors/`

- [`errors`](./code/core/errors/errors.md)

### `events/`

- [`events`](./code/core/events/events.md)

### `types/`

- [`optional.ts`](./code/core/types/optional.md)

## `src/domain/`

### `forum/`

#### `application/use-cases/`

- [`answer-question.ts`](./code/domain/use-cases/answer-question.md)
- [`choose-question-best-answer.ts`](./code/domain/use-cases/choose-question-best-answer.md)
- [`comment-on-answer.ts`](./code/domain/use-cases/comment-on-answer.md)
- [`comment-on-question.ts`](./code/domain/use-cases/comment-on-question.md)
- [`create-question.ts`](./code/domain/use-cases/create-question.md)
- [`delete-answer-comment.ts`](./code/domain/use-cases/delete-answer-comment.md)
- [`delete-answer.ts`](./code/domain/use-cases/delete-answer.md)
- [`delete-question-comment.ts`](./code/domain/use-cases/delete-question-comment.md)
- [`delete-question.ts`](./code/domain/use-cases/delete-question.md)
- [`edit-answer.ts`](./code/domain/use-cases/edit-answer.md)
- [`edit-question.ts`](./code/domain/use-cases/edit-question.md)
- [`fetch-answer-comments.ts`](./code/domain/use-cases/fetch-answer-comments.md)
- [`fetch-question-answers.ts`](./code/domain/use-cases/fetch-question-answers.md)
- [`fetch-question-comments.ts`](./code/domain/use-cases/fetch-question-comments.md)
- [`fetch-recent-questions.ts`](./code/domain/use-cases/fetch-recent-questions.md)
- [`get-question-by-slug.ts`](./code/domain/use-cases/get-question-by-slug.md)

#### `enterprise/`

### `notification/`

#### `application/`

#### `enterprise/`

> [voltar](../../README.md) para a página anterior
