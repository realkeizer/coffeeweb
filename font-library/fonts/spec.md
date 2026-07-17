The font library will consist both of local font files and of custom css files to style each. The purpose of this styling is to ensure cross-compatibility with components that require specific spacing to look as intended on a webpage at all viewport sizes.

The goal of these stylesheets is not mathematical precision, (which is virtually impossible) but optical consistency. So long as the fonts do not appear to be spaced vastly differently, they are considered successfully prepared. This means that each component will need to be designed with the "worst offender" in mind, and theoretically all other fonts should work.

The files will be structured within each project as follows: "assets/fonts/fonts.css font-name/font-name.woff2 font-name.css"

-> fonts.css will import the font files and their corresponding stylesheets before being imported to main.css. -> .woff2 has been chosen* for its superior compression and performance benefits. -> The stylesheet will format the font against a standardised "ideal" that works for most/all components.

*Not all files have been converted to woff2 yet, but will be as and when they are worked on.

As of the beginning of this project, all files have been assigned the following styles as control variables:

.font_name {
    font-family: "font_name", sans-serif;
}
.font_name h1 {
    font-size: 78px;
}
.font_name h2 {
    font-size: 42px;
}
.font_name h3 {
    font-size: 24px;
}
.font_name p {
    font-size: 18px;
}
For the obvious reason of static font-sizes being a big "no-no", this will be changed to clamp() variables once an ideal size has been determined. The bigger issue to solve is line-height and spacing, so that's priority number one.
