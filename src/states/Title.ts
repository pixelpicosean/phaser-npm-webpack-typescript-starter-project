import { BitmapFonts } from '../assets';
import { GameWidth, GameHeight } from '../config';

export default class Title extends Phaser.State {
  public create(): void {
    const t = this.add.bitmapText(GameWidth / 2, GameHeight / 2, BitmapFonts.$04b03.getName(), 'It Works!', 24);
    t.anchor.set(0.5);

    this.game.camera.flash(0x000000, 1000);
  }
}
