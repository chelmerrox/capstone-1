// Variable declarations
const section3MobileA = document.querySelector('.section-3-mobile');
const section3Desktop = document.createElement('section');
const section3Desktop1 = document.createElement('div');

// Array-objects to store all featured work info
const featuredWork1 = [
  {
    num1: [1, 4],
    image1: ['../images/image3.jpg', '../images/image6.jpg'],
    titles: ['Ixora', 'Iri'],
    locationAndYear1: ['Dravuni village, Tailevu ◽ 2017', 'Oceania ◽ 2017'],
    description1: ['An orange flower cluster.', 'A Samoan fan.'],
  },
  {
    num1: [2, 5],
    image1: ['../images/image4.jpg', '../images/image7.jpg'],
    titles: ['Dark Azalea', 'Micronesia'],
    locationAndYear1: ['Dravuni village, Tailevu ◽ 2017', 'Oceania ◽ 2018'],
    description1: ['A dark pink azalea', 'A Micronesian traditional necklace.'],
  },
  {
    num1: [3, 6],
    image1: ['../images/image5.jpg', '../images/image8.jpg'],
    titles: ['Bure kalou', 'Vaka'],
    locationAndYear1: ['Bau village, Tailevu, Fiji ◽ 2017', 'Korova settlement, Suva, Fiji ◽ 2016'],
    description1: ['A bure kalou on Bau island.', 'A masi piece of a vaka.']
  },
];

// Create Section 3 Desktop
section3Desktop.innerHTML = `
  <h2 class="heading lato-font font-darkgrey text-center fw-bold col-md-12">Featured Work</h2>
`;

section3Desktop.className = 'section-3-desktop row d-none d-sm-none d-md-flex px-5 py-5';

// Create each card/work in a div with class row, the append it to Section 3-1 Desktop
featuredWork1.forEach((work1) => {
  const row = document.createElement('div');
  row.className = 'row';

  row.innerHTML = `
    <div class="col-md-6 section-3-1-${work1.num1[0]}-desktop mb-3 py-3 d-md-flex flex-md-row justify-content-md-between">
      <img src="${work1.image1[0]}" alt="${work1.description1[0]}" class="col-md-5 mb-4 img-fluid featured-imgs">

      <div class="texts d-md-flex flex-md-column align-items-md-star ms-3">
        <h5 class="img-name lato-font fw-bolder">${work1.titles[0]}</h5>
        <p class="location-and-year lato-font font-orange fw-bold fst-italic">${work1.locationAndYear1[0]}</p>
        <p class="img-description lato-font font-darkgrey fw-bold">${work1.description1[0]}</p>
      </div>
    </div>

    <div class="col-md-6 section-3-1-${work1.num1[1]}-desktop mb-3 py-3 d-md-flex flex-md-row">
      <img src="${work1.image1[1]}" alt="${work1.description1[1]}" class="col-md-5 mb-4 img-fluid featured-imgs">

      <div class="texts d-md-flex flex-md-column align-items-md-start ms-3">
        <h5 class="img-name lato-font fw-bolder">${work1.titles[1]}</h5>
        <p class="location-and-year lato-font font-orange fw-bold fst-italic">${work1.locationAndYear1[1]}</p>
        <p class="img-description lato-font font-darkgrey fw-bold">${work1.description1[1]}</p>
      </div>
    </div>
  `;

  section3Desktop1.append(row); // Append each row to section-3-1-desktop
});

section3Desktop1.className = 'section-3-1-desktop col-md-12 container-fluid mt-5 ps-5';

section3Desktop.append(section3Desktop1); // Append section-3-1-desktop to Section 3 Desktop
section3MobileA.after(section3Desktop); // Append Section 3 Desktop after Section 3 Mobile