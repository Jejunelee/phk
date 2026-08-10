export interface Section4Settings {
    id: number;
    section_title: string;
    background_image_url: string;
    overlay_opacity: number;
    text_color: string;
    accent_color: string;
    event_date_color: string;
    intro_text: string;
    slots_text: string;
    location_text: string;
    email_text: string;
    mobile_text: string;
    quote_text: string;
    featured_image_url: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface Section4Event {
    id: number;
    date: string;
    title: string;
    display_order: number;
    created_at: string;
    updated_at: string;
  }