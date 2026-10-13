(()=>{var{defineProperty:Va,getOwnPropertyNames:of,getOwnPropertyDescriptor:lf}=Object,cf=Object.prototype.hasOwnProperty;function hf(t){return this[t]}var uf=(t)=>{var e=(Oc??=new WeakMap).get(t),n;if(e)return e;if(e=Va({},"__esModule",{value:!0}),t&&typeof t==="object"||typeof t==="function"){for(var i of of(t))if(!cf.call(e,i))Va(e,i,{get:hf.bind(t,i),enumerable:!(n=lf(t,i))||n.enumerable})}return Oc.set(t,e),e},Oc;var df=(t)=>t;function ff(t,e){this[t]=df.bind(null,e)}var pf=(t,e)=>{for(var n in e)Va(t,n,{get:e[n],enumerable:!0,configurable:!0,set:ff.bind(e,n)})};var Ay={};pf(Ay,{MAX_PETS:()=>jd});var dh="186",_i={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fh=0,po=1,ph=2;var Pi=1,mh=2,Ss=3,bs=0,nn=1,Dn=2,Un=0,Zs=1,mo=2,go=3,_o=4,gh=5;var Ms=100,_h=101,xh=102,yh=103,vh=104,Sh=200,bh=201,Mh=202,Eh=203,Th=204,wh=205,Ah=206,Rh=207,Ch=208,Ph=209,Ih=210,Lh=211,Nh=212,Dh=213,Uh=214,Fh=0,Oh=1,Bh=2,xo=3,zh=4,Hh=5,kh=6,Gh=7,Vh=0,Wh=1,Xh=2,Tn=0,yo=1,vo=2,So=3,bo=4,Mo=5,Eo=6,To=7;var Es=301,Ii=302,Gr=303,Vr=304,Js=306,Ks=1000,Wr=1001,qh=1002,wn=1003,Yh=1004;var $s=1005;var sn=1006,Xr=1007;var Li=1008;var An=1009,Zh=1010,Jh=1011,js=1012,wo=1013,yi=1014,ti=1015,Fn=1016,Ao=1017,Ro=1018,Ts=1020,Kh=35902,$h=35899,jh=1021,Qh=1022,On=1023,Ni=1026,Di=1027,tu=1028,Co=1029,Ui=1030,Po=1031;var Io=1033,qr=33776,Yr=33777,Zr=33778,Jr=33779,Lo=35840,No=35841,Do=35842,Uo=35843,Fo=36196,Oo=37492,Bo=37496,zo=37488,Ho=37489,Kr=37490,ko=37491,Go=37808,Vo=37809,Wo=37810,Xo=37811,qo=37812,Yo=37813,Zo=37814,Jo=37815,Ko=37816,$o=37817,jo=37818,Qo=37819,tl=37820,el=37821,nl=36492,il=36494,sl=36495,rl=36283,al=36284,$r=36285,ol=36286;var ll=0,eu=1,Fi="",jr="srgb",cl="srgb-linear",hl="linear",fe="srgb";var nu=512,iu=513,su=514,Qr=515,ru=516,au=517,ta=518,ou=519;var ul="300 es",dl=2000;function mf(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function gf(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Xs(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function lu(){let t=Xs("canvas");return t.style.display="block",t}var Bc={},xs=null;function qs(...t){let e="THREE."+t.shift();if(xs)xs("log",e,...t);else console.log(e,...t)}function cu(t){let e=t[0];if(typeof e==="string"&&e.startsWith("TSL:")){let n=t[1];if(n&&n.isStackTrace)t[0]+=" "+n.getLocation();else t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Dt(...t){t=cu(t);let e="THREE."+t.shift();if(xs)xs("warn",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.warn(n.getError(e));else console.warn(e,...t)}}function Nt(...t){t=cu(t);let e="THREE."+t.shift();if(xs)xs("error",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.error(n.getError(e));else console.error(e,...t)}}function Ci(...t){let e=t.join(" ");if(e in Bc)return;Bc[e]=!0,Dt(...t)}function hu(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var uu={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class Bn{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){let n=this._listeners;if(n===void 0)return!1;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zc=1234567,Vs=Math.PI/180,ys=180/Math.PI;function jn(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ve[t&255]+Ve[t>>8&255]+Ve[t>>16&255]+Ve[t>>24&255]+"-"+Ve[e&255]+Ve[e>>8&255]+"-"+Ve[e>>16&15|64]+Ve[e>>24&255]+"-"+Ve[n&63|128]+Ve[n>>8&255]+"-"+Ve[n>>16&255]+Ve[n>>24&255]+Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]).toLowerCase()}function Wt(t,e,n){return Math.max(e,Math.min(n,t))}function fl(t,e){return(t%e+e)%e}function _f(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function xf(t,e,n){if(t!==e)return(n-t)/(e-t);else return 0}function Ws(t,e,n){return(1-n)*t+n*e}function yf(t,e,n,i){return Ws(t,e,1-Math.exp(-n*i))}function vf(t,e=1){return e-Math.abs(fl(t,e*2)-e)}function Sf(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*(3-2*t)}function bf(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10)}function Mf(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Ef(t,e){return t+Math.random()*(e-t)}function Tf(t){return t*(0.5-Math.random())}function wf(t){if(t!==void 0)zc=t;let e=zc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Af(t){return t*Vs}function Rf(t){return t*ys}function Cf(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function Pf(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function If(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Lf(t,e,n,i,s){let{cos:r,sin:a}=Math,o=r(n/2),l=a(n/2),c=r((e+i)/2),h=a((e+i)/2),d=r((e-i)/2),u=a((e-i)/2),p=r((i-e)/2),x=a((i-e)/2);switch(s){case"XYX":t.set(o*h,l*d,l*u,o*c);break;case"YZY":t.set(l*u,o*h,l*d,o*c);break;case"ZXZ":t.set(l*d,l*u,o*h,o*c);break;case"XZX":t.set(o*h,l*x,l*p,o*c);break;case"YXY":t.set(l*p,o*h,l*x,o*c);break;case"ZYZ":t.set(l*x,l*p,o*h,o*c);break;default:Dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function ae(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var zn={DEG2RAD:Vs,RAD2DEG:ys,generateUUID:jn,clamp:Wt,euclideanModulo:fl,mapLinear:_f,inverseLerp:xf,lerp:Ws,damp:yf,pingpong:vf,smoothstep:Sf,smootherstep:bf,randInt:Mf,randFloat:Ef,randFloatSpread:Tf,seededRandom:wf,degToRad:Af,radToDeg:Rf,isPowerOfTwo:Cf,ceilPowerOfTwo:Pf,floorPowerOfTwo:If,setQuaternionFromProperEuler:Lf,normalize:ae,denormalize:Mn};class At{static{At.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],h=n[i+3],d=s[r+0],u=s[r+1],p=s[r+2],x=s[r+3];if(h!==x||o!==d||l!==u||c!==p){let M=o*d+l*u+c*p+h*x;if(M<0)d=-d,u=-u,p=-p,x=-x,M=-M;let m=1-a;if(M<0.9995){let f=Math.acos(M),E=Math.sin(f);m=Math.sin(m*f)/E,a=Math.sin(a*f)/E,o=o*m+d*a,l=l*m+u*a,c=c*m+p*a,h=h*m+x*a}else{o=o*m+d*a,l=l*m+u*a,c=c*m+p*a,h=h*m+x*a;let f=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=f,l*=f,c*=f,h*=f}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],h=s[r],d=s[r+1],u=s[r+2],p=s[r+3];return t[e]=a*p+c*h+o*u-l*d,t[e+1]=o*p+c*d+l*h-a*u,t[e+2]=l*p+c*u+a*d-o*h,t[e+3]=c*p-a*h-o*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,{cos:a,sin:o}=Math,l=a(n/2),c=a(i/2),h=a(s/2),d=o(n/2),u=o(i/2),p=o(s/2);switch(r){case"XYZ":this._x=d*c*h+l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h-d*u*p;break;case"YXZ":this._x=d*c*h+l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h+d*u*p;break;case"ZXY":this._x=d*c*h-l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h-d*u*p;break;case"ZYX":this._x=d*c*h-l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h+d*u*p;break;case"YZX":this._x=d*c*h+l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h-d*u*p;break;case"XZY":this._x=d*c*h-l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h+d*u*p;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10],d=n+a+h;if(d>0){let u=0.5/Math.sqrt(d+1);this._w=0.25/u,this._x=(c-o)*u,this._y=(s-l)*u,this._z=(r-i)*u}else if(n>a&&n>h){let u=2*Math.sqrt(1+n-a-h);this._w=(c-o)/u,this._x=0.25*u,this._y=(i+r)/u,this._z=(s+l)/u}else if(a>h){let u=2*Math.sqrt(1+a-n-h);this._w=(s-l)/u,this._x=(i+r)/u,this._y=0.25*u,this._z=(o+c)/u}else{let u=2*Math.sqrt(1+h-n-a);this._w=(r-i)/u,this._x=(s+l)/u,this._y=(o+c)/u,this._z=0.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<0.00000001)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,{_x:a,_y:o,_z:l,_w:c}=e;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=this.dot(t);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-e;if(a<0.9995){let l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{static{P.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=t,l=2*(r*i-a*n),c=2*(a*e-s*i),h=2*(s*n-r*e);return this.x=e+o*l+r*h-a*c,this.y=n+o*c+a*l-s*h,this.z=i+o*h+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,{x:r,y:a,z:o}=e;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wa.copy(this).projectOnVector(t),this.sub(Wa)}reflect(t){return this.sub(Wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Wa=new P,Hc=new qe;class Ft{static{Ft.prototype.isMatrix3=!0}constructor(t,e,n,i,s,r,a,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l)}set(t,e,n,i,s,r,a,o,l){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],h=n[7],d=n[2],u=n[5],p=n[8],x=i[0],M=i[3],m=i[6],f=i[1],E=i[4],R=i[7],v=i[2],T=i[5],A=i[8];return s[0]=r*x+a*f+o*v,s[3]=r*M+a*E+o*T,s[6]=r*m+a*R+o*A,s[1]=l*x+c*f+h*v,s[4]=l*M+c*E+h*T,s[7]=l*m+c*R+h*A,s[2]=d*x+u*f+p*v,s[5]=d*M+u*E+p*T,s[8]=d*m+u*R+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*r*c-e*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=c*r-a*l,d=a*o-c*s,u=l*s-r*o,p=e*h+n*d+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=h*x,t[1]=(i*l-c*n)*x,t[2]=(a*n-i*r)*x,t[3]=d*x,t[4]=(c*e-i*o)*x,t[5]=(i*s-a*e)*x,t[6]=u*x,t[7]=(n*o-l*e)*x,t[8]=(r*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+t,-i*l,i*o,-i*(-l*r+o*a)+a+e,0,0,1),this}scale(t,e){return Ci("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xa.makeScale(t,e)),this}rotate(t){return Ci("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xa.makeRotation(-t)),this}translate(t,e){return Ci("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xa.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var Xa=new Ft,kc=new Ft().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Gc=new Ft().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Nf(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=Qn(s.r),s.g=Qn(s.g),s.b=Qn(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ci("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ci("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:kc,fromXYZ:Gc,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:kc,fromXYZ:Gc,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var qt=Nf();function Qn(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function _s(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var Qi;class pl{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{if(Qi===void 0)Qi=Xs("canvas");Qi.width=t.width,Qi.height=t.height;let i=Qi.getContext("2d");if(t instanceof ImageData)i.putImageData(t,0,0);else i.drawImage(t,0,0,t.width,t.height);n=Qi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Xs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Qn(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(Qn(e[n]/255)*255);else e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var Df=0;class Qs{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=jn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)t.set(e.videoWidth,e.videoHeight,0);else if(typeof VideoFrame<"u"&&e instanceof VideoFrame)t.set(e.displayWidth,e.displayHeight,0);else if(e!==null)t.set(e.width,e.height,e.depth||0);else t.set(0,0,0);return t}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(qa(i[r].image));else s.push(qa(i[r]))}else s=qa(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function qa(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return pl.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return Dt("Texture: Unable to serialize Texture."),{}}var Uf=0,Ya=new P;class He extends Bn{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=He.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=jn(),this.name="",this.source=new Qs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=t&&t.depth&&t.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ya).x}get height(){return this.source.getSize(Ya).y}get depth(){return this.source.getSize(Ya).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Dt(`Texture.setValues(): property '${e}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=300;He.DEFAULT_ANISOTROPY=1;class xe{static{xe.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,a=0.1,o=t.elements,l=o[0],c=o[4],h=o[8],d=o[1],u=o[5],p=o[9],x=o[2],M=o[6],m=o[10];if(Math.abs(c-d)<0.01&&Math.abs(h-x)<0.01&&Math.abs(p-M)<0.01){if(Math.abs(c+d)<0.1&&Math.abs(h+x)<0.1&&Math.abs(p+M)<0.1&&Math.abs(l+u+m-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,R=(u+1)/2,v=(m+1)/2,T=(c+d)/4,A=(h+x)/4,w=(p+M)/4;if(E>R&&E>v)if(E<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(E),i=T/n,s=A/n;else if(R>v)if(R<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(R),n=T/i,s=w/i;else if(v<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(v),n=A/s,i=w/s;return this.set(n,i,s,e),this}let f=Math.sqrt((M-p)*(M-p)+(h-x)*(h-x)+(d-c)*(d-c));if(Math.abs(f)<0.001)f=1;return this.x=(M-p)/f,this.y=(h-x)/f,this.z=(d-c)/f,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ml extends Bn{constructor(t=1,e=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new He(i),r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(t.mapping!==void 0)e.mapping=t.mapping;if(t.wrapS!==void 0)e.wrapS=t.wrapS;if(t.wrapT!==void 0)e.wrapT=t.wrapT;if(t.wrapR!==void 0)e.wrapR=t.wrapR;if(t.magFilter!==void 0)e.magFilter=t.magFilter;if(t.minFilter!==void 0)e.minFilter=t.minFilter;if(t.format!==void 0)e.format=t.format;if(t.type!==void 0)e.type=t.type;if(t.anisotropy!==void 0)e.anisotropy=t.anisotropy;if(t.colorSpace!==void 0)e.colorSpace=t.colorSpace;if(t.flipY!==void 0)e.flipY=t.flipY;if(t.generateMipmaps!==void 0)e.generateMipmaps=t.generateMipmaps;if(t.internalFormat!==void 0)e.internalFormat=t.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(t!==null&&t.renderTarget===null)t.renderTarget=this;this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Qs(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends ml{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class ea extends He{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gl extends He{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class Kt{static{Kt.prototype.isMatrix4=!0}constructor(t,e,n,i,s,r,a,o,l,c,h,d,u,p,x,M){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l,c,h,d,u,p,x,M)}set(t,e,n,i,s,r,a,o,l,c,h,d,u,p,x,M){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=a,m[13]=o,m[2]=l,m[6]=c,m[10]=h,m[14]=d,m[3]=u,m[7]=p,m[11]=x,m[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){if(this.determinantAffine()===0)return t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this;return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ts.setFromMatrixColumn(t,0).length(),s=1/ts.setFromMatrixColumn(t,1).length(),r=1/ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,{x:n,y:i,z:s}=t,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let d=r*c,u=r*h,p=a*c,x=a*h;e[0]=o*c,e[4]=-o*h,e[8]=l,e[1]=u+p*l,e[5]=d-x*l,e[9]=-a*o,e[2]=x-d*l,e[6]=p+u*l,e[10]=r*o}else if(t.order==="YXZ"){let d=o*c,u=o*h,p=l*c,x=l*h;e[0]=d+x*a,e[4]=p*a-u,e[8]=r*l,e[1]=r*h,e[5]=r*c,e[9]=-a,e[2]=u*a-p,e[6]=x+d*a,e[10]=r*o}else if(t.order==="ZXY"){let d=o*c,u=o*h,p=l*c,x=l*h;e[0]=d-x*a,e[4]=-r*h,e[8]=p+u*a,e[1]=u+p*a,e[5]=r*c,e[9]=x-d*a,e[2]=-r*l,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){let d=r*c,u=r*h,p=a*c,x=a*h;e[0]=o*c,e[4]=p*l-u,e[8]=d*l+x,e[1]=o*h,e[5]=x*l+d,e[9]=u*l-p,e[2]=-l,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){let d=r*o,u=r*l,p=a*o,x=a*l;e[0]=o*c,e[4]=x-d*h,e[8]=p*h+u,e[1]=h,e[5]=r*c,e[9]=-a*c,e[2]=-l*c,e[6]=u*h+p,e[10]=d-x*h}else if(t.order==="XZY"){let d=r*o,u=r*l,p=a*o,x=a*l;e[0]=o*c,e[4]=-h,e[8]=l*c,e[1]=d*h+x,e[5]=r*c,e[9]=u*h-p,e[2]=p*h-u,e[6]=a*c,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ff,t,Of)}lookAt(t,e,n){let i=this.elements;if(ln.subVectors(t,e),ln.lengthSq()===0)ln.z=1;if(ln.normalize(),di.crossVectors(n,ln),di.lengthSq()===0){if(Math.abs(n.z)===1)ln.x+=0.0001;else ln.z+=0.0001;ln.normalize(),di.crossVectors(n,ln)}return di.normalize(),yr.crossVectors(ln,di),i[0]=di.x,i[4]=yr.x,i[8]=ln.x,i[1]=di.y,i[5]=yr.y,i[9]=ln.y,i[2]=di.z,i[6]=yr.z,i[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],h=n[5],d=n[9],u=n[13],p=n[2],x=n[6],M=n[10],m=n[14],f=n[3],E=n[7],R=n[11],v=n[15],T=i[0],A=i[4],w=i[8],g=i[12],S=i[1],G=i[5],I=i[9],B=i[13],j=i[2],L=i[6],q=i[10],et=i[14],V=i[3],st=i[7],C=i[11],N=i[15];return s[0]=r*T+a*S+o*j+l*V,s[4]=r*A+a*G+o*L+l*st,s[8]=r*w+a*I+o*q+l*C,s[12]=r*g+a*B+o*et+l*N,s[1]=c*T+h*S+d*j+u*V,s[5]=c*A+h*G+d*L+u*st,s[9]=c*w+h*I+d*q+u*C,s[13]=c*g+h*B+d*et+u*N,s[2]=p*T+x*S+M*j+m*V,s[6]=p*A+x*G+M*L+m*st,s[10]=p*w+x*I+M*q+m*C,s[14]=p*g+x*B+M*et+m*N,s[3]=f*T+E*S+R*j+v*V,s[7]=f*A+E*G+R*L+v*st,s[11]=f*w+E*I+R*q+v*C,s[15]=f*g+E*B+R*et+v*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],o=t[9],l=t[13],c=t[2],h=t[6],d=t[10],u=t[14],p=t[3],x=t[7],M=t[11],m=t[15],f=o*u-l*d,E=a*u-l*h,R=a*d-o*h,v=r*u-l*c,T=r*d-o*c,A=r*h-a*c;return e*(x*f-M*E+m*R)-n*(p*f-M*v+m*T)+i*(p*E-x*v+m*A)-s*(p*R-x*T+M*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],r=t[5],a=t[9],o=t[2],l=t[6],c=t[10];return e*(r*c-a*l)-n*(s*c-a*o)+i*(s*l-r*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=t[9],d=t[10],u=t[11],p=t[12],x=t[13],M=t[14],m=t[15],f=e*a-n*r,E=e*o-i*r,R=e*l-s*r,v=n*o-i*a,T=n*l-s*a,A=i*l-s*o,w=c*x-h*p,g=c*M-d*p,S=c*m-u*p,G=h*M-d*x,I=h*m-u*x,B=d*m-u*M,j=f*B-E*I+R*G+v*S-T*g+A*w;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/j;return t[0]=(a*B-o*I+l*G)*L,t[1]=(i*I-n*B-s*G)*L,t[2]=(x*A-M*T+m*v)*L,t[3]=(d*T-h*A-u*v)*L,t[4]=(o*S-r*B-l*g)*L,t[5]=(e*B-i*S+s*g)*L,t[6]=(M*R-p*A-m*E)*L,t[7]=(c*A-d*R+u*E)*L,t[8]=(r*I-a*S+l*w)*L,t[9]=(n*S-e*I-s*w)*L,t[10]=(p*T-x*R+m*f)*L,t[11]=(h*R-c*T-u*f)*L,t[12]=(a*g-r*G-o*w)*L,t[13]=(e*G-n*g+i*w)*L,t[14]=(x*E-p*v-M*f)*L,t[15]=(c*v-h*E+d*f)*L,this}scale(t){let e=this.elements,{x:n,y:i,z:s}=t;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,{x:r,y:a,z:o}=t,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=e,l=s+s,c=r+r,h=a+a,d=s*l,u=s*c,p=s*h,x=r*c,M=r*h,m=a*h,f=o*l,E=o*c,R=o*h,{x:v,y:T,z:A}=n;return i[0]=(1-(x+m))*v,i[1]=(u+R)*v,i[2]=(p-E)*v,i[3]=0,i[4]=(u-R)*T,i[5]=(1-(d+m))*T,i[6]=(M+f)*T,i[7]=0,i[8]=(p+E)*A,i[9]=(M-f)*A,i[10]=(1-(d+x))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let r=ts.set(i[0],i[1],i[2]).length(),a=ts.set(i[4],i[5],i[6]).length(),o=ts.set(i[8],i[9],i[10]).length();if(s<0)r=-r;vn.copy(this);let l=1/r,c=1/a,h=1/o;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=c,vn.elements[5]*=c,vn.elements[6]*=c,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,e.setFromRotationMatrix(vn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),p,x;if(o)p=s/(r-s),x=r*s/(r-s);else if(a===2000)p=-(r+s)/(r-s),x=-2*r*s/(r-s);else if(a===2001)p=-r/(r-s),x=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2/(e-t),h=2/(n-i),d=-(e+t)/(e-t),u=-(n+i)/(n-i),p,x;if(o)p=1/(r-s),x=r/(r-s);else if(a===2000)p=-2/(r-s),x=-(r+s)/(r-s);else if(a===2001)p=-1/(r-s),x=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var ts=new P,vn=new Kt,Ff=new P(0,0,0),Of=new P(1,1,1),di=new P,yr=new P,ln=new P,Vc=new Kt,Wc=new qe;class En{constructor(t=0,e=0,n=0,i=En.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],h=i[2],d=i[6],u=i[10];switch(e){case"XYZ":if(this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,u),this._z=Math.atan2(-r,s);else this._x=Math.atan2(d,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Wt(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,u),this._z=Math.atan2(o,l);else this._y=Math.atan2(-h,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<0.9999999)this._y=Math.atan2(-h,u),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-Wt(h,-1,1)),Math.abs(h)<0.9999999)this._x=Math.atan2(d,u),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(Wt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,s);else this._x=0,this._y=Math.atan2(a,u);break;case"XZY":if(this._z=Math.asin(-Wt(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(d,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,u),this._y=0;break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return Vc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class tr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var Bf=0,Xc=new P,es=new qe,Yn=new Kt,vr=new P,Ds=new P,zf=new P,Hf=new qe,qc=new P(1,0,0),Yc=new P(0,1,0),Zc=new P(0,0,1),Jc={type:"added"},kf={type:"removed"},ns={type:"childadded",child:null},Za={type:"childremoved",child:null};class Ie extends Bn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();let t=new P,e=new En,n=new qe,i=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Ft}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(qc,t)}rotateY(t){return this.rotateOnAxis(Yc,t)}rotateZ(t){return this.rotateOnAxis(Zc,t)}translateOnAxis(t,e){return Xc.copy(t).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qc,t)}translateY(t){return this.translateOnAxis(Yc,t)}translateZ(t){return this.translateOnAxis(Zc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)vr.copy(t);else vr.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)Yn.lookAt(Ds,vr,this.up);else Yn.lookAt(vr,Ds,this.up);if(this.quaternion.setFromRotationMatrix(Yn),i)Yn.extractRotation(i.matrixWorld),es.setFromRotationMatrix(Yn),this.quaternion.premultiply(es.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return Nt("Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jc),ns.child=t,this.dispatchEvent(ns),ns.child=null;else Nt("Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(kf),Za.child=t,this.dispatchEvent(Za),Za.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld);return t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jc),ns.child=t,this.dispatchEvent(ns),ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,zf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,Hf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let{x:e,y:n,z:i}=t,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(t);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let h=o[l];s(t.shapes,h)}else s(t.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(t.materials,this.material[o]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(t.animations,o))}}if(e){let a=r(t.geometries),o=r(t.materials),l=r(t.textures),c=r(t.images),h=r(t.shapes),d=r(t.skeletons),u=r(t.animations),p=r(t.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(h.length>0)n.shapes=h;if(d.length>0)n.skeletons=d;if(u.length>0)n.animations=u;if(p.length>0)n.nodes=p}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ie.DEFAULT_UP=new P(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ie extends Ie{constructor(){super();this.isGroup=!0,this.type="Group"}}var Gf={type:"move"};class er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let x of t.hand.values()){let M=e.getJointPose(x,n),m=this._getHandJoint(l,x);if(M!==null)m.matrix.fromArray(M.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=M.radius;m.visible=M!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=c.position.distanceTo(h.position),u=0.02,p=0.005;if(l.inputState.pinching&&d>u+p)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!l.inputState.pinching&&d<=u-p)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(o!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:t,target:this})}}if(a!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(Gf)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}var du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Ja(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=qt.workingColorSpace){if(t=fl(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=Ja(r,s,t+0.3333333333333333),this.g=Ja(r,s,t),this.b=Ja(r,s,t-0.3333333333333333)}return qt.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)Dt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Dt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=du[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else Dt("Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return qt.workingToColorSpace(We.copy(this),t),Math.round(Wt(We.r*255,0,255))*65536+Math.round(Wt(We.g*255,0,255))*256+Math.round(Wt(We.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(We.copy(this),e);let{r:n,g:i,b:s}=We,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let h=r-a;switch(l=c<=0.5?h/(r+a):h/(2-r-a),r){case n:o=(i-s)/h+(i<s?6:0);break;case i:o=(s-n)/h+2;break;case s:o=(n-i)/h+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t="srgb"){qt.workingToColorSpace(We.copy(this),t);let{r:e,g:n,b:i}=We;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(Sr);let n=Ws(fi.h,Sr.h,e),i=Ws(fi.s,Sr.s,e),s=Ws(fi.l,Sr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var We=new Ot;Ot.NAMES=du;class na extends Ie{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){if(super.copy(t,e),t.background!==null)this.background=t.background.clone();if(t.environment!==null)this.environment=t.environment.clone();if(t.fog!==null)this.fog=t.fog.clone();if(this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null)this.overrideMaterial=t.overrideMaterial.clone();return this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();return e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}var Sn=new P,Zn=new P,Ka=new P,Jn=new P,is=new P,ss=new P,Kc=new P,$a=new P,ja=new P,Qa=new P,to=new xe,eo=new xe,no=new xe;class hn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Sn.subVectors(t,e),i.cross(Sn);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Sn.subVectors(i,e),Zn.subVectors(n,e),Ka.subVectors(t,e);let r=Sn.dot(Sn),a=Sn.dot(Zn),o=Sn.dot(Ka),l=Zn.dot(Zn),c=Zn.dot(Ka),h=r*l-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,u=(l*o-a*c)*d,p=(r*c-a*o)*d;return s.set(1-u-p,p,u)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,Jn)===null)return!1;return Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,i,s,r,a,o){if(this.getBarycoord(t,e,n,i,Jn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,Jn.x),o.addScaledVector(r,Jn.y),o.addScaledVector(a,Jn.z),o}static getInterpolatedAttribute(t,e,n,i,s,r){return to.setScalar(0),eo.setScalar(0),no.setScalar(0),to.fromBufferAttribute(t,e),eo.fromBufferAttribute(t,n),no.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(to,s.x),r.addScaledVector(eo,s.y),r.addScaledVector(no,s.z),r}static isFrontFacing(t,e,n,i){return Sn.subVectors(n,e),Zn.subVectors(t,e),Sn.cross(Zn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Sn.cross(Zn).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;is.subVectors(i,n),ss.subVectors(s,n),$a.subVectors(t,n);let o=is.dot($a),l=ss.dot($a);if(o<=0&&l<=0)return e.copy(n);ja.subVectors(t,i);let c=is.dot(ja),h=ss.dot(ja);if(c>=0&&h<=c)return e.copy(i);let d=o*h-c*l;if(d<=0&&o>=0&&c<=0)return r=o/(o-c),e.copy(n).addScaledVector(is,r);Qa.subVectors(t,s);let u=is.dot(Qa),p=ss.dot(Qa);if(p>=0&&u<=p)return e.copy(s);let x=u*l-o*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(ss,a);let M=c*p-u*h;if(M<=0&&h-c>=0&&u-p>=0)return Kc.subVectors(s,i),a=(h-c)/(h-c+(u-p)),e.copy(i).addScaledVector(Kc,a);let m=1/(M+x+d);return r=x*m,a=d*m,e.copy(n).addScaledVector(is,r).addScaledVector(ss,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Rn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=bn.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(t.isMesh===!0)t.getVertexPosition(r,bn);else bn.fromBufferAttribute(s,r);bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();br.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();br.copy(n.boundingBox)}br.applyMatrix4(t.matrixWorld),this.union(br)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Us),Mr.subVectors(this.max,Us),rs.subVectors(t.a,Us),as.subVectors(t.b,Us),os.subVectors(t.c,Us),pi.subVectors(as,rs),mi.subVectors(os,as),Ti.subVectors(rs,os);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ti.z,Ti.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ti.z,0,-Ti.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ti.y,Ti.x,0];if(!io(e,rs,as,os,Mr))return!1;if(e=[1,0,0,0,1,0,0,0,1],!io(e,rs,as,os,Mr))return!1;return Er.crossVectors(pi,mi),e=[Er.x,Er.y,Er.z],io(e,rs,as,os,Mr)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(bn).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var Kn=[new P,new P,new P,new P,new P,new P,new P,new P],bn=new P,br=new Rn,rs=new P,as=new P,os=new P,pi=new P,mi=new P,Ti=new P,Us=new P,Mr=new P,Er=new P,wi=new P;function io(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){wi.fromArray(t,r);let o=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=e.dot(wi),c=n.dot(wi),h=i.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Re=new P,Tr=new At,Vf=0;class ke extends Bn{constructor(t,e,n=!1){super();if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Tr.fromBufferAttribute(this,e),Tr.applyMatrix3(t),this.setXY(e,Tr.x,Tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=Mn(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=ae(n,this.array);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=Mn(e,this.array);return e}setX(t,e){if(this.normalized)e=ae(e,this.array);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=Mn(e,this.array);return e}setY(t,e){if(this.normalized)e=ae(e,this.array);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=Mn(e,this.array);return e}setZ(t,e){if(this.normalized)e=ae(e,this.array);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=Mn(e,this.array);return e}setW(t,e){if(this.normalized)e=ae(e,this.array);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=ae(e,this.array),n=ae(n,this.array);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array),s=ae(s,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class ia extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class sa extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Te extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}var Wf=new Rn,Fs=new P,so=new P;class Oi{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else Wf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fs.subVectors(t,this.center);let e=Fs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(Fs,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else so.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fs.copy(t.center).add(so)),this.expandByPoint(Fs.copy(t.center).sub(so));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var Xf=0,fn=new Kt,ro=new Ie,ls=new P,cn=new Rn,Os=new Rn,Be=new P;class Le extends Bn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((mf(t))?sa:ia)(t,1);else this.index=t;return this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new Ft().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return ro.lookAt(t),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Te(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}if(t.length>e.count)Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Rn;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(cn.setFromBufferAttribute(s),this.morphTargetsRelative)Be.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Be);else this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Oi;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];if(Os.setFromBufferAttribute(a),this.morphTargetsRelative)Be.addVectors(cn.min,Os.min),cn.expandByPoint(Be),Be.addVectors(cn.max,Os.max),cn.expandByPoint(Be);else cn.expandByPoint(Os.min),cn.expandByPoint(Os.max)}cn.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Be.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Be));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(Be.fromBufferAttribute(a,l),o)ls.fromBufferAttribute(t,l),Be.add(ls);i=Math.max(i,n.distanceToSquared(Be))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new ke(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[];for(let w=0;w<n.count;w++)a[w]=new P,o[w]=new P;let l=new P,c=new P,h=new P,d=new At,u=new At,p=new At,x=new P,M=new P;function m(w,g,S){l.fromBufferAttribute(n,w),c.fromBufferAttribute(n,g),h.fromBufferAttribute(n,S),d.fromBufferAttribute(s,w),u.fromBufferAttribute(s,g),p.fromBufferAttribute(s,S),c.sub(l),h.sub(l),u.sub(d),p.sub(d);let G=1/(u.x*p.y-p.x*u.y);if(!isFinite(G))return;x.copy(c).multiplyScalar(p.y).addScaledVector(h,-u.y).multiplyScalar(G),M.copy(h).multiplyScalar(u.x).addScaledVector(c,-p.x).multiplyScalar(G),a[w].add(x),a[g].add(x),a[S].add(x),o[w].add(M),o[g].add(M),o[S].add(M)}let f=this.groups;if(f.length===0)f=[{start:0,count:t.count}];for(let w=0,g=f.length;w<g;++w){let S=f[w],{start:G,count:I}=S;for(let B=G,j=G+I;B<j;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let E=new P,R=new P,v=new P,T=new P;function A(w){v.fromBufferAttribute(i,w),T.copy(v);let g=a[w];E.copy(g),E.sub(v.multiplyScalar(v.dot(g))).normalize(),R.crossVectors(T,g);let G=R.dot(o[w])<0?-1:1;r.setXYZW(w,E.x,E.y,E.z,G)}for(let w=0,g=f.length;w<g;++w){let S=f[w],{start:G,count:I}=S;for(let B=G,j=G+I;B<j;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new P,s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P;if(t)for(let d=0,u=t.count;d<u;d+=3){let p=t.getX(d+0),x=t.getX(d+1),M=t.getX(d+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,M),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),a.fromBufferAttribute(n,p),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),a.add(c),o.add(c),l.add(c),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:c,normalized:h}=a,d=new l.constructor(o.length*c),u=0,p=0;for(let x=0,M=o.length;x<M;x++){if(a.isInterleavedBufferAttribute)u=o[x]*a.data.stride+a.offset;else u=o[x]*c;for(let m=0;m<c;m++)d[p++]=l[u++]}return new ke(d,c,h)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Le,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=t(o,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,h=l.length;c<h;c++){let d=l[c],u=t(d,n);o.push(u)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)t[l]=o[l];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let h=0,d=l.length;h<d;h++){let u=l[h];c.push(u.toJSON(t.data))}if(c.length>0)i[o]=c,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)t.data.boundingSphere=a.toJSON();return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone());let i=t.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(e))}let s=t.morphAttributes;for(let l in s){let c=[],h=s[l];for(let d=0,u=h.length;d<u;d++)c.push(h[d].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,c=r.length;l<c;l++){let h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=t.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ra{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){if(t.arrayBuffers===void 0)t.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=jn();if(t.arrayBuffers[this.array.buffer._uuid]===void 0)t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){if(t.arrayBuffers===void 0)t.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=jn();if(t.arrayBuffers[this.array.buffer._uuid]===void 0)t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}var Je=new P;class vs{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];if(this.normalized)n=Mn(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=ae(n,this.array);return this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){if(this.normalized)e=ae(e,this.array);return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){if(this.normalized)e=ae(e,this.array);return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){if(this.normalized)e=ae(e,this.array);return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){if(this.normalized)e=ae(e,this.array);return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];if(this.normalized)e=Mn(e,this.array);return e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];if(this.normalized)e=Mn(e,this.array);return e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];if(this.normalized)e=Mn(e,this.array);return e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];if(this.normalized)e=Mn(e,this.array);return e}setXY(t,e,n){if(t=t*this.data.stride+this.offset,this.normalized)e=ae(e,this.array),n=ae(n,this.array);return this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){if(t=t*this.data.stride+this.offset,this.normalized)e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array);return this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t=t*this.data.stride+this.offset,this.normalized)e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array),s=ae(s,this.array);return this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){qs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new ke(new this.array.constructor(e),this.itemSize,this.normalized)}else{if(t.interleavedBuffers===void 0)t.interleavedBuffers={};if(t.interleavedBuffers[this.data.uuid]===void 0)t.interleavedBuffers[this.data.uuid]=this.data.clone(t);return new vs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(t){if(t===void 0){qs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else{if(t.interleavedBuffers===void 0)t.interleavedBuffers={};if(t.interleavedBuffers[this.data.uuid]===void 0)t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var ao=new P,qf=new P,Yf=new Ft;class en{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ao.subVectors(n,e).cross(qf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(ao),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let r=-(t.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Yf.getNormalMatrix(t),i=this.coplanarPoint(ao).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}var Zf=0;class vi extends Bn{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){Dt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(t,e){if(t.uuid!==void 0)this.uuid=t.uuid;if(t.name!==void 0)this.name=t.name;if(t.color!==void 0&&this.color!==void 0)this.color.setHex(t.color);if(t.roughness!==void 0)this.roughness=t.roughness;if(t.metalness!==void 0)this.metalness=t.metalness;if(t.sheen!==void 0)this.sheen=t.sheen;if(t.sheenColor!==void 0)this.sheenColor=new Ot().setHex(t.sheenColor);if(t.sheenRoughness!==void 0)this.sheenRoughness=t.sheenRoughness;if(t.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(t.emissive);if(t.specular!==void 0&&this.specular!==void 0)this.specular.setHex(t.specular);if(t.specularIntensity!==void 0)this.specularIntensity=t.specularIntensity;if(t.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(t.specularColor);if(t.shininess!==void 0)this.shininess=t.shininess;if(t.clearcoat!==void 0)this.clearcoat=t.clearcoat;if(t.clearcoatRoughness!==void 0)this.clearcoatRoughness=t.clearcoatRoughness;if(t.dispersion!==void 0)this.dispersion=t.dispersion;if(t.retroreflectivity!==void 0)this.retroreflectivity=t.retroreflectivity;if(t.iridescence!==void 0)this.iridescence=t.iridescence;if(t.iridescenceIOR!==void 0)this.iridescenceIOR=t.iridescenceIOR;if(t.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=t.iridescenceThicknessRange;if(t.transmission!==void 0)this.transmission=t.transmission;if(t.thickness!==void 0)this.thickness=t.thickness;if(t.attenuationDistance!==void 0)this.attenuationDistance=t.attenuationDistance;if(t.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(t.attenuationColor);if(t.anisotropy!==void 0)this.anisotropy=t.anisotropy;if(t.anisotropyRotation!==void 0)this.anisotropyRotation=t.anisotropyRotation;if(t.fog!==void 0)this.fog=t.fog;if(t.flatShading!==void 0)this.flatShading=t.flatShading;if(t.blending!==void 0)this.blending=t.blending;if(t.combine!==void 0)this.combine=t.combine;if(t.side!==void 0)this.side=t.side;if(t.shadowSide!==void 0)this.shadowSide=t.shadowSide;if(t.opacity!==void 0)this.opacity=t.opacity;if(t.transparent!==void 0)this.transparent=t.transparent;if(t.alphaTest!==void 0)this.alphaTest=t.alphaTest;if(t.alphaHash!==void 0)this.alphaHash=t.alphaHash;if(t.depthFunc!==void 0)this.depthFunc=t.depthFunc;if(t.depthTest!==void 0)this.depthTest=t.depthTest;if(t.depthWrite!==void 0)this.depthWrite=t.depthWrite;if(t.colorWrite!==void 0)this.colorWrite=t.colorWrite;if(t.clippingPlanes!==void 0)this.clippingPlanes=t.clippingPlanes.map((n)=>new en().fromJSON(n));if(t.clipIntersection!==void 0)this.clipIntersection=t.clipIntersection;if(t.clipShadows!==void 0)this.clipShadows=t.clipShadows;if(t.depthPacking!==void 0)this.depthPacking=t.depthPacking;if(t.blendSrc!==void 0)this.blendSrc=t.blendSrc;if(t.blendDst!==void 0)this.blendDst=t.blendDst;if(t.blendEquation!==void 0)this.blendEquation=t.blendEquation;if(t.blendSrcAlpha!==void 0)this.blendSrcAlpha=t.blendSrcAlpha;if(t.blendDstAlpha!==void 0)this.blendDstAlpha=t.blendDstAlpha;if(t.blendEquationAlpha!==void 0)this.blendEquationAlpha=t.blendEquationAlpha;if(t.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(t.blendColor);if(t.blendAlpha!==void 0)this.blendAlpha=t.blendAlpha;if(t.stencilWriteMask!==void 0)this.stencilWriteMask=t.stencilWriteMask;if(t.stencilFunc!==void 0)this.stencilFunc=t.stencilFunc;if(t.stencilRef!==void 0)this.stencilRef=t.stencilRef;if(t.stencilFuncMask!==void 0)this.stencilFuncMask=t.stencilFuncMask;if(t.stencilFail!==void 0)this.stencilFail=t.stencilFail;if(t.stencilZFail!==void 0)this.stencilZFail=t.stencilZFail;if(t.stencilZPass!==void 0)this.stencilZPass=t.stencilZPass;if(t.stencilWrite!==void 0)this.stencilWrite=t.stencilWrite;if(t.wireframe!==void 0)this.wireframe=t.wireframe;if(t.wireframeLinewidth!==void 0)this.wireframeLinewidth=t.wireframeLinewidth;if(t.wireframeLinecap!==void 0)this.wireframeLinecap=t.wireframeLinecap;if(t.wireframeLinejoin!==void 0)this.wireframeLinejoin=t.wireframeLinejoin;if(t.rotation!==void 0)this.rotation=t.rotation;if(t.linewidth!==void 0)this.linewidth=t.linewidth;if(t.linecap!==void 0)this.linecap=t.linecap;if(t.linejoin!==void 0)this.linejoin=t.linejoin;if(t.dashSize!==void 0)this.dashSize=t.dashSize;if(t.gapSize!==void 0)this.gapSize=t.gapSize;if(t.scale!==void 0)this.scale=t.scale;if(t.polygonOffset!==void 0)this.polygonOffset=t.polygonOffset;if(t.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=t.polygonOffsetFactor;if(t.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=t.polygonOffsetUnits;if(t.dithering!==void 0)this.dithering=t.dithering;if(t.alphaToCoverage!==void 0)this.alphaToCoverage=t.alphaToCoverage;if(t.premultipliedAlpha!==void 0)this.premultipliedAlpha=t.premultipliedAlpha;if(t.forceSinglePass!==void 0)this.forceSinglePass=t.forceSinglePass;if(t.allowOverride!==void 0)this.allowOverride=t.allowOverride;if(t.visible!==void 0)this.visible=t.visible;if(t.toneMapped!==void 0)this.toneMapped=t.toneMapped;if(t.userData!==void 0)this.userData=t.userData;if(t.vertexColors!==void 0)if(typeof t.vertexColors==="number")this.vertexColors=t.vertexColors>0;else this.vertexColors=t.vertexColors;if(t.size!==void 0)this.size=t.size;if(t.sizeAttenuation!==void 0)this.sizeAttenuation=t.sizeAttenuation;if(t.map!==void 0)this.map=e[t.map]||null;if(t.matcap!==void 0)this.matcap=e[t.matcap]||null;if(t.alphaMap!==void 0)this.alphaMap=e[t.alphaMap]||null;if(t.bumpMap!==void 0)this.bumpMap=e[t.bumpMap]||null;if(t.bumpScale!==void 0)this.bumpScale=t.bumpScale;if(t.normalMap!==void 0)this.normalMap=e[t.normalMap]||null;if(t.normalMapType!==void 0)this.normalMapType=t.normalMapType;if(t.normalScale!==void 0){let n=t.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new At().fromArray(n)}if(t.displacementMap!==void 0)this.displacementMap=e[t.displacementMap]||null;if(t.displacementScale!==void 0)this.displacementScale=t.displacementScale;if(t.displacementBias!==void 0)this.displacementBias=t.displacementBias;if(t.roughnessMap!==void 0)this.roughnessMap=e[t.roughnessMap]||null;if(t.metalnessMap!==void 0)this.metalnessMap=e[t.metalnessMap]||null;if(t.emissiveMap!==void 0)this.emissiveMap=e[t.emissiveMap]||null;if(t.emissiveIntensity!==void 0)this.emissiveIntensity=t.emissiveIntensity;if(t.specularMap!==void 0)this.specularMap=e[t.specularMap]||null;if(t.specularIntensityMap!==void 0)this.specularIntensityMap=e[t.specularIntensityMap]||null;if(t.specularColorMap!==void 0)this.specularColorMap=e[t.specularColorMap]||null;if(t.envMap!==void 0)this.envMap=e[t.envMap]||null;if(t.envMapRotation!==void 0)this.envMapRotation.fromArray(t.envMapRotation);if(t.envMapIntensity!==void 0)this.envMapIntensity=t.envMapIntensity;if(t.reflectivity!==void 0)this.reflectivity=t.reflectivity;if(t.refractionRatio!==void 0)this.refractionRatio=t.refractionRatio;if(t.lightMap!==void 0)this.lightMap=e[t.lightMap]||null;if(t.lightMapIntensity!==void 0)this.lightMapIntensity=t.lightMapIntensity;if(t.aoMap!==void 0)this.aoMap=e[t.aoMap]||null;if(t.aoMapIntensity!==void 0)this.aoMapIntensity=t.aoMapIntensity;if(t.gradientMap!==void 0)this.gradientMap=e[t.gradientMap]||null;if(t.clearcoatMap!==void 0)this.clearcoatMap=e[t.clearcoatMap]||null;if(t.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null;if(t.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null;if(t.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new At().fromArray(t.clearcoatNormalScale);if(t.iridescenceMap!==void 0)this.iridescenceMap=e[t.iridescenceMap]||null;if(t.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null;if(t.transmissionMap!==void 0)this.transmissionMap=e[t.transmissionMap]||null;if(t.thicknessMap!==void 0)this.thicknessMap=e[t.thicknessMap]||null;if(t.anisotropyMap!==void 0)this.anisotropyMap=e[t.anisotropyMap]||null;if(t.sheenColorMap!==void 0)this.sheenColorMap=e[t.sheenColorMap]||null;if(t.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}}class Cn extends vi{constructor(t){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var cs,Bs=new P,hs=new P,us=new P,ds=new At,zs=new At,fu=new Kt,wr=new P,Hs=new P,Ar=new P,$c=new At,oo=new At,jc=new At;class Hn extends Ie{constructor(t=new Cn){super();if(this.isSprite=!0,this.type="Sprite",cs===void 0){cs=new Le;let e=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),n=new ra(e,5);cs.setIndex([0,1,2,0,2,3]),cs.setAttribute("position",new vs(n,3,0,!1)),cs.setAttribute("uv",new vs(n,2,3,!1))}this.geometry=cs,this.material=t,this.center=new At(0.5,0.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){if(t.camera===null)Nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(hs.setFromMatrixScale(this.matrixWorld),fu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)hs.multiplyScalar(-us.z);let n=this.material.rotation,i,s;if(n!==0)s=Math.cos(n),i=Math.sin(n);let r=this.center;Rr(wr.set(-0.5,-0.5,0),us,r,hs,i,s),Rr(Hs.set(0.5,-0.5,0),us,r,hs,i,s),Rr(Ar.set(0.5,0.5,0),us,r,hs,i,s),$c.set(0,0),oo.set(1,0),jc.set(1,1);let a=t.ray.intersectTriangle(wr,Hs,Ar,!1,Bs);if(a===null){if(Rr(Hs.set(-0.5,0.5,0),us,r,hs,i,s),oo.set(0,1),a=t.ray.intersectTriangle(wr,Ar,Hs,!1,Bs),a===null)return}let o=t.ray.origin.distanceTo(Bs);if(o<t.near||o>t.far)return;e.push({distance:o,point:Bs.clone(),uv:hn.getInterpolation(Bs,wr,Hs,Ar,$c,oo,jc,new At),face:null,object:this})}copy(t,e){if(super.copy(t,e),t.center!==void 0)this.center.copy(t.center);return this.material=t.material,this}}function Rr(t,e,n,i,s,r){if(ds.subVectors(t,n).addScalar(0.5).multiply(i),s!==void 0)zs.x=r*ds.x-s*ds.y,zs.y=s*ds.x+r*ds.y;else zs.copy(ds);t.copy(e),t.x+=zs.x,t.y+=zs.y,t.applyMatrix4(fu)}var $n=new P,lo=new P,Cr=new P,Pr=new P;class ws{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=$n.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return $n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){lo.copy(t).add(e).multiplyScalar(0.5),Cr.copy(e).sub(t).normalize(),Pr.copy(this.origin).sub(lo);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(Cr),a=Pr.dot(this.direction),o=-Pr.dot(Cr),l=Pr.lengthSq(),c=Math.abs(1-r*r),h,d,u,p;if(c>0)if(h=r*o-a,d=r*a-o,p=s*c,h>=0)if(d>=-p)if(d<=p){let x=1/c;h*=x,d*=x,u=h*(h+r*d+2*a)+d*(r*h+d+2*o)+l}else d=s,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*o)+l;else d=-s,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*o)+l;else if(d<=-p)h=Math.max(0,-(-r*s+a)),d=h>0?-s:Math.min(Math.max(-s,-o),s),u=-h*h+d*(d+2*o)+l;else if(d<=p)h=0,d=Math.min(Math.max(-s,-o),s),u=d*(d+2*o)+l;else h=Math.max(0,-(r*s+a)),d=h>0?s:Math.min(Math.max(-s,-o),s),u=-h*h+d*(d+2*o)+l;else d=r>0?-s:s,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,h);if(i)i.copy(lo).addScaledVector(Cr,d);return u}intersectSphere(t,e){if(t.radius<0)return null;$n.subVectors(t.center,this.origin);let n=$n.dot(this.direction),i=$n.dot($n)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,e);return this.at(a,e)}intersectsSphere(t){if(t.radius<0)return!1;return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;if(l>=0)n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l;else n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l;if(c>=0)s=(t.min.y-d.y)*c,r=(t.max.y-d.y)*c;else s=(t.max.y-d.y)*c,r=(t.min.y-d.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(h>=0)a=(t.min.z-d.z)*h,o=(t.max.z-d.z)*h;else a=(t.max.z-d.z)*h,o=(t.min.z-d.z)*h;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,n,i,s){let r=this.origin,a=this.direction,{x:o,y:l,z:c}=a,h=t.x-r.x,d=t.y-r.y,u=t.z-r.z,p=e.x-r.x,x=e.y-r.y,M=e.z-r.z,m=n.x-r.x,f=n.y-r.y,E=n.z-r.z,R=Math.abs(o),v=Math.abs(l),T=Math.abs(c),A,w,g,S,G,I,B,j,L,q,et,V;if(R>=v&&R>=T)if(g=o,I=h,L=p,V=m,o>=0)A=l,w=c,S=d,G=u,B=x,j=M,q=f,et=E;else A=c,w=l,S=u,G=d,B=M,j=x,q=E,et=f;else if(v>=T)if(g=l,I=d,L=x,V=f,l>=0)A=c,w=o,S=u,G=h,B=M,j=p,q=E,et=m;else A=o,w=c,S=h,G=u,B=p,j=M,q=m,et=E;else if(g=c,I=u,L=M,V=E,c>=0)A=o,w=l,S=h,G=d,B=p,j=x,q=m,et=f;else A=l,w=o,S=d,G=h,B=x,j=p,q=f,et=m;if(g===0)return null;let st=A/g,C=w/g,N=1/g,Z=S-st*I,rt=G-C*I,lt=B-st*L,Ct=j-C*L,Et=q-st*V,z=et-C*V,tt=Et*Ct-z*lt,K=Z*z-rt*Et,ct=lt*rt-Ct*Z;if(i){if(tt<0||K<0||ct<0)return null}else if((tt<0||K<0||ct<0)&&(tt>0||K>0||ct>0))return null;let vt=tt+K+ct;if(vt===0)return null;let mt=N*(tt*I+K*L+ct*V);if(vt>0?mt<0:mt>0)return null;return this.at(mt/vt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke extends vi{constructor(t){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var Qc=new Kt,Ai=new ws,Ir=new Oi,th=new P,Lr=new P,Nr=new P,Dr=new P,co=new P,Ur=new P,eh=new P,Fr=new P;class Yt extends Ie{constructor(t=new Le,e=new Ke){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Ur.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],h=s[o];if(c===0)continue;if(co.fromBufferAttribute(h,t),r)Ur.addScaledVector(co,c);else Ur.addScaledVector(co.sub(e),c)}e.add(Ur)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(Ir.copy(n.boundingSphere),Ir.applyMatrix4(s),Ai.copy(t.ray).recast(t.near),Ir.containsPoint(Ai.origin)===!1){if(Ai.intersectSphere(Ir,th)===null)return;if(Ai.origin.distanceToSquared(th)>(t.far-t.near)**2)return}if(Qc.copy(s).invert(),Ai.copy(t.ray).applyMatrix4(Qc),n.boundingBox!==null){if(Ai.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,Ai)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,{groups:d,drawRange:u}=s;if(a!==null)if(Array.isArray(r))for(let p=0,x=d.length;p<x;p++){let M=d[p],m=r[M.materialIndex],f=Math.max(M.start,u.start),E=Math.min(a.count,Math.min(M.start+M.count,u.start+u.count));for(let R=f,v=E;R<v;R+=3){let T=a.getX(R),A=a.getX(R+1),w=a.getX(R+2);if(i=Or(this,m,t,n,l,c,h,T,A,w),i)i.faceIndex=Math.floor(R/3),i.face.materialIndex=M.materialIndex,e.push(i)}}else{let p=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let M=p,m=x;M<m;M+=3){let f=a.getX(M),E=a.getX(M+1),R=a.getX(M+2);if(i=Or(this,r,t,n,l,c,h,f,E,R),i)i.faceIndex=Math.floor(M/3),e.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let p=0,x=d.length;p<x;p++){let M=d[p],m=r[M.materialIndex],f=Math.max(M.start,u.start),E=Math.min(o.count,Math.min(M.start+M.count,u.start+u.count));for(let R=f,v=E;R<v;R+=3){let T=R,A=R+1,w=R+2;if(i=Or(this,m,t,n,l,c,h,T,A,w),i)i.faceIndex=Math.floor(R/3),i.face.materialIndex=M.materialIndex,e.push(i)}}else{let p=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let M=p,m=x;M<m;M+=3){let f=M,E=M+1,R=M+2;if(i=Or(this,r,t,n,l,c,h,f,E,R),i)i.faceIndex=Math.floor(M/3),e.push(i)}}}}function Jf(t,e,n,i,s,r,a,o){let l;if(e.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,e.side===0,o);if(l===null)return null;Fr.copy(o),Fr.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Fr);if(c<n.near||c>n.far)return null;return{distance:c,point:Fr.clone(),object:t}}function Or(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,Lr),t.getVertexPosition(l,Nr),t.getVertexPosition(c,Dr);let h=Jf(t,e,n,i,Lr,Nr,Dr,eh);if(h){let d=new P;if(hn.getBarycoord(eh,Lr,Nr,Dr,d),s)h.uv=hn.getInterpolatedAttribute(s,o,l,c,d,new At);if(r)h.uv1=hn.getInterpolatedAttribute(r,o,l,c,d,new At);if(a){if(h.normal=hn.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(i.direction)>0)h.normal.multiplyScalar(-1)}let u={a:o,b:l,c,normal:new P,materialIndex:0};hn.getNormal(Lr,Nr,Dr,u.normal),h.face=u,h.barycoord=d}return h}class aa extends He{constructor(t=null,e=1,n=1,i,s,r,a,o,l=1003,c=1003,h,d){super(null,r,a,o,l,c,i,s,h,d);this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ys extends ke{constructor(t,e,n,i=1){super(t,e,n);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}var fs=new Kt,nh=new Kt,Br=[],ih=new Rn,Kf=new Kt,ks=new Yt,Gs=new Oi;class oa extends Yt{constructor(t,e,n){super(t,e);this.isInstancedMesh=!0,this.instanceMatrix=new Ys(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Kf)}computeBoundingBox(){let t=this.geometry,e=this.count;if(this.boundingBox===null)this.boundingBox=new Rn;if(t.boundingBox===null)t.computeBoundingBox();this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fs),ih.copy(t.boundingBox).applyMatrix4(fs),this.boundingBox.union(ih)}computeBoundingSphere(){let t=this.geometry,e=this.count;if(this.boundingSphere===null)this.boundingSphere=new Oi;if(t.boundingSphere===null)t.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fs),Gs.copy(t.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(Gs)}copy(t,e){if(super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null)this.morphTexture=t.morphTexture.clone();if(t.instanceColor!==null)this.instanceColor=t.instanceColor.clone();if(this.count=t.count,t.boundingBox!==null)this.boundingBox=t.boundingBox.clone();if(t.boundingSphere!==null)this.boundingSphere=t.boundingSphere.clone();return this}getColorAt(t,e){if(this.instanceColor===null)return e.setRGB(1,1,1);else return e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Gs.copy(this.boundingSphere),Gs.applyMatrix4(n),t.ray.intersectsSphere(Gs)===!1)return;for(let s=0;s<i;s++){this.getMatrixAt(s,fs),nh.multiplyMatrices(n,fs),ks.matrixWorld=nh,ks.raycast(t,Br);for(let r=0,a=Br.length;r<a;r++){let o=Br[r];o.instanceId=s,o.object=this,e.push(o)}Br.length=0}}setColorAt(t,e){if(this.instanceColor===null)this.instanceColor=new Ys(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;if(this.morphTexture===null)this.morphTexture=new aa(new Float32Array(i*this.count),i,this.count,1028,1015);let s=this.morphTexture.source.data.data,r=0;for(let l=0;l<n.length;l++)r+=n[l];let a=this.geometry.morphTargetsRelative?1:1-r,o=i*t;return s[o]=a,s.set(n,o+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var Ri=new Oi,$f=new At(0.5,0.5),zr=new P;class nr{constructor(t=new en,e=new en,n=new en,i=new en,s=new en,r=new en){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],x=s[9],M=s[10],m=s[11],f=s[12],E=s[13],R=s[14],v=s[15];if(i[0].setComponents(l-r,u-c,m-p,v-f).normalize(),i[1].setComponents(l+r,u+c,m+p,v+f).normalize(),i[2].setComponents(l+a,u+h,m+x,v+E).normalize(),i[3].setComponents(l-a,u-h,m-x,v-E).normalize(),n)i[4].setComponents(o,d,M,R).normalize(),i[5].setComponents(l-o,u-d,m-M,v-R).normalize();else if(i[4].setComponents(l-o,u-d,m-M,v-R).normalize(),e===2000)i[5].setComponents(l+o,u+d,m+M,v+R).normalize();else if(e===2001)i[5].setComponents(o,d,M,R).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){Ri.center.set(0,0,0);let e=$f.distanceTo(t.center);return Ri.radius=0.7071067811865476+e,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(zr.x=i.normal.x>0?t.max.x:t.min.x,zr.y=i.normal.y>0?t.max.y:t.min.y,zr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(zr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class la extends He{constructor(t=[],e=301,n,i,s,r,a,o,l,c){super(t,e,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ca extends He{constructor(t,e,n,i,s,r,a,o,l){super(t,e,n,i,s,r,a,o,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bi extends He{constructor(t,e,n=1014,i,s,r,a=1003,o=1003,l,c=1026,h=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class _l extends Bi{constructor(t,e=1014,n=301,i,s,r=1003,a=1003,o,l=1026){let c={width:t,height:t,depth:1},h=[c,c,c,c,c,c];super(t,t,e,n,i,s,r,a,o,l);this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ha extends He{constructor(t=null){super();this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Si extends Le{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],h=[],d=0,u=0;p("z","y","x",-1,-1,n,e,t,r,s,0),p("z","y","x",1,-1,n,e,-t,r,s,1),p("x","z","y",1,1,t,n,e,i,r,2),p("x","z","y",1,-1,t,n,-e,i,r,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(h,2));function p(x,M,m,f,E,R,v,T,A,w,g){let S=R/A,G=v/w,I=R/2,B=v/2,j=T/2,L=A+1,q=w+1,et=0,V=0,st=new P;for(let C=0;C<q;C++){let N=C*G-B;for(let Z=0;Z<L;Z++){let rt=Z*S-I;st[x]=rt*f,st[M]=N*E,st[m]=j,l.push(st.x,st.y,st.z),st[x]=0,st[M]=0,st[m]=T>0?1:-1,c.push(st.x,st.y,st.z),h.push(Z/A),h.push(1-C/w),et+=1}}for(let C=0;C<w;C++)for(let N=0;N<A;N++){let Z=d+N+L*C,rt=d+N+L*(C+1),lt=d+(N+1)+L*(C+1),Ct=d+(N+1)+L*C;o.push(Z,rt,Ct),o.push(rt,lt,Ct),V+=6}a.addGroup(u,V,g),u+=V,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class zi extends Le{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o};let l=this;i=Math.floor(i),s=Math.floor(s);let c=[],h=[],d=[],u=[],p=0,x=[],M=n/2,m=0;if(f(),r===!1){if(t>0)E(!0);if(e>0)E(!1)}this.setIndex(c),this.setAttribute("position",new Te(h,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(u,2));function f(){let R=new P,v=new P,T=0,A=(e-t)/n;for(let w=0;w<=s;w++){let g=[],S=w/s,G=S*(e-t)+t;for(let I=0;I<=i;I++){let B=I/i,j=B*o+a,L=Math.sin(j),q=Math.cos(j);v.x=G*L,v.y=-S*n+M,v.z=G*q,h.push(v.x,v.y,v.z),R.set(L,A,q).normalize(),d.push(R.x,R.y,R.z),u.push(B,1-S),g.push(p++)}x.push(g)}for(let w=0;w<i;w++)for(let g=0;g<s;g++){let S=x[g][w],G=x[g+1][w],I=x[g+1][w+1],B=x[g][w+1];if(t>0||g!==0)c.push(S,G,B),T+=3;if(e>0||g!==s-1)c.push(G,I,B),T+=3}l.addGroup(m,T,0),m+=T}function E(R){let v=p,T=new At,A=new P,w=0,g=R===!0?t:e,S=R===!0?1:-1;for(let I=1;I<=i;I++)h.push(0,M*S,0),d.push(0,S,0),u.push(0.5,0.5),p++;let G=p;for(let I=0;I<=i;I++){let j=I/i*o+a,L=Math.cos(j),q=Math.sin(j);A.x=g*q,A.y=M*S,A.z=g*L,h.push(A.x,A.y,A.z),d.push(0,S,0),T.x=L*0.5+0.5,T.y=q*0.5*S+0.5,u.push(T.x,T.y),p++}for(let I=0;I<i;I++){let B=v+I,j=G+I;if(R===!0)c.push(j,j+1,B);else c.push(j+1,j,B);w+=3}l.addGroup(m,w,R===!0?1:2),m+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ua extends Le{constructor(t=[],e=[],n=1,i=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],r=[];if(a(i),l(n),c(),this.setAttribute("position",new Te(s,3)),this.setAttribute("normal",new Te(s.slice(),3)),this.setAttribute("uv",new Te(r,2)),i===0)this.computeVertexNormals();else this.normalizeNormals();function a(f){let E=new P,R=new P,v=new P;for(let T=0;T<e.length;T+=3)u(e[T+0],E),u(e[T+1],R),u(e[T+2],v),o(E,R,v,f)}function o(f,E,R,v){let T=v+1,A=[];for(let w=0;w<=T;w++){A[w]=[];let g=f.clone().lerp(R,w/T),S=E.clone().lerp(R,w/T),G=T-w;for(let I=0;I<=G;I++)if(I===0&&w===T)A[w][I]=g;else A[w][I]=g.clone().lerp(S,I/G)}for(let w=0;w<T;w++)for(let g=0;g<2*(T-w)-1;g++){let S=Math.floor(g/2);if(g%2===0)d(A[w][S+1]),d(A[w+1][S]),d(A[w][S]);else d(A[w][S+1]),d(A[w+1][S+1]),d(A[w+1][S])}}function l(f){let E=new P;for(let R=0;R<s.length;R+=3)E.x=s[R+0],E.y=s[R+1],E.z=s[R+2],E.normalize().multiplyScalar(f),s[R+0]=E.x,s[R+1]=E.y,s[R+2]=E.z}function c(){let f=new P;for(let E=0;E<s.length;E+=3){f.x=s[E+0],f.y=s[E+1],f.z=s[E+2];let R=M(f)/2/Math.PI+0.5,v=m(f)/Math.PI+0.5;r.push(R,1-v)}p(),h()}function h(){for(let f=0;f<r.length;f+=6){let E=r[f+0],R=r[f+2],v=r[f+4],T=Math.max(E,R,v),A=Math.min(E,R,v);if(T>0.9&&A<0.1){if(E<0.2)r[f+0]+=1;if(R<0.2)r[f+2]+=1;if(v<0.2)r[f+4]+=1}}}function d(f){s.push(f.x,f.y,f.z)}function u(f,E){let R=f*3;E.x=t[R+0],E.y=t[R+1],E.z=t[R+2]}function p(){let f=new P,E=new P,R=new P,v=new P,T=new At,A=new At,w=new At;for(let g=0,S=0;g<s.length;g+=9,S+=6){f.set(s[g+0],s[g+1],s[g+2]),E.set(s[g+3],s[g+4],s[g+5]),R.set(s[g+6],s[g+7],s[g+8]),T.set(r[S+0],r[S+1]),A.set(r[S+2],r[S+3]),w.set(r[S+4],r[S+5]),v.copy(f).add(E).add(R).divideScalar(3);let G=M(v);x(T,S+0,f,G),x(A,S+2,E,G),x(w,S+4,R,G)}}function x(f,E,R,v){if(v<0&&f.x===1)r[E]=f.x-1;if(R.x===0&&R.z===0)r[E]=v/2/Math.PI+0.5}function M(f){return Math.atan2(f.z,-f.x)}function m(f){return Math.atan2(-f.y,Math.sqrt(f.x*f.x+f.z*f.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ua(t.vertices,t.indices,t.radius,t.detail)}}class Hi extends ua{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e);this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Hi(t.radius,t.detail)}}class bi extends Le{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,h=t/a,d=e/o,u=[],p=[],x=[],M=[];for(let m=0;m<c;m++){let f=m*d-r;for(let E=0;E<l;E++){let R=E*h-s;p.push(R,-f,0),x.push(0,0,1),M.push(E/a),M.push(1-m/o)}}for(let m=0;m<o;m++)for(let f=0;f<a;f++){let E=f+l*m,R=f+l*(m+1),v=f+1+l*(m+1),T=f+1+l*m;u.push(E,R,T),u.push(R,v,T)}this.setIndex(u),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(x,3)),this.setAttribute("uv",new Te(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.width,t.height,t.widthSegments,t.heightSegments)}}class ei extends Le{constructor(t=0.5,e=1,n=32,i=1,s=0,r=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);let a=[],o=[],l=[],c=[],h=t,d=(e-t)/i,u=new P,p=new At;for(let x=0;x<=i;x++){for(let M=0;M<=n;M++){let m=s+M/n*r;u.x=h*Math.cos(m),u.y=h*Math.sin(m),o.push(u.x,u.y,u.z),l.push(0,0,1),p.x=(u.x/e+1)/2,p.y=(u.y/e+1)/2,c.push(p.x,p.y)}h+=d}for(let x=0;x<i;x++){let M=x*(n+1);for(let m=0;m<n;m++){let f=m+M,E=f,R=f+n+1,v=f+n+2,T=f+1;a.push(E,R,T),a.push(R,v,T)}}this.setIndex(a),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ei(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}function ki(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(sh(s))if(s.isRenderTargetTexture)Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))if(sh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Ye(t){let e={};for(let n=0;n<t.length;n++){let i=ki(t[n]);for(let s in i)e[s]=i[s]}return e}function sh(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function jf(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function xl(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return qt.workingColorSpace}var pu={clone:ki,merge:Ye},Qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends vi{constructor(t){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qf,this.fragmentShader=tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ki(t.uniforms),this.uniformsGroups=jf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Ot().setHex(i.value);break;case"v2":this.uniforms[n].value=new At().fromArray(i.value);break;case"v3":this.uniforms[n].value=new P().fromArray(i.value);break;case"v4":this.uniforms[n].value=new xe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ft().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Kt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0)this.defines=t.defines;if(t.vertexShader!==void 0)this.vertexShader=t.vertexShader;if(t.fragmentShader!==void 0)this.fragmentShader=t.fragmentShader;if(t.glslVersion!==void 0)this.glslVersion=t.glslVersion;if(t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];if(t.lights!==void 0)this.lights=t.lights;if(t.clipping!==void 0)this.clipping=t.clipping;return this}}class yl extends pn{constructor(t){super(t);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mi extends vi{constructor(t){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vl extends vi{constructor(t){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sl extends vi{constructor(t){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function ps(t,e){if(!t||t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}function ho(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}class Gi{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];if(t<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let a=n+r>>>1;if(t<e[a])r=a;else n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class bl extends Gi{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,a=2*e-n;break;case 2402:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,o=2*n-e;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=t-1,o=e}let l=(n-e)*0.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(n-e)/(i-e),x=p*p,M=x*p,m=-d*M+2*d*x-d*p,f=(1+d)*M+(-1.5-2*d)*x+(-0.5+d)*p+1,E=(-1-u)*M+(1.5+u)*x+0.5*p,R=u*M-u*x;for(let v=0;v!==a;++v)s[v]=m*r[c+v]+f*r[l+v]+E*r[o+v]+R*r[h+v];return s}}class Ml extends Gi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),h=1-c;for(let d=0;d!==a;++d)s[d]=r[l+d]*h+r[o+d]*c;return s}}class El extends Gi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Tl extends Gi{interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.inTangents,h=this.outTangents;if(!c||!h){let p=(n-e)/(i-e),x=1-p;for(let M=0;M!==a;++M)s[M]=r[l+M]*x+r[o+M]*p;return s}let d=a*2,u=t-1;for(let p=0;p!==a;++p){let x=r[l+p],M=r[o+p],m=u*d+p*2,f=h[m],E=h[m+1],R=t*d+p*2,v=c[R],T=c[R+1],A=np(n,e,f,v,i);s[p]=mu(A,x,E,T,M)}return s}}function mu(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function ep(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function np(t,e,n,i,s){let r=(t-e)/(s-e);for(let a=0;a<8;a++){let o=mu(r,e,n,i,s)-t;if(Math.abs(o)<0.0000000001)break;let l=ep(r,e,n,i,s);if(Math.abs(l)<0.0000000001)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class mn{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ps(e,this.TimeBufferType),this.values=ps(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ps(t.times,Array),values:ps(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i;if(ho(t.settings))n.settings={inTangents:ps(t.settings.inTangents,Array),outTangents:ps(t.settings.outTangents,Array)}}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new El(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new bl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Tl(this.times,this.values,this.getValueSize(),t);if(this.settings)e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents;return e}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break;case 2303:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return Dt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;if(ho(this.settings))rh(this.settings.inTangents,t),rh(this.settings.outTangents,t)}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)Nt("KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)Nt("KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){Nt("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(r!==null&&r>o){Nt("KeyframeTrack: Out of order keys.",this,a,o,r),t=!1;break}r=o}if(i!==void 0){if(gf(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){Nt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=t[a],c=t[a+1];if(l!==c&&(a!==1||l!==t[0]))if(!i){let h=a*n,d=h-n,u=h+n;for(let p=0;p!==n;++p){let x=e[h+p];if(x!==e[d+p]||x!==e[u+p]){o=!0;break}}}else o=!0;if(o){if(a!==r){t[r]=t[a];let h=a*n,d=r*n;for(let u=0;u!==n;++u)e[d+u]=e[h+u]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)e[o+l]=e[a+l];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);if(i.createInterpolant=this.createInterpolant,ho(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function rh(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=2301;class Vi extends mn{constructor(t,e,n){super(t,e,n)}}Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=2300;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;class wl extends mn{constructor(t,e,n,i){super(t,e,n,i)}}wl.prototype.ValueTypeName="color";class Al extends mn{constructor(t,e,n,i){super(t,e,n,i)}}Al.prototype.ValueTypeName="number";class Rl extends Gi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let c=l+a;l!==c;l+=4)qe.slerpFlat(s,0,r,l-a,r,l,o);return s}}class da extends mn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Rl(this.times,this.values,this.getValueSize(),t)}}da.prototype.ValueTypeName="quaternion";da.prototype.InterpolantFactoryMethodSmooth=void 0;class Wi extends mn{constructor(t,e,n){super(t,e,n)}}Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=2300;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;class Cl extends mn{constructor(t,e,n,i){super(t,e,n,i)}}Cl.prototype.ValueTypeName="vector";class Pl{constructor(t,e,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);if(h!==-1)l.splice(h,2);return this},this.getHandler=function(c){for(let h=0,d=l.length;h<d;h+=2){let u=l[h],p=l[h+1];if(u.global)u.lastIndex=0;if(u.test(c))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var gu=new Pl;class Il{constructor(t){if(this.manager=t!==void 0?t:gu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Il.DEFAULT_MATERIAL_NAME="__DEFAULT";class ir extends Ie{constructor(t,e=1){super();this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class fa extends ir{constructor(t,e,n){super(t,n);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}var uo=new Kt,ah=new P,oh=new P;class pa{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ah.setFromMatrixPosition(t.matrixWorld),e.position.copy(ah),oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(oh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){uo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(uo,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,a=i?i.w/s.y:1,o=i?i.x/s.x:0,l=i?i.y/s.y:0;if(t.coordinateSystem===2001||t.reversedDepth)e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,1,0,0,0,0,1);else e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,0.5,0.5,0,0,0,1);e.multiply(uo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}var Hr=new P,kr=new qe,Nn=new P;class ma extends Ie{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.matrixWorld.decompose(Hr,kr,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Hr,kr,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){if(super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Hr,kr,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Hr,kr,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var gi=new P,lh=new At,ch=new At;class Xe extends ma{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Vs*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(Vs*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,lh,ch),e.subVectors(ch,lh)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Vs*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,e-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=t*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class _u extends pa{constructor(){super(new Xe(90,1,0.5,500));this.isPointLightShadow=!0}}class ga extends ir{constructor(t,e,n=0,i=2){super(t,e);this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new _u}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class sr extends ma{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}class xu extends pa{constructor(){super(new sr(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class _a extends ir{constructor(t,e){super(t,e);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new xu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}var ms=-90,gs=1;class Ll extends Ie{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Xe(ms,gs,t,e);i.layers=this.layers,this.add(i);let s=new Xe(ms,gs,t,e);s.layers=this.layers,this.add(s);let r=new Xe(ms,gs,t,e);r.layers=this.layers,this.add(r);let a=new Xe(ms,gs,t,e);a.layers=this.layers,this.add(a);let o=new Xe(ms,gs,t,e);o.layers=this.layers,this.add(o);let l=new Xe(ms,gs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let M=!1;if(t.isWebGLRenderer===!0)M=t.state.buffers.depth.getReversed();else M=t.reversedDepthBuffer;if(t.setRenderTarget(n,0,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,s),t.setRenderTarget(n,1,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,r),t.setRenderTarget(n,2,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,a),t.setRenderTarget(n,3,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,o),t.setRenderTarget(n,4,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),M&&t.autoClear===!1)t.clearDepth();t.render(e,c),t.setRenderTarget(h,d,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Nl extends Xe{constructor(t=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class xa{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){if(this._document=t,t.hidden!==void 0)this._pageVisibilityHandler=ip.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function ip(){if(this._document.hidden===!1)this.reset()}var Dl="\\[\\]\\.:\\/",sp=new RegExp("["+Dl+"]","g"),Ul="[^"+Dl+"]",rp="[^"+Dl.replace("\\.","")+"]",ap=/((?:WC+[\/:])*)/.source.replace("WC",Ul),op=/(WCOD+)?/.source.replace("WCOD",rp),lp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ul),cp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ul),hp=new RegExp("^"+ap+op+lp+cp+"$"),up=["material","materials","bones","map"];class yu{constructor(t,e,n){let i=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class oe{constructor(t,e,n){this.path=e,this.parsedPath=n||oe.parseTrackName(e),this.node=oe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new oe(t,e,n);else return new oe.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sp,"")}static parseTrackName(t){let e=hp.exec(t);if(e===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(up.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=e;if(!t)t=oe.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;Nt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;if(this.targetObject=t,t.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(t.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}oe.Composite=yu;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cy=new Float32Array(1);var hh=new Kt;class ya{constructor(t,e,n=0,i=1/0){this.ray=new ws(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new tr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){if(e.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,0.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e;else if(e.isOrthographicCamera)this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e;else Nt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return hh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hh),this}intersectObject(t,e=!0,n=[]){return fo(t,this,n,e),n.sort(uh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)fo(t[i],this,n,e);return n.sort(uh),n}}function uh(t,e){return t.distance-e.distance}function fo(t,e,n,i){let s=!0;if(t.layers.test(e.layers)){if(t.raycast(e,n)===!1)s=!1}if(s===!0&&i===!0){let r=t.children;for(let a=0,o=r.length;a<o;a++)fo(r[a],e,n,!0)}}class rr{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){if(this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(t,n),this.phi=Math.acos(Wt(e/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class Fl{static{Fl.prototype.isMatrix2=!0}constructor(t,e,n,i){if(this.elements=[1,0,0,1],t!==void 0)this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}}class va extends Bn{constructor(t,e=null){super();this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(this.domElement!==null)this.disconnect();this.domElement=t}disconnect(){}dispose(){}update(){}}function Ol(t,e,n,i){let s=dp(i);switch(n){case 1021:return t*e;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function dp(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)Dt("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function ku(){let t=null,e=!1,n=null,i=null;function s(r,a){i=t.requestAnimationFrame(s),n(r,a)}return{start:function(){if(e===!0)return;if(n===null)return;if(t===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){if(t!==null)t.cancelAnimationFrame(i);e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function gp(t){let e=new WeakMap;function n(o,l){let{array:c,usage:h}=o,d=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)p=t.HALF_FLOAT;else p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let{array:h,updateRanges:d}=l;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,h);else{d.sort((p,x)=>p.start-x.start);let u=0;for(let p=1;p<d.length;p++){let x=d[u],M=d[p];if(M.start<=x.start+x.count+1)x.count=Math.max(x.count,M.start+M.count-x.start);else++u,d[u]=M}d.length=u+1;for(let p=0,x=d.length;p<x;p++){let M=d[p];t.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return e.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=e.get(o);if(l)t.deleteBuffer(l.buffer),e.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let h=e.get(o);if(!h||h.version<o.version)e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var _p=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xp=`#ifdef USE_ALPHAHASH
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
#endif`,yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mp=`#ifdef USE_AOMAP
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
#endif`,Ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tp=`#ifdef USE_BATCHING
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
#endif`,wp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ip=`#ifdef USE_BUMPMAP
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
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hp=`#define PI 3.141592653589793
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
} // validated`,kp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gp=`vec3 transformedNormal = objectNormal;
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
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sm=`#ifdef USE_GRADIENTMAP
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
}`,rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
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
				#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,mm=`uniform sampler2D dfgLUT;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,gm=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_m=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
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
#endif`,xm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ym=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,vm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Am=`#if defined( USE_POINTS_UV )
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
#endif`,Rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`#ifdef USE_MORPHTARGETS
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
#endif`,Dm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Um=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hm=`#ifdef USE_NORMALMAP
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
#endif`,km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n0=`float getShadowMask() {
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
}`,i0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s0=`#ifdef USE_SKINNING
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
#endif`,r0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a0=`#ifdef USE_SKINNING
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
#endif`,o0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u0=`#ifdef USE_TRANSMISSION
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
#endif`,d0=`#ifdef USE_TRANSMISSION
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;var g0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x0=`uniform sampler2D t2D;
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`#include <common>
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
}`,E0=`#if DEPTH_PACKING == 3200
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
}`,T0=`#define DISTANCE
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
}`,w0=`#define DISTANCE
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`uniform float scale;
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
}`,P0=`uniform vec3 diffuse;
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
}`,I0=`#include <common>
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
}`,L0=`uniform vec3 diffuse;
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
}`,N0=`#define LAMBERT
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
}`,D0=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,U0=`#define MATCAP
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
}`,F0=`#define MATCAP
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
}`,O0=`#define NORMAL
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
}`,B0=`#define NORMAL
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
}`,z0=`#define PHONG
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
}`,H0=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,k0=`#define STANDARD
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
}`,G0=`#define STANDARD
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
#include <cube_uv_reflection_fragment>
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
}`,V0=`#define TOON
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
}`,W0=`#define TOON
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
}`,X0=`uniform float size;
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
}`,q0=`uniform vec3 diffuse;
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
}`,Y0=`#include <common>
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
}`,Z0=`uniform vec3 color;
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
}`,J0=`uniform float rotation;
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
}`,K0=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:_p,alphahash_pars_fragment:xp,alphamap_fragment:yp,alphamap_pars_fragment:vp,alphatest_fragment:Sp,alphatest_pars_fragment:bp,aomap_fragment:Mp,aomap_pars_fragment:Ep,batching_pars_vertex:Tp,batching_vertex:wp,begin_vertex:Ap,beginnormal_vertex:Rp,bsdfs:Cp,iridescence_fragment:Pp,bumpmap_pars_fragment:Ip,clipping_planes_fragment:Lp,clipping_planes_pars_fragment:Np,clipping_planes_pars_vertex:Dp,clipping_planes_vertex:Up,color_fragment:Fp,color_pars_fragment:Op,color_pars_vertex:Bp,color_vertex:zp,common:Hp,cube_uv_reflection_fragment:kp,defaultnormal_vertex:Gp,displacementmap_pars_vertex:Vp,displacementmap_vertex:Wp,emissivemap_fragment:Xp,emissivemap_pars_fragment:qp,colorspace_fragment:Yp,colorspace_pars_fragment:Zp,envmap_fragment:Jp,envmap_common_pars_fragment:Kp,envmap_pars_fragment:$p,envmap_pars_vertex:jp,envmap_physical_pars_fragment:cm,envmap_vertex:Qp,fog_vertex:tm,fog_pars_vertex:em,fog_fragment:nm,fog_pars_fragment:im,gradientmap_pars_fragment:sm,lightmap_pars_fragment:rm,lights_lambert_fragment:am,lights_lambert_pars_fragment:om,lights_pars_begin:lm,lights_toon_fragment:hm,lights_toon_pars_fragment:um,lights_phong_fragment:dm,lights_phong_pars_fragment:fm,lights_physical_fragment:pm,lights_physical_pars_fragment:mm,lights_fragment_begin:gm,lights_fragment_maps:_m,lights_fragment_end:xm,lightprobes_pars_fragment:ym,logdepthbuf_fragment:vm,logdepthbuf_pars_fragment:Sm,logdepthbuf_pars_vertex:bm,logdepthbuf_vertex:Mm,map_fragment:Em,map_pars_fragment:Tm,map_particle_fragment:wm,map_particle_pars_fragment:Am,metalnessmap_fragment:Rm,metalnessmap_pars_fragment:Cm,morphinstance_vertex:Pm,morphcolor_vertex:Im,morphnormal_vertex:Lm,morphtarget_pars_vertex:Nm,morphtarget_vertex:Dm,normal_fragment_begin:Um,normal_fragment_maps:Fm,normal_pars_fragment:Om,normal_pars_vertex:Bm,normal_vertex:zm,normalmap_pars_fragment:Hm,clearcoat_normal_fragment_begin:km,clearcoat_normal_fragment_maps:Gm,clearcoat_pars_fragment:Vm,iridescence_pars_fragment:Wm,opaque_fragment:Xm,packing:qm,premultiplied_alpha_fragment:Ym,project_vertex:Zm,dithering_fragment:Jm,dithering_pars_fragment:Km,roughnessmap_fragment:$m,roughnessmap_pars_fragment:jm,shadowmap_pars_fragment:Qm,shadowmap_pars_vertex:t0,shadowmap_vertex:e0,shadowmask_pars_fragment:n0,skinbase_vertex:i0,skinning_pars_vertex:s0,skinning_vertex:r0,skinnormal_vertex:a0,specularmap_fragment:o0,specularmap_pars_fragment:l0,tonemapping_fragment:c0,tonemapping_pars_fragment:h0,transmission_fragment:u0,transmission_pars_fragment:d0,uv_pars_fragment:f0,uv_pars_vertex:p0,uv_vertex:m0,worldpos_vertex:g0,background_vert:_0,background_frag:x0,backgroundCube_vert:y0,backgroundCube_frag:v0,cube_vert:S0,cube_frag:b0,depth_vert:M0,depth_frag:E0,distance_vert:T0,distance_frag:w0,equirect_vert:A0,equirect_frag:R0,linedashed_vert:C0,linedashed_frag:P0,meshbasic_vert:I0,meshbasic_frag:L0,meshlambert_vert:N0,meshlambert_frag:D0,meshmatcap_vert:U0,meshmatcap_frag:F0,meshnormal_vert:O0,meshnormal_frag:B0,meshphong_vert:z0,meshphong_frag:H0,meshphysical_vert:k0,meshphysical_frag:G0,meshtoon_vert:V0,meshtoon_frag:W0,points_vert:X0,points_frag:q0,shadow_vert:Y0,shadow_frag:Z0,sprite_vert:J0,sprite_frag:K0},pt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new At(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Gn={basic:{uniforms:Ye([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Ye([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Ye([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Ye([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Ye([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Ye([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Ye([pt.points,pt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Ye([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Ye([pt.common,pt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Ye([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Ye([pt.sprite,pt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:Ye([pt.common,pt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:Ye([pt.lights,pt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Gn.physical={uniforms:Ye([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var Sa={r:0,b:0,g:0},$0=new Kt,Gu=new Ft;Gu.set(-1,0,0,0,1,0,0,0,1);function j0(t,e,n,i,s,r){let a=new Ot(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function p(E){let R=E.isScene===!0?E.background:null;if(R&&R.isTexture){let v=E.backgroundBlurriness>0;R=e.get(R,v)}return R}function x(E){let R=!1,v=p(E);if(v===null)m(a,o);else if(v&&v.isColor)m(v,1),R=!0;let T=t.xr.getEnvironmentBlendMode();if(T==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(T==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(t.autoClear||R)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function M(E,R){let v=p(R);if(v&&(v.isCubeTexture||v.mapping===Js)){if(c===void 0)c=new Yt(new Si(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:ki(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($0.makeRotationFromEuler(R.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(Gu);if(c.material.toneMapped=qt.getTransfer(v.colorSpace)!==fe,h!==v||d!==v.version||u!==t.toneMapping)c.material.needsUpdate=!0,h=v,d=v.version,u=t.toneMapping;c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)}else if(v&&v.isTexture){if(l===void 0)l=new Yt(new bi(2,2),new pn({name:"BackgroundMaterial",uniforms:ki(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=qt.getTransfer(v.colorSpace)!==fe,v.matrixAutoUpdate===!0)v.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(v.matrix),h!==v||d!==v.version||u!==t.toneMapping)l.material.needsUpdate=!0,h=v,d=v.version,u=t.toneMapping;l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)}}function m(E,R){E.getRGB(Sa,xl(t)),n.buffers.color.setClear(Sa.r,Sa.g,Sa.b,R,r)}function f(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return a},setClearColor:function(E,R=1){a.set(E),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:x,addToRenderList:M,dispose:f}}function Q0(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(I,B,j,L,q){let et=!1,V=d(I,L,j,B);if(r!==V)r=V,c(r.object);if(et=p(I,L,j,q),et)x(I,L,j,q);if(q!==null)e.update(q,t.ELEMENT_ARRAY_BUFFER);if(et||a){if(a=!1,v(I,B,j,L),q!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer)}}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function h(I){return t.deleteVertexArray(I)}function d(I,B,j,L){let q=L.wireframe===!0,et=i[B.id];if(et===void 0)et={},i[B.id]=et;let V=I.isInstancedMesh===!0?I.id:0,st=et[V];if(st===void 0)st={},et[V]=st;let C=st[j.id];if(C===void 0)C={},st[j.id]=C;let N=C[q];if(N===void 0)N=u(l()),C[q]=N;return N}function u(I){let B=[],j=[],L=[];for(let q=0;q<n;q++)B[q]=0,j[q]=0,L[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:j,attributeDivisors:L,object:I,attributes:{},index:null}}function p(I,B,j,L){let q=r.attributes,et=B.attributes,V=0,st=j.getAttributes();for(let C in st)if(st[C].location>=0){let Z=q[C],rt=et[C];if(rt===void 0){if(C==="instanceMatrix"&&I.instanceMatrix)rt=I.instanceMatrix;if(C==="instanceColor"&&I.instanceColor)rt=I.instanceColor}if(Z===void 0)return!0;if(Z.attribute!==rt)return!0;if(rt&&Z.data!==rt.data)return!0;V++}if(r.attributesNum!==V)return!0;if(r.index!==L)return!0;return!1}function x(I,B,j,L){let q={},et=B.attributes,V=0,st=j.getAttributes();for(let C in st)if(st[C].location>=0){let Z=et[C];if(Z===void 0){if(C==="instanceMatrix"&&I.instanceMatrix)Z=I.instanceMatrix;if(C==="instanceColor"&&I.instanceColor)Z=I.instanceColor}let rt={};if(rt.attribute=Z,Z&&Z.data)rt.data=Z.data;q[C]=rt,V++}r.attributes=q,r.attributesNum=V,r.index=L}function M(){let I=r.newAttributes;for(let B=0,j=I.length;B<j;B++)I[B]=0}function m(I){f(I,0)}function f(I,B){let j=r.newAttributes,L=r.enabledAttributes,q=r.attributeDivisors;if(j[I]=1,L[I]===0)t.enableVertexAttribArray(I),L[I]=1;if(q[I]!==B)t.vertexAttribDivisor(I,B),q[I]=B}function E(){let I=r.newAttributes,B=r.enabledAttributes;for(let j=0,L=B.length;j<L;j++)if(B[j]!==I[j])t.disableVertexAttribArray(j),B[j]=0}function R(I,B,j,L,q,et,V){if(V===!0)t.vertexAttribIPointer(I,B,j,q,et);else t.vertexAttribPointer(I,B,j,L,q,et)}function v(I,B,j,L){M();let q=L.attributes,et=j.getAttributes(),V=B.defaultAttributeValues;for(let st in et){let C=et[st];if(C.location>=0){let N=q[st];if(N===void 0){if(st==="instanceMatrix"&&I.instanceMatrix)N=I.instanceMatrix;if(st==="instanceColor"&&I.instanceColor)N=I.instanceColor}if(N!==void 0){let Z=N.normalized,rt=N.itemSize,lt=e.get(N);if(lt===void 0)continue;let{buffer:Ct,type:Et,bytesPerElement:z}=lt,tt=Et===t.INT||Et===t.UNSIGNED_INT||N.gpuType===wo;if(N.isInterleavedBufferAttribute){let K=N.data,ct=K.stride,vt=N.offset;if(K.isInstancedInterleavedBuffer){for(let mt=0;mt<C.locationSize;mt++)f(C.location+mt,K.meshPerAttribute);if(I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0)L._maxInstanceCount=K.meshPerAttribute*K.count}else for(let mt=0;mt<C.locationSize;mt++)m(C.location+mt);t.bindBuffer(t.ARRAY_BUFFER,Ct);for(let mt=0;mt<C.locationSize;mt++)R(C.location+mt,rt/C.locationSize,Et,Z,ct*z,(vt+rt/C.locationSize*mt)*z,tt)}else{if(N.isInstancedBufferAttribute){for(let K=0;K<C.locationSize;K++)f(C.location+K,N.meshPerAttribute);if(I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0)L._maxInstanceCount=N.meshPerAttribute*N.count}else for(let K=0;K<C.locationSize;K++)m(C.location+K);t.bindBuffer(t.ARRAY_BUFFER,Ct);for(let K=0;K<C.locationSize;K++)R(C.location+K,rt/C.locationSize,Et,Z,rt*z,rt/C.locationSize*K*z,tt)}}else if(V!==void 0){let Z=V[st];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(C.location,Z);break;case 3:t.vertexAttrib3fv(C.location,Z);break;case 4:t.vertexAttrib4fv(C.location,Z);break;default:t.vertexAttrib1fv(C.location,Z)}}}}E()}function T(){S();for(let I in i){let B=i[I];for(let j in B){let L=B[j];for(let q in L){let et=L[q];for(let V in et)h(et[V].object),delete et[V];delete L[q]}}delete i[I]}}function A(I){if(i[I.id]===void 0)return;let B=i[I.id];for(let j in B){let L=B[j];for(let q in L){let et=L[q];for(let V in et)h(et[V].object),delete et[V];delete L[q]}}delete i[I.id]}function w(I){for(let B in i){let j=i[B];for(let L in j){let q=j[L];if(q[I.id]===void 0)continue;let et=q[I.id];for(let V in et)h(et[V].object),delete et[V];delete q[I.id]}}}function g(I){for(let B in i){let j=i[B],L=I.isInstancedMesh===!0?I.id:0,q=j[L];if(q===void 0)continue;for(let et in q){let V=q[et];for(let st in V)h(V[st].object),delete V[st];delete q[et]}if(delete j[L],Object.keys(j).length===0)delete i[B]}}function S(){if(G(),a=!0,r===s)return;r=s,c(r.object)}function G(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:G,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:g,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:m,disableUnusedAttributes:E}}function tg(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,h){if(h===0)return;t.drawArraysInstanced(i,l,c,h),n.update(c,i,h)}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];n.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function eg(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){if(w!==On&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(w){let g=w===Fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(w!==An&&w!==ti&&!g&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}if(w==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);if(h!==c)Dt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h;let d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");if(n.reversedDepthBuffer===!0&&u===!1)Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),E=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),R=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:R,maxFragmentUniforms:v,maxSamples:T,samples:A}}function ng(t){let e=this,n=null,i=0,s=!1,r=!1,a=new en,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,p){let{clippingPlanes:x,clipIntersection:M,clipShadows:m}=d,f=t.get(d);if(!s||x===null||x.length===0||r&&!m)if(r)h(null);else c();else{let E=r?0:i,R=E*4,v=f.clippingState||null;l.value=v,v=h(x,u,R,p);for(let T=0;T!==R;++T)v[T]=n[T];f.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function h(d,u,p,x){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=l.value,x!==!0||m===null){let f=p+M*4,E=u.matrixWorldInverse;if(o.getNormalMatrix(E),m===null||m.length<f)m=new Float32Array(f);for(let R=0,v=p;R!==M;++R,v+=4)a.copy(d[R]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}var Rs=4,ig=6,sg=20,rg=256,ar=new sr,vu=new Ot,Bl=null,zl=0,Hl=0,kl=!1,ag=new P,Xi=new P;class Wl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=0.1,i=100,s={}){let{size:r=256,position:a=ag}=s;Bl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let o=this._allocateTargets();if(o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0)this._blur(o,0,0,e);return this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Mu(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=bu(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Bl,zl,Hl),this._renderer.xr.enabled=kl,t.scissorTest=!1,As(t,0,0,t.width,t.height)}_fromTexture(t,e){if(t.mapping===Es||t.mapping===Ii)this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);Bl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Fn,format:On,colorSpace:cl,depthBuffer:!1},i=Su(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=Su(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=og(s)),this._blurMaterial=cg(s,t,e),this._ggxMaterial=lg(s,t,e)}return i}_compileMaterial(t){let e=new Yt(new Le,t);this._renderer.compile(e,ar)}_sceneToCubeUV(t,e,n,i,s){let o=new Xe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,{autoClear:d,toneMapping:u}=h;if(h.getClearColor(vu),h.toneMapping=Tn,h.autoClear=!1,h.state.buffers.depth.getReversed())h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new Yt(new Si,new Ke({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}));let x=this._backgroundBox,M=x.material,m=!1,f=t.background;if(f){if(f.isColor)M.color.copy(f),t.background=null,m=!0}else M.color.copy(vu),m=!0;for(let E=0;E<6;E++){let R=E%3;if(R===0)o.up.set(0,l[E],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x+c[E],s.y,s.z);else if(R===1)o.up.set(0,0,l[E]),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y+c[E],s.z);else o.up.set(0,l[E],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y,s.z+c[E]);let v=this._cubeSize;if(As(i,R*v,E>2?v:0,v,v),h.setRenderTarget(i),m)h.render(x,o);h.render(t,o)}h.toneMapping=u,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Es||t.mapping===Ii;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=Mu();this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=bu();let s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let a=s.uniforms;a.envMap.value=t;let o=this._cubeSize;As(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(r,ar)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;let o=r.uniforms,l=n/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),h=Math.sqrt(l*l-c*c),d=l*1.25,u=h*d,{_lodMax:p}=this,x=this._sizeLods[n],M=3*x*(n>p-Rs?n-p+Rs:0),m=4*(this._cubeSize-x);o.envMap.value=t.texture,o.roughness.value=u,o.mipInt.value=p-e,As(s,M,m,3*x,2*x),i.setRenderTarget(s),i.render(a,ar),o.envMap.value=s.texture,o.roughness.value=0,o.mipInt.value=p-n,As(t,M,m,3*x,2*x),i.setRenderTarget(t),i.render(a,ar)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,r=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,r),this._blurPass(s,t,n,n,r)}_blurPass(t,e,n,i,s){let r=this._renderer,a=this._blurMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let c=this._sizeLods[i],h=3*c*(i>this._lodMax-Rs?i-this._lodMax+Rs:0),d=4*(this._cubeSize-c);As(e,h,d,3*c,2*c),r.setRenderTarget(e),r.render(o,ar)}}function og(t){let e=[],n=[],i=t,s=t-Rs+1+ig;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,p=3,x=new Float32Array(p*u*d),M=new Float32Array(p*u*d);for(let f=0;f<d;f++){let E=f%3*2/3-1,R=f>2?0:-1,v=[E,R,0,E+0.6666666666666666,R,0,E+0.6666666666666666,R+1,0,E,R,0,E+0.6666666666666666,R+1,0,E,R+1,0];x.set(v,p*u*f);for(let T=0;T<u;T++){let A=h[T*2]*2-1,w=h[T*2+1]*2-1;if(f===0)Xi.set(1,w,A);else if(f===1)Xi.set(-A,1,-w);else if(f===2)Xi.set(-A,w,1);else if(f===3)Xi.set(-1,w,-A);else if(f===4)Xi.set(-A,-1,w);else Xi.set(A,w,-1);Xi.toArray(M,(f*u+T)*p)}}let m=new Le;if(m.setAttribute("position",new ke(x,p)),m.setAttribute("outputDirection",new ke(M,p)),n.push(new Yt(m,null)),i>Rs)i--}return{lodMeshes:n,sizeLods:e}}function Su(t,e,n){let i=new un(t,e,n);return i.texture.mapping=Js,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function As(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function lg(t,e,n){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ma(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function cg(t,e,n){return new pn({name:"SphericalGaussianBlur",defines:{SAMPLES:sg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ma(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function bu(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Mu(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Ma(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Yl extends un{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new la(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Si(5,5,5),s=new pn({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Un});s.uniforms.tEquirect.value=e;let r=new Yt(i,s),a=e.minFilter;if(e.minFilter===Li)e.minFilter=sn;return new Ll(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}function hg(t){let e=new WeakMap,n=new WeakMap,i=null;function s(u,p=!1){if(u===null||u===void 0)return null;if(p)return a(u);return r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Gr||p===Vr)if(e.has(u)){let x=e.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let M=new Yl(x.height);return M.fromEquirectangularTexture(t,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,x=p===Gr||p===Vr,M=p===Es||p===Ii;if(x||M){let m=n.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f){if(i===null)i=new Wl(t);return m=x?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture}else if(m!==void 0)return m.texture;else{let E=u.image;if(x&&E&&E.height>0||M&&E&&l(E)){if(i===null)i=new Wl(t);return m=x?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture}else return null}}}return u}function o(u,p){if(p===Gr)u.mapping=Es;else if(p===Vr)u.mapping=Ii;return u}function l(u){let p=0,x=6;for(let M=0;M<x;M++)if(u[M]!==void 0)p++;return p===x}function c(u){let p=u.target;p.removeEventListener("dispose",c);let x=e.get(p);if(x!==void 0)e.delete(p),x.dispose()}function h(u){let p=u.target;p.removeEventListener("dispose",h);let x=n.get(p);if(x!==void 0)n.delete(p),x.dispose()}function d(){if(e=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:d}}function ug(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)Ci("WebGLRenderer: "+i+" extension not supported.");return s}}}function dg(t,e,n,i){let s={},r=new WeakMap;function a(d){let u=d.target;if(u.index!==null)e.remove(u.index);for(let x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);if(p)e.remove(p),r.delete(u);if(i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0)delete u._maxInstanceCount;n.memory.geometries--}function o(d,u){if(s[u.id]===!0)return u;return u.addEventListener("dispose",a),s[u.id]=!0,n.memory.geometries++,u}function l(d){let u=d.attributes;for(let p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(d){let u=[],p=d.index,x=d.attributes.position,M=0;if(x===void 0)return;if(p!==null){let E=p.array;M=p.version;for(let R=0,v=E.length;R<v;R+=3){let T=E[R+0],A=E[R+1],w=E[R+2];u.push(T,A,A,w,w,T)}}else{let E=x.array;M=x.version;for(let R=0,v=E.length/3-1;R<v;R+=3){let T=R+0,A=R+1,w=R+2;u.push(T,A,A,w,w,T)}}let m=new(x.count>=65535?sa:ia)(u,1);m.version=M;let f=r.get(d);if(f)e.remove(f);r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;if(p!==null){if(u.version<p.version)c(d)}}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function fg(t,e,n){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){t.drawElements(i,u,r,d*a),n.update(u,i,1)}function c(d,u,p){if(p===0)return;t.drawElementsInstanced(i,u,r,d*a,p),n.update(u,i,p)}function h(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,p);let M=0;for(let m=0;m<p;m++)M+=u[m];n.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function pg(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Nt("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function mg(t,e,n){let i=new WeakMap,s=new xe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let S=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",S)};if(u!==void 0)u.texture.dispose();let p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],R=0;if(p===!0)R=1;if(x===!0)R=2;if(M===!0)R=3;let v=o.attributes.position.count*R,T=1;if(v>e.maxTextureSize)T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize;let A=new Float32Array(v*T*4*d),w=new ea(A,v,T,d);w.type=ti,w.needsUpdate=!0;let g=R*4;for(let G=0;G<d;G++){let I=m[G],B=f[G],j=E[G],L=v*T*4*G;for(let q=0;q<I.count;q++){let et=q*g;if(p===!0)s.fromBufferAttribute(I,q),A[L+et+0]=s.x,A[L+et+1]=s.y,A[L+et+2]=s.z,A[L+et+3]=0;if(x===!0)s.fromBufferAttribute(B,q),A[L+et+4]=s.x,A[L+et+5]=s.y,A[L+et+6]=s.z,A[L+et+7]=0;if(M===!0)s.fromBufferAttribute(j,q),A[L+et+8]=s.x,A[L+et+9]=s.y,A[L+et+10]=s.z,A[L+et+11]=j.itemSize===4?s.w:1}}u={count:d,texture:w,size:new At(v,T)},i.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function gg(t,e,n,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h)e.update(u),r.set(u,h);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==h){if(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,t.ARRAY_BUFFER);r.set(c,h)}}if(c.isSkinnedMesh){let p=c.skeleton;if(r.get(p)!==h)p.update(),r.set(p,h)}return u}function o(){r=new WeakMap}function l(c){let h=c.target;if(h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null)n.remove(h.instanceColor)}return{update:a,dispose:o}}var _g={[yo]:"LINEAR_TONE_MAPPING",[vo]:"REINHARD_TONE_MAPPING",[So]:"CINEON_TONE_MAPPING",[bo]:"ACES_FILMIC_TONE_MAPPING",[Eo]:"AGX_TONE_MAPPING",[To]:"NEUTRAL_TONE_MAPPING",[Mo]:"CUSTOM_TONE_MAPPING"};function xg(t,e,n,i,s,r){let a=new un(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Le;c.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Te([0,2,0,0,2,0],2));let h=new yl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Yt(c,h),u=new sr(-1,1,1,-1,0,1),p=null,x=null,M=!1,m,f=null,E=[],R=!1;this.setSize=function(v,T){if(a.setSize(v,T),o!==null)o.setSize(v,T);if(l!==null)l.setSize(v,T);for(let A=0;A<E.length;A++){let w=E[A];if(w.setSize)w.setSize(v,T)}},this.setEffects=function(v){E=v,R=E.length>0&&E[0].isRenderPass===!0;let{width:T,height:A}=a;if(E.length>0&&o===null)o=new un(T,A,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),l=new un(T,A,{type:Fn,depthBuffer:!1,stencilBuffer:!1});for(let w=0;w<E.length;w++){let g=E[w];if(g.setSize)g.setSize(T,A)}},this.begin=function(v,T){if(M)return!1;if(v.toneMapping===Tn&&E.length===0)return!1;if(f=T,T!==null){let{width:A,height:w}=T;if(a.width!==A||a.height!==w)this.setSize(A,w)}if(R===!1)v.setRenderTarget(a);return m=v.toneMapping,v.toneMapping=Tn,!0},this.hasRenderPass=function(){return R},this.end=function(v,T){v.toneMapping=m,M=!0;let A=a,w=o;for(let g=0;g<E.length;g++){let S=E[g];if(S.enabled===!1)continue;if(S.render(v,w,A,T),S.needsSwap!==!1)A=w,w=w===o?l:o}if(p!==v.outputColorSpace||x!==v.toneMapping){if(p=v.outputColorSpace,x=v.toneMapping,h.defines={},qt.getTransfer(p)===fe)h.defines.SRGB_TRANSFER="";let g=_g[x];if(g)h.defines[g]="";h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,v.setRenderTarget(f),v.render(d,u),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){if(a.dispose(),o!==null)o.dispose();if(l!==null)l.dispose();c.dispose(),h.dispose()}}var Vu=new He,Xl=new Bi(1,1),Wu=new ea,Xu=new gl,qu=new la,Eu=[],Tu=[],wu=new Float32Array(16),Au=new Float32Array(9),Ru=new Float32Array(4);function Cs(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=Eu[s];if(r===void 0)r=new Float32Array(s),Eu[s]=r;if(e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function Ne(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function De(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ea(t,e){let n=Tu[e];if(n===void 0)n=new Int32Array(e),Tu[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function yg(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function vg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ne(n,e))return;t.uniform2fv(this.addr,e),De(n,e)}}function Sg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(Ne(n,e))return;t.uniform3fv(this.addr,e),De(n,e)}}function bg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ne(n,e))return;t.uniform4fv(this.addr,e),De(n,e)}}function Mg(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ne(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),De(n,e)}else{if(Ne(n,i))return;Ru.set(i),t.uniformMatrix2fv(this.addr,!1,Ru),De(n,i)}}function Eg(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ne(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),De(n,e)}else{if(Ne(n,i))return;Au.set(i),t.uniformMatrix3fv(this.addr,!1,Au),De(n,i)}}function Tg(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ne(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),De(n,e)}else{if(Ne(n,i))return;wu.set(i),t.uniformMatrix4fv(this.addr,!1,wu),De(n,i)}}function wg(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function Ag(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ne(n,e))return;t.uniform2iv(this.addr,e),De(n,e)}}function Rg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Ne(n,e))return;t.uniform3iv(this.addr,e),De(n,e)}}function Cg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ne(n,e))return;t.uniform4iv(this.addr,e),De(n,e)}}function Pg(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function Ig(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ne(n,e))return;t.uniform2uiv(this.addr,e),De(n,e)}}function Lg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Ne(n,e))return;t.uniform3uiv(this.addr,e),De(n,e)}}function Ng(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ne(n,e))return;t.uniform4uiv(this.addr,e),De(n,e)}}function Dg(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)Xl.compareFunction=n.isReversedDepthBuffer()?ta:Qr,r=Xl;else r=Vu;n.setTexture2D(e||r,s)}function Ug(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||Xu,s)}function Fg(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(e||qu,s)}function Og(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||Wu,s)}function Bg(t){switch(t){case 5126:return yg;case 35664:return vg;case 35665:return Sg;case 35666:return bg;case 35674:return Mg;case 35675:return Eg;case 35676:return Tg;case 5124:case 35670:return wg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Pg;case 36294:return Ig;case 36295:return Lg;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Og}}function zg(t,e){t.uniform1fv(this.addr,e)}function Hg(t,e){let n=Cs(e,this.size,2);t.uniform2fv(this.addr,n)}function kg(t,e){let n=Cs(e,this.size,3);t.uniform3fv(this.addr,n)}function Gg(t,e){let n=Cs(e,this.size,4);t.uniform4fv(this.addr,n)}function Vg(t,e){let n=Cs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Wg(t,e){let n=Cs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Xg(t,e){let n=Cs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function qg(t,e){t.uniform1iv(this.addr,e)}function Yg(t,e){t.uniform2iv(this.addr,e)}function Zg(t,e){t.uniform3iv(this.addr,e)}function Jg(t,e){t.uniform4iv(this.addr,e)}function Kg(t,e){t.uniform1uiv(this.addr,e)}function $g(t,e){t.uniform2uiv(this.addr,e)}function jg(t,e){t.uniform3uiv(this.addr,e)}function Qg(t,e){t.uniform4uiv(this.addr,e)}function t_(t,e,n){let i=this.cache,s=e.length,r=Ea(n,s);if(!Ne(i,r))t.uniform1iv(this.addr,r),De(i,r);let a;if(this.type===t.SAMPLER_2D_SHADOW)a=Xl;else a=Vu;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function e_(t,e,n){let i=this.cache,s=e.length,r=Ea(n,s);if(!Ne(i,r))t.uniform1iv(this.addr,r),De(i,r);for(let a=0;a!==s;++a)n.setTexture3D(e[a]||Xu,r[a])}function n_(t,e,n){let i=this.cache,s=e.length,r=Ea(n,s);if(!Ne(i,r))t.uniform1iv(this.addr,r),De(i,r);for(let a=0;a!==s;++a)n.setTextureCube(e[a]||qu,r[a])}function i_(t,e,n){let i=this.cache,s=e.length,r=Ea(n,s);if(!Ne(i,r))t.uniform1iv(this.addr,r),De(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||Wu,r[a])}function s_(t){switch(t){case 5126:return zg;case 35664:return Hg;case 35665:return kg;case 35666:return Gg;case 35674:return Vg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return qg;case 35667:case 35671:return Yg;case 35668:case 35672:return Zg;case 35669:case 35673:return Jg;case 5125:return Kg;case 36294:return $g;case 36295:return jg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return t_;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return i_}}class Yu{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bg(e.type)}}class Zu{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=s_(e.type)}}class Ju{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}}var Gl=/(\w+)(\])?(\[|\.)?/g;function Cu(t,e){t.seq.push(e),t.map[e.id]=e}function r_(t,e,n){let i=t.name,s=i.length;Gl.lastIndex=0;while(!0){let r=Gl.exec(i),a=Gl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){Cu(n,c===void 0?new Yu(o,t,e):new Zu(o,t,e));break}else{let d=n.map[o];if(d===void 0)d=new Ju(o),Cu(n,d);n=d}}}class cr{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),o=t.getUniformLocation(e,a.name);r_(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function Pu(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var a_=37297,o_=0;function l_(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var Iu=new Ft;function c_(t){qt._getMatrix(Iu,qt.workingColorSpace,t);let e=`mat3( ${Iu.elements.map((n)=>n.toFixed(4))} )`;switch(qt.getTransfer(t)){case hl:return[e,"LinearTransferOETF"];case fe:return[e,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Lu(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+l_(t.getShaderSource(e),o)}else return r}function h_(t,e){let n=c_(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var u_={[yo]:"Linear",[vo]:"Reinhard",[So]:"Cineon",[bo]:"ACESFilmic",[Eo]:"AgX",[To]:"Neutral",[Mo]:"Custom"};function d_(t,e){let n=u_[e];if(n===void 0)return Dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var ba=new P;function f_(){qt.getLuminanceCoefficients(ba);let t=ba.x.toFixed(4),e=ba.y.toFixed(4),n=ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function p_(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function m_(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function g_(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;if(r.type===t.FLOAT_MAT2)o=2;if(r.type===t.FLOAT_MAT3)o=3;if(r.type===t.FLOAT_MAT4)o=4;n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function lr(t){return t!==""}function Nu(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Du(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var __=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(t){return t.replace(__,y_)}var x_=new Map;function y_(t,e){let n=kt[e];if(n===void 0){let i=x_.get(e);if(i!==void 0)n=kt[i],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ql(n)}var v_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uu(t){return t.replace(v_,S_)}function S_(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fu(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;if(t.precision==="highp")e+=`
#define HIGH_PRECISION`;else if(t.precision==="mediump")e+=`
#define MEDIUM_PRECISION`;else if(t.precision==="lowp")e+=`
#define LOW_PRECISION`;return e}var b_={[Pi]:"SHADOWMAP_TYPE_PCF",[Ss]:"SHADOWMAP_TYPE_VSM"};function M_(t){return b_[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var E_={[Es]:"ENVMAP_TYPE_CUBE",[Ii]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE_UV"};function T_(t){if(t.envMap===!1)return"ENVMAP_TYPE_CUBE";return E_[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var w_={[Ii]:"ENVMAP_MODE_REFRACTION"};function A_(t){if(t.envMap===!1)return"ENVMAP_MODE_REFLECTION";return w_[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var R_={[Vh]:"ENVMAP_BLENDING_MULTIPLY",[Wh]:"ENVMAP_BLENDING_MIX",[Xh]:"ENVMAP_BLENDING_ADD"};function C_(t){if(t.envMap===!1)return"ENVMAP_BLENDING_NONE";return R_[t.combine]||"ENVMAP_BLENDING_NONE"}function P_(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function I_(t,e,n,i){let s=t.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,l=M_(n),c=T_(n),h=A_(n),d=C_(n),u=P_(n),p=p_(n),x=m_(r),M=s.createProgram(),m,f,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(lr).join(`
`),m.length>0)m+=`
`;if(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(lr).join(`
`),f.length>0)f+=`
`}else m=[Fu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),f=[Fu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Tn?"#define TONE_MAPPING":"",n.toneMapping!==Tn?kt.tonemapping_pars_fragment:"",n.toneMapping!==Tn?d_("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,h_("linearToOutputTexel",n.outputColorSpace),f_(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(lr).join(`
`);if(a=ql(a),a=Nu(a,n),a=Du(a,n),o=ql(o),o=Nu(o,n),o=Du(o,n),a=Uu(a),o=Uu(o),n.isRawShaderMaterial!==!0)E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f;let R=E+m+a,v=E+f+o,T=Pu(s,s.VERTEX_SHADER,R),A=Pu(s,s.FRAGMENT_SHADER,v);if(s.attachShader(M,T),s.attachShader(M,A),n.index0AttributeName!==void 0)s.bindAttribLocation(M,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(M,0,"position");s.linkProgram(M);function w(I){if(t.debug.checkShaderErrors){let B=s.getProgramInfoLog(M)||"",j=s.getShaderInfoLog(T)||"",L=s.getShaderInfoLog(A)||"",q=B.trim(),et=j.trim(),V=L.trim(),st=!0,C=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(st=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,M,T,A);else{let N=Lu(s,T,"vertex"),Z=Lu(s,A,"fragment");Nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+q+`
`+N+`
`+Z)}else if(q!=="")Dt("WebGLProgram: Program Info Log:",q);else if(et===""||V==="")C=!1;if(C)I.diagnostics={runnable:st,programLog:q,vertexShader:{log:et,prefix:m},fragmentShader:{log:V,prefix:f}}}s.deleteShader(T),s.deleteShader(A),g=new cr(s,M),S=g_(s,M)}let g;this.getUniforms=function(){if(g===void 0)w(this);return g};let S;this.getAttributes=function(){if(S===void 0)w(this);return S};let G=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(G===!1)G=s.getProgramParameter(M,a_);return G},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=o_++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=A,this}var L_=0;class Ku{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);if(i.has(e)===!1)i.add(e),e.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new $u(t),e.set(t,n);return n}}class $u{constructor(t){this.id=L_++,this.code=t,this.usedTimes=0}}function N_(t){return t===Ui||t===Kr||t===$r}function D_(t,e,n,i,s,r){let a=new tr,o=new Ku,l=new Set,c=[],h=new Map,{logarithmicDepthBuffer:d,precision:u}=i,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){if(l.add(g),g===0)return"uv";return`uv${g}`}function M(g,S,G,I,B,j){let L=I.fog,q=B.geometry,et=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?I.environment:null,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,st=e.get(g.envMap||et,V),C=!!st&&st.mapping===Js?st.image.height:null,N=p[g.type];if(g.precision!==null){if(u=i.getMaxPrecision(g.precision),u!==g.precision)Dt("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead.")}let Z=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,rt=Z!==void 0?Z.length:0,lt=0;if(q.morphAttributes.position!==void 0)lt=1;if(q.morphAttributes.normal!==void 0)lt=2;if(q.morphAttributes.color!==void 0)lt=3;let Ct,Et,z,tt;if(N){let me=Gn[N];Ct=me.vertexShader,Et=me.fragmentShader}else{Ct=g.vertexShader,Et=g.fragmentShader;let me=o.getVertexShaderStage(g),ee=o.getFragmentShaderStage(g);o.update(g,me,ee),z=me.id,tt=ee.id}let K=t.getRenderTarget(),ct=t.state.buffers.depth.getReversed(),vt=B.isInstancedMesh===!0,mt=B.isBatchedMesh===!0,$t=!!g.map,zt=!!g.matcap,Vt=!!st,Zt=!!g.aoMap,Gt=!!g.lightMap,Me=!!g.bumpMap&&g.wireframe===!1,he=!!g.normalMap,re=!!g.displacementMap,ye=!!g.emissiveMap,Qt=!!g.metalnessMap,U=!!g.roughnessMap,tn=g.anisotropy>0,te=g.clearcoat>0,ve=g.dispersion>0,b=g.retroreflectivity>0,_=g.iridescence>0,D=g.sheen>0,W=g.transmission>0,it=tn&&!!g.anisotropyMap,ot=te&&!!g.clearcoatMap,dt=te&&!!g.clearcoatNormalMap,Y=te&&!!g.clearcoatRoughnessMap,Q=_&&!!g.iridescenceMap,yt=_&&!!g.iridescenceThicknessMap,Pt=D&&!!g.sheenColorMap,ft=D&&!!g.sheenRoughnessMap,at=!!g.specularMap,It=!!g.specularColorMap,Lt=!!g.specularIntensityMap,jt=W&&!!g.transmissionMap,O=W&&!!g.thicknessMap,ht=!!g.gradientMap,J=!!g.alphaMap,ut=g.alphaTest>0,St=!!g.alphaHash,nt=!!g.extensions,gt=Tn;if(g.toneMapped){if(K===null||K.isXRRenderTarget===!0)gt=t.toneMapping}let Bt={shaderID:N,shaderType:g.type,shaderName:g.name,vertexShader:Ct,fragmentShader:Et,defines:g.defines,customVertexShaderID:z,customFragmentShaderID:tt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:mt,batchingColor:mt&&B._colorsTexture!==null,instancing:vt,instancingColor:vt&&B.instanceColor!==null,instancingMorph:vt&&B.morphTexture!==null,outputColorSpace:K===null?t.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:$t,matcap:zt,envMap:Vt,envMapMode:Vt&&st.mapping,envMapCubeUVHeight:C,aoMap:Zt,lightMap:Gt,bumpMap:Me,normalMap:he,displacementMap:re,emissiveMap:ye,normalMapObjectSpace:he&&g.normalMapType===eu,normalMapTangentSpace:he&&g.normalMapType===ll,packedNormalMap:he&&g.normalMapType===ll&&N_(g.normalMap.format),metalnessMap:Qt,roughnessMap:U,anisotropy:tn,anisotropyMap:it,clearcoat:te,clearcoatMap:ot,clearcoatNormalMap:dt,clearcoatRoughnessMap:Y,dispersion:ve,retroreflection:b,iridescence:_,iridescenceMap:Q,iridescenceThicknessMap:yt,sheen:D,sheenColorMap:Pt,sheenRoughnessMap:ft,specularMap:at,specularColorMap:It,specularIntensityMap:Lt,transmission:W,transmissionMap:jt,thicknessMap:O,gradientMap:ht,opaque:g.transparent===!1&&g.blending===Zs&&g.alphaToCoverage===!1,alphaMap:J,alphaTest:ut,alphaHash:St,combine:g.combine,mapUv:$t&&x(g.map.channel),aoMapUv:Zt&&x(g.aoMap.channel),lightMapUv:Gt&&x(g.lightMap.channel),bumpMapUv:Me&&x(g.bumpMap.channel),normalMapUv:he&&x(g.normalMap.channel),displacementMapUv:re&&x(g.displacementMap.channel),emissiveMapUv:ye&&x(g.emissiveMap.channel),metalnessMapUv:Qt&&x(g.metalnessMap.channel),roughnessMapUv:U&&x(g.roughnessMap.channel),anisotropyMapUv:it&&x(g.anisotropyMap.channel),clearcoatMapUv:ot&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:dt&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:ft&&x(g.sheenRoughnessMap.channel),specularMapUv:at&&x(g.specularMap.channel),specularColorMapUv:It&&x(g.specularColorMap.channel),specularIntensityMapUv:Lt&&x(g.specularIntensityMap.channel),transmissionMapUv:jt&&x(g.transmissionMap.channel),thicknessMapUv:O&&x(g.thicknessMap.channel),alphaMapUv:J&&x(g.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(he||tn),vertexNormals:!!q.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&($t||J),fog:!!L,useFog:g.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||q.attributes.normal===void 0&&he===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ct,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:lt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&G.length>0,shadowMapType:t.shadowMap.type,toneMapping:gt,decodeVideoTexture:$t&&g.map.isVideoTexture===!0&&qt.getTransfer(g.map.colorSpace)===fe,decodeVideoTextureEmissive:ye&&g.emissiveMap.isVideoTexture===!0&&qt.getTransfer(g.emissiveMap.colorSpace)===fe,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Dn,flipSided:g.side===nn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:nt&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&g.extensions.multiDraw===!0||mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function m(g){let S=[];if(g.shaderID)S.push(g.shaderID);else S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID);if(g.defines!==void 0)for(let G in g.defines)S.push(G),S.push(g.defines[G]);if(g.isRawShaderMaterial===!1)f(S,g),E(S,g),S.push(t.outputColorSpace);return S.push(g.customProgramCacheKey),S.join()}function f(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapCubeUVHeight),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.morphAttributeCount),g.push(S.numSunLights),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numSunLightShadows),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function E(g,S){if(a.disableAll(),S.instancing)a.enable(0);if(S.instancingColor)a.enable(1);if(S.instancingMorph)a.enable(2);if(S.matcap)a.enable(3);if(S.envMap)a.enable(4);if(S.normalMapObjectSpace)a.enable(5);if(S.normalMapTangentSpace)a.enable(6);if(S.clearcoat)a.enable(7);if(S.iridescence)a.enable(8);if(S.alphaTest)a.enable(9);if(S.vertexColors)a.enable(10);if(S.vertexAlphas)a.enable(11);if(S.vertexUv1s)a.enable(12);if(S.vertexUv2s)a.enable(13);if(S.vertexUv3s)a.enable(14);if(S.vertexTangents)a.enable(15);if(S.anisotropy)a.enable(16);if(S.alphaHash)a.enable(17);if(S.batching)a.enable(18);if(S.dispersion)a.enable(19);if(S.retroreflection)a.enable(24);if(S.batchingColor)a.enable(20);if(S.gradientMap)a.enable(21);if(S.packedNormalMap)a.enable(22);if(S.vertexNormals)a.enable(23);if(g.push(a.mask),a.disableAll(),S.fog)a.enable(0);if(S.useFog)a.enable(1);if(S.flatShading)a.enable(2);if(S.logarithmicDepthBuffer)a.enable(3);if(S.reversedDepthBuffer)a.enable(4);if(S.skinning)a.enable(5);if(S.morphTargets)a.enable(6);if(S.morphNormals)a.enable(7);if(S.morphColors)a.enable(8);if(S.premultipliedAlpha)a.enable(9);if(S.shadowMapEnabled)a.enable(10);if(S.doubleSided)a.enable(11);if(S.flipSided)a.enable(12);if(S.useDepthPacking)a.enable(13);if(S.dithering)a.enable(14);if(S.transmission)a.enable(15);if(S.sheen)a.enable(16);if(S.opaque)a.enable(17);if(S.pointsUvs)a.enable(18);if(S.decodeVideoTexture)a.enable(19);if(S.decodeVideoTextureEmissive)a.enable(20);if(S.alphaToCoverage)a.enable(21);if(S.numLightProbeGrids>0)a.enable(22);if(S.hasPositionAttribute)a.enable(23);g.push(a.mask)}function R(g){let S=p[g.type],G;if(S){let I=Gn[S];G=pu.clone(I.uniforms)}else G=g.uniforms;return G}function v(g,S){let G=h.get(S);if(G!==void 0)++G.usedTimes;else G=new I_(t,S,g,s),c.push(G),h.set(S,G);return G}function T(g){if(--g.usedTimes===0){let S=c.indexOf(g);c[S]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function w(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:R,acquireProgram:v,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:w}}function U_(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);if(o===void 0)o={},t.set(a,o);return o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function F_(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.materialVariant!==e.materialVariant)return t.materialVariant-e.materialVariant;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function Ou(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function Bu(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(u){let p=0;if(u.isInstancedMesh)p+=2;if(u.isSkinnedMesh)p+=1;return p}function o(u,p,x,M,m,f){let E=t[e];if(E===void 0)E={id:u.id,object:u,geometry:p,material:x,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:f},t[e]=E;else E.id=u.id,E.object=u,E.geometry=p,E.material=x,E.materialVariant=a(u),E.groupOrder=M,E.renderOrder=u.renderOrder,E.z=m,E.group=f;return e++,E}function l(u,p,x,M,m,f,E){if(E.reversedDepth===!0)m=-m;let R=o(u,p,x,M,m,f);if(x.transmission>0)i.push(R);else if(x.transparent===!0)s.push(R);else n.push(R)}function c(u,p,x,M,m,f){let E=o(u,p,x,M,m,f);if(x.transmission>0)i.unshift(E);else if(x.transparent===!0)s.unshift(E);else n.unshift(E)}function h(u,p){if(n.length>1)n.sort(u||F_);if(i.length>1)i.sort(p||Ou);if(s.length>1)s.sort(p||Ou)}function d(){for(let u=e,p=t.length;u<p;u++){let x=t[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function O_(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;if(r===void 0)a=new Bu,t.set(i,[a]);else if(s>=r.length)a=new Bu,r.push(a);else a=r[s];return a}function n(){t=new WeakMap}return{get:e,dispose:n}}function B_(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new P,color:new Ot};break;case"SpotLight":n={position:new P,direction:new P,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":n={color:new Ot,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=n,n}}}function z_(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var H_=0;function k_(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function G_(t){let e=new B_,n=z_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new Kt,a=new Kt;function o(c){let h=0,d=0,u=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let p=0,x=0,M=0,m=0,f=0,E=0,R=0,v=0,T=0,A=0,w=0,g=0,S=0,G=0;c.sort(k_);for(let B=0,j=c.length;B<j;B++){let L=c[B],{color:q,intensity:et,distance:V}=L,st=null;if(L.shadow&&L.shadow.map)if(L.shadow.map.texture.format===Ui)st=L.shadow.map.texture;else st=L.shadow.map.depthTexture||L.shadow.map.texture;if(L.isAmbientLight)h+=q.r*et,d+=q.g*et,u+=q.b*et;else if(L.isLightProbe){for(let C=0;C<9;C++)i.probe[C].addScaledVector(L.sh.coefficients[C],et);G++}else if(L.isSunLight){let C=e.get(L);if(C.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let N=L.shadow,Z=n.get(L);Z.shadowIntensity=N.intensity,Z.shadowBias=N.bias,Z.shadowNormalBias=N.normalBias,Z.shadowRadius=N.radius,Z.shadowMapSize.copy(N.mapSize).multiply(N.getFrameExtents()),i.sunShadow[x]=Z,i.sunShadowMap[x]=st;let rt=N.getViewportCount();for(let lt=0;lt<rt;lt++)i.sunShadowMatrix[M+lt]=N.getMatrix(lt),i.sunShadowCascade[M+lt]=N._cascadeData[lt];M+=rt,x++}i.sun[p]=C,p++}else if(L.isDirectionalLight){let C=e.get(L);if(C.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let N=L.shadow,Z=n.get(L);Z.shadowIntensity=N.intensity,Z.shadowBias=N.bias,Z.shadowNormalBias=N.normalBias,Z.shadowRadius=N.radius,Z.shadowMapSize=N.mapSize,i.directionalShadow[m]=Z,i.directionalShadowMap[m]=st,i.directionalShadowMatrix[m]=L.shadow.matrix,T++}i.directional[m]=C,m++}else if(L.isSpotLight){let C=e.get(L);C.position.setFromMatrixPosition(L.matrixWorld),C.color.copy(q).multiplyScalar(et),C.distance=V,C.coneCos=Math.cos(L.angle),C.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),C.decay=L.decay,i.spot[E]=C;let N=L.shadow;if(L.map){if(i.spotLightMap[g]=L.map,g++,N.updateMatrices(L),L.castShadow)S++}if(i.spotLightMatrix[E]=N.matrix,L.castShadow){let Z=n.get(L);Z.shadowIntensity=N.intensity,Z.shadowBias=N.bias,Z.shadowNormalBias=N.normalBias,Z.shadowRadius=N.radius,Z.shadowMapSize=N.mapSize,i.spotShadow[E]=Z,i.spotShadowMap[E]=st,w++}E++}else if(L.isRectAreaLight){let C=e.get(L);C.color.copy(q).multiplyScalar(et),C.halfWidth.set(L.width*0.5,0,0),C.halfHeight.set(0,L.height*0.5,0),i.rectArea[R]=C,R++}else if(L.isPointLight){let C=e.get(L);if(C.color.copy(L.color).multiplyScalar(L.intensity),C.distance=L.distance,C.decay=L.decay,L.castShadow){let N=L.shadow,Z=n.get(L);Z.shadowIntensity=N.intensity,Z.shadowBias=N.bias,Z.shadowNormalBias=N.normalBias,Z.shadowRadius=N.radius,Z.shadowMapSize=N.mapSize,Z.shadowCameraNear=N.camera.near,Z.shadowCameraFar=N.camera.far,i.pointShadow[f]=Z,i.pointShadowMap[f]=st,i.pointShadowMatrix[f]=L.shadow.matrix,A++}i.point[f]=C,f++}else if(L.isHemisphereLight){let C=e.get(L);C.skyColor.copy(L.color).multiplyScalar(et),C.groundColor.copy(L.groundColor).multiplyScalar(et),i.hemi[v]=C,v++}}if(R>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2;else i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2;i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let I=i.hash;if(I.sunLength!==p||I.directionalLength!==m||I.pointLength!==f||I.spotLength!==E||I.rectAreaLength!==R||I.hemiLength!==v||I.numSunShadows!==x||I.numDirectionalShadows!==T||I.numPointShadows!==A||I.numSpotShadows!==w||I.numSpotMaps!==g||I.numLightProbes!==G)i.sun.length=p,i.directional.length=m,i.spot.length=E,i.rectArea.length=R,i.point.length=f,i.hemi.length=v,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+g-S,i.spotLightMap.length=g,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=G,I.sunLength=p,I.directionalLength=m,I.pointLength=f,I.spotLength=E,I.rectAreaLength=R,I.hemiLength=v,I.numSunShadows=x,I.numDirectionalShadows=T,I.numPointShadows=A,I.numSpotShadows=w,I.numSpotMaps=g,I.numLightProbes=G,i.version=H_++}function l(c,h){let d=0,u=0,p=0,x=0,M=0,m=0,f=h.matrixWorldInverse;for(let E=0,R=c.length;E<R;E++){let v=c[E];if(v.isSunLight){let T=i.sun[d];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(f),d++}else if(v.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),u++}else if(v.isSpotLight){let T=i.spot[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),x++}else if(v.isRectAreaLight){let T=i.rectArea[M];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),a.identity(),r.copy(v.matrixWorld),r.premultiply(f),a.extractRotation(r),T.halfWidth.set(v.width*0.5,0,0),T.halfHeight.set(0,v.height*0.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),M++}else if(v.isPointLight){let T=i.point[p];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:i}}function zu(t){let e=new G_(t),n=[],i=[],s=[];function r(u){d.camera=u,n.length=0,i.length=0,s.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(n)}function h(u){e.setupView(n,u)}let d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function V_(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;if(a===void 0)o=new zu(t),e.set(s,[o]);else if(r>=a.length)o=new zu(t),a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:n,dispose:i}}var W_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X_=`uniform sampler2D shadow_pass;
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
}`,q_=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Y_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Hu=new Kt,or=new P,Vl=new P;function Z_(t,e,n){let i=new nr,s=new At,r=new At,a=new xe,o=new vl,l=new Sl,c={},h=n.maxTextureSize,d={[bs]:nn,[nn]:bs,[Dn]:Dn},u=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:W_,fragmentShader:X_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let x=new Le;x.setAttribute("position",new ke(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let M=new Yt(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pi;let f=this.type;this.render=function(A,w,g){if(m.enabled===!1)return;if(m.autoUpdate===!1&&m.needsUpdate===!1)return;if(A.length===0)return;if(this.type===mh)Dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Pi;let S=t.getRenderTarget(),G=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),B=t.state;if(B.setBlending(Un),B.buffers.depth.getReversed()===!0)B.buffers.color.setClear(0,0,0,0);else B.buffers.color.setClear(1,1,1,1);B.buffers.depth.setTest(!0),B.setScissorTest(!1);let j=f!==this.type;if(j)w.traverse(function(L){if(L.material)if(Array.isArray(L.material))L.material.forEach((q)=>q.needsUpdate=!0);else L.material.needsUpdate=!0});for(let L=0,q=A.length;L<q;L++){let et=A[L],V=et.shadow;if(V===void 0){Dt("WebGLShadowMap:",et,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let st=V.getFrameExtents();if(s.multiply(st),r.copy(V.mapSize),s.x>h||s.y>h){if(s.x>h)r.x=Math.floor(h/st.x),s.x=r.x*st.x,V.mapSize.x=r.x;if(s.y>h)r.y=Math.floor(h/st.y),s.y=r.y*st.y,V.mapSize.y=r.y}let C=t.state.buffers.depth.getReversed();if(V.camera._reversedDepth=C,V.map===null||j===!0){if(V.map!==null){if(V.map.depthTexture!==null)V.map.depthTexture.dispose(),V.map.depthTexture=null;V.map.dispose()}if(this.type===Ss){if(et.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new un(s.x,s.y,{format:Ui,type:Fn,minFilter:sn,magFilter:sn,generateMipmaps:!1}),V.map.texture.name=et.name+".shadowMap",V.map.depthTexture=new Bi(s.x,s.y,ti),V.map.depthTexture.name=et.name+".shadowMapDepth",V.map.depthTexture.format=Ni,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=wn,V.map.depthTexture.magFilter=wn}else{if(et.isPointLight)V.map=new Yl(s.x),V.map.depthTexture=new _l(s.x,yi);else V.map=new un(s.x,s.y),V.map.depthTexture=new Bi(s.x,s.y,yi);if(V.map.depthTexture.name=et.name+".shadowMap",V.map.depthTexture.format=Ni,this.type===Pi)V.map.depthTexture.compareFunction=C?ta:Qr,V.map.depthTexture.minFilter=sn,V.map.depthTexture.magFilter=sn;else V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=wn,V.map.depthTexture.magFilter=wn}V.camera.updateProjectionMatrix()}if(V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y))V.map.setSize(s.x,s.y);let N=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();if(et.isPointLight!==!0)V.updateMatrices(et,g);for(let Z=0;Z<N;Z++){let rt=V.getCamera(Z);if(et.isPointLight){let{camera:lt,matrix:Ct}=V,Et=et.distance||lt.far;if(Et!==lt.far)lt.far=Et,lt.updateProjectionMatrix();or.setFromMatrixPosition(et.matrixWorld),lt.position.copy(or),Vl.copy(lt.position),Vl.add(q_[Z]),lt.up.copy(Y_[Z]),lt.lookAt(Vl),lt.updateMatrixWorld(),Ct.makeTranslation(-or.x,-or.y,-or.z),Hu.multiplyMatrices(lt.projectionMatrix,lt.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Hu,lt.coordinateSystem,lt.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,Z),t.clear();else{if(Z===0)t.setRenderTarget(V.map),t.clear();let lt=V.getViewport(Z);a.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),B.viewport(a)}i=V.getFrustum(Z),v(w,g,rt,et,this.type)}if(V.isPointLightShadow!==!0&&this.type===Ss)E(V,g);V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(S,G,I)};function E(A,w){let g=e.update(M);if(u.defines.VSM_SAMPLES!==A.blurSamples)u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0;if(A.mapPass===null)A.mapPass=new un(s.x,s.y,{format:Ui,type:Fn});else if(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)A.mapPass.setSize(A.map.width,A.map.height);u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,g,u,M,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,g,p,M,null)}function R(A,w,g,S){let G=null,I=g.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)G=I;else if(G=g.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let B=G.uuid,j=w.uuid,L=c[B];if(L===void 0)L={},c[B]=L;let q=L[j];if(q===void 0)q=G.clone(),L[j]=q,w.addEventListener("dispose",T);G=q}if(G.visible=w.visible,G.wireframe=w.wireframe,S===Ss)G.side=w.shadowSide!==null?w.shadowSide:w.side;else G.side=w.shadowSide!==null?w.shadowSide:d[w.side];if(G.alphaMap=w.alphaMap,G.alphaTest=w.alphaToCoverage===!0?0.5:w.alphaTest,G.map=w.map,G.clipShadows=w.clipShadows,G.clippingPlanes=w.clippingPlanes,G.clipIntersection=w.clipIntersection,G.displacementMap=w.displacementMap,G.displacementScale=w.displacementScale,G.displacementBias=w.displacementBias,G.wireframeLinewidth=w.wireframeLinewidth,G.linewidth=w.linewidth,g.isPointLight===!0&&G.isMeshDistanceMaterial===!0){let B=t.properties.get(G);B.light=g}return G}function v(A,w,g,S,G){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)){if((A.castShadow||A.receiveShadow&&G===Ss)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,A.matrixWorld);let j=e.update(A),L=A.material;if(Array.isArray(L)){let q=j.groups;for(let et=0,V=q.length;et<V;et++){let st=q[et],C=L[st.materialIndex];if(C&&C.visible){let N=R(A,C,S,G);A.onBeforeShadow(t,A,w,g,j,N,st),t.renderBufferDirect(g,null,j,N,A,st),A.onAfterShadow(t,A,w,g,j,N,st)}}}else if(L.visible){let q=R(A,L,S,G);A.onBeforeShadow(t,A,w,g,j,q,null),t.renderBufferDirect(g,null,j,q,A,null),A.onAfterShadow(t,A,w,g,j,q,null)}}}let B=A.children;for(let j=0,L=B.length;j<L;j++)v(B[j],w,g,S,G)}function T(A){A.target.removeEventListener("dispose",T);for(let g in c){let S=c[g],G=A.target.uuid;if(G in S)S[G].dispose(),delete S[G]}}}function J_(t,e){function n(){let O=!1,ht=new xe,J=null,ut=new xe(0,0,0,0);return{setMask:function(St){if(J!==St&&!O)t.colorMask(St,St,St,St),J=St},setLocked:function(St){O=St},setClear:function(St,nt,gt,Bt,me){if(me===!0)St*=Bt,nt*=Bt,gt*=Bt;if(ht.set(St,nt,gt,Bt),ut.equals(ht)===!1)t.clearColor(St,nt,gt,Bt),ut.copy(ht)},reset:function(){O=!1,J=null,ut.set(-1,0,0,0)}}}function i(){let O=!1,ht=!1,J=null,ut=null,St=null;return{setReversed:function(nt){if(ht!==nt){let gt=e.get("EXT_clip_control");if(nt)gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT);else gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT);ht=nt;let Bt=St;St=null,this.setClear(Bt)}},getReversed:function(){return ht},setTest:function(nt){if(nt)K(t.DEPTH_TEST);else ct(t.DEPTH_TEST)},setMask:function(nt){if(J!==nt&&!O)t.depthMask(nt),J=nt},setFunc:function(nt){if(ht)nt=uu[nt];if(ut!==nt){switch(nt){case Fh:t.depthFunc(t.NEVER);break;case Oh:t.depthFunc(t.ALWAYS);break;case Bh:t.depthFunc(t.LESS);break;case xo:t.depthFunc(t.LEQUAL);break;case zh:t.depthFunc(t.EQUAL);break;case Hh:t.depthFunc(t.GEQUAL);break;case kh:t.depthFunc(t.GREATER);break;case Gh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ut=nt}},setLocked:function(nt){O=nt},setClear:function(nt){if(St!==nt){if(St=nt,ht)nt=1-nt;t.clearDepth(nt)}},reset:function(){O=!1,J=null,ut=null,St=null,ht=!1}}}function s(){let O=!1,ht=null,J=null,ut=null,St=null,nt=null,gt=null,Bt=null,me=null;return{setTest:function(ee){if(!O)if(ee)K(t.STENCIL_TEST);else ct(t.STENCIL_TEST)},setMask:function(ee){if(ht!==ee&&!O)t.stencilMask(ee),ht=ee},setFunc:function(ee,In,qn){if(J!==ee||ut!==In||St!==qn)t.stencilFunc(ee,In,qn),J=ee,ut=In,St=qn},setOp:function(ee,In,qn){if(nt!==ee||gt!==In||Bt!==qn)t.stencilOp(ee,In,qn),nt=ee,gt=In,Bt=qn},setLocked:function(ee){O=ee},setClear:function(ee){if(me!==ee)t.clearStencil(ee),me=ee},reset:function(){O=!1,ht=null,J=null,ut=null,St=null,nt=null,gt=null,Bt=null,me=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},p=new WeakMap,x=[],M=null,m=!1,f=null,E=null,R=null,v=null,T=null,A=null,w=null,g=new Ot(0,0,0),S=0,G=!1,I=null,B=null,j=null,L=null,q=null,et=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,st=0,C=t.getParameter(t.VERSION);if(C.indexOf("WebGL")!==-1)st=parseFloat(/^WebGL (\d)/.exec(C)[1]),V=st>=1;else if(C.indexOf("OpenGL ES")!==-1)st=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),V=st>=2;let N=null,Z={},rt=t.getParameter(t.SCISSOR_BOX),lt=t.getParameter(t.VIEWPORT),Ct=new xe().fromArray(rt),Et=new xe().fromArray(lt);function z(O,ht,J,ut){let St=new Uint8Array(4),nt=t.createTexture();t.bindTexture(O,nt),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let gt=0;gt<J;gt++)if(O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY)t.texImage3D(ht,0,t.RGBA,1,1,ut,0,t.RGBA,t.UNSIGNED_BYTE,St);else t.texImage2D(ht+gt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,St);return nt}let tt={};tt[t.TEXTURE_2D]=z(t.TEXTURE_2D,t.TEXTURE_2D,1),tt[t.TEXTURE_CUBE_MAP]=z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[t.TEXTURE_2D_ARRAY]=z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),tt[t.TEXTURE_3D]=z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(t.DEPTH_TEST),a.setFunc(xo),Me(!1),he(po),K(t.CULL_FACE),Zt(Un);function K(O){if(h[O]!==!0)t.enable(O),h[O]=!0}function ct(O){if(h[O]!==!1)t.disable(O),h[O]=!1}function vt(O,ht){if(u[O]!==ht){if(t.bindFramebuffer(O,ht),u[O]=ht,O===t.DRAW_FRAMEBUFFER)u[t.FRAMEBUFFER]=ht;if(O===t.FRAMEBUFFER)u[t.DRAW_FRAMEBUFFER]=ht;return!0}return!1}function mt(O,ht){let J=x,ut=!1;if(O){if(J=p.get(ht),J===void 0)J=[],p.set(ht,J);let St=O.textures;if(J.length!==St.length||J[0]!==t.COLOR_ATTACHMENT0){for(let nt=0,gt=St.length;nt<gt;nt++)J[nt]=t.COLOR_ATTACHMENT0+nt;J.length=St.length,ut=!0}}else if(J[0]!==t.BACK)J[0]=t.BACK,ut=!0;if(ut)t.drawBuffers(J)}function $t(O){if(M!==O)return t.useProgram(O),M=O,!0;return!1}let zt={[Ms]:t.FUNC_ADD,[_h]:t.FUNC_SUBTRACT,[xh]:t.FUNC_REVERSE_SUBTRACT};zt[yh]=t.MIN,zt[vh]=t.MAX;let Vt={[Sh]:t.ZERO,[bh]:t.ONE,[Mh]:t.SRC_COLOR,[Th]:t.SRC_ALPHA,[Ih]:t.SRC_ALPHA_SATURATE,[Ch]:t.DST_COLOR,[Ah]:t.DST_ALPHA,[Eh]:t.ONE_MINUS_SRC_COLOR,[wh]:t.ONE_MINUS_SRC_ALPHA,[Ph]:t.ONE_MINUS_DST_COLOR,[Rh]:t.ONE_MINUS_DST_ALPHA,[Lh]:t.CONSTANT_COLOR,[Nh]:t.ONE_MINUS_CONSTANT_COLOR,[Dh]:t.CONSTANT_ALPHA,[Uh]:t.ONE_MINUS_CONSTANT_ALPHA};function Zt(O,ht,J,ut,St,nt,gt,Bt,me,ee){if(O===Un){if(m===!0)ct(t.BLEND),m=!1;return}if(m===!1)K(t.BLEND),m=!0;if(O!==gh){if(O!==f||ee!==G){if(E!==Ms||T!==Ms)t.blendEquation(t.FUNC_ADD),E=Ms,T=Ms;if(ee)switch(O){case Zs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case mo:t.blendFunc(t.ONE,t.ONE);break;case go:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _o:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Nt("WebGLState: Invalid blending: ",O);break}else switch(O){case Zs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case mo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case go:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _o:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",O);break}R=null,v=null,A=null,w=null,g.set(0,0,0),S=0,f=O,G=ee}return}if(St=St||ht,nt=nt||J,gt=gt||ut,ht!==E||St!==T)t.blendEquationSeparate(zt[ht],zt[St]),E=ht,T=St;if(J!==R||ut!==v||nt!==A||gt!==w)t.blendFuncSeparate(Vt[J],Vt[ut],Vt[nt],Vt[gt]),R=J,v=ut,A=nt,w=gt;if(Bt.equals(g)===!1||me!==S)t.blendColor(Bt.r,Bt.g,Bt.b,me),g.copy(Bt),S=me;f=O,G=!1}function Gt(O,ht){O.side===Dn?ct(t.CULL_FACE):K(t.CULL_FACE);let J=O.side===nn;if(ht)J=!J;Me(J),O.blending===Zs&&O.transparent===!1?Zt(Un):Zt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let ut=O.stencilWrite;if(o.setTest(ut),ut)o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass);ye(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?K(t.SAMPLE_ALPHA_TO_COVERAGE):ct(t.SAMPLE_ALPHA_TO_COVERAGE)}function Me(O){if(I!==O){if(O)t.frontFace(t.CW);else t.frontFace(t.CCW);I=O}}function he(O){if(O!==fh){if(K(t.CULL_FACE),O!==B)if(O===po)t.cullFace(t.BACK);else if(O===ph)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else ct(t.CULL_FACE);B=O}function re(O){if(O!==j){if(V)t.lineWidth(O);j=O}}function ye(O,ht,J){if(O){if(K(t.POLYGON_OFFSET_FILL),L!==ht||q!==J){if(L=ht,q=J,a.getReversed())ht=-ht;t.polygonOffset(ht,J)}}else ct(t.POLYGON_OFFSET_FILL)}function Qt(O){if(O)K(t.SCISSOR_TEST);else ct(t.SCISSOR_TEST)}function U(O){if(O===void 0)O=t.TEXTURE0+et-1;if(N!==O)t.activeTexture(O),N=O}function tn(O,ht,J){if(J===void 0)if(N===null)J=t.TEXTURE0+et-1;else J=N;let ut=Z[J];if(ut===void 0)ut={type:void 0,texture:void 0},Z[J]=ut;if(ut.type!==O||ut.texture!==ht){if(N!==J)t.activeTexture(J),N=J;t.bindTexture(O,ht||tt[O]),ut.type=O,ut.texture=ht}}function te(){let O=Z[N];if(O!==void 0&&O.type!==void 0)t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0}function ve(){try{t.compressedTexImage2D(...arguments)}catch(O){Nt("WebGLState:",O)}}function b(){try{t.compressedTexImage3D(...arguments)}catch(O){Nt("WebGLState:",O)}}function _(){try{t.texSubImage2D(...arguments)}catch(O){Nt("WebGLState:",O)}}function D(){try{t.texSubImage3D(...arguments)}catch(O){Nt("WebGLState:",O)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(O){Nt("WebGLState:",O)}}function it(){try{t.compressedTexSubImage3D(...arguments)}catch(O){Nt("WebGLState:",O)}}function ot(){try{t.texStorage2D(...arguments)}catch(O){Nt("WebGLState:",O)}}function dt(){try{t.texStorage3D(...arguments)}catch(O){Nt("WebGLState:",O)}}function Y(){try{t.texImage2D(...arguments)}catch(O){Nt("WebGLState:",O)}}function Q(){try{t.texImage3D(...arguments)}catch(O){Nt("WebGLState:",O)}}function yt(O){if(d[O]!==void 0)return d[O];else return t.getParameter(O)}function Pt(O,ht){if(d[O]!==ht)t.pixelStorei(O,ht),d[O]=ht}function ft(O){if(Ct.equals(O)===!1)t.scissor(O.x,O.y,O.z,O.w),Ct.copy(O)}function at(O){if(Et.equals(O)===!1)t.viewport(O.x,O.y,O.z,O.w),Et.copy(O)}function It(O,ht){let J=c.get(ht);if(J===void 0)J=new WeakMap,c.set(ht,J);let ut=J.get(O);if(ut===void 0)ut=t.getUniformBlockIndex(ht,O.name),J.set(O,ut)}function Lt(O,ht){let ut=c.get(ht).get(O);if(l.get(ht)!==ut)t.uniformBlockBinding(ht,ut,O.__bindingPointIndex),l.set(ht,ut)}function jt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},d={},N=null,Z={},u={},p=new WeakMap,x=[],M=null,m=!1,f=null,E=null,R=null,v=null,T=null,A=null,w=null,g=new Ot(0,0,0),S=0,G=!1,I=null,B=null,j=null,L=null,q=null,Ct.set(0,0,t.canvas.width,t.canvas.height),Et.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:ct,bindFramebuffer:vt,drawBuffers:mt,useProgram:$t,setBlending:Zt,setMaterial:Gt,setFlipSided:Me,setCullFace:he,setLineWidth:re,setPolygonOffset:ye,setScissorTest:Qt,activeTexture:U,bindTexture:tn,unbindTexture:te,compressedTexImage2D:ve,compressedTexImage3D:b,texImage2D:Y,texImage3D:Q,pixelStorei:Pt,getParameter:yt,updateUBOMapping:It,uniformBlockBinding:Lt,texStorage2D:ot,texStorage3D:dt,texSubImage2D:_,texSubImage3D:D,compressedTexSubImage2D:W,compressedTexSubImage3D:it,scissor:ft,viewport:at,reset:jt}}function K_(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,h=new WeakMap,d=new Set,u,p=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(b){}function M(b,_){return x?new OffscreenCanvas(b,_):Xs("canvas")}function m(b,_,D){let W=1,it=ve(b);if(it.width>D||it.height>D)W=D/Math.max(it.width,it.height);if(W<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let ot=Math.floor(W*it.width),dt=Math.floor(W*it.height);if(u===void 0)u=M(ot,dt);let Y=_?M(ot,dt):u;return Y.width=ot,Y.height=dt,Y.getContext("2d").drawImage(b,0,0,ot,dt),Dt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ot+"x"+dt+")."),Y}else{if("data"in b)Dt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+").");return b}return b}function f(b){return b.generateMipmaps}function E(b){t.generateMipmap(b)}function R(b){if(b.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(b.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function v(b,_,D,W,it,ot=!1){if(b!==null){if(t[b]!==void 0)return t[b];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let dt;if(W){if(dt=e.get("EXT_texture_norm16"),!dt)Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let Y=_;if(_===t.RED){if(D===t.FLOAT)Y=t.R32F;if(D===t.HALF_FLOAT)Y=t.R16F;if(D===t.UNSIGNED_BYTE)Y=t.R8;if(D===t.UNSIGNED_SHORT&&dt)Y=dt.R16_EXT;if(D===t.SHORT&&dt)Y=dt.R16_SNORM_EXT}if(_===t.RED_INTEGER){if(D===t.UNSIGNED_BYTE)Y=t.R8UI;if(D===t.UNSIGNED_SHORT)Y=t.R16UI;if(D===t.UNSIGNED_INT)Y=t.R32UI;if(D===t.BYTE)Y=t.R8I;if(D===t.SHORT)Y=t.R16I;if(D===t.INT)Y=t.R32I}if(_===t.RG){if(D===t.FLOAT)Y=t.RG32F;if(D===t.HALF_FLOAT)Y=t.RG16F;if(D===t.UNSIGNED_BYTE)Y=t.RG8;if(D===t.UNSIGNED_SHORT&&dt)Y=dt.RG16_EXT;if(D===t.SHORT&&dt)Y=dt.RG16_SNORM_EXT}if(_===t.RG_INTEGER){if(D===t.UNSIGNED_BYTE)Y=t.RG8UI;if(D===t.UNSIGNED_SHORT)Y=t.RG16UI;if(D===t.UNSIGNED_INT)Y=t.RG32UI;if(D===t.BYTE)Y=t.RG8I;if(D===t.SHORT)Y=t.RG16I;if(D===t.INT)Y=t.RG32I}if(_===t.RGB_INTEGER){if(D===t.UNSIGNED_BYTE)Y=t.RGB8UI;if(D===t.UNSIGNED_SHORT)Y=t.RGB16UI;if(D===t.UNSIGNED_INT)Y=t.RGB32UI;if(D===t.BYTE)Y=t.RGB8I;if(D===t.SHORT)Y=t.RGB16I;if(D===t.INT)Y=t.RGB32I}if(_===t.RGBA_INTEGER){if(D===t.UNSIGNED_BYTE)Y=t.RGBA8UI;if(D===t.UNSIGNED_SHORT)Y=t.RGBA16UI;if(D===t.UNSIGNED_INT)Y=t.RGBA32UI;if(D===t.BYTE)Y=t.RGBA8I;if(D===t.SHORT)Y=t.RGBA16I;if(D===t.INT)Y=t.RGBA32I}if(_===t.RGB){if(D===t.UNSIGNED_SHORT&&dt)Y=dt.RGB16_EXT;if(D===t.SHORT&&dt)Y=dt.RGB16_SNORM_EXT;if(D===t.UNSIGNED_INT_5_9_9_9_REV)Y=t.RGB9_E5;if(D===t.UNSIGNED_INT_10F_11F_11F_REV)Y=t.R11F_G11F_B10F}if(_===t.RGBA){let Q=ot?hl:qt.getTransfer(it);if(D===t.FLOAT)Y=t.RGBA32F;if(D===t.HALF_FLOAT)Y=t.RGBA16F;if(D===t.UNSIGNED_BYTE)Y=Q===fe?t.SRGB8_ALPHA8:t.RGBA8;if(D===t.UNSIGNED_SHORT&&dt)Y=dt.RGBA16_EXT;if(D===t.SHORT&&dt)Y=dt.RGBA16_SNORM_EXT;if(D===t.UNSIGNED_SHORT_4_4_4_4)Y=t.RGBA4;if(D===t.UNSIGNED_SHORT_5_5_5_1)Y=t.RGB5_A1}if(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)e.get("EXT_color_buffer_float");return Y}function T(b,_){let D;if(b){if(_===null||_===yi||_===Ts)D=t.DEPTH24_STENCIL8;else if(_===ti)D=t.DEPTH32F_STENCIL8;else if(_===js)D=t.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(_===null||_===yi||_===Ts)D=t.DEPTH_COMPONENT24;else if(_===ti)D=t.DEPTH_COMPONENT32F;else if(_===js)D=t.DEPTH_COMPONENT16;return D}function A(b,_){if(f(b)===!0||b.isFramebufferTexture&&b.minFilter!==wn&&b.minFilter!==sn)return Math.log2(Math.max(_.width,_.height))+1;else if(b.mipmaps!==void 0&&b.mipmaps.length>0)return b.mipmaps.length;else if(b.isCompressedTexture&&Array.isArray(b.image))return _.mipmaps.length;else return 1}function w(b){let _=b.target;if(_.removeEventListener("dispose",w),S(_),_.isVideoTexture)h.delete(_);if(_.isHTMLTexture)d.delete(_)}function g(b){let _=b.target;_.removeEventListener("dispose",g),I(_)}function S(b){let _=i.get(b);if(_.__webglInit===void 0)return;let D=b.source,W=p.get(D);if(W){let it=W[_.__cacheKey];if(it.usedTimes--,it.usedTimes===0)G(b);if(Object.keys(W).length===0)p.delete(D)}i.remove(b)}function G(b){let _=i.get(b);t.deleteTexture(_.__webglTexture);let D=b.source,W=p.get(D);delete W[_.__cacheKey],a.memory.textures--}function I(b){let _=i.get(b);if(b.depthTexture)b.depthTexture.dispose(),i.remove(b.depthTexture);if(b.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let it=0;it<_.__webglFramebuffer[W].length;it++)t.deleteFramebuffer(_.__webglFramebuffer[W][it]);else t.deleteFramebuffer(_.__webglFramebuffer[W]);if(_.__webglDepthbuffer)t.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)t.deleteFramebuffer(_.__webglFramebuffer[W]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer)t.deleteRenderbuffer(_.__webglDepthbuffer);if(_.__webglMultisampledFramebuffer)t.deleteFramebuffer(_.__webglMultisampledFramebuffer);if(_.__webglColorRenderbuffer){for(let W=0;W<_.__webglColorRenderbuffer.length;W++)if(_.__webglColorRenderbuffer[W])t.deleteRenderbuffer(_.__webglColorRenderbuffer[W])}if(_.__webglDepthRenderbuffer)t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let D=b.textures;for(let W=0,it=D.length;W<it;W++){let ot=i.get(D[W]);if(ot.__webglTexture)t.deleteTexture(ot.__webglTexture),a.memory.textures--;i.remove(D[W])}i.remove(b)}let B=0;function j(){B=0}function L(){return B}function q(b){B=b}function et(){let b=B;if(b>=s.maxTextures)Dt("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures);return B+=1,b}function V(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function st(b,_){let D=i.get(b);if(b.isVideoTexture)tn(b);if(b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&D.__version!==b.version){let W=b.image;if(W===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(D,b,_);return}}else if(b.isExternalTexture)D.__webglTexture=b.sourceTexture?b.sourceTexture:null;n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+_)}function C(b,_){let D=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){ct(D,b,_);return}else if(b.isExternalTexture)D.__webglTexture=b.sourceTexture?b.sourceTexture:null;n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+_)}function N(b,_){let D=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){ct(D,b,_);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+_)}function Z(b,_){let D=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&D.__version!==b.version){vt(D,b,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+_)}let rt={[Ks]:t.REPEAT,[Wr]:t.CLAMP_TO_EDGE,[qh]:t.MIRRORED_REPEAT},lt={[wn]:t.NEAREST,[Yh]:t.NEAREST_MIPMAP_NEAREST,[$s]:t.NEAREST_MIPMAP_LINEAR,[sn]:t.LINEAR,[Xr]:t.LINEAR_MIPMAP_NEAREST,[Li]:t.LINEAR_MIPMAP_LINEAR},Ct={[nu]:t.NEVER,[ou]:t.ALWAYS,[iu]:t.LESS,[Qr]:t.LEQUAL,[su]:t.EQUAL,[ta]:t.GEQUAL,[ru]:t.GREATER,[au]:t.NOTEQUAL};function Et(b,_){if(_.type===ti&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===sn||_.magFilter===Xr||_.magFilter===$s||_.magFilter===Li||_.minFilter===sn||_.minFilter===Xr||_.minFilter===$s||_.minFilter===Li))Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(b,t.TEXTURE_WRAP_S,rt[_.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,rt[_.wrapT]),b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)t.texParameteri(b,t.TEXTURE_WRAP_R,rt[_.wrapR]);if(t.texParameteri(b,t.TEXTURE_MAG_FILTER,lt[_.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,lt[_.minFilter]),_.compareFunction)t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Ct[_.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===wn)return;if(_.minFilter!==$s&&_.minFilter!==Li)return;if(_.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function z(b,_){let D=!1;if(b.__webglInit===void 0)b.__webglInit=!0,_.addEventListener("dispose",w);let W=_.source,it=p.get(W);if(it===void 0)it={},p.set(W,it);let ot=V(_);if(ot!==b.__cacheKey){if(it[ot]===void 0)it[ot]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,D=!0;it[ot].usedTimes++;let dt=it[b.__cacheKey];if(dt!==void 0){if(it[b.__cacheKey].usedTimes--,dt.usedTimes===0)G(_)}b.__cacheKey=ot,b.__webglTexture=it[ot].texture}return D}function tt(b,_,D){return Math.floor(Math.floor(b/D)/_)}function K(b,_,D,W){let ot=b.updateRanges;if(ot.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,D,W,_.data);else{ot.sort((Pt,ft)=>Pt.start-ft.start);let dt=0;for(let Pt=1;Pt<ot.length;Pt++){let ft=ot[dt],at=ot[Pt],It=ft.start+ft.count,Lt=tt(at.start,_.width,4),jt=tt(ft.start,_.width,4);if(at.start<=It+1&&Lt===jt&&tt(at.start+at.count-1,_.width,4)===Lt)ft.count=Math.max(ft.count,at.start+at.count-ft.start);else++dt,ot[dt]=at}ot.length=dt+1;let Y=n.getParameter(t.UNPACK_ROW_LENGTH),Q=n.getParameter(t.UNPACK_SKIP_PIXELS),yt=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Pt=0,ft=ot.length;Pt<ft;Pt++){let at=ot[Pt],It=Math.floor(at.start/4),Lt=Math.ceil(at.count/4),jt=It%_.width,O=Math.floor(It/_.width),ht=Lt,J=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,jt),n.pixelStorei(t.UNPACK_SKIP_ROWS,O),n.texSubImage2D(t.TEXTURE_2D,0,jt,O,ht,1,D,W,_.data)}b.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Y),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(t.UNPACK_SKIP_ROWS,yt)}}function ct(b,_,D){let W=t.TEXTURE_2D;if(_.isDataArrayTexture||_.isCompressedArrayTexture)W=t.TEXTURE_2D_ARRAY;if(_.isData3DTexture)W=t.TEXTURE_3D;let it=z(b,_),ot=_.source;n.bindTexture(W,b.__webglTexture,t.TEXTURE0+D);let dt=i.get(ot);if(ot.version!==dt.__version||it===!0){if(n.activeTexture(t.TEXTURE0+D),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let J=qt.getPrimaries(qt.workingColorSpace),ut=_.colorSpace===Fi?null:qt.getPrimaries(_.colorSpace),St=_.colorSpace===Fi||J===ut?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let Q=m(_.image,!1,s.maxTextureSize);Q=te(_,Q);let yt=r.convert(_.format,_.colorSpace),Pt=r.convert(_.type),ft=v(_.internalFormat,yt,Pt,_.normalized,_.colorSpace,_.isVideoTexture);Et(W,_);let at,It=_.mipmaps,Lt=_.isVideoTexture!==!0,jt=dt.__version===void 0||it===!0,O=ot.dataReady,ht=A(_,Q);if(_.isDepthTexture){if(ft=T(_.format===Di,_.type),jt)if(Lt)n.texStorage2D(t.TEXTURE_2D,1,ft,Q.width,Q.height);else n.texImage2D(t.TEXTURE_2D,0,ft,Q.width,Q.height,0,yt,Pt,null)}else if(_.isDataTexture)if(It.length>0){if(Lt&&jt)n.texStorage2D(t.TEXTURE_2D,ht,ft,It[0].width,It[0].height);for(let J=0,ut=It.length;J<ut;J++)if(at=It[J],Lt){if(O)n.texSubImage2D(t.TEXTURE_2D,J,0,0,at.width,at.height,yt,Pt,at.data)}else n.texImage2D(t.TEXTURE_2D,J,ft,at.width,at.height,0,yt,Pt,at.data);_.generateMipmaps=!1}else if(Lt){if(jt)n.texStorage2D(t.TEXTURE_2D,ht,ft,Q.width,Q.height);if(O)K(_,Q,yt,Pt)}else n.texImage2D(t.TEXTURE_2D,0,ft,Q.width,Q.height,0,yt,Pt,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){if(Lt&&jt)n.texStorage3D(t.TEXTURE_2D_ARRAY,ht,ft,It[0].width,It[0].height,Q.depth);for(let J=0,ut=It.length;J<ut;J++)if(at=It[J],_.format!==On)if(yt!==null)if(Lt){if(O)if(_.layerUpdates.size>0){let St=Ol(at.width,at.height,_.format,_.type);for(let nt of _.layerUpdates){let gt=at.data.subarray(nt*St/at.data.BYTES_PER_ELEMENT,(nt+1)*St/at.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,nt,at.width,at.height,1,yt,gt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,at.width,at.height,Q.depth,yt,at.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,ft,at.width,at.height,Q.depth,0,at.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Lt){if(O)n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,at.width,at.height,Q.depth,yt,Pt,at.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,J,ft,at.width,at.height,Q.depth,0,yt,Pt,at.data);if(_.layerUpdates.size>0)_.clearLayerUpdates()}else{if(Lt&&jt)n.texStorage2D(t.TEXTURE_2D,ht,ft,It[0].width,It[0].height);for(let J=0,ut=It.length;J<ut;J++)if(at=It[J],_.format!==On)if(yt!==null)if(Lt){if(O)n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,at.width,at.height,yt,at.data)}else n.compressedTexImage2D(t.TEXTURE_2D,J,ft,at.width,at.height,0,at.data);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Lt){if(O)n.texSubImage2D(t.TEXTURE_2D,J,0,0,at.width,at.height,yt,Pt,at.data)}else n.texImage2D(t.TEXTURE_2D,J,ft,at.width,at.height,0,yt,Pt,at.data)}else if(_.isDataArrayTexture)if(Lt){if(jt)n.texStorage3D(t.TEXTURE_2D_ARRAY,ht,ft,Q.width,Q.height,Q.depth);if(O)if(_.layerUpdates.size>0){let J=Ol(Q.width,Q.height,_.format,_.type);for(let ut of _.layerUpdates){let St=Q.data.subarray(ut*J/Q.data.BYTES_PER_ELEMENT,(ut+1)*J/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ut,Q.width,Q.height,1,yt,Pt,St)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,yt,Pt,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ft,Q.width,Q.height,Q.depth,0,yt,Pt,Q.data);else if(_.isData3DTexture)if(Lt){if(jt)n.texStorage3D(t.TEXTURE_3D,ht,ft,Q.width,Q.height,Q.depth);if(O)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,yt,Pt,Q.data)}else n.texImage3D(t.TEXTURE_3D,0,ft,Q.width,Q.height,Q.depth,0,yt,Pt,Q.data);else if(_.isFramebufferTexture){if(jt)if(Lt)n.texStorage2D(t.TEXTURE_2D,ht,ft,Q.width,Q.height);else{let J=Q.width,ut=Q.height;for(let St=0;St<ht;St++)n.texImage2D(t.TEXTURE_2D,St,ft,J,ut,0,yt,Pt,null),J>>=1,ut>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){let J=t.canvas;if(!J.hasAttribute("layoutsubtree"))J.setAttribute("layoutsubtree","true");if(Q.parentNode!==J){J.appendChild(Q),d.add(_),J.onpaint=(ut)=>{let St=ut.changedElements;for(let nt of d)if(St.includes(nt.image))nt.needsUpdate=!0},J.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Q);else{let{RGBA:St,RGBA:nt,UNSIGNED_BYTE:gt}=t;t.texElementImage2D(t.TEXTURE_2D,0,St,nt,gt,Q)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(It.length>0){if(Lt&&jt){let J=ve(It[0]);n.texStorage2D(t.TEXTURE_2D,ht,ft,J.width,J.height)}for(let J=0,ut=It.length;J<ut;J++)if(at=It[J],Lt){if(O)n.texSubImage2D(t.TEXTURE_2D,J,0,0,yt,Pt,at)}else n.texImage2D(t.TEXTURE_2D,J,ft,yt,Pt,at);_.generateMipmaps=!1}else if(Lt){if(jt){let J=ve(Q);n.texStorage2D(t.TEXTURE_2D,ht,ft,J.width,J.height)}if(O)n.texSubImage2D(t.TEXTURE_2D,0,0,0,yt,Pt,Q)}else n.texImage2D(t.TEXTURE_2D,0,ft,yt,Pt,Q);if(f(_))E(W);if(dt.__version=ot.version,_.onUpdate)_.onUpdate(_)}b.__version=_.version}function vt(b,_,D){if(_.image.length!==6)return;let W=z(b,_),it=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+D);let ot=i.get(it);if(it.version!==ot.__version||W===!0){n.activeTexture(t.TEXTURE0+D);let dt=qt.getPrimaries(qt.workingColorSpace),Y=_.colorSpace===Fi?null:qt.getPrimaries(_.colorSpace),Q=_.colorSpace===Fi||dt===Y?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let yt=_.isCompressedTexture||_.image[0].isCompressedTexture,Pt=_.image[0]&&_.image[0].isDataTexture,ft=[];for(let nt=0;nt<6;nt++){if(!yt&&!Pt)ft[nt]=m(_.image[nt],!0,s.maxCubemapSize);else ft[nt]=Pt?_.image[nt].image:_.image[nt];ft[nt]=te(_,ft[nt])}let at=ft[0],It=r.convert(_.format,_.colorSpace),Lt=r.convert(_.type),jt=v(_.internalFormat,It,Lt,_.normalized,_.colorSpace),O=_.isVideoTexture!==!0,ht=ot.__version===void 0||W===!0,J=it.dataReady,ut=A(_,at);Et(t.TEXTURE_CUBE_MAP,_);let St;if(yt){if(O&&ht)n.texStorage2D(t.TEXTURE_CUBE_MAP,ut,jt,at.width,at.height);for(let nt=0;nt<6;nt++){St=ft[nt].mipmaps;for(let gt=0;gt<St.length;gt++){let Bt=St[gt];if(_.format!==On)if(It!==null)if(O){if(J)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt,0,0,Bt.width,Bt.height,It,Bt.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt,jt,Bt.width,Bt.height,0,Bt.data);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(O){if(J)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt,0,0,Bt.width,Bt.height,It,Lt,Bt.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt,jt,Bt.width,Bt.height,0,It,Lt,Bt.data)}}}else{if(St=_.mipmaps,O&&ht){if(St.length>0)ut++;let nt=ve(ft[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ut,jt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Pt){if(O){if(J)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ft[nt].width,ft[nt].height,It,Lt,ft[nt].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,jt,ft[nt].width,ft[nt].height,0,It,Lt,ft[nt].data);for(let gt=0;gt<St.length;gt++){let me=St[gt].image[nt].image;if(O){if(J)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt+1,0,0,me.width,me.height,It,Lt,me.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt+1,jt,me.width,me.height,0,It,Lt,me.data)}}else{if(O){if(J)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,It,Lt,ft[nt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,jt,It,Lt,ft[nt]);for(let gt=0;gt<St.length;gt++){let Bt=St[gt];if(O){if(J)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt+1,0,0,It,Lt,Bt.image[nt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt+1,jt,It,Lt,Bt.image[nt])}}}if(f(_))E(t.TEXTURE_CUBE_MAP);if(ot.__version=it.version,_.onUpdate)_.onUpdate(_)}b.__version=_.version}function mt(b,_,D,W,it,ot){let dt=r.convert(D.format,D.colorSpace),Y=r.convert(D.type),Q=v(D.internalFormat,dt,Y,D.normalized,D.colorSpace),yt=i.get(_),Pt=i.get(D);if(Pt.__renderTarget=_,!yt.__hasExternalTextures){let ft=Math.max(1,_.width>>ot),at=Math.max(1,_.height>>ot);if(it===t.TEXTURE_3D||it===t.TEXTURE_2D_ARRAY)n.texImage3D(it,ot,Q,ft,at,_.depth,0,dt,Y,null);else n.texImage2D(it,ot,Q,ft,at,0,dt,Y,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,b),U(_))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,it,Pt.__webglTexture,0,Qt(_));else if(it===t.TEXTURE_2D||it>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,W,it,Pt.__webglTexture,ot);n.bindFramebuffer(t.FRAMEBUFFER,null)}function $t(b,_,D){if(t.bindRenderbuffer(t.RENDERBUFFER,b),_.depthBuffer){let W=_.depthTexture,it=W&&W.isDepthTexture?W.type:null,ot=T(_.stencilBuffer,it),dt=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(U(_))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Qt(_),ot,_.width,_.height);else if(D)t.renderbufferStorageMultisample(t.RENDERBUFFER,Qt(_),ot,_.width,_.height);else t.renderbufferStorage(t.RENDERBUFFER,ot,_.width,_.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,dt,t.RENDERBUFFER,b)}else{let W=_.textures;for(let it=0;it<W.length;it++){let ot=W[it],dt=r.convert(ot.format,ot.colorSpace),Y=r.convert(ot.type),Q=v(ot.internalFormat,dt,Y,ot.normalized,ot.colorSpace);if(U(_))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Qt(_),Q,_.width,_.height);else if(D)t.renderbufferStorageMultisample(t.RENDERBUFFER,Qt(_),Q,_.width,_.height);else t.renderbufferStorage(t.RENDERBUFFER,Q,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function zt(b,_,D){let W=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=i.get(_.depthTexture);if(it.__renderTarget=_,!it.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0;if(W){if(it.__webglInit===void 0)it.__webglInit=!0,_.depthTexture.addEventListener("dispose",w);if(it.__webglTexture===void 0){it.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,it.__webglTexture),Et(t.TEXTURE_CUBE_MAP,_.depthTexture);let yt=r.convert(_.depthTexture.format),Pt=r.convert(_.depthTexture.type),ft;if(_.depthTexture.format===Ni)ft=t.DEPTH_COMPONENT24;else if(_.depthTexture.format===Di)ft=t.DEPTH24_STENCIL8;for(let at=0;at<6;at++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ft,_.width,_.height,0,yt,Pt,null)}}else st(_.depthTexture,0);let ot=it.__webglTexture,dt=Qt(_),Y=W?t.TEXTURE_CUBE_MAP_POSITIVE_X+D:t.TEXTURE_2D,Q=_.depthTexture.format===Di?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ni)if(U(_))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,Y,ot,0,dt);else t.framebufferTexture2D(t.FRAMEBUFFER,Q,Y,ot,0);else if(_.depthTexture.format===Di)if(U(_))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,Y,ot,0,dt);else t.framebufferTexture2D(t.FRAMEBUFFER,Q,Y,ot,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Vt(b){let _=i.get(b),D=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let W=b.depthTexture;if(_.__depthDisposeCallback)_.__depthDisposeCallback();if(W){let it=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",it)};W.addEventListener("dispose",it),_.__depthDisposeCallback=it}_.__boundDepthTexture=W}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(D)for(let W=0;W<6;W++)zt(_.__webglFramebuffer[W],b,W);else{let W=b.texture.mipmaps;if(W&&W.length>0)zt(_.__webglFramebuffer[0],b,0);else zt(_.__webglFramebuffer,b,0)}else if(D){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=t.createRenderbuffer(),$t(_.__webglDepthbuffer[W],b,!1);else{let it=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,ot),t.framebufferRenderbuffer(t.FRAMEBUFFER,it,t.RENDERBUFFER,ot)}}else{let W=b.texture.mipmaps;if(W&&W.length>0)n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]);else n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer);if(_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),$t(_.__webglDepthbuffer,b,!1);else{let it=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ot),t.framebufferRenderbuffer(t.FRAMEBUFFER,it,t.RENDERBUFFER,ot)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Zt(b,_,D){let W=i.get(b);if(_!==void 0)mt(W.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(D!==void 0)Vt(b)}function Gt(b){let _=b.texture,D=i.get(b),W=i.get(_);b.addEventListener("dispose",g);let it=b.textures,ot=b.isWebGLCubeRenderTarget===!0,dt=it.length>1;if(!dt){if(W.__webglTexture===void 0)W.__webglTexture=t.createTexture();W.__version=_.version,a.memory.textures++}if(ot){D.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[Y]=[];for(let Q=0;Q<_.mipmaps.length;Q++)D.__webglFramebuffer[Y][Q]=t.createFramebuffer()}else D.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)D.__webglFramebuffer[Y]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(dt)for(let Y=0,Q=it.length;Y<Q;Y++){let yt=i.get(it[Y]);if(yt.__webglTexture===void 0)yt.__webglTexture=t.createTexture(),a.memory.textures++}if(b.samples>0&&U(b)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let Y=0;Y<it.length;Y++){let Q=it[Y];D.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[Y]);let yt=r.convert(Q.format,Q.colorSpace),Pt=r.convert(Q.type),ft=v(Q.internalFormat,yt,Pt,Q.normalized,Q.colorSpace,b.isXRRenderTarget===!0),at=Qt(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,at,ft,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,D.__webglColorRenderbuffer[Y])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer)D.__webglDepthRenderbuffer=t.createRenderbuffer(),$t(D.__webglDepthRenderbuffer,b,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ot){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),Et(t.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)mt(D.__webglFramebuffer[Y][Q],b,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Q);else mt(D.__webglFramebuffer[Y],b,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);if(f(_))E(t.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(dt){for(let Y=0,Q=it.length;Y<Q;Y++){let yt=it[Y],Pt=i.get(yt),ft=t.TEXTURE_2D;if(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)ft=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(ft,Pt.__webglTexture),Et(ft,yt),mt(D.__webglFramebuffer,b,yt,t.COLOR_ATTACHMENT0+Y,ft,0),f(yt))E(ft)}n.unbindTexture()}else{let Y=t.TEXTURE_2D;if(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)Y=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(Y,W.__webglTexture),Et(Y,_),_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)mt(D.__webglFramebuffer[Q],b,_,t.COLOR_ATTACHMENT0,Y,Q);else mt(D.__webglFramebuffer,b,_,t.COLOR_ATTACHMENT0,Y,0);if(f(_))E(Y);n.unbindTexture()}if(b.depthBuffer)Vt(b)}function Me(b){let _=b.textures;for(let D=0,W=_.length;D<W;D++){let it=_[D];if(f(it)){let ot=R(b),dt=i.get(it).__webglTexture;n.bindTexture(ot,dt),E(ot),n.unbindTexture()}}}let he=[],re=[];function ye(b){if(b.samples>0){if(U(b)===!1){let{textures:_,width:D,height:W}=b,it=t.COLOR_BUFFER_BIT,ot=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,dt=i.get(b),Y=_.length>1;if(Y)for(let yt=0;yt<_.length;yt++)n.bindFramebuffer(t.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+yt,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,dt.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+yt,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let Q=b.texture.mipmaps;if(Q&&Q.length>0)n.bindFramebuffer(t.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]);else n.bindFramebuffer(t.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let yt=0;yt<_.length;yt++){if(b.resolveDepthBuffer){if(b.depthBuffer)it|=t.DEPTH_BUFFER_BIT;if(b.stencilBuffer&&b.resolveStencilBuffer)it|=t.STENCIL_BUFFER_BIT}if(Y){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,dt.__webglColorRenderbuffer[yt]);let Pt=i.get(_[yt]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Pt,0)}if(t.blitFramebuffer(0,0,D,W,0,0,D,W,it,t.NEAREST),l===!0){if(he.length=0,re.length=0,he.push(t.COLOR_ATTACHMENT0+yt),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1)he.push(ot),re.push(ot),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,re);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,he)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let yt=0;yt<_.length;yt++){n.bindFramebuffer(t.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+yt,t.RENDERBUFFER,dt.__webglColorRenderbuffer[yt]);let Pt=i.get(_[yt]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,dt.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+yt,t.TEXTURE_2D,Pt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){let _=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function Qt(b){return Math.min(s.maxSamples,b.samples)}function U(b){let _=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function tn(b){let _=a.render.frame;if(h.get(b)!==_)h.set(b,_),b.update()}function te(b,_){let{colorSpace:D,format:W,type:it}=b;if(b.isCompressedTexture===!0||b.isVideoTexture===!0)return _;if(D!==cl&&D!==Fi)if(qt.getTransfer(D)===fe){if(W!==On||it!==An)Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Nt("WebGLTextures: Unsupported texture color space:",D);return _}function ve(b){if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement)c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height;else if(typeof VideoFrame<"u"&&b instanceof VideoFrame)c.width=b.displayWidth,c.height=b.displayHeight;else c.width=b.width,c.height=b.height;return c}this.allocateTextureUnit=et,this.resetTextureUnits=j,this.getTextureUnits=L,this.setTextureUnits=q,this.setTexture2D=st,this.setTexture2DArray=C,this.setTexture3D=N,this.setTextureCube=Z,this.rebindTextures=Zt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=U,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function $_(t,e){function n(i,s=Fi){let r,a=qt.getTransfer(s);if(i===An)return t.UNSIGNED_BYTE;if(i===Ao)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ro)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Kh)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===$h)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Zh)return t.BYTE;if(i===Jh)return t.SHORT;if(i===js)return t.UNSIGNED_SHORT;if(i===wo)return t.INT;if(i===yi)return t.UNSIGNED_INT;if(i===ti)return t.FLOAT;if(i===Fn)return t.HALF_FLOAT;if(i===jh)return t.ALPHA;if(i===Qh)return t.RGB;if(i===On)return t.RGBA;if(i===Ni)return t.DEPTH_COMPONENT;if(i===Di)return t.DEPTH_STENCIL;if(i===tu)return t.RED;if(i===Co)return t.RED_INTEGER;if(i===Ui)return t.RG;if(i===Po)return t.RG_INTEGER;if(i===Io)return t.RGBA_INTEGER;if(i===qr||i===Yr||i===Zr||i===Jr)if(a===fe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lo||i===No||i===Do||i===Uo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Lo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===No)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Do)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fo||i===Oo||i===Bo||i===zo||i===Ho||i===Kr||i===ko)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Fo||i===Oo)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Bo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===zo)return r.COMPRESSED_R11_EAC;if(i===Ho)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Kr)return r.COMPRESSED_RG11_EAC;if(i===ko)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Go||i===Vo||i===Wo||i===Xo||i===qo||i===Yo||i===Zo||i===Jo||i===Ko||i===$o||i===jo||i===Qo||i===tl||i===el)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Go)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ko)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$o)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===el)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nl||i===il||i===sl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===nl)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rl||i===al||i===$r||i===ol)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===rl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===Ts)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}var j_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q_=`
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

}`;class ju{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ha(t.texture);if(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=n}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new pn({vertexShader:j_,fragmentShader:Q_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Yt(new bi(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qu extends Bn{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,h=null,d=null,u=null,p=null,x=typeof XRWebGLBinding<"u",M=new ju,m={},f=e.getContextAttributes(),E=null,R=null,v=[],T=[],A=new At,w=null,g=null,S=new Xe;S.viewport=new xe;let G=new Xe;G.viewport=new xe;let I=[S,G],B=new Nl,j=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let tt=v[z];if(tt===void 0)tt=new er,v[z]=tt;return tt.getTargetRaySpace()},this.getControllerGrip=function(z){let tt=v[z];if(tt===void 0)tt=new er,v[z]=tt;return tt.getGripSpace()},this.getHand=function(z){let tt=v[z];if(tt===void 0)tt=new er,v[z]=tt;return tt.getHandSpace()};function q(z){let tt=T.indexOf(z.inputSource);if(tt===-1)return;let K=v[tt];if(K!==void 0)K.update(z.inputSource,z.frame,l||r),K.dispatchEvent({type:z.type,data:z.inputSource})}function et(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",et),i.removeEventListener("inputsourceschange",V);for(let z=0;z<v.length;z++){let tt=T[z];if(tt===null)continue;T[z]=null,v[z].disconnect(tt)}j=null,L=null,M.reset();for(let z in m)delete m[z];if(t.setRenderTarget(E),u=null,d=null,h=null,i=null,R=null,Et.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),g!==null){let z=g.camera;z.fov=g.fov,z.zoom=g.zoom,z.updateProjectionMatrix(),g=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){if(s=z,n.isPresenting===!0)Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){if(a=z,n.isPresenting===!0)Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){if(h===null&&x)h=new XRWebGLBinding(i,e);return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",et),i.addEventListener("inputsourceschange",V),f.xrCompatible!==!0)await e.makeXRCompatible();if(w=t.getPixelRatio(),t.getSize(A),!(x&&("createProjectionLayer"in XRWebGLBinding.prototype))){let K={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),R=new un(u.framebufferWidth,u.framebufferHeight,{format:On,type:An,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let K=null,ct=null,vt=null;if(f.depth)vt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=f.stencil?Di:Ni,ct=f.stencil?Ts:yi;let mt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(mt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),R=new un(d.textureWidth,d.textureHeight,{format:On,type:An,depthTexture:new Bi(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),Et.setContext(i),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function V(z){for(let tt=0;tt<z.removed.length;tt++){let K=z.removed[tt],ct=T.indexOf(K);if(ct>=0)T[ct]=null,v[ct].disconnect(K)}for(let tt=0;tt<z.added.length;tt++){let K=z.added[tt],ct=T.indexOf(K);if(ct===-1){for(let mt=0;mt<v.length;mt++)if(mt>=T.length){T.push(K),ct=mt;break}else if(T[mt]===null){T[mt]=K,ct=mt;break}if(ct===-1)break}let vt=v[ct];if(vt)vt.connect(K)}}let st=new P,C=new P;function N(z,tt,K){st.setFromMatrixPosition(tt.matrixWorld),C.setFromMatrixPosition(K.matrixWorld);let ct=st.distanceTo(C),vt=tt.projectionMatrix.elements,mt=K.projectionMatrix.elements,$t=vt[14]/(vt[10]-1),zt=vt[14]/(vt[10]+1),Vt=(vt[9]+1)/vt[5],Zt=(vt[9]-1)/vt[5],Gt=(vt[8]-1)/vt[0],Me=(mt[8]+1)/mt[0],he=$t*Gt,re=$t*Me,ye=ct/(-Gt+Me),Qt=ye*-Gt;if(tt.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Qt),z.translateZ(ye),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),vt[10]===-1)z.projectionMatrix.copy(tt.projectionMatrix),z.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let U=$t+ye,tn=zt+ye,te=he-Qt,ve=re+(ct-Qt),b=Vt*zt/tn*U,_=Zt*zt/tn*U;z.projectionMatrix.makePerspective(te,ve,b,_,U,tn),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function Z(z,tt){if(tt===null)z.matrixWorld.copy(z.matrix);else z.matrixWorld.multiplyMatrices(tt.matrixWorld,z.matrix);z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;let{near:tt,far:K}=z;if(M.texture!==null){if(M.depthNear>0)tt=M.depthNear;if(M.depthFar>0)K=M.depthFar}if(B.near=G.near=S.near=tt,B.far=G.far=S.far=K,j!==B.near||L!==B.far)i.updateRenderState({depthNear:B.near,depthFar:B.far}),j=B.near,L=B.far;B.layers.mask=z.layers.mask|6,S.layers.mask=B.layers.mask&-5,G.layers.mask=B.layers.mask&-3;let ct=z.parent,vt=B.cameras;Z(B,ct);for(let mt=0;mt<vt.length;mt++)Z(vt[mt],ct);if(vt.length===2)N(B,S,G);else B.projectionMatrix.copy(S.projectionMatrix);if(g===null&&z.isPerspectiveCamera)g={camera:z,fov:z.fov,zoom:z.zoom};rt(z,B,ct)};function rt(z,tt,K){if(K===null)z.matrix.copy(tt.matrixWorld);else z.matrix.copy(K.matrixWorld),z.matrix.invert(),z.matrix.multiply(tt.matrixWorld);if(z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(tt.projectionMatrix),z.projectionMatrixInverse.copy(tt.projectionMatrixInverse),z.isPerspectiveCamera)z.fov=ys*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1}this.getCamera=function(){return B},this.getFoveation=function(){if(d===null&&u===null)return;return o},this.setFoveation=function(z){if(o=z,d!==null)d.fixedFoveation=z;if(u!==null&&u.fixedFoveation!==void 0)u.fixedFoveation=z},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(B)},this.getCameraTexture=function(z){return m[z]};let lt=null;function Ct(z,tt){if(c=tt.getViewerPose(l||r),p=tt,c!==null){let K=c.views;if(u!==null)t.setRenderTargetFramebuffer(R,u.framebuffer),t.setRenderTarget(R);let ct=!1;if(K.length!==B.cameras.length)B.cameras.length=0,ct=!0;for(let zt=0;zt<K.length;zt++){let Vt=K[zt],Zt=null;if(u!==null)Zt=u.getViewport(Vt);else{let Me=h.getViewSubImage(d,Vt);if(Zt=Me.viewport,zt===0)t.setRenderTargetTextures(R,Me.colorTexture,Me.depthStencilTexture),t.setRenderTarget(R)}let Gt=I[zt];if(Gt===void 0)Gt=new Xe,Gt.layers.enable(zt),Gt.viewport=new xe,I[zt]=Gt;if(Gt.matrix.fromArray(Vt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Vt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),zt===0)B.matrix.copy(Gt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);if(ct===!0)B.cameras.push(Gt)}let vt=i.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let zt=h.getDepthInformation(K[0]);if(zt&&zt.isValid&&zt.texture)M.init(zt,i.renderState)}if(vt&&vt.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let zt=0;zt<K.length;zt++){let Vt=K[zt].camera;if(Vt){let Zt=m[Vt];if(!Zt)Zt=new ha,m[Vt]=Zt;let Gt=h.getCameraImage(Vt);Zt.sourceTexture=Gt}}}}for(let K=0;K<v.length;K++){let ct=T[K],vt=v[K];if(ct!==null&&vt!==void 0)vt.update(ct,tt,l||r)}if(lt)lt(z,tt);if(tt.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:tt});p=null}let Et=new ku;Et.setAnimationLoop(Ct),this.setAnimationLoop=function(z){lt=z},this.dispose=function(){}}}var tx=new Kt,td=new Ft;td.set(-1,0,0,0,1,0,0,0,1);function ex(t,e){function n(m,f){if(m.matrixAutoUpdate===!0)m.updateMatrix();f.value.copy(m.matrix)}function i(m,f){if(f.color.getRGB(m.fogColor.value,xl(t)),f.isFog)m.fogNear.value=f.near,m.fogFar.value=f.far;else if(f.isFogExp2)m.fogDensity.value=f.density}function s(m,f,E,R,v){if(f.isNodeMaterial)f.uniformsNeedUpdate=!1;else if(f.isMeshBasicMaterial)r(m,f);else if(f.isMeshLambertMaterial){if(r(m,f),f.envMap)m.envMapIntensity.value=f.envMapIntensity}else if(f.isMeshToonMaterial)r(m,f),d(m,f);else if(f.isMeshPhongMaterial){if(r(m,f),h(m,f),f.envMap)m.envMapIntensity.value=f.envMapIntensity}else if(f.isMeshStandardMaterial){if(r(m,f),u(m,f),f.isMeshPhysicalMaterial)p(m,f,v)}else if(f.isMeshMatcapMaterial)r(m,f),x(m,f);else if(f.isMeshDepthMaterial)r(m,f);else if(f.isMeshDistanceMaterial)r(m,f),M(m,f);else if(f.isMeshNormalMaterial)r(m,f);else if(f.isLineBasicMaterial){if(a(m,f),f.isLineDashedMaterial)o(m,f)}else if(f.isPointsMaterial)l(m,f,E,R);else if(f.isSpriteMaterial)c(m,f);else if(f.isShadowMaterial)m.color.value.copy(f.color),m.opacity.value=f.opacity;else if(f.isShaderMaterial)f.uniformsNeedUpdate=!1}function r(m,f){if(m.opacity.value=f.opacity,f.color)m.diffuse.value.copy(f.color);if(f.emissive)m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity);if(f.map)m.map.value=f.map,n(f.map,m.mapTransform);if(f.alphaMap)m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform);if(f.bumpMap){if(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===nn)m.bumpScale.value*=-1}if(f.normalMap){if(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===nn)m.normalScale.value.negate()}if(f.displacementMap)m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias;if(f.emissiveMap)m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform);if(f.specularMap)m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform);if(f.alphaTest>0)m.alphaTest.value=f.alphaTest;let E=e.get(f),{envMap:R,envMapRotation:v}=E;if(R){if(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(tx.makeRotationFromEuler(v)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1)m.envMapRotation.value.premultiply(td);m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio}if(f.lightMap)m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform);if(f.aoMap)m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform)}function a(m,f){if(m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map)m.map.value=f.map,n(f.map,m.mapTransform)}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,R){if(m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=R*0.5,f.map)m.map.value=f.map,n(f.map,m.uvTransform);if(f.alphaMap)m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform);if(f.alphaTest>0)m.alphaTest.value=f.alphaTest}function c(m,f){if(m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map)m.map.value=f.map,n(f.map,m.mapTransform);if(f.alphaMap)m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform);if(f.alphaTest>0)m.alphaTest.value=f.alphaTest}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,0.0001)}function d(m,f){if(f.gradientMap)m.gradientMap.value=f.gradientMap}function u(m,f){if(m.metalness.value=f.metalness,f.metalnessMap)m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform);if(m.roughness.value=f.roughness,f.roughnessMap)m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform);if(f.envMap)m.envMapIntensity.value=f.envMapIntensity}function p(m,f,E){if(m.ior.value=f.ior,f.sheen>0){if(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap)m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform);if(f.sheenRoughnessMap)m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform)}if(f.clearcoat>0){if(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap)m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform);if(f.clearcoatRoughnessMap)m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform);if(f.clearcoatNormalMap){if(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===nn)m.clearcoatNormalScale.value.negate()}}if(f.dispersion>0)m.dispersion.value=f.dispersion;if(f.retroreflectivity>0)m.retroreflectivity.value=f.retroreflectivity;if(f.iridescence>0){if(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap)m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform);if(f.iridescenceThicknessMap)m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform)}if(f.transmission>0){if(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap)m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform);if(m.thickness.value=f.thickness,f.thicknessMap)m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform);m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)}if(f.anisotropy>0){if(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap)m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform)}if(m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap)m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform);if(f.specularIntensityMap)m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform)}function x(m,f){if(f.matcap)m.matcap.value=f.matcap}function M(m,f){let E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function nx(t,e,n,i){let s={},r={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){let A=T.program;i.uniformBlockBinding(v,A)}function c(v,T){let A=s[v.id];if(A===void 0)m(v),A=h(v),s[v.id]=A,v.addEventListener("dispose",E);let w=T.program;i.updateUBOMapping(v,w);let g=e.render.frame;if(r[v.id]!==g)u(v),r[v.id]=g}function h(v){let T=d();v.__bindingPointIndex=T;let A=t.createBuffer(),{__size:w,usage:g}=v;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,w,g),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,A),A}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let T=s[v.id],{uniforms:A,__cache:w}=v;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let g=0,S=A.length;g<S;g++){let G=A[g];if(Array.isArray(G))for(let I=0,B=G.length;I<B;I++)p(G[I],g,I,w);else p(G,g,0,w)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,T,A,w){if(M(v,T,A,w)===!0){let{__offset:g,value:S}=v;if(Array.isArray(S)){let G=0;for(let I=0;I<S.length;I++){let B=S[I],j=f(B);if(x(B,v.__data,G),typeof B!=="number"&&typeof B!=="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B))G+=j.storage/Float32Array.BYTES_PER_ELEMENT}}else x(S,v.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,g,v.__data)}}function x(v,T,A){if(typeof v==="number"||typeof v==="boolean")T[0]=v;else if(v.isMatrix3)T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0;else if(ArrayBuffer.isView(v))T.set(new v.constructor(v.buffer,v.byteOffset,T.length));else v.toArray(T,A)}function M(v,T,A,w){let g=v.value,S=T+"_"+A;if(w[S]===void 0){if(typeof g==="number"||typeof g==="boolean")w[S]=g;else if(ArrayBuffer.isView(g))w[S]=g.slice();else w[S]=g.clone();return!0}else{let G=w[S];if(typeof g==="number"||typeof g==="boolean"){if(G!==g)return w[S]=g,!0}else if(ArrayBuffer.isView(g))return!0;else if(G.equals(g)===!1)return G.copy(g),!0}return!1}function m(v){let T=v.uniforms,A=0,w=16;for(let S=0,G=T.length;S<G;S++){let I=Array.isArray(T[S])?T[S]:[T[S]];for(let B=0,j=I.length;B<j;B++){let L=I[B],q=Array.isArray(L.value)?L.value:[L.value];for(let et=0,V=q.length;et<V;et++){let st=q[et],C=f(st),N=A%w,Z=N%C.boundary,rt=N+Z;if(A+=Z,rt!==0&&w-rt<C.storage)A+=w-rt;L.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=A,A+=C.storage}}}let g=A%w;if(g>0)A+=w-g;return v.__size=A,v.__cache={},this}function f(v){let T={boundary:0,storage:0};if(typeof v==="number"||typeof v==="boolean")T.boundary=4,T.storage=4;else if(v.isVector2)T.boundary=8,T.storage=8;else if(v.isVector3||v.isColor)T.boundary=16,T.storage=12;else if(v.isVector4)T.boundary=16,T.storage=16;else if(v.isMatrix3)T.boundary=48,T.storage=48;else if(v.isMatrix4)T.boundary=64,T.storage=64;else if(v.isTexture)Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(v))T.boundary=16,T.storage=v.byteLength;else Dt("WebGLRenderer: Unsupported uniform value type.",v);return T}function E(v){let T=v.target;T.removeEventListener("dispose",E);let A=a.indexOf(T.__bindingPointIndex);a.splice(A,1),t.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function R(){for(let v in s)t.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}var ix=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),kn=null;function sx(){if(kn===null)kn=new aa(ix,16,16,Ui,Fn),kn.name="DFG_LUT",kn.minFilter=sn,kn.magFilter=sn,kn.wrapS=Wr,kn.wrapT=Wr,kn.generateMipmaps=!1,kn.needsUpdate=!0;return kn}class Zl{constructor(t={}){let{canvas:e=lu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:u=An}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;let x=u,M=new Set([Io,Po,Co]),m=new Set([An,yi,js,Ts,Ao,Ro]),f=new Uint32Array(4),E=new Int32Array(4),R=new P,v=null,T=null,A=[],w=[],g=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,G=!1,I=null,B=null,j=null,L=null;this._outputColorSpace=jr;let q=0,et=0,V=null,st=-1,C=null,N=new xe,Z=new xe,rt=null,lt=new Ot(0),Ct=0,{width:Et,height:z}=e,tt=1,K=null,ct=null,vt=new xe(0,0,Et,z),mt=new xe(0,0,Et,z),$t=!1,zt=new nr,Vt=!1,Zt=!1,Gt=new Kt,Me=new P,he=new xe,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ye=!1;function Qt(){return V===null?tt:1}let U=n;function tn(y,F){return e.getContext(y,F)}let te,ve,b,_,D,W,it,ot,dt,Y,Q,yt,Pt,ft,at,It,Lt,jt,O,ht,J,ut,St;try{let y={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e)e.setAttribute("data-engine",`three.js r${dh}`);if(e.addEventListener("webglcontextlost",Bt,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",ee,!1),U===null){if(U=tn("webgl2",y),U===null)if(tn("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(y){throw e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",ee,!1),Nt("WebGLRenderer: "+y.message),y}function nt(){if(te=new ug(U),te.init(),J=new $_(U,te),ve=new eg(U,te,t,J),b=new J_(U,te),ve.reversedDepthBuffer&&d)b.buffers.depth.setReversed(!0);B=U.createFramebuffer(),j=U.createFramebuffer(),L=U.createFramebuffer(),_=new pg(U),D=new U_,W=new K_(U,te,b,D,ve,J,_),it=new hg(S),ot=new gp(U),ut=new Q0(U,ot),dt=new dg(U,ot,_,ut),Y=new gg(U,dt,ot,ut,_),jt=new mg(U,ve,W),at=new ng(D),Q=new D_(S,it,te,ve,ut,at),yt=new ex(S,D),Pt=new O_,ft=new V_(te),Lt=new j0(S,it,b,Y,p,o),It=new Z_(S,Y,ve),St=new nx(U,_,ve,b),O=new tg(U,te,_),ht=new fg(U,te,_),_.programs=Q.programs,S.capabilities=ve,S.extensions=te,S.properties=D,S.renderLists=Pt,S.shadowMap=It,S.state=b,S.info=_}if(x!==An)g=new xg(x,e.width,e.height,a,i,s);let gt=new Qu(S,U);this.xr=gt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let y=te.get("WEBGL_lose_context");if(y)y.loseContext()},this.forceContextRestore=function(){let y=te.get("WEBGL_lose_context");if(y)y.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(y){if(y===void 0)return;tt=y,this.setSize(Et,z,!1)},this.getSize=function(y){return y.set(Et,z)},this.setSize=function(y,F,X=!0){if(gt.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Et=y,z=F,e.width=Math.floor(y*tt),e.height=Math.floor(F*tt),X===!0)e.style.width=y+"px",e.style.height=F+"px";if(g!==null)g.setSize(e.width,e.height);this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(Et*tt,z*tt).floor()},this.setDrawingBufferSize=function(y,F,X){Et=y,z=F,tt=X,e.width=Math.floor(y*X),e.height=Math.floor(F*X),this.setViewport(0,0,y,F)},this.setEffects=function(y){if(x===An){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let F=0;F<y.length;F++)if(y[F].isOutputPass===!0){Dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}g.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(N)},this.getViewport=function(y){return y.copy(vt)},this.setViewport=function(y,F,X,H){if(y.isVector4)vt.set(y.x,y.y,y.z,y.w);else vt.set(y,F,X,H);b.viewport(N.copy(vt).multiplyScalar(tt).round())},this.getScissor=function(y){return y.copy(mt)},this.setScissor=function(y,F,X,H){if(y.isVector4)mt.set(y.x,y.y,y.z,y.w);else mt.set(y,F,X,H);b.scissor(Z.copy(mt).multiplyScalar(tt).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(y){b.setScissorTest($t=y)},this.setOpaqueSort=function(y){K=y},this.setTransparentSort=function(y){ct=y},this.getClearColor=function(y){return y.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,X=!0){let H=0;if(y){let k=!1;if(V!==null){let xt=V.texture.format;k=M.has(xt)}if(k){let xt=V.texture.type,Mt=m.has(xt),_t=Lt.getClearColor(),Tt=Lt.getClearAlpha(),{r:Rt,g:Ht,b:Xt}=_t;if(Mt)f[0]=Rt,f[1]=Ht,f[2]=Xt,f[3]=Tt,U.clearBufferuiv(U.COLOR,0,f);else E[0]=Rt,E[1]=Ht,E[2]=Xt,E[3]=Tt,U.clearBufferiv(U.COLOR,0,E)}else H|=U.COLOR_BUFFER_BIT}if(F)H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(X)H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(H!==0)U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),I=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",ee,!1),Lt.dispose(),Pt.dispose(),ft.dispose(),D.dispose(),it.dispose(),Y.dispose(),ut.dispose(),St.dispose(),Q.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",Rc),gt.removeEventListener("sessionend",Cc),Ei.stop()};function Bt(y){y.preventDefault(),qs("WebGLRenderer: Context Lost."),G=!0}function me(){qs("WebGLRenderer: Context Restored."),G=!1;let y=_.autoReset,F=It.enabled,X=It.autoUpdate,H=It.needsUpdate,k=It.type;nt(),_.autoReset=y,It.enabled=F,It.autoUpdate=X,It.needsUpdate=H,It.type=k}function ee(y){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function In(y){let F=y.target;F.removeEventListener("dispose",In),qn(F)}function qn(y){tf(y),D.remove(y)}function tf(y){let F=D.get(y).programs;if(F!==void 0){if(F.forEach(function(X){Q.releaseProgram(X)}),y.isShaderMaterial)Q.releaseShaderCache(y)}}this.renderBufferDirect=function(y,F,X,H,k,xt){if(F===null)F=re;let Mt=k.isMesh&&k.matrixWorld.determinantAffine()<0,_t=sf(y,F,X,H,k);b.setMaterial(H,Mt);let Tt=X.index,Rt=1;if(H.wireframe===!0){if(Tt=dt.getWireframeAttribute(X),Tt===void 0)return;Rt=2}let Ht=X.drawRange,Xt=X.attributes.position,wt=Ht.start*Rt,ne=(Ht.start+Ht.count)*Rt;if(xt!==null)wt=Math.max(wt,xt.start*Rt),ne=Math.min(ne,(xt.start+xt.count)*Rt);if(Tt!==null)wt=Math.max(wt,0),ne=Math.min(ne,Tt.count);else if(Xt!==void 0&&Xt!==null)wt=Math.max(wt,0),ne=Math.min(ne,Xt.count);let Ae=ne-wt;if(Ae<0||Ae===1/0)return;ut.setup(k,H,_t,X,Tt);let _e,de=O;if(Tt!==null)_e=ot.get(Tt),de=ht,de.setIndex(_e);if(k.isMesh)if(H.wireframe===!0)b.setLineWidth(H.wireframeLinewidth*Qt()),de.setMode(U.LINES);else de.setMode(U.TRIANGLES);else if(k.isLine){let Ge=H.linewidth;if(Ge===void 0)Ge=1;if(b.setLineWidth(Ge*Qt()),k.isLineSegments)de.setMode(U.LINES);else if(k.isLineLoop)de.setMode(U.LINE_LOOP);else de.setMode(U.LINE_STRIP)}else if(k.isPoints)de.setMode(U.POINTS);else if(k.isSprite)de.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(!te.get("WEBGL_multi_draw")){let{_multiDrawStarts:Ge,_multiDrawCounts:bt,_multiDrawCount:Ze}=k,Jt=Tt?ot.get(Tt).bytesPerElement:1,dn=D.get(H).currentProgram.getUniforms();for(let Ln=0;Ln<Ze;Ln++)dn.setValue(U,"_gl_DrawID",Ln),de.render(Ge[Ln]/Jt,bt[Ln])}else de.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)de.renderInstances(wt,Ae,k.count);else if(X.isInstancedBufferGeometry){let Ge=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,bt=Math.min(X.instanceCount,Ge);de.renderInstances(wt,Ae,bt)}else de.render(wt,Ae)};function Ac(y,F,X,H){if(I!==null&&y.isNodeMaterial)I.setObject(H,y);if(Vt===!0)at.setState(y,X,!1);if(y.transparent===!0&&y.side===Dn&&y.forceSinglePass===!1)y.side=nn,y.needsUpdate=!0,xr(y,F,H),y.side=bs,y.needsUpdate=!0,xr(y,F,H),y.side=Dn;else xr(y,F,H)}this.compile=function(y,F,X=null){if(X===null)X=y;if(I!==null)I.renderStart(y,F,X);if(T=ft.get(X),T.init(F),w.push(T),X.traverseVisible(function(k){if(k.isLight&&k.layers.test(F.layers)){if(T.pushLight(k),k.castShadow)T.pushShadow(k)}}),y!==X)y.traverseVisible(function(k){if(k.isLight&&k.layers.test(F.layers)){if(T.pushLight(k),k.castShadow)T.pushShadow(k)}});if(T.setupLights(),I!==null)I.updateLights(T.state.lightsArray);if(Zt=this.localClippingEnabled,Vt=at.init(this.clippingPlanes,Zt),Vt===!0)at.setGlobalState(this.clippingPlanes,F);if(I!==null)It.render(T.state.shadowsArray,X,F);let H=new Set;if(y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let xt=k.material;if(xt)if(Array.isArray(xt))for(let Mt=0;Mt<xt.length;Mt++){let _t=xt[Mt];Ac(_t,X,F,k),H.add(_t)}else Ac(xt,X,F,k),H.add(xt)}),T=w.pop(),I!==null)I.renderEnd();return H},this.compileAsync=function(y,F,X=null){let H=this.compile(y,F,X);return new Promise((k)=>{function xt(){if(H.forEach(function(Mt){let Tt=D.get(Mt).currentProgram;if(Tt===void 0||Tt.isReady())H.delete(Mt)}),H.size===0){k(y);return}setTimeout(xt,10)}if(te.get("KHR_parallel_shader_compile")!==null)xt();else setTimeout(xt,10)})};let ka=null;function ef(y){if(ka)ka(y)}function Rc(){Ei.stop()}function Cc(){Ei.start()}let Ei=new ku;if(Ei.setAnimationLoop(ef),typeof self<"u")Ei.setContext(self);this.setAnimationLoop=function(y){ka=y,gt.setAnimationLoop(y),y===null?Ei.stop():Ei.start()},gt.addEventListener("sessionstart",Rc),gt.addEventListener("sessionend",Cc),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(I!==null)I.renderStart(y,F);let X=gt.enabled===!0&&gt.isPresenting===!0,H=g!==null&&(V===null||X)&&g.begin(S,V);if(y.matrixWorldAutoUpdate===!0)y.updateMatrixWorld();if(F.parent===null&&F.matrixWorldAutoUpdate===!0)F.updateMatrixWorld();if(gt.enabled===!0&&gt.isPresenting===!0&&(g===null||g.isCompositing()===!1)){if(gt.cameraAutoUpdate===!0)gt.updateCamera(F);F=gt.getCamera()}if(y.isScene===!0)y.onBeforeRender(S,y,F,V);if(T=ft.get(y,w.length),T.init(F),T.state.textureUnits=W.getTextureUnits(),w.push(T),Gt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),zt.setFromProjectionMatrix(Gt,dl,F.reversedDepth),Zt=this.localClippingEnabled,Vt=at.init(this.clippingPlanes,Zt),v=Pt.get(y,A.length),v.init(),A.push(v),gt.enabled===!0&&gt.isPresenting===!0){let Mt=S.xr.getDepthSensingMesh();if(Mt!==null)Ga(Mt,F,-1/0,S.sortObjects)}if(Ga(y,F,0,S.sortObjects),v.finish(),I!==null)I.updateLights(T.state.lightsArray);if(S.sortObjects===!0)v.sort(K,ct);if(ye=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,ye)Lt.addToRenderList(v,y);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(Vt===!0)at.beginShadows();let k=T.state.shadowsArray;if(It.render(k,y,F),Vt===!0)at.endShadows();if((H&&g.hasRenderPass())===!1){let Mt=v.opaque,_t=v.transmissive;if(T.setupLights(),F.isArrayCamera){let Tt=F.cameras;if(_t.length>0)for(let Rt=0,Ht=Tt.length;Rt<Ht;Rt++){let Xt=Tt[Rt];Ic(Mt,_t,y,Xt)}if(ye)Lt.render(y);for(let Rt=0,Ht=Tt.length;Rt<Ht;Rt++){let Xt=Tt[Rt];Pc(v,y,Xt,Xt.viewport)}}else{if(_t.length>0)Ic(Mt,_t,y,F);if(ye)Lt.render(y);Pc(v,y,F)}}if(V!==null&&et===0)W.updateMultisampleRenderTarget(V),W.updateRenderTargetMipmap(V);if(H)g.end(S);if(y.isScene===!0)y.onAfterRender(S,y,F);if(ut.resetDefaultState(),st=-1,C=null,w.pop(),w.length>0){if(T=w[w.length-1],W.setTextureUnits(T.state.textureUnits),Vt===!0)at.setGlobalState(S.clippingPlanes,T.state.camera)}else T=null;if(A.pop(),A.length>0)v=A[A.length-1];else v=null;if(I!==null)I.renderEnd()};function Ga(y,F,X,H){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD){if(y.autoUpdate===!0)y.update(F)}else if(y.isLightProbeGrid)T.pushLightProbeGrid(y);else if(y.isLight){if(T.pushLight(y),y.castShadow)T.pushShadow(y)}else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(zt)){if(H)he.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Gt);let Mt=Y.update(y),_t=y.material;if(_t.visible)v.push(y,Mt,_t,X,he.z,null,F)}}else if(y.isMesh||y.isLine||y.isPoints){if(!y.frustumCulled||y.intersectsFrustum(zt)){let Mt=Y.update(y),_t=y.material;if(H){if(y.boundingSphere!==void 0){if(y.boundingSphere===null)y.computeBoundingSphere();he.copy(y.boundingSphere.center)}else{if(Mt.boundingSphere===null)Mt.computeBoundingSphere();he.copy(Mt.boundingSphere.center)}he.applyMatrix4(y.matrixWorld).applyMatrix4(Gt)}if(Array.isArray(_t)){let Tt=Mt.groups;for(let Rt=0,Ht=Tt.length;Rt<Ht;Rt++){let Xt=Tt[Rt],wt=_t[Xt.materialIndex];if(wt&&wt.visible)v.push(y,Mt,wt,X,he.z,Xt,F)}}else if(_t.visible)v.push(y,Mt,_t,X,he.z,null,F)}}}let xt=y.children;for(let Mt=0,_t=xt.length;Mt<_t;Mt++)Ga(xt[Mt],F,X,H)}function Pc(y,F,X,H){let{opaque:k,transmissive:xt,transparent:Mt}=y;if(T.setupLightsView(X),Vt===!0)at.setGlobalState(S.clippingPlanes,X);if(H)b.viewport(N.copy(H));if(k.length>0)_r(k,F,X);if(xt.length>0)_r(xt,F,X);if(Mt.length>0)_r(Mt,F,X);b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Ic(y,F,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){let wt=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new un(1,1,{generateMipmaps:!0,type:wt?Fn:An,minFilter:Li,samples:Math.max(4,ve.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qt.workingColorSpace})}let xt=T.state.transmissionRenderTarget[H.id],Mt=H.viewport||N;xt.setSize(Mt.z*S.transmissionResolutionScale,Mt.w*S.transmissionResolutionScale);let _t=S.getRenderTarget(),Tt=S.getActiveCubeFace(),Rt=S.getActiveMipmapLevel();if(S.setRenderTarget(xt),S.getClearColor(lt),Ct=S.getClearAlpha(),Ct<1)S.setClearColor(16777215,0.5);if(S.clear(),ye)Lt.render(X);let Ht=S.toneMapping;S.toneMapping=Tn;let Xt=H.viewport;if(H.viewport!==void 0)H.viewport=void 0;if(T.setupLightsView(H),Vt===!0)at.setGlobalState(S.clippingPlanes,H);if(_r(y,X,H),W.updateMultisampleRenderTarget(xt),W.updateRenderTargetMipmap(xt),te.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let ne=0,Ae=F.length;ne<Ae;ne++){let _e=F[ne],{object:de,geometry:Ge,material:bt,group:Ze}=_e;if(bt.side===Dn&&de.layers.test(H.layers)){let Jt=bt.side;bt.side=nn,bt.needsUpdate=!0,Lc(de,X,H,Ge,bt,Ze),bt.side=Jt,bt.needsUpdate=!0,wt=!0}}if(wt===!0)W.updateMultisampleRenderTarget(xt),W.updateRenderTargetMipmap(xt)}if(S.setRenderTarget(_t,Tt,Rt),S.setClearColor(lt,Ct),Xt!==void 0)H.viewport=Xt;S.toneMapping=Ht}function _r(y,F,X){let H=F.isScene===!0?F.overrideMaterial:null;for(let k=0,xt=y.length;k<xt;k++){let Mt=y[k],{object:_t,geometry:Tt,group:Rt}=Mt,Ht=Mt.material;if(Ht.allowOverride===!0&&H!==null)Ht=H;if(_t.layers.test(X.layers))Lc(_t,F,X,Tt,Ht,Rt)}}function Lc(y,F,X,H,k,xt){if(I!==null&&k.isNodeMaterial)I.setObject(y,k);if(y.onBeforeRender(S,F,X,H,k,xt),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(S,F,X,H,y,xt),k.transparent===!0&&k.side===Dn&&k.forceSinglePass===!1)k.side=nn,k.needsUpdate=!0,S.renderBufferDirect(X,F,H,k,y,xt),k.side=bs,k.needsUpdate=!0,S.renderBufferDirect(X,F,H,k,y,xt),k.side=Dn;else S.renderBufferDirect(X,F,H,k,y,xt);y.onAfterRender(S,F,X,H,k,xt)}function xr(y,F,X){if(F.isScene!==!0)F=re;let H=D.get(y),k=T.state.lights,xt=T.state.shadowsArray,Mt=k.state.version,_t=Q.getParameters(y,k.state,xt,F,X,T.state.lightProbeGridArray),Tt=Q.getProgramCacheKey(_t),Rt=H.programs;H.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;let Ht=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;if(H.envMap=it.get(y.envMap||H.environment,Ht),H.envMapRotation=H.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Rt===void 0)y.addEventListener("dispose",In),Rt=new Map,H.programs=Rt;let Xt=Rt.get(Tt);if(Xt!==void 0){if(H.currentProgram===Xt&&H.lightsStateVersion===Mt)return Dc(y,_t),Xt}else{if(_t.uniforms=Q.getUniforms(y),I!==null&&y.isNodeMaterial)I.build(y,X,_t);y.onBeforeCompile(_t,S),Xt=Q.acquireProgram(_t,Tt),Rt.set(Tt,Xt),H.uniforms=_t.uniforms}let wt=H.uniforms;if(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)wt.clippingPlanes=at.uniform;if(Dc(y,_t),H.needsLights=af(y),H.lightsStateVersion=Mt,H.needsLights)wt.ambientLightColor.value=k.state.ambient,wt.lightProbe.value=k.state.probe,wt.sunLights.value=k.state.sun,wt.sunLightShadows.value=k.state.sunShadow,wt.directionalLights.value=k.state.directional,wt.directionalLightShadows.value=k.state.directionalShadow,wt.spotLights.value=k.state.spot,wt.spotLightShadows.value=k.state.spotShadow,wt.rectAreaLights.value=k.state.rectArea,wt.ltc_1.value=k.state.rectAreaLTC1,wt.ltc_2.value=k.state.rectAreaLTC2,wt.pointLights.value=k.state.point,wt.pointLightShadows.value=k.state.pointShadow,wt.hemisphereLights.value=k.state.hemi,wt.sunShadowMatrix.value=k.state.sunShadowMatrix,wt.sunShadowCascade.value=k.state.sunShadowCascade,wt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,wt.spotLightMatrix.value=k.state.spotLightMatrix,wt.spotLightMap.value=k.state.spotLightMap,wt.pointShadowMatrix.value=k.state.pointShadowMatrix;return H.lightProbeGrid=T.state.lightProbeGridArray.length>0,H.currentProgram=Xt,H.uniformsList=null,Xt}function Nc(y){if(y.uniformsList===null){let F=y.currentProgram.getUniforms();y.uniformsList=cr.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function Dc(y,F){let X=D.get(y);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function nf(y,F){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;R.setFromMatrixPosition(F.matrixWorld);for(let X=0,H=y.length;X<H;X++){let k=y[X];if(k.texture!==null&&k.boundingBox.containsPoint(R))return k}return null}function sf(y,F,X,H,k){if(F.isScene!==!0)F=re;W.resetTextureUnits();let xt=F.fog,Mt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,_t=V===null?S.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:qt.workingColorSpace,Tt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Rt=it.get(H.envMap||Mt,Tt),Ht=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Xt=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),wt=!!X.morphAttributes.position,ne=!!X.morphAttributes.normal,Ae=!!X.morphAttributes.color,_e=Tn;if(H.toneMapped){if(V===null||V.isXRRenderTarget===!0)_e=S.toneMapping}let de=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ge=de!==void 0?de.length:0,bt=D.get(H),Ze=T.state.lights;if(Vt===!0){if(Zt===!0||y!==C){let ge=y===C&&H.id===st;at.setState(H,y,ge)}}let Jt=!1;if(H.version===bt.__version){if(bt.needsLights&&bt.lightsStateVersion!==Ze.state.version)Jt=!0;else if(bt.outputColorSpace!==_t)Jt=!0;else if(k.isBatchedMesh&&bt.batching===!1)Jt=!0;else if(!k.isBatchedMesh&&bt.batching===!0)Jt=!0;else if(k.isBatchedMesh&&bt.batchingColor===!0&&k._colorsTexture===null)Jt=!0;else if(k.isBatchedMesh&&bt.batchingColor===!1&&k._colorsTexture!==null)Jt=!0;else if(k.isInstancedMesh&&bt.instancing===!1)Jt=!0;else if(!k.isInstancedMesh&&bt.instancing===!0)Jt=!0;else if(k.isSkinnedMesh&&bt.skinning===!1)Jt=!0;else if(!k.isSkinnedMesh&&bt.skinning===!0)Jt=!0;else if(k.isInstancedMesh&&bt.instancingColor===!0&&k.instanceColor===null)Jt=!0;else if(k.isInstancedMesh&&bt.instancingColor===!1&&k.instanceColor!==null)Jt=!0;else if(k.isInstancedMesh&&bt.instancingMorph===!0&&k.morphTexture===null)Jt=!0;else if(k.isInstancedMesh&&bt.instancingMorph===!1&&k.morphTexture!==null)Jt=!0;else if(bt.envMap!==Rt)Jt=!0;else if(H.fog===!0&&bt.fog!==xt)Jt=!0;else if(bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==at.numPlanes||bt.numIntersection!==at.numIntersection))Jt=!0;else if(bt.vertexAlphas!==Ht)Jt=!0;else if(bt.vertexTangents!==Xt)Jt=!0;else if(bt.morphTargets!==wt)Jt=!0;else if(bt.morphNormals!==ne)Jt=!0;else if(bt.morphColors!==Ae)Jt=!0;else if(bt.toneMapping!==_e)Jt=!0;else if(bt.morphTargetsCount!==Ge)Jt=!0;else if(!!bt.lightProbeGrid!==T.state.lightProbeGridArray.length>0)Jt=!0}else Jt=!0,bt.__version=H.version;let dn=bt.currentProgram;if(Jt===!0){if(dn=xr(H,F,k),I&&H.isNodeMaterial)I.onUpdateProgram(H,dn,bt)}let Ln=!1,ci=!1,$i=!1,ue=dn.getUniforms(),Ee=bt.uniforms;if(b.useProgram(dn.program))Ln=!0,ci=!0,$i=!0;if(H.id!==st)st=H.id,ci=!0;if(bt.needsLights){let ge=nf(T.state.lightProbeGridArray,k);if(bt.lightProbeGrid!==ge)bt.lightProbeGrid=ge,ci=!0}if(Ln||C!==y){if(b.buffers.depth.getReversed()&&y.reversedDepth!==!0)y._reversedDepth=!0,y.updateProjectionMatrix();ue.setValue(U,"projectionMatrix",y.projectionMatrix),ue.setValue(U,"viewMatrix",y.matrixWorldInverse);let ui=ue.map.cameraPosition;if(ui!==void 0)ui.setValue(U,Me.setFromMatrixPosition(y.matrixWorld));if(ve.logarithmicDepthBuffer)ue.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2));if(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)ue.setValue(U,"isOrthographic",y.isOrthographicCamera===!0);if(C!==y)C=y,ci=!0,$i=!0}if(bt.needsLights){if(Ze.state.sunShadowMap.length>0)ue.setValue(U,"sunShadowMap",Ze.state.sunShadowMap,W);if(Ze.state.directionalShadowMap.length>0)ue.setValue(U,"directionalShadowMap",Ze.state.directionalShadowMap,W);if(Ze.state.spotShadowMap.length>0)ue.setValue(U,"spotShadowMap",Ze.state.spotShadowMap,W);if(Ze.state.pointShadowMap.length>0)ue.setValue(U,"pointShadowMap",Ze.state.pointShadowMap,W)}if(k.isSkinnedMesh){ue.setOptional(U,k,"bindMatrix"),ue.setOptional(U,k,"bindMatrixInverse");let ge=k.skeleton;if(ge){if(ge.boneTexture===null)ge.computeBoneTexture();ue.setValue(U,"boneTexture",ge.boneTexture,W)}}if(k.isBatchedMesh){if(ue.setOptional(U,k,"batchingTexture"),ue.setValue(U,"batchingTexture",k._matricesTexture,W),ue.setOptional(U,k,"batchingIdTexture"),ue.setValue(U,"batchingIdTexture",k._indirectTexture,W),ue.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null)ue.setValue(U,"batchingColorTexture",k._colorsTexture,W)}let hi=X.morphAttributes;if(hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)jt.update(k,X,dn);if(ci||bt.receiveShadow!==k.receiveShadow)bt.receiveShadow=k.receiveShadow,ue.setValue(U,"receiveShadow",k.receiveShadow);if((H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null)Ee.envMapIntensity.value=F.environmentIntensity;if(Ee.dfgLUT!==void 0)Ee.dfgLUT.value=sx();if(ci){if(ue.setValue(U,"toneMappingExposure",S.toneMappingExposure),bt.needsLights)rf(Ee,$i);if(xt&&H.fog===!0)yt.refreshFogUniforms(Ee,xt);if(yt.refreshMaterialUniforms(Ee,H,tt,z,T.state.transmissionRenderTarget[y.id]),bt.needsLights&&bt.lightProbeGrid){let ge=bt.lightProbeGrid;Ee.probesSH.value=ge.texture,Ee.probesMin.value.copy(ge.boundingBox.min),Ee.probesMax.value.copy(ge.boundingBox.max),Ee.probesResolution.value.copy(ge.resolution)}cr.upload(U,Nc(bt),Ee,W)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0)cr.upload(U,Nc(bt),Ee,W),H.uniformsNeedUpdate=!1;if(H.isSpriteMaterial)ue.setValue(U,"center",k.center);if(ue.setValue(U,"modelViewMatrix",k.modelViewMatrix),ue.setValue(U,"normalMatrix",k.normalMatrix),ue.setValue(U,"modelMatrix",k.matrixWorld),H.uniformsGroups!==void 0){let ge=H.uniformsGroups;for(let ui=0,ji=ge.length;ui<ji;ui++){let Fc=ge[ui];St.update(Fc,dn),St.bind(Fc,dn)}}return dn}function rf(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.sunLights.needsUpdate=F,y.sunLightShadows.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function af(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return et},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(y,F,X){let H=D.get(y);if(H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1)H.__useRenderToTexture=!1;D.get(y.texture).__webglTexture=F,D.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){let X=D.get(y);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,X=0){V=y,q=F,et=X;let H=null,k=!1,xt=!1;if(y){let _t=D.get(y);if(_t.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(U.FRAMEBUFFER,_t.__webglFramebuffer),N.copy(y.viewport),Z.copy(y.scissor),rt=y.scissorTest,b.viewport(N),b.scissor(Z),b.setScissorTest(rt),st=-1;return}else if(_t.__webglFramebuffer===void 0)W.setupRenderTarget(y);else if(_t.__hasExternalTextures)W.rebindTextures(y,D.get(y.texture).__webglTexture,D.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ht=y.depthTexture;if(_t.__boundDepthTexture!==Ht){if(Ht!==null&&D.has(Ht)&&(y.width!==Ht.image.width||y.height!==Ht.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(y)}}let Tt=y.texture;if(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)xt=!0;let Rt=D.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget){if(Array.isArray(Rt[F]))H=Rt[F][X];else H=Rt[F];k=!0}else if(y.samples>0&&W.useMultisampledRTT(y)===!1)H=D.get(y).__webglMultisampledFramebuffer;else if(Array.isArray(Rt))H=Rt[X];else H=Rt;N.copy(y.viewport),Z.copy(y.scissor),rt=y.scissorTest}else N.copy(vt).multiplyScalar(tt).floor(),Z.copy(mt).multiplyScalar(tt).floor(),rt=$t;if(X!==0)H=B;if(b.bindFramebuffer(U.FRAMEBUFFER,H))b.drawBuffers(y,H);if(b.viewport(N),b.scissor(Z),b.setScissorTest(rt),k){let _t=D.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,_t.__webglTexture,X)}else if(xt){let _t=F;for(let Tt=0;Tt<y.textures.length;Tt++){let Rt=D.get(y.textures[Tt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Tt,Rt.__webglTexture,X,_t)}}else if(y!==null&&X!==0){let _t=D.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_t.__webglTexture,X)}st=-1};function Uc(y){let F=D.get(y);if(F.__readFormat!==y.format||F.__readType!==y.type)F.__readFormat=y.format,F.__readType=y.type,F.__formatReadable=ve.textureFormatReadable(y.format),F.__typeReadable=ve.textureTypeReadable(y.type);return F}if(this.readRenderTargetPixels=function(y,F,X,H,k,xt,Mt,_t=0){if(!(y&&y.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=D.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0)Tt=Tt[Mt];if(Tt){b.bindFramebuffer(U.FRAMEBUFFER,Tt);try{let Rt=y.textures[_t],{format:Ht,type:Xt}=Rt;if(y.textures.length>1)U.readBuffer(U.COLOR_ATTACHMENT0+_t);let wt=Uc(Rt);if(wt.__formatReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(F>=0&&F<=y.width-H&&(X>=0&&X<=y.height-k))U.readPixels(F,X,H,k,J.convert(Ht),J.convert(Xt),xt)}finally{let Rt=V!==null?D.get(V).__webglFramebuffer:null;b.bindFramebuffer(U.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(y,F,X,H,k,xt,Mt,_t=0){if(!(y&&y.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=D.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0)Tt=Tt[Mt];if(Tt)if(F>=0&&F<=y.width-H&&(X>=0&&X<=y.height-k)){b.bindFramebuffer(U.FRAMEBUFFER,Tt);let Rt=y.textures[_t],{format:Ht,type:Xt}=Rt;if(y.textures.length>1)U.readBuffer(U.COLOR_ATTACHMENT0+_t);let wt=Uc(Rt);if(wt.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ne=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ne),U.bufferData(U.PIXEL_PACK_BUFFER,xt.byteLength,U.STREAM_READ),U.readPixels(F,X,H,k,J.convert(Ht),J.convert(Xt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Ae=V!==null?D.get(V).__webglFramebuffer:null;b.bindFramebuffer(U.FRAMEBUFFER,Ae);let _e=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await hu(U,_e,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ne),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,xt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ne),U.deleteSync(_e),xt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,X=0){let H=Math.pow(2,-X),k=Math.floor(y.image.width*H),xt=Math.floor(y.image.height*H),Mt=F!==null?F.x:0,_t=F!==null?F.y:0;W.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,Mt,_t,k,xt),b.unbindTexture()},this.copyTextureToTexture=function(y,F,X=null,H=null,k=0,xt=0){let Mt,_t,Tt,Rt,Ht,Xt,wt,ne,Ae,_e=y.isCompressedTexture?y.mipmaps[xt]:y.image;if(X!==null)Mt=X.max.x-X.min.x,_t=X.max.y-X.min.y,Tt=X.isBox3?X.max.z-X.min.z:1,Rt=X.min.x,Ht=X.min.y,Xt=X.isBox3?X.min.z:0;else{let Ee=Math.pow(2,-k);if(Mt=Math.floor(_e.width*Ee),_t=Math.floor(_e.height*Ee),y.isDataArrayTexture)Tt=_e.depth;else if(y.isData3DTexture)Tt=Math.floor(_e.depth*Ee);else Tt=1;Rt=0,Ht=0,Xt=0}if(H!==null)wt=H.x,ne=H.y,Ae=H.z;else wt=0,ne=0,Ae=0;let de=J.convert(F.format),Ge=J.convert(F.type),bt;if(F.isData3DTexture)W.setTexture3D(F,0),bt=U.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)W.setTexture2DArray(F,0),bt=U.TEXTURE_2D_ARRAY;else W.setTexture2D(F,0),bt=U.TEXTURE_2D;b.activeTexture(U.TEXTURE0),b.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),b.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),b.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let Ze=b.getParameter(U.UNPACK_ROW_LENGTH),Jt=b.getParameter(U.UNPACK_IMAGE_HEIGHT),dn=b.getParameter(U.UNPACK_SKIP_PIXELS),Ln=b.getParameter(U.UNPACK_SKIP_ROWS),ci=b.getParameter(U.UNPACK_SKIP_IMAGES);b.pixelStorei(U.UNPACK_ROW_LENGTH,_e.width),b.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e.height),b.pixelStorei(U.UNPACK_SKIP_PIXELS,Rt),b.pixelStorei(U.UNPACK_SKIP_ROWS,Ht),b.pixelStorei(U.UNPACK_SKIP_IMAGES,Xt);let $i=y.isDataArrayTexture||y.isData3DTexture,ue=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){let Ee=D.get(y),hi=D.get(F),ge=D.get(Ee.__renderTarget),ui=D.get(hi.__renderTarget);b.bindFramebuffer(U.READ_FRAMEBUFFER,ge.__webglFramebuffer),b.bindFramebuffer(U.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let ji=0;ji<Tt;ji++){if($i)U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,D.get(y).__webglTexture,k,Xt+ji),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,D.get(F).__webglTexture,xt,Ae+ji);U.blitFramebuffer(Rt,Ht,Mt,_t,wt,ne,Mt,_t,U.DEPTH_BUFFER_BIT,U.NEAREST)}b.bindFramebuffer(U.READ_FRAMEBUFFER,null),b.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||D.has(y)){let Ee=D.get(y),hi=D.get(F);b.bindFramebuffer(U.READ_FRAMEBUFFER,j),b.bindFramebuffer(U.DRAW_FRAMEBUFFER,L);for(let ge=0;ge<Tt;ge++){if($i)U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ee.__webglTexture,k,Xt+ge);else U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ee.__webglTexture,k);if(ue)U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,hi.__webglTexture,xt,Ae+ge);else U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,hi.__webglTexture,xt);if(k!==0)U.blitFramebuffer(Rt,Ht,Mt,_t,wt,ne,Mt,_t,U.COLOR_BUFFER_BIT,U.NEAREST);else if(ue)U.copyTexSubImage3D(bt,xt,wt,ne,Ae+ge,Rt,Ht,Mt,_t);else U.copyTexSubImage2D(bt,xt,wt,ne,Rt,Ht,Mt,_t)}b.bindFramebuffer(U.READ_FRAMEBUFFER,null),b.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(ue)if(y.isDataTexture||y.isData3DTexture)U.texSubImage3D(bt,xt,wt,ne,Ae,Mt,_t,Tt,de,Ge,_e.data);else if(F.isCompressedArrayTexture)U.compressedTexSubImage3D(bt,xt,wt,ne,Ae,Mt,_t,Tt,de,_e.data);else U.texSubImage3D(bt,xt,wt,ne,Ae,Mt,_t,Tt,de,Ge,_e);else if(y.isDataTexture)U.texSubImage2D(U.TEXTURE_2D,xt,wt,ne,Mt,_t,de,Ge,_e.data);else if(y.isCompressedTexture)U.compressedTexSubImage2D(U.TEXTURE_2D,xt,wt,ne,_e.width,_e.height,de,_e.data);else U.texSubImage2D(U.TEXTURE_2D,xt,wt,ne,Mt,_t,de,Ge,_e);if(b.pixelStorei(U.UNPACK_ROW_LENGTH,Ze),b.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Jt),b.pixelStorei(U.UNPACK_SKIP_PIXELS,dn),b.pixelStorei(U.UNPACK_SKIP_ROWS,Ln),b.pixelStorei(U.UNPACK_SKIP_IMAGES,ci),xt===0&&F.generateMipmaps)U.generateMipmap(bt);b.unbindTexture()},this.initRenderTarget=function(y){if(D.get(y).__webglFramebuffer===void 0)W.setupRenderTarget(y)},this.initTexture=function(y){if(y.isCubeTexture)W.setTextureCube(y,0);else if(y.isData3DTexture)W.setTexture3D(y,0);else if(y.isDataArrayTexture||y.isCompressedArrayTexture)W.setTexture2DArray(y,0);else W.setTexture2D(y,0);b.unbindTexture()},this.resetState=function(){q=0,et=0,V=null,b.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dl}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}var ed={type:"change"},Kl={type:"start"},id={type:"end"},Ta=new ws,nd=new en,rx=Math.cos(70*zn.DEG2RAD),Ue=new P,rn=2*Math.PI,le={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jl=0.000001;class $l extends va{constructor(t,e=null){super(t,e);if(this.state=le.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_i.ROTATE,MIDDLE:_i.DOLLY,RIGHT:_i.PAN},this.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new qe,this._lastTargetPosition=new P,this._quat=new qe().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rr,this._sphericalDelta=new rr,this._scale=1,this._panOffset=new P,this._rotateStart=new At,this._rotateEnd=new At,this._rotateDelta=new At,this._panStart=new At,this._panEnd=new At,this._panDelta=new At,this._dollyStart=new At,this._dollyEnd=new At,this._dollyDelta=new At,this._dollyDirection=new P,this._mouse=new At,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ox.bind(this),this._onPointerDown=ax.bind(this),this._onPointerUp=lx.bind(this),this._onContextMenu=mx.bind(this),this._onMouseWheel=ux.bind(this),this._onKeyDown=dx.bind(this),this._onTouchStart=fx.bind(this),this._onTouchMove=px.bind(this),this._onMouseDown=cx.bind(this),this._onMouseMove=hx.bind(this),this._interceptControlDown=gx.bind(this),this._interceptControlUp=_x.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(t){if(this._cursorStyle=t,t==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=le.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ed),this.update(),this.state=le.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;if(Ue.copy(e).sub(this.target),Ue.applyQuaternion(this._quat),this._spherical.setFromVector3(Ue),this.autoRotate&&this.state===le.NONE)this._rotateLeft(this._getAutoRotationAngle(t));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;if(isFinite(n)&&isFinite(i)){if(n<-Math.PI)n+=rn;else if(n>Math.PI)n-=rn;if(i<-Math.PI)i+=rn;else if(i>Math.PI)i-=rn;if(n<=i)this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=r!=this._spherical.radius}if(Ue.setFromSpherical(this._spherical),Ue.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ue),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){let a=Ue.length();r=this._clampDistance(a*this._scale);let o=a-r;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),s=!!o}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=o!==this.object.zoom;let l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=Ue.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(r!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position);else if(Ta.origin.copy(this.object.position),Ta.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ta.direction))<rx)this.object.lookAt(this.target);else nd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ta.intersectPlane(nd,this.target)}else if(this.object.isOrthographicCamera){let r=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom)this.object.updateProjectionMatrix(),s=!0}if(this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Jl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jl||this._lastTargetPosition.distanceToSquared(this.target)>Jl)return this.dispatchEvent(ed),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(t){if(t!==null)return rn/60*this.autoRotateSpeed*t;else return rn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*0.01);return Math.pow(0.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ue.setFromMatrixColumn(e,0),Ue.multiplyScalar(-t),this._panOffset.add(Ue)}_panUp(t,e){if(this.screenSpacePanning===!0)Ue.setFromMatrixColumn(e,1);else Ue.setFromMatrixColumn(e,0),Ue.crossVectors(this.object.up,Ue);Ue.multiplyScalar(t),this._panOffset.add(Ue)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Ue.copy(i).sub(this.target);let s=Ue.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(t){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=t;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(t){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=t;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,{width:r,height:a}=n;this._mouse.x=i/r*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){if(this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){if(this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0)this._dollyIn(this._getZoomScale(t.deltaY));else if(t.deltaY>0)this._dollyOut(this._getZoomScale(t.deltaY));this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate)this._rotateUp(rn*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);e=!0;break;case this.keys.BOTTOM:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate)this._rotateUp(-rn*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);e=!0;break;case this.keys.LEFT:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate)this._rotateLeft(rn*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);e=!0;break;case this.keys.RIGHT:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate)this._rotateLeft(-rn*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);e=!0;break}if(e)t.preventDefault(),this.update()}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=0.5*(t.pageX+e.x),i=0.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=0.5*(t.pageX+e.x),i=0.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){if(this.enableZoom)this._handleTouchStartDolly(t);if(this.enablePan)this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){if(this.enableZoom)this._handleTouchStartDolly(t);if(this.enableRotate)this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=0.5*(t.pageX+n.x),s=0.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=0.5*(t.pageX+e.x),i=0.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let r=(t.pageX+e.x)*0.5,a=(t.pageY+e.y)*0.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){if(this.enableZoom)this._handleTouchMoveDolly(t);if(this.enablePan)this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){if(this.enableZoom)this._handleTouchMoveDolly(t);if(this.enableRotate)this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];if(e===void 0)e=new At,this._pointerPositions[t.pointerId]=e;e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}if(t.ctrlKey&&!this._controlActive)n.deltaY*=10;return n}}function ax(t){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(t))return;if(this._addPointer(t),t.pointerType==="touch")this._onTouchStart(t);else this._onMouseDown(t);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function ox(t){if(this.enabled===!1)return;if(t.pointerType==="touch")this._onTouchMove(t);else this._onMouseMove(t)}function lx(t){switch(this._removePointer(t),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(id),this.state=le.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function cx(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _i.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=le.DOLLY;break;case _i.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=le.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=le.ROTATE}break;case _i.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=le.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=le.PAN}break;default:this.state=le.NONE}if(this.state!==le.NONE)this.dispatchEvent(Kl)}function hx(t){switch(this.state){case le.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case le.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case le.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function ux(t){if(this.enabled===!1||this.enableZoom===!1||this.state!==le.NONE)return;t.preventDefault(),this.dispatchEvent(Kl),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(id)}function dx(t){if(this.enabled===!1)return;this._handleKeyDown(t)}function fx(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=le.TOUCH_ROTATE;break;case xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=le.TOUCH_PAN;break;default:this.state=le.NONE}break;case 2:switch(this.touches.TWO){case xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=le.TOUCH_DOLLY_PAN;break;case xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=le.TOUCH_DOLLY_ROTATE;break;default:this.state=le.NONE}break;default:this.state=le.NONE}if(this.state!==le.NONE)this.dispatchEvent(Kl)}function px(t){switch(this._trackPointer(t),this.state){case le.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case le.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case le.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case le.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=le.NONE}}function mx(t){if(this.enabled===!1)return;t.preventDefault()}function gx(t){if(t.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function _x(t){if(t.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var Fe="#2b2320";var xx=["................","................","....oooooooo....","...oHHHHHHHHo...","..oHHHHHHHHHHo..",".oHHHHHHHHHHHHo.",".oHHSSSSSSSSHHo.",".oHSSSSSSSSSSHo.",".oHSSESSSSESSHo.",".oHSSESSSSESSHo.",".oSBSSSSSSSSBSo.","..oSSSSMMSSSSo..","...oSSSSSSSSo..."],yx=["................","................","....oooooooo....","...oHHHHHHHHo...","..oHHHHHHHHHHo..",".oHHHHHHHHHHHHo.",".oHHHHHHHSSHHHo.",".oHHHHSSSSSSHHo.",".oHSSESSSSESSHo.",".oHSSESSSSESSHo.",".oSBSSSSSSSSBSo.","..oSSSSMMSSSSo..","...oSSSSSSSSo..."],vx=["................","................","....oooooooo....","...oHHHHHHHHo...","..oHHHHHHHHHHo..",".oHHHHHHHHHHHHo.",".oHHSSSSSSSSHHo.",".oHSSSSSSSSSSHo.",".oHSSESSSSESSHo.",".oHSSESSSSESSHo.",".oHBSSSSSSSSBHo.",".oHSSSSMMSSSSHo.",".oHHSSSSSSSSHHo."],Sx=["......oooo......",".....oHHHHo.....","....ooHHHHoo....","...oHHHHHHHHo...","..oHHHHHHHHHHo..",".oHHHHHHHHHHHHo.",".oHHSSSSSSSSHHo.",".oHSSSSSSSSSSHo.",".oHSSESSSSESSHo.",".oHSSESSSSESSHo.",".oSBSSSSSSSSBSo.","..oSSSSMMSSSSo..","...oSSSSSSSSo..."],bx=["................","................","....oooooooo....","...oCCCCCCCCo...","..oCCCCCCCCCCo..",".oCCCCCCCCCCCCoo",".oooooooooooooKo",".oHSSSSSSSSSSHoo",".oHSSESSSSESSHo.",".oHSSESSSSESSHo.",".oSBSSSSSSSSBSo.","..oSSSSMMSSSSo..","...oSSSSSSSSo..."],Mx=[xx,yx,vx,Sx,bx];var Ex=["#f6d3b3","#eebd94","#c98f65","#8f5d3f"],Tx=["#2b2320","#4a2f1d","#7a4a26","#b5651d","#d9b45b","#8f8f9a","#6b4fa3"],wx=["#4f86c6","#58a55c","#c9534a","#8e6bbf","#3aa7a3","#d27aa8","#6b7c93","#e0a03a"],Ax=["#c9534a","#3f6fb0","#3d8f5a","#e0a03a"],sd={head:1,skin:"#f6d3b3",hair:"#4a2f1d",top:"#d97757",collar:"#f0a58c",cap:"#d97757"};function qi(t){let e=2166136261;for(let n=0;n<t.length;n+=1)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}function wa(t,e,n){return t[e%t.length]??n}function rd(t){let e=qi(t),n=wa(wx,e>>>3,"#4f86c6");return{head:(e>>>1)%Mx.length,skin:wa(Ex,e>>>7,"#f6d3b3"),hair:wa(Tx,e>>>11,"#2b2320"),top:n,collar:Rx(n),cap:wa(Ax,e>>>17,"#c9534a")}}function Rx(t){let e=Number.parseInt(t.slice(1),16),n=(a)=>Math.round(a+(255-a)/3),i=n(e>>16&255),s=n(e>>8&255),r=n(e&255);return"#"+(i<<16|s<<8|r).toString(16).padStart(6,"0")}function jl(t){let e=Number.parseInt(t.slice(1),16),n=(a)=>Math.round(a*0.75),i=n(e>>16&255),s=n(e>>8&255),r=n(e&255);return"#"+(i<<16|s<<8|r).toString(16).padStart(6,"0")}function ad(t){return{o:"#2b2320",H:t.hair,C:t.cap,K:jl(t.cap),S:t.skin,B:Cx(t.skin),E:"#2b2320",M:"#b5574f",T:t.top,c:t.collar}}function Cx(t){let e=Number.parseInt(t.slice(1),16),n=Math.min(255,(e>>16&255)+6),i=Math.round((e>>8&255)*0.82),s=Math.round((e&255)*0.82);return"#"+(n<<16|i<<8|s).toString(16).padStart(6,"0")}var an={pencil:[".....aa","....a#a","...###.","..###..",".###...","###....","##....."],shell:[".......","#......",".#.....","..#....",".#.....","#..aaa.","......."],globe:["..###..",".#a#a#.","#aa#aa#","#######","#aa#aa#",".#a#a#.","..###.."],gear:[".#.#.#.","#######",".##a##.","##aaa##",".##a##.","#######",".#.#.#."],people:[".##....",".##..aa","####.aa","####aaa","####aaa","....aaa","......."],book:[".......","###.###","#aa#aa#","#aa#aa#","#aa#aa#","###.###","......."],lens:[".###...","#aaa#..","#aaa#..","#aaa#..",".###...","....##.",".....##"],list:["a.####.",".......","a.####.",".......","a.###..",".......","a.####."],bang:["..###..","..###..","..###..","..###..",".......","..###..","..###.."],query:[".####..","##..##.","....##.","...##..","..##...",".......","..##..."],check:[".......","......#",".....##","#...##.","##.##..",".###...","..#...."],cross:["#.....#","##...##",".##.##.","..###..",".##.##.","##...##","#.....#"]};var ni=22.4,Aa=13.6,be=11.2,Se=6.8,gn=3,tc=3;var ii=9,si=11;var $e=0.5,Yi=0.27;var od=Math.PI;var ur=Math.PI/2,Ql=-Math.PI/2,Px=[4,1,7,3,5,0,2,6,8];function Ra(t){let e=t%3,n=Math.floor(t/3),i=-8.799999999999999+e*5.8,s=-4.199999999999999+n*3.4;return{x0:i,z0:s,x1:i+5.8,z1:s+3.4}}function dr(t){let e=Ra(t);return{x:(e.x0+e.x1)/2,z:(e.z0+e.z1)/2}}function ld(t){let e,n=-1;for(let i of Px){if(t.includes(i))continue;let s=dr(i),r=1/0;for(let a of t){let o=dr(a);r=Math.min(r,Math.hypot(s.x-o.x,s.z-o.z))}if(r>n+0.000001)e=i,n=r}return e}function cd(t){let e=Math.floor(t/5),n=t%5;return{column:n,isFar:(n+e)%2===0}}function ec(t){return t<=0?-1:cd(t-1).column}function hd(t){let e=1;for(let n of t)e=Math.max(e,ec(n)+1);return Math.min(5,e)}function fr(t,e){let{x0:n}=Ra(t),{z:i}=dr(t);return{x0:n+0.85,z0:i-0.45,x1:n+0.85+e*0.9+0.3,z1:i+0.45}}function Ca(t,e){let{x0:n}=Ra(t),{z:i}=dr(t);if(e<=0)return{x:n+0.5,z:i,yaw:ur};let{column:s,isFar:r}=cd(e-1);return{x:n+0.85+0.15+0.45+s*0.9,z:i+(r?-0.8:0.8),yaw:r?0:od}}function Pa(t){return{x:t.x-Math.sin(t.yaw)*0.42,z:t.z-Math.cos(t.yaw)*0.42}}function Ia(t,e){let n=fr(t,e),{x0:i}=Ra(t);return{x0:i+0.12,z0:n.z0-0.8,x1:n.x1+0.12,z1:n.z1+0.8}}var on={x0:-4.6,z0:-6.8,x1:6.4,z1:-6},pr=1,je={x0:-11.2,z0:-6.4,x1:-10.75,z1:-3.8},Zi=2.3,ud=[-3.1,-1.7],ri={x0:-11.2,z0:-0.85,x1:-10.399999999999999,z1:-0.05},Vn={x0:-11.2,z0:0.1,x1:-10.7,z1:0.6},we={x0:-11.2,z0:1.5,x1:-10.35,z1:3.9},ze={x0:-9.45,z0:2.25,x1:-8.899999999999999,z1:3.15},Wn={x0:10.75,z0:-5.8,x1:11.2,z1:0.6},nc=0.95,dd=[[-5.6,-3.3],[-2.1,0.3]],ic=[{x:-10.799999999999999,z:6.3999999999999995},{x:10.799999999999999,z:-6.3999999999999995},{x:10.799999999999999,z:2.4},{x:-10.799999999999999,z:-3.35}],Ut={z:4.4,width:1.1,inside:{x:10.649999999999999,z:4.4},outside:{x:12.7,z:4.4}},fd=[{x:-9.75,z:4.7},{x:9.7,z:1.6},{x:-4.9,z:-5.55},{x:-10,z:-3.35},{x:0.3,z:6.25},{x:9.799999999999999,z:-6}],La=[...[-0.8,1.2,3.1,4.9].map((t,e)=>({id:`counter${e}`,kind:"counter",x:t,z:-5.55,yaw:od,sit:0,slot:-1})),...[-5.85,-5.1,-4.35].map((t,e)=>({id:`shelf${e}`,kind:"shelf",x:-10.25,z:t,yaw:Ql,sit:0,slot:-1})),...[-2.75,-2.05].map((t,e)=>({id:`board${e}`,kind:"board",x:-10.6,z:t,yaw:Ql,sit:0,slot:-1})),{id:"armchair",kind:"armchair",x:-10.78,z:-0.45,yaw:ur,sit:0.3,slot:-1},...[1.95,2.7,3.45].map((t,e)=>({id:`sofa${e}`,kind:"sofa",x:-10.7,z:t,yaw:ur,sit:0.3,slot:-1})),...[-5,-3.9,-1.55,-0.35].map((t,e)=>({id:`bar${e}`,kind:"bar",x:10.35,z:t,yaw:ur,sit:0.58,slot:-1}))],pd=[on,je,ri,Vn,we,ze,Wn,...ic.map((t)=>({x0:t.x-0.28,z0:t.z-0.28,x1:t.x+0.28,z1:t.z+0.28}))];function Ps(t){let{x:e,z:n}=dr(t);return{x:e,z:n,r:0.42}}function Na(t){let{x:e,z:n}=Ps(t);return[{id:`decor${t}a`,kind:"decor",x:e-0.78,z:n,yaw:ur,sit:0.27,slot:t},{id:`decor${t}b`,kind:"decor",x:e+0.78,z:n,yaw:Ql,sit:0.27,slot:t}]}var Oe={x0:-10.95,z0:-6.55,x1:10.95,z1:6.5};var gd=6000,_d=8000;function sc(t,e,n,i){switch(t){case"ask":return"ask";case"fail":return"fail";case"done":return"done";case"idle":return n==="main"&&i?"await":"idle";case"think":return"think";case"work":if(e==="read"||e==="search")return"shelf";if(e==="plan")return"board";if(e==="delegate")return"lead";return"seat"}}function md(t){return t==="idle"||t==="await"}function Ix(t,e){if(t==="ask"||t==="fail"||t==="done")return!0;if(md(e)&&!md(t))return!0;if(e==="ask"||e==="fail"||e==="done")return!0;return!1}class rc{want;seen;seenSince;constructor(t,e){this.want=t,this.seen=t,this.seenSince=e}feed(t,e,n=0){if(t!==this.seen)this.seen=t,this.seenSince=e;if(t===this.want)return!1;if(Ix(t,this.want)||e-this.seenSince>=1800&&e>=n)return this.want=t,!0;return!1}}var Lx=[["lounge",0.34],["seat",0.2],["browse",0.14],["gaze",0.12],["pet",0.12],["stroll",0.1]];function xd(t,e){let n=Lx.filter(([r])=>e(r)),i=n.reduce((r,[,a])=>r+a,0);if(i<=0)return"seat";let s=Math.min(Math.max(t,0),0.999999)*i;for(let[r,a]of n)if(s-=a,s<0)return r;return n[n.length-1]?.[0]??"seat"}function Da(t){let e=t>>>0||1;return()=>(e^=e<<13,e^=e>>>17,e^=e<<5,(e>>>0)/4294967296)}function vd(t,e=!1){let n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),s=new Set(Object.keys(t[0].morphAttributes)),r={},a={},o=t[0].morphTargetsRelative,l=new Le,c=0;for(let h=0;h<t.length;++h){let d=t[h],u=0;if(n!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;if(r[p]===void 0)r[p]=[];r[p].push(d.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(a[p]===void 0)a[p]=[];a[p].push(d.morphAttributes[p])}if(e){let p;if(n)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(n){let h=0,d=[];for(let u=0;u<t.length;++u){let p=t[u].index;for(let x=0;x<p.count;++x)d.push(p.getX(x)+h);h+=t[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=yd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d===0)continue;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let p=[];for(let M=0;M<a[h].length;++M)p.push(a[h][M][u]);let x=yd(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function yd(t){let e,n,i,s=-1,r=0;for(let c=0;c<t.length;++c){let h=t[c];if(e===void 0)e=h.array.constructor;if(e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0)n=h.itemSize;if(n!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0)i=h.normalized;if(i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1)s=h.gpuType;if(s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*n}let a=new e(r),o=new ke(a,n,i),l=0;for(let c=0;c<t.length;++c){let h=t[c];if(h.isInterleavedBufferAttribute){let d=l/n;for(let u=0,p=h.count;u<p;u++)for(let x=0;x<n;x++){let M=h.getComponent(u,x);o.setComponent(u+d,x,M)}}else a.set(h.array,l);l+=h.count*n}if(s!==void 0)o.gpuType=s;return o}var Sd=new Map;function Xn(t){let e=Sd.get(t);if(e===void 0)e=new Mi({color:t}),Sd.set(t,e);return e}var bd=new Map;function ac(t){let e=bd.get(t);if(e===void 0)e=new Ke({color:t}),bd.set(t,e);return e}var _n=new Si(1,1,1),Ji=new Mi({vertexColors:!0}),Nx=new Ke({vertexColors:!0});class xn{parts=[];matrix=new Kt;turn=new qe;euler=new En;color=new Ot;add(t,e,n,i,s,r=0,a=1,o=1,l=1,c=0){this.turn.setFromEuler(this.euler.set(c,r,0,"YXZ")),this.matrix.compose(new P(n,i,s),this.turn,new P(a,o,l));let h=e.index===null?e.clone():e.toNonIndexed();h.applyMatrix4(this.matrix);for(let p of Object.keys(h.attributes))if(p!=="position"&&p!=="normal")h.deleteAttribute(p);this.color.set(t);let d=h.getAttribute("position").count,u=new Float32Array(d*3);for(let p=0;p<d;p+=1)u[p*3]=this.color.r,u[p*3+1]=this.color.g,u[p*3+2]=this.color.b;h.setAttribute("color",new ke(u,3)),this.parts.push(h)}part(t){this.add(t.color,_n,t.x,t.y,t.z,t.yaw??0,t.w,t.h,t.d)}box(t,e,n,i,s,r,a,o=0){this.add(t,_n,s,r+n/2,a,o,e,n,i)}geometry(){let t=this.parts.length===0?new Le:vd(this.parts,!1);for(let e of this.parts)e.dispose();return this.parts.length=0,t??new Le}build(t=!1,e=!0,n=!0){let i=new Yt(this.geometry(),t?Nx:Ji);return i.castShadow=e&&!t,i.receiveShadow=n&&!t,i}}function Ce(t){let e=new xn;for(let n of t)e.part(n);return e.geometry()}function ai(t,e,n,i=!1){let s=document.createElement("canvas");s.width=t,s.height=e;let r=s.getContext("2d");if(r!==null)n(r);let a=new ca(s);if(a.colorSpace=jr,i)a.magFilter=wn,a.minFilter=wn,a.generateMipmaps=!1;return a}function Is(t,e,n,i,s,r){e.forEach((a,o)=>{for(let l=0;l<a.length;l+=1){let c=n[a[l]??"."];if(c===void 0)continue;t.fillStyle=c,t.fillRect(i+l*r,s+o*r,r,r)}})}function Dx(t){let e=t;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function Ed(){let t=Dx(7),e=ai(512,512,(n)=>{let i=["#c79a6c","#c99d70","#c3956a","#cca174","#c09168"],s=8,r=64;for(let a=0;a<8;a+=1){let o=-Math.floor(t()*160);while(o<512){let l=140+Math.floor(t()*120);n.fillStyle=i[Math.floor(t()*i.length)]??"#c79a6c",n.fillRect(o,a*64,l,64),n.fillStyle="rgba(255,255,255,0.06)",n.fillRect(o,a*64+2,l,2),n.fillStyle="#a97c52",n.fillRect(o+l-2,a*64,2,64),o+=l}n.fillStyle="#ab7f55",n.fillRect(0,a*64+64-3,512,3)}});return e.wrapS=Ks,e.wrapT=Ks,e}var Ux="#ffd84d",Fx="#69b96c",Ox="#e0564b",Bx="#d97757",zx=[".a.a...","..a.a..",".......","#####..","#ccc###","#ccc#.#",".###..."],Hx=["....###",".....#.","....###","###....",".#.....","###....","......."],kx={ask:an.bang,query:an.query,done:an.check,fail:an.cross,pencil:an.pencil,shell:an.shell,globe:an.globe,gear:an.gear,people:an.people,book:an.book,lens:an.lens,list:an.list,cup:zx,zzz:Hx},Md=new Map;function Ua(t){if(t==="none")return;let e=Md.get(t);if(e!==void 0)return e;let n=8,i=ai(13*n,12*n,(s)=>{if(Is(s,[".ooooooooooo.","offfffffffffo","offfffffffffo","offfffffffffo","offfffffffffo","offfffffffffo","offfffffffffo","offfffffffffo","offfffffffffo",".ooooooooooo.","..oo.........",".o..........."],{o:Fe,f:t==="ask"||t==="query"?Ux:t==="done"?Fx:t==="fail"?Ox:"#ffffff"},0,0,n),t.startsWith("think")){let c=Number(t.slice(5));for(let h=0;h<3;h+=1)s.fillStyle=h===c?Fe:"rgba(43,35,32,0.28)",s.fillRect((3+h*3)*n,4*n,2*n,2*n);return}let o=kx[t]??an.gear;Is(s,o,{"#":t==="done"||t==="fail"?"#ffffff":Fe,a:t==="cup"?"#c9c9c9":Bx,c:"#8a623f"},3*n,1*n,n)},!0);return Md.set(t,i),i}function Td(){let t=[".oo.oo.","ohhohho","ohhhhho",".ohhho.","..oho..","...o..."];return ai(56,48,(e)=>Is(e,t,{o:"#8a2d3c",h:"#ef6f8a"},0,0,8),!0)}var mr=0.28,wd=0.3,Ld=0.32,oc=0.38,Ad=mr+Ld+oc+0.06;function Nd(){return{legL:0,legR:0,armLx:0,armLz:0,armRx:0,armRz:0,headX:0,headY:0,headZ:0,lean:0,lift:0,turn:0}}var Rd=["#3b4252","#4a3f35","#2f3e46","#55463a","#36454f","#40394a"],Cd=["#3f6fb0","#a8452f","#3d8f5a","#7b5aa6","#c48a2a"],Gx="#2b2320",Pd=-Math.PI/2;function se(t,e,n,i,s,r,a){return{color:t,w:e,h:n,d:i,x:s,y:r,z:a}}var Vx=Ce([se("#fbf7ee",0.09,0.1,0.09,0,0.02,0.05),se("#6b4a32",0.07,0.01,0.07,0,0.071,0.05),se("#fbf7ee",0.02,0.05,0.04,-0.055,0.02,0.05)]),Wx=Ce([se("#6b4a32",0.03,0.1,0.03,0,0,0.03),se("#b9c0c7",0.15,0.025,0.03,0,0.175,0.03),se("#b9c0c7",0.15,0.025,0.03,0,0.055,0.03),se("#b9c0c7",0.025,0.12,0.03,0.065,0.115,0.03),se("#b9c0c7",0.025,0.12,0.03,-0.065,0.115,0.03),se("#cfe8f5",0.11,0.1,0.01,0,0.115,0.03)]),Xx=Ce([se("#ffd84d",0.11,0.11,0.012,0,0.02,0.06)]),qx=Ce([se("#4a5060",0.32,0.022,0.22,0,0.011,0),se("#2b2320",0.26,0.004,0.12,0,0.024,-0.02)]),Yx=Ce([se("#4a5060",0.32,0.21,0.016,0,0.105,0),se("#cfd8ea",0.05,0.05,0.004,0,0.12,0.01)]),Zx=new ei(0.3,0.38,28),Jx=new Ke({color:"#d97757",transparent:!0,opacity:0.9,depthWrite:!1});function yn(t){let e=new Yt(t,Ji);return e.castShadow=!0,e}function Kx(t,e,n,i,s){let r=Nd();if(e)r.legL=Pd,r.legR=Pd,r.armLx=-0.35,r.armRx=-0.35;let a=(o,l=0)=>Math.sin(n*o+i+l)*s;switch(t){case"stand":break;case"look":r.headY=0.35*a(0.45),r.headX=0.05;break;case"walk":{let o=Math.sin(n*9+i);r.legL=0.6*o,r.legR=-0.6*o,r.armLx=-0.5*o,r.armRx=0.5*o,r.lift=Math.abs(Math.cos(n*9+i))*0.035;break}case"type":r.armLx=-1.2+0.08*a(16),r.armRx=-1.2+0.08*a(16,Math.PI),r.armLz=-0.2,r.armRz=0.2,r.headX=0.2,r.headY=0.06*a(0.7);break;case"think":r.armLx=e?-0.55:-0.15,r.armLz=-0.12,r.armRx=-2.3,r.armRz=0.6,r.headX=-0.06,r.headZ=0.14+0.05*a(1.4),r.headY=0.18*a(0.6);break;case"read":r.armLx=-1.05,r.armLz=-0.42,r.armRx=-1.05,r.armRz=0.42,r.headX=0.42,r.headY=0.05*a(0.5);break;case"search":r.armLx=-0.2,r.armRx=-1.25+0.12*a(2.2),r.armRz=0.18,r.headX=0.1,r.turn=0.32*a(1.1),r.headY=0.22*a(1.1);break;case"board":r.armLx=-0.15,r.armRx=-2.15+0.14*a(7),r.armRz=0.12*Math.cos(n*7+i)*s,r.headX=-0.2;break;case"ask":r.armLx=e?-0.35:0,r.armRz=-2.75+0.32*a(9),r.lift=0.045*Math.abs(a(4.5)),r.headZ=0.1*a(4.5);break;case"sip":{let o=(n+i)%5.5,l=s>0&&o<1.3;r.armLx=e?-0.4:-0.1,r.armRx=l?-2.05:-0.95,r.armRz=l?0.42:0.25,r.headX=l?-0.28:0.04,r.headY=l?0:0.28*a(0.4);break}case"rest":r.armLx=-0.95,r.armRx=-0.95,r.armLz=-0.15,r.armRz=0.15,r.headX=0.1,r.headY=0.32*a(0.35),r.headZ=0.06*a(0.25);break;case"cheer":r.armLz=2.55+0.18*a(11),r.armRz=-2.55-0.18*a(11),r.lift=0.2*Math.abs(a(7)),r.headX=-0.15;break;case"slump":r.lean=0.42,r.headX=0.55,r.armLx=-1.45,r.armRx=-1.45,r.armLz=-0.3,r.armRz=0.3;break;case"beckon":r.armLx=-0.15,r.armRx=-1.35+0.38*a(5),r.armRz=0.1,r.headY=0.22*a(0.8);break;case"watch":r.armLx=0.38,r.armRx=0.38,r.lean=0.14,r.headX=0.32+0.09*a(2);break;case"pet":r.lift=-0.06,r.lean=0.5,r.armLx=-0.3,r.armRx=-0.85+0.25*a(5),r.armRz=0.12,r.headX=0.35;break}return r}var Id=[[{w:0.46,h:0.11,d:0.43,x:0,y:0.38,z:-0.01,ink:"hair"},{w:0.47,h:0.3,d:0.08,x:0,y:0.24,z:-0.2,ink:"hair"},{w:0.05,h:0.16,d:0.29,x:0.215,y:0.28,z:-0.035,ink:"hair"},{w:0.05,h:0.16,d:0.29,x:-0.215,y:0.28,z:-0.035,ink:"hair"}],[{w:0.46,h:0.11,d:0.43,x:0,y:0.38,z:-0.01,ink:"hair"},{w:0.47,h:0.3,d:0.08,x:0,y:0.24,z:-0.2,ink:"hair"},{w:0.05,h:0.2,d:0.33,x:0.215,y:0.26,z:-0.015,ink:"hair"},{w:0.05,h:0.2,d:0.33,x:-0.215,y:0.26,z:-0.015,ink:"hair"},{w:0.3,h:0.08,d:0.05,x:-0.07,y:0.32,z:0.2,ink:"hair"}],[{w:0.46,h:0.11,d:0.43,x:0,y:0.38,z:-0.01,ink:"hair"},{w:0.47,h:0.56,d:0.09,x:0,y:0.12,z:-0.2,ink:"hair"},{w:0.05,h:0.46,d:0.3,x:0.218,y:0.16,z:-0.05,ink:"hair"},{w:0.05,h:0.46,d:0.3,x:-0.218,y:0.16,z:-0.05,ink:"hair"}],[{w:0.46,h:0.11,d:0.43,x:0,y:0.38,z:-0.01,ink:"hair"},{w:0.47,h:0.3,d:0.08,x:0,y:0.24,z:-0.2,ink:"hair"},{w:0.05,h:0.16,d:0.29,x:0.215,y:0.28,z:-0.035,ink:"hair"},{w:0.05,h:0.16,d:0.29,x:-0.215,y:0.28,z:-0.035,ink:"hair"},{w:0.18,h:0.17,d:0.17,x:0,y:0.5,z:-0.08,ink:"hair"}],[{w:0.46,h:0.13,d:0.44,x:0,y:0.37,z:-0.01,ink:"cap"},{w:0.4,h:0.04,d:0.18,x:0,y:0.33,z:0.25,ink:"brim"},{w:0.47,h:0.18,d:0.08,x:0,y:0.22,z:-0.2,ink:"hair"}]];class lc{root=new ie;body=new ie;upper=new ie;legL=new ie;legR=new ie;armL=new ie;armR=new ie;head=new ie;cup;lens;note;book;owned;ring;bubble;bubbleMaterial;laptop=new ie;lid=new ie;screen;joints=Nd();phase;pose="stand";isSeated=!1;seatLift=0;bubbleName="none";shown="none";screenState="none";presence=1;constructor(t,e){let n=qi(e);this.phase=n%628/100;let i=ad(t),s=Rd[n%Rd.length]??"#3b4252",r=i.B??t.skin,a=Ce([se(s,0.15,0.23,0.17,0,-0.115,0),se(Gx,0.16,0.05,0.21,0,-0.255,0.02)]),o=Ce([se(t.top,0.1,0.2,0.12,0,-0.1,0),se(t.skin,0.1,0.07,0.11,0,-0.235,0)]),l=Ce([se(t.top,0.36,0.32,0.22,0,0.16,0),se(t.collar,0.18,0.05,0.02,0,0.29,0.112)]),c={hair:t.hair,cap:t.cap,brim:jl(t.cap)},h=Ce([se(t.skin,0.42,oc,0.38,0,oc/2,0),se(Fe,0.05,0.08,0.02,0.09,0.17,0.191),se(Fe,0.05,0.08,0.02,-0.09,0.17,0.191),se(r,0.07,0.03,0.01,0.145,0.1,0.191),se(r,0.07,0.03,0.01,-0.145,0.1,0.191),se("#b5574f",0.06,0.025,0.01,0,0.065,0.191),...(Id[t.head]??Id[0]??[]).map((d)=>se(c[d.ink],d.w,d.h,d.d,d.x,d.y,d.z))]);this.owned=[a,o,l,h],this.legL.position.set(0.09,mr,0),this.legR.position.set(-0.09,mr,0),this.legL.add(yn(a)),this.legR.add(yn(a)),this.body.add(this.legL,this.legR),this.upper.position.set(0,mr,0),this.upper.add(yn(l)),this.armL.position.set(0.235,wd,0),this.armR.position.set(-0.235,wd,0),this.armL.add(yn(o)),this.armR.add(yn(o)),this.upper.add(this.armL,this.armR),this.head.position.set(0,Ld,0),this.head.add(yn(h)),this.upper.add(this.head),this.cup=yn(Vx),this.lens=yn(Wx),this.note=yn(Xx);for(let d of[this.cup,this.lens,this.note])d.position.y=-0.27,this.armR.add(d);this.book=yn(Ce([se(Cd[(n>>>5)%Cd.length]??"#3f6fb0",0.3,0.22,0.025,0,0,0),se("#fbf7ee",0.28,0.2,0.02,0,0,-0.015),se("#d9cfb8",0.012,0.206,0.025,0,0,-0.016)])),this.owned.push(this.book.geometry),this.book.position.set(0,0.2,0.3),this.book.rotation.x=0.75,this.upper.add(this.book),this.body.add(this.upper),this.root.add(this.body),this.ring=new Yt(Zx,Jx),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=0.015,this.ring.visible=!1,this.root.add(this.ring),this.bubbleMaterial=new Cn({transparent:!0,depthWrite:!1}),this.bubble=new Hn(this.bubbleMaterial),this.bubble.scale.set(0.36,0.33,1),this.bubble.center.set(0.2,0),this.bubble.visible=!1,this.root.add(this.bubble),this.laptop.add(yn(qx)),this.lid.position.set(0,0.022,0.11),this.lid.add(yn(Yx)),this.screen=new Yt(_n,ac("#cfd8ea")),this.screen.scale.set(0.28,0.17,0.004),this.screen.position.set(0,0.105,-0.01),this.lid.add(this.screen),this.laptop.add(this.lid),this.laptop.visible=!1,this.setHeld("none")}setPose(t,e,n){this.pose=t,this.isSeated=e,this.seatLift=e?n-mr+0.01:0}setHeld(t){this.cup.visible=t==="cup",this.lens.visible=t==="lens",this.note.visible=t==="note",this.book.visible=t==="book"}setBubble(t){this.bubbleName=t}setRing(t){this.ring.visible=t}placeLaptop(t,e){if(this.laptop.visible=t!=="none"&&e!==void 0,e===void 0||t==="none")return;let n=0.52;if(this.laptop.position.set(e.x+Math.sin(e.yaw)*n,$e,e.z+Math.cos(e.yaw)*n),this.laptop.rotation.y=e.yaw,t===this.screenState)return;this.screenState=t,this.screen.material=ac(t==="error"?"#e0564b":t==="on"?"#cfd8ea":"#3a4050")}update(t,e,n){let i=Kx(this.pose,this.isSeated,e,this.phase,n),s=1-Math.exp(-t*(n>0?14:60)),r=this.joints;for(let h of Object.keys(r))r[h]+=(i[h]-r[h])*s;this.legL.rotation.x=r.legL,this.legR.rotation.x=r.legR,this.armL.rotation.set(r.armLx,0,r.armLz),this.armR.rotation.set(r.armRx,0,r.armRz),this.head.rotation.set(r.headX,r.headY,r.headZ),this.upper.rotation.set(r.lean,r.turn,0),this.body.position.y=this.seatLift+r.lift,this.body.position.z=this.isSeated?-0.04:0,this.cup.rotation.x=-r.armRx-r.lean,this.lens.rotation.x=-r.armRx-0.4,this.note.rotation.x=-r.armRx;let a=this.screenState==="off"?-Math.PI/2+0.08:0.25;this.lid.rotation.x+=(a-this.lid.rotation.x)*s;let o=this.bubbleName;if(o==="think0"||o==="think1"||o==="think2")o=n>0?["think0","think1","think2"][Math.floor(e*2.6)%3]??"think0":"think1";if(o!==this.shown){this.shown=o;let h=Ua(o);if(this.bubble.visible=h!==void 0,h!==void 0)this.bubbleMaterial.map=h,this.bubbleMaterial.needsUpdate=!0}let l=o==="ask"||o==="query"?0.05*Math.abs(Math.sin(e*5+this.phase))*n:0;this.bubble.position.set(0,this.body.position.y+Ad+0.08+l,0);let c=Math.max(0.001,this.presence);this.root.scale.setScalar(c)}headTop(){return this.body.position.y+Ad}dispose(){this.bubbleMaterial.dispose();for(let t of this.owned)t.dispose()}}var Dd={read:"book",search:"lens",write:"pencil",run:"shell",web:"globe",delegate:"people",plan:"list",tool:"gear",ask:"ask",think:"think0",rest:"none",done:"done",fail:"fail"},Ud=["sofa","armchair","bar","decor"],$x=1.6,jx=2.2,Qx=9;function oi(t,e,n){return(e+(n-e)*t())*1000}class cc{key;body;line;x=0;z=0;yaw=0;isLeaving=!1;isGone=!1;path=[];where="chair";goal={x:0,z:0,yaw:0,sit:0};spot;doing="rest";stay=0;until=0;isThere=!1;isPlacing=!1;intent;random;hasCup=!1;sips=0;thinkSince=0;lingerUntil=0;constructor(t,e,n){this.key=t.key,this.line=t,this.body=new lc(t.kind==="main"?sd:rd(t.key),t.key),this.intent=new rc(sc(t.phase,t.act,t.kind,!1),e),this.random=Da(n)}get want(){return this.intent.want}get isWalking(){return this.path.length>0}get isPetting(){return this.doing==="pet"&&!this.isLeaving}arrive(t,e){if(e&&t.motion>0){this.x=Ut.outside.x,this.z=Ut.outside.z,this.yaw=-Math.PI/2,this.body.presence=0,this.decide(t);return}this.hasCup=this.random()<0.75,this.sips=1+Math.floor(this.random()*2),this.isPlacing=!0,this.decide(t),this.isPlacing=!1,this.yaw=this.goal.yaw}leave(t){if(this.isLeaving)return;if(this.isLeaving=!0,t.release(this),this.spot=void 0,t.motion===0){this.isGone=!0;return}this.goTo(t,"door",{...Ut.outside,yaw:Math.PI/2},0,"exit",0)}update(t,e,n){let{now:i}=n;if(!this.isLeaving){let s=sc(this.line.phase,this.line.act,this.line.kind,n.isCrewBusy(this));if(this.intent.feed(s,i,this.lingerUntil))this.decide(n);else if(this.spot!==void 0&&!n.isOpen(this.spot))this.next(n);else if(this.isThere&&this.until>0&&i>=this.until)this.until=0,this.next(n);else if(this.want==="think"&&this.doing==="think"&&this.where==="chair"&&this.isThere&&n.motion>0&&i-this.thinkSince>_d)this.goTo(n,"point",{...n.floorPoint(this.random,this.goal,1.6),yaw:this.yaw},0,"pace",oi(this.random,2.5,4))}this.move(t,n),this.show(t,e,n)}stopPetting(t){if(this.isPetting)this.next(t)}nudge(t,e,n){let i={x:this.x+t,z:this.z+e};if(n.isFree(i))this.x=i.x,this.z=i.z}reroute(t){if(this.path.length===0||t.motion===0)return;let e=this.path[this.path.length-1];if(this.where==="door")this.path=[...t.nav.path(this,Ut.inside),Ut.outside];else if(this.x<=be)this.path=t.nav.path(this,e)}decide(t){let{line:e}=this;switch(this.want){case"ask":this.toChair(t,"beside","ask");return;case"fail":this.toChair(t,"chair","fail");return;case"done":if(t.motion>0)this.stop(t,"cheer",2600);else this.toChair(t,"chair","cheer");return;case"seat":this.toChair(t,"chair","work");return;case"shelf":this.toStation(t,"shelf",e.act==="search"?"search":"read");return;case"board":this.toStation(t,"board","plan");return;case"lead":this.lead(t);return;case"think":if(this.thinkSince=t.now,this.spot!==void 0&&(this.spot.kind==="shelf"||this.spot.kind==="board")){this.doing="think",this.stay=0,this.until=0;return}this.toChair(t,"chair","think");return;case"idle":case"await":if(t.motion===0)this.toChair(t,"chair","rest");else this.freeTime(t);return}}next(t){switch(this.doing){case"coffee":this.hasCup=!0,this.sips=2+Math.floor(this.random()*2),this.freeTime(t);return;case"cheer":t.release(this),this.spot=void 0,this.goTo(t,"door",{...Ut.outside,yaw:Math.PI/2},0,"exit",0);return;case"pace":this.toChair(t,"chair","think"),this.thinkSince=t.now;return;case"sip":case"rest":if(this.hasCup){if(this.sips-=1,this.sips<=0)this.hasCup=!1}this.freeTime(t);return;case"browse":case"pet":case"stroll":case"watch":if(this.want==="idle"||this.want==="await")this.freeTime(t);else this.decide(t);return;default:this.decide(t)}}freeTime(t){if(this.want!=="idle"&&this.want!=="await"){this.decide(t);return}if(!this.hasCup&&!this.isPlacing){let n=t.claim(this,["counter"]);if(n!==void 0){this.goTo(t,"spot",n,0,"coffee",2400,n);return}this.hasCup=!0,this.sips=2}if(this.want==="await"){let n=t.crewChairs(this),i=n[Math.floor(this.random()*n.length)];if(this.doing==="rest"&&this.where==="chair"&&i!==void 0)this.goTo(t,"beside",{...Pa(i),yaw:i.yaw},0,"watch",oi(this.random,5,8));else this.toChair(t,"chair","rest",oi(this.random,12,20));return}switch(xd(this.random(),(n)=>{if(n==="lounge")return t.hasFree(Ud);if(n==="browse")return t.hasFree(["shelf"]);if(n==="pet")return t.petSpot(this)!==void 0;return!0})){case"lounge":{let n=t.claim(this,Ud);if(n!==void 0){this.goTo(t,"spot",n,n.sit,"sip",oi(this.random,16,32),n);return}break}case"browse":{let n=t.claim(this,["shelf"]);if(n!==void 0){this.goTo(t,"spot",n,0,"browse",oi(this.random,7,12),n);return}break}case"pet":{let n=t.petSpot(this);if(n!==void 0){this.goTo(t,"point",n,0,"pet",oi(this.random,5,8));return}break}case"gaze":case"stroll":{let n=t.floorPoint(this.random);this.goTo(t,"point",{...n,yaw:t.cameraYaw(n.x,n.z)+(this.random()-0.5)*2},0,"stroll",oi(this.random,3,6));return}case"seat":break}this.toChair(t,"chair","rest",oi(this.random,14,24))}lead(t){let e=t.crewChairs(this),n=e[Math.floor(this.random()*e.length)];if(n!==void 0&&t.motion>0){this.goTo(t,"beside",{...Pa(n),yaw:n.yaw},0,"watch",oi(this.random,6,10));return}this.toChair(t,"beside","lead",3000)}toStation(t,e,n){if(this.spot?.kind===e){this.doing=n,this.stay=0,this.until=0;return}let i=t.claim(this,[e]);if(i===void 0){this.toChair(t,"chair",n);return}this.goTo(t,"spot",i,0,n,0,i)}toChair(t,e,n,i=0){let s=t.chairOf(this);if(s===void 0){this.stop(t,n,i);return}if(e==="chair")this.goTo(t,"chair",s,Yi,n,i);else this.goTo(t,"beside",{...Pa(s),yaw:s.yaw},0,n,i)}stop(t,e,n){if(this.path=[],this.doing=e,this.stay=n,this.isThere=!0,this.until=n>0?t.now+n:0,this.goal.sit>0&&Math.hypot(this.goal.x-this.x,this.goal.z-this.z)>0.05)this.goal={...this.goal,sit:0}}goTo(t,e,n,i,s,r,a){if(a!==this.spot){if(this.spot!==void 0)t.release(this);if(this.spot=a,a!==void 0)t.claim(this,[a.kind],a)}if(this.where=e,this.goal={x:n.x,z:n.z,yaw:n.yaw,sit:i},this.doing=s,this.stay=r,this.until=0,this.lingerUntil=0,this.isThere=!1,t.motion===0||this.isPlacing){if(e==="door"){this.isGone=!0;return}this.x=n.x,this.z=n.z,this.path=[],this.reach(t);return}if(e==="door"){this.path=this.x>be?[Ut.outside]:[...t.nav.path(this,Ut.inside),Ut.outside];return}if(Math.hypot(n.x-this.x,n.z-this.z)<0.05){this.path=[],this.reach(t);return}this.path=this.x>be-0.05?[Ut.inside,...t.nav.path(Ut.inside,n)]:t.nav.path(this,n)}reach(t){this.isThere=!0,this.x=this.goal.x,this.z=this.goal.z,this.until=this.stay>0?t.now+this.stay:0;let e=this.spot?.kind==="shelf"||this.spot?.kind==="board";this.lingerUntil=e&&this.want!=="idle"&&this.want!=="await"?t.now+gd:0}move(t,e){let n;if(this.path.length>0){let i=(this.doing==="ask"?jx:$x)*t;while(i>0&&this.path.length>0){let s=this.path[0],r=s.x-this.x,a=s.z-this.z,o=Math.hypot(r,a);if(o>0.0001)n=Math.atan2(r,a);if(o<=i)this.x=s.x,this.z=s.z,this.path.shift(),i-=o;else this.x+=r/o*i,this.z+=a/o*i,i=0}if(this.path.length===0)this.reach(e)}if(this.where==="door"&&this.isThere){if(this.body.presence=Math.max(0,this.body.presence-t*3),this.body.presence<=0)this.isGone=!0}else if(this.body.presence<1)this.body.presence=Math.min(1,this.body.presence+t*3);if(n===void 0&&this.isThere)n=this.doing==="ask"||this.doing==="cheer"?e.cameraYaw(this.x,this.z):this.goal.yaw;if(n!==void 0){let i=n-this.yaw;i=Math.atan2(Math.sin(i),Math.cos(i)),this.yaw+=e.motion>0?i*(1-Math.exp(-t*Qx)):i}}show(t,e,n){let i=this.isThere&&this.goal.sit>0,s="stand",r="none";if(!this.isThere){if(s="walk",this.hasCup)r="cup"}else switch(this.doing){case"work":s="type";break;case"think":case"pace":s="think";break;case"read":case"browse":s="read",r="book";break;case"search":s="search",r="lens";break;case"plan":s=this.where==="spot"?"board":"type",r=this.where==="spot"?"note":"none";break;case"ask":s="ask";break;case"fail":s="slump";break;case"cheer":s="cheer";break;case"exit":s="walk";break;case"lead":s="beckon";break;case"watch":s="watch";break;case"coffee":s="look";break;case"pet":s="pet";break;case"sip":case"rest":case"stroll":s=this.hasCup?"sip":this.doing==="rest"&&i?"rest":"look",r=this.hasCup?"cup":"none";break}this.body.setPose(s,i,this.goal.sit),this.body.setHeld(r),this.body.setBubble(this.bubbleName());let a=this.isThere&&(this.where==="chair"||this.where==="beside"&&this.doing!=="watch"),o="off";if(this.isLeaving||this.doing==="cheer")o="none";else if(a&&this.doing==="fail")o="error";else if(a&&(this.doing==="work"||this.doing==="think"||this.doing==="ask"||this.doing==="lead"||this.doing==="plan"))o="on";this.body.placeLaptop(o,o==="none"?void 0:n.chairOf(this)),this.body.update(t,e,n.motion),this.body.root.position.set(this.x,0,this.z),this.body.root.rotation.y=this.yaw}bubbleName(){let{phase:t,act:e,tool:n}=this.line;switch(t){case"ask":return n==="AskUserQuestion"?"query":"ask";case"done":return"done";case"fail":return"fail";case"think":return"think0";case"idle":return"none";case"work":return Dd[e]==="none"?"gear":Dd[e]}}}class hc{cell;cols;rows;x0;z0;blocked;cost;from;state;heap;heapScore;constructor(t,e=0.2){this.cell=e,this.x0=t.x0,this.z0=t.z0,this.cols=Math.max(1,Math.ceil((t.x1-t.x0)/e)),this.rows=Math.max(1,Math.ceil((t.z1-t.z0)/e));let n=this.cols*this.rows;this.blocked=new Uint8Array(n),this.cost=new Float64Array(n),this.from=new Int32Array(n),this.state=new Uint8Array(n),this.heap=new Int32Array(n*8),this.heapScore=new Float64Array(n*8)}clear(){this.blocked.fill(0)}block(t,e=0.22){let n=Math.max(0,Math.floor((t.x0-e-this.x0)/this.cell)),i=Math.min(this.cols-1,Math.floor((t.x1+e-this.x0)/this.cell)),s=Math.max(0,Math.floor((t.z0-e-this.z0)/this.cell)),r=Math.min(this.rows-1,Math.floor((t.z1+e-this.z0)/this.cell));for(let a=s;a<=r;a+=1)this.blocked.fill(1,a*this.cols+n,a*this.cols+i+1)}blockCircle(t,e,n=0.22){let i=e+n,s=Math.max(0,Math.floor((t.x-i-this.x0)/this.cell)),r=Math.min(this.cols-1,Math.floor((t.x+i-this.x0)/this.cell)),a=Math.max(0,Math.floor((t.z-i-this.z0)/this.cell)),o=Math.min(this.rows-1,Math.floor((t.z+i-this.z0)/this.cell));for(let l=a;l<=o;l+=1)for(let c=s;c<=r;c+=1){let h=this.x0+(c+0.5)*this.cell,d=this.z0+(l+0.5)*this.cell;if(Math.hypot(h-t.x,d-t.z)<=i)this.blocked[l*this.cols+c]=1}}indexOf(t){let e=Math.floor((t.x-this.x0)/this.cell),n=Math.floor((t.z-this.z0)/this.cell);if(e<0||n<0||e>=this.cols||n>=this.rows)return-1;return n*this.cols+e}centerOf(t){return{x:this.x0+(t%this.cols+0.5)*this.cell,z:this.z0+(Math.floor(t/this.cols)+0.5)*this.cell}}isFree(t){let e=this.indexOf(t);return e>=0&&this.blocked[e]===0}nearestFree(t,e=24){let n=Math.floor((t.x-this.x0)/this.cell),i=Math.floor((t.z-this.z0)/this.cell),s=-1,r=1/0;for(let a=0;a<=e;a+=1){for(let o=-a;o<=a;o+=1)for(let l=-a;l<=a;l+=1){if(Math.max(Math.abs(l),Math.abs(o))!==a)continue;let c=n+l,h=i+o;if(c<0||h<0||c>=this.cols||h>=this.rows)continue;let d=h*this.cols+c;if(this.blocked[d]!==0)continue;let u=this.centerOf(d),p=Math.hypot(u.x-t.x,u.z-t.z);if(p<r)s=d,r=p}if(s>=0&&r<(a+0.5)*this.cell)break}return s}nearestPoint(t){if(this.isFree(t))return t;let e=this.nearestFree(t);return e<0?t:this.centerOf(e)}isClear(t,e){let n=Math.hypot(e.x-t.x,e.z-t.z),i=Math.max(1,Math.ceil(n/(this.cell*0.4)));for(let s=0;s<=i;s+=1){let r=s/i,a=this.indexOf({x:t.x+(e.x-t.x)*r,z:t.z+(e.z-t.z)*r});if(a<0||this.blocked[a]!==0)return!1}return!0}path(t,e){let n=this.isFree(t)?this.indexOf(t):this.nearestFree(t),i=this.isFree(e)?this.indexOf(e):this.nearestFree(e);if(n<0||i<0)return[e];let s=this.search(n,i);if(s===void 0)return[e];let r=[],a=this.centerOf(n);if(!this.isFree(t))r.push(a);let o=[this.isFree(t)?t:a,...s.slice(1,-1).map((h)=>this.centerOf(h))],l=this.isFree(e)?e:this.centerOf(i);o.push(l);let c=0;while(c<o.length-1){let h=o.length-1,d=o[c];while(h>c+1&&!this.isClear(d,o[h]))h-=1;r.push(o[h]),c=h}if(!this.isFree(e))r.push(e);return r.filter((h,d)=>d===0||!ty(h,r[d-1]))}search(t,e){if(t===e)return[t];let{cols:n,rows:i}=this;this.cost.fill(1/0),this.state.fill(0);let s=e%n,r=Math.floor(e/n),a=(u)=>{let p=Math.abs(u%n-s),x=Math.abs(Math.floor(u/n)-r);return Math.max(p,x)+(Math.SQRT2-1)*Math.min(p,x)},{heap:o,heapScore:l}=this,c=0,h=(u,p)=>{if(c>=o.length)return;let x=c;c+=1;while(x>0){let M=x-1>>1;if(l[M]<=p)break;o[x]=o[M],l[x]=l[M],x=M}o[x]=u,l[x]=p},d=()=>{let u=o[0];c-=1;let p=o[c],x=l[c],M=0;for(;;){let m=M*2+1;if(m>=c)break;let f=m+1;if(f<c&&l[f]<l[m])m=f;if(l[m]>=x)break;o[M]=o[m],l[M]=l[m],M=m}return o[M]=p,l[M]=x,u};this.cost[t]=0,this.from[t]=-1,h(t,a(t)),this.state[t]=1;while(c>0){let u=d();if(this.state[u]===2)continue;if(this.state[u]=2,u===e){let M=[];for(let m=e;m>=0;m=this.from[m])M.push(m);return M.reverse()}let p=u%n,x=Math.floor(u/n);for(let M=-1;M<=1;M+=1)for(let m=-1;m<=1;m+=1){if(m===0&&M===0)continue;let f=p+m,E=x+M;if(f<0||E<0||f>=n||E>=i)continue;let R=E*n+f;if(this.blocked[R]!==0||this.state[R]===2)continue;if(m!==0&&M!==0&&(this.blocked[x*n+f]!==0||this.blocked[E*n+p]!==0))continue;let v=this.cost[u]+(m!==0&&M!==0?Math.SQRT2:1);if(v>=this.cost[R])continue;this.cost[R]=v,this.from[R]=u,this.state[R]=1,h(R,v+a(R))}}return}}function ty(t,e){return Math.abs(t.x-e.x)<0.000001&&Math.abs(t.z-e.z)<0.000001}var ey={maj9:[4,7,11,14],m9:[3,7,10,14],m11:[3,10,14,17],dom13:[4,10,14,21],dom7b9:[4,10,13,19],sixNine:[4,9,14,19]},uc=[[[2,"m9"],[7,"dom13"],[0,"maj9"],[9,"dom7b9"]],[[5,"maj9"],[4,"m9"],[2,"m9"],[0,"maj9"]],[[0,"maj9"],[9,"m9"],[2,"m11"],[7,"dom13"]],[[4,"m9"],[9,"dom7b9"],[2,"m9"],[7,"dom13"]],[[2,"m11"],[7,"dom13"],[4,"m9"],[9,"m9"]],[[0,"sixNine"],[5,"maj9"],[2,"m9"],[7,"dom13"]]],dc=[3,5,8,10,2,0],ny=[[[0,7.5]],[[0,3],[3,4.5]],[[0,2],[5,2.5]],[[1,6.5]],[[0,1.5],[3,1],[6,1.5]]];function fc(t){return 440*2**((t-69)/12)}function Fd(t){let e=window.AudioContext??window.webkitAudioContext;if(e===void 0)return;let n,i,s,r,a,o,l,c,h=0,d=0.6,u=!1,p=0,x=0,M=dc[1]??5,m=uc[0]??[],f=[],E=Math.random,R=(C)=>C[Math.floor(E()*C.length)],v=(C,N)=>{let Z=Math.floor(N/2),rt=N%2===1;return C+(Z+(rt?0.63:0))*0.8333333333333334+(E()-0.5)*0.012};function T(C){i=C.createGain(),i.gain.value=0;let N=C.createDynamicsCompressor();N.threshold.value=-20,N.ratio.value=3,N.attack.value=0.02,N.release.value=0.3;let Z=C.createDynamicsCompressor();Z.threshold.value=-3,Z.knee.value=0,Z.ratio.value=20,Z.attack.value=0.002,Z.release.value=0.1,i.connect(N).connect(Z).connect(C.destination);let rt=C.createBiquadFilter();rt.type="lowpass",rt.frequency.value=3600,rt.Q.value=0.4,rt.connect(i);let lt=C.createConvolver(),Ct=Math.floor(C.sampleRate*2.4),Et=C.createBuffer(2,Ct,C.sampleRate);for(let re=0;re<2;re+=1){let ye=Et.getChannelData(re);for(let Qt=0;Qt<Ct;Qt+=1)ye[Qt]=(E()*2-1)*(1-Qt/Ct)**2.6}lt.buffer=Et,o=C.createGain(),o.gain.value=0.22,o.connect(lt).connect(rt),s=C.createGain(),s.gain.value=0.9;let z=C.createGain();z.gain.value=0.85;let tt=C.createOscillator();tt.frequency.value=4.2;let K=C.createGain();K.gain.value=0.12,tt.connect(K).connect(z.gain),tt.start(),s.connect(z),z.connect(rt),z.connect(o);let ct=C.createOscillator();ct.frequency.value=0.45,l=C.createGain(),l.gain.value=6,ct.connect(l),ct.start(),r=C.createGain(),r.gain.value=0.85;let vt=C.createBiquadFilter();vt.type="lowpass",vt.frequency.value=520,r.connect(vt).connect(rt),a=C.createGain(),a.gain.value=0.7,a.connect(rt),a.connect(o),c=C.createBuffer(1,C.sampleRate,C.sampleRate);let mt=c.getChannelData(0);for(let re=0;re<mt.length;re+=1)mt[re]=E()*2-1;let $t=C.sampleRate*6,zt=C.createBuffer(1,$t,C.sampleRate),Vt=zt.getChannelData(0),Zt=0;for(let re=0;re<$t;re+=1)if(Zt=Zt*0.92+(E()*2-1)*0.08,Vt[re]=Zt*0.05,E()<0.00018){let ye=(E()*0.5+0.2)*(E()<0.5?-1:1);for(let Qt=0;Qt<40&&re+Qt<$t;Qt+=1)Vt[re+Qt]=(Vt[re+Qt]??0)+ye*Math.exp(-Qt/6)}let Gt=C.createBufferSource();Gt.buffer=zt,Gt.loop=!0;let Me=C.createBiquadFilter();Me.type="highpass",Me.frequency.value=700;let he=C.createGain();he.gain.value=0.22,Gt.connect(Me).connect(he).connect(i),Gt.start()}function A(C,N,Z,rt,lt){if(s===void 0||l===void 0)return;let Ct=fc(Z),Et=N+lt,z=C.createOscillator();z.frequency.value=Ct;let tt=C.createOscillator();tt.frequency.value=Ct;let K=C.createGain();K.gain.setValueAtTime(Ct*1.1*rt,N),K.gain.exponentialRampToValueAtTime(Ct*0.06+0.01,N+1.1),tt.connect(K).connect(z.frequency),l.connect(z.detune);let ct=C.createOscillator();ct.frequency.value=Ct*4;let vt=C.createGain();vt.gain.setValueAtTime(0.05*rt,N),vt.gain.exponentialRampToValueAtTime(0.0001,N+0.22);let mt=C.createGain();mt.gain.setValueAtTime(0,N),mt.gain.linearRampToValueAtTime(0.16*rt,N+0.008),mt.gain.setTargetAtTime(0.06*rt,N+0.01,0.7),mt.gain.setTargetAtTime(0,Et,0.12),z.connect(mt),ct.connect(vt).connect(mt),mt.connect(s);for(let zt of[z,tt,ct])zt.start(N),zt.stop(Et+0.8);let $t=l;z.onended=()=>$t.disconnect(z.detune)}function w(C,N,Z,rt,lt){if(r===void 0)return;let Ct=N+lt,Et=C.createGain();Et.gain.setValueAtTime(0,N),Et.gain.linearRampToValueAtTime(0.42*rt,N+0.012),Et.gain.setTargetAtTime(0.2*rt,N+0.02,0.25),Et.gain.setTargetAtTime(0,Ct,0.06);for(let[z,tt]of[["triangle",0.7],["sine",1]]){let K=C.createOscillator();K.type=z,K.frequency.value=fc(Z);let ct=C.createGain();ct.gain.value=tt,K.connect(ct).connect(Et),K.start(N),K.stop(Ct+0.4)}Et.connect(r)}function g(C,N,Z,rt){if(s===void 0)return;let lt=C.createGain();lt.gain.setValueAtTime(0,N),lt.gain.linearRampToValueAtTime(0.07*rt,N+0.01),lt.gain.setTargetAtTime(0,N+0.05,0.55);let Ct=C.createGain();Ct.gain.value=0.75;let Et=C.createOscillator();Et.frequency.value=5.5;let z=C.createGain();z.gain.value=0.25,Et.connect(z).connect(Ct.gain);for(let[tt,K]of[[1,1],[4,0.12]]){let ct=C.createOscillator();ct.frequency.value=fc(Z)*tt;let vt=C.createGain();vt.gain.value=K,ct.connect(vt).connect(lt),ct.start(N),ct.stop(N+3)}Et.start(N),Et.stop(N+3),lt.connect(Ct).connect(s)}function S(C,N,Z,rt,lt,Ct,Et=0.7,z=a){if(c===void 0||z===void 0)return;let tt=C.createBufferSource();tt.buffer=c,tt.loop=rt>0.5,tt.playbackRate.value=0.8+E()*0.4;let K=C.createBiquadFilter();K.type=lt,K.frequency.value=Ct,K.Q.value=Et;let ct=C.createGain();ct.gain.setValueAtTime(0,N),ct.gain.linearRampToValueAtTime(Z,N+Math.min(0.01,rt/4)),ct.gain.exponentialRampToValueAtTime(0.0001,N+rt),tt.connect(K).connect(ct).connect(z),tt.start(N,E()*0.5),tt.stop(N+rt+0.05)}function G(C,N,Z){if(a===void 0)return;let rt=C.createOscillator();rt.frequency.setValueAtTime(115,N),rt.frequency.exponentialRampToValueAtTime(46,N+0.1);let lt=C.createGain();lt.gain.setValueAtTime(0.5*Z,N),lt.gain.exponentialRampToValueAtTime(0.0001,N+0.34),rt.connect(lt).connect(a),rt.start(N),rt.stop(N+0.4)}function I(C,N){if(o===void 0||i===void 0)return;for(let[Z,rt]of[[2350,0.02],[3720,0.012],[5180,0.006]]){let lt=C.createOscillator();lt.frequency.value=Z*(0.97+E()*0.06);let Ct=C.createGain();Ct.gain.setValueAtTime(rt,N),Ct.gain.exponentialRampToValueAtTime(0.0001,N+0.5),lt.connect(Ct),Ct.connect(o),Ct.connect(i),lt.start(N),lt.stop(N+0.55)}}function B(C,N){let Z=48+(M+C)%12,rt=ey[N].map((z)=>Z+z),lt=f.length===0?62:f.reduce((z,tt)=>z+tt,0)/f.length,Ct=rt,Et=1/0;for(let z of[-12,0,12]){let tt=rt.map((vt)=>vt+z),K=tt.reduce((vt,mt)=>vt+mt,0)/tt.length,ct=Math.abs(K-lt)+Math.abs(K-62)*0.5;if(ct<Et)Ct=tt,Et=ct}return f=Ct.map((z)=>z>77?z-12:z).sort((z,tt)=>z-tt),f}function j(C,N){if(x%16===0&&x>0)M=R(dc),m=R(uc);let[Z,rt]=m[x%m.length]??[0,"maj9"],[lt]=m[(x+1)%m.length]??[0,"maj9"],Ct=x%8,Et=B(Z,rt);for(let[K,ct]of R(ny)){let vt=0.7+E()*0.3;Et.forEach((mt,$t)=>A(C,v(N,K)+$t*(0.012+E()*0.01),mt,vt*($t===0?0.9:1),ct*0.8333333333333334*0.5))}let z=36+(M+Z)%12,tt=z+7>47?z-5:z+7;if(w(C,v(N,0),z,1,1.5),w(C,v(N,4),E()<0.6?tt:z+12>50?z:z+12,0.85,1.0833333333333335),E()<0.55){let K=36+(M+lt)%12,ct=E()<0.5?K+1:K-1;w(C,v(N,7),ct,0.7,0.375)}if(G(C,v(N,0),1),E()<0.45)G(C,v(N,5),0.6);for(let K of[2,6])S(C,v(N,K),0.11,0.2,"bandpass",2400,0.6),S(C,v(N,K)-0.04,0.035,0.32,"bandpass",1500,0.4);for(let K=0;K<8;K+=1){if(E()<0.1)continue;S(C,v(N,K),K%2===1?0.05:0.032,0.05,"highpass",7000)}if(E()<0.25)S(C,v(N,1+Math.floor(E()*6)),0.03,0.12,"bandpass",2800,0.6);if(Ct>=4&&E()<0.45){let K=[0,2,4,7,9].map((mt)=>72+(M+mt)%12),ct=1+Math.floor(E()*3),vt=2+Math.floor(E()*3);for(let mt=0;mt<vt&&ct<8;mt+=1)g(C,v(N,ct),R([...K,...Et.map(($t)=>$t+12)].filter(($t)=>$t<=86)),0.6+E()*0.4),ct+=1+Math.floor(E()*2)}if(E()<0.12)I(C,N+E()*3.3333333333333335);if(E()<0.04)S(C,N+E()*3.3333333333333335,0.025,2.4,"bandpass",4200,0.8,i)}function L(){let C=n;if(C===void 0||C.state!=="running")return;if(p<C.currentTime+0.05)p=C.currentTime+0.1;let N=document.hidden?65:0.4;while(p<C.currentTime+N)j(C,p),p+=3.3333333333333335,x+=1}async function q(C){if(et(C))return!0;return await Promise.race([C.resume().catch(()=>{return}),new Promise((N)=>window.setTimeout(N,400))]),et(C)}function et(C){return C.state==="running"}function V(C){if(C.state!=="closed")C.close().catch(()=>{return})}function st(C,N,Z,rt){let lt=C.currentTime,Ct=N.gain.value;N.gain.cancelScheduledValues(lt),N.gain.setValueAtTime(Ct,lt),N.gain.setTargetAtTime(Z,lt,rt)}return{get isPlaying(){return u&&n!==void 0&&n.state==="running"},async start(){let C=n;if(u&&C!==void 0){if(!await q(C))throw Error("the browser waits for a click before it plays sound");return}u=!0;let N=new e;n=N,T(N),N.addEventListener("statechange",()=>{if(n===N)t?.()});let Z=await q(N);if(n!==N)return;if(!Z)throw u=!1,n=void 0,V(N),Error("the browser waits for a click before it plays sound");M=R(dc),m=R(uc),x=0,f=[],p=N.currentTime+0.15,i?.gain.setValueAtTime(0,N.currentTime),i?.gain.linearRampToValueAtTime(d,N.currentTime+2.5),L(),h=window.setInterval(L,120)},stop(){if(!u)return;u=!1,window.clearInterval(h);let C=n,N=i;if(n=void 0,C===void 0)return;if(N!==void 0&&C.state==="running")st(C,N,0,0.15);window.setTimeout(()=>V(C),800)},setVolume(C){d=Math.max(0,Math.min(1,C));let N=n;if(N!==void 0&&i!==void 0&&N.state==="running")st(N,i,d,0.08)}}}var iy=[{fur:"#e9a34f",shade:"#c47f33",patch:"#f7e6c8"},{fur:"#9a9aa2",shade:"#6f6f78",patch:"#e8e6e2"},{fur:"#3a3633",shade:"#24211f",patch:"#3a3633"},{fur:"#f4f1ea",shade:"#d9d2c6",patch:"#e9a34f"},{fur:"#f4f1ea",shade:"#3a3633",patch:"#e9a34f"}],sy=[{fur:"#d9a25b",shade:"#b8813f",patch:"#f3e3c4"},{fur:"#e08a3c",shade:"#b86a2a",patch:"#f7efe2"},{fur:"#8a5a3b",shade:"#6b4429",patch:"#d9b48c"},{fur:"#2f2b29",shade:"#1f1c1b",patch:"#f4f1ea"},{fur:"#f2ece0",shade:"#d8cdb8",patch:"#8a5a3b"}],Fa="#f0a58c",Od=["#e0564b","#3f6fb0","#3d8f5a","#ffd84d"],ry={cat:["Mochi","Miso","Luna","Tofu","Nori","Maple","Pudding","Sesame"],dog:["Biscuit","Latte","Mango","Peanut","Cocoa","Bagel","Waffle","Pepper"]},Ls={cat:["Meow~","Purr…","Mrrp?","Meow!"],dog:["Woof!","Arf!","Woof woof!","Arf arf!"]},ay=2200,oy=new ei(0.3,0.37,28),ly=new Ke({color:"#e98fb0",transparent:!0,opacity:0.9,depthWrite:!1}),Bd=0.075,cy=new Hi(Bd,1),Oa=550,hy=12000;class pc{mesh;x=0;z=0;state="lying";droppedAt=0;from={x:0,z:0};thrownAt=0;constructor(){this.mesh=new Yt(cy,Xn("#cfe34a")),this.mesh.castShadow=!0}throwTo(t,e){this.from={x:t.x*0.6,z:Se+1.2},this.x=t.x,this.z=t.z,this.thrownAt=e,this.state="flying",this.droppedAt=0}get hasLanded(){return this.state!=="flying"}isOld(t){return this.droppedAt>0&&t-this.droppedAt>hy}carry(t,e,n){this.state="carried",this.mesh.position.set(t,e,n)}drop(t,e,n){this.state="lying",this.x=t,this.z=e,this.droppedAt=n}update(t,e){if(this.state==="carried")return;let n=0,i=this.x,s=this.z;if(this.state==="flying"){let r=t-this.thrownAt;if(e===0||r>=Oa+500)this.state="lying";else if(r<Oa){let a=r/Oa;i=this.from.x+(this.x-this.from.x)*a,s=this.from.z+(this.z-this.from.z)*a,n=1.2*(1-a)+6.4*a*(1-a)}else{let a=(r-Oa)/500;n=Math.abs(Math.sin(a*Math.PI*2))*0.2*(1-a)}}this.mesh.position.set(i,n+Bd,s)}}function ce(t,e,n,i,s,r,a){return{color:t,w:e,h:n,d:i,x:s,y:r,z:a}}function Ba(t){let e=new Yt(t,Ji);return e.castShadow=!0,e}class mc{species;id;root=new ie;body=new ie;head=new ie;tail=new ie;legs=[];dream;dreamMaterial;owned=[];random;size;path=[];mood="sleep";moodUntil=0;goal={x:0,z:0};x=0;z=0;yaw=0.6;presence=1;petter="";isGone=!1;name;said="";saidUntil=0;excitedUntil=0;errand="none";ball;ring;constructor(t,e,n){this.species=t;this.id=e;let i=qi(e);this.random=Da(i);let s=Number(e.split(":")[1])||0,r=ry[t];this.name=`${r[s%r.length]??t}${s>=r.length?` ${Math.floor(s/r.length)+1}`:""}`;let a=t==="cat"?iy:sy,o=a[i%a.length]??a[0];if(this.size=t==="cat"?0.95+this.random()*0.15:0.85+this.random()*0.45,t==="cat")this.buildCat(o);else this.buildDog(o,Od[(i>>>4)%Od.length]??"#e0564b");this.root.add(this.body),this.root.scale.setScalar(this.size),this.dreamMaterial=new Cn({map:Ua("zzz"),transparent:!0,depthWrite:!1}),this.dream=new Hn(this.dreamMaterial),this.dream.scale.set(0.26,0.24,1),this.dream.center.set(0.2,0),this.root.add(this.dream),this.ring=new Yt(oy,ly),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=0.024/this.size,this.ring.visible=!1,this.root.add(this.ring),this.moodUntil=n+5000+this.random()*20000}buildCat(t){let e=Ce([ce(t.fur,0.2,0.17,0.38,0,0.165,0),ce(t.shade,0.205,0.04,0.2,0,0.235,-0.02),ce(t.patch,0.12,0.08,0.06,0,0.13,0.17)]),n=Ce([ce(t.fur,0.06,0.09,0.06,0,-0.045,0)]),i=Ce([ce(t.fur,0.21,0.17,0.17,0,0,0),ce(t.shade,0.05,0.07,0.04,0.065,0.11,-0.02),ce(t.shade,0.05,0.07,0.04,-0.065,0.11,-0.02),ce(Fa,0.03,0.04,0.01,0.065,0.1,0),ce(Fa,0.03,0.04,0.01,-0.065,0.1,0),ce(t.patch,0.1,0.05,0.01,0,-0.04,0.086),ce(Fe,0.03,0.02,0.01,0.045,0.02,0.087),ce(Fe,0.03,0.02,0.01,-0.045,0.02,0.087),ce(Fa,0.025,0.02,0.01,0,-0.02,0.088)]),s=Ce([ce(t.shade,0.05,0.05,0.24,0,0,-0.11)]);this.assemble(e,n,i,s,{legY:0.09,legX:0.06,legZ:0.13,head:[0,0.25,0.2],tail:[0,0.2,-0.19]})}buildDog(t,e){let n=Ce([ce(t.fur,0.24,0.2,0.42,0,0.25,0),ce(t.shade,0.245,0.05,0.24,0,0.33,-0.04),ce(t.patch,0.16,0.12,0.05,0,0.22,0.2),ce(e,0.2,0.05,0.05,0,0.33,0.2)]),i=Ce([ce(t.fur,0.075,0.14,0.075,0,-0.07,0),ce(t.patch,0.08,0.03,0.08,0,-0.125,0.005)]),s=Ce([ce(t.fur,0.22,0.2,0.2,0,0,0),ce(t.patch,0.13,0.09,0.12,0,-0.05,0.14),ce(Fe,0.05,0.035,0.02,0,-0.02,0.205),ce(Fe,0.035,0.035,0.01,0.055,0.04,0.101),ce(Fe,0.035,0.035,0.01,-0.055,0.04,0.101),ce(t.shade,0.05,0.15,0.1,0.13,-0.01,-0.02),ce(t.shade,0.05,0.15,0.1,-0.13,-0.01,-0.02),ce(Fa,0.04,0.05,0.01,0,-0.1,0.17)]),r=Ce([ce(t.fur,0.05,0.05,0.2,0,0,-0.09)]);this.assemble(n,i,s,r,{legY:0.14,legX:0.07,legZ:0.14,head:[0,0.42,0.24],tail:[0,0.32,-0.2]})}assemble(t,e,n,i,s){this.owned.push(t,e,n,i),this.body.add(Ba(t));for(let[r,a]of[[s.legX,s.legZ],[-s.legX,s.legZ],[s.legX,-s.legZ],[-s.legX,-s.legZ]]){let o=Ba(e);o.position.set(r,s.legY,a),this.legs.push(o),this.body.add(o)}this.head.position.set(...s.head),this.head.add(Ba(n)),this.body.add(this.head),this.tail.position.set(...s.tail),this.tail.add(Ba(i)),this.body.add(this.tail)}get isLeaving(){return this.mood==="leave"}get isStill(){return this.path.length===0&&this.errand==="none"&&(this.mood==="sleep"||this.mood==="sit")}get height(){return(this.species==="dog"?0.55:0.4)*this.size}get isPresent(){return this.presence>0.5}hitBox(t){return this.root.updateMatrixWorld(!0),t.setFromObject(this.body).expandByScalar(0.04)}setRing(t){this.ring.visible=t}say(t,e){this.said=t,this.saidUntil=e+ay}poke(t){if(this.isLeaving)return;let{now:e}=t;if(this.say(Ls[this.species][Math.floor(this.random()*Ls[this.species].length)]??"",e),this.errand!=="none"||this.x>Ut.inside.x)return;this.path=[],this.mood="sit",this.moodUntil=e+6000+this.random()*4000,this.excitedUntil=e+1600}call(t,e){if(this.isLeaving)return!1;if(this.species==="cat"&&this.random()<0.3)return this.say("…",e.now),!1;return this.letGoOfBall(e.now),this.errand="come",this.send(e.nav.nearestPoint(t),e),!0}fetch(t,e){if(this.isLeaving||this.species!=="dog")return;this.letGoOfBall(e.now),this.ball=t,this.errand="fetch",this.say(Ls.dog[0]??"",e.now),this.send(e.nav.nearestPoint(t),e)}send(t,e){if(this.excitedUntil=0,this.petter="",this.goal=t,this.mood="walk",e.motion===0){this.x=t.x,this.z=t.z,this.path=[];return}this.path=e.nav.path(this,t)}letGoOfBall(t){if(this.ball?.state==="carried")this.ball.drop(this.x+Math.sin(this.yaw)*0.35*this.size,this.z+Math.cos(this.yaw)*0.35*this.size,t);this.ball=void 0}arrive(t){let{now:e}=t;switch(this.errand){case"fetch":{let n=this.ball;if(n===void 0||n.state==="carried"){this.errand="none";break}if(!n.hasLanded)return;n.state="carried",this.errand="bring",this.send(t.bringBack(this),t);return}case"bring":this.letGoOfBall(e),this.errand="none",this.mood="sit",this.moodUntil=e+6000,this.excitedUntil=e+1400,this.say(Ls.dog[2]??"",e);return;case"come":this.errand="none",this.mood="sit",this.moodUntil=e+7000+this.random()*4000,this.excitedUntil=e+1200,this.say(Ls[this.species][Math.floor(this.random()*Ls[this.species].length)]??"",e);return;case"none":break}this.choose(t)}enter(t,e){let i=(this.species==="cat"?t.freeBed(this):t.floorPoint(this.random))??t.floorPoint(this.random);if(e&&t.motion>0){this.x=Ut.outside.x,this.z=Ut.outside.z,this.yaw=-Math.PI/2,this.presence=0,this.goal=i,this.path=[Ut.inside,...t.nav.path(Ut.inside,i)],this.mood="walk",this.moodUntil=0;return}this.x=i.x,this.z=i.z,this.goal=i,this.mood=this.species==="cat"?"sleep":"sit"}leave(t){if(this.mood==="leave")return;if(this.letGoOfBall(t.now),this.mood="leave",this.errand="none",this.excitedUntil=0,this.petter="",t.motion===0){this.isGone=!0;return}this.path=this.x>be?[Ut.outside]:[...t.nav.path(this,Ut.inside),Ut.outside]}pettingPlace(t){if(!this.isStill)return;for(let e of[Math.PI/2,-Math.PI/2,0,Math.PI]){let n=this.species==="cat"?0.5:0.58,i=this.x+Math.sin(this.yaw+e)*n,s=this.z+Math.cos(this.yaw+e)*n;if(t.isFree({x:i,z:s}))return{x:i,z:s,yaw:Math.atan2(this.x-i,this.z-s)}}return}choose(t){let{now:e}=t;if(this.species==="cat"){if(this.mood==="walk"||this.mood==="sit"||this.path.length>0){this.mood="sleep",this.moodUntil=e+40000+this.random()*50000;return}let s=t.freeBed(this);if(s===void 0){this.moodUntil=e+20000;return}this.goal=s,this.path=t.nav.path(this,s),this.mood="walk";return}if(this.mood==="walk"){this.mood=this.random()<0.3?"sleep":"sit",this.moodUntil=e+(this.mood==="sleep"?15000+this.random()*25000:4000+this.random()*8000);return}let i=(this.random()<0.45?t.besideResting(this.random):void 0)??t.floorPoint(this.random);this.goal=i,this.path=t.nav.path(this,i),this.mood="walk"}update(t,e,n){let{now:i,motion:s}=n,r=i<this.excitedUntil;if(this.mood!=="leave"&&this.path.length===0&&!r){if(this.errand!=="none")this.arrive(n);else if((s>0||this.species==="cat"&&this.mood==="sit")&&this.petter===""&&i>=this.moodUntil)this.choose(n)}let a=this.path.length>0&&!r;if(a){let l=(this.errand==="none"?this.species==="dog"?1.25:0.75:this.species==="dog"?2.3:1.1)*t*(this.mood==="leave"?1.2:1);while(l>0&&this.path.length>0){let c=this.path[0],h=c.x-this.x,d=c.z-this.z,u=Math.hypot(h,d);if(u>0.0001){let p=Math.atan2(h,d)-this.yaw;p=Math.atan2(Math.sin(p),Math.cos(p)),this.yaw+=p*(1-Math.exp(-t*9))}if(u<=l)this.x=c.x,this.z=c.z,this.path.shift(),l-=u;else this.x+=h/u*l,this.z+=d/u*l,l=0}if(this.path.length===0&&this.mood!=="leave")this.arrive(n)}if(this.ball?.state==="carried"){let o=(this.species==="dog"?0.38:0.3)*this.size;this.ball.carry(this.x+Math.sin(this.yaw)*o,0.36*this.size,this.z+Math.cos(this.yaw)*o)}if(this.mood==="leave"&&this.path.length===0){if(this.presence=Math.max(0,this.presence-t*3),this.presence<=0)this.isGone=!0}else if(this.presence<1)this.presence=Math.min(1,this.presence+t*3);this.pose(t,e,s,a,r),this.root.position.set(this.x,0,this.z),this.root.rotation.y=this.yaw,this.root.scale.setScalar(this.size*Math.max(0.001,this.presence))}pose(t,e,n,i,s){let r=1-Math.exp(-t*6),a=Math.sin(e*(this.species==="dog"?13:10))*n,o=!i&&!s&&this.mood==="sleep",l=!i&&!s&&this.mood==="sit",c=this.petter!=="",h=o?0.6:1;this.body.scale.y+=(h-this.body.scale.y)*r;let d=l&&this.species==="dog"?-0.35:0;this.body.rotation.x+=(d-this.body.rotation.x)*r;let u=s?Math.abs(Math.sin(e*(this.species==="dog"?11:6)))*(this.species==="dog"?0.09:0.04)*n:0;if(this.body.position.y=(i?Math.abs(a)*0.015:0)+u,this.legs.forEach((p,x)=>{p.rotation.x=i?(x%3===0?a:-a)*0.55:0,p.visible=!o||this.species==="dog"}),s){let p=(this.species==="dog"?1.2:0.3)*Math.sin(e*(this.species==="dog"?24:5))*n;this.tail.rotation.set(this.species==="dog"?-0.8:-1.1,p,0),this.head.rotation.set(-0.25,0,this.species==="cat"?0.3*Math.sin(e*3)*n:0)}else if(o)this.head.rotation.set(0.35+0.03*Math.sin(e*1.2)*n,0.5,0),this.tail.rotation.set(0,this.species==="cat"?1.2+0.1*Math.sin(e*0.8)*n:0.6,0);else if(this.species==="dog"){let p=(c?1.1:i?0.5:0.7)*Math.sin(e*(c?22:14))*n;this.tail.rotation.set(-0.7,p,0),this.head.rotation.set(l?0.2:0,i?0:0.4*Math.sin(e*0.7+this.size*9)*n,c?0.2:0)}else this.tail.rotation.set(i?-0.5:-0.2,0.35*Math.sin(e*4)*n,0),this.head.rotation.set(0,c?0.25*Math.sin(e*2)*n:0,c?0.25:0);this.dream.visible=o&&!c,this.dream.position.y=(this.species==="dog"?0.45:0.38)+0.03*Math.sin(e*1.5)*n}dispose(){this.dreamMaterial.dispose();for(let t of this.owned)t.dispose()}}var gr="#f3e2c3",za="#e8d2ab",gc="#b98557",uy="#ecd6ae",dy="#8a623f",Ns="#8a623f",pe="#6b4a32",zd="#3e2c20",Zd="#2f3b36",li="#f4f1e6",_c="#b9c0c7",fy="#dfe4e8",Ki="#59616b",Qe="#fbf7ee",Ha="#3c3a39",yc="#c9995f",Pn="#e2b684",Jd="#9a6c41",vc="#5b4030",Sc="#735241",Hd="#d97757",bc=["#4d8f4a","#3f7d3d","#5aa356"],kd=["#3f6fb0","#a8452f","#3d8f5a","#7b5aa6","#c48a2a","#2f6f6a","#d27aa8","#e0a03a","#59616b"],Gd=["#ffd84d","#f0a58c","#9ec5e8","#8fd18f","#fbf7ee"],Vd=["#9b3d2e","#2f6f6a","#5d4a8f","#8a6d1f"],Wd="#8fd18f",py="#ffd84d",my="#b9bbbf";function Xd(t){let e=t;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function gy(){let t=new xn,e=Yi-0.05;t.box(Sc,0.42,0.05,0.42,0,Yi-0.05,0);for(let[n,i]of[[0.17,0.17],[-0.17,0.17],[0.17,-0.17],[-0.17,-0.17]])t.box(vc,0.045,e,0.045,n,0,i);return t.box(vc,0.42,0.28,0.05,0,Yi,-0.19),t.box(Sc,0.44,0.045,0.07,0,Yi+0.28,-0.19),t.geometry()}var Pe=new zi(1,1,1,14),qd=new zi(0.25,1,1,12),Yd=new zi(1,0.72,1,12),_y=new Hi(1,0);class Kd{index;chairs;table=new ie;decor;top;edge;apron;legs=[];rug;columns=1;target=1;shown=0;constructor(t,e){this.index=t;this.chairs=e;this.top=new Yt(_n,Xn(yc)),this.edge=new Yt(_n,Xn(Pn)),this.apron=new Yt(_n,Xn(Jd));for(let s=0;s<4;s+=1)this.legs.push(new Yt(_n,Xn(pe)));this.rug=new Yt(_n,Xn("#a0806a")),this.rug.receiveShadow=!0;for(let s of[this.top,this.edge,this.apron,...this.legs])s.castShadow=!0,s.receiveShadow=!0,this.table.add(s);this.table.add(this.rug),this.table.visible=!1;let n=Ps(t),i=new xn;i.add(yc,Pe,n.x,$e-0.02,n.z,0,n.r,0.04,n.r),i.add(Pn,Pe,n.x,$e+0.002,n.z,0,n.r-0.04,0.004,n.r-0.04),i.add(pe,Pe,n.x,($e-0.04)/2,n.z,0,0.05,$e-0.04,0.05),i.add(pe,Pe,n.x,0.015,n.z,0,0.24,0.03,0.24),i.add("#9ec5e8",Pe,n.x+0.08,$e+0.07,n.z-0.05,0,0.04,0.12,0.04),i.box(bc[0]??"#4d8f4a",0.02,0.1,0.02,n.x+0.08,$e+0.12,n.z-0.05),i.box(["#ffd84d","#f0a58c","#d27aa8"][t%3]??"#ffd84d",0.07,0.07,0.07,n.x+0.08,$e+0.21,n.z-0.05),i.box(Qe,0.08,0.08,0.08,n.x-0.12,$e,n.z+0.08),this.decor=i.build(),this.place(1),this.setChairs()}use(t,e){let n=this.shown===0;if(this.shown=t,this.table.visible=t>0,this.decor.visible=t===0,t===0){this.setChairs();return}if(n){let i=new Ot(Vd[e%Vd.length]??"#9b3d2e").lerp(new Ot("#c79a6c"),0.45);this.rug.material=Xn(`#${i.getHexString()}`),this.columns=t,this.place(t)}this.target=t,this.setChairs()}update(t,e){if(Math.abs(this.target-this.columns)<0.001)return;let n=e>0?1-Math.exp(-t*6):1;if(this.columns+=(this.target-this.columns)*n,Math.abs(this.target-this.columns)<0.005)this.columns=this.target;this.place(this.columns)}place(t){let e=fr(this.index,t),n=(e.x0+e.x1)/2,i=(e.z0+e.z1)/2,s=e.x1-e.x0,r=e.z1-e.z0;this.top.scale.set(s,0.05,r),this.top.position.set(n,$e-0.025,i),this.edge.scale.set(s-0.06,0.008,r-0.06),this.edge.position.set(n,$e+0.002,i),this.apron.scale.set(s-0.1,0.08,r-0.1),this.apron.position.set(n,$e-0.09,i);let a=$e-0.05;this.legs.forEach((l,c)=>{l.scale.set(0.07,a,0.07),l.position.set(c%2===0?e.x0+0.08:e.x1-0.08,a/2,c<2?e.z0+0.08:e.z1-0.08)});let o=Ia(this.index,t);this.rug.scale.set(o.x1-o.x0,0.012,o.z1-o.z0),this.rug.position.set((o.x0+o.x1)/2,0.006,(o.z0+o.z1)/2)}setChairs(){let t=new Kt,e=new qe,n=new P(0,1,0),i=this.index*(si+2);for(let s=0;s<si;s+=1){let r=Ca(this.index,s),a=this.shown>0&&ec(s)<this.shown;e.setFromAxisAngle(n,r.yaw),t.compose(new P(r.x,0,r.z),e,new P().setScalar(a?1:0)),this.chairs.setMatrixAt(i+s,t)}Na(this.index).forEach((s,r)=>{e.setFromAxisAngle(n,s.yaw),t.compose(new P(s.x,0,s.z),e,new P().setScalar(this.shown===0?1:0)),this.chairs.setMatrixAt(i+si+r,t)}),this.chairs.instanceMatrix.needsUpdate=!0,this.chairs.computeBoundingSphere()}}class Mc{title;root=new ie;slots=[];walls=[];door=new ie;steam=[];hourHand=new ie;minuteHand=new ie;tally;tallyKey="";doorAngle=0;constructor(t){this.title=t;this.root.add(this.floor()),this.tally=ai(640,256,()=>{return}),this.backWall(),this.leftWall(),this.rightWall(),this.root.add(this.furniture()),this.lamps(),this.lights();let e=new oa(gy(),Ji,ii*(si+2));e.castShadow=!0,e.receiveShadow=!0,e.frustumCulled=!1,this.root.add(e);for(let n=0;n<ii;n+=1){let i=new Kd(n,e);this.slots.push(i),this.root.add(i.table,i.decor)}this.setTally(0,0,0)}setTally(t,e,n){let i=`${t}|${e}|${n}`;if(i===this.tallyKey)return;this.tallyKey=i;let s=this.tally.image,r=s.getContext("2d");if(r===null)return;r.fillStyle=Zd,r.fillRect(0,0,s.width,s.height),r.fillStyle="rgba(255,255,255,0.04)";for(let o=0;o<18;o+=1)r.fillRect(o*97%600,o*53%230,60,3);r.fillStyle=li,r.textAlign="center",r.textBaseline="middle",r.font='700 58px ui-rounded, "Arial Rounded MT Bold", system-ui, sans-serif',r.fillText(this.title.toUpperCase(),s.width/2,70),r.fillStyle="rgba(244,241,230,0.45)",r.fillRect(60,118,s.width-120,3);let a=[[Wd,t],[py,e],[my,n]];r.font='700 64px ui-rounded, "Arial Rounded MT Bold", system-ui, sans-serif',a.forEach(([o,l],c)=>{let h=s.width*(2*c+1)/6;r.fillStyle=o,r.fillRect(h-62,162,36,36),r.fillStyle=li,r.textAlign="left",r.fillText(String(l),h-12,182)}),this.tally.needsUpdate=!0}update(t,e,n,i,s){for(let l of this.walls)l.group.visible=i.clone().sub(l.point).dot(l.normal)>0;let r=s?1.25:0;this.doorAngle+=(r-this.doorAngle)*(n>0?1-Math.exp(-t*5):1),this.door.rotation.y=this.doorAngle,this.steam.forEach((l,c)=>{let h=((e*0.55+c/this.steam.length)%1+1)%1;l.position.y=1.62+h*0.6*n,l.material.opacity=n>0?0.55*(1-h):0,l.scale.setScalar(0.14+h*0.18)});let a=new Date,o=a.getMinutes()+a.getSeconds()/60;this.minuteHand.rotation.z=-(o/60)*Math.PI*2,this.hourHand.rotation.z=-((a.getHours()%12+o/60)/12)*Math.PI*2;for(let l of this.slots)l.update(t,n)}floor(){let t=new ie,e=Ed();e.repeat.set(ni/4,Aa/4);let n=new Yt(new bi(ni,Aa),new Mi({map:e}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);let i=new xn;return i.box(zd,ni+0.4,0.45,Aa+0.4,0,-0.5,0),i.box(pe,ni+0.44,0.06,0.06,0,-0.09,Se+0.2),i.box("#a7a29a",1.9,0.12,1.8,be+1.05,-0.121,Ut.z),i.box("#8f8a83",1.9,0.02,0.06,be+1.05,-0.002,Ut.z+0.9),i.box("#8a6d1f",0.62,0.012,0.95,be-0.45,0,Ut.z),t.add(i.build(!1,!1,!0)),t}wall(t,e,n){let i=new ie,s=new xn;n(s,i),i.add(s.build(!1,!1,!0)),this.root.add(i),this.walls.push({group:i,point:e,normal:t})}plane(t,e,n,i,s,r,a,o=!1){let l=new Yt(new bi(e,n),o?new Ke({map:t}):new Mi({map:t}));return l.position.set(i,s,r),l.rotation.y=a,l.receiveShadow=!o,l}backWall(){let t=-Se;this.wall(new P(0,0,1),new P(0,0,t),(e,n)=>{e.box(gr,ni+0.4,gn,0.2,0,0,t-0.1),e.box(za,ni,0.95,0.03,0,0,t+0.015),e.box(gc,ni,0.05,0.06,0,0.93,t+0.03),e.box(pe,ni+0.44,0.16,0.26,0,gn-0.12,t-0.07),e.box(pe,3.1,1.3,0.06,-2.6,1.5,t+0.03),n.add(this.plane(this.tally,2.94,1.14,-2.6,2.15,t+0.065,0)),e.box(pe,3,0.05,0.12,-2.6,1.46,t+0.06),e.box(li,0.14,0.03,0.03,-1.6,1.51,t+0.08),e.box(pe,1.6,1.05,0.06,0.95,1.62,t+0.03),n.add(this.plane(xy(),1.48,0.93,0.95,2.145,t+0.065,0));let i=[Qe,Hd,Qe,"#2f6f6a",Qe,Qe,"#e0a03a",Qe];for(let s of[1.85,2.4])e.box(Ns,2.3,0.04,0.24,4.95,s,t+0.12),e.box(pe,0.04,0.14,0.2,3.95,s-0.14,t+0.1),e.box(pe,0.04,0.14,0.2,5.95,s-0.14,t+0.1),i.forEach((r,a)=>e.box(r,0.12,0.13,0.12,4+a*0.27,s+0.04,t+0.13));e.box(Pn,1.05,1.35,0.05,-7.4,1.2,t+0.025),n.add(this.plane(yy(),0.93,1.23,-7.4,1.875,t+0.055,0)),e.add(pe,Pe,8.3,2.25,t+0.03,0,0.34,0.05,0.34,Math.PI/2),e.add(Qe,Pe,8.3,2.25,t+0.06,0,0.3,0.02,0.3,Math.PI/2);for(let s=0;s<12;s+=1){let r=s/12*Math.PI*2;e.box(Fe,0.03,s%3===0?0.06:0.03,0.01,8.3+Math.sin(r)*0.24,2.25+Math.cos(r)*0.24-0.02,t+0.075)}for(let[s,r,a]of[[this.hourHand,0.15,0.035],[this.minuteHand,0.23,0.025]]){s.position.set(8.3,2.25,t+(s===this.hourHand?0.085:0.097));let o=new Yt(_n,Xn(Fe));o.scale.set(a,r,0.01),o.position.y=r/2-0.02,s.add(o),n.add(s)}e.box(pe,11.4,0.14,0.14,0.9,gn-0.3,-5.75)})}leftWall(){let t=-be;this.wall(new P(1,0,0),new P(t,0,0),(e)=>{let n=-Se,i=Se+0.2;e.box(gr,0.2,gn,i-n,t-0.1,0,(n+i)/2),e.box(za,0.03,0.95,Se-n-0.03,t+0.015,0,(n+0.03+Se)/2),e.box(gc,0.06,0.05,Se+0.01-(n+0.06),t+0.03,0.93,(n+0.06+Se+0.01)/2),e.box(pe,0.26,0.16,i+0.02-(n+0.06),t-0.07,gn-0.12,(n+0.06+i+0.02)/2);let[s,r]=ud,a=(s+r)/2;e.box(pe,0.05,1.05,r-s+0.1,t+0.025,1.05,a),e.box("#c8a27a",0.03,0.93,r-s-0.02,t+0.05,1.11,a);let o=Xd(31);for(let l=0;l<9;l+=1){let c=s+0.15+o()*(r-s-0.3),h=1.2+o()*0.65;e.box(Gd[l%Gd.length]??"#ffd84d",0.012,0.17,0.17,t+0.07+l*0.003,h,c),e.box("#e0564b",0.02,0.025,0.025,t+0.09+l*0.003,h+0.13,c)}e.box(Pn,0.05,0.8,1.1,t+0.025,1.45,4.9),e.box("#2f6f6a",0.02,0.68,0.98,t+0.05,1.51,4.9),e.box("#ffd84d",0.02,0.2,0.2,t+0.065,1.95,4.9),e.box(li,0.02,0.04,0.6,t+0.065,1.72,4.9),e.box(li,0.02,0.04,0.45,t+0.065,1.62,4.9)})}rightWall(){let t=be,e=Ut.z-Ut.width/2,n=Ut.z+Ut.width/2,i=2.15;this.wall(new P(-1,0,0),new P(t,0,0),(s,r)=>{let a=-Se,o=Se+0.2;s.box(gr,0.2,gn,e-a,t+0.1,0,(a+e)/2),s.box(gr,0.2,gn,o-n,t+0.1,0,(n+o)/2),s.box(gr,0.2,gn-2.15,Ut.width,t+0.1,2.15,Ut.z),s.box(za,0.03,0.95,e-0.1-(a+0.03),t-0.015,0,(a+0.03+e-0.1)/2),s.box(za,0.03,0.95,Se-(n+0.1),t-0.015,0,(n+0.1+Se)/2),s.box(pe,0.26,0.16,o+0.02-(a+0.06),t+0.07,gn-0.12,(a+0.06+o+0.02)/2);let l=vy();for(let[d,u]of dd){let p=(d+u)/2,x=u-d;r.add(this.plane(l,0.01+x-0.12,1.28,t-0.012,1.74,p,-Math.PI/2,!0)),s.box(Pn,0.08,0.07,x+0.06,t-0.04,2.38,p),s.box(Pn,0.14,0.06,x+0.16,t-0.07,1.04,p),s.box(Pn,0.09,1.36,0.07,t-0.045,1.06,d),s.box(Pn,0.09,1.36,0.07,t-0.045,1.06,u),s.box(Pn,0.05,1.3,0.04,t-0.03,1.08,p),s.box(Pn,0.06,0.04,x,t-0.035,1.72,p)}s.box(pe,0.28,2.1999999999999997,0.1,t+0.05,0,e-0.03),s.box(pe,0.28,2.1999999999999997,0.1,t+0.05,0,n+0.03),s.box(pe,0.27,0.1,Ut.width+0.2,t+0.04,2.13,Ut.z),this.door.position.set(t+0.12,0,e+0.01);let c=new xn;c.box(Ns,0.06,2.13,Ut.width-0.03,0,0,(Ut.width-0.03)/2),c.box(pe,0.07,0.05,Ut.width-0.15,0,0.5,(Ut.width-0.03)/2),c.box(_c,0.1,0.04,0.12,-0.05,1,Ut.width-0.16),c.box(Qe,0.075,0.24,0.5,0,1.25,(Ut.width-0.03)/2),c.box(Wd,0.08,0.06,0.3,0,1.33,(Ut.width-0.03)/2),this.door.add(c.build());let h=new xn;h.box("#bfe3f2",0.07,0.42,0.62,0,1.55,(Ut.width-0.03)/2),this.door.add(h.build(!0)),r.add(this.door)})}furniture(){let t=new xn,e=Xd(11),n=(on.x0+on.x1)/2,i=(on.z0+on.z1)/2,s=on.x1-on.x0,r=on.z1-on.z0;t.box(zd,s-0.04,0.08,r-0.06,n,0,i),t.box(dy,s,pr-0.08,r,n,0.06,i),t.box(uy,s+0.1,0.07,r+0.12,n,pr-0.07,i+0.04),t.box(gc,s+0.1,0.03,0.04,n,pr-0.1,on.z1+0.09);for(let g=on.x0+0.45;g<on.x1;g+=0.9)t.box(pe,0.03,0.8,0.02,g,0.1,on.z1+0.005);let a=pr,o=5.3,l=-6.45;t.box(_c,0.85,0.5,0.5,o,a,l),t.box(fy,0.86,0.03,0.51,o,a+0.5,l);for(let g=0;g<3;g+=1)t.box(Qe,0.1,0.09,0.1,o-0.25+g*0.25,a+0.53,l);t.box("#2f343b",0.24,0.16,0.02,o-0.22,a+0.26,l+0.255),t.box("#e0564b",0.05,0.04,0.02,o-0.22,a+0.3,l+0.265),t.box(Ki,0.11,0.08,0.14,o+0.08,a+0.12,l+0.3),t.box(Ki,0.11,0.08,0.14,o+0.3,a+0.12,l+0.3),t.box(Ki,0.6,0.03,0.2,o+0.1,a,l+0.33),t.box(Qe,0.08,0.07,0.08,o+0.08,a+0.03,l+0.32),t.box(Qe,0.08,0.07,0.08,o+0.3,a+0.03,l+0.32),t.box(Ki,0.24,0.32,0.26,4.4,a,l),t.add("#6b4a32",Yd,4.4,a+0.44,l,0,0.13,0.24,0.13),t.box(Pn,1.2,0.06,0.55,2.2,a,-6.35);for(let[g,S]of["#f0a58c","#8a623f","#e9c46a","#d27aa8"].entries())t.box(Qe,0.2,0.02,0.2,1.8+g*0.27,a+0.06,-6.35),t.box(S,0.15,0.1,0.15,1.8+g*0.27,a+0.08,-6.35),t.box(Qe,0.15,0.02,0.15,1.8+g*0.27,a+0.18,-6.35);t.box(Ha,0.38,0.2,0.3,-1.5,a,-6.4),t.box(Ha,0.3,0.2,0.05,-1.5,a+0.24,-6.48),t.box("#cfd8ea",0.24,0.13,0.01,-1.5,a+0.28,-6.45);for(let g=0;g<3;g+=1)t.add("#e8d5a8",Pe,-3.7+g*0.3,a+0.13,-6.4,0,0.09,0.26,0.09),t.add(Ns,Pe,-3.7+g*0.3,a+0.28,-6.4,0,0.095,0.04,0.095);for(let g=0;g<4;g+=1)t.box(Qe,0.13,0.08,0.13,0.3,a+g*0.085,-6.35);t.box(Hd,0.2,0.2,0.2,-4.25,a,-6.4),xc(t,-4.25,a+0.35,-6.4,0.16,e);let c=(je.x0+je.x1)/2,h=(je.z0+je.z1)/2,d=je.z1-je.z0;t.box(vc,0.03,Zi-0.01,d-0.1,je.x0+0.02,0,h),t.box(pe,0.45,Zi,0.05,c,0,je.z0+0.025),t.box(pe,0.45,Zi,0.05,c,0,je.z1-0.025);for(let g of[0.04,0.55,1.05,1.55,2.05]){if(t.box(Ns,0.435,0.04,d-0.1,c+0.0025,g,h),g>2)continue;let S=je.z0+0.07;while(S<je.z1-0.12){let G=0.05+e()*0.07,I=0.26+e()*0.16;if(e()<0.08){S+=G+0.08;continue}t.box(kd[Math.floor(e()*kd.length)]??"#3f6fb0",0.3,I,G-0.006,c+0.03,g+0.04,S+G/2),S+=G}}t.box(pe,0.47,0.05,d,c,Zi,h),t.box("#b5653a",0.18,0.16,0.18,c,Zi+0.05,je.z0+0.4),xc(t,c,Zi+0.32,je.z0+0.4,0.14,e);let u=(ri.x0+ri.x1)/2,p=(ri.z0+ri.z1)/2;t.box("#2f6f6a",0.8,0.3,0.8,u,0.03,p),t.box("#3a8580",0.6,0.08,0.62,u+0.08,0.3,p),t.box("#2f6f6a",0.18,0.8,0.78,ri.x0+0.09,0.03,p),t.box("#28605b",0.835,0.52,0.13,u+0.0125,0.03,ri.z0+0.055),t.box("#28605b",0.835,0.52,0.13,u+0.0125,0.03,ri.z1-0.055);let x=(Vn.x0+Vn.x1)/2,M=(Vn.z0+Vn.z1)/2;t.add(Ns,Pe,x,0.55,M,0,0.22,0.03,0.22),t.add(pe,Pe,x,0.27,M,0,0.03,0.54,0.03),t.add(pe,Pe,x,0.01,M,0,0.14,0.02,0.14),t.add(Ha,Pe,x,0.62,M,0,0.06,0.1,0.06),t.add(Ki,Pe,x,0.75,M,0,0.012,0.2,0.012);let m=(we.x0+we.x1)/2,f=(we.z0+we.z1)/2,E=we.z1-we.z0;t.box("#a8523e",0.85,0.3,E,m,0.03,f);for(let g of[1.95,2.7,3.45])t.box("#bf6650",0.6,0.1,0.72,m+0.13,0.3,g);t.box("#a8523e",0.22,0.82,E-0.02,we.x0+0.11,0.03,f),t.box("#934634",0.875,0.52,0.16,m+0.0075,0.03,we.z0+0.07),t.box("#934634",0.875,0.52,0.16,m+0.0075,0.03,we.z1-0.07),t.add("#ffd84d",_n,we.x0+0.3,0.52,we.z1-0.38,0.3,0.1,0.3,0.3);for(let[g,S]of[[we.x0+0.08,we.z0+0.08],[we.x1-0.08,we.z0+0.08],[we.x0+0.08,we.z1-0.08],[we.x1-0.08,we.z1-0.08]])t.box(pe,0.06,0.03,0.06,g,0,S);let R=(ze.x0+ze.x1)/2,v=(ze.z0+ze.z1)/2;t.box(Ns,ze.x1-ze.x0,0.04,ze.z1-ze.z0,R,0.32,v);for(let[g,S]of[[ze.x0+0.05,ze.z0+0.05],[ze.x1-0.05,ze.z0+0.05],[ze.x0+0.05,ze.z1-0.05],[ze.x1-0.05,ze.z1-0.05]])t.box(pe,0.05,0.32,0.05,g,0,S);t.box("#3f6fb0",0.22,0.04,0.3,R,0.36,v-0.2,0.3),t.box(Qe,0.09,0.09,0.09,R+0.05,0.36,v+0.22);let T=(Wn.x0+Wn.x1)/2,A=(Wn.z0+Wn.z1)/2,w=Wn.z1-Wn.z0;t.box(Jd,0.4,nc-0.05,w-0.1,T+0.02,0,A),t.box(yc,Wn.x1-Wn.x0+0.06,0.06,w,T-0.03,nc-0.05,A);for(let g of La){if(g.kind!=="bar")continue;t.add(Sc,Pe,g.x,g.sit-0.03,g.z,0,0.18,0.06,0.18),t.add(Ki,Pe,g.x,(g.sit-0.06)/2,g.z,0,0.03,g.sit-0.06,0.03),t.add(Ki,Pe,g.x,0.01,g.z,0,0.15,0.02,0.15),t.add(_c,Pe,g.x,0.22,g.z,0,0.13,0.015,0.13)}for(let g of[...ic,{x:be+1.65,z:Ut.z+0.6}])t.add("#b5653a",Yd,g.x,0.19,g.z,0,0.21,0.38,0.21),t.add("#5b4030",Pe,g.x,0.385,g.z,0,0.17,0.03,0.17),t.add("#6b4a32",Pe,g.x,0.6,g.z,0,0.025,0.5,0.025),xc(t,g.x,0.75,g.z,0.3,e);return t.build()}lamps(){let t=new xn,e=new xn;for(let r of[-2.6,0.9,4.4])t.box(Fe,0.02,0.52,0.02,r,2.18,-5.75),t.add(Ha,qd,r,2.12,-5.75,0,0.28,0.24,0.28),e.box("#ffe9a8",0.12,0.08,0.12,r,1.96,-5.75);let n=(Vn.x0+Vn.x1)/2,i=(Vn.z0+Vn.z1)/2;e.add("#ffe2a8",qd,n,0.92,i,0,0.15,0.18,0.15),this.root.add(t.build(),e.build(!0));let s=ai(64,64,(r)=>{let a=r.createRadialGradient(32,32,2,32,32,30);a.addColorStop(0,"rgba(255,255,255,0.9)"),a.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=a,r.fillRect(0,0,64,64)});for(let r=0;r<4;r+=1){let a=new Hn(new Cn({map:s,transparent:!0,depthWrite:!1}));a.position.set(5.1+r%2*0.25,1.7,-6.45),this.steam.push(a),this.root.add(a)}}lights(){this.root.add(new fa("#fff6ea","#8a6a4a",1.5));let t=new _a("#fff0d6",2.1);t.position.set(9,15,7),t.target.position.set(0,0,-0.5),t.castShadow=!0,t.shadow.mapSize.set(2048,2048);let e=15;t.shadow.camera.left=-e,t.shadow.camera.right=e,t.shadow.camera.top=e,t.shadow.camera.bottom=-e,t.shadow.camera.near=1,t.shadow.camera.far=45,t.shadow.bias=-0.0004,t.shadow.normalBias=0.02,this.root.add(t,t.target);for(let n of[-1.2,3.6]){let i=new ga("#ffc875",5,9,1.6);i.position.set(n,2,-5.5),this.root.add(i)}}}function xc(t,e,n,i,s,r){for(let a=0;a<4;a+=1){let o=a*1.7+r(),l=a===0?0:s*0.7,c=s*(0.7+r()*0.4);t.add(bc[a%bc.length]??"#4d8f4a",_y,e+Math.sin(o)*l,n+(a===0?s*0.9:r()*s*0.6),i+Math.cos(o)*l,r()*3,c,c*1.1,c)}}function xy(){return ai(296,186,(t)=>{t.fillStyle=Zd,t.fillRect(0,0,296,186);let e=[".a.a...","..a.a..",".......","#####..","#ccc###","#ccc#.#",".###..."];[{"#":li,a:"#b4bdb6",c:"#8a623f"},{"#":li,a:"#b4bdb6",c:"#e9c46a"},{"#":li,a:"#b4bdb6",c:"#8fd18f"}].forEach((i,s)=>{Is(t,e,i,26,20+s*56,5),t.fillStyle="rgba(244,241,230,0.75)",t.fillRect(76,42+s*56,120,4),t.fillRect(76,52+s*56,70,3),t.fillStyle=li,t.fillRect(222,36+s*56,8,22),t.fillRect(236,36+s*56,22,6),t.fillRect(236,52+s*56,22,6)})},!0)}function yy(){return ai(186,246,(t)=>{t.fillStyle="#f7f0e1",t.fillRect(0,0,186,246),t.fillStyle="#e9a34f",t.fillRect(0,170,186,76),Is(t,["...a...a....","....a...a...","...a...a....","............","#########...","#ccccccc####","#ccccccc#..#","#ccccccc#..#","#ccccccc####",".#ccccc#....","..#####....."],{"#":Fe,c:"#d97757",a:"#b4bdb6"},33,60,11),t.fillStyle=Fe,t.fillRect(30,196,126,8),t.fillRect(54,214,78,6)},!0)}function vy(){return ai(256,160,(t)=>{let e=t.createLinearGradient(0,0,0,160);e.addColorStop(0,"#9fd3ee"),e.addColorStop(0.75,"#e6f4f3"),t.fillStyle=e,t.fillRect(0,0,256,160),t.fillStyle="rgba(255,255,255,0.85)",t.fillRect(30,30,60,12),t.fillRect(46,22,30,10),t.fillRect(160,50,54,10),t.fillStyle="#7fb79a";for(let n=0;n<256;n+=22)t.fillRect(n,112-n*7%20,26,60);t.fillStyle="#5e9a7c";for(let n=11;n<256;n+=30)t.fillRect(n,128-n*5%14,22,40)})}class Ec{layer;tags=new Map;constructor(t){this.layer=document.createElement("div"),this.layer.className="tags",this.layer.setAttribute("aria-hidden","true"),t.append(this.layer)}tag(t,e){let n=this.tags.get(t);if(n===void 0){let i=document.createElement("div");i.className=e==="table"?"placard":e==="pet"?"tag pet-tag":"tag";let s=document.createElement("span");s.className="tag-name";let r=document.createElement("span");r.className="tag-says",i.append(s,r),i.hidden=!0,this.layer.append(i),n={root:i,name:s,says:r,x:NaN,y:NaN,depth:NaN,isShown:!1},this.tags.set(t,n)}return n}set(t,e,n,i,s){let r=this.tag(t,e);if(r.name.textContent!==n)r.name.textContent=n;if(r.says.textContent!==i)r.says.textContent=i;if((r.root.dataset.phase??"")!==s)r.root.dataset.phase=s}mark(t,e){let n=this.tags.get(t);if(n!==void 0)n.root.classList.toggle("is-marked",e)}place(t,e,n,i,s){let r=this.tags.get(t);if(r===void 0)return;if(s!==r.isShown)r.isShown=s,r.root.hidden=!s;if(!s)return;if(!(Math.abs(e-r.x)<=0.3&&Math.abs(n-r.y)<=0.3))r.x=e,r.y=n,r.root.style.transform=`translate3d(${e.toFixed(1)}px, ${n.toFixed(1)}px, 0)`;let a=Math.round((1-i)*1000);if(a!==r.depth)r.depth=a,r.root.style.zIndex=String(a)}setSize(t){if(this.layer.dataset.size!==t)this.layer.dataset.size=t}remove(t){let e=this.tags.get(t);if(e===void 0)return;e.root.remove(),this.tags.delete(t)}keys(){return[...this.tags.keys()]}}var jd=8,Sy=45000,by=1300,My=900,Tc=0.72,Ey=34;function $d(t){return{key:t.key,kind:t.kind,phase:t.phase,act:t.act,tool:t.tool,label:t.label,says:t.says}}function wc(t){return t.phase==="done"||t.phase==="fail"}function Ty(t){if(t.lines.length<=si)return t.lines;return t.lines.map((e,n)=>({line:e,index:n})).sort((e,n)=>Number(n.line.depth===0)-Number(e.line.depth===0)||Number(wc(e.line))-Number(wc(n.line))||e.index-n.index).slice(0,si).sort((e,n)=>e.index-n.index).map(({line:e})=>e)}class Qd{host;options;motion;now=performance.now();nav=new hc({x0:-be,z0:-Se,x1:be,z1:Se},0.2);renderer;scene=new na;camera=new Xe(Ey,1,0.5,140);controls;room;pets=[];hasPets=!1;tags;guests=new Map;tables=new Map;slotOwners=Array(ii).fill(void 0);taken=new Map;departed=new Set;timer=new xa;pointer=new At(9,9);raycaster=new ya;box=new Rn;projected=new P;hasView=!1;isRunning=!0;isOnScreen=!0;frame=0;hovered="";marked="";hoveredPet;chosenPet;chosenAt=0;balls=new Map;hearts=[];heartMaterial=new Cn({map:Td(),transparent:!0,depthWrite:!1});mark=new Yt(new ei(0.16,0.24,24),new Ke({color:"#fff8ea",transparent:!0,opacity:0,depthWrite:!1}));markAt=-1/0;floorPlane=new en(new P(0,1,0),0);pressedAt;tagSize="full";hasUserMoved=!1;flight;hint;constructor(t,e){this.host=t;this.options=e;this.motion=e.reducedMotion?0:1,this.renderer=new Zl({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Pi,this.renderer.domElement.className="stage-canvas",this.renderer.domElement.addEventListener("webglcontextlost",(s)=>s.preventDefault()),t.append(this.renderer.domElement),this.scene.background=new Ot("#1c2521"),this.room=new Mc(e.title),this.scene.add(this.room.root),this.tags=new Ec(t),this.mark.rotation.x=-Math.PI/2,this.mark.visible=!1,this.scene.add(this.mark),this.rebuildNav(),this.controls=new $l(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=0.08,this.controls.minDistance=5,this.controls.maxDistance=46,this.controls.minPolarAngle=0.2,this.controls.maxPolarAngle=1.38,this.controls.minAzimuthAngle=-1.7,this.controls.maxAzimuthAngle=1.7,this.controls.screenSpacePanning=!1,this.controls.addEventListener("start",()=>{this.hasUserMoved=!0,this.flight=void 0,this.hint.classList.add("is-gone")});let n=document.createElement("button");n.type="button",n.className="stage-reset",n.textContent=e.reset,n.addEventListener("click",()=>{this.hasUserMoved=!1,this.frameRoom(!1)}),this.hint=document.createElement("p"),this.hint.className="stage-hint",this.hint.textContent=e.hint,t.append(n,this.hint);let i=this.renderer.domElement;i.addEventListener("pointermove",(s)=>this.aim(s)),i.addEventListener("pointerleave",()=>this.pointer.set(9,9)),i.addEventListener("pointerdown",(s)=>{this.pressedAt=s.isPrimary&&s.button===0?{x:s.clientX,y:s.clientY,id:s.pointerId}:void 0}),i.addEventListener("pointerup",(s)=>{let r=this.pressedAt;if(this.pressedAt=void 0,r===void 0||s.pointerId!==r.id||Math.hypot(s.clientX-r.x,s.clientY-r.y)>6)return;this.aim(s),this.click()}),window.addEventListener("keydown",(s)=>{if(s.key==="Escape")this.choosePet(void 0)}),new ResizeObserver(()=>this.resize()).observe(t),new IntersectionObserver((s)=>{this.isOnScreen=s.some((r)=>r.isIntersecting),this.wake()}).observe(t),this.resize(),this.frameRoom(!0),this.wake()}update(t){this.now=performance.now();let e=!this.hasView;this.hasView=!0,this.room.setTally(t.busy,t.asking,t.idle);let n=!1,i=new Set,s=new Set,r=new Set;for(let a of t.tables.filter((o)=>o.inPicture)){let o=this.tables.get(a.id);if(o===void 0){let l=[...Array(ii).keys()].filter((h)=>this.slotOwners[h]!==void 0),c=ld(l);if(c===void 0)continue;o={id:a.id,slot:c,title:"",app:"",isAsking:!1,chairs:new Map,isClosing:!1},this.tables.set(a.id,o),this.slotOwners[c]=a.id,n=!0}i.add(a.id),o.title=a.title,o.app=a.app,o.isClosing=!1,o.isAsking=a.lines.some((l)=>l.phase==="ask");for(let l of Ty(a)){if(r.add(l.key),this.departed.has(l.key))continue;s.add(l.key);let c=this.guests.get(l.key);if(c!==void 0&&!c.isLeaving){c.line=$d(l);continue}if(c!==void 0)continue;if(!e&&wc(l))continue;if(!this.seat(o,l))continue;let h=new cc($d(l),this.now,qi(l.key));this.guests.set(l.key,h),this.scene.add(h.body.root,h.body.laptop),h.arrive(this,!e),n=!0}}for(let a of this.tables.values())if(!i.has(a.id))a.isClosing=!0;for(let a of this.guests.values())if(!s.has(a.key)&&!a.isLeaving)a.leave(this);for(let a of this.departed)if(!r.has(a))this.departed.delete(a);if(this.layTables()||n)this.rebuildNav();this.wake()}highlight(t){this.marked=t??"",this.wake()}pause(){this.isRunning=!1}resume(){this.isRunning=!0,this.timer.reset(),this.wake()}setReducedMotion(t){this.motion=t?0:1}setPets(t){this.now=performance.now();let e=!this.hasPets;this.hasPets=!0;for(let n of["cat","dog"]){let i=Math.max(0,Math.min(jd,Math.floor(t[n]||0))),s=this.pets.filter((r)=>r.species===n&&!r.isLeaving);for(let r=0;s.length<i;r+=1){let a=`${n}:${r}`;if(this.pets.some((l)=>l.id===a))continue;let o=new mc(n,a,this.now);this.pets.push(o),s.push(o),this.scene.add(o.root),o.enter(this,!e)}s.sort((r,a)=>r.id.localeCompare(a.id,void 0,{numeric:!0}));for(let r of s.slice(i))r.leave(this)}this.wake()}tableOf(t){for(let e of this.tables.values())if(e.chairs.has(t.key))return e;return}chairOf(t){let e=this.tableOf(t),n=e?.chairs.get(t.key);return e===void 0||n===void 0?void 0:Ca(e.slot,n)}crewOf(t){let e=this.tableOf(t);if(e===void 0)return[];let n=[];for(let i of e.chairs.keys()){let s=this.guests.get(i);if(s===void 0||s===t||s.isLeaving||s.line.kind==="main")continue;if(s.line.phase==="think"||s.line.phase==="work"||s.line.phase==="ask")n.push(s)}return n}isCrewBusy(t){return this.crewOf(t).length>0}crewChairs(t){return this.crewOf(t).filter((e)=>e.want==="seat"||e.want==="think").map((e)=>this.chairOf(e)).filter((e)=>e!==void 0)}spots(){let t=[...La];for(let e=0;e<ii;e+=1)if(this.slotOwners[e]===void 0)t.push(...Na(e));return t}claim(t,e,n){let i=this.spots().filter((r)=>{if(!e.includes(r.kind))return!1;let a=this.taken.get(r.id);return a===void 0||a===t.key}),s=n===void 0?i[Math.floor(Math.random()*i.length)]:i.find((r)=>r.id===n.id);if(s!==void 0)this.taken.set(s.id,t.key);return s}hasFree(t){return this.spots().some((e)=>t.includes(e.kind)&&!this.taken.has(e.id))}release(t){for(let[e,n]of this.taken)if(n===t.key)this.taken.delete(e)}isOpen(t){return t.slot<0||this.slotOwners[t.slot]===void 0}petSpot(t){let e=this.pets.filter((n)=>!n.isLeaving&&n.isStill&&(n.petter===""||n.petter===t.key)).sort((n,i)=>Math.hypot(n.x-t.x,n.z-t.z)-Math.hypot(i.x-t.x,i.z-t.z));for(let n of e){let i=n.pettingPlace(this.nav);if(i===void 0)continue;for(let s of this.pets)if(s.petter===t.key)s.petter="";return n.petter=t.key,i}return}freeBed(t){let e=this.pets.filter((s)=>s!==t&&s.species==="cat"&&!s.isLeaving).map((s)=>s.goal),n=fd.filter((s)=>!e.some((r)=>Math.hypot(r.x-s.x,r.z-s.z)<0.3)),i=n[Math.floor(Math.random()*n.length)];return i===void 0?void 0:this.nav.nearestPoint(i)}besideResting(t){let e=[...this.guests.values()].filter((s)=>!s.isLeaving&&!s.isWalking&&(s.want==="idle"||s.want==="await")),n=e[Math.floor(t()*e.length)];if(n===void 0)return;let i=t()*Math.PI*2;return this.nav.nearestPoint({x:n.x+Math.sin(i)*0.65,z:n.z+Math.cos(i)*0.65})}floorPoint(t,e,n=2){for(let i=0;i<40;i+=1){let s=e===void 0?{x:Oe.x0+t()*(Oe.x1-Oe.x0),z:Oe.z0+t()*(Oe.z1-Oe.z0)}:{x:e.x+(t()*2-1)*n,z:e.z+(t()*2-1)*n};if(s.x<Oe.x0||s.x>Oe.x1||s.z<Oe.z0||s.z>Oe.z1)continue;if(!this.nav.isFree(s))continue;let r=!1;for(let a of this.guests.values())if(Math.hypot(a.x-s.x,a.z-s.z)<0.6)r=!0;if(!r)return s}return this.nav.nearestPoint(e??{x:0,z:2})}bringBack(t){let e=this.camera.position,n=zn.clamp(e.x,Oe.x0+1,Oe.x1-1),i=zn.clamp(e.z,Oe.z0+1,Oe.z1-1);return this.nav.nearestPoint({x:t.x+(n-t.x)*0.75,z:t.z+(i-t.z)*0.75})}cameraYaw(t,e){return Math.atan2(this.camera.position.x-t,this.camera.position.z-e)}seat(t,e){let n=new Set(t.chairs.values()),i=e.kind==="main"&&!n.has(0)?0:-1;for(let s=1;i<0&&s<si;s+=1)if(!n.has(s))i=s;if(i<0)return!1;return t.chairs.set(e.key,i),!0}layTables(){let t=!1;for(let e=0;e<ii;e+=1){let n=this.slotOwners[e],i=n===void 0?void 0:this.tables.get(n),s=this.room.slots[e];if(s===void 0)continue;let r=i===void 0?0:hd(i.chairs.values());if(s.shown!==r)s.use(r,e%tc+2*Math.floor(e/tc)),t=!0}return t}rebuildNav(){this.nav.clear();for(let t of pd)this.nav.block(t);for(let t=0;t<ii;t+=1){let e=this.room.slots[t];if(e===void 0)continue;if(e.shown>0)this.nav.block(fr(t,e.shown));else this.nav.blockCircle(Ps(t),Ps(t).r)}for(let t of this.guests.values())t.reroute(this)}tidy(){let t=!1;for(let e of[...this.guests.values()]){if(!e.isGone)continue;this.release(e);for(let n of this.pets)if(n.petter===e.key)n.petter="";if(this.scene.remove(e.body.root,e.body.laptop),e.body.dispose(),this.tags.remove(e.key),this.guests.delete(e.key),!e.isLeaving)this.departed.add(e.key);for(let n of this.tables.values())if(n.chairs.delete(e.key))t=!0}for(let e of[...this.tables.values()]){if(!e.isClosing||e.chairs.size>0)continue;this.tables.delete(e.id),this.slotOwners[e.slot]=void 0,this.tags.remove(`table:${e.id}`),t=!0}if(t&&this.layTables())this.rebuildNav()}resize(){let t=Math.max(1,this.host.clientWidth),e=Math.max(1,this.host.clientHeight);if(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),!this.hasUserMoved)this.frameRoom(!0);this.wake()}frameRoom(t){let e=new P(0.3,0.4,0.2),n=this.camera.aspect<1.15?Math.PI/2:0,i=new P(Math.sin(n)*Math.sin(Tc),Math.cos(Tc),Math.cos(n)*Math.sin(Tc)),s=[];for(let c of[-be-0.2,be+0.2])for(let h of[-Se-0.2,Se+0.2])s.push(new P(c,-0.3,h),new P(c,gn,Math.min(h,Se)));let r=this.camera.clone(),a=4,o=120;for(let c=0;c<24;c+=1){let h=(a+o)/2;if(r.position.copy(e).addScaledVector(i,h),r.lookAt(e),r.updateMatrixWorld(),s.every((u)=>{let p=u.clone().project(r);return Math.abs(p.x)<=0.97&&Math.abs(p.y)<=0.95}))o=h;else a=h}this.controls.maxDistance=Math.max(46,o*1.3);let l=e.clone().addScaledVector(i,o);if(t||this.motion===0)this.flight=void 0,this.camera.position.copy(l),this.controls.target.copy(e),this.controls.update();else this.flight={from:this.camera.position.clone(),fromTarget:this.controls.target.clone(),to:l,toTarget:e,t:0};this.wake()}aim(t){let e=this.renderer.domElement.getBoundingClientRect();this.pointer.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),this.wake()}pick(){let t={key:"",pet:void 0};if(Math.abs(this.pointer.x)>1||Math.abs(this.pointer.y)>1)return t;this.raycaster.setFromCamera(this.pointer,this.camera);let e=t,n=1/0,i=new P,s=(r)=>{if(this.raycaster.ray.intersectBox(this.box,i)===null)return;let a=i.distanceTo(this.raycaster.ray.origin);if(a<n)n=a,e=r};for(let r of this.guests.values()){if(r.isLeaving||r.body.presence<0.5)continue;this.box.min.set(r.x-0.3,0,r.z-0.3),this.box.max.set(r.x+0.3,r.body.headTop()+0.1,r.z+0.3),s({key:r.key,pet:void 0})}for(let r of this.pets){if(r.isLeaving||!r.isPresent)continue;r.hitBox(this.box),s({key:"",pet:r})}return e}click(){let{key:t,pet:e}=this.pick();if(e!==void 0){e.poke(this),this.choosePet(e),this.cheer(e);return}if(t!==""){this.choosePet(void 0),this.options.onPick(t);return}let n=this.chosenPet;if(n!==void 0){let i=this.raycaster.ray.intersectPlane(this.floorPlane,new P);if(i!==null&&i.x>Oe.x0&&i.x<Oe.x1&&i.z>Oe.z0&&i.z<Oe.z1){this.send(n,{x:i.x,z:i.z});return}}this.choosePet(void 0),this.options.onPick("")}choosePet(t){this.chosenPet=t,this.chosenAt=this.now,this.wake()}send(t,e){let n=this.nav.nearestPoint(e);if(this.chosenAt=this.now,this.markAt=this.now,this.mark.position.set(n.x,0.02,n.z),t.species==="dog"){let i=this.balls.get(t.id);if(i===void 0)i=new pc,this.balls.set(t.id,i),this.scene.add(i.mesh);i.throwTo(n,this.now),t.fetch(i,this)}else if(t.call(n,this))this.cheer(t);this.wake()}cheer(t){for(let e=0;e<3;e+=1){let n=new Hn(this.heartMaterial.clone());n.scale.setScalar(0.16),n.position.set(t.x+(e-1)*0.14,t.height+0.05+e*0.05,t.z),this.scene.add(n),this.hearts.push({sprite:n,born:this.now+e*120})}}wake(){if(this.frame!==0||!this.isRunning||!this.isOnScreen)return;this.frame=requestAnimationFrame(()=>this.tick())}tick(){if(this.frame=0,!this.isRunning||!this.isOnScreen)return;this.timer.update();let t=Math.min(0.05,this.timer.getDelta()),e=this.timer.getElapsed();if(this.now=performance.now(),this.flight!==void 0){let r=this.flight;r.t=Math.min(1,r.t+t/0.9);let a=r.t*r.t*(3-2*r.t);if(this.camera.position.lerpVectors(r.from,r.to,a),this.controls.target.lerpVectors(r.fromTarget,r.toTarget,a),r.t>=1)this.flight=void 0}this.controls.target.x=zn.clamp(this.controls.target.x,-be,be),this.controls.target.z=zn.clamp(this.controls.target.z,-Se,Se),this.controls.target.y=zn.clamp(this.controls.target.y,0,2),this.controls.update();for(let r of this.guests.values())r.update(t,e,this);this.keepApart(t);let n=!1;for(let r of[...this.pets]){if(r.petter!==""){let a=this.guests.get(r.petter);if(a===void 0||!a.isPetting)r.petter=""}if(r.update(t,e,this),r.x>be-1.2&&Math.abs(r.z-Ut.z)<1.5)n=!0;if(!r.isGone)continue;this.scene.remove(r.root),r.dispose(),this.pets.splice(this.pets.indexOf(r),1)}for(let r of this.guests.values()){if(Math.hypot(r.x-Ut.inside.x,r.z-Ut.inside.z)<1.6&&r.isWalking)n=!0;if(r.x>be-0.2&&r.body.presence>0)n=!0}for(let r of this.guests.values())if(r.isPetting&&!this.pets.some((a)=>a.petter===r.key))r.stopPetting(this);this.room.update(t,e,this.motion,this.camera.position,n),this.tidy(),this.play();let{key:i,pet:s}=this.pick();if(i!==this.hovered||s!==this.hoveredPet)this.hovered=i,this.hoveredPet=s,this.renderer.domElement.style.cursor=i===""&&s===void 0?"":"pointer";for(let r of this.guests.values()){let a=r.key===this.hovered||r.key===this.marked;r.body.setRing(a),this.tags.mark(r.key,a)}for(let r of this.pets)r.setRing(r===this.chosenPet||r===this.hoveredPet);this.renderer.render(this.scene,this.camera),this.placeTags(),this.wake()}play(){let t=this.chosenPet;if(t!==void 0&&(t.isLeaving||t.isGone||this.now-this.chosenAt>Sy))this.chosenPet=void 0;for(let[n,i]of[...this.balls]){i.update(this.now,this.motion);let s=this.pets.find((r)=>r.id===n&&!r.isLeaving);if(i.state!=="carried"&&(i.isOld(this.now)||s===void 0))this.scene.remove(i.mesh),this.balls.delete(n)}for(let n of[...this.hearts]){let i=(this.now-n.born)/by;if(n.sprite.visible=i>=0,i<0)continue;if(n.sprite.position.y+=0.012*this.motion,n.sprite.material.opacity=Math.max(0,1-i),i<1)continue;this.scene.remove(n.sprite),n.sprite.material.dispose(),this.hearts.splice(this.hearts.indexOf(n),1)}let e=(this.now-this.markAt)/My;if(this.mark.visible=e<1,e<1)this.mark.scale.setScalar(1+e*0.8),this.mark.material.opacity=0.9*(1-e)}keepApart(t){let e=[...this.guests.values()].filter((n)=>!n.isGone&&n.body.presence>0.5);for(let n=0;n<e.length;n+=1)for(let i=n+1;i<e.length;i+=1){let s=e[n],r=e[i];if(!s.isWalking&&!r.isWalking)continue;let a=r.x-s.x,o=r.z-s.z,l=Math.hypot(a,o);if(l>=0.46||l<0.0001)continue;let c=Math.min(0.5*t*4,(0.46-l)/2),h=a/l,d=o/l;if(s.isWalking)s.nudge(-h*c,-d*c,this.nav);if(r.isWalking)r.nudge(h*c,d*c,this.nav)}}placeTags(){let t=this.host.clientWidth,e=this.host.clientHeight,n=(h,d,u)=>{this.projected.set(h,d,u).project(this.camera);let p=this.projected.z<1&&Math.abs(this.projected.x)<1.05&&Math.abs(this.projected.y)<1.05;return{sx:(this.projected.x+1)/2*t,sy:(1-this.projected.y)/2*e,depth:zn.clamp(this.camera.position.distanceTo(new P(h,d,u))/80,0,1),isIn:p}},i=n(this.controls.target.x,0,this.controls.target.z),s=n(this.controls.target.x,1,this.controls.target.z),r=Math.abs(i.sy-s.sy),a=3,o=this.tagSize==="full"?33:39,l=this.tagSize==="tiny"?25:19;this.tagSize=r>=o?"full":r>=l?"compact":"tiny",this.tags.setSize(this.tagSize);let c=new Set;for(let h of this.guests.values()){c.add(h.key);let{line:d}=h;this.tags.set(h.key,"guest",d.label,d.says,d.phase);let u=n(h.x,h.body.headTop()+0.48,h.z);this.tags.place(h.key,u.sx,u.sy,u.depth,u.isIn&&h.body.presence>0.6&&!h.isLeaving)}for(let h of this.tables.values()){let d=`table:${h.id}`;c.add(d);let u=this.room.slots[h.slot],p=Math.max(1,u?.shown??1),x=Ia(h.slot,p);this.tags.set(d,"table",h.title,h.app,h.isAsking?"ask":"");let M=n(x.x0+0.05,0.02,x.z1);this.tags.place(d,M.sx,M.sy,0.99,M.isIn&&!h.isClosing)}for(let h of this.pets){let d=`pet:${h.id}`;c.add(d);let u=this.now<h.saidUntil;if(!(h===this.chosenPet||h===this.hoveredPet||u)){this.tags.place(d,0,0,1,!1);continue}let x=u?h.said:h===this.chosenPet?this.options.petHint[h.species]:"";this.tags.set(d,"pet",h.name,x,""),this.tags.mark(d,h===this.chosenPet);let M=n(h.x,h.height+0.3,h.z);this.tags.place(d,M.sx,M.sy,M.depth,M.isIn&&h.isPresent&&!h.isLeaving)}for(let h of this.tags.keys())if(!c.has(h))this.tags.remove(h)}}function wy(){try{let t=document.createElement("canvas");return t.getContext("webgl2")!==null||t.getContext("webgl")!==null}catch{return!1}}window.AgentCafe3D={music:Fd,mount(t,e){if(!wy())return;try{return new Qd(t,e)}catch(n){console.error("Agent Café: the 3D café could not be drawn",n);return}}};})();
