

const PageList = (argument = '') => {

  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');

    const displayResults = (articles) => {

      const resultsContent = articles.map((article) => (

        `
        <article class="cardGame">
          <div class="card">
            <a href="#pagedetail/${article.id}">
              <img id="img-list" src="${article.background_image}" />
            </a>
            <h2>${article.name}</h2>
            <p>${article.platforms[0].platform.name}</p>
          </div>
        </article>
        `


      ));

      const resultsContainer = document.querySelector('.page-list .articles');
      resultsContainer.innerHTML = resultsContent.join("\n");

    };
    

    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        
        .then((responseData) => {
          displayResults(responseData.results)
        });
    };
   

    fetchList(`https://api.rawg.io/api/games?search=${genialos.value}&page_size=${page}&key=${API_KEY}`, cleanedArgument);

    genialos.addEventListener('input', (e) => {
      const getValue = e.target.value
      fetchList(`https://api.rawg.io/api/games?search=${getValue}&page_size=${page}&key=${API_KEY}`, cleanedArgument);
    })

    let count = 0
    const showmore = document.getElementById('showmore')
    showmore.addEventListener('click', () =>{
      count++
        if(count === 1){
          fetchList(`https://api.rawg.io/api/games?search=${genialos.value}&page_size=18&key=${API_KEY}`)
        }
        if(count === 2){
          fetchList(`https://api.rawg.io/api/games?search=${genialos.value}&page_size=27&key=${API_KEY}`)
          showmore.classList.add('hidden')
        }

    })
    
    function platformSelector(e) {
      const platformSelect = document.getElementById('platformSelect')
      platformSelect.addEventListener('change', (e) =>{
        const selected = e.target.value
        fetchList(`https://api.rawg.io/api/games?parent_platforms=${selected}&search=${genialos.value}&page_size=9&key=${API_KEY}`)
      })
    }
    platformSelector() 

  };

  const render = () => {
    pageContent.innerHTML = `
      <div>
        <h2>Welcome,</h2>
        <p>The Hyper Progame is the world's premier event for computer and video games and related products. At The Hyper Progame, the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies, groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure to the entire video game industry, all under one roof. This text seems familiar.</p>
      </div>

      <select name="pets" id="platformSelect">
        <option value="2">--Please choose an option--</option>
        <option value="2">Playstation</option>
        <option value="3">Xbox</option>
        <option value="6">Switch</option>
        <option value="1">PC</option>
        <option value="6">Linux</option>
        <option value="8,4">Mobile</option>
      </select>

        <div class="wrapper">
        <section class="page-list">
          <div class="articles">Loading...</div>
        </section>
        </div>

        <button class="btn" id="showmore">Show more</button>
    `;

    preparePage();
  };

  render();
};