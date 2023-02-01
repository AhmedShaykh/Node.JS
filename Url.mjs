import { URL } from 'url';

const myURL = new URL('https://ahmx.eth');

myURL.pathname = '/token/wallet/auth0';
myURL.search = '?d=e';
myURL.hash = '#data';

console.log(myURL);
console.log(myURL.href);