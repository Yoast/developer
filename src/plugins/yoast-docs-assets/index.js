const fs = require( "fs-extra" );
const path = require( "path" );
const CopyWebpackPlugin = require( "copy-webpack-plugin" );

const defaultStrategy = {'module.plugins': 'append'};


module.exports = ( context, options ) => {
	return {
		name: "yoast-docs-assets",
		configureWebpack( config, isServer, utils ) {
			if ( !isServer ) {
				return { mergeStrategy: defaultStrategy };
			}

			const outDir = `${ context.outDir }`;
			const staticDir = path.resolve( context.outDir, `../${ context.siteConfig.customFields.docsPath }/static/` );

			if ( !fs.existsSync( staticDir ) ) {
				return { mergeStrategy: defaultStrategy };
			}

			return {
				mergeStrategy: defaultStrategy,
				plugins: config.plugins.concat( [
					new CopyWebpackPlugin( [
						{
							from: staticDir,
							to: outDir,
						}
					] ),
				] ),
			}
		}
	}
}
