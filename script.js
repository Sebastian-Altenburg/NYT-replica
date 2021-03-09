let buttonsSetUp = false;
let body = document.querySelector("body");
let mobileButton = document.querySelectorAll(".remove-just-this");


    mobileButton.forEach((button) => {
        button.addEventListener("click", ()=> {
            console.log("button works");
        });
    });


const setUpMobileButtons = () => {

    let elements = document.querySelectorAll(".nav-grid h5");

    for(let i = 0; i < elements.length; i++) {
        let parent = elements[i].parentNode;
    
        let wrapperButton = document.createElement('button');
        parent.replaceChild(wrapperButton, elements[i]);
        wrapperButton.appendChild(elements[i]);
        wrapperButton.classList.add(".remove-just-this");
    }
}

const deleteMobileButtons = () => {
    const nodes = document.getElementsByClassName(".remove-just-this");
    
    for(let i = 0; i < 6; i++) {
        nodes[0].replaceWith(...nodes[0].childNodes);
    }
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        setUpMobileButtons();
        buttonsSetUp = true;
    }
    else if (buttonsSetUp) {
        deleteMobileButtons();
        buttonsSetUp = false;
    }  
  }
  var x = window.matchMedia("(max-width: 800px)")
  myFunction(x); // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes


// Event for mobile view buttons
let sixButtons = document.getElementsByClassName(".remove-just-this");
var _6Btn = [].slice.call(sixButtons)

_6Btn.forEach((button) => {
    button.addEventListener("click", ()=> {
        // console.log("hiiiii");
    });
});








// const setId = (project, deleteButton) => {
//     const projectIndex = myProjects.indexOf(project);
//     project.setAttribute("data-index", `${projectIndex}`);


//     const projectToDelete = document.querySelector(`[data-index="${projectIndex}"]`);

//     deleteButton.addEventListener("click", ()=> {
//         myGrid.removeChild(projectToDelete);
//         delete myProjects[projectIndex];
//     }); 
// }