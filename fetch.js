const buttonJ = document.querySelector('.get-jokes');
buttonJ.addEventListener('click', getJokes);

function getJokes(e) {
    e.preventDefault();
    const numberOfJoke = document.querySelector('#number').value;
    let output = ''

    fetch(`http://api.icndb.com/jokes/random/${numberOfJoke}`)
    // Convert the data to JSON
    .then(res => res.json())

    // Tkae the the JSON data 
    .then(data => {
        // Data will come as object {type: 'success' value: [ {}, {}, ..] }
        if(data.type === 'success') {
            // Now I have to to loop through the array, where value: []
            data.value.forEach((joke, index) => {
                output += `
                    <h5>JOKE: ${index + 1}</h5>
                    <img src="giphy1.gif" class="logo-joke"></div>
                    <li>${joke.joke}</li>
                `;
            })
            // Append the value of the output to list
            const list = document.querySelector('.jokes');
            list.innerHTML = output;

            // Clear the input
            document.querySelector('input[type="number"]').value = '';
        }
    })
    .catch(err => {
        output = `<li>There was an error</li>`
    })
}