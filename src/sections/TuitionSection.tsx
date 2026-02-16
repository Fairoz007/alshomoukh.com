import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tuitionData = [
  {
    grade: 'Foundation Stage (FS1 - FS2)',
    tuition: 'OMR 4,250',
    registration: 'OMR 150',
  },
  {
    grade: 'Primary Years (Year 1 - 6)',
    tuition: 'OMR 5,800',
    registration: 'OMR 250',
  },
  {
    grade: 'Secondary School (Year 7 - 11)',
    tuition: 'OMR 7,150',
    registration: 'OMR 300',
  },
  {
    grade: 'Sixth Form (Year 12 - 13)',
    tuition: 'OMR 8,400',
    registration: 'OMR 350',
  },
];

const TuitionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    grade: '',
  });

  useEffect(() => {
    const section = sectionRef.current;
    const table = tableRef.current;
    const form = formRef.current;

    if (!section || !table || !form) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none none',
        }
      });

      tl.fromTo(table,
        { x: '-8vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }
      )
      .fromTo(form,
        { x: '8vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
        '-=0.5'
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry. Our admissions team will contact you within 24 hours.');
    setFormData({ parentName: '', email: '', grade: '' });
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#F4F1EA]"
    >
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2
              className="text-3xl md:text-4xl text-[#0B1E2F] mb-2"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Academic Investment
            </h2>
            <p className="text-[#6B7280]">
              Transparency and clarity in our commitment to your child's future.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Tuition Table */}
            <div ref={tableRef} style={{ opacity: 0 }}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#0B1E2F]">
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#0B1E2F] bg-[#0B1E2F] text-white">
                        Academic Grade
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#0B1E2F] bg-[#0B1E2F] text-white">
                        Annual Tuition
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-[#0B1E2F] bg-[#0B1E2F] text-white">
                        Registration Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tuitionData.map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-[rgba(17,24,39,0.1)] hover:bg-white/50 transition-colors duration-300"
                      >
                        <td className="py-4 px-4 text-sm text-[#0B1E2F]">
                          {row.grade}
                        </td>
                        <td className="py-4 px-4 text-sm text-[#6B7280]">
                          {row.tuition}
                        </td>
                        <td className="py-4 px-4 text-sm text-[#6B7280]">
                          {row.registration}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#6B7280] mt-4">
                * All fees are inclusive of premium learning materials and core extracurricular activities.
              </p>
            </div>

            {/* Request Form */}
            <div
              ref={formRef}
              className="bg-white p-8 shadow-sm"
              style={{ opacity: 0 }}
            >
              <h3
                className="text-xl text-[#0B1E2F] mb-2"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Request Information
              </h3>
              <p className="text-sm text-[#6B7280] mb-6">
                Our advisors will contact you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wide text-[#6B7280] mb-2">
                    Parent Name
                  </label>
                  <input
                    type="text"
                    value={formData.parentName}
                    onChange={(e) =>
                      setFormData({ ...formData, parentName: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-[rgba(17,24,39,0.15)] bg-[#F9F9F7] text-sm focus:outline-none focus:border-[#C9A45C] transition-colors duration-300"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wide text-[#6B7280] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-[rgba(17,24,39,0.15)] bg-[#F9F9F7] text-sm focus:outline-none focus:border-[#C9A45C] transition-colors duration-300"
                    placeholder="name@domain.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wide text-[#6B7280] mb-2">
                    Grade of Interest
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) =>
                      setFormData({ ...formData, grade: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-[rgba(17,24,39,0.15)] bg-[#F9F9F7] text-sm focus:outline-none focus:border-[#C9A45C] transition-colors duration-300 appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select Level</option>
                    <option value="foundation">Foundation Stage</option>
                    <option value="primary">Primary Years</option>
                    <option value="secondary">Secondary School</option>
                    <option value="sixth">Sixth Form</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0B1E2F] text-white text-sm font-medium tracking-wide hover:bg-[#1a3045] transition-colors duration-300"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TuitionSection;
