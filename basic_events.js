let randbg = document.querySelector('#rand-bg-col-btn');
let incbtn = document.querySelector('#inc-btn');
let incbtn2 = document.querySelector('#inc-btn2');
let incout = document.querySelector('#inc-out');


function change_bg_color()
{
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    
    let bgcolor = 'rgb(' + r.toString() + ',' + g.toString() + ',' + b.toString() + ')';
    
    console.log(bgcolor);
    
    document.querySelector('body').style.background = bgcolor;
}

randbg.addEventListener('click', change_bg_color);

let counter = 0;

incbtn.onclick = function() {
    incout.textContent = counter;
    counter++;
}

incbtn2.addEventListener('click', function(evt) {
    incout.textContent = counter + ' (' + evt.target.id + ')';
    counter++;
});
