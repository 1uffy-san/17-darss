// let radius = document.querySelector("input");

// let box =  document.querySelector(".box");

// box.style.cssText = `
// width: 400px;
// height: 400px;
// background-color: #eee;
// transition: all 0.5s;
// `
// radius.addEventListener("change", function (e) 
// {
//     console.log(box)
//     box.style.borderRadius = `${e.target.value}%`;
// })

let main = document.querySelector(".main");
  
main.onclick = function (){
    let sidebar = document.querySelector(".sidebar");
    console.log(sidebar.classList);
    sidebar.classList.toggle("hide");
    
}


// sidebar.classList.toggle("hide");   //bor/yoq qlish uchun ishlatiladi
// sidebar.classList.add("hide");      //bor qilish uchun ishlatiladi
// sidebar.classList.remove("hide");   //yoq qilish uchun ishlatiladi
// sidebar.classList.contains("hide"); //bor yoki yoqligini tekshirish uchun ishlatiladi
