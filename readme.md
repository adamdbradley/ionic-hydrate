# Ionic Hydrate

Just a quick demo for tracing purposes.

- __no-prerender.html__: Requires JS to be rendered.
- __prerender-static.html__: Only prerendered HTML/CSS, but does not request any JS.
- __prerender-hydrated.html__: Prerendered HTML/CSS, then uses JS to clientside hydrate.

### Other notes:

- ion-button also uses animations, gestures and other shared utilities.
- Utilities are dynamically imported and should not apart of the critcal path.


[adamdbradley](https://twitter.com/adamdbradley)
