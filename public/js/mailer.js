// Dependencies
// =============================================================
var API = {
    getemail: function (tareas) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "api/send",
            data: JSON.stringify(tareas),
        });
    }
};



var mailer = function () {
    console.log("mailing");
    console.log("we are in handleform submit")
    var tareas = {
        assignedUser: $("#issueinput1").val().trim(),
        assignedBy: username,
        task: $("#issueinput8").val().trim(),
        taskStatus: "assigned",
        deadline: $("#issueinput3").val().trim() + " " + $("#issueinput4").val().trim(),
        progress: $("#issueinput5").val().trim(),
        assignedtoMail: $("#issueinput0").val().trim()
    };

    if (!(tareas.assignedUser && tareas.assignedBy && tareas.task && tareas.deadline && tareas.progress && tareas.assignedtoMail)) {
        alert("You must enter all fields");
        return;
    }
    API.getemail(tareas).then(function () {
        console.log("we sent the info to database: " + tareas);
    });
};

$("#submitTask").on("click", mailer);