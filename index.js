"use strict";
exports.__esModule = true;
/**
 * A class for coloring string
 * there are may use cases for it like colorful logging
 *
 * @class Rainbow
 */
var Rainbow = /** @class */ (function () {
    /**
     *Creates an instance of Rainbow.
     * @param {*} parameters
     * @memberof Rainbow
     */
    function Rainbow(parameters) {
        /**
         * holds waring count that has been printed
         *
         * @private
         * @type {number}
         * @memberof Rainbow
         */
        this.warnCount = 0;
        /**
         * holds error count that has been printed
         *
         * @private
         * @type {number}
         * @memberof Rainbow
         */
        this.errorCount = 0;
        /**
         *holds info count that has been printed
         *
         * @private
         * @type {number}
         * @memberof Rainbow
         */
        this.infoCount = 0;
        /**
         * holds the die colors
         *
         * @private
         * @memberof Rainbow
         */
        this.die = {
            Reset: '\x1b[0m',
            Bright: '\x1b[1m',
            Dim: '\x1b[2m',
            Underscore: '\x1b[4m',
            Blink: '\x1b[5m',
            Reverse: '\x1b[7m',
            Hidden: '\x1b[8m',
            FgBlack: '\x1b[30m',
            FgRed: '\x1b[31m',
            FgGreen: '\x1b[32m',
            FgYellow: '\x1b[33m',
            FgBlue: '\x1b[34m',
            FgMagenta: '\x1b[35m',
            FgCyan: '\x1b[36m',
            FgWhite: '\x1b[37m',
            FgLightBlack: '\x1b[90m',
            FgLightRed: '\x1b[91m',
            FgLightGreen: '\x1b[92m',
            FgLightYellow: '\x1b[93m',
            FgLightBlue: '\x1b[94m',
            FgLightMagenta: '\x1b[95m',
            FgLightCyan: '\x1b[96m',
            FgLightWhite: '\x1b[97m',
            BgBlack: '\x1b[40m',
            BgRed: '\x1b[41m',
            BgGreen: '\x1b[42m',
            BgYellow: '\x1b[43m',
            BgBlue: '\x1b[44m',
            BgMagenta: '\x1b[45m',
            BgCyan: '\x1b[46m',
            BgWhite: '\x1b[47m',
            BgLightBlack: '\x1b[100m',
            BgLightRed: '\x1b[101m',
            BgLightGreen: '\x1b[102m',
            BgLightYellow: '\x1b[103m',
            BgLightBlue: '\x1b[104m',
            BgLightMagenta: '\x1b[105m',
            BgLightCyan: '\x1b[106m',
            BgLightWhite: '\x1b[107m'
        };
    }
    ;
    /**
     * Colours the input string to red
     * @kind function
     * @param {string} inputString
     * @returns {string} red string
     * @memberof Rainbow
     */
    Rainbow.prototype.red = function (inputString) {
        var returnVal = this.die.FgRed + inputString + this.die.Reset;
        return returnVal;
    };
    ;
    /**
   * Colours the input string to lightRed
   * @kind function
   * @param {string} inputString
   * @returns {string} red string
   * @memberof Rainbow
   */
    Rainbow.prototype.lightRed = function (inputString) {
        var returnVal = this.die.FgLightRed + inputString + this.die.Reset;
        return returnVal;
    };
    /**
  * Colours the input string to green
  * @kind function
  * @param {string} inputString
  * @returns {string} green string
  * @memberof Rainbow
  */
    Rainbow.prototype.green = function (inputString) {
        var returnVal = this.die.FgGreen + inputString + this.die.Reset;
        return returnVal;
    };
    /**
  * Colours the input string to lightGreen
  * @kind function
  * @param {string} inputString
  * @returns {string} light green string
  * @memberof Rainbow
  */
    Rainbow.prototype.lightGreen = function (inputString) {
        var returnVal = this.die.FgLightGreen + inputString + this.die.Reset;
        return returnVal;
    };
    /**
    * Colours the input string to blue
    * @kind function
    * @param {string} inputString
    * @returns {string} blue string
    * @memberof Rainbow
    */
    Rainbow.prototype.blue = function (inputString) {
        var returnVal = this.die.FgBlue + inputString + this.die.Reset;
        return returnVal;
    };
    /**
    * Colours the input string to lightblue
    * @kind function
    * @param {string} inputString
    * @returns {string} lightblue string
    * @memberof Rainbow
    */
    Rainbow.prototype.lightBlue = function (inputString) {
        var returnVal = this.die.FgLightBlue + inputString + this.die.Reset;
        return returnVal;
    };
    /**
    * Colours the input string to yellow
    * @kind function
    * @param {string} inputString
    * @returns {string} yellow string
    * @memberof Rainbow
    */
    Rainbow.prototype.yellow = function (inputString) {
        var returnVal = this.die.FgYellow + inputString + this.die.Reset;
        return returnVal;
    };
    /**
    * Colours the input string to lightYellow
    * @kind function
    * @param  {string} inputString
    * @returns {string} lightYellow string
    * @memberof Rainbow
    */
    Rainbow.prototype.lightYellow = function (inputString) {
        var returnVal = this.die.FgLightYellow + inputString + this.die.Reset;
        return returnVal;
    };
    /**
    * Colours the input string to cyan
    * @kind function
    * @param {string} inputString
    * @returns {string} cyan string
    * @memberof Rainbow
    */
    Rainbow.prototype.cyan = function (inputString) {
        var returnVal = this.die.FgCyan + inputString + this.die.Reset;
        return returnVal;
    };
    /**
    * Colours the input string to lightCyan
    * @kind function
    * @param {string} inputString
    * @returns {string} lightCyan string
    * @memberof Rainbow
    */
    Rainbow.prototype.lightCyan = function (inputString) {
        var returnVal = this.die.FgLightCyan + inputString + this.die.Reset;
        return returnVal;
    };
    /**
    * Colours the input string to magenta
    * @kind function
    * @param {string} inputString
    * @returns {string} magenta string
    * @memberof Rainbow
    */
    Rainbow.prototype.magenta = function (inputString) {
        var returnVal = this.die.FgMagenta + inputString + this.die.Reset;
        return returnVal;
    };
    /**
    * Colours the input string to light magenta
    * @kind function
    * @param {string} inputString
    * @returns {string} LightMagenta string
    * @memberof Rainbow
    */
    Rainbow.prototype.lightMagenta = function (inputString) {
        var returnVal = this.die.FgLightMagenta + inputString + this.die.Reset;
        return returnVal;
    };
    /**
    * Colours the input string to white
    * @kind function
    * @param {string} inputString
    * @returns {string}  white string
    * @memberof Rainbow
    */
    Rainbow.prototype.white = function (inputString) { return inputString; };
    /**
     * returns a warning string with timestamp
     *
     * @param  {string} inputString
     * @returns {string} warning string with timestamp
     * @memberof Rainbow
     */
    Rainbow.prototype.warn = function (inputString) {
        this.warnCount++;
        var returnVal = '(' + this.lightYellow('Warning') + ') [' +
            this.green(this.warnCount.toString()) + ']  ' + this.lightBlue(Date()) +
            this.die.Reset + '\t: ' + this.lightYellow(inputString);
        return returnVal;
    };
    /**
     * returns a error string with timestamp
     *
     * @param {string} inputString
     * @returns {string} error string with timestamp
     * @memberof Rainbow
     */
    Rainbow.prototype.error = function (inputString) {
        this.errorCount++;
        return '(' + this.lightRed('Error') + ') [' +
            this.yellow(this.errorCount.toString()) + ']  ' +
            this.lightBlue(Date()) + this.die.Reset + '\t: ' +
            this.lightRed(inputString);
    };
    /**
     *
     *
     * @param {string} inputString
     * @returns {string}
     * @memberof Rainbow
     */
    Rainbow.prototype.info = function (inputString) {
        this.infoCount++;
        return '(' + this.lightGreen('Info') + ') [' +
            this.yellow(this.infoCount.toString()) + ']  ' +
            this.lightBlue(Date()) + this.die.Reset + '\t: ' +
            this.green(inputString);
    };
    /**
     * returns an inverter background string with timestamp
     *
     * @param  {string} inputString
     * @returns {string} inverted background string with timestamp
     * @memberof Rainbow
     */
    Rainbow.prototype.invertBg = function (inputString) {
        return this.die.Reverse + inputString + this.die.Reset;
    };
    /**
     *
     *
     * @param {string} inputString
     * @returns {string}
     * @memberof Rainbow
     */
    Rainbow.prototype.blink = function (inputString) {
        return this.die.Blink + inputString + this.die.Reset;
    };
    /**
     *
     *
     * @param {string} inputString
     * @returns {string}
     * @memberof Rainbow
     */
    Rainbow.prototype.dim = function (inputString) {
        return this.die.Dim + inputString + this.die.Reset;
    };
    /**
     *
     *
     * @param {string} inputString
     * @returns {string}
     * @memberof Rainbow
     */
    Rainbow.prototype.underscore = function (inputString) {
        return this.die.Underscore + inputString + this.die.Reset;
    };
    /**
     *
     *
     * @param {string} inputString
     * @returns {string}
     * @memberof Rainbow
     */
    Rainbow.prototype.bright = function (inputString) {
        return this.die.Bright + inputString + this.die.Reset;
    };
    return Rainbow;
}());
exports.Rainbow = Rainbow;
