// Check-Check
console.log('👍️');

// Get Elements
const menuButton = document.querySelector('a.toggle-nav');
const mainContent = document.querySelector('main');

// Listen for clicks on `menuButton`
menuButton.addEventListener('click', function () {
  // Toggle classes on `mainContent`
  mainContent.classList.toggle('open');

  // If opened, change change text
  if (mainContent.classList.contains('open')) {
    
    menuButton.innerHTML = `<img src="assets/close.svg" />`

  } else {
    
    menuButton.innerHTML = `<img src="assets/menu.svg" />`
  } 
  
});

var year = new Date();
        // console.log(("getFullYear() : " + year.getFullYear() ));

document.querySelector(".year").textContent = year.getFullYear();