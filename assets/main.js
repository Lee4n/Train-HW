$(document).ready(function () {
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
    });

    database.ref().on("child_added", function(snapshot) {
        $("tbody").append("<tr>" +
        snapshot.val().name +
        "<td>" + snapshot.val().destination +
        "<td>" + snapshot.val().time +
        "<td>" + snapshot.val().frequency
        );
    });

});