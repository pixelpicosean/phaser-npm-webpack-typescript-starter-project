/* AUTO GENERATED FILE. DO NOT MODIFY. YOU WILL LOSE YOUR CHANGES ON BUILD. */

export namespace Images {
    export class FontsFontXml {
        static getName(): string { return 'font_xml'; }

        static getPNG(): string { return require('assets/fonts/font_xml.png'); }
    }
}

export namespace Spritesheets {
    export class SpritesheetsMetalslugMummy {
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
    enum AtlasesPreloadSpritesHashFrames {
        PreloadBar = <any>'preload_bar.png',
        PreloadFrame = <any>'preload_frame.png',
    }
    export class AtlasesPreloadSpritesHash {
        static getName(): string { return 'preload_sprites_hash'; }

        static getJSONHash(): string { return require('assets/atlases/preload_sprites_hash.json'); }

        static getPNG(): string { return require('assets/atlases/preload_sprites_hash.png'); }

        static Frames = AtlasesPreloadSpritesHashFrames;
    }
}

export namespace Audio {
    export class AudioMusic {
        static getName(): string { return 'music'; }

        static getAC3(): string { return require('assets/audio/music.ac3'); }
        static getM4A(): string { return require('assets/audio/music.m4a'); }
        static getMP3(): string { return require('assets/audio/music.mp3'); }
        static getOGG(): string { return require('assets/audio/music.ogg'); }
    }
}

export namespace Audiosprites {
    enum AudiospritesSfxSprites {
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
    export class AudiospritesSfx {
        static getName(): string { return 'sfx'; }

        static getAC3(): string { return require('assets/audiosprites/sfx.ac3'); }
        static getJSON(): string { return require('assets/audiosprites/sfx.json'); }
        static getM4A(): string { return require('assets/audiosprites/sfx.m4a'); }
        static getMP3(): string { return require('assets/audiosprites/sfx.mp3'); }
        static getOGG(): string { return require('assets/audiosprites/sfx.ogg'); }

        static Sprites = AudiospritesSfxSprites;
    }
}

export namespace GoogleWebFonts {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace CustomWebFonts {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace BitmapFonts {
    export class FontsFontFnt {
        static getName(): string { return 'font_fnt'; }

        static getFNT(): string { return require('assets/fonts/font_fnt.fnt'); }
        static getPNG(): string { return require('assets/fonts/font_fnt.png'); }
    }
}

export namespace JSON {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace XML {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace Text {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace Scripts {
    export class ScriptsBlurX {
        static getName(): string { return 'BlurX'; }

        static getJS(): string { return require('assets/scripts/BlurX.js'); }
    }
    export class ScriptsBlurY {
        static getName(): string { return 'BlurY'; }

        static getJS(): string { return require('assets/scripts/BlurY.js'); }
    }
}
export namespace Shaders {
    export class ShadersPixelate {
        static getName(): string { return 'pixelate'; }

        static getFRAG(): string { return require('assets/shaders/pixelate.frag'); }
    }
}
export namespace Misc {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}
