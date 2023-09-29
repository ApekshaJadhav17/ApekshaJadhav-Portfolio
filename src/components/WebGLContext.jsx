import React, { createContext, useContext, useEffect, useRef } from 'react';

const WebGLContext = createContext();

export const useWebGLContext = () => {
    const context = useContext(WebGLContext);
    if (!context) {
        throw new Error('useWebGLContext must be used within a WebGLProvider');
    }
    return context;
};

export const WebGLProvider = ({ children }) => {
    const canvasRef = useRef(null);
    const glRef = useRef(null);

    useEffect(() => {
        // Initialize WebGL context here
        const canvas = canvasRef.current;

        if (!canvas) {
            console.error('Canvas element not found');
            return;
        }

        const gl = canvas.getContext('webgl'); // Use your preferred context type

        if (!gl) {
            console.error('WebGL not supported');
            return;
        }

        // Store the canvas and WebGL context for later use
        glRef.current = gl;

        console.log('Providing WebGL context:', { gl, canvas }); // Moved inside the useEffect
    }, []);

    // Render children only when canvasRef.current is not null
    return canvasRef.current ? (
        <canvas ref={canvasRef}> {/* Assign the canvas element a ref */}
            <WebGLContext.Provider value={{ canvas: canvasRef.current, gl: glRef.current }}>
                {children}
            </WebGLContext.Provider>
        </canvas>
    ) : null; // Render nothing if canvasRef.current is null
};
