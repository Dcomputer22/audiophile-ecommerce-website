import { NextResponse } from "next/server";
import { Resend } from "resend";
import OrderConfirmationEmail from "@/emails/OrderConfirmation";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY!;
    const fromEmail = process.env.RESEND_FROM_EMAIL!;

    if (!apiKey) {
      throw new Error("Missing RESEND_API_KEY");
    }

    if (!fromEmail) {
      throw new Error("Missing RESEND_FROM_EMAIL");
    }

    const resend = new Resend(apiKey);

    const { orderNumber, customer, items, totals } = await request.json();

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [`${customer.email}`],
      subject: `Order Confirmation - ${orderNumber}`,
      html:
        '<div style="font-family: Manrope, sans-serif; background-color: #f6f9fc; padding: 40px;"><div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 40px;"><h1 style="font-size: 32px; font-weight: 700; text-align: center;">Thank You For Your Order!</h1><p style="color: #666; font-size: 16px; line-height: 26px;">Hi ' +
        customer.name +
        ',</p><p style="color: #666; font-size: 16px; line-height: 26px; margin-bottom: 20px;">Your order has been confirmed and will be shipped shortly.</p><div style="background-color: #f1f1f1; padding: 20px; border-radius: 8px; margin: 30px 0;"><p style="font-size: 18px; font-weight: 700; color: #D87D4A; text-align: center; margin: 0;">Order #' +
        orderNumber +
        '</p></div><h2 style="font-size: 24px; font-weight: 700; margin: 0 0 15px;">Order Summary</h2>' +
        items
          .map(
            (item: any) =>
              '<div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e5e5e5;"><p style="margin: 0; font-size: 15px;">' +
              item.quantity +
              "x " +
              item.name +
              '</p><p style="margin: 0; font-size: 15px; font-weight: 700;">$' +
              item.price.toLocaleString() +
              "</p></div>",
          )
          .join("") +
        "</div></div>",
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
