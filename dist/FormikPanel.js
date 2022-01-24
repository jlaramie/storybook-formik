var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import React, { useState } from 'react';
import JSONTree from 'react-json-tree';
import { useChannel } from '@storybook/api';
import { STORY_RENDERED } from '@storybook/core-events';
import { EVT_ON_SUBMIT, EVT_RENDER, EVT_SUBMIT } from './shared';
var trafficLightStyle = {
    display: 'inline-block',
    marginLeft: '4px',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
};
var booleanStateStyle = {
    wrapper: {
        padding: '4px 16px',
        border: '2px solid neon',
    },
    trafficLightTrue: __assign(__assign({}, trafficLightStyle), { backgroundColor: '#13bc86' }),
    trafficLightFalse: __assign(__assign({}, trafficLightStyle), { backgroundColor: '#ff4d4d' }),
};
var BooleanState = function (_a) {
    var name = _a.name, value = _a.value;
    return (React.createElement("div", { style: booleanStateStyle.wrapper },
        name,
        React.createElement("span", { style: value === undefined
                ? {}
                : value === true
                    ? booleanStateStyle.trafficLightTrue
                    : booleanStateStyle.trafficLightFalse }, value === undefined && '?')));
};
var style = {
    container: {
        width: '100%',
        height: '100%',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        height: '32px',
        alignItems: 'center',
        boxShadow: 'rgba(0,0,0,.1) 0 -1px 0 0',
    },
    submitButton: {
        height: '100%',
    },
    columns: {
        display: 'flex',
        height: '100%',
    },
    column: {
        flex: '1 1 25%',
        height: '100%',
        boxShadow: 'rgba(0,0,0,.1) 0 0 8px 0 inset',
    },
    columnHeading: {
        borderBottom: '1px solid rgba(0,0,0,0.1)',
    },
};
// because JSONTree styling is limited
var classRoot = 'formik-';
var stateContainerClass = classRoot + "stateContainer";
var injectCss = "." + stateContainerClass + " > ul {\n    height: 100% !important;\n    margin: 0 !important;\n    overflow-y: scroll !important;\n  }";
var eightiesTheme = {
    scheme: 'eighties',
    author: 'chris kempson (http://chriskempson.com)',
    base00: '#2d2d2d',
    base01: '#393939',
    base02: '#515151',
    base03: '#747369',
    base04: '#a09f93',
    base05: '#d3d0c8',
    base06: '#e8e6df',
    base07: '#f2f0ec',
    base08: '#f2777a',
    base09: '#f99157',
    base0A: '#ffcc66',
    base0B: '#99cc99',
    base0C: '#66cccc',
    base0D: '#6699cc',
    base0E: '#cc99cc',
    base0F: '#d27b53',
};
export var FormikPanel = function () {
    var _a;
    var _b = useState({}), formikState = _b[0], setFormikState = _b[1];
    var _c = useState([]), submittedValues = _c[0], setSubmittedValues = _c[1];
    var emit = useChannel((_a = {},
        _a[STORY_RENDERED] = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, setSubmittedValues([])];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        _a[EVT_RENDER] = function (state) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, setFormikState(state)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        // TODO: Two instances of channel listener, causing duplicate values to be set on state hook
        _a[EVT_ON_SUBMIT] = function (values) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, setSubmittedValues(__spreadArray(__spreadArray([], submittedValues), [values]))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        _a));
    var values = formikState.values, errors = formikState.errors, touched = formikState.touched, 
    // status,
    isValidating = formikState.isValidating, isSubmitting = formikState.isSubmitting, submitCount = formikState.submitCount;
    return (React.createElement(React.Fragment, null,
        React.createElement("style", { dangerouslySetInnerHTML: { __html: injectCss } }),
        React.createElement("div", { style: style.container },
            React.createElement("div", { style: style.header },
                React.createElement("button", { style: style.submitButton, onClick: function () { return emit(EVT_SUBMIT); } }, "Submit Form"),
                React.createElement(BooleanState, { name: "isValidating", value: isValidating }),
                React.createElement(BooleanState, { name: "isSubmitting", value: isSubmitting }),
                React.createElement("div", { style: { padding: '4px 16px' } },
                    "submitCount",
                    React.createElement("span", { style: { marginLeft: '4px' } }, submitCount))),
            React.createElement("div", { style: style.columns },
                React.createElement("div", { className: stateContainerClass, style: style.column },
                    React.createElement("h1", { style: style.columnHeading }, "Values"),
                    React.createElement(JSONTree, { data: values || {}, hideRoot: true })),
                React.createElement("div", { className: stateContainerClass, style: style.column },
                    React.createElement("h1", { style: style.columnHeading }, "Touched"),
                    React.createElement(JSONTree, { data: touched || {}, hideRoot: true, theme: eightiesTheme })),
                React.createElement("div", { className: stateContainerClass, style: style.column },
                    React.createElement("h1", { style: style.columnHeading }, "Errors"),
                    React.createElement(JSONTree, { data: errors || {}, hideRoot: true }))))));
};
//# sourceMappingURL=FormikPanel.js.map