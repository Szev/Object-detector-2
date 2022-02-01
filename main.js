img="";
status= "";

function setup()
{
    canvas= createCanvas(600, 400);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status: detecting object";
}
function preload()
{
    img= loadImage('dog_cat.jpg');
}
function draw()
{
    image(img, 0 , 0, 600, 400);
    fill("#21eba1");
    text("DOG", 45, 75);
    noFill();
    stroke("#ff0019");
    rect(30, 60, 270, 300);

    fill("#ff0000");
    text("CAT", 310, 100);
    noFill();
    stroke("#ff0000");
    rect(300, 90, 270, 320);
}
function modelLoaded()
{
    console.log("modelLoaded");
    status= true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
    }
}