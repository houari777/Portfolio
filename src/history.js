import { createBrowserHistory } from 'history';

const history = createBrowserHistory({
  basename: process.env.NODE_ENV === 'production' ? '/Portfolio' : ''
});

export default history;
