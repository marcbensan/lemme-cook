'use client'
import { images } from '@/lib/data'
import { ThreeDMarquee } from '@/components/ui/3d-marquee'
import { useRouter } from 'next/navigation'

export function WelcomeHero() {
  const router = useRouter()

  return (
    <div className='relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden'>
      <h2 className='relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl'>
        Leftovers? Nah.{' '}
        <span className='relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 py-1 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm'>
          LemmeCook
        </span>
      </h2>
      <p className='relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base'>
        Discover creative recipes and make the most out of your ingredients.
        Join the LemmeCook community and turn your leftovers into a gourmet.
      </p>

      <div className='relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4'>
        <button
          onClick={() => router.push('/signin')}
          className='rounded-md cursor-pointer bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none'
        >
          Sign In
        </button>
        <button
          onClick={() => router.push('/signup')}
          className='rounded-md cursor-pointer border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none'
        >
          Create an Account
        </button>
      </div>

      {/* overlay */}
      <div className='absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40' />
      <ThreeDMarquee
        className='pointer-events-none absolute inset-0 h-full w-full'
        images={images}
      />
    </div>
  )
}
