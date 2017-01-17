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
    var BindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // define Component decorator and provide metadata
            BindingComponent = (function () {
                function BindingComponent() {
                    // Bootstrap button class modifiers
                    this.isActive = true;
                    this.isDisabled = true;
                    this.title = 'Binding Title';
                }
                /*
                constructor (app:AppComponent) {
                    this.title = app.title;
                }
                */
                // console.log('AppComponent', AppComponent);
                // Methods
                BindingComponent.prototype.onDivClick = function ($event) {
                    console.log('Click Event Propagation', $event.target);
                };
                ;
                // Can use methods to get access to the DOM element that 
                // raised the event.
                // $event => gives you access to the DOM event (object)
                BindingComponent.prototype.onClick = function ($event) {
                    $event.stopPropagation();
                    console.log('Clicked', $event);
                };
                ;
                // implement two-data binding manually
                BindingComponent.prototype.onChangeInput = function ($event) {
                    this.title = $event.target.value;
                    console.log('this.title =', this.title);
                };
                BindingComponent.prototype.onClearTitle = function () {
                    this.title = '';
                    console.log('this.title =', this.title);
                };
                __decorate([
                    core_1.Input('bind-title'), 
                    __metadata('design:type', Object)
                ], BindingComponent.prototype, "title", void 0);
                BindingComponent = __decorate([
                    core_1.Component({
                        selector: 'binding',
                        template: "\n\t\t<div>\n\t\t  \t<input type = \"text\" [value] = \"title\" (input) = \"onChangeInput($event)\">\n\n    \t\t<input type = \"button\"(click)=onClearTitle() value = \"Clear\" />\n\n    \t\t<div (click) = \"onDivClick($event)\">\n    \t\t\t<button\n    \t\t\t\tclass = \"btn btn-lg btn-primary\"\n    \t\t\t\t[style.backgroundColor]= \"isActive ? 'light blue' : 'gray'\"\t\n    \t\t\t\t(click) = 'onClick($event)'>Lg Submit\n\t\t\t\t</button>\n    \t\t</div>\n\t\t\t<button\n\t\t\t\tclass = \"btn btn-md btn-primary\" \n    \t\t\t[class.disabled]=\"isDisabled\">Med Disabled\n\t\t\t</button>\n\n\t\t</div>\t\n    \t",
                    }), 
                    __metadata('design:paramtypes', [])
                ], BindingComponent);
                return BindingComponent;
            }());
            exports_1("BindingComponent", BindingComponent);
        }
    }
});
//# sourceMappingURL=binding.component.js.map