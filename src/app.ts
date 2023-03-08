import {Invocie} from "./classes/invoice.js";

const invOne  = new Invocie("mairo", "work on the  mario website", 250 )
const invTwo  = new Invocie("Luigi", "work on the  luigi website", 2550 )

let invoices: Invocie[] = [];
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format())
})

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom")  as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement
  
form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    )
})