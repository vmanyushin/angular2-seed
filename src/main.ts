/**
 * Created by swop on 25.07.2016.
 */
import { bootstrap } from "@angular/platform-browser-dynamic";
import { Component } from "@angular/core";

@Component({
    selector: 'hello-word',
    template: `
        <div>
            Hello World
        </div>
    `
})

class HelloWorld {

}

bootstrap(HelloWorld);

console.log('loading main.ts');