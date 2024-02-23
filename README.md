- [extended-mui](#extended-mui)
  - [Available Scripts](#available-scripts)
  - [TODO](#todo)

# extended-mui

This is a package which extends the Material UI library by adding functionality  to existing components and integrates components from other libraries into the MUI style.

## Available Scripts

- `npm run dev`
  - Runs the demo site in dev mode.
- `npm run build`
  - Builds the demo site.
`npm run build:library`
  - Builds the package that is published to NPM.
- `npm run prettier`
  - Changes the format of your code to fit with the style guides set in `./.prettierrc.cjs`.
- `npm run publish:<patch|minor|major>`
  - Publishes the package to NPM (requires `npm login` to be executed first) and depending on what option is used, updates the version number.
    - `patch` changes 0.0.X
    - `minor` changes 0.X
    - `major` changes X
  - See the [NPM docs](https://docs.npmjs.com/about-semantic-versioning) for advice on which to use.
- `npm run docs`
  - Generates documentation from the [TypeDoc](https://typedoc.org/guides/doccomments/) comments, within the code in the `./lib` directory.
  - A documentation site can be viewed by opening `./docs/site/index.html`.
  - Markdown documentation can be viewed at `./docs/markdown`.
  - Configuration for this tool can be changed within the `./typedoc.config.json` file.

## TODO

- Add links into this README
