import { createContext, useContext, useState, useEffect } from 'react'

const ListingsContext = createContext(null)

export function useListings() {
  const ctx = useContext(ListingsContext)
  if (!ctx) throw new Error('useListings must be used within ListingsProvider')
  return ctx
}

const DEFAULT_LISTINGS = [
  {
    id: '1',
    title: 'CNC Milling Machine',
    type: 'Machinery',
    price: 250000,
    location: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=400&h=300&fit=crop',
    description: 'High precision CNC milling machine, excellent condition'
  },
  {
    id: '2',
    title: 'Hydraulic Press 50T',
    type: 'Machinery',
    price: 180000,
    location: 'Delhi',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
    description: '50 ton hydraulic press, recently serviced'
  },
  {
    id: '3',
    title: 'Forklift Rental',
    type: 'Rentals',
    price: 5000,
    location: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
    description: 'Monthly forklift rental, includes operator'
  }
  ,
  {
    id: '4',
    title: 'Welding Set (Mig/Mag)',
    type: 'Machinery',
    price: 35000,
    location: 'Ahmedabad',
    image: 'https://images.unsplash.com/photo-1590608897129-79a4a0a8b8d6?w=400&h=300&fit=crop',
    description: 'Portable MIG/MAG welding set suitable for sheet metal and fabrication.'
  },
  {
    id: '5',
    title: 'Air Compressor 10HP (Rental)',
    type: 'Rentals',
    price: 4000,
    location: 'Coimbatore',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=400&h=300&fit=crop',
    description: 'Daily/weekly compressor rental with hoses and regulator.'
  },
  {
    id: '6',
    title: 'Scrap Iron Lot - 500kg',
    type: 'Scrap',
    price: 15000,
    location: 'Faridabad',
    image: 'https://images.unsplash.com/photo-1549887534-6f8a0b3f5f66?w=400&h=300&fit=crop',
    description: 'Mixed scrap iron available for immediate pickup.'
  },
  {
    id: '7',
    title: 'Machine Repair & Maintenance',
    type: 'Services',
    price: 5000,
    location: 'Pune',
    image: 'https://images.unsplash.com/photo-1581092580493-7b7b9f4b6f0b?w=400&h=300&fit=crop',
    description: 'On-site machine repair, spindle service, and preventive maintenance.'
  },
  {
    id: '8',
    title: 'Experienced Lathe Operator (ITI)',
    type: 'Jobs',
    price: 22000,
    location: 'Jamshedpur',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop',
    description: 'Skilled lathe operator with 6 years experience in heavy metalwork.'
  },
  {
    id: '9',
    title: 'Sheet Metal Fabrication - Small Batch',
    type: 'Services',
    price: 12000,
    location: 'Surat',
    image: 'https://images.unsplash.com/photo-1592878909735-7e2d3f3d4f4a?w=400&h=300&fit=crop',
    description: 'Batch fabrication for ducts, panels, and enclosures. Prototyping welcome.'
  }
]

export function ListingsProvider({ children }) {
  const [listings, setListings] = useState([])

  useEffect(() => {
    const raw = localStorage.getItem('listings')
    if (raw) {
      try {
        setListings(JSON.parse(raw))
      } catch (e) {
        setListings(DEFAULT_LISTINGS)
      }
    } else {
      setListings(DEFAULT_LISTINGS)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('listings', JSON.stringify(listings))
  }, [listings])

  const addListing = (data) => {
    const listing = {
      id: Date.now().toString(),
      ...data
    }
    setListings((s) => [listing, ...s])
    return listing
  }

  const value = {
    listings,
    addListing
  }

  return (
    <ListingsContext.Provider value={value}>
      {children}
    </ListingsContext.Provider>
  )
}

export default ListingsContext
