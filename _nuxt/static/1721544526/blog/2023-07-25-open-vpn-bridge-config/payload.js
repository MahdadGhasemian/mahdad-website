__NUXT_JSONP__("/blog/2023-07-25-open-vpn-bridge-config", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah){return {data:[{article:{slug:"2023-07-25-open-vpn-bridge-config",description:"Let's configure an OpenVPN on two servers and connect them with SSH tunnel",title:"How to setup an OpenVPN by ssh tunnel (bridge mode)",tags:"vpn, open-vpn, ssh, ssh-tunnel",date:"2023-07-25T00:00:00.000Z",image:K,author:"Mahdad Ghasemian",draft:true,toc:[{id:L,depth:A,text:M},{id:N,depth:A,text:O},{id:P,depth:A,text:Q},{id:R,depth:A,text:S},{id:T,depth:E,text:U},{id:V,depth:E,text:W},{id:X,depth:E,text:Y}],body:{type:"root",children:[{type:b,tag:B,props:{id:L},children:[{type:b,tag:m,props:{ariaHidden:n,href:"#on-server-b-foreign-server",tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:M}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:h,props:{},children:[{type:a,value:C},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"mkdir"}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,"builtin","class-name"]},children:[{type:a,value:"cd"}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:x}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:l}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:$}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:D}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aa}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:D}]},{type:a,value:" .\u002Finstall-upstream.sh open-vpn-port ca-passphrase server-b-ssh-port server-a-ip port-on-server-a\n"}]}]}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:a,value:"Once the script finishes, It will print a command as follows, please run it on your intranet server :"}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:x}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:l}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:H}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:I}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:l}]},{type:a,value:ac}]}]}]},{type:a,value:f},{type:b,tag:B,props:{id:N},children:[{type:b,tag:m,props:{ariaHidden:n,href:"#on-server-a-intranet-server",tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:O}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:h,props:{},children:[{type:a,value:C},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:x}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:l}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:H}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:I}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:l}]},{type:a,value:ac}]}]}]},{type:a,value:f},{type:b,tag:B,props:{id:P},children:[{type:b,tag:m,props:{ariaHidden:n,href:"#add-new-user",tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:Q}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:a,value:"After setup, run the following command to add a new user on the "},{type:b,tag:"strong",props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"Server B"}]}]},{type:a,value:".\nThis will create a new "},{type:b,tag:h,props:{},children:[{type:a,value:"USERNAME.ovpn"}]},{type:a,value:" file that you can download and add to your client applications."}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:h,props:{},children:[{type:a,value:"$ .\u002Fadd_user.sh USERNAME PASSWORD\n"}]}]}]},{type:a,value:f},{type:b,tag:B,props:{id:R},children:[{type:b,tag:m,props:{ariaHidden:n,href:"#example",tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:S}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:b,tag:"img",props:{alt:"ssh-tunnel",src:K},children:[]}]},{type:a,value:f},{type:b,tag:J,props:{id:T},children:[{type:b,tag:m,props:{ariaHidden:n,href:"#on-the-server-b-foreign-server",tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:U}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:h,props:{},children:[{type:a,value:C},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:x}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:l}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:$}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:D}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aa}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:D}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ad}]},{type:a,value:" ca1234 "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ae}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"87.248"}]},{type:a,value:".156.100 "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:af}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:J,props:{id:V},children:[{type:b,tag:m,props:{ariaHidden:n,href:"#on-the-server-a-intranet-server",tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:W}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:h,props:{},children:[{type:a,value:C},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:x}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:l}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:H}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:I}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i,j]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ae}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:af}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ad}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"65.108"}]},{type:a,value:".83.101\n"}]}]}]},{type:a,value:f},{type:b,tag:J,props:{id:X},children:[{type:b,tag:m,props:{ariaHidden:n,href:"#add-a-user",tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:Y}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:a,value:"We're gonig to add a user named "},{type:b,tag:h,props:{},children:[{type:a,value:"user1"}]},{type:a,value:" with the password "},{type:b,tag:h,props:{},children:[{type:a,value:ag}]},{type:a,value:".\nOn the server B, inside the openvpn folder, run following command:"}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:h,props:{},children:[{type:a,value:"$ .\u002Fadd_user.sh user1 "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ag}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:z,props:{},children:[{type:a,value:"Once it finishes, a file called "},{type:b,tag:h,props:{},children:[{type:a,value:"user1.ovpn"}]},{type:a,value:" will be generated inside the folder. Download it and add to your client app."}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F2023-07-25-open-vpn-bridge-config",extension:".md",createdAt:ah,updatedAt:ah},_img:{"/_ipx/_/author.jpg":"\u002F_nuxt\u002Fimage\u002Fd17f97.jpg"}}],fetch:{},mutations:void 0}}("text","element","span","token"," ","\n","function","code","parameter","variable","number","-s","a","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","language-shell","line-numbers","operator","sudo","curl","p",2,"h2","$ ","&&",3," .\u002Finstall-upstream.sh "," https:\u002F\u002Fraw.githubusercontent.com\u002FMahdadGhasemian\u002Fopenvpn-bridge-config\u002Fmain\u002Finstall-bridge.sh ","|","bash","h3","\u002Fblog\u002Fssh-tunnel.png","on-server-b-foreign-server","On Server B (Foreign Server):","on-server-a-intranet-server","On Server A (Intranet server):","add-new-user","Add new user:","example","Example","on-the-server-b-foreign-server","on the server B (Foreign Server):","on-the-server-a-intranet-server","on the server A (Intranet server):","add-a-user","Add a user:"," openvpn\n$ "," https:\u002F\u002Fraw.githubusercontent.com\u002FMahdadGhasemian\u002Fopenvpn-bridge-config\u002Fmain\u002Finstall-upstream.sh ","-o","chmod"," +x .\u002Finstall-upstream.sh "," server-b-ssh-port port-on-server-a open-vpn-port server-b-ip\n","7766","2221","4445","1234","2024-07-21T06:48:00.912Z")));