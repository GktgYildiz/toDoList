//jshint esversion:6
exports.getDate = function() {
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }

    return today.toLocaleDateString("en-US", options);

}

exports.getDay = getDay; 

function getDay() {
    var today = new Date();

    var options = {
        weekday: "long",
     
    }

    return today.toLocaleDateString("en-US", options);
}
