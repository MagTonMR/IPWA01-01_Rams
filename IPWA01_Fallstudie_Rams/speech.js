//Browsersprache erkennen
detectBrowserSpeech();

//Funktion zum auslesen der Browser Sprache
function detectBrowserSpeech(){

    let detectSpeech;
    let content_nav = document.getElementById("content_nav");
    //Liste für R to L Sprachen je nach Ziel erweiterbar. 
    let speech = [];
    speech.push("ar","he","ur","ku","yi","ja","co","zh");

    detectSpeech = navigator.language.toString();
    
    for(let i = 0; i < speech.length; i++){

        if(detectSpeech == speech[i]){
            content_nav.classList.add("justify-content-end");
        }else{
            content_nav.classList.add("justify-content-start");
        };

    }
}
