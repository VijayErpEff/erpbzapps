import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  service?: string;
  message: string;
};

// Simple in-memory rate limiter (per-IP, resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // max requests
const RATE_WINDOW = 60 * 60 * 1000; // per hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT;
}

function sanitize(str: string): string {
  return str
    .replace(/[<>]/g, "") // strip angle brackets
    .replace(/javascript:/gi, "") // strip js protocol
    .replace(/on\w+\s*=/gi, "") // strip event handlers
    .trim()
    .slice(0, 5000); // limit length
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body: ContactPayload = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Honeypot — reject silently if filled (bot)
    if (body.website) {
      return NextResponse.json(
        { success: true, message: "Thank you — we'll be in touch shortly." },
        { status: 200 }
      );
    }

    if (!validateEmail(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Sanitize all inputs
    const sanitized = {
      name: sanitize(body.name),
      email: sanitize(body.email),
      phone: body.phone ? sanitize(body.phone) : "",
      company: body.company ? sanitize(body.company) : "",
      service: body.service ? sanitize(body.service) : "",
      message: sanitize(body.message),
      timestamp: new Date().toISOString(),
    };

    // TODO: Integrate email service (SendGrid, Resend, AWS SES, etc.)
    // For now, log the submission. Replace with your email provider.
    console.log("Contact form submission:", sanitized);

    return NextResponse.json(
      { success: true, message: "Thank you — we'll be in touch shortly." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 400 }
    );
  }
}
