const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
    const files = [
        './dist/simple-ng-component/runtime.js',
        './dist/simple-ng-component/polyfills.js',
        './dist/simple-ng-component/main.js'
        ];
    
        await fs.ensureDir('dist');
        await concat(files, 'dist/simple-ng-component/web-components.js');
}
build();
