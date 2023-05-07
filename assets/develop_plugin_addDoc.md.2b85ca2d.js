import{_ as s,o as n,c as a,a as l}from"./app.cf68ed47.js";const C=JSON.parse('{"title":"\u6DFB\u52A0\u63D2\u4EF6\u6587\u6863","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6DFB\u52A0\u4E00\u4E2A markdown \u6587\u6863","slug":"\u6DFB\u52A0\u4E00\u4E2A-markdown-\u6587\u6863","link":"#\u6DFB\u52A0\u4E00\u4E2A-markdown-\u6587\u6863","children":[]},{"level":2,"title":"\u76F4\u63A5\u5728\u53C2\u6570\u5185\u7F16\u5199","slug":"\u76F4\u63A5\u5728\u53C2\u6570\u5185\u7F16\u5199","link":"#\u76F4\u63A5\u5728\u53C2\u6570\u5185\u7F16\u5199","children":[]}],"relativePath":"develop/plugin/addDoc.md","lastUpdated":1683455999000}'),p={name:"develop/plugin/addDoc.md"},o=l(`<h1 id="\u6DFB\u52A0\u63D2\u4EF6\u6587\u6863" tabindex="-1">\u6DFB\u52A0\u63D2\u4EF6\u6587\u6863 <a class="header-anchor" href="#\u6DFB\u52A0\u63D2\u4EF6\u6587\u6863" aria-hidden="true">#</a></h1><p>\u4F60\u5E94\u8BE5\u6DFB\u52A0\u4E00\u4E2A\u6587\u6863\u5E76\u8BE6\u7EC6\u63CF\u8FF0\u63D2\u4EF6\u7684\u4F7F\u7528\u65B9\u6CD5</p><h2 id="\u6DFB\u52A0\u4E00\u4E2A-markdown-\u6587\u6863" tabindex="-1">\u6DFB\u52A0\u4E00\u4E2A markdown \u6587\u6863 <a class="header-anchor" href="#\u6DFB\u52A0\u4E00\u4E2A-markdown-\u6587\u6863" aria-hidden="true">#</a></h2><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">Amiya-Bot</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 pluginsDev</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 myPlugin</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 __init__.py</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 main.py</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   ...</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>demo \u5141\u8BB8\u76F4\u63A5\u4F7F\u7528 markdown \u6587\u4EF6\u8DEF\u5F84\u4F5C\u4E3A\u6587\u6863\uFF0C\u53EA\u9700\u8981\u628A\u8DEF\u5F84\u4F20\u5165\u5230 PluginInstance \u5BF9\u8C61\u7684 <code>document</code> \u53C2\u6570\u3002</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> os</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> amiyabot </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> PluginInstance</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">plugin_dir </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> os</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dirname</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">__file__</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">bot </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">PluginInstance</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">=</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&#39;</span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">plugin_dir</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">/README.md&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u76F4\u63A5\u5728\u53C2\u6570\u5185\u7F16\u5199" tabindex="-1">\u76F4\u63A5\u5728\u53C2\u6570\u5185\u7F16\u5199 <a class="header-anchor" href="#\u76F4\u63A5\u5728\u53C2\u6570\u5185\u7F16\u5199" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">\u63D0\u793A<br></p><p>\u6211\u4EEC\u4E0D\u63A8\u8350\u8FD9\u79CD\u505A\u6CD5\uFF0C\u9664\u975E\u4F60\u7684\u63D2\u4EF6\u6587\u6863\u53EA\u6709\u5C11\u91CF\u6587\u672C\u3002</p></div><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#A6ACCD;">bot </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">PluginInstance</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">        ...</span></span>
<span class="line"><span style="color:#C3E88D;">    </span><span style="color:#89DDFF;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div>`,9),e=[o];function c(t,r,i,d,D,y){return n(),a("div",null,e)}const F=s(p,[["render",c]]);export{C as __pageData,F as default};
