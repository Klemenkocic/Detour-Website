import Container from '@/components/ui/Container'

export const metadata = {
  title: 'Documentation - Detour',
  description: 'Learn how to use Detour to plan amazing road trips.',
}

export default function DocsPage() {
  return (
    <Container className="py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-detour-gray900 mb-8">Documentation</h1>
        <p className="text-lg text-detour-gray700">
          Documentation content will be added here.
        </p>
      </div>
    </Container>
  )
}
