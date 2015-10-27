[![Circle CI](https://circleci.com/gh/Crowdtilt/tilt-images.svg?style=svg)](https://circleci.com/gh/Crowdtilt/tilt-images)

# tilt-icons

This is a collection of icons and images used throughout the tilt websites.


## Adding an SVG icon

1. Remove all attributes except for viewBox and add a className to the `<svg>` tag.
    const classes = classnames('tilt-icon tilt-icon-SOME_VALUE', this.props.className);

2. Remove `<desc/>` tags and comments.
3. Set `<title/>` tag text to be the name of the component (this is used in the `"renders without error"` tests).
4. Add a `tilt-icon-main` class if necessary
5. Remove all ids and unused attributes. Style attributes will live in the CSS file.
6. OPTIONAL Consolidate `transforms` into a single group
7. Create css file in app/stylesheets
8. Add the icon to app/index.js
