var farmName = 0;
var farmLocation = 0;
var farmAltitude = 0;
var farmTemperature = 0;
var farmPrecipitation = 0;

var areaPaddock = 0;
var dryMaterial = 0;
var milkProductionDaily = 0;
var paddockRotation = 0;
var forageLoss = 0;
var cowInProductions = 0;
var weightAverageCow = 0;
var weightTotalCapacity = 0;
var totalOfSamples = 0;

var calculation = document.getElementById("calculation");

var ha = 10.000;
var m2XHa = areaPaddock.value/ha;

var productionOfGF = 0;
var paddockProductionOfGF = 0;
var haProductionOfGF = 0;
var paddockForageLoss = 0;
var forageUsageForPaddock = 0;
var haForageLoss = 0;
var forageUsageForHa = 0;
var animalLoad = 0;
var defaultUGG = 450;
var animalConsumeLW = 0;
var animalConsumeGFPerDay = 0;
var periodOccupation = 0;
var periodRotation = 0;
var consumeRotationPaddock = 0;
var rotationArea = 0;
var loadCapacity = 0;
var forageLossM2 = 0;
var forageUsageForM2 = 0;
var areaCowDay = 0;
var consumeForageOffered = 0;
var consumeDryMaterial = 0;

calculation.addEventListener("click", calculationFunction);

function calculationFunction(){

/*
farmName = 0;
farmLocation = 0;
farmAltitude = 0;
farmTemperature = 0;
farmPrecipitation = 0;*/

areaPaddock = 0;
dryMaterial = 0;
milkProductionDaily = 0;
paddockRotation = 0;
forageLoss = 0;
cowInProductions = 0;
weightAverageCow = 0;
weightTotalCapacity = 0;
totalOfSamples = 0;

/*
farmName = document.getElementById("farmName");
farmLocation = document.getElementById("farmLocation");
farmAltitude = document.getElementById("farmAltitude");
farmTemperature = document.getElementById("farmPrecipitation");
farmPrecipitation = document.getElementById("farmPrecipitation");*/

areaPaddock = Number(document.getElementById("areaPaddock").value);
dryMaterial = Number(document.getElementById("dryMaterial").value);
milkProductionDaily = Number(document.getElementById("milkProductionDaily").value);
paddockRotation = Number(document.getElementById("paddockRotation").value);
forageLoss = Number(document.getElementById("forageLoss").value);
cowInProductions = Number(document.getElementById("cowInProductions").value);
weightAverageCow = Number(document.getElementById("weightAverageCow").value);
weightTotalCapacity = Number(document.getElementById("weightTotalCapacity").value);
totalOfSamples = Number(document.getElementById("totalOfSamples").value);

/*
farmName = farmName.value;
farmLocation = farmLocation.value;
farmAltitude = farmAltitude.value;
farmTemperature = farmTemperature.value;
farmPrecipitation = farmPrecipitation.value;*/
/*
areaPaddock = areaPaddock.value;
dryMaterial = dryMaterial.value;
milkProductionDaily = milkProductionDaily.value;
paddockRotation = paddockRotation.value;
forageLoss = forageLoss.value;
cowInProductions = cowInProductions.value;
weightAverageCow = weightAverageCow.value;
weightTotalCapacity = weightTotalCapacity.value;
totalOfSamples = totalOfSamples.value;*/

/*------------------------------------------------------------------
-----------------Cálculos de porducción forrajera-------------------
------------------------------------------------------------------*/


m2XHa = areaPaddock/ha;

forageLoss = forageLoss/100;

//producción de GF por m2
productionOfGF = (weightTotalCapacity/totalOfSamples) * (4/1);

//producción de GF por potrero
paddockProductionOfGF = productionOfGF * areaPaddock;

//producción de GF por ha
haProductionOfGF = productionOfGF * ha;

//perdida de forrage por potrero
paddockForageLoss = paddockProductionOfGF * forageLoss;

//pasto aprovechable por potrero
forageUsageForPaddock = paddockProductionOfGF-paddockForageLoss;

//perdida de forrage por Ha
haForageLoss = haProductionOfGF * forageLoss;

//pasto aprovechable por ha
forageUsageForHa = haProductionOfGF-haForageLoss;


console.log("cálculos de producción forrajera");
console.log("--------------------------------");
console.log(productionOfGF.toString() + " kg de F.V por metro cuadrado");
console.log(paddockProductionOfGF.toString() + " kg de F.V por potrero");
console.log(haProductionOfGF.toString() + " kg de F.V por ha");
console.log(paddockForageLoss.toString() + " kg perdida por potrero");
console.log(forageUsageForPaddock.toString() + " kg pasto aprovechable por potrero");
console.log(haForageLoss.toString() + " kg perdida por ha");
console.log(forageUsageForHa.toString() + " kg pasto aprovechable por ha");
console.log("--------------------------------");





/*------------------------------------------------------------------
-----------------Cálculos de carga animal---------------------------
------------------------------------------------------------------*/



animalLoad = cowInProductions * weightAverageCow;
uGG = animalLoad / defaultUGG;

animalConsumeLW = weightAverageCow * 0.12;
animalConsumeGFPerDay = (uGG * animalConsumeLW)*0.001;


console.log("cálculos de carga animal");
console.log("--------------------------------");
console.log(animalLoad.toString() + " kg carga animal");
console.log(uGG.toString() + " UGG");
console.log(animalConsumeLW.toString() + " consumo animal por PV");
console.log(animalConsumeGFPerDay.toString() + " consumo animal de FV por día");

/*Rotación de potreros*/

periodOccupation = forageUsageForPaddock / animalConsumeGFPerDay;

console.log(periodOccupation.toString() + " días periodo de ocupación");

periodRotation = (paddockRotation + periodOccupation);

console.log(periodRotation.toString() + " días periodo de rotación");


consumeRotationPaddock = (periodRotation * animalConsumeGFPerDay);

console.log(consumeRotationPaddock.toString() + " kg F.V Consumo de rotación por potrero");

rotationArea = (consumeRotationPaddock / forageUsageForHa);

console.log(rotationArea.toString() +  " ha área necesaria para rotar");

loadCapacity = (uGG / rotationArea);

console.log(loadCapacity.toString() + " UGG/ha");

console.log("--------------------------------");

/*------------------------------------------------------------------
-----------------Base forrajera---------------------------
------------------------------------------------------------------*/

console.log("cálculos de consumo");

console.log("--------------------------------");
forageLossM2 = (productionOfGF / forageLoss)*0.1;

console.log(forageLossM2.toString() + " perdida de pasto en m2");

forageUsageForM2 = productionOfGF - forageLossM2;

console.log(forageUsageForM2.toString() + " pasto aprovechable en m2");

areaCowDay = (areaPaddock / cowInProductions)*1000;

console.log(areaCowDay.toString() + " vaca/día/m2");

consumeForageOffered = forageUsageForM2 * areaCowDay;

console.log(consumeForageOffered.toString() + " FV vaca/día/m2");

consumeDryMaterial = (consumeForageOffered * dryMaterial) / 100;

console.log(consumeDryMaterial.toString() + " Kg M.S");


console.log("--------------------------------");
























}
