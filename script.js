const apiKey = '319dcfbfcc4e00035c21c78535d2873a';


function createURL(country, apiKey) {
  url = 'https://gnews.io/api/v4/top-headlines?&' +
      'country=' + country + '&' +
      'token=' + apiKey;
  return url;
}

function defaultPage(url)
{
  fetch(url)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          console.log(data);

          let results = "";
          results = displayNews(data, results);
          document.documentElement.setAttribute("lang", 'he');
          document.getElementById("newsResults").innerHTML = results;
      });
}
window.onload = defaultPage(createURL('us',apiKey));

function decideCountry(value) {
  var country = "";
  switch (value) {
    case 'Brazil':
      country = 'br';
      break;
    case 'Egypt':
      country = 'eg';
      break;
    case 'Japan':
      country = 'jp';
      break;
    case 'Israel':
      country = 'il';
      break;
    case 'Russia':
      country = 'ru';
      break;
    case 'United States':
      country = 'us';
      break;
    /*default:
      console.log(`Sorry, we are out of ${expr}.`);*/
  }
  if (country === "")
    return;
  console.log(country);

  return country;
    // The function returns the product of p1 and p2
}

function displayNews(data, results) {
  for (let i=0; i < data.articles.length; i++) {
    results += '<div class=\"article\">' +
      '<div class=\"info\">' +
      '<div class=\"sourceName\">' + data.articles[i].source.name + '</div>' +
      '<div class=\"title\">' + '<a href=\"' + data.articles[i].url + '\">' + data.articles[i].title + '</a></div>' +
      '<div class=\"published\">' + data.articles[i].publishedAt + '</div>' +
      '</div>' +
      '<div class=\"preview\">' + '<img src=\"' + data.articles[i].image + '\"/>' + '</div>' +
    '</div>';
  }
  return results;
}

document.getElementById("Brazil").addEventListener("click", function(event) {
  event.preventDefault();
  var country = decideCountry("Brazil");
  var url = "";
  url = createURL(country, apiKey);

  fetch(url)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          console.log(data);

          let results = "";
          results = displayNews(data, results);
          document.documentElement.setAttribute("lang", 'pt');
          document.getElementById("newsResults").innerHTML = results;
      });
});

document.getElementById("Egypt").addEventListener("click", function(event) {
  event.preventDefault();
  var country = decideCountry("Egypt");
  var url = "";
  url = createURL(country, apiKey);

  fetch(url)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          console.log(data);

          let results = "";
          results = displayNews(data, results);
          document.documentElement.setAttribute("lang", 'ar');
          document.getElementById("newsResults").innerHTML = results;
      });
});

document.getElementById("Japan").addEventListener("click", function(event) {
  event.preventDefault();
  var country = decideCountry("Japan");
  var url = "";
  url = createURL(country, apiKey);

  fetch(url)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          console.log(data);

          let results = "";
          results = displayNews(data, results);
          document.documentElement.setAttribute("lang", 'ja');
          document.getElementById("newsResults").innerHTML = results;
      });
});

document.getElementById("Israel").addEventListener("click", function(event) {
  event.preventDefault();
  var country = decideCountry("Israel");
  var url = "";
  url = createURL(country, apiKey);

  fetch(url)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          console.log(data);

          let results = "";
          results = displayNews(data, results);
          document.documentElement.setAttribute("lang", 'he');
          document.getElementById("newsResults").innerHTML = results;
      });
});

document.getElementById("Russia").addEventListener("click", function(event) {
  event.preventDefault();
  var country = decideCountry("Russia");
  var url = "";
  url = createURL(country, apiKey);

  fetch(url)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          console.log(data);

          let results = "";
          results = displayNews(data, results);
          document.documentElement.setAttribute("lang", 'ru');
          document.getElementById("newsResults").innerHTML = results;
      });
});

document.getElementById("United States").addEventListener("click", function(event) {
  event.preventDefault();
  var country = decideCountry("United States");
  var url = "";
  url = createURL(country, apiKey);

  fetch(url)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          console.log(data);

          let results = "";
          results = displayNews(data, results);
          document.documentElement.setAttribute("lang", 'en');
          document.getElementById("newsResults").innerHTML = results;
      });
});
