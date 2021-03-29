import { A as ActiveRouter } from './active-router-32c1e4b5.js';
import './match-path-760e1797.js';
import './index-783f980a.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
