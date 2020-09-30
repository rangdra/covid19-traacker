const toggler = document.getElementById("toggle");
const toggleClose = document.getElementById("toggle-close");
const barr = document.getElementById("bar");
const overlay = document.getElementById("overlay");

toggler.addEventListener("click", function () {
  barr.style.visibility = "visible";
  overlay.style.visibility = "visible";
});
toggleClose.addEventListener("click", function () {
  barr.style.visibility = "hidden";
  overlay.style.visibility = "hidden";
});

function getDataCovid() {
  return fetch("https://indonesia-covid-19.mathdro.id/api").then((response) =>
    response.json()
  );
}

function getDataNews() {
  return fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=2d74b5a158c34a9993bc7b45c417ac16"
  ).then((response) => response.json());
}
async function showData() {
  try {
    const data = await getDataCovid();
    const dataNews = await getDataNews();
    console.log(dataNews);
    const wrapCard = document.querySelector(".wrap-card");
    wrapCard.innerHTML = showCards(data);
  } catch (error) {
    console.log(error);
  }
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

showData();

function showCards(data) {
  const positif = numberWithCommas(data.jumlahKasus);
  const sehat = numberWithCommas(data.sembuh);
  const death = numberWithCommas(data.meninggal);
  return `<div class="col-12 col-lg-6 mt-4 padding-cs">
              <div
                class="card bg-card1"
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <img src="./assets/1.png" alt="" class="shape-card" />
                <div class="shape-hr"></div>
                <h3>Indonesia</h3>
                <p>${positif} Positif, ${sehat}</p>
                <p>Sembuh, ${death} Meninggal</p>
              </div>
            </div>
            <div
              class="col-12 col-lg-6 mt-4 padding-cs"
              data-aos="flip-right"
              data-aos-duration="1300"
            >
              <div class="card bg-card2">
                <img src="./assets/2.png" alt="" class="shape-card" />
                <div class="shape-hr"></div>
                <h3>Total Positif</h3>
                <p>${positif}</p>
                <p>Orang</p>
              </div>
            </div>
            <div
              class="col-12 col-lg-6 mt-4 padding-cs"
              data-aos="flip-right"
              data-aos-duration="1600"
            >
              <div class="card bg-card3">
                <img src="./assets/3.png" alt="" class="shape-card" />
                <div class="shape-hr"></div>
                <h3>Total Sembuh</h3>
                <p>${sehat}</p>
                <p>Orang</p>
              </div>
            </div>
            <div
              class="col-12 col-lg-6 mt-4 padding-cs"
              data-aos="flip-right"
              data-aos-duration="1900"
            >
              <div class="card bg-card4">
                <img src="./assets/4.png" alt="" class="shape-card" />
                <div class="shape-hr"></div>
                <h3>Total Meninggal</h3>
                <p>${death}</p>
                <p>Orang</p>
              </div>
            </div>`;
}
