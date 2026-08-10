'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/app/lib/supabase/client';

export default function TestSupabase() {
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Test settings table
        const { data: settingsData, error: settingsError } = await supabase
          .from('phk_section4_settings')
          .select('*')
          .eq('id', 1)
          .single();

        if (settingsError) throw settingsError;

        // Test events table
        const { data: eventsData, error: eventsError } = await supabase
          .from('phk_section4_events')
          .select('*')
          .order('display_order', { ascending: true });

        if (eventsError) throw eventsError;

        setResult({
          settings: settingsData,
          events: eventsData,
        });
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    testConnection();
  }, []);

  if (loading) return <div className="p-8">Testing connection...</div>;

  if (error) {
    return (
      <div className="p-8">
        <h2 className="text-red-600 font-bold">Error:</h2>
        <p className="text-red-500">{error}</p>
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p className="text-sm text-gray-600">Make sure you've run the SQL script to create the tables.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h2 className="text-green-600 font-bold">✅ Connection Successful!</h2>
      <div className="mt-4">
        <h3 className="font-semibold">Settings:</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          {JSON.stringify(result?.settings, null, 2)}
        </pre>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Events ({result?.events?.length}):</h3>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          {JSON.stringify(result?.events, null, 2)}
        </pre>
      </div>
    </div>
  );
}