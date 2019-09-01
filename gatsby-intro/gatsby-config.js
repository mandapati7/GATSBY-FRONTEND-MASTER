module.exports = {
    siteMetadata: {
        title: 'Frontend Masters Gatsby Workshop',
        description: 'Description11111'
    },
    plugins: ['gatsby-plugin-emotion', 
        'gatsby-plugin-react-helmet',
        'gatsby-mdx',
        {
            resolve: `gatsby-plugin-mdx`,
            
            options: {
                defaultLayouts: require.resolve('./src/components/layout.js') ,
                extensions: ['.mdx', '.md'],
            }
        }
    ]
}