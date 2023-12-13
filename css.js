var head = document.getElementsByTagName('HEAD')[0];
 
var link = document.createElement('link');
 
link.rel = 'stylesheet';
     
link.type = 'text/css';
     
link.href = 'red.css';

head.appendChild(link);
