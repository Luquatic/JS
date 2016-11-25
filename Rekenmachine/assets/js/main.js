/**
 * Created by Jessey Fransen on 05/10/2016.
 */
var count = 0;
var som = [];
var uitkomst;

function drag(ev)
{
    ev.dataTransfer.setData("drag",ev.target.id);
    console.log(ev.target.id);
}

function allowDrop(ev)
{
    ev.preventDefault();
}

function drop(ev)
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("drag");
    if (count < 3)
    {
        document.getElementById("som").appendChild(document.getElementById(data))
        count = count + 1;
        som[count] = data;
        if (count == 3)
        {
            berekening();
        }
    }
}

function berekening()
{
    som[1] = parseInt(som[1]);
    som[3] = parseInt(som[3]);

    switch(som[2])
    {
        case '+':
            uitkomst = som[1] + som[3];
            break;

        case '-':
            uitkomst = som[1] - som[3];
            break;
    }
    document.getElementById("som").innerHTML = uitkomst;
}