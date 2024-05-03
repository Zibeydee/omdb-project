const apiKey =`7d1ee667`

const input= document.querySelector('.input')
const button =document.querySelector('.search')
const cards = document.querySelector('.cards')



async function movie(url){
    try{
        const response =await fetch(url)
        const data = await response.json()

        console.log(data);
        if(data.Search && data.Search.length >0){
          updateCards(cards,data.Search)
        }
      } catch (err) {
        console.log(err);
      }
    }


    function updateCards(cards, movies) {
      const arr = movies;
      cards.innerHTML = "";
      arr.forEach((element) => {
        cards.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img src="${element.Poster}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.Title}</h5>
            <p class="card-text">${element.Year}</p>
            <p class="card-text">${element.imdbID}</p>
          </div>
          </div>
        `;
      })
    };

   
    button.addEventListener("click", act);
    function act() {
      const mov = `https://www.omdbapi.com/?apikey=${apiKey}&s=${input.value}`;
      
      console.log(mov);
      movie(mov);
    }
    act();