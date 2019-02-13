# Self organizing list

| Deadline   |
|------------|
| 20.02.2017 09:00 |

Your task is to implement [Self organizing list](https://en.wikipedia.org/wiki/Self-organizing_list) data structure.
Please read about Move to Front Method.

1. Fork [this](https://github.com/humanamburu/bsu-self-organizing-list) repo
2. Install [nodejs](https://nodejs.org/en/) (>= v6.2.0)
3. open bash in this folder
4. `npm install`
2. Implement class methods (fille `src/self-organized-list.js`, tests `test/self-organized-list.spec.js`)
3. Commit your changes
4. Push changes to github
5. Submit your task to [RS School Padawans](https://epa.ms/padawans-bsu)

### Methods
```javascript
const sol = new SelfOrganizedList()
```
```javascript
sol.insert(data)
```
Inserts data to the list;
```javascript
sol.size()
```

Returns list length;

```javascript
sol.at(index)
```

Returns data of the n-th element in the list;
```javascript
sol.findNode(data)
```

Returns first founded Node that has provided data;

```javascript
sol.toArray()
```

Returns array representation of the list;

```javascript
sol.removeAt(index)
```

Remove n-th node from the list;

```javascript
sol.moveToFront(node)
```

Moves node to the top of the list;

```javascript
sol.reorganize(data)
```

Tries to find node with the data and move to front if data exist in the list; returns `true` if exist and `false` if not;

### Example

```javascript
const sol = new SelfOrganizedList();

sol.insert('Game of gnomes');
sol.insert('Superficial');
sol.insert('Breaking good');

sol.size(); // 3
sol.at(1); // Superficial
sol.toArray(); // ['Game of gnomes', 'Superficial', 'Breaking good']
sol.reorganize('Breaking good'); // true, and reorganize list to 'Breaking good' -> 'Game of gnomes' -> 'Superficial'
sol.reorganize('Breaking bad'); // false, list the same

```

# FAQ
1. [How to fork github repo](https://help.github.com/articles/fork-a-repo/)
2. [How to commit and push changes](https://help.github.com/articles/adding-a-file-to-a-repository-using-the-command-line/)

### Run tests
```sh
npm test
```

### Run in browser
```sh
npm start
```

open http://localhost:8080 and hack in the browser console!

---

© [humanamburu](https://github.com/humanamburu)
