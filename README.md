DebugMyHtml
===========

DebugMyHtml is a small but effective debugger for html elements, it uses minimal amount of css for outlining html elements

## Usage ##

#### Html Setup ####
<p>Look at index.html for example</p>

<p>Apply the debug attribute/property to an element, so as to filter out elements to debug</p>

<p>Set debug to true to debug or false to not debug</p>

<pre>
<code>
//wont debug element
<b>debug</b>="false"
    
//will debug element
<b>debug</b>="true"
</code>
</pre>

#### Code Examples ####
##### DMH #####
<p>Create new instance of DMH, then use function debugElement</p>
<pre>
<code>
//new instance
<b>var</b> db = <b>new</b> DMH();

//use function debugElement, specify within params the element type
db.debugElement('div');
</code>
</pre>

<p>CSS stylesheet has a few different borders for different elements, see the following:</p>

#### CSS Stylesheets ####
<ul>
  <li>
  (div)color = red
  </li>
  <li>
  (p)color = black
  </li>
  <li>
  (headers)color = blue
  </li>
  <li>
  (a)color = green
  </li>
  <li>
  (span)color = grey
  </li>
  <li>
  (button)color = yellow
  </li>
  <li>
  (input)color = brown
  </li>
  <li>
  (other elements)color = cyan
  </li>
</ul>

<p>The function debugElement will ignore the debug attribute/property(if exists) and just debug that element</p>
<p>This function will give the element a red border</p>

<p>Use function debugElements</p>
<pre>
<code>
//new instance
<b>var</b> db = <b>new</b> DMH();

//use function debugElements
db.debugElements();
</code>
</pre>
<p>The function debugElements has no param, as it debugs all elements with the debug attribute/property set to true</p>
<p>This function will give the elements the border color accroding to the css colors above</p>

<p>Use function debugAll</p>
<pre>
<code>
//new instance
<b>var</b> db = <b>new</b> DMH();

//use function debugAll
db.debugAll();
</code>
</pre>
<p>The function debugAll will just debug every element, taking no notice of the debug attribute/property(if exists)</p>

##### DMHS #####
<p>DMHS is a static switch for the debugger, it can be used to switch on or off the debugger</p>
<p><b>Note:</b> DHMS will only switch on or off elements that have the debug attribute/property</p>

<p>Switch on the debugger</p>
<pre>
<code>
//on
DMHS.Switch.ON();
</code>
</pre>
<p>This can be used within a click event, once used you will notice the debugger has been switched on</p>

<p>Switch off the debugger</p>
<pre>
<code>
//off
DMHS.Switch.OFF();
</code>
</pre>
<p>This can be used within a click event, once used you will notice the debugger has been switched off</p>

#### API ####
<p>DMH API as follows:</p>
<p>Setup instance</p>
<pre>
<code>
//new instance
<b>new </b>DMH();
</code>
</pre>
<p>Call debugElement function - <b>params(element)</b></p>
<pre>
<code>
//debugElement
db.debugElement(element);
</code>
</pre>
<p>Call debugElements function</p>
<pre>
<code>
//debugElements
db.debugElements();
</code>
</pre>
<p>Call debugAll function</p>
<pre>
<code>
//debugAll
db.debugAll();
</code>
</pre>

<p>DMHS API as follows</p>
<p>Call static DMHS.Switch.ON function</p>
<pre>
<code>
//ON
DMHS.Switch.ON();
</code>
</pre>
<p>Call static DMHS.Switch.OFF function</p>
<pre>
<code>
//OFF
DMHS.Switch.OFF();
</code>
</pre>

<p>Config API as follows</p>
<pre>
<code>
//config
//console
c : console;

//window
w : window

//document
d : document

//debug
db : 'debug'

//css file
cssf : 'dmh-style.css'

//css class name
csscls : 'error-debug'
</code>
</pre>
