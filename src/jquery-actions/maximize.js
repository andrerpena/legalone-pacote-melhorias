var maximizedHeader;

var documentBodyDefaultCss = {
    padding: "20px 10px 30px;",
    'background-color': 'inherit',
    position: 'static',
    "box-sizing": "content-box",
    width: 'auto',
    top: 'auto',
    left: 'auto',
    "min-height": "auto"
};

var documentBodyExpandedCss = {
    padding: '20px 20px 40px',
    'background-color': 'white',
    position: 'absolute',
    "box-sizing": 'border-box',
    "min-height": "1080px"
};

var documentBodyExpandedCssAnimation = {
    width: '100%',
    top: 0,
    left: 0
};

function minimize($) {
    $(".document-body").css(documentBodyDefaultCss);
    maximizedHeader.remove();
    maximizedHeader = undefined;
}

function maximize($) {
    maximizedHeader = $("<div class=\"maximized-header\"><h3>" + $(".document > .document-header .text").text() + "</h3>");
    $(".document-body").prepend(maximizedHeader);
    $(".document-body").css(documentBodyExpandedCss).animate(documentBodyExpandedCssAnimation, 200);

    var compressIcon = $("<i class=\"fa fa-compress compress-icon\" aria-hidden=\"true\"></i>");
    $("h3", maximizedHeader).append(compressIcon);

    compressIcon.click(function () {
        minimize($)
    });
}

export default function setupMaximize($) {
    var documentHeader = $(".document > .document-header .text");
    if (documentHeader.length) {
        var expandIcon = $("<i class=\"fa fa-expand expand-icon\" aria-hidden=\"true\"></i>");
        expandIcon.click(function () {
            maximize($);
        });

        if ($("h3", documentHeader).length)
            $("h3", documentHeader).append(expandIcon);
        else
            documentHeader.append(expandIcon);

        $(document).keydown(function (e) {
            if (e.ctrlKey && e.keyCode == 77) {
                if (maximizedHeader) {
                    minimize($);
                }
                else {
                    maximize($);
                }
            }

            if(e.keyCode == 27 && maximizedHeader)
                minimize($);
        });
    }
}