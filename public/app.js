import { Payment } from "./classes/payment.js";
import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
/* let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne =  new Invocie("yoshi", "web work", 20)
docTwo = new Payment("mario", "plubing work", 200)

const invOne  = new Invocie("mairo", "work on the  mario website", 250 )
const invTwo  = new Invocie("Luigi", "work on the  luigi website", 2550 )

let invoices: Invocie[] = [];
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format())
}) */
const form = document.querySelector(".new-item-form");
const type = document.querySelector('#type');
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "start");
    console.log(doc);
});
