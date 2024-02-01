
1. Créer un projet NodeJS
```bash
npm init
npm i
```

2. Prettier
```bash
npm install --save-dev --save-exact prettier
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
```

Compléter le fichier ``.prettierrc``
```js
module.exports = {
	...require('prettier-airbnb-config'),
	printWidth: 100,
	arrowParens: 'always',
	bracketSpacing: true,
	trailingComma: 'all',
};
```

Completer les scripts dans le ``package.json``
```json
"scripts": {
	...
    "prettier": "prettier --check .",
    "prettier:fix": "prettier --write .",
    ...
},
```

3. ESLint
```bash
npm init @eslint/config
```
Choisir JSON lors de la configuration.

Completer les scripts dans le ``package.json``
```json
"scripts": {
	...
    "lint": "eslint \"src/**/*.js\"",
    "lint:fix": "eslint --fix \"src/**/*.js\"",
    // si prettier est aussi installer ↓
    "code:fix": "npm run prettier:fix && npm run lint:fix",
    ...
},
```

4. Commitizen
```bash
npm i commitizen
```

Completer le scripts dans le ``package.json``
```json
"scripts": {
	...
    "commit": "cz",
    ...
},
```

5. Vite
```bash
npm init vite
```
Suivre les instructions

```bash
cd vite-project
npm install
npm run dev
```

