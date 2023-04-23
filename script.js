const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
menuBtn.addEventListener('click', () => {
    let links = document.querySelector('.links');
    links.classList.add('active');
});
closeBtn.addEventListener('click', () => {
    let links = document.querySelector('.links');
    links.classList.remove('active');
});

window.addEventListener("scroll", (e) => {
    let nav = document.querySelector('nav');
    if (window.pageYOffset > 50) {
        nav.style.backgroundColor = "black";
        nav.style.zIndex = "1000";
    }
    if (window.pageYOffset < 50) {
        nav.style.backgroundColor = "transparent";
        nav.style.zIndex = "1000";
    }
});


const testmemorilas = [
    {
        name: "JASON BROWN",
        prof: "MANAGER",
        testmemorila: "Lorem ipsum dolor sit amet, consectetur adipisicing",
        image: "./images/face1.jpg"
    },
    {
        name: "ANN GRAYSON",
        prof: "DESIGNER",
        testmemorila: "Lorem ipsum dolor sit amet, consectetur adipisicing",
        image: "./images/face2.jpg"
    },
    {
        name: "JESSICA GRAY",
        prof: "PHOTOGRAPHER",
        testmemorila: "Lorem ipsum dolor sit amet, consectetur adipisicing",
        image: "./images/face3.jpg"
    }
]


let sliders = [];
let sliderIndex = 0;
let wrapper = document.querySelector('.wrapper');
const createSlide = () => {
    if (sliderIndex >= testmemorilas.length) {
        sliderIndex = 0;
    }

    let testmemorialContainer = document.createElement('div');
    let span = document.createElement('span');
    let image = document.createElement('img');
    let pName = document.createElement('p');
    let pprof = document.createElement('p');

    image.appendChild(document.createTextNode(""));
    span.appendChild(document.createTextNode(testmemorilas[sliderIndex].testmemorila));
    pName.appendChild(document.createTextNode(testmemorilas[sliderIndex].name));
    pprof.appendChild(document.createTextNode(testmemorilas[sliderIndex].prof));
    testmemorialContainer.appendChild(span);
    testmemorialContainer.appendChild(image);
    testmemorialContainer.appendChild(pName);
    testmemorialContainer.appendChild(pprof);
    wrapper.append(testmemorialContainer);

    image.src = testmemorilas[sliderIndex].image;
    sliderIndex++;

    testmemorialContainer.className = "testmemorialContainer";
    sliders.push(testmemorialContainer);
    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 1)}% - ${
          30 * (sliders.length - 1)
        }px)`;
      }
};

for (let i = 0; i < testmemorilas.length; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);

