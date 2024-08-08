//Globale Variablen
var processedData;
var filterCheck=0;

//Reset des Filters beim neuladen
var filterStart = document.getElementById("filter");
filterStart.value = null;

//Array mit fiktiven Daten zum befuellen der Tabelle
var data_array = [
    {"country": "Brazil", "company": "Company G", "emissions": 1161},
    {"country": "Japan", "company": "Company A", "emissions": 4557},
    {"country": "China", "company": "Company F", "emissions": 3523},
    {"country": "India", "company": "Company H", "emissions": 3380},
    {"country": "Canada", "company": "Company A", "emissions": 1183},
    {"country": "India", "company": "Company C", "emissions": 1770},
    {"country": "Germany", "company": "Company F", "emissions": 1685},
    {"country": "Australia", "company": "Company I", "emissions": 1074},
    {"country": "Germany", "company": "Company C", "emissions": 1374},
    {"country": "China", "company": "Company D", "emissions": 3003},
    {"country": "China", "company": "Company J", "emissions": 3074},
    {"country": "Brazil", "company": "Company D", "emissions": 1349},
    {"country": "Brazil", "company": "Company A", "emissions": 2056},
    {"country": "France", "company": "Company B", "emissions": 1941},
    {"country": "India", "company": "Company F", "emissions": 3841},
    {"country": "France", "company": "Company D", "emissions": 4576},
    {"country": "France", "company": "Company D", "emissions": 3352},
    {"country": "UK", "company": "Company A", "emissions": 2950},
    {"country": "China", "company": "Company I", "emissions": 4891},
    {"country": "China", "company": "Company H", "emissions": 2467},
    {"country": "France", "company": "Company B", "emissions": 4579},
    {"country": "Canada", "company": "Company B", "emissions": 1889},
    {"country": "India", "company": "Company I", "emissions": 4463},
    {"country": "Brazil", "company": "Company A", "emissions": 3019},
    {"country": "Brazil", "company": "Company J", "emissions": 3431},
    {"country": "China", "company": "Company C", "emissions": 1152},
    {"country": "Japan", "company": "Company I", "emissions": 1033},
    {"country": "Australia", "company": "Company A", "emissions": 2072},
    {"country": "France", "company": "Company G", "emissions": 2032},
    {"country": "Brazil", "company": "Company H", "emissions": 4782},
    {"country": "Germany", "company": "Company E", "emissions": 1438},
    {"country": "USA", "company": "Company F", "emissions": 2380},
    {"country": "Japan", "company": "Company E", "emissions": 2104},
    {"country": "China", "company": "Company I", "emissions": 3596},
    {"country": "Japan", "company": "Company G", "emissions": 4058},
    {"country": "Germany", "company": "Company H", "emissions": 3323},
    {"country": "Australia", "company": "Company G", "emissions": 1962},
    {"country": "Australia", "company": "Company A", "emissions": 1886},
    {"country": "France", "company": "Company H", "emissions": 3313},
    {"country": "India", "company": "Company B", "emissions": 4483},
    {"country": "Japan", "company": "Company I", "emissions": 2540},
    {"country": "Brazil", "company": "Company D", "emissions": 3182},
    {"country": "USA", "company": "Company G", "emissions": 3708},
    {"country": "Japan", "company": "Company I", "emissions": 3626},
    {"country": "Canada", "company": "Company C", "emissions": 1381},
    {"country": "USA", "company": "Company E", "emissions": 2110},
    {"country": "China", "company": "Company H", "emissions": 3319},
    {"country": "Canada", "company": "Company D", "emissions": 1544},
    {"country": "USA", "company": "Company C", "emissions": 3388},
    {"country": "India", "company": "Company D", "emissions": 1211},
    {"country": "Germany", "company": "Company H", "emissions": 3185},
    {"country": "China", "company": "Company F", "emissions": 1996},
    {"country": "Canada", "company": "Company H", "emissions": 3256},
    {"country": "UK", "company": "Company J", "emissions": 4029},
    {"country": "USA", "company": "Company E", "emissions": 4773},
    {"country": "Brazil", "company": "Company B", "emissions": 1200},
    {"country": "Canada", "company": "Company B", "emissions": 1684},
    {"country": "China", "company": "Company F", "emissions": 2168},
    {"country": "Brazil", "company": "Company G", "emissions": 4575},
    {"country": "China", "company": "Company C", "emissions": 1092},
    {"country": "USA", "company": "Company A", "emissions": 3977},
    {"country": "Canada", "company": "Company F", "emissions": 3825},
    {"country": "France", "company": "Company C", "emissions": 1104},
    {"country": "China", "company": "Company A", "emissions": 1019},
    {"country": "USA", "company": "Company A", "emissions": 2638},
    {"country": "China", "company": "Company H", "emissions": 2390},
    {"country": "Brazil", "company": "Company G", "emissions": 4427},
    {"country": "China", "company": "Company I", "emissions": 1503},
    {"country": "USA", "company": "Company F", "emissions": 2156},
    {"country": "China", "company": "Company F", "emissions": 3708},
    {"country": "Japan", "company": "Company H", "emissions": 4849},
    {"country": "France", "company": "Company I", "emissions": 1669},
    {"country": "France", "company": "Company H", "emissions": 3911},
    {"country": "Brazil", "company": "Company F", "emissions": 3795},
    {"country": "France", "company": "Company D", "emissions": 4489},
    {"country": "Germany", "company": "Company A", "emissions": 2524},
    {"country": "UK", "company": "Company J", "emissions": 2741},
    {"country": "Canada", "company": "Company G", "emissions": 2557},
    {"country": "UK", "company": "Company J", "emissions": 4970},
    {"country": "Australia", "company": "Company A", "emissions": 4364},
    {"country": "Brazil", "company": "Company J", "emissions": 4040},
    {"country": "Japan", "company": "Company A", "emissions": 1316},
    {"country": "India", "company": "Company G", "emissions": 2566},
    {"country": "Canada", "company": "Company C", "emissions": 1252},
    {"country": "Australia", "company": "Company G", "emissions": 3517},
    {"country": "USA", "company": "Company I", "emissions": 4934},
    {"country": "Brazil", "company": "Company F", "emissions": 3041},
    {"country": "UK", "company": "Company B", "emissions": 2629},
    {"country": "France", "company": "Company C", "emissions": 1301},
    {"country": "UK", "company": "Company J", "emissions": 2331},
    {"country": "China", "company": "Company J", "emissions": 4298},
    {"country": "China", "company": "Company C", "emissions": 4235},
    {"country": "Germany", "company": "Company G", "emissions": 1295},
    {"country": "Brazil", "company": "Company C", "emissions": 4779},
    {"country": "Canada", "company": "Company G", "emissions": 2273},
    {"country": "France", "company": "Company E", "emissions": 2203},
    {"country": "Canada", "company": "Company B", "emissions": 2358},
    {"country": "UK", "company": "Company C", "emissions": 2853},
    {"country": "Brazil", "company": "Company D", "emissions": 2495},
    {"country": "China", "company": "Company C", "emissions": 4310},
]

//Aufbau der Tabelle nach Aufruf der Seite
buildTable(data_array);

//Eventhandler des Filterfeldes 
$("#filter").on("keyup",function(){
    let feld_value = $(this).val();
    console.log("Value:", feld_value);

    //Überprüfung auf Sonderzeichen in der Eingabe (Einfacher Schutz vor Code Injection)   
    if(feld_value.search(/^[a-zA-Z0-9 ]+$/) == -1){
        console.log("Fehlerhafte Eingabe!");
    }else{
    processedData = searchTable(feld_value, data_array)
    buildTable(processedData);
    filterCheck = 1;
    }
    //Prüfung ob das Filterfeld leer ist
    if(feld_value == ""){
        buildTable(data_array);
        filterCheck = 0;
    }
    
});

//Funktion fuer Tabellenaufbau
function buildTable(data){
    var table = document.getElementById("table_data");

    //Entfernung der vorherigen Tabellenstruktur
    table.innerHTML = ``;

    for(var i = 0; i < data.length; i++){
        let row = `
        <tr>
            <td>${data[i].country}</td>
            <td>${data[i].company}</td>
            <td>${data[i].emissions}</td>
        `;
        table.innerHTML += row;
    }
}

//Funktion zum filtern der Daten
function searchTable(value, data){
    var filteredData =[];

    for(var i = 0; i < data.length; i++){
        //Alle Werte werden umgewandelt sodass Groß- und Kleinschreibung keine Auswirkung haben
        value = value.toLowerCase();                
        let country = data[i].country.toLowerCase();
        let company = data[i].company.toLowerCase();

        if(country.includes(value)||company.includes(value)){
            filteredData.push(data[i]);
        }

    }
    return filteredData;
}

//Eventhandler für Sortieren in Spalte 1
$("#btn_th1").on("click", function(){

    buttonReset();
    sortieren(th1, "btn_th1")
    
})

//Eventhandler für Sortieren in Spalte 2
$("#btn_th2").on("click", function(){

    buttonReset();
    sortieren(th2, "btn_th2")
   
})

//Eventhandler für Sortieren in Spalte 3
$("#btn_th3").on("click", function(){

    buttonReset();
    sortieren(th3, "btn_th3");
    
})

//Funktion zum Zurücksetzen der Buttons
function buttonReset(){
    let btn_ar = [];
    btn_ar.push("btn_th1", "btn_th2", "btn_th3");
    console.log(btn_ar);
    for(let i = 0; i < btn_ar.length; i++){
        let btn = document.getElementById(btn_ar[i]);
        btn.innerHTML = "&uarr;&#8595;";
    }
}

//Funktion Sortieren
function sortieren(th, btn){
    let column = $(th).data("column");
    let order = $(th).data("order");
    let d;
    btn = document.getElementById(btn);

    //Prüfung auf Sortierart Aufsteigend oder Absteigend mit Hilfe des "order" Attributs
    if(order == "desc"){
        $(th).data("order", "asc");
        btn.innerHTML = "&#8595;";
        //Prüfung ob ein Filter gesetzt ist
        if(filterCheck == 0){
            data_array = data_array.sort((a,b) => a[column] > b[column] ? 1 : -1);
            d = 0;            
        }else{
            processedData = processedData.sort((a,b) => a[column] > b[column] ? 1 : -1);
            d = 1;            
        }
    }else{
        $(th).data("order", "desc");
        btn.innerHTML = "&uarr;";
        if(filterCheck == 0){
            data_array = data_array.sort((a,b) => a[column] < b[column] ? 1 : -1);
            d = 0;            
        }else{
            processedData = processedData.sort((a,b) => a[column] < b[column] ? 1 : -1);
            d = 1;            
        }
    }
    //Prüfung welche Daten für die Tabelle verwendet werden sollen (gefiltert oder ungefiltert)
    if(d == 0){
        buildTable(data_array);
    }else{
        buildTable(processedData);
    }
}

