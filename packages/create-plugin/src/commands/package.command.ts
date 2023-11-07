import minimist from 'minimist';
import fs from 'fs';
import { confirmPrompt, printErrorMessage, printSuccessMessage } from '../utils/utils.console';
import archiver from 'archiver';
import path from 'path';

export const packagePlugin = async (argv: minimist.ParsedArgs) => {
  const CWD = process.cwd();

  const nonInteractive = argv['non-interactive'];

  const DIS_PATH = path.join(CWD, 'dist');
  const PLUGIN_JSON = path.join(DIS_PATH, 'plugin.json');
  const MANIFEST_TXT = path.join(DIS_PATH, 'MANIFEST.txt');

  // validate DIS_PATH exists
  if (!fs.existsSync(DIS_PATH) || !fs.statSync(DIS_PATH).isDirectory()) {
    printErrorMessage(
      "Could not find 'dist' directory. Please build your plugin before running this command. e.g.: `yarn build` or `npm run build`"
    );
    process.exit(1);
  }

  // validate PLUGIN_JSON exists
  if (!fs.existsSync(PLUGIN_JSON)) {
    printErrorMessage(
      "Could not find 'plugin.json' inside 'dist' directory. Please build your plugin before running this command. e.g.: `yarn build` or `npm run build`"
    );
    process.exit(1);
  }

  // if no manifest file, warn user and confirm if wish to continue
  if (!fs.existsSync(MANIFEST_TXT) && !nonInteractive) {
    const confirm = await confirmPrompt(
      `Could not find a 'MANIFEST.txt' file inside 'dist' directory. This means that the plugin is not signed. Would you like to continue generating an unsigned archive file?`
    );
    if (!confirm) {
      process.exit(1);
    }
  }

  const pluginJsonContent = require(PLUGIN_JSON);
  const pluginId = pluginJsonContent.id;

  const zipFileName = `${pluginId}.zip`;
  const zipFilePath = path.join(CWD, zipFileName);

  // if zip file already exists, warn user and confirm if wish to continue
  if (fs.existsSync(zipFilePath)) {
    const confirm =
      nonInteractive ||
      (await confirmPrompt(
        `A zip file with the name '${zipFileName}' already exists. Do you want to continue and overwrite it?`
      ));

    if (confirm) {
      try {
        fs.unlinkSync(zipFilePath);
      } catch (error) {
        printErrorMessage(`Could not delete existing zip file: ${error}`);
        process.exit(1);
      }
    } else {
      process.exit(1);
    }
  }

  try {
    await zipDistPath(DIS_PATH, zipFilePath, pluginId);
    printSuccessMessage(`Successfully created zip archive at ${zipFileName}`);
  } catch (error) {
    printErrorMessage(`Could not create zip file: ${error}`);
  }
};

function zipDistPath(path: string, destination: string, pathName: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(destination);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => {
      resolve(destination);
    });

    archive.on('error', (err) => {
      reject(err);
    });

    archive.pipe(output);
    archive.directory(path, pathName);
    archive.finalize();
  });
}