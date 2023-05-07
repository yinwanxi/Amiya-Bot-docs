import{_ as s,o as a,c as n,a as o}from"./app.cf68ed47.js";const h=JSON.parse('{"title":"\u53D1\u9001\u8BED\u97F3","description":"","frontmatter":{},"headers":[{"level":2,"title":"Chain().voice()","slug":"chain-voice","link":"#chain-voice","children":[]}],"relativePath":"develop/basic/chainBuild/voice.md","lastUpdated":1683455999000}'),t={name:"develop/basic/chainBuild/voice.md"},e=o(`<h1 id="\u53D1\u9001\u8BED\u97F3" tabindex="-1">\u53D1\u9001\u8BED\u97F3 <a class="header-anchor" href="#\u53D1\u9001\u8BED\u97F3" aria-hidden="true">#</a></h1><p>\u53D1\u9001\u4E00\u6BB5 <strong>wav</strong> \u683C\u5F0F\u7684\u97F3\u9891</p><div class="danger custom-block"><p class="custom-block-title">\u6CE8\u610F<br></p><p>QQ \u9891\u9053\u673A\u5668\u4EBA\u6682\u65F6\u4E0D\u652F\u6301\u53D1\u9001\u8BED\u97F3\uFF0C\u76EE\u524D\u4EC5\u652F\u6301 <code>mirai-api-http</code> \u548C <code>cq-http</code>\u3002</p></div><h2 id="chain-voice" tabindex="-1">Chain().voice() <a class="header-anchor" href="#chain-voice" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u7C7B\u578B</th><th>\u91CA\u4E49</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>file</td><td>String</td><td>\u8BED\u97F3 wav \u6587\u4EF6\u8DEF\u5F84</td><td></td></tr><tr><td>title</td><td>String</td><td>\u8BED\u97F3\u6807\u9898</td><td>voice</td></tr></tbody></table><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">voice</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_message</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">keywords</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Message</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">voice</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u963F\u7C73\u5A05_\u95EE\u5019.wav</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div>`,7),l=[e];function p(c,r,i,d,F,D){return a(),n("div",null,l)}const A=s(t,[["render",p]]);export{h as __pageData,A as default};
