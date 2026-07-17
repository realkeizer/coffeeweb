The font library will consist both of local font files and of custom css files to style each. The purpose of this styling is to ensure cross-compatibility with components that require specific spacing to look as intended on a webpage at all viewport sizes.

The goal of these stylesheets is not mathematical precision, (which is virtually impossible) but optical consistency. So long as the fonts do not appear to be spaced vastly differently, they are considered successfully prepared. This means that each component will need to be designed with the "worst offender" in mind, and theoretically all other fonts should work.

The files will be structured within each project as follows: "assets/fonts/fonts.css font-name/font-name.woff2 font-name.css"

All projects will use generic class names like "header" and "body" in order to allow seamless imports of new fonts without manual changes to the HTML. Each of the fonts' specific stylesheets include separate styles for both for simplicity. For example, if you have chosen Poppins for your headers and Inter for your body, you will copy over the .header styles from popns.css and the body styles from inter.css. Doing this will automatically switch the fonts project-wide with ease.

-> fonts.css will import the font files and contain their corresponding styles (based on header/body preference per font) before being imported to main.css. 
-> .woff2 has been chosen* for its superior compression and performance benefits. 
-> The stylesheet will format the font against a standardised "ideal" that works for most/all components.

*Not all files have been converted to woff2 yet, but will be as and when they are worked on.

As of the beginning of this project, all font-specific CSS files have been assigned the following styles as control variables:

/* Body Styles */
@font-face {
    font-family: "fontname";
    font-style: normal;
    src: url("fontname/fontfile.woff2");
    font-display: swap;
}
.body {
    font-family: "fontname", sans-serif;
}
.body p {
    font-size: 18px;
}
.body a {
    font-size: 18px;
}
/* Header Styles */
@font-face {
    font-family: "fontname";
    font-style: normal;
    src: url("fontname/fontfile.woff2");
    font-display: swap;
}
.header {
    font-family: "fontname", sans-serif;
}
.header h1 {
    font-size: 78px;
}
.header h2 {
    font-size: 42px;
}
.header h3 {
    font-size: 24px;
}

For the obvious reason of static font-sizes being a big "no-no", these will be changed to clamp() variables once an ideal size has been determined. The bigger issue to solve is line-height and spacing, so that's priority number one.