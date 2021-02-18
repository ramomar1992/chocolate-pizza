'use strict';

function itmeDone(e) {
  let target, itemParent;
  target = e.target;
  itemParent = target.parentNode;
  
  if (this.checked) {
    itemParent.style.textDecoration = 'line-through';
    itemParent.style.color = 'rgba(0,0,0,0.1)';
  } else {
    itemParent.style.textDecoration = 'none';
    itemParent.style.color = 'rgba(0,0,0,1)';
  }
  e.preventDefault();
}
let el = document.getElementsByClassName('listItem');
for (let i = 0; i < el.length; i++) {
  el[i].addEventListener('change', itmeDone, false);

}