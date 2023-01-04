import { createEvent, createStore } from 'effector';

export const page = createStore(1);
export const pageSize = createStore(5);
export const total = createStore(0);

export const nextPage = createEvent();
export const prevPage = createEvent();

page.on(nextPage, prevState => prevState + 1);
page.on(prevPage, prevState => prevState - 1);