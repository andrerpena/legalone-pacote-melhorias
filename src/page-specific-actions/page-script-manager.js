/**
 * Controls scripts that should run for specific pages 
 * 
 * @class PageScriptManager
 */
class PageScriptManager {
    constructor() {
        this.map = {};
    }
    setupScript(path, setupFunction) {
        if(!path) throw Error('Argument \'path\' should be truthy');
        if(!setupFunction) throw Error('Argument \'setupFunction\' should be truthy');
        
        this.map[path.toLowerCase()] = setupFunction;
    }
    runPageScripts() {
        var path = window.location.pathname.toLowerCase();

        // if there's a registered script for this page, let's call it
        if(this.map[path]) {
            this.map[path]();
        }
    }
}

export default new PageScriptManager();