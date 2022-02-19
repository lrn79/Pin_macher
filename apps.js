function getPin() {
    const pin = Math.round(Math.random() * 10000);

    const pinString = pin + '';

    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
};

function genaratePin() {
    const pin = getPin();

    document.getElementById('display_pin').value = pin;
}

document.getElementById('key_pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed_numbers');

    if (isNaN(number)) {
        if (number == "C") {
            calcInput.value = "";
        }
    }
    else {
        const previousnumber = calcInput.value;
        const newNumber = previousnumber + number;
        calcInput.value = newNumber;
    }

});

function varify_pin() {
    const pin = document.getElementById('display_pin').value;
    const typedNUmbers = document.getElementById('typed_numbers').value;
    const successmessage = document.getElementById('notify_success');
    const failmessage = document.getElementById('notify_fail');

    if (pin == typedNUmbers) {
        successmessage.style.display = 'block';
        failmessage.style.display = 'none';

    }
    else {
        successmessage.style.display = 'none';

        failmessage.style.display = 'block';
    }
};
const category = "pen";
const performer = category + "-teller";
console.log(performer)



























