(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['acms-switch'] = {}),global._angular_core,global._angular_common));
}(this, (function (exports,_angular_core,_angular_common) { 'use strict';

var AcmsSwitchComponent = (function () {
    function AcmsSwitchComponent() {
        this.switchEvent = new _angular_core.EventEmitter();
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    AcmsSwitchComponent.prototype.change = function (evt) {
        this.switchEvent.emit({ id: this.id, state: evt.target.checked });
    };
    return AcmsSwitchComponent;
}());
AcmsSwitchComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'acms-switch',
                template: "<label class=\"switch\"> <input type=\"checkbox\" (click)=\"change($event)\"> <span class=\"slider\"></span> </label> ",
                styles: [".switch { position: relative; display: inline-block; width: 35px; height: 20px; } .switch input {display:none;} .slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #ccc; -webkit-transition: .4s; transition: .4s; border-radius: 34px; border: solid #B5B5B5 1px; } .slider:before { position: absolute; content: \"\"; height: 15px; width: 15px; left: 2px; top: 1px; background-color: white; -webkit-transition: .4s; transition: .3s; border-radius: 50%; border: none; /*border: solid #B5B5B5 2px;*/ } input:checked + .slider { background-color: #FDA137; } input:focus + .slider { box-shadow: 0 0 1px #FDA137; } input:checked + .slider:before { -webkit-transform: translateX(14px); -ms-transform: translateX(14px); transform: translateX(14px); } "]
            },] },
];
/**
 * @nocollapse
 */
AcmsSwitchComponent.ctorParameters = function () { return []; };
AcmsSwitchComponent.propDecorators = {
    'id': [{ type: _angular_core.Input },],
    'switchEvent': [{ type: _angular_core.Output },],
};

var AcmsSwitchModule = (function () {
    function AcmsSwitchModule() {
    }
    /**
     * @return {?}
     */
    AcmsSwitchModule.forRoot = function () {
        return {
            ngModule: AcmsSwitchModule,
            providers: []
        };
    };
    return AcmsSwitchModule;
}());
AcmsSwitchModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _angular_common.CommonModule
                ],
                declarations: [
                    AcmsSwitchComponent
                ],
                exports: [
                    AcmsSwitchComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
AcmsSwitchModule.ctorParameters = function () { return []; };

exports.AcmsSwitchModule = AcmsSwitchModule;
exports.AcmsSwitchComponent = AcmsSwitchComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
