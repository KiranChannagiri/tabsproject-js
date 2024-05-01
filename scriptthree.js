const container = document.querySelector('.container');
let boxes = document.querySelectorAll(".box");
let boxcontainr = document.querySelector("#boxcontainr");
let common = document.querySelectorAll(".common");
let i;
boxes.forEach((box,i)=>
{
    box.addEventListener("click",(e)=>
    {
        boxes.forEach((b)=>
        {
           b.classList.remove("active"); 
        });
        e.target.classList.add("active");
        common.forEach((cm)=>
        {
            cm.style.display="none";
        })
        common[i].style.display="block";
        common[i].classList.add("dblock");
    })
});

