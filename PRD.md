# Planning Guide

A clean, modern landing page for Aibomi ApS that showcases their AI-powered web and mobile app development services with Scandinavian design principles.

**Experience Qualities**:
1. **Calm** - Generous whitespace and minimal elements create a sense of tranquility and focus
2. **Professional** - Clean typography and structured layouts convey expertise and reliability
3. **Approachable** - Warm accents and clear communication make the company feel accessible

**Complexity Level**: Content Showcase (information-focused)
This is a marketing landing page focused on presenting company information, services, and a contact method without complex interactions or state management.

## Essential Features

### Hero Section
- **Functionality**: Displays company name, tagline, and primary value proposition
- **Purpose**: Immediately communicate what Aibomi does and their specialization
- **Trigger**: Page load
- **Progression**: User arrives → sees company name and AI/webapp specialization → understands offering
- **Success criteria**: Clear headline visible above fold, company value proposition understood within 3 seconds

### Services Overview
- **Functionality**: Showcases core offerings (mobile apps, web apps, AI coding specialization)
- **Purpose**: Educate visitors about Aibomi's capabilities
- **Trigger**: User scrolls down from hero
- **Progression**: User scrolls → sees service cards → reads descriptions → understands capabilities
- **Success criteria**: Three distinct service areas clearly presented with icons and descriptions

### Contact Form
- **Functionality**: Collects name, email, and message; generates mailto link to info@aibomi.eu
- **Purpose**: Enable potential clients to reach out
- **Trigger**: User clicks contact section or fills form
- **Progression**: User enters details → validates input → clicks send → opens email client with pre-filled content
- **Success criteria**: Form validates required fields, mailto link includes all form data, clear success feedback

### Company Information
- **Functionality**: Displays company details and expertise areas
- **Purpose**: Build credibility and provide context
- **Trigger**: User scrolls through page
- **Progression**: User reads → understands specialization → builds trust
- **Success criteria**: Company name (Aibomi ApS), contact email (info@aibomi.eu), and specialization clearly visible

## Edge Case Handling
- **Empty form submission**: Disable send button until all required fields are filled
- **Invalid email format**: Real-time validation with clear error messaging
- **Mobile viewport**: Fully responsive design with stacked layouts on small screens
- **Email client unavailable**: Provide fallback displaying the email address directly

## Design Direction
The design should evoke Scandinavian minimalism - clean, functional, and beautiful. Think light backgrounds, ample breathing room, natural color palette with muted accents, and a sense of ordered calm. The aesthetic should feel premium but unpretentious, modern but timeless.

## Color Selection
A Scandinavian palette emphasizing natural light, warmth, and subtle sophistication.

- **Primary Color**: Deep charcoal (oklch(0.25 0.01 260)) - Conveys professionalism and technical expertise without harshness
- **Secondary Colors**: 
  - Warm off-white background (oklch(0.98 0.005 85)) - Creates the bright, airy feeling of Nordic interiors
  - Soft warm gray (oklch(0.88 0.01 75)) - For cards and subtle differentiation
- **Accent Color**: Warm terracotta/rust (oklch(0.62 0.12 35)) - Adds human warmth and draws attention to CTAs, inspired by Scandinavian textile accents
- **Foreground/Background Pairings**:
  - Primary on Background (oklch(0.25 0.01 260) on oklch(0.98 0.005 85)) - Ratio 12.8:1 ✓
  - Foreground on Background (oklch(0.20 0.01 260) on oklch(0.98 0.005 85)) - Ratio 15.2:1 ✓
  - Accent on Background (oklch(0.62 0.12 35) on oklch(0.98 0.005 85)) - Ratio 4.9:1 ✓
  - White on Accent (oklch(0.98 0.005 85) on oklch(0.62 0.12 35)) - Ratio 4.9:1 ✓

## Font Selection
Typography should embody Scandinavian clarity - geometric, legible, and confident without being overly decorative.

- **Typographic Hierarchy**:
  - H1 (Hero Title): DM Sans Bold/56px/tight (-0.02em) - Strong, geometric presence
  - H2 (Section Headers): DM Sans SemiBold/36px/tight (-0.01em) - Clear hierarchy
  - H3 (Card Titles): DM Sans Medium/24px/normal - Balanced weight
  - Body (Descriptions): DM Sans Regular/18px/relaxed (1.7) - Highly readable
  - Small (Labels): DM Sans Medium/14px/normal (0.01em) - Subtle emphasis

## Animations
Animations should be minimal and purposeful, enhancing usability without distraction. Gentle fades and subtle slides reinforce navigation flow. Hover states provide tactile feedback with micro-scale changes. Form interactions offer immediate validation feedback. Overall motion is restrained and physics-based, reflecting Scandinavian design restraint.

## Component Selection
- **Components**:
  - Card: Service showcases with subtle shadows and rounded corners (--radius)
  - Input, Textarea, Label: Form fields with clean borders and focus states
  - Button: Primary CTA with accent color, medium weight, generous padding
  - Separator: Subtle dividers between sections
- **Customizations**:
  - Hero section: Custom gradient background using layered mesh gradients
  - Service cards: Grid layout with hover lift effect (subtle transform + shadow)
  - Form: Custom validation states with inline error messages
- **States**:
  - Buttons: Default (accent color), Hover (darker accent + subtle lift), Active (slight scale down), Disabled (muted + reduced opacity)
  - Inputs: Default (border-input), Focus (ring-accent), Error (border-destructive), Success (border-green)
- **Icon Selection**:
  - Code (for AI coding specialization)
  - DeviceMobile (for mobile apps)
  - Globe (for web apps)
  - PaperPlaneTilt (for contact/send)
  - Envelope (for email)
- **Spacing**:
  - Section padding: py-24 (desktop), py-16 (mobile)
  - Container max-width: max-w-6xl
  - Card padding: p-8
  - Grid gaps: gap-8 (cards), gap-6 (form fields)
  - Element spacing: space-y-4 (text blocks)
- **Mobile**:
  - Hero: Single column, reduced font sizes (H1: 40px)
  - Services: Stack cards vertically with full width
  - Form: Full width inputs, increased touch targets (min 48px)
  - Navigation: Simplified header with company name only
  - Spacing: Reduced section padding (py-12)
