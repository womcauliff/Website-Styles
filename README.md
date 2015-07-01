#### Northland, A Church Distributed

# Website Styles

This repository contains the front-end styles for the main Northland website. While the main site is built on top of a CMS, this repo is built on top of [Middleman](https://middlemanapp.com/).

### Site Preview

The current version of this site should always be accessible at [northlandchurch.github.io/Website-Styles](http://northlandchurch.github.io/Website-Styles). Issues, mentioned below, should always be created in reference to this link.

### Project Management

Previous work on this website was done within two separate apps: Basecamp and InVision. Now that this project resides here, any and all project communication happens within "issues." Issues are found in the sidebar to the right; simply click on the circle with the exclamation point.

If you find something that needs to be pointed out, discussed, fixed, updated, etc., just make an issue and everyone should be notified.

---

### Middleman

[Middleman](http://middlemanapp.com/) is a static site builder that is built on top of Ruby.

To get the middleman application running on your local, first run `bundle install` and the begin the server with `middleman server`. The local instance should then be available at `http://localhost:4567`, unless your settings are different.

#### Source Code

The source code is available in the `source` folder. It is build with Haml (for HTML), Sass (for CSS), and vanilla javascript. Any changes you make here should be reflected while the server is running.

#### Building

The source code is compiled into the `build` folder whenever you run `middleman build`. This single action creates the entire static website. More details for this specific project will be available soon.

#### Deploying

Because this site is hosted with GitHub Pages, updating the production server is quite easy.

After you have made the appropriate changes, make sure you have properly built the static site by following the "building" directions above.

After you have built the static site, simply run `middleman deploy` to update the website. It might take a few minutes for the updates to show (also, make sure your cache isn't causing problems).
