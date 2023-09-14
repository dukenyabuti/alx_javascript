async function makeRequest(URL){
    const response = fetch (URL);
    console.log ('code:', response.status)
    console.log(response);
}
makeRequest();