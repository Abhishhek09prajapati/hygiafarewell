fetch("https://opensheet.elk.sh/1RA-KlGO642ji9gQMH4J15P_8YIkLRYUOGymUR5D8Kz4/Sheet1")
    .then(response => response.json())
    .then(data => {


        setInterval(() => {
            var i = Math.floor(Math.random() * data.length);
            document.querySelector(".markquee").innerText = data[i].message;
            document.querySelector(".farewellimage").src = `./images/${data[i].teacher}`;
            
        },2200);



    })
    .catch(error => {
        console.error("Error:", error);
    });


function goto1() {
    window.open("https://wa.me/916387215755", "_blank");
}