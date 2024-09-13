// Ajout des styles pour l'accueil, l'événement et la section À Propos
const styleAccueil = document.createElement('style');
styleAccueil.innerHTML = `
  /* Styles Accueil */
  .accueil {
    background-image: url('images/image_grp_fisa.jpeg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Arial', sans-serif;
  }
  .accueil h1 {
    font-size: 4rem;
    font-weight: bold;
  }
  .navbar {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5); /* Menu transparent */
    color: white;
    font-family: 'Arial', sans-serif;
  }
  .navbar a {
    color: white;
    text-decoration: none;
    padding: 10px;
  }
  /* Styles pour la section événement */
  .event {
    background-color: #B23321;
    padding: 50px;
    color: white;
    text-align: center;
    font-family: 'Arial', sans-serif;
  }
  .event h2 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  .services {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
  }
  .service {
    background-color: white;
    color: black;
    padding: 20px;
    width: 250px;
    text-align: center;
    border-radius: 10px;
  }
  .service h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  .service button {
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  /* Styles pour la section À Propos */
  .about {
    background-color: #3A403D;
    padding: 50px;
    color: white;
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .about-text {
    max-width: 500px;
  }
  .about h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  .about img {
    width: 200px;
    border-radius: 10px;
  }
`;
document.head.appendChild(styleAccueil);

// HTML dynamique
const accueilSection = `
  <div class="navbar">
    <div>Weekend Fun</div>
    <a href="#">Découvrir Nos Offres</a>
  </div>
  <div class="accueil">
    <h1>Bienvenue chez Weekend Fun</h1>
  </div>
`;
document.body.innerHTML += accueilSection;

const eventSection = `
  <div class="event">
    <h2>Détails de l'Événement</h2>
    <p>Pas d'événements pour le moment</p>
    <div class="services">
      <div class="service">
        <h3>Nom du service</h3>
        <p>80 $US</p>
        <button>Réserver</button>
      </div>
      <div class="service">
        <h3>Nom du service</h3>
        <p>60 $US</p>
        <button>Réserver</button>
      </div>
      <div class="service">
        <h3>Nom du service</h3>
        <p>35 $US</p>
        <button>Réserver</button>
      </div>
    </div>
  </div>
`;
document.body.innerHTML += eventSection;

const aboutSection = `
  <div class="about">
    <div>
      <img src="{% static 'images/image_grp_fisa.jpeg' %}" alt="Verres">
      <img src="{% static 'images/image_grp_fisa.jpeg' %}" alt="Roue de fête">
    </div>
    <div class="about-text">
      <h2>À Propos</h2>
      <p>Weekend Fun, une agence de voyage étudiante, se dédie à l'organisation de week-ends dynamiques pour les étudiants...</p>
    </div>
  </div>
`;

document.body.innerHTML += aboutSection;
