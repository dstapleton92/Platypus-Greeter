import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class GreetingViewControl extends BaseViewControl {
    templateString: string = require('./greeting.vc.html');

    context: any = {
        name: ''
    };
    
    navigatedTo(parameters: any, query: any) {
        // params.nameToGreet will have the value that was in the route parameter :nameToGreet (set up in the router)
        // query is not used here. But if you had at the end of the URL ?foo=bar, then query.foo would = bar.
        this.context.name = parameters.nameToGreet;
    }
}

register.viewControl('greeting-vc', GreetingViewControl);
