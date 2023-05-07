import{_ as s,o as a,c as n,a as l}from"./app.cf68ed47.js";const e="/assets/hello3.bbe26c93.png",A=JSON.parse('{"title":"\u53D1\u9001\u6D88\u606F","description":"","frontmatter":{},"headers":[{"level":2,"title":"Chain \u5BF9\u8C61","slug":"chain-\u5BF9\u8C61","link":"#chain-\u5BF9\u8C61","children":[]},{"level":2,"title":"\u6784\u5EFA\u6D88\u606F\u7684\u65B9\u6CD5","slug":"\u6784\u5EFA\u6D88\u606F\u7684\u65B9\u6CD5","link":"#\u6784\u5EFA\u6D88\u606F\u7684\u65B9\u6CD5","children":[{"level":3,"title":"\u666E\u901A\u6D88\u606F","slug":"\u666E\u901A\u6D88\u606F","link":"#\u666E\u901A\u6D88\u606F","children":[]},{"level":3,"title":"\u5408\u5E76\u8F6C\u53D1\u6D88\u606F","slug":"\u5408\u5E76\u8F6C\u53D1\u6D88\u606F","link":"#\u5408\u5E76\u8F6C\u53D1\u6D88\u606F","children":[]}]},{"level":2,"title":"\u7A7A Chain","slug":"\u7A7A-chain","link":"#\u7A7A-chain","children":[]}],"relativePath":"develop/basic/sendMessage.md","lastUpdated":1683455999000}'),p={name:"develop/basic/sendMessage.md"},o=l(`<h1 id="\u53D1\u9001\u6D88\u606F" tabindex="-1">\u53D1\u9001\u6D88\u606F <a class="header-anchor" href="#\u53D1\u9001\u6D88\u606F" aria-hidden="true">#</a></h1><p>\u5728\u6D88\u606F\u54CD\u5E94\u5668\u5185\u8FD4\u56DE Chain \u5BF9\u8C61\uFF0C\u6216\u4F7F\u7528 Message \u5BF9\u8C61\u7684 send \u65B9\u6CD5\uFF0C\u5747\u53EF\u53D1\u9001\u6D88\u606F\u3002</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_message</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">keywords</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Message</span><span style="color:#89DDFF;">):</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">nickname</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><img style="width:220px;" src="`+e+`" alt="image"><h2 id="chain-\u5BF9\u8C61" tabindex="-1">Chain \u5BF9\u8C61 <a class="header-anchor" href="#chain-\u5BF9\u8C61" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u7C7B\u578B</th><th>\u91CA\u4E49</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>data</td><td>Message</td><td>Message \u5BF9\u8C61</td><td>None</td></tr><tr><td>at</td><td>Bool</td><td>\u662F\u5426 @ \u7528\u6237</td><td>True</td></tr><tr><td>reference</td><td>Bool</td><td>\u662F\u5426\u56DE\u590D\u7528\u6237\uFF08\u5F15\u7528\u6D88\u606F\uFF09</td><td>False</td></tr></tbody></table><p><code>Chain</code> \u5BF9\u8C61\u662F\u6784\u5EFA\u4F60\u7684\u6D88\u606F\u4F53\u7684\u5DE5\u5177\u7C7B\u3002\u4EFB\u4F55\u9700\u8981\u53D1\u9001\u6D88\u606F\u7684\u65F6\u5019\uFF0C\u6D88\u606F\u90FD\u5FC5\u987B\u7531 Chain \u7C7B\u521B\u5EFA\u3002<br> Chain \u5BF9\u8C61\u63D0\u4F9B\u4E30\u5BCC\u7684\u6D88\u606F\u6784\u5EFA\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u8BA9\u4F60\u53D1\u9001\u591A\u5F69\u7684\u6587\u5B57\u56FE\u7247\uFF0C\u751A\u81F3\u662Fhtml\u6A21\u677F\u3002<br></p><p>\u8FD9\u662F\u6700\u7B80\u5355\u7684\u4E00\u6761\u6587\u672C\u6D88\u606F\uFF1A</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello, world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6784\u5EFA\u6D88\u606F\u7684\u65B9\u6CD5" tabindex="-1">\u6784\u5EFA\u6D88\u606F\u7684\u65B9\u6CD5 <a class="header-anchor" href="#\u6784\u5EFA\u6D88\u606F\u7684\u65B9\u6CD5" aria-hidden="true">#</a></h2><h3 id="\u666E\u901A\u6D88\u606F" tabindex="-1">\u666E\u901A\u6D88\u606F <a class="header-anchor" href="#\u666E\u901A\u6D88\u606F" aria-hidden="true">#</a></h3><p>Chain \u5BF9\u8C61\u652F\u6301\u94FE\u5F0F\u8BED\u6CD5\uFF0C\u7528\u4E8E\u6784\u5EFA\u590D\u6742\u7684\u6D88\u606F\u7ED3\u6784\u3002\u4EE5\u4E0B\u65B9\u6CD5\u5747\u8FD4\u56DE Chain \u5BF9\u8C61\u81EA\u8EAB\u3002</p><ul><li><a href="/develop/basic/chainBuild/at.html">\u53D1\u9001 At</a></li><li><a href="/develop/basic/chainBuild/face.html">\u53D1\u9001\u8868\u60C5</a></li><li><a href="/develop/basic/chainBuild/text.html">\u53D1\u9001\u6587\u5B57</a></li><li><a href="/develop/basic/chainBuild/image.html">\u53D1\u9001\u56FE\u7247</a></li><li><a href="/develop/basic/chainBuild/textImage.html">\u53D1\u9001\u6587\u5B57\u751F\u6210\u7684\u56FE\u7247</a></li><li><a href="/develop/basic/chainBuild/html.html">\u53D1\u9001 html \u751F\u6210\u7684\u56FE\u7247</a></li><li><a href="/develop/basic/chainBuild/markdown.html">\u53D1\u9001 markdown \u751F\u6210\u7684\u56FE\u7247</a></li><li><a href="/develop/basic/chainBuild/voice.html">\u53D1\u9001\u8BED\u97F3</a></li><li><a href="/develop/basic/chainBuild/extend.html">\u53D1\u9001\u539F\u751F\u6A21\u677F &amp; CQ\u7801</a></li></ul><p>\u53EA\u9700\u8981\u6309\u987A\u5E8F\u4EE5\u94FE\u5F0F\u4F7F\u7528\u4E0A\u8FF0\u65B9\u6CD5\uFF0C\u5373\u53EF\u62FC\u63A5\u51FA\u5185\u5BB9\u4E30\u5BCC\u7684\u6D88\u606F\u3002Chain \u5728\u6700\u7EC8\u6784\u5EFA\u6D88\u606F\u7684\u65F6\u5019\uFF0C\u4F1A\u4F18\u5316\u56FE\u7247\u4E0E\u6587\u5B57\u7684\u7EC4\u6210\uFF0C\u51CF\u5C11\u6D88\u606F\u7684\u8BF7\u6C42\u6570\u91CF\u3002</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">...</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">image</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">...</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">...</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">html</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">...</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">\u5173\u4E8E\u8BED\u97F3<br></p><p>voice \u65B9\u6CD5\u5E76\u4E0D\u53C2\u4E0E\u6784\u5EFA\u6D88\u606F\u4F53\uFF0C\u56E0\u4E3A QQ \u65E0\u6CD5\u5728\u53D1\u9001\u7684\u6587\u5B57\u6D88\u606F\u4E2D\u95F4\u9576\u5D4C\u8BED\u97F3\uFF0C\u8BED\u97F3\u5C06\u4F1A\u5355\u72EC\u53D1\u9001\u3002</p></div><h3 id="\u5408\u5E76\u8F6C\u53D1\u6D88\u606F" tabindex="-1">\u5408\u5E76\u8F6C\u53D1\u6D88\u606F <a class="header-anchor" href="#\u5408\u5E76\u8F6C\u53D1\u6D88\u606F" aria-hidden="true">#</a></h3><p>\u5408\u5E76\u8F6C\u53D1\u6D88\u606F\u9700\u8981\u4F7F\u7528\u72EC\u7ACB\u7684\u5DE5\u5177\u7C7B\u521B\u5EFA</p><ul><li><a href="/develop/basic/chainBuild/forward.html">\u53D1\u9001\u5408\u5E76\u8F6C\u53D1\u6D88\u606F</a></li></ul><h2 id="\u7A7A-chain" tabindex="-1">\u7A7A Chain <a class="header-anchor" href="#\u7A7A-chain" aria-hidden="true">#</a></h2><p>\u5B9E\u4F8B\u5316 Chain \u5BF9\u8C61\u65F6\uFF0C\u4E0D\u4F20\u5165 Message \u5BF9\u8C61\u6784\u5EFA\u7684\u3002\u672C\u6587\u79F0\u4E4B\u4E3A <strong>\u201C\u7A7A Chain\u201D</strong>\u3002\u7A7A Chain \u4E00\u822C\u7528\u4E8E\u9884\u6784\u5EFA\u6D88\u606F\u3002</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">...</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">image</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">...</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div>`,22),t=[o];function c(r,i,F,d,h,y){return a(),n("div",null,t)}const u=s(p,[["render",c]]);export{A as __pageData,u as default};