import { resolve } from 'path'

/**
 * The Nuxt.js module function.
 *
 * - Adds the Nuxt.js plugin.
 * - Sets up autoloading for DruxtEntity and DruxtField prefixed components.
 *
 * The module function should not be used directly, but rather installed via yout Nuxt.js configuration file.
 *
 * Options are set on the root level `druxt` Nuxt.js config object.
 *
 * @example @lang js
 * // `nuxt.config.js`
 * module.exports = {
 *   modules: [
 *     'druxt-entity'
 *   ],
 *   druxt: {
 *     baseUrl: 'https://example.com'
 *   }
 * }
 *
 * @todo Add module level options.
 * @todo Document options.
 *
 * @property {object} options.druxt - Druxt.js root level options.
 * @property {string} options.druxt.baseUrl - Base URL of Drupal JSON:API backend.
 */
const DruxtEntityModule = function (moduleOptions = {}) {
  // Use root level Druxt options.
  if (typeof this.options === 'undefined' || !this.options.druxt) {
    throw new TypeError('Druxt settings missing.')
  }
  const options = this.options.druxt

  // Add plugin.
  this.addPlugin({
    src: resolve(__dirname, '../nuxt/plugin.js'),
    fileName: 'druxt-entity.js',
    options
  })

  // Add component autoloading rules.
  this.options.components = Array.isArray(this.options.components) ? this.options.components : []

  // DruxtEntity components.
  this.options.components.push({
    path: '~/components/druxt/entity',
    prefix: 'druxt-entity',
    global: true
  })

  // DruxtField componentns.
  this.options.components.push({
    path: '~/components/druxt/field',
    prefix: 'druxt-field',
    global: true
  })
}

export { DruxtEntityModule }
