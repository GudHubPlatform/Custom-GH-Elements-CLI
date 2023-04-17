import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
    mode: 'development',
    optimization: {
        minimize: false,
    },
    devServer: {
        port: 3000,
        static: {
            directory: './dist'
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        hot: false,
        liveReload: false
    }
})