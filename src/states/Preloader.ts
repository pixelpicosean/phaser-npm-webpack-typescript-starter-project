import { Atlases } from '../assets';
import { Loader } from '../utils/asset';

export default class Preloader extends Phaser.State {
  private preloadBarSprite: Phaser.Sprite = null;
  private preloadFrameSprite: Phaser.Sprite = null;

  public preload(): void {
    this.preloadBarSprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, Atlases.PreloadSprites.getName(), Atlases.PreloadSprites.Frames.PreloadBar);
    this.preloadBarSprite.anchor.setTo(0, 0.5);
    this.preloadBarSprite.x -= this.preloadBarSprite.width * 0.5;

    this.preloadFrameSprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, Atlases.PreloadSprites.getName(), Atlases.PreloadSprites.Frames.PreloadFrame);
    this.preloadFrameSprite.anchor.setTo(0.5);

    this.game.load.setPreloadSprite(this.preloadBarSprite);

    Loader.loadAllAssets(this.game, this.waitForSoundDecoding, this);
  }

  private waitForSoundDecoding(): void {
    Loader.waitForSoundDecoding(this.startGame, this);
  }

  private startGame(): void {
    this.game.camera.onFadeComplete.addOnce(this.loadTitle, this);
    this.game.camera.fade(0x000000, 1000);
  }

  private loadTitle(): void {
    this.game.state.start('Title');
  }
}
