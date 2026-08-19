const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = async () => {
    const CopyWebpackPlugin = (await import('copy-webpack-plugin')).default;

    return {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [
            // Beranda
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html',
            }),
            // Visi & Misi
            new HtmlWebpackPlugin({
                template: './src/visi/index.html',
                filename: 'visi/index.html',
            }),
            // Struktur Organisasi
            new HtmlWebpackPlugin({
                template: './src/struktur/index.html',
                filename: 'struktur/index.html',
            }),
            // Galeri
            new HtmlWebpackPlugin({
                template: './src/galeri/index.html',
                filename: 'galeri/index.html',
            }),
            // Lokasi
            new HtmlWebpackPlugin({
                template: './src/lokasi/index.html',
                filename: 'lokasi/index.html',
            }),
            // Kontak
            new HtmlWebpackPlugin({
                template: './src/kontak/index.html',
                filename: 'kontak/index.html',
            }),
            // Copy assets
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: 'src/assets',
                        to: 'assets',
                    },
                ],
            }),
        ],
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            compress: true,
            port: 3000,
            open: true,
            hot: true,
        },
    };
};
