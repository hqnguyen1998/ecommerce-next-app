import fetch from 'isomorphic-unfetch';

export const fetcher = (...args) => fetch(...args).then((res) => res.json());
