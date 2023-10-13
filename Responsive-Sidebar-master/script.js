const alfursanDropDown = document.getElementById('Alfursan');
const alfursanContent = document.querySelector('.alfursan-content')

const dropdownButton = document.getElementById('Aircrafts');
const dropdownContent = document.querySelector('.dropdown-content');

const planeNavList = document.querySelector('.plane-nav-list');

const openBtn = document.getElementById('open-btn');

const navlist = document.querySelector('.nav_list');
const alfursanNavList = document.querySelector('.alfursan-nav-list');


const backbtn = document.getElementById('btn-back');

function openPopup(url) {

    

    const popup = document.createElement('div');
    popup.classList.add('popup');
  
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.width = '80%';
    iframe.height = '80%';
  
    popup.appendChild(iframe);
  
    document.body.appendChild(popup);
  
    popup.addEventListener('click', () => {
      popup.remove();
    });
  
}
  
  // const links = document.querySelectorAll('.sidebar a');
const links = document.querySelectorAll('.sidebar a:not([href="#"])');
  
links.forEach(link => {
  
  link.addEventListener('click', e => {
    e.preventDefault();
    const url = e.target.getAttribute('href');
    const openedPopUp = document.querySelector('.popup');

    if (document.contains(openedPopUp)) {
      openedPopUp.remove();
      openPopup(url);
    }
    else {
      openPopup(url); 
    }

    });
  
});


backbtn.addEventListener('click', function (){
    navlist.style.display = "flex";
    alfursanNavList.classList.remove('show');
})

openBtn.addEventListener('click', function() {
    sidebar.classList.toggle('open');
    openBtn.style.width = '0px';
} )

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






