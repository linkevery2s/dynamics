function ini(){
fetch('https://data.corona.go.jp/converted-json/covid19japan-npatients.json')
  .then(response => response.json())
  .then(data =>{
    day_yousei.innerHTML = data[data.length-1].adpatients;
    total_yousei.innerHTML = data[data.length-1].npatients;
  }
  );


}
