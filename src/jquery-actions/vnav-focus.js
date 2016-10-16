import $ from "jquery";

/**
 * Sets up the navigation focus 
 * 
 * @export
 * @param {any} $
 */
export default function setupNavFocus() {
    // This will focus the search bar
    var shiftPressed = false;
    $(document).on('keydown', function (e) {
        if (e.keyCode == 16) {
            if (shiftPressed) {
                var vnav_input = document.getElementById("vnav_input");
                if (vnav_input.value)
                    vnav_input.setSelectionRange(0, vnav_input.value.length);
                else
                    vnav_input.focus();

                vnav_input.style["border-width"] = "2px";
                setTimeout(function () {
                    vnav_input.style["border-width"] = "1px";
                }, 100);
            }
            else {
                shiftPressed = true;
                setTimeout(function () {
                    shiftPressed = false;
                }, 500)
            }
            ;
        }
    });
}