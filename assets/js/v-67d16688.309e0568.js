(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[325],{2627:(n,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>e});const e={key:"v-67d16688",path:"/plugins/",title:"Installing Plugins",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Example",slug:"example",children:[]}],filePathRelative:"plugins/README.md",git:{updatedTime:1627478089e3,contributors:[]}}},2060:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>i});var e=s(6252);const t=(0,e.uE)('<h1 id="installing-plugins" tabindex="-1"><a class="header-anchor" href="#installing-plugins" aria-hidden="true">#</a> Installing Plugins</h1><p>You can easily install plugins using the options provided by packer.</p><p>Just add your plugin to the <code>lvim.plugins</code> table in your <code>lv-config.lua</code> file and save the file (don&#39;t quit or the operation will not run). You can also run <code>:PackerSync</code> to pull down updates for your plugins.</p><p>After adding the following to your <code>lv-config.lua</code> just <code>:w</code> and the plugins will automatically install.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>plugins <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span><span class="token string">&quot;lunarvim/colorschemes&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span><span class="token string">&quot;folke/tokyonight.nvim&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> \n  <span class="token punctuation">{</span>\n    <span class="token string">&quot;ray-x/lsp_signature.nvim&quot;</span><span class="token punctuation">,</span>\n    config <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \n      require<span class="token string">&quot;lsp_signature&quot;</span><span class="token punctuation">.</span><span class="token function">on_attach</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \n      <span class="token keyword">end</span><span class="token punctuation">,</span>\n    event <span class="token operator">=</span> <span class="token string">&quot;InsertEnter&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h1 id="core-plugins" tabindex="-1"><a class="header-anchor" href="#core-plugins" aria-hidden="true">#</a> Core plugins</h1><p>LunarVim comes bundled with a small set of default plugins. A few plugins are disabled by default. To enable a plugin, add an entry for it in your personal configuration file. To see which plugins are installed run <code>:PackerStatus</code></p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>galaxyline<span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token keyword">true</span>\nlvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>dap<span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token keyword">true</span>\nlvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>dashboard<span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token keyword">true</span>\nlvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>terminal<span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token keyword">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',9),p=(0,e.Uk)("To learn how to extend the configuration of these core plugins "),o=(0,e.Uk)("go here"),l=(0,e.uE)('<h1 id="configuring-plugins" tabindex="-1"><a class="header-anchor" href="#configuring-plugins" aria-hidden="true">#</a> Configuring Plugins</h1><p>Settings for core plugins are accessible through <code>lvim.builtin</code>. You can press <code>TAB</code> to get autocomplete suggestions to explore these settings.</p><p>Example settings</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>compe<span class="token punctuation">.</span>allow_prefix_unmatch <span class="token operator">=</span> <span class="token keyword">false</span>\nlvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>compe<span class="token punctuation">.</span>autocomplete <span class="token operator">=</span> <span class="token keyword">true</span>\nlvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>compe<span class="token punctuation">.</span>debug <span class="token operator">=</span> <span class="token keyword">false</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h1 id="removing-plugins" tabindex="-1"><a class="header-anchor" href="#removing-plugins" aria-hidden="true">#</a> Removing Plugins</h1><p>Removing a plugin from the <code>lvim.plugin</code> table removes it from your configuration but not your system. Any plugins left in the <code>start</code> directory will still autostart. To remove them completely, run <code>:PackerClean</code></p>',6),i={render:function(n,a){const s=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,(0,e.Wm)("p",null,[p,(0,e.Wm)(s,{to:"/plugins/extending-configuration-for-core-plugins.html"},{default:(0,e.w5)((()=>[o])),_:1})]),l],64)}}}}]);