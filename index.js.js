const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const formCurr = document.querySelector("#form select");
const ToCurr = document.querySelector("#To select");

for (let select of dropdown) {
    for (currCode in countryList) {
        let newoption = document.createElement("option");
        newoption.innerText = currCode;
        newoption.value = currCode;
        if (select.name === "form1" && currCode === "USD") {
            newoption.selected = "selected";
        } else if (select.name === "To1" && currCode === "INR") {
            newoption.selected = "selected";
        }
        select.append(newoption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
};

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;
    if (amtval === "" || amtval < 1) {
        amtval = 1;
        amount.value = 1;
    }
    const URL = `${BASE_URL}/${formCurr}/${ToCurr}.json`;
    let response = await fetch(URL);
    console.log(response);
});

