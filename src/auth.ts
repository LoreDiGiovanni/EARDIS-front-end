import { writable,readonly } from 'svelte/store';

export const jwt = writable('');

export const readonlyJwt = readonly(jwt);

