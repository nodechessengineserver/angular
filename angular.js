const HEROS = [
    { id: 11, name: "Mr. Nice" },
    { id: 12, name: "Narco" },
    { id: 13, name: "Bombasto" },
    { id: 14, name: "Celeritas" },
    { id: 15, name: "Magneta" },
    { id: 16, name: "RubberMan" },
    { id: 17, name: "Dynama" },
    { id: 18, name: "Dr IQ" },
    { id: 19, name: "Magma" },
    { id: 20, name: "Tornado" }
];
class HerosComponentController {
    constructor() { }
    $onInit() {
        this.heros = HEROS;
    }
}
class HerosComponent {
    constructor() {
        this.controller = HerosComponentController;
        this.controllerAs = "$ctrl";
        this.template = `
        <ul>
        <li ng-repeat="hero in $ctrl.heros">{{ hero.name }}</li>
        </ul>
    `;
    }
}
angular
    .module("myApp", [])
    .component("heros", new HerosComponent());
angular.element(document).ready(function () {
    angular.bootstrap(document, ["myApp"]);
});
