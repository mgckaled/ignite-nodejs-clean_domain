# Notas Importantes

[voltar](../../README.md) para a página anterior

## Sumário

- [Notas Importantes](#notas-importantes)
  - [Sumário](#sumário)
  - [O que é DDD?](#o-que-é-ddd)

## O que é DDD?

Design de Software se refere à criação intencional e organizada de sistemas de software, com o objetivo de satisfazer necessidades específicas dos usuários, cumprir requisitos de qualidade e de performance, e garantir a manutenibilidade do código.

Já o DDD (Domain Driven Design) é uma abordagem de design de software que se concentra na modelagem do domínio da aplicação, visando representar as regras e conceitos de negócios do mundo real.

A principal diferença é que o Design de Software se concentra na arquitetura geral do sistema, enquanto o DDD enfatiza a modelagem do domínio.

**ChatGPT 3.5:**

DDD se refere a "Domain-Driven Design" (Design Orientado a Domínio). O Domain-Driven Design é uma abordagem de design de software que se concentra na modelagem e na compreensão profunda do domínio de um problema específico. O termo foi cunhado por Eric Evans em seu livro "Domain-Driven Design: Tackling Complexity in the Heart of Software".

Neste contexto, "domínio" refere-se à área de conhecimento ou atividade para a qual um sistema de software está sendo desenvolvido. O DDD visa alinhar o desenvolvimento de software com as complexidades inerentes ao domínio, promovendo uma linguagem ubíqua compartilhada entre os desenvolvedores e os especialistas do domínio.

Algumas práticas e conceitos associados ao DDD incluem:

1. **Entidades e Agregados:** Modelar objetos no sistema como entidades, que têm identidade e ciclo de vida próprios. Agregados são grupos de entidades que são tratadas como uma unidade.

2. **Value Objects:** Objetos que descrevem algumas características ou atributos, mas não têm uma identidade distinta.

3. **Repositórios:** Interfaces para acessar e persistir entidades. Eles encapsulam o acesso aos dados.

4. **Serviços de Domínio:** Componentes que realizam operações específicas no domínio e não pertencem a nenhuma entidade ou valor.

5. **Bounded Contexts:** Limites explícitos dentro dos quais um modelo é definido e aplicado. Diferentes contextos podem ter diferentes modelos para os mesmos conceitos.

6. **Eventos de Domínio:** Representação de eventos significativos que ocorrem no domínio e que podem desencadear reações no sistema.

O DDD é frequentemente associado ao desenvolvimento de sistemas complexos nos quais a compreensão do domínio é crucial para o sucesso do projeto. Ele promove a colaboração estreita entre desenvolvedores e especialistas do domínio, ajudando a criar um modelo de software que reflete com precisão as nuances e complexidades do problema a ser resolvido.

[retornar](#notas-importantes) para o topo da página

[voltar](../../README.md) para a página anterior
