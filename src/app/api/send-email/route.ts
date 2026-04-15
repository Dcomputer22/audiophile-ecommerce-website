import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import OrderConfirmationEmail from '@/components/emails/OrderConfirmation';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { orderNumber, customer, items, totals } = await request.json();

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
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
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}