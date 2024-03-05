export function createPalettes (scene, config) {
    // Create color lookup from palette image.
    var colorLookup = {};
    var x, y;
    var pixel, palette;
    var paletteWidth = scene.textures.get(config.paletteKey).getSourceImage().width;

    // Go through each pixel in the palette image and add it to the color lookup.
    for (y = 0; y < config.paletteNames.length; y++) {
        palette = config.paletteNames[y];
        colorLookup[palette] = [];

        for (x = 0; x < paletteWidth; x++) {
            pixel = scene.textures.getPixel(x, y, config.paletteKey);
            colorLookup[palette].push(pixel);
        }

        console.log('colorLookup[palette]>', colorLookup[palette]);
    }

    // Create sheets and animations from base sheet.
    var sheet = scene.textures.get(config.spriteSheet.key).getSourceImage();
    var atlasKey, anim, animKey;
    var canvasTexture, canvas, context, imageData, pixelArray;

    // Iterate over each palette.
    for (y = 0; y < config.paletteNames.length; y++) {
        palette = config.paletteNames[y];
        atlasKey = config.spriteSheet.key + '-' + palette;

        // Create a canvas to draw new image data onto.
        canvasTexture = scene.textures.createCanvas(config.spriteSheet.key + '-temp', sheet.width, sheet.height);
        canvas = canvasTexture.getSourceImage();
        context = canvas.getContext('2d');

        // Copy the sheet.
        context.drawImage(sheet, 0, 0);

        // Get image data from the new sheet.
        imageData = context.getImageData(0, 0, sheet.width, sheet.height);
        pixelArray = imageData.data;

        // Iterate through every pixel in the image.
        for (var p = 0; p < pixelArray.length / 4; p++) {
            var index = 4 * p;

            var r = pixelArray[index];
            var g = pixelArray[++index];
            var b = pixelArray[++index];
            var alpha = pixelArray[++index];

            // If this is a transparent pixel, ignore, move on.
            if (alpha === 0) {
                continue;
            }

            // Iterate through the colors in the palette.
            for (var c = 0; c < paletteWidth; c++) {
                var oldColor = colorLookup[config.paletteNames[0]][c];
                var newColor = colorLookup[palette][c];

                // If the color matches, replace the color.
                if (r === oldColor.r && g === oldColor.g && b === oldColor.b && alpha === 255) {
                    pixelArray[--index] = newColor.b;
                    pixelArray[--index] = newColor.g;
                    pixelArray[--index] = newColor.r;
                }
            }
        }

        // Put our modified pixel data back into the context.
        context.putImageData(imageData, 0, 0);

        // Add the canvas as a sprite sheet to the scene.
        scene.textures.addSpriteSheet(atlasKey, canvasTexture.getSourceImage(), {
            frameWidth: config.spriteSheet.frameWidth,
            frameHeight: config.spriteSheet.frameHeight,
        });

        // Iterate over each animation.
        for (var a = 0; a < config.animations.length; a++) {
            anim = config.animations[a];
            animKey = atlasKey + '-' + anim.key;

            // Add the animation to the scene.
            scene.anims.create({
                key: animKey,
                frames: scene.anims.generateFrameNumbers(atlasKey, {start: anim.startFrame, end: anim.endFrame}),
                frameRate: anim.frameRate,
                repeat: anim.repeat === undefined ? -1 : anim.repeat
            });
        }

        // Destroy temp texture.
        scene.textures.get(config.spriteSheet.key + '-temp').destroy();
    }

    // Destroy textures that are not longer needed.
    // NOTE: This doesn't remove the textures from TextureManager.list.
    //       However, it does destroy source image data.
    scene.textures.get(config.spriteSheet.key).destroy();
    scene.textures.get(config.paletteKey).destroy();
}
