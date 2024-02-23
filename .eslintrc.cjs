/**
 * This is the same as .eslintrc files except having it in this format allows for comments to be left within the file
 *
 * @see {@link https://eslint.org/docs/latest/user-guide/configuring/} for ESLint configuration options
 */

module.exports = {
	root: true,
	env: { browser: true, es2020: true, node: true },
	extends: [
		// 'prettier',
		// 'plugin:prettier/recommended',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['prettier', 'react-refresh', '@typescript-eslint', 'react', 'react-hooks'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	globals: {
		JSX: true,
	},
};
