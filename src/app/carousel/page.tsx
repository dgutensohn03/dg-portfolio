import { blocks } from "@/data/blocks"
import Carousel from "@/components/Carousel"

export default function HomePage() {
  return (
    <main>
      <Carousel
        data={blocks}           // pass the array of blocks
        height="min-h-screen"   // optional, full screen height
        interval={5000}         // auto-advance every 5s
        mode="loop"             // continuous cycling
        showProgress={true}     // display progress bar
        showNav={true}          // nav buttons visible
        showMultiple={false}    // one slide at a time
        className="rounded-xl shadow-xl" // optional styling
      />
    </main>
  )
}