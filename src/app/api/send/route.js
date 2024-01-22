import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.RESEND_FROM_EMAIL;

export async function POST(req, res) {
    const { email, subject, message } = await req.json();
    console.log(email, subject, message);

    try {
        if (!resendApiKey) {
            throw new Error('Missing API key. Please set RESEND_API_KEY in your environment variables.');
        }

        const resend = new Resend(resendApiKey);

        const data = await resend.send({
            from: fromEmail,
            to: [fromEmail, "mamadhan017@gmail.com"],
            subject: subject,
            react: (
                <>
                    <h1>{subject}</h1>
                    <p>Thanks for contacting me!</p>
                    <p>New Message submitted:</p>
                    <p>{message}</p>
                </>
            )
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}
