import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  console.log("Contact API hit!");

  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing! Did you restart the server?");
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const body = await request.json();
    const { name, email, phone, message } = body;
    console.log("Received form data:", { name, email, phone });

    const response = await resend.emails.send({
      from: 'Pahalwan Lassiwale Contact Form <onboarding@resend.dev>',
      to: 'yashwinsharma16@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
            .header { background-color: #EA1B2C; padding: 25px; text-align: center; color: #ffffff; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 0.5px; }
            .content { padding: 30px; color: #333333; line-height: 1.6; }
            .field { margin-bottom: 25px; }
            .label { font-weight: 600; color: #777777; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; margin-bottom: 5px; }
            .value { font-size: 16px; background-color: #f9f9f9; padding: 12px 15px; border-left: 4px solid #EA1B2C; border-radius: 0 4px 4px 0; }
            .message-box { font-size: 16px; background-color: #f9f9f9; padding: 15px; border-top: 4px solid #EA1B2C; border-radius: 0 0 4px 4px; white-space: pre-wrap; }
            .footer { background-color: #EBEBE2; padding: 20px; text-align: center; font-size: 13px; color: #666666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Pahalwan Lassiwale & Sweets</h1>
            </div>
            <div class="content">
              <p style="font-size: 18px; margin-top: 0; margin-bottom: 25px; color: #111;">You have received a new inquiry from the website contact form.</p>
              
              <div class="field">
                <div class="label">Full Name</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email Address</div>
                <div class="value">${email}</div>
              </div>
              
              <div class="field">
                <div class="label">Phone Number</div>
                <div class="value">${phone}</div>
              </div>
              
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">${message}</div>
              </div>
            </div>
            <div class="footer">
              This email was generated automatically from the contact form at pahalwanlassiwale.com
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Resend response:", response);

    if (response.error) {
      console.error("Resend API Error:", response.error);
      return NextResponse.json({ error: response.error.message }, { status: 500 });
    }

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("API Route Exception:", error);
    return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
  }
}
