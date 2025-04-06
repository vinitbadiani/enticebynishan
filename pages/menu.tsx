import { GetServerSideProps } from 'next'
import { supabase } from '@/lib/supabaseClient'

type MenuItem = {
  id: string
  category: string
  name: string
  description: string
  i_price: number
  f_price: number
}

type Props = {
  menu: MenuItem[]
}

export default function MenuPage({ menu }: Props) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Menu</h1>
      {menu.map(item => (
        <div key={item.id} className="mb-6">
          <h2 className="text-xl font-semibold">{item.name}</h2>
          <p className="text-sm text-gray-600 italic mb-1">{item.category}</p>
          <p>{item.description}</p>
          <div className="text-sm mt-2">
            <span className="font-medium">Individual:</span> ${item.i_price.toFixed(2)}<br />
            <span className="font-medium">Family:</span> ${item.f_price.toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: menu } = await supabase
    .from('menu')
    .select('*')
    .eq('is_active', true)
    .order('category')

  return {
    props: {
      menu: menu || [],
    },
  }
}
