"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
function Foo() {
    return ((0, jsx_runtime_1.jsxs)(antd_1.Row, { children: [(0, jsx_runtime_1.jsx)(antd_1.Col, __assign({ span: 12 }, { children: "Foo" })), (0, jsx_runtime_1.jsx)(antd_1.Col, __assign({ span: 2 }, { children: (0, jsx_runtime_1.jsx)(icons_1.GithubOutlined, {}) }))] }));
}
exports.default = Foo;
;
