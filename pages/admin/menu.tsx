import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'

interface MenuItem {
  id: string
  category: string
  name: string
  description: string
  i_price: number
  f_price: number
  is_active: boolean
}

export default function AdminMenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [iPrice, setIPrice] = useState('')
  const [fPrice, setFPrice] = useState('')

  const fetchMenu = async () => {
    const { data, error } = await supabase
      .from('menu')
      .select('*')
      .order('is_active', { ascending: false })
      .order('category')

    if (!error) {
      setMenuItems(data as MenuItem[])
    }
  }

  useEffect(() => {
    fetchMenu()
  }, [])

  const handleAddDish = async () => {
    if (!category || !name || !description || !iPrice || !fPrice) {
      alert('Please fill in all fields.')
      return
    }

    const { error } = await supabase.from('menu').insert([
      {
        category,
        name,
        description,
        i_price: Number(iPrice),
        f_price: Number(fPrice),
        is_active: true,
        active_till: '2100-12-31'
      }
    ])

    if (error) {
      alert('Error adding dish.')
    } else {
      setCategory('')
      setName('')
      setDescription('')
      setIPrice('')
      setFPrice('')
      fetchMenu()
    }
  }

  const handleToggleActive = async (id: string, newStatus: boolean) => {
    const confirmMsg = newStatus
      ? 'This will activate the dish. Are you sure?'
      : 'This will deactivate the dish. Are you sure?'

    if (!confirm(confirmMsg)) return

    const { error } = await supabase
      .from('menu')
      .update({ is_active: newStatus })
      .eq('id', id)

    if (error) {
      alert('Error updating dish status.')
    } else {
      fetchMenu()
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin: Manage Menu</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Dish Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 col-span-1 sm:col-span-2"
        />
        <input
          type="number"
          placeholder="Individual Price"
          value={iPrice}
          onChange={(e) => setIPrice(e.target.value)}
          className="border p-2"
        />
        <input
          type="number"
          placeholder="Family Price"
          value={fPrice}
          onChange={(e) => setFPrice(e.target.value)}
          className="border p-2"
        />
      </div>

      <button
        onClick={handleAddDish}
        className="bg-black text-white px-4 py-2 rounded w-full mb-6"
      >
        Add Dish
      </button>

      {menuItems.map((item) => (
        <div
          key={item.id}
          className={`border rounded p-4 mb-4 ${
            item.is_active ? '' : 'bg-gray-100 text-gray-500'
          }`}
        >
          <div className="flex justify-between items-start mb-1">
            <h2 className="font-semibold text-sm sm:text-base">
              {item.name}
            </h2>
            <span className="italic text-xs text-right">{item.category}</span>
          </div>
          <p className="text-xs sm:text-sm mb-1">{item.description}</p>
          <p className="text-xs sm:text-sm mb-2">
            Individual: ${item.i_price.toFixed(2)} | Family: ${item.f_price.toFixed(2)}
          </p>
          <button
            onClick={() => handleToggleActive(item.id, !item.is_active)}
            className={`text-sm underline ${
              item.is_active ? 'text-red-600' : 'text-green-600'
            }`}
          >
            {item.is_active ? 'Deactivate' : 'Activate'}
          </button>
        </div>
      ))}
    </div>
  )
}
