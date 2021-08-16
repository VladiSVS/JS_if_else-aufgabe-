function checkAirQuality() {
    let rangeResult = document.getElementById("range").value
    document.getElementById("airResult").innerHTML = "AQI: " + rangeResult
    if (rangeResult < 50) {
        document.body.style.background = "green"
        document.getElementById("textResult").innerHTML = 
        "Level of health concern: Good" + "<br>" +  "Level of health effect: Little or no risk"
    } else if (rangeResult > 50 && rangeResult <= 100) {
        document.body.style.background = "gold"
        document.getElementById("textResult").innerHTML = 
        "Level of health concern: Moderate" + "<br>" +  "Level of health effect: Acceptable quality"
    } else if (rangeResult > 100 && rangeResult <= 150) {
        document.body.style.background = "orange"
        document.getElementById("textResult").innerHTML = 
        "Level of health concern: Unhealthy for sensitive groups" + "<br>" +  "Level of health effect: Generable publics not likely affected"
    }
}