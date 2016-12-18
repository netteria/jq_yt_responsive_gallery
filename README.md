# jq_yt_responsive_gallery
Responsive YouTube Video Gallery
Jak używać / How to use
<p>Wymagana jest biblioteka jquery / Required library jquery</p>

W pierwszym kroku dołączamy skrypt js oraz css.
In the first step, we attach the script js and css.

<pre><code>
&lt;script src=&quot;jq.video.slider.js&quot;&gt;&lt;/script&gt;
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;jq.video.slider.css&quot; media=&quot;screen&quot; /&gt;
</code></pre>
<p>W kodzie HTML przykładowo:<br />
In the HTML code for example:
</p>
<pre><code>
&lt;div id=&quot;myVideoSlide&quot;&gt;
  &lt;div class=&quot;videoitem&quot;&gt;
    &lt;iframe allowfullscreen=&quot;&quot; frameborder=&quot;0&quot; height=&quot;315&quot; src=&quot;https://www.youtube.com/embed/w9xsfICaS8U&quot; width=&quot;560&quot;&gt;&lt;/iframe&gt;
    &lt;div class=&quot;desc_vs&quot;&gt;Webdesign jeszcze z u&zdot;yciem Flash&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;videoitem&quot;&gt;
    &lt;iframe allowfullscreen=&quot;&quot; frameborder=&quot;0&quot; height=&quot;315&quot; src=&quot;https://www.youtube.com/embed/JjtRj5ybloY&quot; width=&quot;560&quot;&gt;&lt;/iframe&gt;
    &lt;div class=&quot;desc_vs&quot;&gt;Automatyczne generowanie przelew&amp;oacute;w bankowych&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;videoitem&quot;&gt;
    &lt;iframe allowfullscreen=&quot;&quot; frameborder=&quot;0&quot; height=&quot;315&quot; src=&quot;https://www.youtube.com/embed/ArqHzIjfwr0&quot; width=&quot;560&quot;&gt;&lt;/iframe&gt;
    &lt;div class=&quot;desc_vs&quot;&gt;Program do masowego wype&lstrok;niania PIT-3(4) Podatek od czynno&sacute;ci cywilnoprawnych&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<p>
Inicjujemy w kodzie js<br />
We initiate the js code
</p>
<pre><code>
&lt;script type=&quot;text/javascript&quot;&gt;
    $(function () {
        $(&apos;#myVideoSlide&apos;).videoOslide();
     });
 &lt;/script&gt;
</code></pre>
<br />


More on [Responsive YouTube Video Gallery - Netteria.NET](https://netteria.net/responsive-youtube-video-gallery-slider/103/)<br>
Create by [Netteria.NET](https://netteria.net) 2016.

