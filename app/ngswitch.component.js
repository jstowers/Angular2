System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SwitchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // The demo app lists the best restaurants in your neighborhood.
            // SwitchComponent creates a navigation bar with two buttons 
            // that can select Map View or List View.
            // In the <div>, use the ngSwtich directive to select
            // what content will be viewed depending on the button clicked.
            // Binding the [ngSwitch] directive to the viewMode property of 
            // the component.
            // Then define seperate templates for map and list views.
            // <template> element is part of HTML5 and, by default, is hidden
            // until it's activated.  If a <template> is not active, its content
            // will not be parsed and rendered in the DOM.
            // To activate a <template>, use ngSwitchWhen
            // And if a value doesn't equal one of the values specified in the <template>,
            // you can use ngSwitchDefault
            // Just add to the template element, no need to bind to any values.
            // NOTE: Don't need to use ngSwitchDefault if you initialize the viewMode 
            // with a default value -- here, 'map' 
            // For the <li> elements, Bootstrap requires it to be active
            // Add [class.active]
            SwitchComponent = (function () {
                function SwitchComponent() {
                }
                SwitchComponent = __decorate([
                    core_1.Component({
                        selector: 'switch',
                        styleUrls: ['app/ngswitch.component.css'],
                        template: "\n\n\t\t<ul class = \"nav nav-pills\">\n\n\t\t\t<li [class.active] = \"viewMode == 'map'\"><a (click) = \"viewMode = 'map'\" >Map View</a></li>\n\t\t\t<li [class.active] = \"viewMode == 'list'\"><a (click) = \"viewMode = 'list'\">List View</a></li>\n\n\t\t</ul>\n\n\t\t<div [ngSwitch] = \"viewMode\">\n\n\t\t\t<template [ngSwitchWhen] = \"'map'\" > Map View Content  </template>\n\t\t\t<template [ngSwitchWhen] = \"'list'\"> List View Content </template>\n\n\t\t</div>\n\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SwitchComponent);
                return SwitchComponent;
            }());
            exports_1("SwitchComponent", SwitchComponent);
        }
    }
});
//# sourceMappingURL=ngswitch.component.js.map