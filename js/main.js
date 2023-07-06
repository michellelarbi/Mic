const tabItems= document.querySelectorAll('.tab-item');
const contentItems = document.querySelectorAll('.tab-content-item');



function removeBorder(e){
  tabItems.forEach(
  item=> item.classList.remove('tab-border')
  );
}

function removeShow(e){
  contentItems.forEach(
  Tabitem=> Tabitem.classList.remove('show')
  );
}


//function select tab content items
function selectItem(e){
// remove border class from tab links
  removeBorder();
//add border class to clicked tab
 this.classList.add('tab-border');
  // remove show class from tab contents
    removeShow();
//console.log("clicked tab");

const tabContentItem = document.querySelector(`#${this.id}-content`);
tabContentItem.classList.add('show');

//  console.log(tabContentItem);
}




//listen for tab click
tabItems.forEach(item =>
  item.addEventListener( 'click',selectItem )
//item.addEventListener('click',)
);
