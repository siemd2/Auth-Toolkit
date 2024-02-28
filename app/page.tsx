import { Poppins } from "next/font/google"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/auth/login-button"

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})

export default function Home() {
  return(
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
      <div className="space-y-6 text-center">
        <h1 className={cn(
          "text-6xl font-semibold text-white drop-shadow-md",
          font.className,
          )}>
          Edison Motors
        </h1>
        <p className="text-lg text-white">
          A custom authentication service
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}