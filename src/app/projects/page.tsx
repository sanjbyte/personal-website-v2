import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export default function Projects() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:underline mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to home
      </Link>
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Salesforce</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Ethical and Human tech LLM toxicity labeling and building Key Management Service
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>CyLab</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Usable privacy and security research supervised by Dr. Lorrie Cranor
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>YLAC</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Personal Data Protection bill, 2019 recommendations to Govt. of India for Mr. Ashwini Vaishnaw
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Zoho Corp</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Established a vital security process knowledge base and led the creation of a GDPR-compliant cookie consent banner
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Crayon Data</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Created a lexicon to categorise data to train maya.ai
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

