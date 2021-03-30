import { A as ActiveRouter } from './active-router-2cbaa815.js';
import './match-path-760e1797.js';
import './index-37ada624.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
