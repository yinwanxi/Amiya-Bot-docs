import{_ as s,o as n,c as a,a as l}from"./app.cf68ed47.js";const C=JSON.parse('{"title":"\u521B\u5EFA\u63D2\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7F16\u5199\u63D2\u4EF6\u7A0B\u5E8F","slug":"\u7F16\u5199\u63D2\u4EF6\u7A0B\u5E8F","link":"#\u7F16\u5199\u63D2\u4EF6\u7A0B\u5E8F","children":[]},{"level":2,"title":"\u63D2\u4EF6\u5185\u9759\u6001\u8D44\u6E90\u7684\u4F7F\u7528","slug":"\u63D2\u4EF6\u5185\u9759\u6001\u8D44\u6E90\u7684\u4F7F\u7528","link":"#\u63D2\u4EF6\u5185\u9759\u6001\u8D44\u6E90\u7684\u4F7F\u7528","children":[]},{"level":2,"title":"\u5BFC\u51FA\u63D2\u4EF6\u7684\u5B9E\u4F8B","slug":"\u5BFC\u51FA\u63D2\u4EF6\u7684\u5B9E\u4F8B","link":"#\u5BFC\u51FA\u63D2\u4EF6\u7684\u5B9E\u4F8B","children":[]}],"relativePath":"develop/plugin/create.md","lastUpdated":1683455999000}'),p={name:"develop/plugin/create.md"},o=l(`<h1 id="\u521B\u5EFA\u63D2\u4EF6" tabindex="-1">\u521B\u5EFA\u63D2\u4EF6 <a class="header-anchor" href="#\u521B\u5EFA\u63D2\u4EF6" aria-hidden="true">#</a></h1><p>\u5728 pluginsDev \u76EE\u5F55\u5185\uFF0C\u521B\u5EFA\u4E00\u4E2A Python package \u5F62\u5F0F\u7684\u6A21\u5757\u3002\u4E3A\u4E86\u9632\u6B62\u52A0\u8F7D\u63D2\u4EF6\u65F6\u7684<strong>\u5168\u5C40\u73AF\u5883\u53D8\u91CF\u6C61\u67D3</strong>\u3002\u4F60\u7684\u4E1A\u52A1\u903B\u8F91\u5FC5\u987B\u5728\u53E6\u4E00\u4E2A\u5165\u53E3\u6587\u4EF6\u5185\u8FDB\u884C\u3002</p><p>\u521B\u5EFA\u5165\u53E3\u6587\u4EF6 <code>main.py</code></p><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">Amiya-Bot</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 pluginsDev</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 myPlugin</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 __init__.py</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 main.py</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   ...</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u7F16\u5199\u63D2\u4EF6\u7A0B\u5E8F" tabindex="-1">\u7F16\u5199\u63D2\u4EF6\u7A0B\u5E8F <a class="header-anchor" href="#\u7F16\u5199\u63D2\u4EF6\u7A0B\u5E8F" aria-hidden="true">#</a></h2><p>\u5728 <code>main.py</code> \u5185\u7F16\u5199\u63D2\u4EF6\u7684\u6CE8\u518C\u7A0B\u5E8F</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> amiyabot </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> PluginInstance</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">bot </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">PluginInstance</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6211\u7684\u63D2\u4EF6</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;">version</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1.0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;">plugin_id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">my-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;">description</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6211\u7684\u7B2C\u4E00\u4E2A\u63D2\u4EF6</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p><code>PluginInstance</code> \u5BF9\u8C61\u7EE7\u627F\u4E86\u5DE5\u5382\u7C7B <code>BotHandlerFactory</code>\uFF0C\u8FD9\u610F\u5473\u7740\u4F60\u5B8C\u5168\u53EF\u4EE5\u6309\u7167 <a href="/develop/basic/messageHandler.html">\u5F00\u53D1\u6307\u5357</a> \u53BB\u7F16\u5199\u4F60\u7684\u63D2\u4EF6\u529F\u80FD\u3002</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_message</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">keywords</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Message</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&#39;hello, </span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">nickname</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_event</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GUILD_CREATE</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Event</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> BotAdapterProtocol</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u4E9B\u6D88\u606F\u54CD\u5E94\u5668\u90FD\u4F1A\u5728\u63D2\u4EF6\u88AB\u52A0\u8F7D\u65F6\u6CE8\u518C\u5230\u4E3B\u4F53\u7A0B\u5E8F\u4E2D\u3002</p><h2 id="\u63D2\u4EF6\u5185\u9759\u6001\u8D44\u6E90\u7684\u4F7F\u7528" tabindex="-1">\u63D2\u4EF6\u5185\u9759\u6001\u8D44\u6E90\u7684\u4F7F\u7528 <a class="header-anchor" href="#\u63D2\u4EF6\u5185\u9759\u6001\u8D44\u6E90\u7684\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F60\u7684\u63D2\u4EF6\u5305\u542B\u9759\u6001\u8D44\u6E90\uFF0C\u5728\u8BFB\u53D6\u5B83\u4EEC\u65F6\uFF0C\u5E94\u8BE5\u4EE5\u63D2\u4EF6\u7684\u7EDD\u5BF9\u76EE\u5F55\u8BFB\u53D6\u3002</p><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">Amiya-Bot</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 pluginsDev</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 myPlugin</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 __init__.py</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 main.py</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 file.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   ...</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#676E95;"># main.py</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> os</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">plugin_dir </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> os</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dirname</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">__file__</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">file </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&#39;</span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">plugin_dir</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">/file.txt&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5BFC\u51FA\u63D2\u4EF6\u7684\u5B9E\u4F8B" tabindex="-1">\u5BFC\u51FA\u63D2\u4EF6\u7684\u5B9E\u4F8B <a class="header-anchor" href="#\u5BFC\u51FA\u63D2\u4EF6\u7684\u5B9E\u4F8B" aria-hidden="true">#</a></h2><p>\u5728 <code>__init__.py</code> \u5185\u5BFC\u51FA\u63D2\u4EF6\u7684\u5165\u53E3\uFF0C\u547D\u540D\u4E3A <span style="color:red;">bot</span>\u3002\u8FD9\u4E2A\u547D\u540D\u662F\u56FA\u5B9A\u7684\uFF0C\u5373\u4F7F main \u5185\u90E8\u7684 PluginInstance \u5B9E\u4F8B\u53D8\u91CF\u540D\u4E0D\u4E3A bot\uFF0C\u5728\u5BFC\u51FA\u65F6\u90FD\u5FC5\u987B\u4F7F\u7528 <code>as bot</code> \u91CD\u547D\u540D\u3002</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">main </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> bot</span></span>
<span class="line"></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">\u6CE8\u610F<br></p><p>\u8BF7\u4E0D\u8981\u5728 <code>__init__.py</code> \u5185\u7F16\u5199\u591A\u4F59\u7684\u4EE3\u7801\uFF0C\u6211\u4EEC\u5E0C\u671B\u8FD9\u4E2A\u6587\u4EF6\u6709\u4E14\u53EA\u6709\u4E0A\u9762\u7684\u4E00\u884C\u3002\u63D2\u4EF6\u5728\u52A0\u8F7D\u65F6\uFF0C\u4F1A\u4E34\u65F6\u6DFB\u52A0\u63D2\u4EF6\u76EE\u5F55\u4E3A\u7CFB\u7EDF\u8DEF\u5F84\uFF0C\u8FD9\u4F1A\u4F7F\u4E3B\u6A21\u5757\u7684\u4E00\u4E9B\u5168\u5C40\u4E00\u7B49\u5BF9\u8C61\u6C61\u67D3\u4E3B\u4F53\u7A0B\u5E8F\uFF0C\u5BFC\u81F4\u4E0D\u53EF\u9884\u6D4B\u7684\u540E\u679C\u3002</p></div>`,18),e=[o];function c(t,r,y,D,F,i){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{C as __pageData,d as default};