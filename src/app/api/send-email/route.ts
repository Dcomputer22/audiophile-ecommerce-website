import { NextResponse } from "next/server";
import { Resend } from "resend";
import OrderConfirmationEmail from "@/components/emails/OrderConfirmation";

const apiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.RESEND_FROM_EMAIL!;

if (!apiKey) {
  throw new Error("Missing RESEND_API_KEY");
}

if (!fromEmail) {
  throw new Error("Missing RESEND_FROM_EMAIL");
}

const resend = new Resend(apiKey);

export async function POST(request: Request) {
  try {
    const { orderNumber, customer, items, totals } = await request.json();

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: customer.email,
      subject: `Order Confirmation - ${orderNumber}`,
      react: OrderConfirmationEmail({
        orderNumber,
        customerName: customer.name,
        items: items.map((item: any) => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
        grandTotal: totals.grandTotal,
      }),
    });

    if (error) {
      console.error("RESEND ERROR:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
