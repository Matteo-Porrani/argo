

const sectionCrew = document.querySelector('#crew');
const sectionForm = document.querySelector('#member');

const addMemberBtn = document.querySelector('#addMember');

// const sectionTogglers = document.querySelectorAll('.section__toggler');






const iconHiddenInput = document.querySelector('#p_icon');

const avatarImage = document.querySelector('.form__avat__img');
const avaButtons = document.querySelectorAll('.avat__arrow');





if (location.search.match(/edit/)) {

  const urlElements = avatarImage.src.split('/');
  const fileName = urlElements[urlElements.length - 1];
  const avatarParsedId = parseInt(fileName.match(/\d+/),10);

  iconHiddenInput.value = avatarParsedId;

  showForm();

}






/*
sectionTogglers.forEach(btn => {
  btn.addEventListener('click', (e) => {

    const target = e.target.dataset.toggle;

    if (target === 'crew') {
      showCrew();
    } else if (target === 'form') {
      showForm();
    }

  });
});
*/

addMemberBtn.addEventListener('click', showForm);



function showCrew() {
  sectionCrew.classList.remove('d-none');
  sectionForm.classList.add('d-none');
}

function showForm() {
  sectionCrew.classList.add('d-none');
  sectionForm.classList.remove('d-none');
}













// GET NUMERIC VALUE IN STRING

// You can use a regex to get the first integer :

// var num = parseInt(str.match(/\d+/),10)





avaButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    changeAvatar(e.target.dataset.arrow);
  });
});


function changeAvatar(direction) {

  currAvatId = parseInt(iconHiddenInput.value)

  // if (direction == 'right') {
  //   if (currAvatId <= 14) {
  //     currAvatId++;
  //   }
  // } else if (direction == 'left') {
  //   if (currAvatId > 1) {
  //     currAvatId--;
  //   }
  // }


  if (direction == 'right') {
      currAvatId++;
  } else if (direction == 'left') {
      currAvatId--;
  }

  if (currAvatId === 0) {
    currAvatId = 15;
  }

  if (currAvatId === 16) {
    currAvatId = 1;
  }


  iconHiddenInput.value = currAvatId;
  avatarImage.src = `public/icons/ava_${currAvatId}.png`;

  // console.log(iconHiddenInput.value);
}



const navgHiddenInput = document.querySelector('#f_navg');
const combHiddenInput = document.querySelector('#f_comb');

const navgStarOutput = document.querySelector('.navg__star__output');
const combStarOutput = document.querySelector('.comb__star__output');

// console.log(navgStarOutput.dataset.navgstars);
// console.log(combStarOutput.dataset.combstars);


function displayNavgStars(count) {
  let navgShowStars = "";
  for (let i = 1; i <= count; i++) {
    navgShowStars += '<i class="bi bi-star-fill fs-3 mx-1"></i>';
  }
  navgStarOutput.innerHTML = navgShowStars;
}


function displayCombStars(count) {
  let combShowStars = "";
  for (let i = 1; i <= count; i++) {
    combShowStars += '<i class="bi bi-star-fill fs-3 mx-1"></i>';
  }
  combStarOutput.innerHTML = combShowStars;
}


// first display
displayNavgStars(navgHiddenInput.value);
displayCombStars(combHiddenInput.value);


const navgButtons = document.querySelectorAll('.navg__btn');

navgButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    changeNavgStars(e.target.dataset.navgbtn);
  });
});


function changeNavgStars(mode) {
  currNavgStars = navgHiddenInput.value;

  if (mode == 'plus' && currNavgStars <= 5) {
    currNavgStars++;
  } else if (mode == 'mins' && currNavgStars >= 2) {
    currNavgStars--;
  }

  navgHiddenInput.value = currNavgStars;
  displayNavgStars(currNavgStars);
}


const combButtons = document.querySelectorAll('.comb__btn');

combButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    changeCombStars(e.target.dataset.combbtn);
  });
});


function changeCombStars(mode) {
  currCombStars = combHiddenInput.value;

  if (mode == 'plus' && currCombStars <= 5) {
    currCombStars++;
  } else if (mode == 'mins' && currCombStars >= 2) {
    currCombStars--;
  }

  combHiddenInput.value = currCombStars;
  displayCombStars(currCombStars);
}









const deleteButtons = document.querySelectorAll('.delete__btn');


deleteButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {

    e.preventDefault();

    // console.log(e.target.dataset.id);

    const delItemNameSpan = document.querySelector('.delItemName');
    const delItemHiddenId = document.querySelector('#mod_form_mem_id');

    delItemNameSpan.innerHTML = e.target.dataset.name;
    delItemHiddenId.value = e.target.dataset.id;

  });
});