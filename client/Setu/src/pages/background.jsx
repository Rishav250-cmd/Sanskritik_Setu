import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { GammaCorrectionShader } from "three/addons/shaders/GammaCorrectionShader.js";
import { CopyShader } from "three/addons/shaders/CopyShader.js";

function hexToVec3(hex) {
    const n = parseInt(hex.slice(1), 16);
    return new THREE.Vector3(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
}

const LAYERS = { NONE: 0, TORUS_SCENE: 1, BLOOM_SCENE: 2, ENTIRE_SCENE: 3 };

function ThreeBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // ---------- Renderer & Scene Setup ----------
        const renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.VSMShadowMap;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);
        scene.fog = new THREE.Fog(0x000000, 0, 22);

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 80);
        camera.position.set(0, 0, 3);
        camera.layers.enable(LAYERS.TORUS_SCENE);
        camera.layers.enable(LAYERS.BLOOM_SCENE);
        camera.layers.enable(LAYERS.ENTIRE_SCENE);
        scene.add(camera);

        // ---------- Geometry / Points ----------
        const count = 940;
        const positions = [];
        const sizes = [];
        for (let i = 0; i < count; i++) {
            positions.push(2 * Math.random() - 1, 2 * Math.random() - 1, 2 * Math.random() - 1);
            sizes.push(25 + 25 * Math.random());
        }
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute("size", new THREE.Float32BufferAttribute(sizes, 1));

        const uniforms = {
            iTime: { value: 0 },
            iShift: { value: new THREE.Vector3() },
            iAlpha: { value: 0 },
            iAnimation: { value: new THREE.Vector3(0, 0, 0) },
            iResolution: {
                value: {
                    x: window.innerWidth * window.devicePixelRatio,
                    y: window.innerHeight * window.devicePixelRatio,
                },
            },
            uDepth: { value: 3.7 },
            uCool: { value: hexToVec3("#b3401f") },
            uWarm: { value: hexToVec3("#ffc46b") },
        };

        const vertexShader = `
      attribute float size;
      uniform float iTime;
      uniform vec3 iShift;
      uniform vec2 iResolution;
      uniform vec3 iAnimation;
      uniform float uDepth;
      varying float transparency;
      varying float warmness;

      vec3 warp3d(vec3 pos, float t) {
          float curv = 0.9, a = 1.9, b = 0.25, b2 = 0.03, c = 0.02;
          pos *= 2.;
          pos.x += curv * sin(c * t + a * pos.y) + t * b2;
          pos.y += curv * cos(c * t + a * pos.x);
          pos.z += curv * cos(c * t + a * pos.y);
          pos.z += curv * sin(c * t + a * pos.x) + t * b;
          pos.z = abs(pos.z);
          return pos.xyz;
      }

      void main() {
          vec3 v = warp3d(position, iTime);
          v = uDepth * (2. * fract(v + iShift) - 1.) + iAnimation;
          vec4 vpos = modelViewMatrix * vec4(v, 1.);
          transparency = step(length(v), uDepth);
          warmness = step(.75, fract(size * 7.13));
          gl_PointSize = size * iResolution.y / 1000. / -vpos.z;
          gl_Position = projectionMatrix * vpos;
      }
    `;

        const fragmentShader = `
      varying float transparency; 
      varying float warmness;
      uniform float iAlpha; 
      uniform vec3 uCool; 
      uniform vec3 uWarm;

      void main() {
          vec3 color = mix(uCool * .8, uWarm * .8, warmness);
          float tex = smoothstep(1., .3, length(2. * gl_PointCoord - 1.));
          gl_FragColor = vec4(tex * color, tex * transparency * iAlpha);
      }
    `;

        const material = new THREE.ShaderMaterial({
            uniforms,
            vertexShader,
            fragmentShader,
            transparent: true,
        });
        material.stencil = false;

        const points = new THREE.Points(geometry, material);
        points.position.set(0, 0, -1);
        points.layers.enable(LAYERS.ENTIRE_SCENE);
        scene.add(points);

        // ---------- Postprocessing ----------
        const renderPass = new RenderPass(scene, camera);

        const torusComposer = new EffectComposer(renderer);
        torusComposer.renderToScreen = false;
        torusComposer.addPass(renderPass);
        torusComposer.addPass(new ShaderPass(GammaCorrectionShader));
        torusComposer.addPass(new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.3, 0.3, 0));
        torusComposer.addPass(new ShaderPass(CopyShader));

        const bloomComposer = new EffectComposer(renderer);
        bloomComposer.renderToScreen = false;
        bloomComposer.addPass(renderPass);
        bloomComposer.addPass(new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.5, 0.7, 0));
        bloomComposer.addPass(new ShaderPass(GammaCorrectionShader));

        const FinalPass = {
            uniforms: {
                iTime: { value: 0 },
                tDiffuse: { value: null },
                torusTexture: { value: null },
                bloomTexture: { value: null },
                haloTexture: { value: null },
                uBg: { value: hexToVec3("#1a0a04") },
                uFlameA: { value: hexToVec3("#ff7a2a") },
                uFlameB: { value: hexToVec3("#ffce5a") },
                uFlameAmt: { value: 0.2 },
            },
            vertexShader: `
        varying vec2 vUv; 
        void main(){
          vUv = uv; 
          gl_Position = vec4(position, 1.0); 
        }`,
            fragmentShader: `
        uniform float iTime; 
        uniform sampler2D tDiffuse; 
        uniform sampler2D bloomTexture; 
        uniform sampler2D torusTexture; 
        uniform sampler2D haloTexture;
        uniform vec3 uBg; 
        uniform vec3 uFlameA; 
        uniform vec3 uFlameB; 
        uniform float uFlameAmt;
        varying vec2 vUv;

        vec3 warp3d(vec3 pos, float t){
          float curv=.8,a=1.9,b=0.7; 
          pos*=2.;
          pos.x+=curv*sin(t+a*pos.y)+t*b; 
          pos.y+=curv*cos(t+a*pos.x);
          pos.y+=curv*sin(t+a*pos.z)+t*b; 
          pos.z+=curv*cos(t+a*pos.y);
          pos.z+=curv*sin(t+a*pos.x)+t*b; 
          pos.x+=curv*cos(t+a*pos.z);
          return 0.5+0.5*cos(pos.xyz+vec3(1,2,4)); 
        }

        void main(){
          vec2 uv = 2.*vUv - 1.;
          vec3 w = pow(warp3d(vec3(uv.x, sin(uv.y), uv.y), iTime*1.5), vec3(1.5));
          vec3 flame = 1.5*uFlameA*w.x; 
          flame*=w.y; 
          flame += uFlameB*w.z;
          flame *= smoothstep(0.25, 1., abs(uv.y));
          float md = smoothstep(-0.7, 1., -uv.y*uv.x); 
          flame *= md*md;
          vec3 bg = uBg * (1.0 - 0.4 * length(uv));
          vec3 halo = texture2D(haloTexture, vUv).xyz;
          gl_FragColor = vec4(bg + flame*uFlameAmt + texture2D(bloomTexture, vUv).xyz + texture2D(torusTexture, vUv).xyz + texture2D(tDiffuse, vUv).xyz + halo, 1.);
        }`,
        };

        const finalPass = new ShaderPass(FinalPass);
        const finalComposer = new EffectComposer(renderer);
        finalComposer.addPass(renderPass);
        finalComposer.addPass(finalPass);

        finalPass.uniforms.bloomTexture.value = bloomComposer.renderTarget1.texture;
        finalPass.uniforms.torusTexture.value = torusComposer.renderTarget1.texture;

        // ---------- Animations ----------
        const DUST_ALPHA = 0.68;
        const DRIFT_SPEED = 0.4;

        let appearStart = null;
        let appearAnimFrameId = null;
        let mainAnimFrameId = null;

        function smootherstep(t) {
            return t * t * t * (t * (t * 6 - 15) + 10);
        }

        function appearIn(now) {
            if (appearStart === null) appearStart = now;
            const t = Math.min(1, (now - appearStart) / 2200);
            const eased = smootherstep(t);
            uniforms.iAlpha.value = eased * DUST_ALPHA;
            if (t < 1) {
                appearAnimFrameId = requestAnimationFrame(appearIn);
            }
        }
        appearAnimFrameId = requestAnimationFrame(appearIn);

        function flyPoints() {
            uniforms.iTime.value = performance.now() / 1000;
            uniforms.iShift.value.add(camera.position.clone().multiplyScalar(0.0022 * DRIFT_SPEED));
        }

        function animate() {
            mainAnimFrameId = requestAnimationFrame(animate);

            finalPass.uniforms.iTime.value = performance.now() / 1000;
            flyPoints();

            camera.layers.set(LAYERS.TORUS_SCENE);
            torusComposer.render();

            camera.layers.set(LAYERS.BLOOM_SCENE);
            bloomComposer.render();

            camera.layers.set(LAYERS.ENTIRE_SCENE);
            finalComposer.render();
        }

        // ---------- Resize Listener ----------
        function onResize() {
            const w = window.innerWidth;
            const h = window.innerHeight;
            const dpr = window.devicePixelRatio;

            renderer.setPixelRatio(dpr);
            renderer.setSize(w, h, false);

            camera.aspect = w / h;
            camera.updateProjectionMatrix();

            [torusComposer, bloomComposer, finalComposer].forEach((c) => {
                c.setPixelRatio(dpr);
                c.setSize(w, h);
            });

            uniforms.iResolution.value = { x: w * dpr, y: h * dpr };
        }

        window.addEventListener("resize", onResize);
        onResize();
        animate();

        // ---------- Cleanup on Unmount ----------
        return () => {
            window.removeEventListener("resize", onResize);
            if (appearAnimFrameId) cancelAnimationFrame(appearAnimFrameId);
            if (mainAnimFrameId) cancelAnimationFrame(mainAnimFrameId);

            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                display: "block",
                width: "100vw",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -1,
            }}
        />
    );
}

export default ThreeBackground;