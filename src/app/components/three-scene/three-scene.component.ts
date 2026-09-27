import {
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-three-scene',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      #canvasContainer
      class="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none"
      aria-hidden="true"
    ></div>
  `,
  styles: [
    `
      :host {
        display: block;
        position: absolute;
        inset: 0;
        pointer-events: none;
        overflow: hidden;
      }
    `,
  ],
})
export class ThreeSceneComponent implements OnInit, OnDestroy {
  @ViewChild('canvasContainer', { static: true })
  private containerRef!: ElementRef<HTMLDivElement>;

  private ngZone = inject(NgZone);

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private animationFrameId: number | null = null;

  // 3D Core Objects
  private coreGroup!: THREE.Group;
  private innerCoreMesh!: THREE.Mesh;
  private wireCageMesh!: THREE.Mesh;
  private orbitRing1!: THREE.Mesh;
  private orbitRing2!: THREE.Mesh;
  private particlesMesh!: THREE.Points;
  private pointLight!: THREE.PointLight;

  // Mouse parallax
  private mouseX = 0;
  private mouseY = 0;
  private targetX = 0;
  private targetY = 0;
  private windowHalfX = typeof window !== 'undefined' ? window.innerWidth / 2 : 500;
  private windowHalfY = typeof window !== 'undefined' ? window.innerHeight / 2 : 400;

  private onMouseMoveBound = this.onMouseMove.bind(this);
  private onResizeBound = this.onResize.bind(this);

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.windowHalfX = window.innerWidth / 2;
      this.windowHalfY = window.innerHeight / 2;

      this.ngZone.runOutsideAngular(() => {
        this.initThree();
        this.animate();
      });

      window.addEventListener('mousemove', this.onMouseMoveBound, { passive: true });
      window.addEventListener('resize', this.onResizeBound, { passive: true });
    }
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (typeof window !== 'undefined') {
      window.removeEventListener('mousemove', this.onMouseMoveBound);
      window.removeEventListener('resize', this.onResizeBound);
    }
    this.disposeThree();
  }

  private initThree(): void {
    const container = this.containerRef.nativeElement;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 560;

    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 2000);
    this.camera.position.set(0, 0, 480);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(this.renderer.domElement);

    // Ambient warm lighting
    const ambientLight = new THREE.AmbientLight(0xffedd5, 1.2);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight.position.set(200, 250, 300);
    this.scene.add(dirLight);

    // Dynamic mouse-tracking PointLight for bright specular highlight on the core
    this.pointLight = new THREE.PointLight(0xea580c, 3.5, 900);
    this.pointLight.position.set(120, 80, 260);
    this.scene.add(this.pointLight);

    // Main 3D Core Group - positioned gracefully to the right side of hero
    this.coreGroup = new THREE.Group();
    // Position slightly towards right on desktop screens
    const isMobile = width < 768;
    this.coreGroup.position.set(isMobile ? 0 : 160, isMobile ? 10 : 0, 0);
    this.scene.add(this.coreGroup);

    // 1. Shaded Luminous Inner Core (Highlighted metallic sphere with rich orange tone)
    const innerGeom = new THREE.SphereGeometry(72, 48, 48);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0xea580c,
      roughness: 0.22,
      metalness: 0.8,
      emissive: 0xc2410c,
      emissiveIntensity: 0.18,
    });
    this.innerCoreMesh = new THREE.Mesh(innerGeom, innerMat);
    this.coreGroup.add(this.innerCoreMesh);

    // 2. High-Tech Faceted Wireframe Cage (Geodesic / Icosahedron cage surrounding core)
    const cageGeom = new THREE.IcosahedronGeometry(108, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0xf97316,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    this.wireCageMesh = new THREE.Mesh(cageGeom, cageMat);
    this.coreGroup.add(this.wireCageMesh);

    // 3. Concentric Orbiting Tech Ring 1
    const ring1Geom = new THREE.TorusGeometry(138, 1.8, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0xea580c,
      transparent: true,
      opacity: 0.65,
    });
    this.orbitRing1 = new THREE.Mesh(ring1Geom, ring1Mat);
    this.orbitRing1.rotation.x = Math.PI / 3;
    this.coreGroup.add(this.orbitRing1);

    // 4. Interlocking Orbiting Tech Ring 2
    const ring2Geom = new THREE.TorusGeometry(152, 1.4, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xfb923c,
      transparent: true,
      opacity: 0.4,
    });
    this.orbitRing2 = new THREE.Mesh(ring2Geom, ring2Mat);
    this.orbitRing2.rotation.y = Math.PI / 3.2;
    this.orbitRing2.rotation.z = Math.PI / 6;
    this.coreGroup.add(this.orbitRing2);

    // 5. Constellation Particles in Orange / Amber
    const particleCount = 220;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0xea580c);
    const c2 = new THREE.Color(0xfb923c);
    const c3 = new THREE.Color(0xfed7aa);

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      positions[idx] = (Math.random() - 0.45) * 850;
      positions[idx + 1] = (Math.random() - 0.5) * 600;
      positions[idx + 2] = (Math.random() - 0.5) * 450;

      const r = Math.random();
      const col = r < 0.45 ? c1 : r < 0.8 ? c2 : c3;
      colors[idx] = col.r;
      colors[idx + 1] = col.g;
      colors[idx + 2] = col.b;
    }

    const partGeom = new THREE.BufferGeometry();
    partGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    partGeom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.4, 'rgba(251, 146, 60, 0.8)');
      grad.addColorStop(1, 'rgba(234, 88, 12, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const partMat = new THREE.PointsMaterial({
      size: 6,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    this.particlesMesh = new THREE.Points(partGeom, partMat);
    this.scene.add(this.particlesMesh);
  }

  private onMouseMove(event: MouseEvent): void {
    this.mouseX = (event.clientX - this.windowHalfX) * 0.35;
    this.mouseY = (event.clientY - this.windowHalfY) * 0.35;
  }

  private onResize(): void {
    const container = this.containerRef?.nativeElement;
    if (!container || !this.renderer || !this.camera) return;

    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 560;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);

    // Responsive position of core
    if (this.coreGroup) {
      const isMobile = width < 768;
      this.coreGroup.position.set(isMobile ? 0 : 160, isMobile ? 10 : 0, 0);
    }
  }

  private animate(): void {
    this.animationFrameId = requestAnimationFrame(() => this.animate());

    // Mouse parallax damping
    this.targetX += (this.mouseX - this.targetX) * 0.04;
    this.targetY += (this.mouseY - this.targetY) * 0.04;

    this.camera.position.x += (this.targetX - this.camera.position.x) * 0.05;
    this.camera.position.y += (-this.targetY - this.camera.position.y) * 0.05;
    this.camera.lookAt(this.scene.position);

    // Move dynamic pointlight with mouse for lively specular highlights
    if (this.pointLight) {
      this.pointLight.position.x = 120 + this.targetX * 0.8;
      this.pointLight.position.y = 80 - this.targetY * 0.8;
    }

    // ONLY the Core animation:
    if (this.coreGroup) {
      this.coreGroup.rotation.y += 0.005;
      this.coreGroup.rotation.x += 0.002;
    }

    if (this.wireCageMesh) {
      this.wireCageMesh.rotation.y -= 0.003;
      this.wireCageMesh.rotation.z += 0.002;
    }

    if (this.orbitRing1) {
      this.orbitRing1.rotation.z += 0.008;
    }

    if (this.orbitRing2) {
      this.orbitRing2.rotation.y -= 0.006;
    }

    if (this.particlesMesh) {
      this.particlesMesh.rotation.y += 0.0006;
    }

    this.renderer.render(this.scene, this.camera);
  }

  private disposeThree(): void {
    if (this.renderer) {
      this.renderer.dispose();
      const dom = this.renderer.domElement;
      if (dom && dom.parentNode) {
        dom.parentNode.removeChild(dom);
      }
    }
    if (this.innerCoreMesh) {
      this.innerCoreMesh.geometry.dispose();
      (this.innerCoreMesh.material as THREE.Material).dispose();
    }
    if (this.wireCageMesh) {
      this.wireCageMesh.geometry.dispose();
      (this.wireCageMesh.material as THREE.Material).dispose();
    }
    if (this.orbitRing1) {
      this.orbitRing1.geometry.dispose();
      (this.orbitRing1.material as THREE.Material).dispose();
    }
    if (this.orbitRing2) {
      this.orbitRing2.geometry.dispose();
      (this.orbitRing2.material as THREE.Material).dispose();
    }
    if (this.particlesMesh) {
      this.particlesMesh.geometry.dispose();
      (this.particlesMesh.material as THREE.Material).dispose();
    }
  }
}
