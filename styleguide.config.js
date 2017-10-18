const path = require('path')
const glob = require('glob')
const sectionsConfig = require('./styleguide/sections.config.js')
const customStyles = glob.sync('./styleguide/styles/*.less')

module.exports = {
    // defines output when building static version of styleguide
    styleguideDir: 'docs/',
    // outsourced because it became too verbose
    sections: sectionsConfig,
    // tells styleguidist where to find the examples associated to a component
    getExampleFilename(componentPath) {
        return componentPath
            .replace(/\/src\/components/, '/styleguide/examples') // replace path
            .replace(/\.jsx?$/, '.example.md') // replace file ending
    },
    // changes the pathline to copy-able import statement
    getComponentPathLine(componentPath) {
        const name = path.basename(componentPath, '.jsx')
        return `import { ${name} } from '@doist/reactist';`
    },
    // add custom styles for examples
    require: customStyles
}
