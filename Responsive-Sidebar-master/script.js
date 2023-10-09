const alfursanDropDown = document.getElementById('Alfursan');
const alfursanContent = document.querySelector('.alfursan-content')

const dropdownButton = document.getElementById('Aircrafts');
const dropdownContent = document.querySelector('.dropdown-content');

const planeNavList = document.querySelector('.plane-nav-list');


const navlist = document.querySelector('.nav_list');
const alfursanNavList = document.querySelector('.alfursan-nav-list');


const backbtn = document.getElementById('btn-back');

backbtn.addEventListener('click', function (){
    navlist.style.display = "flex";
    alfursanNavList.classList.remove('show');
})



dropdownButton.addEventListener('click', function () {
    dropdownContent.classList.toggle('show-dropdown');
});
  
alfursanDropDown.addEventListener('click', function () {
      alfursanContent.classList.toggle('show-dropdown');
});

function handlePlaneTransition() {
    navlist.style.display = 'none';
    planeNavList.classList.toggle('show');
}

function handleAlfursanTransition() {
    navlist.style.display = 'none';
    alfursanNavList.classList.toggle('show');
}

function goBack() {
    navlist.style.display = 'flex';
    planeNavList.classList.remove('show');
}





