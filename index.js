let selectSun = document.getElementById("select-sun");
let selectWater = document.getElementById("select-water");
let selectPet = document.getElementById("select-pet");
let notFound = document.getElementById("notfound")
let sunNo = document.getElementById("sun-no");
let sunLow = document.getElementById("sun-low");
let sunHigh = document.getElementById("sun-high");
let waterRegulary = document.getElementById("water-regulary");
let waterDaily = document.getElementById("water-daily");
let waterRarely = document.getElementById("water-rarely");
let toxicityTrue = document.getElementById("toxicity-true");
let toxicityFalse = document.getElementById("toxicity-false");
var selectedValueSun;
var selectedValueWater;
var selectedValuePet;

function selectOffSun(){
    selectWater.value = "Select";
    selectPet.value = "Select";
}
function selectOffWater(){
    selectSun.value = "Select";
    selectPet.value = "Select";
}
function selectOffPet(){
    selectSun.value = "Select";
    selectWater.value = "Select";
}

function getSelectValueSun(){
    selectedValueSun = selectSun.value;
}
function getSelectValueWater(){
    selectedValueWater = selectWater.value;
}
function getSelectValuePet(){
    selectedValuePet = selectPet.value;
}


function changeAllDisplayNone(){
        toxicityTrue.style.display = "none";
        toxicityFalse.style.display = "none";
        notFound.style.display = "none"
        sunHigh.style.display = "none"
        sunLow.style.display = "none"
        sunNo.style.display = "none";
        waterDaily.style.display = "none"
        waterRegulary.style.display = "none"
        waterRarely.style.display = "none"
}


function changeDisplaySun(){
    if(selectedValueSun == "No"){
        changeAllDisplayNone()
        sunNo.style.display = "block";
    }else if(selectedValueSun == "Low"){
        changeAllDisplayNone()
        sunLow.style.display = "block"
    }else if(selectedValueSun == "High"){
        changeAllDisplayNone()
        sunHigh.style.display = "block"
    }else{
        changeAllDisplayNone()
        notFound.style.display = "block";
    }
}

function changeDisplayWater(){
    if(selectedValueWater == "Regularly"){
        changeAllDisplayNone()
        waterRegulary.style.display = "block"
    }else if(selectedValueWater == "Daily"){
        changeAllDisplayNone()
        waterDaily.style.display = "block"
    }else if (selectedValueWater == "Rarely"){
        changeAllDisplayNone()
        waterRarely.style.display = "block"
    }else{
        changeAllDisplayNone()
        notFound.style.display = "block"
    }
}

function chageDisplayPet(){
    if(selectedValuePet == "True"){
        changeAllDisplayNone()
        toxicityTrue.style.display = "block";
    }else if(selectedValuePet == "False"){
        changeAllDisplayNone()
        toxicityFalse.style.display = "block";
    }else{
        changeAllDisplayNone()
        notFound.style.display = "block"
    }
}
