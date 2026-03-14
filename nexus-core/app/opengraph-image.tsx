import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Nexus Core - Professional IT Smart Hands & Support'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #1e1b4b, #2e1065)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                    padding: '80px',
                }}
            >
                {/* Decorative background circle */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-100px',
                        right: '-100px',
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'rgba(139, 92, 246, 0.15)',
                        filter: 'blur(60px)',
                        display: 'flex',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-50px',
                        left: '-50px',
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        background: 'rgba(79, 70, 229, 0.15)',
                        filter: 'blur(50px)',
                        display: 'flex',
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        zIndex: 10,
                    }}
                >
                    <div
                        style={{
                            fontSize: '40px',
                            fontWeight: 700,
                            color: '#8b5cf6',
                            marginBottom: '24px',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            display: 'flex',
                        }}
                    >
                        Nexus Core
                    </div>
                    <div
                        style={{
                            fontSize: '64px',
                            lineHeight: '1.2',
                            fontWeight: 800,
                            color: 'white',
                            marginBottom: '32px',
                            maxWidth: '900px',
                            display: 'flex',
                        }}
                    >
                        Professional IT Smart Hands & Support in Bangalore
                    </div>
                    <div
                        style={{
                            fontSize: '24px',
                            color: 'rgba(255, 255, 255, 0.7)',
                            maxWidth: '800px',
                            display: 'flex',
                        }}
                    >
                        Expert IT Support, WiFi Site Surveys & 24/7 Managed IT Services across APAC
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '40px',
                        left: '80px',
                        right: '80px',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, #8b5cf6, transparent)',
                        opacity: 0.5,
                        display: 'flex',
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    )
}
