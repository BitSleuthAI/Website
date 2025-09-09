# Product Requirements Document (PRD)

## 1. Overview
**Product Name:** BitSleuth Website  
**Description:** A comprehensive Next.js 15 website featuring product landing pages for an AI-powered Bitcoin wallet analyzer and Bitcoin wallet app, educational glossary, SEO optimization, and AI-powered copy generation capabilities. The website serves as the primary marketing and educational hub for BitSleuth's Bitcoin analysis tools.  
**Goals:** 
- Drive user acquisition and conversion for BitSleuth's AI-powered Bitcoin wallet analyzer
- Provide educational resources about Bitcoin concepts through an interactive glossary
- Establish BitSleuth as a trusted authority in Bitcoin analysis and privacy
- Generate high-converting marketing copy using AI to optimize landing page performance

## 2. Problem Statement
**What problem are we solving?** 
- Bitcoin users and analysts lack accessible tools to understand wallet behavior, transaction patterns, and privacy risks
- Traditional blockchain explorers provide raw data without meaningful insights or risk analysis
- New Bitcoin users need educational resources to understand core concepts and terminology
- Marketing teams need efficient ways to generate and test different copy variants for better conversion rates

**Why is this important?** 
- Bitcoin adoption is growing, but users often make privacy mistakes due to lack of understanding
- Professional analysts need better tools for investigation and compliance
- Educational resources help reduce user errors and improve overall Bitcoin ecosystem health
- AI-powered copy generation can significantly improve marketing ROI and user acquisition

## 3. Objectives and Success Metrics
**Objectives (business + user goals):**
- Increase user sign-ups for BitSleuth Analyzer by 200% within 6 months
- Establish BitSleuth as the go-to resource for Bitcoin education and analysis
- Achieve 90%+ user satisfaction with the educational glossary content
- Reduce marketing copy creation time by 80% through AI automation

**KPIs / measurable success metrics:**
- Monthly active users (MAU) on the website
- Conversion rate from website visitors to app sign-ups
- Time spent on glossary pages and educational content
- AI copy generation usage and A/B test performance
- SEO rankings for Bitcoin-related keywords
- User engagement metrics (bounce rate, session duration, pages per session)

## 4. Target Audience
**Who are the users?**
- **Primary:** Bitcoin analysts, investigators, and compliance professionals
- **Secondary:** Bitcoin enthusiasts and advanced users seeking privacy insights
- **Tertiary:** New Bitcoin users looking for educational resources
- **Internal:** Marketing teams using AI copy generation tools

**Personas / user stories:**
- **Alex the Analyst:** "As a blockchain investigator, I need to quickly analyze wallet behavior and identify privacy risks to help with compliance cases."
- **Sarah the Student:** "As a Bitcoin newcomer, I need to understand basic concepts like addresses, transactions, and privacy to use Bitcoin safely."
- **Mike the Marketer:** "As a marketing professional, I need to generate multiple copy variants quickly to test what resonates with our audience."

## 5. Features & Requirements
### Core Features
- [x] **Multi-Product Landing Pages:** Dedicated pages for BitSleuth Analyzer (`/analyzer`) and BitSleuth Wallet (`/wallet`) with comprehensive feature showcases
- [x] **Interactive Wallet Analysis:** Hero section with address input that redirects to live analysis at `https://app.bitsleuth.ai/address/{address}`
- [x] **Educational Glossary:** Comprehensive Bitcoin terminology guide with 15+ terms and individual detail pages
- [x] **AI-Powered Copy Generation:** Genkit + Gemini 2.0 Flash integration for generating marketing copy variants
- [x] **Responsive Design:** Mobile-first design with Tailwind CSS and shadcn/ui components
- [x] **SEO Optimization:** Custom robots.ts, sitemap.ts, and metadata for search engine visibility
- [x] **Privacy Compliance:** Cookie consent system with Google Analytics gating
- [x] **Theme Support:** Light/dark mode toggle with system preference detection

### Nice-to-Have Features
- [ ] **Advanced Analytics Dashboard:** Real-time website performance metrics and user behavior insights
- [ ] **A/B Testing Framework:** Built-in system for testing different copy variants and page layouts
- [ ] **User Feedback System:** Interactive feedback collection for continuous improvement
- [ ] **Multi-language Support:** Internationalization for global Bitcoin community
- [ ] **Advanced Search:** Full-text search across glossary and educational content
- [ ] **Social Sharing:** Enhanced sharing capabilities for educational content
- [ ] **Newsletter Integration:** Email capture and newsletter signup functionality
- [ ] **Live Chat Support:** Real-time customer support integration

## 6. Technical Considerations
**Platforms:**
- **Frontend:** Next.js 15 with App Router, React 18, TypeScript
- **Styling:** Tailwind CSS with shadcn/ui component library and Radix primitives
- **AI Integration:** Google Genkit with Gemini 2.0 Flash model
- **Deployment:** Vercel (optimized for Next.js 15)
- **Analytics:** Google Analytics with privacy-compliant consent management

**Integrations:**
- **BitSleuth App:** Direct integration with `https://app.bitsleuth.ai` for wallet analysis
- **Google AI:** Gemini 2.0 Flash for copy generation and content enhancement
- **Google Analytics:** User behavior tracking and conversion measurement
- **Firebase:** Potential future integration for user management and data storage

**Dependencies:**
- Node.js 18+ (20+ recommended)
- Google AI API key for copy generation features
- Google Analytics Measurement ID for tracking
- Vercel deployment platform for hosting

## 7. Risks & Assumptions
**Risks:**
- **API Dependency:** Reliance on Google AI services for copy generation could impact functionality if service is unavailable
- **Regulatory Changes:** Bitcoin regulations could affect content and messaging requirements
- **Competition:** Other Bitcoin analysis tools could capture market share
- **Technical Debt:** Rapid development could lead to maintenance challenges
- **SEO Changes:** Search engine algorithm updates could impact organic traffic

**Assumptions:**
- Bitcoin adoption will continue growing, increasing demand for analysis tools
- Users prefer educational content that's easy to understand and navigate
- AI-generated copy will perform better than manually written content
- Privacy-conscious users will appreciate transparent data handling
- Mobile usage will continue to grow, requiring responsive design priority

## 8. Timeline & Milestones
**Phase 1: Foundation (Completed)**
- ✅ Core website structure and routing
- ✅ Landing pages for Analyzer and Wallet products
- ✅ Educational glossary with 15+ Bitcoin terms
- ✅ AI copy generation system with Genkit integration
- ✅ SEO optimization and privacy compliance
- ✅ Responsive design and theme support

**Phase 2: Enhancement (Q4 2025)**
- [ ] Advanced analytics and user behavior tracking
- [ ] A/B testing framework for copy optimization
- [ ] Enhanced glossary with more terms and interactive elements
- [ ] Performance optimization and Core Web Vitals improvement
- [ ] Advanced AI features for content personalization

**Phase 3: Scale (Q1 2026)**
- [ ] Multi-language support and internationalization
- [ ] Advanced search and content discovery
- [ ] User feedback and community features
- [ ] Integration with additional BitSleuth products
- [ ] Advanced marketing automation tools

## 9. Open Questions
**Any unresolved items for discussion:**
- Should we implement user accounts for personalized content and saved preferences?
- What level of AI-generated content should be human-reviewed before publication?
- How should we handle potential conflicts between educational content and commercial messaging?
- Should we integrate with additional blockchain networks beyond Bitcoin?
- What metrics should we prioritize for measuring educational content effectiveness?
- How should we handle user-generated content and community contributions?
- Should we implement a freemium model for advanced AI copy generation features?