function createElement(data) {
    let paragraph = document.createElement('p');
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
  }
  
  function queryWikipedia(callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        let extract = response.query.pages[Object.keys(response.query.pages)[0]].extract;
        callback(extract);
      }
    };
    xhr.send();
  }
  
  queryWikipedia(createElement);