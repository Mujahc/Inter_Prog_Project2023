// Gym.js
document.addEventListener('DOMContentLoaded', function () {
    // Select buttons with class "signUpButton"
    var signUpButtons = document.querySelectorAll('.signUpButton');
    signUpButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            window.location.href = 'SignUp.html';
        });
    });

    // Select buttons with class "logInButton"
    var logInButtons = document.querySelectorAll('.logInButton');
    logInButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            window.location.href = 'Login.html';
            simulateSuccessfulLogin(); // Call the function to simulate a successful login
        });
    });

    // Select the button with class "seeDealsButton"
    var joinNowButton = document.querySelector('.seeDealsButton');
    joinNowButton.addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    var joinNowButton = document.querySelector('.formButton');
    joinNowButton.addEventListener('click', function () {
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 2000);
    });
});

// Workout
function openYouTubeVideo(videoId) {
    var videoUrl = 'https://www.youtube.com/watch?v=' + videoId;

    window.open(videoUrl, '_blank');
}

// Custom Dialog
function showSuccessDialog(message) {
    const dialog = document.createElement('div');
    dialog.classList.add('success-dialog');
    dialog.innerHTML = `<p>${message}</p>`;
    document.body.appendChild(dialog);

    setTimeout(() => {
        dialog.remove();
    }, 2000); // Remove the dialog after 3 seconds
}

// Simulate a successful signup
document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.getElementById('signupForm');

    signUpForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const newUsername = document.getElementById('newUsername').value;

        showSuccessDialog(`Successful Sign Up. Welcome, ${newUsername}!`);
    });
});

// Simulate a successful login
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;

        showSuccessDialog(`Successful Log In. Have a Good Workout, ${username}!`);
    });
});
// function simulateSuccessfulLogin() {
//     const username = document.getElementById('username').value;
//     alert(`Successful Log In. Have a Good Workout, ${username}!`);
// }

// Deals
document.addEventListener("DOMContentLoaded", function () {
    const exclusiveDiscountsDiv = document.querySelector('.exclusiveDiscountsDIV');
    const specialOffersDiv = document.querySelector('.specialOffersDIV');

    exclusiveDiscountsDiv.addEventListener('click', function () {
        // Make an AJAX request to load ad data from deals.json
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'deals.json', true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                const adImageSrc = response.ad.imageSrc;
                const adAltText = response.ad.altText;
                const adLink = response.ad.link;

                // Update specialOffersDiv with the ad
                specialOffersDiv.innerHTML = `
                    <a href="${adLink}" target="_blank">
                        <img src="${adImageSrc}" alt="${adAltText}" class="adImage">
                    </a>
                `;
            } else {
                console.error('Failed to load deals.json. Status:', xhr.status);
            }
        };

        xhr.send();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the rank div elements
    var ironRankDiv = document.getElementById('iron-rank_DIV');
    var bronzeRankDiv = document.getElementById('bronze-rank_DIV');
    var silverRankDiv = document.getElementById('silver-rank_DIV');
    var goldRankDiv = document.getElementById('gold-rank_DIV');

    // Add click event listeners to each rank div
    ironRankDiv.addEventListener('click', function () {
        calculateAndDisplayFee('Iron', 10);
    });

    bronzeRankDiv.addEventListener('click', function () {
        calculateAndDisplayFee('Bronze', 15);
    });

    silverRankDiv.addEventListener('click', function () {
        calculateAndDisplayFee('Silver', 20);
    });

    goldRankDiv.addEventListener('click', function () {
        calculateAndDisplayFee('Gold', 25);
    });

    // Function to calculate and display the fee
    function calculateAndDisplayFee(rank, fee) {
        alert('Membership Fee for ' + rank + ' Rank: $' + fee);
    }

    var membershipForm = document.getElementById('membership-form');
    if (membershipForm) {
        membershipForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form from submitting
        });
    }
});
