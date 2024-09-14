/* eslint-disable prettier/prettier */
import css from 'styled-jsx/css';

// This is just a minified version of antd.dark.min.css (https://cdnjs.com/libraries/antd) with all of the unused CSS styles stripped out using https://uncss-online.com/.
export default css.global`
[class*=ant-]::-ms-clear,[class^=ant-]::-ms-clear{display:none}
[class*=ant-],[class*=ant-] *,[class*=ant-] :after,[class*=ant-] :before,[class^=ant-],[class^=ant-] *,[class^=ant-] :after,[class^=ant-] :before{-webkit-box-sizing:border-box;box-sizing:border-box}
body,html{width:100%;height:100%}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box}
html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:rgba(0,0,0,0)}
@-ms-viewport{width:device-width}
body{margin:0;color:hsla(0,0%,100%,.85);font-size:14px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variant:tabular-nums;line-height:1.5715;background-color:#000;-webkit-font-feature-settings:"tnum";font-feature-settings:"tnum"}
h4{margin-top:0;margin-bottom:.5em;color:hsla(0,0%,100%,.85);font-weight:500}
ul{margin-top:0;margin-bottom:1em}
a{color:#177ddc;text-decoration:none;background-color:transparent;outline:none;cursor:pointer;-webkit-transition:color .3s;transition:color .3s;-webkit-text-decoration-skip:objects}
a:hover{color:#165996}a:active{color:#388ed3}a:active,a:focus,a:hover{text-decoration:none;outline:0}
img{vertical-align:middle;border-style:none}
svg:not(:root){overflow:hidden}
a{-ms-touch-action:manipulation;touch-action:manipulation}
::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}
::-moz-selection{color:#fff;background:#177ddc}::selection{color:#fff;background:#177ddc}
html{--antd-wave-shadow-color:#177ddc;--scroll-bar:0}
.ant-avatar{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0;color:hsla(0,0%,100%,.85);font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;-webkit-font-feature-settings:"tnum";font-feature-settings:"tnum";position:relative;display:inline-block;overflow:hidden;color:#fff;white-space:nowrap;text-align:center;vertical-align:middle;background:hsla(0,0%,100%,.3);width:32px;height:32px;line-height:32px;border-radius:50%}
.ant-avatar-image{background:transparent}
.ant-avatar-square{border-radius:2px}
.ant-avatar>img{display:block;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}
.ant-cascader-picker-label:hover+.ant-cascader-input:not(.ant-cascader-picker-disabled .ant-cascader-picker-label:hover+.ant-cascader-input){border-color:#165996;border-right-width:1px!important}
.ant-comment-content-author-name>:hover{color:hsla(0,0%,100%,.45)}
_:-ms-fullscreen .ant-picker-range-wrapper .ant-picker-month-panel .ant-picker-cell,_:-ms-fullscreen .ant-picker-range-wrapper .ant-picker-year-panel .ant-picker-cell{padding:21px 0}
.ant-image{position:relative;display:inline-block}
.ant-image-img{display:block;width:100%;height:auto}
.ant-list{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0;color:hsla(0,0%,100%,.85);font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;-webkit-font-feature-settings:"tnum";font-feature-settings:"tnum";position:relative}
.ant-list *{outline:none}
.ant-list-items{margin:0;padding:0;list-style:none}
.ant-list-item{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:12px 0;color:hsla(0,0%,100%,.85)}
.ant-list-item,.ant-list-item-meta{display:-webkit-box;display:-ms-flexbox;display:flex}
.ant-list-item-meta{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;max-width:100%}
.ant-list-item-meta-avatar{margin-right:16px}
.ant-list-item-meta-content{-webkit-box-flex:1;-ms-flex:1 0;flex:1 0;width:0;color:hsla(0,0%,100%,.85)}
.ant-list-item-meta-title{margin-bottom:4px;color:hsla(0,0%,100%,.85);font-size:14px;line-height:1.5715}
.ant-list-item-meta-title>a{color:hsla(0,0%,100%,.85);-webkit-transition:all .3s;transition:all .3s}
.ant-list-item-meta-title>a:hover{color:#177ddc}
.ant-list-item-meta-description{color:hsla(0,0%,100%,.45);font-size:14px;line-height:1.5715}
.ant-list-header{background:transparent}
.ant-list-header{padding-top:12px;padding-bottom:12px}
.ant-list-split .ant-list-item{border-bottom:1px solid #303030}
.ant-list-split .ant-list-item:last-child{border-bottom:none}
.ant-list-split .ant-list-header{border-bottom:1px solid #303030}
.ant-list-sm .ant-list-item{padding:8px 16px}
.ant-list-bordered{border:1px solid #434343;border-radius:2px}
.ant-list-bordered .ant-list-header,.ant-list-bordered .ant-list-item{padding-right:24px;padding-left:24px}
.ant-list-bordered.ant-list-sm .ant-list-header,.ant-list-bordered.ant-list-sm .ant-list-item{padding:8px 16px}
.ant-space{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}
.ant-space-align-center{-webkit-box-align:center;-ms-flex-align:center;align-items:center}
.ant-spin-nested-loading{position:relative}
.ant-spin-container{position:relative;-webkit-transition:opacity .3s;transition:opacity .3s}
.ant-spin-container:after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:10;display:none\9;width:100%;height:100%;background:#141414;opacity:0;-webkit-transition:all .3s;transition:all .3s;content:"";pointer-events:none}
.ant-select-tree-focused:not(:hover):not(.ant-select-tree-active-focused){background:#111b26}
.ant-tree-focused:not(:hover):not(.ant-tree-active-focused){background:#111b26}
.ant-typography{color:hsla(0,0%,100%,.85);overflow-wrap:break-word}
.ant-typography.ant-typography-secondary{color:hsla(0,0%,100%,.45)}

/* Responsive CSS */
@media (max-width: 768px) {
    .ant-typography {
        font-size: 16px;
    }

    .markdown {
        font-size: 14px;
    }

    .ant-space {
        flex-direction: column;
        align-items: stretch;
    }

    .ant-space .ant-typography, 
    .ant-space .ant-textarea {
        width: 100%;
        box-sizing: border-box;
    }

    .ant-list-item {
        padding: 8px;
        font-size: 12px;
    }

    .ant-list-item-meta-title {
        font-size: 12px;
    }

    .ant-list-item-meta-description {
        font-size: 12px;
    }

    .ant-avatar {
        width: 24px;
        height: 24px;
        line-height: 24px;
    }

    .object-container {
        width: 100%;
        height: auto;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .ant-typography {
        font-size: 18px;
    }

    .markdown {
        font-size: 16px;
    }

    .ant-space {
        flex-direction: column;
        align-items: stretch;
    }

    .ant-space .ant-typography, 
    .ant-space .ant-textarea {
        width: 100%;
        box-sizing: border-box;
    }

    .ant-list-item {
        padding: 10px;
        font-size: 14px;
    }

    .ant-list-item-meta-title {
        font-size: 14px;
    }

    .ant-list-item-meta-description {
        font-size: 14px;
    }

    .ant-avatar {
        width: 28px;
        height: 28px;
        line-height: 28px;
    }

    .object-container {
        width: 100%;
        height: auto;
    }
}
`;
