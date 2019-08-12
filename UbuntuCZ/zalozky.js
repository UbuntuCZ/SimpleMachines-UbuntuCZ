function pulsanti(idpulsante)
{
  document.write('<div id="pulsante"><ul>');
  document.write('    <li id="'+(idpulsante=="other"?"current":"plain")+'"><a href="http://www.ubuntu.cz/">Ubuntu</a></li>');
  document.write('    <li id="'+(idpulsante=="forum"?"current":"plain")+'"><a href="http://forum.ubuntu.cz/">Fórum</a></li>');
  document.write('    <li id="'+(idpulsante=="other"?"current":"plain")+'"><a href="http://wiki.ubuntu.cz">Wiki</a></li>');
  document.write('    <li id="'+(idpulsante=="other"?"current":"plain")+'"><a href="http://www.kubuntu.cz">Kubuntu</a></li>');
  document.write('    <li id="'+(idpulsante=="other"?"current":"plain")+'"><a href="http://blog.ubuntu.cz">Blog</a></li>');
  document.write('    <li id="'+(idpulsante=="other"?"current":"plain")+'"><a href="http://www.ubuntu.cz/kontakty">Kontakty</a></li>');
  document.write('</ul></div>');
}
