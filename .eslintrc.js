module.exports = {
    extends: 'airbnb-base',
    env: {
        browser: true,
        mocha: true,
    },
    rules: {
        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': 0,
    },
};