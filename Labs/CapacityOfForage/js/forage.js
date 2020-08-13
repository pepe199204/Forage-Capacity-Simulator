var farmName = document.getElementById("farmName");
var farmLocation = document.getElementById("farmLocation");
var farmAltitude = document.getElementById("farmAltitude");
var farmTemperature = document.getElementById("farmPrecipitation");
var farmPrecipitation = document.getElementById("farmPrecipitation");

var areaPaddock = document.getElementById("areaPaddock");
var dryMaterial = document.getElementById("dryMaterial");
var milkProductionDaily = document.getElementById("milkProductionDaily");
var paddockRotation = document.getElementById("paddockRotation");
var forageLoss = document.getElementById("forageLoss");
var cowInProductions = document.getElementById("cowInProductions");
var weightAverageCow = document.getElementById("weightAverageCow");
var weightTotalCapacity = document.getElementById("weightTotalCapacity");
var totalOfSamples = document.getElementById("totalOfSamples");

var calculation = document.getElementById("calculation");

var ha = 10000;
var m2XHa = areaPaddock.value/ha;

var productionOfFv = 0;
var paddockProductionOfFv = 0;
var paddockForageLoss = 0;

calculation.addEventListener("click", calculationFunction);

function calculationFunction(){

farmName = farmName.value;
farmLocation = farmLocation.value;
farmAltitude = farmAltitude.value;
farmTemperature = farmTemperature.value;
farmPrecipitation = farmPrecipitation.value;

areaPaddock = areaPaddock.value;
dryMaterial = dryMaterial.value;
milkProductionDaily = milkProductionDaily.value;
paddockRotation = paddockRotation.value;
forageLoss = forageLoss.value;
cowInProductions = cowInProductions.value;
weightAverageCow = weightAverageCow.value;
weightTotalCapacity = weightTotalCapacity.value;
totalOfSamples = totalOfSamples.value;

m2XHa = areaPaddock/ha;

productionOfFv = ((weightTotalCapacity/totalOfSamples) * (4/1));

paddockProductionOfFv = productionOfFv * areaPaddock;

paddockForageLoss = (paddockProductionOfFv * forageLoss)/0.10;

console.log(productionOfFv.toString() + " kg de F.V por metro cuadrado");
console.log(paddockProductionOfFv.toString() + " kg de F.V por potrero");
console.log(paddockForageLoss.toString() + " kg perdida por potrero");
//  weightTotalCapacity =

}
