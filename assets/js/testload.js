$(document).ready(function () {
    var graph = $.get('assets/techtree.gv', function(data) {
        $("#div_graph").append(Viz(data, {format:"svg", engine:"dot"}));
    }, 'text');
});