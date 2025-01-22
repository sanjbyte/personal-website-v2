import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Publications() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:underline mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to home
      </Link>
      <h1 className="text-3xl font-bold mb-8">Publications</h1>
      <div className="space-y-12">
        <section>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  <Link
                    href="https://petsymposium.org/popets/2024/popets-2024-0046.pdf"
                    target="_blank"
                    className="hover:text-blue-600 transition-colors underline decoration-gray-300 hover:decoration-blue-600"
                  >
                    Privacy in Online Dating Services
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bouma-Sims, E., S. Ananda Kumar, and L. Cranor, "Exploring the privacy experiences of closeted users
                  of online dating services in the US," in Proceedings on Privacy Enhancing Technologies, 2024.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <Link
                    href="https://www.usenix.org/system/files/soups2022-poster43_bouma_sims_abstract_final.pdf"
                    target="_blank"
                    className="hover:text-blue-600 transition-colors underline decoration-gray-300 hover:decoration-blue-600"
                  >
                    Out of Their Control: Privacy Attitudes and Behaviors Among Tinder Users
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bouma-Sims, E., S. Ananda Kumar, and L. Cranor. "Out of Their Control: Investigating Privacy Attitudes
                  and Behaviors Among Tinder Users." Proceedings of the Eighteenth Symposium on Usable Privacy and
                  Security (SOUPS), 2022.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <Link
                    href="https://www.researchgate.net/publication/332658868_Cloud_Computing_Secure_Transmission_of_High_Definition_Videos_Using_Cryptographic_Approach"
                    target="_blank"
                    className="hover:text-blue-600 transition-colors underline decoration-gray-300 hover:decoration-blue-600"
                  >
                    Secure Video Transmission
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Haffishthullah, Anwar Basha Sai, S A, Sanjnah M, Srimathi. (2018). Cloud Computing: Secure
                  Transmission of High Definition Videos Using Cryptographic Approach.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-6">Contributions</h2>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  <Link
                    href="https://www.sciencedirect.com/science/article/pii/S0308596124000144"
                    target="_blank"
                    className="hover:text-blue-600 transition-colors underline decoration-gray-300 hover:decoration-blue-600"
                  >
                    Broadband Labels proposed to Federal Trade Commission
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Choy, C., Young, E., Li, M., Cranor, L. F., Peha, J. M. (2023). Consumer-Driven Design and Evaluation
                  of Broadband Labels.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <Link
                    href="https://petsymposium.org/2022/files/papers/issue3/popets-2022-0086.pdf"
                    target="_blank"
                    className="hover:text-blue-600 transition-colors underline decoration-gray-300 hover:decoration-blue-600"
                  >
                    Re-design of HIPAA Authorization
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pearman, S., Young, E., Cranor, L. F. (2022). User-friendly yet rarely read: A case study on the
                  redesign of an online HIPAA authorization. Proceedings on Privacy Enhancing Technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

