console.log('Armazenando apikey')

let apikey = {key: '' }

//Get Fetch requisition

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
    .then((response) => {
        if(!response.ok)
        {
            throw new Error('Erro ao executar a requisição, status' + response.status);
        }
        else{
            return response.json();
        }
    })
    .then((api) => {
        console.log(api)
        var texto = "";

        for ( let i = 0; i < 4; i++)
        {
            texto = texto + `

            <div class="container">
            <table class="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Nome</th>
                  <th>Simbolo</th>
                  <th>Ultima Data</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <img src="coin.jpg" alt="coin" class="align-self-center mr-3" width="100" height="60"></td>
                  <td>${api.data[i].name}</td>
                  <td>${api.data[i].symbol}</td>
                  <td>${api.data[i].last_historical_data}</td>
                </tr>      
               
              </tbody>
            </table>
          </div>`

               
        }

        document.getElementById("coins").innerHTML = texto;
    })
    .catch((error) => {
        console.log(error.message);
    }); 

   

