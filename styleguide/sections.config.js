module.exports = [
    {
        name: 'Reactist',
        content: 'styleguide/Introduction.md',
        sections: [
            {
                name: 'How to use',
                content: 'styleguide/HowTo.md'
            },
            {
                name: 'Development',
                content: 'styleguide/Development.md'
            }, {
                name: 'Testing',
                content: 'styleguide/Testing.md'
            }
        ]
    }, {
        name: 'Components',
        components: 'src/components/**/*.{js,jsx}'
    }
]
