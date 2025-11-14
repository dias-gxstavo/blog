'use client'

import { KBarSearchProvider } from 'pliny/search/KBar'
import { useRouter } from 'next/navigation'

export const SearchProvider = ({ children }) => {
  const router = useRouter()
  return (
    <KBarSearchProvider
      kbarConfig={{
        searchDocumentsPath: 'search.json',
        defaultActions: [
          {
            id: 'homepage',
            name: 'Homepage',
            shortcut: ['K'],
            keywords: 'home main page',
            section: 'Home',
            perform: () => router.push('/'),
          },
        ],
      }}
    >
      {children}
    </KBarSearchProvider>
  )
}