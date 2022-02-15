
// sections
const sectionCrew = document.querySelector('#crew');
const sectionForm = document.querySelector('#member');

// boutons de section
const showCrewBtn = document.querySelector('#showCrew');
const addMemberBtn = document.querySelector('#addMember');





// A*A -- gestion AVATAR dans formulaire

const iconHiddenInput = document.querySelector('#p_icon');

const avatarImage = document.querySelector('.form__avat__img');
const avaButtons = document.querySelectorAll('.avat__arrow');



// on capte une 'modification' d'élément
if (location.search.match(/edit/)) {

  const urlElements = avatarImage.src.split('/');
  const fileName = urlElements[urlElements.length - 1];
  const avatarParsedId = parseInt(fileName.match(/\d+/),10);

  iconHiddenInput.value = avatarParsedId;

  showForm();

}

// GET NUMERIC VALUE IN STRING
// You can use a regex to get the first integer :
// var num = parseInt(str.match(/\d+/),10)




// A*A -- event listener sur bouton '#addMember'
showCrewBtn.addEventListener('click', showCrew);
addMemberBtn.addEventListener('click', showForm);

function showCrew() {
  showCrewBtn.classList.add('active');
  addMemberBtn.classList.remove('active');

  sectionCrew.classList.remove('d-none');
  sectionForm.classList.add('d-none');
}

function showForm() {
  showCrewBtn.classList.remove('active');
  addMemberBtn.classList.add('active');

  sectionCrew.classList.add('d-none');
  sectionForm.classList.remove('d-none');
}





// A*A -- gestion du bouton DELETE dans la card
const deleteButtons = document.querySelectorAll('.delete__btn');

deleteButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {

    e.preventDefault();

    // console.log(e.target.dataset.id);

    const delItemNameSpan = document.querySelector('.delItemName');
    const delItemHiddenId = document.querySelector('#mod_form_mem_id');

    delItemNameSpan.innerHTML = e.currentTarget.dataset.name;
    delItemHiddenId.value = e.currentTarget.dataset.id;

  });
});