import { NextResponse } from 'next/server';
import { supabase } from '@/app/lib/supabase/client';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('phk_section4_settings')
      .select('*')
      .eq('id', 1)
      .single();

    if (error) throw error;
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching section4 settings:', error);
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { 
      section_title,
      background_image_url,
      overlay_opacity,
      text_color,
      accent_color,
      event_date_color,
      intro_text,
      slots_text,
      location_text,
      email_text,
      mobile_text,
      quote_text,
      featured_image_url
    } = body;

    const { data, error } = await supabase
      .from('phk_section4_settings')
      .update({
        section_title,
        background_image_url,
        overlay_opacity,
        text_color,
        accent_color,
        event_date_color,
        intro_text,
        slots_text,
        location_text,
        email_text,
        mobile_text,
        quote_text,
        featured_image_url,
        updated_at: new Date().toISOString(),
      })
      .eq('id', 1)
      .select();

    if (error) throw error;
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error updating section4 settings:', error);
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}