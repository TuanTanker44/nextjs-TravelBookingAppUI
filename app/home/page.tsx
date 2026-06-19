import Header from "../../components/Header";
import SearchBox from "../../components/SearchBox";
import Footer from "../../components/Footer";
import { ImageWithFallback } from "../../components/ImageWithFallback";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section with Beach Background */}
      <div className="relative h-125 flex items-center justify-center">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1660486360130-02ec33fa1ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxiZWFjaCUyMHRyb3BpY2FsJTIwZGVzdGluYXRpb258ZW58MXx8fHwxNzc3MDQ2OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Beach waves"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Search Box Overlay */}
        <div className="relative z-10 px-4 w-full max-w-5xl">
          <SearchBox />
        </div>
      </div>

      {/* Body Content */}
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Popular Destinations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Destination Cards */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1775132679020-d51dda3683dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxiZWFjaCUyMHRyb3BpY2FsJTIwZGVzdGluYXRpb258ZW58MXx8fHwxNzc3MDQ2OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tropical paradise"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Maldives
                </h3>
                <p className="text-gray-600 mb-4">
                  Experience paradise in crystal clear waters
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    $2,499
                  </span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761662864957-09f73d280793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHRyb3BpY2FsJTIwZGVzdGluYXRpb258ZW58MXx8fHwxNzc3MDQ2OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Beach destination"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Bali, Indonesia
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover culture and natural beauty
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    $1,799
                  </span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1660486360130-02ec33fa1ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxiZWFjaCUyMHRyb3BpY2FsJTIwZGVzdGluYXRpb258ZW58MXx8fHwxNzc3MDQ2OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Beach waves"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Santorini, Greece
                </h3>
                <p className="text-gray-600 mb-4">
                  Stunning sunsets and white architecture
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    $2,199
                  </span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
