import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
export declare class AcmsSwitchComponent implements OnChanges {
    state: boolean;
    id: any;
    switchEvent: EventEmitter<any>;
    acmsSwitch: any;
    ngOnChanges(changes: SimpleChanges): void;
    constructor();
    change(evt: any): void;
}
