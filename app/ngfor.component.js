// Mosh
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
    var NgForComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NgForComponent = (function () {
                function NgForComponent() {
                    //schools = ['MakerSquare', 'University of Houston',
                    //			'Baylor Law School', 'University of New Mexico'];
                    this.schools = [
                        {
                            name: 'MakerSquare',
                            subject: 'Software Engineering',
                            year: '2016'
                        },
                        {
                            name: 'University of Houston',
                            subject: 'Petroleum Engineering',
                            year: '2009'
                        },
                        {
                            name: 'Baylor Law School',
                            subject: 'Law',
                            year: '2002'
                        },
                        {
                            name: 'University of New Mexico',
                            subject: 'Chemical Engineering',
                            year: '2000'
                        }
                    ];
                }
                NgForComponent = __decorate([
                    core_1.Component({
                        selector: 'ngfor',
                        styleUrls: ['app/ngfor.component.css'],
                        template: "\n\t\t<hr class = \"style1\">\n\t\t<h3>Schools</h3>\n\t\t<ul>\n\t\t\t<li *ngFor = \"#school of schools, #i = index\">\n\t\t\t\t{{ i + 1}} - {{ school.name }}: {{ school.subject }}\n\t\t\t</li>\n\t\t</ul>\n\t",
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgForComponent);
                return NgForComponent;
            }());
            exports_1("NgForComponent", NgForComponent);
        }
    }
});
//# sourceMappingURL=ngfor.component.js.map