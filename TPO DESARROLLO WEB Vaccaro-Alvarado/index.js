$(document).ready(function() {
    $("#theme-toggle").click(function() {
        var themeStyle = $("#theme-style");
        var currentTheme = themeStyle.attr("href");
        var darkTheme = "dark-theme.css";
        var lightTheme = "light-theme.css";

        if (currentTheme === darkTheme) {
            themeStyle.attr("href", lightTheme);
        } else {
            themeStyle.attr("href", darkTheme);
        }
    });
});