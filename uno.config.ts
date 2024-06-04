import { defineConfig, presetUno, presetWind, presetWebFonts } from 'unocss'

export default defineConfig({
    shortcuts: [
        // ...
    ],
    theme: {
        colors: {
            'myText': 'hsl(var(--text))',
            'myBackground': 'hsl(var(--background))',
            'myPrimary': 'hsl(var(--primary))',
            'mySecondary': 'hsl(var(--secondary))',
            'myAccent': 'hsl(var(--accent))',
        },


    },
    presets: [
        presetUno(),
        presetWind(),
        presetWebFonts({
            fonts: {
                // ...
            },
        }),
    ],
})