import 'p2';
import 'pixi';
import 'phaser';

import * as WebFontLoader from 'webfontloader';

import Boot from './states/Boot';
import Preloader from './states/Preloader';
import Title from './states/Title';
import * as Utils from './utils/utils';
import * as Assets from './assets';
import { GameWidth, GameHeight, Resolution, ScaleMode } from './config';

class App extends Phaser.Game {
  constructor(config: Phaser.IGameConfig) {
    super(config);

    this.state.add('Boot', Boot);
    this.state.add('Preloader', Preloader);
    this.state.add('Title', Title);

    this.state.start('Boot');
  }
}

function startApp(): void {
  let width = GameWidth;
  let height = GameHeight;

  if (ScaleMode === 'USER_SCALE') {
    let metrics: Utils.ScreenMetrics = Utils.ScreenUtils.calculateScreenMetrics(GameWidth, GameHeight);
    width = metrics.gameWidth;
    height = metrics.gameHeight;
  }

  const gameConfig: Phaser.IGameConfig = {
    width: width,
    height: height,
    renderer: Phaser.AUTO,
    parent: '',
    resolution: Resolution,
  };

  new App(gameConfig);
}

window.onload = () => {
  let webFontLoaderOptions: any = null;
  let webFontsToLoad: string[] = GOOGLE_WEB_FONTS;

  if (webFontsToLoad.length > 0) {
    webFontLoaderOptions = (webFontLoaderOptions || {});

    webFontLoaderOptions.google = {
      families: webFontsToLoad
    };
  }

  if (Object.keys(Assets.CustomWebFonts).length > 0) {
    webFontLoaderOptions = (webFontLoaderOptions || {});

    webFontLoaderOptions.custom = {
      families: [],
      urls: []
    };

    for (let font in Assets.CustomWebFonts) {
      webFontLoaderOptions.custom.families.push(Assets.CustomWebFonts[font].getFamily());
      webFontLoaderOptions.custom.urls.push(Assets.CustomWebFonts[font].getCSS());
    }
  }

  if (webFontLoaderOptions === null) {
    startApp();
  }
  else {
    webFontLoaderOptions.active = startApp;

    WebFontLoader.load(webFontLoaderOptions);
  }
};
