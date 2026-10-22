import Link from 'next/link'
import { MUMBAI_SEO_LANDINGS } from '@/lib/mumbaiSeoLandings'

export const metadata = {
  title: 'Practical Mumbai Itineraries and Local Train Guides | Explore The City',
  description: 'Realistic Mumbai routes for South Mumbai, local trains and monsoon days, with honest last-mile advice and useful trade-offs.',
  alternates: { canonical: 'https://www.explorethecity.in/mumbai-guides' },
}

export default function MumbaiGuidesPage() {
  return <main className="min-h-screen bg-orange-50 pt-32 pb-20"><div className="container-custom max-w-5xl"><p className="text-sm font-bold uppercase tracking-widest text-orange-700">Mumbai planning library</p><h1 className="mt-3 text-4xl font-extrabold md:text-6xl">Routes that respect Mumbai’s scale</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-gray-700">These guides help with the decisions a map cannot make for you: when to walk, where a train genuinely saves time and which distant stop belongs on another day.</p><div className="mt-12 grid gap-6 md:grid-cols-3">{MUMBAI_SEO_LANDINGS.map((guide)=><Link key={guide.slug} href={`/mumbai-guides/${guide.slug}`} className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><p className="text-xs font-bold uppercase tracking-wider text-orange-700">{guide.eyebrow}</p><h2 className="mt-3 text-xl font-bold">{guide.title}</h2><p className="mt-3 text-sm leading-6 text-gray-600">{guide.description}</p><span className="mt-5 inline-block font-bold text-orange-700">Open the guide →</span></Link>)}</div><Link href="/cities/mumbai" className="mt-10 inline-block font-bold text-orange-700 hover:underline">Read the complete Mumbai guide →</Link></div></main>
}
