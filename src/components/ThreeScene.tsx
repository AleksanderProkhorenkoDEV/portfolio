import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Center, Text3D, Float } from '@react-three/drei'


export default function ThreeScene() {
    return (
        <Canvas style={{ height: '100%', width: '100%' }}>
            <Environment preset="sunset" />
            <Center>
                <group>
                    <Float>
                        <Text3D
                            font="/fonts/JetBrains Mono_Bold.json"
                            size={1}
                            height={0.3}
                            bevelEnabled
                            bevelThickness={0.03}
                            bevelSize={0.02}
                            position={[0, 0, 0]}
                        >
                            {'<'}
                            <meshStandardMaterial color="#E6E8EB" roughness={0.8} metalness={0.5} />
                        </Text3D>
                    </Float>

                    <Float>
                        <Text3D
                            font="/fonts/JetBrains Mono_Bold.json"
                            size={1}
                            height={0.3}
                            bevelEnabled
                            bevelThickness={0.03}
                            bevelSize={0.02}
                            position={[0.8, 0, 0]}
                        >
                            {'/'}
                            <meshStandardMaterial color="#2DC08E" roughness={0.8} metalness={0.5} />
                        </Text3D>
                    </Float>

                    <Float>
                        <Text3D
                            font="/fonts/JetBrains Mono_Bold.json"
                            size={1}
                            height={0.3}
                            bevelEnabled
                            bevelThickness={0.03}
                            bevelSize={0.02}
                            position={[1.6, 0, 0]}
                        >
                            {'>'}
                            <meshStandardMaterial color="#E6E8EB" roughness={0.8} metalness={0.5} />
                        </Text3D>
                    </Float>
                </group>
            </Center>
            <OrbitControls autoRotate />
        </Canvas>
    )
}