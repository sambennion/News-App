document.getElementById("NewsSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("NewsInput").value;
  if (value === "")
    return;
  console.log(value);

const url = "https://newsapi.org/v2/everything?q="+ value +"&apiKey=c103769008754e9098033fb7c66cf09f";
fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);


    });

});
