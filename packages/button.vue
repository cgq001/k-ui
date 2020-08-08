<template>
    <button class="k-button" :class="[`k-button--${type}`,{
        'is-plain' : plain,
        'is-round': round,
        'is-circle': circle
    }]"
    @click="handleClick">
        <span><slot></slot></span>
    </button>
</template>

<script>
export default {
    name: 'KButton',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        plain: {
            type: Boolean,
            default: false
        },
        round: {
            type: Boolean,
            default: false
        },
        circle: {
            type: Boolean,
            default: false
        }
    },
    methods:{
        handleClick(e){
            this.$emit('click',e)
        }
    }
}
</script>

<style scoped lang='scss'>
.k-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
}

.k-button+.k-button {
    margin-left: 10px
}

.k-button.is-round {
    padding: 12px 20px
}

.k-button:focus,.k-button:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff
}

.k-button:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none
}

.k-button::-moz-focus-inner {
    border: 0
}

.k-button [class*=el-icon-]+span {
    margin-left: 5px
}

.k-button.is-plain:focus,.k-button.is-plain:hover {
    background: #fff;
    border-color: #409eff;
    color: #409eff
}

.k-button.is-plain:active {
    background: #fff;
    outline: none
}

.k-button.is-active,.k-button.is-plain:active {
    border-color: #3a8ee6;
    color: #3a8ee6
}

.k-button.is-disabled,.k-button.is-disabled:focus,.k-button.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5
}

.k-button.is-disabled.k-button--text {
    background-color: transparent
}

.k-button.is-disabled.is-plain,.k-button.is-disabled.is-plain:focus,.k-button.is-disabled.is-plain:hover {
    background-color: #fff;
    border-color: #ebeef5;
    color: #c0c4cc
}

.k-button.is-loading {
    position: relative;
    pointer-events: none
}

.k-button.is-loading:before {
    pointer-events: none;
    content: "";
    position: absolute;
    left: -1px;
    top: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: inherit;
    background-color: hsla(0,0%,100%,.35)
}

.k-button.is-round {
    border-radius: 20px;
    padding: 12px 23px
}

.k-button.is-circle {
    border-radius: 50%;
    padding: 12px
}

.k-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff
}

.k-button--primary:focus,.k-button--primary:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff
}

.k-button--primary:active {
    outline: none
}

.k-button--primary.is-active,.k-button--primary:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff
}

.k-button--primary.is-disabled,.k-button--primary.is-disabled:active,.k-button--primary.is-disabled:focus,.k-button--primary.is-disabled:hover {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff
}

.k-button--primary.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff
}

.k-button--primary.is-plain:focus,.k-button--primary.is-plain:hover {
    background: #409eff;
    border-color: #409eff;
    color: #fff
}

.k-button--primary.is-plain:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
    outline: none
}

.k-button--primary.is-plain.is-disabled,.k-button--primary.is-plain.is-disabled:active,.k-button--primary.is-plain.is-disabled:focus,.k-button--primary.is-plain.is-disabled:hover {
    color: #8cc5ff;
    background-color: #ecf5ff;
    border-color: #d9ecff
}

.k-button--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a
}

.k-button--success:focus,.k-button--success:hover {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff
}

.k-button--success:active {
    outline: none
}

.k-button--success.is-active,.k-button--success:active {
    background: #5daf34;
    border-color: #5daf34;
    color: #fff
}

.k-button--success.is-disabled,.k-button--success.is-disabled:active,.k-button--success.is-disabled:focus,.k-button--success.is-disabled:hover {
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d
}

.k-button--success.is-plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0
}

.k-button--success.is-plain:focus,.k-button--success.is-plain:hover {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff
}

.k-button--success.is-plain:active {
    background: #5daf34;
    border-color: #5daf34;
    color: #fff;
    outline: none
}

.k-button--success.is-plain.is-disabled,.k-button--success.is-plain.is-disabled:active,.k-button--success.is-plain.is-disabled:focus,.k-button--success.is-plain.is-disabled:hover {
    color: #a4da89;
    background-color: #f0f9eb;
    border-color: #e1f3d8
}

.k-button--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c
}

.k-button--warning:focus,.k-button--warning:hover {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff
}

.k-button--warning:active {
    outline: none
}

.k-button--warning.is-active,.k-button--warning:active {
    background: #cf9236;
    border-color: #cf9236;
    color: #fff
}

.k-button--warning.is-disabled,.k-button--warning.is-disabled:active,.k-button--warning.is-disabled:focus,.k-button--warning.is-disabled:hover {
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e
}

.k-button--warning.is-plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1
}

.k-button--warning.is-plain:focus,.k-button--warning.is-plain:hover {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff
}

.k-button--warning.is-plain:active {
    background: #cf9236;
    border-color: #cf9236;
    color: #fff;
    outline: none
}

.k-button--warning.is-plain.is-disabled,.k-button--warning.is-plain.is-disabled:active,.k-button--warning.is-plain.is-disabled:focus,.k-button--warning.is-plain.is-disabled:hover {
    color: #f0c78a;
    background-color: #fdf6ec;
    border-color: #faecd8
}

.k-button--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c
}

.k-button--danger:focus,.k-button--danger:hover {
    background: #f78989;
    border-color: #f78989;
    color: #fff
}

.k-button--danger:active {
    outline: none
}

.k-button--danger.is-active,.k-button--danger:active {
    background: #dd6161;
    border-color: #dd6161;
    color: #fff
}

.k-button--danger.is-disabled,.k-button--danger.is-disabled:active,.k-button--danger.is-disabled:focus,.k-button--danger.is-disabled:hover {
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6
}

.k-button--danger.is-plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4
}

.k-button--danger.is-plain:focus,.k-button--danger.is-plain:hover {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff
}

.k-button--danger.is-plain:active {
    background: #dd6161;
    border-color: #dd6161;
    color: #fff;
    outline: none
}

.k-button--danger.is-plain.is-disabled,.k-button--danger.is-plain.is-disabled:active,.k-button--danger.is-plain.is-disabled:focus,.k-button--danger.is-plain.is-disabled:hover {
    color: #f9a7a7;
    background-color: #fef0f0;
    border-color: #fde2e2
}

.k-button--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399
}

.k-button--info:focus,.k-button--info:hover {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff
}

.k-button--info:active {
    outline: none
}

.k-button--info.is-active,.k-button--info:active {
    background: #82848a;
    border-color: #82848a;
    color: #fff
}

.k-button--info.is-disabled,.k-button--info.is-disabled:active,.k-button--info.is-disabled:focus,.k-button--info.is-disabled:hover {
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc
}

.k-button--info.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6
}

.k-button--info.is-plain:focus,.k-button--info.is-plain:hover {
    background: #909399;
    border-color: #909399;
    color: #fff
}

.k-button--info.is-plain:active {
    background: #82848a;
    border-color: #82848a;
    color: #fff;
    outline: none
}

.k-button--info.is-plain.is-disabled,.k-button--info.is-plain.is-disabled:active,.k-button--info.is-plain.is-disabled:focus,.k-button--info.is-plain.is-disabled:hover {
    color: #bcbec2;
    background-color: #f4f4f5;
    border-color: #e9e9eb
}

.k-button--medium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px
}

.k-button--medium.is-round {
    padding: 10px 20px
}

.k-button--medium.is-circle {
    padding: 10px
}

.k-button--small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px
}

.k-button--small.is-round {
    padding: 9px 15px
}

.k-button--small.is-circle {
    padding: 9px
}

.k-button--mini {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px
}

.k-button--mini.is-round {
    padding: 7px 15px
}

.k-button--mini.is-circle {
    padding: 7px
}

.k-button--text {
    border-color: transparent;
    color: #409eff;
    background: transparent;
    padding-left: 0;
    padding-right: 0
}

.k-button--text:focus,.k-button--text:hover {
    color: #66b1ff;
    border-color: transparent;
    background-color: transparent
}

.k-button--text:active {
    color: #3a8ee6;
    background-color: transparent
}

.k-button--text.is-disabled,.k-button--text.is-disabled:focus,.k-button--text.is-disabled:hover,.k-button--text:active {
    border-color: transparent
}

.k-button-group {
    display: inline-block;
    vertical-align: middle
}

.k-button-group:after,.k-button-group:before {
    display: table;
    content: ""
}

.k-button-group:after {
    clear: both
}

.k-button-group>.k-button {
    float: left;
    position: relative
}

.k-button-group>.k-button+.k-button {
    margin-left: 0
}

.k-button-group>.k-button.is-disabled {
    z-index: 1
}

.k-button-group>.k-button:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}

.k-button-group>.k-button:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
}

.k-button-group>.k-button:first-child:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px
}

.k-button-group>.k-button:first-child:last-child.is-round {
    border-radius: 20px
}

.k-button-group>.k-button:first-child:last-child.is-circle {
    border-radius: 50%
}

.k-button-group>.k-button:not(:first-child):not(:last-child) {
    border-radius: 0
}

.k-button-group>.k-button:not(:last-child) {
    margin-right: -1px
}

.k-button-group>.k-button.is-active,.k-button-group>.k-button:active,.k-button-group>.k-button:focus,.k-button-group>.k-button:hover {
    z-index: 1
}

.k-button-group>.el-dropdown>.k-button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left-color: hsla(0,0%,100%,.5)
}

.k-button-group .k-button--primary:first-child {
    border-right-color: hsla(0,0%,100%,.5)
}

.k-button-group .k-button--primary:last-child {
    border-left-color: hsla(0,0%,100%,.5)
}

.k-button-group .k-button--primary:not(:first-child):not(:last-child) {
    border-left-color: hsla(0,0%,100%,.5);
    border-right-color: hsla(0,0%,100%,.5)
}

.k-button-group .k-button--success:first-child {
    border-right-color: hsla(0,0%,100%,.5)
}

.k-button-group .k-button--success:last-child {
    border-left-color: hsla(0,0%,100%,.5)
}

.k-button-group .k-button--success:not(:first-child):not(:last-child) {
    border-left-color: hsla(0,0%,100%,.5);
    border-right-color: hsla(0,0%,100%,.5)
}

.k-button-group .k-button--warning:first-child {
    border-right-color: hsla(0,0%,100%,.5)
}

.k-button-group .k-button--warning:last-child {
    border-left-color: hsla(0,0%,100%,.5)
}

.k-button-group .k-button--warning:not(:first-child):not(:last-child) {
    border-left-color: hsla(0,0%,100%,.5);
    border-right-color: hsla(0,0%,100%,.5)
}

.k-button-group .k-button--danger:first-child {
    border-right-color: hsla(0,0%,100%,.5)
}

.k-button-group .k-button--danger:last-child {
    border-left-color: hsla(0,0%,100%,.5)
}

.k-button-group .k-button--danger:not(:first-child):not(:last-child) {
    border-left-color: hsla(0,0%,100%,.5);
    border-right-color: hsla(0,0%,100%,.5)
}

.k-button-group .k-button--info:first-child {
    border-right-color: hsla(0,0%,100%,.5)
}

.k-button-group .k-button--info:last-child {
    border-left-color: hsla(0,0%,100%,.5)
}

.k-button-group .k-button--info:not(:first-child):not(:last-child) {
    border-left-color: hsla(0,0%,100%,.5);
    border-right-color: hsla(0,0%,100%,.5)
}

</style>