"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Separator } from "@radix-ui/react-separator"
import { Progress } from "@radix-ui/react-progress"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select"
import { Checkbox } from "../ui/checkbox"
import { Alert, AlertDescription } from "../ui/alert"
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group"
import { ArrowLeft, ArrowRight, Check, CreditCard, User, Building, Target } from "lucide-react"

interface RegistrationData {
  // Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string
  jobTitle: string
  company: string
  industry: string
  experience: string

  // Conference Preferences
  ticketType: "early-bird" | "standard" | "vip"
  interests: string[]
  dietaryRestrictions: string
  accessibility: string

  // Networking
  networkingGoals: string
  linkedinProfile: string

  // Payment
  billingAddress: string
  city: string
  country: string
  postalCode: string

  // Agreements
  termsAccepted: boolean
  marketingConsent: boolean
}

const initialData: RegistrationData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  jobTitle: "",
  company: "",
  industry: "",
  experience: "",
  ticketType: "standard",
  interests: [],
  dietaryRestrictions: "",
  accessibility: "",
  networkingGoals: "",
  linkedinProfile: "",
  billingAddress: "",
  city: "",
  country: "",
  postalCode: "",
  termsAccepted: false,
  marketingConsent: false,
}

const steps = [
  { id: 1, title: "Personal Info", icon: User },
  { id: 2, title: "Conference", icon: Target },
  { id: 3, title: "Networking", icon: Building },
  { id: 4, title: "Payment", icon: CreditCard },
]

const ticketTypes = [
  {
    id: "early-bird",
    name: "Early Bird",
    price: 1299,
    originalPrice: 1599,
    description: "Perfect for individual professionals",
    features: ["All sessions", "Networking events", "Digital materials", "30-day recordings"],
  },
  {
    id: "standard",
    name: "Standard",
    price: 1599,
    description: "Comprehensive conference experience",
    features: ["Everything in Early Bird", "VIP lunch", "Priority seating", "Mobile app", "Meet & greets"],
    popular: true,
  },
  {
    id: "vip",
    name: "VIP",
    price: 2299,
    description: "Premium experience with exclusive access",
    features: ["Everything in Standard", "VIP lounge", "Speaker dinners", "1-on-1 meetings", "Concierge service"],
  },
]

const interests = [
  "Digital Transformation",
  "Artificial Intelligence",
  "Blockchain Technology",
  "Risk Management",
  "Customer Experience",
  "Regulatory Technology",
  "Sustainable Banking",
  "Open Banking",
  "Cybersecurity",
  "Data Analytics",
]

export function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<RegistrationData>(initialData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const updateFormData = <K extends keyof RegistrationData>(field: K, value: RegistrationData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    switch (step) {
      case 1:
        if (!formData.firstName) newErrors.firstName = "First name is required"
        if (!formData.lastName) newErrors.lastName = "Last name is required"
        if (!formData.email) {
          newErrors.email = "Email is required"
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
          newErrors.email = "Please enter a valid email address"
        }
        if (!formData.jobTitle) newErrors.jobTitle = "Job title is required"
        if (!formData.company) newErrors.company = "Company is required"
        if (formData.phone && !/^[\d\s+-]+$/.test(formData.phone)) {
          newErrors.phone = "Please enter a valid phone number"
        }
        break
      case 2:
        if (!formData.ticketType) newErrors.ticketType = "Please select a ticket type"
        if (formData.interests.length === 0) newErrors.interests = "Please select at least one interest"
        break
      case 3:
        if (!formData.networkingGoals) newErrors.networkingGoals = "Please describe your networking goals"
        if (formData.linkedinProfile && !formData.linkedinProfile.includes('linkedin.com/in/')) {
          newErrors.linkedinProfile = "Please enter a valid LinkedIn profile URL"
        }
        break
      case 4:
        if (!formData.billingAddress) newErrors.billingAddress = "Billing address is required"
        if (!formData.city) newErrors.city = "City is required"
        if (!formData.country) newErrors.country = "Country is required"
        if (formData.postalCode && !/^[a-zA-Z0-9\s-]+$/.test(formData.postalCode)) {
          newErrors.postalCode = "Please enter a valid postal code"
        }
        if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept the terms and conditions"
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      router.push("/?registration=success");
    } catch (error) {
      console.error("Registration failed:", error);

    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleInterest = (interest: string) => {
    const current = formData.interests
    const updated = current.includes(interest) ? current.filter((i) => i !== interest) : [...current, interest]
    updateFormData("interests", updated)
  }

  const progress = (currentStep / steps.length) * 100

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Progress Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">Conference Registration</h1>
          <Badge variant="outline">
            {currentStep} of {steps.length}
          </Badge>
        </div>
        <Progress value={progress} className="mb-6" />

        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${currentStep > step.id
                    ? "bg-accent text-accent-foreground border-accent"
                    : currentStep === step.id
                      ? "border-accent text-accent"
                      : "border-muted-foreground text-muted-foreground"
                  }`}
              >
                {currentStep > step.id ? <Check className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
              </div>
              <span
                className={`ml-2 text-sm font-medium ${currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
                  }`}
              >
                {step.title}
              </span>
              {index < steps.length - 1 && (
                <div className={`w-12 h-0.5 mx-4 ${currentStep > step.id ? "bg-accent" : "bg-muted"}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{steps[currentStep - 1].title}</CardTitle>
          <CardDescription>
            {currentStep === 1 && "Tell us about yourself"}
            {currentStep === 2 && "Choose your conference experience"}
            {currentStep === 3 && "Set your networking goals"}
            {currentStep === 4 && "Complete your registration"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateFormData("firstName", e.target.value)}
                    className={errors.firstName ? "border-destructive" : ""}
                  />
                  {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateFormData("lastName", e.target.value)}
                    className={errors.lastName ? "border-destructive" : ""}
                  />
                  {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title *</Label>
                  <Input
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) => updateFormData("jobTitle", e.target.value)}
                    className={errors.jobTitle ? "border-destructive" : ""}
                  />
                  {errors.jobTitle && <p className="text-sm text-destructive">{errors.jobTitle}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => updateFormData("company", e.target.value)}
                    className={errors.company ? "border-destructive" : ""}
                  />
                  {errors.company && <p className="text-sm text-destructive">{errors.company}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  {/* <Label htmlFor="industry">Industry</Label> */}
                  <Select value={formData.industry} onValueChange={(value) => updateFormData("industry", value)}>
                    {/* <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger> */}
                    <SelectContent>
                      <SelectItem value="banking">Banking</SelectItem>
                      <SelectItem value="fintech">Fintech</SelectItem>
                      <SelectItem value="insurance">Insurance</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  {/* <Label htmlFor="experience">Years of Experience</Label> */}
                  <Select value={formData.experience} onValueChange={(value) => updateFormData("experience", value)}>
                    {/* <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger> */}
                    <SelectContent>
                      <SelectItem value="0-2">0-2 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="6-10">6-10 years</SelectItem>
                      <SelectItem value="11-15">11-15 years</SelectItem>
                      <SelectItem value="15+">15+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Conference Preferences */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <Label className="text-base font-semibold">Select Your Ticket Type *</Label>
                <RadioGroup
                  value={formData.ticketType}
                  onValueChange={(value: "early-bird" | "standard" | "vip") => updateFormData("ticketType", value)}
                  className="mt-4"
                >
                  {ticketTypes.map((ticket) => (
                    <div key={ticket.id} className="relative">
                      <div
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${formData.ticketType === ticket.id ? "border-accent bg-accent/5" : "border-border"
                          }`}
                      >
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value={ticket.id} id={ticket.id} />
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Label htmlFor={ticket.id} className="text-lg font-semibold cursor-pointer">
                                {ticket.name}
                              </Label>
                              {ticket.popular && (
                                <Badge className="bg-accent text-accent-foreground">Most Popular</Badge>
                              )}
                              <div className="ml-auto">
                                <span className="text-2xl font-bold text-accent">${ticket.price}</span>
                                {ticket.originalPrice && (
                                  <span className="text-sm text-muted-foreground line-through ml-2">
                                    ${ticket.originalPrice}
                                  </span>
                                )}
                              </div>
                            </div>
                            <p className="text-muted-foreground mb-3">{ticket.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {ticket.features.map((feature) => (
                                <Badge key={feature} variant="secondary" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
                {errors.ticketType && <p className="text-sm text-destructive mt-2">{errors.ticketType}</p>}
              </div>

              <div>
                <Label className="text-base font-semibold">Areas of Interest *</Label>
                <p className="text-sm text-muted-foreground mb-4">Select topics you're most interested in</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {interests.map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox
                        id={interest}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={() => toggleInterest(interest)}
                      />
                      <Label htmlFor={interest} className="text-sm cursor-pointer">
                        {interest}
                      </Label>
                    </div>
                  ))}
                </div>
                {errors.interests && <p className="text-sm text-destructive mt-2">{errors.interests}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dietary">Dietary Restrictions</Label>
                  <Textarea
                    id="dietary"
                    placeholder="Please specify any dietary restrictions or allergies"
                    value={formData.dietaryRestrictions}
                    onChange={(e) => updateFormData("dietaryRestrictions", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accessibility">Accessibility Requirements</Label>
                  <Textarea
                    id="accessibility"
                    placeholder="Please specify any accessibility requirements"
                    value={formData.accessibility}
                    onChange={(e) => updateFormData("accessibility", e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Networking */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="networkingGoals">Networking Goals *</Label>
                <Textarea
                  id="networkingGoals"
                  placeholder="What are you hoping to achieve through networking at this conference?"
                  value={formData.networkingGoals}
                  onChange={(e) => updateFormData("networkingGoals", e.target.value)}
                  className={errors.networkingGoals ? "border-destructive" : ""}
                />
                {errors.networkingGoals && <p className="text-sm text-destructive">{errors.networkingGoals}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn Profile</Label>
                <Input
                  id="linkedin"
                  placeholder="https://linkedin.com/in/yourprofile"
                  value={formData.linkedinProfile}
                  onChange={(e) => updateFormData("linkedinProfile", e.target.value)}
                  className={errors.linkedinProfile ? "border-destructive" : ""}
                />
                {errors.linkedinProfile && <p className="text-sm text-destructive">{errors.linkedinProfile}</p>}
                <p className="text-sm text-muted-foreground">
                  Optional: Share your LinkedIn profile to help other attendees connect with you
                </p>
              </div>
            </div>
          )}

          {/* Step 4: Payment */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Billing Information</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="billingAddress">Address *</Label>
                    <Input
                      id="billingAddress"
                      value={formData.billingAddress}
                      onChange={(e) => updateFormData("billingAddress", e.target.value)}
                      className={errors.billingAddress ? "border-destructive" : ""}
                    />
                    {errors.billingAddress && <p className="text-sm text-destructive">{errors.billingAddress}</p>}
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => updateFormData("city", e.target.value)}
                        className={errors.city ? "border-destructive" : ""}
                      />
                      {errors.city && <p className="text-sm text-destructive">{errors.city}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) => updateFormData("country", e.target.value)}
                        className={errors.country ? "border-destructive" : ""}
                      />
                      {errors.country && <p className="text-sm text-destructive">{errors.country}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input
                        id="postalCode"
                        value={formData.postalCode}
                        onChange={(e) => updateFormData("postalCode", e.target.value)}
                        className={errors.postalCode ? "border-destructive" : ""}
                      />
                      {errors.postalCode && <p className="text-sm text-destructive">{errors.postalCode}</p>}
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span>{ticketTypes.find((t) => t.id === formData.ticketType)?.name} Ticket</span>
                    <span className="font-semibold">
                      ${ticketTypes.find((t) => t.id === formData.ticketType)?.price}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                    <span>Processing Fee</span>
                    <span>$25</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between items-center font-semibold text-lg">
                    <span>Total</span>
                    <span className="text-accent">
                      ${(ticketTypes.find((t) => t.id === formData.ticketType)?.price || 0) + 25}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.termsAccepted}
                    onCheckedChange={(checked) => {
                      if (typeof checked === "boolean") {
                        updateFormData("termsAccepted", checked);
                      }
                    }}
                  />
                  <Label htmlFor="terms" className="text-sm cursor-pointer">
                    I accept the{" "}
                    <a href="#" className="text-accent hover:underline">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-accent hover:underline">
                      Privacy Policy
                    </a>
                    *
                  </Label>
                </div>
                {errors.termsAccepted && <p className="text-sm text-destructive">{errors.termsAccepted}</p>}

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="marketing"
                    checked={formData.marketingConsent}
                    onCheckedChange={(checked) => {
                      if (typeof checked === "boolean") {
                        updateFormData("marketingConsent", checked);
                      }
                    }}
                  />
                  <Label htmlFor="marketing" className="text-sm cursor-pointer">
                    I would like to receive updates about future events and offers
                  </Label>
                </div>
              </div>

              <Alert>
                <AlertDescription>
                  This is a demo registration form. No actual payment will be processed.
                </AlertDescription>
              </Alert>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <Button variant="outline" onClick={prevStep} disabled={currentStep === 1} className="bg-transparent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            {currentStep < steps.length ? (
              <Button onClick={nextStep} className="bg-accent hover:bg-accent/90">
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={isSubmitting} className="bg-accent hover:bg-accent/90">
                {isSubmitting ? "Processing..." : "Complete Registration"}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
