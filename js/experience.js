AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development Intern",
    cardImage: "assets/images/experience-page/Teleworld.png",
    place: "TeleWorld Solutions (Samsung Electronics USA)",
    time: "(June, 2022 - August 2022)",
    desp: "<li>Software Integrations</li> <li>Back-end operations</li> <li>Web Development and API Support</li> <li>Building Automations</li>",
  },
  {
    title: "Graduate Research Assistant",
    cardImage: "assets/images/experience-page/Virginia-Tech.png",
    place: "Virginia Tech, USA",
    time: "(Jan 2022 - Present)",
    desp: "<li>Full stack application development</li> <li>Data Visualization</li> <li>Database Management</li>",
  },
  {
    title: "Software Development Intern",
    cardImage: "assets/images/experience-page/TechM.png",
    place: "Tech Mahindra, Hyderabad, India",
    time: "(Jan 2022 - May 2022)",
    desp: "<li>Hyperledger Block chain based application development</li> <li>Back-end and API Management</li> <li>Web development</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Chair Person of a student chapter",
    cardImage: "assets/images/experience-page/chair.jpg",
    description:
      "As a Chair Person for a student chapter called SAHITI from my bachelor's University, I presided over 200 students work ardently towards creating awareness concerning cultural, historical, and literary aspects of the Telugu Language among 10,000+ students on campus.",
  },
  {
    title: "Coordinator of Cultural Fest",
    cardImage: "assets/images/experience-page/riviera.png",
    description:
      "I served as a student coordinator in the publicity & marketing team for the annual cultural fest called Riviera from my bachelor's University.",
  },
  {
    title: "Photography",
    cardImage: "assets/images/experience-page/every.png",
    description:
      "I like to travel a lot. I do Travel Photography. Follow my personal collection on instagram @every_click_14",
  },

];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);