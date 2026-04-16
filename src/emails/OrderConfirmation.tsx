import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
} from '@react-email/components';

interface OrderConfirmationEmailProps {
    orderNumber: string;
    customerName: string;
    items: Array<{ name: string; quantity: number; price: number }>;
    grandTotal: number;
}

export const OrderConfirmationEmail = ({
    orderNumber,
    customerName,
    items,
    grandTotal,
}: OrderConfirmationEmailProps) => (
    <Html>
        <Head />
        <Preview>Thank you for your order - {orderNumber}</Preview>
        <Body style={{ backgroundColor: '#f6f9fc', fontFamily: 'Manrope, sans-serif' }}>
            <Container style={{ maxWidth: '600px', margin: '0 auto', padding: '40px', backgroundColor: '#fff' }}>
                <Heading style={{ fontSize: '32px', fontWeight: '700', textAlign: 'center', margin: '0 0 20px' }}>
                    Thank You For Your Order!
                </Heading>

                <Text style={{ color: '#666', fontSize: '16px', lineHeight: '26px' }}>
                    Hi {customerName},
                </Text>

                <Text style={{ color: '#666', fontSize: '16px', lineHeight: '26px', marginBottom: '20px' }}>
                    Your order has been confirmed and will be shipped shortly.
                </Text>

                <Section style={{ backgroundColor: '#f1f1f1', padding: '20px', borderRadius: '8px', margin: '30px 0' }}>
                    <Text style={{ fontSize: '18px', fontWeight: '700', color: '#D87D4A', textAlign: 'center', margin: 0 }}>
                        Order #{orderNumber}
                    </Text>
                </Section>

                <Section style={{ margin: '30px 0' }}>
                    <Heading as="h2" style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 15px' }}>
                        Order Summary
                    </Heading>
                    {items.map((item) => (
                        <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #e5e5e5' }}>
                            <Text style={{ margin: 0, fontSize: '15px' }}>
                                {item.quantity}x {item.name}
                            </Text>
                            <Text style={{ margin: 0, fontSize: '15px', fontWeight: '700' }}>
                                ${item.price.toLocaleString()}
                            </Text>
                        </div>
                    ))}
                </Section>

                <Section style={{ backgroundColor: '#f1f1f1', padding: '20px', borderRadius: '8px' }}>
                    <Text style={{ fontSize: '18px', fontWeight: '700', textAlign: 'center', margin: 0 }}>
                        Total: ${grandTotal.toLocaleString()}
                    </Text>
                </Section>

                <Text style={{ color: '#999', fontSize: '14px', marginTop: '40px', textAlign: 'center' }}>
                    Questions? Contact support@audiophile.com
                </Text>
            </Container>
        </Body>
    </Html>
);

export default OrderConfirmationEmail;