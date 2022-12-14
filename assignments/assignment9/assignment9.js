
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const button = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Declaring the array of image filenames 
const imageArray = [`pic1.jpg`, `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];
// Declaring the array of alternate text 
const altArray = {'pic1' : 'Image of Tyrion Lannister', 'pic2' : 'Image of Arya Stark', 
              'pic3' : 'Image of Daenerys Targaryen', 'pic4' : 'Image of Ned Stark', 'pic5' : 'Image of Jon Snow'};

// Loop through the images
for (const image of imageArray)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', altArray[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener ('click', a => 
    {
        displayedImage.src = a.target.src; 
        displayedImage.alt = a.target.alt;
    });
} 

// Wiring up the Darken/Lighten button 

button.addEventListener('click', () => {
    const buttonClass = button.getAttribute('class');
    if (buttonClass === 'dark') {
      button.setAttribute('class','light');
      button.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      button.setAttribute('class','dark');
      button.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });
