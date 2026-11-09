
function generateGreeting() {

    // Get visitor's name
    let name = document.getElementById("userName").value;

    name = name.trim();

    // Get selected greeting style
    let style = document.getElementById("greetingStyle").value;

    // Check empty name
    if (name === "") {
        alert("Please enter your name!");
        return;
    }

    // Store different greeting messages
    let greetings = {

        traditional:
        "May Goddess Lakshmi bless you with happiness and prosperity!",

        modern:
        "May your dreams turn into achievements and your future shine brightly!",

        friendly:
        "Have an amazing Diwali filled with sweets, smiles and wonderful memories!"

    };

    // Select greeting based on visitor's choice
    let message = "Happy Diwali, " + name + "! " +
                  greetings[style];

    // Display greeting
    document.getElementById("greetingMessage").textContent = message;

    // Show greeting card
    document.querySelector(".greeting-card").style.display = "block";
}

function copyGreeting() {

    // Get the generated greeting
    let message = document.getElementById("greetingMessage").textContent;

    // Check if greeting exists
    if (message === "") {
        alert("Please generate a greeting first!");
        return;
    }

    // Create a temporary text area
    let textArea = document.createElement("textarea");

    textArea.value = message;

    document.body.appendChild(textArea);

    // Select the greeting
    textArea.select();

    // Copy the greeting
    let copied = document.execCommand("copy");

    // Remove temporary text area
    document.body.removeChild(textArea);

    if (copied) {
        alert("Your Diwali greeting has been copied!");
    } else {
        alert("Please select and copy your greeting manually.");
    }
}

// INTERACTIVE FIREWORKS

function launchFirework(event) {

    const firework = document.createElement("div");

    firework.className = "interactive-firework";

    firework.style.left = event.clientX + "px";
    firework.style.top = event.clientY + "px";

    document.body.appendChild(firework);

    setTimeout(function() {
        firework.remove();
    }, 1000);
}

// Launch fireworks when the screen is clicked

document.addEventListener("click", function(event) {

    // Do not launch fireworks when clicking buttons or input fields
    if (
        event.target.tagName === "BUTTON" ||
        event.target.tagName === "INPUT" ||
        event.target.tagName === "SELECT"
    ) {
        return;
    }

    launchFirework(event);

});

/* RANGOLI CREATOR */


/* ROYAL MANDALA RANGOLI */

function createRangoli() {

    const canvas = document.getElementById("rangoliCanvas");

    const mainColor = document.getElementById("rangoliColor").value;

    canvas.innerHTML = "";

    // Colours used in the rangoli
    const colors = [
        mainColor,
        "#FFD700",
        "#FF6B6B",
        "#FF9F43",
        "#FFFFFF",
        "#C084FC"
    ];

    // Function to create one circular layer of petals
    function createPetalRing(count, radius, width, height) {

        for (let i = 0; i < count; i++) {

            const petal = document.createElement("div");

            petal.className = "royal-petal";

            petal.style.width = width + "px";
            petal.style.height = height + "px";

            petal.style.backgroundColor = colors[i % colors.length];

            petal.style.setProperty("--angle", (i * 360 / count) + "deg");

            petal.style.setProperty("--radius", radius + "px");

            canvas.appendChild(petal);
        }
    }

    // Outer flower layer
    createPetalRing(16, 112, 17, 38);

    // Middle flower layer
    createPetalRing(12, 78, 23, 48);

    // Inner flower layer
    createPetalRing(10, 43, 22, 38);

    // Decorative golden dots
    for (let i = 0; i < 24; i++) {

        const dot = document.createElement("div");

        dot.className = "royal-dot";

        dot.style.setProperty("--angle", (i * 15) + "deg");

        canvas.appendChild(dot);
    }

    // Beautiful centre
    const center = document.createElement("div");

    center.className = "rangoli-center";

    center.style.backgroundColor = mainColor;

    canvas.appendChild(center);
}

/* GREETING CARD PHOTO UPLOAD */

function previewGreetingPhoto(event) {

    const file = event.target.files[0];

    const photo = document.getElementById("greetingPhoto");

    if (!file) {
        return;
    }

    if (!file.type.startsWith("image/")) {
        alert("Please select an image file!");
        return;
    }

    const imageURL = URL.createObjectURL(file);

    photo.src = imageURL;

    photo.style.display = "block";

}

/* FLOATING GOLDEN LIGHTS */

function createFloatingLights() {

    const container = document.getElementById("floatingLights");

    for (let i = 0; i < 30; i++) {

        const light = document.createElement("div");

        light.className = "floating-light";

        light.style.left = Math.random() * 100 + "%";

        light.style.animationDelay = Math.random() * 9 + "s";

        light.style.animationDuration =
            (6 + Math.random() * 6) + "s";

        container.appendChild(light);
    }
}

createFloatingLights();
