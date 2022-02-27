// Imports
import fetchFollowers from './fetchFollowers.js';
import displayFollowers from './displayFollowers.js';
import paginate from './paginate.js';
import displayButtons from './displayButtons.js';

// Const Vars
const title = document.querySelector('.section-title h1');
const btnContainer = document.querySelector('.btn-container');

// Let Vars
let index = 0;
let pages = [];

// setupUI Function
const setupUI = () => {
  console.log(pages);
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
};

// Init Function
const init = async () => {
  const followers = await fetchFollowers();
  // console.log(followers);
  // displayFollowers(paginate(followers)[0]);
  title.textContent = 'Pagination';
  pages = paginate(followers);
  setupUI();
};

btnContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-container')) return;
  if (e.target.classList.contains('page-btn')) {
    index = parseInt(e.target.dataset.index);
    console.log(index);
  }
  if (e.target.classList.contains('next-btn')) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }
  if (e.target.classList.contains('prev-btn')) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }
  setupUI();
});

// Window Event Listener
window.addEventListener('load', () => {
  init();
});
