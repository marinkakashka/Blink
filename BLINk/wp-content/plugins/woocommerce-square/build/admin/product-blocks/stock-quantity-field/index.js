(()=>{"use strict";const e=window.wc.productEditor,t=window.React,o=window.wc.blockTemplates,n=window.wp.compose,a=window.wp.element,r=window.wp.i18n,s=window.wp.components,c=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"woocommerce-square/stock-quantity-field","version":"0.1.0","title":"Square stock quantity field","category":"widgets","icon":"flag","description":"A block to add stock quantity field to the product editor.","supports":{"html":false,"inserter":false},"attributes":{},"textdomain":"woocommerce-square","editorScript":"file:./index.js"}'),{name:i,...l}=c,u={example:{},edit:function({attributes:c,clientId:i,context:l}){const u=(0,o.useWooBlockProps)(c),p=(0,n.useInstanceId)(s.BaseControl,"product_stock_quantity"),[m]=(0,e.__experimentalUseProductEntityProp)("manage_stock",l.postType),[d,_]=(0,e.__experimentalUseProductEntityProp)("stock_quantity",l.postType),[y]=(0,e.__experimentalUseProductEntityProp)("id",l.postType),[w,f]=(0,e.__experimentalUseProductEntityProp)("is_square_synced",l.postType),[k]=(0,e.__experimentalUseProductEntityProp)("is_sync_enabled",l.postType),[E,q]=(0,e.__experimentalUseProductEntityProp)("is_inventory_sync_enabled",l.postType),[b]=(0,e.__experimentalUseProductEntityProp)("fetch_stock_nonce",l.postType),[P]=(0,e.__experimentalUseProductEntityProp)("sor",l.postType),[h]=(0,e.__experimentalUseProductEntityProp)("status",l.postType),[x,v]=(0,a.useState)(!1),[S,T]=(0,a.useState)(!0),[g,U]=(0,a.useState)(!1),[B,C]=(0,a.useState)(null),[N]=(0,e.__experimentalUseProductEntityProp)("is_gift_card",l.postType),I="publish"===h,{ref:j,error:$,validate:A}=(0,e.useValidation)(`stock_quantity-${i}`,(async function(){if(m&&d&&d<0)return(0,r.__)("Stock quantity must be a positive number.","woocommerce-square")}),[m,d]);async function F(e=!1){const t=new FormData;t.append("action","wc_square_fetch_product_stock_with_square"),t.append("security",b),t.append("product_id",y),v(!0),C(null);let o=await fetch(window.ajaxurl,{method:"POST",body:t});if(o=await o.json(),o.success){const{quantity:t,manage_stock:n}=o.data;e&&T(!1),C(n),!1===n&&(q(!1),T(!0)),null!==t?(_(Number(t)),U(!1)):U(!0)}v(!1)}return(0,a.useEffect)((()=>{"yes"===N&&f(!1)}),[N]),(0,a.useEffect)((()=>{m&&null===d&&_(1)}),[m,d]),(0,a.useEffect)((()=>{U(null===d)}),[d]),w&&!1===B?(0,t.createElement)("div",{...u},(0,t.createElement)("div",{style:{color:"#a00"}},(0,r.__)("Inventory tracking is disabled for this product. Enable it from the Square dashboard.","woocommerce-square"))):m?w&&g?null:(0,t.createElement)("div",{...u},(0,t.createElement)("div",{className:"wp-block-columns"},(0,t.createElement)("div",{className:"wp-block-column"},(0,t.createElement)(s.BaseControl,{id:p,className:$&&"has-error",help:null!=$?$:""},(0,t.createElement)(s.__experimentalInputControl,{id:p,name:"stock_quantity",ref:j,label:(0,r.__)("Available quantity","woocommerce-square"),value:d,onChange:_,onBlur:A,type:"number",min:0,disabled:w&&m&&S}),I&&k&&E&&w&&m&&"square"===P&&(0,t.createElement)("p",null,(0,t.createElement)(s.Button,{variant:"link",href:"#",onClick:()=>F(),isBusy:x},`${(0,r.__)("Managed by Square","woocommerce-square")} (${(0,r.__)("Sync stock from Square","woocommerce-square")})`)),I&&k&&E&&w&&m&&"woocommerce"===P&&(0,t.createElement)("p",null,(0,t.createElement)(s.Button,{variant:"link",text:(0,r.__)("Fetch stock from Square","woocommerce-square"),onClick:()=>F(!0),isBusy:x})))),(0,t.createElement)("div",{className:"wp-block-column"}))):null}};(0,e.registerProductEditorBlockType)({name:i,metadata:l,settings:u})})();