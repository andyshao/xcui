webpackJsonp([17],{421:function(t,s,a){var n=a(0)(a(479),a(480),null,null,null);t.exports=n.exports},453:function(t,s,a){var n=a(454);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(413)("30a4fb3e",n,!0)},454:function(t,s,a){(t.exports=a(412)(!1)).push([t.i,"",""])},479:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),a(453),s.default={data:function(){return{showHello:!0,state1:{},sug1:["水瓶","双鱼","白羊","金牛","双子","巨蟹","狮子","处女","天秤","天蝎","射手","魔羯"],state2:{},sug2:[{text:"北京",value:"131"},{text:"上海",value:"289"},{text:"海口",value:"125"},{text:"三亚",value:"121"},{text:"杭州",value:"179"},{text:"成都",value:"75"},{text:"贵阳",value:"146"}],state3:{},sug3:[]}},watch:{},methods:{request:function(){var t=this.state3.text;this.sug3=t?[{text:t,value:1},{text:t+t,value:2},{text:t+t+t,value:3},{text:t+t+t+t,value:4}]:[]}},mounted:function(){var t=this;window.bdsug={sug:function(s){t.setSug(s.s)},sug2:function(s){t.setSug2(s.s)}}}}},480:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h1",[t._v("Suggestion 输入建议")]),t._v(" "),a("p",[t._v("用户在输入框中输入文字时，展示相关输入建议。")]),t._v(" "),a("h2",[t._v("基本使用：使用文本数组的数据源")]),t._v(" "),a("xcui-demo",[a("div",{slot:"source"},[a("x-suggestion",{attrs:{placeholder:"请输入星座",suggestions:t.sug1},model:{value:t.state1,callback:function(s){t.state1=s},expression:"state1"}}),t._v(" "),a("p",{staticStyle:{"margin-top":"15px"}},[t._v("选中的值："+t._s(t.state1))])],1),t._v(" "),a("span",{slot:"info-title"},[t._v("说明")]),t._v(" "),a("div",{slot:"info"},[a("p",[t._v("基本用法，建议列表为文本格式。设置"),a("code",[t._v("v-model")]),t._v("和"),a("code",[t._v("suggestion")]),t._v("属性即可。可以通过键盘的"),a("code",[t._v("上下方向键")]),t._v("和"),a("code",[t._v("回车键")]),t._v("来控制选择。清除按钮默认展示，可通过"),a("code",[t._v("allow-clear")]),t._v("属性将其关闭。")])]),t._v(" "),a("div",{slot:"highlight"},[a("pre",[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-suggestion")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("v-model")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("state1"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("placeholder")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("请输入星座"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v(":suggestions")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("sug1"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-suggestion")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("p")]),a("span",{staticClass:"token style-attr language-css"},[a("span",{staticClass:"token attr-name"},[t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("style")])]),a("span",{staticClass:"token punctuation"},[t._v('="')]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token property"},[t._v("margin-top")]),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v("15px"),a("span",{staticClass:"token punctuation"},[t._v(";")])]),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("选中的值："),a("span",{staticClass:"token punctuation"},[t._v("{")]),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("state1"),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("p")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token script language-javascript"},[t._v("\n  "),a("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n      "),a("span",{staticClass:"token function"},[t._v("data")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n          "),a("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n              state1"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n              sug1"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("[")]),a("span",{staticClass:"token string"},[t._v("'水瓶'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),a("span",{staticClass:"token string"},[t._v("'双鱼'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),a("span",{staticClass:"token string"},[t._v("'白羊'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),a("span",{staticClass:"token string"},[t._v("'金牛'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),a("span",{staticClass:"token string"},[t._v("'双子'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),a("span",{staticClass:"token string"},[t._v("'巨蟹'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),a("span",{staticClass:"token string"},[t._v("'狮子'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),a("span",{staticClass:"token string"},[t._v("'处女'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),a("span",{staticClass:"token string"},[t._v("'天秤'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),a("span",{staticClass:"token string"},[t._v("'天蝎'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),a("span",{staticClass:"token string"},[t._v("'射手'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),a("span",{staticClass:"token string"},[t._v("'魔羯'")]),a("span",{staticClass:"token punctuation"},[t._v("]")]),t._v("\n          "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n      "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n  "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n")]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n")])])]),t._v(" "),a("h2",[t._v("使用Object数组格式的数据源")]),t._v(" "),a("xcui-demo",[a("div",{slot:"source"},[a("x-suggestion",{attrs:{placeholder:"请输入城市",suggestions:t.sug2},model:{value:t.state2,callback:function(s){t.state2=s},expression:"state2"}}),t._v(" "),a("p",{staticStyle:{"margin-top":"15px"}},[t._v("选中的值："+t._s(t.state2))])],1),t._v(" "),a("span",{slot:"info-title"},[t._v("说明")]),t._v(" "),a("div",{slot:"info"},[a("p",[t._v("支持格式为"),a("code",[t._v("[{text:'text', value:'value'}, ...]")]),t._v(" 的数据源。")])]),t._v(" "),a("div",{slot:"highlight"},[a("pre",[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-suggestion")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("v-model")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("state2"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("placeholder")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("请输入城市"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v(":suggestions")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("sug2"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-suggestion")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("p")]),a("span",{staticClass:"token style-attr language-css"},[a("span",{staticClass:"token attr-name"},[t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("style")])]),a("span",{staticClass:"token punctuation"},[t._v('="')]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token property"},[t._v("margin-top")]),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v("15px"),a("span",{staticClass:"token punctuation"},[t._v(";")])]),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("选中的值："),a("span",{staticClass:"token punctuation"},[t._v("{")]),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("state2"),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("p")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token script language-javascript"},[t._v("\n    "),a("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n        "),a("span",{staticClass:"token function"},[t._v("data")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n            "),a("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                state2"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n                sug2"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("\n                    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("text"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'北京'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" value"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'131'")]),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n                    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("text"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'上海'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" value"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'289'")]),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n                    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("text"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'海口'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" value"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'125'")]),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n                    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("text"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'三亚'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" value"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'121'")]),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n                    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("text"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'杭州'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" value"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'179'")]),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n                    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("text"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'成都'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" value"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'75'")]),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n                    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("text"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'贵阳'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" value"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'146'")]),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n                "),a("span",{staticClass:"token punctuation"},[t._v("]")]),t._v("\n            "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n")]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n")])])]),t._v(" "),a("h2",[t._v("使用远程（请求）数据的数据源")]),t._v(" "),a("xcui-demo",[a("div",{slot:"source"},[a("x-suggestion",{attrs:{placeholder:"请随意输入",suggestions:t.sug3,"input-callback":t.request},model:{value:t.state3,callback:function(s){t.state3=s},expression:"state3"}}),t._v(" "),a("p",{staticStyle:{"margin-top":"15px"}},[t._v("选中的值："+t._s(t.state3))])],1),t._v(" "),a("span",{slot:"info-title"},[t._v("说明")]),t._v(" "),a("div",{slot:"info"},[a("p",[t._v("通过使用"),a("code",[t._v("input-callback")]),t._v("属性定义相关方法, 和"),a("code",[t._v("v-model")]),t._v(" 绑定变量的"),a("code",[t._v("text")]),t._v("值，可以使用远程数据（例如，用"),a("code",[t._v("text")]),t._v("作为请求参数）。本例模拟远程数据。")])]),t._v(" "),a("div",{slot:"highlight"},[a("pre",[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("x-suggestion")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("v-model")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("state3"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("placeholder")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("请随意输入"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v(":suggestions")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("sug3"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v(":input-callback")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("request"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("x-suggestion")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n    "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("p")]),a("span",{staticClass:"token style-attr language-css"},[a("span",{staticClass:"token attr-name"},[t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("style")])]),a("span",{staticClass:"token punctuation"},[t._v('="')]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token property"},[t._v("margin-top")]),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v("15px"),a("span",{staticClass:"token punctuation"},[t._v(";")])]),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("选中的值："),a("span",{staticClass:"token punctuation"},[t._v("{")]),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("state3"),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("p")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("template")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token script language-javascript"},[t._v("\n    "),a("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n        "),a("span",{staticClass:"token function"},[t._v("data")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n            "),a("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                state3"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n                sug3"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("[")]),a("span",{staticClass:"token punctuation"},[t._v("]")]),t._v("\n            "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n        methods"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n            "),a("span",{staticClass:"token function"},[t._v("request")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("\n                "),a("span",{staticClass:"token keyword"},[t._v("const")]),t._v(" v "),a("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("state3"),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("text"),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n                "),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("sug3 "),a("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),a("span",{staticClass:"token operator"},[t._v("!")]),t._v("v "),a("span",{staticClass:"token operator"},[t._v("?")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("[")]),a("span",{staticClass:"token punctuation"},[t._v("]")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("\n                    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("text"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" v"),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" value"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("1")]),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n                    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("text"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" v "),a("span",{staticClass:"token operator"},[t._v("+")]),t._v(" v"),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" value"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("2")]),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n                    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("text"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" v "),a("span",{staticClass:"token operator"},[t._v("+")]),t._v(" v "),a("span",{staticClass:"token operator"},[t._v("+")]),t._v(" v"),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" value"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("3")]),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n                    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("{")])]),t._v("text"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" v "),a("span",{staticClass:"token operator"},[t._v("+")]),t._v(" v "),a("span",{staticClass:"token operator"},[t._v("+")]),t._v(" v "),a("span",{staticClass:"token operator"},[t._v("+")]),t._v(" v"),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" value"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("4")]),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n                "),a("span",{staticClass:"token punctuation"},[t._v("]")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n            "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n    "),a("span",{staticClass:"token punctuation"},[a("span",{staticClass:"token punctuation"},[t._v("}")])]),t._v("\n")]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n\n")])])]),t._v(" "),a("h2",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"markdown-table"},[a("thead",[a("tr",[a("th",[t._v("名字")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认")]),t._v(" "),a("th",[t._v("描述")]),t._v(" "),a("th",[t._v("是否必选")]),t._v(" "),a("th",[t._v("可选值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("和"),a("code",[t._v("v-model")]),t._v("的绑定值")]),t._v(" "),a("td",[t._v("必选")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("placeholder")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("原生属性，输入框默认文本，用于提示")]),t._v(" "),a("td",[t._v("可选")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("disabled")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("是否禁用")]),t._v(" "),a("td",[t._v("可选")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("suggestions")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[t._v("[]")]),t._v(" "),a("td",[t._v("输入建议的数据源")]),t._v(" "),a("td",[t._v("必选")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("inputCallback")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("输入时的回调函数, 可用于触发远程请求")]),t._v(" "),a("td",[t._v("可选")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("allowClear")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("是否允许出现清除图标")]),t._v(" "),a("td",[t._v("可选")]),t._v(" "),a("td",[t._v("true, false")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"markdown-table"},[a("thead",[a("tr",[a("th",[t._v("事件名")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("返回值")]),t._v(" "),a("th",[t._v("设置属性")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("change")]),t._v(" "),a("td",[t._v("选中值改变时触发")]),t._v(" "),a("td",[t._v("当前选中值")]),t._v(" "),a("td",[a("code",[t._v("@change")])])])])])}]}}});