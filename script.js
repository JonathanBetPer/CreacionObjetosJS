const header = document.querySelector('header');
const section = document.querySelector('section');

const requestURL = './objetosDiagramClases.json';

const request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  const desarrolladora = request.response;
  populateHeader(desarrolladora);
  showInfo(desarrolladora);
}

function populateHeader(jsonObj) {
  const myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['desarrolladora'];
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent = 'Email: ' + jsonObj['email'] + ' // WEB: ' + jsonObj['link-web'];
  header.appendChild(myPara);
}

function showInfo(jsonObj) {
  const proyectos = jsonObj['proyectos'];

  for (var i = 0; i < proyectos.length; i++) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');

    myH2.textContent = proyectos[i].nombre;
    myPara1.textContent = 'id: ' + proyectos[i].id;
    myPara2.textContent = 'descripcion: ' + proyectos[i].descipcion;
    myPara3.textContent = 'numeroVacantes: ' + proyectos[i].numeroVacantes;

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);

    section.appendChild(myArticle);
  }
}

request.responseType = 'json';

request.open('GET', requestURL);
request.responseType = 'text'; // recibimos una cadena de tipo "string"
request.send();

request.onload = function() {
  const TextoDesarrolladora = request.response; // cogemos la cadena de response
  const desarrolladora = JSON.parse(TextoDesarrolladora); // la convertimos a objeto
  populateHeader(desarrolladora);
  showInfo(desarrolladora);
}
