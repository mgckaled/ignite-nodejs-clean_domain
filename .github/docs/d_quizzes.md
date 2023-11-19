# Quizzes

## Quiz - DDD no Node.js

1. O que é Domain-Driven Design (DDD)? **Resposta:** Uma abordagem de design de software que enfatiza a colaboração entre especialistas do domínio e desenvolvedores para criar um modelo de domínio rico e bem estruturado.

2. Quais são os princípios fundamentais do Domain-Driven Design (DDD)? **Resposta:** Entities, Value Objects, Aggregates e Bounded Contexts.

3. Qual é o objetivo principal do Clean Architecture? **Resposta:** Separar o código em camadas com responsabilidades bem definidas, facilitando a manutenção, testabilidade e escalabilidade; e permitindo que a lógica de negócio seja independente de frameworks e detalhes técnicos.

4. Dentre as opções, qual é a principal vantagem de aplicar a Clean Architecture em um projeto de software? **Resposta:** Melhorar a testabilidade do código, facilitando a criação de testes automatizados e garantindo a qualidade e escalabilidade do software.

5. Qual a importância da "linguagem ubíqua" dentro do contexto do DDD? **Resposta:** Facilita a comunicação entre todos os envolvidos no desenvolvimento, garantindo que todos entendam os conceitos de domínio da mesma forma.

6. O que são "Domain Experts" no contexto do DDD? **Resposta:** Profissionais que possuem profundo conhecimento sobre o domínio do problema a ser resolvido pelo software.

7. No desenvolvimento de software com DDD, como podemos representar os relacionamentos entre entidades? **Resposta:** Por meio de IDs relacionados entre as entidades, mesmo que a estrutura do banco de dados seja diferente.

8. Por que é importante evitar a simplificação excessiva do código e o uso indiscriminado do princípio "Don't Repeat Yourself" (DRY) em projetos DDD? **Resposta:** A simplificação excessiva do código pode tornar o sistema mais difícil de ser compreendido e mantido.

9. Qual é a importância dos repositórios em uma aplicação desenvolvida com DDD (Domain-Driven Design)? **Resposta:** Os repositórios permitem a comunicação entre a camada de domínio e as camadas externas, como a camada de persistência.

10. O que é um "Value Object" em um projeto desenvolvido com DDD? **Resposta:** É uma propriedade da entidade que possui regras próprias, como formatação e validação.

11. Qual é a principal função dos accessors (getters e setters) em uma classe de entidade? **Resposta:** Os accessors servem como portas de entrada e saída da entidade, possibilitando validações e manipulações dos dados.

12. Por que é recomendado criar setters (métodos para modificar propriedades) apenas quando necessário em uma classe de entidade? **Resposta:** Para proteger as propriedades da classe e evitar alterações indesejadas.

13. Por que é importante padronizar a forma de trabalhar com erros na aplicação? **Resposta:** Para permitir que o erro seja capturado e tratado de forma adequada em diferentes partes da aplicação.

14. Qual é o conceito de "Functional Error Handling" e como ele é aplicado na programação orientada a objetos? **Resposta:** "Functional Error Handling" é um método que utiliza funções para especificar se uma operação resultou em erro ou sucesso, sendo representado por “tuplas”.

15. Qual é a diferença entre left e right na implementação de "Functional Error Handling"? **Resposta:** left e right são funções que indicam o tipo de resposta, sendo left associado a erros e right a operações bem-sucedidas.

16. Como é possível identificar, por meio do TypeScript, se um resultado é um sucesso ou um erro ao utilizar o "Functional Error Handling"? **Resposta:** É possível identificar um resultado de sucesso através do método `isRight` ou `isLeft` presente na classe `Either`.

17. O que é um "Aggregate Root" dentro do contexto do DDD (Domain-Driven Design)? **Resposta:** É uma entidade principal que agrupa outras entidades relacionadas e é tratada como uma unidade durante operações de criação, atualização e remoção.

18. O que é uma "Watched List" (Lista Observada) no contexto do DDD e qual é o propósito de sua utilização em uma aplicação? **Resposta:** A "Watched List" é uma lista que permite adicionar ou remover itens sem a necessidade de manipular informações específicas de cada item. O propósito de utilizá-la é facilitar a manipulação de informações de listas durante operações de edição, identificando quais itens foram adicionados, editados ou removidos, de forma a otimizar as operações de atualização no banco de dados.

19. Suponha que temos uma WatchedList de números criada com os itens 1, 2, e 3. Se utilizarmos o método `update([1, 3, 5])`, quais são os itens removidos e os itens adicionados? **Resposta:** Removidos: 2; Adicionados: 5.

20. Qual é a principal vantagem de separar os subdomínios em uma aplicação, mesmo que ela seja um monólito? **Resposta:** Permite a implantação independente de cada subdomínio.

21. Por que é importante ter uma estrutura de comunicação entre os subdomínios, mesmo em um monólito? **Resposta:** Para garantir a independência dos subdomínios

22. O que são os "subscribers" no contexto de Domain Events? **Resposta:** Assinantes que reagem a eventos de domínio específicos.
