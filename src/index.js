import $ from "jquery";
import Vue from  "vue";
import setupNavFocus from './jquery-actions/vnav-focus';
import setupMaximize from './jquery-actions/maximize';
import setupNavigation from './vue-actions/setupNavigation';

// Styles
require("./styles/styles.less");

// Sets up jQuery actions
setupNavFocus($);
setupMaximize($);

// Sets up Vue actions
setupNavigation();
