/**
 * Created by Jessey Fransen on 05/10/2016.
 */
$(document).ready(function()
{

    light = document.getElementById("LightOff");
    sleep_button = document.getElementById("sleep_button");

    $("#LightOff").mouseenter(function(){
        console.log("In de lamp");
        LightOn();
    });

    $("#LightOff").mouseleave(function(){
        console.log("Uit de lamp");
        LightOff()
    });

    sleep_button.onclick = function()
    {
        sleep_input = document.getElementById("sleep_input").value;
        if(sleep_input > 0)
            sleep_light(sleep_input);
    }
});

//Met deze functie gaat het lampje aan
function LightOn()
{
    light.src = "assets/img/LightOn.png";
}

function LightOff()
{
    light.src = "assets/img/LightOff.png";
}

function sleep_light(sleep_input)
{
    LightOn();
    setTimeout(function()
    {
       LightOff();
    },sleep_input * 1000);
}