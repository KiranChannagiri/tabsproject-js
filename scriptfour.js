let flexitembox = document.querySelectorAll(".box");
let common = document.querySelectorAll(".common");
let id;
let element;
flexitembox.forEach((box)=>
{
    box.addEventListener("click",(e)=>
    {
        flexitembox.forEach((b)=>
        {
            b.classList.remove("active");
        });
        box.classList.add("active");
        id=e.target.dataset.id;
        console.log(id);
        common.forEach((cm)=>
        {
            cm.style.display="none";
        })
        element=document.getElementById(id);
        console.log(element);
        element.className="p";
        element.style.display="block";
    });
});