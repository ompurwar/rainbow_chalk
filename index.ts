/**
 * A class for coloring string
 * there are may use cases for it like colorful logging
 *
 * @class Rainbow
 */
class Rainbow {
    /**
     * holds waring count that has been printed
     *
     * @private
     * @type {number}
     * @memberof Rainbow
     */
    private warnCount: number = 0;
    /**
     * holds error count that has been printed
     *
     * @private
     * @type {number}
     * @memberof Rainbow
     */
    private errorCount: number = 0;
    /**
     *holds info count that has been printed
     *
     * @private
     * @type {number}
     * @memberof Rainbow
     */
    private infoCount: number = 0;
    /**
     * holds the die colors
     *
     * @private
     * @memberof Rainbow
     */
    private die = {
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
      BgLightWhite: '\x1b[107m',
    };
    /**
     *Creates an instance of Rainbow.
     * @param {*} parameters
     * @memberof Rainbow
     */
    constructor(parameters){};
    /**
     * Colours the input string to red
     * @kind function
     * @param {string} inputString
     * @returns {string} red string
     * @memberof Rainbow
     */
    public red(inputString: string): string {
      let returnVal: string = this.die.FgRed + inputString + this.die.Reset;
      return returnVal;
    };
  
    /**
   * Colours the input string to lightRed
   * @kind function
   * @param {string} inputString
   * @returns {string} red string
   * @memberof Rainbow
   */
    public lightRed(inputString: string): string {
      let returnVal: string = this.die.FgLightRed + inputString + this.die.Reset;
      return returnVal;
    }
  
    /**
  * Colours the input string to green
  * @kind function
  * @param {string} inputString
  * @returns {string} green string
  * @memberof Rainbow
  */
    public green(inputString: string): string {
      let returnVal: string = this.die.FgGreen + inputString + this.die.Reset;
      return returnVal;
    }
  
    /**
  * Colours the input string to lightGreen
  * @kind function
  * @param {string} inputString
  * @returns {string} light green string
  * @memberof Rainbow
  */
    public lightGreen(inputString: string): string {
      let returnVal: string =
          this.die.FgLightGreen + inputString + this.die.Reset;
      return returnVal;
    }
  
  
    /**
    * Colours the input string to blue
    * @kind function
    * @param {string} inputString
    * @returns {string} blue string
    * @memberof Rainbow
    */
    public blue(inputString: string): string {
      let returnVal: string = this.die.FgBlue + inputString + this.die.Reset;
      return returnVal;
    }
    /**
    * Colours the input string to lightblue
    * @kind function
    * @param {string} inputString
    * @returns {string} lightblue string
    * @memberof Rainbow
    */
    public lightBlue(inputString: string): string {
      let returnVal: string = this.die.FgLightBlue + inputString + this.die.Reset;
      return returnVal;
    }
    /**
    * Colours the input string to yellow
    * @kind function
    * @param {string} inputString
    * @returns {string} yellow string
    * @memberof Rainbow
    */
    public yellow(inputString: string): string {
      let returnVal: string = this.die.FgYellow + inputString + this.die.Reset;
      return returnVal;
    }
    /**
    * Colours the input string to lightYellow
    * @kind function
    * @param  {string} inputString
    * @returns {string} lightYellow string
    * @memberof Rainbow
    */
    public lightYellow(inputString: string): string {
      let returnVal: string =
          this.die.FgLightYellow + inputString + this.die.Reset;
      return returnVal;
    }
    /**
    * Colours the input string to cyan
    * @kind function
    * @param {string} inputString
    * @returns {string} cyan string
    * @memberof Rainbow
    */
    public cyan(inputString: string): string {
      let returnVal: string = this.die.FgCyan + inputString + this.die.Reset;
      return returnVal;
    }
    /**
    * Colours the input string to lightCyan
    * @kind function
    * @param {string} inputString
    * @returns {string} lightCyan string
    * @memberof Rainbow
    */
    public lightCyan(inputString: string): string {
      let returnVal: string = this.die.FgLightCyan + inputString + this.die.Reset;
      return returnVal;
    }
  
    /**
    * Colours the input string to magenta
    * @kind function
    * @param {string} inputString
    * @returns {string} magenta string
    * @memberof Rainbow
    */
    public magenta(inputString: string): string {
      let returnVal: string = this.die.FgMagenta + inputString + this.die.Reset;
      return returnVal;
    }
    /**
    * Colours the input string to light magenta
    * @kind function
    * @param {string} inputString
    * @returns {string} LightMagenta string
    * @memberof Rainbow
    */
    public lightMagenta(inputString: string): string {
      let returnVal: string =
          this.die.FgLightMagenta + inputString + this.die.Reset;
      return returnVal;
    }
    /**
    * Colours the input string to white
    * @kind function
    * @param {string} inputString
    * @returns {string}  white string
    * @memberof Rainbow
    */
    public white(inputString: string): string { return inputString; }
    /**
     * returns a warning string with timestamp
     *
     * @param  {string} inputString
     * @returns {string} warning string with timestamp
     * @memberof Rainbow
     */
    public warn(inputString: string): string {
      this.warnCount++;
      var returnVal = '(' + this.lightYellow('Warning') + ') [' +
          this.green(this.warnCount.toString()) + ']  ' + this.lightBlue(Date()) +
          this.die.Reset + '\t: ' + this.lightYellow(inputString);
      return returnVal;
    }
    /**
     * returns a error string with timestamp
     *
     * @param {string} inputString
     * @returns {string} error string with timestamp
     * @memberof Rainbow
     */
    public error(inputString: string): string {
      this.errorCount++;
      return '(' + this.lightRed('Error') + ') [' +
          this.yellow(this.errorCount.toString()) + ']  ' +
          this.lightBlue(Date()) + this.die.Reset + '\t: ' +
          this.lightRed(inputString);
    }
    /**
     *
     *
     * @param {string} inputString
     * @returns {string}
     * @memberof Rainbow
     */
    public info(inputString: string): string {
      this.infoCount++;
      return '(' + this.lightGreen('Info') + ') [' +
          this.yellow(this.infoCount.toString()) + ']  ' +
          this.lightBlue(Date()) + this.die.Reset + '\t: ' +
          this.green(inputString);
    }
    /**
     * returns an inverter background string with timestamp
     *
     * @param  {string} inputString
     * @returns {string} inverted background string with timestamp
     * @memberof Rainbow
     */
    public invertBg(inputString: string): string {
      return this.die.Reverse + inputString + this.die.Reset;
    }
    /**
     *
     *
     * @param {string} inputString
     * @returns {string}
     * @memberof Rainbow
     */
    public blink(inputString: string): string {
      return this.die.Blink + inputString + this.die.Reset;
    }
    /**
     *
     *
     * @param {string} inputString
     * @returns {string}
     * @memberof Rainbow
     */
    public dim(inputString: string): string {
      return this.die.Dim + inputString + this.die.Reset;
    }
    /**
     *
     *
     * @param {string} inputString
     * @returns {string}
     * @memberof Rainbow
     */
    public underscore(inputString: string): string {
      return this.die.Underscore + inputString + this.die.Reset;
    }
    /**
     *
     *
     * @param {string} inputString
     * @returns {string}
     * @memberof Rainbow
     */
    public bright(inputString: string): string {
      return this.die.Bright + inputString + this.die.Reset;
    }
  }
  
  export {Rainbow};