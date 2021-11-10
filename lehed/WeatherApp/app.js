//Makes it so, that you can also press enter and don't neccesarly have to click button with your mouse.

let inputArea = document.getElementById("inputId");
inputArea.addEventListener("keypress", () =>{
    if (event.keyCode === 13) {
        //event.preventDefault(); 
        document.getElementById("btn").click();
      }
});

//Button Stuff, When Clicked Fetch API

let city;
function getCityValue(){
    console.log("Start func")
    city = document.getElementById("inputId").value;
}

let but = document.getElementById("btn");
but.addEventListener('click', () => {

    console.log("Start Fetching now...")

    const api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=29e0a7b9ef163382e63dbadca195e555&units=metric`;

    fetch(api).then(response =>{
        console.log(response);
        return response.json();
    }).then(data => {
        console.log(data);
        var temp = data["main"]["temp"];
        var desc = data["weather"][0]["description"];
        var iconId = data["weather"][0]["icon"]


        console.log( "Thats the tempterature stuffy", temp);
        //Description
        document.querySelector(".temeprature-description").innerHTML = desc;
        //Temperature
        document.querySelector(".temperature-degree").innerHTML = Math.floor(temp);
        //CityName
        document.getElementById("cityId").innerHTML = data.name;
        //icon
        document.getElementById("icon").src = `http://openweathermap.org/img/wn/${iconId}@2x.png`;




    }).catch(err => alert("Something went wrong someWhere! Linnanimi Balun"));
            

}); //Button on click end.