// import jQuery actions
import setupNavFocus from './jquery-actions/vnav-focus';
import applyHeaderCircle from './jquery-actions/apply-header-circle';
import setupHeaderToolbar from './jquery-actions/document-toolbar';
import setupFieldSelection from './jquery-actions/jquery-select-fields';

import setupNavigation from './vue-actions/setupNavigation';
import pageScriptManager from './page-specific-actions/page-script-manager.js';

// page specific scripts
import setupLinkPage from './page-specific-actions/link-page';

// Styles
import '../node_modules/font-awesome/css/font-awesome.css';
import "./styles/styles.scss";

// Sets up jQuery actions
setupNavFocus();
applyHeaderCircle();
setupHeaderToolbar();
setupFieldSelection();

// Sets up Vue actions
setupNavigation();

// Sets up page specific scripts
pageScriptManager.setupScript("/config/TabelasSistema", setupLinkPage);
pageScriptManager.setupScript("/config/configuracoes", setupLinkPage);
pageScriptManager.runPageScripts();

