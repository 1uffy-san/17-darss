let radius = document.querySelector("input");

let box =  document.querySelector(".box");

box.style.cssText = `
width: 400px;
height: 400px;
background-color: #eee;
transition: all 0.5s;
`
radius.addEventListener("change", function (e) 
{
    console.log(box)
    box.style.borderRadius = `${e.target.value}%`;
})