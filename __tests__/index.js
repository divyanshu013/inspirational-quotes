const { getAll, getRandom } = require('../index');

test('Returns all quotes', () => {
	const quotes = getAll();
	expect(quotes).not.toHaveLength(0);
});

test('Random quote', () => {
	const quote = getRandom();
	expect(quote).toHaveProperty('quote');
	expect(quote).toHaveProperty('author');
});
