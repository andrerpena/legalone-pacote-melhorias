import $ from 'jquery';

var maximizedHeader = false;

/**
 * Minimizes the document
 */
function toggleMaximize($documentHeader) {

    if (!maximizedHeader) {
        // maximize
        $documentHeader.css({
            position: "absolute",
            "box-sizing": "border-box",
            top: 0,
            left: 0,
            right: 0,
            "min-height": "1080px"
        });
    }
    else {
        // minimize
        $documentHeader.css({
            position: "static",
            "box-sizing": "border-box",
            top: 0,
            left: 0,
            right: 0,
            "min-height": "1080px"
        });
    }

}

// this is specific to matters
function setupCasosButton($documentHeader, $buttonGroup) {
    $("a.casos-header-icon", $documentHeader).detach().addClass("button").appendTo($buttonGroup);
}

// setup workspaces
function setupWorkspacesButton($documentHeader, $buttonGroup) {
    $("#mesa_trabalho_icon_wrapper").detach().addClass("button").appendTo($buttonGroup);
    $("#mesa_trabalho_icon_wrapper").remove();
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
            toggleMaximize(documentHeader);

            if (e.keyCode == 27 && maximizedHeader)
                minimize();
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
        $buttonGroup.appendTo($documentHeader);

        setupCasosButton($documentHeader, $buttonGroup);
        setupWorkspacesButton($documentHeader, $buttonGroup);
        setupMaximizeButton($documentHeader, $buttonGroup);
    }
}


