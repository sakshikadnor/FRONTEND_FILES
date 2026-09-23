
document.querySelector("form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const data = {
        study_hours: document.querySelector('input[name="study_hours"]').value,
        attendance: document.querySelector('input[name="attendance"]').value,
        previous_score: document.querySelector('input[name="previous_score"]').value,
        assignments_completed: document.querySelector('input[name="assignments_completed"]').value,
        sleep_hours: document.querySelector('input[name="sleep_hours"]').value
    };

    const response = await fetch("https://student-performance-prediction-3-shwv.onrender.com/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    document.querySelector(".result").innerHTML =
        "<h2>Result: " + result.prediction + "</h2>";
    document.queryselector("form").reset();
});
