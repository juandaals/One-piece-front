async function createCharacter() {
    const name = document.getElementById("character-name").value;
    const age = document.getElementById("character-age").value;
    const bounty = document.getElementById("character-bounty").value;
    const height = document.getElementById("character-height").value;
    const type = document.getElementById("character-type").value;
    const roman_name = document.getElementById("character-roman_name").value;
  
    const characterData = { name, age,bounty,height,type,roman_name };
    
    try {
      const response = await fetch('http://localhost:8080/api/client/characters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(characterData)
      });
      const data = await response.json();
      alert('Personaje creado con éxito');
      fetchCharacters(); // Actualiza la lista de personajes
    } catch (error) {
      console.error('Error al crear personaje:', error);
    }
  }
  async function fetchCharacters() {
    try {
      const response = await fetch('http://localhost:8080/api/client/characters');
      const characters = await response.json();
  
      const charactersList = document.getElementById("characters");
      charactersList.innerHTML = ""; // Limpia la lista antes de agregar los personajes
  
      characters.forEach(character => {
        const listItem = document.createElement("li");
        listItem.textContent = `${character.name}, ${character.age} años, recompensa: ${character.bounty} berries, altura: ${character.height} cm`;
        charactersList.appendChild(listItem);
      });
    } catch (error) {
      console.error('Error al obtener personajes:', error);
    }
  }
  
  async function createBoat() {
    const name = document.getElementById("boat-name").value;
    const type = document.getElementById("boat-type").value;
    const roman_name = document.getElementById("boat-roman_name").value;

    const boatData = { name, type, roman_name };

    try {
        const response = await fetch('http://localhost:8080/api/client/boats', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(boatData)
        });
        const data = await response.json();
        alert('Barco creado con éxito');
        fetchBoats(); // Actualiza la lista de barcos
    } catch (error) {
        console.error('Error al crear barco:', error);
    }
}

async function fetchBoats() {
    try {
        const response = await fetch('http://localhost:8080/api/client/boats');
        const boats = await response.json();

        const boatsContainer = document.getElementById("boats");
        boatsContainer.innerHTML = ""; // Limpia el contenedor antes de agregar los barcos

        boats.forEach(boat => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `${boat.name}, ${boat.type}, ${boat.roman_name}
            `;
            boatsContainer.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener barcos:', error);
    }
}



  
  