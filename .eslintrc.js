module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
    },
    'extends': [

        'google',
        'plugin:vue/vue3-recommended',
    ],
    'parserOptions': {
        'ecmaFeatures': {},
        'ecmaVersion': 12,
        'sourceType': 'module',
    },
    'plugins': [],
    'rules': {
        'indent': ['error', 4],
        'space-before-function-paren': 'off',
    },
};
