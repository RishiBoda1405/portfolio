/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Privacy Enhanced Access Control for Providing Efficient Security in Cloud Environment",
    conferences:
      "3rd International Conference on Intelligent Computing, Information, and control systems (ICICCS 2021)",
    researchYr: 2021,
    citebox: "popup1",
    image: "assets/images/research-page/cloud.jpg",
    citation: {
      vancouver:
        "Rishiroop, B.B., Puneeth, P., Bhanuteja, T., Selvi, M., Santhoshkumar, S.V.N., Kannan, A. (2022). Privacy-Enhanced Access Control for Providing Efficient Security in Cloud Environment. In: Pandian, A.P., Palanisamy, R., Narayanan, M., Senjyu, T. (eds) Proceedings of Third International Conference on Intelligent Computing, Information and Control Systems. Advances in Intelligent Systems and Computing, vol 1415. Springer, Singapore. https://doi.org/10.1007/978-981-16-7330-6_60",
    },
    Link:
      "https://link.springer.com/chapter/10.1007/978-981-16-7330-6_60",
    absbox: "absPopup1",
  },

  {
    title: "Detection of Disease and Damage Control for Crops using Convolution Neural Networks",
    conferences:
      "Journal of Xi'an University of Architecture & Technology in November 2020, Volume 12, Issue 11, ISSN: 1006-7930",
    researchYr: 2020,
    citebox: "popup2",
    image: "assets/images/research-page/plant.jpg",
    citation: {
      vancouver:
        "Pranay G, Kuruba A, Rishiroop BB, Thirugnanam M. Detection of Disease and Damage Control for Crops using Convolution Neural Networks.",
    },
    Link:
      "https://www.xajzkjdx.cn/gallery/40-nov2020.pdf",
    absbox: "absPopup2",
  },

  {
    title:
      "Image to Image Translation Using Generative Adversarial Network",
    conferences:
      "International Journal Scientific Technology and Research (IJSTR) in Oct (2020), Volume 9, Issue 10, ISSN: 2277-8616.",
    researchYr: 2020,
    citebox: "popup3",
    image: "assets/images/research-page/gan.jpg",
    citation: {
      vancouver:
        "Manoj B, Rishiroop BB. Image To Image Translation Using Generative Adversarial Network. no. October. 2020.",
    },
    Link:
      "https://www.ijstr.org/final-print/oct2020/Image-To-Image-Translation-Using-Generative-Adversarial-Network.pdf",
    absbox: "absPopup3",
  },

  {
    title:
      "Difficulty Level Prediction of a Question Paper Using Naive Bayes Classifier",
    conferences:
      "Journal of Xi'an University of Architecture & Technology in Sept-Oct 2020, Volume 12, Issue 9, ISSN: 1006-7930",
    researchYr: 2020,
    citebox: "popup4",
    image: "assets/images/research-page/naive bayes.png",
    citation: {
      vancouver:
        "Reddy TR, Reddy DS, Boddu M, Bhagya B, Rishiroop R. Difficulty Level Prediction of a Question Paper Using Naive Bayes Classifier.",
    },
    Link:
      "https://www.xajzkjdx.cn/gallery/79-sep2020.pdf",
    absbox: "absPopup4",
  },

 
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      Link,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-Link " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            Link
                        </button>
                
                        <button class="button button-accent button-small text-right button-Link " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${Link}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
