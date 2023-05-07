import{_ as s,o as n,c as a,a as p}from"./app.cf68ed47.js";const i=JSON.parse('{"title":"\u4E8B\u4EF6\u76D1\u542C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6CE8\u518C\u4E8B\u4EF6\u54CD\u5E94","slug":"\u6CE8\u518C\u4E8B\u4EF6\u54CD\u5E94","link":"#\u6CE8\u518C\u4E8B\u4EF6\u54CD\u5E94","children":[{"level":3,"title":"Event \u5BF9\u8C61","slug":"event-\u5BF9\u8C61","link":"#event-\u5BF9\u8C61","children":[]}]},{"level":2,"title":"\u9891\u9053\u4E8B\u4EF6","slug":"\u9891\u9053\u4E8B\u4EF6","link":"#\u9891\u9053\u4E8B\u4EF6","children":[]},{"level":2,"title":"mirai-api-http \u4E8B\u4EF6","slug":"mirai-api-http-\u4E8B\u4EF6","link":"#mirai-api-http-\u4E8B\u4EF6","children":[]},{"level":2,"title":"go-cqhttp \u4E8B\u4EF6","slug":"go-cqhttp-\u4E8B\u4EF6","link":"#go-cqhttp-\u4E8B\u4EF6","children":[]}],"relativePath":"develop/basic/handleEvents.md","lastUpdated":1683455999000}'),o={name:"develop/basic/handleEvents.md"},l=p(`<h1 id="\u4E8B\u4EF6\u76D1\u542C" tabindex="-1">\u4E8B\u4EF6\u76D1\u542C <a class="header-anchor" href="#\u4E8B\u4EF6\u76D1\u542C" aria-hidden="true">#</a></h1><p>\u76D1\u542C\u9891\u9053\u53D1\u751F\u7684\u4E8B\u4EF6\u3002<br> \u4E00\u822C\u6765\u8BF4\u6D88\u606F\uFF08<code>MESSAGE_CREATE</code>\u3001<code>AT_MESSAGE_CREATE</code>\u4EE5\u53CA<code>DIRECT_MESSAGE_CREATE</code>\uFF09\u4E5F\u5C5E\u4E8E\u4E8B\u4EF6\uFF0C\u4F46\u662F\u5728\u6784\u5EFA\u9636\u6BB5\uFF0C\u8FD9\u4E9B\u6D88\u606F\u4E8B\u4EF6\u4F1A\u88AB\u5F52\u7C7B\u5E76\u4EA7\u51FA Message \u5BF9\u8C61\u3002\u5269\u4E0B\u7684\u4E8B\u4EF6\u7C7B\u578B\uFF0C\u5219\u4F1A\u4EA7\u51FA Event \u5BF9\u8C61\u3002\u53EF\u4EE5\u4F7F\u7528 on_event \u88C5\u9970\u5668\u53BB\u83B7\u53D6\u4E8B\u4EF6\u3002</p><h2 id="\u6CE8\u518C\u4E8B\u4EF6\u54CD\u5E94" tabindex="-1">\u6CE8\u518C\u4E8B\u4EF6\u54CD\u5E94 <a class="header-anchor" href="#\u6CE8\u518C\u4E8B\u4EF6\u54CD\u5E94" aria-hidden="true">#</a></h2><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> amiyabot </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Event</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> BotAdapterProtocol</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_event</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Event</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> BotAdapterProtocol</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_event</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GUILD_CREATE</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Event</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> BotAdapterProtocol</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_event</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">CHANNEL_CREATE</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">CHANNEL_UPDATE</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Event</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> BotAdapterProtocol</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"></span></code></pre></div><ul><li><code>on_event</code> \u63A5\u53D7\u4E00\u4E2A<strong>\u4E8B\u4EF6\u540D\u6216\u4E8B\u4EF6\u540D\u5217\u8868</strong>\u4F5C\u4E3A\u53C2\u6570\uFF08\u65E0\u53C2\u6570\u5219\u76D1\u542C\u5168\u4E8B\u4EF6\uFF09\u3002\u4E8B\u4EF6\u540D\u53EF\u53C2\u9605\u5BF9\u5E94\u9002\u914D\u5668\u670D\u52A1\u7684\u5B98\u65B9\u6587\u6863\u3002</li><li>\u54CD\u5E94\u51FD\u6570\u662F\u4E00\u4E2A\u534F\u7A0B\uFF0C\u63A5\u53D7 Event \u5BF9\u8C61\u548C bot \u5B9E\u4F8B\u4E24\u4E2A\u53C2\u6570\u3002</li></ul><h3 id="event-\u5BF9\u8C61" tabindex="-1">Event \u5BF9\u8C61 <a class="header-anchor" href="#event-\u5BF9\u8C61" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u91CA\u4E49</th></tr></thead><tbody><tr><td>appid</td><td>String</td><td>\u53D1\u751F\u8BE5\u4E8B\u4EF6\u7684 Bot AppId</td></tr><tr><td>event_name</td><td>String</td><td>\u4E8B\u4EF6\u540D</td></tr><tr><td>data</td><td>Dict</td><td>\u4E8B\u4EF6\u7684\u5185\u5BB9\u5B57\u5178</td></tr></tbody></table><h2 id="\u9891\u9053\u4E8B\u4EF6" tabindex="-1">\u9891\u9053\u4E8B\u4EF6 <a class="header-anchor" href="#\u9891\u9053\u4E8B\u4EF6" aria-hidden="true">#</a></h2><p>\u9891\u9053\u4E8B\u4EF6 <code>Event.data</code> \u7684\u503C\u4E3A websocket \u6D88\u606F\u4F53\u91CC\u7684 <code>d</code> \u5B57\u6BB5\u5185\u5BB9\u3002</p><p>\u5982\u4E0B\u4E3A <a href="https://bot.q.qq.com/wiki/develop/api/gateway/guild.html#guild-create" target="_blank" rel="noreferrer">\u9891\u9053\u4E8B\u4EF6 - GUILD_CREATE</a> \u5B98\u65B9\u6587\u6863\u793A\u4F8B\u7684 websocket \u6D88\u606F\u4F53\u3002</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">op</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">s</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">t</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">GUILD_CREATE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">d</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u9891\u9053\u4ECB\u7ECD</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">icon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">200000000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">joined_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2021-10-21T11:20:18+08:00</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">max_members</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">member_count</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">17</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u9891\u9053\u540D\u79F0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">op_user_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100000000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">owner_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100000000</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5728 on_event \u91CC\u63A5\u6536\u5230\u65F6</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_event</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GUILD_CREATE</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Event</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> BotAdapterProtocol</span><span style="color:#89DDFF;">):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">event</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> \u9891\u9053\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">event</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">description</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> \u9891\u9053\u4ECB\u7ECD</span></span>
<span class="line"></span></code></pre></div><p>\u9891\u9053\u7684\u4E8B\u4EF6\u540D\u548C\u5185\u5BB9\u53EF\u4EE5\u67E5\u770B\u5B98\u65B9\u6587\u6863 <a href="https://bot.q.qq.com/wiki/develop/api/gateway/intents.html" target="_blank" rel="noreferrer">\u4E8B\u4EF6\u8BA2\u9605</a></p><h2 id="mirai-api-http-\u4E8B\u4EF6" tabindex="-1">mirai-api-http \u4E8B\u4EF6 <a class="header-anchor" href="#mirai-api-http-\u4E8B\u4EF6" aria-hidden="true">#</a></h2><ul><li><a href="https://docs.mirai.mamoe.net/mirai-api-http/api/EventType.html" target="_blank" rel="noreferrer">mirai-api-http \u4E8B\u4EF6\u7C7B\u578B\u4E00\u89C8</a></li></ul><p>mirai-api-http \u6233\u4E00\u6233\u4E8B\u4EF6\u63A8\u9001\u7684\u6D88\u606F\u3002</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NudgeEvent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">fromId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123456</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">subject</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123456</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">kind</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Group</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">action</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6233\u4E86\u6233</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">suffix</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u7684\u8138</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">target</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123456</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u76D1\u542C type \u7684\u503C <code>NudgeEvent</code> \u5373\u53EF\u3002</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_event</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">NudgeEvent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Event</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> BotAdapterProtocol</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"></span></code></pre></div><h2 id="go-cqhttp-\u4E8B\u4EF6" tabindex="-1">go-cqhttp \u4E8B\u4EF6 <a class="header-anchor" href="#go-cqhttp-\u4E8B\u4EF6" aria-hidden="true">#</a></h2><ul><li><a href="https://docs.go-cqhttp.org/event/" target="_blank" rel="noreferrer">go-cqhttp \u4E8B\u4EF6</a></li></ul><p>\u9488\u5BF9 go-cqhttp \u4E8B\u4EF6\u7684 <a href="https://docs.go-cqhttp.org/reference/data_struct.html#post-type" target="_blank" rel="noreferrer">\u6570\u636E\u7ED3\u6784</a>\uFF0CAmiyaBot \u5BF9\u5176\u8FDB\u884C\u4E86\u5206\u7C7B\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u4E8B\u4EF6\u540D\u7CBE\u786E\u83B7\u53D6\u3002</p><p>\u5982\uFF1A\u6233\u4E00\u6233\u4E8B\u4EF6\u4E2D go-cqhttp \u5BF9\u5176\u8FDB\u884C\u4E86\u4E09\u7EA7\u5206\u7C7B\u3002</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">post_type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">notice</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">notice_type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">notify</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">sub_type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">poke</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u76D1\u542C <code>notice</code> \u4E8B\u4EF6\u65F6\uFF0C\u65E0\u6CD5\u83B7\u5F97\u51C6\u786E\u7684\u4E8B\u4EF6\u3002\u56E0\u4E3A\u5728 <code>notice_type</code> \u7684\u5206\u7C7B\u91CC\uFF0C\u8FD8\u5305\u542B\u4E86\u597D\u53CB\u6DFB\u52A0\u3001\u6D88\u606F\u64A4\u56DE\u7B49\u4E00\u7CFB\u5217\u5B50\u4E8B\u4EF6\u3002<br> \u5F53\u7136\uFF0C\u5982\u679C\u4F60\u9700\u8981\u76D1\u542C\u8FD9\u4E2A\u5927\u7C7B\u7684\u4E8B\u4EF6\u65F6\uFF0C\u4ECD\u7136\u53EF\u4EE5\u76D1\u542C\u8FD9\u4E2A\u4E8B\u4EF6\u540D\u3002</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#676E95;"># \u76D1\u542C post_type \u4E3A notice \u7684\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_event</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">notice</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Event</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> BotAdapterProtocol</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u76D1\u542C post_type \u4E3A notice \u4E14 notice_type \u4E3A notify \u7684\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_event</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">notice.notify</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Event</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> BotAdapterProtocol</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"></span></code></pre></div><p>\u901A\u8FC7\u4E8B\u4EF6\u540D <code>notice.notify.poke</code>\uFF0C\u5373\u53EF\u76D1\u542C\u5230\u51C6\u786E\u7684\u6233\u4E00\u6233\u4E8B\u4EF6\u3002</p><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_event</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">notice.notify.poke</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Event</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> BotAdapterProtocol</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"></span></code></pre></div><p>\u5176\u4ED6\u7C7B\u522B\u7684\u4E8B\u4EF6\u540C\u7406\uFF0C\u901A\u8FC7\u4E8B\u4EF6\u6570\u636E\u4E2D\u7684 <code>post_type.xxxxx_type.sub_type</code> \u5B9A\u4E49\u4E8B\u4EF6\u76D1\u542C\u540D\u5373\u53EF\u3002</p>`,30),t=[l];function e(c,r,D,F,y,A){return n(),a("div",null,t)}const d=s(o,[["render",e]]);export{i as __pageData,d as default};