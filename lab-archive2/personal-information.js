getRandomNumber = (minVal, maxVal) => Math.round(minVal + (Math.random() * (maxVal - minVal)));
generatePhoneNumber = () => `${getRandomNumber(100, 999)}-${getRandomNumber(100, 999)}-${getRandomNumber(100, 999)}`


function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const results = [];
    for (let i = 0; i < length; i++) {
        results.push(characters.charAt(Math.floor(Math.random() * characters.length)));
    }
    return results.join("");
}

generateRandomEmail = () => `${getRandomString(getRandomNumber(3, 12))}@${getRandomString(getRandomNumber(2, 6))}.com`


let numberOfEmailGenerations = 0;
let numberOfPhoneNumberGenerations = 0;

function setEventListeners() {

    document.getElementById("firstNameInput").addEventListener('input', (event) => {
        const value = event.target.value
        if (value === "Bartek") {
            document.writeln(`
            <div style='text-align: center; padding: 50px;'>
                <h1 style = 'color: red' > We do not like  you Bartek !!! </h1>
                <form action="log-in.html">
                    <input type="submit" value="Return to log in page" />
                </form>
            </div> 
            `)
            document.body.style.backgroundImage = 'url("https://c1.wallpaperflare.com/preview/85/553/267/stars-background-blue-photoshop.jpg")'
        }
    });

    document.getElementById("emailInput").addEventListener('input', (event) => {
            const value = event.target.value
            if (value === 'random') {
                event.target.value = generateRandomEmail()
                numberOfEmailGenerations++
                console.log(`Number of email generations: ${numberOfEmailGenerations}`)
            }
        }
    );

    document.getElementById("phoneNumberInput").addEventListener('input', (event) => {
            const value = event.target.value
            if (parseInt(value) === 112) {
                number = Math.random()
                alert("Why do you want to be a police officer??")
            } else if (value === 'random') {
                event.target.value = generatePhoneNumber();
                numberOfPhoneNumberGenerations++
                console.log(`Number of phone number generations: ${numberOfPhoneNumberGenerations}`)
            }
        }
    );

}


