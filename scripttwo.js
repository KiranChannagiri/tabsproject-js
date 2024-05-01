
let boxes = document.querySelectorAll(".box");
const container = document.querySelector('.container');

container.addEventListener('click', (event) => {
  if (event.target.classList.contains('box')) {
    // Remove active class from all boxes
    boxes.forEach((box) => {
      box.classList.remove('active');
    });

    // Add active class to the clicked box
    event.target.classList.add('active');
  }
});