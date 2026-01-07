import * as THREE from 'three'

const HeroLights = () => {
  return (
    <>
        {/* Main Key Light - Soft Warm White */}
        <spotLight 
        position={[2,5,1.5]} 
        intensity={100} 
        angle={0.15}
        penumbra={0.2}
        color="#fff0d6"/>

        {/* Side Fill - Golden Amber */}
        <spotLight 
        position={[4,5,4]} 
        intensity={40} 
        angle={0.3}
        penumbra={0.5}
        color="#fb8500"/>

        {/* Back Rim - Deep Orange/Red */}
        <spotLight 
        position={[-3,5,5]} 
        intensity={60} 
        angle={0.4}
        penumbra={0.1}
        color="#d00000"/>

        {/* Rect Light - Bright Orange */}
        <primitive 
            object={new THREE.RectAreaLight('#ffaa00', 8, 3, 2)}
            position={[1,3,4]}
            intensity={15}
            rotation={[-Math.PI / 4, Math.PI / 4, 0]}
        />

        {/* Accent - Dark Red */}
        <pointLight 
        position={[0,1,0]}
        intensity={10}
        color="#9d0208"/>

        {/* Accent - Sun Yellow */}
        <pointLight 
        position={[1,2,-2]}
        intensity={10}
        color="#ffba08"/>
        
    </>
  )
}

export default HeroLights