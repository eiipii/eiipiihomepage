$(document).ready(function () {
    var graph = $.get('assets/testerLearnTree.gv', function(data) {
        $("#div_graph").append(Viz(data, {format:"svg", engine:"dot"}));
    }, 'text');
});