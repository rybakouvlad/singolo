const MENU = document.getElementById('navigation-bar');
 

MENU.addEventListener('click',(event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    
 })

 hor.onclick = function(event) {
    if (event.target.tagName != "IMG") return;
    if (/assets\/black.jpg/.test(event.target.src)) {
        event.target.src = './assets/hor-fon.png';
    } else {
        
        event.target.src = './assets/black.jpg';
    }
 } 

 ver.onclick = function(event) {
    if (event.target.tagName != "IMG") return;
    if (/assets\/black.jpg/.test(event.target.src)) {
         event.target.src = './assets/vert_fon.png';
    } else {
        event.target.src = './assets/black.jpg';
        
    }
 } 
// PHONE.addEventListener('click',(event) => {
//     if( event.target.style.display === 'none'){
//         event.target.style.display ='block';
//        }
//        console.log("kuku");
//     event.target.style.display = 'none';
 
//     PHONE.remove();
// })

//  const horOn = document.getElementById('hor-on')

//  horOn.addEventListener('click', () => {
//     // PHONE.style.display = 'block'
//     horOn.style.backgroundColor ='black';
//  })