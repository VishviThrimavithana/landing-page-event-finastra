import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

// Define the schema based on RegistrationData interface
const registrationSchema = new mongoose.Schema({
  // Personal Information
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  jobTitle: { type: String, required: true },
  company: { type: String, required: true },
  industry: { type: String },
  experience: { type: String },

  // Conference Preferences
  ticketType: { type: String, enum: ['early-bird', 'standard', 'vip'], required: true },
  interests: { type: [String], default: [] },
  dietaryRestrictions: { type: String },
  accessibility: { type: String },

  // Networking
  networkingGoals: { type: String, required: true },
  linkedinProfile: { type: String },

  // Payment (Note: In production, integrate a payment gateway like Stripe here)
  billingAddress: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  postalCode: { type: String },

  // Agreements
  termsAccepted: { type: Boolean, required: true },
  marketingConsent: { type: Boolean, default: false },

  // Optional: Add timestamps for created/updated
  createdAt: { type: Date, default: Date.now },
});

// Create model (reuse if exists)
const Registration = mongoose.models.Registration || mongoose.model('Registration', registrationSchema);

// Helper to connect to DB (cached connection for performance in Next.js)
let cachedDb: typeof mongoose | null = null;
async function connectDB() {
  if (cachedDb) return cachedDb;
  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined');
  }
  const opts = { bufferCommands: false };
  cachedDb = await mongoose.connect(process.env.MONGODB_URI, opts);
  return cachedDb;
}

// POST handler
export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const data = await req.json(); // Parse form data from request body
    
    // Validate required fields (Mongoose will handle most, but add custom if needed)
    const newRegistration = new Registration(data);
    await newRegistration.save(); // Save to MongoDB

    return NextResponse.json({ message: 'Registration successful' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Registration failed', error }, { status: 500 });
  }
}