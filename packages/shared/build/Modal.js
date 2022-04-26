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
function CustomModal(_a) {
    var visible = _a.visible, title = _a.title, setInvisible = _a.setInvisible, children = _a.children;
    console.log('visible:', visible);
    var modalProps = {
        centered: true,
        destroyOnClose: true,
        visible: visible,
        title: title,
        okText: '확인',
        cancelText: '취소',
        onOk: function () {
            setInvisible();
        },
        onCancel: function () {
            setInvisible();
        },
    };
    return (0, jsx_runtime_1.jsx)(antd_1.Modal, __assign({}, modalProps, { children: children }));
}
exports.default = CustomModal;
