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

    $("#submit").on("click", function () {
        event.preventDefault()
        var trainName = $("#trainName").val().trim();
        var trainDest = $("#trainDest").val().trim();
        var trainTime = $("#trainTime").val().trim();
        var trainFreq = $("#trainFreq").val().trim();

        database.ref().push({
            name: trainName,
            destination: trainDest,
            time: trainTime,
            frequency: trainFreq
        });
    });

    
});