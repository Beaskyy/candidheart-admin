/**
 * API Types based on documentation
 */

// Common
export interface PagedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface AdminPagedResponse<T> {
  count: number;
  page: number;
  page_size: number;
  total_pages: number;
  results: T[];
}

export interface ApiError {
  status: "error";
  code: string;
  message: string;
  details?: Record<string, string[]>;
}

// Authentication
export interface UserDto {
  id: string;
  is_premium: boolean;
  identity: OnboardingIdentity | null;
  security: {
    phone_number: string;
    phone_verified: boolean;
  } | null;
  health: OnboardingHealth | null;
  heritage: OnboardingHeritage | null;
  faith: OnboardingFaith | null;
  goals: OnboardingGoals | null;
  deal_breakers: OnboardingDealBreakers | null;
  photos: OnboardingPhotos | null;
  terms: {
    accepted_terms: boolean;
  } | null;
  education: OnboardingEducation | null;
  id_verification: {
    id_type: string;
    document_url: string;
    has_verified: boolean;
  } | null;
}

export interface AuthResponse {
  access_token: string;
  user: UserDto;
}

// Onboarding
export interface OnboardingIdentity {
  first_name: string;
  last_name: string;
  birth_day: string;
  birth_month: string;
  birth_year: string;
  gender: string;
  city: string;
  country: string;
}

export interface OnboardingHealth {
  genotype: string;
  has_disability: boolean;
  disability_description: string;
}

export interface OnboardingHeritage {
  ethnic_origin: string[];
  languages: string[];
}

export interface OnboardingFaith {
  religion: string;
  denomination: string;
}

export interface OnboardingGoals {
  marriage_timeline: string;
  children_desire: string;
  relocation: boolean;
  marriage_intent: string;
  smoker: boolean;
  ever_married: boolean;
  have_children: boolean;
  employed_or_enterprenuer: boolean;
  have_tatoo: boolean;
}

export interface OnboardingDealBreakers {
  hard_filters: string[];
  soft_preferences: string[];
}

export interface OnboardingPhotos {
  photo_urls: string[];
  selfie?: string;
  has_verified_selfie?: boolean;
}

export interface OnboardingEducation {
  education_level: string;
  institution: string;
  job_title: string;
  industries: string[];
}

export interface OnboardingConfig {
  supported_countries: string[];
  supported_country_codes: Array<{ country: string; code: string }>;
  genders: string[];
  genotypes: string[];
  tribes: string[];
  languages: string[];
  religions: string[];
  id_types: string[];
  education_levels: string[];
  industries: string[];
  timelines: string[];
  children_preferences: string[];
  dealbreaker_categories: string[];
  system_config: {
    otp_expiry_seconds: number;
    max_otp_retries: number;
    max_photos: number;
    selfie_verification_required: boolean;
    terms_url: string;
    privacy_policy_url: string;
    code_of_conduct: {
      title: string;
      agreement_text: string;
      items: Array<{ title: string; content: string }>;
    };
    verification_disclaimer: {
      title: string;
      content: string;
    };
  };
}

export interface OnboardingStatus {
  is_complete: boolean;
  current_step: string;
  completed_steps: string[];
  missing_steps: string[];
  onboarding_stage: string;
  onboarding_completed: boolean;
}

// Chat
export interface ConversationDto {
  id: string;
  participant: {
    id: string;
    name: string;
    image: string;
  };
  last_message: {
    id: string;
    content: string;
    created_at: string;
    status: "pending" | "sent" | "delivered" | "read";
  } | null;
  unread_count: number;
}

export interface MessageDto {
  id: string;
  conversation_id: string;
  sender_id: string;
  content: string;
  reply_to: string | null;
  status: "pending" | "sent" | "delivered" | "read";
  created_at: string;
}

// Discover & Matches
export interface CuratedMatchDto {
  id: string;
  name: string;
  age: number;
  location: string;
  cultural_score: number;
  readiness_score: number;
  faith_score: number;
  marriage_timeline: string;
  is_verified: boolean;
  intent_statement: string;
  photo_url: string;
}

export interface MatchRequestDto extends CuratedMatchDto {}

export interface ActiveMatchDto extends CuratedMatchDto {
  photo_urls: string[];
  conversation_id: string;
  can_request_date: boolean;
  stage: "chatting" | "dating";
}

// Admin
export interface AdminUserListItem {
  id: string;
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  phone_number: string;
  age: number;
  sex: string;
  gender: string;
  stage: string;
  onboarding_stage: string;
  status: string;
  profile_status: string;
  id_verified: boolean;
  country: string;
  location: string;
  is_active: boolean;
  is_staff: boolean;
  is_premium: boolean;
  is_email_verified: boolean;
  payment_plan: string;
  premium_expires_at: string | null;
  created_at: string;
  updated_at: string;
  last_login_at: string | null;
  last_active: string | null;
}

export interface AdminUserDetail extends AdminUserListItem {
  main_image: string;
  other_images: string[];
  all_images: string[];
  verification: {
    email_verified: boolean;
    phone_verified: boolean;
    identity_verified: boolean;
    id_verified: boolean;
    id_verification_at: string | null;
    id_verification_result: any;
  };
  payment: {
    plan: string;
    is_premium_active: boolean;
    premium_expires_at: string | null;
    payment_count: number;
    payment_history: any[];
  };
  documents: {
    id_document_url: string;
    selfie_document_url: string;
    degree_verification_url: string;
    identity_card: string;
    all_document_links: string[];
  };
  stats: {
    payment_count: number;
    match_count: number;
    match_request_count: number;
    weekly_match_count: number;
  };
}

export interface AdminTransaction {
  id: string;
  user_id: string;
  user_email: string;
  country_code: string;
  currency: string;
  amount: string;
  tx_ref: string;
  flutterwave_tx_id: string;
  status: "pending" | "success" | "failed";
  created_at: string;
  updated_at: string;
}

export interface AdminMatch {
  id: string;
  user1_id: string;
  user1_email: string;
  user2_id: string;
  user2_email: string;
  conversation_id: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface AdminAnalyticsOverview {
  total_users: number;
  total_users_mom_pct: number;
  total_verified_users: number;
  total_verified_users_mom_pct: number;
  total_pending_users: number;
  total_pending_users_mom_pct: number;
  onboarding_completion_percentage: number;
  open_profiles: number;
  active_matches: number;
  active_dates: number;
  pending_verifications: number;
  unread_risk_signals: number;
  verification_summary: {
    total_pending_health_verification: number;
    total_health_verified: number;
    total_identity_verified_pending: number;
    total_identity_verified: number;
  };
  premium_payments_summary: {
    total_pending_payment: number;
    pending_payment_month_increase_count: number;
    total_successful_payment: number;
    successful_payment_month_increase_count: number;
    total_failed_payment: number;
    failed_payment_month_increase_count: number;
    total_revenue_by_currency: Record<string, string>;
    revenue_month_increase_pct_by_currency: Record<string, number>;
  };
  revenue_summary_by_country: Array<{
    country_code: string;
    amount_by_currency: Record<string, string>;
    paying_users_pct: number;
  }>;
}

export interface AdminAnalyticsTrends {
  start_date: string;
  end_date: string;
  bucket: string;
  signup_trend: Array<{ date: string; value: number }>;
  onboarding_completion_trend: Array<{ date: string; value: number }>;
  message_volume_trend: Array<{ date: string; value: number }>;
}
