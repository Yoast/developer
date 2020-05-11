const fs = require( "fs-extra" );
const path = require( "path" );
const chalk = require( "chalk" );

const { resolve } = require( "path" );
const { readdir } = require( "fs-extra" ).promises;

const excludedDirectories = [ "js", "img", "docs" ];

const template = () => {
	return (
		`<!DOCTYPE html>
		<html lang="en">
		    <head>
		        <meta charset="UTF-8" />
		        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		        <meta name="description" content="Redirecting to homepage" />
		        <meta http-equiv="refresh" content="0; url=/">
		        <title>Redirecting to homepage</title>
		    </head>
			<body></body>
		</html>`
	);
};

/**
 * Creates the necessary index files.
 *
 * @param {string} dir The directory to create the index files in.
 *
 * @returns {Promise<[]>} The created index files.
 */
const createIndexFiles = async ( dir ) => {
	let files = [];
	const dirents = await readdir( dir, { withFileTypes: true } );

	for ( const index in dirents ) {
		const dirent = dirents[index];
		const res = resolve( dir, dirent.name );

		if ( !dirent.isDirectory() ) {
			continue;
		}

		if ( excludedDirectories.includes( path.parse( res ).name ) ) {
			continue;
		}

		const createdIndexFile = await createIndexFile( res, template() );

		if ( createdIndexFile !== "" ) {
			files.push( createdIndexFile );
		}

		files.push( await createIndexFiles( res ) );
	}

	return files;
}

/**
 * Creates a single index file containing the passed content.
 *
 * @param {string} dir The directory to create the file in.
 * @param {string} content The content to use in the file.
 *
 * @returns {Promise<string>} The resulting file. Empty string if the file already exists.
 */
const createIndexFile = async ( dir, content ) => {
	const destinationFile = `${ dir }/index.html`;

	if ( !await fs.exists( destinationFile ) ) {
		// create
		await fs.writeFile( destinationFile, content, e => {
			if ( e ) {
				console.error( chalk.red( e ) );
			}
		} );

		return destinationFile;
	}

	return "";
}

module.exports = ( context, options ) => {
	return {
		name: "yoast-auto-index",
		postBuild: async ( { outDir } ) => {
			await createIndexFiles( path.resolve( __dirname, outDir ) );
			console.log( `${ chalk.green( "Success!" ) } Generated missing index.html files` );
		}
	}
}
