import '@testing-library/jest-dom/extend-expect';
const {toHaveNoViolations} = require('jest-axe');

expect.extend(toHaveNoViolations);
