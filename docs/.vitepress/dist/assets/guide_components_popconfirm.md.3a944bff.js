import{d as F,h as y,D as d,c as i,I as a,w as s,Q as t,o as C,a as p,p as A,m as u,k as f,_ as h}from"./chunks/framework.3b71ead4.js";const m=c=>(A("data-v-c304f027"),c=c(),u(),c),g=t('<h1 id="弹出确认-popconfirm" tabindex="-1" data-v-c304f027>弹出确认 Popconfirm <a class="header-anchor" href="#弹出确认-popconfirm" aria-label="Permalink to &quot;弹出确认 Popconfirm&quot;" data-v-c304f027>​</a></h1><br data-v-c304f027><p data-v-c304f027><em data-v-c304f027>点击元素，弹出气泡式的确认框</em></p><h2 id="何时使用" tabindex="-1" data-v-c304f027>何时使用 <a class="header-anchor" href="#何时使用" aria-label="Permalink to &quot;何时使用&quot;" data-v-c304f027>​</a></h2><ul data-v-c304f027><li data-v-c304f027>目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户</li></ul><h2 id="基本使用" tabindex="-1" data-v-c304f027>基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;" data-v-c304f027>​</a></h2>',6),q=t(`<details class="details custom-block" data-v-c304f027><summary data-v-c304f027>Show Code</summary><div class="language-vue" data-v-c304f027><button title="Copy Code" class="copy" data-v-c304f027></button><span class="lang" data-v-c304f027>vue</span><pre class="shiki material-theme-palenight" data-v-c304f027><code data-v-c304f027><span class="line" data-v-c304f027><span style="color:#89DDFF;" data-v-c304f027>&lt;</span><span style="color:#F07178;" data-v-c304f027>script</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>setup</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>lang</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>ts</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span>
<span class="line" data-v-c304f027><span style="color:#89DDFF;font-style:italic;" data-v-c304f027>import</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#89DDFF;" data-v-c304f027>{</span><span style="color:#F07178;" data-v-c304f027> </span><span style="color:#A6ACCD;" data-v-c304f027>ref</span><span style="color:#F07178;" data-v-c304f027> </span><span style="color:#89DDFF;" data-v-c304f027>}</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#89DDFF;font-style:italic;" data-v-c304f027>from</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#89DDFF;" data-v-c304f027>&#39;</span><span style="color:#C3E88D;" data-v-c304f027>vue</span><span style="color:#89DDFF;" data-v-c304f027>&#39;</span></span>
<span class="line" data-v-c304f027><span style="color:#C792EA;" data-v-c304f027>const</span><span style="color:#A6ACCD;" data-v-c304f027> message </span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#82AAFF;" data-v-c304f027>ref</span><span style="color:#A6ACCD;" data-v-c304f027>()</span></span>
<span class="line" data-v-c304f027><span style="color:#C792EA;" data-v-c304f027>const</span><span style="color:#A6ACCD;" data-v-c304f027> confirm </span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#89DDFF;" data-v-c304f027>(</span><span style="color:#A6ACCD;font-style:italic;" data-v-c304f027>e</span><span style="color:#89DDFF;" data-v-c304f027>:</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#FFCB6B;" data-v-c304f027>MouseEvent</span><span style="color:#89DDFF;" data-v-c304f027>)</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>=&gt;</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#89DDFF;" data-v-c304f027>{</span></span>
<span class="line" data-v-c304f027><span style="color:#F07178;" data-v-c304f027>  </span><span style="color:#A6ACCD;" data-v-c304f027>console</span><span style="color:#89DDFF;" data-v-c304f027>.</span><span style="color:#82AAFF;" data-v-c304f027>log</span><span style="color:#F07178;" data-v-c304f027>(</span><span style="color:#A6ACCD;" data-v-c304f027>e</span><span style="color:#F07178;" data-v-c304f027>)</span></span>
<span class="line" data-v-c304f027><span style="color:#F07178;" data-v-c304f027>  </span><span style="color:#A6ACCD;" data-v-c304f027>message</span><span style="color:#89DDFF;" data-v-c304f027>.</span><span style="color:#A6ACCD;" data-v-c304f027>value</span><span style="color:#89DDFF;" data-v-c304f027>.</span><span style="color:#82AAFF;" data-v-c304f027>success</span><span style="color:#F07178;" data-v-c304f027>(</span><span style="color:#89DDFF;" data-v-c304f027>&#39;</span><span style="color:#C3E88D;" data-v-c304f027>Click on Yes</span><span style="color:#89DDFF;" data-v-c304f027>&#39;</span><span style="color:#F07178;" data-v-c304f027>)</span></span>
<span class="line" data-v-c304f027><span style="color:#89DDFF;" data-v-c304f027>}</span></span>
<span class="line" data-v-c304f027><span style="color:#C792EA;" data-v-c304f027>const</span><span style="color:#A6ACCD;" data-v-c304f027> cancel </span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#89DDFF;" data-v-c304f027>(</span><span style="color:#A6ACCD;font-style:italic;" data-v-c304f027>e</span><span style="color:#89DDFF;" data-v-c304f027>:</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#FFCB6B;" data-v-c304f027>MouseEvent</span><span style="color:#89DDFF;" data-v-c304f027>)</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>=&gt;</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#89DDFF;" data-v-c304f027>{</span></span>
<span class="line" data-v-c304f027><span style="color:#F07178;" data-v-c304f027>  </span><span style="color:#A6ACCD;" data-v-c304f027>console</span><span style="color:#89DDFF;" data-v-c304f027>.</span><span style="color:#82AAFF;" data-v-c304f027>log</span><span style="color:#F07178;" data-v-c304f027>(</span><span style="color:#A6ACCD;" data-v-c304f027>e</span><span style="color:#F07178;" data-v-c304f027>)</span></span>
<span class="line" data-v-c304f027><span style="color:#F07178;" data-v-c304f027>  </span><span style="color:#A6ACCD;" data-v-c304f027>message</span><span style="color:#89DDFF;" data-v-c304f027>.</span><span style="color:#A6ACCD;" data-v-c304f027>value</span><span style="color:#89DDFF;" data-v-c304f027>.</span><span style="color:#82AAFF;" data-v-c304f027>error</span><span style="color:#F07178;" data-v-c304f027>(</span><span style="color:#89DDFF;" data-v-c304f027>&#39;</span><span style="color:#C3E88D;" data-v-c304f027>Click on No</span><span style="color:#89DDFF;" data-v-c304f027>&#39;</span><span style="color:#F07178;" data-v-c304f027>)</span></span>
<span class="line" data-v-c304f027><span style="color:#89DDFF;" data-v-c304f027>}</span></span>
<span class="line" data-v-c304f027><span style="color:#89DDFF;" data-v-c304f027>&lt;/</span><span style="color:#F07178;" data-v-c304f027>script</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span>
<span class="line" data-v-c304f027><span style="color:#89DDFF;" data-v-c304f027>&lt;</span><span style="color:#F07178;" data-v-c304f027>template</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span>
<span class="line" data-v-c304f027><span style="color:#A6ACCD;" data-v-c304f027>  </span><span style="color:#89DDFF;" data-v-c304f027>&lt;</span><span style="color:#F07178;" data-v-c304f027>Popconfirm</span></span>
<span class="line" data-v-c304f027><span style="color:#89DDFF;" data-v-c304f027>    </span><span style="color:#C792EA;" data-v-c304f027>title</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>Are you sure delete this task?</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span></span>
<span class="line" data-v-c304f027><span style="color:#89DDFF;" data-v-c304f027>    </span><span style="color:#C792EA;" data-v-c304f027>@ok</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>confirm</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span></span>
<span class="line" data-v-c304f027><span style="color:#89DDFF;" data-v-c304f027>    </span><span style="color:#C792EA;" data-v-c304f027>@cancel</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>cancel</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span>
<span class="line" data-v-c304f027><span style="color:#A6ACCD;" data-v-c304f027>    </span><span style="color:#89DDFF;" data-v-c304f027>&lt;</span><span style="color:#F07178;" data-v-c304f027>Button</span><span style="color:#89DDFF;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>type</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>danger</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span><span style="color:#A6ACCD;" data-v-c304f027>Delete</span><span style="color:#89DDFF;" data-v-c304f027>&lt;/</span><span style="color:#F07178;" data-v-c304f027>Button</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span>
<span class="line" data-v-c304f027><span style="color:#A6ACCD;" data-v-c304f027>  </span><span style="color:#89DDFF;" data-v-c304f027>&lt;/</span><span style="color:#F07178;" data-v-c304f027>Popconfirm</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span>
<span class="line" data-v-c304f027><span style="color:#A6ACCD;" data-v-c304f027>  </span><span style="color:#89DDFF;" data-v-c304f027>&lt;</span><span style="color:#F07178;" data-v-c304f027>Message</span><span style="color:#89DDFF;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>ref</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>message</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#89DDFF;" data-v-c304f027> /&gt;</span></span>
<span class="line" data-v-c304f027><span style="color:#89DDFF;" data-v-c304f027>&lt;/</span><span style="color:#F07178;" data-v-c304f027>template</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span></code></pre></div></details><h2 id="自定义按钮文字" tabindex="-1" data-v-c304f027>自定义按钮文字 <a class="header-anchor" href="#自定义按钮文字" aria-label="Permalink to &quot;自定义按钮文字&quot;" data-v-c304f027>​</a></h2>`,2),E=t(`<details class="details custom-block" data-v-c304f027><summary data-v-c304f027>Show Code</summary><div class="language-vue" data-v-c304f027><button title="Copy Code" class="copy" data-v-c304f027></button><span class="lang" data-v-c304f027>vue</span><pre class="shiki material-theme-palenight" data-v-c304f027><code data-v-c304f027><span class="line" data-v-c304f027><span style="color:#89DDFF;" data-v-c304f027>&lt;</span><span style="color:#F07178;" data-v-c304f027>template</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span>
<span class="line" data-v-c304f027><span style="color:#A6ACCD;" data-v-c304f027>  </span><span style="color:#89DDFF;" data-v-c304f027>&lt;</span><span style="color:#F07178;" data-v-c304f027>Popconfirm</span><span style="color:#89DDFF;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>title</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>Are you sure？</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#89DDFF;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>ok-text</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>Yes</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#89DDFF;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>cancel-text</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>No</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span>
<span class="line" data-v-c304f027><span style="color:#A6ACCD;" data-v-c304f027>    </span><span style="color:#89DDFF;" data-v-c304f027>&lt;</span><span style="color:#F07178;" data-v-c304f027>Button</span><span style="color:#89DDFF;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>type</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>danger</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span><span style="color:#A6ACCD;" data-v-c304f027>Delete</span><span style="color:#89DDFF;" data-v-c304f027>&lt;/</span><span style="color:#F07178;" data-v-c304f027>Button</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span>
<span class="line" data-v-c304f027><span style="color:#A6ACCD;" data-v-c304f027>  </span><span style="color:#89DDFF;" data-v-c304f027>&lt;/</span><span style="color:#F07178;" data-v-c304f027>Popconfirm</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span>
<span class="line" data-v-c304f027><span style="color:#89DDFF;" data-v-c304f027>&lt;/</span><span style="color:#F07178;" data-v-c304f027>template</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span></code></pre></div></details><h2 id="自定义-icon-图标" tabindex="-1" data-v-c304f027>自定义 Icon 图标 <a class="header-anchor" href="#自定义-icon-图标" aria-label="Permalink to &quot;自定义 Icon 图标&quot;" data-v-c304f027>​</a></h2>`,2),_=m(()=>f("svg",{focusable:"false",class:"u-svg","data-icon":"question-circle",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",viewBox:"64 64 896 896"},[f("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}),f("path",{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"})],-1)),b=t(`<details class="details custom-block" data-v-c304f027><summary data-v-c304f027>Show Code</summary><div class="language-vue" data-v-c304f027><button title="Copy Code" class="copy" data-v-c304f027></button><span class="lang" data-v-c304f027>vue</span><pre class="shiki material-theme-palenight" data-v-c304f027><code data-v-c304f027><span class="line" data-v-c304f027><span style="color:#89DDFF;" data-v-c304f027>&lt;</span><span style="color:#F07178;" data-v-c304f027>template</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span>
<span class="line" data-v-c304f027><span style="color:#A6ACCD;" data-v-c304f027>  </span><span style="color:#89DDFF;" data-v-c304f027>&lt;</span><span style="color:#F07178;" data-v-c304f027>Popconfirm</span><span style="color:#89DDFF;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>title</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>Are you sure？</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span>
<span class="line" data-v-c304f027><span style="color:#A6ACCD;" data-v-c304f027>    </span><span style="color:#89DDFF;" data-v-c304f027>&lt;</span><span style="color:#F07178;" data-v-c304f027>template</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#89DDFF;" data-v-c304f027>#</span><span style="color:#C792EA;" data-v-c304f027>icon</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span>
<span class="line" data-v-c304f027><span style="color:#A6ACCD;" data-v-c304f027>      </span><span style="color:#89DDFF;" data-v-c304f027>&lt;</span><span style="color:#F07178;" data-v-c304f027>svg</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>focusable</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>false</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>class</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>u-svg</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>data-icon</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>question-circle</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>width</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>1em</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>height</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>1em</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>fill</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>currentColor</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>aria-hidden</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>true</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>viewBox</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>64 64 896 896</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#89DDFF;" data-v-c304f027>&gt;&lt;</span><span style="color:#F07178;" data-v-c304f027>path</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>d</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#89DDFF;" data-v-c304f027>&gt;&lt;/</span><span style="color:#F07178;" data-v-c304f027>path</span><span style="color:#89DDFF;" data-v-c304f027>&gt;&lt;</span><span style="color:#F07178;" data-v-c304f027>path</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>d</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#89DDFF;" data-v-c304f027>&gt;&lt;/</span><span style="color:#F07178;" data-v-c304f027>path</span><span style="color:#89DDFF;" data-v-c304f027>&gt;&lt;/</span><span style="color:#F07178;" data-v-c304f027>svg</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span>
<span class="line" data-v-c304f027><span style="color:#A6ACCD;" data-v-c304f027>    </span><span style="color:#89DDFF;" data-v-c304f027>&lt;/</span><span style="color:#F07178;" data-v-c304f027>template</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span>
<span class="line" data-v-c304f027><span style="color:#A6ACCD;" data-v-c304f027>    </span><span style="color:#89DDFF;" data-v-c304f027>&lt;</span><span style="color:#F07178;" data-v-c304f027>Button</span><span style="color:#89DDFF;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>type</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>danger</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span><span style="color:#A6ACCD;" data-v-c304f027>Delete</span><span style="color:#89DDFF;" data-v-c304f027>&lt;/</span><span style="color:#F07178;" data-v-c304f027>Button</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span>
<span class="line" data-v-c304f027><span style="color:#A6ACCD;" data-v-c304f027>  </span><span style="color:#89DDFF;" data-v-c304f027>&lt;/</span><span style="color:#F07178;" data-v-c304f027>Popconfirm</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span>
<span class="line" data-v-c304f027><span style="color:#89DDFF;" data-v-c304f027>&lt;/</span><span style="color:#F07178;" data-v-c304f027>template</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span>
<span class="line" data-v-c304f027><span style="color:#89DDFF;" data-v-c304f027>&lt;</span><span style="color:#F07178;" data-v-c304f027>style</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>lang</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>less</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>scoped</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span>
<span class="line" data-v-c304f027><span style="color:#89DDFF;" data-v-c304f027>.</span><span style="color:#FFCB6B;" data-v-c304f027>u-svg</span><span style="color:#A6ACCD;" data-v-c304f027> </span><span style="color:#89DDFF;" data-v-c304f027>{</span></span>
<span class="line" data-v-c304f027><span style="color:#A6ACCD;" data-v-c304f027>  </span><span style="color:#B2CCD6;" data-v-c304f027>fill</span><span style="color:#89DDFF;" data-v-c304f027>:</span><span style="color:#A6ACCD;" data-v-c304f027> #ff4d4f</span><span style="color:#89DDFF;" data-v-c304f027>;</span></span>
<span class="line" data-v-c304f027><span style="color:#89DDFF;" data-v-c304f027>}</span></span>
<span class="line" data-v-c304f027><span style="color:#89DDFF;" data-v-c304f027>&lt;/</span><span style="color:#F07178;" data-v-c304f027>style</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span></code></pre></div></details><h2 id="隐藏取消按钮" tabindex="-1" data-v-c304f027>隐藏取消按钮 <a class="header-anchor" href="#隐藏取消按钮" aria-label="Permalink to &quot;隐藏取消按钮&quot;" data-v-c304f027>​</a></h2>`,2),k=t(`<details class="details custom-block" data-v-c304f027><summary data-v-c304f027>Show Code</summary><div class="language-vue" data-v-c304f027><button title="Copy Code" class="copy" data-v-c304f027></button><span class="lang" data-v-c304f027>vue</span><pre class="shiki material-theme-palenight" data-v-c304f027><code data-v-c304f027><span class="line" data-v-c304f027><span style="color:#89DDFF;" data-v-c304f027>&lt;</span><span style="color:#F07178;" data-v-c304f027>template</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span>
<span class="line" data-v-c304f027><span style="color:#A6ACCD;" data-v-c304f027>  </span><span style="color:#89DDFF;" data-v-c304f027>&lt;</span><span style="color:#F07178;" data-v-c304f027>Popconfirm</span></span>
<span class="line" data-v-c304f027><span style="color:#89DDFF;" data-v-c304f027>    </span><span style="color:#C792EA;" data-v-c304f027>title</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>friendly reminder ...</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span></span>
<span class="line" data-v-c304f027><span style="color:#89DDFF;" data-v-c304f027>    </span><span style="color:#C792EA;" data-v-c304f027>:show-cancel</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>false</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span>
<span class="line" data-v-c304f027><span style="color:#A6ACCD;" data-v-c304f027>    </span><span style="color:#89DDFF;" data-v-c304f027>&lt;</span><span style="color:#F07178;" data-v-c304f027>Button</span><span style="color:#89DDFF;" data-v-c304f027> </span><span style="color:#C792EA;" data-v-c304f027>type</span><span style="color:#89DDFF;" data-v-c304f027>=</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#C3E88D;" data-v-c304f027>primary</span><span style="color:#89DDFF;" data-v-c304f027>&quot;</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span><span style="color:#A6ACCD;" data-v-c304f027>Hidden Cancel Btn</span><span style="color:#89DDFF;" data-v-c304f027>&lt;/</span><span style="color:#F07178;" data-v-c304f027>Button</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span>
<span class="line" data-v-c304f027><span style="color:#A6ACCD;" data-v-c304f027>  </span><span style="color:#89DDFF;" data-v-c304f027>&lt;/</span><span style="color:#F07178;" data-v-c304f027>Popconfirm</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span>
<span class="line" data-v-c304f027><span style="color:#89DDFF;" data-v-c304f027>&lt;/</span><span style="color:#F07178;" data-v-c304f027>template</span><span style="color:#89DDFF;" data-v-c304f027>&gt;</span></span></code></pre></div></details><h2 id="apis" tabindex="-1" data-v-c304f027>APIs <a class="header-anchor" href="#apis" aria-label="Permalink to &quot;APIs&quot;" data-v-c304f027>​</a></h2><table data-v-c304f027><thead data-v-c304f027><tr data-v-c304f027><th data-v-c304f027>参数</th><th data-v-c304f027>说明</th><th data-v-c304f027>类型</th><th data-v-c304f027>默认值</th><th data-v-c304f027>必传</th></tr></thead><tbody data-v-c304f027><tr data-v-c304f027><td data-v-c304f027>title</td><td data-v-c304f027>确认框的标题</td><td data-v-c304f027>string | slot</td><td data-v-c304f027>&#39;&#39;</td><td data-v-c304f027>false</td></tr><tr data-v-c304f027><td data-v-c304f027>description</td><td data-v-c304f027>确认框的内容描述</td><td data-v-c304f027>string | slot</td><td data-v-c304f027>&#39;&#39;</td><td data-v-c304f027>false</td></tr><tr data-v-c304f027><td data-v-c304f027>content</td><td data-v-c304f027>展示的文本</td><td data-v-c304f027>string | slot</td><td data-v-c304f027>&#39;&#39;</td><td data-v-c304f027>false</td></tr><tr data-v-c304f027><td data-v-c304f027>icon</td><td data-v-c304f027>自定义弹出确认框 <code data-v-c304f027>Icon</code> 图标</td><td data-v-c304f027>string | slot</td><td data-v-c304f027>&#39;&#39;</td><td data-v-c304f027>false</td></tr><tr data-v-c304f027><td data-v-c304f027>maxWidth</td><td data-v-c304f027>弹出确认框内容最大宽度</td><td data-v-c304f027>string | number</td><td data-v-c304f027>&#39;auto&#39;</td><td data-v-c304f027>false</td></tr><tr data-v-c304f027><td data-v-c304f027>cancelText</td><td data-v-c304f027>取消按钮文字</td><td data-v-c304f027>string | slot</td><td data-v-c304f027>&#39;取消&#39;</td><td data-v-c304f027>false</td></tr><tr data-v-c304f027><td data-v-c304f027>cancelType</td><td data-v-c304f027>取消按钮类型</td><td data-v-c304f027>string</td><td data-v-c304f027>&#39;default&#39;</td><td data-v-c304f027>false</td></tr><tr data-v-c304f027><td data-v-c304f027>okText</td><td data-v-c304f027>确认按钮文字</td><td data-v-c304f027>string | slot</td><td data-v-c304f027>&#39;确定&#39;</td><td data-v-c304f027>false</td></tr><tr data-v-c304f027><td data-v-c304f027>okType</td><td data-v-c304f027>确认按钮类型</td><td data-v-c304f027>string</td><td data-v-c304f027>&#39;primary&#39;</td><td data-v-c304f027>false</td></tr><tr data-v-c304f027><td data-v-c304f027>showCancel</td><td data-v-c304f027>是否显示取消按钮</td><td data-v-c304f027>boolean</td><td data-v-c304f027>true</td><td data-v-c304f027>false</td></tr></tbody></table><h2 id="events" tabindex="-1" data-v-c304f027>Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;" data-v-c304f027>​</a></h2><table data-v-c304f027><thead data-v-c304f027><tr data-v-c304f027><th data-v-c304f027>事件名称</th><th data-v-c304f027>说明</th><th data-v-c304f027>参数</th></tr></thead><tbody data-v-c304f027><tr data-v-c304f027><td data-v-c304f027>cancel</td><td data-v-c304f027>点击取消的回调</td><td data-v-c304f027>(e: Event) =&gt; void</td></tr><tr data-v-c304f027><td data-v-c304f027>ok</td><td data-v-c304f027>点击确认的回调</td><td data-v-c304f027>(e: Event) =&gt; void</td></tr><tr data-v-c304f027><td data-v-c304f027>openChange</td><td data-v-c304f027>显示隐藏的回调</td><td data-v-c304f027>(visible: boolean) =&gt; void</td></tr></tbody></table>`,5),M=JSON.parse('{"title":"弹出确认 Popconfirm","description":"","frontmatter":{},"headers":[],"relativePath":"guide/components/popconfirm.md","filePath":"guide/components/popconfirm.md"}'),P={name:"guide/components/popconfirm.md"},B=F({...P,setup(c){const e=y(),v=n=>{console.log(n),e.value.success("Click on Yes")},r=n=>{console.log(n),e.value.error("Click on No")};return(n,x)=>{const l=d("Button"),o=d("Popconfirm",!0),D=d("Message");return C(),i("div",null,[g,a(o,{title:"Are you sure delete this task?",onOk:v,onCancel:r},{default:s(()=>[a(l,{type:"danger"},{default:s(()=>[p("Delete")]),_:1})]),_:1}),a(D,{ref_key:"message",ref:e},null,512),q,a(o,{title:"Are you sure？","ok-text":"Yes","cancel-text":"No"},{default:s(()=>[a(l,{type:"danger"},{default:s(()=>[p("Delete")]),_:1})]),_:1}),E,a(o,{title:"Are you sure？"},{icon:s(()=>[_]),default:s(()=>[a(l,{type:"danger"},{default:s(()=>[p("Delete")]),_:1})]),_:1}),b,a(o,{title:"friendly reminder ...","show-cancel":!1},{default:s(()=>[a(l,{type:"primary"},{default:s(()=>[p("Hidden Cancel Btn")]),_:1})]),_:1}),k])}}});const S=h(B,[["__scopeId","data-v-c304f027"]]);export{M as __pageData,S as default};