The Playground is going to be a sandbox website that allows for quick and easy testing of fonts, spacing, components, and colours. All of these elements will have their own .html files (and specifications).

Currently, I only have colours.html finished (but no navbar, since there's only one page currently). It works very well, I'm very proud of it! Other than the theme toggle, I was able to get through the whole page without hiccups or frantic Google searches, which was a nice small win.

The Playground is intended to be set up in exactly the same way that a generic project would. It has an assets folder for fonts, icons, and images; a css folder for base files, components, and page-specific styles (as well as a main.css file); and a currently empty javascript folder. There will be an index.html in the future, but for now this is not necessary.

The specifications for each test page are as follows:

[COLOURS]
The colours page needs to adequately showcase every colour chosen for the project's palette in both light and dark mode, as well as demonstrating legibility and UX between themes and with various combinations. These colours will be assigned via the colours.css :root{} declaration, imported and used project-wide.

The three "identity" colours (primary, secondary, and accent) are expected to have "hover" modes as these are the most common colours used for CTA and buttons. 

The page must transition between themes smoothly, and measures must be taken to ensure that all text is visible in both themes (for example, the var(--bgd) square needs its text to remain var(--bgl) even when light mode is active, vice versa for the var(--bgl) square).

(Theme switching must also affect the navbar when it is implemented, which may require a redesign. In its current state, however, it works perfectly fine.)

[COMPONENTS]
This page must serve as an adequate representation of how a component would behave when imported into a project. Criteria include (but are not limited to):
- Colours and fonts must be applied seamlessly, and theme switching functionality must not break
- Neutral styling that does not impede component layout or display
- Overflow and resizing viewports must be handled gracefully and without breakage or loss of functionality

[SPACING]
This page will really just be designed once and never touched again. All it serves is to display the padding and spacing variables using bordered boxes labelled with the variable name appropriate to their spacing. Criteria:
- Must display different column- and row-gaps
- Must display spacing between component content and components themselves
- Must not use many hard-coded spacing values, only standardised variables are allowed
- Must be adequate to serve as the foundation of all components developed in the future

[FONTS]
This page will be used to style new fonts against a pre-determined gold-standard for size, lineheight, and letter-spacing. Pretty straightforward, what it says on the tin.