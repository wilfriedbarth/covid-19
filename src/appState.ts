import { atom } from 'jotai';

const globalScope = Symbol();

const numberAtom = atom(15);
numberAtom.scope = globalScope;

export { numberAtom, globalScope };
