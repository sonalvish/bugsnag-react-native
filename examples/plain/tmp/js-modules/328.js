__d(function(g,r,i,a,m,e,d){'use strict';var n,t=r(d[0]),o=r(d[1]),c=r(d[2]),f=(r(d[3]),c.NetInfo),u=new o(f),s=new t;function v(n){return'none'!==n.type&&'unknown'!==n.type}n=function(n){return'NONE'!==n&&'UNKNOWN'!==n};var C=new t,h={addEventListener:function(n,t){var o;if('connectionChange'===n)o=u.addListener("networkStatusDidChange",function(n){t({type:n.connectionType,effectiveType:n.effectiveConnectionType})});else{if('change'!==n)return console.warn('Trying to subscribe to unknown event: "'+n+'"'),{remove:function(){}};console.warn('NetInfo\'s "change" event is deprecated. Listen to the "connectionChange" event instead.'),o=u.addListener("networkStatusDidChange",function(n){t(n.network_info)})}return s.set(t,o),{remove:function(){return h.removeEventListener(n,t)}}},removeEventListener:function(n,t){var o=s.get(t);o&&(o.remove(),s.delete(t))},fetch:function(){return console.warn('NetInfo.fetch() is deprecated. Use NetInfo.getConnectionInfo() instead.'),f.getCurrentConnectivity().then(function(n){return n.network_info})},getConnectionInfo:function(){return f.getCurrentConnectivity().then(function(n){return{type:n.connectionType,effectiveType:n.effectiveConnectionType}})},isConnected:{addEventListener:function(t,o){var c=function(c){'change'===t?o(n(c)):'connectionChange'===t&&o(v(c))};return C.set(o,c),h.addEventListener(t,c),{remove:function(){return h.isConnected.removeEventListener(t,o)}}},removeEventListener:function(n,t){var o=C.get(t);h.removeEventListener(n,o),C.delete(t)},fetch:function(){return h.getConnectionInfo().then(v)}},isConnectionExpensive:function(){return f.isConnectionMetered()}};m.exports=h},328,[96,125,30,57]);