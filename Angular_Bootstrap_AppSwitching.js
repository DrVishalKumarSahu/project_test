<section data-application="seg2" id="tpg-view">
<!-- <section data-ng-app="seg2" id="tpg-view"> -->
    <div class="container" data-ng-controller="TaxProGoController">
        <div id="tpg-views" data-ui-view>Fetching App</div>
    </div>
    <div data-ng-show='preloader' class="preloader"></div>
</section>



function initAngular(app_name){
    var _el = "[data-application='"+app_name+"']";
    var dom_el = $(_el).get(0);

    var rootscope = angular.element(dom_el).scope();
    if (rootscope) {
        rootscope.$destroy();
    }

    console.log(dom_el);
    angular.element(function() {
        angular.bootstrap(dom_el, [app_name]);
    });
}
