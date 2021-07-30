(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[805],{4636:(e,n,s)=>{"use strict";s.r(n),s.d(n,{data:()=>t});const t={key:"v-76134225",path:"/configuration/neovim.html",title:"Neovim Configuration",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Example options",slug:"example-options",children:[]}],filePathRelative:"configuration/neovim.md",git:{updatedTime:1627570411e3,contributors:[]}}},3101:(e,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>a});const t=(0,s(6252).uE)('<h1 id="neovim-configuration" tabindex="-1"><a class="header-anchor" href="#neovim-configuration" aria-hidden="true">#</a> Neovim Configuration</h1><p>To set neovim editor options use</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim.opt.{option}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Autocomplete should work here.</p><h2 id="example-options" tabindex="-1"><a class="header-anchor" href="#example-options" aria-hidden="true">#</a> Example options</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim.opt.backup = false, -- creates a backup file\nvim.opt.clipboard = &quot;unnamedplus&quot;, -- allows neovim to access the system clipboard\nvim.opt.cmdheight = 2, -- more space in the neovim command line for displaying messages\nvim.opt.colorcolumn = &quot;99999&quot;, -- fixes indentline for now\nvim.opt.completeopt = { &quot;menuone&quot;, &quot;noselect&quot; },\nvim.opt.conceallevel = 0, -- so that `` is visible in markdown files\nvim.opt.fileencoding = &quot;utf-8&quot;, -- the encoding written to a file\nvim.opt.foldmethod = &quot;manual&quot;, -- folding, set to &quot;expr&quot; for treesitter based folding\nvim.opt.foldexpr = &quot;&quot;, -- set to &quot;nvim_treesitter#foldexpr()&quot; for treesitter based folding\nvim.opt.guifont = &quot;monospace:h17&quot;, -- the font used in graphical neovim applications\nvim.opt.hidden = true, -- required to keep multiple buffers and open multiple buffers\nvim.opt.hlsearch = true, -- highlight all matches on previous search pattern\nvim.opt.ignorecase = true, -- ignore case in search patterns\nvim.opt.mouse = &quot;a&quot;, -- allow the mouse to be used in neovim\nvim.opt.pumheight = 10, -- pop up menu height\nvim.opt.showmode = false, -- we don&#39;t need to see things like -- INSERT -- anymore\nvim.opt.showtabline = 2, -- always show tabs\nvim.opt.smartcase = true, -- smart case\nvim.opt.smartindent = true, -- make indenting smarter again\nvim.opt.splitbelow = true, -- force all horizontal splits to go below current window\nvim.opt.splitright = true, -- force all vertical splits to go to the right of current window\nvim.opt.swapfile = false, -- creates a swapfile\nvim.opt.termguicolors = true, -- set term gui colors (most terminals support this)\nvim.opt.timeoutlen = 100, -- time to wait for a mapped sequence to complete (in milliseconds)\nvim.opt.title = true, -- set the title of window to the value of the titlestring\nvim.opt.opt.titlestring = &quot;%&lt;%F%=%l/%L - nvim&quot; -- what the title of the window will be set to\nvim.opt.undodir = CACHE_PATH .. &quot;/undo&quot;, -- set an undo directory\nvim.opt.undofile = true, -- enable persistent undo\nvim.opt.updatetime = 300, -- faster completion\nvim.opt.writebackup = false, -- if a file is being edited by another program (or was written to file while editing with another program), it is not allowed to be edited\nvim.opt.expandtab = true, -- convert tabs to spaces\nvim.opt.shiftwidth = 2, -- the number of spaces inserted for each indentation\nvim.opt.tabstop = 2, -- insert 2 spaces for a tab\nvim.opt.cursorline = true, -- highlight the current line\nvim.opt.number = true, -- set numbered lines\nvim.opt.relativenumber = false, -- set relative numbered lines\nvim.opt.numberwidth = 4, -- set number column width to 2 {default 4}\nvim.opt.signcolumn = &quot;yes&quot;, -- always show the sign column, otherwise it would shift the text each time\nvim.opt.wrap = false, -- display lines as one long line\nvim.opt.spell = false,\nvim.opt.spelllang = &quot;en&quot;,\nvim.opt.scrolloff = 8, -- is one of my fav\nvim.opt.sidescrolloff = 8,\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div>',6),a={render:function(e,n){return t}}}}]);