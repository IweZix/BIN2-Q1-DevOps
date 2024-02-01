# Types de tests

1. Unitaires
Le principe est d'écrire des tests sur des petites morceaux de code afin de vérifier que chaque partie individuelle d'un programme fonctionne correctement. On l'utilise pour tester une fonction ou une méthode.

2. Intégration 
L'objectif principal des tests d'intégration est de s'assurer que les composants du logiciel fonctionnent correctement ensemble en formant un système cohérent.

3. Fonctionnels
L'objectif est de vérifier que l'application répond correctement aux spécifications fonctionnelles.

# TDD

1. Fonctionnement et philosophie
Le fonctionnement du TDD est répétitif. Il consiste à écrire un tests pour une function/méthode à créer, push & commit ; écrire la méthode/function, push & commit ; refactor, push et commit.
Derrière cette méthode de travail, on comprend que c'est une méthode simple pour écrire le plus simplement possible notre méthode/function. Ne pas se complexifier les choses et allez au plus simple pour que le test passe.

2. Jest & Jest Coverage
```bash
npm install --save-dev jest
```

Export la function à tester (ici se trouve dans `sum.js` dans `src`)
```js
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

Créer un fichier `__test__/sum.test.js`
```js
const { test, expect } = require('@jest/globals');
const sum = require('./src/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

Completer le script dans le ``package.json``
```json
"scripts": {
	...
    "test": "jest",
    "test:coverage": "jest --coverage",
    ...
},
```

3. Vitest
```bash
npm install -D vitest
```

Export la function à tester (ici se trouve dans `sum.js` dans `src`)
```js
export function sum(a, b) {
  return a + b
}
```

Créer un fichier `__test__/sum.test.js`
```js
import { expect, test } from 'vitest'
import { sum } from './src/sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
```

Completer le script dans le ``package.json``
```json
"scripts": {
	...
    "test": "vitest",
    ...
},
```

