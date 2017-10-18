const path = require('path')

module.exports = {
    styleguideDir: 'styleguide/static',
    sections: [
        {
            name: 'Reactist',
            content: 'styleguide/intro.md'
        }, {
            name: 'Components',
            components: 'src/components/**/*.{js,jsx}'
        }
    ],

    getExampleFilename(componentPath) {
        return componentPath
            .replace(/\/src\/components/, '/styleguide') // replace path
            .replace(/\.jsx?$/, '.example.md') // replace file ending
    },
    require: [
        path.join(__dirname, 'styleguide/styles.less')
    ]
}
