// Variable declarations
const section2Desktop = document.querySelector('.section-2-desktop');
const section3Mobile = document.createElement('section');
const section31Mobile = document.createElement('div');

// Array-object to store all featured work information
const featuredWork = [
  {
    num: 1,
    image: './images/image3.jpg',
    title: 'Ixora',
    locationAndYear: 'Dravuni village, Tailevu, Fiji ◽ 2017',
    description: 'An orange flower cluster.',
  },
  {
    num: 2,
    image: '../images/image4.jpg',
    title: 'Azalea',
    locationAndYear: 'Dravuni village, Tailevu, Fiji ◽ 2017',
    description: 'A dark pink azalea.',
  },
  {
    num: 3,
    image: '../images/image5.jpg',
    title: 'Bure kalou',
    locationAndYear: 'Bau village, Tailevu, Fiji ◽ 2017',
    description: 'A bure kalou on Bau island.',
  },
  {
    num: 4,
    image: '../images/image6.jpg',
    title: 'Iri',
    locationAndYear: 'Oceania ◽ 2017',
    description: 'A Samoan fan.',
  },
  {
    num: 5,
    image: '../images/image7.jpg',
    title: 'Micronesia',
    locationAndYear: 'Oceania ◽ 2018',
    description: 'A Micronesia traditional necklace.',
  },
  {
    num: 6,
    image: '../images/image8.jpg',
    title: 'Vaka',
    locationAndYear: 'Korova settlement, Suva, Fiji ◽ 2016',
    description: 'A masi piece of a vaka.',
  },
];

// Create Section 3 for mobile screens
section3Mobile.innerHTML = `
  <h2 class="heading lato-font font-darkgrey text-center fw-bold col-12 col-sm-12">Featured Work</h2>
`;

// Add all classes (including Bootstrap v5 classes)
section3Mobile.className = 'section-3-mobile row d-flex d-sm-flex d-md-none px-2 py-5';

// Create each card/work then append to Section 3-1 Mobile
featuredWork.forEach((work) => {
  const cardMobile = document.createElement('div'); // create a card
  cardMobile.className = `row section-3-1-${work.num}-mobile mb-3 py-3`; // Add these classes (including Boostrap v5 classes)

  cardMobile.innerHTML = `
      <img src="${work.image}" alt="${work.description}" class="col-5 col-sm-5 mb-4 img-fluid featured-imgs">

      <div class="texts col-7 col-sm-7 d-flex d-sm-flex flex-column flex-sm-column align-items-start align-items-sm-start">
        <h5 class="img-name lato-font fw-bolder">${work.title}</h5>
        <p class="location-and-year lato-font font-orange fw-bold fst-italic">${work.locationAndYear}</p>
        <p class="img-description lato-font font-darkgrey fw-bold">${work.description}</p>
      </div>
  `;

  section31Mobile.append(cardMobile);
});

// Add all of these classes
section31Mobile.className = 'section-3-1-mobile col-12 col-sm-12 container-fluid mt-5 ps-5';

section3Mobile.append(section31Mobile); // Append section-3-1-mobile to Section 3 Mobile
section2Desktop.after(section3Mobile); // Append Section 3 Mobile after Section 2 Desktop