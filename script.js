document.addEventListener("DOMContentLoaded", function () {
    const redirectButton = document.getElementById("redirectButton");
    const websiteLinkInput = document.getElementById("websiteLink");

    redirectButton.addEventListener("click", function () {
        const url = websiteLinkInput.value;
        if (url) {
            window.location.href = url;
        } else {
            alert("Please enter a valid URL");
        }
    });
});
