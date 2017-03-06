
(function($) {
    $(document).ready(function () {

        var menuButton = $("i");
        var menu = $("nav");

        menuButton.on("click", function () {

            menu.slideToggle(500);


            // Sposób dłuższy:

            // if(menu.is(":hidden")) {
            //     menu.slideDown(500);
            // } else {
            //     menu.slideUp(500);
            // }

        });
    })

})(jQuery);

