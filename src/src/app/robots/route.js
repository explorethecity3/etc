import { NextResponse } from 'next/server';

export async function GET() {
    const isProduction = process.env.NODE_ENV === 'production';
    const robots = isProduction
        ? `
        User-agent: *
        Allow: /
        `
        : `
        User-agent: *
        Disallow: /
        `;

    return new NextResponse(robots, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}
