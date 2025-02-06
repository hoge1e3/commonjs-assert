
module.exports = (env,argv)=>({
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: 'development',
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "./test-browser/test.mjs",
    experiments: {
    	outputModule: true,
    },
    output: {
        libraryTarget: 'module',
        path: `${__dirname}/test-browser`,
        filename: "test_build.mjs",
    },
    module: {
        rules: [
            {
                // 拡張子 .ts の場合
                test: /\.ts$/,
                // TypeScript をコンパイルする
                use: {
        			loader:'ts-loader',
        			/*options:{
        				plugins: ['@babel/plugin-syntax-dynamic-import'],
        			},*/
        		},
            },
        ],
        parser: {
          javascript: {
            importMeta: !env.production,
          },
        },
    },
    resolve: {
        // 拡張子を配列で指定
        extensions: [
            /*'.ts',*/ '.js',
        ],
    },
    plugins: [
      //new IgnoreDynamicRequire()
    ],
});
