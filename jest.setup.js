// https://www.raulmelo.dev/blog/fixing-not-implemented-x-on-jest-jsdom-for-component-unit-tests
window.open = jest.fn();
