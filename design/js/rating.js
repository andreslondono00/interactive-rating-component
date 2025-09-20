function onSubmitClick() {
    const mainContainer = document.getElementById("main_container");
    const ratingContainer = document.getElementById("rating_container");
    mainContainer.style.display = "none";
    ratingContainer.style.display = "flex";

    const activeButton = document.querySelector(".rate_button.active");
    const activeValue = activeButton.textContent;

    if (activeValue) {
        const selectedRate = document.getElementById("selected_rate");
        selectedRate.innerHTML = activeValue;
    }
}

function cleanActive() {
    document.querySelectorAll(".rate_button").forEach(button => {
        button.classList.remove("active");
        button.setAttribute('aria-checked', 'false');
    });
}

const rateButtons = document.querySelectorAll(".rate_button");
rateButtons.forEach(button => {
    button.addEventListener("click", function (element) {
        const buttonActive = element.target;
        cleanActive();
        buttonActive.classList.add("active");
        buttonActive.setAttribute('aria-checked', 'true');
    })
});

