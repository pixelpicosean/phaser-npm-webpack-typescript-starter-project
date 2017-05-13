import { Atlases } from '../assets';
import { GameWidth, GameHeight, ScaleMode, MultiTouchSupport } from '../config';

export default class Boot extends Phaser.State {
  public preload(): void {
    this.game.load.atlasJSONHash(Atlases.PreloadSprites.getName(), Atlases.PreloadSprites.getPNG(), Atlases.PreloadSprites.getJSONHash());
  }

  public create(): void {
    if (!MultiTouchSupport) {
      this.input.maxPointers = 1;
    }

    this.game.scale.scaleMode = Phaser.ScaleManager[ScaleMode];

    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;

    if (this.game.device.desktop) {
      // Any desktop specific stuff here
    }
    else {
      // Any mobile specific stuff here

      const is_landscape = (GameWidth > GameHeight);
      this.game.scale.forceOrientation(is_landscape, !is_landscape);
    }

    this.game.state.start('Preloader');
  }
}
