// css files here
import './style.css';
import dummy from './modules/dummy.js';
import mockScores from './modules/mockup.js';

mockScores(dummy);

const container = document.querySelector('.form');
const iName = document.querySelector('#iNname');
const iScore = document.querySelector('#iScore');

container.onsubmit = (e) => {
  e.preventDefault();
  const name = iName.value;
  const score = iScore.value;

  dummy.push({ name, score });

  mockScores(dummy);
};