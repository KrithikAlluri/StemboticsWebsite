import{j as e}from"./jsx-runtime.D5qyYPMi.js";import{m}from"./marked.esm.DsseyvZg.js";import{r as i}from"./index.CZlPm10g.js";const x=({feature_tab:a})=>{const[l,r]=i.useState(0);return e.jsxs("div",{className:"row mt-[120px] items-center",children:[e.jsx("div",{className:"col-8 mx-auto mb-10 text-center",children:e.jsx("h2",{dangerouslySetInnerHTML:{__html:m.parseInline(a.title)}})}),e.jsx("div",{className:"lg:col-6",children:a.list.map((t,s)=>e.jsx("div",{className:`features-tab-penel ${l===s?"active":void 0} relative`,children:e.jsx("img",{className:"w-full object-contain",src:t.image})},`item-${s}`))}),e.jsx("div",{className:"mt-6 lg:col-6 lg:mt-0",children:e.jsx("div",{className:"lg:max-w-[473px]",children:a.list.map((t,s)=>e.jsxs("div",{className:`features-tab-item ${l===s?"active":void 0} mt-9 first:mt-0`,children:[e.jsx("h2",{className:"lg:text-2xl",dangerouslySetInnerHTML:{__html:m.parseInline(t.title)},onClick:()=>r(s)}),e.jsx("p",{className:"mt-4",children:t.content})]},s))})})]})};export{x as default};