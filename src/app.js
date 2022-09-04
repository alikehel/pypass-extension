/******************************* Fake Data *******************************/

let mails = [
    ["icon1", 0, "mail1@test.com"],
    ["icon2", 1, "mail2@test.com"],
    ["icon2", 2, "mail3@test.com"],
    ["icon1", 3, "mail4@test.com"],
    ["icon2", 4, "mail5@test.com"],
    ["icon2", 5, "mail6@test.com"],
    ["icon1", 6, "mail7@test.com"],
    ["icon2", 7, "mail8@test.com"],
    ["icon2", 8, "mail9@test.com"],
];

let passwords = [
    [0, "mail1password"],
    [1, "mail2password"],
    [2, "mail3password"],
    [3, "mail4password"],
    [4, "mail5password"],
    [5, "mail6password"],
    [6, "mail7password"],
    [7, "mail8password"],
    [8, "mail9password"],
];

/******************************* Table Generator Functions *******************************/

let table = document.querySelector("#table");

mails.forEach((mail) => {
    let tr = document.createElement("tr");

    let tdIcon = document.createElement("td");
    let tdMail = document.createElement("td");
    let tdGetPass = document.createElement("td");
    let tdGetQR = document.createElement("td");

    tdIcon.appendChild(document.createTextNode(mail[0]));
    tdMail.appendChild(document.createTextNode(mail[2]));

    let buttonGetPass = document.createElement("button");
    let buttonGetQR = document.createElement("button");

    buttonGetPass.setAttribute("data-id", mail[1]);
    buttonGetQR.setAttribute("data-id", mail[1]);

    buttonGetPass.append(document.createTextNode("Get Pass"));
    buttonGetQR.append(document.createTextNode("Get QR"));

    buttonGetPass.addEventListener("click", (e) => {
        // console.log(e);
        let id = e.target.getAttribute("data-id");
        console.log(id);
        // alert("password");
        getPassword(id);
    });

    tdGetPass.append(buttonGetPass);
    tdGetQR.append(buttonGetQR);

    // tdGetPass.innerHTML = `<button data-id='${mail[1]}>Get Pass</button>`;
    // tdGetQR.innerHTML = `<button data-id='${mail[1]}'>Get QR</button>`;

    tr.appendChild(tdIcon);
    tr.appendChild(tdMail);
    tr.appendChild(tdGetPass);
    tr.appendChild(tdGetQR);

    table.appendChild(tr);

    console.log(mail);
});

/******************************* Utility Functions *******************************/

let getPassword = (id) => {
    let mail = passwords.find((mail) => {
        // console.log(mail);
        return mail[0] == id;
    });
    alert(mail[1]);
};

/******************************* Style Utility Functions *******************************/

let tabs = document.querySelectorAll(".tab");
let sections = document.querySelectorAll(".section");

tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        let activeTab = document.querySelector(".active-tab");
        activeTab.classList.remove("active-tab");
        tab.classList.add("active-tab");

        let activeSection = document.querySelector(".active-section");
        activeSection.classList.remove("active-section");
        let currentTabSectionID = e.currentTarget.getAttribute("data-section");
        let currentSection = document.querySelector(`#${currentTabSectionID}`);
        currentSection.classList.add("active-section");
    });
});
