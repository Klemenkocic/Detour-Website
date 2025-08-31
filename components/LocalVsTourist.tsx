import Image from 'next/image'

export default function LocalVsTourist() {
  return (
    <section className="py-24 bg-white">
      <div className="w-full px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-detour-gray900 mb-4">
            Don&apos;t travel as a tourist
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl text-detour-primary font-covered-by-your-grace mb-6">
            be a local
          </p>
          <p className="text-lg text-detour-gray700 max-w-2xl mx-auto leading-relaxed">
            Detour makes it effortless to plan epic road trips — complete with local gems, hidden stops, and a memorable itinerary that feels like a local created it.
          </p>
        </div>
        
        <div className="w-full">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/detour/strips/images.png"
              alt="Collection of travel experiences showing local adventures: people exploring caves, enjoying local cuisine, experiencing authentic cultural moments, and discovering hidden scenic viewpoints"
              width={1200}
              height={400}
              className="w-full h-auto object-cover"
              sizes="100vw"
            />
          </div>
        </div>
        

      </div>
    </section>
  )
}
