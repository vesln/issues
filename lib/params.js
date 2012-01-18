/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */
 
/**
 * Exporting the params.
 */
module.exports = {
  'about': {
    description: 'Library author.',
  },
  'version': {
    description: 'Outputs version number.',
  },
  'url': {
    description: 'Outputs the url of the library.',
  },
  'set': {
    description: 'Sets an option. Usage: --set key:value. Options: username, token.',
  },
  'clear': {
    description: 'Deletes an option.',
  },
  'help': {
    description: 'Outputs this help info.',
  },
  'reporter': {
    description: 'Reporter - basic, short, eighty, number'
  }
};