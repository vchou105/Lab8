// unit.test.js

const { expect } = require('@jest/globals');
const functions = require('../code-to-unit-test/unit-test-me.js');

// ---------------------- PHONE NUMBER -----------------------
test('valid phone number with dashes', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number with parenthesis and dash', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone number with parenthesis but no dashes', () => {
    expect(functions.isPhoneNumber('(123)4567890')).toBe(false);
});

test('invalid phone number without dashes', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});


// ---------------------- EMAIL ----------------------------
test('valid email with letters and number', () => {
    expect(functions.isEmail("v2Chou@ucsd.edu")).toBe(true);
});

test('valid email with underscore', () => {
    expect(functions.isEmail("v_chou@gmail.com")).toBe(true);
});

test('invalid email with only username and no @ domain', () => {
    expect(functions.isEmail("v_chou")).toBe(false);
});

test('invalid email with no username', () => {
    expect(functions.isEmail("@gmail.com")).toBe(false);
});


// -------------------- PASSWORD -------------------------
test('valid password', () => {
    expect(functions.isStrongPassword('hello123')).toBe(true);
});

test('valid long password', () => {
    expect(functions.isStrongPassword('hello123th1s1S')).toBe(true);
});

test('invalid password too short and does not start with a letter', () => {
    expect(functions.isStrongPassword('123')).toBe(false);
});

test('invalid password too long', () => {
    expect(functions.isStrongPassword('hello123th1sIs2LONG')).toBe(false);
});


// ---------------------- DATE ---------------------------
test('valid date with 2 digit month and dates', () => {
    expect(functions.isDate('10/20/2000')).toBe(true);
});

test('valid date with single number month and dates', () => {
    expect(functions.isDate('2/02/2000')).toBe(true);
});

test('invalid date with 2 digit year', () => {
    expect(functions.isDate('10/20/20')).toBe(false);
});

test('invalid date with numbers out of range', () => {
    expect(functions.isDate('24/24/20')).toBe(false);
});


// -------------------- HEX COLOR ------------------------
test('valid hex color 3 characters', () => {
    expect(functions.isHexColor('#a12')).toBe(true);
});

test('valid hex color 6 characters', () => {
    expect(functions.isHexColor('b123A0')).toBe(true);
});

test('invalid hex color character length', () => {
    expect(functions.isHexColor('#F123')).toBe(false);
});

test('invalid hex color character range', () => {
    expect(functions.isHexColor('#Za1')).toBe(false);
});