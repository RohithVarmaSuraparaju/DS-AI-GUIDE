import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

const navigationItems = [
  { id: 'introduction', title: 'Introduction', level: 1 },
  { id: 'companies', title: 'Top Tech Companies', level: 1 },
  { id: 'google', title: 'Google (Alphabet)', level: 2 },
  { id: 'amazon', title: 'Amazon', level: 2 },
  { id: 'microsoft', title: 'Microsoft', level: 2 },
  { id: 'apple', title: 'Apple', level: 2 },
  { id: 'meta', title: 'Meta (Facebook)', level: 2 },
  { id: 'best-practices', title: 'Portfolio Best Practices', level: 1 },
  { id: 'structure', title: 'Portfolio Structure & Projects', level: 1 },
  { id: 'project-recommendations', title: 'Project Recommendations', level: 2 },
]

export function Navigation({ activeSection, onSectionClick }) {
  const [expandedSections, setExpandedSections] = useState(new Set(['companies', 'structure']))

  const toggleSection = (sectionId) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  const getSubItems = (parentId) => {
    const parentIndex = navigationItems.findIndex(item => item.id === parentId)
    if (parentIndex === -1) return []
    
    const subItems = []
    for (let i = parentIndex + 1; i < navigationItems.length; i++) {
      if (navigationItems[i].level <= 1) break
      if (navigationItems[i].level === 2) {
        subItems.push(navigationItems[i])
      }
    }
    return subItems
  }

  return (
    <nav className="bg-gray-50 border-r h-full overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Contents</h2>
        <ul className="space-y-2">
          {navigationItems.filter(item => item.level === 1).map((item) => {
            const subItems = getSubItems(item.id)
            const hasSubItems = subItems.length > 0
            const isExpanded = expandedSections.has(item.id)
            
            return (
              <li key={item.id}>
                <div className="flex items-center">
                  <button
                    onClick={() => onSectionClick(item.id)}
                    className={`flex-1 text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.title}
                  </button>
                  {hasSubItems && (
                    <button
                      onClick={() => toggleSection(item.id)}
                      className="p-1 text-gray-500 hover:text-gray-700"
                    >
                      {isExpanded ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </div>
                {hasSubItems && isExpanded && (
                  <ul className="ml-4 mt-2 space-y-1">
                    {subItems.map((subItem) => (
                      <li key={subItem.id}>
                        <button
                          onClick={() => onSectionClick(subItem.id)}
                          className={`w-full text-left px-3 py-1 rounded-md text-sm transition-colors ${
                            activeSection === subItem.id
                              ? 'bg-blue-100 text-blue-700'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {subItem.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

