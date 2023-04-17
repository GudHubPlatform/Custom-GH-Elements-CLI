import path from 'path';
import { fileURLToPath } from 'url';

import { copyTemplateFiles } from './copy-template-files.js';
import { installPackages } from './install-packages.js';

export async function createProject(options) {
    const targetDirectory = process.cwd();
    const currentFileUrl = import.meta.url;
    const templatesDirectory = path.resolve(decodeURI(fileURLToPath(currentFileUrl)), '../../template');

    await copyTemplateFiles(templatesDirectory, targetDirectory);

    await installPackages(targetDirectory);
}