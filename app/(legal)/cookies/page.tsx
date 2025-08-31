import Container from '@/components/ui/Container'

export const metadata = {
  title: 'Cookie Policy - Detour',
  description: 'Cookie policy for Detour trip planning service.',
}

export default function CookiesPage() {
  return (
    <Container className="py-24">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h1>Cookie Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>Cookie policy content will be added here.</p>
      </div>
    </Container>
  )
}
