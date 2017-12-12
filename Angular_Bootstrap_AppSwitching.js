function initAngular(app_name){
    var _el = "[data-application='"+app_name+"']";
    var dom_el = $(_el).get(0);
    console.log(dom_el);
    angular.element(function() {
        angular.bootstrap(dom_el, [app_name]);
    });
}
