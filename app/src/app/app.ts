import {App, events, register, routing, web} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';

export default class MyApp extends App {
    constructor(router: routing.Router, config: web.IBrowserConfig) {
        super();

		config.routingType = config.STATE;

        // The pattern is the part AFTER the slash
        router.configure([
            { pattern: '', view: HomeViewControl }
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router,
    web.IBrowserConfig
]);
