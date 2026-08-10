'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/app/lib/supabase/client';
import type { Section4Settings, Section4Event } from '@/app/types/PHK/Section4';
import Image from 'next/image';

export default function AdminPHKSection4() {
  const [settings, setSettings] = useState<Partial<Section4Settings>>({});
  const [events, setEvents] = useState<Section4Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('settings');
  const [uploadingFeatured, setUploadingFeatured] = useState(false);
  const [uploadingBackground, setUploadingBackground] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    
    const { data: settingsData } = await supabase
      .from('phk_section4_settings')
      .select('*')
      .eq('id', 1)
      .single();
    if (settingsData) setSettings(settingsData);

    const { data: eventsData } = await supabase
      .from('phk_section4_events')
      .select('*')
      .order('display_order', { ascending: true });
    if (eventsData) setEvents(eventsData);

    setLoading(false);
  };

  const handleSaveSettings = async () => {
    setSaving(true);
    const { error } = await supabase
      .from('phk_section4_settings')
      .update({
        section_title: settings.section_title,
        background_image_url: settings.background_image_url,
        overlay_opacity: settings.overlay_opacity,
        text_color: settings.text_color,
        accent_color: settings.accent_color,
        event_date_color: settings.event_date_color,
        intro_text: settings.intro_text,
        slots_text: settings.slots_text,
        location_text: settings.location_text,
        email_text: settings.email_text,
        mobile_text: settings.mobile_text,
        quote_text: settings.quote_text,
        featured_image_url: settings.featured_image_url,
        updated_at: new Date().toISOString(),
      })
      .eq('id', 1);

    if (error) {
      setMessage('Error saving settings');
    } else {
      setMessage('Settings saved successfully!');
      setTimeout(() => setMessage(''), 3000);
    }
    setSaving(false);
  };

  const addEvent = async () => {
    const newOrder = events.length + 1;
    const { data, error } = await supabase
      .from('phk_section4_events')
      .insert({ 
        date: 'New Date', 
        title: 'New Event Title',
        display_order: newOrder
      })
      .select()
      .single();

    if (!error && data) {
      setEvents([...events, data]);
      setMessage('Event added!');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const updateEvent = async (id: number, field: keyof Section4Event, value: string | number) => {
    const updated = events.map(e => e.id === id ? { ...e, [field]: value } : e);
    setEvents(updated);
    
    await supabase
      .from('phk_section4_events')
      .update({ [field]: value, updated_at: new Date().toISOString() })
      .eq('id', id);
  };

  const deleteEvent = async (id: number) => {
    if (!confirm('Delete this event?')) return;
    
    await supabase
      .from('phk_section4_events')
      .delete()
      .eq('id', id);
    
    setEvents(events.filter(e => e.id !== id));
    setMessage('Event deleted');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleFeaturedImageUpload = async (file: File) => {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      setMessage('Please select an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setMessage('Image must be less than 5MB');
      return;
    }

    setUploadingFeatured(true);
    setMessage('');

    try {
      // Generate unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `featured-${Date.now()}.${fileExt}`;
      const filePath = `section4/${fileName}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('phk-images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('phk-images')
        .getPublicUrl(filePath);

      // Update local state
      setSettings({ ...settings, featured_image_url: publicUrl });
      setMessage('Featured image uploaded successfully!');
      setTimeout(() => setMessage(''), 3000);

    } catch (err) {
      console.error('Upload error:', err);
      setMessage('Failed to upload featured image. Please try again.');
    } finally {
      setUploadingFeatured(false);
    }
  };

  const handleBackgroundImageUpload = async (file: File) => {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      setMessage('Please select an image file');
      return;
    }

    // Validate file size (max 10MB for background)
    if (file.size > 10 * 1024 * 1024) {
      setMessage('Background image must be less than 10MB');
      return;
    }

    setUploadingBackground(true);
    setMessage('');

    try {
      // Generate unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `background-${Date.now()}.${fileExt}`;
      const filePath = `section4/${fileName}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('phk-images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('phk-images')
        .getPublicUrl(filePath);

      // Update local state
      setSettings({ ...settings, background_image_url: publicUrl });
      setMessage('Background image uploaded successfully!');
      setTimeout(() => setMessage(''), 3000);

    } catch (err) {
      console.error('Upload error:', err);
      setMessage('Failed to upload background image. Please try again.');
    } finally {
      setUploadingBackground(false);
    }
  };

  if (loading) return <div className="p-8 text-gray-700">Loading...</div>;

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">PHK Section 4 - Calendar of Events</h1>
        
        {message && (
          <div className={`mb-4 p-3 rounded border ${
            message.includes('Error') || message.includes('Failed') 
              ? 'bg-red-50 text-red-700 border-red-200' 
              : 'bg-green-50 text-green-700 border-green-200'
          }`}>
            {message}
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-gray-200">
          {['settings', 'events', 'preview'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 capitalize transition-colors ${
                activeTab === tab 
                  ? 'border-b-2 border-blue-500 text-blue-600 font-medium' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab === 'events' ? 'Events' : tab}
            </button>
          ))}
        </div>

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Section Settings</h2>
            
            <div className="space-y-4">
              {/* Section Title */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Section Title</label>
                <input
                  type="text"
                  value={settings.section_title || 'Calendar of Events'}
                  onChange={(e) => setSettings({ ...settings, section_title: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              {/* Colors */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Text Color</label>
                  <input
                    type="color"
                    value={settings.text_color || '#F3E7D7'}
                    onChange={(e) => setSettings({ ...settings, text_color: e.target.value })}
                    className="w-full h-10 p-1 border border-gray-300 rounded cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Accent Color</label>
                  <input
                    type="color"
                    value={settings.accent_color || '#E7C9A1'}
                    onChange={(e) => setSettings({ ...settings, accent_color: e.target.value })}
                    className="w-full h-10 p-1 border border-gray-300 rounded cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Event Date Color</label>
                  <input
                    type="color"
                    value={settings.event_date_color || '#E7C9A1'}
                    onChange={(e) => setSettings({ ...settings, event_date_color: e.target.value })}
                    className="w-full h-10 p-1 border border-gray-300 rounded cursor-pointer"
                  />
                </div>
              </div>

              {/* Overlay Opacity */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Overlay Opacity: {Math.round((settings.overlay_opacity || 0.9) * 100)}%
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="1"
                  step="0.05"
                  value={settings.overlay_opacity || 0.9}
                  onChange={(e) => setSettings({ ...settings, overlay_opacity: parseFloat(e.target.value) })}
                  className="w-full"
                />
              </div>

              {/* Text Content */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Intro Text</label>
                <textarea
                  value={settings.intro_text || ''}
                  onChange={(e) => setSettings({ ...settings, intro_text: e.target.value })}
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Slots Text</label>
                <textarea
                  value={settings.slots_text || ''}
                  onChange={(e) => setSettings({ ...settings, slots_text: e.target.value })}
                  rows={2}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Location</label>
                  <input
                    type="text"
                    value={settings.location_text || ''}
                    onChange={(e) => setSettings({ ...settings, location_text: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
                  <input
                    type="text"
                    value={settings.email_text || ''}
                    onChange={(e) => setSettings({ ...settings, email_text: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Mobile</label>
                  <input
                    type="text"
                    value={settings.mobile_text || ''}
                    onChange={(e) => setSettings({ ...settings, mobile_text: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Quote</label>
                  <input
                    type="text"
                    value={settings.quote_text || ''}
                    onChange={(e) => setSettings({ ...settings, quote_text: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>

              {/* Featured Image Upload */}
              <div className="border-t pt-4 mt-4">
                <h3 className="text-lg font-medium mb-3 text-gray-800">Featured Image (Right Side)</h3>
                {settings.featured_image_url && (
                  <div className="mb-3">
                    <div className="relative w-full max-w-sm">
                      <Image
                        src={settings.featured_image_url}
                        alt="Featured"
                        width={300}
                        height={300}
                        className="rounded-lg border border-gray-200"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                      <button
                        onClick={() => {
                          if (confirm('Remove this image?')) {
                            setSettings({ ...settings, featured_image_url: '' });
                          }
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        handleFeaturedImageUpload(e.target.files[0]);
                      }
                      e.target.value = '';
                    }}
                    disabled={uploadingFeatured}
                    className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 disabled:opacity-50"
                  />
                  {uploadingFeatured && (
                    <span className="text-sm text-gray-500 flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Uploading...
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">Recommended size: 500x500px or square, max 5MB</p>
              </div>

              {/* Background Image Upload */}
              <div className="border-t pt-4 mt-4">
                <h3 className="text-lg font-medium mb-3 text-gray-800">Background Image</h3>
                {settings.background_image_url && (
                  <div className="mb-3">
                    <div className="relative w-full max-w-sm aspect-video">
                      <Image
                        src={settings.background_image_url}
                        alt="Background"
                        fill
                        className="object-cover rounded-lg border border-gray-200"
                        sizes="(max-width: 768px) 100vw, 500px"
                      />
                      <button
                        onClick={() => {
                          if (confirm('Remove this image?')) {
                            setSettings({ ...settings, background_image_url: '' });
                          }
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        handleBackgroundImageUpload(e.target.files[0]);
                      }
                      e.target.value = '';
                    }}
                    disabled={uploadingBackground}
                    className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 disabled:opacity-50"
                  />
                  {uploadingBackground && (
                    <span className="text-sm text-gray-500 flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Uploading...
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">Recommended: 1920x1080px or larger, max 10MB</p>
              </div>

              <button
                onClick={handleSaveSettings}
                disabled={saving}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Save Settings'}
              </button>
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Events</h2>
              <button onClick={addEvent} className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600">
                Add Event
              </button>
            </div>
            
            <div className="space-y-3">
              {events.map((event) => (
                <div key={event.id} className="flex gap-3 items-center p-3 border rounded bg-gray-50">
                  <input
                    type="text"
                    value={event.date}
                    onChange={(e) => updateEvent(event.id, 'date', e.target.value)}
                    className="w-40 p-2 border border-gray-300 rounded"
                    placeholder="Date"
                  />
                  <input
                    type="text"
                    value={event.title}
                    onChange={(e) => updateEvent(event.id, 'title', e.target.value)}
                    className="flex-1 p-2 border border-gray-300 rounded"
                    placeholder="Event title"
                  />
                  <input
                    type="number"
                    value={event.display_order}
                    onChange={(e) => updateEvent(event.id, 'display_order', parseInt(e.target.value))}
                    className="w-20 p-2 border border-gray-300 rounded"
                  />
                  <button
                    onClick={() => deleteEvent(event.id)}
                    className="px-3 py-2 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Preview Tab */}
        {activeTab === 'preview' && (
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Live Preview</h2>
            
            <div 
              className="rounded-lg p-4 relative overflow-hidden min-h-[400px]"
              style={{ 
                backgroundColor: '#1a1a1a',
                backgroundImage: settings.background_image_url ? `url(${settings.background_image_url})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, rgba(0,0,0,${0.4 * (settings.overlay_opacity || 0.9)}) 0%, rgba(0,0,0,${0.75 * (settings.overlay_opacity || 0.9)}) 25%, rgba(0,0,0,${0.9 * (settings.overlay_opacity || 0.9)}) 50%, rgba(0,0,0,${0.95 * (settings.overlay_opacity || 0.9)}) 100%)`,
                }}
              />

              <div className="relative z-10 p-6 text-center">
                <h3 className="text-2xl font-semibold italic" style={{ color: settings.accent_color || '#E7C9A1' }}>
                  {settings.section_title || 'Calendar of Events'}
                </h3>
                
                <div className="mt-4 space-y-2">
                  {events.slice(0, 5).map((event) => (
                    <p key={event.id} className="text-sm" style={{ color: settings.text_color || '#F3E7D7' }}>
                      <span style={{ color: settings.event_date_color || '#E7C9A1' }}>{event.date}</span> - {event.title}
                    </p>
                  ))}
                  {events.length > 5 && (
                    <p className="text-xs text-white/50">+ {events.length - 5} more events</p>
                  )}
                </div>

                {settings.featured_image_url && (
                  <div className="mt-4 flex justify-center">
                    <Image
                      src={settings.featured_image_url}
                      alt="Preview"
                      width={150}
                      height={150}
                      className="rounded-lg shadow-lg"
                      sizes="150px"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}