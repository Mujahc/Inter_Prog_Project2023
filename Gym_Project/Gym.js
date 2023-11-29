document.addEventListener('DOMContentLoaded', function () {
    // Select buttons with class "signUpButton" and attach click event
    var signUpButtons = document.querySelectorAll('.signUpButton');
    signUpButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            window.location.href = 'SignUp.html';
        });
    });

    // Select buttons with class "logInButton" and attach click event
    var logInButtons = document.querySelectorAll('.logInButton');
    logInButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            window.location.href = 'Login.html';
        });
    });

    // Select the button with class "seeDealsButton" and attach click event
    var joinNowButton = document.querySelector('.seeDealsButton');
    joinNowButton.addEventListener('click', function () {
        window.location.href = 'Home.html';
    });
});

function openYouTubeVideo(videoId) {
    var videoUrl = 'https://www.youtube.com/watch?v=' + videoId;

    window.open(videoUrl, '_blank');
}