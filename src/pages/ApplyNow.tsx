import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, User, Users, GraduationCap, FileText, Send, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ApplyNow = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-6');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const steps = [
    { number: 1, title: 'Student Information', icon: User },
    { number: 2, title: 'Parent/Guardian', icon: Users },
    { number: 3, title: 'Academic Details', icon: GraduationCap },
    { number: 4, title: 'Documents & Submit', icon: FileText },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 text-center reveal opacity-0 translate-y-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
            Application Submitted!
          </h1>
          <p className="text-navy-600 mb-8">
            Thank you for applying to Al Shomoukh International School. We have received your 
            application and will contact you within 5-7 business days to schedule an assessment.
          </p>
          <div className="bg-white rounded-xl p-6 shadow-soft mb-8">
            <p className="text-sm text-navy-600 mb-2">Application Reference Number:</p>
            <p className="font-serif text-2xl font-bold text-gold">SIS-2024-12345</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-gold">
              Return to Home
            </Link>
            <Link to="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/campus.jpg" 
            alt="Apply Now" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 reveal opacity-0 translate-y-6">
            Apply <span className="text-gold">Now</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto reveal opacity-0 translate-y-6 animation-delay-200">
            Begin your journey with Al Shomoukh International School. Complete the application form below.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-ivory">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-10 reveal opacity-0 translate-y-6">
            <div className="flex items-center justify-between">
              {steps.map((s, index) => (
                <div key={s.number} className="flex items-center">
                  <div className={`flex flex-col items-center ${step >= s.number ? 'text-gold' : 'text-navy-300'}`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                      step >= s.number ? 'bg-gold text-white' : 'bg-navy-100 text-navy-400'
                    }`}>
                      <s.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium hidden sm:block">{s.title}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-12 md:w-20 h-0.5 mx-2 ${
                      step > s.number ? 'bg-gold' : 'bg-navy-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-card p-6 md:p-10 reveal opacity-0 translate-y-6">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Student Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="font-serif text-2xl font-bold text-navy mb-6">
                    Student Information
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Enter first name"
                        className="border-navy-200 focus:border-gold focus:ring-gold"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter last name"
                        className="border-navy-200 focus:border-gold focus:ring-gold"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth *</Label>
                      <Input 
                        id="dob" 
                        type="date"
                        className="border-navy-200 focus:border-gold focus:ring-gold"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nationality">Nationality *</Label>
                      <Input 
                        id="nationality" 
                        placeholder="Enter nationality"
                        className="border-navy-200 focus:border-gold focus:ring-gold"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender *</Label>
                    <Select>
                      <SelectTrigger className="border-navy-200 focus:border-gold focus:ring-gold">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Step 2: Parent/Guardian */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="font-serif text-2xl font-bold text-navy mb-6">
                    Parent/Guardian Information
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                      <Input 
                        id="parentName" 
                        placeholder="Enter full name"
                        className="border-navy-200 focus:border-gold focus:ring-gold"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="relationship">Relationship *</Label>
                      <Select>
                        <SelectTrigger className="border-navy-200 focus:border-gold focus:ring-gold">
                          <SelectValue placeholder="Select relationship" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="father">Father</SelectItem>
                          <SelectItem value="mother">Mother</SelectItem>
                          <SelectItem value="guardian">Guardian</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="parentEmail">Email Address *</Label>
                      <Input 
                        id="parentEmail" 
                        type="email"
                        placeholder="Enter email address"
                        className="border-navy-200 focus:border-gold focus:ring-gold"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="parentPhone">Phone Number *</Label>
                      <Input 
                        id="parentPhone" 
                        type="tel"
                        placeholder="Enter phone number"
                        className="border-navy-200 focus:border-gold focus:ring-gold"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Academic Details */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="font-serif text-2xl font-bold text-navy mb-6">
                    Academic Details
                  </h2>
                  <div className="space-y-2">
                    <Label htmlFor="grade">Applying for Grade *</Label>
                    <Select>
                      <SelectTrigger className="border-navy-200 focus:border-gold focus:ring-gold">
                        <SelectValue placeholder="Select grade level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kg1">Kindergarten 1</SelectItem>
                        <SelectItem value="kg2">Kindergarten 2</SelectItem>
                        {Array.from({ length: 12 }, (_, i) => (
                          <SelectItem key={i} value={`grade${i + 1}`}>Grade {i + 1}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentSchool">Current School</Label>
                    <Input 
                      id="currentSchool" 
                      placeholder="Enter current school name (if applicable)"
                      className="border-navy-200 focus:border-gold focus:ring-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="academicYear">Academic Year *</Label>
                    <Select>
                      <SelectTrigger className="border-navy-200 focus:border-gold focus:ring-gold">
                        <SelectValue placeholder="Select academic year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024-2025">2024-2025</SelectItem>
                        <SelectItem value="2025-2026">2025-2026</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Step 4: Documents */}
              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="font-serif text-2xl font-bold text-navy mb-6">
                    Documents & Submission
                  </h2>
                  <div className="bg-ivory rounded-xl p-6 mb-6">
                    <h3 className="font-semibold text-navy mb-4">Required Documents</h3>
                    <ul className="space-y-2 text-sm text-navy-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gold" />
                        Student Passport Copy
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gold" />
                        Parent/Guardian Passport Copy
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gold" />
                        Previous School Records (last 2 years)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gold" />
                        Immunization Records
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gold" />
                        4 Passport-sized Photographs
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-navy-200 rounded-xl p-8 text-center">
                      <FileText className="w-10 h-10 text-navy-300 mx-auto mb-3" />
                      <p className="text-navy-600 text-sm mb-2">
                        Drag and drop files here, or click to browse
                      </p>
                      <p className="text-navy-400 text-xs">
                        Supported formats: PDF, JPG, PNG (max 10MB each)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="terms" className="mt-1" required />
                    <Label htmlFor="terms" className="text-sm text-navy-600">
                      I confirm that all information provided is accurate and complete. 
                      I understand that providing false information may result in the 
                      rejection of this application.
                    </Label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-ivory-200">
                {step > 1 ? (
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                    className="border-navy-200 text-navy"
                  >
                    Previous
                  </Button>
                ) : (
                  <div />
                )}
                {step < 4 ? (
                  <Button 
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="btn-gold flex items-center gap-2"
                  >
                    Next <ChevronRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button 
                    type="submit"
                    className="btn-gold flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Application
                  </Button>
                )}
              </div>
            </form>
          </div>

          {/* Help Section */}
          <div className="mt-10 text-center reveal opacity-0 translate-y-6">
            <p className="text-navy-600 mb-2">Need help with your application?</p>
            <Link to="/contact" className="text-gold font-medium hover:underline inline-flex items-center gap-2">
              Contact Admissions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyNow;
