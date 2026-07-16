The component library is a collection of self-contained modules representing major website elements. Components may include complete sections, structural elements, or interactive functionality.

Initial component categories include:
- Hero sections
- Navigation bars
- Headers
- Footers
- Interactive elements and menus

Each component:

- Must contain all files required for its operation.
- Must not rely on external dependencies, frameworks, libraries, or hosted assets.
- Must use standardised class naming conventions.
- Must use framework-defined variables for spacing, colour, typography, and radii.
- Must have a unique numerical ID based on its category.
- Must include placeholder assets where custom media is required.

Component IDs use a three-digit numerical format:
- The first digit identifies the component category.
- The final two digits identify the component within that category.

Example:
- 1xx = Hero sections
- 2xx = Navigation
- 3xx = Footers

Each component must use the following structure:

components/

/category/

/componentID/

├── component.html
├── style.css
├── manifest.json
└── assets/

Every component will have a manifest.json file to allow for easy browsing and conglomeration of components in the Python backend, as well as basic filtering in the UI.

The manifest structure will be as follows (subject to change):

{
    "id": "xxx",

    "name": "[Component Name]",

    "category": "relevant_name",

    "description": "description_of_component",

    "tags": [
        "help",
        "categorise",
        "component"
    ],

    "version": "version_number_x.x"
}