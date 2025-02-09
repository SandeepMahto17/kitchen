document.addEventListener("DOMContentLoaded", function () {
    const requestForm = document.getElementById("request-form");
    
    requestForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const dishInput = document.getElementById("dish").value;
        if (dishInput.trim() === "") {
            alert("Please enter a dish name.");
            return;
        }
        alert(`Dish request submitted: ${dishInput}`);
        requestForm.reset();
    });
});
