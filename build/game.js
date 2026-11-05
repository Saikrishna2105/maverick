(()=>{var Zh=0,Jl=1,Jh=2;var Mr=1,Ka=2,ys=3,Mi=0,on=1,Sn=2,Oi=0,Ms=1,Bi=2,$l=3,Kl=4,$h=5;var zi=100,Kh=101,Qh=102,jh=103,tu=104,eu=200,nu=201,iu=202,su=203,Ql=204,jl=205,ru=206,au=207,ou=208,lu=209,cu=210,hu=211,uu=212,du=213,fu=214,ma=0,ga=1,xa=2,cs=3,_a=4,va=5,ya=6,Ma=7,tc=0,pu=1,mu=2,Gn=0,ec=1,nc=2,ic=3,Sr=4,sc=5,rc=6,ac=7;var oc=300,ki=301,Ss=302,Qa=303,ja=304,hs=1e3,On=1001,Sa=1002,Be=1003,gu=1004;var br=1005;var rn=1006,to=1007;var ei=1008;var fn=1009,lc=1010,cc=1011,bs=1012,eo=1013,Ln=1014,bn=1015,Dn=1016,no=1017,io=1018,Gi=1020,hc=35902,uc=35899,dc=1021,fc=1022,Nn=1023,jn=1026,ni=1027,so=1028,ro=1029,Si=1030,ao=1031;var oo=1033,Er=33776,Tr=33777,wr=33778,Ar=33779,lo=35840,co=35841,ho=35842,uo=35843,fo=36196,po=37492,mo=37496,go=37488,xo=37489,Rr=37490,_o=37491,vo=37808,yo=37809,Mo=37810,So=37811,bo=37812,Eo=37813,To=37814,wo=37815,Ao=37816,Ro=37817,Co=37818,Io=37819,Po=37820,Lo=37821,Do=36492,No=36494,Uo=36495,Fo=36283,Oo=36284,Cr=36285,Bo=36286;var Gs=2300,ba=2301,fa=2302,Ol=2303,Bl=2400,zl=2401,kl=2402;var xu=3200;var zo=0,_u=1,ii="",Ve="srgb",Hs="srgb-linear",Vs="linear",ve="srgb";var pa=7680;var vu=519,yu=512,Mu=513,Su=514,pc=515,bu=516,Eu=517,mc=518,gc=519,Tu=35044,Ir=35048;var xc="300 es",Mn=2e3,us=2001;function rf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function af(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wu(){let i=Ws("canvas");return i.style.display="block",i}var xh={},ds=null;function _c(...i){let t="THREE."+i.shift();ds?ds("log",t,...i):console.log(t,...i)}function Au(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Zt(...i){i=Au(i);let t="THREE."+i.shift();if(ds)ds("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Jt(...i){i=Au(i);let t="THREE."+i.shift();if(ds)ds("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Bs(...i){let t=i.join(" ");t in xh||(xh[t]=!0,Zt(...i))}function Ru(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Cu={[ma]:ma,[xa]:ya,[_a]:_a,[cs]:va,[ga]:ga,[ya]:xa,[Ma]:Ma,[va]:cs},Bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var dl=Math.PI/180,Xs=180/Math.PI;function Es(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function oe(i,t,e){return Math.max(t,Math.min(e,i))}function of(i,t){return(i%t+t)%t}function fl(i,t,e){return(1-e)*i+e*t}function Iu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function lf(i,t){if(t.constructor===Float32Array)return i;let e=vc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function cf(i,t){if(t.constructor===Float32Array)return i;let e=vc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Tc=class Tc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Tc.prototype.isVector2=!0;var Tt=Tc,Qe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],p=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*y;m<0&&(u=-u,f=-f,p=-p,y=-y,m=-m);let g=1-o;if(m<.9995){let M=Math.acos(m),E=Math.sin(M);g=Math.sin(g*M)/E,o=Math.sin(o*M)/E,l=l*g+u*o,c=c*g+f*o,h=h*g+p*o,d=d*g+y*o}else{l=l*g+u*o,c=c*g+f*o,h=h*g+p*o,d=d*g+y*o;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-o*f,t[e+2]=c*p+h*f+o*u-l*d,t[e+3]=h*p-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},wc=class wc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_h.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_h.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pl.copy(this).projectOnVector(t),this.sub(pl)}reflect(t){return this.sub(pl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};wc.prototype.isVector3=!0;var U=wc,pl=new U,_h=new Qe,Ac=class Ac{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],y=s[0],m=s[3],g=s[6],M=s[1],E=s[4],_=s[7],A=s[2],T=s[5],x=s[8];return r[0]=a*y+o*M+l*A,r[3]=a*m+o*E+l*T,r[6]=a*g+o*_+l*x,r[1]=c*y+h*M+d*A,r[4]=c*m+h*E+d*T,r[7]=c*g+h*_+d*x,r[2]=u*y+f*M+p*A,r[5]=u*m+f*E+p*T,r[8]=u*g+f*_+p*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,p=e*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ml.makeScale(t,e)),this}rotate(t){return Bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ml.makeRotation(-t)),this}translate(t,e){return Bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ml.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ac.prototype.isMatrix3=!0;var $t=Ac,ml=new $t,vh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hf(){let i={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ve&&(s.r=Qn(s.r),s.g=Qn(s.g),s.b=Qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ve&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?Vs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hs]:{primaries:t,whitePoint:n,transfer:Vs,toXYZ:vh,fromXYZ:yh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:vh,fromXYZ:yh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),i}var ue=hf();function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Zi,Ea=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Zi===void 0&&(Zi=Ws("canvas")),Zi.width=t.width,Zi.height=t.height;let s=Zi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Ws("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},uf=0,fs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Es(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(gl(s[a].image)):r.push(gl(s[a]))}else r=gl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function gl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ea.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var df=0,xl=new U,an=class i extends Bn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=On,s=On,r=rn,a=ei,o=Nn,l=fn,c=i.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Es(),this.name="",this.source=new fs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(xl).x}get height(){return this.source.getSize(xl).y}get depth(){return this.source.getSize(xl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==oc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hs:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case Sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hs:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case Sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=oc;an.DEFAULT_ANISOTROPY=1;var Rc=class Rc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],y=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,_=(f+1)/2,A=(g+1)/2,T=(h+u)/4,x=(d+y)/4,b=(p+m)/4;return E>_&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=x/n):_>A?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=b/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=x/r,s=b/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-p)*(m-p)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(d-y)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rc.prototype.isVector4=!0;var Te=Rc,Ta=class extends Bn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new an({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new fs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends Ta{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},qs=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var wa=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var $a=class $a{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,p,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,p,y,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,p,y,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $a().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),a=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,p=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,y=c*d;e[0]=u+y*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,p=o*h,y=o*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,p=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=p*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-y*d}else if(t.order==="XZY"){let u=a*l,f=a*c,p=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ff,t,pf)}lookAt(t,e,n){let s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),li.crossVectors(n,pn),li.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),li.crossVectors(n,pn)),li.normalize(),Wr.crossVectors(pn,li),s[0]=li.x,s[4]=Wr.x,s[8]=pn.x,s[1]=li.y,s[5]=Wr.y,s[9]=pn.y,s[2]=li.z,s[6]=Wr.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],y=n[6],m=n[10],g=n[14],M=n[3],E=n[7],_=n[11],A=n[15],T=s[0],x=s[4],b=s[8],N=s[12],C=s[1],L=s[5],z=s[9],q=s[13],P=s[2],W=s[6],$=s[10],k=s[14],ot=s[3],J=s[7],it=s[11],st=s[15];return r[0]=a*T+o*C+l*P+c*ot,r[4]=a*x+o*L+l*W+c*J,r[8]=a*b+o*z+l*$+c*it,r[12]=a*N+o*q+l*k+c*st,r[1]=h*T+d*C+u*P+f*ot,r[5]=h*x+d*L+u*W+f*J,r[9]=h*b+d*z+u*$+f*it,r[13]=h*N+d*q+u*k+f*st,r[2]=p*T+y*C+m*P+g*ot,r[6]=p*x+y*L+m*W+g*J,r[10]=p*b+y*z+m*$+g*it,r[14]=p*N+y*q+m*k+g*st,r[3]=M*T+E*C+_*P+A*ot,r[7]=M*x+E*L+_*W+A*J,r[11]=M*b+E*z+_*$+A*it,r[15]=M*N+E*q+_*k+A*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],y=t[7],m=t[11],g=t[15],M=l*f-c*u,E=o*f-c*d,_=o*u-l*d,A=a*f-c*h,T=a*u-l*h,x=a*d-o*h;return e*(y*M-m*E+g*_)-n*(p*M-m*A+g*T)+s*(p*E-y*A+g*x)-r*(p*_-y*T+m*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],y=t[13],m=t[14],g=t[15],M=e*o-n*a,E=e*l-s*a,_=e*c-r*a,A=n*l-s*o,T=n*c-r*o,x=s*c-r*l,b=h*y-d*p,N=h*m-u*p,C=h*g-f*p,L=d*m-u*y,z=d*g-f*y,q=u*g-f*m,P=M*q-E*z+_*L+A*C-T*N+x*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/P;return t[0]=(o*q-l*z+c*L)*W,t[1]=(s*z-n*q-r*L)*W,t[2]=(y*x-m*T+g*A)*W,t[3]=(u*T-d*x-f*A)*W,t[4]=(l*C-a*q-c*N)*W,t[5]=(e*q-s*C+r*N)*W,t[6]=(m*_-p*x-g*E)*W,t[7]=(h*x-u*_+f*E)*W,t[8]=(a*z-o*C+c*b)*W,t[9]=(n*C-e*z-r*b)*W,t[10]=(p*T-y*_+g*M)*W,t[11]=(d*_-h*T-f*M)*W,t[12]=(o*N-a*L-l*b)*W,t[13]=(e*L-n*N+s*b)*W,t[14]=(y*E-p*A-m*M)*W,t[15]=(h*A-d*E+u*M)*W,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,p=r*d,y=a*h,m=a*d,g=o*d,M=l*c,E=l*h,_=l*d,A=n.x,T=n.y,x=n.z;return s[0]=(1-(y+g))*A,s[1]=(f+_)*A,s[2]=(p-E)*A,s[3]=0,s[4]=(f-_)*T,s[5]=(1-(u+g))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(p+E)*x,s[9]=(m-M)*x,s[10]=(1-(u+y))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ji.set(s[0],s[1],s[2]).length(),o=Ji.set(s[4],s[5],s[6]).length(),l=Ji.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Rn.copy(this);let c=1/a,h=1/o,d=1/l;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,e.setFromRotationMatrix(Rn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Mn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,y;if(l)p=r/(a-r),y=a*r/(a-r);else if(o===Mn)p=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===us)p=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Mn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),p,y;if(l)p=1/(a-r),y=a/(a-r);else if(o===Mn)p=-2/(a-r),y=-(a+r)/(a-r);else if(o===us)p=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};$a.prototype.isMatrix4=!0;var de=$a,Ji=new U,Rn=new de,ff=new U(0,0,0),pf=new U(1,1,1),li=new U,Wr=new U,pn=new U,Mh=new de,Sh=new Qe,xn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sh.setFromEuler(this),this.setFromQuaternion(Sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER="XYZ";var Ys=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},mf=0,bh=new U,$i=new Qe,Yn=new de,Xr=new U,Ps=new U,gf=new U,xf=new Qe,Eh=new U(1,0,0),Th=new U(0,1,0),wh=new U(0,0,1),Ah={type:"added"},_f={type:"removed"},Ki={type:"childadded",child:null},_l={type:"childremoved",child:null},ze=class i extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new xn,n=new Qe,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new $t}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(Eh,t)}rotateY(t){return this.rotateOnAxis(Th,t)}rotateZ(t){return this.rotateOnAxis(wh,t)}translateOnAxis(t,e){return bh.copy(t).applyQuaternion(this.quaternion),this.position.add(bh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Eh,t)}translateY(t){return this.translateOnAxis(Th,t)}translateZ(t){return this.translateOnAxis(wh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xr.copy(t):Xr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Ps,Xr,this.up):Yn.lookAt(Xr,Ps,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Yn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ah),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_f),_l.child=t,this.dispatchEvent(_l),_l.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ah),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,gf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,xf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ze.DEFAULT_UP=new U(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},vf={type:"move"},ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),g=this._getHandJoint(c,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},qr={h:0,s:0,l:0};function vl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=of(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=vl(a,r,t+1/3),this.g=vl(a,r,t),this.b=vl(a,r,t-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){let n=Pu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return ue.workingToColorSpace(Je.copy(this),t),Math.round(oe(Je.r*255,0,255))*65536+Math.round(oe(Je.g*255,0,255))*256+Math.round(oe(Je.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(Je.copy(this),e);let n=Je.r,s=Je.g,r=Je.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=Ve){ue.workingToColorSpace(Je.copy(this),t);let e=Je.r,n=Je.g,s=Je.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(qr);let n=fl(ci.h,qr.h,e),s=fl(ci.s,qr.s,e),r=fl(ci.l,qr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Je=new Kt;Kt.NAMES=Pu;var Zs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Js=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Cn=new U,Zn=new U,yl=new U,Jn=new U,Qi=new U,ji=new U,Rh=new U,Ml=new U,Sl=new U,bl=new U,El=new Te,Tl=new Te,wl=new Te,fi=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),Zn.subVectors(n,e),yl.subVectors(t,e);let a=Cn.dot(Cn),o=Cn.dot(Zn),l=Cn.dot(yl),c=Zn.dot(Zn),h=Zn.dot(yl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(o,Jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return El.setScalar(0),Tl.setScalar(0),wl.setScalar(0),El.fromBufferAttribute(t,e),Tl.fromBufferAttribute(t,n),wl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(El,r.x),a.addScaledVector(Tl,r.y),a.addScaledVector(wl,r.z),a}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),Zn.subVectors(t,e),Cn.cross(Zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Cn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Qi.subVectors(s,n),ji.subVectors(r,n),Ml.subVectors(t,n);let l=Qi.dot(Ml),c=ji.dot(Ml);if(l<=0&&c<=0)return e.copy(n);Sl.subVectors(t,s);let h=Qi.dot(Sl),d=ji.dot(Sl);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(Qi,a);bl.subVectors(t,r);let f=Qi.dot(bl),p=ji.dot(bl);if(p>=0&&f<=p)return e.copy(r);let y=f*c-l*p;if(y<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(ji,o);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Rh.subVectors(r,s),o=(d-h)/(d-h+(f-p)),e.copy(s).addScaledVector(Rh,o);let g=1/(m+y+u);return a=y*g,o=u*g,e.copy(n).addScaledVector(Qi,a).addScaledVector(ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},zn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(t.matrixWorld),this.union(Yr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),Zr.subVectors(this.max,Ls),ts.subVectors(t.a,Ls),es.subVectors(t.b,Ls),ns.subVectors(t.c,Ls),hi.subVectors(es,ts),ui.subVectors(ns,es),Ci.subVectors(ts,ns);let e=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Ci.z,Ci.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Ci.z,0,-Ci.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Ci.y,Ci.x,0];return!Al(e,ts,es,ns,Zr)||(e=[1,0,0,0,1,0,0,0,1],!Al(e,ts,es,ns,Zr))?!1:(Jr.crossVectors(hi,ui),e=[Jr.x,Jr.y,Jr.z],Al(e,ts,es,ns,Zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},$n=[new U,new U,new U,new U,new U,new U,new U,new U],In=new U,Yr=new zn,ts=new U,es=new U,ns=new U,hi=new U,ui=new U,Ci=new U,Ls=new U,Zr=new U,Jr=new U,Ii=new U;function Al(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ii.fromArray(i,r);let o=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=t.dot(Ii),c=e.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Pe=new U,$r=new Tt,yf=0,sn=class extends Bn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Tu,this.updateRanges=[],this.gpuType=bn,this.version=0,this._normalizationScale=t!==void 0?vc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):lf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):cf(t,this.array)}};var $s=class extends sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ks=class extends sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Se=class extends sn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Mf=new zn,Ds=new U,Rl=new U,pi=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Mf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);let e=Ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(Rl)),this.expandByPoint(Ds.copy(t.center).sub(Rl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Sf=0,yn=new de,Cl=new ze,is=new U,mn=new zn,Ns=new zn,Oe=new U,We=class i extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rf(t)?Ks:$s)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return Cl.lookAt(t),Cl.updateMatrix(),this.applyMatrix4(Cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Se(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(mn.min,Ns.min),mn.expandByPoint(Oe),Oe.addVectors(mn.max,Ns.max),mn.expandByPoint(Oe)):(mn.expandByPoint(Ns.min),mn.expandByPoint(Ns.max))}mn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Oe.fromBufferAttribute(o,c),l&&(is.fromBufferAttribute(t,c),Oe.add(is)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new U,l[N]=new U;let h=new U,d=new U,u=new U,f=new Tt,p=new Tt,y=new Tt,m=new U,g=new U;function M(N,C,L){c[N]=c[C]=c[L]=1,h.fromBufferAttribute(n,N),d.fromBufferAttribute(n,C),u.fromBufferAttribute(n,L),f.fromBufferAttribute(r,N),p.fromBufferAttribute(r,C),y.fromBufferAttribute(r,L),d.sub(h),u.sub(h),p.sub(f),y.sub(f);let z=1/(p.x*y.y-y.x*p.y);isFinite(z)&&(m.copy(d).multiplyScalar(y.y).addScaledVector(u,-p.y).multiplyScalar(z),g.copy(u).multiplyScalar(p.x).addScaledVector(d,-y.x).multiplyScalar(z),o[N].add(m),o[C].add(m),o[L].add(m),l[N].add(g),l[C].add(g),l[L].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let N=0,C=E.length;N<C;++N){let L=E[N],z=L.start,q=L.count;for(let P=z,W=z+q;P<W;P+=3)M(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let _=new U,A=new U,T=new U,x=new U;function b(N){T.fromBufferAttribute(s,N),x.copy(T);let C=o[N];_.copy(C),_.sub(T.multiplyScalar(T.dot(C))).normalize(),A.crossVectors(x,C);let z=A.dot(l[N])<0?-1:1;a.setXYZW(N,_.x,_.y,_.z,z)}for(let N=0,C=n.count;N<C;++N)c[N]&&b(N);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,d=new U;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new sn(u,h,d)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Il=new U,bf=new U,Ef=new $t,Pn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Il.subVectors(n,e).cross(bf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Il),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ef.getNormalMatrix(t),s=this.coplanarPoint(Il).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Tf=0,mi=class extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=Ms,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ql,this.blendDst=jl,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pa,this.stencilZFail=pa,this.stencilZPass=pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Pn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Tt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Tt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Kn=new U,Pl=new U,Kr=new U,Qr=new U,Aa=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Pl.copy(t).add(e).multiplyScalar(.5),Kr.copy(e).sub(t).normalize(),Qr.copy(this.origin).sub(Pl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Kr),o=Qr.dot(this.direction),l=-Qr.dot(Kr),c=Qr.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Pl).addScaledVector(Kr,u),f}intersectSphere(t,e){if(t.radius<0)return null;Kn.subVectors(t.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,p=e.x-a.x,y=e.y-a.y,m=e.z-a.z,g=n.x-a.x,M=n.y-a.y,E=n.z-a.z,_=Math.abs(l),A=Math.abs(c),T=Math.abs(h),x,b,N,C,L,z,q,P,W,$,k,ot;if(_>=A&&_>=T?(N=l,z=d,W=p,ot=g,l>=0?(x=c,b=h,C=u,L=f,q=y,P=m,$=M,k=E):(x=h,b=c,C=f,L=u,q=m,P=y,$=E,k=M)):A>=T?(N=c,z=u,W=y,ot=M,c>=0?(x=h,b=l,C=f,L=d,q=m,P=p,$=E,k=g):(x=l,b=h,C=d,L=f,q=p,P=m,$=g,k=E)):(N=h,z=f,W=m,ot=E,h>=0?(x=l,b=c,C=d,L=u,q=p,P=y,$=g,k=M):(x=c,b=l,C=u,L=d,q=y,P=p,$=M,k=g)),N===0)return null;let J=x/N,it=b/N,st=1/N,Pt=C-J*z,Bt=L-it*z,K=q-J*W,xt=P-it*W,Rt=$-J*ot,Gt=k-it*ot,St=Rt*xt-Gt*K,kt=Pt*Gt-Bt*Rt,me=K*Bt-xt*Pt;if(s){if(St<0||kt<0||me<0)return null}else if((St<0||kt<0||me<0)&&(St>0||kt>0||me>0))return null;let Wt=St+kt+me;if(Wt===0)return null;let Qt=st*(St*z+kt*W+me*ot);return(Wt>0?Qt<0:Qt>0)?null:this.at(Qt/Wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class extends mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ch=new de,Pi=new Aa,jr=new pi,Ih=new U,ta=new U,ea=new U,na=new U,Ll=new U,ia=new U,Ph=new U,sa=new U,ae=class extends ze{constructor(t=new We,e=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ia.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Ll.fromBufferAttribute(d,t),a?ia.addScaledVector(Ll,h):ia.addScaledVector(Ll.sub(e),h))}e.add(ia)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(jr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(jr,Ih)===null||Pi.origin.distanceToSquared(Ih)>(t.far-t.near)**2))&&(Ch.copy(r).invert(),Pi.copy(t.ray).applyMatrix4(Ch),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,y=u.length;p<y;p++){let m=u[p],g=a[m.materialIndex],M=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,A=E;_<A;_+=3){let T=o.getX(_),x=o.getX(_+1),b=o.getX(_+2);s=ra(this,g,t,n,c,h,d,T,x,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let M=o.getX(m),E=o.getX(m+1),_=o.getX(m+2);s=ra(this,a,t,n,c,h,d,M,E,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,y=u.length;p<y;p++){let m=u[p],g=a[m.materialIndex],M=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,A=E;_<A;_+=3){let T=_,x=_+1,b=_+2;s=ra(this,g,t,n,c,h,d,T,x,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let M=m,E=m+1,_=m+2;s=ra(this,a,t,n,c,h,d,M,E,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function wf(i,t,e,n,s,r,a,o){let l;if(t.side===on?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Mi,o),l===null)return null;sa.copy(o),sa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(sa);return c<e.near||c>e.far?null:{distance:c,point:sa.clone(),object:i}}function ra(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ta),i.getVertexPosition(l,ea),i.getVertexPosition(c,na);let h=wf(i,t,e,n,ta,ea,na,Ph);if(h){let d=new U;fi.getBarycoord(Ph,ta,ea,na,d),s&&(h.uv=fi.getInterpolatedAttribute(s,o,l,c,d,new Tt)),r&&(h.uv1=fi.getInterpolatedAttribute(r,o,l,c,d,new Tt)),a&&(h.normal=fi.getInterpolatedAttribute(a,o,l,c,d,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};fi.getNormal(ta,ea,na,u.normal),h.face=u,h.barycoord=d}return h}var Qs=class extends an{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Be,h=Be,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ms=class extends sn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ss=new de,Lh=new de,aa=[],Dh=new zn,Af=new de,Us=new ae,Fs=new pi,dn=class extends ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ms(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Af)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new zn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),Dh.copy(t.boundingBox).applyMatrix4(ss),this.boundingBox.union(Dh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),Fs.copy(t.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(Fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(n),t.ray.intersectsSphere(Fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ss),Lh.multiplyMatrices(n,ss),Us.matrixWorld=Lh,Us.raycast(t,aa);for(let a=0,o=aa.length;a<o;a++){let l=aa[a];l.instanceId=r,l.object=this,e.push(l)}aa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ms(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qs(new Float32Array(s*this.count),s,this.count,so,bn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Li=new pi,Rf=new Tt(.5,.5),oa=new U,gi=class{constructor(t=new Pn,e=new Pn,n=new Pn,s=new Pn,r=new Pn,a=new Pn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],y=r[9],m=r[10],g=r[11],M=r[12],E=r[13],_=r[14],A=r[15];if(s[0].setComponents(c-a,f-h,g-p,A-M).normalize(),s[1].setComponents(c+a,f+h,g+p,A+M).normalize(),s[2].setComponents(c+o,f+d,g+y,A+E).normalize(),s[3].setComponents(c-o,f-d,g-y,A-E).normalize(),n)s[4].setComponents(l,u,m,_).normalize(),s[5].setComponents(c-l,f-u,g-m,A-_).normalize();else if(s[4].setComponents(c-l,f-u,g-m,A-_).normalize(),e===Mn)s[5].setComponents(c+l,f+u,g+m,A+_).normalize();else if(e===us)s[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){Li.center.set(0,0,0);let e=Rf.distanceTo(t.center);return Li.radius=.7071067811865476+e,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(oa.x=s.normal.x>0?t.max.x:t.min.x,oa.y=s.normal.y>0?t.max.y:t.min.y,oa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Nh=new de,Ra=class i{constructor(){this.coordinateSystem=Mn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Nh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new gi),n[s].setFromProjectionMatrix(Nh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new gi),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var js=class extends an{constructor(t=[],e=ki,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},tr=class extends an{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ti=class extends an{constructor(t,e,n=Ln,s,r,a,o=Be,l=Be,c,h=jn,d=1){if(h!==jn&&h!==ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},er=class extends ti{constructor(t,e=Ln,n=ki,s,r,a=Be,o=Be,l,c=jn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},nr=class extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ke=class i extends We{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(d,2));function p(y,m,g,M,E,_,A,T,x,b,N){let C=_/x,L=A/b,z=_/2,q=A/2,P=T/2,W=x+1,$=b+1,k=0,ot=0,J=new U;for(let it=0;it<$;it++){let st=it*L-q;for(let Pt=0;Pt<W;Pt++){let Bt=Pt*C-z;J[y]=Bt*M,J[m]=st*E,J[g]=P,c.push(J.x,J.y,J.z),J[y]=0,J[m]=0,J[g]=T>0?1:-1,h.push(J.x,J.y,J.z),d.push(Pt/x),d.push(1-it/b),k+=1}}for(let it=0;it<b;it++)for(let st=0;st<x;st++){let Pt=u+st+W*it,Bt=u+st+W*(it+1),K=u+(st+1)+W*(it+1),xt=u+(st+1)+W*it;l.push(Pt,Bt,xt),l.push(Bt,K,xt),ot+=6}o.addGroup(f,ot,N),f+=ot,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Xe=class i extends We{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,y=[],m=n/2,g=0;M(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Se(d,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(f,2));function M(){let _=new U,A=new U,T=0,x=(e-t)/n;for(let b=0;b<=r;b++){let N=[],C=b/r,L=C*(e-t)+t;for(let z=0;z<=s;z++){let q=z/s,P=q*l+o,W=Math.sin(P),$=Math.cos(P);A.x=L*W,A.y=-C*n+m,A.z=L*$,d.push(A.x,A.y,A.z),_.set(W,x,$).normalize(),u.push(_.x,_.y,_.z),f.push(q,1-C),N.push(p++)}y.push(N)}for(let b=0;b<s;b++)for(let N=0;N<r;N++){let C=y[N][b],L=y[N+1][b],z=y[N+1][b+1],q=y[N][b+1];(t>0||N!==0)&&(h.push(C,L,q),T+=3),(e>0||N!==r-1)&&(h.push(L,z,q),T+=3)}c.addGroup(g,T,0),g+=T}function E(_){let A=p,T=new Tt,x=new U,b=0,N=_===!0?t:e,C=_===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),p++;let L=p;for(let z=0;z<=s;z++){let P=z/s*l+o,W=Math.cos(P),$=Math.sin(P);x.x=N*$,x.y=m*C,x.z=N*W,d.push(x.x,x.y,x.z),u.push(0,C,0),T.x=W*.5+.5,T.y=$*.5*C+.5,f.push(T.x,T.y),p++}for(let z=0;z<s;z++){let q=A+z,P=L+z;_===!0?h.push(P,P+1,q):h.push(P+1,P,q),b+=3}c.addGroup(g,b,_===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ir=class i extends Xe{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ca=class i extends We{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Se(r,3)),this.setAttribute("normal",new Se(r.slice(),3)),this.setAttribute("uv",new Se(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let E=new U,_=new U,A=new U;for(let T=0;T<e.length;T+=3)f(e[T+0],E),f(e[T+1],_),f(e[T+2],A),l(E,_,A,M)}function l(M,E,_,A){let T=A+1,x=[];for(let b=0;b<=T;b++){x[b]=[];let N=M.clone().lerp(_,b/T),C=E.clone().lerp(_,b/T),L=T-b;for(let z=0;z<=L;z++)z===0&&b===T?x[b][z]=N:x[b][z]=N.clone().lerp(C,z/L)}for(let b=0;b<T;b++)for(let N=0;N<2*(T-b)-1;N++){let C=Math.floor(N/2);N%2===0?(u(x[b][C+1]),u(x[b+1][C]),u(x[b][C])):(u(x[b][C+1]),u(x[b+1][C+1]),u(x[b+1][C]))}}function c(M){let E=new U;for(let _=0;_<r.length;_+=3)E.x=r[_+0],E.y=r[_+1],E.z=r[_+2],E.normalize().multiplyScalar(M),r[_+0]=E.x,r[_+1]=E.y,r[_+2]=E.z}function h(){let M=new U;for(let E=0;E<r.length;E+=3){M.x=r[E+0],M.y=r[E+1],M.z=r[E+2];let _=m(M)/2/Math.PI+.5,A=g(M)/Math.PI+.5;a.push(_,1-A)}p(),d()}function d(){for(let M=0;M<a.length;M+=6){let E=a[M+0],_=a[M+2],A=a[M+4],T=Math.max(E,_,A),x=Math.min(E,_,A);T>.9&&x<.1&&(E<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),A<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,E){let _=M*3;E.x=t[_+0],E.y=t[_+1],E.z=t[_+2]}function p(){let M=new U,E=new U,_=new U,A=new U,T=new Tt,x=new Tt,b=new Tt;for(let N=0,C=0;N<r.length;N+=9,C+=6){M.set(r[N+0],r[N+1],r[N+2]),E.set(r[N+3],r[N+4],r[N+5]),_.set(r[N+6],r[N+7],r[N+8]),T.set(a[C+0],a[C+1]),x.set(a[C+2],a[C+3]),b.set(a[C+4],a[C+5]),A.copy(M).add(E).add(_).divideScalar(3);let L=m(A);y(T,C+0,M,L),y(x,C+2,E,L),y(b,C+4,_,L)}}function y(M,E,_,A){A<0&&M.x===1&&(a[E]=M.x-1),_.x===0&&_.z===0&&(a[E]=A/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var _n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Tt:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],a=[],o=new U,l=new de;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(oe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(oe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},gs=class extends _n{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Tt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ia=class extends gs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function yc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Uh=new U,Fh=new U,Dl=new yc,Nl=new yc,Ul=new yc,Pa=class extends _n{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Fh.subVectors(s[0],s[1]).add(s[0]),c=Fh);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Uh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Uh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),p<1e-4&&(p=y),m<1e-4&&(m=y),Dl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,y,m),Nl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,y,m),Ul.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,y,m)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Nl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Ul.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Dl.calc(l),Nl.calc(l),Ul.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Oh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Cf(i,t){let e=1-i;return e*e*t}function If(i,t){return 2*(1-i)*i*t}function Pf(i,t){return i*i*t}function zs(i,t,e,n){return Cf(i,t)+If(i,e)+Pf(i,n)}function Lf(i,t){let e=1-i;return e*e*e*t}function Df(i,t){let e=1-i;return 3*e*e*i*t}function Nf(i,t){return 3*(1-i)*i*i*t}function Uf(i,t){return i*i*i*t}function ks(i,t,e,n,s){return Lf(i,t)+Df(i,e)+Nf(i,n)+Uf(i,s)}var sr=class extends _n{constructor(t=new Tt,e=new Tt,n=new Tt,s=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Tt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ks(t,s.x,r.x,a.x,o.x),ks(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},La=class extends _n{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ks(t,s.x,r.x,a.x,o.x),ks(t,s.y,r.y,a.y,o.y),ks(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},rr=class extends _n{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Da=class extends _n{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ar=class extends _n{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(zs(t,s.x,r.x,a.x),zs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Na=class extends _n{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(zs(t,s.x,r.x,a.x),zs(t,s.y,r.y,a.y),zs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},or=class extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Oh(o,l.x,c.x,h.x,d.x),Oh(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Tt().fromArray(s))}return this}},Gl=Object.freeze({__proto__:null,ArcCurve:Ia,CatmullRomCurve3:Pa,CubicBezierCurve:sr,CubicBezierCurve3:La,EllipseCurve:gs,LineCurve:rr,LineCurve3:Da,QuadraticBezierCurve:ar,QuadraticBezierCurve3:Na,SplineCurve:or}),Ua=class extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Gl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},lr=class extends Ua{constructor(t){super(),this.type="Path",this.currentPoint=new Tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new rr(this.currentPoint.clone(),new Tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ar(this.currentPoint.clone(),new Tt(t,e),new Tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new sr(this.currentPoint.clone(),new Tt(t,e),new Tt(n,s),new Tt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new or(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new gs(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},xi=class extends lr{constructor(t){super(t),this.uuid=Es(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new lr().fromJSON(s))}return this}};function Ff(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Lu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Gf(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=i[u],p=i[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return cr(r,a,e,o,l,c,0),a}function Lu(i,t,e,n,s){let r;if(s===Qf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Bh(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Bh(a/n|0,i[a],i[a+1],r);return r&&xs(r,r.next)&&(ur(r),r=r.next),r}function Ni(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(xs(e,e.next)||Ae(e.prev,e,e.next)===0)){if(ur(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function cr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&qf(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Bf(i,n,s,r):Of(i)){t.push(l.i,i.i,c.i),ur(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=zf(Ni(i),t),cr(i,t,e,n,s,r,2)):a===2&&kf(i,t,e,n,s,r):cr(Ni(i),t,e,n,s,r,1);break}}}function Of(i){let t=i.prev,e=i,n=i.next;if(Ae(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Os(s,o,r,l,a,c,p.x,p.y)&&Ae(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Bf(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ae(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),p=Math.min(h,d,u),y=Math.max(o,l,c),m=Math.max(h,d,u),g=Hl(f,p,t,e,n),M=Hl(y,m,t,e,n),E=i.prevZ,_=i.nextZ;for(;E&&E.z>=g&&_&&_.z<=M;){if(E.x>=f&&E.x<=y&&E.y>=p&&E.y<=m&&E!==s&&E!==a&&Os(o,h,l,d,c,u,E.x,E.y)&&Ae(E.prev,E,E.next)>=0||(E=E.prevZ,_.x>=f&&_.x<=y&&_.y>=p&&_.y<=m&&_!==s&&_!==a&&Os(o,h,l,d,c,u,_.x,_.y)&&Ae(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;E&&E.z>=g;){if(E.x>=f&&E.x<=y&&E.y>=p&&E.y<=m&&E!==s&&E!==a&&Os(o,h,l,d,c,u,E.x,E.y)&&Ae(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=y&&_.y>=p&&_.y<=m&&_!==s&&_!==a&&Os(o,h,l,d,c,u,_.x,_.y)&&Ae(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function zf(i,t){let e=i;do{let n=e.prev,s=e.next.next;!xs(n,s)&&Nu(n,e,e.next,s)&&hr(n,s)&&hr(s,n)&&(t.push(n.i,e.i,s.i),ur(e),ur(e.next),e=i=s),e=e.next}while(e!==i);return Ni(e)}function kf(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Jf(a,o)){let l=Uu(a,o);a=Ni(a,a.next),l=Ni(l,l.next),cr(a,t,e,n,s,r,0),cr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Gf(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Lu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Zf(c))}s.sort(Hf);for(let r=0;r<s.length;r++)e=Vf(s[r],e);return e}function Hf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Vf(i,t){let e=Wf(i,t);if(!e)return t;let n=Uu(e,i);return Ni(n,n.next),Ni(e,e.next)}function Wf(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(xs(i,e))return e;do{if(xs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Du(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);hr(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Xf(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function Xf(i,t){return Ae(i.prev,i,t.prev)<0&&Ae(t.next,i,i.next)<0}function qf(i,t,e,n){let s=i;do s.z===0&&(s.z=Hl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Yf(s)}function Yf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Hl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Zf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Du(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Os(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Du(i,t,e,n,s,r,a,o)}function Jf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!$f(i,t)&&(hr(i,t)&&hr(t,i)&&Kf(i,t)&&(Ae(i.prev,i,t.prev)||Ae(i,t.prev,t))||xs(i,t)&&Ae(i.prev,i,i.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function xs(i,t){return i.x===t.x&&i.y===t.y}function Nu(i,t,e,n){let s=ca(Ae(i,t,e)),r=ca(Ae(i,t,n)),a=ca(Ae(e,n,i)),o=ca(Ae(e,n,t));return!!(s!==r&&a!==o||s===0&&la(i,e,t)||r===0&&la(i,n,t)||a===0&&la(e,i,n)||o===0&&la(e,t,n))}function la(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ca(i){return i>0?1:i<0?-1:0}function $f(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Nu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function hr(i,t){return Ae(i.prev,i,i.next)<0?Ae(i,t,i.next)>=0&&Ae(i,i.prev,t)>=0:Ae(i,t,i.prev)<0||Ae(i,i.next,t)<0}function Kf(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Uu(i,t){let e=Vl(i.i,i.x,i.y),n=Vl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Bh(i,t,e,n){let s=Vl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ur(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Wl=class{static triangulate(t,e,n=2){return Ff(t,e,n)}},Di=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];zh(t),kh(n,t);let a=t.length;e.forEach(zh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,kh(n,e[l]);let o=Wl.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function zh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function kh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ui=class i extends We{constructor(t=new xi([new Tt(.5,.5),new Tt(-.5,.5),new Tt(-.5,-.5),new Tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Se(s,3)),this.setAttribute("uv",new Se(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:jf,E,_=!1,A,T,x,b;if(g){E=g.getSpacedPoints(h),_=!0,u=!1;let nt=g.isCatmullRomCurve3?g.closed:!1;A=g.computeFrenetFrames(h,nt),T=new U,x=new U,b=new U}u||(m=0,f=0,p=0,y=0);let N=o.extractPoints(c),C=N.shape,L=N.holes;if(!Di.isClockWise(C)){C=C.reverse();for(let nt=0,dt=L.length;nt<dt;nt++){let _t=L[nt];Di.isClockWise(_t)&&(L[nt]=_t.reverse())}}function q(nt){let _t=10000000000000001e-36,Ct=nt[0];for(let yt=1;yt<=nt.length;yt++){let Yt=yt%nt.length,Nt=nt[Yt],ne=Nt.x-Ct.x,H=Nt.y-Ct.y,et=ne*ne+H*H,R=Math.max(Math.abs(Nt.x),Math.abs(Nt.y),Math.abs(Ct.x),Math.abs(Ct.y)),pt=_t*R*R;if(et<=pt){nt.splice(Yt,1),yt--;continue}Ct=Nt}}q(C),L.forEach(q);let P=L.length,W=C;for(let nt=0;nt<P;nt++){let dt=L[nt];C=C.concat(dt)}function $(nt,dt,_t){return dt||Jt("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(dt,_t)}let k=C.length;function ot(nt,dt,_t){let Ct,yt,Yt,Nt=nt.x-dt.x,ne=nt.y-dt.y,H=_t.x-nt.x,et=_t.y-nt.y,R=Nt*Nt+ne*ne,pt=Nt*et-ne*H;if(Math.abs(pt)>Number.EPSILON){let at=Math.sqrt(R),ht=Math.sqrt(H*H+et*et),Y=dt.x-ne/at,Dt=dt.y+Nt/at,vt=_t.x-et/ht,Lt=_t.y+H/ht,w=((vt-Y)*et-(Lt-Dt)*H)/(Nt*et-ne*H);Ct=Y+Nt*w-nt.x,yt=Dt+ne*w-nt.y;let v=Ct*Ct+yt*yt;if(v<=2)return new Tt(Ct,yt);Yt=Math.sqrt(v/2)}else{let at=!1;Nt>Number.EPSILON?H>Number.EPSILON&&(at=!0):Nt<-Number.EPSILON?H<-Number.EPSILON&&(at=!0):Math.sign(ne)===Math.sign(et)&&(at=!0),at?(Ct=-ne,yt=Nt,Yt=Math.sqrt(R)):(Ct=Nt,yt=ne,Yt=Math.sqrt(R/2))}return new Tt(Ct/Yt,yt/Yt)}let J=[];for(let nt=0,dt=W.length,_t=dt-1,Ct=nt+1;nt<dt;nt++,_t++,Ct++)_t===dt&&(_t=0),Ct===dt&&(Ct=0),J[nt]=ot(W[nt],W[_t],W[Ct]);let it=[],st,Pt=J.concat();for(let nt=0,dt=P;nt<dt;nt++){let _t=L[nt];st=[];for(let Ct=0,yt=_t.length,Yt=yt-1,Nt=Ct+1;Ct<yt;Ct++,Yt++,Nt++)Yt===yt&&(Yt=0),Nt===yt&&(Nt=0),st[Ct]=ot(_t[Ct],_t[Yt],_t[Nt]);it.push(st),Pt=Pt.concat(st)}let Bt;if(m===0)Bt=Di.triangulateShape(W,L);else{let nt=[],dt=[];for(let _t=0;_t<m;_t++){let Ct=_t/m,yt=f*Math.cos(Ct*Math.PI/2),Yt=p*Math.sin(Ct*Math.PI/2)+y;for(let Nt=0,ne=W.length;Nt<ne;Nt++){let H=$(W[Nt],J[Nt],Yt);kt(H.x,H.y,-yt),Ct===0&&nt.push(H)}for(let Nt=0,ne=P;Nt<ne;Nt++){let H=L[Nt];st=it[Nt];let et=[];for(let R=0,pt=H.length;R<pt;R++){let at=$(H[R],st[R],Yt);kt(at.x,at.y,-yt),Ct===0&&et.push(at)}Ct===0&&dt.push(et)}}Bt=Di.triangulateShape(nt,dt)}let K=Bt.length,xt=p+y;for(let nt=0;nt<k;nt++){let dt=u?$(C[nt],Pt[nt],xt):C[nt];_?(x.copy(A.normals[0]).multiplyScalar(dt.x),T.copy(A.binormals[0]).multiplyScalar(dt.y),b.copy(E[0]).add(x).add(T),kt(b.x,b.y,b.z)):kt(dt.x,dt.y,0)}for(let nt=1;nt<=h;nt++)for(let dt=0;dt<k;dt++){let _t=u?$(C[dt],Pt[dt],xt):C[dt];_?(x.copy(A.normals[nt]).multiplyScalar(_t.x),T.copy(A.binormals[nt]).multiplyScalar(_t.y),b.copy(E[nt]).add(x).add(T),kt(b.x,b.y,b.z)):kt(_t.x,_t.y,d/h*nt)}for(let nt=m-1;nt>=0;nt--){let dt=nt/m,_t=f*Math.cos(dt*Math.PI/2),Ct=p*Math.sin(dt*Math.PI/2)+y;for(let yt=0,Yt=W.length;yt<Yt;yt++){let Nt=$(W[yt],J[yt],Ct);kt(Nt.x,Nt.y,d+_t)}for(let yt=0,Yt=L.length;yt<Yt;yt++){let Nt=L[yt];st=it[yt];for(let ne=0,H=Nt.length;ne<H;ne++){let et=$(Nt[ne],st[ne],Ct);_?kt(et.x,et.y+E[h-1].y,E[h-1].x+_t):kt(et.x,et.y,d+_t)}}}Rt(),Gt();function Rt(){let nt=s.length/3;if(u){let dt=0,_t=k*dt;for(let Ct=0;Ct<K;Ct++){let yt=Bt[Ct];me(yt[2]+_t,yt[1]+_t,yt[0]+_t)}dt=h+m*2,_t=k*dt;for(let Ct=0;Ct<K;Ct++){let yt=Bt[Ct];me(yt[0]+_t,yt[1]+_t,yt[2]+_t)}}else{for(let dt=0;dt<K;dt++){let _t=Bt[dt];me(_t[2],_t[1],_t[0])}for(let dt=0;dt<K;dt++){let _t=Bt[dt];me(_t[0]+k*h,_t[1]+k*h,_t[2]+k*h)}}n.addGroup(nt,s.length/3-nt,0)}function Gt(){let nt=s.length/3,dt=0;St(W,dt),dt+=W.length;for(let _t=0,Ct=L.length;_t<Ct;_t++){let yt=L[_t];St(yt,dt),dt+=yt.length}n.addGroup(nt,s.length/3-nt,1)}function St(nt,dt){let _t=nt.length;for(;--_t>=0;){let Ct=_t,yt=_t-1;yt<0&&(yt=nt.length-1);for(let Yt=0,Nt=h+m*2;Yt<Nt;Yt++){let ne=k*Yt,H=k*(Yt+1),et=dt+Ct+ne,R=dt+yt+ne,pt=dt+yt+H,at=dt+Ct+H;Wt(et,R,pt,at)}}}function kt(nt,dt,_t){l.push(nt),l.push(dt),l.push(_t)}function me(nt,dt,_t){Qt(nt),Qt(dt),Qt(_t);let Ct=s.length/3,yt=M.generateTopUV(n,s,Ct-3,Ct-2,Ct-1);jt(yt[0]),jt(yt[1]),jt(yt[2])}function Wt(nt,dt,_t,Ct){Qt(nt),Qt(dt),Qt(Ct),Qt(dt),Qt(_t),Qt(Ct);let yt=s.length/3,Yt=M.generateSideWallUV(n,s,yt-6,yt-3,yt-2,yt-1);jt(Yt[0]),jt(Yt[1]),jt(Yt[3]),jt(Yt[1]),jt(Yt[2]),jt(Yt[3])}function Qt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function jt(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return tp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Gl[s.type]().fromJSON(s)),new i(n,t.options)}},jf={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Tt(r,a),new Tt(o,l),new Tt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],p=t[s*3+2],y=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Tt(a,1-l),new Tt(c,1-d),new Tt(u,1-p),new Tt(y,1-g)]:[new Tt(o,1-l),new Tt(h,1-d),new Tt(f,1-p),new Tt(m,1-g)]}};function tp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var dr=class i extends Ca{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var tn=class i extends We{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],p=[],y=[],m=[];for(let g=0;g<h;g++){let M=g*u-a;for(let E=0;E<c;E++){let _=E*d-r;p.push(_,-M,0),y.push(0,0,1),m.push(E/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<o;M++){let E=M+c*g,_=M+c*(g+1),A=M+1+c*(g+1),T=M+1+c*g;f.push(E,_,T),f.push(_,A,T)}this.setIndex(f),this.setAttribute("position",new Se(p,3)),this.setAttribute("normal",new Se(y,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},fr=class i extends We{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new U,p=new Tt;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let g=r+m/n*a;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}d+=u}for(let y=0;y<s;y++){let m=y*(n+1);for(let g=0;g<n;g++){let M=g+m,E=M,_=M+n+1,A=M+n+2,T=M+1;o.push(E,_,T),o.push(_,A,T)}}this.setIndex(o),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Fi=class i extends We{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new U,u=new U,f=[],p=[],y=[],m=[];for(let g=0;g<=n;g++){let M=[],E=g/n,_=a+E*o,A=t*Math.cos(_),T=Math.sqrt(t*t-A*A),x=0;g===0&&a===0?x=.5/e:g===n&&l===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){let N=b/e,C=s+N*r;d.x=-T*Math.cos(C),d.y=A,d.z=T*Math.sin(C),p.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(N+x,1-E),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){let E=h[g][M+1],_=h[g][M],A=h[g+1][M],T=h[g+1][M+1];(g!==0||a>0)&&f.push(E,_,T),(g!==n-1||l<Math.PI)&&f.push(_,A,T)}this.setIndex(f),this.setAttribute("position",new Se(p,3)),this.setAttribute("normal",new Se(y,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Hi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Gh(s))s.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Gh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function en(i){let t={};for(let e=0;e<i.length;e++){let n=Hi(i[e]);for(let s in n)t[s]=n[s]}return t}function Gh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ep(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Mc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var Fu={clone:Hi,merge:en},np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=np,this.fragmentShader=ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=ep(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Kt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Te().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(s.value);break;case"m4":this.uniforms[n].value=new de().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Fa=class extends kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},xe=class extends mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Oa=class extends mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ba=class extends mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function rs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ha(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var _i=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},za=class extends _i{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bl,endingEnd:Bl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case zl:r=t,o=2*e-n;break;case kl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zl:a=t,l=2*n-e;break;case kl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),y=p*p,m=y*p,g=-u*m+2*u*y-u*p,M=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*p+1,E=(-1-f)*m+(1.5+f)*y+.5*p,_=f*m-f*y;for(let A=0;A!==o;++A)r[A]=g*a[h+A]+M*a[c+A]+E*a[l+A]+_*a[d+A];return r}},ka=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Ga=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ha=class extends _i{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(s-e),y=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*p;return r}let u=o*2,f=t-1;for(let p=0;p!==o;++p){let y=a[c+p],m=a[l+p],g=f*u+p*2,M=d[g],E=d[g+1],_=t*u+p*2,A=h[_],T=h[_+1],x=rp(n,e,M,A,s);r[p]=Ou(x,y,E,T,m)}return r}};function Ou(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function sp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function rp(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Ou(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=sp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var vn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=rs(e,this.TimeBufferType),this.values=rs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:rs(t.times,Array),values:rs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ha(t.settings)&&(n.settings={inTangents:rs(t.settings.inTangents,Array),outTangents:rs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ha(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Gs:e=this.InterpolantFactoryMethodDiscrete;break;case ba:e=this.InterpolantFactoryMethodLinear;break;case fa:e=this.InterpolantFactoryMethodSmooth;break;case Ol:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gs;case this.InterpolantFactoryMethodLinear:return ba;case this.InterpolantFactoryMethodSmooth:return fa;case this.InterpolantFactoryMethodBezier:return Ol}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;ha(this.settings)&&(Hh(this.settings.inTangents,t),Hh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ha(this.settings)&&(Vh(this.settings.inTangents,t),Vh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Jt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Jt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Jt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&af(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Jt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===fa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let y=e[d+p];if(y!==e[u+p]||y!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ha(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Hh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Vh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=ba;var vi=class extends vn{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Gs;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}};Va.prototype.ValueTypeName="color";var Wa=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}};Wa.prototype.ValueTypeName="number";var Xa=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Qe.slerpFlat(r,0,a,c-o,a,c,l);return r}},pr=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Xa(this.times,this.values,this.getValueSize(),t)}};pr.prototype.ValueTypeName="quaternion";pr.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends vn{constructor(t,e,n){super(t,e,n)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=Gs;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var qa=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}};qa.prototype.ValueTypeName="vector";var Ya=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Bu=new Ya,Za=class{constructor(t){this.manager=t!==void 0?t:Bu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Za.DEFAULT_MATERIAL_NAME="__DEFAULT";var _s=class extends ze{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},mr=class extends _s{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Fl=new de,Wh=new U,Xh=new U,gr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gi,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Wh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wh),Xh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Fl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===us||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ua=new U,da=new Qe,Fn=new U,xr=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ua,da,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,da,Fn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ua,da,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,da,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},di=new U,qh=new Tt,Yh=new Tt,$e=class extends xr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(dl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,qh,Yh),e.subVectors(Yh,qh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(dl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Xl=class extends gr{constructor(){super(new $e(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Xs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},_r=class extends _s{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Xl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}};var vr=class extends xr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ql=class extends gr{constructor(){super(new vr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yr=class extends _s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new ql}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var as=-90,os=1,vs=class extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $e(as,os,t,e);s.layers=this.layers,this.add(s);let r=new $e(as,os,t,e);r.layers=this.layers,this.add(r);let a=new $e(as,os,t,e);a.layers=this.layers,this.add(a);let o=new $e(as,os,t,e);o.layers=this.layers,this.add(o);let l=new $e(as,os,t,e);l.layers=this.layers,this.add(l);let c=new $e(as,os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ja=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Sc="\\[\\]\\.:\\/",ap=new RegExp("["+Sc+"]","g"),bc="[^"+Sc+"]",op="[^"+Sc.replace("\\.","")+"]",lp=/((?:WC+[\/:])*)/.source.replace("WC",bc),cp=/(WCOD+)?/.source.replace("WCOD",op),hp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bc),up=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bc),dp=new RegExp("^"+lp+cp+hp+up+"$"),fp=["material","materials","bones","map"],Yl=class{constructor(t,e,n){let s=n||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ee=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ap,"")}static parseTrackName(t){let e=dp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);fp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Jt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=Yl;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var L_=new Float32Array(1);var Cc=class Cc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Cc.prototype.isMatrix2=!0;var Zl=Cc;function Ec(i,t,e,n){let s=pp(n);switch(e){case dc:return i*t;case so:return i*t/s.components*s.byteLength;case ro:return i*t/s.components*s.byteLength;case Si:return i*t*2/s.components*s.byteLength;case ao:return i*t*2/s.components*s.byteLength;case fc:return i*t*3/s.components*s.byteLength;case Nn:return i*t*4/s.components*s.byteLength;case oo:return i*t*4/s.components*s.byteLength;case Er:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wr:case Ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case co:case uo:return Math.max(i,16)*Math.max(t,8)/4;case lo:case ho:return Math.max(i,8)*Math.max(t,8)/2;case fo:case po:case go:case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mo:case Rr:case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case So:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case bo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case To:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Co:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Io:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Po:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Lo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Do:case No:case Uo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Fo:case Oo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Cr:case Bo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pp(i){switch(i){case fn:case lc:return{byteLength:1,components:1};case bs:case cc:case Dn:return{byteLength:2,components:1};case no:case io:return{byteLength:2,components:4};case Ln:case eo:case bn:return{byteLength:4,components:1};case hc:case uc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ad(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Sp(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],y=d[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let y=d[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ep=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Op=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,qp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",jp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,pm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ym=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Em=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,km=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Km=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ig=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,og=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ug=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ag=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ig=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:bp,alphahash_pars_fragment:Ep,alphamap_fragment:Tp,alphamap_pars_fragment:wp,alphatest_fragment:Ap,alphatest_pars_fragment:Rp,aomap_fragment:Cp,aomap_pars_fragment:Ip,batching_pars_vertex:Pp,batching_vertex:Lp,begin_vertex:Dp,beginnormal_vertex:Np,bsdfs:Up,iridescence_fragment:Fp,bumpmap_pars_fragment:Op,clipping_planes_fragment:Bp,clipping_planes_pars_fragment:zp,clipping_planes_pars_vertex:kp,clipping_planes_vertex:Gp,color_fragment:Hp,color_pars_fragment:Vp,color_pars_vertex:Wp,color_vertex:Xp,common:qp,defaultnormal_vertex:Yp,displacementmap_pars_vertex:Zp,displacementmap_vertex:Jp,emissivemap_fragment:$p,emissivemap_pars_fragment:Kp,colorspace_fragment:Qp,colorspace_pars_fragment:jp,envmap_fragment:tm,envmap_common_pars_fragment:em,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:pm,envmap_vertex:sm,fog_vertex:rm,fog_pars_vertex:am,fog_fragment:om,fog_pars_fragment:lm,gradientmap_pars_fragment:cm,lightmap_pars_fragment:hm,lights_lambert_fragment:um,lights_lambert_pars_fragment:dm,lights_pars_begin:fm,lights_toon_fragment:mm,lights_toon_pars_fragment:gm,lights_phong_fragment:xm,lights_phong_pars_fragment:_m,lights_physical_fragment:vm,lights_physical_pars_fragment:ym,lights_fragment_begin:Mm,lights_fragment_maps:Sm,lights_fragment_end:bm,lightprobes_pars_fragment:Em,logdepthbuf_fragment:Tm,logdepthbuf_pars_fragment:wm,logdepthbuf_pars_vertex:Am,logdepthbuf_vertex:Rm,map_fragment:Cm,map_pars_fragment:Im,map_particle_fragment:Pm,map_particle_pars_fragment:Lm,metalnessmap_fragment:Dm,metalnessmap_pars_fragment:Nm,morphinstance_vertex:Um,morphcolor_vertex:Fm,morphnormal_vertex:Om,morphtarget_pars_vertex:Bm,morphtarget_vertex:zm,normal_fragment_begin:km,normal_fragment_maps:Gm,normal_pars_fragment:Hm,normal_pars_vertex:Vm,normal_vertex:Wm,normalmap_pars_fragment:Xm,clearcoat_normal_fragment_begin:qm,clearcoat_normal_fragment_maps:Ym,clearcoat_pars_fragment:Zm,iridescence_pars_fragment:Jm,opaque_fragment:$m,packing:Km,premultiplied_alpha_fragment:Qm,project_vertex:jm,dithering_fragment:tg,dithering_pars_fragment:eg,roughnessmap_fragment:ng,roughnessmap_pars_fragment:ig,shadowmap_pars_fragment:sg,shadowmap_pars_vertex:rg,shadowmap_vertex:ag,shadowmask_pars_fragment:og,skinbase_vertex:lg,skinning_pars_vertex:cg,skinning_vertex:hg,skinnormal_vertex:ug,specularmap_fragment:dg,specularmap_pars_fragment:fg,tonemapping_fragment:pg,tonemapping_pars_fragment:mg,transmission_fragment:gg,transmission_pars_fragment:xg,uv_pars_fragment:_g,uv_pars_vertex:vg,uv_vertex:yg,worldpos_vertex:Mg,background_vert:Sg,background_frag:bg,backgroundCube_vert:Eg,backgroundCube_frag:Tg,cube_vert:wg,cube_frag:Ag,depth_vert:Rg,depth_frag:Cg,distance_vert:Ig,distance_frag:Pg,equirect_vert:Lg,equirect_frag:Dg,linedashed_vert:Ng,linedashed_frag:Ug,meshbasic_vert:Fg,meshbasic_frag:Og,meshlambert_vert:Bg,meshlambert_frag:zg,meshmatcap_vert:kg,meshmatcap_frag:Gg,meshnormal_vert:Hg,meshnormal_frag:Vg,meshphong_vert:Wg,meshphong_frag:Xg,meshphysical_vert:qg,meshphysical_frag:Yg,meshtoon_vert:Zg,meshtoon_frag:Jg,points_vert:$g,points_frag:Kg,shadow_vert:Qg,shadow_frag:jg,sprite_vert:t0,sprite_frag:e0},At={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Vn={basic:{uniforms:en([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:en([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:en([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:en([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:en([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Kt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:en([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:en([At.points,At.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:en([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:en([At.common,At.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:en([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:en([At.sprite,At.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:en([At.common,At.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:en([At.lights,At.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Vn.physical={uniforms:en([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var ko={r:0,b:0,g:0},n0=new de,od=new $t;od.set(-1,0,0,0,1,0,0,0,1);function i0(i,t,e,n,s,r){let a=new Kt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let _=M.backgroundBlurriness>0;E=t.get(E,_)}return E}function p(M){let E=!1,_=f(M);_===null?m(a,o):_&&_.isColor&&(m(_,1),E=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,E){let _=f(E);_&&_.isCubeTexture?(c===void 0&&(c=new ae(new ke(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Hi(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(n0.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(od),c.material.toneMapped=ue.getTransfer(_.colorSpace)!==ve,(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ae(new tn(2,2),new kn({name:"BackgroundMaterial",uniforms:Hi(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ue.getTransfer(_.colorSpace)!==ve,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,E){M.getRGB(ko,Mc(i)),e.buffers.color.setClear(ko.r,ko.g,ko.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:p,addToRenderList:y,dispose:g}}function s0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(L,z,q,P,W){let $=!1,k=d(L,P,q,z);r!==k&&(r=k,c(r.object)),$=f(L,P,q,W),$&&p(L,P,q,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,_(L,z,q,P),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function d(L,z,q,P){let W=P.wireframe===!0,$=n[z.id];$===void 0&&($={},n[z.id]=$);let k=L.isInstancedMesh===!0?L.id:0,ot=$[k];ot===void 0&&(ot={},$[k]=ot);let J=ot[q.id];J===void 0&&(J={},ot[q.id]=J);let it=J[W];return it===void 0&&(it=u(l()),J[W]=it),it}function u(L){let z=[],q=[],P=[];for(let W=0;W<e;W++)z[W]=0,q[W]=0,P[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:P,object:L,attributes:{},index:null}}function f(L,z,q,P){let W=r.attributes,$=z.attributes,k=0,ot=q.getAttributes();for(let J in ot)if(ot[J].location>=0){let st=W[J],Pt=$[J];if(Pt===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(Pt=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(Pt=L.instanceColor)),st===void 0||st.attribute!==Pt||Pt&&st.data!==Pt.data)return!0;k++}return r.attributesNum!==k||r.index!==P}function p(L,z,q,P){let W={},$=z.attributes,k=0,ot=q.getAttributes();for(let J in ot)if(ot[J].location>=0){let st=$[J];st===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(st=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(st=L.instanceColor));let Pt={};Pt.attribute=st,st&&st.data&&(Pt.data=st.data),W[J]=Pt,k++}r.attributes=W,r.attributesNum=k,r.index=P}function y(){let L=r.newAttributes;for(let z=0,q=L.length;z<q;z++)L[z]=0}function m(L){g(L,0)}function g(L,z){let q=r.newAttributes,P=r.enabledAttributes,W=r.attributeDivisors;q[L]=1,P[L]===0&&(i.enableVertexAttribArray(L),P[L]=1),W[L]!==z&&(i.vertexAttribDivisor(L,z),W[L]=z)}function M(){let L=r.newAttributes,z=r.enabledAttributes;for(let q=0,P=z.length;q<P;q++)z[q]!==L[q]&&(i.disableVertexAttribArray(q),z[q]=0)}function E(L,z,q,P,W,$,k){k===!0?i.vertexAttribIPointer(L,z,q,W,$):i.vertexAttribPointer(L,z,q,P,W,$)}function _(L,z,q,P){y();let W=P.attributes,$=q.getAttributes(),k=z.defaultAttributeValues;for(let ot in $){let J=$[ot];if(J.location>=0){let it=W[ot];if(it===void 0&&(ot==="instanceMatrix"&&L.instanceMatrix&&(it=L.instanceMatrix),ot==="instanceColor"&&L.instanceColor&&(it=L.instanceColor)),it!==void 0){let st=it.normalized,Pt=it.itemSize,Bt=t.get(it);if(Bt===void 0)continue;let K=Bt.buffer,xt=Bt.type,Rt=Bt.bytesPerElement,Gt=xt===i.INT||xt===i.UNSIGNED_INT||it.gpuType===eo;if(it.isInterleavedBufferAttribute){let St=it.data,kt=St.isInterleavedBuffer===!0?St.stride:St.itemSize,me=it.offset;if(St.isInstancedInterleavedBuffer||St.isInstancedBufferAttribute){for(let Wt=0;Wt<J.locationSize;Wt++)g(J.location+Wt,St.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Wt=0;Wt<J.locationSize;Wt++)m(J.location+Wt);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Wt=0;Wt<J.locationSize;Wt++)E(J.location+Wt,Pt/J.locationSize,xt,st,kt*Rt,(me+Pt/J.locationSize*Wt)*Rt,Gt)}else{if(it.isInstancedBufferAttribute){for(let St=0;St<J.locationSize;St++)g(J.location+St,it.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let St=0;St<J.locationSize;St++)m(J.location+St);i.bindBuffer(i.ARRAY_BUFFER,K);for(let St=0;St<J.locationSize;St++)E(J.location+St,Pt/J.locationSize,xt,st,Pt*Rt,Pt/J.locationSize*St*Rt,Gt)}}else if(k!==void 0){let st=k[ot];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(J.location,st);break;case 3:i.vertexAttrib3fv(J.location,st);break;case 4:i.vertexAttrib4fv(J.location,st);break;default:i.vertexAttrib1fv(J.location,st)}}}}M()}function A(){N();for(let L in n){let z=n[L];for(let q in z){let P=z[q];for(let W in P){let $=P[W];for(let k in $)h($[k].object),delete $[k];delete P[W]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;let z=n[L.id];for(let q in z){let P=z[q];for(let W in P){let $=P[W];for(let k in $)h($[k].object),delete $[k];delete P[W]}}delete n[L.id]}function x(L){for(let z in n){let q=n[z];for(let P in q){let W=q[P];if(W[L.id]===void 0)continue;let $=W[L.id];for(let k in $)h($[k].object),delete $[k];delete W[L.id]}}}function b(L){for(let z in n){let q=n[z],P=L.isInstancedMesh===!0?L.id:0,W=q[P];if(W!==void 0){for(let $ in W){let k=W[$];for(let ot in k)h(k[ot].object),delete k[ot];delete W[$]}delete q[P],Object.keys(q).length===0&&delete n[z]}}}function N(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function r0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function a0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Nn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let b=x===Dn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==fn&&x!==bn&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:_,maxSamples:A,samples:T}}function o0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Pn,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,E=M*4,_=g.clippingState||null;l.value=_,_=h(p,u,E,f);for(let A=0;A!==E;++A)_[A]=e[A];g.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,p!==!0||m===null){let g=f+y*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,_=f;E!==y;++E,_+=4)a.copy(d[E]).applyMatrix4(M,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var Dr=class extends gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new js(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ke(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Oi});r.uniforms.tEquirect.value=e;let a=new ae(s,r),o=e.minFilter;return e.minFilter===ei&&(e.minFilter=rn),new vs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},zu=256,l0=3,c0=20,ld=256,cd=16,h0=3,u0=new U,d0=new Kt,Ho=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new vs(1,10,null),this._boxMesh=new ae(new ke(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=u0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor(d0));let m=new vs(n,s,h);return m.position.copy(o),m.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(zu,Iu(t))}_fromTexture(t,e){t.mapping===ki||t.mapping===Ss?this._setSize(t.image.length===0?zu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=ku(t,!1,!1),n=Math.log2(t)-l0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ku(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ki||t.mapping===Ss?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Gu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=f0(),this._integrationMaterial=p0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/cd);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-h0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(ld*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=m0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function ku(i,t,e){return new Dr(i,{minFilter:ei,generateMipmaps:t,type:Dn,colorSpace:Hs,depthBuffer:e})}function Nr(i,t,e){return new kn({name:i,uniforms:t,vertexShader:re.cube_vert,fragmentShader:e,side:on,blending:Oi,depthTest:!1,depthWrite:!1})}function f0(){return Nr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ld}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function p0(){return Nr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:cd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function m0(){return Nr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${c0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Gu(){return Nr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Hu(){return Nr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function g0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Qa||f===ja)if(t.has(u)){let p=t.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let y=new Dr(p.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===Qa||f===ja,y=f===ki||f===Ss;if(p||y){let m=e.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Ho(i)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return p&&M&&M.height>0||y&&M&&l(M)?(n===null&&(n=new Ho(i)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Qa?u.mapping=ki:f===ja&&(u.mapping=Ss),u}function l(u){let f=0,p=6;for(let y=0;y<p;y++)u[y]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function x0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Bs("WebGLRenderer: "+n+" extension not supported."),s}}}function _0(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);let y=r.get(p);y&&(t.remove(y),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function h(p){let y=p.attributes;for(let m in y)t.update(y[m],i.ARRAY_BUFFER)}function d(p){let y=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let M=y!==null?y.array.length:m.array.length/3-1,E=m.count>=65535?Ks:$s,_=new E(Math.ceil(M/3)*6,1),A=_.array;if(y!==null){let x=y.array;g=y.version;for(let b=0,N=0;b<M;b+=3){let C=x[b+0],L=x[b+1],z=x[b+2];A[N++]=C,A[N++]=L,A[N++]=L,A[N++]=z,A[N++]=z,A[N++]=C}}else{g=m.version;for(let x=0,b=0;x<M;x+=3){let N=x+0,C=x+1,L=x+2;A[b++]=N,A[b++]=C,A[b++]=C,A[b++]=L,A[b++]=L,A[b++]=N}}_.version=g;let T=r.get(p);T&&t.remove(T),r.set(p,_)}function u(p){let y=r.get(p);if(y){let m=p.index;m!==null&&y.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let y=s[p].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function v0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function y0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Jt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function M0(i,t,e){let n=new WeakMap,s=new Te;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let N=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",N)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],E=0;f===!0&&(E=1),p===!0&&(E=2),y===!0&&(E=3);let _=o.attributes.position.count*E,A=1;_>t.maxTextureSize&&(A=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let T=new Float32Array(_*A*4*d),x=new qs(T,_,A,d);x.type=bn,x.needsUpdate=!0;let b=E*4;for(let C=0;C<d;C++){let L=m[C],z=g[C],q=M[C],P=_*A*4*C;for(let W=0;W<L.count;W++){let $=W*b;f===!0&&(s.fromBufferAttribute(L,W),T[P+$+0]=s.x,T[P+$+1]=s.y,T[P+$+2]=s.z,T[P+$+3]=0),p===!0&&(s.fromBufferAttribute(z,W),T[P+$+4]=s.x,T[P+$+5]=s.y,T[P+$+6]=s.z,T[P+$+7]=0),y===!0&&(s.fromBufferAttribute(q,W),T[P+$+8]=s.x,T[P+$+9]=s.y,T[P+$+10]=s.z,T[P+$+11]=q.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new Tt(_,A)},n.set(o,u),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function S0(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var b0={[ec]:"LINEAR_TONE_MAPPING",[nc]:"REINHARD_TONE_MAPPING",[ic]:"CINEON_TONE_MAPPING",[Sr]:"ACES_FILMIC_TONE_MAPPING",[rc]:"AGX_TONE_MAPPING",[ac]:"NEUTRAL_TONE_MAPPING",[sc]:"CUSTOM_TONE_MAPPING"};function E0(i,t,e,n,s,r){let a=new gn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new We;h.setAttribute("position",new Se([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Se([0,2,0,0,2,0],2));let d=new Fa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ae(h,d),f=new vr(-1,1,1,-1,0,1),p=null,y=null,m=!1,g,M=null,E=[],_=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let x=0;x<E.length;x++){let b=E[x];b.setSize&&b.setSize(A,T)}},this.setEffects=function(A){E=A,_=E.length>0&&E[0].isRenderPass===!0;let T=a.width,x=a.height;E.length>0&&o===null&&(o=new gn(T,x,{type:Dn,depthBuffer:!1,stencilBuffer:!1}),l=new gn(T,x,{type:Dn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&E.some(N=>N.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new ti(T,x),r===!0&&(c.format=ni,c.type=Gi)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let N=0;N<E.length;N++){let C=E[N];C.setSize&&C.setSize(T,x),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(A,T){if(m||A.toneMapping===Gn&&E.length===0)return!1;if(M=T,T!==null){let x=T.width,b=T.height;(a.width!==x||a.height!==b)&&this.setSize(x,b)}return _===!1&&A.setRenderTarget(a),g=A.toneMapping,A.toneMapping=Gn,!0},this.hasRenderPass=function(){return _},this.end=function(A,T){A.toneMapping=g,m=!0;let x=a,b=o;for(let N=0;N<E.length;N++){let C=E[N];C.enabled!==!1&&(C.render(A,b,x,T),C.needsSwap!==!1&&(x=b,b=b===o?l:o))}if(p!==A.outputColorSpace||y!==A.toneMapping){p=A.outputColorSpace,y=A.toneMapping,d.defines={},ue.getTransfer(p)===ve&&(d.defines.SRGB_TRANSFER="");let N=b0[y];N&&(d.defines[N]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(M),A.render(u,f),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var hd=new an,ud=new ti(1,1),dd=new er(1),fd=new qs,pd=new wa,md=new js,Vu=[],Wu=[],Xu=new Float32Array(16),qu=new Float32Array(9),Yu=new Float32Array(4);function ws(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Vu[s];if(r===void 0&&(r=new Float32Array(s),Vu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wo(i,t){let e=Wu[t];e===void 0&&(e=new Int32Array(t),Wu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function T0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function w0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function A0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function R0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function C0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Yu.set(n),i.uniformMatrix2fv(this.addr,!1,Yu),De(e,n)}}function I0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;qu.set(n),i.uniformMatrix3fv(this.addr,!1,qu),De(e,n)}}function P0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Xu.set(n),i.uniformMatrix4fv(this.addr,!1,Xu),De(e,n)}}function L0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function D0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function N0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function U0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function F0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function O0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function B0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function Xo(i){return i.version===0&&(i.compareFunction=gc,i.needsUpdate=!0),i}function k0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Xo(ud):r=hd,e.setTexture2D(t||r,s)}function G0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||pd,s)}function H0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Xo(dd):r=md,e.setTextureCube(t||r,s)}function V0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||fd,s)}function W0(i){switch(i){case 5126:return T0;case 35664:return w0;case 35665:return A0;case 35666:return R0;case 35674:return C0;case 35675:return I0;case 35676:return P0;case 5124:case 35670:return L0;case 35667:case 35671:return D0;case 35668:case 35672:return N0;case 35669:case 35673:return U0;case 5125:return F0;case 36294:return O0;case 36295:return B0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return H0;case 36289:case 36303:case 36311:case 36292:return V0}}function X0(i,t){i.uniform1fv(this.addr,t)}function q0(i,t){let e=ws(t,this.size,2);i.uniform2fv(this.addr,e)}function Y0(i,t){let e=ws(t,this.size,3);i.uniform3fv(this.addr,e)}function Z0(i,t){let e=ws(t,this.size,4);i.uniform4fv(this.addr,e)}function J0(i,t){let e=ws(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $0(i,t){let e=ws(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function K0(i,t){let e=ws(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Q0(i,t){i.uniform1iv(this.addr,t)}function j0(i,t){i.uniform2iv(this.addr,t)}function tx(i,t){i.uniform3iv(this.addr,t)}function ex(i,t){i.uniform4iv(this.addr,t)}function nx(i,t){i.uniform1uiv(this.addr,t)}function ix(i,t){i.uniform2uiv(this.addr,t)}function sx(i,t){i.uniform3uiv(this.addr,t)}function rx(i,t){i.uniform4uiv(this.addr,t)}function ax(i,t,e){let n=this.cache,s=t.length,r=Wo(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Xo(ud):a=hd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function ox(i,t,e){let n=this.cache,s=t.length,r=Wo(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||pd,r[a])}function lx(i,t,e){let n=this.cache,s=t.length,r=Wo(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Xo(dd):a=md;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function cx(i,t,e){let n=this.cache,s=t.length,r=Wo(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||fd,r[a])}function hx(i){switch(i){case 5126:return X0;case 35664:return q0;case 35665:return Y0;case 35666:return Z0;case 35674:return J0;case 35675:return $0;case 35676:return K0;case 5124:case 35670:return Q0;case 35667:case 35671:return j0;case 35668:case 35672:return tx;case 35669:case 35673:return ex;case 5125:return nx;case 36294:return ix;case 36295:return sx;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return cx}}var Lc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=W0(e.type)}},Dc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hx(e.type)}},Nc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ic=/(\w+)(\])?(\[|\.)?/g;function Zu(i,t){i.seq.push(t),i.map[t.id]=t}function ux(i,t,e){let n=i.name,s=n.length;for(Ic.lastIndex=0;;){let r=Ic.exec(n),a=Ic.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Zu(e,c===void 0?new Lc(o,i,t):new Dc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Nc(o),Zu(e,d)),e=d}}}var Ts=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);ux(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Ju(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var dx=37297,fx=0;function px(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var $u=new $t;function mx(i){ue._getMatrix($u,ue.workingColorSpace,i);let t=`mat3( ${$u.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case Vs:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ku(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+px(i.getShaderSource(t),o)}else return r}function gx(i,t){let e=mx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var xx={[ec]:"Linear",[nc]:"Reinhard",[ic]:"Cineon",[Sr]:"ACESFilmic",[rc]:"AgX",[ac]:"Neutral",[sc]:"Custom"};function _x(i,t){let e=xx[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Go=new U;function vx(){ue.getLuminanceCoefficients(Go);let i=Go.x.toFixed(4),t=Go.y.toFixed(4),e=Go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function Mx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Lr(i){return i!==""}function Qu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ju(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(i){return i.replace(bx,Ex)}function Ex(i,t){let e=re[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Uc(e)}var Tx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function td(i){return i.replace(Tx,wx)}function wx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ed(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Ax={[Mr]:"SHADOWMAP_TYPE_PCF",[ys]:"SHADOWMAP_TYPE_VSM"};function Rx(i){return Ax[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Cx={[Ss]:"ENVMAP_MODE_REFRACTION"};function Ix(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Cx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Px={[tc]:"ENVMAP_BLENDING_MULTIPLY",[pu]:"ENVMAP_BLENDING_MIX",[mu]:"ENVMAP_BLENDING_ADD"};function Lx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Px[i.combine]||"ENVMAP_BLENDING_NONE"}function Dx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Rx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Ix(e),d=Lx(e),u=yx(e),f=Mx(r),p=s.createProgram(),y,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Lr).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Lr).join(`
`),m.length>0&&(m+=`
`)):(y=[ed(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),m=[ed(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?re.tonemapping_pars_fragment:"",e.toneMapping!==Gn?_x("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,gx("linearToOutputTexel",e.outputColorSpace),vx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lr).join(`
`)),a=Uc(a),a=Qu(a,e),a=ju(a,e),o=Uc(o),o=Qu(o,e),o=ju(o,e),a=td(a),o=td(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=g+y+a,E=g+m+o,_=Ju(s,s.VERTEX_SHADER,M),A=Ju(s,s.FRAGMENT_SHADER,E);s.attachShader(p,_),s.attachShader(p,A),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(C){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(p)||"",z=s.getShaderInfoLog(_)||"",q=s.getShaderInfoLog(A)||"",P=L.trim(),W=z.trim(),$=q.trim(),k=!0,ot=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,_,A);else{let J=Ku(s,_,"vertex"),it=Ku(s,A,"fragment");Jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+J+`
`+it)}else P!==""?Zt("WebGLProgram: Program Info Log:",P):(W===""||$==="")&&(ot=!1);ot&&(C.diagnostics={runnable:k,programLog:P,vertexShader:{log:W,prefix:y},fragmentShader:{log:$,prefix:m}})}s.deleteShader(_),s.deleteShader(A),x=new Ts(s,p),b=Sx(s,p)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(p,dx)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fx++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=_,this.fragmentShader=A,this}var Nx=0,Fc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Oc(t),e.set(t,n)),n}},Oc=class{constructor(t){this.id=Nx++,this.code=t,this.usedTimes=0}};function Ux(i){return i===Si||i===Rr||i===Cr}function Fx(i,t,e,n,s,r){let a=new Ys,o=new Fc,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,b,N,C,L,z){let q=C.fog,P=L.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=t.get(x.envMap||W,$),ot=u[x.type],J=n.precision;x.precision!==null&&(J=n.getMaxPrecision(x.precision),J!==x.precision&&Zt("WebGLProgram.getParameters:",x.precision,"not supported, using",J,"instead."));let it=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,st=it!==void 0?it.length:0,Pt=0;P.morphAttributes.position!==void 0&&(Pt=1),P.morphAttributes.normal!==void 0&&(Pt=2),P.morphAttributes.color!==void 0&&(Pt=3);let Bt,K,xt,Rt;if(ot){let wt=Vn[ot];Bt=wt.vertexShader,K=wt.fragmentShader}else{Bt=x.vertexShader,K=x.fragmentShader;let wt=o.getVertexShaderStage(x),ye=o.getFragmentShaderStage(x);o.update(x,wt,ye),xt=wt.id,Rt=ye.id}let Gt=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),kt=L.isInstancedMesh===!0,me=L.isBatchedMesh===!0,Wt=!!x.map,Qt=!!x.matcap,jt=!!k,nt=jt&&k.isPMREMTexture===!0,dt=!!x.aoMap,_t=!!x.lightMap,Ct=!!x.bumpMap&&x.wireframe===!1,yt=!!x.normalMap,Yt=!!x.displacementMap,Nt=!!x.emissiveMap,ne=!!x.metalnessMap,H=!!x.roughnessMap,et=x.anisotropy>0,R=x.clearcoat>0,pt=x.diffuseRoughness>0,at=x.dispersion>0,ht=x.retroreflectivity>0,Y=x.iridescence>0,Dt=x.sheen>0,vt=x.transmission>0,Lt=et&&!!x.anisotropyMap,w=R&&!!x.clearcoatMap,v=R&&!!x.clearcoatNormalMap,O=R&&!!x.clearcoatRoughnessMap,rt=pt&&!!x.diffuseRoughnessMap,j=Y&&!!x.iridescenceMap,lt=Y&&!!x.iridescenceThicknessMap,ut=Dt&&!!x.sheenColorMap,B=Dt&&!!x.sheenRoughnessMap,X=!!x.specularMap,ct=!!x.specularColorMap,I=!!x.specularIntensityMap,tt=vt&&!!x.transmissionMap,Q=vt&&!!x.thicknessMap,gt=!!x.gradientMap,ft=!!x.alphaMap,Mt=x.alphaTest>0,Ht=!!x.alphaHash,se=!!x.extensions,mt=Gn;x.toneMapped&&(Gt===null||Gt.isXRRenderTarget===!0)&&(mt=i.toneMapping);let Xt=nt?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,ie={shaderID:ot,shaderType:x.type,shaderName:x.name,vertexShader:Bt,fragmentShader:K,defines:x.defines,customVertexShaderID:xt,customFragmentShaderID:Rt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:J,batching:me,batchingColor:me&&L._colorsTexture!==null,instancing:kt,instancingColor:kt&&L.instanceColor!==null,instancingMorph:kt&&L.morphTexture!==null,outputColorSpace:Gt===null?i.outputColorSpace:Gt.isXRRenderTarget===!0?Gt.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Wt,matcap:Qt,envMap:jt,envMapMode:jt&&k.mapping,envMapPMREM:nt,envMapMaxLod:nt?Xt.length-1:null,envMapSize:nt?Xt[0].width:null,aoMap:dt,lightMap:_t,bumpMap:Ct,normalMap:yt,displacementMap:Yt,emissiveMap:Nt,normalMapObjectSpace:yt&&x.normalMapType===_u,normalMapTangentSpace:yt&&x.normalMapType===zo,packedNormalMap:yt&&x.normalMapType===zo&&Ux(x.normalMap.format),metalnessMap:ne,roughnessMap:H,anisotropy:et,anisotropyMap:Lt,clearcoat:R,clearcoatMap:w,clearcoatNormalMap:v,clearcoatRoughnessMap:O,diffuseRoughness:pt,diffuseRoughnessMap:rt,dispersion:at,retroreflection:ht,iridescence:Y,iridescenceMap:j,iridescenceThicknessMap:lt,sheen:Dt,sheenColorMap:ut,sheenRoughnessMap:B,specularMap:X,specularColorMap:ct,specularIntensityMap:I,transmission:vt,transmissionMap:tt,thicknessMap:Q,gradientMap:gt,opaque:x.transparent===!1&&x.blending===Ms&&x.alphaToCoverage===!1,alphaMap:ft,alphaTest:Mt,alphaHash:Ht,combine:x.combine,mapUv:Wt&&f(x.map.channel),aoMapUv:dt&&f(x.aoMap.channel),lightMapUv:_t&&f(x.lightMap.channel),bumpMapUv:Ct&&f(x.bumpMap.channel),normalMapUv:yt&&f(x.normalMap.channel),displacementMapUv:Yt&&f(x.displacementMap.channel),emissiveMapUv:Nt&&f(x.emissiveMap.channel),metalnessMapUv:ne&&f(x.metalnessMap.channel),roughnessMapUv:H&&f(x.roughnessMap.channel),anisotropyMapUv:Lt&&f(x.anisotropyMap.channel),clearcoatMapUv:w&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:rt&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:j&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:B&&f(x.sheenRoughnessMap.channel),specularMapUv:X&&f(x.specularMap.channel),specularColorMapUv:ct&&f(x.specularColorMap.channel),specularIntensityMapUv:I&&f(x.specularIntensityMap.channel),transmissionMapUv:tt&&f(x.transmissionMap.channel),thicknessMapUv:Q&&f(x.thicknessMap.channel),alphaMapUv:ft&&f(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(yt||et),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!P.attributes.uv&&(Wt||ft),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&yt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:St,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:Pt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:z.filter(wt=>wt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:mt,decodeVideoTexture:Wt&&x.map.isVideoTexture===!0&&ue.getTransfer(x.map.colorSpace)===ve,decodeVideoTextureEmissive:Nt&&x.emissiveMap.isVideoTexture===!0&&ue.getTransfer(x.emissiveMap.colorSpace)===ve,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Sn,flipSided:x.side===on,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:se&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&x.extensions.multiDraw===!0||me)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ie.vertexUv1s=l.has(1),ie.vertexUv2s=l.has(2),ie.vertexUv3s=l.has(3),l.clear(),ie}function y(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let N in x.defines)b.push(N),b.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(m(b,x),g(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function M(x){let b=u[x.type],N;if(b){let C=Vn[b];N=Fu.clone(C.uniforms)}else N=x.uniforms;return N}function E(x,b){let N=h.get(b);return N!==void 0?++N.usedTimes:(N=new Dx(i,b,x,s),c.push(N),h.set(b,N)),N}function _(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function T(){o.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:M,acquireProgram:E,releaseProgram:_,releaseShaderCache:A,programs:c,dispose:T}}function Ox(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Bx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function nd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function id(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,y,m,g){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:g},i[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=p,M.materialVariant=a(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=m,M.group=g),t++,M}function l(u,f,p,y,m,g,M){M.reversedDepth===!0&&(m=-m);let E=o(u,f,p,y,m,g);p.transmission>0?n.push(E):p.transparent===!0?s.push(E):e.push(E)}function c(u,f,p,y,m,g){let M=o(u,f,p,y,m,g);p.transmission>0?n.unshift(M):p.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||Bx),n.length>1&&n.sort(f||nd),s.length>1&&s.sort(f||nd)}function d(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function zx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new id,i.set(n,[a])):s>=r.length?(a=new id,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function kx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Kt};break;case"SpotLight":e={position:new U,direction:new U,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Gx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Hx=0;function Vx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Wx(i){let t=new kx,e=Gx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new de,a=new de;function o(c){let h=0,d=0,u=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,p=0,y=0,m=0,g=0,M=0,E=0,_=0,A=0,T=0,x=0,b=0,N=0,C=0;c.sort(Vx);for(let z=0,q=c.length;z<q;z++){let P=c[z],W=P.color,$=P.intensity,k=P.distance,ot=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Si?ot=P.shadow.map.texture:ot=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=W.r*$,d+=W.g*$,u+=W.b*$;else if(P.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(P.sh.coefficients[J],$);C++}else if(P.isSunLight){let J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let it=P.shadow,st=e.get(P);st.shadowIntensity=it.intensity,st.shadowBias=it.bias,st.shadowNormalBias=it.normalBias,st.shadowRadius=it.radius,st.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),n.sunShadow[p]=st,n.sunShadowMap[p]=ot;let Pt=it.getViewportCount();for(let Bt=0;Bt<Pt;Bt++)n.sunShadowMatrix[y+Bt]=it.getMatrix(Bt),n.sunShadowCascade[y+Bt]=it._cascadeData[Bt];y+=Pt,p++}n.sun[f]=J,f++}else if(P.isDirectionalLight){let J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let it=P.shadow,st=e.get(P);st.shadowIntensity=it.intensity,st.shadowBias=it.bias,st.shadowNormalBias=it.normalBias,st.shadowRadius=it.radius,st.shadowMapSize=it.mapSize,n.directionalShadow[m]=st,n.directionalShadowMap[m]=ot,n.directionalShadowMatrix[m]=P.shadow.matrix,A++}n.directional[m]=J,m++}else if(P.isSpotLight){let J=t.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(W).multiplyScalar($),J.distance=k,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,n.spot[M]=J;let it=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,it.updateMatrices(P),P.castShadow&&N++),n.spotLightMatrix[M]=it.matrix,P.castShadow){let st=e.get(P);st.shadowIntensity=it.intensity,st.shadowBias=it.bias,st.shadowNormalBias=it.normalBias,st.shadowRadius=it.radius,st.shadowMapSize=it.mapSize,n.spotShadow[M]=st,n.spotShadowMap[M]=ot,x++}M++}else if(P.isRectAreaLight){let J=t.get(P);J.color.copy(W).multiplyScalar($),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),n.rectArea[E]=J,E++}else if(P.isPointLight){let J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),J.distance=P.distance,J.decay=P.decay,P.castShadow){let it=P.shadow,st=e.get(P);st.shadowIntensity=it.intensity,st.shadowBias=it.bias,st.shadowNormalBias=it.normalBias,st.shadowRadius=it.radius,st.shadowMapSize=it.mapSize,st.shadowCameraNear=it.camera.near,st.shadowCameraFar=it.camera.far,n.pointShadow[g]=st,n.pointShadowMap[g]=ot,n.pointShadowMatrix[g]=P.shadow.matrix,T++}n.point[g]=J,g++}else if(P.isHemisphereLight){let J=t.get(P);J.skyColor.copy(P.color).multiplyScalar($),J.groundColor.copy(P.groundColor).multiplyScalar($),n.hemi[_]=J,_++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==g||L.spotLength!==M||L.rectAreaLength!==E||L.hemiLength!==_||L.numSunShadows!==p||L.numDirectionalShadows!==A||L.numPointShadows!==T||L.numSpotShadows!==x||L.numSpotMaps!==b||L.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=E,n.point.length=g,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-N,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=C,L.sunLength=f,L.directionalLength=m,L.pointLength=g,L.spotLength=M,L.rectAreaLength=E,L.hemiLength=_,L.numSunShadows=p,L.numDirectionalShadows=A,L.numPointShadows=T,L.numSpotShadows=x,L.numSpotMaps=b,L.numLightProbes=C,n.version=Hx++)}function l(c,h){let d=0,u=0,f=0,p=0,y=0,m=0,g=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){let _=c[M];if(_.isSunLight){let A=n.sun[d];A.direction.setFromMatrixPosition(_.matrixWorld),A.direction.transformDirection(g),d++}else if(_.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),u++}else if(_.isSpotLight){let A=n.spot[p];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let A=n.rectArea[y];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),A.halfWidth.set(_.width*.5,0,0),A.halfHeight.set(0,_.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let A=n.hemi[m];A.direction.setFromMatrixPosition(_.matrixWorld),A.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function sd(i){let t=new Wx(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){n.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Xx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new sd(i),t.set(s,[o])):r>=a.length?(o=new sd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var qx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Zx=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Jx=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],rd=new de,Pr=new U,Pc=new U;function $x(i,t,e){let n=new gi,s=new Tt,r=new Tt,a=new Te,o=new Oa,l=new Ba,c={},h=e.maxTextureSize,d={[Mi]:on,[on]:Mi,[Sn]:Sn},u=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:qx,fragmentShader:Yx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new We;p.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ae(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mr;let g=this.type;this.render=function(T,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Ka&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mr);let N=i.getRenderTarget(),C=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Oi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let q=g!==this.type;q&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(W=>W.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,W=T.length;P<W;P++){let $=T[P],k=$.shadow;if(k===void 0){Zt("WebGLShadowMap:",$,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let ot=k.getFrameExtents();s.multiply(ot),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,k.mapSize.y=r.y));let J=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=J,k.map===null||q===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ys){if($.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new gn(s.x,s.y,{format:Si,type:Dn,minFilter:rn,magFilter:rn,generateMipmaps:!1}),k.map.texture.name=$.name+".shadowMap",k.map.depthTexture=new ti(s.x,s.y,bn),k.map.depthTexture.name=$.name+".shadowMapDepth",k.map.depthTexture.format=jn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Be,k.map.depthTexture.magFilter=Be}else $.isPointLight?(k.map=new Dr(s.x),k.map.depthTexture=new er(s.x,Ln)):(k.map=new gn(s.x,s.y),k.map.depthTexture=new ti(s.x,s.y,Ln)),k.map.depthTexture.name=$.name+".shadowMap",k.map.depthTexture.format=jn,this.type===Mr?(k.map.depthTexture.compareFunction=J?mc:pc,k.map.depthTexture.minFilter=rn,k.map.depthTexture.magFilter=rn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Be,k.map.depthTexture.magFilter=Be);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let it=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();$.isPointLight!==!0&&k.updateMatrices($,b);let st=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:b.layers;for(let Pt=0;Pt<it;Pt++){let Bt=k.getCamera(Pt);if($.isPointLight){let K=k.camera,xt=k.matrix,Rt=$.distance||K.far;Rt!==K.far&&(K.far=Rt,K.updateProjectionMatrix()),Pr.setFromMatrixPosition($.matrixWorld),K.position.copy(Pr),Pc.copy(K.position),Pc.add(Zx[Pt]),K.up.copy(Jx[Pt]),K.lookAt(Pc),K.updateMatrixWorld(),xt.makeTranslation(-Pr.x,-Pr.y,-Pr.z),rd.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),k._frustum.setFromProjectionMatrix(rd,K.coordinateSystem,K.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,Pt),i.clear();else{Pt===0&&(i.setRenderTarget(k.map),i.clear());let K=k.getViewport(Pt);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),z.viewport(a)}n=k.getFrustum(Pt),_(x,b,Bt,$,st,this.type)}k.isPointLightShadow!==!0&&this.type===ys&&M(k,b),k.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(N,C,L)};function M(T,x){let b=t.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new gn(s.x,s.y,{format:Si,type:Dn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(x,null,b,u,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(x,null,b,f,y,null)}function E(T,x,b,N){let C=null,L=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)C=L;else if(C=b.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let z=C.uuid,q=x.uuid,P=c[z];P===void 0&&(P={},c[z]=P);let W=P[q];W===void 0&&(W=C.clone(),P[q]=W,x.addEventListener("dispose",A)),C=W}if(C.visible=x.visible,C.wireframe=x.wireframe,N===ys?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:d[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let z=i.properties.get(C);z.light=b}return C}function _(T,x,b,N,C,L){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===ys)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let P=t.update(T),W=T.material;if(Array.isArray(W)){let $=P.groups;for(let k=0,ot=$.length;k<ot;k++){let J=$[k],it=W[J.materialIndex];if(it&&it.visible){let st=E(T,it,N,L);T.onBeforeShadow(i,T,x,b,P,st,J),i.renderBufferDirect(b,null,P,st,T,J),T.onAfterShadow(i,T,x,b,P,st,J)}}}else if(W.visible){let $=E(T,W,N,L);T.onBeforeShadow(i,T,x,b,P,$,null),i.renderBufferDirect(b,null,P,$,T,null),T.onAfterShadow(i,T,x,b,P,$,null)}}let q=T.children;for(let P=0,W=q.length;P<W;P++)_(q[P],x,b,N,C,L)}function A(T){T.target.removeEventListener("dispose",A);for(let b in c){let N=c[b],C=T.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}function Kx(i,t){function e(){let I=!1,tt=new Te,Q=null,gt=new Te(0,0,0,0);return{setMask:function(ft){Q!==ft&&!I&&(i.colorMask(ft,ft,ft,ft),Q=ft)},setLocked:function(ft){I=ft},setClear:function(ft,Mt,Ht,se,mt){mt===!0&&(ft*=se,Mt*=se,Ht*=se),tt.set(ft,Mt,Ht,se),gt.equals(tt)===!1&&(i.clearColor(ft,Mt,Ht,se),gt.copy(tt))},reset:function(){I=!1,Q=null,gt.set(-1,0,0,0)}}}function n(){let I=!1,tt=!1,Q=null,gt=null,ft=null;return{setReversed:function(Mt){if(tt!==Mt){let Ht=t.get("EXT_clip_control");Mt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),tt=Mt;let se=ft;ft=null,this.setClear(se)}},getReversed:function(){return tt},setTest:function(Mt){Mt?St(i.DEPTH_TEST):kt(i.DEPTH_TEST)},setMask:function(Mt){Q!==Mt&&!I&&(i.depthMask(Mt),Q=Mt)},setFunc:function(Mt){if(tt&&(Mt=Cu[Mt]),gt!==Mt){switch(Mt){case ma:i.depthFunc(i.NEVER);break;case ga:i.depthFunc(i.ALWAYS);break;case xa:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case _a:i.depthFunc(i.EQUAL);break;case va:i.depthFunc(i.GEQUAL);break;case ya:i.depthFunc(i.GREATER);break;case Ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=Mt}},setLocked:function(Mt){I=Mt},setClear:function(Mt){ft!==Mt&&(ft=Mt,tt&&(Mt=1-Mt),i.clearDepth(Mt))},reset:function(){I=!1,Q=null,gt=null,ft=null,tt=!1}}}function s(){let I=!1,tt=null,Q=null,gt=null,ft=null,Mt=null,Ht=null,se=null,mt=null;return{setTest:function(Xt){I||(Xt?St(i.STENCIL_TEST):kt(i.STENCIL_TEST))},setMask:function(Xt){tt!==Xt&&!I&&(i.stencilMask(Xt),tt=Xt)},setFunc:function(Xt,ie,wt){(Q!==Xt||gt!==ie||ft!==wt)&&(i.stencilFunc(Xt,ie,wt),Q=Xt,gt=ie,ft=wt)},setOp:function(Xt,ie,wt){(Mt!==Xt||Ht!==ie||se!==wt)&&(i.stencilOp(Xt,ie,wt),Mt=Xt,Ht=ie,se=wt)},setLocked:function(Xt){I=Xt},setClear:function(Xt){mt!==Xt&&(i.clearStencil(Xt),mt=Xt)},reset:function(){I=!1,tt=null,Q=null,gt=null,ft=null,Mt=null,Ht=null,se=null,mt=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],y=null,m=!1,g=null,M=null,E=null,_=null,A=null,T=null,x=null,b=new Kt(0,0,0),N=0,C=!1,L=null,z=null,q=null,P=null,W=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,ot=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(J)[1]),k=ot>=1):J.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),k=ot>=2);let it=null,st={},Pt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),K=new Te().fromArray(Pt),xt=new Te().fromArray(Bt);function Rt(I,tt,Q,gt){let ft=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(I,Mt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<Q;Ht++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(tt,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(tt+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return Mt}let Gt={};Gt[i.TEXTURE_2D]=Rt(i.TEXTURE_2D,i.TEXTURE_2D,1),Gt[i.TEXTURE_CUBE_MAP]=Rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Gt[i.TEXTURE_2D_ARRAY]=Rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Gt[i.TEXTURE_3D]=Rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),St(i.DEPTH_TEST),a.setFunc(cs),Ct(!1),yt(Jl),St(i.CULL_FACE),dt(Oi);function St(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function kt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function me(I,tt){return u[I]!==tt?(i.bindFramebuffer(I,tt),u[I]=tt,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=tt),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=tt),!0):!1}function Wt(I,tt){let Q=p,gt=!1;if(I){Q=f.get(tt),Q===void 0&&(Q=[],f.set(tt,Q));let ft=I.textures;if(Q.length!==ft.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,Ht=ft.length;Mt<Ht;Mt++)Q[Mt]=i.COLOR_ATTACHMENT0+Mt;Q.length=ft.length,gt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,gt=!0);gt&&i.drawBuffers(Q)}function Qt(I){return y!==I?(i.useProgram(I),y=I,!0):!1}let jt={[zi]:i.FUNC_ADD,[Kh]:i.FUNC_SUBTRACT,[Qh]:i.FUNC_REVERSE_SUBTRACT};jt[jh]=i.MIN,jt[tu]=i.MAX;let nt={[eu]:i.ZERO,[nu]:i.ONE,[iu]:i.SRC_COLOR,[Ql]:i.SRC_ALPHA,[cu]:i.SRC_ALPHA_SATURATE,[ou]:i.DST_COLOR,[ru]:i.DST_ALPHA,[su]:i.ONE_MINUS_SRC_COLOR,[jl]:i.ONE_MINUS_SRC_ALPHA,[lu]:i.ONE_MINUS_DST_COLOR,[au]:i.ONE_MINUS_DST_ALPHA,[hu]:i.CONSTANT_COLOR,[uu]:i.ONE_MINUS_CONSTANT_COLOR,[du]:i.CONSTANT_ALPHA,[fu]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(I,tt,Q,gt,ft,Mt,Ht,se,mt,Xt){if(I===Oi){m===!0&&(kt(i.BLEND),m=!1);return}if(m===!1&&(St(i.BLEND),m=!0),I!==$h){if(I!==g||Xt!==C){if((M!==zi||A!==zi)&&(i.blendEquation(i.FUNC_ADD),M=zi,A=zi),Xt)switch(I){case Ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bi:i.blendFunc(i.ONE,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Jt("WebGLState: Invalid blending: ",I);break}else switch(I){case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $l:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kl:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",I);break}E=null,_=null,T=null,x=null,b.set(0,0,0),N=0,g=I,C=Xt}return}ft=ft||tt,Mt=Mt||Q,Ht=Ht||gt,(tt!==M||ft!==A)&&(i.blendEquationSeparate(jt[tt],jt[ft]),M=tt,A=ft),(Q!==E||gt!==_||Mt!==T||Ht!==x)&&(i.blendFuncSeparate(nt[Q],nt[gt],nt[Mt],nt[Ht]),E=Q,_=gt,T=Mt,x=Ht),(se.equals(b)===!1||mt!==N)&&(i.blendColor(se.r,se.g,se.b,mt),b.copy(se),N=mt),g=I,C=!1}function _t(I,tt){I.side===Sn?kt(i.CULL_FACE):St(i.CULL_FACE);let Q=I.side===on;tt&&(Q=!Q),Ct(Q),I.blending===Ms&&I.transparent===!1?dt(Oi):dt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let gt=I.stencilWrite;o.setTest(gt),gt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Nt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?St(i.SAMPLE_ALPHA_TO_COVERAGE):kt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(I){L!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),L=I)}function yt(I){I!==Zh?(St(i.CULL_FACE),I!==z&&(I===Jl?i.cullFace(i.BACK):I===Jh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):kt(i.CULL_FACE),z=I}function Yt(I){I!==q&&(k&&i.lineWidth(I),q=I)}function Nt(I,tt,Q){I?(St(i.POLYGON_OFFSET_FILL),(P!==tt||W!==Q)&&(P=tt,W=Q,a.getReversed()&&(tt=-tt,Q=-Q),i.polygonOffset(tt,Q))):kt(i.POLYGON_OFFSET_FILL)}function ne(I){I?St(i.SCISSOR_TEST):kt(i.SCISSOR_TEST)}function H(I){I===void 0&&(I=i.TEXTURE0+$-1),it!==I&&(i.activeTexture(I),it=I)}function et(I,tt,Q){Q===void 0&&(it===null?Q=i.TEXTURE0+$-1:Q=it);let gt=st[Q];gt===void 0&&(gt={type:void 0,texture:void 0},st[Q]=gt),(gt.type!==I||gt.texture!==tt)&&(it!==Q&&(i.activeTexture(Q),it=Q),i.bindTexture(I,tt||Gt[I]),gt.type=I,gt.texture=tt)}function R(){let I=st[it];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function pt(){try{i.compressedTexImage2D(...arguments)}catch(I){Jt("WebGLState:",I)}}function at(){try{i.compressedTexImage3D(...arguments)}catch(I){Jt("WebGLState:",I)}}function ht(){try{i.texSubImage2D(...arguments)}catch(I){Jt("WebGLState:",I)}}function Y(){try{i.texSubImage3D(...arguments)}catch(I){Jt("WebGLState:",I)}}function Dt(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Jt("WebGLState:",I)}}function vt(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Jt("WebGLState:",I)}}function Lt(){try{i.texStorage2D(...arguments)}catch(I){Jt("WebGLState:",I)}}function w(){try{i.texStorage3D(...arguments)}catch(I){Jt("WebGLState:",I)}}function v(){try{i.texImage2D(...arguments)}catch(I){Jt("WebGLState:",I)}}function O(){try{i.texImage3D(...arguments)}catch(I){Jt("WebGLState:",I)}}function rt(I){return d[I]!==void 0?d[I]:i.getParameter(I)}function j(I,tt){d[I]!==tt&&(i.pixelStorei(I,tt),d[I]=tt)}function lt(I){K.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),K.copy(I))}function ut(I){xt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),xt.copy(I))}function B(I,tt){let Q=c.get(tt);Q===void 0&&(Q=new WeakMap,c.set(tt,Q));let gt=Q.get(I);gt===void 0&&(gt=i.getUniformBlockIndex(tt,I.name),i.uniformBlockBinding(tt,gt,gt),Q.set(I,gt))}function X(I,tt,Q){let ft=c.get(tt).get(I);l[ft]!==Q&&(i.bindBufferBase(i.UNIFORM_BUFFER,ft,Q),l[ft]=Q)}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},it=null,st={},u={},l={},f=new WeakMap,p=[],y=null,m=!1,g=null,M=null,E=null,_=null,A=null,T=null,x=null,b=new Kt(0,0,0),N=0,C=!1,L=null,z=null,q=null,P=null,W=null,K.set(0,0,i.canvas.width,i.canvas.height),xt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:St,disable:kt,bindFramebuffer:me,drawBuffers:Wt,useProgram:Qt,setBlending:dt,setMaterial:_t,setFlipSided:Ct,setCullFace:yt,setLineWidth:Yt,setPolygonOffset:Nt,setScissorTest:ne,activeTexture:H,bindTexture:et,unbindTexture:R,compressedTexImage2D:pt,compressedTexImage3D:at,texImage2D:v,texImage3D:O,pixelStorei:j,getParameter:rt,updateUBOMapping:B,uniformBlockBinding:X,texStorage2D:Lt,texStorage3D:w,texSubImage2D:ht,texSubImage3D:Y,compressedTexSubImage2D:Dt,compressedTexSubImage3D:vt,scissor:lt,viewport:ut,reset:ct}}function Qx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,y=new FinalizationRegistry(w=>p.delete(w)),m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return m?new OffscreenCanvas(w,v):Ws("canvas")}function M(w,v,O){let rt=1,j=Lt(w);if((j.width>O||j.height>O)&&(rt=O/Math.max(j.width,j.height)),rt<1)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap||typeof VideoFrame!="undefined"&&w instanceof VideoFrame){let lt=Math.floor(rt*j.width),ut=Math.floor(rt*j.height);u===void 0&&(u=g(lt,ut));let B=v?g(lt,ut):u;return B.width=lt,B.height=ut,B.getContext("2d").drawImage(w,0,0,lt,ut),Zt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+lt+"x"+ut+")."),B}else return"data"in w&&Zt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function E(w){return w.generateMipmaps}function _(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(w,v,O,rt,j,lt=!1){if(w!==null){if(i[w]!==void 0)return i[w];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ut;rt&&(ut=t.get("EXT_texture_norm16"),ut||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let B=v;if(v===i.RED&&(O===i.FLOAT&&(B=i.R32F),O===i.HALF_FLOAT&&(B=i.R16F),O===i.UNSIGNED_BYTE&&(B=i.R8),O===i.UNSIGNED_SHORT&&ut&&(B=ut.R16_EXT),O===i.SHORT&&ut&&(B=ut.R16_SNORM_EXT)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(B=i.R8UI),O===i.UNSIGNED_SHORT&&(B=i.R16UI),O===i.UNSIGNED_INT&&(B=i.R32UI),O===i.BYTE&&(B=i.R8I),O===i.SHORT&&(B=i.R16I),O===i.INT&&(B=i.R32I)),v===i.RG&&(O===i.FLOAT&&(B=i.RG32F),O===i.HALF_FLOAT&&(B=i.RG16F),O===i.UNSIGNED_BYTE&&(B=i.RG8),O===i.UNSIGNED_SHORT&&ut&&(B=ut.RG16_EXT),O===i.SHORT&&ut&&(B=ut.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(B=i.RG8UI),O===i.UNSIGNED_SHORT&&(B=i.RG16UI),O===i.UNSIGNED_INT&&(B=i.RG32UI),O===i.BYTE&&(B=i.RG8I),O===i.SHORT&&(B=i.RG16I),O===i.INT&&(B=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(B=i.RGB8UI),O===i.UNSIGNED_SHORT&&(B=i.RGB16UI),O===i.UNSIGNED_INT&&(B=i.RGB32UI),O===i.BYTE&&(B=i.RGB8I),O===i.SHORT&&(B=i.RGB16I),O===i.INT&&(B=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(B=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(B=i.RGBA16UI),O===i.UNSIGNED_INT&&(B=i.RGBA32UI),O===i.BYTE&&(B=i.RGBA8I),O===i.SHORT&&(B=i.RGBA16I),O===i.INT&&(B=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_SHORT&&ut&&(B=ut.RGB16_EXT),O===i.SHORT&&ut&&(B=ut.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(B=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(B=i.R11F_G11F_B10F)),v===i.RGBA){let X=lt?Vs:ue.getTransfer(j);O===i.FLOAT&&(B=i.RGBA32F),O===i.HALF_FLOAT&&(B=i.RGBA16F),O===i.UNSIGNED_BYTE&&(B=X===ve?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ut&&(B=ut.RGBA16_EXT),O===i.SHORT&&ut&&(B=ut.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(B=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(B=i.RGB5_A1)}return(B===i.R16F||B===i.R32F||B===i.RG16F||B===i.RG32F||B===i.RGBA16F||B===i.RGBA32F)&&t.get("EXT_color_buffer_float"),B}function x(w,v){let O;return w?v===null||v===Ln||v===Gi?O=i.DEPTH24_STENCIL8:v===bn?O=i.DEPTH32F_STENCIL8:v===bs&&(O=i.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ln||v===Gi?O=i.DEPTH_COMPONENT24:v===bn?O=i.DEPTH_COMPONENT32F:v===bs&&(O=i.DEPTH_COMPONENT16),O}function b(w,v){return E(w)===!0||w.isFramebufferTexture&&w.minFilter!==Be&&w.minFilter!==rn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function N(w){let v=new WeakRef(w);n.get(w).__ref=v,p.add(v),y.register(w,v,v)}function C(w){let v=n.get(w).__ref;v!==void 0&&(p.delete(v),y.unregister(v))}function L(w){q(w.target)}function z(w){P(w.target)}function q(w){w.removeEventListener("dispose",L),C(w),$(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&d.delete(w)}function P(w){w.removeEventListener("dispose",z),C(w),ot(w)}function W(){for(let w of p){let v=w.deref();v!==void 0&&(v.isRenderTarget===!0?P(v):q(v))}p.clear(),d.clear()}function $(w){let v=n.get(w);if(v.__webglInit===void 0)return;let O=w.source,rt=f.get(O);if(rt){let j=rt[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&k(w),Object.keys(rt).length===0&&f.delete(O)}n.remove(w)}function k(w){let v=n.get(w);i.deleteTexture(v.__webglTexture);let O=w.source,rt=f.get(O);delete rt[v.__cacheKey],a.memory.textures--}function ot(w){let v=n.get(w);v.__depthDisposeCallback&&v.__depthDisposeCallback();let O=w.depthTexture;if(O&&O.renderTarget===w&&q(O),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let lt=0;lt<v.__webglFramebuffer[j].length;lt++)i.deleteFramebuffer(v.__webglFramebuffer[j][lt]);else i.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)i.deleteFramebuffer(v.__webglFramebuffer[j]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let rt=w.textures;for(let j=0,lt=rt.length;j<lt;j++){let ut=n.get(rt[j]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),a.memory.textures--),n.remove(rt[j])}n.remove(w)}let J=0;function it(){J=0}function st(){return J}function Pt(w){J=w}function Bt(){let w=J;return w>=s.maxTextures&&Zt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,w}function K(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.mipmapsAutoUpdate),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function xt(w,v){let O=n.get(w);if(w.isVideoTexture&&Dt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){let rt=w.image;if(rt===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(O,w,v);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function Rt(w,v){let O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){_t(O,w,v);return}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function Gt(w,v){let O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){_t(O,w,v);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function St(w,v){let O=n.get(w);if(w.version>0&&O.__version!==w.version){Ct(O,w,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}let kt={[hs]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[Sa]:i.MIRRORED_REPEAT},me={[Be]:i.NEAREST,[gu]:i.NEAREST_MIPMAP_NEAREST,[br]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[to]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},Wt={[yu]:i.NEVER,[gc]:i.ALWAYS,[Mu]:i.LESS,[pc]:i.LEQUAL,[Su]:i.EQUAL,[mc]:i.GEQUAL,[bu]:i.GREATER,[Eu]:i.NOTEQUAL};function Qt(w,v){if(v.type===bn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===rn||v.magFilter===to||v.magFilter===br||v.magFilter===ei||v.minFilter===rn||v.minFilter===to||v.minFilter===br||v.minFilter===ei)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,kt[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,kt[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,kt[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,me[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,me[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Wt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Be||v.minFilter!==br&&v.minFilter!==ei||v.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function jt(w,v){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",L),N(v));let rt=v.source,j=f.get(rt);j===void 0&&(j={},f.set(rt,j));let lt=K(v);if(lt!==w.__cacheKey){j[lt]===void 0&&(j[lt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[lt].usedTimes++;let ut=j[w.__cacheKey];ut!==void 0&&(j[w.__cacheKey].usedTimes--,ut.usedTimes===0&&k(v)),w.__cacheKey=lt,w.__webglTexture=j[lt].texture}return O}function nt(w,v,O){return Math.floor(Math.floor(w/O)/v)}function dt(w,v,O,rt){let lt=w.updateRanges;if(lt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,rt,v.data);else{lt.sort((I,tt)=>I.start-tt.start);let ut=0;for(let I=1;I<lt.length;I++){let tt=lt[ut],Q=lt[I],gt=tt.start+tt.count,ft=nt(Q.start,v.width,4),Mt=nt(tt.start,v.width,4);Q.start<=gt+1&&ft===Mt&&nt(Q.start+Q.count-1,v.width,4)===ft?tt.count=Math.max(tt.count,Q.start+Q.count-tt.start):(++ut,lt[ut]=Q)}lt.length=ut+1;let B=e.getParameter(i.UNPACK_ROW_LENGTH),X=e.getParameter(i.UNPACK_SKIP_PIXELS),ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let I=0,tt=lt.length;I<tt;I++){let Q=lt[I],gt=Math.floor(Q.start/4),ft=Math.ceil(Q.count/4),Mt=gt%v.width,Ht=Math.floor(gt/v.width),se=ft,mt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Mt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ht),e.texSubImage2D(i.TEXTURE_2D,0,Mt,Ht,se,mt,O,rt,v.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,B),e.pixelStorei(i.UNPACK_SKIP_PIXELS,X),e.pixelStorei(i.UNPACK_SKIP_ROWS,ct)}}function _t(w,v,O){let rt=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(rt=i.TEXTURE_3D);let j=jt(w,v),lt=v.source;e.bindTexture(rt,w.__webglTexture,i.TEXTURE0+O);let ut=n.get(lt);if(lt.version!==ut.__version||j===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap!="undefined"&&v.image instanceof ImageBitmap)===!1){let mt=ue.getPrimaries(ue.workingColorSpace),Xt=v.colorSpace===ii?null:ue.getPrimaries(v.colorSpace),ie=v.colorSpace===ii||mt===Xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let X=M(v.image,!1,s.maxTextureSize);X=vt(v,X);let ct=r.convert(v.format,v.colorSpace),I=r.convert(v.type),tt=T(v.internalFormat,ct,I,v.normalized,v.colorSpace,v.isVideoTexture);Qt(rt,v);let Q,gt=v.mipmaps,ft=v.isVideoTexture!==!0,Mt=ut.__version===void 0||j===!0,Ht=lt.dataReady,se=b(v,X);if(v.isDepthTexture)tt=x(v.format===ni,v.type),Mt&&(ft?e.texStorage2D(i.TEXTURE_2D,1,tt,X.width,X.height):e.texImage2D(i.TEXTURE_2D,0,tt,X.width,X.height,0,ct,I,null));else if(v.isDataTexture)if(gt.length>0){ft&&Mt&&e.texStorage2D(i.TEXTURE_2D,se,tt,gt[0].width,gt[0].height);for(let mt=0,Xt=gt.length;mt<Xt;mt++)Q=gt[mt],ft?Ht&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Q.width,Q.height,ct,I,Q.data):e.texImage2D(i.TEXTURE_2D,mt,tt,Q.width,Q.height,0,ct,I,Q.data);v.generateMipmaps=!1}else ft?(Mt&&e.texStorage2D(i.TEXTURE_2D,se,tt,X.width,X.height),Ht&&dt(v,X,ct,I)):e.texImage2D(i.TEXTURE_2D,0,tt,X.width,X.height,0,ct,I,X.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ft&&Mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,se,tt,gt[0].width,gt[0].height,X.depth);for(let mt=0,Xt=gt.length;mt<Xt;mt++)if(Q=gt[mt],v.format!==Nn)if(ct!==null)if(ft){if(Ht)if(v.layerUpdates.size>0){let ie=Ec(Q.width,Q.height,v.format,v.type);for(let wt of v.layerUpdates){let ye=Q.data.subarray(wt*ie/Q.data.BYTES_PER_ELEMENT,(wt+1)*ie/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,wt,Q.width,Q.height,1,ct,ye)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Q.width,Q.height,X.depth,ct,Q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,tt,Q.width,Q.height,X.depth,0,Q.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?Ht&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Q.width,Q.height,X.depth,ct,I,Q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,tt,Q.width,Q.height,X.depth,0,ct,I,Q.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ft&&Mt&&e.texStorage2D(i.TEXTURE_2D,se,tt,gt[0].width,gt[0].height);for(let mt=0,Xt=gt.length;mt<Xt;mt++)Q=gt[mt],v.format!==Nn?ct!==null?ft?Ht&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,Q.width,Q.height,ct,Q.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,tt,Q.width,Q.height,0,Q.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?Ht&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Q.width,Q.height,ct,I,Q.data):e.texImage2D(i.TEXTURE_2D,mt,tt,Q.width,Q.height,0,ct,I,Q.data)}else if(v.isDataArrayTexture)if(ft){if(Mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,se,tt,X.width,X.height,X.depth),Ht)if(v.layerUpdates.size>0){let mt=Ec(X.width,X.height,v.format,v.type);for(let Xt of v.layerUpdates){let ie=X.data.subarray(Xt*mt/X.data.BYTES_PER_ELEMENT,(Xt+1)*mt/X.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Xt,X.width,X.height,1,ct,I,ie)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,ct,I,X.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,tt,X.width,X.height,X.depth,0,ct,I,X.data);else if(v.isData3DTexture)ft?(Mt&&e.texStorage3D(i.TEXTURE_3D,se,tt,X.width,X.height,X.depth),Ht&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,ct,I,X.data)):e.texImage3D(i.TEXTURE_3D,0,tt,X.width,X.height,X.depth,0,ct,I,X.data);else if(v.isFramebufferTexture){if(Mt)if(ft)e.texStorage2D(i.TEXTURE_2D,se,tt,X.width,X.height);else{let mt=X.width,Xt=X.height;for(let ie=0;ie<se;ie++)e.texImage2D(i.TEXTURE_2D,ie,tt,mt,Xt,0,ct,I,null),mt>>=1,Xt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let mt=i.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),X.parentNode!==mt){mt.appendChild(X),d.add(v),mt.onpaint=Xt=>{let ie=Xt.changedElements;for(let wt of d)ie.includes(wt.image)&&(wt.needsUpdate=!0)},mt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,X);else{let ie=i.RGBA,wt=i.RGBA,ye=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ie,wt,ye,X)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(gt.length>0){if(ft&&Mt){let mt=Lt(gt[0]);e.texStorage2D(i.TEXTURE_2D,se,tt,mt.width,mt.height)}for(let mt=0,Xt=gt.length;mt<Xt;mt++)Q=gt[mt],ft?Ht&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,ct,I,Q):e.texImage2D(i.TEXTURE_2D,mt,tt,ct,I,Q);v.generateMipmaps=!1}else if(ft){if(Mt){let mt=Lt(X);e.texStorage2D(i.TEXTURE_2D,se,tt,mt.width,mt.height)}Ht&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,I,X)}else e.texImage2D(i.TEXTURE_2D,0,tt,ct,I,X);E(v)&&v.mipmapsAutoUpdate===!0&&_(rt),ut.__version=lt.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Ct(w,v,O){if(v.image.length!==6)return;let rt=jt(w,v),j=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);let lt=n.get(j);if(j.version!==lt.__version||rt===!0){e.activeTexture(i.TEXTURE0+O);let ut=ue.getPrimaries(ue.workingColorSpace),B=v.colorSpace===ii?null:ue.getPrimaries(v.colorSpace),X=v.colorSpace===ii||ut===B?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);let ct=v.isCompressedTexture||v.image[0].isCompressedTexture,I=v.image[0]&&v.image[0].isDataTexture,tt=[];for(let wt=0;wt<6;wt++)!ct&&!I?tt[wt]=M(v.image[wt],!0,s.maxCubemapSize):tt[wt]=I?v.image[wt].image:v.image[wt],tt[wt]=vt(v,tt[wt]);let Q=tt[0],gt=r.convert(v.format,v.colorSpace),ft=r.convert(v.type),Mt=T(v.internalFormat,gt,ft,v.normalized,v.colorSpace),Ht=v.isVideoTexture!==!0,se=lt.__version===void 0||rt===!0,mt=j.dataReady,Xt=b(v,Q);Qt(i.TEXTURE_CUBE_MAP,v);let ie;if(v.isDepthTexture){if(Mt=x(v.format===ni,v.type),se)if(Ht)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Mt,Q.width,Q.height);else for(let wt=0;wt<6;wt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Mt,Q.width,Q.height,0,gt,ft,null)}else if(ct){Ht&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Xt,Mt,Q.width,Q.height);for(let wt=0;wt<6;wt++){ie=tt[wt].mipmaps;for(let ye=0;ye<ie.length;ye++){let Ue=ie[ye];v.format!==Nn?gt!==null?Ht?mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ye,0,0,Ue.width,Ue.height,gt,Ue.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ye,Mt,Ue.width,Ue.height,0,Ue.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ye,0,0,Ue.width,Ue.height,gt,ft,Ue.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ye,Mt,Ue.width,Ue.height,0,gt,ft,Ue.data)}}}else{if(ie=v.mipmaps,Ht&&se){ie.length>0&&Xt++;let wt=Lt(tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Xt,Mt,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(I){Ht?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,tt[wt].width,tt[wt].height,gt,ft,tt[wt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Mt,tt[wt].width,tt[wt].height,0,gt,ft,tt[wt].data);for(let ye=0;ye<ie.length;ye++){let ai=ie[ye].image[wt].image;Ht?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ye+1,0,0,ai.width,ai.height,gt,ft,ai.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ye+1,Mt,ai.width,ai.height,0,gt,ft,ai.data)}}else{Ht?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,gt,ft,tt[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Mt,gt,ft,tt[wt]);for(let ye=0;ye<ie.length;ye++){let Ue=ie[ye];Ht?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ye+1,0,0,gt,ft,Ue.image[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ye+1,Mt,gt,ft,Ue.image[wt])}}}E(v)&&v.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),lt.__version=j.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function yt(w,v,O,rt,j,lt){let ut=r.convert(O.format,O.colorSpace),B=r.convert(O.type),X=T(O.internalFormat,ut,B,O.normalized,O.colorSpace),ct=n.get(v),I=n.get(O);if(I.__renderTarget=v,!ct.__hasExternalTextures){let tt=Math.max(1,v.width>>lt),Q=Math.max(1,v.height>>lt);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,lt,X,tt,Q,v.depth,0,ut,B,null):e.texImage2D(j,lt,X,tt,Q,0,ut,B,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Y(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,j,I.__webglTexture,0,ht(v)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,j,I.__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(w,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){let rt=v.depthTexture,j=rt&&rt.isDepthTexture?rt.type:null,lt=x(v.stencilBuffer,j),ut=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Y(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(v),lt,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(v),lt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,lt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,w)}else{let rt=v.textures;for(let j=0;j<rt.length;j++){let lt=rt[j],ut=r.convert(lt.format,lt.colorSpace),B=r.convert(lt.type),X=T(lt.internalFormat,ut,B,lt.normalized,lt.colorSpace);Y(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(v),X,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(v),X,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(w,v,O){let rt=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(v.depthTexture);j.__renderTarget=v;let lt=rt?v.depthTexture.image[0]:v.depthTexture.image;(!j.__webglTexture||lt.width!==v.width||lt.height!==v.height)&&(lt.width=v.width,lt.height=v.height,v.depthTexture.needsUpdate=!0),rt?St(v.depthTexture,0):xt(v.depthTexture,0);let ut=j.__webglTexture,B=ht(v),X=rt?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,ct=v.depthTexture.format===ni?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===jn)Y(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,X,ut,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,ct,X,ut,0);else if(v.depthTexture.format===ni)Y(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,X,ut,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,ct,X,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(w){let v=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){let rt=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),rt){let j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,rt.removeEventListener("dispose",j)};rt.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=rt}if(w.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let rt=0;rt<6;rt++)Nt(v.__webglFramebuffer[rt],w,rt);else w.texture.mipmaps.length>0?Nt(v.__webglFramebuffer[0],w,0):Nt(v.__webglFramebuffer,w,0);else if(O){v.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[rt]),v.__webglDepthbuffer[rt]===void 0)v.__webglDepthbuffer[rt]=i.createRenderbuffer(),Yt(v.__webglDepthbuffer[rt],w,!1);else{let j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=v.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,lt)}}else if(w.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Yt(v.__webglDepthbuffer,w,!1);else{let j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function H(w,v,O){let rt=n.get(w);v!==void 0&&yt(rt.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ne(w)}function et(w){let v=w.texture,O=n.get(w),rt=n.get(v);w.addEventListener("dispose",z),N(w);let j=w.textures,lt=w.isWebGLCubeRenderTarget===!0,ut=j.length>1;if(ut||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=v.version,a.memory.textures++),lt){O.__webglFramebuffer=[];for(let B=0;B<6;B++)if(v.mipmaps.length>0){O.__webglFramebuffer[B]=[];for(let X=0;X<v.mipmaps.length;X++)O.__webglFramebuffer[B][X]=i.createFramebuffer()}else O.__webglFramebuffer[B]=i.createFramebuffer()}else{if(v.mipmaps.length>0){O.__webglFramebuffer=[];for(let B=0;B<v.mipmaps.length;B++)O.__webglFramebuffer[B]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ut)for(let B=0,X=j.length;B<X;B++){let ct=n.get(j[B]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Y(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let B=0;B<j.length;B++){let X=j[B];O.__webglColorRenderbuffer[B]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[B]);let ct=r.convert(X.format,X.colorSpace),I=r.convert(X.type),tt=T(X.internalFormat,ct,I,X.normalized,X.colorSpace,w.isXRRenderTarget===!0),Q=ht(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,tt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,O.__webglColorRenderbuffer[B])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Yt(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),Qt(i.TEXTURE_CUBE_MAP,v);for(let B=0;B<6;B++)if(v.mipmaps.length>0)for(let X=0;X<v.mipmaps.length;X++)yt(O.__webglFramebuffer[B][X],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,X);else yt(O.__webglFramebuffer[B],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);E(v)?_(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(ut){for(let B=0,X=j.length;B<X;B++){let ct=j[B],I=n.get(ct),tt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(tt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,I.__webglTexture),Qt(tt,ct),yt(O.__webglFramebuffer,w,ct,i.COLOR_ATTACHMENT0+B,tt,0),E(ct)&&_(tt)}e.unbindTexture()}else{let B=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(B=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(B,rt.__webglTexture),Qt(B,v),v.mipmaps.length>0)for(let X=0;X<v.mipmaps.length;X++)yt(O.__webglFramebuffer[X],w,v,i.COLOR_ATTACHMENT0,B,X);else yt(O.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,B,0);E(v)?_(B):v.mipmaps.length>0&&i.texParameteri(B,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}w.depthBuffer&&ne(w)}function R(w){let v=w.textures;for(let O=0,rt=v.length;O<rt;O++){let j=v[O];if(E(j)&&j.mipmapsAutoUpdate===!0){let lt=A(w),ut=n.get(j).__webglTexture;e.bindTexture(lt,ut),_(lt),e.unbindTexture()}}}let pt=[];function at(w){if(w.samples>0){if(Y(w)===!1){let v=w.textures,O=w.width,rt=w.height,j=i.COLOR_BUFFER_BIT,lt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(w),B=v.length>1;if(B)for(let ct=0;ct<v.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let ct=0;ct<v.length;ct++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),B){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[ct]);let I=n.get(v[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,O,rt,0,0,O,rt,j,i.NEAREST),l===!0&&(pt.length=0,pt.push(i.COLOR_ATTACHMENT0+ct),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&pt.push(lt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),B)for(let ct=0;ct<v.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,ut.__webglColorRenderbuffer[ct]);let I=n.get(v[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,I,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ht(w){return Math.min(s.maxSamples,w.samples)}function Y(w){let v=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Dt(w){let v=a.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function vt(w,v){let O=w.colorSpace,rt=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Hs&&O!==ii&&(ue.getTransfer(O)===ve?(rt!==Nn||j!==fn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",O)),v}function Lt(w){return typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame!="undefined"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Bt,this.resetTextureUnits=it,this.getTextureUnits=st,this.setTextureUnits=Pt,this.setTexture2D=xt,this.setTexture2DArray=Rt,this.setTexture3D=Gt,this.setTextureCube=St,this.rebindTextures=H,this.setupRenderTarget=et,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Y,this.dispose=W}function jx(i,t){function e(n,s=ii){let r,a=ue.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===no)return i.UNSIGNED_SHORT_4_4_4_4;if(n===io)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===uc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===lc)return i.BYTE;if(n===cc)return i.SHORT;if(n===bs)return i.UNSIGNED_SHORT;if(n===eo)return i.INT;if(n===Ln)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===Dn)return i.HALF_FLOAT;if(n===dc)return i.ALPHA;if(n===fc)return i.RGB;if(n===Nn)return i.RGBA;if(n===jn)return i.DEPTH_COMPONENT;if(n===ni)return i.DEPTH_STENCIL;if(n===so)return i.RED;if(n===ro)return i.RED_INTEGER;if(n===Si)return i.RG;if(n===ao)return i.RG_INTEGER;if(n===oo)return i.RGBA_INTEGER;if(n===Er||n===Tr||n===wr||n===Ar)if(a===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lo||n===co||n===ho||n===uo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===lo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fo||n===po||n===mo||n===go||n===xo||n===Rr||n===_o)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fo||n===po)return a===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===mo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===go)return r.COMPRESSED_R11_EAC;if(n===xo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Rr)return r.COMPRESSED_RG11_EAC;if(n===_o)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===vo||n===yo||n===Mo||n===So||n===bo||n===Eo||n===To||n===wo||n===Ao||n===Ro||n===Co||n===Io||n===Po||n===Lo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===So)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Eo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===To)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ao)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ro)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Co)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Io)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Po)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lo)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Do||n===No||n===Uo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Do)return a===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===No)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fo||n===Oo||n===Cr||n===Bo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var t_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new nr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new kn({vertexShader:t_,fragmentShader:e_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ae(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zc=class extends Bn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,y=typeof XRWebGLBinding!="undefined",m=new Bc,g={},M=e.getContextAttributes(),E=null,_=null,A=[],T=[],x=new Tt,b=null,N=null,C=new $e;C.viewport=new Te;let L=new $e;L.viewport=new Te;let z=[C,L],q=new Ja,P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let xt=A[K];return xt===void 0&&(xt=new ps,A[K]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(K){let xt=A[K];return xt===void 0&&(xt=new ps,A[K]=xt),xt.getGripSpace()},this.getHand=function(K){let xt=A[K];return xt===void 0&&(xt=new ps,A[K]=xt),xt.getHandSpace()};function $(K){let xt=T.indexOf(K.inputSource);if(xt===-1)return;let Rt=A[xt];Rt!==void 0&&(Rt.update(K.inputSource,K.frame,c||a),Rt.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",ot);for(let K=0;K<A.length;K++){let xt=T[K];xt!==null&&(T[K]=null,A[K].disconnect(xt))}P=null,W=null,m.reset();for(let K in g)delete g[K];if(t.setRenderTarget(E),f=null,u=null,d=null,s=null,_=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),N!==null){let K=N.camera;K.fov=N.fov,K.zoom=N.zoom,K.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",k),s.addEventListener("inputsourceschange",ot),M.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Gt=null,St=null;M.depth&&(St=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=M.stencil?ni:jn,Gt=M.stencil?Gi:Ln);let kt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(kt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new gn(u.textureWidth,u.textureHeight,{format:Nn,type:fn,depthTexture:new ti(u.textureWidth,u.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Rt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new gn(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Bt.setContext(s),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ot(K){for(let xt=0;xt<K.removed.length;xt++){let Rt=K.removed[xt],Gt=T.indexOf(Rt);Gt>=0&&(T[Gt]=null,A[Gt].disconnect(Rt))}for(let xt=0;xt<K.added.length;xt++){let Rt=K.added[xt],Gt=T.indexOf(Rt);if(Gt===-1){for(let kt=0;kt<A.length;kt++)if(kt>=T.length){T.push(Rt),Gt=kt;break}else if(T[kt]===null){T[kt]=Rt,Gt=kt;break}if(Gt===-1)break}let St=A[Gt];St&&St.connect(Rt)}}function J(K,xt){xt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(xt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let xt=K.near,Rt=K.far;m.texture!==null&&(m.depthNear>0&&(xt=m.depthNear),m.depthFar>0&&(Rt=m.depthFar)),q.near=L.near=C.near=xt,q.far=L.far=C.far=Rt,(P!==q.near||W!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),P=q.near,W=q.far),q.layers.mask=K.layers.mask|6,C.layers.mask=q.layers.mask&-5,L.layers.mask=q.layers.mask&-3;let Gt=K.parent,St=q.cameras;J(q,Gt);for(let kt=0;kt<St.length;kt++)J(St[kt],Gt);q.projectionMatrix.copy(C.projectionMatrix),q.projectionMatrixInverse.copy(C.projectionMatrixInverse),N===null&&K.isPerspectiveCamera&&(N={camera:K,fov:K.fov,zoom:K.zoom}),it(K,q,Gt)};function it(K,xt,Rt){Rt===null?K.matrix.copy(xt.matrixWorld):(K.matrix.copy(Rt.matrixWorld),K.matrix.invert(),K.matrix.multiply(xt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(xt.projectionMatrix),K.projectionMatrixInverse.copy(xt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Xs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(q)},this.getCameraTexture=function(K){return g[K]};let st=null;function Pt(K,xt){if(h=xt.getViewerPose(c||a),p=xt,h!==null){let Rt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let Gt=!1;Rt.length!==q.cameras.length&&(q.cameras.length=0,Gt=!0);for(let Wt=0;Wt<Rt.length;Wt++){let Qt=Rt[Wt],jt=null;if(f!==null)jt=f.getViewport(Qt);else{let dt=d.getViewSubImage(u,Qt);jt=dt.viewport,Wt===0&&(t.setRenderTargetTextures(_,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(_))}let nt=z[Wt];nt===void 0&&(nt=new $e,nt.layers.enable(Wt),nt.viewport=new Te,z[Wt]=nt),nt.matrix.fromArray(Qt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Qt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(jt.x,jt.y,jt.width,jt.height),Wt===0&&(q.matrix.copy(nt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Gt===!0&&q.cameras.push(nt)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let Wt=d.getDepthInformation(Rt[0]);Wt&&Wt.isValid&&Wt.texture&&m.init(Wt,s.renderState)}if(St&&St.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let Wt=0;Wt<Rt.length;Wt++){let Qt=Rt[Wt].camera;if(Qt){let jt=g[Qt];jt||(jt=new nr,g[Qt]=jt);let nt=d.getCameraImage(Qt);jt.sourceTexture=nt}}}}for(let Rt=0;Rt<A.length;Rt++){let Gt=T[Rt],St=A[Rt];Gt!==null&&St!==void 0&&St.update(Gt,xt,c||a)}st&&st(K,xt),xt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xt}),p=null}let Bt=new ad;Bt.setAnimationLoop(Pt),this.setAnimationLoop=function(K){st=K},this.dispose=function(){}}},n_=new de,gd=new $t;gd.set(-1,0,0,0,1,0,0,0,1);function i_(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Mc(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,M,E,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,_)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),y(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,M,E):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===on&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===on&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let M=t.get(g),E=M.envMap,_=M.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(n_.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(gd),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=E*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,M){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===on&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function y(m,g){let M=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function s_(i,t,e,n){let s={},r={};function a(M,E){let _=E.program;n.uniformBlockBinding(M,_,s[M.id])}function o(M,E){let _=s[M.id];_===void 0&&(p(M),_=l(M),s[M.id]=_,M.addEventListener("dispose",m));let A=E.program;n.updateUBOMapping(M,A);let T=t.render.frame;r[M.id]!==T&&(c(M),r[M.id]=T)}function l(M){let E=i.createBuffer(),_=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,_,A),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(M){let E=s[M.id],_=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,x=_.length;T<x;T++){let b=_[T];if(Array.isArray(b))for(let N=0,C=b.length;N<C;N++)h(b[N],T,N,A);else h(b,T,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,E,_,A){if(u(M,E,_,A)===!0){let T=M.__offset,x=M.value;if(Array.isArray(x)){let b=0;for(let N=0;N<x.length;N++){let C=x[N],L=y(C,!0);d(C,M.__data,b),b+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,M.__data)}}function d(M,E,_){typeof M=="number"||typeof M=="boolean"?E[_]=M:M.isMatrix3?(E[_]=M.elements[0],E[_+1]=M.elements[1],E[_+2]=M.elements[2],E[_+3]=0,E[_+4]=M.elements[3],E[_+5]=M.elements[4],E[_+6]=M.elements[5],E[_+7]=0,E[_+8]=M.elements[6],E[_+9]=M.elements[7],E[_+10]=M.elements[8],E[_+11]=0):ArrayBuffer.isView(M)?E.set(M.subarray(0,E.length-_),_):M.toArray(E,_)}function u(M,E,_,A){let T=M.value,x=E+"_"+_;if(Array.isArray(T)){A[x]===void 0&&(A[x]=[]);let b=A[x],N=!1;for(let C=0;C<T.length;C++)f(T[C],b,C)===!0&&(N=!0);return N}return f(T,A,x)}function f(M,E,_){if(E[_]===void 0)return typeof M=="number"||typeof M=="boolean"?E[_]=M:ArrayBuffer.isView(M)?E[_]=M.slice():E[_]=M.clone(),!0;{let A=E[_];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return E[_]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function p(M){let E=M.uniforms,_=0,A=16;for(let x=0,b=E.length;x<b;x++){let N=Array.isArray(E[x])?E[x]:[E[x]];for(let C=0,L=N.length;C<L;C++){let z=N[C],q=Array.isArray(z.value)?z.value:[z.value],P=Array.isArray(E[x])||Array.isArray(z.value),W=_;for(let k=0,ot=q.length;k<ot;k++){let J=q[k],it=y(J,P),st=_%A,Pt=st%it.boundary,Bt=st+Pt;_+=Pt,Bt!==0&&A-Bt<it.storage&&(_+=A-Bt),k===0&&(W=_),_+=it.storage}let $=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new $((_-W)/Float32Array.BYTES_PER_ELEMENT),z.__offset=W}}let T=_%A;return T>0&&(_+=A-T),M.__size=_,M.__cache={},this}function y(M,E){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=16,_.storage=48):M.isMatrix4?(_.boundary=16,_.storage=64):M.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(_.boundary=16,_.storage=M.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",M),E===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function m(M){let E=M.target;E.removeEventListener("dispose",m),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function g(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:g}}var r_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hn=null;function a_(){return Hn===null&&(Hn=new Qs(r_,16,16,Si,Dn),Hn.name="DFG_LUT",Hn.minFilter=rn,Hn.magFilter=rn,Hn.wrapS=On,Hn.wrapT=On,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}var Vo=class{constructor(t={}){let{canvas:e=wu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=fn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let y=f,m=new Set([oo,ao,ro]),g=new Set([fn,Ln,bs,Gi,no,io]),M=new Uint32Array(4),E=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},A=null,T=null,x=[],b=[],N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,L=!1,z=null,q=null,P=null,W=null;this._outputColorSpace=Ve;let $=0,k=0,ot=null,J=-1,it=null,st=new Te,Pt=new Te,Bt=null,K=new Kt(0),xt=0,Rt=e.width,Gt=e.height,St=1,kt=null,me=null,Wt=new Te(0,0,Rt,Gt),Qt=new Te(0,0,Rt,Gt),jt=!1,nt=new gi,dt=new Ra,_t=!1,Ct=!1,yt=new de,Yt=new U,Nt=new Te,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},H=!1;function et(){return ot===null?St:1}let R=n;function pt(S,D){return e.getContext(S,D)}let at,ht,Y,Dt,vt,Lt,w,v,O,rt,j,lt,ut,B,X,ct,I,tt,Q,gt,ft,Mt,Ht;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Xt,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",wt,!1),R===null){let D="webgl2";if(R=pt(D,S),R===null)throw pt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}se()}catch(S){throw e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Jt("WebGLRenderer: "+S.message),S}function se(){at=new x0(R),at.init(),ft=new jx(R,at),ht=new a0(R,at,t,ft),Y=new Kx(R,at),ht.reversedDepthBuffer&&u&&Y.buffers.depth.setReversed(!0),q=R.createFramebuffer(),P=R.createFramebuffer(),W=R.createFramebuffer(),Dt=new y0(R),vt=new Ox,Lt=new Qx(R,at,Y,vt,ht,ft,Dt),w=new g0(C),v=new Sp(R),Mt=new s0(R,v),O=new _0(R,v,Dt,Mt),rt=new S0(R,O,v,Mt,Dt),tt=new M0(R,ht,Lt),X=new o0(vt),j=new Fx(C,w,at,ht,Mt,X),lt=new i_(C,vt),ut=new zx,B=new Xx(at),I=new i0(C,w,Y,rt,p,l),ct=new $x(C,rt,ht),Ht=new s_(R,Dt,ht,Y),Q=new r0(R,at,Dt),gt=new v0(R,at,Dt),Dt.programs=j.programs,C.capabilities=ht,C.extensions=at,C.properties=vt,C.renderLists=ut,C.shadowMap=ct,C.state=Y,C.info=Dt}y!==fn&&(N=new E0(y,e.width,e.height,o,s,r));let mt=new zc(C,R);this.xr=mt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let S=at.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=at.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(S){S!==void 0&&(St=S,this.setSize(Rt,Gt,!1))},this.getSize=function(S){return S.set(Rt,Gt)},this.setSize=function(S,D,Z=!0){if(mt.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}Rt=S,Gt=D,e.width=Math.floor(S*St),e.height=Math.floor(D*St),Z===!0&&(e.style.width=S+"px",e.style.height=D+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(Rt*St,Gt*St).floor()},this.setDrawingBufferSize=function(S,D,Z){Rt=S,Gt=D,St=Z,e.width=Math.floor(S*Z),e.height=Math.floor(D*Z),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(y===fn){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(st)},this.getViewport=function(S){return S.copy(Wt)},this.setViewport=function(S,D,Z,G){S.isVector4?Wt.set(S.x,S.y,S.z,S.w):Wt.set(S,D,Z,G),Y.viewport(st.copy(Wt).multiplyScalar(et()).round())},this.getScissor=function(S){return S.copy(Qt)},this.setScissor=function(S,D,Z,G){S.isVector4?Qt.set(S.x,S.y,S.z,S.w):Qt.set(S,D,Z,G),Y.scissor(Pt.copy(Qt).multiplyScalar(et()).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(S){Y.setScissorTest(jt=S)},this.setOpaqueSort=function(S){kt=S},this.setTransparentSort=function(S){me=S},this.getClearColor=function(S){return S.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,Z=!0){let G=0;if(S){let V=!1;if(ot!==null){let Et=ot.texture.format;V=m.has(Et)}if(V){let Et=ot.texture.type,Ut=g.has(Et),bt=I.getClearColor(),It=I.getClearAlpha(),zt=bt.r,te=bt.g,ce=bt.b;Ut?(M[0]=zt,M[1]=te,M[2]=ce,M[3]=It,R.clearBufferuiv(R.COLOR,0,M)):(E[0]=zt,E[1]=te,E[2]=ce,E[3]=It,R.clearBufferiv(R.COLOR,0,E))}else G|=R.COLOR_BUFFER_BIT}D&&(G|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(G|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),z=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),I.dispose(),ut.dispose(),B.dispose(),Lt.dispose(),vt.dispose(),w.dispose(),rt.dispose(),O.dispose(),Mt.dispose(),Ht.dispose(),j.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",oh),mt.removeEventListener("sessionend",lh),wi.stop()};function Xt(S){S.preventDefault(),_c("WebGLRenderer: Context Lost."),L=!0}function ie(){_c("WebGLRenderer: Context Restored."),L=!1;let S=Dt.autoReset,D=ct.enabled,Z=ct.autoUpdate,G=ct.needsUpdate,V=ct.type;se(),Dt.autoReset=S,ct.enabled=D,ct.autoUpdate=Z,ct.needsUpdate=G,ct.type=V}function wt(S){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ye(S){let D=S.target;D.removeEventListener("dispose",ye),Ue(D)}function Ue(S){ai(S),vt.remove(S)}function ai(S){let D=vt.get(S).programs;D!==void 0&&(D.forEach(function(Z){j.releaseProgram(Z)}),S.isShaderMaterial&&j.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,Z,G,V,Et){D===null&&(D=ne);let Ut=V.isMesh&&V.matrixWorld.determinantAffine()<0,bt=ef(S,D,Z,G,V);Y.setMaterial(G,Ut);let It=Z.index,zt=1;if(G.wireframe===!0){if(It=O.getWireframeAttribute(Z),It===void 0)return;zt=2}let te=Z.drawRange,ce=Z.attributes.position,Ft=te.start*zt,he=(te.start+te.count)*zt;Et!==null&&(Ft=Math.max(Ft,Et.start*zt),he=Math.min(he,(Et.start+Et.count)*zt)),It!==null?(Ft=Math.max(Ft,0),he=Math.min(he,It.count)):ce!=null&&(Ft=Math.max(Ft,0),he=Math.min(he,ce.count));let Ie=he-Ft;if(Ie<0||Ie===1/0)return;Mt.setup(V,G,bt,Z,It);let be,Me=Q;if(It!==null&&(be=v.get(It),Me=gt,Me.setIndex(be)),V.isMesh)G.wireframe===!0?(Y.setLineWidth(G.wireframeLinewidth*et()),Me.setMode(R.LINES)):Me.setMode(R.TRIANGLES);else if(V.isLine){let qe=G.linewidth;qe===void 0&&(qe=1),Y.setLineWidth(qe*et()),V.isLineSegments?Me.setMode(R.LINES):V.isLineLoop?Me.setMode(R.LINE_LOOP):Me.setMode(R.LINE_STRIP)}else V.isPoints?Me.setMode(R.POINTS):V.isSprite&&Me.setMode(R.TRIANGLES);if(V.isBatchedMesh)if(at.get("WEBGL_multi_draw"))Me.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let qe=V._multiDrawStarts,Ot=V._multiDrawCounts,nn=V._multiDrawCount,ge=It?v.get(It).bytesPerElement:1,Ai=vt.get(G).currentProgram.getUniforms();for(let Ye=0;Ye<nn;Ye++)Ai.setValue(R,"_gl_DrawID",Ye),Me.render(qe[Ye]/ge,Ot[Ye])}else if(V.isInstancedMesh)Me.renderInstances(Ft,Ie,V.count);else if(Z.isInstancedBufferGeometry){let qe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ot=Math.min(Z.instanceCount,qe);Me.renderInstances(Ft,Ie,Ot)}else Me.render(Ft,Ie)};function ah(S,D,Z,G){z!==null&&S.isNodeMaterial&&z.setObject(G,S),_t===!0&&X.setState(S,Z,!1),S.transparent===!0&&S.side===Sn&&S.forceSinglePass===!1?(S.side=on,S.needsUpdate=!0,Is(S,D,G),S.side=Mi,S.needsUpdate=!0,Is(S,D,G),S.side=Sn):Is(S,D,G)}this.compile=function(S,D,Z=null){Z===null&&(Z=S),z!==null&&z.renderStart(S,D,Z),T=B.get(Z),T.init(D),b.push(T),Z.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),S!==Z&&S.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights(),z!==null&&z.updateLights(T.state.lightsArray),Ct=this.localClippingEnabled,_t=X.init(this.clippingPlanes,Ct),_t===!0&&X.setGlobalState(this.clippingPlanes,D),z!==null&&ct.render(T.state.shadowsArray,Z,D);let G=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Et=V.material;if(Et)if(Array.isArray(Et))for(let Ut=0;Ut<Et.length;Ut++){let bt=Et[Ut];ah(bt,Z,D,V),G.add(bt)}else ah(Et,Z,D,V),G.add(Et)}),T=b.pop(),z!==null&&z.renderEnd(),G},this.compileAsync=function(S,D,Z=null){let G=this.compile(S,D,Z);return new Promise(V=>{function Et(){if(G.forEach(function(Ut){let It=vt.get(Ut).currentProgram;(It===void 0||It.isReady())&&G.delete(Ut)}),G.size===0){V(S);return}setTimeout(Et,10)}at.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let hl=null;function jd(S){hl&&hl(S)}function oh(){wi.stop()}function lh(){wi.start()}let wi=new ad;wi.setAnimationLoop(jd),typeof self!="undefined"&&wi.setContext(self),this.setAnimationLoop=function(S){hl=S,mt.setAnimationLoop(S),S===null?wi.stop():wi.start()},mt.addEventListener("sessionstart",oh),mt.addEventListener("sessionend",lh),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;z!==null&&z.renderStart(S,D);let Z=mt.enabled===!0&&mt.isPresenting===!0,G=N!==null&&(ot===null||Z)&&N.begin(C,ot);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(D),D=mt.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,D,ot),T=B.get(S,b.length),T.init(D),T.state.textureUnits=Lt.getTextureUnits(),b.push(T),yt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?dt.setFromArrayCamera(D):nt.setFromProjectionMatrix(yt,Mn,D.reversedDepth),Ct=this.localClippingEnabled,_t=X.init(this.clippingPlanes,Ct),A=ut.get(S,x.length),A.init(),x.push(A),this.info.render.frame++,mt.enabled===!0&&mt.isPresenting===!0){let Ut=C.xr.getDepthSensingMesh();Ut!==null&&ul(Ut,D,-1/0,C.sortObjects)}ul(S,D,0,C.sortObjects),A.finish(),z!==null&&z.updateLights(T.state.lightsArray),C.sortObjects===!0&&A.sort(kt,me),H=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,H&&I.addToRenderList(A,S),this.info.autoReset===!0&&this.info.reset(),_t===!0&&X.beginShadows();let V=T.state.shadowsArray;if(ct.render(V,S,D),_t===!0&&X.endShadows(),(G&&N.hasRenderPass())===!1){let Ut=A.opaque,bt=A.transmissive;if(T.setupLights(),D.isArrayCamera){let It=D.cameras;if(bt.length>0)for(let zt=0,te=It.length;zt<te;zt++){let ce=It[zt];hh(Ut,bt,S,ce)}H&&I.render(S);for(let zt=0,te=It.length;zt<te;zt++){let ce=It[zt];ch(A,S,ce,ce.viewport)}}else bt.length>0&&hh(Ut,bt,S,D),H&&I.render(S),ch(A,S,D)}ot!==null&&k===0&&(Lt.updateMultisampleRenderTarget(ot),Lt.updateRenderTargetMipmap(ot)),G&&N.end(C),S.isScene===!0&&S.onAfterRender(C,S,D),Mt.resetDefaultState(),J=-1,it=null,b.pop(),b.length>0?(T=b[b.length-1],Lt.setTextureUnits(T.state.textureUnits),_t===!0&&X.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,z!==null&&z.renderEnd()};function ul(S,D,Z,G){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)Z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){let Ut=D.isArrayCamera?dt:nt;if(!S.frustumCulled||S.intersectsFrustum(Ut)){G&&Nt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(yt);let bt=rt.update(S),It=S.material;It.visible&&A.push(S,bt,It,Z,Nt.z,null,D)}}else if(S.isMesh||S.isLine||S.isPoints){let Ut=D.isArrayCamera?dt:nt;if(!S.frustumCulled||S.intersectsFrustum(Ut)){let bt=rt.update(S),It=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Nt.copy(S.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Nt.copy(bt.boundingSphere.center)),Nt.applyMatrix4(S.matrixWorld).applyMatrix4(yt)),Array.isArray(It)){let zt=bt.groups;for(let te=0,ce=zt.length;te<ce;te++){let Ft=zt[te],he=It[Ft.materialIndex];he&&he.visible&&A.push(S,bt,he,Z,Nt.z,Ft,D)}}else It.visible&&A.push(S,bt,It,Z,Nt.z,null,D)}}}let Et=S.children;for(let Ut=0,bt=Et.length;Ut<bt;Ut++)ul(Et[Ut],D,Z,G)}function ch(S,D,Z,G){let{opaque:V,transmissive:Et,transparent:Ut}=S;T.setupLightsView(Z),_t===!0&&X.setGlobalState(C.clippingPlanes,Z),G&&Y.viewport(st.copy(G)),V.length>0&&Hr(V,D,Z),Et.length>0&&Hr(Et,D,Z),Ut.length>0&&Hr(Ut,D,Z),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function hh(S,D,Z,G){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){let Ft=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new gn(1,1,{generateMipmaps:!0,type:Ft?Dn:fn,minFilter:ei,samples:Math.max(4,ht.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ue.workingColorSpace})}let Et=T.state.transmissionRenderTarget[G.id],Ut=G.viewport||st;Et.setSize(Ut.z*C.transmissionResolutionScale,Ut.w*C.transmissionResolutionScale);let bt=C.getRenderTarget(),It=C.getActiveCubeFace(),zt=C.getActiveMipmapLevel();C.setRenderTarget(Et),C.getClearColor(K),xt=C.getClearAlpha(),xt<1&&C.setClearColor(16777215,.5),C.clear(),H&&I.render(Z);let te=C.toneMapping;C.toneMapping=Gn;let ce=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),_t===!0&&X.setGlobalState(C.clippingPlanes,G),Hr(S,Z,G),Lt.updateMultisampleRenderTarget(Et),Lt.updateRenderTargetMipmap(Et),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let he=0,Ie=D.length;he<Ie;he++){let be=D[he],{object:Me,geometry:qe,material:Ot,group:nn}=be;if(Ot.side===Sn&&Me.layers.test(G.layers)){let ge=Ot.side;Ot.side=on,Ot.needsUpdate=!0,uh(Me,Z,G,qe,Ot,nn),Ot.side=ge,Ot.needsUpdate=!0,Ft=!0}}Ft===!0&&(Lt.updateMultisampleRenderTarget(Et),Lt.updateRenderTargetMipmap(Et))}C.setRenderTarget(bt,It,zt),C.setClearColor(K,xt),ce!==void 0&&(G.viewport=ce),C.toneMapping=te}function Hr(S,D,Z){let G=D.isScene===!0?D.overrideMaterial:null;for(let V=0,Et=S.length;V<Et;V++){let Ut=S[V],{object:bt,geometry:It,group:zt}=Ut,te=Ut.material;te.allowOverride===!0&&G!==null&&(te=G),bt.layers.test(Z.layers)&&uh(bt,D,Z,It,te,zt)}}function uh(S,D,Z,G,V,Et){z!==null&&V.isNodeMaterial&&z.setObject(S,V),S.onBeforeRender(C,D,Z,G,V,Et),S.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(C,D,Z,G,S,Et),V.transparent===!0&&V.side===Sn&&V.forceSinglePass===!1?(V.side=on,V.needsUpdate=!0,C.renderBufferDirect(Z,D,G,V,S,Et),V.side=Mi,V.needsUpdate=!0,C.renderBufferDirect(Z,D,G,V,S,Et),V.side=Sn):C.renderBufferDirect(Z,D,G,V,S,Et),S.onAfterRender(C,D,Z,G,V,Et)}function dh(S){let D=0;for(let Z of S)Z.texture!==null&&D++;return D}function Is(S,D,Z){D.isScene!==!0&&(D=ne);let G=vt.get(S),V=T.state.lights,Et=T.state.shadowsArray,Ut=V.state.version,bt=j.getParameters(S,V.state,Et,D,Z,T.state.lightProbeGridArray),It=j.getProgramCacheKey(bt),zt=G.programs;G.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,G.fog=D.fog;let te=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;G.envMap=w.get(S.envMap||G.environment,te),G.envMapRotation=G.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,zt===void 0&&(S.addEventListener("dispose",ye),zt=new Map,G.programs=zt,G.programVariants=new Map);let ce=zt.get(It);if(ce!==void 0){if(G.currentProgram===ce&&G.lightsStateVersion===Ut)return ph(S,bt),ce}else bt.uniforms=j.getUniforms(S),z!==null&&S.isNodeMaterial&&z.build(S,Z,bt),S.onBeforeCompile(bt,C),ce=j.acquireProgram(bt,It),zt.set(It,ce),G.uniforms=bt.uniforms;let Ft=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ft.clippingPlanes=X.uniform),ph(S,bt),G.needsLights=sf(S),G.lightsStateVersion=Ut,G.needsLights&&(Ft.ambientLightColor.value=V.state.ambient,Ft.lightProbe.value=V.state.probe,Ft.sunLights.value=V.state.sun,Ft.sunLightShadows.value=V.state.sunShadow,Ft.directionalLights.value=V.state.directional,Ft.directionalLightShadows.value=V.state.directionalShadow,Ft.spotLights.value=V.state.spot,Ft.spotLightShadows.value=V.state.spotShadow,Ft.rectAreaLights.value=V.state.rectArea,Ft.ltc_1.value=V.state.rectAreaLTC1,Ft.ltc_2.value=V.state.rectAreaLTC2,Ft.pointLights.value=V.state.point,Ft.pointLightShadows.value=V.state.pointShadow,Ft.hemisphereLights.value=V.state.hemi,Ft.sunShadowMatrix.value=V.state.sunShadowMatrix,Ft.sunShadowCascade.value=V.state.sunShadowCascade,Ft.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ft.spotLightMatrix.value=V.state.spotLightMatrix,Ft.spotLightMap.value=V.state.spotLightMap,Ft.pointShadowMatrix.value=V.state.pointShadowMatrix),G.numLightProbeGrids=dh(T.state.lightProbeGridArray),G.currentProgram=ce,G.uniformsList=null,ce}function tf(S,D,Z,G,V){let Et=vt.get(S),Ut=Et.currentProgram.id+","+G+","+V,bt=Et.programVariants.get(Ut);return bt===void 0?(bt=Is(S,D,Z),Et.programVariants.set(Ut,bt)):(Et.currentProgram=bt,Et.uniformsList=null,Et.outputColorSpace=G,Et.toneMapping=V),bt}function fh(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=Ts.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function ph(S,D){let Z=vt.get(S);Z.outputColorSpace=D.outputColorSpace,Z.batching=D.batching,Z.batchingColor=D.batchingColor,Z.instancing=D.instancing,Z.instancingColor=D.instancingColor,Z.instancingMorph=D.instancingMorph,Z.skinning=D.skinning,Z.morphTargets=D.morphTargets,Z.morphNormals=D.morphNormals,Z.morphColors=D.morphColors,Z.morphTargetsCount=D.morphTargetsCount,Z.numClippingPlanes=D.numClippingPlanes,Z.numIntersection=D.numClipIntersection,Z.vertexAlphas=D.vertexAlphas,Z.vertexTangents=D.vertexTangents,Z.toneMapping=D.toneMapping}function ef(S,D,Z,G,V){D.isScene!==!0&&(D=ne),Lt.resetTextureUnits();let Et=D.fog,Ut=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?D.environment:null,bt=ot===null?C.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ue.workingColorSpace,It=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,zt=w.get(G.envMap||Ut,It),te=G.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ce=!!Z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ft=!!Z.morphAttributes.position,he=!!Z.morphAttributes.normal,Ie=!!Z.morphAttributes.color,be=Gn;G.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(be=C.toneMapping);let Me=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,qe=Me!==void 0?Me.length:0,Ot=vt.get(G),nn=T.state.lights;if(_t===!0&&(Ct===!0||S!==it)){let we=S===it&&G.id===J;X.setState(G,S,we)}let ge=!1,Ai=!1;G.version===Ot.__version?Ot.needsLights&&Ot.lightsStateVersion!==nn.state.version||V.isBatchedMesh&&Ot.batching===!1||!V.isBatchedMesh&&Ot.batching===!0||V.isBatchedMesh&&Ot.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ot.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ot.instancing===!1||!V.isInstancedMesh&&Ot.instancing===!0||V.isSkinnedMesh&&Ot.skinning===!1||!V.isSkinnedMesh&&Ot.skinning===!0||V.isInstancedMesh&&Ot.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ot.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ot.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ot.instancingMorph===!1&&V.morphTexture!==null||Ot.envMap!==zt||G.fog===!0&&Ot.fog!==Et||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==X.numPlanes||Ot.numIntersection!==X.numIntersection)||Ot.vertexAlphas!==te||Ot.vertexTangents!==ce||Ot.morphTargets!==Ft||Ot.morphNormals!==he||Ot.morphColors!==Ie||Ot.morphTargetsCount!==qe||Ot.numLightProbeGrids!==dh(T.state.lightProbeGridArray)?ge=!0:(Ot.outputColorSpace!==bt||Ot.toneMapping!==be)&&(Ai=!0):(ge=!0,Ot.__version=G.version);let Ye=Ot.currentProgram;(ge===!0||Ai===!0)&&(Ye=Ai===!0?tf(G,D,V,bt,be):Is(G,D,V),z&&G.isNodeMaterial&&z.onUpdateProgram(G,Ye,Ot));let Vr=!1,oi=!1,Ri=!1,pe=Ye.getUniforms(),He=Ot.uniforms;if(Y.useProgram(Ye.program)&&(Vr=!0,oi=!0,Ri=!0),G.id!==J&&(J=G.id,oi=!0),Vr||it!==S){Y.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),pe.setValue(R,"projectionMatrix",S.projectionMatrix),pe.setValue(R,"viewMatrix",S.matrixWorldInverse);let Fe=pe.map.cameraPosition;Fe!==void 0&&Fe.setValue(R,Yt.setFromMatrixPosition(S.matrixWorld)),ht.logarithmicDepthBuffer&&pe.setValue(R,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&pe.setValue(R,"isOrthographic",S.isOrthographicCamera===!0),it!==S&&(it=S,oi=!0,Ri=!0)}if(Ot.needsLights&&(nn.state.sunShadowMap.length>0&&pe.setValue(R,"sunShadowMap",nn.state.sunShadowMap,Lt),nn.state.directionalShadowMap.length>0&&pe.setValue(R,"directionalShadowMap",nn.state.directionalShadowMap,Lt),nn.state.spotShadowMap.length>0&&pe.setValue(R,"spotShadowMap",nn.state.spotShadowMap,Lt),nn.state.pointShadowMap.length>0&&pe.setValue(R,"pointShadowMap",nn.state.pointShadowMap,Lt)),V.isSkinnedMesh){pe.setOptional(R,V,"bindMatrix"),pe.setOptional(R,V,"bindMatrixInverse");let we=V.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),pe.setValue(R,"boneTexture",we.boneTexture,Lt))}V.isBatchedMesh&&(pe.setOptional(R,V,"batchingTexture"),pe.setValue(R,"batchingTexture",V._matricesTexture,Lt),pe.setOptional(R,V,"batchingIdTexture"),pe.setValue(R,"batchingIdTexture",V._indirectTexture,Lt),pe.setOptional(R,V,"batchingColorTexture"),V._colorsTexture!==null&&pe.setValue(R,"batchingColorTexture",V._colorsTexture,Lt));let An=Z.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&tt.update(V,Z,Ye),(oi||Ot.receiveShadow!==V.receiveShadow)&&(Ot.receiveShadow=V.receiveShadow,pe.setValue(R,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&D.environment!==null&&(He.envMapIntensity.value=D.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=a_()),oi){if(pe.setValue(R,"toneMappingExposure",C.toneMappingExposure),Ot.needsLights&&nf(He,Ri),Et&&G.fog===!0&&lt.refreshFogUniforms(He,Et),lt.refreshMaterialUniforms(He,G,St,Gt,T.state.transmissionRenderTarget[S.id]),Ot.needsLights&&Ot.numLightProbeGrids>0){let we=_,Fe=0;for(let qn of T.state.lightProbeGridArray)qn.texture!==null&&(we.textures[Fe]=qn.texture,we.min[Fe]=qn.boundingBox.min,we.max[Fe]=qn.boundingBox.max,we.resolution[Fe]=qn.resolution,Fe++);for(let qn in we)we[qn].length=Fe;He.probesSH.value=we.textures,He.probesMin.value=we.min,He.probesMax.value=we.max,He.probesResolution.value=we.resolution}Ts.upload(R,fh(Ot),He,Lt)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ts.upload(R,fh(Ot),He,Lt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&pe.setValue(R,"center",V.center),pe.setValue(R,"modelViewMatrix",V.modelViewMatrix),pe.setValue(R,"normalMatrix",V.normalMatrix),pe.setValue(R,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){let we=G.uniformsGroups;for(let Fe=0,qn=we.length;Fe<qn;Fe++){let gh=we[Fe];Ht.update(gh,Ye),Ht.bind(gh,Ye)}}return Ye}function nf(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function sf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(S,D,Z){let G=vt.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),vt.get(S.texture).__webglTexture=D,vt.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){let Z=vt.get(S);Z.__webglFramebuffer=D,Z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,Z=0){ot=S,$=D,k=Z;let G=null,V=!1,Et=!1;if(S){let bt=vt.get(S);if(bt.__useDefaultFramebuffer!==void 0){Y.bindFramebuffer(R.FRAMEBUFFER,bt.__webglFramebuffer),st.copy(S.viewport),Pt.copy(S.scissor),Bt=S.scissorTest,Y.viewport(st),Y.scissor(Pt),Y.setScissorTest(Bt),J=-1;return}else if(bt.__webglFramebuffer===void 0)Lt.setupRenderTarget(S);else if(bt.__hasExternalTextures)Lt.rebindTextures(S,vt.get(S.texture).__webglTexture,vt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let te=S.depthTexture;if(bt.__boundDepthTexture!==te){if(te!==null&&vt.has(te)&&(S.width!==te.image.width||S.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Lt.setupDepthRenderbuffer(S)}}let It=S.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Et=!0);let zt=vt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(zt[D])?G=zt[D][Z]:G=zt[D],V=!0):S.samples>0&&Lt.useMultisampledRTT(S)===!1?G=vt.get(S).__webglMultisampledFramebuffer:Array.isArray(zt)?G=zt[Z]:G=zt,st.copy(S.viewport),Pt.copy(S.scissor),Bt=S.scissorTest}else st.copy(Wt).multiplyScalar(St).floor(),Pt.copy(Qt).multiplyScalar(St).floor(),Bt=jt;if(Z!==0&&(G=q),Y.bindFramebuffer(R.FRAMEBUFFER,G)&&Y.drawBuffers(S,G),Y.viewport(st),Y.scissor(Pt),Y.setScissorTest(Bt),V){let bt=vt.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+D,bt.__webglTexture,Z)}else if(Et){let bt=D;for(let It=0;It<S.textures.length;It++){let zt=vt.get(S.textures[It]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+It,zt.__webglTexture,Z,bt)}}else if(S!==null&&Z!==0){let bt=vt.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,bt.__webglTexture,Z)}J=-1};function mh(S){let D=vt.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=ht.textureFormatReadable(S.format),D.__typeReadable=ht.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,Z,G,V,Et,Ut,bt=0){if(!(S&&S.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=vt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ut!==void 0&&(It=It[Ut],Array.isArray(It)&&(It=It[0])),It){Y.bindFramebuffer(R.FRAMEBUFFER,It);try{let zt=S.textures[bt],te=zt.format,ce=zt.type;S.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+bt);let Ft=mh(zt);if(Ft.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-G&&Z>=0&&Z<=S.height-V&&R.readPixels(D,Z,G,V,ft.convert(te),ft.convert(ce),Et)}finally{let zt=ot!==null?vt.get(ot).__webglFramebuffer:null;Y.bindFramebuffer(R.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(S,D,Z,G,V,Et,Ut,bt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=vt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ut!==void 0&&(It=It[Ut],Array.isArray(It)&&(It=It[0])),It)if(D>=0&&D<=S.width-G&&Z>=0&&Z<=S.height-V){Y.bindFramebuffer(R.FRAMEBUFFER,It);let zt=S.textures[bt],te=zt.format,ce=zt.type;S.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+bt);let Ft=mh(zt);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let he=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,he),R.bufferData(R.PIXEL_PACK_BUFFER,Et.byteLength,R.STREAM_READ),R.readPixels(D,Z,G,V,ft.convert(te),ft.convert(ce),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let Ie=ot!==null?vt.get(ot).__webglFramebuffer:null;Y.bindFramebuffer(R.FRAMEBUFFER,Ie);let be=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Ru(R,be,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,he),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Et),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(he),R.deleteSync(be),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,Z=0){let G=Math.pow(2,-Z),V=Math.floor(S.image.width*G),Et=Math.floor(S.image.height*G),Ut=D!==null?D.x:0,bt=D!==null?D.y:0;Lt.setTexture2D(S,0),R.copyTexSubImage2D(R.TEXTURE_2D,Z,0,0,Ut,bt,V,Et),Y.unbindTexture()},this.copyTextureToTexture=function(S,D,Z=null,G=null,V=0,Et=0){let Ut,bt,It,zt,te,ce,Ft,he,Ie,be=S.isCompressedTexture?S.mipmaps[Et]:S.image;if(Z!==null)Ut=Z.max.x-Z.min.x,bt=Z.max.y-Z.min.y,It=Z.isBox3?Z.max.z-Z.min.z:1,zt=Z.min.x,te=Z.min.y,ce=Z.isBox3?Z.min.z:0;else{let pe=Math.pow(2,-V);Ut=Math.floor(be.width*pe),bt=Math.floor(be.height*pe),S.isDataArrayTexture?It=be.depth:S.isData3DTexture?It=Math.floor(be.depth*pe):It=1,zt=0,te=0,ce=0}G!==null?(Ft=G.x,he=G.y,Ie=G.z):(Ft=0,he=0,Ie=0);let Me=ft.convert(D.format),qe=ft.convert(D.type),Ot;D.isData3DTexture?(Lt.setTexture3D(D,0),Ot=R.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Lt.setTexture2DArray(D,0),Ot=R.TEXTURE_2D_ARRAY):(Lt.setTexture2D(D,0),Ot=R.TEXTURE_2D),Y.activeTexture(R.TEXTURE0),Y.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,D.flipY),Y.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),Y.pixelStorei(R.UNPACK_ALIGNMENT,D.unpackAlignment);let nn=Y.getParameter(R.UNPACK_ROW_LENGTH),ge=Y.getParameter(R.UNPACK_IMAGE_HEIGHT),Ai=Y.getParameter(R.UNPACK_SKIP_PIXELS),Ye=Y.getParameter(R.UNPACK_SKIP_ROWS),Vr=Y.getParameter(R.UNPACK_SKIP_IMAGES);Y.pixelStorei(R.UNPACK_ROW_LENGTH,be.width),Y.pixelStorei(R.UNPACK_IMAGE_HEIGHT,be.height),Y.pixelStorei(R.UNPACK_SKIP_PIXELS,zt),Y.pixelStorei(R.UNPACK_SKIP_ROWS,te),Y.pixelStorei(R.UNPACK_SKIP_IMAGES,ce);let oi=S.isDataArrayTexture||S.isData3DTexture,Ri=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){let pe=vt.get(S),He=vt.get(D),An=vt.get(pe.__renderTarget),we=vt.get(He.__renderTarget);Y.bindFramebuffer(R.READ_FRAMEBUFFER,An.__webglFramebuffer),Y.bindFramebuffer(R.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Fe=0;Fe<It;Fe++)oi&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,vt.get(S).__webglTexture,V,ce+Fe),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,vt.get(D).__webglTexture,Et,Ie+Fe)),R.blitFramebuffer(zt,te,zt+Ut,te+bt,Ft,he,Ft+Ut,he+bt,R.DEPTH_BUFFER_BIT,R.NEAREST);Y.bindFramebuffer(R.READ_FRAMEBUFFER,null),Y.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||vt.has(S)){let pe=vt.get(S),He=vt.get(D);Y.bindFramebuffer(R.READ_FRAMEBUFFER,P),Y.bindFramebuffer(R.DRAW_FRAMEBUFFER,W);for(let An=0;An<It;An++)oi?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,pe.__webglTexture,V,ce+An):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,pe.__webglTexture,V),Ri?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,He.__webglTexture,Et,Ie+An):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,He.__webglTexture,Et),V!==0?R.blitFramebuffer(zt,te,zt+Ut,te+bt,Ft,he,Ft+Ut,he+bt,R.COLOR_BUFFER_BIT,R.NEAREST):Ri?R.copyTexSubImage3D(Ot,Et,Ft,he,Ie+An,zt,te,Ut,bt):R.copyTexSubImage2D(Ot,Et,Ft,he,zt,te,Ut,bt);Y.bindFramebuffer(R.READ_FRAMEBUFFER,null),Y.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Ri?S.isDataTexture||S.isData3DTexture?R.texSubImage3D(Ot,Et,Ft,he,Ie,Ut,bt,It,Me,qe,be.data):D.isCompressedArrayTexture?R.compressedTexSubImage3D(Ot,Et,Ft,he,Ie,Ut,bt,It,Me,be.data):R.texSubImage3D(Ot,Et,Ft,he,Ie,Ut,bt,It,Me,qe,be):S.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Et,Ft,he,Ut,bt,Me,qe,be.data):S.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Et,Ft,he,be.width,be.height,Me,be.data):R.texSubImage2D(R.TEXTURE_2D,Et,Ft,he,Ut,bt,Me,qe,be);Y.pixelStorei(R.UNPACK_ROW_LENGTH,nn),Y.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ge),Y.pixelStorei(R.UNPACK_SKIP_PIXELS,Ai),Y.pixelStorei(R.UNPACK_SKIP_ROWS,Ye),Y.pixelStorei(R.UNPACK_SKIP_IMAGES,Vr),Et===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&R.generateMipmap(Ot),Y.unbindTexture()},this.initRenderTarget=function(S){vt.get(S).__webglFramebuffer===void 0&&Lt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Lt.setTextureCube(S,0):S.isData3DTexture?Lt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Lt.setTexture2DArray(S,0):Lt.setTexture2D(S,0),Y.unbindTexture()},this.resetState=function(){$=0,k=0,ot=null,Y.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};var qt={N:5,S:80,ROAD_HALF:6.1,LANE_W:3.5,LANE_OFF:1.75,PARK_OFF:4.8,SIDEWALK:4,SLOT_LEN:6,SPEED_LIMIT:50,CAR_HL:2.2,CAR_HW:.9};qt.OFF=qt.N*qt.S/2;qt.STOP_C=qt.ROAD_HALF+6.5;qt.EDGE=qt.OFF+qt.ROAD_HALF;var le=i=>i*qt.S-qt.OFF,_e=[[1,0],[0,1],[-1,0],[0,-1]],si=i=>[-_e[i][1],_e[i][0]],kc=(i,t)=>Math.abs(i)>Math.abs(t)?i>0?0:2:t>0?1:3,qo=i=>Math.atan2(_e[i][0],_e[i][1]),o_={side:1,quality:"high",units:"kmh",sound:!0,easyGears:!0,camera:0},Re=Object.assign({},o_);try{Object.assign(Re,JSON.parse(localStorage.getItem("maverick.settings")||"{}"))}catch{}function Gc(){try{localStorage.setItem("maverick.settings",JSON.stringify(Re))}catch{}}function Hc(){try{return JSON.parse(localStorage.getItem("maverick.progress")||"{}")}catch{return{}}}function xd(i){try{localStorage.setItem("maverick.progress",JSON.stringify(i))}catch{}}function Yo(i){let t=i>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var fe=(i,t,e)=>i<t?t:i>e?e:i,Wn=(i,t,e)=>i+(t-i)*e,Vc=(i,t,e)=>{let n=fe((e-i)/(t-i),0,1);return n*n*(3-2*n)},Fr=i=>{for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i};function Vi(i,t,e,n=!0){let s=document.createElement("canvas");s.width=i,s.height=t;let r=s.getContext("2d");e(r,i,t);let a=new tr(s);return a.wrapS=a.wrapT=hs,n&&(a.colorSpace=Ve),a.anisotropy=8,a}function Zo(i,t,e,n,s,r=2){for(let a=0;a<n;a++){i.fillStyle=s[Math.random()*s.length|0];let o=Math.random()*r+.5;i.fillRect(Math.random()*t,Math.random()*e,o,o)}}function _d(){let i={};i.asphalt=Vi(512,512,(n,s,r)=>{n.fillStyle="#3b3c3f",n.fillRect(0,0,s,r);for(let a=0;a<25;a++)n.fillStyle=`rgba(${20+Math.random()*30},${20+Math.random()*30},${25+Math.random()*30},0.12)`,n.beginPath(),n.arc(Math.random()*s,Math.random()*r,20+Math.random()*70,0,Math.PI*2),n.fill();Zo(n,s,r,26e3,["#2c2d30","#47484c","#525357","#35363a","#5d5e62"],2.2)}),i.sidewalk=Vi(256,256,(n,s,r)=>{n.fillStyle="#a19d94",n.fillRect(0,0,s,r),Zo(n,s,r,5e3,["#97938a","#aaa69d","#8f8b83"],2),n.strokeStyle="rgba(70,65,60,0.55)",n.lineWidth=2;for(let a=0;a<=4;a++)n.beginPath(),n.moveTo(a*64,0),n.lineTo(a*64,r),n.stroke(),n.beginPath(),n.moveTo(0,a*64),n.lineTo(s,a*64),n.stroke()}),i.grass=Vi(256,256,(n,s,r)=>{n.fillStyle="#4d7432",n.fillRect(0,0,s,r),Zo(n,s,r,12e3,["#3f6328","#5a843a","#6a9446","#456c2c"],2.5)}),i.facades=[],i.facadeLights=[];let t=["#b9a68c","#8e9aa3","#c9c3b6","#9b6e5a","#6f7a83","#d2b48c","#a4a9ad"],e=["#2a3a4a","#33414d","#1f2d3a","#3b4a55"];for(let n=0;n<t.length;n++){let s=[];for(let a=0;a<16;a++)s.push(Math.random()<.38);let r=n%3;i.facades.push(Vi(256,256,(a,o,l)=>{a.fillStyle=t[n],a.fillRect(0,0,o,l),Zo(a,o,l,2500,["rgba(0,0,0,0.06)","rgba(255,255,255,0.06)"],3);for(let c=0;c<4;c++)for(let h=0;h<4;h++){let d=h*64,u=c*64;a.fillStyle="rgba(0,0,0,0.25)",r===0&&a.fillRect(d+12,u+10,40,40),r===1&&a.fillRect(d+4,u+14,58,32),r===2&&a.fillRect(d+18,u+8,28,44),a.fillStyle=e[(n+c+h)%e.length],r===0&&a.fillRect(d+14,u+12,36,36),r===1&&a.fillRect(d+6,u+16,54,28),r===2&&a.fillRect(d+20,u+10,24,40),a.fillStyle="rgba(255,255,255,0.10)",r===0&&a.fillRect(d+14,u+12,36,8),r===1&&a.fillRect(d+6,u+16,54,6),r===2&&a.fillRect(d+20,u+10,24,8)}})),i.facadeLights.push(Vi(256,256,(a,o,l)=>{a.fillStyle="#000",a.fillRect(0,0,o,l);for(let c=0;c<4;c++)for(let h=0;h<4;h++){if(!s[c*4+h])continue;let d=h*64,u=c*64;a.fillStyle=["#ffd890","#ffe7b0","#cfe3ff"][(c+h)%3],r===0&&a.fillRect(d+14,u+12,36,36),r===1&&a.fillRect(d+6,u+16,54,28),r===2&&a.fillRect(d+20,u+10,24,40)}}))}return i.glow=Vi(128,128,(n,s,r)=>{let a=n.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(255,220,160,0.85)"),a.addColorStop(.5,"rgba(255,200,130,0.3)"),a.addColorStop(1,"rgba(255,200,130,0)"),n.fillStyle=a,n.fillRect(0,0,s,r)}),i.beam=Vi(128,256,(n,s,r)=>{let a=n.createLinearGradient(0,r,0,0);a.addColorStop(0,"rgba(255,250,230,0.55)"),a.addColorStop(1,"rgba(255,250,230,0)"),n.fillStyle=a,n.beginPath(),n.moveTo(s*.42,r),n.lineTo(s*.58,r),n.lineTo(s,0),n.lineTo(0,0),n.closePath(),n.fill()}),i.wrapRepeat=(n,s,r)=>(n.repeat.set(s,r),n),i}function Wc(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new We;l.morphTargetsRelative=o;let c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0,f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=vd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let y=0;y<a[h].length;++y)f.push(a[h][y][u]);let p=vd(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function vd(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new sn(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<e;p++){let y=h.getComponent(u,p);o.setComponent(u+d,p,y)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Vt=null;function l_(i){let t=new xi;t.moveTo(i[0][0],i[0][1]);for(let e=1;e<i.length;e++)t.lineTo(i[e][0],i[e][1]);return t.closePath(),t}function yd(i,t,e=.04){let n=new Ui(l_(i),{depth:t-e*2,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:2,curveSegments:2});return n.rotateY(-Math.PI/2),n.translate(t/2-e,0,0),n.computeVertexNormals(),n}function Ed(){Vt={},Vt.body=yd([[-2.18,.3],[-2.24,.55],[-2.2,.92],[-1.75,.98],[1.15,.96],[1.95,.84],[2.22,.66],[2.22,.42],[2.12,.3]],1.78,.05),Vt.glass=yd([[-1.78,.93],[-1.42,1.38],[.32,1.42],[1.18,.93]],1.6,.03),Vt.roof=new ke(1.5,.06,1.62),Vt.roof.translate(0,1.43,-.56),Vt.pillar=new ke(1.62,.44,.12),Vt.wheel=new Xe(.31,.31,.22,18),Vt.wheel.rotateZ(Math.PI/2),Vt.hub=new Xe(.19,.19,.23,10),Vt.hub.rotateZ(Math.PI/2),Vt.light=new ke(.36,.12,.06),Vt.smallLight=new ke(.16,.08,.06),Vt.bumper=new ke(1.8,.16,.12),Vt.mirror=new ke(.18,.1,.1),Vt.plate=new ke(.5,.12,.02),Vt.shadow=new tn(2.1,4.7),Vt.shadow.rotateX(-Math.PI/2),Vt.mats={glass:new xe({color:1779250,roughness:.08,metalness:.6}),tyre:new xe({color:1381653,roughness:.9}),hub:new xe({color:12106944,roughness:.35,metalness:.8}),trim:new xe({color:1907999,roughness:.6}),plate:new xe({color:15921894,roughness:.5}),head:new xe({color:15658734,emissive:16774877,emissiveIntensity:.15})},Vt.bodyMats=new Map}function c_(i){return Vt.bodyMats.has(i)||Vt.bodyMats.set(i,new xe({color:i,roughness:.32,metalness:.45})),Vt.bodyMats.get(i)}var As=[11735339,1920649,15921906,2237480,9080724,3107642,14131739,5909114,12867098,5008780,15262415,8003359];function Td(i,t={}){Vt||Ed();let e=new Ke,n=new Ke;e.add(n);let s=c_(i),r=new ae(Vt.body,s);r.castShadow=!0,r.receiveShadow=!1;let a=new ae(Vt.glass,Vt.mats.glass);a.castShadow=!0;let o=new ae(Vt.roof,s);o.castShadow=!0,n.add(r,a,o);let l=new ae(Vt.bumper,Vt.mats.trim);l.position.set(0,.36,2.2);let c=new ae(Vt.bumper,Vt.mats.trim);c.position.set(0,.36,-2.22),n.add(l,c);for(let _ of[-1,1]){let A=new ae(Vt.mirror,s);A.position.set(_*.95,1,.95),n.add(A)}let h=new ae(Vt.plate,Vt.mats.plate);h.position.set(0,.5,2.27),n.add(h);let d=new ae(Vt.plate,Vt.mats.plate);d.position.set(0,.62,-2.27),n.add(d);let u=(_,A)=>new xe({color:_,emissive:A,emissiveIntensity:0,roughness:.3}),f=u(16053486,16774358),p=u(6950157,16718352),y=u(14540253,16777215),m=u(10115584,16752640),g=u(10115584,16752640);for(let _ of[-1,1]){let A=new ae(Vt.light,f);A.position.set(_*.62,.7,2.2),n.add(A);let T=new ae(Vt.light,p);T.position.set(_*.64,.8,-2.22),n.add(T);let x=new ae(Vt.smallLight,y);x.position.set(_*.3,.8,-2.23),n.add(x);let b=new ae(Vt.smallLight,_>0?m:g);b.position.set(_*.85,.62,2.12),n.add(b);let N=new ae(Vt.smallLight,_>0?m:g);N.position.set(_*.86,.95,-2.15),n.add(N)}p.emissiveIntensity=.25;let M=[],E=[[.79,1.3],[-.79,1.3],[.79,-1.32],[-.79,-1.32]];for(let _=0;_<4;_++){let A=new Ke;A.position.set(E[_][0],.31,E[_][1]);let T=new Ke,x=new ae(Vt.wheel,Vt.mats.tyre);x.castShadow=!0;let b=new ae(Vt.hub,Vt.mats.hub);T.add(x,b),A.add(T),e.add(A),M.push({pivot:A,spin:T})}return t.van&&n.scale.set(1.04,1.28,1.08),e.parts={shell:n,wheels:M,head:f,tail:p,rev:y,indL:m,indR:g,bodyMat:s},e}function wd(i,t,e,n){let s=i.parts;s.wheels[0].pivot.rotation.y=t,s.wheels[1].pivot.rotation.y=t;for(let r of s.wheels)r.spin.rotation.x=e;s.tail.emissiveIntensity=n.brake?2.2:n.head?.8:.25,s.head.emissiveIntensity=n.head?2:0,s.rev.emissiveIntensity=n.reverse?1.6:0,s.indL.emissiveIntensity=n.left?3:0,s.indR.emissiveIntensity=n.right?3:0}function Ad(){let i=new Xe(.2,.17,.75,8);i.translate(0,1.12,0);let t=new Xe(.16,.12,.78,8);t.translate(0,.39,0);let e=new Fi(.13,10,8);return e.translate(0,1.66,0),{body:i,legs:t,head:e}}var Wi=new de,Xi=new de,Jo=new Qe,Or=new xn,Xc=new U,Md=new U(1,1,1),$o=new Kt,Br=[[.62,.7,2.2,0],[-.62,.7,2.2,0],[.64,.8,-2.22,1],[-.64,.8,-2.22,1],[.3,.8,-2.23,2],[-.3,.8,-2.23,2],[.85,.62,2.12,3],[.86,.95,-2.15,3],[-.85,.62,2.12,4],[-.86,.95,-2.15,4]],h_=[[[.72,.72,.68],[1.6,1.55,1.3]],[[.32,.03,.03],[1.8,.12,.06]],[[.55,.55,.55],[1.6,1.6,1.6]],[[.42,.24,0],[2,1.2,0]],[[.42,.24,0],[2,1.2,0]]],Sd=[[.79,1.3],[-.79,1.3],[.79,-1.32],[-.79,-1.32]],Ko=class{constructor(t,e,n){Vt||Ed(),this.cap=e;let s=new xe({color:16777215,roughness:.32,metalness:.45}),r=bd([Vt.body,Vt.roof]),a=bd([Vt.bumper.clone().translate(0,.36,2.2),Vt.bumper.clone().translate(0,.36,-2.22)]),o=(c,h,d,u)=>{let f=new dn(c,h,d);return f.castShadow=u,f.receiveShadow=!1,f.instanceMatrix.setUsage(Ir),f.frustumCulled=!1,f.count=0,t.add(f),f};this.body=o(r,s,e,!0),this.glass=o(Vt.glass,Vt.mats.glass,e,!1),this.trim=o(a,Vt.mats.trim,e,!1),this.wheels=o(Vt.wheel,Vt.mats.tyre,e*4,!1),this.lights=o(Vt.light,new je({color:16777215}),e*Br.length,!1);let l=new tn(5,14);l.rotateX(-Math.PI/2),l.translate(0,.04,9),this.beams=o(l,new je({map:n,transparent:!0,depthWrite:!1,blending:Bi,opacity:.55}),e,!1),this.beams.visible=!1,this.meshes=[this.body,this.glass,this.trim,this.wheels,this.lights,this.beams],this.n=0;for(let c of this.meshes)c.instanceColor===null&&(c===this.body||c===this.lights)&&c.setColorAt(0,$o.set(1,1,1))}add(){let t=this.n++;for(let e of this.meshes)e.count=this.n*(e===this.wheels?4:e===this.lights?Br.length:1);return t}setColor(t,e){this.body.setColorAt(t,$o.set(e)),this.body.instanceColor.needsUpdate=!0}set(t,e,n,s,r,a,o,l){Or.set(0,r,0),Jo.setFromEuler(Or),Wi.compose(Xc.set(e,n,s),Jo,Md),this.body.setMatrixAt(t,Wi),this.glass.setMatrixAt(t,Wi),this.trim.setMatrixAt(t,Wi),this.beams.setMatrixAt(t,Wi);for(let c=0;c<4;c++)Or.set(o,c<2?a:0,0,"YXZ"),Jo.setFromEuler(Or),Xi.compose(Xc.set(Sd[c][0],.31,Sd[c][1]),Jo,Md),Xi.premultiply(Wi),this.wheels.setMatrixAt(t*4+c,Xi);Or.set(0,0,0,"XYZ");for(let c=0;c<Br.length;c++){let h=Br[c];Xi.makeTranslation(h[0],h[1],h[2]),h[3]>=2&&Xi.scale(Xc.set(.45,.7,1)),Xi.premultiply(Wi);let d=t*Br.length+c;this.lights.setMatrixAt(d,Xi);let u=h[3],f=!1;l&&(u===0?f=l.head:u===1?f=l.brake:u===2?f=l.reverse:u===3?f=l.left:f=l.right);let p=h_[u][f?1:0];u===1&&!f&&l&&l.head?this.lights.setColorAt(d,$o.setRGB(.9,.06,.04)):this.lights.setColorAt(d,$o.setRGB(p[0],p[1],p[2]))}}flush(){for(let t of this.meshes)t.instanceMatrix.needsUpdate=!0;this.lights.instanceColor&&(this.lights.instanceColor.needsUpdate=!0)}setNight(t){this.beams.visible=t}};function bd(i){let t=i.map(s=>s.index?s.toNonIndexed():s.clone());for(let s of t)for(let r of Object.keys(s.attributes))["position","normal","uv"].includes(r)||s.deleteAttribute(r);let e=0;for(let s of t)e+=s.attributes.position.count;let n=new We;for(let s of["position","normal","uv"]){let r=s==="uv"?2:3,a=new Float32Array(e*r),o=0;for(let l of t)a.set(l.attributes[s].array,o),o+=l.attributes[s].array.length;n.setAttribute(s,new sn(a,r))}return n}var{N:ln,S:Rd,ROAD_HALF:En,SIDEWALK:cn,OFF:qc,EDGE:qi}=qt,Ne=.15;function Yc(i,t,e,n){let s=i.attributes.position,r=i.attributes.normal,a=i.attributes.uv;for(let o=0;o<s.count;o++){let l=s.getX(o),c=s.getY(o),h=s.getZ(o),d=Math.abs(r.getX(o));Math.abs(r.getY(o))>.5?n?a.setXY(o,n[0],n[1]):a.setXY(o,l/t,h/t):d>.5?a.setXY(o,h/t,c/e):a.setXY(o,l/t,c/e)}return i}function Ge(i,t,e,n,s,r){let a=new ke(t-i,n-e,r-s);return a.translate((i+t)/2,(e+n)/2,(s+r)/2),a}function Qo(i,t,e,n,s){let r=new tn(t-i,n-e);return r.rotateX(-Math.PI/2),r.translate((i+t)/2,s,(e+n)/2),r}function Cd(i,t,e={}){let n=Yo(e.seed||1234),s=Re.side,r=Re.quality==="low",a={statics:[],grid:new Map,cell:16,blocks:[],slots:[],bays:[],peds:[],lightOffsets:[],junctionLamps:[],night:!1,side:s},o={},l=(H,et)=>{(o[H]=o[H]||[]).push(et)};function c(H){a.statics.push(H);let et,R,pt,at;H.type==="box"?(et=H.minX,R=H.maxX,pt=H.minZ,at=H.maxZ):(et=H.x-H.r,R=H.x+H.r,pt=H.z-H.r,at=H.z+H.r);let ht=a.cell;for(let Y=Math.floor(et/ht);Y<=Math.floor(R/ht);Y++)for(let Dt=Math.floor(pt/ht);Dt<=Math.floor(at/ht);Dt++){let vt=Y+","+Dt;a.grid.has(vt)||a.grid.set(vt,[]),a.grid.get(vt).push(H)}}let h=(H,et,R,pt,at)=>c({type:"box",minX:H,maxX:et,minZ:R,maxZ:pt,kind:at}),d=(H,et,R,pt)=>c({type:"circle",x:H,z:et,r:R,kind:pt}),u=new Set;a.query=(H,et,R,pt)=>{pt.length=0,u.clear();let at=a.cell;for(let ht=Math.floor((H-R)/at);ht<=Math.floor((H+R)/at);ht++)for(let Y=Math.floor((et-R)/at);Y<=Math.floor((et+R)/at);Y++){let Dt=a.grid.get(ht+","+Y);if(Dt)for(let vt of Dt)u.has(vt)||(u.add(vt),pt.push(vt))}return pt};let f=new xe({map:t.wrapRepeat(t.grass.clone(),200,200),roughness:1});f.map.needsUpdate=!0;let p=new ae(new tn(1600,1600),f);p.rotation.x=-Math.PI/2,p.position.y=-.03,p.receiveShadow=!0,i.add(p);let y=qi*2,m=new xe({map:t.wrapRepeat(t.asphalt.clone(),y/10,y/10),roughness:.92});m.map.needsUpdate=!0;let g=new ae(new tn(y,y),m);g.rotation.x=-Math.PI/2,g.receiveShadow=!0,i.add(g);let M=qi,E=qi+cn;l("walk",Ge(-E,E,0,Ne,-E,-M)),l("walk",Ge(-E,E,0,Ne,M,E)),l("walk",Ge(-E,-M,0,Ne,-M,M)),l("walk",Ge(M,E,0,Ne,-M,M));let _=E+.4;l("wall",Ge(-_,_,0,1.1,-_,-E)),l("wall",Ge(-_,_,0,1.1,E,_)),l("wall",Ge(-_,-E,0,1.1,-E,E)),l("wall",Ge(E,_,0,1.1,-E,E)),h(-_-5,_+5,-_-5,-E,"wall"),h(-_-5,_+5,E,_+5,"wall"),h(-_-5,-E,-_,_,"wall"),h(E,_+5,-_,_,"wall");let A=[],T=[],x=[3,1],b=[1,3];for(let H=0;H<ln;H++)for(let et=0;et<ln;et++){let R=le(H)+En,pt=le(H+1)-En,at=le(et)+En,ht=le(et+1)-En,Y="city";H===x[0]&&et===x[1]&&(Y="lot"),H===b[0]&&et===b[1]&&(Y="park");let Dt={bi:H,bj:et,x0:R,x1:pt,z0:at,z1:ht,type:Y};if(a.blocks.push(Dt),Y==="lot"){N(Dt);continue}l("walk",Ge(R,pt,0,Ne,at,ht));let vt=16;for(let lt of[0,1,2,3]){let ut=lt<2?pt-R:ht-at;for(let B=14;B<ut-12;B+=vt){let X,ct;lt===0?(X=R+B,ct=at+1.3):lt===1?(X=R+B,ct=ht-1.3):lt===2?(X=R+1.3,ct=at+B):(X=pt-1.3,ct=at+B),(B/vt|0)%2===0?(A.push([X,ct,.8+n()*.5]),d(X,ct,.35,"tree")):(T.push([X,ct,lt]),d(X,ct,.18,"pole"))}}if(Y==="park"){l("grass",Ge(R+cn,pt-cn,0,Ne+.02,at+cn,ht-cn));for(let B=0;B<28;B++){let X=R+cn+3+n()*(pt-R-2*cn-6),ct=at+cn+3+n()*(ht-at-2*cn-6);A.push([X,ct,1+n()*.8]),d(X,ct,.4,"tree")}let lt=(R+pt)/2,ut=(at+ht)/2;l("wall",new Xe(4,4.2,.7,24).translate(lt,.35,ut)),d(lt,ut,4.2,"wall"),a.peds.push({block:Dt});continue}let Lt=R+cn,w=pt-cn,v=at+cn,O=ht-cn,rt=[];if(n()<.22)rt.push([Lt,w,v,O]);else{let lt=(Lt+w)/2,ut=(v+O)/2,B=1.5;rt.push([Lt,lt-B,v,ut-B],[lt+B,w,v,ut-B],[Lt,lt-B,ut+B,O],[lt+B,w,ut+B,O])}let j=1-Math.hypot((R+pt)/2,(at+ht)/2)/(qc*1.4);for(let lt of rt){let ut=n()*1.2,B=lt[0]+ut,X=lt[1]-ut,ct=lt[2]+ut,I=lt[3]-ut,tt=9+Math.pow(n(),1.6)*(20+45*j),Q=n()*t.facades.length|0;if(l("f"+Q,Yc(Ge(B,X,Ne,Ne+tt,ct,I),12,12.8,[.02,.02])),l("roof",Ge(B+.3,X-.3,Ne+tt,Ne+tt+.5,ct+.3,I-.3)),h(B,X,ct,I,"building"),tt>26&&n()<.55){let gt=2.5+n()*3,ft=6+n()*14;l("f"+Q,Yc(Ge(B+gt,X-gt,Ne+tt,Ne+tt+ft,ct+gt,I-gt),12,12.8,[.02,.02]))}if(n()<.6){let gt=B+2+n()*(X-B-6),ft=ct+2+n()*(I-ct-6);l("roof",Ge(gt,gt+2.5,Ne+tt,Ne+tt+1.6,ft,ft+2))}}a.peds.push({block:Dt})}function N(H){let{x0:et,x1:R,z0:pt,z1:at}=H,ht=.6,Y=.3,Dt=.8,vt=10,Lt=(et+R)/2,w=[[et+ht,R-ht,pt+ht,pt+ht+Y,!0],[et+ht,R-ht,at-ht-Y,at-ht,!0],[et+ht,et+ht+Y,pt+ht,at-ht,!1],[R-ht-Y,R-ht,pt+ht,at-ht,!1]];for(let B of w)if(B[4])for(let X of[[B[0],Lt-vt/2],[Lt+vt/2,B[1]]])l("wall",Ge(X[0],X[1],0,Dt,B[2],B[3])),h(X[0],X[1],B[2],B[3],"wall");else l("wall",Ge(B[0],B[1],0,Dt,B[2],B[3])),h(B[0],B[1],B[2],B[3],"wall");let v=[[8,13.5],[20.5,26],[26,31.5],[38.5,44]],O=2.7,rt=19,j=Lt-rt*O/2;for(let B=0;B<v.length;B++){let X=pt+v[B][0],ct=pt+v[B][1];for(let I=0;I<=rt;I++)l("white",Qo(j+I*O-.06,j+I*O+.06,X,ct,.02));(B===0||B===3)&&l("white",Qo(j,j+rt*O,B===0?X-.06:ct-.06,B===0?X+.06:ct+.06,.02)),B===1&&l("white",Qo(j,j+rt*O,ct-.06,ct+.06,.02));for(let I=0;I<rt;I++)a.bays.push({x:j+(I+.5)*O,z:(X+ct)/2,row:B,k:I,len:ct-X,wid:O,occupied:n()<.55,heading:n()<.5?0:Math.PI})}let lt=Lt+vt/2+1,ut=pt+ht-.1;l("pole",new Xe(.06,.06,2.6,6).translate(lt,1.3,ut)),l("sign",Ge(lt-.45,lt+.45,2.2,3.1,ut-.05,ut+.05)),d(lt,ut,.12,"pole")}let C=(H,et,R,pt)=>H===0?[R,et+pt]:[et+pt,R];function L(H,et,R,pt,at,ht,Y){let Dt=C(H,et,R,at),vt=C(H,et,pt,ht);l(Y,Qo(Math.min(Dt[0],vt[0]),Math.max(Dt[0],vt[0]),Math.min(Dt[1],vt[1]),Math.max(Dt[1],vt[1]),.02))}let z=r?.25:.42;for(let H=0;H<2;H++)for(let et=0;et<=ln;et++){let R=le(et),pt=s*(H===0?1:-1);for(let at=0;at<ln;at++){let ht=le(at)+En,Y=le(at+1)-En;L(H,R,ht+4,ht+14,-.07,.07,"white"),L(H,R,Y-14,Y-4,-.07,.07,"white");for(let w=ht+17;w<Y-16;w+=9)L(H,R,w,w+3,-.07,.07,"white");for(let w of[-1,1])L(H,R,ht+4,Y-4,w*3.5-.06,w*3.5+.06,"white");for(let[w,v]of[[ht+.4,ht+3.4],[Y-3.4,Y-.4]])for(let O=-En+.6;O<En-.5;O+=1)L(H,R,w,v,O,O+.5,"white");L(H,R,Y-4.3,Y-3.9,0,pt*3.5,"white"),L(H,R,ht+3.9,ht+4.3,0,-pt*3.5,"white");let Dt=7,vt=(ht+Y)/2,Lt=vt-Dt*qt.SLOT_LEN/2;for(let w of[-1,1]){for(let v=0;v<=Dt;v++){let O=Lt+v*qt.SLOT_LEN;L(H,R,O-.06,O+.06,w*3.5,w*(En-.3),"white")}for(let v=0;v<Dt;v++){let O=Lt+(v+.5)*qt.SLOT_LEN,rt=C(H,R,O,w*qt.PARK_OFF),j=w===pt?1:-1,lt=H===0?j>0?Math.PI/2:-Math.PI/2:j>0?0:Math.PI;a.slots.push({x:rt[0],z:rt[1],axis:H,ri:et,si:at,side:w,k:v,heading:lt,occupied:n()<z,len:qt.SLOT_LEN,wid:2.4})}}}}let q=38,P=[[[0,14,"G"],[14,17,"Y"],[17,38,"R"]],[[0,19,"R"],[19,33,"G"],[33,36,"Y"],[36,38,"R"]]];for(let H=0;H<=ln;H++){a.lightOffsets.push([]);for(let et=0;et<=ln;et++)a.lightOffsets[H].push(n()*q)}a.lightState=(H,et,R,pt)=>{let at=((pt+a.lightOffsets[H][et])%q+q)%q,ht=P[R];for(let Y=0;Y<ht.length;Y++){let Dt=ht[Y];if(at>=Dt[0]&&at<Dt[1]){let vt=at-Dt[0];Dt[2]==="R"&&Y===0&&ht[ht.length-1][2]==="R"&&(vt+=q-ht[ht.length-1][0]);let Lt=Dt[1]-at;return Dt[2]==="R"&&Y===ht.length-1&&ht[0][2]==="R"&&(Lt+=ht[0][1]),{s:Dt[2],since:vt,remain:Lt}}}return{s:"R",since:0,remain:0}};let W=[];for(let H=0;H<=ln;H++)for(let et=0;et<=ln;et++){let R=le(H),pt=le(et);for(let at=0;at<4;at++){let ht=H-_e[at][0],Y=et-_e[at][1];if(ht<0||ht>ln||Y<0||Y>ln)continue;let Dt=si(at),vt=En+.8,Lt=R-_e[at][0]*vt+Dt[0]*s*vt,w=pt-_e[at][1]*vt+Dt[1]*s*vt;l("pole",new Xe(.09,.11,3.6,8).translate(Lt,1.8,w));let v=Lt-_e[at][0]*.05,O=w-_e[at][1]*.05,rt=_e[at][0]!==0?[.25,.4]:[.4,.25];l("housing",Ge(v-rt[0]/2,v+rt[0]/2,2.55,3.65,O-rt[1]/2,O+rt[1]/2)),d(Lt,w,.2,"pole");let j=at%2;["R","Y","G"].forEach((lt,ut)=>{W.push({ix:H,iz:et,axis:j,c:lt,x:v-_e[at][0]*.16,y:3.42-ut*.33,z:O-_e[at][1]*.16})})}}let $=new Fi(.13,10,8),k=new dn($,new je({color:16777215}),W.length),ot=new de,J=new Kt;W.forEach((H,et)=>{ot.makeTranslation(H.x,H.y,H.z),k.setMatrixAt(et,ot),k.setColorAt(et,J.set(2236962))}),i.add(k);let it={R:[[.25,.03,.03],[2.2,.1,.05]],Y:[[.25,.18,.02],[2.2,1.4,.05]],G:[[.03,.2,.08],[.1,2.2,.6]]},st=-1;a.updateLights=H=>{if(Math.abs(H-st)<.1)return;st=H;let et={};W.forEach((R,pt)=>{let at=R.ix*100+R.iz*10+R.axis,ht=et[at]||(et[at]=a.lightState(R.ix,R.iz,R.axis,H).s),Y=it[R.c][ht===R.c?1:0];k.setColorAt(pt,J.setRGB(Y[0],Y[1],Y[2]))}),k.instanceColor.needsUpdate=!0};let Pt=new Xe(.15,.22,2.6,6);Pt.translate(0,1.3,0);let Bt=new dr(1.8,1);Bt.translate(0,3.9,0);for(let H=0;H<(r?60:160);H++){let et=n()*Math.PI*2,R=E+8+n()*120;A.push([Math.cos(et)*R,Math.sin(et)*R,1+n()])}let K=new dn(Pt,new xe({color:5980976,roughness:1}),A.length),xt=new dn(Bt,new xe({color:16777215,roughness:.95,flatShading:!0}),A.length);xt.castShadow=!0,K.castShadow=!0;let Rt=new Qe,Gt=new U,St=new U;A.forEach((H,et)=>{let R=Math.abs(H[0])<qi+cn&&Math.abs(H[1])<qi+cn?Ne:0;Rt.setFromAxisAngle(new U(0,1,0),n()*6.28),ot.compose(St.set(H[0],R,H[1]),Rt,Gt.set(H[2],H[2]*(.85+n()*.4),H[2])),K.setMatrixAt(et,ot),xt.setMatrixAt(et,ot),xt.setColorAt(et,J.setHSL(.24+n()*.08,.45+n()*.2,.22+n()*.1))}),i.add(K,xt);let kt=new Xe(.08,.12,6,6);kt.translate(0,3,0);let me=new ke(.08,.08,1.6);me.translate(0,6,.8);let Wt=Wc([kt.toNonIndexed(),me.toNonIndexed()]),Qt=new ke(.35,.12,.7);Qt.translate(0,5.94,1.5);let jt=new tn(13,13);jt.rotateX(-Math.PI/2),jt.translate(0,.05,2.4);let nt=new dn(Wt,new xe({color:3816768,roughness:.6,metalness:.5}),T.length),dt=new xe({color:13421772,emissive:16767392,emissiveIntensity:0}),_t=new dn(Qt,dt,T.length),Ct=new je({map:t.glow,transparent:!0,depthWrite:!1,blending:Bi}),yt=new dn(jt,Ct,T.length);yt.visible=!1,nt.castShadow=!0,T.forEach((H,et)=>{let R=[Math.PI,0,-Math.PI/2,Math.PI/2][H[2]];Rt.setFromAxisAngle(new U(0,1,0),R),ot.compose(St.set(H[0],Ne,H[1]),Rt,Gt.set(1,1,1)),nt.setMatrixAt(et,ot),_t.setMatrixAt(et,ot),yt.setMatrixAt(et,ot)}),i.add(nt,_t,yt);let Yt=t.facades.map((H,et)=>new xe({map:H,emissiveMap:t.facadeLights[et],emissive:16777215,emissiveIntensity:0,roughness:.85})),Nt=t.sidewalk.clone();Nt.needsUpdate=!0;let ne={walk:new xe({map:Nt,roughness:.95}),grass:new xe({map:t.grass,roughness:1}),wall:new xe({color:10262156,roughness:.9}),roof:new xe({color:5592922,roughness:.95}),white:new xe({color:15329762,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),pole:new xe({color:4540492,roughness:.5,metalness:.6}),housing:new xe({color:1842463,roughness:.6}),sign:new xe({color:2056127,roughness:.5})};Yt.forEach((H,et)=>{ne["f"+et]=H});for(let H of Object.keys(o)){let et=o[H];(H==="walk"||H==="grass"||H==="wall")&&(et=et.map(at=>Yc(at,4,4)));let R=Wc(et.map(at=>at.index?at.toNonIndexed():at)),pt=new ae(R,ne[H]);pt.receiveShadow=!0,pt.castShadow=H[0]==="f"||H==="wall"||H==="roof"||H==="pole"||H==="housing",i.add(pt)}return a.facadeMats=Yt,a.reserveSlot=null,a.placeParked=(H,et)=>{let R=[];for(let pt of a.slots)H&&H.has(pt)||pt.occupied&&R.push({x:pt.x,z:pt.z,h:pt.heading,ref:pt});for(let pt of a.bays)et&&et.has(pt)||pt.occupied&&R.push({x:pt.x,z:pt.z,h:pt.heading,ref:pt});return a.parked=R,R},a.cars=null,a.finalize=H=>{let et=a.parked||[];a.cars=new Ko(i,et.length+H,t.beam);for(let R of et){let pt=a.cars.add();a.cars.setColor(pt,As[n()*As.length|0]),a.cars.set(pt,R.x+(n()-.5)*.2,a.groundHeight(R.x,R.z)>0?Ne:0,R.z,R.h+(n()-.5)*.04,0,0,null);let at=qt.CAR_HL,ht=qt.CAR_HW,Y=Math.abs(Math.cos(R.h))>.5;h(R.x-(Y?ht:at),R.x+(Y?ht:at),R.z-(Y?at:ht),R.z+(Y?at:ht),"car")}a.cars.flush()},a.locate=(H,et)=>{if(Math.abs(H)>qi||Math.abs(et)>qi)return{type:"outside"};let R=(H+qc)/Rd,pt=(et+qc)/Rd,at=Math.round(R),ht=Math.round(pt),Y=Math.abs(et-le(ht))<En,Dt=Math.abs(H-le(at))<En;if(Y&&Dt)return{type:"junction",ix:at,iz:ht};if(Y)return{type:"road",axis:0,ri:ht,rc:le(ht),si:fe(Math.floor(R),0,ln-1)};if(Dt)return{type:"road",axis:1,ri:at,rc:le(at),si:fe(Math.floor(pt),0,ln-1)};let vt=fe(Math.floor(R),0,ln-1),Lt=fe(Math.floor(pt),0,ln-1);return{type:"block",block:a.blocks[vt*ln+Lt]}},a.groundHeight=(H,et)=>{let R=a.locate(H,et);return R.type==="outside"?Ne:R.type==="block"?R.block.type==="lot"?0:Ne:0},a.setNight=H=>{a.night=H;for(let et of Yt)et.emissiveIntensity=H?1:0;dt.emissiveIntensity=H?2.5:0,yt.visible=H,a.cars&&a.cars.setNight(H)},a}var u_=9.81,jo=[[0,60],[800,95],[1500,118],[2500,136],[4e3,150],[5200,146],[6e3,132],[6800,110]];function Id(i){for(let t=1;t<jo.length;t++)if(i<=jo[t][0]){let e=jo[t-1],n=jo[t];return Wn(e[1],n[1],(i-e[0])/(n[0]-e[0]))}return 100}var tl=class{constructor(){this.m=1250,this.I=1950,this.a=1.15,this.b=1.45,this.L=2.6,this.hcg=.55,this.Cf=72e3,this.Cr=82e3,this.mu=1,this.R=.31,this.gears=[3.45,2.05,1.38,1.03,.82,.68],this.final=3.9,this.revRatio=3.3,this.maxSteer=.53,this.idle=800,this.redline=6500,this.tank=45,this.reset(0,0,0)}reset(t,e,n){this.x=t,this.z=e,this.h=n,this.vx=0,this.vy=0,this.r=0,this.ax=0,this.ay=0,this.steer=0,this.rpm=this.idle,this.gear=1,this.selector="P",this.shiftTimer=0,this.fuel=this.tank*.8,this.fuelUsed=0,this.odo=0,this.slipF=0,this.slipR=0,this.wheelSpin=0,this.damage=0,this.engineOn=!0,this.inp={throttle:0,brake:0,steer:0,handbrake:!1}}get speed(){return Math.hypot(this.vx,this.vy)}select(t){if(t===this.selector)return null;let e=this.vx;return t==="R"&&e>1||t==="D"&&e<-1?"Stop the car before changing direction":t==="P"&&Math.abs(e)>.8?"Stop the car before selecting P":(this.selector=t,t==="D"&&(this.gear=1),this.shiftTimer=.25,null)}step(t){let e=this.inp,n=this.m,s=this.a,r=this.b,a=this.L,o=this.fuel>0?e.throttle:0,l=Math.abs(this.vx),c=e.steer*this.maxSteer*(1-.55*Vc(8,40,l)),h=2.2;this.steer+=fe(c-this.steer,-h*t,h*t);let d=this.steer,u=this.selector,f=0;u==="D"?f=this.gears[this.gear-1]*this.final:u==="R"&&(f=-this.revRatio*this.final);let p=this.vx/this.R*60/(2*Math.PI),y=0,m=0;if(this.shiftTimer>0&&(this.shiftTimer-=t),f!==0){let Y=Math.abs(p*f),Dt=this.idle+o*2100,vt=(u==="R"||this.gear===1)&&Y<Dt,Lt=vt?Math.max(Y,Dt):Math.max(Y,this.idle);this.rpm=Wn(this.rpm,Lt,fe(t*8,0,1)),vt&&(m=fe(1-Y/this.rpm,0,1));let w=Id(this.rpm)*o;(this.rpm>this.redline||u==="R"&&this.rpm>3e3)&&(w=0),this.shiftTimer>0&&(w*=.3);let v=1+1.1*m;if(y=w*v*f*.9/this.R,o<.05){let O=Math.sign(f);y+=O*1e3*fe(1-this.vx*O/2.2,0,1),y-=Math.sign(this.vx)*(this.rpm>1200?30*(this.rpm/3e3)*Math.abs(f)/this.R:0)}if(u==="D"&&this.shiftTimer<=0){let O=2300+o*3600,rt=1150+o*1700;if(this.rpm>O&&this.gear<this.gears.length&&!vt)this.gear++,this.shiftTimer=.3;else if(this.gear>1){let j=Math.abs(p*this.gears[this.gear-2]*this.final);this.rpm<rt&&j<O-300&&(this.gear--,this.shiftTimer=.25)}}}else{let Y=this.idle+o*5500;this.rpm=Wn(this.rpm,Math.min(Y,this.redline),fe(t*(o>0?3:1.5),0,1))}let g=n*u_,M=n*this.ax*this.hcg/a,E=Math.max(.2*g,g*r/a-M),_=Math.max(.2*g,g*s/a+M),A=e.brake,T=!1;u==="P"&&(T=!0);let x=11500*A,b=l>.05?Math.sign(this.vx):0,N=Math.min(x*.65,this.mu*E*.98)*b,C=Math.min(x*.35,this.mu*_*.98)*b,L=Math.cos(d),z=Math.sin(d),q=this.vx,P=this.vy+s*this.r,W=q*L+P*z,$=-q*z+P*L,k=y-N,ot=this.mu*E,J=0;Math.abs(k)>ot&&(J=Math.abs(k)/ot-1,k=Math.sign(k)*ot);let it=Math.atan2($,Math.max(Math.abs(W),.6)),st=-this.Cf*it,Pt=Math.sqrt(Math.max(0,ot*ot-k*k));Math.abs(st)>Pt&&(st=Math.sign(st)*Pt),this.slipF=Math.abs(it);let Bt=this.vy-r*this.r,K,xt,Rt=this.mu*_;if(e.handbrake&&Math.hypot(this.vx,Bt)>.3){let Y=Math.hypot(this.vx,Bt),Dt=.75*Rt;K=-this.vx/Y*Dt,xt=-Bt/Y*Dt,this.slipR=1}else{K=-C;let Y=Math.atan2(Bt,Math.max(l,.6));xt=-this.Cr*Y;let Dt=Math.sqrt(Math.max(0,Rt*Rt-K*K));Math.abs(xt)>Dt&&(xt=Math.sign(xt)*Dt),this.slipR=Math.abs(Y)}this.wheelSpin=J;let Gt=k*L-st*z,St=k*z+st*L,kt=Math.hypot(this.vx,this.vy),me=.42,Wt=160*fe(this.vx/.4,-1,1),Qt=Gt+K-me*this.vx*kt-Wt,jt=St+xt-me*this.vy*kt,nt=s*St-r*xt;this.ax=Qt/n,this.ay=jt/n;let dt=this.vx+(Qt/n+this.vy*this.r)*t,_t=this.vy+(jt/n-this.vx*this.r)*t,Ct=this.r+nt/this.I*t;(A>.05&&Math.abs(dt)<.35&&Math.abs(y)<x||T&&Math.abs(dt)<.8||e.handbrake&&Math.abs(dt)<.5&&Math.abs(y)<3e3)&&(dt=0,_t*=.5,Ct*=.5),A>.05&&Math.sign(dt)!==Math.sign(this.vx)&&this.vx!==0&&(dt=0);let Yt=Vc(1,4,Math.abs(dt)),Nt=dt*Math.tan(d)/a,ne=Nt*r;this.r=Wn(Nt,Ct,Yt),this.vy=Wn(ne,_t,Yt),this.vx=dt;let H=Math.sin(this.h),et=Math.cos(this.h),R=H*this.vx+et*this.vy,pt=et*this.vx-H*this.vy;this.x+=R*t,this.z+=pt*t,this.h+=this.r*t,this.odo+=Math.abs(this.vx)*t;let ht=22e-5+Math.max(0,Id(this.rpm)*o*(this.rpm*2*Math.PI/60))/(.26*342e5);this.fuel=Math.max(0,this.fuel-ht*t),this.fuelUsed+=ht*t}worldVel(){let t=Math.sin(this.h),e=Math.cos(this.h);return[t*this.vx+e*this.vy,e*this.vx-t*this.vy]}setWorldVel(t,e){let n=Math.sin(this.h),s=Math.cos(this.h);this.vx=t*n+e*s,this.vy=t*s-e*n}};function zr(i,t,e,n,s){let r=Math.sin(e),a=Math.cos(e);return{cx:i,cz:t,ax:[[r,a],[a,-r]],ext:[n,s]}}function Dd(i){return{cx:(i.minX+i.maxX)/2,cz:(i.minZ+i.maxZ)/2,ax:[[1,0],[0,1]],ext:[(i.maxX-i.minX)/2,(i.maxZ-i.minZ)/2]}}function Pd(i){let t=[];for(let[e,n]of[[1,1],[1,-1],[-1,-1],[-1,1]])t.push([i.cx+i.ax[0][0]*i.ext[0]*e+i.ax[1][0]*i.ext[1]*n,i.cz+i.ax[0][1]*i.ext[0]*e+i.ax[1][1]*i.ext[1]*n]);return t}function Ld(i,t){let e=t[0]-i.cx,n=t[1]-i.cz;for(let s=0;s<2;s++)if(Math.abs(e*i.ax[s][0]+n*i.ax[s][1])>i.ext[s]+.001)return!1;return!0}function Zc(i,t){let e=i.cx-t.cx,n=i.cz-t.cz,s=1/0,r=0,a=0,o=[i.ax[0],i.ax[1],t.ax[0],t.ax[1]];for(let d of o){let u=i.ext[0]*Math.abs(i.ax[0][0]*d[0]+i.ax[0][1]*d[1])+i.ext[1]*Math.abs(i.ax[1][0]*d[0]+i.ax[1][1]*d[1]),f=t.ext[0]*Math.abs(t.ax[0][0]*d[0]+t.ax[0][1]*d[1])+t.ext[1]*Math.abs(t.ax[1][0]*d[0]+t.ax[1][1]*d[1]),p=e*d[0]+n*d[1],y=u+f-Math.abs(p);if(y<=0)return null;if(y<s){s=y;let m=p>=0?1:-1;r=d[0]*m,a=d[1]*m}}let l=0,c=0,h=0;for(let d of Pd(i))Ld(t,d)&&(l+=d[0],c+=d[1],h++);for(let d of Pd(t))Ld(i,d)&&(l+=d[0],c+=d[1],h++);return h?(l/=h,c/=h):(l=(i.cx+t.cx)/2,c=(i.cz+t.cz)/2),{depth:s,nx:r,nz:a,px:l,pz:c}}function Jc(i,t,e,n){let s=t-i.cx,r=e-i.cz,a=s*i.ax[0][0]+r*i.ax[0][1],o=s*i.ax[1][0]+r*i.ax[1][1],l=Math.max(-i.ext[0],Math.min(i.ext[0],a)),c=Math.max(-i.ext[1],Math.min(i.ext[1],o)),h=i.cx+i.ax[0][0]*l+i.ax[1][0]*c,d=i.cz+i.ax[0][1]*l+i.ax[1][1]*c,u=h-t,f=d-e,p=Math.hypot(u,f);return p>=n?null:(p<1e-4&&(u=-s,f=-r,p=Math.hypot(u,f)||1),{depth:n-p,nx:u/p,nz:f/p,px:h,pz:d})}function el(i,t,e=.25){i.x+=t.nx*t.depth,i.z+=t.nz*t.depth;let[n,s]=i.worldVel(),r=t.px-i.x,a=t.pz-i.z,o=n+i.r*a,l=s-i.r*r,c=o*t.nx+l*t.nz;if(c>=0)return 0;let h=a*t.nx-r*t.nz,d=-(1+e)*c/(1/i.m+h*h/i.I),u=n+d*t.nx/i.m,f=s+d*t.nz/i.m;i.r+=d*h/i.I;let p=-t.nz,y=t.nx,m=o*p+l*y,g=a*p-r*y,M=-m/(1/i.m+g*g/i.I),E=.35*d;return M=Math.max(-E,Math.min(E,M)),u+=M*p/i.m,f+=M*y/i.m,i.r+=M*g/i.I,i.r*=.85,i.setWorldVel(u,f),-c}var{N:nl,ROAD_HALF:Un,STOP_C:Nd}=qt;function d_(i,t,e,n){let s=1-n;return[s*s*i[0]+2*s*n*t[0]+n*n*e[0],s*s*i[1]+2*s*n*t[1]+n*n*e[1]]}var il=class{constructor(t,e,n,s){this.W=t,this.rand=n,this.side=s,this.cars=[],this.lo=s*qt.LANE_OFF,this.count=e}validDirs(t,e,n){let s=[];for(let r=0;r<4;r++){if(n!==void 0&&r===(n+2)%4)continue;let a=t+_e[r][0],o=e+_e[r][1];a>=0&&a<=nl&&o>=0&&o<=nl&&s.push(r)}return s}makeLeg(t,e,n,s){let r=e+_e[s][0],a=n+_e[s][1],o=this.validDirs(r,a,s),l=o[this.rand()*o.length|0];o.includes(s)&&this.rand()<.35&&(l=s);let c=this.lo,h=[le(e),le(n)],d=[le(r),le(a)],u=si(s),f=si(l),p=_e[s],y=_e[l],m=[];m.push([h[0]+p[0]*Un+u[0]*c,h[1]+p[1]*Un+u[1]*c]),m.push([d[0]-p[0]*Nd+u[0]*c,d[1]-p[1]*Nd+u[1]*c]);let g=[d[0]-p[0]*Un+u[0]*c,d[1]-p[1]*Un+u[1]*c];m.push(g);let M=[d[0]+y[0]*Un+f[0]*c,d[1]+y[1]*Un+f[1]*c];if(l!==s){let A=[d[0]+c*(u[0]+f[0]),d[1]+c*(u[1]+f[1])];for(let T=1;T<=10;T++)m.push(d_(g,A,M,T/10))}else m.push(M);let E=[0];for(let A=1;A<m.length;A++)E.push(E[A-1]+Math.hypot(m[A][0]-m[A-1][0],m[A][1]-m[A-1][1]));let _=p[0]*y[1]-p[1]*y[0];t.leg={pts:m,cum:E,len:E[E.length-1],stopS:E[1],entryS:E[2],bx:r,bz:a,d:s,d2:l,axis:s%2,turn:l===s?0:_<0?-1:1},t.committed=!1}posAt(t,e){let{pts:n,cum:s}=t;e=fe(e,0,t.len);let r=1;for(;r<s.length-1&&s[r]<e;)r++;let a=s[r]-s[r-1]||1,o=(e-s[r-1])/a;return[n[r-1][0]+(n[r][0]-n[r-1][0])*o,n[r-1][1]+(n[r][1]-n[r-1][1])*o]}spawn(t,e=35){for(let n=0;n<60;n++){let s=this.rand()*(nl+1)|0,r=this.rand()*(nl+1)|0,a=this.validDirs(s,r),o=a[this.rand()*a.length|0],l={v:0,cruise:9.5+this.rand()*4,stun:0,wait:0,ghost:0,blink:0,brake:!1,steer:0,spin:0};this.makeLeg(l,s,r,o),l.s=this.rand()*(l.leg.stopS-4);let c=this.posAt(l.leg,l.s);if(!(t&&Math.hypot(c[0]-t.x,c[1]-t.z)<e)&&!this.cars.some(h=>Math.hypot(h.x-c[0],h.z-c[1])<12))return l.x=c[0],l.z=c[1],l.h=qo(o),l.v=l.cruise*.6,l.idx=this.W.cars.add(),this.W.cars.setColor(l.idx,As[this.rand()*As.length|0]),this.cars.push(l),l}return null}init(t){for(let e=0;e<this.count;e++)this.spawn(t)}oncoming(t,e){let n=t.leg,s=[le(n.bx),le(n.bz)],r=(n.d+2)%4,a=(o,l,c,h)=>{let d=o-s[0],u=l-s[1],f=Math.abs(d)<Un+1&&Math.abs(u)<Un+1,p=_e[r],y=[Math.sin(c),Math.cos(c)],m=y[0]*p[0]+y[1]*p[1]>.7,g=-(d*p[0]+u*p[1]),M=Math.abs(d*p[1]-u*p[0]);return f&&h>.5&&m?!0:m&&g>Un-1&&g<Un+30&&M<Un&&h>1};for(let o of this.cars)if(o!==t&&a(o.x,o.z,o.h,o.v))return!0;return!!(e&&a(e.x,e.z,e.h,e.vx))}update(t,e,n,s){let r=this.W;for(let a of this.cars){let o=a.leg,l=a.cruise;if(a.stun>0&&(a.stun-=t,l=0),o.turn!==0){let T=o.entryS-a.s;T<28&&(l=Math.min(l,5.2+Math.max(0,T)*.25))}let c=o.stopS-a.s;if(a.s<o.entryS&&!a.committed){let T=r.lightState(o.bx,o.bz,o.axis,e),x=a.v*a.v/8,b=T.s==="R"||T.s==="Y"&&c>x+1.5;T.s==="G"&&T.remain<1&&c>25&&(b=!1),c<-.8&&(a.committed=!0,b=!1),b?l=Math.min(l,Math.sqrt(Math.max(0,2*3.2*(c-.3)))):c<2&&(a.committed=!0)}if((this.side===1?o.turn===-1:o.turn===1)&&a.s<o.entryS+3&&a.s>o.stopS-12&&this.oncoming(a,n)){let T=o.entryS+1.5;l=Math.min(l,Math.sqrt(Math.max(0,2*3.5*(T-a.s-.2))))}let d=Math.sin(a.h),u=Math.cos(a.h),f=7+a.v*2.4,p=!1,y=(T,x,b)=>{let N=T-a.x,C=x-a.z,L=N*d+C*u;if(L<=0||L>f||Math.abs(N*u-C*d)>(b?2.4:2.1))return;let q=L-4.6,P=Math.max(0,(q-1.8)/1.1);P<l&&(l=P,p=!0)};if(a.ghost<=0)for(let T of this.cars)T!==a&&y(T.x,T.z,!1);n&&y(n.x,n.z,!0),p&&a.v<.3?(a.wait+=t,a.wait>6&&(a.ghost=2.5,a.wait=0)):a.wait=0,a.ghost>0&&(a.ghost-=t);let m=l>a.v?Math.min(2.6,(l-a.v)*1.6):Math.max(-8,(l-a.v)*3.5);if(a.v=Math.max(0,a.v+m*t),a.brake=m<-.6||a.v<.2,a.s+=a.v*t,a.s>=o.len){let T=a.s-o.len;this.makeLeg(a,o.bx,o.bz,o.d2),a.s=T}let g=this.posAt(a.leg,a.s),M=this.posAt(a.leg,a.s+1.3),E=this.posAt(a.leg,a.s-1.3),_=Math.atan2(M[0]-E[0],M[1]-E[1]);a.steer=fe(Fr(_-a.h)*6,-.5,.5),a.x=g[0],a.z=g[1],a.h=_,a.spin+=a.v/.31*t;let A=a.leg;a.blink=A.turn!==0&&a.s>A.stopS-30?A.turn:0}}render(t,e){let n=t*1.5%1<.5;for(let s of this.cars){let r=s.stun>0;this.W.cars.set(s.idx,s.x,0,s.z,s.h,s.steer,s.spin,{head:e,brake:s.brake,reverse:!1,left:n&&(r||s.blink===-1),right:n&&(r||s.blink===1)})}this.W.cars.flush()}};var Ud=[3104138,11022898,14730049,4033101,15658734,2236962,9064355,14251819,7317724],Fd=[2042436,2829099,5917242,3886955,7829367],Od=[15843965,14724201,13010498,9262372,16767916],sl=class{constructor(t,e,n,s){this.W=e,this.list=[];let r=Ad(),a=l=>{let c=new dn(l,new xe({color:16777215,roughness:.8}),400);return c.castShadow=!0,c.count=0,c.frustumCulled=!1,c.instanceMatrix.setUsage(Ir),t.add(c),c};this.body=a(r.body),this.legs=a(r.legs),this.head=a(r.head);let o=new Kt;for(let l of e.peds){let c=l.block,h=2.1,d=[c.x0+h,c.x1-h,c.z0+h,c.z1-h],u=d[1]-d[0],f=d[3]-d[2],p=2*(u+f);for(let y=0;y<s;y++){let m=this.list.length;if(m>=400)break;this.list.push({rect:d,w:u,h:f,per:p,s:n()*p,dir:n()<.5?1:-1,speed:1.1+n()*.6,x:0,z:0,hd:0,phase:n()*6,stop:0,down:!1}),this.body.setColorAt(m,o.set(Ud[n()*Ud.length|0])),this.legs.setColorAt(m,o.set(Fd[n()*Fd.length|0])),this.head.setColorAt(m,o.set(Od[n()*Od.length|0]))}}for(let l of[this.body,this.legs,this.head])l.count=this.list.length,l.instanceColor&&(l.instanceColor.needsUpdate=!0);this.m=new de,this.q=new Qe,this.e=new xn,this.v=new U,this.sc=new U(1,1,1)}posOn(t,e){let{rect:n,w:s,h:r,per:a}=t;return e=(e%a+a)%a,e<s?[n[0]+e,n[2],0]:(e-=s,e<r?[n[1],n[2]+e,1]:(e-=r,e<s?[n[1]-e,n[3],2]:(e-=s,[n[0],n[3]-e,3])))}update(t,e){let n=Math.sin(e.h),s=Math.cos(e.h);this.list.forEach((r,a)=>{if(!r.down){let c=r.x-e.x,h=r.z-e.z,d=Math.hypot(c,h),u=c*n+h*s;d<6&&(u>0||d<3.2)&&Math.abs(e.vx)>.3&&(r.stop=1.5),r.stop>0?r.stop-=t:(r.s+=r.dir*r.speed*t,r.phase+=t*r.speed*5);let f=this.posOn(r,r.s),p=this.posOn(r,r.s+r.dir*.5);r.x=f[0],r.z=f[1],r.hd=Math.atan2(p[0]-f[0],p[1]-f[1])}let o=r.down?0:Math.abs(Math.sin(r.phase))*.04;this.e.set(r.down?Math.PI/2:0,r.hd,0,"YXZ"),this.q.setFromEuler(this.e),this.m.compose(this.v.set(r.x,.15+o+(r.down?.2:0),r.z),this.q,this.sc),this.body.setMatrixAt(a,this.m),this.head.setMatrixAt(a,this.m);let l=r.down?1:1-Math.abs(Math.sin(r.phase))*.06;this.m.compose(this.v.set(r.x,.15+(r.down?.2:0),r.z),this.q,this.sc.set(1,l,1)),this.legs.setMatrixAt(a,this.m),this.sc.set(1,1,1)});for(let r of[this.body,this.legs,this.head])r.instanceMatrix.needsUpdate=!0}};var rl=class{constructor(t){this.g=t,this.reset()}reset(){this.score=100,this.log=[],this.prev={type:"none"},this.entry=null,this.speedT=0,this.wrongT=0,this.walkT=0,this.last={},this.indOn={L:-99,R:-99},this.lastHit=-99}penalty(t,e,n,s=0){let r=this.g.t;s&&this.last[t]!==void 0&&r-this.last[t]<s||(this.last[t]=r,this.score-=n,this.log.push({text:e,pts:n,t:r}),this.g.onPenalty(e,n))}collision(t,e){let n=this.g.t;if(!(n-this.lastHit<1)){if(this.lastHit=n,e<1.2){this.penalty("touch","Touched an obstacle",2);return}t==="ai"?this.penalty("crash","Collision with a vehicle",15):t==="car"?this.penalty("crash","Hit a parked car",10):this.penalty("crash","Crashed into an obstacle",10)}}update(t){let e=this.g,n=e.car,s=e.world,r=e.t;(e.indicator==="L"||e.hazard)&&(this.indOn.L=r),(e.indicator==="R"||e.hazard)&&(this.indOn.R=r);let a=s.locate(n.x,n.z),[o,l]=n.worldVel(),c=Math.hypot(o,l),h=Math.abs(n.vx)*3.6;if(h>qt.SPEED_LIMIT+4?(this.speedT+=t,this.speedT>2&&this.penalty("speed",`Speeding (${Math.round(h)} km/h in a ${qt.SPEED_LIMIT} zone)`,5,6)):this.speedT=0,a.type==="junction"&&this.prev.type!=="junction")if(c>.3){let u=kc(o,l);this.entry={ix:a.ix,iz:a.iz,d:u,t:r};let f=s.lightState(a.ix,a.iz,u%2,r);f.s==="R"&&f.since>1&&n.vx>0&&this.penalty("red"+a.ix+a.iz,"Ran a red light",20,5)}else this.entry=null;if(a.type!=="junction"&&this.prev.type==="junction"&&this.entry){let u=le(this.entry.ix),f=le(this.entry.iz),p=kc(n.x-u,n.z-f),y=this.entry.d;if(p!==y&&p!==(y+2)%4&&a.type==="road"){let g=_e[y][0]*_e[p][1]-_e[y][1]*_e[p][0]<0?"L":"R";r-this.indOn[g]>6&&this.penalty("signal",`Turned ${g==="L"?"left":"right"} without signalling`,5),e.cancelIndicator()}this.entry=null}if(a.type==="road"&&c>2&&n.vx>0){let u=a.axis===0?o:l,f=a.axis===0?u>0?0:2:u>0?1:3,p=si(f);(a.axis===0?(n.z-a.rc)*p[1]:(n.x-a.rc)*p[0])*s.side<-.6?(this.wrongT+=t,this.wrongT>1.2&&this.penalty("wrong","Driving on the wrong side of the road",15,6)):this.wrongT=0}else this.wrongT=0;(a.type==="block"&&a.block.type!=="lot"||a.type==="outside")&&c>.5?(this.walkT+=t,this.walkT>.4&&this.penalty("walk","Driving on the pavement",10,5)):this.walkT=0,this.prev=a}};function $c(i,t,e,n){let s=si(e),r=Re.side*qt.LANE_OFF;return{x:le(i)+_e[e][0]*n+s[0]*r,z:le(t)+_e[e][1]*n+s[1]*r,h:qo(e),ix:i,iz:t,d:e}}var bi=(i,t,e,n,s,r=!1)=>({type:"reach",ix:i,iz:t,d:e,dist:n,label:s,stop:r}),Ei=[{id:"lesson",name:"First Lesson",icon:"\u{1F697}",brief:"Get a feel for the car. The car starts in P \u2014 select D, release the brake and drive to the marker. Stop at red lights and keep to your lane.",traffic:10,pedsPerBlock:2,time:240,start:[1,2,0,16],objectives:[bi(3,2,1,40,"Drive to the marker")]},{id:"kerb",name:"Kerbside",icon:"\u{1F17F}\uFE0F",brief:"Parallel park in the green bay between the two parked cars. Use reverse (R), go slowly and line up with the kerb.",traffic:6,pedsPerBlock:2,time:180,start:[2,3,0,12],objectives:[{type:"slot",axis:0,ri:3,si:2,k:3,label:"Parallel park in the green bay"}]},{id:"bay",name:"Bay Day",icon:"\u{1F17F}\uFE0F",brief:"Drive into the car park and REVERSE into the green bay, so the car faces out. The entrance is on this street.",traffic:8,pedsPerBlock:2,time:210,start:[3,1,0,14],objectives:[{type:"bay",row:1,k:9,label:"Reverse into the green bay"}]},{id:"eco",name:"Eco Run",icon:"\u26FD",brief:"Reach the destination using as little fuel as possible. Gentle on the accelerator, plan your stops. Budget: 0.07 litres.",traffic:12,pedsPerBlock:2,time:300,start:[0,0,1,16],fuelBudget:.07,objectives:[bi(4,3,1,40,"Reach the destination")]},{id:"rush",name:"Rush Hour",icon:"\u{1F6A6}",brief:"The streets are packed. Get across town in time without breaking the rules.",traffic:42,pedsPerBlock:4,time:170,start:[5,0,2,16],objectives:[bi(0,4,0,40,"Get across town")]},{id:"night",name:"Night Shift",icon:"\u{1F319}",brief:"It is dark. Turn your headlights on (L) and visit both markers in order.",traffic:14,pedsPerBlock:2,time:300,night:!0,start:[2,5,3,16],objectives:[bi(1,2,0,40,"Checkpoint 1 of 2"),bi(4,1,1,40,"Checkpoint 2 of 2")]},{id:"exam",name:"Driving Exam",icon:"\u{1F393}",brief:"The real test. Follow the route, signal every turn, and finish with a parallel park. Score below 70 and you fail.",traffic:18,pedsPerBlock:3,time:420,start:[0,2,0,16],passMark:70,objectives:[bi(2,2,1,40,"Route: checkpoint 1 of 3"),bi(3,4,0,40,"Route: checkpoint 2 of 3"),bi(4,2,3,40,"Route: checkpoint 3 of 3"),{type:"slot",axis:0,ri:1,si:2,k:3,label:"Finish with a parallel park"}]},{id:"free",name:"Free Drive",icon:"\u{1F306}",brief:"No timer, no targets. Explore the city. Press Esc / \u275A\u275A to change missions.",traffic:24,pedsPerBlock:3,time:0,start:[2,2,1,16],free:!0,objectives:[]}];function Bd(i,t){if(t.type==="slot"){let s=i.side*(t.axis===0?1:-1),r=i.slots.filter(o=>o.axis===t.axis&&o.ri===t.ri&&o.si===t.si&&o.side===s),a=r.find(o=>o.k===t.k);for(let o of r)Math.abs(o.k-t.k)===1&&(o.occupied=!0);return a.occupied=!1,{ref:a,x:a.x,z:a.z,h:a.heading,len:a.len,wid:a.wid,facing:!0,kind:"slot"}}let e=i.bays.filter(s=>s.row===t.row),n=e.find(s=>s.k===t.k);for(let s of e)Math.abs(s.k-t.k)===1&&(s.occupied=!0);return n.occupied=!1,{ref:n,x:n.x,z:n.z,h:Math.PI,len:n.len,wid:n.wid,facing:!0,kind:"bay"}}function zd(i,t){let e=Math.sin(i.h),n=Math.cos(i.h),s=[Math.sin(t.h),Math.cos(t.h)],r=[Math.cos(t.h),-Math.sin(t.h)],a=!0;for(let[l,c]of[[1,1],[1,-1],[-1,1],[-1,-1]]){let h=i.x+e*qt.CAR_HL*l+n*qt.CAR_HW*c,d=i.z+n*qt.CAR_HL*l-e*qt.CAR_HW*c,u=h-t.x,f=d-t.z;(Math.abs(u*s[0]+f*s[1])>t.len/2+.12||Math.abs(u*r[0]+f*r[1])>t.wid/2+.12)&&(a=!1)}let o=Math.abs(Fr(i.h-t.h));return t.facing||(o=Math.min(o,Math.abs(Fr(i.h-t.h-Math.PI)))),{inside:a,aligned:o<.22,ang:o}}var al=class{constructor(){this.ctx=null,this.enabled=!0}start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.enabled?.7:0,this.master.connect(e.destination);let n=e.createBuffer(1,e.sampleRate*2,e.sampleRate),s=n.getChannelData(0);for(let d=0;d<s.length;d++)s[d]=Math.random()*2-1;this.noiseBuf=n;let r=()=>{let d=e.createBufferSource();return d.buffer=n,d.loop=!0,d.start(),d};this.eFilter=e.createBiquadFilter(),this.eFilter.type="lowpass",this.eFilter.frequency.value=400,this.eFilter.Q.value=2,this.eGain=e.createGain(),this.eGain.gain.value=0,this.o1=e.createOscillator(),this.o1.type="sawtooth",this.o2=e.createOscillator(),this.o2.type="square",this.o3=e.createOscillator(),this.o3.type="triangle";let a=e.createGain();a.gain.value=.35;let o=e.createGain();o.gain.value=.6,this.o1.connect(this.eFilter),this.o2.connect(a).connect(this.eFilter),this.o3.connect(o).connect(this.eFilter),this.eFilter.connect(this.eGain).connect(this.master);for(let d of[this.o1,this.o2,this.o3])d.start();let l=r();this.sqFilter=e.createBiquadFilter(),this.sqFilter.type="bandpass",this.sqFilter.frequency.value=1500,this.sqFilter.Q.value=6,this.sqGain=e.createGain(),this.sqGain.gain.value=0,l.connect(this.sqFilter).connect(this.sqGain).connect(this.master);let c=r();this.rnFilter=e.createBiquadFilter(),this.rnFilter.type="lowpass",this.rnFilter.frequency.value=500,this.rnGain=e.createGain(),this.rnGain.gain.value=0,c.connect(this.rnFilter).connect(this.rnGain).connect(this.master),this.hGain=e.createGain(),this.hGain.gain.value=0;let h=e.createBiquadFilter();h.type="lowpass",h.frequency.value=1800;for(let d of[415,520]){let u=e.createOscillator();u.type="square",u.frequency.value=d,u.connect(h),u.start()}h.connect(this.hGain).connect(this.master)}setEnabled(t){this.enabled=t,this.master&&(this.master.gain.value=t?.7:0)}update(t,e,n,s,r){if(!this.ctx)return;let a=this.ctx.currentTime,o=t.rpm,l=o/60*2;this.o1.frequency.setTargetAtTime(l,a,.03),this.o2.frequency.setTargetAtTime(l*.5,a,.03),this.o3.frequency.setTargetAtTime(l*.25,a,.03),this.eFilter.frequency.setTargetAtTime(250+e*1400+o*.12,a,.05),this.eGain.gain.setTargetAtTime(r?.05+e*.07+o/9e4:0,a,.05);let c=Math.abs(t.vx);this.sqGain.gain.setTargetAtTime(r&&c>3?Math.min(.25,Math.max(0,n-.1)*.9):0,a,.05),this.rnGain.gain.setTargetAtTime(r?Math.min(.18,c*.008):0,a,.1),this.rnFilter.frequency.setTargetAtTime(300+c*25,a,.1),this.hGain.gain.setTargetAtTime(r&&s?.12:0,a,.01)}blip(t=880,e=.06,n=.15,s="square"){if(!this.ctx||!this.enabled)return;let r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type=s,r.frequency.value=t,a.gain.value=n;let o=this.ctx.currentTime;a.gain.setValueAtTime(n,o),a.gain.exponentialRampToValueAtTime(.001,o+e),r.connect(a).connect(this.master),r.start(o),r.stop(o+e+.02)}tick(t){this.blip(t?1900:1300,.025,.08,"square")}crash(t){if(!this.ctx||!this.enabled)return;let e=this.ctx.createBufferSource();e.buffer=this.noiseBuf;let n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=600+t*120;let s=this.ctx.createGain(),r=this.ctx.currentTime,a=Math.min(.9,.15+t*.08);s.gain.setValueAtTime(a,r),s.gain.exponentialRampToValueAtTime(.001,r+.5),e.connect(n).connect(s).connect(this.master),e.start(r),e.stop(r+.55)}};var ol=class{constructor(){this.keys=new Set,this.out={throttle:0,brake:0,steer:0,handbrake:!1,horn:!1},this.kThrottle=0,this.kBrake=0,this.kSteer=0,this.touch={steer:0,gas:0,brake:0,hand:!1,horn:!1,active:!1},this.actions=[],window.addEventListener("keydown",t=>{if(t.repeat)return;let e=t.key.toLowerCase();this.keys.add(e);let n={1:"P",2:"R",3:"N",4:"D",q:"indL",e:"indR",z:"hazard",l:"lights",c:"camera",escape:"pause",p:"pause"};n[e]&&this.actions.push(n[e]),["arrowup","arrowdown","arrowleft","arrowright"," "].includes(e)&&t.preventDefault()}),window.addEventListener("keyup",t=>this.keys.delete(t.key.toLowerCase())),window.addEventListener("blur",()=>this.keys.clear())}has(...t){return t.some(e=>this.keys.has(e))}bindTouch(t){let e=t.querySelector("#wheel"),n=null,s=0,r=0,a=0,o=()=>{let u=e.getBoundingClientRect();return[u.left+u.width/2,u.top+u.height/2]},l=u=>{let f=o();return Math.atan2(u.clientX-f[0],-(u.clientY-f[1]))};e.addEventListener("pointerdown",u=>{n=u.pointerId,e.setPointerCapture(u.pointerId),s=l(u),r=a,this.touch.active=!0,u.preventDefault()}),e.addEventListener("pointermove",u=>{if(u.pointerId!==n)return;let f=l(u)-s;for(;f>Math.PI;)f-=2*Math.PI;for(;f<-Math.PI;)f+=2*Math.PI;a=fe(r+f,-Math.PI*1.25,Math.PI*1.25),s=l(u),r=a,this.touch.steer=-a/(Math.PI*1.25),e.style.transform=`rotate(${a}rad)`});let c=u=>{if(u.pointerId!==n)return;n=null;let f=a,p=performance.now(),y=()=>{if(n!==null)return;let m=Math.min(1,(performance.now()-p)/350);a=f*(1-m),this.touch.steer=-a/(Math.PI*1.25),e.style.transform=`rotate(${a}rad)`,m<1&&requestAnimationFrame(y)};y()};e.addEventListener("pointerup",c),e.addEventListener("pointercancel",c);let h=(u,f)=>{let p=t.querySelector(u),y=g=>{let M=p.getBoundingClientRect();this.touch[f]=fe(1.15-(g.clientY-M.top)/M.height*.75,.3,1)};p.addEventListener("pointerdown",g=>{p.setPointerCapture(g.pointerId),y(g),p.classList.add("down"),this.touch.active=!0,g.preventDefault()}),p.addEventListener("pointermove",g=>{this.touch[f]>0&&y(g)});let m=()=>{this.touch[f]=0,p.classList.remove("down")};p.addEventListener("pointerup",m),p.addEventListener("pointercancel",m)};h("#gas","gas"),h("#brake","brake");let d=(u,f)=>{let p=t.querySelector(u);p.addEventListener("pointerdown",m=>{this.touch[f]=!0,p.classList.add("down"),m.preventDefault()});let y=()=>{this.touch[f]=!1,p.classList.remove("down")};p.addEventListener("pointerup",y),p.addEventListener("pointercancel",y),p.addEventListener("pointerleave",y)};d("#hand","hand"),d("#horn","horn"),t.querySelectorAll("[data-action]").forEach(u=>{u.addEventListener("pointerdown",f=>{this.actions.push(u.dataset.action),f.preventDefault(),f.stopPropagation()})})}update(t){let e=this.out,n=this.has("arrowup","w"),s=this.has("arrowdown","s");this.kThrottle=n?Math.min(1,this.kThrottle+t*(this.has("shift")?.6:2.2)):Math.max(0,this.kThrottle-t*6),n&&this.has("shift")&&(this.kThrottle=Math.min(this.kThrottle,.45)),this.kBrake=s?Math.min(1,this.kBrake+t*3):Math.max(0,this.kBrake-t*8);let r=this.has("arrowleft","a"),a=this.has("arrowright","d"),o=(r?1:0)-(a?1:0),l=o===0?3.5:Math.sign(o)!==Math.sign(this.kSteer)&&this.kSteer!==0?5:1.8;this.kSteer+=fe(o-this.kSteer,-l*t,l*t);let c=null,h=navigator.getGamepads?navigator.getGamepads():[];for(let m of h)if(m&&m.connected){c=m;break}let d=0,u=0,f=0,p=!1;c&&(f=-(Math.abs(c.axes[0])>.08?c.axes[0]:0),d=c.buttons[7]?c.buttons[7].value:0,u=c.buttons[6]?c.buttons[6].value:0,p=c.buttons[0]&&c.buttons[0].pressed);let y=this.touch;return e.throttle=Math.max(this.kThrottle,y.gas,d),e.brake=Math.max(this.kBrake,y.brake,u),e.steer=fe(this.kSteer+y.steer+f,-1,1),e.handbrake=this.has(" ")||y.hand||p,e.horn=this.has("h")||y.horn,e.up=n||y.gas>0||d>.1,e.down=s||y.brake>0||u>.1,e}takeActions(){let t=this.actions;return this.actions=[],t}};var{N:f_,EDGE:ri,SIDEWALK:kr}=qt,Ce=2,ll=class{constructor(t,e){this.c=t,this.ctx=t.getContext("2d");let n=Math.ceil((ri+kr+10)*2*Ce);this.half=n/2;let s=document.createElement("canvas");s.width=s.height=n;let r=s.getContext("2d"),a=o=>this.half+o*Ce;r.fillStyle="#2c4a2a",r.fillRect(0,0,n,n),r.fillStyle="#4a4d52",r.fillRect(a(-ri),a(-ri),ri*2*Ce,ri*2*Ce);for(let o of e.blocks){let l=a(o.x0),c=a(o.z0),h=(o.x1-o.x0)*Ce,d=(o.z1-o.z0)*Ce;if(o.type==="lot"){r.fillStyle="#5b5f66",r.fillRect(l,c,h,d),r.fillStyle="#ffffff",r.font=`bold ${16*Ce}px sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText("P",l+h/2,c+d/2);continue}r.fillStyle="#8d8a83",r.fillRect(l,c,h,d),r.fillStyle=o.type==="park"?"#3f7a39":"#6b6e75",r.fillRect(l+kr*Ce,c+kr*Ce,h-2*kr*Ce,d-2*kr*Ce)}for(let o of e.statics)o.kind==="building"&&(r.fillStyle="#2f3238",r.fillRect(a(o.minX),a(o.minZ),(o.maxX-o.minX)*Ce,(o.maxZ-o.minZ)*Ce));r.strokeStyle="rgba(255,255,255,0.35)",r.lineWidth=1,r.setLineDash([6,8]);for(let o=0;o<=f_;o++){let l=a(le(o));r.beginPath(),r.moveTo(a(-ri),l),r.lineTo(a(ri),l),r.stroke(),r.beginPath(),r.moveTo(l,a(-ri)),r.lineTo(l,a(ri)),r.stroke()}this.map=s}draw(t,e,n,s,r=1.3){let a=this.ctx,o=this.c.width,l=this.c.height;if(a.clearRect(0,0,o,l),a.save(),a.beginPath(),a.arc(o/2,l/2,o/2,0,Math.PI*2),a.clip(),a.fillStyle="#1c2620",a.fillRect(0,0,o,l),a.translate(o/2,l/2),a.rotate(t.h+Math.PI),a.scale(r/Ce*Ce,r/Ce*Ce),a.translate(-t.x,-t.z),a.drawImage(this.map,-this.half/Ce,-this.half/Ce,this.map.width/Ce,this.map.height/Ce),n&&n.length>1){a.strokeStyle="#2f9bff",a.lineWidth=3.5,a.lineJoin="round",a.lineCap="round",a.beginPath(),a.moveTo(n[0][0],n[0][1]);for(let c=1;c<n.length;c++)a.lineTo(n[c][0],n[c][1]);a.stroke()}for(let c of e)a.fillStyle="#e8e8e8",a.fillRect(c.x-1.2,c.z-1.2,2.4,2.4);s&&(a.fillStyle="#35e07a",a.strokeStyle="#0b3",a.lineWidth=1,a.beginPath(),a.arc(s[0],s[1],4.5,0,Math.PI*2),a.fill(),a.stroke()),a.restore(),a.save(),a.translate(o/2,l/2),a.fillStyle="#ff7a1a",a.strokeStyle="#fff",a.lineWidth=2,a.beginPath(),a.moveTo(0,-9),a.lineTo(7,8),a.lineTo(0,4),a.lineTo(-7,8),a.closePath(),a.fill(),a.stroke(),a.restore()}};var ee=i=>document.querySelector(i),th=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;th&&document.body.classList.add("touch");var Xn=new Vo({antialias:Re.quality!=="low",powerPreference:"high-performance"});Xn.domElement.id="view";document.body.prepend(Xn.domElement);Xn.shadowMap.enabled=!0;Xn.shadowMap.type=Ka;Xn.toneMapping=Sr;Xn.toneMappingExposure=1;Xn.outputColorSpace=Ve;var Tn=new $e(60,1,.1,1200);function eh(){let i=Math.min(window.devicePixelRatio||1,Re.quality==="low"?1:1.75);Xn.setPixelRatio(i),Xn.setSize(window.innerWidth,window.innerHeight,!1),Tn.aspect=window.innerWidth/window.innerHeight,Tn.updateProjectionMatrix()}window.addEventListener("resize",eh);eh();var p_=_d(),wn=new al;wn.setEnabled(Re.sound);var Yi=new ol;Yi.bindTouch(ee("#hud"));var F=null,hn="menu",kd=["Chase","High","Cockpit","Top-down"];function m_(){let i=new Ke,t=new ae(new Xe(3,3,7,32,1,!0),new je({color:3530874,transparent:!0,opacity:.22,side:Sn,depthWrite:!1}));t.position.y=3.5;let e=new ae(new fr(2.6,3.1,40),new je({color:3530874,transparent:!0,opacity:.8,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.05,i.add(t,e),i.beam=t,i}function g_(i){let t=new Ke,e=new je({color:16765500,transparent:!0,opacity:.9,depthWrite:!1}),n=new je({color:16765500,transparent:!0,opacity:.18,depthWrite:!1}),s=.15,r=(l,c,h,d)=>{let u=new ae(new tn(l,c),e);u.rotation.x=-Math.PI/2,u.position.set(h,.05,d),t.add(u)};r(i.wid,s,0,i.len/2),r(i.wid,s,0,-i.len/2),r(s,i.len,i.wid/2,0),r(s,i.len,-i.wid/2,0);let a=new ae(new tn(i.wid,i.len),n);a.rotation.x=-Math.PI/2,a.position.y=.04,t.add(a);let o=new ae(new ir(.45,1,3),e);return o.rotation.x=Math.PI/2,o.position.set(0,.06,i.len/2-1),o.scale.set(1,1,.05),t.add(o),t.position.set(i.x,0,i.z),t.rotation.y=i.h,t.mats=[e,n],t}function x_(){let i=new xi;i.moveTo(0,1),i.lineTo(.85,0),i.lineTo(.32,0),i.lineTo(.32,-.85),i.lineTo(-.32,-.85),i.lineTo(-.32,0),i.lineTo(-.85,0),i.closePath();let t=new Ui(i,{depth:.12,bevelEnabled:!1});t.rotateX(Math.PI/2);let e=new je({color:3120127,transparent:!0,opacity:.9,depthTest:!1}),n=new ae(t,e);n.rotation.x=-.45,n.renderOrder=10;let s=new Ke;return s.add(n),s.scale.setScalar(.7),s}function __(i){i.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(e=>e.dispose())})}function v_(i){F&&__(F.scene);let t=Ei[i],e=new Js,n=!!t.night,s=n?659229:10274538;e.background=new Kt(s),e.fog=new Zs(s,n?40:140,n?260:520);let r=new mr(n?3425902:14675967,n?724242:5985350,n?.6:1.15);e.add(r);let a=new yr(n?9414360:16773596,n?.25:2.4);a.castShadow=!0;let o=Re.quality==="low"?1024:2048;a.shadow.mapSize.set(o,o);let l=a.shadow.camera;l.left=-60,l.right=60,l.top=60,l.bottom=-60,l.near=1,l.far=300,a.shadow.bias=-4e-4,a.shadow.normalBias=.03,e.add(a,a.target);let c=Cd(e,p_,{seed:4242}),h=Yo(1e3+i*77),d=t.objectives.map(_=>({..._}));for(let _ of d)_.type==="slot"||_.type==="bay"?_.P=Bd(c,_):_.p=$c(_.ix,_.iz,_.d,_.dist);c.placeParked(),c.finalize(t.traffic);let u=new tl,f=$c(...t.start);u.reset(f.x,f.z,f.h);let p=new il(c,t.traffic,h,Re.side);p.init(u);let y=new sl(e,c,h,t.pedsPerBlock),m=Td(16742938);e.add(m);let g=new _r(16774108,0,70,.55,.45,1.3);g.position.set(0,.8,2),g.target.position.set(0,0,18),m.add(g,g.target);let M=m_();e.add(M);let E=x_();e.add(E),c.setNight(n),F={mi:i,M:t,scene:e,world:c,car:u,carMesh:m,traffic:p,peds:y,head:g,sun:a,checkpoint:M,arrow:E,objs:d,t:0,timeLeft:t.time,objIdx:0,parkT:0,acc:0,spin:0,shake:0,indicator:null,hazard:!1,headlights:n,cam:Re.camera||0,camPos:new U(f.x-Math.sin(f.h)*6.8,2.6,f.z-Math.cos(f.h)*6.8),camLook:new U(f.x+Math.sin(f.h)*4,1,f.z+Math.cos(f.h)*4),route:null,routeT:0,downHeld:0,ended:!1,lastBlink:!1,smoothY:0,onPenalty:(_,A)=>{Gr(`${_}  \u2212${A}`),wn.blip(220,.18,.18,"sawtooth")},cancelIndicator:()=>{F.indicator=null}},F.rules=new rl(F),F.minimap=new ll(ee("#minimap"),c),Xd(),qd(!0),Qc()}function Xd(){let i=F.objs[F.objIdx];if(F.parkMarker&&(F.scene.remove(F.parkMarker),F.parkMarker=null),F.checkpoint.visible=!1,ee("#parkMeter").classList.add("hidden"),!i){ee("#objective").textContent=F.M.free?"Free drive \u2014 explore the city":"Done!";return}ee("#objective").textContent=i.label,i.type==="reach"?(F.checkpoint.visible=!0,F.checkpoint.position.set(i.p.x,0,i.p.z)):(F.parkMarker=g_(i.P),F.scene.add(F.parkMarker),ee("#parkMeter").classList.remove("hidden")),F.parkT=0}function y_(i){if(i.type==="reach")return{j:[i.ix,i.iz],x:i.p.x,z:i.p.z,d:i.d};if(i.type==="slot"){let e=i.P;return{j:i.axis===0?[i.si,i.ri]:[i.ri,i.si],x:e.x,z:e.z,d:i.axis===0?0:1}}let t=F.world.blocks.find(e=>e.type==="lot");return{j:[t.bi,t.bj],x:(t.x0+t.x1)/2,z:t.z0-2,d:0,bay:i.P,lot:t}}function M_(){let i=F.objs[F.objIdx];if(!i)return null;let t=F.car,e=F.world,n=y_(i),s=e.locate(t.x,t.z);if(n.lot&&s.type==="block"&&s.block===n.lot)return[[t.x,t.z],[n.bay.x,n.bay.z]];let r=n.lot?[[n.x,n.z],[n.x,n.z+6],[n.bay.x,n.bay.z-5],[n.bay.x,n.bay.z]]:[[n.x,n.z]],a=e.locate(n.x,n.z);if(s.type==="road"&&a.type==="road"&&s.axis===a.axis&&s.ri===a.ri&&s.si===a.si){let u=s.axis===0?Math.sin(t.h):Math.cos(t.h),f=s.axis===0?n.x-t.x:n.z-t.z;if(u*f>0)return[[t.x,t.z],...r]}let o;if(s.type==="junction")o=[s.ix,s.iz];else if(s.type==="road"){let u=s.axis===0?Math.sin(t.h):Math.cos(t.h),f=fe(s.si+(u>=0?1:0),0,qt.N);o=s.axis===0?[f,s.ri]:[s.ri,f]}else o=[fe(Math.round((t.x+qt.OFF)/qt.S),0,qt.N),fe(Math.round((t.z+qt.OFF)/qt.S),0,qt.N)];let l=n.j,c=[[t.x,t.z],[le(o[0]),le(o[1])]],d=Math.abs(Math.sin(t.h))>Math.abs(Math.cos(t.h))?[l[0],o[1]]:[o[0],l[1]];return(d[0]!==o[0]||d[1]!==o[1])&&c.push([le(d[0]),le(d[1])]),(d[0]!==l[0]||d[1]!==l[1])&&c.push([le(l[0]),le(l[1])]),[...c,...r]}var S_=0;function Gr(i,t=""){let e=document.createElement("div");e.className="toast "+t,e.textContent=i;let n=ee("#toasts");for(n.appendChild(e);n.children.length>3;)n.removeChild(n.firstChild);setTimeout(()=>e.remove(),3e3),S_++}var Cs={};function Ti(i,t){Cs[i]!==t&&(Cs[i]=t,ee(i).textContent=t)}function Kc(i,t,e){let n=Math.round(t*100)+e;if(Cs[i]===n)return;Cs[i]=n;let s=ee(i);s.style.setProperty("--p",`${fe(t,0,1)*100}%`),s.style.setProperty("--c",e)}function qd(i){let t=F.car,e=Re.units==="mph";Ti("#speed",String(Math.round(Math.abs(t.vx)*(e?2.237:3.6)))),Ti("#unit",e?"mph":"km/h"),Ti("#limit span",String(e?30:qt.SPEED_LIMIT));let n=t.selector;(i||Cs.sel!==n)&&(Cs.sel=n,document.querySelectorAll("#gearbox span").forEach(l=>l.classList.toggle("on",l.dataset.g===n)),document.querySelectorAll("#gearBtns button").forEach(l=>l.classList.toggle("on",l.dataset.action===n))),Ti("#gearNum",n==="D"?String(t.gear):""),Kc("#rpmBar",t.rpm/7e3,t.rpm>6e3?"#ff4d3a":"#4fb3ff"),Kc("#fuelBar",t.fuel/t.tank,t.fuel<5?"#ff4d3a":"#3fd07a"),Kc("#dmgBar",t.damage/100,t.damage>60?"#ff4d3a":"#ffb13b"),ee("#icoLights").classList.toggle("on",F.headlights),ee("#icoHand").classList.toggle("on",F.input&&F.input.handbrake);let s=F.t*1.5%1<.5;if(ee("#sigL").classList.toggle("on",s&&(F.indicator==="L"||F.hazard)),ee("#sigR").classList.toggle("on",s&&(F.indicator==="R"||F.hazard)),ee("#bIndL").classList.toggle("on",s&&(F.indicator==="L"||F.hazard)),ee("#bIndR").classList.toggle("on",s&&(F.indicator==="R"||F.hazard)),F.M.time){let l=Math.max(0,Math.ceil(F.timeLeft));Ti("#timer",`${Math.floor(l/60)}:${String(l%60).padStart(2,"0")}`)}else Ti("#timer","\u221E");Ti("#score",String(Math.max(0,F.rules.score)));let r="",a=F.world.locate(t.x,t.z);if(a.type==="road"){let l=a.axis===0?Math.sin(t.h):Math.cos(t.h);if(Math.abs(l)>.6){let c=fe(a.si+(l>0?1:0),0,qt.N),h=a.axis===0?[c,a.ri]:[a.ri,c];Math.abs((a.axis===0?t.x:t.z)-le(c))<70&&(r=F.world.lightState(h[0],h[1],a.axis,F.t).s)}}let o=ee("#lightAhead");o.className!==r&&(o.className=r),o.style.visibility=r?"visible":"hidden"}var b_=[];function E_(){let i=F.car,t=F.world,e=zr(i.x,i.z,i.h,qt.CAR_HL,qt.CAR_HW);for(let n of t.query(i.x,i.z,4,b_)){let s=n.type==="box"?Zc(e,Dd(n)):Jc(e,n.x,n.z,n.r);if(s){let r=el(i,s);Gd(n.kind,r),e=zr(i.x,i.z,i.h,qt.CAR_HL,qt.CAR_HW)}}for(let n of F.traffic.cars){if(Math.abs(n.x-i.x)>6||Math.abs(n.z-i.z)>6)continue;let s=Zc(e,zr(n.x,n.z,n.h,qt.CAR_HL,qt.CAR_HW));if(s){let r=el(i,s,.2);r>.4&&(n.stun=5,n.v=0),Gd("ai",r),e=zr(i.x,i.z,i.h,qt.CAR_HL,qt.CAR_HW)}}for(let n of F.peds.list){if(Math.abs(n.x-i.x)>4||Math.abs(n.z-i.z)>4)continue;let s=Jc(e,n.x,n.z,.35);s&&(Math.abs(i.vx)>.8&&!n.down?(n.down=!0,wn.crash(4),Rs("You hit a pedestrian")):el(i,s,.1))}}function Gd(i,t){t<.3||(F.car.damage=Math.min(100,F.car.damage+Math.pow(t,1.5)*1.2),F.rules.collision(i,t),wn.crash(t),F.shake=Math.min(1,t/8))}function T_(){let i=F.car;for(let t of Yi.takeActions()){if(t==="pause"){Jd();return}if("PRND".includes(t)&&t.length===1){let e=i.select(t);e?(Gr(e,"info"),wn.blip(160,.2,.2,"sawtooth")):wn.blip(600,.04,.1)}t==="indL"&&(F.indicator=F.indicator==="L"?null:"L"),t==="indR"&&(F.indicator=F.indicator==="R"?null:"R"),t==="hazard"&&(F.hazard=!F.hazard),t==="lights"&&(F.headlights=!F.headlights),t==="camera"&&(F.cam=(F.cam+1)%kd.length,Re.camera=F.cam,Gc(),Gr(`Camera: ${kd[F.cam]}`,"info"))}}function w_(i){let t=F.car;if(T_(),hn!=="play")return;let e=Yi.update(i);F.input=e;let n=e.throttle,s=e.brake,r=Yi.touch.gas===0&&Yi.touch.brake===0;if(Re.easyGears&&r){let c=Math.abs(t.vx)<.25;t.selector==="R"&&(n=e.brake,s=e.throttle),c&&e.down&&!e.up&&t.selector!=="R"?(F.downHeld+=i,F.downHeld>.35&&(t.select("R"),F.downHeld=0)):F.downHeld=0,c&&t.selector!=="D"&&(t.selector==="R"&&e.up&&!e.down||t.selector!=="R"&&e.up)&&t.select("D"),c&&t.selector==="R"&&e.down}t.inp.throttle=n,t.inp.brake=s,t.inp.steer=e.steer,t.inp.handbrake=e.handbrake;let a=1/120;F.acc+=i;let o=0;for(;F.acc>=a&&o<10;)t.step(a),E_(),F.acc-=a,o++;if(hn!=="play")return;F.traffic.update(i,F.t,t),F.peds.update(i,t),F.world.updateLights(F.t),F.rules.update(i),F.t+=i;let l=F.t*1.5%1<.5;(F.indicator||F.hazard)&&l!==F.lastBlink&&wn.tick(l),F.lastBlink=l,A_(i)}function A_(i){let t=F.M,e=F.car;if(F.ended)return;if(t.time&&(F.timeLeft-=i,F.timeLeft<=0))return Rs("Out of time");if(e.damage>=100)return Rs("The car is too damaged to continue");if(!t.free&&F.rules.score<(t.passMark||40))return Rs(t.passMark?"Your score dropped below the pass mark":"Too many traffic violations");if(t.fuelBudget&&e.fuelUsed>t.fuelBudget)return Rs("Fuel budget exceeded");if(e.fuel<=0&&Math.abs(e.vx)<.1&&!t.free)return Rs("Out of fuel");let n=F.objs[F.objIdx];if(n)if(n.type==="reach")Math.hypot(e.x-n.p.x,e.z-n.p.z)<3.6&&(!n.stop||Math.abs(e.vx)<.3)&&Hd();else{let s=zd(e,n.P),r=s.inside&&s.aligned,a=Math.abs(e.vx)<.15;r&&a?F.parkT+=i*(e.selector==="P"?2.5:1):F.parkT=Math.max(0,F.parkT-i*2);let o=r?3530874:16765500;F.parkMarker.mats.forEach(l=>l.color.setHex(o)),Ti("#parkText",s.inside?s.aligned?a?"Hold still\u2026 (or select P)":"Stop the car":s.ang>2.5?"Wrong way round!":"Straighten up":"Get the whole car inside the bay"),ee("#parkFill").style.width=`${fe(F.parkT/1.6,0,1)*100}%`,F.parkT>=1.6&&Hd()}}function Hd(){if(F.objIdx++,wn.blip(880,.12,.15,"triangle"),setTimeout(()=>wn.blip(1320,.15,.15,"triangle"),120),F.objIdx>=F.objs.length)return I_();Gr("Checkpoint reached","good"),Xd(),F.routeT=0}var Vd=new U,Wd=new U;function R_(i){let t=F.car,e=F.carMesh,n=F.world.groundHeight(t.x,t.z);F.smoothY=Wn(F.smoothY,n,fe(i*12,0,1)),e.position.set(t.x,F.smoothY,t.z),e.rotation.y=t.h;let s=e.parts.shell;s.rotation.x=Wn(s.rotation.x,fe(-t.ax*.007,-.05,.05),fe(i*8,0,1)),s.rotation.z=Wn(s.rotation.z,fe(t.ay*.009,-.06,.06),fe(i*8,0,1)),F.spin+=t.vx/t.R*i;let r=F.t*1.5%1<.5;if(wd(e,t.steer,F.spin,{brake:t.inp.brake>.05&&t.selector!=="R"||t.selector==="R"&&F.input&&F.input.brake>.05&&!Re.easyGears,head:F.headlights,reverse:t.selector==="R",left:r&&(F.indicator==="L"||F.hazard),right:r&&(F.indicator==="R"||F.hazard)}),F.head.intensity=F.headlights?F.world.night?90:25:0,F.traffic.render(F.t,F.world.night),F.sun.position.set(t.x+40,90,t.z+25),F.sun.target.position.set(t.x,0,t.z),F.checkpoint.visible){let d=1+Math.sin(F.t*3)*.05;F.checkpoint.beam.scale.set(d,1,d)}(!F.routeT||F.t-F.routeT>.4)&&(F.route=M_(),F.routeT=F.t);let a=F.route;if(a&&a.length>1&&!F.ended){let d=a[a.length-1];for(let f=1;f<a.length;f++)if(Math.hypot(a[f][0]-t.x,a[f][1]-t.z)>9){d=a[f];break}let u=Math.hypot(d[0]-t.x,d[1]-t.z);F.arrow.visible=u>6&&F.cam!==2,F.arrow.position.set(t.x,2.35+F.smoothY+Math.sin(F.t*4)*.08,t.z),F.arrow.rotation.y=Math.atan2(d[0]-t.x,d[1]-t.z)}else F.arrow.visible=!1;let o=Math.sin(t.h),l=Math.cos(t.h),c=1-Math.exp(-i*5);if(F.cam===2){let d=Re.side===1?.36:-.36,u=Math.cos(t.h),f=Math.sin(t.h);Tn.position.set(t.x+f*-.2+u*d,F.smoothY+1.17,t.z+u*-.2-f*d);let p=t.steer*.6;Tn.lookAt(t.x+Math.sin(t.h+p)*20,F.smoothY+.9,t.z+Math.cos(t.h+p)*20),Tn.fov=70}else{let d=6.8,u=2.6,f=4;F.cam===1&&(d=10,u=10.5,f=3),F.cam===3&&(d=.5,u=32,f=0),Vd.set(t.x-o*d,F.smoothY+u,t.z-l*d),F.camPos.lerp(Vd,F.cam===3?1-Math.exp(-i*8):c),Wd.set(t.x+o*f,F.smoothY+1,t.z+l*f),F.camLook.lerp(Wd,1-Math.exp(-i*10)),Tn.position.copy(F.camPos),F.shake>0&&(Tn.position.x+=(Math.random()-.5)*F.shake*.4,Tn.position.y+=(Math.random()-.5)*F.shake*.4,F.shake=Math.max(0,F.shake-i*2)),Tn.lookAt(F.camLook),Tn.fov=60+fe(Math.abs(t.vx)-10,0,25)*.3}Tn.updateProjectionMatrix();let h=Math.max(t.slipR,t.slipF*.8,t.wheelSpin,t.inp.handbrake&&Math.abs(t.vx)>2?.6:0);wn.update(t,t.inp.throttle,h,F.input&&F.input.horn,hn==="play"),F.minimap.draw(t,F.traffic.cars,F.route,(()=>{let d=F.objs[F.objIdx];return d?d.p?[d.p.x,d.p.z]:[d.P.x,d.P.z]:null})()),qd()}function Qc(){F&&Xn.render(F.scene,Tn)}var C_=["#menu","#brief","#pause","#result","#settings","#help","#loading"];function un(i){for(let t of C_)ee(t).classList.toggle("hidden",t!==i)}function nh(i){ee("#hud").classList.toggle("hidden",!i),ee("#touch").classList.toggle("hidden",!(i&&th))}function ih(){let i=Hc(),t=ee("#missionGrid");t.innerHTML="",Ei.forEach((e,n)=>{let s=document.createElement("button");s.className="mcard";let r=i[e.id]||0,a=e.free?'<span class="st">&nbsp;</span>':`<span class="st">${"\u2605".repeat(r)}<span class="off">${"\u2605".repeat(3-r)}</span></span>`;s.innerHTML=`<div class="ic">${e.icon}</div><b>${n+1}. ${e.name}</b>${a}`,s.onclick=()=>Zd(n),t.appendChild(s)})}var Yd=0;function Zd(i){Yd=i;let t=Ei[i];ee("#briefTitle").textContent=`${t.icon} ${t.name}`,ee("#briefText").textContent=t.brief;let e=[];t.time&&e.push(`Time limit ${Math.floor(t.time/60)}:${String(t.time%60).padStart(2,"0")}`),e.push(`Traffic: ${t.traffic>30?"heavy":t.traffic>12?"medium":"light"}`),t.night&&e.push("Night"),t.passMark&&e.push(`Pass mark ${t.passMark}`),e.push(th?"Use the gear buttons: start in P, tap D to drive.":"Car starts in P: press 4 (or \u2191 with Easy gears) for D."),ee("#briefMeta").textContent=e.join(" \xB7 "),un("#brief")}function cl(i){wn.start(),un("#loading"),setTimeout(()=>{v_(i),un(null),nh(!0),hn="play",Gr(Ei[i].objectives[0]?Ei[i].objectives[0].label:"Free drive","info")},30)}function Jd(){hn==="play"&&(hn="pause",un("#pause"))}function $d(){hn="play",un(null),jc=performance.now()}function Kd(i,t){if(F.ended)return;F.ended=!0,hn="result";let e=F.M,n=F.rules,s=F.car,r=Math.max(0,n.score),a=0;if(i&&(a=r>=90?3:r>=75?2:1),i&&e.fuelBudget&&s.fuelUsed>e.fuelBudget*.8&&a===3&&(a=2),i){let o=Hc();o[e.id]=Math.max(o[e.id]||0,a),xd(o)}setTimeout(()=>{ee("#resTitle").textContent=i?e.id==="exam"?"Exam passed!":"Mission complete":"Mission failed",ee("#resStars").innerHTML=`${"\u2605".repeat(a)}<span class="off">${"\u2605".repeat(3-a)}</span>`,ee("#resReason").textContent=t||"";let o=l=>`${Math.floor(l/60)}:${String(Math.floor(l%60)).padStart(2,"0")}`;ee("#resStats").innerHTML=[["Score",r],["Time",o(F.t)],["Distance",`${(s.odo/1e3).toFixed(2)} km`],["Fuel used",`${s.fuelUsed.toFixed(3)} L`],["Damage",`${Math.round(s.damage)}%`],["Violations",n.log.length]].map(([l,c])=>`<div>${l}<b>${c}</b></div>`).join(""),ee("#resLog").innerHTML=n.log.map(l=>`<li>${l.text} (\u2212${l.pts})</li>`).join("")||'<li style="color:#3fd07a">Clean drive \u2014 no violations!</li>',ee("#btnNext").classList.toggle("hidden",!i||F.mi>=Ei.length-1),un("#result")},i?600:1200)}function I_(){Kd(!0,F.M.fuelBudget?`Fuel used: ${F.car.fuelUsed.toFixed(3)} L of ${F.M.fuelBudget} L budget`:"")}function Rs(i){Kd(!1,i)}ee("#btnGo").onclick=()=>cl(Yd);ee("#btnBack").onclick=()=>un("#menu");ee("#btnResume").onclick=$d;ee("#btnRestart").onclick=()=>cl(F.mi);ee("#btnQuit").onclick=()=>{hn="menu",nh(!1),ih(),un("#menu")};ee("#btnRetry").onclick=()=>cl(F.mi);ee("#btnNext").onclick=()=>Zd(F.mi+1);ee("#btnResList").onclick=()=>{hn="menu",nh(!1),ih(),un("#menu")};var sh="#menu";ee("#btnSettings").onclick=()=>{sh="#menu",rh(),un("#settings")};ee("#btnPauseSettings").onclick=()=>{sh="#pause",rh(),un("#settings")};ee("#btnSettingsBack").onclick=()=>un(sh);ee("#btnHelp").onclick=()=>un("#help");ee("#btnHelpBack").onclick=()=>un("#menu");function rh(){document.querySelectorAll(".seg").forEach(i=>{let t=i.dataset.key;i.querySelectorAll("button").forEach(e=>e.classList.toggle("on",String(Re[t])===e.dataset.v))})}document.querySelectorAll(".seg button").forEach(i=>{i.onclick=()=>{let t=i.parentElement.dataset.key,e=i.dataset.v;e==="true"||e==="false"?e=e==="true":isNaN(Number(e))||(e=Number(e)),Re[t]=e,Gc(),rh(),t==="sound"&&wn.setEnabled(e),t==="quality"&&eh()}});document.addEventListener("visibilitychange",()=>{document.hidden&&Jd()});var jc=performance.now();function Qd(i){let t=Math.min(.05,(i-jc)/1e3);jc=i,F&&(hn==="play"||hn==="result")?(hn==="play"?w_(t):(F.car.inp.throttle=0,F.car.inp.brake=1,F.car.step(t),F.traffic.update(t,F.t,F.car),F.peds.update(t,F.car),F.world.updateLights(F.t),F.t+=t),R_(t),Qc()):F&&hn==="pause"&&(P_(),Qc()),requestAnimationFrame(Qd)}function P_(){for(let i of Yi.takeActions())i==="pause"&&$d()}ih();un("#menu");requestAnimationFrame(Qd);window.__game={get G(){return F},get state(){return hn},launch:cl,MISSIONS:Ei,input:Yi};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
