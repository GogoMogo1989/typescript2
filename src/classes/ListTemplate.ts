import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {

    container: HTMLUListElement;
   
    constructor(a: HTMLUListElement){
        this.container = a;
    }

    render(item: HasFormatter, heading: string, pos: 'start' | 'end'){
        const li = document.createElement('li');
        const h4 = document.createElement('h4');

        h4.innerText = heading;
        li.append(h4)

        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(h4);

        if(pos === 'start'){
            this.container.prepend(li)
        }else{
            this.container.append(li)
        }

    }
}