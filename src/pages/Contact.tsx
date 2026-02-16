import PageHeader from '../components/PageHeader';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-[#F4F1EA] min-h-screen pb-20">
            <PageHeader
                title="Contact Us"
                subtitle="We are here to answer your questions and welcome you."
            />

            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-8 text-center border-t-2 border-[#C9A45C] shadow-sm">
                        <div className="w-12 h-12 bg-[#F4F1EA] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0B1E2F]">
                            <Phone size={20} />
                        </div>
                        <h3 className="text-lg font-medium text-[#0B1E2F] mb-2">Call Us</h3>
                        <p className="text-gray-600 mb-1">Main Reception: +966 11 400 2000</p>
                        <p className="text-gray-600">Admissions: +966 11 400 2001</p>
                    </div>

                    <div className="bg-white p-8 text-center border-t-2 border-[#C9A45C] shadow-sm">
                        <div className="w-12 h-12 bg-[#F4F1EA] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0B1E2F]">
                            <Mail size={20} />
                        </div>
                        <h3 className="text-lg font-medium text-[#0B1E2F] mb-2">Email Us</h3>
                        <p className="text-gray-600 mb-1">info@alshomoukh.edu</p>
                        <p className="text-gray-600">admissions@alshomoukh.edu</p>
                    </div>

                    <div className="bg-white p-8 text-center border-t-2 border-[#C9A45C] shadow-sm">
                        <div className="w-12 h-12 bg-[#F4F1EA] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0B1E2F]">
                            <MapPin size={20} />
                        </div>
                        <h3 className="text-lg font-medium text-[#0B1E2F] mb-2">Visit Us</h3>
                        <p className="text-gray-600 px-4">
                            Muscat Academic Quarter, Sector 4<br />Riyadh, Saudi Arabia
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl text-[#0B1E2F] mb-6 font-serif">Send a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input type="text" placeholder="First Name" className="w-full bg-white border border-gray-300 p-3 outline-none focus:border-[#C9A45C]" />
                                <input type="text" placeholder="Last Name" className="w-full bg-white border border-gray-300 p-3 outline-none focus:border-[#C9A45C]" />
                            </div>
                            <input type="email" placeholder="Email Address" className="w-full bg-white border border-gray-300 p-3 outline-none focus:border-[#C9A45C]" />
                            <select className="w-full bg-white border border-gray-300 p-3 outline-none focus:border-[#C9A45C] text-gray-500">
                                <option>General Inquiry</option>
                                <option>Admissions</option>
                                <option>Careers</option>
                                <option>Media</option>
                            </select>
                            <textarea rows={5} placeholder="Your Message" className="w-full bg-white border border-gray-300 p-3 outline-none focus:border-[#C9A45C]"></textarea>
                            <button className="px-8 py-3 bg-[#0B1E2F] text-white hover:bg-[#1a3045] transition-colors">
                                SendMessage
                            </button>
                        </form>
                    </div>

                    <div className="h-full min-h-[400px] bg-gray-200 relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14498.887288632644!2d46.6752956!3d24.7135517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1709825484824!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
