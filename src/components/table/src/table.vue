<template>
    <div class="x-table" :class="{
            'x-table-bordered': bordered,
            'x-table-striped': striped
            }">
        <div class="x-table-hidden" ref="hiddenColumns"><slot></slot></div>
        <div class="x-table-header-wrapper" ref="headerWrapper">
            <table>
                <colgroup>
                    <col
                        v-for="item in columns"
                        :width="item.width"
                    >
                </colgroup>
                <x-thead
                    :columns="columns"
                    :selected-status="selectedStatus"
                    @changeCheckboxAll="onChangeCheckboxAll"
                />
            </table>
        </div>
        <div class="x-table-body-wrapper" :style="bodyStyle" ref="bodyWrapper">
            <table>
                <colgroup>
                    <col
                        v-for="item in columns"
                        :width="item.width"
                    >
                </colgroup>
                <x-tbody
                    :data="data"
                    :columns="columns"
                    :row-class-name="rowClassName"
                    :selected-value-list="selectedValueList"
                    :selected-value="selectedValue"
                    @changeCheckbox="onChangeCheckbox"
                    @changeRadio="onChangeRadio"
                    @setHoverRow="setHoverRow"
                    @removeHoverRow="removeHoverRow"
                />
            </table>
        </div>
        <div :class="{'x-table-fixed': true, 'x-table-scroll-position-left': scrollXLeft === 0}" :style="fixedLeftTableStyle" v-show="fixedNum.length > 0 && scrollbarXH > 0">
            <div class="x-table-fixed-header-wrapper" ref="fixedHeaderWrapper">
                <table>
                    <colgroup>
                        <col
                            v-for="item in columns"
                            :width="item.width"
                        >
                    </colgroup>
                    <x-thead
                        :columns="columns"
                        :selected-status="selectedStatus"
                        @changeCheckboxAll="onChangeCheckboxAll"
                    />
                </table>
            </div>
            <div class="x-table-fixed-body-wrapper" ref="fixedBodyWrapper" :style="fixedBodyStyle">
                <table>
                    <colgroup>
                        <col
                            v-for="item in columns"
                            :width="item.width"
                        >
                    </colgroup>
                    <x-tbody
                        :data="data"
                        :columns="columns"
                        :row-class-name="rowClassName"
                        :selected-value-list="selectedValueList"
                        :selected-value="selectedValue"
                        @changeCheckbox="onChangeCheckbox"
                        @changeRadio="onChangeRadio"
                        @setHoverRow="setHoverRow"
                        @removeHoverRow="removeHoverRow"
                    />
                </table>
            </div>
        </div>
        <div :class="{'x-table-fixed-right': true, 'x-table-scroll-position-right': scrollXRight === 0}" :style="fixedRightTableStyle" v-show="rightFixedColumns.length > 0 && scrollbarXH > 0">
            <div class="x-table-fixed-right-header-wrapper" ref="rightFixedHeaderWrapper">
                <table>
                    <colgroup>
                        <col
                            v-for="item in columns"
                            :width="item.width"
                        >
                    </colgroup>
                    <x-thead
                        :columns="columns"
                        :selected-status="selectedStatus"
                        @changeCheckboxAll="onChangeCheckboxAll"
                    />
                </table>
            </div>
            <div class="x-table-fixed-right-body-wrapper" ref="rightFixedBodyWrapper" :style="fixedBodyStyle">
                <table>
                    <colgroup>
                        <col
                            v-for="item in columns"
                            :width="item.width"
                        >
                    </colgroup>
                    <x-tbody
                        :data="data"
                        :columns="columns"
                        :row-class-name="rowClassName"
                        :selected-value-list="selectedValueList"
                        :selected-value="selectedValue"
                        @changeCheckbox="onChangeCheckbox"
                        @changeRadio="onChangeRadio"
                        @setHoverRow="setHoverRow"
                        @removeHoverRow="removeHoverRow"
                    />
                </table>
            </div>
        </div>
        <!-- <slot></slot> -->
        <div class="x-table-empty-tip" v-if="data.length === 0" ref="emptyTip">
            {{emptyTip}}
        </div>
    </div>
</template>

<script>
    import THead from './thead.js';
    import TBody from './tbody.js';
    export default {
        name: 'XTable',

        props: {
            data: {
                type: Array,
                default() {
                    return [];
                }
            },
            bordered: {
                type: Boolean,
                default: false
            },
            striped: {
                type: Boolean,
                default: false
            },
            height: {
                type: String,
                default: ''
            },
            emptyTip: {
                type: String,
                default: '暂无数据'
            },
            rowClassName: {
                type: [String, Function]
            },
            initialSelectedValueList: {
                type: Array,
                default() {
                    return [];
                }
            },
            initialSelectedValue: {
                type: [String, Number]
            },
            selectionChange: {
                type: Function
            },
            radioChange: {
                type: Function
            }
        },

        components: {
            'x-tbody': TBody,
            'x-thead': THead
        },

        data() {
            return {
                columns: [],
                rowKey: '',
                tableWidth: null,
                headerHeight: '',
                scrollbarXH: 0,
                scrollbarYW: 0,
                scrollXLeft: 0,
                scrollXRight: 0,
                selectedValueList: this.initialSelectedValueList,
                selectedValue: this.initialSelectedValue
            };
        },
        computed: {
            // none partial all
            selectedStatus() {
                /* eslint-disable no-else-return */
                if (this.selectedValueList.length === 0) {
                    return 'none';
                }
                else {
                    if (this.selectedValueList.length === this.data.length) {
                        return 'all';
                    }
                    return 'partial';
                }
                /* eslint-enable no-else-return */
            },
            dataMap() {
                let dataMap = {};
                this.data.forEach(item => {
                    let value = item[this.rowKey];
                    dataMap[value] = item;
                });
                return dataMap;
            },
            bodyStyle() {
                let style = {};
                if (this.height) {
                    style['max-height'] = (+this.height - this.headerHeight) + 'px';
                }
                return style;
            },
            fixedBodyStyle() {
                let style = {};
                if (this.height) {
                    style['max-height'] = (+this.height - this.headerHeight - this.scrollbarXH) + 'px';
                }
                return style;
            },
            fixedLeftWidth() {
                if (this.columns.length > 0 && this.columns[0].width) {
                    return this.columns[0].width;
                }
                return '';
            },
            fixedRightWidth() {
                let columnsLen = this.columns.length;
                if (columnsLen > 0 && this.columns[columnsLen - 1].width) {
                    return this.columns[columnsLen - 1].width;
                }
                return '';
            },
            fixedLeftTableStyle() {
                let style = {
                    'width': this.fixedLeftWidth,
                };
                return style;
            },
            fixedRightTableStyle() {
                let style = {
                    'width': this.fixedRightWidth,
                };
                if (this.height) {
                    style['right'] = this.scrollbarYW + 'px';
                }
                return style;
            },
            fixedNum() {
                return this.columns.filter((column) => column.fixed === 'left');
            },
            rightFixedColumns() {
                return this.columns.filter((column) => column.fixed === 'right');
            }
        },
        watch: {
            data() {
                this.$nextTick(() => {
                    this.scrollbarXH = this.getScrollBarXHeight();
                });
            },
            columns() {
                this.$nextTick(() => {
                    this.headerHeight = this.$refs.headerWrapper.offsetHeight;
                    this.scrollbarYW = this.getScrollbarYWidth();
                });
            },
            initialSelectedValue(value) {
                this.selectedValue = value;
            },
            initialSelectedValueList(value) {
                this.selectedValueList = value;
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.resize();
            });
            this.bindEvents();
        },
        destroyed() {
            window.removeEventListener('resize', this.resize);
        },

        methods: {
            bindEvents() {
                const { headerWrapper } = this.$refs;
                const refs = this.$refs;
                this.$refs.bodyWrapper.addEventListener('scroll', () => {
                    if (headerWrapper) {
                        headerWrapper.scrollLeft = refs.bodyWrapper.scrollLeft;
                        this.updateScrollXPosition();
                    }
                    if (refs.fixedBodyWrapper) {
                        refs.fixedBodyWrapper.scrollTop = refs.bodyWrapper.scrollTop;
                    };
                    if (refs.rightFixedBodyWrapper) {
                        refs.rightFixedBodyWrapper.scrollTop = refs.bodyWrapper.scrollTop;
                    };
                });
                window.addEventListener('resize', this.resize);
            },
            resize() {
                this.headerHeight = this.$refs.headerWrapper.offsetHeight;
                this.scrollbarXH = this.getScrollBarXHeight();
                this.scrollbarYW = this.getScrollbarYWidth();
                this.updateScrollXPosition();
            },
            getScrollBarXHeight() {
                return this.$refs.bodyWrapper.offsetHeight - this.$refs.bodyWrapper.clientHeight;
            },
            getScrollbarYWidth() {
                return this.$refs.bodyWrapper.offsetWidth - this.$refs.bodyWrapper.clientWidth;
            },
            updateScrollXPosition() {
                this.scrollXLeft = this.$refs.bodyWrapper.scrollLeft;
                this.scrollXRight = this.getScrollXRight();
            },
            getScrollXRight() {
                return this.$refs.bodyWrapper.scrollWidth - (this.$refs.bodyWrapper.scrollLeft + this.$refs.bodyWrapper.clientWidth);
            },
            getDataList(valueList) {
                return valueList.map(value => {
                    return this.dataMap[value];
                });
            },
            onChangeCheckboxAll(status) {
                if (status) {
                    this.selectedValueList = this.data.map(item => {
                        return item[this.rowKey];
                    });
                }
                else {
                    this.selectedValueList = [];
                }
                this.$emit(
                    'selection-change',
                    this.selectedValueList,
                    this.getDataList(this.selectedValueList)
                );
            },
            onChangeCheckbox(status, rowKey) {
                let index = this.selectedValueList.indexOf(rowKey);

                if (status) {
                    if (index === -1) {
                        this.selectedValueList = this.selectedValueList.concat(rowKey);
                    }
                }
                else {
                    if (index > -1) {
                        this.selectedValueList.splice(index, 1);
                    }
                }
                this.$emit(
                    'selection-change',
                    this.selectedValueList,
                    this.getDataList(this.selectedValueList)
                );
            },
            onChangeRadio(status, value) {
                this.selectedValue = this.selectedValue === value ? '' : value;
                this.$emit(
                    'radio-change',
                    this.selectedValue,
                    this.dataMap[this.selectedValue]
                );
            },
            setHoverRow(index) {
                this.$el.querySelectorAll('tbody').forEach((tbody, trIndex) => {
                    if(tbody.children.length > index) {
                        tbody.children[index].classList.add('hover-row');
                    }
                });
            },
            removeHoverRow(index) {
                this.$el.querySelectorAll('tbody').forEach((tbody, trIndex) => {
                    if(tbody.children.length > index) {
                        tbody.children[index].classList.remove('hover-row');
                    }
                });
            },
        }
    };
</script>
