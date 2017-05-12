/* AUTO GENERATED FILE. DO NOT MODIFY. YOU WILL LOSE YOUR CHANGES ON BUILD. */

export namespace Images {
  class Empty {}
}

export namespace Spritesheets {
  export class MetalslugMummy {
    static getName(): string { return 'metalslug_mummy'; }

    static getPNG(): string { return require('assets/spritesheets/metalslug_mummy.[37,45,18,0,0].png'); }
    static getFrameWidth(): number { return 37; }
    static getFrameHeight(): number { return 45; }
    static getFrameMax(): number { return 18; }
    static getMargin(): number { return 0; }
    static getSpacing(): number { return 0; }
    }
}

export namespace Atlases {
  enum PreloadSpritesFrames {
    PreloadBar = <any>'preload_bar.png',
    PreloadFrame = <any>'preload_frame.png',
  }
  export class PreloadSprites {
    static getName(): string { return 'preload_sprites'; }

    static getJSONHash(): string { return require('assets/atlases/preload_sprites.json'); }

    static getPNG(): string { return require('assets/atlases/preload_sprites.png'); }

    static Frames = PreloadSpritesFrames;
  }
}

export namespace Audio {
  export class Music {
    static getName(): string { return 'music'; }

    static getAC3(): string { return require('assets/audio/music.ac3'); }
    static getM4A(): string { return require('assets/audio/music.m4a'); }
    static getMP3(): string { return require('assets/audio/music.mp3'); }
    static getOGG(): string { return require('assets/audio/music.ogg'); }
  }
}

export namespace Audiosprites {
  enum SfxSprites {
    Laser1 = <any>'laser1',
    Laser2 = <any>'laser2',
    Laser3 = <any>'laser3',
    Laser4 = <any>'laser4',
    Laser5 = <any>'laser5',
    Laser6 = <any>'laser6',
    Laser7 = <any>'laser7',
    Laser8 = <any>'laser8',
    Laser9 = <any>'laser9',
  }
  export class Sfx {
    static getName(): string { return 'sfx'; }

    static getAC3(): string { return require('assets/audiosprites/sfx.ac3'); }
    static getJSON(): string { return require('assets/audiosprites/sfx.json'); }
    static getM4A(): string { return require('assets/audiosprites/sfx.m4a'); }
    static getMP3(): string { return require('assets/audiosprites/sfx.mp3'); }
    static getOGG(): string { return require('assets/audiosprites/sfx.ogg'); }

    static Sprites = SfxSprites;
  }
}

export namespace GoogleWebFonts {
  class Empty {}
}

export namespace CustomWebFonts {
  class Empty {}
}

export namespace BitmapFonts {
  export class $04b03 {
    static getName(): string { return '04b03'; }

    static getFNT(): string { return require('assets/fonts/04b03.fnt'); }
    static getPNG(): string { return require('assets/fonts/04b03.png'); }
  }
}

export namespace JSON {
  class Empty {}
}

export namespace Text {
  class Empty {}
}

export namespace Scripts {
  export class BlurX {
    static getName(): string { return 'BlurX'; }

    static getJS(): string { return require('assets/scripts/BlurX.js'); }
  }
  export class BlurY {
    static getName(): string { return 'BlurY'; }

    static getJS(): string { return require('assets/scripts/BlurY.js'); }
  }
}
export namespace Shaders {
  export class Pixelate {
    static getName(): string { return 'pixelate'; }

    static getFRAG(): string { return require('assets/shaders/pixelate.frag'); }
  }
}
export namespace Misc {
  class Empty {}
}
