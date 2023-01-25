import {API_KEY} from './apiKey.js'
export const PageDetail = (argument) => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");

    const displayGame = (gameData) => {
      const { name, released, description, website, background_image, genres } = gameData;
      const articleDOM = document.querySelector(".page-detail .article");
      articleDOM.querySelector("h2.title").innerHTML = name;
      articleDOM.querySelector("p.release-date span").innerHTML = released;
      articleDOM.querySelector("p.description span").innerHTML = description;
      articleDOM.querySelector("p.website span").innerHTML = website;
      articleDOM.querySelector("img").src = background_image

    };

    const fetchGame = (url, argument) => {
      fetch(`${url}/${argument}?key=${API_KEY}`)
        .then((response) => response.json())
        .then((responseData) => {
          displayGame(responseData);

        });
    };
    fetchGame('https://api.rawg.io/api/games', cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article">
          <h2 class="title"></h2>
          <p class="release-date">Release date : <span></span></p>
          <p class="description"><b>Plot</b><br> <span></span></p>
          <p class="website"><b>Website</b><br> <span></span></p>
          <img class="img" src=""/>
        </div>
      </section>
    `;

    preparePage();
  };

  render();
};