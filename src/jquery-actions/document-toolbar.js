import $ from 'jquery';

var maximizedHeader = false;

/**
 * Minimizes the document
 */
function toggleMaximize() {

    if (!maximizedHeader) {
        // maximize
        $(".document").css({
            position: "absolute",
            "box-sizing": "border-box",
            top: 0,
            left: 0,
            right: 0,
            "min-height": "1080px"
        });
        maximizedHeader = true;
    }
    else {
        // minimize
        $(".document").css({
            position: "static",
            "box-sizing": "border-box",
            top: 0,
            left: 0,
            right: 0,
            "min-height": "1080px",
        });
        maximizedHeader = false;
    }

}

// this is specific to matters
function setupCasosButton($documentHeader, $buttonGroup) {
    $("a.casos-header-icon", $documentHeader).detach().addClass("button").appendTo($buttonGroup);
}

// setup workspaces
function setupWorkspacesButton($documentHeader, $buttonGroup) {
    if($("#estrela").length) {
        $("#mesa_trabalho_icon_wrapper").detach().addClass("button").appendTo($buttonGroup);
    } 
    else {
        $("#mesa_trabalho_icon_wrapper").remove();
    }
}

/**
 * Sets up document maximization/minimization
 * @export function
 * @param {any} $
 */
function setupMaximizeButton($documentHeader, $buttonGroup) {

    var $togleMaximizeButton = $("<button type=\"button\" class=\"button\"><i class=\"fa fa-expand expand-icon\" aria-hidden=\"true\"></i></button>");
    $togleMaximizeButton.click(function () {
        toggleMaximize();
    });
    $togleMaximizeButton.appendTo($buttonGroup);

    $(document).keydown(function (e) {
        if (e.ctrlKey && e.keyCode == 77) {
            toggleMaximize();
        }
    });
}


export default function setupHeaderToolbar() {
    var $documentHeader = $(".document > .document-header");
    if ($documentHeader.length) {
        // let's remove the clear class
        $("div.clear", $documentHeader).remove();
        // handling 
        var $buttonGroup = $("<div />").addClass("button-group");
        $buttonGroup.prependTo($documentHeader);

        setupCasosButton($documentHeader, $buttonGroup);
        setupWorkspacesButton($documentHeader, $buttonGroup);
        setupMaximizeButton($documentHeader, $buttonGroup);
    }
}


