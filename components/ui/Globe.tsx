"use client";
import { useEffect, useRef, useState } from "react";
import { Scene, Fog, PerspectiveCamera, Vector3} from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";
declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: ThreeElements["mesh"];
  }
}

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

type GlobePoint = {
  size: number;
  order: number;
  color: (t: number) => string;
  lat: number;
  lng: number;
};

type GlobeArc = {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: string;
  order: number;
  arcAlt?: number;
};

type ObjAccessor<T> = (obj: object) => T;

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

export function Globe({ globeConfig, data }: WorldProps) {
  const [globeData, setGlobeData] = useState<GlobePoint[]>([]);
  const globeRef = useRef<ThreeGlobe | null>(null);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  useEffect(() => {
    if (!globeRef.current) return;

    // Initialize globe with default data
    globeRef.current
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude)
      .hexPolygonColor(() => defaultProps.polygonColor);

    // Build and set initial data
    const initialPoints = data.map((arc) => ({
      size: defaultProps.pointSize,
      order: arc.order,
      color: (t: number) => {
        const rgb = hexToRgb(arc.color);
        return rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})` : 'rgba(255,255,255,1)';
      },
      lat: Math.max(-90, Math.min(90, arc.startLat)),
      lng: Math.max(-180, Math.min(180, arc.startLng)),
    }));

    setGlobeData(initialPoints);
  }, [globeRef.current]);

  useEffect(() => {
    if (!globeRef.current || !globeData.length) return;

    // Update globe with new data
    globeRef.current
      .pointsData(globeData)
      .pointColor(((point: object) => (point as GlobePoint).color(0)) as ObjAccessor<string>)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(defaultProps.pointSize);

    // Set up arcs
    globeRef.current
      .arcsData(data)
      .arcStartLat(((d: object) => (d as GlobeArc).startLat) as ObjAccessor<number>)
      .arcStartLng(((d: object) => (d as GlobeArc).startLng) as ObjAccessor<number>)
      .arcEndLat(((d: object) => (d as GlobeArc).endLat) as ObjAccessor<number>)
      .arcEndLng(((d: object) => (d as GlobeArc).endLng) as ObjAccessor<number>)
      .arcColor(((d: object) => (d as GlobeArc).color) as ObjAccessor<string>)
      .arcAltitude(((d: object) => (d as GlobeArc).arcAlt || 0) as ObjAccessor<number>)
      .arcStroke(() => 0.3)
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap(((d: object) => (d as GlobeArc).order) as ObjAccessor<number>)
      .arcDashGap(15)
      .arcDashAnimateTime(defaultProps.arcTime);

    // Set up rings
    globeRef.current
      .ringsData([])
      .ringColor(((e: object) => (t: number) => (e as GlobePoint).color(t)) as ObjAccessor<(t: number) => string>)
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod((defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings);

  }, [globeData, globeRef.current]);

  return (
    <>
      <threeGlobe ref={globeRef} />
    </>
  );
}

export function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  }, []);

  return null;
}

export function World(props: WorldProps) {
  const { globeConfig } = props;
  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);
  return (
    <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={new Vector3(-200, 500, 200)}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
      <Globe {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={1}
        autoRotate={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

export function hexToRgb(hex: string) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function genRandomNumbers(min: number, max: number, count: number) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}