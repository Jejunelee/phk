import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const INBOX = process.env.CONTACT_INBOX || 'inquiryphk@gmail.com';
const FROM =
  process.env.RESEND_FROM_EMAIL ||
  'Philippine Heritage Kitchen <onboarding@resend.dev>';

const INTEREST_LABELS: Record<string, string> = {
  collaborate: 'Collaborate',
  'join-event': 'Join Event',
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const interest = String(body.interest ?? '').trim();
    const fullName = String(body.fullName ?? '').trim();
    const email = String(body.email ?? '').trim();
    const mobile = String(body.mobile ?? '').trim();
    const note = String(body.note ?? '').trim();

    if (!interest || !fullName || !email || !mobile) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    if (!INTEREST_LABELS[interest]) {
      return NextResponse.json(
        { error: 'Please select a valid interest.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!/^\d{10,}$/.test(mobile.replace(/\s/g, ''))) {
      return NextResponse.json(
        { error: 'Please enter a valid mobile number (at least 10 digits).' },
        { status: 400 }
      );
    }

    if (
      fullName.length > 200 ||
      email.length > 200 ||
      mobile.length > 30 ||
      note.length > 5000
    ) {
      return NextResponse.json(
        { error: 'One of the fields is too long.' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email is not configured.' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM,
      to: INBOX,
      replyTo: email,
      subject: `PHK inquiry: ${INTEREST_LABELS[interest]} — ${fullName}`,
      text: [
        `Interest: ${INTEREST_LABELS[interest]}`,
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Mobile: ${mobile}`,
        '',
        note ? `Note:\n${note}` : 'Note: (none)',
      ].join('\n'),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Could not send your message. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
