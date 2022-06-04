var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1qAwiu5lv/',modelReady);
}

function modelReady()
{
    classifier.Classify(gotResults);
}

function gotResults()
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("result_label").innerHTML = "Detected Voice is of -"+results[0].label;
        document.getElementById("detected").innerHTML = ", Detected Dog - "+dog+", Detected Cat -"+cat+", Detected Lion -"+lion+", Detected Cow -"+cow;
        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById("animal_img");
        if(results[0].label =="Barking")
        {
            img.src="Dog.png";
            dog = dog+1;
        }
        if_else(result[0].label == "meowing") 
        {
            img.src="Cat.png";
            cat = cat+1;   
        }
        if_else(result[0].label == "rower") 
        {
            img.src ="Lion.png";
            lion = lion+1;  
        }
        if_else(result[0].label == "mooing") 
        {
            img.src ="Cow.png";
            cow = cow+1;
        }
        
    }
}