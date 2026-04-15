import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from '@react-email/components';

interface OrderConfirmationEmailProps {
    orderNumber: string;
    customerName: string;
    items: Array<{
        name: string;
        quantity: number;
        price: number;
    }>;
    grandTotal: number;
}

export const OrderConfirmationEmail = ({
    orderNumber,
    customerName,
    items,
    grandTotal,
}: OrderConfirmationEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>Thank you for your order - {orderNumber}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>Thank You For Your Order!</Heading>

                    <Text style={text}>Hi {customerName},</Text>

                    <Text style={text}>
                        Your order has been confirmed and will be shipped shortly.
                    </Text>

                    <Section style={orderInfo}>
                        <Text style={orderNumberStyle}>Order Number: {orderNumber}</Text>
                    </Section>

                    <Section style={itemsSection}>
                        <Heading as="h2" style={h2}>Order Summary</Heading>
                        {items.map((item, index) => (
                            <div key={index} style={itemRow}>
                                <Text style={itemName}>
                                    {item.quantity}x {item.name}
                                </Text>
                                <Text style={itemPrice}>
                                    ${item.price.toLocaleString()}
                                </Text>
                            </div>
                        ))}
                    </Section>

                    <Section style={totalSection}>
                        <Text style={totalText}>
                            Grand Total: <strong>${grandTotal.toLocaleString()}</strong>
                        </Text>
                    </Section>

                    <Text style={footer}>
                        If you have any questions, please contact us at support@audiophile.com
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

// Styles
const main = {
    backgroundColor: '#f6f9fc',
    fontFamily: 'Manrope, sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '40px',
    maxWidth: '600px',
};

const h1 = {
    color: '#191919',
    fontSize: '32px',
    fontWeight: '700',
    margin: '0 0 20px',
    textAlign: 'center' as const,
};

const h2 = {
    color: '#191919',
    fontSize: '24px',
    fontWeight: '700',
    margin: '30px 0 15px',
};

const text = {
    color: '#666666',
    fontSize: '16px',
    lineHeight: '26px',
};

const orderInfo = {
    backgroundColor: '#f1f1f1',
    padding: '20px',
    borderRadius: '8px',
    margin: '30px 0',
};

const orderNumberStyle = {
    fontSize: '18px',
    fontWeight: '700',
    color: '#D87D4A',
    margin: '0',
    textAlign: 'center' as const,
};

const itemsSection = {
    margin: '30px 0',
};

const itemRow = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #e5e5e5',
};

const itemName = {
    margin: '0',
    fontSize: '15px',
};

const itemPrice = {
    margin: '0',
    fontSize: '15px',
    fontWeight: '700',
};

const totalSection = {
    backgroundColor: '#f1f1f1',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '20px',
};

const totalText = {
    fontSize: '18px',
    textAlign: 'center' as const,
    margin: '0',
};

const footer = {
    color: '#999999',
    fontSize: '14px',
    marginTop: '40px',
    textAlign: 'center' as const,
};

export default OrderConfirmationEmail;