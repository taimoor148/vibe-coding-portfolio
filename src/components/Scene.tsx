import {useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
export default function Scene(){const host=useRef<HTMLDivElement>(null);const [failed,setFailed]=useState(false);
 useEffect(()=>{const el=host.current;if(!el)return;const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;const mobile=innerWidth<700;let renderer:THREE.WebGLRenderer;try{renderer=new THREE.WebGLRenderer({alpha:true,antialias:!mobile});}catch{setFailed(true);return;}
 renderer.setPixelRatio(Math.min(devicePixelRatio,mobile?1.2:1.6));renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.2;el.appendChild(renderer.domElement);const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(34,1,.1,100);camera.position.z=8;
 const sculpture=new THREE.Group();sculpture.rotation.set(.25,-.35,.1);scene.add(sculpture);const gold=new THREE.MeshPhysicalMaterial({color:0xb9995d,metalness:.82,roughness:.25,clearcoat:.7});
 for(let i=0;i<3;i++){const ring=new THREE.Mesh(new THREE.TorusGeometry(1.35,.1,16,mobile?90:140),gold);ring.scale.set(1,1.35,1);ring.rotation.set(i*.75,i*.85,i*.65);sculpture.add(ring);}
 const core=new THREE.Mesh(new THREE.SphereGeometry(.2,24,16),gold);sculpture.add(core);
 const plinth=new THREE.Mesh(new THREE.CylinderGeometry(1.1,1.15,.12,64),new THREE.MeshStandardMaterial({color:0x25231f,metalness:.3,roughness:.7}));plinth.position.y=-2.05;scene.add(plinth);
 scene.add(new THREE.AmbientLight(0xe4d5b8,2));[[0xffe2ad,-3,4,5,70],[0xffffff,4,1,3,85],[0xd79843,1,-2,-3,45]].forEach(([c,x,y,z,p])=>{const light=new THREE.PointLight(c,p);light.position.set(x,y,z);scene.add(light);});
 let mx=0,my=0,frame=0,visible=true;const mouse=(e:MouseEvent)=>{mx=(e.clientX/innerWidth-.5)*.2;my=(e.clientY/innerHeight-.5)*.12;};const resize=()=>{const {width,height}=el.getBoundingClientRect();renderer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();};const ro=new ResizeObserver(resize);ro.observe(el);const io=new IntersectionObserver(([entry])=>visible=entry.isIntersecting);io.observe(el);
 const draw=(t:number)=>{frame=requestAnimationFrame(draw);if(!visible||document.hidden)return;if(!reduced){sculpture.rotation.y=t*.000075+mx;sculpture.rotation.x+=(.25+my-sculpture.rotation.x)*.025;sculpture.position.y=Math.sin(t*.0004)*.035;}renderer.render(scene,camera);};frame=requestAnimationFrame(draw);if(!reduced&&!mobile)window.addEventListener('mousemove',mouse);
 return()=>{cancelAnimationFrame(frame);ro.disconnect();io.disconnect();window.removeEventListener('mousemove',mouse);scene.traverse(o=>{if(o instanceof THREE.Mesh){o.geometry.dispose();if(o.material!==gold)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>m.dispose());}});gold.dispose();renderer.dispose();renderer.domElement.remove();};
 },[]);
 return <div ref={host} className={'scene '+(failed?'scene-fallback':'')} aria-hidden="true"><div className="scene-glow"/>{failed&&<div className="gold-fallback"><span/><span/><span/></div>}</div>
}
