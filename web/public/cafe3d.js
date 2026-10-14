(()=>{var{defineProperty:ho,getOwnPropertyNames:Of,getOwnPropertyDescriptor:Bf}=Object,zf=Object.prototype.hasOwnProperty;function Hf(t){return this[t]}var kf=(t)=>{var e=(lh??=new WeakMap).get(t),n;if(e)return e;if(e=ho({},"__esModule",{value:!0}),t&&typeof t==="object"||typeof t==="function"){for(var i of Of(t))if(!zf.call(e,i))ho(e,i,{get:Hf.bind(t,i),enumerable:!(n=Bf(t,i))||n.enumerable})}return lh.set(t,e),e},lh;var Gf=(t)=>t;function Wf(t,e){this[t]=Gf.bind(null,e)}var Vf=(t,e)=>{for(var n in e)ho(t,n,{get:e[n],enumerable:!0,configurable:!0,set:Wf.bind(e,n)})};var mv={};Vf(mv,{MAX_PETS:()=>Cf});var Oh="186",Si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bh=0,Uo=1,zh=2;var Oi=1,Hh=2,Ps=3,Is=0,rn=1,On=2,Bn=0,ar=1,Fo=2,Oo=3,Bo=4,kh=5;var Ls=100,Gh=101,Wh=102,Vh=103,Xh=104,qh=200,Yh=201,Zh=202,Jh=203,Kh=204,$h=205,jh=206,Qh=207,tu=208,eu=209,nu=210,iu=211,su=212,ru=213,au=214,ou=0,lu=1,cu=2,zo=3,hu=4,uu=5,du=6,fu=7,pu=0,mu=1,gu=2,An=0,Ho=1,ko=2,Go=3,Wo=4,Vo=5,Xo=6,qo=7;var Ns=301,Bi=302,sa=303,ra=304,or=306,lr=1000,aa=1001,_u=1002,Rn=1003,xu=1004;var cr=1005;var an=1006,oa=1007;var zi=1008;var Cn=1009,yu=1010,vu=1011,hr=1012,Yo=1013,Ei=1014,si=1015,zn=1016,Zo=1017,Jo=1018,Ds=1020,bu=35902,Su=35899,Mu=1021,Eu=1022,Hn=1023,Hi=1026,ki=1027,Tu=1028,Ko=1029,Gi=1030,$o=1031;var jo=1033,la=33776,ca=33777,ha=33778,ua=33779,Qo=35840,tl=35841,el=35842,nl=35843,il=36196,sl=37492,rl=37496,al=37488,ol=37489,da=37490,ll=37491,cl=37808,hl=37809,ul=37810,dl=37811,fl=37812,pl=37813,ml=37814,gl=37815,_l=37816,xl=37817,yl=37818,vl=37819,bl=37820,Sl=37821,Ml=36492,El=36494,Tl=36495,wl=36283,Al=36284,fa=36285,Rl=36286;var Cl=0,wu=1,Wi="",pa="srgb",Pl="srgb-linear",Il="linear",fe="srgb";var Au=512,Ru=513,Cu=514,ma=515,Pu=516,Iu=517,ga=518,Lu=519;var Ll="300 es",Nl=2000;function Xf(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function qf(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function ir(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Nu(){let t=ir("canvas");return t.style.display="block",t}var ch={},As=null;function sr(...t){let e="THREE."+t.shift();if(As)As("log",e,...t);else console.log(e,...t)}function Du(t){let e=t[0];if(typeof e==="string"&&e.startsWith("TSL:")){let n=t[1];if(n&&n.isStackTrace)t[0]+=" "+n.getLocation();else t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ft(...t){t=Du(t);let e="THREE."+t.shift();if(As)As("warn",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.warn(n.getError(e));else console.warn(e,...t)}}function Ut(...t){t=Du(t);let e="THREE."+t.shift();if(As)As("error",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.error(n.getError(e));else console.error(e,...t)}}function Fi(...t){let e=t.join(" ");if(e in ch)return;ch[e]=!0,Ft(...t)}function Uu(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var Fu={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class kn{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){let n=this._listeners;if(n===void 0)return!1;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hh=1234567,er=Math.PI/180,Rs=180/Math.PI;function ni(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xe[t&255]+Xe[t>>8&255]+Xe[t>>16&255]+Xe[t>>24&255]+"-"+Xe[e&255]+Xe[e>>8&255]+"-"+Xe[e>>16&15|64]+Xe[e>>24&255]+"-"+Xe[n&63|128]+Xe[n>>8&255]+"-"+Xe[n>>16&255]+Xe[n>>24&255]+Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]).toLowerCase()}function Xt(t,e,n){return Math.max(e,Math.min(n,t))}function Dl(t,e){return(t%e+e)%e}function Yf(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function Zf(t,e,n){if(t!==e)return(n-t)/(e-t);else return 0}function nr(t,e,n){return(1-n)*t+n*e}function Jf(t,e,n,i){return nr(t,e,1-Math.exp(-n*i))}function Kf(t,e=1){return e-Math.abs(Dl(t,e*2)-e)}function $f(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*(3-2*t)}function jf(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10)}function Qf(t,e){return t+Math.floor(Math.random()*(e-t+1))}function tp(t,e){return t+Math.random()*(e-t)}function ep(t){return t*(0.5-Math.random())}function np(t){if(t!==void 0)hh=t;let e=hh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ip(t){return t*er}function sp(t){return t*Rs}function rp(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function ap(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function op(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function lp(t,e,n,i,s){let{cos:r,sin:a}=Math,o=r(n/2),l=a(n/2),c=r((e+i)/2),h=a((e+i)/2),d=r((e-i)/2),u=a((e-i)/2),p=r((i-e)/2),_=a((i-e)/2);switch(s){case"XYX":t.set(o*h,l*d,l*u,o*c);break;case"YZY":t.set(l*u,o*h,l*d,o*c);break;case"ZXZ":t.set(l*d,l*u,o*h,o*c);break;case"XZX":t.set(o*h,l*_,l*p,o*c);break;case"YXY":t.set(l*p,o*h,l*_,o*c);break;case"ZYZ":t.set(l*_,l*p,o*h,o*c);break;default:Ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function ae(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var Gn={DEG2RAD:er,RAD2DEG:Rs,generateUUID:ni,clamp:Xt,euclideanModulo:Dl,mapLinear:Yf,inverseLerp:Zf,lerp:nr,damp:Jf,pingpong:Kf,smoothstep:$f,smootherstep:jf,randInt:Qf,randFloat:tp,randFloatSpread:ep,seededRandom:np,degToRad:ip,radToDeg:sp,isPowerOfTwo:rp,ceilPowerOfTwo:ap,floorPowerOfTwo:op,setQuaternionFromProperEuler:lp,normalize:ae,denormalize:Tn};class Rt{static{Rt.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],h=n[i+3],d=s[r+0],u=s[r+1],p=s[r+2],_=s[r+3];if(h!==_||o!==d||l!==u||c!==p){let S=o*d+l*u+c*p+h*_;if(S<0)d=-d,u=-u,p=-p,_=-_,S=-S;let m=1-a;if(S<0.9995){let f=Math.acos(S),E=Math.sin(f);m=Math.sin(m*f)/E,a=Math.sin(a*f)/E,o=o*m+d*a,l=l*m+u*a,c=c*m+p*a,h=h*m+_*a}else{o=o*m+d*a,l=l*m+u*a,c=c*m+p*a,h=h*m+_*a;let f=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=f,l*=f,c*=f,h*=f}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],h=s[r],d=s[r+1],u=s[r+2],p=s[r+3];return t[e]=a*p+c*h+o*u-l*d,t[e+1]=o*p+c*d+l*h-a*u,t[e+2]=l*p+c*u+a*d-o*h,t[e+3]=c*p-a*h-o*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,{cos:a,sin:o}=Math,l=a(n/2),c=a(i/2),h=a(s/2),d=o(n/2),u=o(i/2),p=o(s/2);switch(r){case"XYZ":this._x=d*c*h+l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h-d*u*p;break;case"YXZ":this._x=d*c*h+l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h+d*u*p;break;case"ZXY":this._x=d*c*h-l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h-d*u*p;break;case"ZYX":this._x=d*c*h-l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h+d*u*p;break;case"YZX":this._x=d*c*h+l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h-d*u*p;break;case"XZY":this._x=d*c*h-l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h+d*u*p;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10],d=n+a+h;if(d>0){let u=0.5/Math.sqrt(d+1);this._w=0.25/u,this._x=(c-o)*u,this._y=(s-l)*u,this._z=(r-i)*u}else if(n>a&&n>h){let u=2*Math.sqrt(1+n-a-h);this._w=(c-o)/u,this._x=0.25*u,this._y=(i+r)/u,this._z=(s+l)/u}else if(a>h){let u=2*Math.sqrt(1+a-n-h);this._w=(s-l)/u,this._x=(i+r)/u,this._y=0.25*u,this._z=(o+c)/u}else{let u=2*Math.sqrt(1+h-n-a);this._w=(r-i)/u,this._x=(s+l)/u,this._y=(o+c)/u,this._z=0.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<0.00000001)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,{_x:a,_y:o,_z:l,_w:c}=e;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=this.dot(t);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-e;if(a<0.9995){let l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{static{P.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=t,l=2*(r*i-a*n),c=2*(a*e-s*i),h=2*(s*n-r*e);return this.x=e+o*l+r*h-a*c,this.y=n+o*c+a*l-s*h,this.z=i+o*h+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,{x:r,y:a,z:o}=e;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return uo.copy(this).projectOnVector(t),this.sub(uo)}reflect(t){return this.sub(uo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var uo=new P,uh=new Ze;class Ot{static{Ot.prototype.isMatrix3=!0}constructor(t,e,n,i,s,r,a,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l)}set(t,e,n,i,s,r,a,o,l){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],h=n[7],d=n[2],u=n[5],p=n[8],_=i[0],S=i[3],m=i[6],f=i[1],E=i[4],w=i[7],v=i[2],T=i[5],R=i[8];return s[0]=r*_+a*f+o*v,s[3]=r*S+a*E+o*T,s[6]=r*m+a*w+o*R,s[1]=l*_+c*f+h*v,s[4]=l*S+c*E+h*T,s[7]=l*m+c*w+h*R,s[2]=d*_+u*f+p*v,s[5]=d*S+u*E+p*T,s[8]=d*m+u*w+p*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*r*c-e*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=c*r-a*l,d=a*o-c*s,u=l*s-r*o,p=e*h+n*d+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=h*_,t[1]=(i*l-c*n)*_,t[2]=(a*n-i*r)*_,t[3]=d*_,t[4]=(c*e-i*o)*_,t[5]=(i*s-a*e)*_,t[6]=u*_,t[7]=(n*o-l*e)*_,t[8]=(r*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+t,-i*l,i*o,-i*(-l*r+o*a)+a+e,0,0,1),this}scale(t,e){return Fi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fo.makeScale(t,e)),this}rotate(t){return Fi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fo.makeRotation(-t)),this}translate(t,e){return Fi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fo.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var fo=new Ot,dh=new Ot().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),fh=new Ot().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function cp(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=ii(s.r),s.g=ii(s.g),s.b=ii(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:dh,fromXYZ:fh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:dh,fromXYZ:fh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var Yt=cp();function ii(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function ws(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var ls;class Ul{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{if(ls===void 0)ls=ir("canvas");ls.width=t.width,ls.height=t.height;let i=ls.getContext("2d");if(t instanceof ImageData)i.putImageData(t,0,0);else i.drawImage(t,0,0,t.width,t.height);n=ls}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ir("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ii(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(ii(e[n]/255)*255);else e[n]=ii(e[n]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var hp=0;class ur{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=ni(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)t.set(e.videoWidth,e.videoHeight,0);else if(typeof VideoFrame<"u"&&e instanceof VideoFrame)t.set(e.displayWidth,e.displayHeight,0);else if(e!==null)t.set(e.width,e.height,e.depth||0);else t.set(0,0,0);return t}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(po(i[r].image));else s.push(po(i[r]))}else s=po(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function po(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return Ul.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return Ft("Texture: Unable to serialize Texture."),{}}var up=0,mo=new P;class ke extends kn{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=ke.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=ni(),this.name="",this.source=new ur(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=t&&t.depth&&t.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mo).x}get height(){return this.source.getSize(mo).y}get depth(){return this.source.getSize(mo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=300;ke.DEFAULT_ANISOTROPY=1;class ve{static{ve.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,a=0.1,o=t.elements,l=o[0],c=o[4],h=o[8],d=o[1],u=o[5],p=o[9],_=o[2],S=o[6],m=o[10];if(Math.abs(c-d)<0.01&&Math.abs(h-_)<0.01&&Math.abs(p-S)<0.01){if(Math.abs(c+d)<0.1&&Math.abs(h+_)<0.1&&Math.abs(p+S)<0.1&&Math.abs(l+u+m-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,w=(u+1)/2,v=(m+1)/2,T=(c+d)/4,R=(h+_)/4,A=(p+S)/4;if(E>w&&E>v)if(E<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(E),i=T/n,s=R/n;else if(w>v)if(w<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(w),n=T/i,s=A/i;else if(v<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(v),n=R/s,i=A/s;return this.set(n,i,s,e),this}let f=Math.sqrt((S-p)*(S-p)+(h-_)*(h-_)+(d-c)*(d-c));if(Math.abs(f)<0.001)f=1;return this.x=(S-p)/f,this.y=(h-_)/f,this.z=(d-c)/f,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fl extends kn{constructor(t=1,e=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new ke(i),r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(t.mapping!==void 0)e.mapping=t.mapping;if(t.wrapS!==void 0)e.wrapS=t.wrapS;if(t.wrapT!==void 0)e.wrapT=t.wrapT;if(t.wrapR!==void 0)e.wrapR=t.wrapR;if(t.magFilter!==void 0)e.magFilter=t.magFilter;if(t.minFilter!==void 0)e.minFilter=t.minFilter;if(t.format!==void 0)e.format=t.format;if(t.type!==void 0)e.type=t.type;if(t.anisotropy!==void 0)e.anisotropy=t.anisotropy;if(t.colorSpace!==void 0)e.colorSpace=t.colorSpace;if(t.flipY!==void 0)e.flipY=t.flipY;if(t.generateMipmaps!==void 0)e.generateMipmaps=t.generateMipmaps;if(t.internalFormat!==void 0)e.internalFormat=t.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(t!==null&&t.renderTarget===null)t.renderTarget=this;this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ur(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fn extends Fl{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class _a extends ke{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ol extends ke{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class $t{static{$t.prototype.isMatrix4=!0}constructor(t,e,n,i,s,r,a,o,l,c,h,d,u,p,_,S){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l,c,h,d,u,p,_,S)}set(t,e,n,i,s,r,a,o,l,c,h,d,u,p,_,S){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=a,m[13]=o,m[2]=l,m[6]=c,m[10]=h,m[14]=d,m[3]=u,m[7]=p,m[11]=_,m[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){if(this.determinantAffine()===0)return t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this;return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/cs.setFromMatrixColumn(t,0).length(),s=1/cs.setFromMatrixColumn(t,1).length(),r=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,{x:n,y:i,z:s}=t,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let d=r*c,u=r*h,p=a*c,_=a*h;e[0]=o*c,e[4]=-o*h,e[8]=l,e[1]=u+p*l,e[5]=d-_*l,e[9]=-a*o,e[2]=_-d*l,e[6]=p+u*l,e[10]=r*o}else if(t.order==="YXZ"){let d=o*c,u=o*h,p=l*c,_=l*h;e[0]=d+_*a,e[4]=p*a-u,e[8]=r*l,e[1]=r*h,e[5]=r*c,e[9]=-a,e[2]=u*a-p,e[6]=_+d*a,e[10]=r*o}else if(t.order==="ZXY"){let d=o*c,u=o*h,p=l*c,_=l*h;e[0]=d-_*a,e[4]=-r*h,e[8]=p+u*a,e[1]=u+p*a,e[5]=r*c,e[9]=_-d*a,e[2]=-r*l,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){let d=r*c,u=r*h,p=a*c,_=a*h;e[0]=o*c,e[4]=p*l-u,e[8]=d*l+_,e[1]=o*h,e[5]=_*l+d,e[9]=u*l-p,e[2]=-l,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){let d=r*o,u=r*l,p=a*o,_=a*l;e[0]=o*c,e[4]=_-d*h,e[8]=p*h+u,e[1]=h,e[5]=r*c,e[9]=-a*c,e[2]=-l*c,e[6]=u*h+p,e[10]=d-_*h}else if(t.order==="XZY"){let d=r*o,u=r*l,p=a*o,_=a*l;e[0]=o*c,e[4]=-h,e[8]=l*c,e[1]=d*h+_,e[5]=r*c,e[9]=u*h-p,e[2]=p*h-u,e[6]=a*c,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dp,t,fp)}lookAt(t,e,n){let i=this.elements;if(hn.subVectors(t,e),hn.lengthSq()===0)hn.z=1;if(hn.normalize(),_i.crossVectors(n,hn),_i.lengthSq()===0){if(Math.abs(n.z)===1)hn.x+=0.0001;else hn.z+=0.0001;hn.normalize(),_i.crossVectors(n,hn)}return _i.normalize(),Ur.crossVectors(hn,_i),i[0]=_i.x,i[4]=Ur.x,i[8]=hn.x,i[1]=_i.y,i[5]=Ur.y,i[9]=hn.y,i[2]=_i.z,i[6]=Ur.z,i[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],h=n[5],d=n[9],u=n[13],p=n[2],_=n[6],S=n[10],m=n[14],f=n[3],E=n[7],w=n[11],v=n[15],T=i[0],R=i[4],A=i[8],g=i[12],b=i[1],G=i[5],I=i[9],B=i[13],j=i[2],L=i[6],q=i[10],et=i[14],W=i[3],st=i[7],C=i[11],N=i[15];return s[0]=r*T+a*b+o*j+l*W,s[4]=r*R+a*G+o*L+l*st,s[8]=r*A+a*I+o*q+l*C,s[12]=r*g+a*B+o*et+l*N,s[1]=c*T+h*b+d*j+u*W,s[5]=c*R+h*G+d*L+u*st,s[9]=c*A+h*I+d*q+u*C,s[13]=c*g+h*B+d*et+u*N,s[2]=p*T+_*b+S*j+m*W,s[6]=p*R+_*G+S*L+m*st,s[10]=p*A+_*I+S*q+m*C,s[14]=p*g+_*B+S*et+m*N,s[3]=f*T+E*b+w*j+v*W,s[7]=f*R+E*G+w*L+v*st,s[11]=f*A+E*I+w*q+v*C,s[15]=f*g+E*B+w*et+v*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],o=t[9],l=t[13],c=t[2],h=t[6],d=t[10],u=t[14],p=t[3],_=t[7],S=t[11],m=t[15],f=o*u-l*d,E=a*u-l*h,w=a*d-o*h,v=r*u-l*c,T=r*d-o*c,R=r*h-a*c;return e*(_*f-S*E+m*w)-n*(p*f-S*v+m*T)+i*(p*E-_*v+m*R)-s*(p*w-_*T+S*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],r=t[5],a=t[9],o=t[2],l=t[6],c=t[10];return e*(r*c-a*l)-n*(s*c-a*o)+i*(s*l-r*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=t[9],d=t[10],u=t[11],p=t[12],_=t[13],S=t[14],m=t[15],f=e*a-n*r,E=e*o-i*r,w=e*l-s*r,v=n*o-i*a,T=n*l-s*a,R=i*l-s*o,A=c*_-h*p,g=c*S-d*p,b=c*m-u*p,G=h*S-d*_,I=h*m-u*_,B=d*m-u*S,j=f*B-E*I+w*G+v*b-T*g+R*A;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/j;return t[0]=(a*B-o*I+l*G)*L,t[1]=(i*I-n*B-s*G)*L,t[2]=(_*R-S*T+m*v)*L,t[3]=(d*T-h*R-u*v)*L,t[4]=(o*b-r*B-l*g)*L,t[5]=(e*B-i*b+s*g)*L,t[6]=(S*w-p*R-m*E)*L,t[7]=(c*R-d*w+u*E)*L,t[8]=(r*I-a*b+l*A)*L,t[9]=(n*b-e*I-s*A)*L,t[10]=(p*T-_*w+m*f)*L,t[11]=(h*w-c*T-u*f)*L,t[12]=(a*g-r*G-o*A)*L,t[13]=(e*G-n*g+i*A)*L,t[14]=(_*E-p*v-S*f)*L,t[15]=(c*v-h*E+d*f)*L,this}scale(t){let e=this.elements,{x:n,y:i,z:s}=t;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,{x:r,y:a,z:o}=t,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=e,l=s+s,c=r+r,h=a+a,d=s*l,u=s*c,p=s*h,_=r*c,S=r*h,m=a*h,f=o*l,E=o*c,w=o*h,{x:v,y:T,z:R}=n;return i[0]=(1-(_+m))*v,i[1]=(u+w)*v,i[2]=(p-E)*v,i[3]=0,i[4]=(u-w)*T,i[5]=(1-(d+m))*T,i[6]=(S+f)*T,i[7]=0,i[8]=(p+E)*R,i[9]=(S-f)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let r=cs.set(i[0],i[1],i[2]).length(),a=cs.set(i[4],i[5],i[6]).length(),o=cs.set(i[8],i[9],i[10]).length();if(s<0)r=-r;Sn.copy(this);let l=1/r,c=1/a,h=1/o;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=c,Sn.elements[5]*=c,Sn.elements[6]*=c,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,e.setFromRotationMatrix(Sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),p,_;if(o)p=s/(r-s),_=r*s/(r-s);else if(a===2000)p=-(r+s)/(r-s),_=-2*r*s/(r-s);else if(a===2001)p=-r/(r-s),_=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2/(e-t),h=2/(n-i),d=-(e+t)/(e-t),u=-(n+i)/(n-i),p,_;if(o)p=1/(r-s),_=r/(r-s);else if(a===2000)p=-2/(r-s),_=-(r+s)/(r-s);else if(a===2001)p=-1/(r-s),_=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var cs=new P,Sn=new $t,dp=new P(0,0,0),fp=new P(1,1,1),_i=new P,Ur=new P,hn=new P,ph=new $t,mh=new Ze;class wn{constructor(t=0,e=0,n=0,i=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],h=i[2],d=i[6],u=i[10];switch(e){case"XYZ":if(this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,u),this._z=Math.atan2(-r,s);else this._x=Math.atan2(d,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Xt(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,u),this._z=Math.atan2(o,l);else this._y=Math.atan2(-h,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<0.9999999)this._y=Math.atan2(-h,u),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-Xt(h,-1,1)),Math.abs(h)<0.9999999)this._x=Math.atan2(d,u),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(Xt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,s);else this._x=0,this._y=Math.atan2(a,u);break;case"XZY":if(this._z=Math.asin(-Xt(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(d,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,u),this._y=0;break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ph,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mh.setFromEuler(this),this.setFromQuaternion(mh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class dr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var pp=0,gh=new P,hs=new Ze,$n=new $t,Fr=new P,qs=new P,mp=new P,gp=new Ze,_h=new P(1,0,0),xh=new P(0,1,0),yh=new P(0,0,1),vh={type:"added"},_p={type:"removed"},us={type:"childadded",child:null},go={type:"childremoved",child:null};class Ne extends kn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();let t=new P,e=new wn,n=new Ze,i=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new Ot}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(_h,t)}rotateY(t){return this.rotateOnAxis(xh,t)}rotateZ(t){return this.rotateOnAxis(yh,t)}translateOnAxis(t,e){return gh.copy(t).applyQuaternion(this.quaternion),this.position.add(gh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_h,t)}translateY(t){return this.translateOnAxis(xh,t)}translateZ(t){return this.translateOnAxis(yh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)Fr.copy(t);else Fr.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)$n.lookAt(qs,Fr,this.up);else $n.lookAt(Fr,qs,this.up);if(this.quaternion.setFromRotationMatrix($n),i)$n.extractRotation(i.matrixWorld),hs.setFromRotationMatrix($n),this.quaternion.premultiply(hs.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return Ut("Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vh),us.child=t,this.dispatchEvent(us),us.child=null;else Ut("Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(_p),go.child=t,this.dispatchEvent(go),go.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld);return t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vh),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,mp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,gp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let{x:e,y:n,z:i}=t,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(t);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let h=o[l];s(t.shapes,h)}else s(t.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(t.materials,this.material[o]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(t.animations,o))}}if(e){let a=r(t.geometries),o=r(t.materials),l=r(t.textures),c=r(t.images),h=r(t.shapes),d=r(t.skeletons),u=r(t.animations),p=r(t.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(h.length>0)n.shapes=h;if(d.length>0)n.skeletons=d;if(u.length>0)n.animations=u;if(p.length>0)n.nodes=p}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ne.DEFAULT_UP=new P(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class se extends Ne{constructor(){super();this.isGroup=!0,this.type="Group"}}var xp={type:"move"};class fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let _ of t.hand.values()){let S=e.getJointPose(_,n),m=this._getHandJoint(l,_);if(S!==null)m.matrix.fromArray(S.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=S.radius;m.visible=S!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=c.position.distanceTo(h.position),u=0.02,p=0.005;if(l.inputState.pinching&&d>u+p)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!l.inputState.pinching&&d<=u-p)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(o!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:t,target:this})}}if(a!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(xp)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}var Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Or={h:0,s:0,l:0};function _o(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Yt.workingColorSpace){if(t=Dl(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=_o(r,s,t+0.3333333333333333),this.g=_o(r,s,t),this.b=_o(r,s,t-0.3333333333333333)}return Yt.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)Ft("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=Ou[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else Ft("Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return Yt.workingToColorSpace(qe.copy(this),t),Math.round(Xt(qe.r*255,0,255))*65536+Math.round(Xt(qe.g*255,0,255))*256+Math.round(Xt(qe.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(qe.copy(this),e);let{r:n,g:i,b:s}=qe,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let h=r-a;switch(l=c<=0.5?h/(r+a):h/(2-r-a),r){case n:o=(i-s)/h+(i<s?6:0);break;case i:o=(s-n)/h+2;break;case s:o=(n-i)/h+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t="srgb"){Yt.workingToColorSpace(qe.copy(this),t);let{r:e,g:n,b:i}=qe;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(Or);let n=nr(xi.h,Or.h,e),i=nr(xi.s,Or.s,e),s=nr(xi.l,Or.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var qe=new Bt;Bt.NAMES=Ou;class xa extends Ne{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){if(super.copy(t,e),t.background!==null)this.background=t.background.clone();if(t.environment!==null)this.environment=t.environment.clone();if(t.fog!==null)this.fog=t.fog.clone();if(this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null)this.overrideMaterial=t.overrideMaterial.clone();return this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();return e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}var Mn=new P,jn=new P,xo=new P,Qn=new P,ds=new P,fs=new P,bh=new P,yo=new P,vo=new P,bo=new P,So=new ve,Mo=new ve,Eo=new ve;class dn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Mn.subVectors(t,e),i.cross(Mn);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Mn.subVectors(i,e),jn.subVectors(n,e),xo.subVectors(t,e);let r=Mn.dot(Mn),a=Mn.dot(jn),o=Mn.dot(xo),l=jn.dot(jn),c=jn.dot(xo),h=r*l-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,u=(l*o-a*c)*d,p=(r*c-a*o)*d;return s.set(1-u-p,p,u)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,Qn)===null)return!1;return Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,i,s,r,a,o){if(this.getBarycoord(t,e,n,i,Qn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,Qn.x),o.addScaledVector(r,Qn.y),o.addScaledVector(a,Qn.z),o}static getInterpolatedAttribute(t,e,n,i,s,r){return So.setScalar(0),Mo.setScalar(0),Eo.setScalar(0),So.fromBufferAttribute(t,e),Mo.fromBufferAttribute(t,n),Eo.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(So,s.x),r.addScaledVector(Mo,s.y),r.addScaledVector(Eo,s.z),r}static isFrontFacing(t,e,n,i){return Mn.subVectors(n,e),jn.subVectors(t,e),Mn.cross(jn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Mn.cross(jn).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return dn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;ds.subVectors(i,n),fs.subVectors(s,n),yo.subVectors(t,n);let o=ds.dot(yo),l=fs.dot(yo);if(o<=0&&l<=0)return e.copy(n);vo.subVectors(t,i);let c=ds.dot(vo),h=fs.dot(vo);if(c>=0&&h<=c)return e.copy(i);let d=o*h-c*l;if(d<=0&&o>=0&&c<=0)return r=o/(o-c),e.copy(n).addScaledVector(ds,r);bo.subVectors(t,s);let u=ds.dot(bo),p=fs.dot(bo);if(p>=0&&u<=p)return e.copy(s);let _=u*l-o*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(fs,a);let S=c*p-u*h;if(S<=0&&h-c>=0&&u-p>=0)return bh.subVectors(s,i),a=(h-c)/(h-c+(u-p)),e.copy(i).addScaledVector(bh,a);let m=1/(S+_+d);return r=_*m,a=d*m,e.copy(n).addScaledVector(ds,r).addScaledVector(fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Pn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=En.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(t.isMesh===!0)t.getVertexPosition(r,En);else En.fromBufferAttribute(s,r);En.applyMatrix4(t.matrixWorld),this.expandByPoint(En)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();Br.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();Br.copy(n.boundingBox)}Br.applyMatrix4(t.matrixWorld),this.union(Br)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),zr.subVectors(this.max,Ys),ps.subVectors(t.a,Ys),ms.subVectors(t.b,Ys),gs.subVectors(t.c,Ys),yi.subVectors(ms,ps),vi.subVectors(gs,ms),Li.subVectors(ps,gs);let e=[0,-yi.z,yi.y,0,-vi.z,vi.y,0,-Li.z,Li.y,yi.z,0,-yi.x,vi.z,0,-vi.x,Li.z,0,-Li.x,-yi.y,yi.x,0,-vi.y,vi.x,0,-Li.y,Li.x,0];if(!To(e,ps,ms,gs,zr))return!1;if(e=[1,0,0,0,1,0,0,0,1],!To(e,ps,ms,gs,zr))return!1;return Hr.crossVectors(yi,vi),e=[Hr.x,Hr.y,Hr.z],To(e,ps,ms,gs,zr)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(En).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var ti=[new P,new P,new P,new P,new P,new P,new P,new P],En=new P,Br=new Pn,ps=new P,ms=new P,gs=new P,yi=new P,vi=new P,Li=new P,Ys=new P,zr=new P,Hr=new P,Ni=new P;function To(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){Ni.fromArray(t,r);let o=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=e.dot(Ni),c=n.dot(Ni),h=i.dot(Ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ce=new P,kr=new Rt,yp=0;class Ge extends kn{constructor(t,e,n=!1){super();if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)kr.fromBufferAttribute(this,e),kr.applyMatrix3(t),this.setXY(e,kr.x,kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=Tn(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=ae(n,this.array);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=Tn(e,this.array);return e}setX(t,e){if(this.normalized)e=ae(e,this.array);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=Tn(e,this.array);return e}setY(t,e){if(this.normalized)e=ae(e,this.array);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=Tn(e,this.array);return e}setZ(t,e){if(this.normalized)e=ae(e,this.array);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=Tn(e,this.array);return e}setW(t,e){if(this.normalized)e=ae(e,this.array);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=ae(e,this.array),n=ae(n,this.array);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array),s=ae(s,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class ya extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class va extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Te extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}}var vp=new Pn,Zs=new P,wo=new P;class Vi{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else vp.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);let e=Zs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(Zs,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else wo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(wo)),this.expandByPoint(Zs.copy(t.center).sub(wo));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var bp=0,mn=new $t,Ao=new Ne,_s=new P,un=new Pn,Js=new Pn,ze=new P;class De extends kn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((Xf(t))?va:ya)(t,1);else this.index=t;return this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new Ot().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return Ao.lookAt(t),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Te(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}if(t.length>e.count)Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Pn;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(un.setFromBufferAttribute(s),this.morphTargetsRelative)ze.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(ze);else this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Vi;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];if(Js.setFromBufferAttribute(a),this.morphTargetsRelative)ze.addVectors(un.min,Js.min),un.expandByPoint(ze),ze.addVectors(un.max,Js.max),un.expandByPoint(ze);else un.expandByPoint(Js.min),un.expandByPoint(Js.max)}un.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)ze.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ze));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(ze.fromBufferAttribute(a,l),o)_s.fromBufferAttribute(t,l),ze.add(_s);i=Math.max(i,n.distanceToSquared(ze))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new Ge(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[];for(let A=0;A<n.count;A++)a[A]=new P,o[A]=new P;let l=new P,c=new P,h=new P,d=new Rt,u=new Rt,p=new Rt,_=new P,S=new P;function m(A,g,b){l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,g),h.fromBufferAttribute(n,b),d.fromBufferAttribute(s,A),u.fromBufferAttribute(s,g),p.fromBufferAttribute(s,b),c.sub(l),h.sub(l),u.sub(d),p.sub(d);let G=1/(u.x*p.y-p.x*u.y);if(!isFinite(G))return;_.copy(c).multiplyScalar(p.y).addScaledVector(h,-u.y).multiplyScalar(G),S.copy(h).multiplyScalar(u.x).addScaledVector(c,-p.x).multiplyScalar(G),a[A].add(_),a[g].add(_),a[b].add(_),o[A].add(S),o[g].add(S),o[b].add(S)}let f=this.groups;if(f.length===0)f=[{start:0,count:t.count}];for(let A=0,g=f.length;A<g;++A){let b=f[A],{start:G,count:I}=b;for(let B=G,j=G+I;B<j;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let E=new P,w=new P,v=new P,T=new P;function R(A){v.fromBufferAttribute(i,A),T.copy(v);let g=a[A];E.copy(g),E.sub(v.multiplyScalar(v.dot(g))).normalize(),w.crossVectors(T,g);let G=w.dot(o[A])<0?-1:1;r.setXYZW(A,E.x,E.y,E.z,G)}for(let A=0,g=f.length;A<g;++A){let b=f[A],{start:G,count:I}=b;for(let B=G,j=G+I;B<j;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new P,s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P;if(t)for(let d=0,u=t.count;d<u;d+=3){let p=t.getX(d+0),_=t.getX(d+1),S=t.getX(d+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),a.fromBufferAttribute(n,p),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),a.add(c),o.add(c),l.add(c),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:c,normalized:h}=a,d=new l.constructor(o.length*c),u=0,p=0;for(let _=0,S=o.length;_<S;_++){if(a.isInterleavedBufferAttribute)u=o[_]*a.data.stride+a.offset;else u=o[_]*c;for(let m=0;m<c;m++)d[p++]=l[u++]}return new Ge(d,c,h)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new De,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=t(o,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,h=l.length;c<h;c++){let d=l[c],u=t(d,n);o.push(u)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)t[l]=o[l];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let h=0,d=l.length;h<d;h++){let u=l[h];c.push(u.toJSON(t.data))}if(c.length>0)i[o]=c,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)t.data.boundingSphere=a.toJSON();return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone());let i=t.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(e))}let s=t.morphAttributes;for(let l in s){let c=[],h=s[l];for(let d=0,u=h.length;d<u;d++)c.push(h[d].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,c=r.length;l<c;l++){let h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=t.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ba{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){if(t.arrayBuffers===void 0)t.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=ni();if(t.arrayBuffers[this.array.buffer._uuid]===void 0)t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){if(t.arrayBuffers===void 0)t.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=ni();if(t.arrayBuffers[this.array.buffer._uuid]===void 0)t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}var $e=new P;class Cs{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];if(this.normalized)n=Tn(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=ae(n,this.array);return this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){if(this.normalized)e=ae(e,this.array);return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){if(this.normalized)e=ae(e,this.array);return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){if(this.normalized)e=ae(e,this.array);return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){if(this.normalized)e=ae(e,this.array);return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];if(this.normalized)e=Tn(e,this.array);return e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];if(this.normalized)e=Tn(e,this.array);return e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];if(this.normalized)e=Tn(e,this.array);return e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];if(this.normalized)e=Tn(e,this.array);return e}setXY(t,e,n){if(t=t*this.data.stride+this.offset,this.normalized)e=ae(e,this.array),n=ae(n,this.array);return this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){if(t=t*this.data.stride+this.offset,this.normalized)e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array);return this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t=t*this.data.stride+this.offset,this.normalized)e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array),s=ae(s,this.array);return this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){sr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Ge(new this.array.constructor(e),this.itemSize,this.normalized)}else{if(t.interleavedBuffers===void 0)t.interleavedBuffers={};if(t.interleavedBuffers[this.data.uuid]===void 0)t.interleavedBuffers[this.data.uuid]=this.data.clone(t);return new Cs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(t){if(t===void 0){sr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else{if(t.interleavedBuffers===void 0)t.interleavedBuffers={};if(t.interleavedBuffers[this.data.uuid]===void 0)t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var Ro=new P,Sp=new P,Mp=new Ot;class sn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ro.subVectors(n,e).cross(Sp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Ro),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let r=-(t.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Mp.getNormalMatrix(t),i=this.coplanarPoint(Ro).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}var Ep=0;class Ti extends kn{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(t,e){if(t.uuid!==void 0)this.uuid=t.uuid;if(t.name!==void 0)this.name=t.name;if(t.color!==void 0&&this.color!==void 0)this.color.setHex(t.color);if(t.roughness!==void 0)this.roughness=t.roughness;if(t.metalness!==void 0)this.metalness=t.metalness;if(t.sheen!==void 0)this.sheen=t.sheen;if(t.sheenColor!==void 0)this.sheenColor=new Bt().setHex(t.sheenColor);if(t.sheenRoughness!==void 0)this.sheenRoughness=t.sheenRoughness;if(t.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(t.emissive);if(t.specular!==void 0&&this.specular!==void 0)this.specular.setHex(t.specular);if(t.specularIntensity!==void 0)this.specularIntensity=t.specularIntensity;if(t.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(t.specularColor);if(t.shininess!==void 0)this.shininess=t.shininess;if(t.clearcoat!==void 0)this.clearcoat=t.clearcoat;if(t.clearcoatRoughness!==void 0)this.clearcoatRoughness=t.clearcoatRoughness;if(t.dispersion!==void 0)this.dispersion=t.dispersion;if(t.retroreflectivity!==void 0)this.retroreflectivity=t.retroreflectivity;if(t.iridescence!==void 0)this.iridescence=t.iridescence;if(t.iridescenceIOR!==void 0)this.iridescenceIOR=t.iridescenceIOR;if(t.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=t.iridescenceThicknessRange;if(t.transmission!==void 0)this.transmission=t.transmission;if(t.thickness!==void 0)this.thickness=t.thickness;if(t.attenuationDistance!==void 0)this.attenuationDistance=t.attenuationDistance;if(t.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(t.attenuationColor);if(t.anisotropy!==void 0)this.anisotropy=t.anisotropy;if(t.anisotropyRotation!==void 0)this.anisotropyRotation=t.anisotropyRotation;if(t.fog!==void 0)this.fog=t.fog;if(t.flatShading!==void 0)this.flatShading=t.flatShading;if(t.blending!==void 0)this.blending=t.blending;if(t.combine!==void 0)this.combine=t.combine;if(t.side!==void 0)this.side=t.side;if(t.shadowSide!==void 0)this.shadowSide=t.shadowSide;if(t.opacity!==void 0)this.opacity=t.opacity;if(t.transparent!==void 0)this.transparent=t.transparent;if(t.alphaTest!==void 0)this.alphaTest=t.alphaTest;if(t.alphaHash!==void 0)this.alphaHash=t.alphaHash;if(t.depthFunc!==void 0)this.depthFunc=t.depthFunc;if(t.depthTest!==void 0)this.depthTest=t.depthTest;if(t.depthWrite!==void 0)this.depthWrite=t.depthWrite;if(t.colorWrite!==void 0)this.colorWrite=t.colorWrite;if(t.clippingPlanes!==void 0)this.clippingPlanes=t.clippingPlanes.map((n)=>new sn().fromJSON(n));if(t.clipIntersection!==void 0)this.clipIntersection=t.clipIntersection;if(t.clipShadows!==void 0)this.clipShadows=t.clipShadows;if(t.depthPacking!==void 0)this.depthPacking=t.depthPacking;if(t.blendSrc!==void 0)this.blendSrc=t.blendSrc;if(t.blendDst!==void 0)this.blendDst=t.blendDst;if(t.blendEquation!==void 0)this.blendEquation=t.blendEquation;if(t.blendSrcAlpha!==void 0)this.blendSrcAlpha=t.blendSrcAlpha;if(t.blendDstAlpha!==void 0)this.blendDstAlpha=t.blendDstAlpha;if(t.blendEquationAlpha!==void 0)this.blendEquationAlpha=t.blendEquationAlpha;if(t.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(t.blendColor);if(t.blendAlpha!==void 0)this.blendAlpha=t.blendAlpha;if(t.stencilWriteMask!==void 0)this.stencilWriteMask=t.stencilWriteMask;if(t.stencilFunc!==void 0)this.stencilFunc=t.stencilFunc;if(t.stencilRef!==void 0)this.stencilRef=t.stencilRef;if(t.stencilFuncMask!==void 0)this.stencilFuncMask=t.stencilFuncMask;if(t.stencilFail!==void 0)this.stencilFail=t.stencilFail;if(t.stencilZFail!==void 0)this.stencilZFail=t.stencilZFail;if(t.stencilZPass!==void 0)this.stencilZPass=t.stencilZPass;if(t.stencilWrite!==void 0)this.stencilWrite=t.stencilWrite;if(t.wireframe!==void 0)this.wireframe=t.wireframe;if(t.wireframeLinewidth!==void 0)this.wireframeLinewidth=t.wireframeLinewidth;if(t.wireframeLinecap!==void 0)this.wireframeLinecap=t.wireframeLinecap;if(t.wireframeLinejoin!==void 0)this.wireframeLinejoin=t.wireframeLinejoin;if(t.rotation!==void 0)this.rotation=t.rotation;if(t.linewidth!==void 0)this.linewidth=t.linewidth;if(t.linecap!==void 0)this.linecap=t.linecap;if(t.linejoin!==void 0)this.linejoin=t.linejoin;if(t.dashSize!==void 0)this.dashSize=t.dashSize;if(t.gapSize!==void 0)this.gapSize=t.gapSize;if(t.scale!==void 0)this.scale=t.scale;if(t.polygonOffset!==void 0)this.polygonOffset=t.polygonOffset;if(t.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=t.polygonOffsetFactor;if(t.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=t.polygonOffsetUnits;if(t.dithering!==void 0)this.dithering=t.dithering;if(t.alphaToCoverage!==void 0)this.alphaToCoverage=t.alphaToCoverage;if(t.premultipliedAlpha!==void 0)this.premultipliedAlpha=t.premultipliedAlpha;if(t.forceSinglePass!==void 0)this.forceSinglePass=t.forceSinglePass;if(t.allowOverride!==void 0)this.allowOverride=t.allowOverride;if(t.visible!==void 0)this.visible=t.visible;if(t.toneMapped!==void 0)this.toneMapped=t.toneMapped;if(t.userData!==void 0)this.userData=t.userData;if(t.vertexColors!==void 0)if(typeof t.vertexColors==="number")this.vertexColors=t.vertexColors>0;else this.vertexColors=t.vertexColors;if(t.size!==void 0)this.size=t.size;if(t.sizeAttenuation!==void 0)this.sizeAttenuation=t.sizeAttenuation;if(t.map!==void 0)this.map=e[t.map]||null;if(t.matcap!==void 0)this.matcap=e[t.matcap]||null;if(t.alphaMap!==void 0)this.alphaMap=e[t.alphaMap]||null;if(t.bumpMap!==void 0)this.bumpMap=e[t.bumpMap]||null;if(t.bumpScale!==void 0)this.bumpScale=t.bumpScale;if(t.normalMap!==void 0)this.normalMap=e[t.normalMap]||null;if(t.normalMapType!==void 0)this.normalMapType=t.normalMapType;if(t.normalScale!==void 0){let n=t.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new Rt().fromArray(n)}if(t.displacementMap!==void 0)this.displacementMap=e[t.displacementMap]||null;if(t.displacementScale!==void 0)this.displacementScale=t.displacementScale;if(t.displacementBias!==void 0)this.displacementBias=t.displacementBias;if(t.roughnessMap!==void 0)this.roughnessMap=e[t.roughnessMap]||null;if(t.metalnessMap!==void 0)this.metalnessMap=e[t.metalnessMap]||null;if(t.emissiveMap!==void 0)this.emissiveMap=e[t.emissiveMap]||null;if(t.emissiveIntensity!==void 0)this.emissiveIntensity=t.emissiveIntensity;if(t.specularMap!==void 0)this.specularMap=e[t.specularMap]||null;if(t.specularIntensityMap!==void 0)this.specularIntensityMap=e[t.specularIntensityMap]||null;if(t.specularColorMap!==void 0)this.specularColorMap=e[t.specularColorMap]||null;if(t.envMap!==void 0)this.envMap=e[t.envMap]||null;if(t.envMapRotation!==void 0)this.envMapRotation.fromArray(t.envMapRotation);if(t.envMapIntensity!==void 0)this.envMapIntensity=t.envMapIntensity;if(t.reflectivity!==void 0)this.reflectivity=t.reflectivity;if(t.refractionRatio!==void 0)this.refractionRatio=t.refractionRatio;if(t.lightMap!==void 0)this.lightMap=e[t.lightMap]||null;if(t.lightMapIntensity!==void 0)this.lightMapIntensity=t.lightMapIntensity;if(t.aoMap!==void 0)this.aoMap=e[t.aoMap]||null;if(t.aoMapIntensity!==void 0)this.aoMapIntensity=t.aoMapIntensity;if(t.gradientMap!==void 0)this.gradientMap=e[t.gradientMap]||null;if(t.clearcoatMap!==void 0)this.clearcoatMap=e[t.clearcoatMap]||null;if(t.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null;if(t.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null;if(t.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new Rt().fromArray(t.clearcoatNormalScale);if(t.iridescenceMap!==void 0)this.iridescenceMap=e[t.iridescenceMap]||null;if(t.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null;if(t.transmissionMap!==void 0)this.transmissionMap=e[t.transmissionMap]||null;if(t.thicknessMap!==void 0)this.thicknessMap=e[t.thicknessMap]||null;if(t.anisotropyMap!==void 0)this.anisotropyMap=e[t.anisotropyMap]||null;if(t.sheenColorMap!==void 0)this.sheenColorMap=e[t.sheenColorMap]||null;if(t.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}}class In extends Ti{constructor(t){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var xs,Ks=new P,ys=new P,vs=new P,bs=new Rt,$s=new Rt,Bu=new $t,Gr=new P,js=new P,Wr=new P,Sh=new Rt,Co=new Rt,Mh=new Rt;class Wn extends Ne{constructor(t=new In){super();if(this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new De;let e=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),n=new ba(e,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new Cs(n,3,0,!1)),xs.setAttribute("uv",new Cs(n,2,3,!1))}this.geometry=xs,this.material=t,this.center=new Rt(0.5,0.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){if(t.camera===null)Ut('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(ys.setFromMatrixScale(this.matrixWorld),Bu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)ys.multiplyScalar(-vs.z);let n=this.material.rotation,i,s;if(n!==0)s=Math.cos(n),i=Math.sin(n);let r=this.center;Vr(Gr.set(-0.5,-0.5,0),vs,r,ys,i,s),Vr(js.set(0.5,-0.5,0),vs,r,ys,i,s),Vr(Wr.set(0.5,0.5,0),vs,r,ys,i,s),Sh.set(0,0),Co.set(1,0),Mh.set(1,1);let a=t.ray.intersectTriangle(Gr,js,Wr,!1,Ks);if(a===null){if(Vr(js.set(-0.5,0.5,0),vs,r,ys,i,s),Co.set(0,1),a=t.ray.intersectTriangle(Gr,Wr,js,!1,Ks),a===null)return}let o=t.ray.origin.distanceTo(Ks);if(o<t.near||o>t.far)return;e.push({distance:o,point:Ks.clone(),uv:dn.getInterpolation(Ks,Gr,js,Wr,Sh,Co,Mh,new Rt),face:null,object:this})}copy(t,e){if(super.copy(t,e),t.center!==void 0)this.center.copy(t.center);return this.material=t.material,this}}function Vr(t,e,n,i,s,r){if(bs.subVectors(t,n).addScalar(0.5).multiply(i),s!==void 0)$s.x=r*bs.x-s*bs.y,$s.y=s*bs.x+r*bs.y;else $s.copy(bs);t.copy(e),t.x+=$s.x,t.y+=$s.y,t.applyMatrix4(Bu)}var ei=new P,Po=new P,Xr=new P,qr=new P;class Us{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ei.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){Po.copy(t).add(e).multiplyScalar(0.5),Xr.copy(e).sub(t).normalize(),qr.copy(this.origin).sub(Po);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(Xr),a=qr.dot(this.direction),o=-qr.dot(Xr),l=qr.lengthSq(),c=Math.abs(1-r*r),h,d,u,p;if(c>0)if(h=r*o-a,d=r*a-o,p=s*c,h>=0)if(d>=-p)if(d<=p){let _=1/c;h*=_,d*=_,u=h*(h+r*d+2*a)+d*(r*h+d+2*o)+l}else d=s,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*o)+l;else d=-s,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*o)+l;else if(d<=-p)h=Math.max(0,-(-r*s+a)),d=h>0?-s:Math.min(Math.max(-s,-o),s),u=-h*h+d*(d+2*o)+l;else if(d<=p)h=0,d=Math.min(Math.max(-s,-o),s),u=d*(d+2*o)+l;else h=Math.max(0,-(r*s+a)),d=h>0?s:Math.min(Math.max(-s,-o),s),u=-h*h+d*(d+2*o)+l;else d=r>0?-s:s,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,h);if(i)i.copy(Po).addScaledVector(Xr,d);return u}intersectSphere(t,e){if(t.radius<0)return null;ei.subVectors(t.center,this.origin);let n=ei.dot(this.direction),i=ei.dot(ei)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,e);return this.at(a,e)}intersectsSphere(t){if(t.radius<0)return!1;return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;if(l>=0)n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l;else n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l;if(c>=0)s=(t.min.y-d.y)*c,r=(t.max.y-d.y)*c;else s=(t.max.y-d.y)*c,r=(t.min.y-d.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(h>=0)a=(t.min.z-d.z)*h,o=(t.max.z-d.z)*h;else a=(t.max.z-d.z)*h,o=(t.min.z-d.z)*h;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,i,s){let r=this.origin,a=this.direction,{x:o,y:l,z:c}=a,h=t.x-r.x,d=t.y-r.y,u=t.z-r.z,p=e.x-r.x,_=e.y-r.y,S=e.z-r.z,m=n.x-r.x,f=n.y-r.y,E=n.z-r.z,w=Math.abs(o),v=Math.abs(l),T=Math.abs(c),R,A,g,b,G,I,B,j,L,q,et,W;if(w>=v&&w>=T)if(g=o,I=h,L=p,W=m,o>=0)R=l,A=c,b=d,G=u,B=_,j=S,q=f,et=E;else R=c,A=l,b=u,G=d,B=S,j=_,q=E,et=f;else if(v>=T)if(g=l,I=d,L=_,W=f,l>=0)R=c,A=o,b=u,G=h,B=S,j=p,q=E,et=m;else R=o,A=c,b=h,G=u,B=p,j=S,q=m,et=E;else if(g=c,I=u,L=S,W=E,c>=0)R=o,A=l,b=h,G=d,B=p,j=_,q=m,et=f;else R=l,A=o,b=d,G=h,B=_,j=p,q=f,et=m;if(g===0)return null;let st=R/g,C=A/g,N=1/g,Z=b-st*I,rt=G-C*I,lt=B-st*L,Pt=j-C*L,Et=q-st*W,z=et-C*W,tt=Et*Pt-z*lt,K=Z*z-rt*Et,ct=lt*rt-Pt*Z;if(i){if(tt<0||K<0||ct<0)return null}else if((tt<0||K<0||ct<0)&&(tt>0||K>0||ct>0))return null;let vt=tt+K+ct;if(vt===0)return null;let mt=N*(tt*I+K*L+ct*W);if(vt>0?mt<0:mt>0)return null;return this.at(mt/vt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je extends Ti{constructor(t){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var Eh=new $t,Di=new Us,Yr=new Vi,Th=new P,Zr=new P,Jr=new P,Kr=new P,Io=new P,$r=new P,wh=new P,jr=new P;class Zt extends Ne{constructor(t=new De,e=new je){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){$r.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],h=s[o];if(c===0)continue;if(Io.fromBufferAttribute(h,t),r)$r.addScaledVector(Io,c);else $r.addScaledVector(Io.sub(e),c)}e.add($r)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(Yr.copy(n.boundingSphere),Yr.applyMatrix4(s),Di.copy(t.ray).recast(t.near),Yr.containsPoint(Di.origin)===!1){if(Di.intersectSphere(Yr,Th)===null)return;if(Di.origin.distanceToSquared(Th)>(t.far-t.near)**2)return}if(Eh.copy(s).invert(),Di.copy(t.ray).applyMatrix4(Eh),n.boundingBox!==null){if(Di.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,Di)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,{groups:d,drawRange:u}=s;if(a!==null)if(Array.isArray(r))for(let p=0,_=d.length;p<_;p++){let S=d[p],m=r[S.materialIndex],f=Math.max(S.start,u.start),E=Math.min(a.count,Math.min(S.start+S.count,u.start+u.count));for(let w=f,v=E;w<v;w+=3){let T=a.getX(w),R=a.getX(w+1),A=a.getX(w+2);if(i=Qr(this,m,t,n,l,c,h,T,R,A),i)i.faceIndex=Math.floor(w/3),i.face.materialIndex=S.materialIndex,e.push(i)}}else{let p=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let S=p,m=_;S<m;S+=3){let f=a.getX(S),E=a.getX(S+1),w=a.getX(S+2);if(i=Qr(this,r,t,n,l,c,h,f,E,w),i)i.faceIndex=Math.floor(S/3),e.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let p=0,_=d.length;p<_;p++){let S=d[p],m=r[S.materialIndex],f=Math.max(S.start,u.start),E=Math.min(o.count,Math.min(S.start+S.count,u.start+u.count));for(let w=f,v=E;w<v;w+=3){let T=w,R=w+1,A=w+2;if(i=Qr(this,m,t,n,l,c,h,T,R,A),i)i.faceIndex=Math.floor(w/3),i.face.materialIndex=S.materialIndex,e.push(i)}}else{let p=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let S=p,m=_;S<m;S+=3){let f=S,E=S+1,w=S+2;if(i=Qr(this,r,t,n,l,c,h,f,E,w),i)i.faceIndex=Math.floor(S/3),e.push(i)}}}}function Tp(t,e,n,i,s,r,a,o){let l;if(e.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,e.side===0,o);if(l===null)return null;jr.copy(o),jr.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(jr);if(c<n.near||c>n.far)return null;return{distance:c,point:jr.clone(),object:t}}function Qr(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,Zr),t.getVertexPosition(l,Jr),t.getVertexPosition(c,Kr);let h=Tp(t,e,n,i,Zr,Jr,Kr,wh);if(h){let d=new P;if(dn.getBarycoord(wh,Zr,Jr,Kr,d),s)h.uv=dn.getInterpolatedAttribute(s,o,l,c,d,new Rt);if(r)h.uv1=dn.getInterpolatedAttribute(r,o,l,c,d,new Rt);if(a){if(h.normal=dn.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(i.direction)>0)h.normal.multiplyScalar(-1)}let u={a:o,b:l,c,normal:new P,materialIndex:0};dn.getNormal(Zr,Jr,Kr,u.normal),h.face=u,h.barycoord=d}return h}class Sa extends ke{constructor(t=null,e=1,n=1,i,s,r,a,o,l=1003,c=1003,h,d){super(null,r,a,o,l,c,i,s,h,d);this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rr extends Ge{constructor(t,e,n,i=1){super(t,e,n);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}var Ss=new $t,Ah=new $t,ta=[],Rh=new Pn,wp=new $t,Qs=new Zt,tr=new Vi;class Ma extends Zt{constructor(t,e,n){super(t,e);this.isInstancedMesh=!0,this.instanceMatrix=new rr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,wp)}computeBoundingBox(){let t=this.geometry,e=this.count;if(this.boundingBox===null)this.boundingBox=new Pn;if(t.boundingBox===null)t.computeBoundingBox();this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ss),Rh.copy(t.boundingBox).applyMatrix4(Ss),this.boundingBox.union(Rh)}computeBoundingSphere(){let t=this.geometry,e=this.count;if(this.boundingSphere===null)this.boundingSphere=new Vi;if(t.boundingSphere===null)t.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ss),tr.copy(t.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(tr)}copy(t,e){if(super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null)this.morphTexture=t.morphTexture.clone();if(t.instanceColor!==null)this.instanceColor=t.instanceColor.clone();if(this.count=t.count,t.boundingBox!==null)this.boundingBox=t.boundingBox.clone();if(t.boundingSphere!==null)this.boundingSphere=t.boundingSphere.clone();return this}getColorAt(t,e){if(this.instanceColor===null)return e.setRGB(1,1,1);else return e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(tr.copy(this.boundingSphere),tr.applyMatrix4(n),t.ray.intersectsSphere(tr)===!1)return;for(let s=0;s<i;s++){this.getMatrixAt(s,Ss),Ah.multiplyMatrices(n,Ss),Qs.matrixWorld=Ah,Qs.raycast(t,ta);for(let r=0,a=ta.length;r<a;r++){let o=ta[r];o.instanceId=s,o.object=this,e.push(o)}ta.length=0}}setColorAt(t,e){if(this.instanceColor===null)this.instanceColor=new rr(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;if(this.morphTexture===null)this.morphTexture=new Sa(new Float32Array(i*this.count),i,this.count,1028,1015);let s=this.morphTexture.source.data.data,r=0;for(let l=0;l<n.length;l++)r+=n[l];let a=this.geometry.morphTargetsRelative?1:1-r,o=i*t;return s[o]=a,s.set(n,o+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var Ui=new Vi,Ap=new Rt(0.5,0.5),ea=new P;class pr{constructor(t=new sn,e=new sn,n=new sn,i=new sn,s=new sn,r=new sn){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],_=s[9],S=s[10],m=s[11],f=s[12],E=s[13],w=s[14],v=s[15];if(i[0].setComponents(l-r,u-c,m-p,v-f).normalize(),i[1].setComponents(l+r,u+c,m+p,v+f).normalize(),i[2].setComponents(l+a,u+h,m+_,v+E).normalize(),i[3].setComponents(l-a,u-h,m-_,v-E).normalize(),n)i[4].setComponents(o,d,S,w).normalize(),i[5].setComponents(l-o,u-d,m-S,v-w).normalize();else if(i[4].setComponents(l-o,u-d,m-S,v-w).normalize(),e===2000)i[5].setComponents(l+o,u+d,m+S,v+w).normalize();else if(e===2001)i[5].setComponents(o,d,S,w).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){Ui.center.set(0,0,0);let e=Ap.distanceTo(t.center);return Ui.radius=0.7071067811865476+e,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ea.x=i.normal.x>0?t.max.x:t.min.x,ea.y=i.normal.y>0?t.max.y:t.min.y,ea.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ea)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ea extends ke{constructor(t=[],e=301,n,i,s,r,a,o,l,c){super(t,e,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ta extends ke{constructor(t,e,n,i,s,r,a,o,l){super(t,e,n,i,s,r,a,o,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xi extends ke{constructor(t,e,n=1014,i,s,r,a=1003,o=1003,l,c=1026,h=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ur(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Bl extends Xi{constructor(t,e=1014,n=301,i,s,r=1003,a=1003,o,l=1026){let c={width:t,height:t,depth:1},h=[c,c,c,c,c,c];super(t,t,e,n,i,s,r,a,o,l);this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class wa extends ke{constructor(t=null){super();this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class wi extends De{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],h=[],d=0,u=0;p("z","y","x",-1,-1,n,e,t,r,s,0),p("z","y","x",1,-1,n,e,-t,r,s,1),p("x","z","y",1,1,t,n,e,i,r,2),p("x","z","y",1,-1,t,n,-e,i,r,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(h,2));function p(_,S,m,f,E,w,v,T,R,A,g){let b=w/R,G=v/A,I=w/2,B=v/2,j=T/2,L=R+1,q=A+1,et=0,W=0,st=new P;for(let C=0;C<q;C++){let N=C*G-B;for(let Z=0;Z<L;Z++){let rt=Z*b-I;st[_]=rt*f,st[S]=N*E,st[m]=j,l.push(st.x,st.y,st.z),st[_]=0,st[S]=0,st[m]=T>0?1:-1,c.push(st.x,st.y,st.z),h.push(Z/R),h.push(1-C/A),et+=1}}for(let C=0;C<A;C++)for(let N=0;N<R;N++){let Z=d+N+L*C,rt=d+N+L*(C+1),lt=d+(N+1)+L*(C+1),Pt=d+(N+1)+L*C;o.push(Z,rt,Pt),o.push(rt,lt,Pt),W+=6}a.addGroup(u,W,g),u+=W,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class qi extends De{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o};let l=this;i=Math.floor(i),s=Math.floor(s);let c=[],h=[],d=[],u=[],p=0,_=[],S=n/2,m=0;if(f(),r===!1){if(t>0)E(!0);if(e>0)E(!1)}this.setIndex(c),this.setAttribute("position",new Te(h,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(u,2));function f(){let w=new P,v=new P,T=0,R=(e-t)/n;for(let A=0;A<=s;A++){let g=[],b=A/s,G=b*(e-t)+t;for(let I=0;I<=i;I++){let B=I/i,j=B*o+a,L=Math.sin(j),q=Math.cos(j);v.x=G*L,v.y=-b*n+S,v.z=G*q,h.push(v.x,v.y,v.z),w.set(L,R,q).normalize(),d.push(w.x,w.y,w.z),u.push(B,1-b),g.push(p++)}_.push(g)}for(let A=0;A<i;A++)for(let g=0;g<s;g++){let b=_[g][A],G=_[g+1][A],I=_[g+1][A+1],B=_[g][A+1];if(t>0||g!==0)c.push(b,G,B),T+=3;if(e>0||g!==s-1)c.push(G,I,B),T+=3}l.addGroup(m,T,0),m+=T}function E(w){let v=p,T=new Rt,R=new P,A=0,g=w===!0?t:e,b=w===!0?1:-1;for(let I=1;I<=i;I++)h.push(0,S*b,0),d.push(0,b,0),u.push(0.5,0.5),p++;let G=p;for(let I=0;I<=i;I++){let j=I/i*o+a,L=Math.cos(j),q=Math.sin(j);R.x=g*q,R.y=S*b,R.z=g*L,h.push(R.x,R.y,R.z),d.push(0,b,0),T.x=L*0.5+0.5,T.y=q*0.5*b+0.5,u.push(T.x,T.y),p++}for(let I=0;I<i;I++){let B=v+I,j=G+I;if(w===!0)c.push(j,j+1,B);else c.push(j+1,j,B);A+=3}l.addGroup(m,A,w===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Aa extends De{constructor(t=[],e=[],n=1,i=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],r=[];if(a(i),l(n),c(),this.setAttribute("position",new Te(s,3)),this.setAttribute("normal",new Te(s.slice(),3)),this.setAttribute("uv",new Te(r,2)),i===0)this.computeVertexNormals();else this.normalizeNormals();function a(f){let E=new P,w=new P,v=new P;for(let T=0;T<e.length;T+=3)u(e[T+0],E),u(e[T+1],w),u(e[T+2],v),o(E,w,v,f)}function o(f,E,w,v){let T=v+1,R=[];for(let A=0;A<=T;A++){R[A]=[];let g=f.clone().lerp(w,A/T),b=E.clone().lerp(w,A/T),G=T-A;for(let I=0;I<=G;I++)if(I===0&&A===T)R[A][I]=g;else R[A][I]=g.clone().lerp(b,I/G)}for(let A=0;A<T;A++)for(let g=0;g<2*(T-A)-1;g++){let b=Math.floor(g/2);if(g%2===0)d(R[A][b+1]),d(R[A+1][b]),d(R[A][b]);else d(R[A][b+1]),d(R[A+1][b+1]),d(R[A+1][b])}}function l(f){let E=new P;for(let w=0;w<s.length;w+=3)E.x=s[w+0],E.y=s[w+1],E.z=s[w+2],E.normalize().multiplyScalar(f),s[w+0]=E.x,s[w+1]=E.y,s[w+2]=E.z}function c(){let f=new P;for(let E=0;E<s.length;E+=3){f.x=s[E+0],f.y=s[E+1],f.z=s[E+2];let w=S(f)/2/Math.PI+0.5,v=m(f)/Math.PI+0.5;r.push(w,1-v)}p(),h()}function h(){for(let f=0;f<r.length;f+=6){let E=r[f+0],w=r[f+2],v=r[f+4],T=Math.max(E,w,v),R=Math.min(E,w,v);if(T>0.9&&R<0.1){if(E<0.2)r[f+0]+=1;if(w<0.2)r[f+2]+=1;if(v<0.2)r[f+4]+=1}}}function d(f){s.push(f.x,f.y,f.z)}function u(f,E){let w=f*3;E.x=t[w+0],E.y=t[w+1],E.z=t[w+2]}function p(){let f=new P,E=new P,w=new P,v=new P,T=new Rt,R=new Rt,A=new Rt;for(let g=0,b=0;g<s.length;g+=9,b+=6){f.set(s[g+0],s[g+1],s[g+2]),E.set(s[g+3],s[g+4],s[g+5]),w.set(s[g+6],s[g+7],s[g+8]),T.set(r[b+0],r[b+1]),R.set(r[b+2],r[b+3]),A.set(r[b+4],r[b+5]),v.copy(f).add(E).add(w).divideScalar(3);let G=S(v);_(T,b+0,f,G),_(R,b+2,E,G),_(A,b+4,w,G)}}function _(f,E,w,v){if(v<0&&f.x===1)r[E]=f.x-1;if(w.x===0&&w.z===0)r[E]=v/2/Math.PI+0.5}function S(f){return Math.atan2(f.z,-f.x)}function m(f){return Math.atan2(-f.y,Math.sqrt(f.x*f.x+f.z*f.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Aa(t.vertices,t.indices,t.radius,t.detail)}}class Yi extends Aa{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e);this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Yi(t.radius,t.detail)}}class Ai extends De{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,h=t/a,d=e/o,u=[],p=[],_=[],S=[];for(let m=0;m<c;m++){let f=m*d-r;for(let E=0;E<l;E++){let w=E*h-s;p.push(w,-f,0),_.push(0,0,1),S.push(E/a),S.push(1-m/o)}}for(let m=0;m<o;m++)for(let f=0;f<a;f++){let E=f+l*m,w=f+l*(m+1),v=f+1+l*(m+1),T=f+1+l*m;u.push(E,w,T),u.push(w,v,T)}this.setIndex(u),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.width,t.height,t.widthSegments,t.heightSegments)}}class ri extends De{constructor(t=0.5,e=1,n=32,i=1,s=0,r=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);let a=[],o=[],l=[],c=[],h=t,d=(e-t)/i,u=new P,p=new Rt;for(let _=0;_<=i;_++){for(let S=0;S<=n;S++){let m=s+S/n*r;u.x=h*Math.cos(m),u.y=h*Math.sin(m),o.push(u.x,u.y,u.z),l.push(0,0,1),p.x=(u.x/e+1)/2,p.y=(u.y/e+1)/2,c.push(p.x,p.y)}h+=d}for(let _=0;_<i;_++){let S=_*(n+1);for(let m=0;m<n;m++){let f=m+S,E=f,w=f+n+1,v=f+n+2,T=f+1;a.push(E,w,T),a.push(w,v,T)}}this.setIndex(a),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}function Zi(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(Ch(s))if(s.isRenderTargetTexture)Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))if(Ch(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Je(t){let e={};for(let n=0;n<t.length;n++){let i=Zi(t[n]);for(let s in i)e[s]=i[s]}return e}function Ch(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Rp(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function zl(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return Yt.workingColorSpace}var zu={clone:Zi,merge:Je},Cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends Ti{constructor(t){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cp,this.fragmentShader=Pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=Rp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Bt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Rt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new P().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ve().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ot().fromArray(i.value);break;case"m4":this.uniforms[n].value=new $t().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0)this.defines=t.defines;if(t.vertexShader!==void 0)this.vertexShader=t.vertexShader;if(t.fragmentShader!==void 0)this.fragmentShader=t.fragmentShader;if(t.glslVersion!==void 0)this.glslVersion=t.glslVersion;if(t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];if(t.lights!==void 0)this.lights=t.lights;if(t.clipping!==void 0)this.clipping=t.clipping;return this}}class Hl extends gn{constructor(t){super(t);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ri extends Ti{constructor(t){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class kl extends Ti{constructor(t){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Gl extends Ti{constructor(t){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Ms(t,e){if(!t||t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}function Lo(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}class Ji{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];if(t<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let a=n+r>>>1;if(t<e[a])r=a;else n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Wl extends Ji{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,a=2*e-n;break;case 2402:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,o=2*n-e;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=t-1,o=e}let l=(n-e)*0.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(n-e)/(i-e),_=p*p,S=_*p,m=-d*S+2*d*_-d*p,f=(1+d)*S+(-1.5-2*d)*_+(-0.5+d)*p+1,E=(-1-u)*S+(1.5+u)*_+0.5*p,w=u*S-u*_;for(let v=0;v!==a;++v)s[v]=m*r[c+v]+f*r[l+v]+E*r[o+v]+w*r[h+v];return s}}class Vl extends Ji{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),h=1-c;for(let d=0;d!==a;++d)s[d]=r[l+d]*h+r[o+d]*c;return s}}class Xl extends Ji{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class ql extends Ji{interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.inTangents,h=this.outTangents;if(!c||!h){let p=(n-e)/(i-e),_=1-p;for(let S=0;S!==a;++S)s[S]=r[l+S]*_+r[o+S]*p;return s}let d=a*2,u=t-1;for(let p=0;p!==a;++p){let _=r[l+p],S=r[o+p],m=u*d+p*2,f=h[m],E=h[m+1],w=t*d+p*2,v=c[w],T=c[w+1],R=Lp(n,e,f,v,i);s[p]=Hu(R,_,E,T,S)}return s}}function Hu(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function Ip(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function Lp(t,e,n,i,s){let r=(t-e)/(s-e);for(let a=0;a<8;a++){let o=Hu(r,e,n,i,s)-t;if(Math.abs(o)<0.0000000001)break;let l=Ip(r,e,n,i,s);if(Math.abs(l)<0.0000000001)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class _n{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ms(e,this.TimeBufferType),this.values=Ms(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ms(t.times,Array),values:Ms(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i;if(Lo(t.settings))n.settings={inTangents:Ms(t.settings.inTangents,Array),outTangents:Ms(t.settings.outTangents,Array)}}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Vl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ql(this.times,this.values,this.getValueSize(),t);if(this.settings)e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents;return e}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break;case 2303:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return Ft("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;if(Lo(this.settings))Ph(this.settings.inTangents,t),Ph(this.settings.outTangents,t)}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)Ut("KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)Ut("KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){Ut("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(r!==null&&r>o){Ut("KeyframeTrack: Out of order keys.",this,a,o,r),t=!1;break}r=o}if(i!==void 0){if(qf(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){Ut("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=t[a],c=t[a+1];if(l!==c&&(a!==1||l!==t[0]))if(!i){let h=a*n,d=h-n,u=h+n;for(let p=0;p!==n;++p){let _=e[h+p];if(_!==e[d+p]||_!==e[u+p]){o=!0;break}}}else o=!0;if(o){if(a!==r){t[r]=t[a];let h=a*n,d=r*n;for(let u=0;u!==n;++u)e[d+u]=e[h+u]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)e[o+l]=e[a+l];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);if(i.createInterpolant=this.createInterpolant,Lo(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function Ph(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=2301;class Ki extends _n{constructor(t,e,n){super(t,e,n)}}Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=2300;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;class Yl extends _n{constructor(t,e,n,i){super(t,e,n,i)}}Yl.prototype.ValueTypeName="color";class Zl extends _n{constructor(t,e,n,i){super(t,e,n,i)}}Zl.prototype.ValueTypeName="number";class Jl extends Ji{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let c=l+a;l!==c;l+=4)Ze.slerpFlat(s,0,r,l-a,r,l,o);return s}}class Ra extends _n{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Jl(this.times,this.values,this.getValueSize(),t)}}Ra.prototype.ValueTypeName="quaternion";Ra.prototype.InterpolantFactoryMethodSmooth=void 0;class $i extends _n{constructor(t,e,n){super(t,e,n)}}$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=2300;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;class Kl extends _n{constructor(t,e,n,i){super(t,e,n,i)}}Kl.prototype.ValueTypeName="vector";class $l{constructor(t,e,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);if(h!==-1)l.splice(h,2);return this},this.getHandler=function(c){for(let h=0,d=l.length;h<d;h+=2){let u=l[h],p=l[h+1];if(u.global)u.lastIndex=0;if(u.test(c))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var ku=new $l;class jl{constructor(t){if(this.manager=t!==void 0?t:ku,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}jl.DEFAULT_MATERIAL_NAME="__DEFAULT";class mr extends Ne{constructor(t,e=1){super();this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Ca extends mr{constructor(t,e,n){super(t,n);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}var No=new $t,Ih=new P,Lh=new P;class Pa{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pr,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ih.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ih),Lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){No.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(No,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,a=i?i.w/s.y:1,o=i?i.x/s.x:0,l=i?i.y/s.y:0;if(t.coordinateSystem===2001||t.reversedDepth)e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,1,0,0,0,0,1);else e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,0.5,0.5,0,0,0,1);e.multiply(No)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}var na=new P,ia=new Ze,Fn=new P;class Ia extends Ne{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.matrixWorld.decompose(na,ia,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(na,ia,Fn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){if(super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(na,ia,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(na,ia,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var bi=new P,Nh=new Rt,Dh=new Rt;class Ye extends Ia{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=Rs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(er*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return Rs*2*Math.atan(Math.tan(er*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bi.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,e){return this.getViewBounds(t,Nh,Dh),e.subVectors(Dh,Nh)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(er*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,e-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=t*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Gu extends Pa{constructor(){super(new Ye(90,1,0.5,500));this.isPointLightShadow=!0}}class La extends mr{constructor(t,e,n=0,i=2){super(t,e);this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Gu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class gr extends Ia{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}class Wu extends Pa{constructor(){super(new gr(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Na extends mr{constructor(t,e){super(t,e);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Wu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}var Es=-90,Ts=1;class Ql extends Ne{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ye(Es,Ts,t,e);i.layers=this.layers,this.add(i);let s=new Ye(Es,Ts,t,e);s.layers=this.layers,this.add(s);let r=new Ye(Es,Ts,t,e);r.layers=this.layers,this.add(r);let a=new Ye(Es,Ts,t,e);a.layers=this.layers,this.add(a);let o=new Ye(Es,Ts,t,e);o.layers=this.layers,this.add(o);let l=new Ye(Es,Ts,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let S=!1;if(t.isWebGLRenderer===!0)S=t.state.buffers.depth.getReversed();else S=t.reversedDepthBuffer;if(t.setRenderTarget(n,0,i),S&&t.autoClear===!1)t.clearDepth();if(t.render(e,s),t.setRenderTarget(n,1,i),S&&t.autoClear===!1)t.clearDepth();if(t.render(e,r),t.setRenderTarget(n,2,i),S&&t.autoClear===!1)t.clearDepth();if(t.render(e,a),t.setRenderTarget(n,3,i),S&&t.autoClear===!1)t.clearDepth();if(t.render(e,o),t.setRenderTarget(n,4,i),S&&t.autoClear===!1)t.clearDepth();if(t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),S&&t.autoClear===!1)t.clearDepth();t.render(e,c),t.setRenderTarget(h,d,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class tc extends Ye{constructor(t=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Da{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){if(this._document=t,t.hidden!==void 0)this._pageVisibilityHandler=Np.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function Np(){if(this._document.hidden===!1)this.reset()}var ec="\\[\\]\\.:\\/",Dp=new RegExp("["+ec+"]","g"),nc="[^"+ec+"]",Up="[^"+ec.replace("\\.","")+"]",Fp=/((?:WC+[\/:])*)/.source.replace("WC",nc),Op=/(WCOD+)?/.source.replace("WCOD",Up),Bp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nc),zp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nc),Hp=new RegExp("^"+Fp+Op+Bp+zp+"$"),kp=["material","materials","bones","map"];class Vu{constructor(t,e,n){let i=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class oe{constructor(t,e,n){this.path=e,this.parsedPath=n||oe.parseTrackName(e),this.node=oe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new oe(t,e,n);else return new oe.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dp,"")}static parseTrackName(t){let e=Hp.exec(t);if(e===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(kp.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=e;if(!t)t=oe.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;Ut("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;if(this.targetObject=t,t.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(t.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}oe.Composite=Vu;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _v=new Float32Array(1);var Uh=new $t;class Ua{constructor(t,e,n=0,i=1/0){this.ray=new Us(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){if(e.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,0.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e;else if(e.isOrthographicCamera)this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e;else Ut("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Uh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uh),this}intersectObject(t,e=!0,n=[]){return Do(t,this,n,e),n.sort(Fh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Do(t[i],this,n,e);return n.sort(Fh),n}}function Fh(t,e){return t.distance-e.distance}function Do(t,e,n,i){let s=!0;if(t.layers.test(e.layers)){if(t.raycast(e,n)===!1)s=!1}if(s===!0&&i===!0){let r=t.children;for(let a=0,o=r.length;a<o;a++)Do(r[a],e,n,!0)}}class _r{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Xt(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){if(this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(t,n),this.phi=Math.acos(Xt(e/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class ic{static{ic.prototype.isMatrix2=!0}constructor(t,e,n,i){if(this.elements=[1,0,0,1],t!==void 0)this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}}class Fa extends kn{constructor(t,e=null){super();this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(this.domElement!==null)this.disconnect();this.domElement=t}disconnect(){}dispose(){}update(){}}function sc(t,e,n,i){let s=Gp(i);switch(n){case 1021:return t*e;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Gp(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)Ft("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function dd(){let t=null,e=!1,n=null,i=null;function s(r,a){i=t.requestAnimationFrame(s),n(r,a)}return{start:function(){if(e===!0)return;if(n===null)return;if(t===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){if(t!==null)t.cancelAnimationFrame(i);e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function qp(t){let e=new WeakMap;function n(o,l){let{array:c,usage:h}=o,d=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)p=t.HALF_FLOAT;else p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let{array:h,updateRanges:d}=l;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,h);else{d.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<d.length;p++){let _=d[u],S=d[p];if(S.start<=_.start+_.count+1)_.count=Math.max(_.count,S.start+S.count-_.start);else++u,d[u]=S}d.length=u+1;for(let p=0,_=d.length;p<_;p++){let S=d[p];t.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return e.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=e.get(o);if(l)t.deleteBuffer(l.buffer),e.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let h=e.get(o);if(!h||h.version<o.version)e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zp=`#ifdef USE_ALPHAHASH
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
#endif`,Jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$p=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qp=`#ifdef USE_AOMAP
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
#endif`,tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,em=`#ifdef USE_BATCHING
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
#endif`,nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,am=`#ifdef USE_IRIDESCENCE
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
#endif`,om=`#ifdef USE_BUMPMAP
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
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gm=`#define PI 3.141592653589793
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
} // validated`,_m=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xm=`vec3 transformedNormal = objectNormal;
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
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tm=`#ifdef USE_ENVMAP
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
#endif`,wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dm=`#ifdef USE_GRADIENTMAP
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
}`,Um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,zm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vm=`PhysicalMaterial material;
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
#endif`,Xm=`uniform sampler2D dfgLUT;
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
}`,qm=`
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
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,i0=`#if defined( USE_POINTS_UV )
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
#endif`,s0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,o0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`#ifdef USE_MORPHTARGETS
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
#endif`,h0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,d0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,g0=`#ifdef USE_NORMALMAP
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
#endif`,_0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,L0=`float getShadowMask() {
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
}`,N0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D0=`#ifdef USE_SKINNING
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
#endif`,U0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F0=`#ifdef USE_SKINNING
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
#endif`,O0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,k0=`#ifdef USE_TRANSMISSION
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
#endif`,G0=`#ifdef USE_TRANSMISSION
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;var q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z0=`uniform sampler2D t2D;
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`#include <common>
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
}`,tg=`#if DEPTH_PACKING == 3200
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
}`,eg=`#define DISTANCE
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
}`,ng=`#define DISTANCE
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`uniform float scale;
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
}`,ag=`uniform vec3 diffuse;
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
}`,og=`#include <common>
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
}`,lg=`uniform vec3 diffuse;
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
}`,cg=`#define LAMBERT
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
}`,hg=`#define LAMBERT
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
}`,ug=`#define MATCAP
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
}`,dg=`#define MATCAP
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
}`,fg=`#define NORMAL
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
}`,pg=`#define NORMAL
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
}`,mg=`#define PHONG
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
}`,gg=`#define PHONG
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
}`,_g=`#define STANDARD
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
}`,xg=`#define STANDARD
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
}`,yg=`#define TOON
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
}`,vg=`#define TOON
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
}`,bg=`uniform float size;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,Mg=`#include <common>
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
}`,Eg=`uniform vec3 color;
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
}`,Tg=`uniform float rotation;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:Yp,alphahash_pars_fragment:Zp,alphamap_fragment:Jp,alphamap_pars_fragment:Kp,alphatest_fragment:$p,alphatest_pars_fragment:jp,aomap_fragment:Qp,aomap_pars_fragment:tm,batching_pars_vertex:em,batching_vertex:nm,begin_vertex:im,beginnormal_vertex:sm,bsdfs:rm,iridescence_fragment:am,bumpmap_pars_fragment:om,clipping_planes_fragment:lm,clipping_planes_pars_fragment:cm,clipping_planes_pars_vertex:hm,clipping_planes_vertex:um,color_fragment:dm,color_pars_fragment:fm,color_pars_vertex:pm,color_vertex:mm,common:gm,cube_uv_reflection_fragment:_m,defaultnormal_vertex:xm,displacementmap_pars_vertex:ym,displacementmap_vertex:vm,emissivemap_fragment:bm,emissivemap_pars_fragment:Sm,colorspace_fragment:Mm,colorspace_pars_fragment:Em,envmap_fragment:Tm,envmap_common_pars_fragment:wm,envmap_pars_fragment:Am,envmap_pars_vertex:Rm,envmap_physical_pars_fragment:zm,envmap_vertex:Cm,fog_vertex:Pm,fog_pars_vertex:Im,fog_fragment:Lm,fog_pars_fragment:Nm,gradientmap_pars_fragment:Dm,lightmap_pars_fragment:Um,lights_lambert_fragment:Fm,lights_lambert_pars_fragment:Om,lights_pars_begin:Bm,lights_toon_fragment:Hm,lights_toon_pars_fragment:km,lights_phong_fragment:Gm,lights_phong_pars_fragment:Wm,lights_physical_fragment:Vm,lights_physical_pars_fragment:Xm,lights_fragment_begin:qm,lights_fragment_maps:Ym,lights_fragment_end:Zm,lightprobes_pars_fragment:Jm,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:$m,logdepthbuf_pars_vertex:jm,logdepthbuf_vertex:Qm,map_fragment:t0,map_pars_fragment:e0,map_particle_fragment:n0,map_particle_pars_fragment:i0,metalnessmap_fragment:s0,metalnessmap_pars_fragment:r0,morphinstance_vertex:a0,morphcolor_vertex:o0,morphnormal_vertex:l0,morphtarget_pars_vertex:c0,morphtarget_vertex:h0,normal_fragment_begin:u0,normal_fragment_maps:d0,normal_pars_fragment:f0,normal_pars_vertex:p0,normal_vertex:m0,normalmap_pars_fragment:g0,clearcoat_normal_fragment_begin:_0,clearcoat_normal_fragment_maps:x0,clearcoat_pars_fragment:y0,iridescence_pars_fragment:v0,opaque_fragment:b0,packing:S0,premultiplied_alpha_fragment:M0,project_vertex:E0,dithering_fragment:T0,dithering_pars_fragment:w0,roughnessmap_fragment:A0,roughnessmap_pars_fragment:R0,shadowmap_pars_fragment:C0,shadowmap_pars_vertex:P0,shadowmap_vertex:I0,shadowmask_pars_fragment:L0,skinbase_vertex:N0,skinning_pars_vertex:D0,skinning_vertex:U0,skinnormal_vertex:F0,specularmap_fragment:O0,specularmap_pars_fragment:B0,tonemapping_fragment:z0,tonemapping_pars_fragment:H0,transmission_fragment:k0,transmission_pars_fragment:G0,uv_pars_fragment:W0,uv_pars_vertex:V0,uv_vertex:X0,worldpos_vertex:q0,background_vert:Y0,background_frag:Z0,backgroundCube_vert:J0,backgroundCube_frag:K0,cube_vert:$0,cube_frag:j0,depth_vert:Q0,depth_frag:tg,distance_vert:eg,distance_frag:ng,equirect_vert:ig,equirect_frag:sg,linedashed_vert:rg,linedashed_frag:ag,meshbasic_vert:og,meshbasic_frag:lg,meshlambert_vert:cg,meshlambert_frag:hg,meshmatcap_vert:ug,meshmatcap_frag:dg,meshnormal_vert:fg,meshnormal_frag:pg,meshphong_vert:mg,meshphong_frag:gg,meshphysical_vert:_g,meshphysical_frag:xg,meshtoon_vert:yg,meshtoon_frag:vg,points_vert:bg,points_frag:Sg,shadow_vert:Mg,shadow_frag:Eg,sprite_vert:Tg,sprite_frag:wg},pt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Rt(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Xn={basic:{uniforms:Je([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Je([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Je([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Je([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Je([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Je([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Je([pt.points,pt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Je([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Je([pt.common,pt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Je([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Je([pt.sprite,pt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distance:{uniforms:Je([pt.common,pt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Gt.distance_vert,fragmentShader:Gt.distance_frag},shadow:{uniforms:Je([pt.lights,pt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Xn.physical={uniforms:Je([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var Oa={r:0,b:0,g:0},Ag=new $t,fd=new Ot;fd.set(-1,0,0,0,1,0,0,0,1);function Rg(t,e,n,i,s,r){let a=new Bt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function p(E){let w=E.isScene===!0?E.background:null;if(w&&w.isTexture){let v=E.backgroundBlurriness>0;w=e.get(w,v)}return w}function _(E){let w=!1,v=p(E);if(v===null)m(a,o);else if(v&&v.isColor)m(v,1),w=!0;let T=t.xr.getEnvironmentBlendMode();if(T==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(T==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(t.autoClear||w)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function S(E,w){let v=p(w);if(v&&(v.isCubeTexture||v.mapping===or)){if(c===void 0)c=new Zt(new wi(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Zi(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(fd);if(c.material.toneMapped=Yt.getTransfer(v.colorSpace)!==fe,h!==v||d!==v.version||u!==t.toneMapping)c.material.needsUpdate=!0,h=v,d=v.version,u=t.toneMapping;c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)}else if(v&&v.isTexture){if(l===void 0)l=new Zt(new Ai(2,2),new gn({name:"BackgroundMaterial",uniforms:Zi(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(v.colorSpace)!==fe,v.matrixAutoUpdate===!0)v.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(v.matrix),h!==v||d!==v.version||u!==t.toneMapping)l.material.needsUpdate=!0,h=v,d=v.version,u=t.toneMapping;l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)}}function m(E,w){E.getRGB(Oa,zl(t)),n.buffers.color.setClear(Oa.r,Oa.g,Oa.b,w,r)}function f(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return a},setClearColor:function(E,w=1){a.set(E),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:_,addToRenderList:S,dispose:f}}function Cg(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(I,B,j,L,q){let et=!1,W=d(I,L,j,B);if(r!==W)r=W,c(r.object);if(et=p(I,L,j,q),et)_(I,L,j,q);if(q!==null)e.update(q,t.ELEMENT_ARRAY_BUFFER);if(et||a){if(a=!1,v(I,B,j,L),q!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer)}}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function h(I){return t.deleteVertexArray(I)}function d(I,B,j,L){let q=L.wireframe===!0,et=i[B.id];if(et===void 0)et={},i[B.id]=et;let W=I.isInstancedMesh===!0?I.id:0,st=et[W];if(st===void 0)st={},et[W]=st;let C=st[j.id];if(C===void 0)C={},st[j.id]=C;let N=C[q];if(N===void 0)N=u(l()),C[q]=N;return N}function u(I){let B=[],j=[],L=[];for(let q=0;q<n;q++)B[q]=0,j[q]=0,L[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:j,attributeDivisors:L,object:I,attributes:{},index:null}}function p(I,B,j,L){let q=r.attributes,et=B.attributes,W=0,st=j.getAttributes();for(let C in st)if(st[C].location>=0){let Z=q[C],rt=et[C];if(rt===void 0){if(C==="instanceMatrix"&&I.instanceMatrix)rt=I.instanceMatrix;if(C==="instanceColor"&&I.instanceColor)rt=I.instanceColor}if(Z===void 0)return!0;if(Z.attribute!==rt)return!0;if(rt&&Z.data!==rt.data)return!0;W++}if(r.attributesNum!==W)return!0;if(r.index!==L)return!0;return!1}function _(I,B,j,L){let q={},et=B.attributes,W=0,st=j.getAttributes();for(let C in st)if(st[C].location>=0){let Z=et[C];if(Z===void 0){if(C==="instanceMatrix"&&I.instanceMatrix)Z=I.instanceMatrix;if(C==="instanceColor"&&I.instanceColor)Z=I.instanceColor}let rt={};if(rt.attribute=Z,Z&&Z.data)rt.data=Z.data;q[C]=rt,W++}r.attributes=q,r.attributesNum=W,r.index=L}function S(){let I=r.newAttributes;for(let B=0,j=I.length;B<j;B++)I[B]=0}function m(I){f(I,0)}function f(I,B){let j=r.newAttributes,L=r.enabledAttributes,q=r.attributeDivisors;if(j[I]=1,L[I]===0)t.enableVertexAttribArray(I),L[I]=1;if(q[I]!==B)t.vertexAttribDivisor(I,B),q[I]=B}function E(){let I=r.newAttributes,B=r.enabledAttributes;for(let j=0,L=B.length;j<L;j++)if(B[j]!==I[j])t.disableVertexAttribArray(j),B[j]=0}function w(I,B,j,L,q,et,W){if(W===!0)t.vertexAttribIPointer(I,B,j,q,et);else t.vertexAttribPointer(I,B,j,L,q,et)}function v(I,B,j,L){S();let q=L.attributes,et=j.getAttributes(),W=B.defaultAttributeValues;for(let st in et){let C=et[st];if(C.location>=0){let N=q[st];if(N===void 0){if(st==="instanceMatrix"&&I.instanceMatrix)N=I.instanceMatrix;if(st==="instanceColor"&&I.instanceColor)N=I.instanceColor}if(N!==void 0){let Z=N.normalized,rt=N.itemSize,lt=e.get(N);if(lt===void 0)continue;let{buffer:Pt,type:Et,bytesPerElement:z}=lt,tt=Et===t.INT||Et===t.UNSIGNED_INT||N.gpuType===Yo;if(N.isInterleavedBufferAttribute){let K=N.data,ct=K.stride,vt=N.offset;if(K.isInstancedInterleavedBuffer){for(let mt=0;mt<C.locationSize;mt++)f(C.location+mt,K.meshPerAttribute);if(I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0)L._maxInstanceCount=K.meshPerAttribute*K.count}else for(let mt=0;mt<C.locationSize;mt++)m(C.location+mt);t.bindBuffer(t.ARRAY_BUFFER,Pt);for(let mt=0;mt<C.locationSize;mt++)w(C.location+mt,rt/C.locationSize,Et,Z,ct*z,(vt+rt/C.locationSize*mt)*z,tt)}else{if(N.isInstancedBufferAttribute){for(let K=0;K<C.locationSize;K++)f(C.location+K,N.meshPerAttribute);if(I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0)L._maxInstanceCount=N.meshPerAttribute*N.count}else for(let K=0;K<C.locationSize;K++)m(C.location+K);t.bindBuffer(t.ARRAY_BUFFER,Pt);for(let K=0;K<C.locationSize;K++)w(C.location+K,rt/C.locationSize,Et,Z,rt*z,rt/C.locationSize*K*z,tt)}}else if(W!==void 0){let Z=W[st];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(C.location,Z);break;case 3:t.vertexAttrib3fv(C.location,Z);break;case 4:t.vertexAttrib4fv(C.location,Z);break;default:t.vertexAttrib1fv(C.location,Z)}}}}E()}function T(){b();for(let I in i){let B=i[I];for(let j in B){let L=B[j];for(let q in L){let et=L[q];for(let W in et)h(et[W].object),delete et[W];delete L[q]}}delete i[I]}}function R(I){if(i[I.id]===void 0)return;let B=i[I.id];for(let j in B){let L=B[j];for(let q in L){let et=L[q];for(let W in et)h(et[W].object),delete et[W];delete L[q]}}delete i[I.id]}function A(I){for(let B in i){let j=i[B];for(let L in j){let q=j[L];if(q[I.id]===void 0)continue;let et=q[I.id];for(let W in et)h(et[W].object),delete et[W];delete q[I.id]}}}function g(I){for(let B in i){let j=i[B],L=I.isInstancedMesh===!0?I.id:0,q=j[L];if(q===void 0)continue;for(let et in q){let W=q[et];for(let st in W)h(W[st].object),delete W[st];delete q[et]}if(delete j[L],Object.keys(j).length===0)delete i[B]}}function b(){if(G(),a=!0,r===s)return;r=s,c(r.object)}function G(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:G,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfObject:g,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:m,disableUnusedAttributes:E}}function Pg(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,h){if(h===0)return;t.drawArraysInstanced(i,l,c,h),n.update(c,i,h)}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];n.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ig(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){if(A!==Hn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(A){let g=A===zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(A!==Cn&&A!==si&&!g&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}if(A==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);if(h!==c)Ft("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h;let d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");if(n.reversedDepthBuffer===!0&&u===!1)Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),E=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),R=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:v,maxSamples:T,samples:R}}function Lg(t){let e=this,n=null,i=0,s=!1,r=!1,a=new sn,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,p){let{clippingPlanes:_,clipIntersection:S,clipShadows:m}=d,f=t.get(d);if(!s||_===null||_.length===0||r&&!m)if(r)h(null);else c();else{let E=r?0:i,w=E*4,v=f.clippingState||null;l.value=v,v=h(_,u,w,p);for(let T=0;T!==w;++T)v[T]=n[T];f.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function h(d,u,p,_){let S=d!==null?d.length:0,m=null;if(S!==0){if(m=l.value,_!==!0||m===null){let f=p+S*4,E=u.matrixWorldInverse;if(o.getNormalMatrix(E),m===null||m.length<f)m=new Float32Array(f);for(let w=0,v=p;w!==S;++w,v+=4)a.copy(d[w]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}var Os=4,Ng=6,Dg=20,Ug=256,xr=new gr,Xu=new Bt,rc=null,ac=0,oc=0,lc=!1,Fg=new P,ji=new P;class uc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=0.1,i=100,s={}){let{size:r=256,position:a=Fg}=s;rc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let o=this._allocateTargets();if(o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0)this._blur(o,0,0,e);return this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Zu(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Yu(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(rc,ac,oc),this._renderer.xr.enabled=lc,t.scissorTest=!1,Fs(t,0,0,t.width,t.height)}_fromTexture(t,e){if(t.mapping===Ns||t.mapping===Bi)this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);rc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:zn,format:Hn,colorSpace:Pl,depthBuffer:!1},i=qu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=qu(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Og(s)),this._blurMaterial=zg(s,t,e),this._ggxMaterial=Bg(s,t,e)}return i}_compileMaterial(t){let e=new Zt(new De,t);this._renderer.compile(e,xr)}_sceneToCubeUV(t,e,n,i,s){let o=new Ye(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,{autoClear:d,toneMapping:u}=h;if(h.getClearColor(Xu),h.toneMapping=An,h.autoClear=!1,h.state.buffers.depth.getReversed())h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new Zt(new wi,new je({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}));let _=this._backgroundBox,S=_.material,m=!1,f=t.background;if(f){if(f.isColor)S.color.copy(f),t.background=null,m=!0}else S.color.copy(Xu),m=!0;for(let E=0;E<6;E++){let w=E%3;if(w===0)o.up.set(0,l[E],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x+c[E],s.y,s.z);else if(w===1)o.up.set(0,0,l[E]),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y+c[E],s.z);else o.up.set(0,l[E],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y,s.z+c[E]);let v=this._cubeSize;if(Fs(i,w*v,E>2?v:0,v,v),h.setRenderTarget(i),m)h.render(_,o);h.render(t,o)}h.toneMapping=u,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ns||t.mapping===Bi;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=Zu();this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=Yu();let s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let a=s.uniforms;a.envMap.value=t;let o=this._cubeSize;Fs(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(r,xr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;let o=r.uniforms,l=n/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),h=Math.sqrt(l*l-c*c),d=l*1.25,u=h*d,{_lodMax:p}=this,_=this._sizeLods[n],S=3*_*(n>p-Os?n-p+Os:0),m=4*(this._cubeSize-_);o.envMap.value=t.texture,o.roughness.value=u,o.mipInt.value=p-e,Fs(s,S,m,3*_,2*_),i.setRenderTarget(s),i.render(a,xr),o.envMap.value=s.texture,o.roughness.value=0,o.mipInt.value=p-n,Fs(t,S,m,3*_,2*_),i.setRenderTarget(t),i.render(a,xr)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,r=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,r),this._blurPass(s,t,n,n,r)}_blurPass(t,e,n,i,s){let r=this._renderer,a=this._blurMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let c=this._sizeLods[i],h=3*c*(i>this._lodMax-Os?i-this._lodMax+Os:0),d=4*(this._cubeSize-c);Fs(e,h,d,3*c,2*c),r.setRenderTarget(e),r.render(o,xr)}}function Og(t){let e=[],n=[],i=t,s=t-Os+1+Ng;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,p=3,_=new Float32Array(p*u*d),S=new Float32Array(p*u*d);for(let f=0;f<d;f++){let E=f%3*2/3-1,w=f>2?0:-1,v=[E,w,0,E+0.6666666666666666,w,0,E+0.6666666666666666,w+1,0,E,w,0,E+0.6666666666666666,w+1,0,E,w+1,0];_.set(v,p*u*f);for(let T=0;T<u;T++){let R=h[T*2]*2-1,A=h[T*2+1]*2-1;if(f===0)ji.set(1,A,R);else if(f===1)ji.set(-R,1,-A);else if(f===2)ji.set(-R,A,1);else if(f===3)ji.set(-1,A,-R);else if(f===4)ji.set(-R,-1,A);else ji.set(R,A,-1);ji.toArray(S,(f*u+T)*p)}}let m=new De;if(m.setAttribute("position",new Ge(_,p)),m.setAttribute("outputDirection",new Ge(S,p)),n.push(new Zt(m,null)),i>Os)i--}return{lodMeshes:n,sizeLods:e}}function qu(t,e,n){let i=new fn(t,e,n);return i.texture.mapping=or,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fs(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function Bg(t,e,n){return new gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ug,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:za(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function zg(t,e,n){return new gn({name:"SphericalGaussianBlur",defines:{SAMPLES:Dg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:za(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Yu(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:za(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Zu(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function za(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class pc extends fn{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ea(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new wi(5,5,5),s=new gn({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Bn});s.uniforms.tEquirect.value=e;let r=new Zt(i,s),a=e.minFilter;if(e.minFilter===zi)e.minFilter=an;return new Ql(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}function Hg(t){let e=new WeakMap,n=new WeakMap,i=null;function s(u,p=!1){if(u===null||u===void 0)return null;if(p)return a(u);return r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===sa||p===ra)if(e.has(u)){let _=e.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let S=new pc(_.height);return S.fromEquirectangularTexture(t,u),e.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,_=p===sa||p===ra,S=p===Ns||p===Bi;if(_||S){let m=n.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f){if(i===null)i=new uc(t);return m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture}else if(m!==void 0)return m.texture;else{let E=u.image;if(_&&E&&E.height>0||S&&E&&l(E)){if(i===null)i=new uc(t);return m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture}else return null}}}return u}function o(u,p){if(p===sa)u.mapping=Ns;else if(p===ra)u.mapping=Bi;return u}function l(u){let p=0,_=6;for(let S=0;S<_;S++)if(u[S]!==void 0)p++;return p===_}function c(u){let p=u.target;p.removeEventListener("dispose",c);let _=e.get(p);if(_!==void 0)e.delete(p),_.dispose()}function h(u){let p=u.target;p.removeEventListener("dispose",h);let _=n.get(p);if(_!==void 0)n.delete(p),_.dispose()}function d(){if(e=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:d}}function kg(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)Fi("WebGLRenderer: "+i+" extension not supported.");return s}}}function Gg(t,e,n,i){let s={},r=new WeakMap;function a(d){let u=d.target;if(u.index!==null)e.remove(u.index);for(let _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);if(p)e.remove(p),r.delete(u);if(i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0)delete u._maxInstanceCount;n.memory.geometries--}function o(d,u){if(s[u.id]===!0)return u;return u.addEventListener("dispose",a),s[u.id]=!0,n.memory.geometries++,u}function l(d){let u=d.attributes;for(let p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(d){let u=[],p=d.index,_=d.attributes.position,S=0;if(_===void 0)return;if(p!==null){let E=p.array;S=p.version;for(let w=0,v=E.length;w<v;w+=3){let T=E[w+0],R=E[w+1],A=E[w+2];u.push(T,R,R,A,A,T)}}else{let E=_.array;S=_.version;for(let w=0,v=E.length/3-1;w<v;w+=3){let T=w+0,R=w+1,A=w+2;u.push(T,R,R,A,A,T)}}let m=new(_.count>=65535?va:ya)(u,1);m.version=S;let f=r.get(d);if(f)e.remove(f);r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;if(p!==null){if(u.version<p.version)c(d)}}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Wg(t,e,n){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){t.drawElements(i,u,r,d*a),n.update(u,i,1)}function c(d,u,p){if(p===0)return;t.drawElementsInstanced(i,u,r,d*a,p),n.update(u,i,p)}function h(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,p);let S=0;for(let m=0;m<p;m++)S+=u[m];n.update(S,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Vg(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Ut("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Xg(t,e,n){let i=new WeakMap,s=new ve;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let b=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",b)};if(u!==void 0)u.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],w=0;if(p===!0)w=1;if(_===!0)w=2;if(S===!0)w=3;let v=o.attributes.position.count*w,T=1;if(v>e.maxTextureSize)T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize;let R=new Float32Array(v*T*4*d),A=new _a(R,v,T,d);A.type=si,A.needsUpdate=!0;let g=w*4;for(let G=0;G<d;G++){let I=m[G],B=f[G],j=E[G],L=v*T*4*G;for(let q=0;q<I.count;q++){let et=q*g;if(p===!0)s.fromBufferAttribute(I,q),R[L+et+0]=s.x,R[L+et+1]=s.y,R[L+et+2]=s.z,R[L+et+3]=0;if(_===!0)s.fromBufferAttribute(B,q),R[L+et+4]=s.x,R[L+et+5]=s.y,R[L+et+6]=s.z,R[L+et+7]=0;if(S===!0)s.fromBufferAttribute(j,q),R[L+et+8]=s.x,R[L+et+9]=s.y,R[L+et+10]=s.z,R[L+et+11]=j.itemSize===4?s.w:1}}u={count:d,texture:A,size:new Rt(v,T)},i.set(o,u),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function qg(t,e,n,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h)e.update(u),r.set(u,h);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==h){if(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,t.ARRAY_BUFFER);r.set(c,h)}}if(c.isSkinnedMesh){let p=c.skeleton;if(r.get(p)!==h)p.update(),r.set(p,h)}return u}function o(){r=new WeakMap}function l(c){let h=c.target;if(h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null)n.remove(h.instanceColor)}return{update:a,dispose:o}}var Yg={[Ho]:"LINEAR_TONE_MAPPING",[ko]:"REINHARD_TONE_MAPPING",[Go]:"CINEON_TONE_MAPPING",[Wo]:"ACES_FILMIC_TONE_MAPPING",[Xo]:"AGX_TONE_MAPPING",[qo]:"NEUTRAL_TONE_MAPPING",[Vo]:"CUSTOM_TONE_MAPPING"};function Zg(t,e,n,i,s,r){let a=new fn(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new De;c.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Te([0,2,0,0,2,0],2));let h=new Hl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Zt(c,h),u=new gr(-1,1,1,-1,0,1),p=null,_=null,S=!1,m,f=null,E=[],w=!1;this.setSize=function(v,T){if(a.setSize(v,T),o!==null)o.setSize(v,T);if(l!==null)l.setSize(v,T);for(let R=0;R<E.length;R++){let A=E[R];if(A.setSize)A.setSize(v,T)}},this.setEffects=function(v){E=v,w=E.length>0&&E[0].isRenderPass===!0;let{width:T,height:R}=a;if(E.length>0&&o===null)o=new fn(T,R,{type:zn,depthBuffer:!1,stencilBuffer:!1}),l=new fn(T,R,{type:zn,depthBuffer:!1,stencilBuffer:!1});for(let A=0;A<E.length;A++){let g=E[A];if(g.setSize)g.setSize(T,R)}},this.begin=function(v,T){if(S)return!1;if(v.toneMapping===An&&E.length===0)return!1;if(f=T,T!==null){let{width:R,height:A}=T;if(a.width!==R||a.height!==A)this.setSize(R,A)}if(w===!1)v.setRenderTarget(a);return m=v.toneMapping,v.toneMapping=An,!0},this.hasRenderPass=function(){return w},this.end=function(v,T){v.toneMapping=m,S=!0;let R=a,A=o;for(let g=0;g<E.length;g++){let b=E[g];if(b.enabled===!1)continue;if(b.render(v,A,R,T),b.needsSwap!==!1)R=A,A=A===o?l:o}if(p!==v.outputColorSpace||_!==v.toneMapping){if(p=v.outputColorSpace,_=v.toneMapping,h.defines={},Yt.getTransfer(p)===fe)h.defines.SRGB_TRANSFER="";let g=Yg[_];if(g)h.defines[g]="";h.needsUpdate=!0}h.uniforms.tDiffuse.value=R.texture,v.setRenderTarget(f),v.render(d,u),f=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){if(a.dispose(),o!==null)o.dispose();if(l!==null)l.dispose();c.dispose(),h.dispose()}}var pd=new ke,dc=new Xi(1,1),md=new _a,gd=new Ol,_d=new Ea,Ju=[],Ku=[],$u=new Float32Array(16),ju=new Float32Array(9),Qu=new Float32Array(4);function Bs(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=Ju[s];if(r===void 0)r=new Float32Array(s),Ju[s]=r;if(e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function Ue(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Fe(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ha(t,e){let n=Ku[e];if(n===void 0)n=new Int32Array(e),Ku[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Jg(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function Kg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ue(n,e))return;t.uniform2fv(this.addr,e),Fe(n,e)}}function $g(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(Ue(n,e))return;t.uniform3fv(this.addr,e),Fe(n,e)}}function jg(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ue(n,e))return;t.uniform4fv(this.addr,e),Fe(n,e)}}function Qg(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ue(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Fe(n,e)}else{if(Ue(n,i))return;Qu.set(i),t.uniformMatrix2fv(this.addr,!1,Qu),Fe(n,i)}}function t_(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ue(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Fe(n,e)}else{if(Ue(n,i))return;ju.set(i),t.uniformMatrix3fv(this.addr,!1,ju),Fe(n,i)}}function e_(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ue(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Fe(n,e)}else{if(Ue(n,i))return;$u.set(i),t.uniformMatrix4fv(this.addr,!1,$u),Fe(n,i)}}function n_(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function i_(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ue(n,e))return;t.uniform2iv(this.addr,e),Fe(n,e)}}function s_(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Ue(n,e))return;t.uniform3iv(this.addr,e),Fe(n,e)}}function r_(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ue(n,e))return;t.uniform4iv(this.addr,e),Fe(n,e)}}function a_(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function o_(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ue(n,e))return;t.uniform2uiv(this.addr,e),Fe(n,e)}}function l_(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Ue(n,e))return;t.uniform3uiv(this.addr,e),Fe(n,e)}}function c_(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ue(n,e))return;t.uniform4uiv(this.addr,e),Fe(n,e)}}function h_(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)dc.compareFunction=n.isReversedDepthBuffer()?ga:ma,r=dc;else r=pd;n.setTexture2D(e||r,s)}function u_(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||gd,s)}function d_(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(e||_d,s)}function f_(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||md,s)}function p_(t){switch(t){case 5126:return Jg;case 35664:return Kg;case 35665:return $g;case 35666:return jg;case 35674:return Qg;case 35675:return t_;case 35676:return e_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return s_;case 35669:case 35673:return r_;case 5125:return a_;case 36294:return o_;case 36295:return l_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return f_}}function m_(t,e){t.uniform1fv(this.addr,e)}function g_(t,e){let n=Bs(e,this.size,2);t.uniform2fv(this.addr,n)}function __(t,e){let n=Bs(e,this.size,3);t.uniform3fv(this.addr,n)}function x_(t,e){let n=Bs(e,this.size,4);t.uniform4fv(this.addr,n)}function y_(t,e){let n=Bs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function v_(t,e){let n=Bs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function b_(t,e){let n=Bs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function S_(t,e){t.uniform1iv(this.addr,e)}function M_(t,e){t.uniform2iv(this.addr,e)}function E_(t,e){t.uniform3iv(this.addr,e)}function T_(t,e){t.uniform4iv(this.addr,e)}function w_(t,e){t.uniform1uiv(this.addr,e)}function A_(t,e){t.uniform2uiv(this.addr,e)}function R_(t,e){t.uniform3uiv(this.addr,e)}function C_(t,e){t.uniform4uiv(this.addr,e)}function P_(t,e,n){let i=this.cache,s=e.length,r=Ha(n,s);if(!Ue(i,r))t.uniform1iv(this.addr,r),Fe(i,r);let a;if(this.type===t.SAMPLER_2D_SHADOW)a=dc;else a=pd;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function I_(t,e,n){let i=this.cache,s=e.length,r=Ha(n,s);if(!Ue(i,r))t.uniform1iv(this.addr,r),Fe(i,r);for(let a=0;a!==s;++a)n.setTexture3D(e[a]||gd,r[a])}function L_(t,e,n){let i=this.cache,s=e.length,r=Ha(n,s);if(!Ue(i,r))t.uniform1iv(this.addr,r),Fe(i,r);for(let a=0;a!==s;++a)n.setTextureCube(e[a]||_d,r[a])}function N_(t,e,n){let i=this.cache,s=e.length,r=Ha(n,s);if(!Ue(i,r))t.uniform1iv(this.addr,r),Fe(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||md,r[a])}function D_(t){switch(t){case 5126:return m_;case 35664:return g_;case 35665:return __;case 35666:return x_;case 35674:return y_;case 35675:return v_;case 35676:return b_;case 5124:case 35670:return S_;case 35667:case 35671:return M_;case 35668:case 35672:return E_;case 35669:case 35673:return T_;case 5125:return w_;case 36294:return A_;case 36295:return R_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return P_;case 35679:case 36299:case 36307:return I_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return N_}}class xd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=p_(e.type)}}class yd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=D_(e.type)}}class vd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}}var cc=/(\w+)(\])?(\[|\.)?/g;function td(t,e){t.seq.push(e),t.map[e.id]=e}function U_(t,e,n){let i=t.name,s=i.length;cc.lastIndex=0;while(!0){let r=cc.exec(i),a=cc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){td(n,c===void 0?new xd(o,t,e):new yd(o,t,e));break}else{let d=n.map[o];if(d===void 0)d=new vd(o),td(n,d);n=d}}}class br{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),o=t.getUniformLocation(e,a.name);U_(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function ed(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var F_=37297,O_=0;function B_(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var nd=new Ot;function z_(t){Yt._getMatrix(nd,Yt.workingColorSpace,t);let e=`mat3( ${nd.elements.map((n)=>n.toFixed(4))} )`;switch(Yt.getTransfer(t)){case Il:return[e,"LinearTransferOETF"];case fe:return[e,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function id(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+B_(t.getShaderSource(e),o)}else return r}function H_(t,e){let n=z_(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var k_={[Ho]:"Linear",[ko]:"Reinhard",[Go]:"Cineon",[Wo]:"ACESFilmic",[Xo]:"AgX",[qo]:"Neutral",[Vo]:"Custom"};function G_(t,e){let n=k_[e];if(n===void 0)return Ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Ba=new P;function W_(){Yt.getLuminanceCoefficients(Ba);let t=Ba.x.toFixed(4),e=Ba.y.toFixed(4),n=Ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function V_(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function X_(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function q_(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;if(r.type===t.FLOAT_MAT2)o=2;if(r.type===t.FLOAT_MAT3)o=3;if(r.type===t.FLOAT_MAT4)o=4;n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function vr(t){return t!==""}function sd(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(t){return t.replace(Y_,J_)}var Z_=new Map;function J_(t,e){let n=Gt[e];if(n===void 0){let i=Z_.get(e);if(i!==void 0)n=Gt[i],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return fc(n)}var K_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ad(t){return t.replace(K_,$_)}function $_(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function od(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`;return e}var j_={[Oi]:"SHADOWMAP_TYPE_PCF",[Ps]:"SHADOWMAP_TYPE_VSM"};function Q_(t){return j_[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var tx={[Ns]:"ENVMAP_TYPE_CUBE",[Bi]:"ENVMAP_TYPE_CUBE",[or]:"ENVMAP_TYPE_CUBE_UV"};function ex(t){if(t.envMap===!1)return"ENVMAP_TYPE_CUBE";return tx[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var nx={[Bi]:"ENVMAP_MODE_REFRACTION"};function ix(t){if(t.envMap===!1)return"ENVMAP_MODE_REFLECTION";return nx[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sx={[pu]:"ENVMAP_BLENDING_MULTIPLY",[mu]:"ENVMAP_BLENDING_MIX",[gu]:"ENVMAP_BLENDING_ADD"};function rx(t){if(t.envMap===!1)return"ENVMAP_BLENDING_NONE";return sx[t.combine]||"ENVMAP_BLENDING_NONE"}function ax(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function ox(t,e,n,i){let s=t.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,l=Q_(n),c=ex(n),h=ix(n),d=rx(n),u=ax(n),p=V_(n),_=X_(r),S=s.createProgram(),m,f,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(vr).join(`
`),m.length>0)m+=`
`;if(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(vr).join(`
`),f.length>0)f+=`
`}else m=[od(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),f=[od(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==An?"#define TONE_MAPPING":"",n.toneMapping!==An?Gt.tonemapping_pars_fragment:"",n.toneMapping!==An?G_("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,H_("linearToOutputTexel",n.outputColorSpace),W_(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(vr).join(`
`);if(a=fc(a),a=sd(a,n),a=rd(a,n),o=fc(o),o=sd(o,n),o=rd(o,n),a=ad(a),o=ad(o),n.isRawShaderMaterial!==!0)E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f;let w=E+m+a,v=E+f+o,T=ed(s,s.VERTEX_SHADER,w),R=ed(s,s.FRAGMENT_SHADER,v);if(s.attachShader(S,T),s.attachShader(S,R),n.index0AttributeName!==void 0)s.bindAttribLocation(S,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(S,0,"position");s.linkProgram(S);function A(I){if(t.debug.checkShaderErrors){let B=s.getProgramInfoLog(S)||"",j=s.getShaderInfoLog(T)||"",L=s.getShaderInfoLog(R)||"",q=B.trim(),et=j.trim(),W=L.trim(),st=!0,C=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(st=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,S,T,R);else{let N=id(s,T,"vertex"),Z=id(s,R,"fragment");Ut("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+q+`
`+N+`
`+Z)}else if(q!=="")Ft("WebGLProgram: Program Info Log:",q);else if(et===""||W==="")C=!1;if(C)I.diagnostics={runnable:st,programLog:q,vertexShader:{log:et,prefix:m},fragmentShader:{log:W,prefix:f}}}s.deleteShader(T),s.deleteShader(R),g=new br(s,S),b=q_(s,S)}let g;this.getUniforms=function(){if(g===void 0)A(this);return g};let b;this.getAttributes=function(){if(b===void 0)A(this);return b};let G=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(G===!1)G=s.getProgramParameter(S,F_);return G},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=O_++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=T,this.fragmentShader=R,this}var lx=0;class bd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);if(i.has(e)===!1)i.add(e),e.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new Sd(t),e.set(t,n);return n}}class Sd{constructor(t){this.id=lx++,this.code=t,this.usedTimes=0}}function cx(t){return t===Gi||t===da||t===fa}function hx(t,e,n,i,s,r){let a=new dr,o=new bd,l=new Set,c=[],h=new Map,{logarithmicDepthBuffer:d,precision:u}=i,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){if(l.add(g),g===0)return"uv";return`uv${g}`}function S(g,b,G,I,B,j){let L=I.fog,q=B.geometry,et=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?I.environment:null,W=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,st=e.get(g.envMap||et,W),C=!!st&&st.mapping===or?st.image.height:null,N=p[g.type];if(g.precision!==null){if(u=i.getMaxPrecision(g.precision),u!==g.precision)Ft("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead.")}let Z=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,rt=Z!==void 0?Z.length:0,lt=0;if(q.morphAttributes.position!==void 0)lt=1;if(q.morphAttributes.normal!==void 0)lt=2;if(q.morphAttributes.color!==void 0)lt=3;let Pt,Et,z,tt;if(N){let me=Xn[N];Pt=me.vertexShader,Et=me.fragmentShader}else{Pt=g.vertexShader,Et=g.fragmentShader;let me=o.getVertexShaderStage(g),ne=o.getFragmentShaderStage(g);o.update(g,me,ne),z=me.id,tt=ne.id}let K=t.getRenderTarget(),ct=t.state.buffers.depth.getReversed(),vt=B.isInstancedMesh===!0,mt=B.isBatchedMesh===!0,jt=!!g.map,Ht=!!g.matcap,Vt=!!st,Jt=!!g.aoMap,Wt=!!g.lightMap,Me=!!g.bumpMap&&g.wireframe===!1,he=!!g.normalMap,re=!!g.displacementMap,be=!!g.emissiveMap,te=!!g.metalnessMap,U=!!g.roughnessMap,nn=g.anisotropy>0,ee=g.clearcoat>0,Se=g.dispersion>0,M=g.retroreflectivity>0,x=g.iridescence>0,D=g.sheen>0,V=g.transmission>0,it=nn&&!!g.anisotropyMap,ot=ee&&!!g.clearcoatMap,dt=ee&&!!g.clearcoatNormalMap,Y=ee&&!!g.clearcoatRoughnessMap,Q=x&&!!g.iridescenceMap,yt=x&&!!g.iridescenceThicknessMap,It=D&&!!g.sheenColorMap,ft=D&&!!g.sheenRoughnessMap,at=!!g.specularMap,Lt=!!g.specularColorMap,Nt=!!g.specularIntensityMap,Qt=V&&!!g.transmissionMap,O=V&&!!g.thicknessMap,ht=!!g.gradientMap,J=!!g.alphaMap,ut=g.alphaTest>0,bt=!!g.alphaHash,nt=!!g.extensions,gt=An;if(g.toneMapped){if(K===null||K.isXRRenderTarget===!0)gt=t.toneMapping}let zt={shaderID:N,shaderType:g.type,shaderName:g.name,vertexShader:Pt,fragmentShader:Et,defines:g.defines,customVertexShaderID:z,customFragmentShaderID:tt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:mt,batchingColor:mt&&B._colorsTexture!==null,instancing:vt,instancingColor:vt&&B.instanceColor!==null,instancingMorph:vt&&B.morphTexture!==null,outputColorSpace:K===null?t.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:jt,matcap:Ht,envMap:Vt,envMapMode:Vt&&st.mapping,envMapCubeUVHeight:C,aoMap:Jt,lightMap:Wt,bumpMap:Me,normalMap:he,displacementMap:re,emissiveMap:be,normalMapObjectSpace:he&&g.normalMapType===wu,normalMapTangentSpace:he&&g.normalMapType===Cl,packedNormalMap:he&&g.normalMapType===Cl&&cx(g.normalMap.format),metalnessMap:te,roughnessMap:U,anisotropy:nn,anisotropyMap:it,clearcoat:ee,clearcoatMap:ot,clearcoatNormalMap:dt,clearcoatRoughnessMap:Y,dispersion:Se,retroreflection:M,iridescence:x,iridescenceMap:Q,iridescenceThicknessMap:yt,sheen:D,sheenColorMap:It,sheenRoughnessMap:ft,specularMap:at,specularColorMap:Lt,specularIntensityMap:Nt,transmission:V,transmissionMap:Qt,thicknessMap:O,gradientMap:ht,opaque:g.transparent===!1&&g.blending===ar&&g.alphaToCoverage===!1,alphaMap:J,alphaTest:ut,alphaHash:bt,combine:g.combine,mapUv:jt&&_(g.map.channel),aoMapUv:Jt&&_(g.aoMap.channel),lightMapUv:Wt&&_(g.lightMap.channel),bumpMapUv:Me&&_(g.bumpMap.channel),normalMapUv:he&&_(g.normalMap.channel),displacementMapUv:re&&_(g.displacementMap.channel),emissiveMapUv:be&&_(g.emissiveMap.channel),metalnessMapUv:te&&_(g.metalnessMap.channel),roughnessMapUv:U&&_(g.roughnessMap.channel),anisotropyMapUv:it&&_(g.anisotropyMap.channel),clearcoatMapUv:ot&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:dt&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:It&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:ft&&_(g.sheenRoughnessMap.channel),specularMapUv:at&&_(g.specularMap.channel),specularColorMapUv:Lt&&_(g.specularColorMap.channel),specularIntensityMapUv:Nt&&_(g.specularIntensityMap.channel),transmissionMapUv:Qt&&_(g.transmissionMap.channel),thicknessMapUv:O&&_(g.thicknessMap.channel),alphaMapUv:J&&_(g.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(he||nn),vertexNormals:!!q.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(jt||J),fog:!!L,useFog:g.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||q.attributes.normal===void 0&&he===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ct,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:lt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&G.length>0,shadowMapType:t.shadowMap.type,toneMapping:gt,decodeVideoTexture:jt&&g.map.isVideoTexture===!0&&Yt.getTransfer(g.map.colorSpace)===fe,decodeVideoTextureEmissive:be&&g.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(g.emissiveMap.colorSpace)===fe,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===On,flipSided:g.side===rn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:nt&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&g.extensions.multiDraw===!0||mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function m(g){let b=[];if(g.shaderID)b.push(g.shaderID);else b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID);if(g.defines!==void 0)for(let G in g.defines)b.push(G),b.push(g.defines[G]);if(g.isRawShaderMaterial===!1)f(b,g),E(b,g),b.push(t.outputColorSpace);return b.push(g.customProgramCacheKey),b.join()}function f(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function E(g,b){if(a.disableAll(),b.instancing)a.enable(0);if(b.instancingColor)a.enable(1);if(b.instancingMorph)a.enable(2);if(b.matcap)a.enable(3);if(b.envMap)a.enable(4);if(b.normalMapObjectSpace)a.enable(5);if(b.normalMapTangentSpace)a.enable(6);if(b.clearcoat)a.enable(7);if(b.iridescence)a.enable(8);if(b.alphaTest)a.enable(9);if(b.vertexColors)a.enable(10);if(b.vertexAlphas)a.enable(11);if(b.vertexUv1s)a.enable(12);if(b.vertexUv2s)a.enable(13);if(b.vertexUv3s)a.enable(14);if(b.vertexTangents)a.enable(15);if(b.anisotropy)a.enable(16);if(b.alphaHash)a.enable(17);if(b.batching)a.enable(18);if(b.dispersion)a.enable(19);if(b.retroreflection)a.enable(24);if(b.batchingColor)a.enable(20);if(b.gradientMap)a.enable(21);if(b.packedNormalMap)a.enable(22);if(b.vertexNormals)a.enable(23);if(g.push(a.mask),a.disableAll(),b.fog)a.enable(0);if(b.useFog)a.enable(1);if(b.flatShading)a.enable(2);if(b.logarithmicDepthBuffer)a.enable(3);if(b.reversedDepthBuffer)a.enable(4);if(b.skinning)a.enable(5);if(b.morphTargets)a.enable(6);if(b.morphNormals)a.enable(7);if(b.morphColors)a.enable(8);if(b.premultipliedAlpha)a.enable(9);if(b.shadowMapEnabled)a.enable(10);if(b.doubleSided)a.enable(11);if(b.flipSided)a.enable(12);if(b.useDepthPacking)a.enable(13);if(b.dithering)a.enable(14);if(b.transmission)a.enable(15);if(b.sheen)a.enable(16);if(b.opaque)a.enable(17);if(b.pointsUvs)a.enable(18);if(b.decodeVideoTexture)a.enable(19);if(b.decodeVideoTextureEmissive)a.enable(20);if(b.alphaToCoverage)a.enable(21);if(b.numLightProbeGrids>0)a.enable(22);if(b.hasPositionAttribute)a.enable(23);g.push(a.mask)}function w(g){let b=p[g.type],G;if(b){let I=Xn[b];G=zu.clone(I.uniforms)}else G=g.uniforms;return G}function v(g,b){let G=h.get(b);if(G!==void 0)++G.usedTimes;else G=new ox(t,b,g,s),c.push(G),h.set(b,G);return G}function T(g){if(--g.usedTimes===0){let b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function R(g){o.remove(g)}function A(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:A}}function ux(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);if(o===void 0)o={},t.set(a,o);return o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function dx(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.materialVariant!==e.materialVariant)return t.materialVariant-e.materialVariant;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function ld(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function cd(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(u){let p=0;if(u.isInstancedMesh)p+=2;if(u.isSkinnedMesh)p+=1;return p}function o(u,p,_,S,m,f){let E=t[e];if(E===void 0)E={id:u.id,object:u,geometry:p,material:_,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:f},t[e]=E;else E.id=u.id,E.object=u,E.geometry=p,E.material=_,E.materialVariant=a(u),E.groupOrder=S,E.renderOrder=u.renderOrder,E.z=m,E.group=f;return e++,E}function l(u,p,_,S,m,f,E){if(E.reversedDepth===!0)m=-m;let w=o(u,p,_,S,m,f);if(_.transmission>0)i.push(w);else if(_.transparent===!0)s.push(w);else n.push(w)}function c(u,p,_,S,m,f){let E=o(u,p,_,S,m,f);if(_.transmission>0)i.unshift(E);else if(_.transparent===!0)s.unshift(E);else n.unshift(E)}function h(u,p){if(n.length>1)n.sort(u||dx);if(i.length>1)i.sort(p||ld);if(s.length>1)s.sort(p||ld)}function d(){for(let u=e,p=t.length;u<p;u++){let _=t[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function fx(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;if(r===void 0)a=new cd,t.set(i,[a]);else if(s>=r.length)a=new cd,r.push(a);else a=r[s];return a}function n(){t=new WeakMap}return{get:e,dispose:n}}function px(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new P,color:new Bt};break;case"SpotLight":n={position:new P,direction:new P,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":n={color:new Bt,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=n,n}}}function mx(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var gx=0;function _x(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function xx(t){let e=new px,n=mx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new $t,a=new $t;function o(c){let h=0,d=0,u=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let p=0,_=0,S=0,m=0,f=0,E=0,w=0,v=0,T=0,R=0,A=0,g=0,b=0,G=0;c.sort(_x);for(let B=0,j=c.length;B<j;B++){let L=c[B],{color:q,intensity:et,distance:W}=L,st=null;if(L.shadow&&L.shadow.map)if(L.shadow.map.texture.format===Gi)st=L.shadow.map.texture;else st=L.shadow.map.depthTexture||L.shadow.map.texture;if(L.isAmbientLight)h+=q.r*et,d+=q.g*et,u+=q.b*et;else if(L.isLightProbe){for(let C=0;C<9;C++)i.probe[C].addScaledVector(L.sh.coefficients[C],et);G++}else if(L.isSunLight){let C=e.get(L);if(C.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let N=L.shadow,Z=n.get(L);Z.shadowIntensity=N.intensity,Z.shadowBias=N.bias,Z.shadowNormalBias=N.normalBias,Z.shadowRadius=N.radius,Z.shadowMapSize.copy(N.mapSize).multiply(N.getFrameExtents()),i.sunShadow[_]=Z,i.sunShadowMap[_]=st;let rt=N.getViewportCount();for(let lt=0;lt<rt;lt++)i.sunShadowMatrix[S+lt]=N.getMatrix(lt),i.sunShadowCascade[S+lt]=N._cascadeData[lt];S+=rt,_++}i.sun[p]=C,p++}else if(L.isDirectionalLight){let C=e.get(L);if(C.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let N=L.shadow,Z=n.get(L);Z.shadowIntensity=N.intensity,Z.shadowBias=N.bias,Z.shadowNormalBias=N.normalBias,Z.shadowRadius=N.radius,Z.shadowMapSize=N.mapSize,i.directionalShadow[m]=Z,i.directionalShadowMap[m]=st,i.directionalShadowMatrix[m]=L.shadow.matrix,T++}i.directional[m]=C,m++}else if(L.isSpotLight){let C=e.get(L);C.position.setFromMatrixPosition(L.matrixWorld),C.color.copy(q).multiplyScalar(et),C.distance=W,C.coneCos=Math.cos(L.angle),C.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),C.decay=L.decay,i.spot[E]=C;let N=L.shadow;if(L.map){if(i.spotLightMap[g]=L.map,g++,N.updateMatrices(L),L.castShadow)b++}if(i.spotLightMatrix[E]=N.matrix,L.castShadow){let Z=n.get(L);Z.shadowIntensity=N.intensity,Z.shadowBias=N.bias,Z.shadowNormalBias=N.normalBias,Z.shadowRadius=N.radius,Z.shadowMapSize=N.mapSize,i.spotShadow[E]=Z,i.spotShadowMap[E]=st,A++}E++}else if(L.isRectAreaLight){let C=e.get(L);C.color.copy(q).multiplyScalar(et),C.halfWidth.set(L.width*0.5,0,0),C.halfHeight.set(0,L.height*0.5,0),i.rectArea[w]=C,w++}else if(L.isPointLight){let C=e.get(L);if(C.color.copy(L.color).multiplyScalar(L.intensity),C.distance=L.distance,C.decay=L.decay,L.castShadow){let N=L.shadow,Z=n.get(L);Z.shadowIntensity=N.intensity,Z.shadowBias=N.bias,Z.shadowNormalBias=N.normalBias,Z.shadowRadius=N.radius,Z.shadowMapSize=N.mapSize,Z.shadowCameraNear=N.camera.near,Z.shadowCameraFar=N.camera.far,i.pointShadow[f]=Z,i.pointShadowMap[f]=st,i.pointShadowMatrix[f]=L.shadow.matrix,R++}i.point[f]=C,f++}else if(L.isHemisphereLight){let C=e.get(L);C.skyColor.copy(L.color).multiplyScalar(et),C.groundColor.copy(L.groundColor).multiplyScalar(et),i.hemi[v]=C,v++}}if(w>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2;else i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2;i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let I=i.hash;if(I.sunLength!==p||I.directionalLength!==m||I.pointLength!==f||I.spotLength!==E||I.rectAreaLength!==w||I.hemiLength!==v||I.numSunShadows!==_||I.numDirectionalShadows!==T||I.numPointShadows!==R||I.numSpotShadows!==A||I.numSpotMaps!==g||I.numLightProbes!==G)i.sun.length=p,i.directional.length=m,i.spot.length=E,i.rectArea.length=w,i.point.length=f,i.hemi.length=v,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+g-b,i.spotLightMap.length=g,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=G,I.sunLength=p,I.directionalLength=m,I.pointLength=f,I.spotLength=E,I.rectAreaLength=w,I.hemiLength=v,I.numSunShadows=_,I.numDirectionalShadows=T,I.numPointShadows=R,I.numSpotShadows=A,I.numSpotMaps=g,I.numLightProbes=G,i.version=gx++}function l(c,h){let d=0,u=0,p=0,_=0,S=0,m=0,f=h.matrixWorldInverse;for(let E=0,w=c.length;E<w;E++){let v=c[E];if(v.isSunLight){let T=i.sun[d];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(f),d++}else if(v.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),u++}else if(v.isSpotLight){let T=i.spot[_];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),_++}else if(v.isRectAreaLight){let T=i.rectArea[S];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),a.identity(),r.copy(v.matrixWorld),r.premultiply(f),a.extractRotation(r),T.halfWidth.set(v.width*0.5,0,0),T.halfHeight.set(0,v.height*0.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),S++}else if(v.isPointLight){let T=i.point[p];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:i}}function hd(t){let e=new xx(t),n=[],i=[],s=[];function r(u){d.camera=u,n.length=0,i.length=0,s.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(n)}function h(u){e.setupView(n,u)}let d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function yx(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;if(a===void 0)o=new hd(t),e.set(s,[o]);else if(r>=a.length)o=new hd(t),a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:n,dispose:i}}var vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bx=`uniform sampler2D shadow_pass;
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
}`,Sx=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Mx=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],ud=new $t,yr=new P,hc=new P;function Ex(t,e,n){let i=new pr,s=new Rt,r=new Rt,a=new ve,o=new kl,l=new Gl,c={},h=n.maxTextureSize,d={[Is]:rn,[rn]:Is,[On]:On},u=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:vx,fragmentShader:bx}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let _=new De;_.setAttribute("position",new Ge(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let S=new Zt(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oi;let f=this.type;this.render=function(R,A,g){if(m.enabled===!1)return;if(m.autoUpdate===!1&&m.needsUpdate===!1)return;if(R.length===0)return;if(this.type===Hh)Ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Oi;let b=t.getRenderTarget(),G=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),B=t.state;if(B.setBlending(Bn),B.buffers.depth.getReversed()===!0)B.buffers.color.setClear(0,0,0,0);else B.buffers.color.setClear(1,1,1,1);B.buffers.depth.setTest(!0),B.setScissorTest(!1);let j=f!==this.type;if(j)A.traverse(function(L){if(L.material)if(Array.isArray(L.material))L.material.forEach((q)=>q.needsUpdate=!0);else L.material.needsUpdate=!0});for(let L=0,q=R.length;L<q;L++){let et=R[L],W=et.shadow;if(W===void 0){Ft("WebGLShadowMap:",et,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let st=W.getFrameExtents();if(s.multiply(st),r.copy(W.mapSize),s.x>h||s.y>h){if(s.x>h)r.x=Math.floor(h/st.x),s.x=r.x*st.x,W.mapSize.x=r.x;if(s.y>h)r.y=Math.floor(h/st.y),s.y=r.y*st.y,W.mapSize.y=r.y}let C=t.state.buffers.depth.getReversed();if(W.camera._reversedDepth=C,W.map===null||j===!0){if(W.map!==null){if(W.map.depthTexture!==null)W.map.depthTexture.dispose(),W.map.depthTexture=null;W.map.dispose()}if(this.type===Ps){if(et.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new fn(s.x,s.y,{format:Gi,type:zn,minFilter:an,magFilter:an,generateMipmaps:!1}),W.map.texture.name=et.name+".shadowMap",W.map.depthTexture=new Xi(s.x,s.y,si),W.map.depthTexture.name=et.name+".shadowMapDepth",W.map.depthTexture.format=Hi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Rn,W.map.depthTexture.magFilter=Rn}else{if(et.isPointLight)W.map=new pc(s.x),W.map.depthTexture=new Bl(s.x,Ei);else W.map=new fn(s.x,s.y),W.map.depthTexture=new Xi(s.x,s.y,Ei);if(W.map.depthTexture.name=et.name+".shadowMap",W.map.depthTexture.format=Hi,this.type===Oi)W.map.depthTexture.compareFunction=C?ga:ma,W.map.depthTexture.minFilter=an,W.map.depthTexture.magFilter=an;else W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Rn,W.map.depthTexture.magFilter=Rn}W.camera.updateProjectionMatrix()}if(W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y))W.map.setSize(s.x,s.y);let N=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();if(et.isPointLight!==!0)W.updateMatrices(et,g);for(let Z=0;Z<N;Z++){let rt=W.getCamera(Z);if(et.isPointLight){let{camera:lt,matrix:Pt}=W,Et=et.distance||lt.far;if(Et!==lt.far)lt.far=Et,lt.updateProjectionMatrix();yr.setFromMatrixPosition(et.matrixWorld),lt.position.copy(yr),hc.copy(lt.position),hc.add(Sx[Z]),lt.up.copy(Mx[Z]),lt.lookAt(hc),lt.updateMatrixWorld(),Pt.makeTranslation(-yr.x,-yr.y,-yr.z),ud.multiplyMatrices(lt.projectionMatrix,lt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(ud,lt.coordinateSystem,lt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)t.setRenderTarget(W.map,Z),t.clear();else{if(Z===0)t.setRenderTarget(W.map),t.clear();let lt=W.getViewport(Z);a.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),B.viewport(a)}i=W.getFrustum(Z),v(A,g,rt,et,this.type)}if(W.isPointLightShadow!==!0&&this.type===Ps)E(W,g);W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(b,G,I)};function E(R,A){let g=e.update(S);if(u.defines.VSM_SAMPLES!==R.blurSamples)u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0;if(R.mapPass===null)R.mapPass=new fn(s.x,s.y,{format:Gi,type:zn});else if(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)R.mapPass.setSize(R.map.width,R.map.height);u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value.set(R.map.width,R.map.height),u.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(A,null,g,u,S,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value.set(R.map.width,R.map.height),p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(A,null,g,p,S,null)}function w(R,A,g,b){let G=null,I=g.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)G=I;else if(G=g.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let B=G.uuid,j=A.uuid,L=c[B];if(L===void 0)L={},c[B]=L;let q=L[j];if(q===void 0)q=G.clone(),L[j]=q,A.addEventListener("dispose",T);G=q}if(G.visible=A.visible,G.wireframe=A.wireframe,b===Ps)G.side=A.shadowSide!==null?A.shadowSide:A.side;else G.side=A.shadowSide!==null?A.shadowSide:d[A.side];if(G.alphaMap=A.alphaMap,G.alphaTest=A.alphaToCoverage===!0?0.5:A.alphaTest,G.map=A.map,G.clipShadows=A.clipShadows,G.clippingPlanes=A.clippingPlanes,G.clipIntersection=A.clipIntersection,G.displacementMap=A.displacementMap,G.displacementScale=A.displacementScale,G.displacementBias=A.displacementBias,G.wireframeLinewidth=A.wireframeLinewidth,G.linewidth=A.linewidth,g.isPointLight===!0&&G.isMeshDistanceMaterial===!0){let B=t.properties.get(G);B.light=g}return G}function v(R,A,g,b,G){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)){if((R.castShadow||R.receiveShadow&&G===Ps)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,R.matrixWorld);let j=e.update(R),L=R.material;if(Array.isArray(L)){let q=j.groups;for(let et=0,W=q.length;et<W;et++){let st=q[et],C=L[st.materialIndex];if(C&&C.visible){let N=w(R,C,b,G);R.onBeforeShadow(t,R,A,g,j,N,st),t.renderBufferDirect(g,null,j,N,R,st),R.onAfterShadow(t,R,A,g,j,N,st)}}}else if(L.visible){let q=w(R,L,b,G);R.onBeforeShadow(t,R,A,g,j,q,null),t.renderBufferDirect(g,null,j,q,R,null),R.onAfterShadow(t,R,A,g,j,q,null)}}}let B=R.children;for(let j=0,L=B.length;j<L;j++)v(B[j],A,g,b,G)}function T(R){R.target.removeEventListener("dispose",T);for(let g in c){let b=c[g],G=R.target.uuid;if(G in b)b[G].dispose(),delete b[G]}}}function Tx(t,e){function n(){let O=!1,ht=new ve,J=null,ut=new ve(0,0,0,0);return{setMask:function(bt){if(J!==bt&&!O)t.colorMask(bt,bt,bt,bt),J=bt},setLocked:function(bt){O=bt},setClear:function(bt,nt,gt,zt,me){if(me===!0)bt*=zt,nt*=zt,gt*=zt;if(ht.set(bt,nt,gt,zt),ut.equals(ht)===!1)t.clearColor(bt,nt,gt,zt),ut.copy(ht)},reset:function(){O=!1,J=null,ut.set(-1,0,0,0)}}}function i(){let O=!1,ht=!1,J=null,ut=null,bt=null;return{setReversed:function(nt){if(ht!==nt){let gt=e.get("EXT_clip_control");if(nt)gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT);else gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT);ht=nt;let zt=bt;bt=null,this.setClear(zt)}},getReversed:function(){return ht},setTest:function(nt){if(nt)K(t.DEPTH_TEST);else ct(t.DEPTH_TEST)},setMask:function(nt){if(J!==nt&&!O)t.depthMask(nt),J=nt},setFunc:function(nt){if(ht)nt=Fu[nt];if(ut!==nt){switch(nt){case ou:t.depthFunc(t.NEVER);break;case lu:t.depthFunc(t.ALWAYS);break;case cu:t.depthFunc(t.LESS);break;case zo:t.depthFunc(t.LEQUAL);break;case hu:t.depthFunc(t.EQUAL);break;case uu:t.depthFunc(t.GEQUAL);break;case du:t.depthFunc(t.GREATER);break;case fu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ut=nt}},setLocked:function(nt){O=nt},setClear:function(nt){if(bt!==nt){if(bt=nt,ht)nt=1-nt;t.clearDepth(nt)}},reset:function(){O=!1,J=null,ut=null,bt=null,ht=!1}}}function s(){let O=!1,ht=null,J=null,ut=null,bt=null,nt=null,gt=null,zt=null,me=null;return{setTest:function(ne){if(!O)if(ne)K(t.STENCIL_TEST);else ct(t.STENCIL_TEST)},setMask:function(ne){if(ht!==ne&&!O)t.stencilMask(ne),ht=ne},setFunc:function(ne,Dn,Kn){if(J!==ne||ut!==Dn||bt!==Kn)t.stencilFunc(ne,Dn,Kn),J=ne,ut=Dn,bt=Kn},setOp:function(ne,Dn,Kn){if(nt!==ne||gt!==Dn||zt!==Kn)t.stencilOp(ne,Dn,Kn),nt=ne,gt=Dn,zt=Kn},setLocked:function(ne){O=ne},setClear:function(ne){if(me!==ne)t.clearStencil(ne),me=ne},reset:function(){O=!1,ht=null,J=null,ut=null,bt=null,nt=null,gt=null,zt=null,me=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},p=new WeakMap,_=[],S=null,m=!1,f=null,E=null,w=null,v=null,T=null,R=null,A=null,g=new Bt(0,0,0),b=0,G=!1,I=null,B=null,j=null,L=null,q=null,et=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,st=0,C=t.getParameter(t.VERSION);if(C.indexOf("WebGL")!==-1)st=parseFloat(/^WebGL (\d)/.exec(C)[1]),W=st>=1;else if(C.indexOf("OpenGL ES")!==-1)st=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),W=st>=2;let N=null,Z={},rt=t.getParameter(t.SCISSOR_BOX),lt=t.getParameter(t.VIEWPORT),Pt=new ve().fromArray(rt),Et=new ve().fromArray(lt);function z(O,ht,J,ut){let bt=new Uint8Array(4),nt=t.createTexture();t.bindTexture(O,nt),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let gt=0;gt<J;gt++)if(O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY)t.texImage3D(ht,0,t.RGBA,1,1,ut,0,t.RGBA,t.UNSIGNED_BYTE,bt);else t.texImage2D(ht+gt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,bt);return nt}let tt={};tt[t.TEXTURE_2D]=z(t.TEXTURE_2D,t.TEXTURE_2D,1),tt[t.TEXTURE_CUBE_MAP]=z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[t.TEXTURE_2D_ARRAY]=z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),tt[t.TEXTURE_3D]=z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(t.DEPTH_TEST),a.setFunc(zo),Me(!1),he(Uo),K(t.CULL_FACE),Jt(Bn);function K(O){if(h[O]!==!0)t.enable(O),h[O]=!0}function ct(O){if(h[O]!==!1)t.disable(O),h[O]=!1}function vt(O,ht){if(u[O]!==ht){if(t.bindFramebuffer(O,ht),u[O]=ht,O===t.DRAW_FRAMEBUFFER)u[t.FRAMEBUFFER]=ht;if(O===t.FRAMEBUFFER)u[t.DRAW_FRAMEBUFFER]=ht;return!0}return!1}function mt(O,ht){let J=_,ut=!1;if(O){if(J=p.get(ht),J===void 0)J=[],p.set(ht,J);let bt=O.textures;if(J.length!==bt.length||J[0]!==t.COLOR_ATTACHMENT0){for(let nt=0,gt=bt.length;nt<gt;nt++)J[nt]=t.COLOR_ATTACHMENT0+nt;J.length=bt.length,ut=!0}}else if(J[0]!==t.BACK)J[0]=t.BACK,ut=!0;if(ut)t.drawBuffers(J)}function jt(O){if(S!==O)return t.useProgram(O),S=O,!0;return!1}let Ht={[Ls]:t.FUNC_ADD,[Gh]:t.FUNC_SUBTRACT,[Wh]:t.FUNC_REVERSE_SUBTRACT};Ht[Vh]=t.MIN,Ht[Xh]=t.MAX;let Vt={[qh]:t.ZERO,[Yh]:t.ONE,[Zh]:t.SRC_COLOR,[Kh]:t.SRC_ALPHA,[nu]:t.SRC_ALPHA_SATURATE,[tu]:t.DST_COLOR,[jh]:t.DST_ALPHA,[Jh]:t.ONE_MINUS_SRC_COLOR,[$h]:t.ONE_MINUS_SRC_ALPHA,[eu]:t.ONE_MINUS_DST_COLOR,[Qh]:t.ONE_MINUS_DST_ALPHA,[iu]:t.CONSTANT_COLOR,[su]:t.ONE_MINUS_CONSTANT_COLOR,[ru]:t.CONSTANT_ALPHA,[au]:t.ONE_MINUS_CONSTANT_ALPHA};function Jt(O,ht,J,ut,bt,nt,gt,zt,me,ne){if(O===Bn){if(m===!0)ct(t.BLEND),m=!1;return}if(m===!1)K(t.BLEND),m=!0;if(O!==kh){if(O!==f||ne!==G){if(E!==Ls||T!==Ls)t.blendEquation(t.FUNC_ADD),E=Ls,T=Ls;if(ne)switch(O){case ar:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Fo:t.blendFunc(t.ONE,t.ONE);break;case Oo:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bo:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ut("WebGLState: Invalid blending: ",O);break}else switch(O){case ar:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Fo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Oo:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bo:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",O);break}w=null,v=null,R=null,A=null,g.set(0,0,0),b=0,f=O,G=ne}return}if(bt=bt||ht,nt=nt||J,gt=gt||ut,ht!==E||bt!==T)t.blendEquationSeparate(Ht[ht],Ht[bt]),E=ht,T=bt;if(J!==w||ut!==v||nt!==R||gt!==A)t.blendFuncSeparate(Vt[J],Vt[ut],Vt[nt],Vt[gt]),w=J,v=ut,R=nt,A=gt;if(zt.equals(g)===!1||me!==b)t.blendColor(zt.r,zt.g,zt.b,me),g.copy(zt),b=me;f=O,G=!1}function Wt(O,ht){O.side===On?ct(t.CULL_FACE):K(t.CULL_FACE);let J=O.side===rn;if(ht)J=!J;Me(J),O.blending===ar&&O.transparent===!1?Jt(Bn):Jt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let ut=O.stencilWrite;if(o.setTest(ut),ut)o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass);be(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?K(t.SAMPLE_ALPHA_TO_COVERAGE):ct(t.SAMPLE_ALPHA_TO_COVERAGE)}function Me(O){if(I!==O){if(O)t.frontFace(t.CW);else t.frontFace(t.CCW);I=O}}function he(O){if(O!==Bh){if(K(t.CULL_FACE),O!==B)if(O===Uo)t.cullFace(t.BACK);else if(O===zh)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else ct(t.CULL_FACE);B=O}function re(O){if(O!==j){if(W)t.lineWidth(O);j=O}}function be(O,ht,J){if(O){if(K(t.POLYGON_OFFSET_FILL),L!==ht||q!==J){if(L=ht,q=J,a.getReversed())ht=-ht;t.polygonOffset(ht,J)}}else ct(t.POLYGON_OFFSET_FILL)}function te(O){if(O)K(t.SCISSOR_TEST);else ct(t.SCISSOR_TEST)}function U(O){if(O===void 0)O=t.TEXTURE0+et-1;if(N!==O)t.activeTexture(O),N=O}function nn(O,ht,J){if(J===void 0)if(N===null)J=t.TEXTURE0+et-1;else J=N;let ut=Z[J];if(ut===void 0)ut={type:void 0,texture:void 0},Z[J]=ut;if(ut.type!==O||ut.texture!==ht){if(N!==J)t.activeTexture(J),N=J;t.bindTexture(O,ht||tt[O]),ut.type=O,ut.texture=ht}}function ee(){let O=Z[N];if(O!==void 0&&O.type!==void 0)t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0}function Se(){try{t.compressedTexImage2D(...arguments)}catch(O){Ut("WebGLState:",O)}}function M(){try{t.compressedTexImage3D(...arguments)}catch(O){Ut("WebGLState:",O)}}function x(){try{t.texSubImage2D(...arguments)}catch(O){Ut("WebGLState:",O)}}function D(){try{t.texSubImage3D(...arguments)}catch(O){Ut("WebGLState:",O)}}function V(){try{t.compressedTexSubImage2D(...arguments)}catch(O){Ut("WebGLState:",O)}}function it(){try{t.compressedTexSubImage3D(...arguments)}catch(O){Ut("WebGLState:",O)}}function ot(){try{t.texStorage2D(...arguments)}catch(O){Ut("WebGLState:",O)}}function dt(){try{t.texStorage3D(...arguments)}catch(O){Ut("WebGLState:",O)}}function Y(){try{t.texImage2D(...arguments)}catch(O){Ut("WebGLState:",O)}}function Q(){try{t.texImage3D(...arguments)}catch(O){Ut("WebGLState:",O)}}function yt(O){if(d[O]!==void 0)return d[O];else return t.getParameter(O)}function It(O,ht){if(d[O]!==ht)t.pixelStorei(O,ht),d[O]=ht}function ft(O){if(Pt.equals(O)===!1)t.scissor(O.x,O.y,O.z,O.w),Pt.copy(O)}function at(O){if(Et.equals(O)===!1)t.viewport(O.x,O.y,O.z,O.w),Et.copy(O)}function Lt(O,ht){let J=c.get(ht);if(J===void 0)J=new WeakMap,c.set(ht,J);let ut=J.get(O);if(ut===void 0)ut=t.getUniformBlockIndex(ht,O.name),J.set(O,ut)}function Nt(O,ht){let ut=c.get(ht).get(O);if(l.get(ht)!==ut)t.uniformBlockBinding(ht,ut,O.__bindingPointIndex),l.set(ht,ut)}function Qt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},d={},N=null,Z={},u={},p=new WeakMap,_=[],S=null,m=!1,f=null,E=null,w=null,v=null,T=null,R=null,A=null,g=new Bt(0,0,0),b=0,G=!1,I=null,B=null,j=null,L=null,q=null,Pt.set(0,0,t.canvas.width,t.canvas.height),Et.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:ct,bindFramebuffer:vt,drawBuffers:mt,useProgram:jt,setBlending:Jt,setMaterial:Wt,setFlipSided:Me,setCullFace:he,setLineWidth:re,setPolygonOffset:be,setScissorTest:te,activeTexture:U,bindTexture:nn,unbindTexture:ee,compressedTexImage2D:Se,compressedTexImage3D:M,texImage2D:Y,texImage3D:Q,pixelStorei:It,getParameter:yt,updateUBOMapping:Lt,uniformBlockBinding:Nt,texStorage2D:ot,texStorage3D:dt,texSubImage2D:x,texSubImage3D:D,compressedTexSubImage2D:V,compressedTexSubImage3D:it,scissor:ft,viewport:at,reset:Qt}}function wx(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,h=new WeakMap,d=new Set,u,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(M){}function S(M,x){return _?new OffscreenCanvas(M,x):ir("canvas")}function m(M,x,D){let V=1,it=Se(M);if(it.width>D||it.height>D)V=D/Math.max(it.width,it.height);if(V<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let ot=Math.floor(V*it.width),dt=Math.floor(V*it.height);if(u===void 0)u=S(ot,dt);let Y=x?S(ot,dt):u;return Y.width=ot,Y.height=dt,Y.getContext("2d").drawImage(M,0,0,ot,dt),Ft("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ot+"x"+dt+")."),Y}else{if("data"in M)Ft("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+").");return M}return M}function f(M){return M.generateMipmaps}function E(M){t.generateMipmap(M)}function w(M){if(M.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(M.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function v(M,x,D,V,it,ot=!1){if(M!==null){if(t[M]!==void 0)return t[M];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let dt;if(V){if(dt=e.get("EXT_texture_norm16"),!dt)Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let Y=x;if(x===t.RED){if(D===t.FLOAT)Y=t.R32F;if(D===t.HALF_FLOAT)Y=t.R16F;if(D===t.UNSIGNED_BYTE)Y=t.R8;if(D===t.UNSIGNED_SHORT&&dt)Y=dt.R16_EXT;if(D===t.SHORT&&dt)Y=dt.R16_SNORM_EXT}if(x===t.RED_INTEGER){if(D===t.UNSIGNED_BYTE)Y=t.R8UI;if(D===t.UNSIGNED_SHORT)Y=t.R16UI;if(D===t.UNSIGNED_INT)Y=t.R32UI;if(D===t.BYTE)Y=t.R8I;if(D===t.SHORT)Y=t.R16I;if(D===t.INT)Y=t.R32I}if(x===t.RG){if(D===t.FLOAT)Y=t.RG32F;if(D===t.HALF_FLOAT)Y=t.RG16F;if(D===t.UNSIGNED_BYTE)Y=t.RG8;if(D===t.UNSIGNED_SHORT&&dt)Y=dt.RG16_EXT;if(D===t.SHORT&&dt)Y=dt.RG16_SNORM_EXT}if(x===t.RG_INTEGER){if(D===t.UNSIGNED_BYTE)Y=t.RG8UI;if(D===t.UNSIGNED_SHORT)Y=t.RG16UI;if(D===t.UNSIGNED_INT)Y=t.RG32UI;if(D===t.BYTE)Y=t.RG8I;if(D===t.SHORT)Y=t.RG16I;if(D===t.INT)Y=t.RG32I}if(x===t.RGB_INTEGER){if(D===t.UNSIGNED_BYTE)Y=t.RGB8UI;if(D===t.UNSIGNED_SHORT)Y=t.RGB16UI;if(D===t.UNSIGNED_INT)Y=t.RGB32UI;if(D===t.BYTE)Y=t.RGB8I;if(D===t.SHORT)Y=t.RGB16I;if(D===t.INT)Y=t.RGB32I}if(x===t.RGBA_INTEGER){if(D===t.UNSIGNED_BYTE)Y=t.RGBA8UI;if(D===t.UNSIGNED_SHORT)Y=t.RGBA16UI;if(D===t.UNSIGNED_INT)Y=t.RGBA32UI;if(D===t.BYTE)Y=t.RGBA8I;if(D===t.SHORT)Y=t.RGBA16I;if(D===t.INT)Y=t.RGBA32I}if(x===t.RGB){if(D===t.UNSIGNED_SHORT&&dt)Y=dt.RGB16_EXT;if(D===t.SHORT&&dt)Y=dt.RGB16_SNORM_EXT;if(D===t.UNSIGNED_INT_5_9_9_9_REV)Y=t.RGB9_E5;if(D===t.UNSIGNED_INT_10F_11F_11F_REV)Y=t.R11F_G11F_B10F}if(x===t.RGBA){let Q=ot?Il:Yt.getTransfer(it);if(D===t.FLOAT)Y=t.RGBA32F;if(D===t.HALF_FLOAT)Y=t.RGBA16F;if(D===t.UNSIGNED_BYTE)Y=Q===fe?t.SRGB8_ALPHA8:t.RGBA8;if(D===t.UNSIGNED_SHORT&&dt)Y=dt.RGBA16_EXT;if(D===t.SHORT&&dt)Y=dt.RGBA16_SNORM_EXT;if(D===t.UNSIGNED_SHORT_4_4_4_4)Y=t.RGBA4;if(D===t.UNSIGNED_SHORT_5_5_5_1)Y=t.RGB5_A1}if(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)e.get("EXT_color_buffer_float");return Y}function T(M,x){let D;if(M){if(x===null||x===Ei||x===Ds)D=t.DEPTH24_STENCIL8;else if(x===si)D=t.DEPTH32F_STENCIL8;else if(x===hr)D=t.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(x===null||x===Ei||x===Ds)D=t.DEPTH_COMPONENT24;else if(x===si)D=t.DEPTH_COMPONENT32F;else if(x===hr)D=t.DEPTH_COMPONENT16;return D}function R(M,x){if(f(M)===!0||M.isFramebufferTexture&&M.minFilter!==Rn&&M.minFilter!==an)return Math.log2(Math.max(x.width,x.height))+1;else if(M.mipmaps!==void 0&&M.mipmaps.length>0)return M.mipmaps.length;else if(M.isCompressedTexture&&Array.isArray(M.image))return x.mipmaps.length;else return 1}function A(M){let x=M.target;if(x.removeEventListener("dispose",A),b(x),x.isVideoTexture)h.delete(x);if(x.isHTMLTexture)d.delete(x)}function g(M){let x=M.target;x.removeEventListener("dispose",g),I(x)}function b(M){let x=i.get(M);if(x.__webglInit===void 0)return;let D=M.source,V=p.get(D);if(V){let it=V[x.__cacheKey];if(it.usedTimes--,it.usedTimes===0)G(M);if(Object.keys(V).length===0)p.delete(D)}i.remove(M)}function G(M){let x=i.get(M);t.deleteTexture(x.__webglTexture);let D=M.source,V=p.get(D);delete V[x.__cacheKey],a.memory.textures--}function I(M){let x=i.get(M);if(M.depthTexture)M.depthTexture.dispose(),i.remove(M.depthTexture);if(M.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let it=0;it<x.__webglFramebuffer[V].length;it++)t.deleteFramebuffer(x.__webglFramebuffer[V][it]);else t.deleteFramebuffer(x.__webglFramebuffer[V]);if(x.__webglDepthbuffer)t.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)t.deleteFramebuffer(x.__webglFramebuffer[V]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer)t.deleteRenderbuffer(x.__webglDepthbuffer);if(x.__webglMultisampledFramebuffer)t.deleteFramebuffer(x.__webglMultisampledFramebuffer);if(x.__webglColorRenderbuffer){for(let V=0;V<x.__webglColorRenderbuffer.length;V++)if(x.__webglColorRenderbuffer[V])t.deleteRenderbuffer(x.__webglColorRenderbuffer[V])}if(x.__webglDepthRenderbuffer)t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let D=M.textures;for(let V=0,it=D.length;V<it;V++){let ot=i.get(D[V]);if(ot.__webglTexture)t.deleteTexture(ot.__webglTexture),a.memory.textures--;i.remove(D[V])}i.remove(M)}let B=0;function j(){B=0}function L(){return B}function q(M){B=M}function et(){let M=B;if(M>=s.maxTextures)Ft("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+s.maxTextures);return B+=1,M}function W(M){let x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function st(M,x){let D=i.get(M);if(M.isVideoTexture)nn(M);if(M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&D.__version!==M.version){let V=M.image;if(V===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(D,M,x);return}}else if(M.isExternalTexture)D.__webglTexture=M.sourceTexture?M.sourceTexture:null;n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+x)}function C(M,x){let D=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){ct(D,M,x);return}else if(M.isExternalTexture)D.__webglTexture=M.sourceTexture?M.sourceTexture:null;n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+x)}function N(M,x){let D=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){ct(D,M,x);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+x)}function Z(M,x){let D=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&D.__version!==M.version){vt(D,M,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+x)}let rt={[lr]:t.REPEAT,[aa]:t.CLAMP_TO_EDGE,[_u]:t.MIRRORED_REPEAT},lt={[Rn]:t.NEAREST,[xu]:t.NEAREST_MIPMAP_NEAREST,[cr]:t.NEAREST_MIPMAP_LINEAR,[an]:t.LINEAR,[oa]:t.LINEAR_MIPMAP_NEAREST,[zi]:t.LINEAR_MIPMAP_LINEAR},Pt={[Au]:t.NEVER,[Lu]:t.ALWAYS,[Ru]:t.LESS,[ma]:t.LEQUAL,[Cu]:t.EQUAL,[ga]:t.GEQUAL,[Pu]:t.GREATER,[Iu]:t.NOTEQUAL};function Et(M,x){if(x.type===si&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===an||x.magFilter===oa||x.magFilter===cr||x.magFilter===zi||x.minFilter===an||x.minFilter===oa||x.minFilter===cr||x.minFilter===zi))Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(M,t.TEXTURE_WRAP_S,rt[x.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,rt[x.wrapT]),M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)t.texParameteri(M,t.TEXTURE_WRAP_R,rt[x.wrapR]);if(t.texParameteri(M,t.TEXTURE_MAG_FILTER,lt[x.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,lt[x.minFilter]),x.compareFunction)t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,Pt[x.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Rn)return;if(x.minFilter!==cr&&x.minFilter!==zi)return;if(x.type===si&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function z(M,x){let D=!1;if(M.__webglInit===void 0)M.__webglInit=!0,x.addEventListener("dispose",A);let V=x.source,it=p.get(V);if(it===void 0)it={},p.set(V,it);let ot=W(x);if(ot!==M.__cacheKey){if(it[ot]===void 0)it[ot]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,D=!0;it[ot].usedTimes++;let dt=it[M.__cacheKey];if(dt!==void 0){if(it[M.__cacheKey].usedTimes--,dt.usedTimes===0)G(x)}M.__cacheKey=ot,M.__webglTexture=it[ot].texture}return D}function tt(M,x,D){return Math.floor(Math.floor(M/D)/x)}function K(M,x,D,V){let ot=M.updateRanges;if(ot.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,D,V,x.data);else{ot.sort((It,ft)=>It.start-ft.start);let dt=0;for(let It=1;It<ot.length;It++){let ft=ot[dt],at=ot[It],Lt=ft.start+ft.count,Nt=tt(at.start,x.width,4),Qt=tt(ft.start,x.width,4);if(at.start<=Lt+1&&Nt===Qt&&tt(at.start+at.count-1,x.width,4)===Nt)ft.count=Math.max(ft.count,at.start+at.count-ft.start);else++dt,ot[dt]=at}ot.length=dt+1;let Y=n.getParameter(t.UNPACK_ROW_LENGTH),Q=n.getParameter(t.UNPACK_SKIP_PIXELS),yt=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let It=0,ft=ot.length;It<ft;It++){let at=ot[It],Lt=Math.floor(at.start/4),Nt=Math.ceil(at.count/4),Qt=Lt%x.width,O=Math.floor(Lt/x.width),ht=Nt,J=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Qt),n.pixelStorei(t.UNPACK_SKIP_ROWS,O),n.texSubImage2D(t.TEXTURE_2D,0,Qt,O,ht,1,D,V,x.data)}M.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Y),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(t.UNPACK_SKIP_ROWS,yt)}}function ct(M,x,D){let V=t.TEXTURE_2D;if(x.isDataArrayTexture||x.isCompressedArrayTexture)V=t.TEXTURE_2D_ARRAY;if(x.isData3DTexture)V=t.TEXTURE_3D;let it=z(M,x),ot=x.source;n.bindTexture(V,M.__webglTexture,t.TEXTURE0+D);let dt=i.get(ot);if(ot.version!==dt.__version||it===!0){if(n.activeTexture(t.TEXTURE0+D),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let J=Yt.getPrimaries(Yt.workingColorSpace),ut=x.colorSpace===Wi?null:Yt.getPrimaries(x.colorSpace),bt=x.colorSpace===Wi||J===ut?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let Q=m(x.image,!1,s.maxTextureSize);Q=ee(x,Q);let yt=r.convert(x.format,x.colorSpace),It=r.convert(x.type),ft=v(x.internalFormat,yt,It,x.normalized,x.colorSpace,x.isVideoTexture);Et(V,x);let at,Lt=x.mipmaps,Nt=x.isVideoTexture!==!0,Qt=dt.__version===void 0||it===!0,O=ot.dataReady,ht=R(x,Q);if(x.isDepthTexture){if(ft=T(x.format===ki,x.type),Qt)if(Nt)n.texStorage2D(t.TEXTURE_2D,1,ft,Q.width,Q.height);else n.texImage2D(t.TEXTURE_2D,0,ft,Q.width,Q.height,0,yt,It,null)}else if(x.isDataTexture)if(Lt.length>0){if(Nt&&Qt)n.texStorage2D(t.TEXTURE_2D,ht,ft,Lt[0].width,Lt[0].height);for(let J=0,ut=Lt.length;J<ut;J++)if(at=Lt[J],Nt){if(O)n.texSubImage2D(t.TEXTURE_2D,J,0,0,at.width,at.height,yt,It,at.data)}else n.texImage2D(t.TEXTURE_2D,J,ft,at.width,at.height,0,yt,It,at.data);x.generateMipmaps=!1}else if(Nt){if(Qt)n.texStorage2D(t.TEXTURE_2D,ht,ft,Q.width,Q.height);if(O)K(x,Q,yt,It)}else n.texImage2D(t.TEXTURE_2D,0,ft,Q.width,Q.height,0,yt,It,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){if(Nt&&Qt)n.texStorage3D(t.TEXTURE_2D_ARRAY,ht,ft,Lt[0].width,Lt[0].height,Q.depth);for(let J=0,ut=Lt.length;J<ut;J++)if(at=Lt[J],x.format!==Hn)if(yt!==null)if(Nt){if(O)if(x.layerUpdates.size>0){let bt=sc(at.width,at.height,x.format,x.type);for(let nt of x.layerUpdates){let gt=at.data.subarray(nt*bt/at.data.BYTES_PER_ELEMENT,(nt+1)*bt/at.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,nt,at.width,at.height,1,yt,gt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,at.width,at.height,Q.depth,yt,at.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,ft,at.width,at.height,Q.depth,0,at.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Nt){if(O)n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,at.width,at.height,Q.depth,yt,It,at.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,J,ft,at.width,at.height,Q.depth,0,yt,It,at.data);if(x.layerUpdates.size>0)x.clearLayerUpdates()}else{if(Nt&&Qt)n.texStorage2D(t.TEXTURE_2D,ht,ft,Lt[0].width,Lt[0].height);for(let J=0,ut=Lt.length;J<ut;J++)if(at=Lt[J],x.format!==Hn)if(yt!==null)if(Nt){if(O)n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,at.width,at.height,yt,at.data)}else n.compressedTexImage2D(t.TEXTURE_2D,J,ft,at.width,at.height,0,at.data);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Nt){if(O)n.texSubImage2D(t.TEXTURE_2D,J,0,0,at.width,at.height,yt,It,at.data)}else n.texImage2D(t.TEXTURE_2D,J,ft,at.width,at.height,0,yt,It,at.data)}else if(x.isDataArrayTexture)if(Nt){if(Qt)n.texStorage3D(t.TEXTURE_2D_ARRAY,ht,ft,Q.width,Q.height,Q.depth);if(O)if(x.layerUpdates.size>0){let J=sc(Q.width,Q.height,x.format,x.type);for(let ut of x.layerUpdates){let bt=Q.data.subarray(ut*J/Q.data.BYTES_PER_ELEMENT,(ut+1)*J/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ut,Q.width,Q.height,1,yt,It,bt)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,yt,It,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ft,Q.width,Q.height,Q.depth,0,yt,It,Q.data);else if(x.isData3DTexture)if(Nt){if(Qt)n.texStorage3D(t.TEXTURE_3D,ht,ft,Q.width,Q.height,Q.depth);if(O)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,yt,It,Q.data)}else n.texImage3D(t.TEXTURE_3D,0,ft,Q.width,Q.height,Q.depth,0,yt,It,Q.data);else if(x.isFramebufferTexture){if(Qt)if(Nt)n.texStorage2D(t.TEXTURE_2D,ht,ft,Q.width,Q.height);else{let J=Q.width,ut=Q.height;for(let bt=0;bt<ht;bt++)n.texImage2D(t.TEXTURE_2D,bt,ft,J,ut,0,yt,It,null),J>>=1,ut>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){let J=t.canvas;if(!J.hasAttribute("layoutsubtree"))J.setAttribute("layoutsubtree","true");if(Q.parentNode!==J){J.appendChild(Q),d.add(x),J.onpaint=(ut)=>{let bt=ut.changedElements;for(let nt of d)if(bt.includes(nt.image))nt.needsUpdate=!0},J.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Q);else{let{RGBA:bt,RGBA:nt,UNSIGNED_BYTE:gt}=t;t.texElementImage2D(t.TEXTURE_2D,0,bt,nt,gt,Q)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Lt.length>0){if(Nt&&Qt){let J=Se(Lt[0]);n.texStorage2D(t.TEXTURE_2D,ht,ft,J.width,J.height)}for(let J=0,ut=Lt.length;J<ut;J++)if(at=Lt[J],Nt){if(O)n.texSubImage2D(t.TEXTURE_2D,J,0,0,yt,It,at)}else n.texImage2D(t.TEXTURE_2D,J,ft,yt,It,at);x.generateMipmaps=!1}else if(Nt){if(Qt){let J=Se(Q);n.texStorage2D(t.TEXTURE_2D,ht,ft,J.width,J.height)}if(O)n.texSubImage2D(t.TEXTURE_2D,0,0,0,yt,It,Q)}else n.texImage2D(t.TEXTURE_2D,0,ft,yt,It,Q);if(f(x))E(V);if(dt.__version=ot.version,x.onUpdate)x.onUpdate(x)}M.__version=x.version}function vt(M,x,D){if(x.image.length!==6)return;let V=z(M,x),it=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+D);let ot=i.get(it);if(it.version!==ot.__version||V===!0){n.activeTexture(t.TEXTURE0+D);let dt=Yt.getPrimaries(Yt.workingColorSpace),Y=x.colorSpace===Wi?null:Yt.getPrimaries(x.colorSpace),Q=x.colorSpace===Wi||dt===Y?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let yt=x.isCompressedTexture||x.image[0].isCompressedTexture,It=x.image[0]&&x.image[0].isDataTexture,ft=[];for(let nt=0;nt<6;nt++){if(!yt&&!It)ft[nt]=m(x.image[nt],!0,s.maxCubemapSize);else ft[nt]=It?x.image[nt].image:x.image[nt];ft[nt]=ee(x,ft[nt])}let at=ft[0],Lt=r.convert(x.format,x.colorSpace),Nt=r.convert(x.type),Qt=v(x.internalFormat,Lt,Nt,x.normalized,x.colorSpace),O=x.isVideoTexture!==!0,ht=ot.__version===void 0||V===!0,J=it.dataReady,ut=R(x,at);Et(t.TEXTURE_CUBE_MAP,x);let bt;if(yt){if(O&&ht)n.texStorage2D(t.TEXTURE_CUBE_MAP,ut,Qt,at.width,at.height);for(let nt=0;nt<6;nt++){bt=ft[nt].mipmaps;for(let gt=0;gt<bt.length;gt++){let zt=bt[gt];if(x.format!==Hn)if(Lt!==null)if(O){if(J)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt,0,0,zt.width,zt.height,Lt,zt.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt,Qt,zt.width,zt.height,0,zt.data);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(O){if(J)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt,0,0,zt.width,zt.height,Lt,Nt,zt.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt,Qt,zt.width,zt.height,0,Lt,Nt,zt.data)}}}else{if(bt=x.mipmaps,O&&ht){if(bt.length>0)ut++;let nt=Se(ft[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ut,Qt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(It){if(O){if(J)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ft[nt].width,ft[nt].height,Lt,Nt,ft[nt].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Qt,ft[nt].width,ft[nt].height,0,Lt,Nt,ft[nt].data);for(let gt=0;gt<bt.length;gt++){let me=bt[gt].image[nt].image;if(O){if(J)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt+1,0,0,me.width,me.height,Lt,Nt,me.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt+1,Qt,me.width,me.height,0,Lt,Nt,me.data)}}else{if(O){if(J)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Lt,Nt,ft[nt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Qt,Lt,Nt,ft[nt]);for(let gt=0;gt<bt.length;gt++){let zt=bt[gt];if(O){if(J)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt+1,0,0,Lt,Nt,zt.image[nt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt+1,Qt,Lt,Nt,zt.image[nt])}}}if(f(x))E(t.TEXTURE_CUBE_MAP);if(ot.__version=it.version,x.onUpdate)x.onUpdate(x)}M.__version=x.version}function mt(M,x,D,V,it,ot){let dt=r.convert(D.format,D.colorSpace),Y=r.convert(D.type),Q=v(D.internalFormat,dt,Y,D.normalized,D.colorSpace),yt=i.get(x),It=i.get(D);if(It.__renderTarget=x,!yt.__hasExternalTextures){let ft=Math.max(1,x.width>>ot),at=Math.max(1,x.height>>ot);if(it===t.TEXTURE_3D||it===t.TEXTURE_2D_ARRAY)n.texImage3D(it,ot,Q,ft,at,x.depth,0,dt,Y,null);else n.texImage2D(it,ot,Q,ft,at,0,dt,Y,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,M),U(x))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,V,it,It.__webglTexture,0,te(x));else if(it===t.TEXTURE_2D||it>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,V,it,It.__webglTexture,ot);n.bindFramebuffer(t.FRAMEBUFFER,null)}function jt(M,x,D){if(t.bindRenderbuffer(t.RENDERBUFFER,M),x.depthBuffer){let V=x.depthTexture,it=V&&V.isDepthTexture?V.type:null,ot=T(x.stencilBuffer,it),dt=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(U(x))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te(x),ot,x.width,x.height);else if(D)t.renderbufferStorageMultisample(t.RENDERBUFFER,te(x),ot,x.width,x.height);else t.renderbufferStorage(t.RENDERBUFFER,ot,x.width,x.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,dt,t.RENDERBUFFER,M)}else{let V=x.textures;for(let it=0;it<V.length;it++){let ot=V[it],dt=r.convert(ot.format,ot.colorSpace),Y=r.convert(ot.type),Q=v(ot.internalFormat,dt,Y,ot.normalized,ot.colorSpace);if(U(x))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te(x),Q,x.width,x.height);else if(D)t.renderbufferStorageMultisample(t.RENDERBUFFER,te(x),Q,x.width,x.height);else t.renderbufferStorage(t.RENDERBUFFER,Q,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ht(M,x,D){let V=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=i.get(x.depthTexture);if(it.__renderTarget=x,!it.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0;if(V){if(it.__webglInit===void 0)it.__webglInit=!0,x.depthTexture.addEventListener("dispose",A);if(it.__webglTexture===void 0){it.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,it.__webglTexture),Et(t.TEXTURE_CUBE_MAP,x.depthTexture);let yt=r.convert(x.depthTexture.format),It=r.convert(x.depthTexture.type),ft;if(x.depthTexture.format===Hi)ft=t.DEPTH_COMPONENT24;else if(x.depthTexture.format===ki)ft=t.DEPTH24_STENCIL8;for(let at=0;at<6;at++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ft,x.width,x.height,0,yt,It,null)}}else st(x.depthTexture,0);let ot=it.__webglTexture,dt=te(x),Y=V?t.TEXTURE_CUBE_MAP_POSITIVE_X+D:t.TEXTURE_2D,Q=x.depthTexture.format===ki?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===Hi)if(U(x))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,Y,ot,0,dt);else t.framebufferTexture2D(t.FRAMEBUFFER,Q,Y,ot,0);else if(x.depthTexture.format===ki)if(U(x))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,Y,ot,0,dt);else t.framebufferTexture2D(t.FRAMEBUFFER,Q,Y,ot,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Vt(M){let x=i.get(M),D=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){let V=M.depthTexture;if(x.__depthDisposeCallback)x.__depthDisposeCallback();if(V){let it=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,V.removeEventListener("dispose",it)};V.addEventListener("dispose",it),x.__depthDisposeCallback=it}x.__boundDepthTexture=V}if(M.depthTexture&&!x.__autoAllocateDepthBuffer)if(D)for(let V=0;V<6;V++)Ht(x.__webglFramebuffer[V],M,V);else{let V=M.texture.mipmaps;if(V&&V.length>0)Ht(x.__webglFramebuffer[0],M,0);else Ht(x.__webglFramebuffer,M,0)}else if(D){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]===void 0)x.__webglDepthbuffer[V]=t.createRenderbuffer(),jt(x.__webglDepthbuffer[V],M,!1);else{let it=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ot=x.__webglDepthbuffer[V];t.bindRenderbuffer(t.RENDERBUFFER,ot),t.framebufferRenderbuffer(t.FRAMEBUFFER,it,t.RENDERBUFFER,ot)}}else{let V=M.texture.mipmaps;if(V&&V.length>0)n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]);else n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer);if(x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),jt(x.__webglDepthbuffer,M,!1);else{let it=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ot=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ot),t.framebufferRenderbuffer(t.FRAMEBUFFER,it,t.RENDERBUFFER,ot)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Jt(M,x,D){let V=i.get(M);if(x!==void 0)mt(V.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(D!==void 0)Vt(M)}function Wt(M){let x=M.texture,D=i.get(M),V=i.get(x);M.addEventListener("dispose",g);let it=M.textures,ot=M.isWebGLCubeRenderTarget===!0,dt=it.length>1;if(!dt){if(V.__webglTexture===void 0)V.__webglTexture=t.createTexture();V.__version=x.version,a.memory.textures++}if(ot){D.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[Y]=[];for(let Q=0;Q<x.mipmaps.length;Q++)D.__webglFramebuffer[Y][Q]=t.createFramebuffer()}else D.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)D.__webglFramebuffer[Y]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(dt)for(let Y=0,Q=it.length;Y<Q;Y++){let yt=i.get(it[Y]);if(yt.__webglTexture===void 0)yt.__webglTexture=t.createTexture(),a.memory.textures++}if(M.samples>0&&U(M)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let Y=0;Y<it.length;Y++){let Q=it[Y];D.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[Y]);let yt=r.convert(Q.format,Q.colorSpace),It=r.convert(Q.type),ft=v(Q.internalFormat,yt,It,Q.normalized,Q.colorSpace,M.isXRRenderTarget===!0),at=te(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,at,ft,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,D.__webglColorRenderbuffer[Y])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer)D.__webglDepthRenderbuffer=t.createRenderbuffer(),jt(D.__webglDepthRenderbuffer,M,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ot){n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture),Et(t.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)mt(D.__webglFramebuffer[Y][Q],M,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Q);else mt(D.__webglFramebuffer[Y],M,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);if(f(x))E(t.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(dt){for(let Y=0,Q=it.length;Y<Q;Y++){let yt=it[Y],It=i.get(yt),ft=t.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)ft=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(ft,It.__webglTexture),Et(ft,yt),mt(D.__webglFramebuffer,M,yt,t.COLOR_ATTACHMENT0+Y,ft,0),f(yt))E(ft)}n.unbindTexture()}else{let Y=t.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)Y=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(Y,V.__webglTexture),Et(Y,x),x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)mt(D.__webglFramebuffer[Q],M,x,t.COLOR_ATTACHMENT0,Y,Q);else mt(D.__webglFramebuffer,M,x,t.COLOR_ATTACHMENT0,Y,0);if(f(x))E(Y);n.unbindTexture()}if(M.depthBuffer)Vt(M)}function Me(M){let x=M.textures;for(let D=0,V=x.length;D<V;D++){let it=x[D];if(f(it)){let ot=w(M),dt=i.get(it).__webglTexture;n.bindTexture(ot,dt),E(ot),n.unbindTexture()}}}let he=[],re=[];function be(M){if(M.samples>0){if(U(M)===!1){let{textures:x,width:D,height:V}=M,it=t.COLOR_BUFFER_BIT,ot=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,dt=i.get(M),Y=x.length>1;if(Y)for(let yt=0;yt<x.length;yt++)n.bindFramebuffer(t.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+yt,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,dt.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+yt,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let Q=M.texture.mipmaps;if(Q&&Q.length>0)n.bindFramebuffer(t.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]);else n.bindFramebuffer(t.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let yt=0;yt<x.length;yt++){if(M.resolveDepthBuffer){if(M.depthBuffer)it|=t.DEPTH_BUFFER_BIT;if(M.stencilBuffer&&M.resolveStencilBuffer)it|=t.STENCIL_BUFFER_BIT}if(Y){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,dt.__webglColorRenderbuffer[yt]);let It=i.get(x[yt]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,It,0)}if(t.blitFramebuffer(0,0,D,V,0,0,D,V,it,t.NEAREST),l===!0){if(he.length=0,re.length=0,he.push(t.COLOR_ATTACHMENT0+yt),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1)he.push(ot),re.push(ot),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,re);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,he)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let yt=0;yt<x.length;yt++){n.bindFramebuffer(t.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+yt,t.RENDERBUFFER,dt.__webglColorRenderbuffer[yt]);let It=i.get(x[yt]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,dt.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+yt,t.TEXTURE_2D,It,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&l){let x=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function te(M){return Math.min(s.maxSamples,M.samples)}function U(M){let x=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function nn(M){let x=a.render.frame;if(h.get(M)!==x)h.set(M,x),M.update()}function ee(M,x){let{colorSpace:D,format:V,type:it}=M;if(M.isCompressedTexture===!0||M.isVideoTexture===!0)return x;if(D!==Pl&&D!==Wi)if(Yt.getTransfer(D)===fe){if(V!==Hn||it!==Cn)Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Ut("WebGLTextures: Unsupported texture color space:",D);return x}function Se(M){if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement)c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height;else if(typeof VideoFrame<"u"&&M instanceof VideoFrame)c.width=M.displayWidth,c.height=M.displayHeight;else c.width=M.width,c.height=M.height;return c}this.allocateTextureUnit=et,this.resetTextureUnits=j,this.getTextureUnits=L,this.setTextureUnits=q,this.setTexture2D=st,this.setTexture2DArray=C,this.setTexture3D=N,this.setTextureCube=Z,this.rebindTextures=Jt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=U,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Ax(t,e){function n(i,s=Wi){let r,a=Yt.getTransfer(s);if(i===Cn)return t.UNSIGNED_BYTE;if(i===Zo)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Jo)return t.UNSIGNED_SHORT_5_5_5_1;if(i===bu)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Su)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===yu)return t.BYTE;if(i===vu)return t.SHORT;if(i===hr)return t.UNSIGNED_SHORT;if(i===Yo)return t.INT;if(i===Ei)return t.UNSIGNED_INT;if(i===si)return t.FLOAT;if(i===zn)return t.HALF_FLOAT;if(i===Mu)return t.ALPHA;if(i===Eu)return t.RGB;if(i===Hn)return t.RGBA;if(i===Hi)return t.DEPTH_COMPONENT;if(i===ki)return t.DEPTH_STENCIL;if(i===Tu)return t.RED;if(i===Ko)return t.RED_INTEGER;if(i===Gi)return t.RG;if(i===$o)return t.RG_INTEGER;if(i===jo)return t.RGBA_INTEGER;if(i===la||i===ca||i===ha||i===ua)if(a===fe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qo||i===tl||i===el||i===nl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===el)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===il||i===sl||i===rl||i===al||i===ol||i===da||i===ll)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===il||i===sl)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===rl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===al)return r.COMPRESSED_R11_EAC;if(i===ol)return r.COMPRESSED_SIGNED_R11_EAC;if(i===da)return r.COMPRESSED_RG11_EAC;if(i===ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===cl||i===hl||i===ul||i===dl||i===fl||i===pl||i===ml||i===gl||i===_l||i===xl||i===yl||i===vl||i===bl||i===Sl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===cl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ul)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ml)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_l)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ml||i===El||i===Tl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ml)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===El)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wl||i===Al||i===fa||i===Rl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===wl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===Ds)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}var Rx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cx=`
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

}`;class Md{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new wa(t.texture);if(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=n}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new gn({vertexShader:Rx,fragmentShader:Cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Zt(new Ai(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ed extends kn{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,h=null,d=null,u=null,p=null,_=typeof XRWebGLBinding<"u",S=new Md,m={},f=e.getContextAttributes(),E=null,w=null,v=[],T=[],R=new Rt,A=null,g=null,b=new Ye;b.viewport=new ve;let G=new Ye;G.viewport=new ve;let I=[b,G],B=new tc,j=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let tt=v[z];if(tt===void 0)tt=new fr,v[z]=tt;return tt.getTargetRaySpace()},this.getControllerGrip=function(z){let tt=v[z];if(tt===void 0)tt=new fr,v[z]=tt;return tt.getGripSpace()},this.getHand=function(z){let tt=v[z];if(tt===void 0)tt=new fr,v[z]=tt;return tt.getHandSpace()};function q(z){let tt=T.indexOf(z.inputSource);if(tt===-1)return;let K=v[tt];if(K!==void 0)K.update(z.inputSource,z.frame,l||r),K.dispatchEvent({type:z.type,data:z.inputSource})}function et(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",et),i.removeEventListener("inputsourceschange",W);for(let z=0;z<v.length;z++){let tt=T[z];if(tt===null)continue;T[z]=null,v[z].disconnect(tt)}j=null,L=null,S.reset();for(let z in m)delete m[z];if(t.setRenderTarget(E),u=null,d=null,h=null,i=null,w=null,Et.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),g!==null){let z=g.camera;z.fov=g.fov,z.zoom=g.zoom,z.updateProjectionMatrix(),g=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){if(s=z,n.isPresenting===!0)Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){if(a=z,n.isPresenting===!0)Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){if(h===null&&_)h=new XRWebGLBinding(i,e);return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",et),i.addEventListener("inputsourceschange",W),f.xrCompatible!==!0)await e.makeXRCompatible();if(A=t.getPixelRatio(),t.getSize(R),!(_&&("createProjectionLayer"in XRWebGLBinding.prototype))){let K={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),w=new fn(u.framebufferWidth,u.framebufferHeight,{format:Hn,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let K=null,ct=null,vt=null;if(f.depth)vt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=f.stencil?ki:Hi,ct=f.stencil?Ds:Ei;let mt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(mt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new fn(d.textureWidth,d.textureHeight,{format:Hn,type:Cn,depthTexture:new Xi(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),Et.setContext(i),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function W(z){for(let tt=0;tt<z.removed.length;tt++){let K=z.removed[tt],ct=T.indexOf(K);if(ct>=0)T[ct]=null,v[ct].disconnect(K)}for(let tt=0;tt<z.added.length;tt++){let K=z.added[tt],ct=T.indexOf(K);if(ct===-1){for(let mt=0;mt<v.length;mt++)if(mt>=T.length){T.push(K),ct=mt;break}else if(T[mt]===null){T[mt]=K,ct=mt;break}if(ct===-1)break}let vt=v[ct];if(vt)vt.connect(K)}}let st=new P,C=new P;function N(z,tt,K){st.setFromMatrixPosition(tt.matrixWorld),C.setFromMatrixPosition(K.matrixWorld);let ct=st.distanceTo(C),vt=tt.projectionMatrix.elements,mt=K.projectionMatrix.elements,jt=vt[14]/(vt[10]-1),Ht=vt[14]/(vt[10]+1),Vt=(vt[9]+1)/vt[5],Jt=(vt[9]-1)/vt[5],Wt=(vt[8]-1)/vt[0],Me=(mt[8]+1)/mt[0],he=jt*Wt,re=jt*Me,be=ct/(-Wt+Me),te=be*-Wt;if(tt.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(te),z.translateZ(be),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),vt[10]===-1)z.projectionMatrix.copy(tt.projectionMatrix),z.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let U=jt+be,nn=Ht+be,ee=he-te,Se=re+(ct-te),M=Vt*Ht/nn*U,x=Jt*Ht/nn*U;z.projectionMatrix.makePerspective(ee,Se,M,x,U,nn),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function Z(z,tt){if(tt===null)z.matrixWorld.copy(z.matrix);else z.matrixWorld.multiplyMatrices(tt.matrixWorld,z.matrix);z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;let{near:tt,far:K}=z;if(S.texture!==null){if(S.depthNear>0)tt=S.depthNear;if(S.depthFar>0)K=S.depthFar}if(B.near=G.near=b.near=tt,B.far=G.far=b.far=K,j!==B.near||L!==B.far)i.updateRenderState({depthNear:B.near,depthFar:B.far}),j=B.near,L=B.far;B.layers.mask=z.layers.mask|6,b.layers.mask=B.layers.mask&-5,G.layers.mask=B.layers.mask&-3;let ct=z.parent,vt=B.cameras;Z(B,ct);for(let mt=0;mt<vt.length;mt++)Z(vt[mt],ct);if(vt.length===2)N(B,b,G);else B.projectionMatrix.copy(b.projectionMatrix);if(g===null&&z.isPerspectiveCamera)g={camera:z,fov:z.fov,zoom:z.zoom};rt(z,B,ct)};function rt(z,tt,K){if(K===null)z.matrix.copy(tt.matrixWorld);else z.matrix.copy(K.matrixWorld),z.matrix.invert(),z.matrix.multiply(tt.matrixWorld);if(z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(tt.projectionMatrix),z.projectionMatrixInverse.copy(tt.projectionMatrixInverse),z.isPerspectiveCamera)z.fov=Rs*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1}this.getCamera=function(){return B},this.getFoveation=function(){if(d===null&&u===null)return;return o},this.setFoveation=function(z){if(o=z,d!==null)d.fixedFoveation=z;if(u!==null&&u.fixedFoveation!==void 0)u.fixedFoveation=z},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(B)},this.getCameraTexture=function(z){return m[z]};let lt=null;function Pt(z,tt){if(c=tt.getViewerPose(l||r),p=tt,c!==null){let K=c.views;if(u!==null)t.setRenderTargetFramebuffer(w,u.framebuffer),t.setRenderTarget(w);let ct=!1;if(K.length!==B.cameras.length)B.cameras.length=0,ct=!0;for(let Ht=0;Ht<K.length;Ht++){let Vt=K[Ht],Jt=null;if(u!==null)Jt=u.getViewport(Vt);else{let Me=h.getViewSubImage(d,Vt);if(Jt=Me.viewport,Ht===0)t.setRenderTargetTextures(w,Me.colorTexture,Me.depthStencilTexture),t.setRenderTarget(w)}let Wt=I[Ht];if(Wt===void 0)Wt=new Ye,Wt.layers.enable(Ht),Wt.viewport=new ve,I[Ht]=Wt;if(Wt.matrix.fromArray(Vt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Vt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Ht===0)B.matrix.copy(Wt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);if(ct===!0)B.cameras.push(Wt)}let vt=i.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let Ht=h.getDepthInformation(K[0]);if(Ht&&Ht.isValid&&Ht.texture)S.init(Ht,i.renderState)}if(vt&&vt.includes("camera-access")&&_){t.state.unbindTexture(),h=n.getBinding();for(let Ht=0;Ht<K.length;Ht++){let Vt=K[Ht].camera;if(Vt){let Jt=m[Vt];if(!Jt)Jt=new wa,m[Vt]=Jt;let Wt=h.getCameraImage(Vt);Jt.sourceTexture=Wt}}}}for(let K=0;K<v.length;K++){let ct=T[K],vt=v[K];if(ct!==null&&vt!==void 0)vt.update(ct,tt,l||r)}if(lt)lt(z,tt);if(tt.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:tt});p=null}let Et=new dd;Et.setAnimationLoop(Pt),this.setAnimationLoop=function(z){lt=z},this.dispose=function(){}}}var Px=new $t,Td=new Ot;Td.set(-1,0,0,0,1,0,0,0,1);function Ix(t,e){function n(m,f){if(m.matrixAutoUpdate===!0)m.updateMatrix();f.value.copy(m.matrix)}function i(m,f){if(f.color.getRGB(m.fogColor.value,zl(t)),f.isFog)m.fogNear.value=f.near,m.fogFar.value=f.far;else if(f.isFogExp2)m.fogDensity.value=f.density}function s(m,f,E,w,v){if(f.isNodeMaterial)f.uniformsNeedUpdate=!1;else if(f.isMeshBasicMaterial)r(m,f);else if(f.isMeshLambertMaterial){if(r(m,f),f.envMap)m.envMapIntensity.value=f.envMapIntensity}else if(f.isMeshToonMaterial)r(m,f),d(m,f);else if(f.isMeshPhongMaterial){if(r(m,f),h(m,f),f.envMap)m.envMapIntensity.value=f.envMapIntensity}else if(f.isMeshStandardMaterial){if(r(m,f),u(m,f),f.isMeshPhysicalMaterial)p(m,f,v)}else if(f.isMeshMatcapMaterial)r(m,f),_(m,f);else if(f.isMeshDepthMaterial)r(m,f);else if(f.isMeshDistanceMaterial)r(m,f),S(m,f);else if(f.isMeshNormalMaterial)r(m,f);else if(f.isLineBasicMaterial){if(a(m,f),f.isLineDashedMaterial)o(m,f)}else if(f.isPointsMaterial)l(m,f,E,w);else if(f.isSpriteMaterial)c(m,f);else if(f.isShadowMaterial)m.color.value.copy(f.color),m.opacity.value=f.opacity;else if(f.isShaderMaterial)f.uniformsNeedUpdate=!1}function r(m,f){if(m.opacity.value=f.opacity,f.color)m.diffuse.value.copy(f.color);if(f.emissive)m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity);if(f.map)m.map.value=f.map,n(f.map,m.mapTransform);if(f.alphaMap)m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform);if(f.bumpMap){if(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===rn)m.bumpScale.value*=-1}if(f.normalMap){if(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===rn)m.normalScale.value.negate()}if(f.displacementMap)m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias;if(f.emissiveMap)m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform);if(f.specularMap)m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform);if(f.alphaTest>0)m.alphaTest.value=f.alphaTest;let E=e.get(f),{envMap:w,envMapRotation:v}=E;if(w){if(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Px.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1)m.envMapRotation.value.premultiply(Td);m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio}if(f.lightMap)m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform);if(f.aoMap)m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform)}function a(m,f){if(m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map)m.map.value=f.map,n(f.map,m.mapTransform)}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,w){if(m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=w*0.5,f.map)m.map.value=f.map,n(f.map,m.uvTransform);if(f.alphaMap)m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform);if(f.alphaTest>0)m.alphaTest.value=f.alphaTest}function c(m,f){if(m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map)m.map.value=f.map,n(f.map,m.mapTransform);if(f.alphaMap)m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform);if(f.alphaTest>0)m.alphaTest.value=f.alphaTest}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,0.0001)}function d(m,f){if(f.gradientMap)m.gradientMap.value=f.gradientMap}function u(m,f){if(m.metalness.value=f.metalness,f.metalnessMap)m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform);if(m.roughness.value=f.roughness,f.roughnessMap)m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform);if(f.envMap)m.envMapIntensity.value=f.envMapIntensity}function p(m,f,E){if(m.ior.value=f.ior,f.sheen>0){if(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap)m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform);if(f.sheenRoughnessMap)m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform)}if(f.clearcoat>0){if(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap)m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform);if(f.clearcoatRoughnessMap)m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform);if(f.clearcoatNormalMap){if(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===rn)m.clearcoatNormalScale.value.negate()}}if(f.dispersion>0)m.dispersion.value=f.dispersion;if(f.retroreflectivity>0)m.retroreflectivity.value=f.retroreflectivity;if(f.iridescence>0){if(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap)m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform);if(f.iridescenceThicknessMap)m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform)}if(f.transmission>0){if(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap)m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform);if(m.thickness.value=f.thickness,f.thicknessMap)m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform);m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)}if(f.anisotropy>0){if(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap)m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform)}if(m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap)m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform);if(f.specularIntensityMap)m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform)}function _(m,f){if(f.matcap)m.matcap.value=f.matcap}function S(m,f){let E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Lx(t,e,n,i){let s={},r={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){let R=T.program;i.uniformBlockBinding(v,R)}function c(v,T){let R=s[v.id];if(R===void 0)m(v),R=h(v),s[v.id]=R,v.addEventListener("dispose",E);let A=T.program;i.updateUBOMapping(v,A);let g=e.render.frame;if(r[v.id]!==g)u(v),r[v.id]=g}function h(v){let T=d();v.__bindingPointIndex=T;let R=t.createBuffer(),{__size:A,usage:g}=v;return t.bindBuffer(t.UNIFORM_BUFFER,R),t.bufferData(t.UNIFORM_BUFFER,A,g),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,R),R}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let T=s[v.id],{uniforms:R,__cache:A}=v;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let g=0,b=R.length;g<b;g++){let G=R[g];if(Array.isArray(G))for(let I=0,B=G.length;I<B;I++)p(G[I],g,I,A);else p(G,g,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,T,R,A){if(S(v,T,R,A)===!0){let{__offset:g,value:b}=v;if(Array.isArray(b)){let G=0;for(let I=0;I<b.length;I++){let B=b[I],j=f(B);if(_(B,v.__data,G),typeof B!=="number"&&typeof B!=="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B))G+=j.storage/Float32Array.BYTES_PER_ELEMENT}}else _(b,v.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,g,v.__data)}}function _(v,T,R){if(typeof v==="number"||typeof v==="boolean")T[0]=v;else if(v.isMatrix3)T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0;else if(ArrayBuffer.isView(v))T.set(new v.constructor(v.buffer,v.byteOffset,T.length));else v.toArray(T,R)}function S(v,T,R,A){let g=v.value,b=T+"_"+R;if(A[b]===void 0){if(typeof g==="number"||typeof g==="boolean")A[b]=g;else if(ArrayBuffer.isView(g))A[b]=g.slice();else A[b]=g.clone();return!0}else{let G=A[b];if(typeof g==="number"||typeof g==="boolean"){if(G!==g)return A[b]=g,!0}else if(ArrayBuffer.isView(g))return!0;else if(G.equals(g)===!1)return G.copy(g),!0}return!1}function m(v){let T=v.uniforms,R=0,A=16;for(let b=0,G=T.length;b<G;b++){let I=Array.isArray(T[b])?T[b]:[T[b]];for(let B=0,j=I.length;B<j;B++){let L=I[B],q=Array.isArray(L.value)?L.value:[L.value];for(let et=0,W=q.length;et<W;et++){let st=q[et],C=f(st),N=R%A,Z=N%C.boundary,rt=N+Z;if(R+=Z,rt!==0&&A-rt<C.storage)R+=A-rt;L.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=R,R+=C.storage}}}let g=R%A;if(g>0)R+=A-g;return v.__size=R,v.__cache={},this}function f(v){let T={boundary:0,storage:0};if(typeof v==="number"||typeof v==="boolean")T.boundary=4,T.storage=4;else if(v.isVector2)T.boundary=8,T.storage=8;else if(v.isVector3||v.isColor)T.boundary=16,T.storage=12;else if(v.isVector4)T.boundary=16,T.storage=16;else if(v.isMatrix3)T.boundary=48,T.storage=48;else if(v.isMatrix4)T.boundary=64,T.storage=64;else if(v.isTexture)Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(v))T.boundary=16,T.storage=v.byteLength;else Ft("WebGLRenderer: Unsupported uniform value type.",v);return T}function E(v){let T=v.target;T.removeEventListener("dispose",E);let R=a.indexOf(T.__bindingPointIndex);a.splice(R,1),t.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function w(){for(let v in s)t.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var Nx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vn=null;function Dx(){if(Vn===null)Vn=new Sa(Nx,16,16,Gi,zn),Vn.name="DFG_LUT",Vn.minFilter=an,Vn.magFilter=an,Vn.wrapS=aa,Vn.wrapT=aa,Vn.generateMipmaps=!1,Vn.needsUpdate=!0;return Vn}class mc{constructor(t={}){let{canvas:e=Nu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Cn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;let _=u,S=new Set([jo,$o,Ko]),m=new Set([Cn,Ei,hr,Ds,Zo,Jo]),f=new Uint32Array(4),E=new Int32Array(4),w=new P,v=null,T=null,R=[],A=[],g=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,G=!1,I=null,B=null,j=null,L=null;this._outputColorSpace=pa;let q=0,et=0,W=null,st=-1,C=null,N=new ve,Z=new ve,rt=null,lt=new Bt(0),Pt=0,{width:Et,height:z}=e,tt=1,K=null,ct=null,vt=new ve(0,0,Et,z),mt=new ve(0,0,Et,z),jt=!1,Ht=new pr,Vt=!1,Jt=!1,Wt=new $t,Me=new P,he=new ve,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},be=!1;function te(){return W===null?tt:1}let U=n;function nn(y,F){return e.getContext(y,F)}let ee,Se,M,x,D,V,it,ot,dt,Y,Q,yt,It,ft,at,Lt,Nt,Qt,O,ht,J,ut,bt;try{let y={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e)e.setAttribute("data-engine",`three.js r${Oh}`);if(e.addEventListener("webglcontextlost",zt,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",ne,!1),U===null){if(U=nn("webgl2",y),U===null)if(nn("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(y){throw e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",ne,!1),Ut("WebGLRenderer: "+y.message),y}function nt(){if(ee=new kg(U),ee.init(),J=new Ax(U,ee),Se=new Ig(U,ee,t,J),M=new Tx(U,ee),Se.reversedDepthBuffer&&d)M.buffers.depth.setReversed(!0);B=U.createFramebuffer(),j=U.createFramebuffer(),L=U.createFramebuffer(),x=new Vg(U),D=new ux,V=new wx(U,ee,M,D,Se,J,x),it=new Hg(b),ot=new qp(U),ut=new Cg(U,ot),dt=new Gg(U,ot,x,ut),Y=new qg(U,dt,ot,ut,x),Qt=new Xg(U,Se,V),at=new Lg(D),Q=new hx(b,it,ee,Se,ut,at),yt=new Ix(b,D),It=new fx,ft=new yx(ee),Nt=new Rg(b,it,M,Y,p,o),Lt=new Ex(b,Y,Se),bt=new Lx(U,x,Se,M),O=new Pg(U,ee,x),ht=new Wg(U,ee,x),x.programs=Q.programs,b.capabilities=Se,b.extensions=ee,b.properties=D,b.renderLists=It,b.shadowMap=Lt,b.state=M,b.info=x}if(_!==Cn)g=new Zg(_,e.width,e.height,a,i,s);let gt=new Ed(b,U);this.xr=gt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let y=ee.get("WEBGL_lose_context");if(y)y.loseContext()},this.forceContextRestore=function(){let y=ee.get("WEBGL_lose_context");if(y)y.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(y){if(y===void 0)return;tt=y,this.setSize(Et,z,!1)},this.getSize=function(y){return y.set(Et,z)},this.setSize=function(y,F,X=!0){if(gt.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Et=y,z=F,e.width=Math.floor(y*tt),e.height=Math.floor(F*tt),X===!0)e.style.width=y+"px",e.style.height=F+"px";if(g!==null)g.setSize(e.width,e.height);this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(Et*tt,z*tt).floor()},this.setDrawingBufferSize=function(y,F,X){Et=y,z=F,tt=X,e.width=Math.floor(y*X),e.height=Math.floor(F*X),this.setViewport(0,0,y,F)},this.setEffects=function(y){if(_===Cn){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let F=0;F<y.length;F++)if(y[F].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}g.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(N)},this.getViewport=function(y){return y.copy(vt)},this.setViewport=function(y,F,X,H){if(y.isVector4)vt.set(y.x,y.y,y.z,y.w);else vt.set(y,F,X,H);M.viewport(N.copy(vt).multiplyScalar(tt).round())},this.getScissor=function(y){return y.copy(mt)},this.setScissor=function(y,F,X,H){if(y.isVector4)mt.set(y.x,y.y,y.z,y.w);else mt.set(y,F,X,H);M.scissor(Z.copy(mt).multiplyScalar(tt).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(y){M.setScissorTest(jt=y)},this.setOpaqueSort=function(y){K=y},this.setTransparentSort=function(y){ct=y},this.getClearColor=function(y){return y.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,X=!0){let H=0;if(y){let k=!1;if(W!==null){let xt=W.texture.format;k=S.has(xt)}if(k){let xt=W.texture.type,Mt=m.has(xt),_t=Nt.getClearColor(),Tt=Nt.getClearAlpha(),{r:Ct,g:kt,b:qt}=_t;if(Mt)f[0]=Ct,f[1]=kt,f[2]=qt,f[3]=Tt,U.clearBufferuiv(U.COLOR,0,f);else E[0]=Ct,E[1]=kt,E[2]=qt,E[3]=Tt,U.clearBufferiv(U.COLOR,0,E)}else H|=U.COLOR_BUFFER_BIT}if(F)H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(X)H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(H!==0)U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),I=y},this.dispose=function(){e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",ne,!1),Nt.dispose(),It.dispose(),ft.dispose(),D.dispose(),it.dispose(),Y.dispose(),ut.dispose(),bt.dispose(),Q.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",Qc),gt.removeEventListener("sessionend",th),Ii.stop()};function zt(y){y.preventDefault(),sr("WebGLRenderer: Context Lost."),G=!0}function me(){sr("WebGLRenderer: Context Restored."),G=!1;let y=x.autoReset,F=Lt.enabled,X=Lt.autoUpdate,H=Lt.needsUpdate,k=Lt.type;nt(),x.autoReset=y,Lt.enabled=F,Lt.autoUpdate=X,Lt.needsUpdate=H,Lt.type=k}function ne(y){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Dn(y){let F=y.target;F.removeEventListener("dispose",Dn),Kn(F)}function Kn(y){If(y),D.remove(y)}function If(y){let F=D.get(y).programs;if(F!==void 0){if(F.forEach(function(X){Q.releaseProgram(X)}),y.isShaderMaterial)Q.releaseShaderCache(y)}}this.renderBufferDirect=function(y,F,X,H,k,xt){if(F===null)F=re;let Mt=k.isMesh&&k.matrixWorld.determinantAffine()<0,_t=Df(y,F,X,H,k);M.setMaterial(H,Mt);let Tt=X.index,Ct=1;if(H.wireframe===!0){if(Tt=dt.getWireframeAttribute(X),Tt===void 0)return;Ct=2}let kt=X.drawRange,qt=X.attributes.position,wt=kt.start*Ct,ie=(kt.start+kt.count)*Ct;if(xt!==null)wt=Math.max(wt,xt.start*Ct),ie=Math.min(ie,(xt.start+xt.count)*Ct);if(Tt!==null)wt=Math.max(wt,0),ie=Math.min(ie,Tt.count);else if(qt!==void 0&&qt!==null)wt=Math.max(wt,0),ie=Math.min(ie,qt.count);let Re=ie-wt;if(Re<0||Re===1/0)return;ut.setup(k,H,_t,X,Tt);let xe,de=O;if(Tt!==null)xe=ot.get(Tt),de=ht,de.setIndex(xe);if(k.isMesh)if(H.wireframe===!0)M.setLineWidth(H.wireframeLinewidth*te()),de.setMode(U.LINES);else de.setMode(U.TRIANGLES);else if(k.isLine){let Ve=H.linewidth;if(Ve===void 0)Ve=1;if(M.setLineWidth(Ve*te()),k.isLineSegments)de.setMode(U.LINES);else if(k.isLineLoop)de.setMode(U.LINE_LOOP);else de.setMode(U.LINE_STRIP)}else if(k.isPoints)de.setMode(U.POINTS);else if(k.isSprite)de.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(!ee.get("WEBGL_multi_draw")){let{_multiDrawStarts:Ve,_multiDrawCounts:St,_multiDrawCount:Ke}=k,Kt=Tt?ot.get(Tt).bytesPerElement:1,pn=D.get(H).currentProgram.getUniforms();for(let Un=0;Un<Ke;Un++)pn.setValue(U,"_gl_DrawID",Un),de.render(Ve[Un]/Kt,St[Un])}else de.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)de.renderInstances(wt,Re,k.count);else if(X.isInstancedBufferGeometry){let Ve=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,St=Math.min(X.instanceCount,Ve);de.renderInstances(wt,Re,St)}else de.render(wt,Re)};function jc(y,F,X,H){if(I!==null&&y.isNodeMaterial)I.setObject(H,y);if(Vt===!0)at.setState(y,X,!1);if(y.transparent===!0&&y.side===On&&y.forceSinglePass===!1)y.side=rn,y.needsUpdate=!0,Dr(y,F,H),y.side=Is,y.needsUpdate=!0,Dr(y,F,H),y.side=On;else Dr(y,F,H)}this.compile=function(y,F,X=null){if(X===null)X=y;if(I!==null)I.renderStart(y,F,X);if(T=ft.get(X),T.init(F),A.push(T),X.traverseVisible(function(k){if(k.isLight&&k.layers.test(F.layers)){if(T.pushLight(k),k.castShadow)T.pushShadow(k)}}),y!==X)y.traverseVisible(function(k){if(k.isLight&&k.layers.test(F.layers)){if(T.pushLight(k),k.castShadow)T.pushShadow(k)}});if(T.setupLights(),I!==null)I.updateLights(T.state.lightsArray);if(Jt=this.localClippingEnabled,Vt=at.init(this.clippingPlanes,Jt),Vt===!0)at.setGlobalState(this.clippingPlanes,F);if(I!==null)Lt.render(T.state.shadowsArray,X,F);let H=new Set;if(y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let xt=k.material;if(xt)if(Array.isArray(xt))for(let Mt=0;Mt<xt.length;Mt++){let _t=xt[Mt];jc(_t,X,F,k),H.add(_t)}else jc(xt,X,F,k),H.add(xt)}),T=A.pop(),I!==null)I.renderEnd();return H},this.compileAsync=function(y,F,X=null){let H=this.compile(y,F,X);return new Promise((k)=>{function xt(){if(H.forEach(function(Mt){let Tt=D.get(Mt).currentProgram;if(Tt===void 0||Tt.isReady())H.delete(Mt)}),H.size===0){k(y);return}setTimeout(xt,10)}if(ee.get("KHR_parallel_shader_compile")!==null)xt();else setTimeout(xt,10)})};let lo=null;function Lf(y){if(lo)lo(y)}function Qc(){Ii.stop()}function th(){Ii.start()}let Ii=new dd;if(Ii.setAnimationLoop(Lf),typeof self<"u")Ii.setContext(self);this.setAnimationLoop=function(y){lo=y,gt.setAnimationLoop(y),y===null?Ii.stop():Ii.start()},gt.addEventListener("sessionstart",Qc),gt.addEventListener("sessionend",th),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(I!==null)I.renderStart(y,F);let X=gt.enabled===!0&&gt.isPresenting===!0,H=g!==null&&(W===null||X)&&g.begin(b,W);if(y.matrixWorldAutoUpdate===!0)y.updateMatrixWorld();if(F.parent===null&&F.matrixWorldAutoUpdate===!0)F.updateMatrixWorld();if(gt.enabled===!0&&gt.isPresenting===!0&&(g===null||g.isCompositing()===!1)){if(gt.cameraAutoUpdate===!0)gt.updateCamera(F);F=gt.getCamera()}if(y.isScene===!0)y.onBeforeRender(b,y,F,W);if(T=ft.get(y,A.length),T.init(F),T.state.textureUnits=V.getTextureUnits(),A.push(T),Wt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ht.setFromProjectionMatrix(Wt,Nl,F.reversedDepth),Jt=this.localClippingEnabled,Vt=at.init(this.clippingPlanes,Jt),v=It.get(y,R.length),v.init(),R.push(v),gt.enabled===!0&&gt.isPresenting===!0){let Mt=b.xr.getDepthSensingMesh();if(Mt!==null)co(Mt,F,-1/0,b.sortObjects)}if(co(y,F,0,b.sortObjects),v.finish(),I!==null)I.updateLights(T.state.lightsArray);if(b.sortObjects===!0)v.sort(K,ct);if(be=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,be)Nt.addToRenderList(v,y);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(Vt===!0)at.beginShadows();let k=T.state.shadowsArray;if(Lt.render(k,y,F),Vt===!0)at.endShadows();if((H&&g.hasRenderPass())===!1){let Mt=v.opaque,_t=v.transmissive;if(T.setupLights(),F.isArrayCamera){let Tt=F.cameras;if(_t.length>0)for(let Ct=0,kt=Tt.length;Ct<kt;Ct++){let qt=Tt[Ct];nh(Mt,_t,y,qt)}if(be)Nt.render(y);for(let Ct=0,kt=Tt.length;Ct<kt;Ct++){let qt=Tt[Ct];eh(v,y,qt,qt.viewport)}}else{if(_t.length>0)nh(Mt,_t,y,F);if(be)Nt.render(y);eh(v,y,F)}}if(W!==null&&et===0)V.updateMultisampleRenderTarget(W),V.updateRenderTargetMipmap(W);if(H)g.end(b);if(y.isScene===!0)y.onAfterRender(b,y,F);if(ut.resetDefaultState(),st=-1,C=null,A.pop(),A.length>0){if(T=A[A.length-1],V.setTextureUnits(T.state.textureUnits),Vt===!0)at.setGlobalState(b.clippingPlanes,T.state.camera)}else T=null;if(R.pop(),R.length>0)v=R[R.length-1];else v=null;if(I!==null)I.renderEnd()};function co(y,F,X,H){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD){if(y.autoUpdate===!0)y.update(F)}else if(y.isLightProbeGrid)T.pushLightProbeGrid(y);else if(y.isLight){if(T.pushLight(y),y.castShadow)T.pushShadow(y)}else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Ht)){if(H)he.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Wt);let Mt=Y.update(y),_t=y.material;if(_t.visible)v.push(y,Mt,_t,X,he.z,null,F)}}else if(y.isMesh||y.isLine||y.isPoints){if(!y.frustumCulled||y.intersectsFrustum(Ht)){let Mt=Y.update(y),_t=y.material;if(H){if(y.boundingSphere!==void 0){if(y.boundingSphere===null)y.computeBoundingSphere();he.copy(y.boundingSphere.center)}else{if(Mt.boundingSphere===null)Mt.computeBoundingSphere();he.copy(Mt.boundingSphere.center)}he.applyMatrix4(y.matrixWorld).applyMatrix4(Wt)}if(Array.isArray(_t)){let Tt=Mt.groups;for(let Ct=0,kt=Tt.length;Ct<kt;Ct++){let qt=Tt[Ct],wt=_t[qt.materialIndex];if(wt&&wt.visible)v.push(y,Mt,wt,X,he.z,qt,F)}}else if(_t.visible)v.push(y,Mt,_t,X,he.z,null,F)}}}let xt=y.children;for(let Mt=0,_t=xt.length;Mt<_t;Mt++)co(xt[Mt],F,X,H)}function eh(y,F,X,H){let{opaque:k,transmissive:xt,transparent:Mt}=y;if(T.setupLightsView(X),Vt===!0)at.setGlobalState(b.clippingPlanes,X);if(H)M.viewport(N.copy(H));if(k.length>0)Nr(k,F,X);if(xt.length>0)Nr(xt,F,X);if(Mt.length>0)Nr(Mt,F,X);M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function nh(y,F,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){let wt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new fn(1,1,{generateMipmaps:!0,type:wt?zn:Cn,minFilter:zi,samples:Math.max(4,Se.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}let xt=T.state.transmissionRenderTarget[H.id],Mt=H.viewport||N;xt.setSize(Mt.z*b.transmissionResolutionScale,Mt.w*b.transmissionResolutionScale);let _t=b.getRenderTarget(),Tt=b.getActiveCubeFace(),Ct=b.getActiveMipmapLevel();if(b.setRenderTarget(xt),b.getClearColor(lt),Pt=b.getClearAlpha(),Pt<1)b.setClearColor(16777215,0.5);if(b.clear(),be)Nt.render(X);let kt=b.toneMapping;b.toneMapping=An;let qt=H.viewport;if(H.viewport!==void 0)H.viewport=void 0;if(T.setupLightsView(H),Vt===!0)at.setGlobalState(b.clippingPlanes,H);if(Nr(y,X,H),V.updateMultisampleRenderTarget(xt),V.updateRenderTargetMipmap(xt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let ie=0,Re=F.length;ie<Re;ie++){let xe=F[ie],{object:de,geometry:Ve,material:St,group:Ke}=xe;if(St.side===On&&de.layers.test(H.layers)){let Kt=St.side;St.side=rn,St.needsUpdate=!0,ih(de,X,H,Ve,St,Ke),St.side=Kt,St.needsUpdate=!0,wt=!0}}if(wt===!0)V.updateMultisampleRenderTarget(xt),V.updateRenderTargetMipmap(xt)}if(b.setRenderTarget(_t,Tt,Ct),b.setClearColor(lt,Pt),qt!==void 0)H.viewport=qt;b.toneMapping=kt}function Nr(y,F,X){let H=F.isScene===!0?F.overrideMaterial:null;for(let k=0,xt=y.length;k<xt;k++){let Mt=y[k],{object:_t,geometry:Tt,group:Ct}=Mt,kt=Mt.material;if(kt.allowOverride===!0&&H!==null)kt=H;if(_t.layers.test(X.layers))ih(_t,F,X,Tt,kt,Ct)}}function ih(y,F,X,H,k,xt){if(I!==null&&k.isNodeMaterial)I.setObject(y,k);if(y.onBeforeRender(b,F,X,H,k,xt),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(b,F,X,H,y,xt),k.transparent===!0&&k.side===On&&k.forceSinglePass===!1)k.side=rn,k.needsUpdate=!0,b.renderBufferDirect(X,F,H,k,y,xt),k.side=Is,k.needsUpdate=!0,b.renderBufferDirect(X,F,H,k,y,xt),k.side=On;else b.renderBufferDirect(X,F,H,k,y,xt);y.onAfterRender(b,F,X,H,k,xt)}function Dr(y,F,X){if(F.isScene!==!0)F=re;let H=D.get(y),k=T.state.lights,xt=T.state.shadowsArray,Mt=k.state.version,_t=Q.getParameters(y,k.state,xt,F,X,T.state.lightProbeGridArray),Tt=Q.getProgramCacheKey(_t),Ct=H.programs;H.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;let kt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;if(H.envMap=it.get(y.envMap||H.environment,kt),H.envMapRotation=H.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Ct===void 0)y.addEventListener("dispose",Dn),Ct=new Map,H.programs=Ct;let qt=Ct.get(Tt);if(qt!==void 0){if(H.currentProgram===qt&&H.lightsStateVersion===Mt)return rh(y,_t),qt}else{if(_t.uniforms=Q.getUniforms(y),I!==null&&y.isNodeMaterial)I.build(y,X,_t);y.onBeforeCompile(_t,b),qt=Q.acquireProgram(_t,Tt),Ct.set(Tt,qt),H.uniforms=_t.uniforms}let wt=H.uniforms;if(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)wt.clippingPlanes=at.uniform;if(rh(y,_t),H.needsLights=Ff(y),H.lightsStateVersion=Mt,H.needsLights)wt.ambientLightColor.value=k.state.ambient,wt.lightProbe.value=k.state.probe,wt.sunLights.value=k.state.sun,wt.sunLightShadows.value=k.state.sunShadow,wt.directionalLights.value=k.state.directional,wt.directionalLightShadows.value=k.state.directionalShadow,wt.spotLights.value=k.state.spot,wt.spotLightShadows.value=k.state.spotShadow,wt.rectAreaLights.value=k.state.rectArea,wt.ltc_1.value=k.state.rectAreaLTC1,wt.ltc_2.value=k.state.rectAreaLTC2,wt.pointLights.value=k.state.point,wt.pointLightShadows.value=k.state.pointShadow,wt.hemisphereLights.value=k.state.hemi,wt.sunShadowMatrix.value=k.state.sunShadowMatrix,wt.sunShadowCascade.value=k.state.sunShadowCascade,wt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,wt.spotLightMatrix.value=k.state.spotLightMatrix,wt.spotLightMap.value=k.state.spotLightMap,wt.pointShadowMatrix.value=k.state.pointShadowMatrix;return H.lightProbeGrid=T.state.lightProbeGridArray.length>0,H.currentProgram=qt,H.uniformsList=null,qt}function sh(y){if(y.uniformsList===null){let F=y.currentProgram.getUniforms();y.uniformsList=br.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function rh(y,F){let X=D.get(y);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Nf(y,F){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;w.setFromMatrixPosition(F.matrixWorld);for(let X=0,H=y.length;X<H;X++){let k=y[X];if(k.texture!==null&&k.boundingBox.containsPoint(w))return k}return null}function Df(y,F,X,H,k){if(F.isScene!==!0)F=re;V.resetTextureUnits();let xt=F.fog,Mt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,_t=W===null?b.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Yt.workingColorSpace,Tt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ct=it.get(H.envMap||Mt,Tt),kt=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,qt=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),wt=!!X.morphAttributes.position,ie=!!X.morphAttributes.normal,Re=!!X.morphAttributes.color,xe=An;if(H.toneMapped){if(W===null||W.isXRRenderTarget===!0)xe=b.toneMapping}let de=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ve=de!==void 0?de.length:0,St=D.get(H),Ke=T.state.lights;if(Vt===!0){if(Jt===!0||y!==C){let ge=y===C&&H.id===st;at.setState(H,y,ge)}}let Kt=!1;if(H.version===St.__version){if(St.needsLights&&St.lightsStateVersion!==Ke.state.version)Kt=!0;else if(St.outputColorSpace!==_t)Kt=!0;else if(k.isBatchedMesh&&St.batching===!1)Kt=!0;else if(!k.isBatchedMesh&&St.batching===!0)Kt=!0;else if(k.isBatchedMesh&&St.batchingColor===!0&&k._colorsTexture===null)Kt=!0;else if(k.isBatchedMesh&&St.batchingColor===!1&&k._colorsTexture!==null)Kt=!0;else if(k.isInstancedMesh&&St.instancing===!1)Kt=!0;else if(!k.isInstancedMesh&&St.instancing===!0)Kt=!0;else if(k.isSkinnedMesh&&St.skinning===!1)Kt=!0;else if(!k.isSkinnedMesh&&St.skinning===!0)Kt=!0;else if(k.isInstancedMesh&&St.instancingColor===!0&&k.instanceColor===null)Kt=!0;else if(k.isInstancedMesh&&St.instancingColor===!1&&k.instanceColor!==null)Kt=!0;else if(k.isInstancedMesh&&St.instancingMorph===!0&&k.morphTexture===null)Kt=!0;else if(k.isInstancedMesh&&St.instancingMorph===!1&&k.morphTexture!==null)Kt=!0;else if(St.envMap!==Ct)Kt=!0;else if(H.fog===!0&&St.fog!==xt)Kt=!0;else if(St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==at.numPlanes||St.numIntersection!==at.numIntersection))Kt=!0;else if(St.vertexAlphas!==kt)Kt=!0;else if(St.vertexTangents!==qt)Kt=!0;else if(St.morphTargets!==wt)Kt=!0;else if(St.morphNormals!==ie)Kt=!0;else if(St.morphColors!==Re)Kt=!0;else if(St.toneMapping!==xe)Kt=!0;else if(St.morphTargetsCount!==Ve)Kt=!0;else if(!!St.lightProbeGrid!==T.state.lightProbeGridArray.length>0)Kt=!0}else Kt=!0,St.__version=H.version;let pn=St.currentProgram;if(Kt===!0){if(pn=Dr(H,F,k),I&&H.isNodeMaterial)I.onUpdateProgram(H,pn,St)}let Un=!1,pi=!1,as=!1,ue=pn.getUniforms(),Ee=St.uniforms;if(M.useProgram(pn.program))Un=!0,pi=!0,as=!0;if(H.id!==st)st=H.id,pi=!0;if(St.needsLights){let ge=Nf(T.state.lightProbeGridArray,k);if(St.lightProbeGrid!==ge)St.lightProbeGrid=ge,pi=!0}if(Un||C!==y){if(M.buffers.depth.getReversed()&&y.reversedDepth!==!0)y._reversedDepth=!0,y.updateProjectionMatrix();ue.setValue(U,"projectionMatrix",y.projectionMatrix),ue.setValue(U,"viewMatrix",y.matrixWorldInverse);let gi=ue.map.cameraPosition;if(gi!==void 0)gi.setValue(U,Me.setFromMatrixPosition(y.matrixWorld));if(Se.logarithmicDepthBuffer)ue.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2));if(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)ue.setValue(U,"isOrthographic",y.isOrthographicCamera===!0);if(C!==y)C=y,pi=!0,as=!0}if(St.needsLights){if(Ke.state.sunShadowMap.length>0)ue.setValue(U,"sunShadowMap",Ke.state.sunShadowMap,V);if(Ke.state.directionalShadowMap.length>0)ue.setValue(U,"directionalShadowMap",Ke.state.directionalShadowMap,V);if(Ke.state.spotShadowMap.length>0)ue.setValue(U,"spotShadowMap",Ke.state.spotShadowMap,V);if(Ke.state.pointShadowMap.length>0)ue.setValue(U,"pointShadowMap",Ke.state.pointShadowMap,V)}if(k.isSkinnedMesh){ue.setOptional(U,k,"bindMatrix"),ue.setOptional(U,k,"bindMatrixInverse");let ge=k.skeleton;if(ge){if(ge.boneTexture===null)ge.computeBoneTexture();ue.setValue(U,"boneTexture",ge.boneTexture,V)}}if(k.isBatchedMesh){if(ue.setOptional(U,k,"batchingTexture"),ue.setValue(U,"batchingTexture",k._matricesTexture,V),ue.setOptional(U,k,"batchingIdTexture"),ue.setValue(U,"batchingIdTexture",k._indirectTexture,V),ue.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null)ue.setValue(U,"batchingColorTexture",k._colorsTexture,V)}let mi=X.morphAttributes;if(mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)Qt.update(k,X,pn);if(pi||St.receiveShadow!==k.receiveShadow)St.receiveShadow=k.receiveShadow,ue.setValue(U,"receiveShadow",k.receiveShadow);if((H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null)Ee.envMapIntensity.value=F.environmentIntensity;if(Ee.dfgLUT!==void 0)Ee.dfgLUT.value=Dx();if(pi){if(ue.setValue(U,"toneMappingExposure",b.toneMappingExposure),St.needsLights)Uf(Ee,as);if(xt&&H.fog===!0)yt.refreshFogUniforms(Ee,xt);if(yt.refreshMaterialUniforms(Ee,H,tt,z,T.state.transmissionRenderTarget[y.id]),St.needsLights&&St.lightProbeGrid){let ge=St.lightProbeGrid;Ee.probesSH.value=ge.texture,Ee.probesMin.value.copy(ge.boundingBox.min),Ee.probesMax.value.copy(ge.boundingBox.max),Ee.probesResolution.value.copy(ge.resolution)}br.upload(U,sh(St),Ee,V)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0)br.upload(U,sh(St),Ee,V),H.uniformsNeedUpdate=!1;if(H.isSpriteMaterial)ue.setValue(U,"center",k.center);if(ue.setValue(U,"modelViewMatrix",k.modelViewMatrix),ue.setValue(U,"normalMatrix",k.normalMatrix),ue.setValue(U,"modelMatrix",k.matrixWorld),H.uniformsGroups!==void 0){let ge=H.uniformsGroups;for(let gi=0,os=ge.length;gi<os;gi++){let oh=ge[gi];bt.update(oh,pn),bt.bind(oh,pn)}}return pn}function Uf(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.sunLights.needsUpdate=F,y.sunLightShadows.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function Ff(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return et},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(y,F,X){let H=D.get(y);if(H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1)H.__useRenderToTexture=!1;D.get(y.texture).__webglTexture=F,D.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){let X=D.get(y);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,X=0){W=y,q=F,et=X;let H=null,k=!1,xt=!1;if(y){let _t=D.get(y);if(_t.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(U.FRAMEBUFFER,_t.__webglFramebuffer),N.copy(y.viewport),Z.copy(y.scissor),rt=y.scissorTest,M.viewport(N),M.scissor(Z),M.setScissorTest(rt),st=-1;return}else if(_t.__webglFramebuffer===void 0)V.setupRenderTarget(y);else if(_t.__hasExternalTextures)V.rebindTextures(y,D.get(y.texture).__webglTexture,D.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let kt=y.depthTexture;if(_t.__boundDepthTexture!==kt){if(kt!==null&&D.has(kt)&&(y.width!==kt.image.width||y.height!==kt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(y)}}let Tt=y.texture;if(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)xt=!0;let Ct=D.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget){if(Array.isArray(Ct[F]))H=Ct[F][X];else H=Ct[F];k=!0}else if(y.samples>0&&V.useMultisampledRTT(y)===!1)H=D.get(y).__webglMultisampledFramebuffer;else if(Array.isArray(Ct))H=Ct[X];else H=Ct;N.copy(y.viewport),Z.copy(y.scissor),rt=y.scissorTest}else N.copy(vt).multiplyScalar(tt).floor(),Z.copy(mt).multiplyScalar(tt).floor(),rt=jt;if(X!==0)H=B;if(M.bindFramebuffer(U.FRAMEBUFFER,H))M.drawBuffers(y,H);if(M.viewport(N),M.scissor(Z),M.setScissorTest(rt),k){let _t=D.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,_t.__webglTexture,X)}else if(xt){let _t=F;for(let Tt=0;Tt<y.textures.length;Tt++){let Ct=D.get(y.textures[Tt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Tt,Ct.__webglTexture,X,_t)}}else if(y!==null&&X!==0){let _t=D.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_t.__webglTexture,X)}st=-1};function ah(y){let F=D.get(y);if(F.__readFormat!==y.format||F.__readType!==y.type)F.__readFormat=y.format,F.__readType=y.type,F.__formatReadable=Se.textureFormatReadable(y.format),F.__typeReadable=Se.textureTypeReadable(y.type);return F}if(this.readRenderTargetPixels=function(y,F,X,H,k,xt,Mt,_t=0){if(!(y&&y.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=D.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0)Tt=Tt[Mt];if(Tt){M.bindFramebuffer(U.FRAMEBUFFER,Tt);try{let Ct=y.textures[_t],{format:kt,type:qt}=Ct;if(y.textures.length>1)U.readBuffer(U.COLOR_ATTACHMENT0+_t);let wt=ah(Ct);if(wt.__formatReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(F>=0&&F<=y.width-H&&(X>=0&&X<=y.height-k))U.readPixels(F,X,H,k,J.convert(kt),J.convert(qt),xt)}finally{let Ct=W!==null?D.get(W).__webglFramebuffer:null;M.bindFramebuffer(U.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(y,F,X,H,k,xt,Mt,_t=0){if(!(y&&y.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=D.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0)Tt=Tt[Mt];if(Tt)if(F>=0&&F<=y.width-H&&(X>=0&&X<=y.height-k)){M.bindFramebuffer(U.FRAMEBUFFER,Tt);let Ct=y.textures[_t],{format:kt,type:qt}=Ct;if(y.textures.length>1)U.readBuffer(U.COLOR_ATTACHMENT0+_t);let wt=ah(Ct);if(wt.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ie=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ie),U.bufferData(U.PIXEL_PACK_BUFFER,xt.byteLength,U.STREAM_READ),U.readPixels(F,X,H,k,J.convert(kt),J.convert(qt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Re=W!==null?D.get(W).__webglFramebuffer:null;M.bindFramebuffer(U.FRAMEBUFFER,Re);let xe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Uu(U,xe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ie),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,xt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ie),U.deleteSync(xe),xt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,X=0){let H=Math.pow(2,-X),k=Math.floor(y.image.width*H),xt=Math.floor(y.image.height*H),Mt=F!==null?F.x:0,_t=F!==null?F.y:0;V.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,Mt,_t,k,xt),M.unbindTexture()},this.copyTextureToTexture=function(y,F,X=null,H=null,k=0,xt=0){let Mt,_t,Tt,Ct,kt,qt,wt,ie,Re,xe=y.isCompressedTexture?y.mipmaps[xt]:y.image;if(X!==null)Mt=X.max.x-X.min.x,_t=X.max.y-X.min.y,Tt=X.isBox3?X.max.z-X.min.z:1,Ct=X.min.x,kt=X.min.y,qt=X.isBox3?X.min.z:0;else{let Ee=Math.pow(2,-k);if(Mt=Math.floor(xe.width*Ee),_t=Math.floor(xe.height*Ee),y.isDataArrayTexture)Tt=xe.depth;else if(y.isData3DTexture)Tt=Math.floor(xe.depth*Ee);else Tt=1;Ct=0,kt=0,qt=0}if(H!==null)wt=H.x,ie=H.y,Re=H.z;else wt=0,ie=0,Re=0;let de=J.convert(F.format),Ve=J.convert(F.type),St;if(F.isData3DTexture)V.setTexture3D(F,0),St=U.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)V.setTexture2DArray(F,0),St=U.TEXTURE_2D_ARRAY;else V.setTexture2D(F,0),St=U.TEXTURE_2D;M.activeTexture(U.TEXTURE0),M.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),M.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),M.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let Ke=M.getParameter(U.UNPACK_ROW_LENGTH),Kt=M.getParameter(U.UNPACK_IMAGE_HEIGHT),pn=M.getParameter(U.UNPACK_SKIP_PIXELS),Un=M.getParameter(U.UNPACK_SKIP_ROWS),pi=M.getParameter(U.UNPACK_SKIP_IMAGES);M.pixelStorei(U.UNPACK_ROW_LENGTH,xe.width),M.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xe.height),M.pixelStorei(U.UNPACK_SKIP_PIXELS,Ct),M.pixelStorei(U.UNPACK_SKIP_ROWS,kt),M.pixelStorei(U.UNPACK_SKIP_IMAGES,qt);let as=y.isDataArrayTexture||y.isData3DTexture,ue=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){let Ee=D.get(y),mi=D.get(F),ge=D.get(Ee.__renderTarget),gi=D.get(mi.__renderTarget);M.bindFramebuffer(U.READ_FRAMEBUFFER,ge.__webglFramebuffer),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let os=0;os<Tt;os++){if(as)U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,D.get(y).__webglTexture,k,qt+os),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,D.get(F).__webglTexture,xt,Re+os);U.blitFramebuffer(Ct,kt,Mt,_t,wt,ie,Mt,_t,U.DEPTH_BUFFER_BIT,U.NEAREST)}M.bindFramebuffer(U.READ_FRAMEBUFFER,null),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||D.has(y)){let Ee=D.get(y),mi=D.get(F);M.bindFramebuffer(U.READ_FRAMEBUFFER,j),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,L);for(let ge=0;ge<Tt;ge++){if(as)U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ee.__webglTexture,k,qt+ge);else U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ee.__webglTexture,k);if(ue)U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,mi.__webglTexture,xt,Re+ge);else U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,mi.__webglTexture,xt);if(k!==0)U.blitFramebuffer(Ct,kt,Mt,_t,wt,ie,Mt,_t,U.COLOR_BUFFER_BIT,U.NEAREST);else if(ue)U.copyTexSubImage3D(St,xt,wt,ie,Re+ge,Ct,kt,Mt,_t);else U.copyTexSubImage2D(St,xt,wt,ie,Ct,kt,Mt,_t)}M.bindFramebuffer(U.READ_FRAMEBUFFER,null),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(ue)if(y.isDataTexture||y.isData3DTexture)U.texSubImage3D(St,xt,wt,ie,Re,Mt,_t,Tt,de,Ve,xe.data);else if(F.isCompressedArrayTexture)U.compressedTexSubImage3D(St,xt,wt,ie,Re,Mt,_t,Tt,de,xe.data);else U.texSubImage3D(St,xt,wt,ie,Re,Mt,_t,Tt,de,Ve,xe);else if(y.isDataTexture)U.texSubImage2D(U.TEXTURE_2D,xt,wt,ie,Mt,_t,de,Ve,xe.data);else if(y.isCompressedTexture)U.compressedTexSubImage2D(U.TEXTURE_2D,xt,wt,ie,xe.width,xe.height,de,xe.data);else U.texSubImage2D(U.TEXTURE_2D,xt,wt,ie,Mt,_t,de,Ve,xe);if(M.pixelStorei(U.UNPACK_ROW_LENGTH,Ke),M.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Kt),M.pixelStorei(U.UNPACK_SKIP_PIXELS,pn),M.pixelStorei(U.UNPACK_SKIP_ROWS,Un),M.pixelStorei(U.UNPACK_SKIP_IMAGES,pi),xt===0&&F.generateMipmaps)U.generateMipmap(St);M.unbindTexture()},this.initRenderTarget=function(y){if(D.get(y).__webglFramebuffer===void 0)V.setupRenderTarget(y)},this.initTexture=function(y){if(y.isCubeTexture)V.setTextureCube(y,0);else if(y.isData3DTexture)V.setTexture3D(y,0);else if(y.isDataArrayTexture||y.isCompressedArrayTexture)V.setTexture2DArray(y,0);else V.setTexture2D(y,0);M.unbindTexture()},this.resetState=function(){q=0,et=0,W=null,M.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nl}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}var wd={type:"change"},_c={type:"start"},Rd={type:"end"},ka=new Us,Ad=new sn,Ux=Math.cos(70*Gn.DEG2RAD),Oe=new P,on=2*Math.PI,le={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gc=0.000001;class xc extends Fa{constructor(t,e=null){super(t,e);if(this.state=le.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.DOLLY,RIGHT:Si.PAN},this.touches={ONE:Mi.ROTATE,TWO:Mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Ze,this._lastTargetPosition=new P,this._quat=new Ze().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _r,this._sphericalDelta=new _r,this._scale=1,this._panOffset=new P,this._rotateStart=new Rt,this._rotateEnd=new Rt,this._rotateDelta=new Rt,this._panStart=new Rt,this._panEnd=new Rt,this._panDelta=new Rt,this._dollyStart=new Rt,this._dollyEnd=new Rt,this._dollyDelta=new Rt,this._dollyDirection=new P,this._mouse=new Rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ox.bind(this),this._onPointerDown=Fx.bind(this),this._onPointerUp=Bx.bind(this),this._onContextMenu=Xx.bind(this),this._onMouseWheel=kx.bind(this),this._onKeyDown=Gx.bind(this),this._onTouchStart=Wx.bind(this),this._onTouchMove=Vx.bind(this),this._onMouseDown=zx.bind(this),this._onMouseMove=Hx.bind(this),this._interceptControlDown=qx.bind(this),this._interceptControlUp=Yx.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(t){if(this._cursorStyle=t,t==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=le.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wd),this.update(),this.state=le.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;if(Oe.copy(e).sub(this.target),Oe.applyQuaternion(this._quat),this._spherical.setFromVector3(Oe),this.autoRotate&&this.state===le.NONE)this._rotateLeft(this._getAutoRotationAngle(t));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;if(isFinite(n)&&isFinite(i)){if(n<-Math.PI)n+=on;else if(n>Math.PI)n-=on;if(i<-Math.PI)i+=on;else if(i>Math.PI)i-=on;if(n<=i)this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=r!=this._spherical.radius}if(Oe.setFromSpherical(this._spherical),Oe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Oe),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){let a=Oe.length();r=this._clampDistance(a*this._scale);let o=a-r;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),s=!!o}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=o!==this.object.zoom;let l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=Oe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(r!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position);else if(ka.origin.copy(this.object.position),ka.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ka.direction))<Ux)this.object.lookAt(this.target);else Ad.setFromNormalAndCoplanarPoint(this.object.up,this.target),ka.intersectPlane(Ad,this.target)}else if(this.object.isOrthographicCamera){let r=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom)this.object.updateProjectionMatrix(),s=!0}if(this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>gc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gc||this._lastTargetPosition.distanceToSquared(this.target)>gc)return this.dispatchEvent(wd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(t){if(t!==null)return on/60*this.autoRotateSpeed*t;else return on/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*0.01);return Math.pow(0.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Oe.setFromMatrixColumn(e,0),Oe.multiplyScalar(-t),this._panOffset.add(Oe)}_panUp(t,e){if(this.screenSpacePanning===!0)Oe.setFromMatrixColumn(e,1);else Oe.setFromMatrixColumn(e,0),Oe.crossVectors(this.object.up,Oe);Oe.multiplyScalar(t),this._panOffset.add(Oe)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Oe.copy(i).sub(this.target);let s=Oe.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(t){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=t;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(t){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=t;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,{width:r,height:a}=n;this._mouse.x=i/r*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(on*this._rotateDelta.x/e.clientHeight),this._rotateUp(on*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){if(this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){if(this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0)this._dollyIn(this._getZoomScale(t.deltaY));else if(t.deltaY>0)this._dollyOut(this._getZoomScale(t.deltaY));this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate)this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);e=!0;break;case this.keys.BOTTOM:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate)this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);e=!0;break;case this.keys.LEFT:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate)this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);e=!0;break;case this.keys.RIGHT:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate)this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);e=!0;break}if(e)t.preventDefault(),this.update()}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=0.5*(t.pageX+e.x),i=0.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=0.5*(t.pageX+e.x),i=0.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){if(this.enableZoom)this._handleTouchStartDolly(t);if(this.enablePan)this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){if(this.enableZoom)this._handleTouchStartDolly(t);if(this.enableRotate)this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=0.5*(t.pageX+n.x),s=0.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(on*this._rotateDelta.x/e.clientHeight),this._rotateUp(on*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=0.5*(t.pageX+e.x),i=0.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let r=(t.pageX+e.x)*0.5,a=(t.pageY+e.y)*0.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){if(this.enableZoom)this._handleTouchMoveDolly(t);if(this.enablePan)this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){if(this.enableZoom)this._handleTouchMoveDolly(t);if(this.enableRotate)this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];if(e===void 0)e=new Rt,this._pointerPositions[t.pointerId]=e;e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}if(t.ctrlKey&&!this._controlActive)n.deltaY*=10;return n}}function Fx(t){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(t))return;if(this._addPointer(t),t.pointerType==="touch")this._onTouchStart(t);else this._onMouseDown(t);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function Ox(t){if(this.enabled===!1)return;if(t.pointerType==="touch")this._onTouchMove(t);else this._onMouseMove(t)}function Bx(t){switch(this._removePointer(t),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rd),this.state=le.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function zx(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Si.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=le.DOLLY;break;case Si.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=le.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=le.ROTATE}break;case Si.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=le.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=le.PAN}break;default:this.state=le.NONE}if(this.state!==le.NONE)this.dispatchEvent(_c)}function Hx(t){switch(this.state){case le.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case le.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case le.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function kx(t){if(this.enabled===!1||this.enableZoom===!1||this.state!==le.NONE)return;t.preventDefault(),this.dispatchEvent(_c),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Rd)}function Gx(t){if(this.enabled===!1)return;this._handleKeyDown(t)}function Wx(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Mi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=le.TOUCH_ROTATE;break;case Mi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=le.TOUCH_PAN;break;default:this.state=le.NONE}break;case 2:switch(this.touches.TWO){case Mi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=le.TOUCH_DOLLY_PAN;break;case Mi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=le.TOUCH_DOLLY_ROTATE;break;default:this.state=le.NONE}break;default:this.state=le.NONE}if(this.state!==le.NONE)this.dispatchEvent(_c)}function Vx(t){switch(this._trackPointer(t),this.state){case le.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case le.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case le.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case le.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=le.NONE}}function Xx(t){if(this.enabled===!1)return;t.preventDefault()}function qx(t){if(t.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function Yx(t){if(t.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var we="#2b2320";function Ci(t){let e=2166136261;for(let n=0;n<t.length;n+=1)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}function Ga(t){let e=Number.parseInt(t.slice(1),16),n=(a)=>Math.round(a+(255-a)/3),i=n(e>>16&255),s=n(e>>8&255),r=n(e&255);return"#"+(i<<16|s<<8|r).toString(16).padStart(6,"0")}function ai(t){let e=Number.parseInt(t.slice(1),16),n=(a)=>Math.round(a*0.75),i=n(e>>16&255),s=n(e>>8&255),r=n(e&255);return"#"+(i<<16|s<<8|r).toString(16).padStart(6,"0")}function Cd(t){let e=Number.parseInt(t.slice(1),16),n=Math.min(255,(e>>16&255)+6),i=Math.round((e>>8&255)*0.82),s=Math.round((e&255)*0.82);return"#"+(n<<16|i<<8|s).toString(16).padStart(6,"0")}var ln={pencil:[".....aa","....a#a","...###.","..###..",".###...","###....","##....."],shell:[".......","#......",".#.....","..#....",".#.....","#..aaa.","......."],globe:["..###..",".#a#a#.","#aa#aa#","#######","#aa#aa#",".#a#a#.","..###.."],gear:[".#.#.#.","#######",".##a##.","##aaa##",".##a##.","#######",".#.#.#."],people:[".##....",".##..aa","####.aa","####aaa","####aaa","....aaa","......."],book:[".......","###.###","#aa#aa#","#aa#aa#","#aa#aa#","###.###","......."],lens:[".###...","#aaa#..","#aaa#..","#aaa#..",".###...","....##.",".....##"],list:["a.####.",".......","a.####.",".......","a.###..",".......","a.####."],bang:["..###..","..###..","..###..","..###..",".......","..###..","..###.."],query:[".####..","##..##.","....##.","...##..","..##...",".......","..##..."],check:[".......","......#",".....##","#...##.","##.##..",".###...","..#...."],cross:["#.....#","##...##",".##.##.","..###..",".##.##.","##...##","#.....#"]};var oi=22.4,Va=13.6,_e=11.2,ye=6.8,xn=3,vc=3;var li=9,ci=11;var Qe=0.5,Qi=0.27;var Pd=Math.PI;var Mr=Math.PI/2,yc=-Math.PI/2,Zx=[4,1,7,3,5,0,2,6,8];function Xa(t){let e=t%3,n=Math.floor(t/3),i=-8.799999999999999+e*5.8,s=-4.199999999999999+n*3.4;return{x0:i,z0:s,x1:i+5.8,z1:s+3.4}}function Er(t){let e=Xa(t);return{x:(e.x0+e.x1)/2,z:(e.z0+e.z1)/2}}function Id(t){let e,n=-1;for(let i of Zx){if(t.includes(i))continue;let s=Er(i),r=1/0;for(let a of t){let o=Er(a);r=Math.min(r,Math.hypot(s.x-o.x,s.z-o.z))}if(r>n+0.000001)e=i,n=r}return e}function Ld(t){let e=Math.floor(t/5),n=t%5;return{column:n,isFar:(n+e)%2===0}}function qa(t){return t<=0?-1:Ld(t-1).column}function Nd(t){let e=1;for(let n of t)e=Math.max(e,qa(n)+1);return Math.min(5,e)}function Tr(t,e){let{x0:n}=Xa(t),{z:i}=Er(t);return{x0:n+0.85,z0:i-0.45,x1:n+0.85+e*0.9+0.3,z1:i+0.45}}function wr(t,e){let{x0:n}=Xa(t),{z:i}=Er(t);if(e<=0)return{x:n+0.5,z:i,yaw:Mr};let{column:s,isFar:r}=Ld(e-1);return{x:n+0.85+0.15+0.45+s*0.9,z:i+(r?-0.8:0.8),yaw:r?0:Pd}}function Ya(t){return{x:t.x-Math.sin(t.yaw)*0.42,z:t.z-Math.cos(t.yaw)*0.42}}function Za(t,e){let n=Tr(t,e),{x0:i}=Xa(t);return{x0:i+0.12,z0:n.z0-0.8,x1:n.x1+0.12,z1:n.z1+0.8}}var cn={x0:-4.6,z0:-6.8,x1:6.4,z1:-6},Ar=1,tn={x0:-11.2,z0:-6.4,x1:-10.75,z1:-3.8},ts=2.3,Dd=[-3.1,-1.7],hi={x0:-11.2,z0:-0.85,x1:-10.399999999999999,z1:-0.05},qn={x0:-11.2,z0:0.1,x1:-10.7,z1:0.6},Ae={x0:-11.2,z0:1.5,x1:-10.35,z1:3.9},He={x0:-9.45,z0:2.25,x1:-8.899999999999999,z1:3.15},Yn={x0:10.75,z0:-5.8,x1:11.2,z1:0.6},bc=0.95,Ud=[[-5.6,-3.3],[-2.1,0.3]],Sc=[{x:-10.799999999999999,z:6.3999999999999995},{x:10.799999999999999,z:-6.3999999999999995},{x:10.799999999999999,z:2.4},{x:-10.799999999999999,z:-3.35}],At={z:4.4,width:1.1,inside:{x:10.649999999999999,z:4.4},outside:{x:12.7,z:4.4}},Fd=[{x:-9.75,z:4.7},{x:9.7,z:1.6},{x:-4.9,z:-5.55},{x:-10,z:-3.35},{x:0.3,z:6.25},{x:9.799999999999999,z:-6}],Rr=[...[-0.8,1.2,3.1,4.9].map((t,e)=>({id:`counter${e}`,kind:"counter",x:t,z:-5.55,yaw:Pd,sit:0,slot:-1})),...[-5.85,-5.1,-4.35].map((t,e)=>({id:`shelf${e}`,kind:"shelf",x:-10.25,z:t,yaw:yc,sit:0,slot:-1})),...[-2.75,-2.05].map((t,e)=>({id:`board${e}`,kind:"board",x:-10.6,z:t,yaw:yc,sit:0,slot:-1})),{id:"armchair",kind:"armchair",x:-10.78,z:-0.45,yaw:Mr,sit:0.3,slot:-1},...[1.95,2.7,3.45].map((t,e)=>({id:`sofa${e}`,kind:"sofa",x:-10.7,z:t,yaw:Mr,sit:0.3,slot:-1})),...[-5,-3.9,-1.55,-0.35].map((t,e)=>({id:`bar${e}`,kind:"bar",x:10.35,z:t,yaw:Mr,sit:0.58,slot:-1}))],Od=[cn,tn,hi,qn,Ae,He,Yn,...Sc.map((t)=>({x0:t.x-0.28,z0:t.z-0.28,x1:t.x+0.28,z1:t.z+0.28}))];function Hs(t){let{x:e,z:n}=Er(t);return{x:e,z:n,r:0.42}}function Cr(t){let{x:e,z:n}=Hs(t);return[{id:`decor${t}a`,kind:"decor",x:e-0.78,z:n,yaw:Mr,sit:0.27,slot:t},{id:`decor${t}b`,kind:"decor",x:e+0.78,z:n,yaw:yc,sit:0.27,slot:t}]}var Wa=0.22,zs=0.42;function Bd(t,e){if(e<=0)return Cr(t);return[...Array(11).keys()].filter((n)=>qa(n)<e).map((n)=>wr(t,n))}function Mc(t){return{x0:t.x-Wa,z0:t.z-Wa,x1:t.x+Wa,z1:t.z+Wa}}var zd=[{x0:-11.2,z0:-6.8,x1:-11.2,z1:6.8},{x0:-11.2,z0:-6.8,x1:11.2,z1:-6.8},{x0:11.2,z0:-6.8,x1:11.2,z1:At.z-At.width/2-zs},{x0:11.2,z0:At.z+At.width/2+zs,x1:11.2,z1:6.8}],Be={x0:-10.95,z0:-6.55,x1:10.95,z1:6.5};function Cc(t,e){let n=Ci(`${e}|${t}`);return n^=n>>>16,n=Math.imul(n,2246822507),n^=n>>>13,n=Math.imul(n,3266489909),n^=n>>>16,n>>>0}function is(t,e,n){let i=t[Cc(e,n)%t.length];if(i===void 0)throw Error("empty table");return i}function Ln(t,e,n){let i=t.reduce((a,[,o])=>a+o,0),s=Cc(e,n)%1e4/1e4*i;for(let[a,o]of t){if(s<o)return a;s-=o}let r=t[t.length-1];if(r===void 0)throw Error("empty table");return r[0]}function Ec(t,e,n,i){let s=t.filter((r)=>r!==e);return is(s.length>0?s:t,n,i)}var Jx=["#f8dcc2","#f1c6a0","#e2ab80","#c98f65","#a8714e","#8a5a3d","#694330"],Kx=[["#2b2320",4],["#4a2f1d",4],["#7a4a26",3],["#b8692e",1.2],["#d9b45b",2],["#ece3cf",0.8],["#b9b4ac",1.2],["#8e74c4",0.6],["#3e8f8f",0.5],["#e08aa8",0.6]],Ka="#e6dcc6",Hd="#e3cf62",$x=["#d97757","#e58b5d","#c4613f"],jx=["#4f86c6","#2f4a6d","#58a55c","#7d8f4e","#3aa7a3","#8e6bbf","#d27aa8","#9b3d55","#6b7c93","#3b3b45",Ka,Hd],Qx=["#f4efe6","#cfe0ef","#f2e3c4"],ty=["#5a4032","#3f5a7a","#c9b48f","#3d5a45","#2f2a28"],ey=["#b8323a","#d8b13a","#f4efe6","#3f6fb0","#5f8f5a","#8e6bbf"],ny=["#b8323a","#3f6fb0","#3d8f5a","#d8b13a","#2f2a28",Ka,"#8e6bbf","#d27aa8","#5a4032"],iy=["#3b4252","#4a3f35","#2f3e46","#55463a","#36454f","#40394a","#3f5f86","#8a7d62"],sy=[["#2b2320",4],["#f2efe8",2],["#6b4a32",2],["#8a3b4a",0.7]],ry=[we,we,"#7a4a26","#9b3d55"],Pi="#3f5f86",$a=0.09,wc="#e3c98f",ks="#f4efe6",ay=[[[0.33,0.2],1],[[0.36,0.22],2],[[0.4,0.23],1]],oy=[[0.28,1],[0.32,2],[0.36,1]],ly=[0.92,0.96,1,1.04,1.08];function Dt(t,e,n,i,s,r,a){return{ink:t,w:e,h:n,d:i,x:s,y:r,z:a}}function Pe(t,e,n,i,s,r,a){return[Dt(t,e,n,i,s,r,a),Dt(t,e,n,i,-s,r,a)]}var Zn=Dt("hair",0.46,0.11,0.43,0,0.38,-0.01),es=Dt("hair",0.47,0.3,0.08,0,0.24,-0.2),ns=Pe("hair",0.05,0.16,0.29,0.215,0.28,-0.035),Ac=[{name:"short",weight:3,pieces:[Zn,es,...ns]},{name:"fringe",weight:2,pieces:[Zn,es,...Pe("hair",0.05,0.2,0.33,0.215,0.26,-0.015),Dt("hair",0.3,0.08,0.05,-0.07,0.32,0.2)]},{name:"long",weight:2,pieces:[Zn,Dt("hair",0.47,0.56,0.09,0,0.12,-0.2),...Pe("hair",0.05,0.46,0.3,0.218,0.16,-0.05)]},{name:"bun",weight:1.2,pieces:[Zn,es,...ns,Dt("hair",0.18,0.17,0.17,0,0.5,-0.08)]},{name:"ponytail",weight:1.5,pieces:[Zn,es,...ns,Dt("hairDark",0.11,0.07,0.06,0,0.3,-0.265),Dt("hair",0.12,0.3,0.09,0,0.13,-0.29)]},{name:"pigtails",weight:0.7,pieces:[Zn,Dt("hair",0.47,0.24,0.08,0,0.27,-0.2),...ns,...Pe("hairDark",0.08,0.08,0.08,0.27,0.31,-0.05),...Pe("hair",0.12,0.28,0.12,0.31,0.14,-0.05)]},{name:"afro",weight:1,pieces:[Dt("hair",0.54,0.2,0.5,0,0.42,-0.02),...Pe("hair",0.05,0.26,0.42,0.235,0.25,-0.03),Dt("hair",0.54,0.36,0.1,0,0.23,-0.22)]},{name:"buzz",weight:1.2,pieces:[Dt("hair",0.44,0.05,0.41,0,0.385,-0.005),Dt("hair",0.44,0.2,0.04,0,0.27,-0.195),...Pe("hair",0.03,0.12,0.24,0.215,0.3,-0.04)]},{name:"bald",weight:0.8,pieces:[Dt("hair",0.44,0.16,0.05,0,0.2,-0.195),...Pe("hair",0.035,0.14,0.22,0.215,0.21,-0.06)]},{name:"bob",weight:1.5,pieces:[Zn,Dt("hair",0.48,0.36,0.09,0,0.2,-0.2),...Pe("hair",0.06,0.3,0.36,0.225,0.21,-0.01),Dt("hair",0.44,0.08,0.05,0,0.33,0.2)]},{name:"quiff",weight:1.2,pieces:[Zn,es,...ns,Dt("hair",0.34,0.11,0.26,0,0.47,0.06)]},{name:"mohawk",weight:0.4,pieces:[Dt("hair",0.12,0.14,0.46,0,0.44,-0.02),Dt("hair",0.12,0.24,0.06,0,0.27,-0.2)]},{name:"spiky",weight:0.8,pieces:[Zn,es,...ns,Dt("hair",0.11,0.13,0.11,-0.14,0.49,0.08),Dt("hair",0.11,0.17,0.11,0,0.51,0.1),Dt("hair",0.11,0.13,0.11,0.14,0.49,0.06),Dt("hair",0.11,0.14,0.11,-0.08,0.5,-0.1),Dt("hair",0.11,0.13,0.11,0.09,0.49,-0.12)]},{name:"spacebuns",weight:0.8,pieces:[Zn,es,...ns,...Pe("hair",0.16,0.15,0.16,0.15,0.49,-0.04)]}],cy={none:1/0,cap:0.31,beanie:0.28,beret:0.38,bucket:0.34,flatcap:0.35,sunhat:0.36,tophat:0.38,headphones:1/0,headband:1/0},hy=[["none",9],["cap",2],["beanie",2],["beret",1.2],["bucket",1.2],["flatcap",1],["sunhat",0.8],["tophat",0.5],["headphones",2],["headband",1]],Rc=(t)=>t.y+t.h/2,Ja=(t)=>t.y-t.h/2;function uy(t,e){let n=[];for(let i of t)if(Rc(i)<=e)n.push(i);else if(Ja(i)<e-0.01)n.push({...i,h:e-Ja(i),y:(e+Ja(i))/2});return n}function Tc(t,e,n,i=-1,s=1){let r=0.21,a=0.19,o=-0.19,l=0.38;for(let c of t){if(c.z+c.d/2<=i||c.z-c.d/2>=s)continue;if(l=Math.max(l,Rc(c)),Rc(c)<=e||Ja(c)>=n)continue;r=Math.max(r,Math.abs(c.x)+c.w/2),a=Math.max(a,c.z+c.d/2),o=Math.min(o,c.z-c.d/2)}return{x:r,front:a,back:o,top:l}}function dy(t,e){switch(t){case"none":return[];case"cap":return[Dt("hat",0.47,0.13,0.45,0,0.375,-0.01),Dt("hatDark",0.4,0.035,0.2,0,0.325,0.27),Dt("hatDark",0.06,0.03,0.06,0,0.455,-0.01)];case"beanie":return[Dt("hat",0.47,0.19,0.45,0,0.395,-0.01),Dt("hatDark",0.485,0.07,0.465,0,0.315,-0.01),Dt("pom",0.13,0.11,0.13,0,0.54,-0.01)];case"beret":return[Dt("hat",0.5,0.07,0.47,0.03,0.415,-0.02),Dt("hat",0.04,0.04,0.04,0.03,0.47,-0.02)];case"bucket":return[Dt("hat",0.44,0.15,0.42,0,0.435,-0.01),Dt("hatDark",0.58,0.03,0.56,0,0.355,-0.01)];case"flatcap":return[Dt("hat",0.48,0.09,0.46,0,0.395,-0.02),Dt("hatDark",0.42,0.04,0.12,0,0.37,0.24)];case"sunhat":return[Dt("straw",0.42,0.13,0.4,0,0.445,-0.01),Dt("hat",0.43,0.035,0.41,0,0.4,-0.01),Dt("straw",0.66,0.025,0.62,0,0.372,-0.01)];case"tophat":return[Dt("hatDark",0.56,0.03,0.52,0,0.395,-0.01),Dt("hat",0.34,0.27,0.32,0,0.545,-0.01),Dt("band",0.35,0.05,0.33,0,0.44,-0.01)];case"headphones":{let n=Tc(e,0.15,0.3,0.02,0.12).x+0.02,i=Tc(e,0,1,0.01,0.08).top+0.02;return[...Pe("hat",0.06,0.15,0.15,n,0.21,0.045),...Pe("hatDark",0.03,i-0.27,0.06,n,(i+0.27)/2,0.045),Dt("hatDark",n*2+0.03,0.035,0.07,0,i,0.045)]}case"headband":{let n=Tc(e.filter((r)=>r.ink==="hair"),0.305,0.355),i=n.front+0.006,s=n.back-0.006;return[Dt("hat",n.x*2+0.012,0.05,i-s,0,0.33,(i+s)/2)]}}}function fy(t){switch(t){case"none":return[];case"glasses":return[...Pe("frame",0.13,0.022,0.012,0.09,0.224,0.197),...Pe("frame",0.13,0.016,0.012,0.09,0.122,0.197),...Pe("frame",0.018,0.118,0.012,0.146,0.173,0.197),...Pe("frame",0.018,0.118,0.012,0.034,0.173,0.197),Dt("frame",0.05,0.016,0.012,0,0.19,0.197),...Pe("frame",0.012,0.02,0.16,0.214,0.21,0.11)];case"shades":return[...Pe("lens",0.15,0.09,0.014,0.09,0.175,0.198),Dt("lens",0.34,0.025,0.014,0,0.215,0.198),...Pe("lens",0.012,0.022,0.16,0.214,0.21,0.11)]}}function py(t){switch(t){case"none":return[];case"mustache":return[Dt("hair",0.15,0.035,0.014,0,0.093,0.197)];case"full":return[Dt("hair",0.4,0.13,0.02,0,0.065,0.196),...Pe("hair",0.03,0.16,0.08,0.2,0.11,0.155),Dt("hair",0.3,0.05,0.1,0,0.005,0.15),Dt("mouth",0.07,0.025,0.01,0,0.06,0.209)]}}function kd(t,e){let n=e==="main",i=n?Ln([["sweater",3],["hoodie",2],["tee",2],["cardigan",1.5]],t,"garment"):Ln([["sweater",3],["tee",3],["hoodie",2],["cardigan",1.2],["apron",1.2],["stripes",1],["vest",1],["overalls",0.6]],t,"garment"),s=is(n?$x:jx,t,"top"),r=i==="apron"?Ec(ty,s,t,"trim"):i==="overalls"?Pi:i==="stripes"?ks:is(Qx,t,"trim"),[a,o]=Ln(ay,t,"build"),l=Ln(hy,t,"headwear");return{skin:is(Jx,t,"skin"),hair:Ln(Kx,t,"hair"),style:Ln(Ac.map((c,h)=>[h,c.weight]),t,"style"),headwear:l,hat:Ec(ny,s,t,"hat"),eyewear:Ln([["none",10],["glasses",4],["shades",1.2]],t,"eyewear"),frame:is(ry,t,"frame"),beard:Ln([["none",14],["mustache",1.5],["full",2.5]],t,"beard"),garment:i,top:s,trim:r,scarf:Cc(t,"scarf")%100<12&&i!=="overalls"?Ec(ey,s,t,"scarf color"):void 0,pants:i==="overalls"?Pi:is(iy,t,"pants"),legs:i==="overalls"?"trousers":Ln([["trousers",7],["shorts",2],["skirt",1.5]],t,"legs"),shoes:Ln(sy,t,"shoes"),width:a,depth:o,torso:Ln(oy,t,"torso"),scale:is(ly,t,"scale")}}function Gd(t){let e=Cd(t.skin),n=Ac[t.style]??Ac[0],i=uy(n?.pieces??[],cy[t.headwear]),s=[...i,...dy(t.headwear,i),...fy(t.eyewear),...py(t.beard)],r={hair:t.hair,hairDark:ai(t.hair),hat:t.hat,hatDark:ai(t.hat),band:Ga(t.hat),straw:wc,pom:t.hat===Ka?"#b8323a":ks,frame:t.frame,lens:"#1d1f24",mouth:"#b5574f"},a=[{color:t.skin,w:0.42,h:0.38,d:0.38,x:0,y:0.19,z:0},{color:we,w:0.05,h:0.08,d:0.02,x:0.09,y:0.17,z:0.191},{color:we,w:0.05,h:0.08,d:0.02,x:-0.09,y:0.17,z:0.191},{color:e,w:0.07,h:0.03,d:0.01,x:0.145,y:0.1,z:0.191},{color:e,w:0.07,h:0.03,d:0.01,x:-0.145,y:0.1,z:0.191},{color:"#b5574f",w:0.06,h:0.025,d:0.01,x:0,y:0.065,z:0.191},...s.map((l)=>({color:r[l.ink],w:l.w,h:l.h,d:l.d,x:l.x,y:l.y,z:l.z}))],o=a.reduce((l,c)=>Math.max(l,c.y+c.h/2),0.38);return{parts:a,top:o}}function Wd(t){return t===Ka||t===Hd?"#2f4a6d":t}function Pc(t){let{width:e,depth:n,torso:i}=t,s=n/2,r=-n/2,a=t.top,o=(c,h,d,u,p,_,S)=>({color:c,w:h,h:d,d:u,x:p,y:_,z:S}),l=[];switch(t.garment){case"tee":case"sweater":l.push(o(a,e,i,n,0,i/2,0),o(Ga(a),0.18,0.05,0.02,0,i-0.03,s+0.002));break;case"hoodie":{let c=ai(a);l.push(o(a,e,i,n,0,i/2,0),o(c,0.3,0.11,0.03,0,i-0.075,r-0.012),o(c,0.22,0.08,0.012,0,0.08,s+0.004),o(ks,0.015,0.08,0.012,0.045,i-0.08,s+0.004),o(ks,0.015,0.08,0.012,-0.045,i-0.08,s+0.004));break}case"cardigan":l.push(o(a,e,i,n,0,i/2,0),o(t.trim,0.1,i-0.01,0.012,0,i/2,s+0.004),o(ai(a),0.02,0.02,0.012,0.065,i*0.6,s+0.004),o(ai(a),0.02,0.02,0.012,0.065,i*0.3,s+0.004));break;case"apron":l.push(o(a,e,i,n,0,i/2,0),o(t.trim,e-0.08,i-0.05,0.012,0,(i-0.05)/2,s+0.006),o(t.trim,0.03,0.06,0.012,0.09,i-0.03,s+0.006),o(t.trim,0.03,0.06,0.012,-0.09,i-0.03,s+0.006),o(t.trim,e+0.012,0.035,n+0.012,0,0.09,0),o(ai(t.trim),0.13,0.06,0.01,0,0.08,s+0.014));break;case"stripes":l.push(o(ks,e,i,n,0,i/2,0));for(let c of[0.2,0.45,0.7])l.push(o(Wd(a),e+0.01,0.04,n+0.01,0,i*c,0));break;case"vest":l.push(o(t.trim,e,i,n,0,i/2,0),o(a,e+0.01,i-0.05,n+0.01,0,(i-0.05)/2,0),o(t.trim,0.09,0.12,0.012,0,i-0.08,s+0.01),o(ai(a),0.02,0.02,0.01,0,i*0.35,s+0.012));break;case"overalls":l.push(o(a,e,i,n,0,i/2,0),o(Pi,e+0.012,0.09,n+0.012,0,0.045,0),o(Pi,e-0.1,i*0.5,0.012,0,i*0.25,s+0.006),o(Pi,0.04,i*0.5,0.012,0.09,i*0.75,s+0.006),o(Pi,0.04,i*0.5,0.012,-0.09,i*0.75,s+0.006),o(Pi,0.04,i*0.9,0.012,0.09,i*0.5,r-0.006),o(Pi,0.04,i*0.9,0.012,-0.09,i*0.5,r-0.006),o(wc,0.03,0.03,0.008,0.09,i*0.5,s+0.014),o(wc,0.03,0.03,0.008,-0.09,i*0.5,s+0.014));break}if(t.scarf!==void 0)l.push(o(t.scarf,e+0.04,0.06,n+0.04,0,i-0.03,0),o(t.scarf,0.075,0.17,0.02,0.07,i-0.12,s+0.02),o(Ga(t.scarf),0.077,0.02,0.022,0.07,i-0.17,s+0.02));return l}var my=-0.155;function Vd(t){let e=Pc(t).reduce((n,i)=>Math.max(n,i.d/2-i.z),0);return Math.max(-0.04,my+0.005+t.scale*e)}function Xd(t){let e=t.garment==="vest"?t.trim:t.garment==="stripes"?ks:t.top,n=(s,r,a,o,l)=>({color:s,w:r,h:a,d:o,x:0,y:l,z:0}),i=[];if(t.garment==="tee"||t.garment==="overalls")i.push(n(e,0.1,0.09,0.12,-0.045),n(t.skin,0.085,0.12,0.1,-0.15));else{if(i.push(n(e,0.1,0.2,0.12,-0.1)),t.garment==="stripes")i.push(n(Wd(t.top),0.11,0.04,0.13,-0.09));if(t.garment==="cardigan"||t.garment==="sweater")i.push(n(ai(e),0.104,0.025,0.124,-0.19))}return i.push(n(t.skin,0.1,0.07,0.11,-0.235)),i}function qd(t){let e=(i,s,r,a,o,l=0)=>({color:i,w:s,h:r,d:a,x:0,y:o,z:l}),n=e(t.shoes,0.16,0.05,0.21,-0.255,0.02);switch(t.legs){case"trousers":return[e(t.pants,0.15,0.23,0.17,-0.115),n];case"shorts":return[e(t.pants,0.16,0.11,0.18,-0.055),e(t.skin,0.12,0.13,0.14,-0.17),n];case"skirt":return[e(t.pants,2*$a+0.04,0.15,0.18,-0.065),e(t.skin,0.12,0.1,0.14,-0.18),n]}}var Zd=6000,Jd=8000;function Ic(t,e,n,i){switch(t){case"ask":return"ask";case"fail":return"fail";case"done":return"done";case"idle":return n==="main"&&i?"await":"idle";case"think":return"think";case"work":if(e==="read"||e==="search")return"shelf";if(e==="plan")return"board";if(e==="delegate")return"lead";return"seat"}}function Yd(t){return t==="idle"||t==="await"}function gy(t,e){if(t==="ask"||t==="fail"||t==="done")return!0;if(Yd(e)&&!Yd(t))return!0;if(e==="ask"||e==="fail"||e==="done")return!0;return!1}class Lc{want;seen;seenSince;constructor(t,e){this.want=t,this.seen=t,this.seenSince=e}feed(t,e,n=0){if(t!==this.seen)this.seen=t,this.seenSince=e;if(t===this.want)return!1;if(gy(t,this.want)||e-this.seenSince>=1800&&e>=n)return this.want=t,!0;return!1}}var _y=[["lounge",0.34],["seat",0.2],["browse",0.14],["gaze",0.12],["pet",0.12],["stroll",0.1]];function Kd(t,e){let n=_y.filter(([r])=>e(r)),i=n.reduce((r,[,a])=>r+a,0);if(i<=0)return"seat";let s=Math.min(Math.max(t,0),0.999999)*i;for(let[r,a]of n)if(s-=a,s<0)return r;return n[n.length-1]?.[0]??"seat"}function ja(t){let e=t>>>0||1;return()=>(e^=e<<13,e^=e>>>17,e^=e<<5,(e>>>0)/4294967296)}function jd(t,e=!1){let n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),s=new Set(Object.keys(t[0].morphAttributes)),r={},a={},o=t[0].morphTargetsRelative,l=new De,c=0;for(let h=0;h<t.length;++h){let d=t[h],u=0;if(n!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;if(r[p]===void 0)r[p]=[];r[p].push(d.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(a[p]===void 0)a[p]=[];a[p].push(d.morphAttributes[p])}if(e){let p;if(n)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(n){let h=0,d=[];for(let u=0;u<t.length;++u){let p=t[u].index;for(let _=0;_<p.count;++_)d.push(p.getX(_)+h);h+=t[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=$d(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d===0)continue;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let p=[];for(let S=0;S<a[h].length;++S)p.push(a[h][S][u]);let _=$d(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}return l}function $d(t){let e,n,i,s=-1,r=0;for(let c=0;c<t.length;++c){let h=t[c];if(e===void 0)e=h.array.constructor;if(e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0)n=h.itemSize;if(n!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0)i=h.normalized;if(i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1)s=h.gpuType;if(s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*n}let a=new e(r),o=new Ge(a,n,i),l=0;for(let c=0;c<t.length;++c){let h=t[c];if(h.isInterleavedBufferAttribute){let d=l/n;for(let u=0,p=h.count;u<p;u++)for(let _=0;_<n;_++){let S=h.getComponent(u,_);o.setComponent(u+d,_,S)}}else a.set(h.array,l);l+=h.count*n}if(s!==void 0)o.gpuType=s;return o}var Qd=new Map;function Jn(t){let e=Qd.get(t);if(e===void 0)e=new Ri({color:t}),Qd.set(t,e);return e}var tf=new Map;function Nc(t){let e=tf.get(t);if(e===void 0)e=new je({color:t}),tf.set(t,e);return e}var yn=new wi(1,1,1),ss=new Ri({vertexColors:!0}),xy=new je({vertexColors:!0});class vn{parts=[];matrix=new $t;turn=new Ze;euler=new wn;color=new Bt;add(t,e,n,i,s,r=0,a=1,o=1,l=1,c=0){this.turn.setFromEuler(this.euler.set(c,r,0,"YXZ")),this.matrix.compose(new P(n,i,s),this.turn,new P(a,o,l));let h=e.index===null?e.clone():e.toNonIndexed();h.applyMatrix4(this.matrix);for(let p of Object.keys(h.attributes))if(p!=="position"&&p!=="normal")h.deleteAttribute(p);this.color.set(t);let d=h.getAttribute("position").count,u=new Float32Array(d*3);for(let p=0;p<d;p+=1)u[p*3]=this.color.r,u[p*3+1]=this.color.g,u[p*3+2]=this.color.b;h.setAttribute("color",new Ge(u,3)),this.parts.push(h)}part(t){this.add(t.color,yn,t.x,t.y,t.z,t.yaw??0,t.w,t.h,t.d)}box(t,e,n,i,s,r,a,o=0){this.add(t,yn,s,r+n/2,a,o,e,n,i)}geometry(){let t=this.parts.length===0?new De:jd(this.parts,!1);for(let e of this.parts)e.dispose();return this.parts.length=0,t??new De}build(t=!1,e=!0,n=!0){let i=new Zt(this.geometry(),t?xy:ss);return i.castShadow=e&&!t,i.receiveShadow=n&&!t,i}}function Ie(t){let e=new vn;for(let n of t)e.part(n);return e.geometry()}function ui(t,e,n,i=!1){let s=document.createElement("canvas");s.width=t,s.height=e;let r=s.getContext("2d");if(r!==null)n(r);let a=new Ta(s);if(a.colorSpace=pa,i)a.magFilter=Rn,a.minFilter=Rn,a.generateMipmaps=!1;return a}function Gs(t,e,n,i,s,r){e.forEach((a,o)=>{for(let l=0;l<a.length;l+=1){let c=n[a[l]??"."];if(c===void 0)continue;t.fillStyle=c,t.fillRect(i+l*r,s+o*r,r,r)}})}function yy(t){let e=t;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function nf(){let t=yy(7),e=ui(512,512,(n)=>{let i=["#c79a6c","#c99d70","#c3956a","#cca174","#c09168"],s=8,r=64;for(let a=0;a<8;a+=1){let o=-Math.floor(t()*160);while(o<512){let l=140+Math.floor(t()*120);n.fillStyle=i[Math.floor(t()*i.length)]??"#c79a6c",n.fillRect(o,a*64,l,64),n.fillStyle="rgba(255,255,255,0.06)",n.fillRect(o,a*64+2,l,2),n.fillStyle="#a97c52",n.fillRect(o+l-2,a*64,2,64),o+=l}n.fillStyle="#ab7f55",n.fillRect(0,a*64+64-3,512,3)}});return e.wrapS=lr,e.wrapT=lr,e}var vy="#ffd84d",by="#69b96c",Sy="#e0564b",My="#d97757",Ey=[".a.a...","..a.a..",".......","#####..","#ccc###","#ccc#.#",".###..."],Ty=["....###",".....#.","....###","###....",".#.....","###....","......."],wy={ask:ln.bang,query:ln.query,done:ln.check,fail:ln.cross,pencil:ln.pencil,shell:ln.shell,globe:ln.globe,gear:ln.gear,people:ln.people,book:ln.book,lens:ln.lens,list:ln.list,cup:Ey,zzz:Ty},ef=new Map;function Qa(t){if(t==="none")return;let e=ef.get(t);if(e!==void 0)return e;let n=8,i=ui(13*n,12*n,(s)=>{if(Gs(s,[".ooooooooooo.","offfffffffffo","offfffffffffo","offfffffffffo","offfffffffffo","offfffffffffo","offfffffffffo","offfffffffffo","offfffffffffo",".ooooooooooo.","..oo.........",".o..........."],{o:we,f:t==="ask"||t==="query"?vy:t==="done"?by:t==="fail"?Sy:"#ffffff"},0,0,n),t.startsWith("think")){let c=Number(t.slice(5));for(let h=0;h<3;h+=1)s.fillStyle=h===c?we:"rgba(43,35,32,0.28)",s.fillRect((3+h*3)*n,4*n,2*n,2*n);return}let o=wy[t]??ln.gear;Gs(s,o,{"#":t==="done"||t==="fail"?"#ffffff":we,a:t==="cup"?"#c9c9c9":My,c:"#8a623f"},3*n,1*n,n)},!0);return ef.set(t,i),i}function sf(){let t=[".oo.oo.","ohhohho","ohhhhho",".ohhho.","..oho..","...o..."];return ui(56,48,(e)=>Gs(e,t,{o:"#8a2d3c",h:"#ef6f8a"},0,0,8),!0)}var Pr=0.28;function of(){return{legL:0,legR:0,armLx:0,armLz:0,armRx:0,armRz:0,headX:0,headY:0,headZ:0,lean:0,lift:0,turn:0}}var rf=["#3f6fb0","#a8452f","#3d8f5a","#7b5aa6","#c48a2a"],af=-Math.PI/2;function We(t,e,n,i,s,r,a){return{color:t,w:e,h:n,d:i,x:s,y:r,z:a}}var Ay=Ie([We("#fbf7ee",0.09,0.1,0.09,0,0.02,0.05),We("#6b4a32",0.07,0.01,0.07,0,0.071,0.05),We("#fbf7ee",0.02,0.05,0.04,-0.055,0.02,0.05)]),Ry=Ie([We("#6b4a32",0.03,0.1,0.03,0,0,0.03),We("#b9c0c7",0.15,0.025,0.03,0,0.175,0.03),We("#b9c0c7",0.15,0.025,0.03,0,0.055,0.03),We("#b9c0c7",0.025,0.12,0.03,0.065,0.115,0.03),We("#b9c0c7",0.025,0.12,0.03,-0.065,0.115,0.03),We("#cfe8f5",0.11,0.1,0.01,0,0.115,0.03)]),Cy=Ie([We("#ffd84d",0.11,0.11,0.012,0,0.02,0.06)]),Py=Ie([We("#4a5060",0.32,0.022,0.22,0,0.011,0),We("#2b2320",0.26,0.004,0.12,0,0.024,-0.02)]),Iy=Ie([We("#4a5060",0.32,0.21,0.016,0,0.105,0),We("#cfd8ea",0.05,0.05,0.004,0,0.12,0.01)]),Ly=new ri(0.3,0.38,28),Ny=new je({color:"#d97757",transparent:!0,opacity:0.9,depthWrite:!1});function bn(t){let e=new Zt(t,ss);return e.castShadow=!0,e}function Dy(t,e,n,i,s){let r=of();if(e)r.legL=af,r.legR=af,r.armLx=-0.35,r.armRx=-0.35;let a=(o,l=0)=>Math.sin(n*o+i+l)*s;switch(t){case"stand":break;case"look":r.headY=0.35*a(0.45),r.headX=0.05;break;case"walk":{let o=Math.sin(n*9+i);r.legL=0.6*o,r.legR=-0.6*o,r.armLx=-0.5*o,r.armRx=0.5*o,r.lift=Math.abs(Math.cos(n*9+i))*0.035;break}case"type":r.armLx=-1.2+0.08*a(16),r.armRx=-1.2+0.08*a(16,Math.PI),r.armLz=-0.2,r.armRz=0.2,r.headX=0.2,r.headY=0.06*a(0.7);break;case"think":r.armLx=e?-0.55:-0.15,r.armLz=-0.12,r.armRx=-2.3,r.armRz=0.6,r.headX=-0.06,r.headZ=0.14+0.05*a(1.4),r.headY=0.18*a(0.6);break;case"read":r.armLx=-1.05,r.armLz=-0.42,r.armRx=-1.05,r.armRz=0.42,r.headX=0.42,r.headY=0.05*a(0.5);break;case"search":r.armLx=-0.2,r.armRx=-1.25+0.12*a(2.2),r.armRz=0.18,r.headX=0.1,r.turn=0.32*a(1.1),r.headY=0.22*a(1.1);break;case"board":r.armLx=-0.15,r.armRx=-2.15+0.14*a(7),r.armRz=0.12*Math.cos(n*7+i)*s,r.headX=-0.2;break;case"ask":r.armLx=e?-0.35:0,r.armRz=-2.75+0.32*a(9),r.lift=0.045*Math.abs(a(4.5)),r.headZ=0.1*a(4.5);break;case"sip":{let o=(n+i)%5.5,l=s>0&&o<1.3;r.armLx=e?-0.4:-0.1,r.armRx=l?-2.05:-0.95,r.armRz=l?0.42:0.25,r.headX=l?-0.28:0.04,r.headY=l?0:0.28*a(0.4);break}case"rest":r.armLx=-0.95,r.armRx=-0.95,r.armLz=-0.15,r.armRz=0.15,r.headX=0.1,r.headY=0.32*a(0.35),r.headZ=0.06*a(0.25);break;case"cheer":r.armLz=2.55+0.18*a(11),r.armRz=-2.55-0.18*a(11),r.lift=0.2*Math.abs(a(7)),r.headX=-0.15;break;case"slump":r.lean=0.42,r.headX=0.55,r.armLx=-1.45,r.armRx=-1.45,r.armLz=-0.3,r.armRz=0.3;break;case"beckon":r.armLx=-0.15,r.armRx=-1.35+0.38*a(5),r.armRz=0.1,r.headY=0.22*a(0.8);break;case"watch":r.armLx=0.38,r.armRx=0.38,r.lean=0.14,r.headX=0.32+0.09*a(2);break;case"pet":r.lean=0.6,r.armLx=-0.3,r.armRx=-0.85+0.25*a(5),r.armRz=0.12,r.headX=0.4;break}return r}class Dc{root=new se;body=new se;upper=new se;legL=new se;legR=new se;armL=new se;armR=new se;head=new se;cup;lens;note;book;owned;ring;bubble;bubbleMaterial;laptop=new se;lid=new se;screen;joints=of();phase;scale;height;seat;pose="stand";isSeated=!1;seatLift=0;bubbleName="none";shown="none";screenState="none";presence=1;constructor(t,e){let n=Ci(e);this.phase=n%628/100;let i=Ie(qd(t)),s=Ie(Xd(t)),r=Ie(Pc(t)),a=Gd(t),o=Ie(a.parts);this.owned=[i,s,r,o],this.scale=t.scale,this.height=t.scale*(Pr+t.torso+a.top),this.seat=Vd(t);let l=t.torso-0.02,c=t.width/2+0.055;this.legL.position.set($a,Pr,0),this.legR.position.set(-$a,Pr,0),this.legL.add(bn(i)),this.legR.add(bn(i)),this.body.add(this.legL,this.legR),this.upper.position.set(0,Pr,0),this.upper.add(bn(r)),this.armL.position.set(c,l,0),this.armR.position.set(-c,l,0),this.armL.add(bn(s)),this.armR.add(bn(s)),this.upper.add(this.armL,this.armR),this.head.position.set(0,t.torso,0),this.head.add(bn(o)),this.upper.add(this.head),this.cup=bn(Ay),this.lens=bn(Ry),this.note=bn(Cy);for(let h of[this.cup,this.lens,this.note])h.position.y=-0.27,this.armR.add(h);this.book=bn(Ie([We(rf[(n>>>5)%rf.length]??"#3f6fb0",0.3,0.22,0.025,0,0,0),We("#fbf7ee",0.28,0.2,0.02,0,0,-0.015),We("#d9cfb8",0.012,0.206,0.025,0,0,-0.016)])),this.owned.push(this.book.geometry),this.book.position.set(0,0.2,0.3),this.book.rotation.x=0.75,this.upper.add(this.book),this.body.add(this.upper),this.body.scale.setScalar(this.scale),this.root.add(this.body),this.ring=new Zt(Ly,Ny),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=0.015,this.ring.visible=!1,this.ring.raycast=()=>{},this.root.add(this.ring),this.bubbleMaterial=new In({transparent:!0,depthWrite:!1}),this.bubble=new Wn(this.bubbleMaterial),this.bubble.scale.set(0.36,0.33,1),this.bubble.center.set(0.2,0),this.bubble.visible=!1,this.root.add(this.bubble),this.laptop.add(bn(Py)),this.lid.position.set(0,0.022,0.11),this.lid.add(bn(Iy)),this.screen=new Zt(yn,Nc("#cfd8ea")),this.screen.scale.set(0.28,0.17,0.004),this.screen.position.set(0,0.105,-0.01),this.lid.add(this.screen),this.laptop.add(this.lid),this.laptop.visible=!1,this.setHeld("none")}setPose(t,e,n){this.pose=t,this.isSeated=e,this.seatLift=e?n-Pr*this.scale+0.01:0}setHeld(t){this.cup.visible=t==="cup",this.lens.visible=t==="lens",this.note.visible=t==="note",this.book.visible=t==="book"}setBubble(t){this.bubbleName=t}setRing(t){this.ring.visible=t}placeLaptop(t,e){if(this.laptop.visible=t!=="none"&&e!==void 0,e===void 0||t==="none")return;let n=0.52;if(this.laptop.position.set(e.x+Math.sin(e.yaw)*n,Qe,e.z+Math.cos(e.yaw)*n),this.laptop.rotation.y=e.yaw,t===this.screenState)return;this.screenState=t,this.screen.material=Nc(t==="error"?"#e0564b":t==="on"?"#cfd8ea":"#3a4050")}update(t,e,n){let i=Dy(this.pose,this.isSeated,e,this.phase,n),s=1-Math.exp(-t*(n>0?14:60)),r=this.joints;for(let d of Object.keys(r))r[d]+=(i[d]-r[d])*s;this.legL.rotation.x=r.legL,this.legR.rotation.x=r.legR,this.armL.rotation.set(r.armLx,0,r.armLz),this.armR.rotation.set(r.armRx,0,r.armRz),this.head.rotation.set(r.headX,r.headY,r.headZ),this.upper.rotation.set(r.lean,r.turn,0),this.body.position.y=this.seatLift+r.lift;let a=this.isSeated?this.pose==="slump"?-0.04:this.seat:0;this.body.position.z+=(a-this.body.position.z)*s,this.cup.rotation.x=-r.armRx-r.lean,this.lens.rotation.x=-r.armRx-0.4,this.note.rotation.x=-r.armRx;let o=this.screenState==="off"?-Math.PI/2+0.08:0.25;this.lid.rotation.x+=(o-this.lid.rotation.x)*s;let l=this.bubbleName;if(l==="think0"||l==="think1"||l==="think2")l=n>0?["think0","think1","think2"][Math.floor(e*2.6)%3]??"think0":"think1";if(l!==this.shown){this.shown=l;let d=Qa(l);if(this.bubble.visible=d!==void 0,d!==void 0)this.bubbleMaterial.map=d,this.bubbleMaterial.needsUpdate=!0}let c=l==="ask"||l==="query"?0.05*Math.abs(Math.sin(e*5+this.phase))*n:0;this.bubble.position.set(0,this.body.position.y+this.height+0.08+c,0);let h=Math.max(0.001,this.presence);this.root.scale.setScalar(h)}headTop(){return this.body.position.y+this.height}dispose(){this.bubbleMaterial.dispose();for(let t of this.owned)t.dispose()}}var lf={read:"book",search:"lens",write:"pencil",run:"shell",web:"globe",delegate:"people",plan:"list",tool:"gear",ask:"ask",think:"think0",rest:"none",done:"done",fail:"fail"},cf=["sofa","armchair","bar","decor"],Uy=1.6,Fy=2.2,Oy=9,By=0.46,to=0.2,Ir={x:At.inside.x,z:At.z-to},hf={x:At.outside.x,z:At.z-to},zy={x:At.inside.x,z:At.z+to},Ws={x:At.outside.x-0.6,z:At.z+to},Hy=0.3,uf=At.z-At.width/2+0.3,df=At.z+At.width/2-0.3;function di(t,e,n){return(e+(n-e)*t())*1000}class Uc{key;body;line;x=0;z=0;yaw=0;isLeaving=!1;isGone=!1;path=[];where="chair";goal={x:0,z:0,yaw:0,sit:0};spot;doing="rest";stay=0;until=0;isThere=!1;isPlacing=!1;intent;random;hasCup=!1;sips=0;thinkSince=0;lingerUntil=0;constructor(t,e,n){this.key=t.key,this.line=t,this.body=new Dc(kd(t.key,t.kind),t.key),this.intent=new Lc(Ic(t.phase,t.act,t.kind,!1),e),this.random=ja(n)}get want(){return this.intent.want}get speed(){return this.doing==="ask"?Fy:Uy}get isWalking(){return this.path.length>0}get isStanding(){return this.isThere&&this.path.length===0&&this.goal.sit===0&&this.where!=="door"}get isGoing(){return this.where==="door"}get isPetting(){return this.doing==="pet"&&!this.isLeaving}arrive(t,e){if(e&&t.motion>0){this.x=hf.x,this.z=hf.z,this.yaw=-Math.PI/2,this.body.presence=0,this.decide(t);return}this.hasCup=this.random()<0.75,this.sips=1+Math.floor(this.random()*2),this.isPlacing=!0,this.decide(t),this.isPlacing=!1,this.yaw=this.goal.yaw}leave(t){if(this.isLeaving)return;if(this.isLeaving=!0,t.release(this),this.spot=void 0,t.motion===0){this.isGone=!0;return}this.goTo(t,"door",{...Ws,yaw:Math.PI/2},0,"exit",0)}update(t,e,n){let{now:i}=n;if(!this.isLeaving){let s=Ic(this.line.phase,this.line.act,this.line.kind,n.isCrewBusy(this));if(this.intent.feed(s,i,this.lingerUntil))this.decide(n);else if(this.spot!==void 0&&!n.isOpen(this.spot))this.next(n);else if(this.isThere&&this.until>0&&i>=this.until)this.until=0,this.next(n);else if(this.want==="think"&&this.doing==="think"&&this.where==="chair"&&this.isThere&&n.motion>0&&i-this.thinkSince>Jd)this.goTo(n,"point",{...n.floorPoint(this.random,this.goal,1.6),yaw:this.yaw},0,"pace",di(this.random,2.5,4))}this.move(t,n),this.show(t,e,n)}stopPetting(t){if(this.isPetting)this.next(t)}nudge(t,e,n,i){let s=this.path[0];if(s!==void 0){let a=s.x-this.x,o=s.z-this.z,l=Math.hypot(a,o),c=0.5*this.speed*n,h=l>0.0001?(t*a+e*o)/l:0;if(h<-c){let d=a/l,u=o/l,p=t-h*d,_=e-h*u,S=Math.hypot(p,_),m=(-h-c)*Math.min(1,l/By),f=S<0.000001?-u:p/S,E=S<0.000001?d:_/S;t=p-c*d+f*m,e=_-c*u+E*m}}let r={x:this.x+t,z:this.z+e};if(r.x>At.inside.x&&Math.abs(this.z-At.z)<At.width/2)r.z=Math.min(Math.max(df,this.z),Math.max(Math.min(uf,this.z),r.z));if(i.isFree(r))this.x=r.x,this.z=r.z}reroute(t){if(this.path.length===0||t.motion===0)return;let e=this.path[this.path.length-1];if(this.where==="door")this.path=this.wayOut(t);else if(this.x<=_e)this.path=t.nav.path(this,e);else this.path=[Ir,...t.nav.path(Ir,e)]}decide(t){let{line:e}=this;switch(this.want){case"ask":this.toChair(t,"beside","ask");return;case"fail":this.toChair(t,"chair","fail");return;case"done":if(t.motion>0)this.stop(t,"cheer",2600);else this.toChair(t,"chair","cheer");return;case"seat":this.toChair(t,"chair","work");return;case"shelf":this.toStation(t,"shelf",e.act==="search"?"search":"read");return;case"board":this.toStation(t,"board","plan");return;case"lead":this.lead(t);return;case"think":if(this.thinkSince=t.now,this.spot!==void 0&&(this.spot.kind==="shelf"||this.spot.kind==="board")){this.doing="think",this.stay=0,this.until=0;return}this.toChair(t,"chair","think");return;case"idle":case"await":if(t.motion===0)this.toChair(t,"chair","rest");else this.freeTime(t);return}}next(t){switch(this.doing){case"coffee":this.hasCup=!0,this.sips=2+Math.floor(this.random()*2),this.freeTime(t);return;case"cheer":t.release(this),this.spot=void 0,this.goTo(t,"door",{...Ws,yaw:Math.PI/2},0,"exit",0);return;case"pace":this.toChair(t,"chair","think"),this.thinkSince=t.now;return;case"sip":case"rest":if(this.hasCup){if(this.sips-=1,this.sips<=0)this.hasCup=!1}this.freeTime(t);return;case"browse":case"pet":case"stroll":case"watch":if(this.want==="idle"||this.want==="await")this.freeTime(t);else this.decide(t);return;default:this.decide(t)}}freeTime(t){if(this.want!=="idle"&&this.want!=="await"){this.decide(t);return}if(!this.hasCup&&!this.isPlacing){let n=t.claim(this,["counter"]);if(n!==void 0){this.goTo(t,"spot",n,0,"coffee",2400,n);return}this.hasCup=!0,this.sips=2}if(this.want==="await"){let n=t.crewChairs(this),i=n[Math.floor(this.random()*n.length)];if(this.doing==="rest"&&this.where==="chair"&&i!==void 0)this.goTo(t,"beside",{...Ya(i),yaw:i.yaw},0,"watch",di(this.random,5,8));else this.toChair(t,"chair","rest",di(this.random,12,20));return}switch(Kd(this.random(),(n)=>{if(n==="lounge")return t.hasFree(cf);if(n==="browse")return t.hasFree(["shelf"]);if(n==="pet")return t.petSpot(this)!==void 0;return!0})){case"lounge":{let n=t.claim(this,cf);if(n!==void 0){this.goTo(t,"spot",n,n.sit,"sip",di(this.random,16,32),n);return}break}case"browse":{let n=t.claim(this,["shelf"]);if(n!==void 0){this.goTo(t,"spot",n,0,"browse",di(this.random,7,12),n);return}break}case"pet":{let n=t.petSpot(this);if(n!==void 0){this.goTo(t,"point",n,0,"pet",di(this.random,5,8));return}break}case"gaze":case"stroll":{let n=t.floorPoint(this.random);this.goTo(t,"point",{...n,yaw:t.cameraYaw(n.x,n.z)+(this.random()-0.5)*2},0,"stroll",di(this.random,3,6));return}case"seat":break}this.toChair(t,"chair","rest",di(this.random,14,24))}lead(t){let e=t.crewChairs(this),n=e[Math.floor(this.random()*e.length)];if(n!==void 0&&t.motion>0){this.goTo(t,"beside",{...Ya(n),yaw:n.yaw},0,"watch",di(this.random,6,10));return}this.toChair(t,"beside","lead",3000)}toStation(t,e,n){if(this.spot?.kind===e){this.doing=n,this.stay=0,this.until=0;return}let i=t.claim(this,[e]);if(i===void 0){this.toChair(t,"chair",n);return}this.goTo(t,"spot",i,0,n,0,i)}toChair(t,e,n,i=0){let s=t.chairOf(this);if(s===void 0){this.stop(t,n,i);return}if(e==="chair")this.goTo(t,"chair",s,Qi,n,i);else this.goTo(t,"beside",{...Ya(s),yaw:s.yaw},0,n,i)}stop(t,e,n){if(this.path=[],this.doing=e,this.stay=n,this.isThere=!0,this.until=n>0?t.now+n:0,this.goal.sit>0&&Math.hypot(this.goal.x-this.x,this.goal.z-this.z)>0.05)this.goal={...this.goal,sit:0}}goTo(t,e,n,i,s,r,a){if(a!==this.spot){if(this.spot!==void 0)t.release(this);if(this.spot=a,a!==void 0)t.claim(this,[a.kind],a)}if(this.where=e,this.goal={x:n.x,z:n.z,yaw:n.yaw,sit:i},this.doing=s,this.stay=r,this.until=0,this.lingerUntil=0,this.isThere=!1,t.motion===0||this.isPlacing){if(e==="door"){this.isGone=!0;return}this.x=n.x,this.z=n.z,this.path=[],this.reach(t);return}if(e==="door"){this.path=this.wayOut(t);return}if(Math.hypot(n.x-this.x,n.z-this.z)<0.05){this.path=[],this.reach(t);return}this.path=this.x>_e-0.05?[Ir,...t.nav.path(Ir,n)]:t.nav.path(this,n)}wayOut(t){if(this.x>_e)return[Ws];if(this.x>=At.inside.x-0.05&&Math.abs(this.z-At.z)<At.width/2){let e=Math.min(df,Math.max(uf,this.z));return Math.abs(e-this.z)<0.01?[Ws]:[{x:this.x+0.05,z:e},Ws]}return[...t.nav.path(this,zy),Ws]}reach(t){this.isThere=!0,this.x=this.goal.x,this.z=this.goal.z,this.until=this.stay>0?t.now+this.stay:0;let e=this.spot?.kind==="shelf"||this.spot?.kind==="board";this.lingerUntil=e&&this.want!=="idle"&&this.want!=="await"?t.now+Zd:0}move(t,e){let n;if(this.path.length>0){let i=this.speed*t;while(i>0&&this.path.length>0){let s=this.path[0],r=s.x-this.x,a=s.z-this.z,o=Math.hypot(r,a);if(s===Ir&&this.path.length>1&&o<Hy){this.path.shift();continue}if(o>0.0001)n=Math.atan2(r,a);if(o<=i)this.x=s.x,this.z=s.z,this.path.shift(),i-=o;else this.x+=r/o*i,this.z+=a/o*i,i=0}if(this.path.length===0)this.reach(e)}if(this.where==="door"&&this.isThere){if(this.body.presence=Math.max(0,this.body.presence-t*3),this.body.presence<=0)this.isGone=!0}else if(this.body.presence<1)this.body.presence=Math.min(1,this.body.presence+t*3);if(n===void 0&&this.isThere)n=this.doing==="ask"||this.doing==="cheer"?e.cameraYaw(this.x,this.z):this.goal.yaw;if(n!==void 0){let i=n-this.yaw;i=Math.atan2(Math.sin(i),Math.cos(i)),this.yaw+=e.motion>0?i*(1-Math.exp(-t*Oy)):i}}show(t,e,n){let i=this.isThere&&this.goal.sit>0,s="stand",r="none";if(!this.isThere){if(s="walk",this.hasCup)r="cup"}else switch(this.doing){case"work":s="type";break;case"think":case"pace":s="think";break;case"read":case"browse":s="read",r="book";break;case"search":s="search",r="lens";break;case"plan":s=this.where==="spot"?"board":"type",r=this.where==="spot"?"note":"none";break;case"ask":s="ask";break;case"fail":s="slump";break;case"cheer":s="cheer";break;case"exit":s="walk";break;case"lead":s="beckon";break;case"watch":s="watch";break;case"coffee":s="look";break;case"pet":s="pet";break;case"sip":case"rest":case"stroll":s=this.hasCup?"sip":this.doing==="rest"&&i?"rest":"look",r=this.hasCup?"cup":"none";break}this.body.setPose(s,i,this.goal.sit),this.body.setHeld(r),this.body.setBubble(this.bubbleName());let a=this.isThere&&(this.where==="chair"||this.where==="beside"&&this.doing!=="watch"),o="off";if(this.isLeaving||this.doing==="cheer")o="none";else if(a&&this.doing==="fail")o="error";else if(a&&(this.doing==="work"||this.doing==="think"||this.doing==="ask"||this.doing==="lead"||this.doing==="plan"))o="on";this.body.placeLaptop(o,o==="none"?void 0:n.chairOf(this)),this.body.update(t,e,n.motion),this.body.root.position.set(this.x,0,this.z),this.body.root.rotation.y=this.yaw}bubbleName(){let{phase:t,act:e,tool:n}=this.line;switch(t){case"ask":return n==="AskUserQuestion"?"query":"ask";case"done":return"done";case"fail":return"fail";case"think":return"think0";case"idle":return"none";case"work":return lf[e]==="none"?"gear":lf[e]}}}class eo{cell;cols;rows;x0;z0;blocked;cost;from;state;heap;heapScore;constructor(t,e=0.2){this.cell=e,this.x0=t.x0,this.z0=t.z0,this.cols=Math.max(1,Math.ceil((t.x1-t.x0)/e)),this.rows=Math.max(1,Math.ceil((t.z1-t.z0)/e));let n=this.cols*this.rows;this.blocked=new Uint8Array(n),this.cost=new Float64Array(n),this.from=new Int32Array(n),this.state=new Uint8Array(n),this.heap=new Int32Array(n*8),this.heapScore=new Float64Array(n*8)}clear(){this.blocked.fill(0)}block(t,e=0.22){let n=Math.max(0,Math.floor((t.x0-e-this.x0)/this.cell)),i=Math.min(this.cols-1,Math.floor((t.x1+e-this.x0)/this.cell)),s=Math.max(0,Math.floor((t.z0-e-this.z0)/this.cell)),r=Math.min(this.rows-1,Math.floor((t.z1+e-this.z0)/this.cell));for(let a=s;a<=r;a+=1)this.blocked.fill(1,a*this.cols+n,a*this.cols+i+1)}blockCircle(t,e,n=0.22){let i=e+n,s=Math.max(0,Math.floor((t.x-i-this.x0)/this.cell)),r=Math.min(this.cols-1,Math.floor((t.x+i-this.x0)/this.cell)),a=Math.max(0,Math.floor((t.z-i-this.z0)/this.cell)),o=Math.min(this.rows-1,Math.floor((t.z+i-this.z0)/this.cell));for(let l=a;l<=o;l+=1)for(let c=s;c<=r;c+=1){let h=this.x0+(c+0.5)*this.cell,d=this.z0+(l+0.5)*this.cell;if(Math.hypot(h-t.x,d-t.z)<=i)this.blocked[l*this.cols+c]=1}}indexOf(t){let e=Math.floor((t.x-this.x0)/this.cell),n=Math.floor((t.z-this.z0)/this.cell);if(e<0||n<0||e>=this.cols||n>=this.rows)return-1;return n*this.cols+e}centerOf(t){return{x:this.x0+(t%this.cols+0.5)*this.cell,z:this.z0+(Math.floor(t/this.cols)+0.5)*this.cell}}isFree(t){let e=this.indexOf(t);return e>=0&&this.blocked[e]===0}nearestFree(t,e=24){let n=Math.floor((t.x-this.x0)/this.cell),i=Math.floor((t.z-this.z0)/this.cell),s=-1,r=1/0;for(let a=0;a<=e;a+=1){for(let o=-a;o<=a;o+=1)for(let l=-a;l<=a;l+=1){if(Math.max(Math.abs(l),Math.abs(o))!==a)continue;let c=n+l,h=i+o;if(c<0||h<0||c>=this.cols||h>=this.rows)continue;let d=h*this.cols+c;if(this.blocked[d]!==0)continue;let u=this.centerOf(d),p=Math.hypot(u.x-t.x,u.z-t.z);if(p<r)s=d,r=p}if(s>=0&&r<(a+0.5)*this.cell)break}return s}nearestPoint(t){if(this.isFree(t))return t;let e=this.nearestFree(t);return e<0?t:this.centerOf(e)}isClear(t,e){let n=Math.hypot(e.x-t.x,e.z-t.z),i=Math.max(1,Math.ceil(n/(this.cell*0.4)));for(let s=0;s<=i;s+=1){let r=s/i,a=this.indexOf({x:t.x+(e.x-t.x)*r,z:t.z+(e.z-t.z)*r});if(a<0||this.blocked[a]!==0)return!1}return!0}path(t,e){let n=this.isFree(t)?this.indexOf(t):this.nearestFree(t),i=this.isFree(e)?this.indexOf(e):this.nearestFree(e);if(n<0||i<0)return[e];let s=this.search(n,i);if(s===void 0)return[e];let r=[],a=this.centerOf(n);if(!this.isFree(t))r.push(a);let o=[this.isFree(t)?t:a,...s.slice(1,-1).map((h)=>this.centerOf(h))],l=this.isFree(e)?e:this.centerOf(i);o.push(l);let c=0;while(c<o.length-1){let h=o.length-1,d=o[c];while(h>c+1&&!this.isClear(d,o[h]))h-=1;r.push(o[h]),c=h}if(!this.isFree(e))r.push(e);return r.filter((h,d)=>d===0||!ky(h,r[d-1]))}search(t,e){if(t===e)return[t];let{cols:n,rows:i}=this;this.cost.fill(1/0),this.state.fill(0);let s=e%n,r=Math.floor(e/n),a=(u)=>{let p=Math.abs(u%n-s),_=Math.abs(Math.floor(u/n)-r);return Math.max(p,_)+(Math.SQRT2-1)*Math.min(p,_)},{heap:o,heapScore:l}=this,c=0,h=(u,p)=>{if(c>=o.length)return;let _=c;c+=1;while(_>0){let S=_-1>>1;if(l[S]<=p)break;o[_]=o[S],l[_]=l[S],_=S}o[_]=u,l[_]=p},d=()=>{let u=o[0];c-=1;let p=o[c],_=l[c],S=0;for(;;){let m=S*2+1;if(m>=c)break;let f=m+1;if(f<c&&l[f]<l[m])m=f;if(l[m]>=_)break;o[S]=o[m],l[S]=l[m],S=m}return o[S]=p,l[S]=_,u};this.cost[t]=0,this.from[t]=-1,h(t,a(t)),this.state[t]=1;while(c>0){let u=d();if(this.state[u]===2)continue;if(this.state[u]=2,u===e){let S=[];for(let m=e;m>=0;m=this.from[m])S.push(m);return S.reverse()}let p=u%n,_=Math.floor(u/n);for(let S=-1;S<=1;S+=1)for(let m=-1;m<=1;m+=1){if(m===0&&S===0)continue;let f=p+m,E=_+S;if(f<0||E<0||f>=n||E>=i)continue;let w=E*n+f;if(this.blocked[w]!==0||this.state[w]===2)continue;if(m!==0&&S!==0&&(this.blocked[_*n+f]!==0||this.blocked[E*n+p]!==0))continue;let v=this.cost[u]+(m!==0&&S!==0?Math.SQRT2:1);if(v>=this.cost[w])continue;this.cost[w]=v,this.from[w]=u,this.state[w]=1,h(w,v+a(w))}}return}}function ky(t,e){return Math.abs(t.x-e.x)<0.000001&&Math.abs(t.z-e.z)<0.000001}var Gy={maj9:[4,7,11,14],m9:[3,7,10,14],m11:[3,10,14,17],dom13:[4,10,14,21],dom7b9:[4,10,13,19],sixNine:[4,9,14,19]},Fc=[[[2,"m9"],[7,"dom13"],[0,"maj9"],[9,"dom7b9"]],[[5,"maj9"],[4,"m9"],[2,"m9"],[0,"maj9"]],[[0,"maj9"],[9,"m9"],[2,"m11"],[7,"dom13"]],[[4,"m9"],[9,"dom7b9"],[2,"m9"],[7,"dom13"]],[[2,"m11"],[7,"dom13"],[4,"m9"],[9,"m9"]],[[0,"sixNine"],[5,"maj9"],[2,"m9"],[7,"dom13"]]],Oc=[3,5,8,10,2,0],Wy=[[[0,7.5]],[[0,3],[3,4.5]],[[0,2],[5,2.5]],[[1,6.5]],[[0,1.5],[3,1],[6,1.5]]];function Bc(t){return 440*2**((t-69)/12)}function ff(t){let e=window.AudioContext??window.webkitAudioContext;if(e===void 0)return;let n,i,s,r,a,o,l,c,h=0,d=0.6,u=!1,p=0,_=0,S=Oc[1]??5,m=Fc[0]??[],f=[],E=Math.random,w=(C)=>C[Math.floor(E()*C.length)],v=(C,N)=>{let Z=Math.floor(N/2),rt=N%2===1;return C+(Z+(rt?0.63:0))*0.8333333333333334+(E()-0.5)*0.012};function T(C){i=C.createGain(),i.gain.value=0;let N=C.createDynamicsCompressor();N.threshold.value=-20,N.ratio.value=3,N.attack.value=0.02,N.release.value=0.3;let Z=C.createDynamicsCompressor();Z.threshold.value=-3,Z.knee.value=0,Z.ratio.value=20,Z.attack.value=0.002,Z.release.value=0.1,i.connect(N).connect(Z).connect(C.destination);let rt=C.createBiquadFilter();rt.type="lowpass",rt.frequency.value=3600,rt.Q.value=0.4,rt.connect(i);let lt=C.createConvolver(),Pt=Math.floor(C.sampleRate*2.4),Et=C.createBuffer(2,Pt,C.sampleRate);for(let re=0;re<2;re+=1){let be=Et.getChannelData(re);for(let te=0;te<Pt;te+=1)be[te]=(E()*2-1)*(1-te/Pt)**2.6}lt.buffer=Et,o=C.createGain(),o.gain.value=0.22,o.connect(lt).connect(rt),s=C.createGain(),s.gain.value=0.9;let z=C.createGain();z.gain.value=0.85;let tt=C.createOscillator();tt.frequency.value=4.2;let K=C.createGain();K.gain.value=0.12,tt.connect(K).connect(z.gain),tt.start(),s.connect(z),z.connect(rt),z.connect(o);let ct=C.createOscillator();ct.frequency.value=0.45,l=C.createGain(),l.gain.value=6,ct.connect(l),ct.start(),r=C.createGain(),r.gain.value=0.85;let vt=C.createBiquadFilter();vt.type="lowpass",vt.frequency.value=520,r.connect(vt).connect(rt),a=C.createGain(),a.gain.value=0.7,a.connect(rt),a.connect(o),c=C.createBuffer(1,C.sampleRate,C.sampleRate);let mt=c.getChannelData(0);for(let re=0;re<mt.length;re+=1)mt[re]=E()*2-1;let jt=C.sampleRate*6,Ht=C.createBuffer(1,jt,C.sampleRate),Vt=Ht.getChannelData(0),Jt=0;for(let re=0;re<jt;re+=1)if(Jt=Jt*0.92+(E()*2-1)*0.08,Vt[re]=Jt*0.05,E()<0.00018){let be=(E()*0.5+0.2)*(E()<0.5?-1:1);for(let te=0;te<40&&re+te<jt;te+=1)Vt[re+te]=(Vt[re+te]??0)+be*Math.exp(-te/6)}let Wt=C.createBufferSource();Wt.buffer=Ht,Wt.loop=!0;let Me=C.createBiquadFilter();Me.type="highpass",Me.frequency.value=700;let he=C.createGain();he.gain.value=0.22,Wt.connect(Me).connect(he).connect(i),Wt.start()}function R(C,N,Z,rt,lt){if(s===void 0||l===void 0)return;let Pt=Bc(Z),Et=N+lt,z=C.createOscillator();z.frequency.value=Pt;let tt=C.createOscillator();tt.frequency.value=Pt;let K=C.createGain();K.gain.setValueAtTime(Pt*1.1*rt,N),K.gain.exponentialRampToValueAtTime(Pt*0.06+0.01,N+1.1),tt.connect(K).connect(z.frequency),l.connect(z.detune);let ct=C.createOscillator();ct.frequency.value=Pt*4;let vt=C.createGain();vt.gain.setValueAtTime(0.05*rt,N),vt.gain.exponentialRampToValueAtTime(0.0001,N+0.22);let mt=C.createGain();mt.gain.setValueAtTime(0,N),mt.gain.linearRampToValueAtTime(0.16*rt,N+0.008),mt.gain.setTargetAtTime(0.06*rt,N+0.01,0.7),mt.gain.setTargetAtTime(0,Et,0.12),z.connect(mt),ct.connect(vt).connect(mt),mt.connect(s);for(let Ht of[z,tt,ct])Ht.start(N),Ht.stop(Et+0.8);let jt=l;z.onended=()=>jt.disconnect(z.detune)}function A(C,N,Z,rt,lt){if(r===void 0)return;let Pt=N+lt,Et=C.createGain();Et.gain.setValueAtTime(0,N),Et.gain.linearRampToValueAtTime(0.42*rt,N+0.012),Et.gain.setTargetAtTime(0.2*rt,N+0.02,0.25),Et.gain.setTargetAtTime(0,Pt,0.06);for(let[z,tt]of[["triangle",0.7],["sine",1]]){let K=C.createOscillator();K.type=z,K.frequency.value=Bc(Z);let ct=C.createGain();ct.gain.value=tt,K.connect(ct).connect(Et),K.start(N),K.stop(Pt+0.4)}Et.connect(r)}function g(C,N,Z,rt){if(s===void 0)return;let lt=C.createGain();lt.gain.setValueAtTime(0,N),lt.gain.linearRampToValueAtTime(0.07*rt,N+0.01),lt.gain.setTargetAtTime(0,N+0.05,0.55);let Pt=C.createGain();Pt.gain.value=0.75;let Et=C.createOscillator();Et.frequency.value=5.5;let z=C.createGain();z.gain.value=0.25,Et.connect(z).connect(Pt.gain);for(let[tt,K]of[[1,1],[4,0.12]]){let ct=C.createOscillator();ct.frequency.value=Bc(Z)*tt;let vt=C.createGain();vt.gain.value=K,ct.connect(vt).connect(lt),ct.start(N),ct.stop(N+3)}Et.start(N),Et.stop(N+3),lt.connect(Pt).connect(s)}function b(C,N,Z,rt,lt,Pt,Et=0.7,z=a){if(c===void 0||z===void 0)return;let tt=C.createBufferSource();tt.buffer=c,tt.loop=rt>0.5,tt.playbackRate.value=0.8+E()*0.4;let K=C.createBiquadFilter();K.type=lt,K.frequency.value=Pt,K.Q.value=Et;let ct=C.createGain();ct.gain.setValueAtTime(0,N),ct.gain.linearRampToValueAtTime(Z,N+Math.min(0.01,rt/4)),ct.gain.exponentialRampToValueAtTime(0.0001,N+rt),tt.connect(K).connect(ct).connect(z),tt.start(N,E()*0.5),tt.stop(N+rt+0.05)}function G(C,N,Z){if(a===void 0)return;let rt=C.createOscillator();rt.frequency.setValueAtTime(115,N),rt.frequency.exponentialRampToValueAtTime(46,N+0.1);let lt=C.createGain();lt.gain.setValueAtTime(0.5*Z,N),lt.gain.exponentialRampToValueAtTime(0.0001,N+0.34),rt.connect(lt).connect(a),rt.start(N),rt.stop(N+0.4)}function I(C,N){if(o===void 0||i===void 0)return;for(let[Z,rt]of[[2350,0.02],[3720,0.012],[5180,0.006]]){let lt=C.createOscillator();lt.frequency.value=Z*(0.97+E()*0.06);let Pt=C.createGain();Pt.gain.setValueAtTime(rt,N),Pt.gain.exponentialRampToValueAtTime(0.0001,N+0.5),lt.connect(Pt),Pt.connect(o),Pt.connect(i),lt.start(N),lt.stop(N+0.55)}}function B(C,N){let Z=48+(S+C)%12,rt=Gy[N].map((z)=>Z+z),lt=f.length===0?62:f.reduce((z,tt)=>z+tt,0)/f.length,Pt=rt,Et=1/0;for(let z of[-12,0,12]){let tt=rt.map((vt)=>vt+z),K=tt.reduce((vt,mt)=>vt+mt,0)/tt.length,ct=Math.abs(K-lt)+Math.abs(K-62)*0.5;if(ct<Et)Pt=tt,Et=ct}return f=Pt.map((z)=>z>77?z-12:z).sort((z,tt)=>z-tt),f}function j(C,N){if(_%16===0&&_>0)S=w(Oc),m=w(Fc);let[Z,rt]=m[_%m.length]??[0,"maj9"],[lt]=m[(_+1)%m.length]??[0,"maj9"],Pt=_%8,Et=B(Z,rt);for(let[K,ct]of w(Wy)){let vt=0.7+E()*0.3;Et.forEach((mt,jt)=>R(C,v(N,K)+jt*(0.012+E()*0.01),mt,vt*(jt===0?0.9:1),ct*0.8333333333333334*0.5))}let z=36+(S+Z)%12,tt=z+7>47?z-5:z+7;if(A(C,v(N,0),z,1,1.5),A(C,v(N,4),E()<0.6?tt:z+12>50?z:z+12,0.85,1.0833333333333335),E()<0.55){let K=36+(S+lt)%12,ct=E()<0.5?K+1:K-1;A(C,v(N,7),ct,0.7,0.375)}if(G(C,v(N,0),1),E()<0.45)G(C,v(N,5),0.6);for(let K of[2,6])b(C,v(N,K),0.11,0.2,"bandpass",2400,0.6),b(C,v(N,K)-0.04,0.035,0.32,"bandpass",1500,0.4);for(let K=0;K<8;K+=1){if(E()<0.1)continue;b(C,v(N,K),K%2===1?0.05:0.032,0.05,"highpass",7000)}if(E()<0.25)b(C,v(N,1+Math.floor(E()*6)),0.03,0.12,"bandpass",2800,0.6);if(Pt>=4&&E()<0.45){let K=[0,2,4,7,9].map((mt)=>72+(S+mt)%12),ct=1+Math.floor(E()*3),vt=2+Math.floor(E()*3);for(let mt=0;mt<vt&&ct<8;mt+=1)g(C,v(N,ct),w([...K,...Et.map((jt)=>jt+12)].filter((jt)=>jt<=86)),0.6+E()*0.4),ct+=1+Math.floor(E()*2)}if(E()<0.12)I(C,N+E()*3.3333333333333335);if(E()<0.04)b(C,N+E()*3.3333333333333335,0.025,2.4,"bandpass",4200,0.8,i)}function L(){let C=n;if(C===void 0||C.state!=="running")return;if(p<C.currentTime+0.05)p=C.currentTime+0.1;let N=document.hidden?65:0.4;while(p<C.currentTime+N)j(C,p),p+=3.3333333333333335,_+=1}async function q(C){if(et(C))return!0;return await Promise.race([C.resume().catch(()=>{return}),new Promise((N)=>window.setTimeout(N,400))]),et(C)}function et(C){return C.state==="running"}function W(C){if(C.state!=="closed")C.close().catch(()=>{return})}function st(C,N,Z,rt){let lt=C.currentTime,Pt=N.gain.value;N.gain.cancelScheduledValues(lt),N.gain.setValueAtTime(Pt,lt),N.gain.setTargetAtTime(Z,lt,rt)}return{get isPlaying(){return u&&n!==void 0&&n.state==="running"},async start(){let C=n;if(u&&C!==void 0){if(!await q(C))throw Error("the browser waits for a click before it plays sound");return}u=!0;let N=new e;n=N,T(N),N.addEventListener("statechange",()=>{if(n===N)t?.()});let Z=await q(N);if(n!==N)return;if(!Z)throw u=!1,n=void 0,W(N),Error("the browser waits for a click before it plays sound");S=w(Oc),m=w(Fc),_=0,f=[],p=N.currentTime+0.15,i?.gain.setValueAtTime(0,N.currentTime),i?.gain.linearRampToValueAtTime(d,N.currentTime+2.5),L(),h=window.setInterval(L,120)},stop(){if(!u)return;u=!1,window.clearInterval(h);let C=n,N=i;if(n=void 0,C===void 0)return;if(N!==void 0&&C.state==="running")st(C,N,0,0.15);window.setTimeout(()=>W(C),800)},setVolume(C){d=Math.max(0,Math.min(1,C));let N=n;if(N!==void 0&&i!==void 0&&N.state==="running")st(N,i,d,0.08)}}}var Vy=[{fur:"#e9a34f",shade:"#c47f33",patch:"#f7e6c8"},{fur:"#9a9aa2",shade:"#6f6f78",patch:"#e8e6e2"},{fur:"#3a3633",shade:"#24211f",patch:"#3a3633"},{fur:"#f4f1ea",shade:"#d9d2c6",patch:"#e9a34f"},{fur:"#f4f1ea",shade:"#3a3633",patch:"#e9a34f"}],Xy=[{fur:"#d9a25b",shade:"#b8813f",patch:"#f3e3c4"},{fur:"#e08a3c",shade:"#b86a2a",patch:"#f7efe2"},{fur:"#8a5a3b",shade:"#6b4429",patch:"#d9b48c"},{fur:"#2f2b29",shade:"#1f1c1b",patch:"#f4f1ea"},{fur:"#f2ece0",shade:"#d8cdb8",patch:"#8a5a3b"}],no="#f0a58c",pf=["#e0564b","#3f6fb0","#3d8f5a","#ffd84d"],qy={cat:["Mochi","Miso","Luna","Tofu","Nori","Maple","Pudding","Sesame"],dog:["Biscuit","Latte","Mango","Peanut","Cocoa","Bagel","Waffle","Pepper"]},Vs={cat:["Meow~","Purr…","Mrrp?","Meow!"],dog:["Woof!","Arf!","Woof woof!","Arf arf!"]},Yy=2200,Zy=new ri(0.3,0.37,28),Jy=new je({color:"#e98fb0",transparent:!0,opacity:0.9,depthWrite:!1}),mf=0.075,Ky=new Yi(mf,1),io=550,$y=12000;class zc{mesh;x=0;z=0;state="lying";droppedAt=0;from={x:0,z:0};thrownAt=0;constructor(){this.mesh=new Zt(Ky,Jn("#cfe34a")),this.mesh.castShadow=!0}throwTo(t,e){this.from={x:t.x*0.6,z:ye+1.2},this.x=t.x,this.z=t.z,this.thrownAt=e,this.state="flying",this.droppedAt=0}get hasLanded(){return this.state!=="flying"}isOld(t){return this.droppedAt>0&&t-this.droppedAt>$y}carry(t,e,n){this.state="carried",this.mesh.position.set(t,e,n)}drop(t,e,n){this.state="lying",this.x=t,this.z=e,this.droppedAt=n}update(t,e){if(this.state==="carried")return;let n=0,i=this.x,s=this.z;if(this.state==="flying"){let r=t-this.thrownAt;if(e===0||r>=io+500)this.state="lying";else if(r<io){let a=r/io;i=this.from.x+(this.x-this.from.x)*a,s=this.from.z+(this.z-this.from.z)*a,n=1.2*(1-a)+6.4*a*(1-a)}else{let a=(r-io)/500;n=Math.abs(Math.sin(a*Math.PI*2))*0.2*(1-a)}}this.mesh.position.set(i,n+mf,s)}}function ce(t,e,n,i,s,r,a){return{color:t,w:e,h:n,d:i,x:s,y:r,z:a}}function so(t){let e=new Zt(t,ss);return e.castShadow=!0,e}class Hc{species;id;root=new se;body=new se;head=new se;tail=new se;legs=[];dream;dreamMaterial;owned=[];random;size;path=[];mood="sleep";moodUntil=0;goal={x:0,z:0};x=0;z=0;yaw=0.6;presence=1;petter="";isGone=!1;name;said="";saidUntil=0;excitedUntil=0;errand="none";ball;ring;constructor(t,e,n){this.species=t;this.id=e;let i=Ci(e);this.random=ja(i);let s=Number(e.split(":")[1])||0,r=qy[t];this.name=`${r[s%r.length]??t}${s>=r.length?` ${Math.floor(s/r.length)+1}`:""}`;let a=t==="cat"?Vy:Xy,o=a[i%a.length]??a[0];if(this.size=t==="cat"?0.95+this.random()*0.15:0.85+this.random()*0.45,t==="cat")this.buildCat(o);else this.buildDog(o,pf[(i>>>4)%pf.length]??"#e0564b");this.root.add(this.body),this.root.scale.setScalar(this.size),this.dreamMaterial=new In({map:Qa("zzz"),transparent:!0,depthWrite:!1}),this.dream=new Wn(this.dreamMaterial),this.dream.scale.set(0.26,0.24,1),this.dream.center.set(0.2,0),this.root.add(this.dream),this.ring=new Zt(Zy,Jy),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=0.024/this.size,this.ring.visible=!1,this.ring.raycast=()=>{},this.root.add(this.ring),this.moodUntil=n+5000+this.random()*20000}buildCat(t){let e=Ie([ce(t.fur,0.2,0.17,0.38,0,0.165,0),ce(t.shade,0.205,0.04,0.2,0,0.235,-0.02),ce(t.patch,0.12,0.08,0.06,0,0.13,0.17)]),n=Ie([ce(t.fur,0.06,0.09,0.06,0,-0.045,0)]),i=Ie([ce(t.fur,0.21,0.17,0.17,0,0,0),ce(t.shade,0.05,0.07,0.04,0.065,0.11,-0.02),ce(t.shade,0.05,0.07,0.04,-0.065,0.11,-0.02),ce(no,0.03,0.04,0.01,0.065,0.1,0),ce(no,0.03,0.04,0.01,-0.065,0.1,0),ce(t.patch,0.1,0.05,0.01,0,-0.04,0.086),ce(we,0.03,0.02,0.01,0.045,0.02,0.087),ce(we,0.03,0.02,0.01,-0.045,0.02,0.087),ce(no,0.025,0.02,0.01,0,-0.02,0.088)]),s=Ie([ce(t.shade,0.05,0.05,0.24,0,0,-0.11)]);this.assemble(e,n,i,s,{legY:0.09,legX:0.06,legZ:0.13,head:[0,0.25,0.2],tail:[0,0.2,-0.19]})}buildDog(t,e){let n=Ie([ce(t.fur,0.24,0.2,0.42,0,0.25,0),ce(t.shade,0.245,0.05,0.24,0,0.33,-0.04),ce(t.patch,0.16,0.12,0.05,0,0.22,0.2),ce(e,0.2,0.05,0.05,0,0.33,0.2)]),i=Ie([ce(t.fur,0.075,0.14,0.075,0,-0.07,0),ce(t.patch,0.08,0.03,0.08,0,-0.125,0.005)]),s=Ie([ce(t.fur,0.22,0.2,0.2,0,0,0),ce(t.patch,0.13,0.09,0.12,0,-0.05,0.14),ce(we,0.05,0.035,0.02,0,-0.02,0.205),ce(we,0.035,0.035,0.01,0.055,0.04,0.101),ce(we,0.035,0.035,0.01,-0.055,0.04,0.101),ce(t.shade,0.05,0.15,0.1,0.13,-0.01,-0.02),ce(t.shade,0.05,0.15,0.1,-0.13,-0.01,-0.02),ce(no,0.04,0.05,0.01,0,-0.1,0.17)]),r=Ie([ce(t.fur,0.05,0.05,0.2,0,0,-0.09)]);this.assemble(n,i,s,r,{legY:0.14,legX:0.07,legZ:0.14,head:[0,0.42,0.24],tail:[0,0.32,-0.2]})}assemble(t,e,n,i,s){this.owned.push(t,e,n,i),this.body.add(so(t));for(let[r,a]of[[s.legX,s.legZ],[-s.legX,s.legZ],[s.legX,-s.legZ],[-s.legX,-s.legZ]]){let o=so(e);o.position.set(r,s.legY,a),this.legs.push(o),this.body.add(o)}this.head.position.set(...s.head),this.head.add(so(n)),this.body.add(this.head),this.tail.position.set(...s.tail),this.tail.add(so(i)),this.body.add(this.tail)}get isLeaving(){return this.mood==="leave"}get isStill(){return this.path.length===0&&this.errand==="none"&&(this.mood==="sleep"||this.mood==="sit")}get height(){return(this.species==="dog"?0.55:0.4)*this.size}get isPresent(){return this.presence>0.5}hitBox(t){return this.root.updateMatrixWorld(!0),t.setFromObject(this.body).expandByScalar(0.04)}setRing(t){this.ring.visible=t}say(t,e){this.said=t,this.saidUntil=e+Yy}poke(t){if(this.isLeaving)return;let{now:e}=t;if(this.say(Vs[this.species][Math.floor(this.random()*Vs[this.species].length)]??"",e),this.errand!=="none"||this.x>At.inside.x)return;this.path=[],this.mood="sit",this.moodUntil=e+6000+this.random()*4000,this.excitedUntil=e+1600}call(t,e){if(this.isLeaving)return!1;if(this.species==="cat"&&this.random()<0.3)return this.say("…",e.now),!1;return this.letGoOfBall(e.now),this.errand="come",this.send(e.petNav.nearestPoint(t),e),!0}fetch(t,e){if(this.isLeaving||this.species!=="dog")return;this.letGoOfBall(e.now),this.ball=t,this.errand="fetch",this.say(Vs.dog[0]??"",e.now),this.send(e.petNav.nearestPoint(t),e)}send(t,e){if(this.excitedUntil=0,this.petter="",this.goal=t,this.mood="walk",e.motion===0){this.x=t.x,this.z=t.z,this.path=[];return}this.path=e.petNav.path(this,t)}letGoOfBall(t){if(this.ball?.state==="carried")this.ball.drop(this.x+Math.sin(this.yaw)*0.35*this.size,this.z+Math.cos(this.yaw)*0.35*this.size,t);this.ball=void 0}arrive(t){let{now:e}=t;switch(this.errand){case"fetch":{let n=this.ball;if(n===void 0||n.state==="carried"){this.errand="none";break}if(!n.hasLanded)return;n.state="carried",this.errand="bring",this.send(t.bringBack(this),t);return}case"bring":this.letGoOfBall(e),this.errand="none",this.mood="sit",this.moodUntil=e+6000,this.excitedUntil=e+1400,this.say(Vs.dog[2]??"",e);return;case"come":this.errand="none",this.mood="sit",this.moodUntil=e+7000+this.random()*4000,this.excitedUntil=e+1200,this.say(Vs[this.species][Math.floor(this.random()*Vs[this.species].length)]??"",e);return;case"none":break}this.choose(t)}enter(t,e){let i=(this.species==="cat"?t.freeBed(this):t.floorPoint(this.random))??t.floorPoint(this.random);if(e&&t.motion>0){this.x=At.outside.x,this.z=At.outside.z,this.yaw=-Math.PI/2,this.presence=0,this.goal=i,this.path=[At.inside,...t.petNav.path(At.inside,i)],this.mood="walk",this.moodUntil=0;return}this.x=i.x,this.z=i.z,this.goal=i,this.mood=this.species==="cat"?"sleep":"sit"}leave(t){if(this.mood==="leave")return;if(this.letGoOfBall(t.now),this.mood="leave",this.errand="none",this.excitedUntil=0,this.petter="",t.motion===0){this.isGone=!0;return}this.path=this.x>_e?[At.outside]:[...t.petNav.path(this,At.inside),At.outside]}reroute(t){let e=t.petNav;if(this.mood==="leave"){if(t.motion>0&&this.path.length>1&&this.x<=_e)this.path=[...e.path(this,At.inside),At.outside];return}if(this.path.length>0){this.goal=e.nearestPoint(this.goal),this.path=this.x>_e?[At.inside,...e.path(At.inside,this.goal)]:e.path(this,this.goal);return}if(e.isFree(this))return;let n=e.nearestPoint(this);if(this.petter="",this.excitedUntil=0,this.goal=n,t.motion===0){this.x=n.x,this.z=n.z;return}this.mood="walk",this.path=[n]}pettingPlace(t){if(!this.isStill)return;for(let e of[Math.PI/2,-Math.PI/2,0,Math.PI]){let n=this.species==="cat"?0.5:0.58,i=this.x+Math.sin(this.yaw+e)*n,s=this.z+Math.cos(this.yaw+e)*n;if(t.isFree({x:i,z:s}))return{x:i,z:s,yaw:Math.atan2(this.x-i,this.z-s)}}return}choose(t){let{now:e}=t;if(this.species==="cat"){if(this.mood==="walk"||this.mood==="sit"||this.path.length>0){this.mood="sleep",this.moodUntil=e+40000+this.random()*50000;return}let s=t.freeBed(this);if(s===void 0){this.moodUntil=e+20000;return}this.goal=s,this.path=t.petNav.path(this,s),this.mood="walk";return}if(this.mood==="walk"){this.mood=this.random()<0.3?"sleep":"sit",this.moodUntil=e+(this.mood==="sleep"?15000+this.random()*25000:4000+this.random()*8000);return}let i=(this.random()<0.45?t.besideResting(this.random):void 0)??t.floorPoint(this.random);this.goal=i,this.path=t.petNav.path(this,i),this.mood="walk"}update(t,e,n){let{now:i,motion:s}=n,r=i<this.excitedUntil;if(this.mood!=="leave"&&this.path.length===0&&!r){if(this.errand!=="none")this.arrive(n);else if((s>0||this.species==="cat"&&this.mood==="sit")&&this.petter===""&&i>=this.moodUntil)this.choose(n)}let a=this.path.length>0&&!r;if(a){let l=(this.errand==="none"?this.species==="dog"?1.25:0.75:this.species==="dog"?2.3:1.1)*t*(this.mood==="leave"?1.2:1);while(l>0&&this.path.length>0){let c=this.path[0],h=c.x-this.x,d=c.z-this.z,u=Math.hypot(h,d);if(u>0.0001){let p=Math.atan2(h,d)-this.yaw;p=Math.atan2(Math.sin(p),Math.cos(p)),this.yaw+=p*(1-Math.exp(-t*9))}if(u<=l)this.x=c.x,this.z=c.z,this.path.shift(),l-=u;else this.x+=h/u*l,this.z+=d/u*l,l=0}if(this.path.length===0&&this.mood!=="leave")this.arrive(n)}if(this.ball?.state==="carried"){let o=(this.species==="dog"?0.38:0.3)*this.size;this.ball.carry(this.x+Math.sin(this.yaw)*o,0.36*this.size,this.z+Math.cos(this.yaw)*o)}if(this.mood==="leave"&&this.path.length===0){if(this.presence=Math.max(0,this.presence-t*3),this.presence<=0)this.isGone=!0}else if(this.presence<1)this.presence=Math.min(1,this.presence+t*3);this.pose(t,e,s,a,r),this.root.position.set(this.x,0,this.z),this.root.rotation.y=this.yaw,this.root.scale.setScalar(this.size*Math.max(0.001,this.presence))}pose(t,e,n,i,s){let r=1-Math.exp(-t*6),a=Math.sin(e*(this.species==="dog"?13:10))*n,o=!i&&!s&&this.mood==="sleep",l=!i&&!s&&this.mood==="sit",c=this.petter!=="",h=o?0.6:1;this.body.scale.y+=(h-this.body.scale.y)*r;let d=l&&this.species==="dog"?-0.35:0;this.body.rotation.x+=(d-this.body.rotation.x)*r;let u=s?Math.abs(Math.sin(e*(this.species==="dog"?11:6)))*(this.species==="dog"?0.09:0.04)*n:0;if(this.body.position.y=(i?Math.abs(a)*0.015:0)+u,this.legs.forEach((p,_)=>{p.rotation.x=i?(_%3===0?a:-a)*0.55:0,p.visible=!o||this.species==="dog"}),s){let p=(this.species==="dog"?1.2:0.3)*Math.sin(e*(this.species==="dog"?24:5))*n;this.tail.rotation.set(this.species==="dog"?-0.8:-1.1,p,0),this.head.rotation.set(-0.25,0,this.species==="cat"?0.3*Math.sin(e*3)*n:0)}else if(o)this.head.rotation.set(0.35+0.03*Math.sin(e*1.2)*n,0.5,0),this.tail.rotation.set(0,this.species==="cat"?1.2+0.1*Math.sin(e*0.8)*n:0.6,0);else if(this.species==="dog"){let p=(c?1.1:i?0.5:0.7)*Math.sin(e*(c?22:14))*n;this.tail.rotation.set(-0.7,p,0),this.head.rotation.set(l?0.2:0,i?0:0.4*Math.sin(e*0.7+this.size*9)*n,c?0.2:0)}else this.tail.rotation.set(i?-0.5:-0.2,0.35*Math.sin(e*4)*n,0),this.head.rotation.set(0,c?0.25*Math.sin(e*2)*n:0,c?0.25:0);this.dream.visible=o&&!c,this.dream.position.y=(this.species==="dog"?0.45:0.38)+0.03*Math.sin(e*1.5)*n}dispose(){this.dreamMaterial.dispose();for(let t of this.owned)t.dispose()}}var Lr="#f3e2c3",ro="#e8d2ab",kc="#b98557",jy="#ecd6ae",Qy="#8a623f",Xs="#8a623f",pe="#6b4a32",gf="#3e2c20",Tf="#2f3b36",fi="#f4f1e6",Gc="#b9c0c7",tv="#dfe4e8",rs="#59616b",en="#fbf7ee",ao="#3c3a39",Vc="#c9995f",Nn="#e2b684",wf="#9a6c41",Xc="#5b4030",qc="#735241",_f="#d97757",Yc=["#4d8f4a","#3f7d3d","#5aa356"],xf=["#3f6fb0","#a8452f","#3d8f5a","#7b5aa6","#c48a2a","#2f6f6a","#d27aa8","#e0a03a","#59616b"],yf=["#ffd84d","#f0a58c","#9ec5e8","#8fd18f","#fbf7ee"],vf=["#9b3d2e","#2f6f6a","#5d4a8f","#8a6d1f"],bf="#8fd18f",ev="#ffd84d",nv="#b9bbbf";function Sf(t){let e=t;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function iv(){let t=new vn,e=Qi-0.05;t.box(qc,0.42,0.05,0.42,0,Qi-0.05,0);for(let[n,i]of[[0.17,0.17],[-0.17,0.17],[0.17,-0.17],[-0.17,-0.17]])t.box(Xc,0.045,e,0.045,n,0,i);return t.box(Xc,0.42,0.22,0.05,0,Qi,-0.19),t.box(qc,0.44,0.045,0.07,0,Qi+0.22,-0.19),t.geometry()}var Le=new qi(1,1,1,14),Mf=new qi(0.25,1,1,12),Ef=new qi(1,0.72,1,12),sv=new Yi(1,0);class Af{index;chairs;table=new se;decor;top;edge;apron;legs=[];rug;columns=1;target=1;shown=0;constructor(t,e){this.index=t;this.chairs=e;this.top=new Zt(yn,Jn(Vc)),this.edge=new Zt(yn,Jn(Nn)),this.apron=new Zt(yn,Jn(wf));for(let s=0;s<4;s+=1)this.legs.push(new Zt(yn,Jn(pe)));this.rug=new Zt(yn,Jn("#a0806a")),this.rug.receiveShadow=!0;for(let s of[this.top,this.edge,this.apron,...this.legs])s.castShadow=!0,s.receiveShadow=!0,this.table.add(s);this.table.add(this.rug),this.table.visible=!1;let n=Hs(t),i=new vn;i.add(Vc,Le,n.x,Qe-0.02,n.z,0,n.r,0.04,n.r),i.add(Nn,Le,n.x,Qe+0.002,n.z,0,n.r-0.04,0.004,n.r-0.04),i.add(pe,Le,n.x,(Qe-0.04)/2,n.z,0,0.05,Qe-0.04,0.05),i.add(pe,Le,n.x,0.015,n.z,0,0.24,0.03,0.24),i.add("#9ec5e8",Le,n.x+0.08,Qe+0.07,n.z-0.05,0,0.04,0.12,0.04),i.box(Yc[0]??"#4d8f4a",0.02,0.1,0.02,n.x+0.08,Qe+0.12,n.z-0.05),i.box(["#ffd84d","#f0a58c","#d27aa8"][t%3]??"#ffd84d",0.07,0.07,0.07,n.x+0.08,Qe+0.21,n.z-0.05),i.box(en,0.08,0.08,0.08,n.x-0.12,Qe,n.z+0.08),this.decor=i.build(),this.place(1),this.setChairs()}use(t,e){let n=this.shown===0;if(this.shown=t,this.table.visible=t>0,this.decor.visible=t===0,t===0){this.setChairs();return}if(n){let i=new Bt(vf[e%vf.length]??"#9b3d2e").lerp(new Bt("#c79a6c"),0.45);this.rug.material=Jn(`#${i.getHexString()}`),this.columns=t,this.place(t)}this.target=t,this.setChairs()}update(t,e){if(Math.abs(this.target-this.columns)<0.001)return;let n=e>0?1-Math.exp(-t*6):1;if(this.columns+=(this.target-this.columns)*n,Math.abs(this.target-this.columns)<0.005)this.columns=this.target;this.place(this.columns)}place(t){let e=Tr(this.index,t),n=(e.x0+e.x1)/2,i=(e.z0+e.z1)/2,s=e.x1-e.x0,r=e.z1-e.z0;this.top.scale.set(s,0.05,r),this.top.position.set(n,Qe-0.025,i),this.edge.scale.set(s-0.06,0.008,r-0.06),this.edge.position.set(n,Qe+0.002,i),this.apron.scale.set(s-0.1,0.08,r-0.1),this.apron.position.set(n,Qe-0.09,i);let a=Qe-0.05;this.legs.forEach((l,c)=>{l.scale.set(0.07,a,0.07),l.position.set(c%2===0?e.x0+0.08:e.x1-0.08,a/2,c<2?e.z0+0.08:e.z1-0.08)});let o=Za(this.index,t);this.rug.scale.set(o.x1-o.x0,0.012,o.z1-o.z0),this.rug.position.set((o.x0+o.x1)/2,0.006,(o.z0+o.z1)/2)}setChairs(){let t=new $t,e=new Ze,n=new P(0,1,0),i=this.index*(ci+2);for(let s=0;s<ci;s+=1){let r=wr(this.index,s),a=this.shown>0&&qa(s)<this.shown;e.setFromAxisAngle(n,r.yaw),t.compose(new P(r.x,0,r.z),e,new P().setScalar(a?1:0)),this.chairs.setMatrixAt(i+s,t)}Cr(this.index).forEach((s,r)=>{e.setFromAxisAngle(n,s.yaw),t.compose(new P(s.x,0,s.z),e,new P().setScalar(this.shown===0?1:0)),this.chairs.setMatrixAt(i+ci+r,t)}),this.chairs.instanceMatrix.needsUpdate=!0,this.chairs.computeBoundingSphere()}}class Zc{title;root=new se;slots=[];walls=[];door=new se;steam=[];hourHand=new se;minuteHand=new se;tally;tallyKey="";doorAngle=0;constructor(t){this.title=t;this.root.add(this.floor()),this.tally=ui(640,256,()=>{return}),this.backWall(),this.leftWall(),this.rightWall(),this.root.add(this.furniture()),this.lamps(),this.lights();let e=new Ma(iv(),ss,li*(ci+2));e.castShadow=!0,e.receiveShadow=!0,e.frustumCulled=!1,this.root.add(e);for(let n=0;n<li;n+=1){let i=new Af(n,e);this.slots.push(i),this.root.add(i.table,i.decor)}this.setTally(0,0,0)}setTally(t,e,n){let i=`${t}|${e}|${n}`;if(i===this.tallyKey)return;this.tallyKey=i;let s=this.tally.image,r=s.getContext("2d");if(r===null)return;r.fillStyle=Tf,r.fillRect(0,0,s.width,s.height),r.fillStyle="rgba(255,255,255,0.04)";for(let o=0;o<18;o+=1)r.fillRect(o*97%600,o*53%230,60,3);r.fillStyle=fi,r.textAlign="center",r.textBaseline="middle",r.font='700 58px ui-rounded, "Arial Rounded MT Bold", system-ui, sans-serif',r.fillText(this.title.toUpperCase(),s.width/2,70),r.fillStyle="rgba(244,241,230,0.45)",r.fillRect(60,118,s.width-120,3);let a=[[bf,t],[ev,e],[nv,n]];r.font='700 64px ui-rounded, "Arial Rounded MT Bold", system-ui, sans-serif',a.forEach(([o,l],c)=>{let h=s.width*(2*c+1)/6;r.fillStyle=o,r.fillRect(h-62,162,36,36),r.fillStyle=fi,r.textAlign="left",r.fillText(String(l),h-12,182)}),this.tally.needsUpdate=!0}update(t,e,n,i,s){for(let l of this.walls)l.group.visible=i.clone().sub(l.point).dot(l.normal)>0;let r=s?1.9:0;this.doorAngle+=(r-this.doorAngle)*(n>0?1-Math.exp(-t*8):1),this.door.rotation.y=this.doorAngle,this.steam.forEach((l,c)=>{let h=((e*0.55+c/this.steam.length)%1+1)%1;l.position.y=1.62+h*0.6*n,l.material.opacity=n>0?0.55*(1-h):0,l.scale.setScalar(0.14+h*0.18)});let a=new Date,o=a.getMinutes()+a.getSeconds()/60;this.minuteHand.rotation.z=-(o/60)*Math.PI*2,this.hourHand.rotation.z=-((a.getHours()%12+o/60)/12)*Math.PI*2;for(let l of this.slots)l.update(t,n)}floor(){let t=new se,e=nf();e.repeat.set(oi/4,Va/4);let n=new Zt(new Ai(oi,Va),new Ri({map:e}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);let i=new vn;return i.box(gf,oi+0.4,0.45,Va+0.4,0,-0.5,0),i.box(pe,oi+0.44,0.06,0.06,0,-0.09,ye+0.2),i.box("#a7a29a",1.9,0.12,1.8,_e+1.05,-0.121,At.z),i.box("#8f8a83",1.9,0.02,0.06,_e+1.05,-0.002,At.z+0.9),i.box("#8a6d1f",0.62,0.012,0.95,_e-0.45,0,At.z),t.add(i.build(!1,!1,!0)),t}wall(t,e,n){let i=new se,s=new vn;n(s,i),i.add(s.build(!1,!1,!0)),this.root.add(i),this.walls.push({group:i,point:e,normal:t})}plane(t,e,n,i,s,r,a,o=!1){let l=new Zt(new Ai(e,n),o?new je({map:t}):new Ri({map:t}));return l.position.set(i,s,r),l.rotation.y=a,l.receiveShadow=!o,l}backWall(){let t=-ye;this.wall(new P(0,0,1),new P(0,0,t),(e,n)=>{e.box(Lr,oi+0.4,xn,0.2,0,0,t-0.1),e.box(ro,oi,0.95,0.03,0,0,t+0.015),e.box(kc,oi,0.05,0.06,0,0.93,t+0.03),e.box(pe,oi+0.44,0.16,0.26,0,xn-0.12,t-0.07),e.box(pe,3.1,1.3,0.06,-2.6,1.5,t+0.03),n.add(this.plane(this.tally,2.94,1.14,-2.6,2.15,t+0.065,0)),e.box(pe,3,0.05,0.12,-2.6,1.46,t+0.06),e.box(fi,0.14,0.03,0.03,-1.6,1.51,t+0.08),e.box(pe,1.6,1.05,0.06,0.95,1.62,t+0.03),n.add(this.plane(rv(),1.48,0.93,0.95,2.145,t+0.065,0));let i=[en,_f,en,"#2f6f6a",en,en,"#e0a03a",en];for(let s of[1.85,2.4])e.box(Xs,2.3,0.04,0.24,4.95,s,t+0.12),e.box(pe,0.04,0.14,0.2,3.95,s-0.14,t+0.1),e.box(pe,0.04,0.14,0.2,5.95,s-0.14,t+0.1),i.forEach((r,a)=>e.box(r,0.12,0.13,0.12,4+a*0.27,s+0.04,t+0.13));e.box(Nn,1.05,1.35,0.05,-7.4,1.2,t+0.025),n.add(this.plane(av(),0.93,1.23,-7.4,1.875,t+0.055,0)),e.add(pe,Le,8.3,2.25,t+0.03,0,0.34,0.05,0.34,Math.PI/2),e.add(en,Le,8.3,2.25,t+0.06,0,0.3,0.02,0.3,Math.PI/2);for(let s=0;s<12;s+=1){let r=s/12*Math.PI*2;e.box(we,0.03,s%3===0?0.06:0.03,0.01,8.3+Math.sin(r)*0.24,2.25+Math.cos(r)*0.24-0.02,t+0.075)}for(let[s,r,a]of[[this.hourHand,0.15,0.035],[this.minuteHand,0.23,0.025]]){s.position.set(8.3,2.25,t+(s===this.hourHand?0.085:0.097));let o=new Zt(yn,Jn(we));o.scale.set(a,r,0.01),o.position.y=r/2-0.02,s.add(o),n.add(s)}e.box(pe,11.4,0.14,0.14,0.9,xn-0.3,-5.75)})}leftWall(){let t=-_e;this.wall(new P(1,0,0),new P(t,0,0),(e)=>{let n=-ye,i=ye+0.2;e.box(Lr,0.2,xn,i-n,t-0.1,0,(n+i)/2),e.box(ro,0.03,0.95,ye-n-0.03,t+0.015,0,(n+0.03+ye)/2),e.box(kc,0.06,0.05,ye+0.01-(n+0.06),t+0.03,0.93,(n+0.06+ye+0.01)/2),e.box(pe,0.26,0.16,i+0.02-(n+0.06),t-0.07,xn-0.12,(n+0.06+i+0.02)/2);let[s,r]=Dd,a=(s+r)/2;e.box(pe,0.05,1.05,r-s+0.1,t+0.025,1.05,a),e.box("#c8a27a",0.03,0.93,r-s-0.02,t+0.05,1.11,a);let o=Sf(31);for(let l=0;l<9;l+=1){let c=s+0.15+o()*(r-s-0.3),h=1.2+o()*0.65;e.box(yf[l%yf.length]??"#ffd84d",0.012,0.17,0.17,t+0.07+l*0.003,h,c),e.box("#e0564b",0.02,0.025,0.025,t+0.09+l*0.003,h+0.13,c)}e.box(Nn,0.05,0.8,1.1,t+0.025,1.45,4.9),e.box("#2f6f6a",0.02,0.68,0.98,t+0.05,1.51,4.9),e.box("#ffd84d",0.02,0.2,0.2,t+0.065,1.95,4.9),e.box(fi,0.02,0.04,0.6,t+0.065,1.72,4.9),e.box(fi,0.02,0.04,0.45,t+0.065,1.62,4.9)})}rightWall(){let t=_e,e=At.z-At.width/2,n=At.z+At.width/2,i=2.15;this.wall(new P(-1,0,0),new P(t,0,0),(s,r)=>{let a=-ye,o=ye+0.2;s.box(Lr,0.2,xn,e-a,t+0.1,0,(a+e)/2),s.box(Lr,0.2,xn,o-n,t+0.1,0,(n+o)/2),s.box(Lr,0.2,xn-2.15,At.width,t+0.1,2.15,At.z),s.box(ro,0.03,0.95,e-0.1-(a+0.03),t-0.015,0,(a+0.03+e-0.1)/2),s.box(ro,0.03,0.95,ye-(n+0.1),t-0.015,0,(n+0.1+ye)/2),s.box(pe,0.26,0.16,o+0.02-(a+0.06),t+0.07,xn-0.12,(a+0.06+o+0.02)/2);let l=ov();for(let[d,u]of Ud){let p=(d+u)/2,_=u-d;r.add(this.plane(l,0.01+_-0.12,1.28,t-0.012,1.74,p,-Math.PI/2,!0)),s.box(Nn,0.08,0.07,_+0.06,t-0.04,2.38,p),s.box(Nn,0.14,0.06,_+0.16,t-0.07,1.04,p),s.box(Nn,0.09,1.36,0.07,t-0.045,1.06,d),s.box(Nn,0.09,1.36,0.07,t-0.045,1.06,u),s.box(Nn,0.05,1.3,0.04,t-0.03,1.08,p),s.box(Nn,0.06,0.04,_,t-0.035,1.72,p)}s.box(pe,0.28,2.1999999999999997,0.1,t+0.05,0,e-0.03),s.box(pe,0.28,2.1999999999999997,0.1,t+0.05,0,n+0.03),s.box(pe,0.27,0.1,At.width+0.2,t+0.04,2.13,At.z),this.door.position.set(t+0.12,0,e+0.01);let c=new vn;c.box(Xs,0.06,2.13,At.width-0.03,0,0,(At.width-0.03)/2),c.box(pe,0.07,0.05,At.width-0.15,0,0.5,(At.width-0.03)/2),c.box(Gc,0.1,0.04,0.12,-0.05,1,At.width-0.16),c.box(en,0.075,0.24,0.5,0,1.25,(At.width-0.03)/2),c.box(bf,0.08,0.06,0.3,0,1.33,(At.width-0.03)/2),this.door.add(c.build());let h=new vn;h.box("#bfe3f2",0.07,0.42,0.62,0,1.55,(At.width-0.03)/2),this.door.add(h.build(!0)),r.add(this.door)})}furniture(){let t=new vn,e=Sf(11),n=(cn.x0+cn.x1)/2,i=(cn.z0+cn.z1)/2,s=cn.x1-cn.x0,r=cn.z1-cn.z0;t.box(gf,s-0.04,0.08,r-0.06,n,0,i),t.box(Qy,s,Ar-0.08,r,n,0.06,i),t.box(jy,s+0.1,0.07,r+0.12,n,Ar-0.07,i+0.04),t.box(kc,s+0.1,0.03,0.04,n,Ar-0.1,cn.z1+0.09);for(let g=cn.x0+0.45;g<cn.x1;g+=0.9)t.box(pe,0.03,0.8,0.02,g,0.1,cn.z1+0.005);let a=Ar,o=5.3,l=-6.45;t.box(Gc,0.85,0.5,0.5,o,a,l),t.box(tv,0.86,0.03,0.51,o,a+0.5,l);for(let g=0;g<3;g+=1)t.box(en,0.1,0.09,0.1,o-0.25+g*0.25,a+0.53,l);t.box("#2f343b",0.24,0.16,0.02,o-0.22,a+0.26,l+0.255),t.box("#e0564b",0.05,0.04,0.02,o-0.22,a+0.3,l+0.265),t.box(rs,0.11,0.08,0.14,o+0.08,a+0.12,l+0.3),t.box(rs,0.11,0.08,0.14,o+0.3,a+0.12,l+0.3),t.box(rs,0.6,0.03,0.2,o+0.1,a,l+0.33),t.box(en,0.08,0.07,0.08,o+0.08,a+0.03,l+0.32),t.box(en,0.08,0.07,0.08,o+0.3,a+0.03,l+0.32),t.box(rs,0.24,0.32,0.26,4.4,a,l),t.add("#6b4a32",Ef,4.4,a+0.44,l,0,0.13,0.24,0.13),t.box(Nn,1.2,0.06,0.55,2.2,a,-6.35);for(let[g,b]of["#f0a58c","#8a623f","#e9c46a","#d27aa8"].entries())t.box(en,0.2,0.02,0.2,1.8+g*0.27,a+0.06,-6.35),t.box(b,0.15,0.1,0.15,1.8+g*0.27,a+0.08,-6.35),t.box(en,0.15,0.02,0.15,1.8+g*0.27,a+0.18,-6.35);t.box(ao,0.38,0.2,0.3,-1.5,a,-6.4),t.box(ao,0.3,0.2,0.05,-1.5,a+0.24,-6.48),t.box("#cfd8ea",0.24,0.13,0.01,-1.5,a+0.28,-6.45);for(let g=0;g<3;g+=1)t.add("#e8d5a8",Le,-3.7+g*0.3,a+0.13,-6.4,0,0.09,0.26,0.09),t.add(Xs,Le,-3.7+g*0.3,a+0.28,-6.4,0,0.095,0.04,0.095);for(let g=0;g<4;g+=1)t.box(en,0.13,0.08,0.13,0.3,a+g*0.085,-6.35);t.box(_f,0.2,0.2,0.2,-4.25,a,-6.4),Wc(t,-4.25,a+0.35,-6.4,0.16,e);let c=(tn.x0+tn.x1)/2,h=(tn.z0+tn.z1)/2,d=tn.z1-tn.z0;t.box(Xc,0.03,ts-0.01,d-0.1,tn.x0+0.02,0,h),t.box(pe,0.45,ts,0.05,c,0,tn.z0+0.025),t.box(pe,0.45,ts,0.05,c,0,tn.z1-0.025);for(let g of[0.04,0.55,1.05,1.55,2.05]){if(t.box(Xs,0.435,0.04,d-0.1,c+0.0025,g,h),g>2)continue;let b=tn.z0+0.07;while(b<tn.z1-0.12){let G=0.05+e()*0.07,I=0.26+e()*0.16;if(e()<0.08){b+=G+0.08;continue}t.box(xf[Math.floor(e()*xf.length)]??"#3f6fb0",0.3,I,G-0.006,c+0.03,g+0.04,b+G/2),b+=G}}t.box(pe,0.47,0.05,d,c,ts,h),t.box("#b5653a",0.18,0.16,0.18,c,ts+0.05,tn.z0+0.4),Wc(t,c,ts+0.32,tn.z0+0.4,0.14,e);let u=(hi.x0+hi.x1)/2,p=(hi.z0+hi.z1)/2;t.box("#2f6f6a",0.8,0.3,0.8,u,0.03,p),t.box("#3a8580",0.6,0.08,0.62,u+0.08,0.3,p),t.box("#2f6f6a",0.18,0.8,0.78,hi.x0+0.09,0.03,p),t.box("#28605b",0.835,0.52,0.13,u+0.0125,0.03,hi.z0+0.055),t.box("#28605b",0.835,0.52,0.13,u+0.0125,0.03,hi.z1-0.055);let _=(qn.x0+qn.x1)/2,S=(qn.z0+qn.z1)/2;t.add(Xs,Le,_,0.55,S,0,0.22,0.03,0.22),t.add(pe,Le,_,0.27,S,0,0.03,0.54,0.03),t.add(pe,Le,_,0.01,S,0,0.14,0.02,0.14),t.add(ao,Le,_,0.62,S,0,0.06,0.1,0.06),t.add(rs,Le,_,0.75,S,0,0.012,0.2,0.012);let m=(Ae.x0+Ae.x1)/2,f=(Ae.z0+Ae.z1)/2,E=Ae.z1-Ae.z0;t.box("#a8523e",0.85,0.3,E,m,0.03,f);for(let g of[1.95,2.7,3.45])t.box("#bf6650",0.6,0.1,0.72,m+0.13,0.3,g);t.box("#a8523e",0.22,0.82,E-0.02,Ae.x0+0.11,0.03,f),t.box("#934634",0.875,0.52,0.16,m+0.0075,0.03,Ae.z0+0.07),t.box("#934634",0.875,0.52,0.16,m+0.0075,0.03,Ae.z1-0.07),t.add("#ffd84d",yn,Ae.x0+0.3,0.52,Ae.z1-0.38,0.3,0.1,0.3,0.3);for(let[g,b]of[[Ae.x0+0.08,Ae.z0+0.08],[Ae.x1-0.08,Ae.z0+0.08],[Ae.x0+0.08,Ae.z1-0.08],[Ae.x1-0.08,Ae.z1-0.08]])t.box(pe,0.06,0.03,0.06,g,0,b);let w=(He.x0+He.x1)/2,v=(He.z0+He.z1)/2;t.box(Xs,He.x1-He.x0,0.04,He.z1-He.z0,w,0.32,v);for(let[g,b]of[[He.x0+0.05,He.z0+0.05],[He.x1-0.05,He.z0+0.05],[He.x0+0.05,He.z1-0.05],[He.x1-0.05,He.z1-0.05]])t.box(pe,0.05,0.32,0.05,g,0,b);t.box("#3f6fb0",0.22,0.04,0.3,w,0.36,v-0.2,0.3),t.box(en,0.09,0.09,0.09,w+0.05,0.36,v+0.22);let T=(Yn.x0+Yn.x1)/2,R=(Yn.z0+Yn.z1)/2,A=Yn.z1-Yn.z0;t.box(wf,0.4,bc-0.05,A-0.1,T+0.02,0,R),t.box(Vc,Yn.x1-Yn.x0+0.06,0.06,A,T-0.03,bc-0.05,R);for(let g of Rr){if(g.kind!=="bar")continue;t.add(qc,Le,g.x,g.sit-0.03,g.z,0,0.18,0.06,0.18),t.add(rs,Le,g.x,(g.sit-0.06)/2,g.z,0,0.03,g.sit-0.06,0.03),t.add(rs,Le,g.x,0.01,g.z,0,0.15,0.02,0.15),t.add(Gc,Le,g.x,0.22,g.z,0,0.13,0.015,0.13)}for(let g of[...Sc,{x:_e+1.65,z:At.z+0.6}])t.add("#b5653a",Ef,g.x,0.19,g.z,0,0.21,0.38,0.21),t.add("#5b4030",Le,g.x,0.385,g.z,0,0.17,0.03,0.17),t.add("#6b4a32",Le,g.x,0.6,g.z,0,0.025,0.5,0.025),Wc(t,g.x,0.75,g.z,0.3,e);return t.build()}lamps(){let t=new vn,e=new vn;for(let r of[-2.6,0.9,4.4])t.box(we,0.02,0.52,0.02,r,2.18,-5.75),t.add(ao,Mf,r,2.12,-5.75,0,0.28,0.24,0.28),e.box("#ffe9a8",0.12,0.08,0.12,r,1.96,-5.75);let n=(qn.x0+qn.x1)/2,i=(qn.z0+qn.z1)/2;e.add("#ffe2a8",Mf,n,0.92,i,0,0.15,0.18,0.15),this.root.add(t.build(),e.build(!0));let s=ui(64,64,(r)=>{let a=r.createRadialGradient(32,32,2,32,32,30);a.addColorStop(0,"rgba(255,255,255,0.9)"),a.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=a,r.fillRect(0,0,64,64)});for(let r=0;r<4;r+=1){let a=new Wn(new In({map:s,transparent:!0,depthWrite:!1}));a.position.set(5.1+r%2*0.25,1.7,-6.45),this.steam.push(a),this.root.add(a)}}lights(){this.root.add(new Ca("#fff6ea","#8a6a4a",1.5));let t=new Na("#fff0d6",2.1);t.position.set(9,15,7),t.target.position.set(0,0,-0.5),t.castShadow=!0,t.shadow.mapSize.set(2048,2048);let e=15;t.shadow.camera.left=-e,t.shadow.camera.right=e,t.shadow.camera.top=e,t.shadow.camera.bottom=-e,t.shadow.camera.near=1,t.shadow.camera.far=45,t.shadow.bias=-0.0004,t.shadow.normalBias=0.02,this.root.add(t,t.target);for(let n of[-1.2,3.6]){let i=new La("#ffc875",5,9,1.6);i.position.set(n,2,-5.5),this.root.add(i)}}}function Wc(t,e,n,i,s,r){for(let a=0;a<4;a+=1){let o=a*1.7+r(),l=a===0?0:s*0.7,c=s*(0.7+r()*0.4);t.add(Yc[a%Yc.length]??"#4d8f4a",sv,e+Math.sin(o)*l,n+(a===0?s*0.9:r()*s*0.6),i+Math.cos(o)*l,r()*3,c,c*1.1,c)}}function rv(){return ui(296,186,(t)=>{t.fillStyle=Tf,t.fillRect(0,0,296,186);let e=[".a.a...","..a.a..",".......","#####..","#ccc###","#ccc#.#",".###..."];[{"#":fi,a:"#b4bdb6",c:"#8a623f"},{"#":fi,a:"#b4bdb6",c:"#e9c46a"},{"#":fi,a:"#b4bdb6",c:"#8fd18f"}].forEach((i,s)=>{Gs(t,e,i,26,20+s*56,5),t.fillStyle="rgba(244,241,230,0.75)",t.fillRect(76,42+s*56,120,4),t.fillRect(76,52+s*56,70,3),t.fillStyle=fi,t.fillRect(222,36+s*56,8,22),t.fillRect(236,36+s*56,22,6),t.fillRect(236,52+s*56,22,6)})},!0)}function av(){return ui(186,246,(t)=>{t.fillStyle="#f7f0e1",t.fillRect(0,0,186,246),t.fillStyle="#e9a34f",t.fillRect(0,170,186,76),Gs(t,["...a...a....","....a...a...","...a...a....","............","#########...","#ccccccc####","#ccccccc#..#","#ccccccc#..#","#ccccccc####",".#ccccc#....","..#####....."],{"#":we,c:"#d97757",a:"#b4bdb6"},33,60,11),t.fillStyle=we,t.fillRect(30,196,126,8),t.fillRect(54,214,78,6)},!0)}function ov(){return ui(256,160,(t)=>{let e=t.createLinearGradient(0,0,0,160);e.addColorStop(0,"#9fd3ee"),e.addColorStop(0.75,"#e6f4f3"),t.fillStyle=e,t.fillRect(0,0,256,160),t.fillStyle="rgba(255,255,255,0.85)",t.fillRect(30,30,60,12),t.fillRect(46,22,30,10),t.fillRect(160,50,54,10),t.fillStyle="#7fb79a";for(let n=0;n<256;n+=22)t.fillRect(n,112-n*7%20,26,60);t.fillStyle="#5e9a7c";for(let n=11;n<256;n+=30)t.fillRect(n,128-n*5%14,22,40)})}class Jc{layer;tags=new Map;constructor(t){this.layer=document.createElement("div"),this.layer.className="tags",this.layer.setAttribute("aria-hidden","true"),t.append(this.layer)}tag(t,e){let n=this.tags.get(t);if(n===void 0){let i=document.createElement("div");i.className=e==="table"?"placard":e==="pet"?"tag pet-tag":"tag";let s=document.createElement("span");s.className="tag-name";let r=document.createElement("span");r.className="tag-says",i.append(s,r),i.hidden=!0,this.layer.append(i),n={root:i,name:s,says:r,x:NaN,y:NaN,depth:NaN,isShown:!1},this.tags.set(t,n)}return n}set(t,e,n,i,s){let r=this.tag(t,e);if(r.name.textContent!==n)r.name.textContent=n;if(r.says.textContent!==i)r.says.textContent=i;if((r.root.dataset.phase??"")!==s)r.root.dataset.phase=s}mark(t,e){let n=this.tags.get(t);if(n!==void 0)n.root.classList.toggle("is-marked",e)}place(t,e,n,i,s){let r=this.tags.get(t);if(r===void 0)return;if(s!==r.isShown)r.isShown=s,r.root.hidden=!s;if(!s)return;if(!(Math.abs(e-r.x)<=0.3&&Math.abs(n-r.y)<=0.3))r.x=e,r.y=n,r.root.style.transform=`translate3d(${e.toFixed(1)}px, ${n.toFixed(1)}px, 0)`;let a=Math.round((1-i)*1000);if(a!==r.depth)r.depth=a,r.root.style.zIndex=String(a)}setSize(t){if(this.layer.dataset.size!==t)this.layer.dataset.size=t}remove(t){let e=this.tags.get(t);if(e===void 0)return;e.root.remove(),this.tags.delete(t)}keys(){return[...this.tags.keys()]}}var Cf=8,lv=45000,cv=1300,hv=900,uv=15*Math.PI/180,oo=1,Kc=0.72,dv=34;function Rf(t){return{key:t.key,kind:t.kind,phase:t.phase,act:t.act,tool:t.tool,label:t.label,says:t.says}}function $c(t){return t.phase==="done"||t.phase==="fail"}function fv(t){if(t.lines.length<=ci)return t.lines;return t.lines.map((e,n)=>({line:e,index:n})).sort((e,n)=>Number(n.line.depth===0)-Number(e.line.depth===0)||Number($c(e.line))-Number($c(n.line))||e.index-n.index).slice(0,ci).sort((e,n)=>e.index-n.index).map(({line:e})=>e)}class Pf{host;options;motion;now=performance.now();nav=new eo({x0:-_e,z0:-ye,x1:_e,z1:ye},0.2);petNav=new eo({x0:-_e,z0:-ye,x1:_e,z1:ye},0.2);renderer;scene=new xa;camera=new Ye(dv,1,0.5,140);controls;room;pets=[];hasPets=!1;tags;guests=new Map;tables=new Map;slotOwners=Array(li).fill(void 0);taken=new Map;departed=new Set;timer=new Da;pointer=new Rt(9,9);raycaster=new Ua;box=new Pn;projected=new P;hasView=!1;isRunning=!0;isOnScreen=!0;frame=0;hovered="";marked="";hoveredPet;chosenPet;chosenAt=0;balls=new Map;hearts=[];heartMaterial=new In({map:sf(),transparent:!0,depthWrite:!1});mark=new Zt(new ri(0.16,0.24,24),new je({color:"#fff8ea",transparent:!0,opacity:0,depthWrite:!1}));markAt=-1/0;floorPlane=new sn(new P(0,1,0),0);pressedAt;tagSize="full";hasUserMoved=!1;flight;hint;constructor(t,e){this.host=t;this.options=e;this.motion=e.reducedMotion?0:1,this.renderer=new mc({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Oi,this.renderer.domElement.className="stage-canvas",this.renderer.domElement.addEventListener("webglcontextlost",(s)=>s.preventDefault()),t.append(this.renderer.domElement),this.scene.background=new Bt("#1c2521"),this.room=new Zc(e.title),this.scene.add(this.room.root),this.tags=new Jc(t),this.mark.rotation.x=-Math.PI/2,this.mark.visible=!1,this.scene.add(this.mark),this.rebuildNav(),this.controls=new xc(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=0.08,this.controls.minDistance=5,this.controls.maxDistance=46,this.controls.minPolarAngle=0.2,this.controls.maxPolarAngle=1.38,this.controls.minAzimuthAngle=-1.7,this.controls.maxAzimuthAngle=1.7,this.controls.screenSpacePanning=!1,this.controls.addEventListener("start",()=>{this.hasUserMoved=!0,this.flight=void 0,this.hint.classList.add("is-gone")});let n=document.createElement("button");n.type="button",n.className="stage-reset",n.textContent=e.reset,n.addEventListener("click",()=>{this.hasUserMoved=!1,this.frameRoom(!1)}),this.hint=document.createElement("p"),this.hint.className="stage-hint",this.hint.textContent=e.hint,t.append(n,this.hint);let i=this.renderer.domElement;i.addEventListener("pointermove",(s)=>this.aim(s)),i.addEventListener("pointerleave",()=>this.pointer.set(9,9)),i.addEventListener("pointerdown",(s)=>{this.pressedAt=s.isPrimary&&s.button===0?{x:s.clientX,y:s.clientY,id:s.pointerId}:void 0}),i.addEventListener("pointerup",(s)=>{let r=this.pressedAt;if(this.pressedAt=void 0,r===void 0||s.pointerId!==r.id||Math.hypot(s.clientX-r.x,s.clientY-r.y)>6)return;this.aim(s),this.click()}),window.addEventListener("keydown",(s)=>{if(s.key==="Escape")this.choosePet(void 0)}),new ResizeObserver(()=>this.resize()).observe(t),new IntersectionObserver((s)=>{this.isOnScreen=s.some((r)=>r.isIntersecting),this.wake()}).observe(t),this.resize(),this.frameRoom(!0),this.wake()}update(t){this.now=performance.now();let e=!this.hasView;this.hasView=!0,this.room.setTally(t.busy,t.asking,t.idle);let n=!1,i=new Set,s=new Set,r=new Set;for(let a of t.tables.filter((o)=>o.inPicture)){let o=this.tables.get(a.id);if(o===void 0){let l=[...Array(li).keys()].filter((h)=>this.slotOwners[h]!==void 0),c=Id(l);if(c===void 0)continue;o={id:a.id,slot:c,title:"",app:"",isAsking:!1,chairs:new Map,isClosing:!1},this.tables.set(a.id,o),this.slotOwners[c]=a.id,n=!0}i.add(a.id),o.title=a.title,o.app=a.app,o.isClosing=!1,o.isAsking=a.lines.some((l)=>l.phase==="ask");for(let l of fv(a)){if(r.add(l.key),this.departed.has(l.key))continue;s.add(l.key);let c=this.guests.get(l.key);if(c!==void 0&&!c.isLeaving){c.line=Rf(l);continue}if(c!==void 0)continue;if(!e&&$c(l))continue;if(!this.seat(o,l))continue;let h=new Uc(Rf(l),this.now,Ci(l.key));this.guests.set(l.key,h),this.scene.add(h.body.root,h.body.laptop),h.arrive(this,!e),n=!0}}for(let a of this.tables.values())if(!i.has(a.id))a.isClosing=!0;for(let a of this.guests.values())if(!s.has(a.key)&&!a.isLeaving)a.leave(this);for(let a of this.departed)if(!r.has(a))this.departed.delete(a);if(this.layTables()||n)this.rebuildNav();this.wake()}highlight(t){this.marked=t??"",this.wake()}pause(){this.isRunning=!1}resume(){this.isRunning=!0,this.timer.reset(),this.wake()}setReducedMotion(t){this.motion=t?0:1}setPets(t){this.now=performance.now();let e=!this.hasPets;this.hasPets=!0;for(let n of["cat","dog"]){let i=Math.max(0,Math.min(Cf,Math.floor(t[n]||0))),s=this.pets.filter((r)=>r.species===n&&!r.isLeaving);for(let r=0;s.length<i;r+=1){let a=`${n}:${r}`;if(this.pets.some((l)=>l.id===a))continue;let o=new Hc(n,a,this.now);this.pets.push(o),s.push(o),this.scene.add(o.root),o.enter(this,!e)}s.sort((r,a)=>r.id.localeCompare(a.id,void 0,{numeric:!0}));for(let r of s.slice(i))r.leave(this)}this.wake()}tableOf(t){for(let e of this.tables.values())if(e.chairs.has(t.key))return e;return}chairOf(t){let e=this.tableOf(t),n=e?.chairs.get(t.key);return e===void 0||n===void 0?void 0:wr(e.slot,n)}crewOf(t){let e=this.tableOf(t);if(e===void 0)return[];let n=[];for(let i of e.chairs.keys()){let s=this.guests.get(i);if(s===void 0||s===t||s.isLeaving||s.line.kind==="main")continue;if(s.line.phase==="think"||s.line.phase==="work"||s.line.phase==="ask")n.push(s)}return n}isCrewBusy(t){return this.crewOf(t).length>0}crewChairs(t){return this.crewOf(t).filter((e)=>e.want==="seat"||e.want==="think").map((e)=>this.chairOf(e)).filter((e)=>e!==void 0)}spots(){let t=[...Rr];for(let e=0;e<li;e+=1)if(this.slotOwners[e]===void 0)t.push(...Cr(e));return t}claim(t,e,n){let i=this.spots().filter((r)=>{if(!e.includes(r.kind))return!1;let a=this.taken.get(r.id);return a===void 0||a===t.key}),s=n===void 0?i[Math.floor(Math.random()*i.length)]:i.find((r)=>r.id===n.id);if(s!==void 0)this.taken.set(s.id,t.key);return s}hasFree(t){return this.spots().some((e)=>t.includes(e.kind)&&!this.taken.has(e.id))}release(t){for(let[e,n]of this.taken)if(n===t.key)this.taken.delete(e)}isOpen(t){return t.slot<0||this.slotOwners[t.slot]===void 0}petSpot(t){let e=this.pets.filter((n)=>!n.isLeaving&&n.isStill&&(n.petter===""||n.petter===t.key)).sort((n,i)=>Math.hypot(n.x-t.x,n.z-t.z)-Math.hypot(i.x-t.x,i.z-t.z));for(let n of e){let i=n.pettingPlace(this.nav);if(i===void 0)continue;for(let s of this.pets)if(s.petter===t.key)s.petter="";return n.petter=t.key,i}return}freeBed(t){let e=this.pets.filter((s)=>s!==t&&s.species==="cat"&&!s.isLeaving).map((s)=>s.goal),n=Fd.filter((s)=>!e.some((r)=>Math.hypot(r.x-s.x,r.z-s.z)<0.3)),i=n[Math.floor(Math.random()*n.length)];return i===void 0?void 0:this.petNav.nearestPoint(i)}besideResting(t){let e=[...this.guests.values()].filter((s)=>!s.isLeaving&&!s.isWalking&&(s.want==="idle"||s.want==="await")),n=e[Math.floor(t()*e.length)];if(n===void 0)return;let i=t()*Math.PI*2;return this.petNav.nearestPoint({x:n.x+Math.sin(i)*0.65,z:n.z+Math.cos(i)*0.65})}floorPoint(t,e,n=2){for(let i=0;i<40;i+=1){let s=e===void 0?{x:Be.x0+t()*(Be.x1-Be.x0),z:Be.z0+t()*(Be.z1-Be.z0)}:{x:e.x+(t()*2-1)*n,z:e.z+(t()*2-1)*n};if(s.x<Be.x0||s.x>Be.x1||s.z<Be.z0||s.z>Be.z1)continue;if(!this.petNav.isFree(s))continue;let r=!1;for(let a of this.guests.values())if(Math.hypot(a.x-s.x,a.z-s.z)<0.6)r=!0;if(!r)return s}return this.petNav.nearestPoint(e??{x:0,z:2})}bringBack(t){let e=this.camera.position,n=Gn.clamp(e.x,Be.x0+1,Be.x1-1),i=Gn.clamp(e.z,Be.z0+1,Be.z1-1);return this.petNav.nearestPoint({x:t.x+(n-t.x)*0.75,z:t.z+(i-t.z)*0.75})}cameraYaw(t,e){return Math.atan2(this.camera.position.x-t,this.camera.position.z-e)}seat(t,e){let n=new Set(t.chairs.values()),i=e.kind==="main"&&!n.has(0)?0:-1;for(let s=1;i<0&&s<ci;s+=1)if(!n.has(s))i=s;if(i<0)return!1;return t.chairs.set(e.key,i),!0}layTables(){let t=!1;for(let e=0;e<li;e+=1){let n=this.slotOwners[e],i=n===void 0?void 0:this.tables.get(n),s=this.room.slots[e];if(s===void 0)continue;let r=i===void 0?0:Nd(i.chairs.values());if(s.shown!==r)s.use(r,e%vc+2*Math.floor(e/vc)),t=!0}return t}rebuildNav(){for(let t of[this.nav,this.petNav]){t.clear();for(let e of Od)t.block(e)}for(let t of Rr)if(t.kind==="bar")this.petNav.block(Mc(t),zs);for(let t of zd)this.petNav.block(t,zs);for(let t=0;t<li;t+=1){let e=this.room.slots[t];if(e===void 0)continue;for(let n of[this.nav,this.petNav])if(e.shown>0)n.block(Tr(t,e.shown));else n.blockCircle(Hs(t),Hs(t).r);for(let n of Bd(t,e.shown))this.petNav.block(Mc(n),zs)}for(let t of this.guests.values())t.reroute(this);for(let t of this.balls.values()){if(t.state==="carried"||this.petNav.isFree(t))continue;let e=this.petNav.nearestPoint(t);t.x=e.x,t.z=e.z}for(let t of this.pets)t.reroute(this)}tidy(){let t=!1;for(let e of[...this.guests.values()]){if(!e.isGone)continue;this.release(e);for(let n of this.pets)if(n.petter===e.key)n.petter="";if(this.scene.remove(e.body.root,e.body.laptop),e.body.dispose(),this.tags.remove(e.key),this.guests.delete(e.key),!e.isLeaving)this.departed.add(e.key);for(let n of this.tables.values())if(n.chairs.delete(e.key))t=!0}for(let e of[...this.tables.values()]){if(!e.isClosing||e.chairs.size>0)continue;this.tables.delete(e.id),this.slotOwners[e.slot]=void 0,this.tags.remove(`table:${e.id}`),t=!0}if(t&&this.layTables())this.rebuildNav()}resize(){let t=Math.max(1,this.host.clientWidth),e=Math.max(1,this.host.clientHeight);if(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),!this.hasUserMoved)this.frameRoom(!0);this.wake()}frameRoom(t){let e=new P(0.3,0.4,0.2),n=this.camera.aspect<1.15?Math.PI/2:0,i=new P(Math.sin(n)*Math.sin(Kc),Math.cos(Kc),Math.cos(n)*Math.sin(Kc)),s=[];for(let c of[-_e-0.2,_e+0.2])for(let h of[-ye-0.2,ye+0.2])s.push(new P(c,-0.3,h),new P(c,xn,Math.min(h,ye)));let r=this.camera.clone(),a=4,o=120;for(let c=0;c<24;c+=1){let h=(a+o)/2;if(r.position.copy(e).addScaledVector(i,h),r.lookAt(e),r.updateMatrixWorld(),s.every((u)=>{let p=u.clone().project(r);return Math.abs(p.x)<=0.97&&Math.abs(p.y)<=0.95}))o=h;else a=h}this.controls.maxDistance=Math.max(46,o*1.3);let l=e.clone().addScaledVector(i,o);if(t||this.motion===0)this.flight=void 0,this.camera.position.copy(l),this.controls.target.copy(e),this.controls.update();else this.flight={from:this.camera.position.clone(),fromTarget:this.controls.target.clone(),to:l,toTarget:e,t:0};this.wake()}aim(t){let e=this.renderer.domElement.getBoundingClientRect();this.pointer.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),this.wake()}pick(){let t={key:"",pet:void 0};if(Math.abs(this.pointer.x)>1||Math.abs(this.pointer.y)>1)return t;this.raycaster.setFromCamera(this.pointer,this.camera);let e=t,n=1/0,i=new P,s=(c)=>{if(this.raycaster.ray.intersectBox(this.box,i)===null)return;let h=i.distanceTo(this.raycaster.ray.origin);if(h<n)n=h,e=c},r=[...this.guests.values()].filter((c)=>!c.isLeaving&&c.body.presence>=0.5),a=this.pets.filter((c)=>!c.isLeaving&&c.isPresent),o=[],l=(c,h)=>{o.length=0,c.traverseVisible((u)=>{if(u instanceof Zt)o.push(u)});let d=this.raycaster.intersectObjects(o,!1)[0];if(d!==void 0&&d.distance<n)n=d.distance,e=h};for(let c of r)if(this.box.min.set(c.x-oo,-0.1,c.z-oo),this.box.max.set(c.x+oo,c.body.headTop()+0.5,c.z+oo),this.raycaster.ray.intersectsBox(this.box))l(c.body.root,{key:c.key,pet:void 0});for(let c of a)l(c.root,{key:"",pet:c});if(e!==t)return e;for(let c of r)this.box.min.set(c.x-0.3,0,c.z-0.3),this.box.max.set(c.x+0.3,c.body.headTop()+0.1,c.z+0.3),s({key:c.key,pet:void 0});for(let c of a)c.hitBox(this.box),s({key:"",pet:c});return e}click(){let{key:t,pet:e}=this.pick();if(e!==void 0){e.poke(this),this.choosePet(e),this.cheer(e);return}if(t!==""){this.choosePet(void 0),this.options.onPick(t);return}let n=this.chosenPet;if(n!==void 0){let i=this.raycaster.ray.intersectPlane(this.floorPlane,new P);if(i!==null&&i.x>Be.x0&&i.x<Be.x1&&i.z>Be.z0&&i.z<Be.z1){this.send(n,{x:i.x,z:i.z});return}}this.choosePet(void 0),this.options.onPick("")}choosePet(t){this.chosenPet=t,this.chosenAt=this.now,this.wake()}send(t,e){let n=this.petNav.nearestPoint(e);if(this.chosenAt=this.now,this.markAt=this.now,this.mark.position.set(n.x,0.02,n.z),t.species==="dog"){let i=this.balls.get(t.id);if(i===void 0)i=new zc,this.balls.set(t.id,i),this.scene.add(i.mesh);i.throwTo(n,this.now),t.fetch(i,this)}else if(t.call(n,this))this.cheer(t);this.wake()}cheer(t){for(let e=0;e<3;e+=1){let n=new Wn(this.heartMaterial.clone());n.scale.setScalar(0.16),n.position.set(t.x+(e-1)*0.14,t.height+0.05+e*0.05,t.z),this.scene.add(n),this.hearts.push({sprite:n,born:this.now+e*120})}}wake(){if(this.frame!==0||!this.isRunning||!this.isOnScreen)return;this.frame=requestAnimationFrame(()=>this.tick())}tick(){if(this.frame=0,!this.isRunning||!this.isOnScreen)return;this.timer.update();let t=Math.min(0.05,this.timer.getDelta()),e=this.timer.getElapsed();if(this.now=performance.now(),this.flight!==void 0){let r=this.flight;r.t=Math.min(1,r.t+t/0.9);let a=r.t*r.t*(3-2*r.t);if(this.camera.position.lerpVectors(r.from,r.to,a),this.controls.target.lerpVectors(r.fromTarget,r.toTarget,a),r.t>=1)this.flight=void 0}this.controls.target.x=Gn.clamp(this.controls.target.x,-_e,_e),this.controls.target.z=Gn.clamp(this.controls.target.z,-ye,ye),this.controls.target.y=Gn.clamp(this.controls.target.y,0,2),this.controls.update();for(let r of this.guests.values())r.update(t,e,this);this.keepApart(t);let n=!1;for(let r of[...this.pets]){if(r.petter!==""){let a=this.guests.get(r.petter);if(a===void 0||!a.isPetting)r.petter=""}if(r.update(t,e,this),r.x>_e-1.2&&Math.abs(r.z-At.z)<1.5)n=!0;if(!r.isGone)continue;this.scene.remove(r.root),r.dispose(),this.pets.splice(this.pets.indexOf(r),1)}for(let r of this.guests.values()){if(Math.hypot(r.x-At.inside.x,r.z-At.inside.z)<1.6&&r.isWalking)n=!0;if(r.x>_e-0.2&&r.body.presence>0)n=!0}for(let r of this.guests.values())if(r.isPetting&&!this.pets.some((a)=>a.petter===r.key))r.stopPetting(this);this.room.update(t,e,this.motion,this.camera.position,n),this.tidy(),this.play();let{key:i,pet:s}=this.pick();if(i!==this.hovered||s!==this.hoveredPet)this.hovered=i,this.hoveredPet=s,this.renderer.domElement.style.cursor=i===""&&s===void 0?"":"pointer";for(let r of this.guests.values()){let a=r.key===this.hovered||r.key===this.marked;r.body.setRing(a),this.tags.mark(r.key,a)}for(let r of this.pets)r.setRing(r===this.chosenPet||r===this.hoveredPet);this.renderer.render(this.scene,this.camera),this.placeTags(),this.wake()}play(){let t=this.chosenPet;if(t!==void 0&&(t.isLeaving||t.isGone||this.now-this.chosenAt>lv))this.chosenPet=void 0;for(let[n,i]of[...this.balls]){i.update(this.now,this.motion);let s=this.pets.find((r)=>r.id===n&&!r.isLeaving);if(i.state!=="carried"&&(i.isOld(this.now)||s===void 0))this.scene.remove(i.mesh),this.balls.delete(n)}for(let n of[...this.hearts]){let i=(this.now-n.born)/cv;if(n.sprite.visible=i>=0,i<0)continue;if(n.sprite.position.y+=0.012*this.motion,n.sprite.material.opacity=Math.max(0,1-i),i<1)continue;this.scene.remove(n.sprite),n.sprite.material.dispose(),this.hearts.splice(this.hearts.indexOf(n),1)}let e=(this.now-this.markAt)/hv;if(this.mark.visible=e<1,e<1)this.mark.scale.setScalar(1+e*0.8),this.mark.material.opacity=0.9*(1-e)}keepApart(t){let e=[...this.guests.values()].filter((s)=>!s.isGone&&s.body.presence>0.5),n=new Map,i=(s,r,a)=>{let o=n.get(s);if(o===void 0)n.set(s,{x:r,z:a});else n.set(s,{x:o.x+r,z:o.z+a})};for(let s=0;s<e.length;s+=1)for(let r=s+1;r<e.length;r+=1){let a=e[s],o=e[r];if(!a.isWalking&&!o.isWalking&&!(a.isStanding&&o.isStanding))continue;let l=o.x-a.x,c=o.z-a.z,h=Math.hypot(l,c);if(h>=0.46)continue;let d=Math.min(0.5*t*4,(0.46-h)/2),u=h<0.0001?0:l/h,p=h<0.0001?1:c/h,_=a.isGoing&&o.isGoing?0:uv,S=u*Math.cos(_)+p*Math.sin(_),m=p*Math.cos(_)-u*Math.sin(_),f=a.isStanding&&o.isStanding,E=a.isGoing&&o.isGoing&&Math.min(a.x,o.x)>At.inside.x-1?a.x>=o.x?a:o:void 0,w=(v)=>{if(v===E)return 0;if(v.isWalking)return E===void 0?d:Math.min(d,0.8*t);return f?Math.min(d,0.6*t):0};i(a,-S*w(a),-m*w(a)),i(o,S*w(o),m*w(o))}for(let[s,r]of n)s.nudge(r.x,r.z,t,this.nav)}placeTags(){let t=this.host.clientWidth,e=this.host.clientHeight,n=(h,d,u)=>{this.projected.set(h,d,u).project(this.camera);let p=this.projected.z<1&&Math.abs(this.projected.x)<1.05&&Math.abs(this.projected.y)<1.05;return{sx:(this.projected.x+1)/2*t,sy:(1-this.projected.y)/2*e,depth:Gn.clamp(this.camera.position.distanceTo(new P(h,d,u))/80,0,1),isIn:p}},i=n(this.controls.target.x,0,this.controls.target.z),s=n(this.controls.target.x,1,this.controls.target.z),r=Math.abs(i.sy-s.sy),a=3,o=this.tagSize==="full"?33:39,l=this.tagSize==="tiny"?25:19;this.tagSize=r>=o?"full":r>=l?"compact":"tiny",this.tags.setSize(this.tagSize);let c=new Set;for(let h of this.guests.values()){c.add(h.key);let{line:d}=h;this.tags.set(h.key,"guest",d.label,d.says,d.phase);let u=n(h.x,h.body.headTop()+0.48,h.z);this.tags.place(h.key,u.sx,u.sy,u.depth,u.isIn&&h.body.presence>0.6&&!h.isLeaving)}for(let h of this.tables.values()){let d=`table:${h.id}`;c.add(d);let u=this.room.slots[h.slot],p=Math.max(1,u?.shown??1),_=Za(h.slot,p);this.tags.set(d,"table",h.title,h.app,h.isAsking?"ask":"");let S=n(_.x0+0.05,0.02,_.z1);this.tags.place(d,S.sx,S.sy,0.99,S.isIn&&!h.isClosing)}for(let h of this.pets){let d=`pet:${h.id}`;c.add(d);let u=this.now<h.saidUntil;if(!(h===this.chosenPet||h===this.hoveredPet||u)){this.tags.place(d,0,0,1,!1);continue}let _=u?h.said:h===this.chosenPet?this.options.petHint[h.species]:"";this.tags.set(d,"pet",h.name,_,""),this.tags.mark(d,h===this.chosenPet);let S=n(h.x,h.height+0.3,h.z);this.tags.place(d,S.sx,S.sy,S.depth,S.isIn&&h.isPresent&&!h.isLeaving)}for(let h of this.tags.keys())if(!c.has(h))this.tags.remove(h)}}function pv(){try{let t=document.createElement("canvas");return t.getContext("webgl2")!==null||t.getContext("webgl")!==null}catch{return!1}}window.AgentCafe3D={music:ff,mount(t,e){if(!pv())return;try{return new Pf(t,e)}catch(n){console.error("Agent Café: the 3D café could not be drawn",n);return}}};})();
