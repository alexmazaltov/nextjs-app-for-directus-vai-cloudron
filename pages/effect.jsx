import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls';


import TextTerrain from "../lib/TextTerrain";

export default function EffectPage() {
    const canvasRef = useRef(null);
  
    useEffect(() => {
      // Initialize Three.js scene
      const scene = new THREE.Scene();
      scene.fog = new THREE.Fog('#fff', 100, 150);
      scene.background = new THREE.Color('#fff');
  
      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
      camera.position.set(0, 3, 8).setLength(50);
  
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      canvasRef.current.appendChild(renderer.domElement);
  
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
  
      // Create TextTerrain instance
      const textTerrain = new TextTerrain(renderer.capabilities.getMaxAnisotropy());
      scene.add(textTerrain);
  
      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
  
        // Update controls and Three.js objects
        controls.update();
        textTerrain.instancedMesh.instanceMatrix.needsUpdate = true;
  
        // Render scene
        renderer.render(scene, camera);
      };
  
      // Start animation loop
      animate();
  
      // Handle window resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Clean up
      return () => {
        window.removeEventListener('resize', handleResize);
        // Perform any cleanup of Three.js objects here
      };
    }, []);
  
    return (
      <div ref={canvasRef} />
    );
  }