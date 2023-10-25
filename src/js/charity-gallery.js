import support1 from '/src/images/images-support/support1.svg';
import support2 from '/src/images/images-support/support2.svg';
import support3 from '/src/images/images-support/support3.svg';
import support4 from '/src/images/images-support/support4.svg';
import support5 from '/src/images/images-support/support5.svg';
import support6 from '/src/images/images-support/support6.svg';
import support7 from '/src/images/images-support/support7.svg';
import support8 from '/src/images/images-support/support8.svg';
import support9 from '/src/images/images-support/support9.svg';

export const charities = [
  // ... (fundacje charytatywne)
  {
    title: '',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: support1,
  },
  {
    title: '',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: support2,
  },
  {
    title: '',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: support3,
  },
  {
    title: '',
    url: 'https://www.razomforukraine.org/',
    img: support4,
  },
  {
    title: '',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: support5,
  },
  {
    title: '',
    url: 'https://prytulafoundation.org/en',
    img: support6,
  },
  {
    title: '',
    
    url: 'https://www.msf.org/ukraine',
    img: support7,
  },
  {
    title: '',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: support8,
  },
  {
    title: '',
    url: 'https://u24.gov.ua/uk',
    img: support9,
  },
];

const charitiesSlider = document.getElementById('charitiesSlider');

while (charitiesSlider.firstChild) {
    charitiesSlider.removeChild(charitiesSlider.firstChild);
}

charities.forEach(charity => {
    const link = document.createElement('a');
    link.href = charity.url;
    link.target = "_blank";

    const div = document.createElement('div');
    div.classList.add("charity-item");

    const img = document.createElement('img');
    img.src = charity.img;
    img.alt = charity.title;

    const title = document.createElement('div');
    title.textContent = charity.title;
    title.classList.add("charity-title"); // Dodanie klasy do elementu tytułu

    div.appendChild(img);
    div.appendChild(title);
    link.appendChild(div);

    charitiesSlider.appendChild(link);
});