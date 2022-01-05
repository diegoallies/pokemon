fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => res.json())
  .then((pokemonList) => {

  console.log(pokemonList);
  pokemonList.results.forEach((pokemon) => {
    document.querySelector("#list").innerHTML +=`
      <button onclick="getData('${pokemon.url}')">${pokemon.name}</button>
     `;
    
  });
  
  });

function getData(url) {
fetch(url)
.then((response) => response.json())
.then((data) => {
    console.log(data);
   
        document.getElementById("pokemon").innerHTML =`
        <div class="card">
  <img src="${data.sprites.front_default}" class="card-img-top">
  <div class="card-body">
      <h3 class="words"> ${data.name}</h3>
        <p class="words"> Type: ${data.types[0].type.name}</p>
        <p class="words"> Ability: ${data.abilities[0].ability.name}</p>
        <p class="words"> Height: ${data.height} , weight: ${data.weight}</p>
        <p class="words"> Stats: </p>
        <li class="words"> ${data.stats[0].stat.name} : ${data.stats[0].base_stat} </li>
        <li class="words"> ${data.stats[1].stat.name} : ${data.stats[1].base_stat} </li>
        <li class="words"> ${data.stats[2].stat.name} : ${data.stats[2].base_stat} </li>
        <li class="words"> ${data.stats[3].stat.name} : ${data.stats[3].base_stat} </li>
        <li class="words"> ${data.stats[4].stat.name} : ${data.stats[3].base_stat} </li>
        <li class="words"> ${data.stats[5].stat.name} : ${data.stats[5].base_stat} </li>

  </div>
</div>
        
      
        `
    });
  }