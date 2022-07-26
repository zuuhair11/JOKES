const btn = document.querySelector('.get-jokes');
btn.addEventListener('click', getJOKES);

function getJOKES(e) {
    e.preventDefault();
    
    // Get number of jokes that you specified
    const number = document.querySelector('input[type="number"]').value;

    // I instaniate an object from the library that I made
    const http = new easyHTTP();

    http.get(`http://api.icndb.com/jokes/random/${number}`, function(err, result) {
        let output = '';

        if(err) {
          output += `
            <li>Something went wrong</li>
          `;
          
        } else {
            const response = JSON.parse(result);
            // I recieve the array with a type wheather success or not
            // type = success && value = [{}, {}, {}, ...]
            // and I want to loop just through the value 'jokes'
            response.value.forEach(function(joke, index) {
                output += `
                    <h5>JOKE: ${index + 1}</h5>
                    <img src="giphy1.gif" class="logo-joke"></div>
                    <li>${joke.joke}</li>
                `;
            });
        }

        const list = document.querySelector('.jokes');
        list.innerHTML = output;

        // Clear the input
        document.querySelector('input[type="number"]').value = '';
    });
}