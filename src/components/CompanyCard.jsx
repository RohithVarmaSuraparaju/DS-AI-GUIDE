import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'

export function CompanyCard({ company, requirements, takeaways }) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-xl text-blue-700">{company}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {requirements && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
            <div className="space-y-2">
              {requirements.education && (
                <div>
                  <span className="font-medium text-gray-700">Education: </span>
                  <span className="text-gray-600">{requirements.education}</span>
                </div>
              )}
              {requirements.experience && (
                <div>
                  <span className="font-medium text-gray-700">Experience: </span>
                  <span className="text-gray-600">{requirements.experience}</span>
                </div>
              )}
              {requirements.skills && (
                <div>
                  <span className="font-medium text-gray-700">Technical Skills: </span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {requirements.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        
        {takeaways && (
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Key Takeaways for Master's Students:</h4>
            <ul className="space-y-1 text-sm text-blue-800">
              {takeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  {takeaway}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

