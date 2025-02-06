console.log("hello world")

// follow along flashlight source
// https://codepen.io/bramus/pen/eBZgPB
const root = document.documentElement;

document.addEventListener('mousemove', evt => {
    let x = evt.clientX / innerWidth;
    let y = evt.clientY / innerHeight;
 
    root.style.setProperty('--mouse-x', x);
    root.style.setProperty('--mouse-y', y);
});