import PageHeader from '../components/PageHeader';
import { MapPin, Calendar, Clock } from 'lucide-react';

const CampusTour = () => {
    return (
        <div className="bg-[#F4F1EA] min-h-screen pb-20">
            <PageHeader
                title="Campus Tour"
                subtitle="Experience our world-class facilities in person."
                backgroundImage="/images/facilities_hero.jpg"
            />

            <div className="max-w-5xl mx-auto px-6 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-3xl text-[#0B1E2F] mb-6 font-serif">Schedule Your Visit</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Seeing is believing. We invite prospective families to tour our campus, meet our educators, and witness the learning environment firsthand. Tours are available on weekdays by appointment.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white shadow-lg overflow-hidden">
                    <div className="p-10 lg:p-12">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs uppercase text-gray-500 mb-2">First Name</label>
                                    <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-[#C9A45C] outline-none transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase text-gray-500 mb-2">Last Name</label>
                                    <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-[#C9A45C] outline-none transition-colors" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs uppercase text-gray-500 mb-2">Email Address</label>
                                <input type="email" className="w-full border-b border-gray-300 py-2 focus:border-[#C9A45C] outline-none transition-colors" />
                            </div>
                            <div>
                                <label className="block text-xs uppercase text-gray-500 mb-2">Phone Number</label>
                                <input type="tel" className="w-full border-b border-gray-300 py-2 focus:border-[#C9A45C] outline-none transition-colors" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs uppercase text-gray-500 mb-2">Preferred Date</label>
                                    <div className="relative">
                                        <input type="date" className="w-full border-b border-gray-300 py-2 focus:border-[#C9A45C] outline-none transition-colors" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs uppercase text-gray-500 mb-2">Grade of Interest</label>
                                    <select className="w-full border-b border-gray-300 py-2 focus:border-[#C9A45C] outline-none transition-colors bg-transparent">
                                        <option>Early Years</option>
                                        <option>Primary</option>
                                        <option>Secondary</option>
                                    </select>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-[#0B1E2F] text-white py-4 mt-4 hover:bg-[#1a3045] transition-colors font-medium tracking-wide">
                                Request Tour
                            </button>
                        </form>
                    </div>

                    <div className="bg-[#0B1E2F] text-white p-10 lg:p-12 flex flex-col justify-center">
                        <h3 className="text-2xl font-serif text-[#C9A45C] mb-6">Visitor Information</h3>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <MapPin className="text-[#C9A45C] mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-medium mb-1">Location</h4>
                                    <p className="text-gray-400 text-sm">Muscat Academic Quarter, Sector 4<br />Riyadh, Saudi Arabia</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Clock className="text-[#C9A45C] mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-medium mb-1">Tour Timings</h4>
                                    <p className="text-gray-400 text-sm">Sun - Thu: 9:00 AM, 11:00 AM, 1:00 PM</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Calendar className="text-[#C9A45C] mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-medium mb-1">Open Days</h4>
                                    <p className="text-gray-400 text-sm">Next Open House: November 12, 2025</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-700">
                            <p className="text-sm text-gray-400">
                                Please bring valid ID for entrance security. Tours typically last 45-60 minutes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampusTour;
