import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import { visitorTrackingService } from '../services/visitorTracking';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import { MapPin, Globe2, Users } from 'lucide-react';
import GlobeErrorBoundary from './GlobeErrorBoundary';

const VisitorGlobe: React.FC = () => {
  const globeEl = useRef<any>(null);
  const [visitors, setVisitors] = useState<Array<{ lat: number; lng: number; count: number; city?: string; country?: string }>>([]);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });
  const [webGLError, setWebGLError] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    // Track current visitor on component mount
    visitorTrackingService.trackCurrentVisitor();

    // Load visitor data
    const loadVisitors = () => {
      const data = visitorTrackingService.getAggregatedVisitors();
      setVisitors(data);
    };

    loadVisitors();

    // Check WebGL support
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) {
          setWebGLError(true);
          return false;
        }
        return true;
      } catch (e) {
        setWebGLError(true);
        return false;
      }
    };

    if (!checkWebGL()) {
      console.warn('WebGL not available, using fallback visualization');
    }

    // Auto-rotate globe
    const setupGlobe = () => {
      if (globeEl.current && !webGLError) {
        try {
          globeEl.current.controls().autoRotate = true;
          globeEl.current.controls().autoRotateSpeed = 0.5;
        } catch (error) {
          console.error('Error setting up globe:', error);
          setWebGLError(true);
        }
      }
    };

    // Small delay to ensure globe is rendered
    const timer = setTimeout(setupGlobe, 1000);

    // Handle window resize
    const handleResize = () => {
      const container = document.getElementById('globe-container');
      if (container) {
        const width = Math.min(container.clientWidth, 800);
        const height = Math.min(width, 600);
        setDimensions({ width, height });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Error handler for WebGL context lost
    const handleWebGLError = () => {
      setWebGLError(true);
    };

    window.addEventListener('webglcontextlost', handleWebGLError);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('webglcontextlost', handleWebGLError);
      clearTimeout(timer);
    };
  }, []);

  // Convert visitor data to points for the globe
  const pointsData = visitors.map(v => ({
    lat: v.lat,
    lng: v.lng,
    size: Math.min(0.5 + (v.count * 0.3), 3),
    color: v.count > 5 ? '#ff00ff' : v.count > 2 ? '#00ffff' : '#00ff00',
    label: `${v.city || 'Unknown'}, ${v.country || 'Unknown'} (${v.count} ${v.count === 1 ? 'visitor' : 'visitors'})`
  }));

  // Fallback component when WebGL is not available
  const FallbackMap = () => (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative bg-surface/30 border-2 border-primary/30 rounded-lg p-8 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-lg"></div>

        <div className="relative z-10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Globe2 className="w-16 h-16 text-primary animate-pulse" />
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">3D Globe Unavailable</h3>
              <p className="text-gray-400 text-sm">WebGL is not supported in your current environment</p>
            </div>
          </div>

          {/* Visitor List */}
          <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
            {visitors.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Users className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>No visitors tracked yet</p>
              </div>
            ) : (
              visitors.map((visitor, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-background/50 border border-primary/20 rounded hover:border-primary/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-text">
                        {visitor.city || 'Unknown'}, {visitor.country || 'Unknown'}
                      </div>
                      <div className="text-xs text-gray-500">
                        Lat: {visitor.lat.toFixed(2)}, Lng: {visitor.lng.toFixed(2)}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1 bg-primary/20 border border-primary/30 rounded text-primary text-sm font-mono">
                      {visitor.count} {visitor.count === 1 ? 'visit' : 'visits'}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="visitors" className="py-20 px-8 relative">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text-primary">
            {t.visitorsMap?.title || 'Visitor Map'}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.visitorsMap?.subtitle || 'See where my portfolio visitors are from around the world'}
          </p>
          <div className="mt-4 text-sm text-accent">
            <p>{t.visitorsMap?.totalVisitors || 'Total Visitors'}: {visitors.reduce((sum, v) => sum + v.count, 0)}</p>
          </div>
        </div>

        <div id="globe-container" className="flex justify-center items-center relative">
          {webGLError ? (
            <FallbackMap />
          ) : (
            <GlobeErrorBoundary fallback={<FallbackMap />}>
              <div className="relative rounded-lg overflow-hidden border-2 border-primary shadow-[0_0_30px_rgba(0,255,255,0.5)]">
                <Globe
                  ref={globeEl}
                  width={dimensions.width}
                  height={dimensions.height}
                  backgroundColor="rgba(0,0,0,0)"
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  onGlobeReady={() => console.log('Globe ready')}
                  rendererConfig={{
                    alpha: true,
                    antialias: true,
                    failIfMajorPerformanceCaveat: false
                  }}

                  // Points for visitor locations
                  pointsData={pointsData}
                  pointAltitude={0.01}
                  pointRadius="size"
                  pointColor="color"
                  pointLabel="label"
                  pointsMerge={false}

                  // Atmosphere styling
                  atmosphereColor="#00ffff"
                  atmosphereAltitude={0.15}

                  // Globe material
                  globeMaterial={{
                    color: '#050520',
                    emissive: '#001122',
                    emissiveIntensity: 0.1,
                    shininess: 0.9
                  }}

                  // Arcs between popular locations
                  arcsData={[]}
                  arcColor={() => '#ff00ff'}
                  arcDashLength={0.4}
                  arcDashGap={0.2}
                  arcDashAnimateTime={3000}
                />

                {/* Cyberpunk overlay effects */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent animate-pulse"></div>
                </div>
              </div>
            </GlobeErrorBoundary>
          )}
        </div>

        {/* Visitor stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-background/50 border border-primary/30 rounded-lg p-4 text-center backdrop-blur-sm hover:border-primary transition-colors">
            <div className="text-3xl font-bold neon-text-primary">
              {visitors.length}
            </div>
            <div className="text-sm text-gray-400 mt-1">
              {t.visitorsMap?.uniqueLocations || 'Unique Locations'}
            </div>
          </div>
          <div className="bg-background/50 border border-secondary/30 rounded-lg p-4 text-center backdrop-blur-sm hover:border-secondary transition-colors">
            <div className="text-3xl font-bold neon-text-secondary">
              {visitors.reduce((sum, v) => sum + v.count, 0)}
            </div>
            <div className="text-sm text-gray-400 mt-1">
              {t.visitorsMap?.totalVisits || 'Total Visits'}
            </div>
          </div>
          <div className="bg-background/50 border border-accent/30 rounded-lg p-4 text-center backdrop-blur-sm hover:border-accent transition-colors">
            <div className="text-3xl font-bold neon-text-accent">
              {new Set(visitors.map(v => v.country)).size}
            </div>
            <div className="text-sm text-gray-400 mt-1">
              {t.visitorsMap?.countries || 'Countries'}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 flex justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#00ff00] shadow-[0_0_10px_#00ff00]"></div>
            <span className="text-gray-400">1-2 {t.visitorsMap?.visitors || 'visitors'}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#00ffff] shadow-[0_0_10px_#00ffff]"></div>
            <span className="text-gray-400">3-5 {t.visitorsMap?.visitors || 'visitors'}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff00ff] shadow-[0_0_10px_#ff00ff]"></div>
            <span className="text-gray-400">5+ {t.visitorsMap?.visitors || 'visitors'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitorGlobe;
