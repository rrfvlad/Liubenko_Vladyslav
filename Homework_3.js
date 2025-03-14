// Task #1

let name = document.querySelector('input[name="fio"]').value;
let phoneNumber = document.querySelector('input[name="phone"]').value;
let dateOfBirth = document.querySelector('input[name="birthday"]').value;
let emailAddress = document.querySelector('input[name="email"]').value;


console.log(name, phoneNumber, dateOfBirth, emailAddress);


// Task #2

function addStyle() {
    // Changing style <h2>
    document.querySelector('.header').style.cssText = "color: red; text-decoration: underline;";

    // Changing style <p>
    document.getElementById('data').style.cssText = "color: brown; font-size: 18px; font-family: 'Comic Sans MS';";

    // Changing style <span>
    document.querySelector('span').style.cssText = "color: green; font-style: italic;";

    // Hiding <div>
    document.querySelector('div').style.display = "none";
}

// Adding an event handler to the button
document.getElementById('btn').addEventListener('click', addStyle);


// Task #3

