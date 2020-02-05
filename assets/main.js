// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDjpZey_MDPUMu3YnaRXU_9_bfZVfbiVAc",
    authDomain: "train-scheduler-857b5.firebaseapp.com",
    databaseURL: "https://train-scheduler-857b5.firebaseio.com",
    projectId: "train-scheduler-857b5",
    storageBucket: "train-scheduler-857b5.appspot.com",
    messagingSenderId: "346017035702",
    appId: "1:346017035702:web:89863ba8ba3c862856fd17"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function clearTable() {
    $("#trainName").val(" ")
    $("#trainDest").val(" ")
    $("#trainTime").val(" ")
    $("#trainFreq").val(" ")
};

$("#addTrain").on("click", function () {
    event.preventDefault()
    var name = $("#trainName").val().trim();
    var destination = $("#trainDest").val().trim();
    var time = $("#trainTime").val().trim();
    var frequency = $("#trainFreq").val().trim();

    database.ref().push({
        name: name,
        destination: destination,
        time: time,
        frequency: frequency
    });

    clearTable();
});

database.ref().on("child_added", function (childSnapshot) {

    var firstTime = childSnapshot.val().time
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    var timeDiff = moment().diff(moment(firstTimeConverted), "minutes");
    var arrival = childSnapshot.val().frequency;
    var remainder = timeDiff % arrival;
    var minsTil = arrival - remainder;
    var next = moment().add(minsTil, "minutes");

    $("tbody").append("<tr><td>" + childSnapshot.val().name +
        "</td><td>" + childSnapshot.val().destination +
        "</td><td>" + childSnapshot.val().frequency +
        "</td><td>" + next.format("HH:mm") +
        "</td><td>" + minsTil +
        "</td></tr>"
    );
});