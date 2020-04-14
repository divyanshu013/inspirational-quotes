<header align="center">
    <div align="center">
        <img src="logo.png" alt="Logo" width="250" />
    </div>
    <h1 align="center">Inspirational Quotes</h1>
    <p align="center">Get inspired!</p>
</header>

## Installation

```
yarn add @divyanshu013/inspirational-quotes
```

## Usage

Check out all the [existing quotes](./quotes.js).

Following exports are available from the module:

- `getAll()` - returns all quotes
- `getRandom()` - returns a random quote

The result is in the following shape:

```json
{
	"quote": "Always bet on JavaScript!",
	"author": "Brendan Eich"
}
```

Some quotes also have a `source` key. For example:

```json
{
	"quote": "Life moves pretty fast. If you don’t stop and look around once in a while, you could miss it.",
	"author": "Ferris Bueller",
	"source": "Ferris Bueller’s Day Off"
}
```

### Example

```js
// Use require or import, either works
const { getAll, getRandom } = require('@divyanshu013/inspirational-quotes');

console.log('All quotes', getAll());
console.log('A random quote', getRandom());
```

## Author

- [@divyanshu013](https://twitter.com/divyanshu013) 👋

### Attributions

<div>Icons made by <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
