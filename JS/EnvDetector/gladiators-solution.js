// Rozwiązanie opracował Gladiator JS - gh: Kshyshtoph
// rozwiązanie nie testowane pod większe ilości danych

class EnvDetector {
  static checkWindow() {
    if (!window) {
      throw new Error("Envoirment does not contain window element");
    }
  }
  static checkNavigator() {
    if (!window.navigator)
      throw new Error("Window element does not contain navigator");
    if (!window.navigator.userAgent)
      throw new Error("window.navigator does not contain userAgent string");
  }
  static getBrowserSize() {
    this.checkWindow();
    return { width: window.innerWidth, height: window.innerHeight };
  }
  static getWindowSize() {
    this.checkWindow();
    return { width: window.outerWidth, height: window.outerHeight };
  }
  static getDeviceType() {
    this.checkWindow();
    this.checkNavigator();

    const isMobile = window.navigator.userAgent.match(
      /Android|BlackBerry|Tablet|Mobile|iPhone|iPad|iPod|Opera Mini|IEMobile/i
    );

    const isTablet = window.navigator.userAgent.match(/Tablet|iPad|iPod/i);

    switch(true){
      case isMobile:
        return 'mobile'

      case isTablet:
        return "tablet"

      case !isTablet && !isMobile:
        return "desktop";
    }
  }
  static getOS() {
    this.checkWindow();
    this.checkNavigator();
    const userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
      windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
      iosPlatforms = ["iPhone", "iPad", "iPod"];
    let os = null;


    switch(true){
      case macosPlatforms.indexOf(platform) !== -1:
        os = "Mac OS";

      case iosPlatforms.indexOf(platform) !== -1:
        os = "iOS";

      case windowsPlatforms.indexOf(platform) !== -1:
        os = "Windows";

      case /Android/.test(userAgent):
        os = "Android";

      case !os && /Linux/.test(platform):
        os = "Linux";
    }

    return os;
  }
  
  static isTouchable() {
    return !!("ontouchstart" in document.documentElement);
  }

  static isOnline() {
    this.checkWindow();
    this.checkNavigator();
    return window.navigator.onLine;
  }
}