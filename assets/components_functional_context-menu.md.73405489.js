import{o as n,c as s,a}from"./app.b2699450.js";const t='{"title":"ContextMenu","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"createContextMenu","slug":"createcontextmenu"}],"relativePath":"components/functional/context-menu.md","lastUpdated":1634985023087}',p={},o=a('<h1 id="contextmenu"><a class="header-anchor" href="#contextmenu" aria-hidden="true">#</a> ContextMenu</h1><p>函数式创建右键菜单组件， 只要能拿到 dom 的 <code>event</code> 对象就能为其创建右键菜单。</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@contextmenu</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleContext<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Right Click on me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> useContextMenu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/hooks/web/useContextMenu&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> CollapseContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Container&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> useMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/hooks/web/useMessage&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> CollapseContainer <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> <span class="token punctuation">[</span>createContextMenu<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useContextMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">const</span> <span class="token punctuation">{</span> createMessage <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">function</span> <span class="token function">handleContext</span><span class="token punctuation">(</span><span class="token parameter">e<span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">createContextMenu</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          event<span class="token operator">:</span> e<span class="token punctuation">,</span>\n          items<span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              label<span class="token operator">:</span> <span class="token string">&#39;New&#39;</span><span class="token punctuation">,</span>\n              icon<span class="token operator">:</span> <span class="token string">&#39;ant-design:plus-outlined&#39;</span><span class="token punctuation">,</span>\n              <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                createMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&#39;click new&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n              label<span class="token operator">:</span> <span class="token string">&#39;Open&#39;</span><span class="token punctuation">,</span>\n              icon<span class="token operator">:</span> <span class="token string">&#39;ant-design:folder-open-filled&#39;</span><span class="token punctuation">,</span>\n              <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                createMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&#39;click open&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span> handleContext <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="createcontextmenu"><a class="header-anchor" href="#createcontextmenu" aria-hidden="true">#</a> createContextMenu</h2><p><strong>Options</strong></p><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>event</td><td><code>Event</code></td><td>-</td><td>-</td><td>需要创建的 dom 的 <code>Event</code> 对象</td></tr><tr><td>items</td><td><code>ContextMenuItem[]</code></td><td>-</td><td>-</td><td>右键菜单列表，<code>ContextMenuItem</code>见下方说明</td></tr></tbody></table><p><strong>ContextMenuItem</strong></p><table><thead><tr><th>属性</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>label</td><td><code>string</code></td><td>文本</td></tr><tr><td>icon</td><td><code>string</code></td><td>图标,参考图标组件</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td>是否禁用</td></tr><tr><td>handler</td><td><code>()=&gt;void</code></td><td>点击触发函数</td></tr></tbody></table>',9);p.render=function(a,t,p,e,c,u){return n(),s("div",null,[o])};export default p;export{t as __pageData};
