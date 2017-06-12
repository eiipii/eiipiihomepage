$(document).ready(function () {
    function qs(key) {
        key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
        var match = location.search.match(new RegExp("[?&]" + key + "=([^&]+)(&|$)"));
        var team = match && decodeURIComponent(match[1].replace(/\+/g, " "));
        if (Math.floor(team) == team && $.isNumeric(team))
            return parseInt(team);
        else
            return 0;
    }
    $('#carousel-personas').carousel(qs('team'));
    // TODO - do we want to keep query in the URL? it messes reloads, but allows for easy linking to particular team member (with just copy-paste, without adding a special SHARE button or something)
    history.replaceState({}, '', 'persona.html' ); // clears query from URI - solution only for HTML5
});



