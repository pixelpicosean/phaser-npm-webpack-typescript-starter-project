# Phaser Starter

A folk of [Phaser NPM Webpack TypeScript Starter](https://github.com/rroylance/phaser-npm-webpack-typescript-starter-project) by [Richard Roylance](https://github.com/rroylance/),
but focus on mobile devices instead.

# Features:

- Phaser-CE 2.7.9 (npm module, no having to download the library separately...)
- TypeScript + TSLint
- 3 States (Boot, Preloader, Title) showing transition between states and where some things should be done and how a TypeScript state looks
- Google Web Font loader
- Webpack
- Separate Development and Distribution builds
- Live server (builds and reloads the browser on changes)
- No hassle asset management requiring no code, on your part, to load and parse assets
  - Assets are required and hashed via webpack, you can now guarantee that when you push an update, everyone will get the new files and not cached ones
  - Assets class created automatically allowing you to access all the assets and their frames and sprites (in the case of Atlases and Audiosprites) in a compiler validating way!

### TODO:

- Clean up generateAssetsClass.js
- Get Custom/Local Web Fonts hashed by Webpack (to avoid cache issues)
  - If anyone has experience webpacking font-face in css style web fonts and loading said fonts via webfontloader, let me know as I was having some trouble getting the font-face src to use the hashed assets.
- Multiple resolution asset loader (@2x, @3x, etc...)
- Optional Analytics integration

### Folder Structure:
- **assets/** – This is where your assets that are processed when building goes
- **assets_raw/** – This folder is NOT processed at all and is merely an organizational folder (I use it for things like my individual images that get compiled into a spritesheet, individual sounds that get compiled into an audiosprite, etc...)
- **dist/** – This is where the built game will go
- **node_modules/** – This is where the node modules required for the game will be put with npm install
- **scripts/** – This is where node scripts go
- **src/** – This is where all the games code goes
- **templates/** – This is where the html template that gets built by Webpack goes
- **.gitignore** – List of files and folders that are ignored by git
- **.npmrc** – List of some project wide npm settings
- **electron-main.js** – Entry point and application life controller for electron builds
- **package.json** – Node config for the project
- **README.md** – This is the README displayed ont he GitHub page
- **tsconfig.json** – List of some TypeScript settings
- **tslint.json** – List of some TypeScript Linting rules
- **webpack.dev.config.js** – Webpack config for the DEV build
- **webpack.dist.config.js** – Webpack config for the DIST build

# Setup:
To use this you’ll need to install a few things before you have a working copy of the project. But once you have node.js installed it only takes a few seconds and a couple commands to get going.

## 1. Install dependencies:

Navigate to the cloned repo’s directory.

Run:

```npm install```

## 2. Run the dev server:

Run to use the dev build while developing:

```npm run server:dev```

Run to use the dist build while developing

```npm run server:dist```

###### The only real reason I can think of to use the dist server is if the minification process is breaking something in your game and you need to test using the minified version, or something you excluded with the DEBUG flag shouldn't have been excluded.

This will run a server that serves your built game straight to the browser and will be built and reloaded automatically anytime a change is detected.

## Build for testing/developing/debugging:

Run:

```npm run build:dev```

This will build the game with a few caveats;
- A compile time flag, DEBUG, set to true; allowing you to include or not include certain code depending on if it's DEBUG build or not.
- The resulting game.js will not be minified

## Build for release:

Run:

```npm run build:dist```

This will build the game with a few caveats;
- The compile time flag, DEBUG, set to false; allowing you to include or not include certain code depending on if it's DEBUG build or not.
- The resulting game.min.js will be minified

## Generate Assets Class:

This project will manage your assets for you! All you need to do is drop your assets in assets/ (subdirectories do not matter)

```npm run assets```

or (if your dev GOOGLE_WEB_FONTS is different from your dist);

```npm run assets:dev```

src/assets.ts will be generated which contains sections for all your asset types (the generator is smart enough to distinguish what assets are what !) and classes for every asset, it will also generate an enum containing every frame and sprite in Atlases and AudioSprites respectively!

No need to remember keys, frames, or sprites anymore; which means no more typos resulting in asset not found errors. Just use, for example, Assets.Images.ImagesBackgroundTemplate.getName() or Assets.Audiosprites.AudiospritesSfx.Sprites.Laser1. This also allows the compiler to warn you if you are trying to use an asset that doesn't exist!

The preloader will use this class to load everything, **you don't have to do anything in code to get your assets loading and available (except for any assets you need for your loading screen...)**!

Currently supports the following (if you need a new extension or find an issue with one of your assets not exporting correctly, just let me know);

- Images:
  - bmp, gif, jpg, jpeg, png, webp
- Spritesheets:
  - bmp, gif, jpg, jpeg, png, webp
  - \[frameWidth, frameHeight, frameMax, margin, spacing\] - frameWidth & frameHeight are required.
  - Example: spritesheet.\[100, 100\].png
- Atlases:
  - bmp, gif, jpg, jpeg, png, webp
  - json (the loader figures out if it's a JSONArray or JSONHash, no need to remember or care), xml
- Audio:
  - aac, ac3, caf, flac, m4a, mp3, mp4, ogg, wav, webm
- Audiosprites:
  - aac, ac3, caf, flac, m4a, mp3, mp4, ogg, wav, webm
  - json
- Local Fonts:
  - eot, otf, svg, ttf, woff, woff2
  - css
- Bitmap Font:
  - bmp, gif, jpg, jpeg, png, webp
  - xml, fnt
- JSON:
  - json
- XML:
  - xml
- Text:
  - txt
- Scripts:
  - js
- Shaders:
  - frag

Which version of the audio to load is defined in the webpack.dev.config.js and webpack.dist.config.js under the DefinePlugin 'SOUND_EXTENSIONS_PREFERENCE' section;
- Currently I set the order to: webm, ogg, m4a, mp3, aac, ac3, caf, flac, mp4, wav
- The loader will load the audio using this as the preference; the first supported file that is found is used using the order of this list as most preferred to least preferred

## Google Web Fonts:

Add your desired Google Web Fonts to the webpack.dev.config.js and/or webpack.dist.config.js in the DefinePlugin 'GOOGLE_WEB_FONTS' section and they will then be loaded and available via Assets.GoogleWebFonts.

## Custom/Local Web Fonts:

Add your desired Custom/Local Web Fonts to your assets folder and they will then be loaded and available via Assets.CustomWebFonts
- The various font files, and the css MUST share the same name
- One CSS file per font

I recommend one of the following generators for generating your font files;
- [Font Squirrel Webfont Generator][fontsquirrel]
- [Everything Fonts font-face generator][everythingfonts]

## Package Desktop App via Electron

**Note that I am not, currently, actively using this. So if you do, I'd appreciate if you could pass any changes you make or anything you need out of it. Although I'm not using it, I will still support it as best I can.**

You can package your game for Windows (win32 ia32/x64), OSX (darwin ia32/x64), Mac App Store (mas ia32/x64), Linux (linux ia32/x64/armv7l) using the following script;

```npm run electron:pack:dev```

or

```npm run electron:pack:dist```

To package the dev or dist version of your game, respectively, for the current platform you are on. You can provide many options to build specific platforms, for specific architectures, provide an icon, etc.

Refer to the [API Documentation][electron-pack-api] for a full list and details; I'm using it kind of oddly in that I'm using the API from the command line and not the command line version... to provide options appaend ' -- ' to the npm run command and then also append '--' to the option name and then either put the value after a space or '=', either way. Examples;

```npm run electron:pack:dist -- --platform win32 --arch=ia32 //32 bit Windows exe```

```npm run electron:pack:dist -- --platform win32,darwin --arch=ia32,x64 //32 and 64 bit Windows exe and OSX app```

All builds will be in the builds/ folder in appropriately named folders.

###### Note that building for Windows from a non windows device requires a  little bit of extra setup; refer to [Building Windows apps from non-Windows platforms][electron-pack-windows].

###### Also note that for OSX / MAS target bundles: the .app bundle can only be signed when building on a host OSX platform.
