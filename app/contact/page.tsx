import Container from '@/components/ui/Container'

export const metadata = {
  title: 'Contact - Detour',
  description: 'Get in touch with the Detour team.',
}

export default function ContactPage() {
  return (
    <Container className="py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-detour-gray900 mb-8">Contact Us</h1>
        <p className="text-lg text-detour-gray700">
          Contact information and form will be added here.
        </p>
      </div>
    </Container>
  )
}
