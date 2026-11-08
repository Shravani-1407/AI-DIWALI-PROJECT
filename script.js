
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
