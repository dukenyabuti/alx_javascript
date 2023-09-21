//access the endpoint
async function Episode (ID){
    const response = await fetch(``)
    return response.json();

}
Episode()
    .then(title => console.log(title))
    .catch(err => console.log(err);)
//convert the endpoint into a JSON file

//filter the movies using ID

//compare titles to integers