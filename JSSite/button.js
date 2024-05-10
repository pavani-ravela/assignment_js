const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

button1.addEventListener("click", () => {
    document.getElementById("text").textContent ="Button 1 is clicked";
});

button2.addEventListener("click", () => {
    document.getElementById("text").textContent ="Button 2 is clicked";
});

button3.addEventListener("click", () => {
    document.getElementById("text").textContent ="Button 3 is clicked";
});

function validatePhone() {
    const phoneRegex = /^[6-9]\d{9}$/;
    const phone = document.getElementById('phone').value;
    const error = document.getElementById('errorText');
    if (!phoneRegex.test(phone)) {
        error.style.display = 'block';
        return false;
    } else {
        error.style.display = 'none';
        return true;
    }
}
