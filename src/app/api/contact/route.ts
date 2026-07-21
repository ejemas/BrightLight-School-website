import { NextResponse } from "next/server";
import { Resend } from "resend";

const SCHOOL_EMAIL = "brightlightschool12@gmail.com";
const SCHOOL_NAME = "Brightlight International School";
const DEFAULT_FROM = `${SCHOOL_NAME} <onboarding@resend.dev>`;

type ContactPayload = {
  guardianName?: unknown;
  phone?: unknown;
  email?: unknown;
  childName?: unknown;
  childAge?: unknown;
  type?: unknown;
  message?: unknown;
};

type ContactDetails = {
  guardianName: string;
  phone: string;
  email: string;
  childName: string;
  childAge: string;
  enquiryType: string;
  message: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function emailValue(value: string) {
  return value || "Not provided";
}

function detailRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 10px 12px; border-bottom: 1px solid #d7e8f3; color: #5d6f82; font-weight: 700; width: 190px;">${escapeHtml(label)}</td>
      <td style="padding: 10px 12px; border-bottom: 1px solid #d7e8f3; color: #08213f;">${escapeHtml(emailValue(value))}</td>
    </tr>
  `;
}

function renderHtml(details: ContactDetails, submittedAt: string) {
  return `
    <div style="margin: 0; padding: 28px; background: #f4faff; font-family: Arial, sans-serif; color: #08213f;">
      <div style="max-width: 640px; margin: 0 auto; border-radius: 18px; overflow: hidden; background: #ffffff; border: 1px solid #d7e8f3;">
        <div style="height: 5px; background: linear-gradient(90deg, #2382bf, #f4cf00);"></div>
        <div style="padding: 28px;">
          <p style="margin: 0 0 8px; color: #2382bf; font-size: 12px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase;">Website Enquiry</p>
          <h1 style="margin: 0 0 18px; color: #08213f; font-size: 26px; line-height: 1.25;">New enquiry from ${SCHOOL_NAME} website</h1>
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            ${detailRow("Parent/Guardian Name", details.guardianName)}
            ${detailRow("Phone Number", details.phone)}
            ${detailRow("Email Address", details.email)}
            ${detailRow("Child's Name", details.childName)}
            ${detailRow("Child's Age", details.childAge)}
            ${detailRow("Enquiry Type", details.enquiryType)}
            ${detailRow("Submission Time", submittedAt)}
          </table>
          <div style="margin-top: 24px;">
            <p style="margin: 0 0 8px; color: #5d6f82; font-weight: 800;">Message</p>
            <div style="border-radius: 14px; border: 1px solid #d7e8f3; background: #f8fcff; padding: 16px; color: #08213f; line-height: 1.7; white-space: pre-wrap;">${escapeHtml(details.message)}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderText(details: ContactDetails, submittedAt: string) {
  return [
    `New enquiry from ${SCHOOL_NAME} website`,
    "",
    `Parent/Guardian Name: ${emailValue(details.guardianName)}`,
    `Phone Number: ${emailValue(details.phone)}`,
    `Email Address: ${emailValue(details.email)}`,
    `Child's Name: ${emailValue(details.childName)}`,
    `Child's Age: ${emailValue(details.childAge)}`,
    `Enquiry Type: ${emailValue(details.enquiryType)}`,
    `Submission Time: ${submittedAt}`,
    "",
    "Message:",
    details.message
  ].join("\n");
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured yet. Please contact the school directly." },
      { status: 500 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid enquiry details." }, { status: 400 });
  }

  const details: ContactDetails = {
    guardianName: clean(payload.guardianName),
    phone: clean(payload.phone),
    email: clean(payload.email),
    childName: clean(payload.childName),
    childAge: clean(payload.childAge),
    enquiryType: clean(payload.type) || "General Enquiry",
    message: clean(payload.message)
  };

  if (!details.guardianName || !details.phone || !details.message) {
    return NextResponse.json(
      { error: "Please provide your name, phone number, and message." },
      { status: 400 }
    );
  }

  const submittedAt = new Date().toLocaleString("en-NG", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Africa/Lagos"
  });

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    from: process.env.RESEND_FROM || DEFAULT_FROM,
    to: SCHOOL_EMAIL,
    replyTo: details.email || undefined,
    subject: `New Website Enquiry - ${details.enquiryType}`,
    html: renderHtml(details, submittedAt),
    text: renderText(details, submittedAt)
  });

  if (error) {
    return NextResponse.json(
      { error: "We could not send your enquiry right now. Please try again or contact the school directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ id: data?.id });
}
