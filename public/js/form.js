

// GESTION DE L'ICONE AVATAR
avaButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    changeAvatar(e.target.dataset.arrow);
  });
});


function changeAvatar(direction) {
  currAvatId = parseInt(iconHiddenInput.value)

  if (direction == 'right') {
    currAvatId++;
  } else if (direction == 'left') {
    currAvatId--;
  }

  if (currAvatId === 0) currAvatId = 15;
  if (currAvatId === 16) currAvatId = 1;

  iconHiddenInput.value = currAvatId;
  avatarImage.src = `public/icons/ava_${currAvatId}.png`;
}






// SKILLS

const navgHiddenInput = document.querySelector('#f_navg');
const combHiddenInput = document.querySelector('#f_comb');

const navgStarOutput = document.querySelector('#out_navg');
const combStarOutput = document.querySelector('#out_comb');



function displaySkill(skillOutput, count) {
  let stars = "";
  for (let i = 1; i <= count; i++) {
    stars += '<i class="bi bi-star-fill fs-3 mx-1"></i>';
  }
  skillOutput.innerHTML = stars;
}

// first display
displaySkill(navgStarOutput, navgHiddenInput.value);
displaySkill(combStarOutput, combHiddenInput.value);





// A*A -- skill buttons

const skillButtons = document.querySelectorAll('.skill__btn');

// 'click' event listener
skillButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    changeSkillStars(e.target.dataset.tgt, e.target.dataset.act);
  })
});

// modification affichage
function changeSkillStars(skill, mode) {

  switch (skill) {
    case "navg":
      console.log('modification de NAVG');
      console.log(`mode = ${mode}`);

      // get current value
      currStars = navgHiddenInput.value;

      // + or -
      if (mode == 'plus' && currStars <= 5) {
        currStars++;
      } else if (mode == 'mins' && currStars >= 2) {
        currStars--;
      }

      navgHiddenInput.value = currStars;
      displaySkill(navgStarOutput, currStars);
      break;

    case "comb":
      console.log('modification de COMB');
      console.log(`mode = ${mode}`);

      // get current value
      currStars = combHiddenInput.value;

      // + or -
      if (mode == 'plus' && currStars <= 5) {
        currStars++;
      } else if (mode == 'mins' && currStars >= 2) {
        currStars--;
      }

      combHiddenInput.value = currStars;
      displaySkill(combStarOutput, currStars);
      break;
  }
}



