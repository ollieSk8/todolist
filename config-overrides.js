/**
 * Created by ollie on 2019/6/18.
 */
const {override, fixBabelImports} = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    })
);