# `src/core/entities/watched-list.ts`

> [voltar](../../../c_code-analysis.md) para a página anterior.

## Função

Esta classe `WatchedList` é projetada para rastrear mudanças em uma lista de itens, incluindo itens novos, removidos e itens que foram modificados. Isso pode ser útil em cenários onde é necessário monitorar alterações em uma coleção de entidades ou objetos de valor, o que é comum em arquiteturas que seguem os princípios do Clean Architecture e do Domain-Driven Design.

## Análise

1. **Propriedades da Classe:**

   ```typescript
   public currentItems: T[]
   private initial: T[]
   private new: T[]
   private removed: T[]
   ```

   - `currentItems`: Uma lista pública de itens atuais.
   - `initial`: Uma lista privada de itens iniciais (itens quando a lista foi criada).
   - `new`: Uma lista privada de itens que foram adicionados desde a criação da lista.
   - `removed`: Uma lista privada de itens que foram removidos desde a criação da lista.

2. **Construtor:**

   ```typescript
   constructor(initialItems?: T[]) {
     this.currentItems = initialItems || []
     this.initial = initialItems || []
     this.new = []
     this.removed = []
   }
   ```

   - O construtor aceita uma lista opcional de itens iniciais. Se nenhum for fornecido, as listas são inicializadas como vazias.

3. **Método Abstrato `compareItems`:**

   ```typescript
   abstract compareItems(a: T, b: T): boolean
   ```

   - Este método abstrato deve ser implementado nas classes derivadas para definir como os itens devem ser comparados para determinar igualdade.

4. **Métodos Públicos para Obter Itens:**

   ```typescript
   public getItems(): T[]
   public getNewItems(): T[]
   public getRemovedItems(): T[]
   ```

   - Métodos para obter a lista de itens atuais, novos itens adicionados e itens removidos.

5. **Métodos Privados para Verificação de Itens:**
   - Métodos como `isCurrentItem`, `isNewItem`, `isRemovedItem` são usados internamente para verificar se um item está atualmente na lista, se é novo ou se foi removido.

6. **Métodos Privados para Remoção de Itens:**
   - Métodos como `removeFromNew`, `removeFromCurrent`, `removeFromRemoved` são usados internamente para remover itens das listas correspondentes.

7. **Método `wasAddedInitially`:**

   ```typescript
   private wasAddedInitially(item: T): boolean
   ```

   - Verifica se o item foi adicionado inicialmente (quando a lista foi criada).

8. **Método `exists`:**

   ```typescript
   public exists(item: T): boolean
   ```

   - Verifica se o item existe atualmente na lista.

9. **Método `add`:**

   ```typescript
   public add(item: T): void
   ```

   - Adiciona um item à lista, considerando se o item é novo, se foi adicionado inicialmente e se já está na lista.

10. **Método `remove`:**

    ```typescript
    public remove(item: T): void
    ```

    - Remove um item da lista, considerando se o item é novo ou foi removido.

11. **Método `update`:**

    ```typescript
    public update(items: T[]): void
    ```

    - Atualiza a lista com uma nova lista de itens. Ele calcula os itens adicionados e removidos desde a última atualização e atualiza as listas correspondentes.

O `<T>` é um tipo genérico em TypeScript. Ele representa um parâmetro de tipo que é usado para tornar a classe ou método mais flexível e reutilizável. Neste contexto:

- `WatchedList<T>` é uma classe genérica, onde `T` é um tipo que será fornecido quando você instancia a classe. Isso permite que a classe trabalhe com diferentes tipos de itens sem ser especificamente vinculada a um tipo específico.

Por exemplo, se você criar uma instância da `WatchedList` como `const myList = new WatchedList<string>()`, isso significa que `T` será substituído por `string`, e você estará trabalhando com uma `WatchedList` que lida com strings.

Se você criar uma instância como `const myOtherList = new WatchedList<number>()`, então `T` será substituído por `number`, e a lista será capaz de lidar com números.

Essa flexibilidade é valiosa em situações em que você deseja criar componentes ou classes que podem funcionar com diferentes tipos de dados sem duplicar código. O TypeScript usa esses tipos genéricos para oferecer um suporte mais forte ao tipo durante o desenvolvimento, mantendo a flexibilidade e a reutilização do código.

> [voltar](../../../c_code-analysis.md) para a página anterior.
