import Container from '@/components/ui/Container'

export const metadata = {
  title: 'Privacy Policy - Detour',
  description: 'Privacy policy for Detour trip planning service.',
}

export default function PrivacyPage() {
  return (
    <Container className="py-24">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>Privacy policy content will be added here.</p>
      </div>
    </Container>
  )
}
