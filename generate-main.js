import fs from 'fs';
import path from 'path';

// Directory where your components are located, which is within the lib folder for this project
const componentsDir = path.join('./', 'lib', 'components');

/**
 * Generates export statements for all components within a directory
 *
 * @author @adamlogan17
 * @param {*} directory The directory to generate export statements for
 * @returns A array of Strings, which contains the export statements of each component, within the directory
 */
function generateExports(directory) {
	const files = fs.readdirSync(directory);
	let exports = '';

	files.forEach((file) => {
		const filePath = path.join(directory, file);
		const stat = fs.statSync(filePath);

		if (stat.isDirectory()) {
			// Recursively process subdirectories
			exports += generateExports(filePath);
		} else if (file.endsWith('.tsx')) {
			// If the file is a TypeScript component file, generate an export statement
			const componentName = path.basename(file, '.tsx');

			const exportDir = directory.slice(4).split(path.sep).join('/') + '/' + componentName;
			exports += `export { default as ${componentName} } from './${exportDir}';\n`;
		}
	});
	return exports;
}

// The path to where the main.ts file is to be located, this should match the directory of the `"main"` field in the `package.json` file
const mainPath = path.join('./', 'lib', 'main.ts');

// Generate export statements for all components
const mainContent = generateExports(componentsDir);

// Write the export statements to the src/index.ts file
fs.writeFileSync(mainPath, mainContent);

console.log('main.ts file generated successfully.');
