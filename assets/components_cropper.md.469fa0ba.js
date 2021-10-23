import{o as n,c as a,a as s}from"./app.b2699450.js";const t='{"title":"Cropper","description":"","frontmatter":{},"headers":[{"level":2,"title":"CropperImage","slug":"cropperimage"},{"level":3,"title":"Usage","slug":"usage"},{"level":3,"title":"Props","slug":"props"},{"level":2,"title":"CropperAvatar","slug":"cropperavatar"},{"level":3,"title":"Usage","slug":"usage-1"},{"level":3,"title":"Props","slug":"props-1"},{"level":3,"title":"Events","slug":"events"},{"level":3,"title":"Methods","slug":"methods"}],"relativePath":"components/cropper.md","lastUpdated":1634985023087}',p={},o=s('<h1 id="cropper"><a class="header-anchor" href="#cropper" aria-hidden="true">#</a> Cropper</h1><p>图片裁剪组件</p><h2 id="cropperimage"><a class="header-anchor" href="#cropperimage" aria-hidden="true">#</a> CropperImage</h2><p>图片裁剪组件</p><h3 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CropperImage</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>refCropper<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@cropend</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCropend<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 40vw</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> CropperImage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Cropper&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> img <span class="token keyword">from</span> <span class="token string">&#39;/@/assets/images/header.jpg&#39;</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span>\n      CropperImage<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">const</span> cropperImg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">function</span> <span class="token function">handleCropend</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> imgBase64<span class="token punctuation">,</span> imgInfo <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        info<span class="token punctuation">.</span>value <span class="token operator">=</span> imgInfo<span class="token punctuation">;</span>\n        cropperImg<span class="token punctuation">.</span>value <span class="token operator">=</span> imgBase64<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        img<span class="token punctuation">,</span>\n        info<span class="token punctuation">,</span>\n        cropperImg<span class="token punctuation">,</span>\n        handleCropend<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>src</td><td><code>string</code></td><td>-</td><td>图片源</td></tr><tr><td>alt</td><td><code>string</code></td><td>-</td><td>图片 alt</td></tr><tr><td>circled</td><td><code>boolean</code></td><td><code>false</code></td><td>圆形裁剪框</td></tr><tr><td>realTimePreview</td><td><code>boolean</code></td><td><code>true</code></td><td>实时触发预览</td></tr><tr><td>height</td><td><code>string</code></td><td><code>360px</code></td><td>高度</td></tr><tr><td>crossorigin</td><td><code>string</code></td><td>-</td><td>crossorigin</td></tr><tr><td>imageStyle</td><td><code>object</code></td><td>``</td><td>图片样式</td></tr><tr><td>options</td><td><code>object</code></td><td><code>DefaultOptions</code></td><td>corpperjs 配置项</td></tr></tbody></table><h4 id="defaultoptions"><a class="header-anchor" href="#defaultoptions" aria-hidden="true">#</a> DefaultOptions</h4><div class="language-ts"><pre><code><span class="token punctuation">{</span>\n  aspectRatio<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  zoomable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  zoomOnTouch<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  zoomOnWheel<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  cropBoxMovable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  cropBoxResizable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  toggleDragModeOnDblclick<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  autoCrop<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  background<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  highlight<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  center<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  responsive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  restore<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  checkCrossOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  checkOrientation<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  scalable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  modal<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  guides<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  movable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  rotatable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="cropperavatar"><a class="header-anchor" href="#cropperavatar" aria-hidden="true">#</a> CropperAvatar</h2><p>头像裁剪组件</p><h3 id="usage-1"><a class="header-anchor" href="#usage-1" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CropperAvatar</span> <span class="token attr-name">:uploadApi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uploadApi<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> CropperAvatar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Cropper&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> uploadApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/api/sys/upload&#39;</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span>\n      CropperAvatar<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="props-1"><a class="header-anchor" href="#props-1" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>说明</th><th>版本</th></tr></thead><tbody><tr><td>width</td><td><code>string,number</code></td><td><code>200px</code></td><td>图片源</td><td></td></tr><tr><td>uploadApi</td><td><code>({ file: Blob, name: string }) =&gt; Promise&lt;void&gt;</code></td><td>-</td><td>图片上传接口</td><td></td></tr><tr><td>value</td><td><code>String</code></td><td>-</td><td>当前头像地址(v-model)</td><td>2.5.3</td></tr><tr><td>showBtn</td><td><code>Boolean</code></td><td>true</td><td>是否显示按钮</td><td>2.5.3</td></tr><tr><td>btnText</td><td><code>String</code></td><td>-</td><td>按钮文案</td><td>2.5.3</td></tr><tr><td>btnProps</td><td><code>ButtonProps</code></td><td>-</td><td>按钮的其它属性</td><td>2.5.3</td></tr></tbody></table><h3 id="events"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3><table><thead><tr><th>名称</th><th>参数</th><th>说明</th><th>版本</th></tr></thead><tbody><tr><td>change</td><td><code>value: String</code></td><td>当头像上传完成时触发</td><td>2.5.3</td></tr></tbody></table><h3 id="methods"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h3><table><thead><tr><th>名称</th><th>定义</th><th>说明</th><th>版本</th></tr></thead><tbody><tr><td>openModal</td><td><code>()=&gt;void</code></td><td>打开上传Modal</td><td>2.5.3</td></tr><tr><td>closeModal</td><td><code>()=&gt;void</code></td><td>关闭上传Modal</td><td>2.5.3</td></tr></tbody></table>',20);p.render=function(s,t,p,e,c,l){return n(),a("div",null,[o])};export default p;export{t as __pageData};
