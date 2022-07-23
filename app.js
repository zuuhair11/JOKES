const btn = document.querySelector('.get-jokes');
btn.addEventListener('click', getJOKES);

function getJOKES(e) {
    e.preventDefault();
    
    // Get number of jokes that you specified
    const number = document.querySelector('input[type="number"]').value;

    // so now we have to number => we can prepare our request (xhr)
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);

            let output = '';
            // Because every joke has 'type' wheather success or not so
            if(response.type === 'success') {
                // ===> I don't want to loop through 'type' so :

                // WAY 1
                // for(let i = 0; i < response.value.length; i++) {
                //     console.log(response.value[i]);
                // }

                // WAY 2
                response.value.forEach(function(joke, index) {
                    output += `
                        <h5>JOKE: ${index + 1}</h5>
                        <img src="giphy1.gif" class="logo-joke"></div>
                        <li>${joke.joke}</li>
                    `;
                });

            } else {
                output += `<li>Something went wrong`;
            }

            const displayJOKE = document.querySelector('.jokes');
            displayJOKE.innerHTML = output;
        }
    }
    
    xhr.send();
}