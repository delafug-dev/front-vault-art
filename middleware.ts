// middleware.ts
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
    // Paso 1: Obtener la ruta actual
    const path = request.nextUrl.pathname;

    // Paso 2: Definir rutas públicas que no requieren autenticación
    const isPublicPath = path === '/login' || path === '/signup' || path.startsWith('/api/recovery-password') || path.startsWith('/api/auth');

    // Paso 3: Obtener el token de sesión
    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET
    });

    // Paso 4: Lógica de redirección

    // Si el usuario está en una ruta pública y ya está autenticado
    if (isPublicPath && token) {
        // Redirigir al dashboard
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    // Si el usuario intenta acceder a una ruta protegida sin autenticación
    if (!isPublicPath && !token) {
        // Guardar la URL original para redirigir después del login
        const url = new URL('/login', request.url);
        url.searchParams.set('callbackUrl', encodeURI(request.url));

        // Redirigir al login
        return NextResponse.redirect(url);
    }

    // Paso 5: Si todo está bien, continuar con la solicitud
    return NextResponse.next();
}

// Paso 6: Configurar qué rutas debe procesar el middleware
export const config = {
    matcher: [
        // Rutas que requieren autenticación
        '/dashboard/:path*',
        '/profile/:path*',
        '/admin/:path*',
        // Rutas públicas que necesitan verificación (para redirigir si ya está autenticado)
        '/login',
        '/signup'
    ],
};
