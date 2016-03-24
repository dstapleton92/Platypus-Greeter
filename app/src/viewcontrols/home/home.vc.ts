import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        name: ''
    };
    
    greet(): void {
        alert(`Greetings, ${this.context.name}!`);
        // Line above is the same as:
        // alert('Greetings, ' + this.context.name + '!');
    }
}

register.viewControl('home-vc', HomeViewControl);
