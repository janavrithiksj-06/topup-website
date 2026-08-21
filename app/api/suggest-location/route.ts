import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      location,
      mapsLink,
      propertyType,
      message,
    } = body;

    if (!name || !email || !location || !propertyType) {
      return NextResponse.json(
        {
          error: "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    await resend.emails.send({
      /*
       * IMPORTANT:
       * Use the EXACT SAME `from` address
       * as your existing /api/contact route.
       */
      from: "Topup <hello@topupchargers.com>",

      /*
       * Use the EXACT SAME recipient email
       * as your existing contact form.
       */
      to: ["hello@topupchargers.com"],

      replyTo: email,

      subject: `New Location Suggestion — ${location}`,

      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #111111; max-width: 700px;">

          <h1 style="font-size: 24px; margin-bottom: 24px;">
            New Topup Location Suggestion
          </h1>

          <div style="border-top: 1px solid #dddddd; padding-top: 20px;">

            <p>
              <strong>Name:</strong><br />
              ${escapeHtml(name)}
            </p>

            <p>
              <strong>Email:</strong><br />
              ${escapeHtml(email)}
            </p>

            ${
              phone
                ? `
                  <p>
                    <strong>Phone:</strong><br />
                    ${escapeHtml(phone)}
                  </p>
                `
                : ""
            }

            <p>
              <strong>Location:</strong><br />
              ${escapeHtml(location)}
            </p>

            <p>
              <strong>Location Type:</strong><br />
              ${escapeHtml(propertyType)}
            </p>

            ${
              mapsLink
                ? `
                  <p>
                    <strong>Google Maps:</strong><br />
                    <a href="${escapeHtml(mapsLink)}">
                      ${escapeHtml(mapsLink)}
                    </a>
                  </p>
                `
                : ""
            }

            ${
              message
                ? `
                  <p>
                    <strong>Why this location:</strong><br />
                    ${escapeHtml(message).replace(/\n/g, "<br />")}
                  </p>
                `
                : ""
            }

          </div>

          <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #dddddd; color: #777777; font-size: 13px;">
            Submitted through the Topup website.
          </div>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Location suggestion error:", error);

    return NextResponse.json(
      {
        error: "Unable to submit your suggestion. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}