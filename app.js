let table = document.querySelector('#table');

let mails = [
  ['icon1', 0, 'mail1@test.com'],
  ['icon2', 1, 'mail2@test.com'],
  ['icon2', 2, 'mail13@test.com'],
];

mails.forEach((mail) => {
  let tr = document.createElement('tr');
  let tdIcon = document.createElement('td');
  let tdMail = document.createElement('td');
  let tdGetPass = document.createElement('td');
  let tdGetQR = document.createElement('td');
  tdIcon.appendChild(document.createTextNode(mail[0]));
  tdMail.appendChild(document.createTextNode(mail[2]));
  tdGetPass.innerHTML = `<button data-id='${mail[1]}'>Get Pass</button>`;
  tdGetQR.innerHTML = `<button data-id='${mail[1]}'>Get QR</button>`;
  tr.appendChild(tdIcon);
  tr.appendChild(tdMail);
  tr.appendChild(tdGetPass);
  tr.appendChild(tdGetQR);
  table.appendChild(tr);
  console.log(mail);
});
