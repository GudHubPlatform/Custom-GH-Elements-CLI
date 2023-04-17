import { merge } from 'webpack-merge';
import common from './webpack.common.js';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default merge(common, {
    mode: 'production',
    optimization: {
        minimize: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
})