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
  return fetch("https://covid19.mathdro.id/api").then((response) =>
    response.json()
  );
}

async function showData() {
  try {
    const res1 = await fetch("https://covid19.mathdro.id/api");
    const data = await res1.json();
    const res = await fetch(
      "https://covid19.mathdro.id/api/countries/Indonesia"
    );
    const dataIndo = await res.json();
    const wrapCard = document.querySelector(".wrap-card");

    wrapCard.innerHTML = await showCards(data, dataIndo);
  } catch (error) {
    console.log(error);
  }
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

showData();

async function showCards(data, dataIndo) {
  const confirmedIndo = numberWithCommas(dataIndo?.confirmed?.value);
  const recoveredIndo = numberWithCommas(dataIndo?.recovered?.value);
  const deathsIndo = numberWithCommas(dataIndo?.deaths?.value);

  const confirmed = numberWithCommas(data?.confirmed?.value);
  const recovered = numberWithCommas(data?.recovered?.value);
  const deaths = numberWithCommas(data?.deaths?.value);
  return `<div class="col-12 col-lg-6 mt-4 padding-cs">
              <div
                class="card bg-card1"
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <img src="./assets/1.png" alt="" class="shape-card" />
                <div class="shape-hr"></div>
                <h3>Indonesia</h3>
                <p>${confirmedIndo} Positif, ${recoveredIndo}</p>
                <p>Sembuh, ${deathsIndo} Meninggal</p>
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
                <p>${confirmed}</p>
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
                <p>${recovered}</p>
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
                <p>${deaths}</p>
                <p>Orang</p>
              </div>
            </div>`;
}

function showNews(data) {
  return ` <img src="./assets/5.png" alt="" class="shape-carousel" />
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <h5>Berita Corona</h5>
              <h5>Pesat</h5>
              <p>19 September 2020</p>
              <!-- <img src="..." class="d-block w-100" alt="..." /> -->
            </div>
            <div class="carousel-item">
              <h5>Berita Corona</h5>
              <h5>Pesat</h5>
              <p>19 September 2020</p>
              <!-- <img src="..." class="d-block w-100" alt="..." /> -->
            </div>
            <div class="carousel-item">
              <h5>Berita Corona</h5>
              <h5>Pesat</h5>
              <p>19 September 2020</p>
              <!-- <img src="..." class="d-block w-100" alt="..." /> -->
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <img src="./assets/previus.png" alt="" />
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <img src="./assets/next.png" alt="" />
          </a>`;
}
