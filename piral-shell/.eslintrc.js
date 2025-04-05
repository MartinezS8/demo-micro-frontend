module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'react/prop-types': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }]
    }
};
