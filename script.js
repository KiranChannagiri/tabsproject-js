let boxes = document.querySelectorAll(".box");
let container = document.querySelector(".container");
let p = document.querySelector(".p");
boxes.forEach((box,index)=>
{
    box.addEventListener("click",()=>
    {
        boxes.forEach((b)=>
        {
            b.classList.remove("active");
        })
        box.classList.add("active");
        if(index==0)
        {
            p.textContent="this is Home Section";
        }
        if(index ==1)
        {
            p.textContent = "this is Services Section";
        }
        if(index ==2)
        {
            p.textContent = "this is Projects Section";
        }
        if(index ==3)
        {
            p.textContent = "this is Portfolio Section";
        }
        if(index ==4)
        {
            p.textContent = "this is Contact Section";
        }
    });
});


