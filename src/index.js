import setupNavFocus from './jquery-actions/vnav-focus';
import setupMaximize from './jquery-actions/maximize';
import setupNavigation from './vue-actions/setupNavigation';
import pageScriptManager from './page-specific-actions/page-script-manager.js';
import applyHeaderCircle from './jquery-actions/apply-header-circle';

// page specific scripts
import setupLinkPage from './page-specific-actions/link-page';

// Styles
import '../node_modules/font-awesome/css/font-awesome.css';
import "./styles/styles.scss";

// Sets up jQuery actions
setupNavFocus();
setupMaximize();
applyHeaderCircle();

// Sets up Vue actions
setupNavigation();

// Sets up page specific scripts
pageScriptManager.setupScript("/config/TabelasSistema", setupLinkPage);
pageScriptManager.setupScript("/config/configuracoes", setupLinkPage);
pageScriptManager.runPageScripts();

