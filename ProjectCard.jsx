import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Lightbulb, Code, Target } from 'lucide-react'

export function ProjectCard({ title, concept, skills, ideas }) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-lg text-green-700 flex items-center">
          <Target className="h-5 w-5 mr-2" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start space-x-3">
          <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Concept:</h4>
            <p className="text-gray-600 text-sm">{concept}</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Code className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Skills Demonstrated:</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {ideas && ideas.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Project Ideas:</h4>
            <ul className="space-y-2">
              {ideas.map((idea, index) => (
                <li key={index} className="bg-gray-50 p-3 rounded-md">
                  <h5 className="font-medium text-gray-800 mb-1">{idea.title}</h5>
                  <p className="text-sm text-gray-600">{idea.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

